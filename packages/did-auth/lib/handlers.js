/* eslint-disable object-curly-newline */
const get = require('lodash.get');
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const { bytesToHex } = require('@arcblock/forge-util');
const { toAddress } = require('@arcblock/did');
// eslint-disable-next-line
const debug = require('debug')(`${require('../package.json').name}:handlers`);

const sha3 = Mcrypto.Hasher.SHA3.hash256;
const getLocale = req => (req.acceptsLanguages('en-US', 'zh-CN') || 'en-US').split('-').shift();
const getDidCheckSum = did => sha3(did).slice(2, 8);
const noop = () => {};

const errors = {
  tokenMissing: {
    en: 'Token is required to check status',
    zh: '缺少令牌参数',
  },
  didMismatch: {
    en: 'Login user and wallet user mismatch, please relogin and try again',
    zh: '登录用户和扫码用户不匹配，为保障安全，请重新登录应用',
  },
  token404: {
    en: 'Token not found',
    zh: '令牌不合法',
  },
  didMissing: {
    en: 'userDid is required to start auth',
    zh: 'userDid 参数缺失',
  },
  pkMissing: {
    en: 'userPk is required to start auth',
    zh: 'userPk 参数缺失',
  },
};

const STATUS_CREATED = 'created';
const STATUS_SUCCEED = 'succeed';
const STATUS_ERROR = 'error';
const STATUS_SCANNED = 'scanned';
const STATUS_FORBIDDEN = 'forbidden';

module.exports = class Handlers {
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.tokenStorage - function to generate action token
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   */
  constructor({ tokenGenerator, tokenStorage, authenticator, onPreAuth = noop }) {
    if (typeof tokenGenerator !== 'function') {
      throw new Error('tokenGenerator must be a function');
    }

    this.authenticator = authenticator;
    this.generator = tokenGenerator;
    this.storage = tokenStorage;
    if (typeof onPreAuth === 'function') {
      this.onPreAuth = onPreAuth;
    } else {
      this.onPreAuth = noop;
    }
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
   * @param {string} [config.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   * @param {string} [config.checksumKey='_cs_'] - query param key for `checksum`
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
    sessionDidKey = 'user.did',
    tokenKey = '_t_',
    checksumKey = '_cs_',
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
        const token = sha3(this.generator({ req, action, prefix }))
          .replace(/^0x/, '')
          .slice(0, 8);
        await this.storage.create(token, STATUS_CREATED);
        debug('generate token', { action, prefix, token });

        const sessionDid = get(req, sessionDidKey);
        const checksum = sessionDid ? getDidCheckSum(sessionDid) : '';
        res.json({
          token,
          url: this.authenticator.uri({
            token,
            pathname,
            query: Object.assign({ [checksumKey]: checksum }, req.query),
          }),
        });
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'generate-token', err });
      }
    });

    // 2. WEB: check for token status
    app.get(`${prefix}/${action}/status`, async (req, res) => {
      try {
        const locale = getLocale(req);
        const { [tokenKey]: token } = req.query;
        if (!token) {
          res.status(400).json({ error: errors.tokenMissing[locale] });
          return;
        }

        const store = await this.storage.read(token);
        if (store) {
          if (store.status === STATUS_FORBIDDEN) {
            res.status(403).json({ error: errors.didMismatch[locale] });
            return;
          }

          // Force client logout if the did of session user and wallet user mismatch
          // Set token status to forbidden, so that wallet auth request will be rejected
          const sessionDid = get(req, sessionDidKey);
          if (sessionDid && store.did && sessionDid !== store.did) {
            debug('did mismatch', { sessionDid, store });
            res.status(403).json({ error: errors.didMismatch[locale] });
            await this.storage.update(token, { status: STATUS_FORBIDDEN });
            return;
          }

          if (store.status === STATUS_SUCCEED) {
            await this.storage.delete(token);
            await onComplete({
              req,
              action,
              token,
              userDid: store.did,
              userAddress: toAddress(store.did),
              extraParams: Object.assign({ locale }, req.query),
            });
          }

          res.status(200).json(store);
        } else {
          res.status(404).json({ error: errors.token404[locale] });
        }
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'check-token-status', err });
      }
    });

    // 3. WEB: to expire old token
    app.get(`${prefix}/${action}/timeout`, async (req, res) => {
      try {
        const locale = getLocale(req);
        const { [tokenKey]: token } = req.query;
        if (!token) {
          res.status(400).json({ error: errors.tokenMissing[locale] });
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
    // eslint-disable-next-line consistent-return
    app.get(pathname, async (req, res) => {
      const locale = getLocale(req);
      const { userDid, userPk, [tokenKey]: token, [checksumKey]: checksum } = req.query;
      if (!userDid) {
        return res.json({ error: errors.didMissing[locale] });
      }
      if (!userPk) {
        return res.json({ error: errors.pkMissing[locale] });
      }

      debug('sign.input', req.query);
      const store = await this.storage.read(token);

      // check userDid mismatch
      const didChecksum = getDidCheckSum(userDid);
      if (didChecksum && checksum && didChecksum !== checksum) {
        await this.storage.update(token, { status: STATUS_FORBIDDEN });
        return res.json({ error: errors.didMismatch[locale] });
      }

      try {
        if (token && store && store.status === STATUS_FORBIDDEN) {
          return res.json({ error: errors.didMismatch[locale] });
        }

        if (store) {
          await this.storage.update(token, { did: userDid, status: STATUS_SCANNED });
        }

        const authInfo = await this.authenticator.sign({
          token,
          userDid,
          userPk,
          claims,
          pathname,
          extraParams: Object.assign(
            { locale },
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
        if (store) {
          await this.storage.update(token, { did: userDid, status: STATUS_ERROR });
        }
        res.json({ error: err.message });
        onError({ stage: 'auth-response', err });
      }
    });

    // 5. Wallet: submit auth response
    // eslint-disable-next-line consistent-return
    app.post(pathname, async (req, res) => {
      const params = Object.assign({}, req.body, req.query);
      debug('verify.input', params);
      const token = params[tokenKey];
      if (!token) {
        debug('verify.input.warn', 'action token not found in input param');
      }
      const locale = getLocale(req);
      const store = token ? await this.storage.read(token) : null;

      try {
        // eslint-disable-next-line no-shadow
        const { userDid, claims } = await this.authenticator.verify(params, locale);
        claims.forEach(x => {
          if (x.type === 'signature') {
            x.sigHex = bytesToHex(multibase.decode(x.sig));
          }
        });
        debug('verify', { userDid, token, claims });

        const cbParams = {
          req,
          userDid,
          token,
          claims,
          userAddress: toAddress(userDid),
          storage: this.storage,
          extraParams: Object.assign({ locale, action }, req.query),
        };

        if (token && store && store.status === STATUS_FORBIDDEN) {
          return res.json({ error: errors.didMismatch[locale] });
        }

        // onPreAuth: error thrown from this callback will halt the auth process
        await this.onPreAuth(cbParams);

        // onAuth: send the tx/do the transfer, etc.
        const result = await onAuth(cbParams);

        if (token) {
          if (store) {
            await this.storage.update(token, { status: STATUS_SUCCEED });
          } else {
            return res.json({ error: errors.token404[locale] });
          }
        }

        res.json(Object.assign({}, result || {}, { status: 0 }));
      } catch (err) {
        if (store) {
          debug('verify.error', token);
          await this.storage.update(token, { status: STATUS_ERROR });
        }

        res.json({ error: err.message });
        onError({ stage: 'auth-request', err });
      }
    });
  }
};
