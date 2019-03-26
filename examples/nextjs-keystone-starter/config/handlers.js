/* eslint-disable object-curly-newline */
const Mcrypto = require('@arcblock/mcrypto');
const debug = require('debug')('DIDAuth:Handlers');

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
    onAuthSuccess,
    onStatusCheck,
    // eslint-disable-next-line no-console
    onError = console.log,
    prefix = '/api/did',
  }) {
    if (typeof onAuthSuccess !== 'function') {
      throw new Error('onAuthSuccess callback is required to attach did auth handlers');
    }
    if (typeof onStatusCheck !== 'function') {
      throw new Error('onStatusCheck callback is required to attach did auth handlers');
    }

    // pathname for abt wallet, which will be included for authenticator signing
    const pathname = `${prefix}/${action}/auth`;

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
            await onStatusCheck(req, session);
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
      try {
        const { userDid: did, token } = req.query;
        const session = await this.storage.read(token);
        if (session) {
          await this.storage.update(token, { did, status: 'scanned' });
        }

        const authInfo = await this.authenticator.sign({ token, did, claims, pathname });
        res.json(authInfo);
      } catch (err) {
        res.json({ error: err.message });
        onError(err);
      }
    });

    // 4. Wallet: request login
    app.post(pathname, async (req, res) => {
      try {
        const params = Object.assign({}, req.body, req.query);
        // eslint-disable-next-line no-shadow
        const { did, token, claims } = await this.authenticator.verify(params);
        debug('verify auth', { did, token, claims });
        await onAuthSuccess({ did, token, claims });

        if (token) {
          const exist = await this.storage.exist(token, did);
          if (exist) {
            await this.storage.update(token, { status: 'succeed' });
          } else {
            // TODO: The request must be invalid
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
