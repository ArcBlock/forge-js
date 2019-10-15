/* eslint-disable object-curly-newline */
const get = require('lodash.get');
const Mcrypto = require('@arcblock/mcrypto');
const { toAddress } = require('@arcblock/did');
// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:handlers:did`);

const sha3 = Mcrypto.Hasher.SHA3.hash256;
const getLocale = req => (req.acceptsLanguages('en-US', 'zh-CN') || 'en-US').split('-').shift();
const getDidCheckSum = did => sha3(toAddress(did)).slice(2, 8);

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
    en: 'Token not found or expired',
    zh: '令牌不存在或已过期',
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

module.exports = function createHandlers({
  action,
  pathname,
  claims,
  onPreAuth,
  onAuth,
  onComplete,
  onExpire,
  onError,
  sessionDidKey,
  tokenKey,
  checksumKey,
  tokenGenerator,
  tokenStorage,
  authenticator,
}) {
  // if user want to do multiple-step did-auth
  const steps = Array.isArray(claims) ? claims : [claims];

  const generateActionToken = async (req, res) => {
    try {
      const token = sha3(tokenGenerator({ req, action, pathname }))
        .replace(/^0x/, '')
        .slice(0, 8);

      await tokenStorage.create(token, STATUS_CREATED);
      // Always set currentStep to 0 when generate a new token
      await tokenStorage.update(token, { currentStep: 0 });
      debug('generate token', { action, pathname, token });

      const sessionDid = get(req, sessionDidKey);
      const checksum = sessionDid ? getDidCheckSum(sessionDid) : '';
      res.json({
        token,
        url: authenticator.uri({
          token,
          pathname,
          query: Object.assign({ [checksumKey]: checksum }, req.query),
        }),
      });
    } catch (err) {
      res.json({ error: err.message });
      onError({ stage: 'generate-token', err });
    }
  };

  const checkActionToken = async (req, res) => {
    try {
      const { locale, token, store } = req.context;
      if (!token) {
        res.status(400).json({ error: errors.tokenMissing[locale] });
        return;
      }

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
          await tokenStorage.update(token, { status: STATUS_FORBIDDEN });
          return;
        }

        if (store.status === STATUS_SUCCEED) {
          await tokenStorage.delete(token);
          await onComplete({
            req,
            action,
            token,
            userDid: toAddress(store.did),
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
  };

  const expireActionToken = async (req, res) => {
    try {
      const { locale, token, store } = req.context;
      if (!token) {
        res.status(400).json({ error: errors.tokenMissing[locale] });
        return;
      }

      onExpire({ token, status: 'expired' });

      // We do not delete tokens that are scanned by wallet since it will cause confusing
      if (store && store.status !== STATUS_SCANNED) {
        await tokenStorage.delete(token);
      }
      res.status(200).json({ token });
    } catch (err) {
      res.json({ error: err.message });
      onError({ stage: 'token-timeout', err });
    }
  };

  // eslint-disable-next-line consistent-return
  const onAuthRequest = async (req, res) => {
    const { locale, token, store, params } = req.context;
    const { userDid, userPk, [checksumKey]: checksum } = params;

    if (!userDid) {
      return res.json({ error: errors.didMissing[locale] });
    }
    if (!userPk) {
      return res.json({ error: errors.pkMissing[locale] });
    }

    debug('sign.input', params);

    // check userDid mismatch
    const didChecksum = getDidCheckSum(userDid);
    if (didChecksum && checksum && didChecksum !== checksum) {
      await tokenStorage.update(token, { status: STATUS_FORBIDDEN });
      return res.json({ error: errors.didMismatch[locale] });
    }

    try {
      if (token && store && store.status === STATUS_FORBIDDEN) {
        return res.json({ error: errors.didMismatch[locale] });
      }

      if (store) {
        await tokenStorage.update(token, { did: toAddress(userDid), status: STATUS_SCANNED });
      }

      const authInfo = await authenticator.sign({
        token,
        userDid: toAddress(userDid),
        userPk,
        claims: store ? steps[store.currentStep] : steps[0],
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
        await tokenStorage.update(token, {
          did: toAddress(userDid),
          status: STATUS_ERROR,
          error: err.message,
        });
      }
      res.json({ error: err.message });
      onError({ stage: 'auth-response', err });
    }
  };

  // eslint-disable-next-line consistent-return
  const onAuthResponse = async (req, res) => {
    const { locale, token, store, params } = req.context;
    debug('verify.input', params);

    try {
      const { userDid, userPk, claims: claimResponse } = await authenticator.verify(params, locale);
      debug('verify', { userDid, token, claims: claimResponse });

      const cbParams = {
        step: store ? store.currentStep : 0,
        req,
        userDid: toAddress(userDid),
        userPk,
        token,
        claims: claimResponse,
        storage: tokenStorage,
        extraParams: Object.assign({ locale, action }, req.query),
      };

      if (token && store && store.status === STATUS_FORBIDDEN) {
        return res.json({ error: errors.didMismatch[locale] });
      }

      // onPreAuth: error thrown from this callback will halt the auth process
      await onPreAuth(cbParams);

      // onAuth: send the tx/do the transfer, etc.
      const result = await onAuth(cbParams);

      if (token) {
        if (store) {
          // Only return if we are walked through all steps
          if (store.currentStep === steps.length - 1) {
            await tokenStorage.update(token, { status: STATUS_SUCCEED });
            return res.json(Object.assign({}, result || {}, { status: 0 }));
          }

          // Move to next step
          await tokenStorage.update(token, { currentStep: store.currentStep + 1 });
          const authInfo = await authenticator.sign({
            token,
            userDid: toAddress(userDid),
            userPk,
            claims: steps[store.currentStep + 1],
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

          return res.json(authInfo);
        }

        // If we have a invalid token
        return res.json({ error: errors.token404[locale] });
      }

      // If we have no token
      res.json(Object.assign({}, result || {}, { status: 0 }));
    } catch (err) {
      if (store) {
        debug('verify.error', token);
        await tokenStorage.update(token, { status: STATUS_ERROR, error: err.message });
      }

      res.json({ error: err.message });
      onError({ stage: 'auth-request', err });
    }
  };

  const ensureContext = async (req, res, next) => {
    const params = Object.assign({}, req.body, req.query);
    const token = params[tokenKey];
    const locale = getLocale(req);
    const store = token ? await tokenStorage.read(token) : null;

    req.context = { locale, token, params, store };
    return next();
  };

  return {
    generateActionToken,
    expireActionToken,
    checkActionToken,
    onAuthRequest,
    onAuthResponse,
    ensureContext,
  };
};
