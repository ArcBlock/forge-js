/* eslint-disable object-curly-newline */
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const { bytesToHex } = require('@arcblock/forge-util');
const { toAddress } = require('@arcblock/did');
const debug = require('debug')(`${require('../package.json').name}:handlers`);

const sha3 = Mcrypto.Hasher.SHA3.hash256;

module.exports = class Handlers {
  constructor({ tokenGenerator, tokenStorage, authenticator }) {
    if (typeof tokenGenerator !== 'function') {
      throw new Error('tokenGenerator must be a function');
    }

    this.authenticator = authenticator;
    this.generator = tokenGenerator;
    this.storage = tokenStorage;
  }

  /**
   * Attach routes and handlers for authenticator
   *
   * @param {object} { app, action, claims, prefix = '/api' }
   */
  attach({
    app,
    action,
    claims,
    onAuth,
    onComplete,
    // eslint-disable-next-line no-console
    onError = console.error,
    prefix = '/api/did',
  }) {
    if (typeof onAuth !== 'function') {
      throw new Error('onAuth callback is required to attach did auth handlers');
    }
    if (typeof onComplete !== 'function') {
      throw new Error('onComplete callback is required to attach did auth handlers');
    }

    // pathname for abt wallet, which will be included for authenticator signing
    const pathname = `${prefix}/${action}/auth`;
    debug('attach routes', { action, prefix, pathname });

    // Now express app have route handlers attached to the following url
    // - `GET /api/did/{action}/token` create new token
    // - `GET /api/did/{action}/status` check for token status
    // - `GET /api/did/{action}/auth` create auth response
    // - `POST /api/did/{action}/auth` process payment request

    // 1. WEB: to generate new token
    app.get(`${prefix}/${action}/token`, async (req, res) => {
      try {
        const token = sha3(this.generator(req, { action, prefix })).replace(/^0x/, '');
        await this.storage.create(token, 'created');
        debug('generate token', { action, prefix, token });

        res.json({
          token,
          url: this.authenticator.uri({ token, pathname }),
        });
      } catch (err) {
        res.json({ error: err.message });
        onError(err);
      }
    });

    // 2. WEB: check for token status
    app.get(`${prefix}/${action}/status`, async (req, res) => {
      try {
        const { token } = req.query;
        if (!token) {
          res.status(400).json({ error: 'token is required to check status' });
          return;
        }

        const session = await this.storage.read(token);
        if (session) {
          if (session.status === 'succeed') {
            await onComplete(req, session);
          }

          res.status(200).json(session);
        } else {
          res.status(404).json({ error: 'token not found' });
        }
      } catch (err) {
        res.json({ error: err.message });
        onError(err);
      }
    });

    // 3. Wallet: fetch auth request
    app.get(pathname, async (req, res) => {
      const { userDid: did, userPk, token } = req.query;
      if (!did) {
        return res.json({ error: 'userDid is required to start auth' });
      }
      if (!userPk) {
        return res.json({ error: 'userPk is required to start auth' });
      }

      debug('sign.input', req.query);
      const session = await this.storage.read(token);
      try {
        if (session) {
          await this.storage.update(token, { did, status: 'scanned' });
        }

        const authInfo = await this.authenticator.sign({ token, did, userPk, claims, pathname });
        debug('sign', authInfo);
        res.json(authInfo);
      } catch (err) {
        if (session) {
          await this.storage.update(token, { did, status: 'error' });
        }
        res.json({ error: err.message });
        onError(err);
      }
    });

    // 4. Wallet: submit auth response
    app.post(pathname, async (req, res) => {
      try {
        const params = Object.assign({}, req.body, req.query);
        debug('verify.input', params);
        if (!params.token) {
          debug('verify.input.warn', 'action token not found in input param');
        }

        // eslint-disable-next-line no-shadow
        const { did, token, claims } = await this.authenticator.verify(params);
        claims.forEach(x => {
          if (x.type === 'signature') {
            x.sigHex = bytesToHex(multibase.decode(x.sig));
          }
        });

        debug('verify', { did, token, claims });
        await onAuth({ did, userAddress: toAddress(did), token, claims });

        if (token) {
          const exist = await this.storage.exist(token, did);
          if (exist) {
            await this.storage.update(token, { status: 'succeed' });
          } else {
            return res.json({ error: 'Bad request, token is invalid' });
          }
        }

        res.json({ status: 0 });
      } catch (err) {
        res.json({ error: err.message });
        onError(err);
      }
    });
  }
};
