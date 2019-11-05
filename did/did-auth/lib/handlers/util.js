/* eslint-disable object-curly-newline */
const get = require('lodash.get');
const Mcrypto = require('@arcblock/mcrypto');
const { toAddress, isValid } = require('@arcblock/did');
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
  authPrincipal,
}) {
  // if user want to do multiple-step did-auth
  const steps = Array.isArray(claims) ? claims : [claims];

  // Prepend auth principal claim by default
  if (authPrincipal) {
    // If auth principal is provided as a did
    const target = isValid(authPrincipal.toString()) ? authPrincipal.toString() : '';
    // If auth principal is provided as a string
    const description = !isValid(authPrincipal.toString())
      ? authPrincipal.toString()
      : 'Please select authentication principal';
    steps.unshift({
      authPrincipal: () => ({
        description,
        target,
      }),
    });
  }

  const createExtraParams = (locale, query) =>
    Object.assign(
      { locale, action },
      Object.keys(query)
        .filter(x => !['userDid', 'userPk', 'token'].includes(x))
        .reduce((obj, x) => {
          obj[x] = query[x];
          return obj;
        }, {})
    );

  // For web app
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

  // For web app
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
            userDid: store.did,
            extraParams: createExtraParams(locale, req.query),
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

  // For web app
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
    const { locale, token, store, params, isAuthPrincipalStep } = req.context;
    const { userDid, userPk, [checksumKey]: checksum } = params;

    // Only check userDid and userPk if we have done auth principal
    if (isAuthPrincipalStep === false) {
      if (!userDid) {
        return res.json({ error: errors.didMissing[locale] });
      }
      if (!userPk) {
        return res.json({ error: errors.pkMissing[locale] });
      }

      // check userDid mismatch
      const didChecksum = getDidCheckSum(userDid);
      if (didChecksum && checksum && didChecksum !== checksum) {
        await tokenStorage.update(token, { status: STATUS_FORBIDDEN });
        return res.json({ error: errors.didMismatch[locale] });
      }
    }

    try {
      if (store && store.status === STATUS_FORBIDDEN) {
        return res.json({ error: errors.didMismatch[locale] });
      }

      if (store) {
        await tokenStorage.update(token, { did: userDid, status: STATUS_SCANNED });
      }

      res.jsonp(
        await authenticator.sign({
          token,
          userDid,
          userPk,
          claims: store ? steps[store.currentStep] : steps[0],
          pathname,
          extraParams: createExtraParams(locale, req.query),
        })
      );
    } catch (err) {
      if (store) {
        await tokenStorage.update(token, {
          did: userDid,
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

    try {
      const { userDid, userPk, claims: claimResponse } = await authenticator.verify(params, locale);
      debug('verify', { userDid, token, claims: claimResponse });

      const cbParams = {
        step: store ? store.currentStep : 0,
        req,
        userDid,
        userPk,
        token,
        claims: claimResponse,
        storage: tokenStorage,
        extraParams: createExtraParams(locale, req.query),
      };

      if (token && store && store.status === STATUS_FORBIDDEN) {
        return res.json({ error: errors.didMismatch[locale] });
      }

      // onPreAuth: error thrown from this callback will halt the auth process
      await onPreAuth(cbParams);

      if (token) {
        if (store) {
          // Only return if we are walked through all steps
          if (store.currentStep === steps.length - 1) {
            // onAuth: send the tx/do the transfer, etc.
            const result = await onAuth(cbParams);
            await tokenStorage.update(token, { status: STATUS_SUCCEED });

            // TODO: atomic-swap in wallet does not support signed response
            if (req.swap) {
              return res.json(Object.assign({}, result || {}));
            }

            return res.json(Object.assign({}, result || {}));
          }

          // Move to next step
          await tokenStorage.update(token, { currentStep: store.currentStep + 1 });
          return res.jsonp(
            await authenticator.sign({
              token,
              userDid,
              userPk,
              claims: steps[store.currentStep + 1],
              pathname,
              extraParams: createExtraParams(locale, req.query),
            })
          );
        }

        // If we have a invalid token
        return res.json({ error: errors.token404[locale] });
      }

      // If we have no token
      const result = await onAuth(cbParams);
      res.json(Object.assign({}, result || {}));
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

    // If we are doing our first step
    let isAuthPrincipalStep = false;
    if (store && authPrincipal) {
      isAuthPrincipalStep = store.currentStep === 0;
    }

    req.context = { locale, token, params, store, isAuthPrincipalStep };
    return next();
  };

  const ensureSignedJson = (isSwap = false) => (req, res, next) => {
    if (isSwap === false && req.ensureSignedJson !== undefined) {
      req.ensureSignedJson = true;
      const originJson = res.json;
      res.json = data => originJson(authenticator.signResponse(data));
    }

    next();
  };

  const ensureRequester = requester => (req, res, next) => {
    req.requester = requester;
    next();
  };

  return {
    generateActionToken,
    expireActionToken,
    checkActionToken,
    onAuthRequest,
    onAuthResponse,
    ensureContext,
    ensureRequester,
    ensureSignedJson,
    createExtraParams,
  };
};
