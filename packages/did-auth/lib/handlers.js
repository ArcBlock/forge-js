/* eslint-disable object-curly-newline */
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const { bytesToHex } = require('@arcblock/forge-util');
const { toAddress } = require('@arcblock/did');
const debug = require('debug')(`${require('../package.json').name}:handlers`);

const sha3 = Mcrypto.Hasher.SHA3.hash256;
const getLocale = req => (req.acceptsLanguages('en-US', 'zh-CN') || 'en-US').split('-').shift();
const noop = () => {};

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
   * @param {object} config - attach config { app, action, claims, prefix = '/api' }
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {string} [config.action='/api/did'] - url prefix for this group endpoints
   * @return void
   */
  attach({
    app,
    action,
    claims,
    onAuth,
    onComplete = noop,
    onExpire = noop,
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
    // - `GET /api/did/{action}/timeout` expire a token
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
          url: this.authenticator.uri({ token, pathname, query: req.query }),
        });
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'generate-token', err });
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
            await this.storage.delete(token);
            await onComplete({
              req,
              did: session.did,
              userAddress: toAddress(session.did),
              token,
              extraParams: Object.assign({ locale: getLocale(req) }, req.query),
            });
          }

          res.status(200).json(session);
        } else {
          res.status(404).json({ error: 'token not found' });
        }
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'check-token-status', err });
      }
    });

    // 3. WEB: to expire old token
    app.get(`${prefix}/${action}/timeout`, async (req, res) => {
      try {
        const { token } = req.query;
        if (!token) {
          res.status(400).json({ error: 'token is required to mark as expired' });
          return;
        }

        onExpire({ token, status: 'expired' });
        await this.storage.delete(token);
        res.status(200).json({ token });
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'token-timeout', err });
      }
    });

    // 4. Wallet: fetch auth request
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

        const authInfo = await this.authenticator.sign({
          token,
          did,
          userPk,
          claims,
          pathname,
          extraParams: Object.assign(
            { locale: getLocale(req) },
            Object.keys(req.query)
              .filter(x => !['userDid', 'userPk', 'token'].includes(x))
              .reduce((obj, x) => {
                obj[x] = req.query[x];
                return obj;
              }, {})
          ),
        });

        debug('sign.result', authInfo);
        res.json(authInfo);
      } catch (err) {
        if (session) {
          await this.storage.update(token, { did, status: 'error' });
        }
        res.json({ error: err.message });
        onError({ stage: 'auth-response', err });
      }
    });

    // 5. Wallet: submit auth response
    app.post(pathname, async (req, res) => {
      const params = Object.assign({}, req.body, req.query);
      debug('verify.input', params);
      if (!params.token) {
        debug('verify.input.warn', 'action token not found in input param');
      }
      const token = params.token;
      const session = token ? await this.storage.read(token) : null;

      try {
        // eslint-disable-next-line no-shadow
        const { did, claims } = await this.authenticator.verify(params);
        claims.forEach(x => {
          if (x.type === 'signature') {
            x.sigHex = bytesToHex(multibase.decode(x.sig));
          }
        });

        debug('verify', { did, token, claims });
        await onAuth({
          did,
          userAddress: toAddress(did),
          token,
          claims,
          storage: this.storage,
          extraParams: Object.assign({ locale: getLocale(req) }, req.query),
        });

        if (token) {
          if (session) {
            await this.storage.update(token, { status: 'succeed' });
          } else {
            return res.json({ error: 'Bad request, token is invalid' });
          }
        }

        res.json({ status: 0 });
      } catch (err) {
        if (session) {
          debug('verify.error', token);
          await this.storage.update(token, { status: 'error' });
        }

        res.json({ error: err.message });
        onError({ stage: 'auth-request', err });
      }
    });
  }
};
