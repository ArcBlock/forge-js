/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-curly-newline */
const get = require('lodash.get');
const Mcrypto = require('@arcblock/mcrypto');
const { toAddress, isValid: isValidDid } = require('@arcblock/did');
// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:handlers:did`);

const sha3 = Mcrypto.Hasher.SHA3.hash256;
const getLocale = req => (req.acceptsLanguages('en-US', 'zh-CN') || 'en-US').split('-').shift();
const getDidCheckSum = did => sha3(toAddress(did)).slice(2, 8);
const noop = () => ({});
const noTouch = x => x;

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

const parseWalletUA = (userAgent = '') => {
  const ua = userAgent.toLocaleLowerCase();
  let os = '';
  let version = '';
  if (ua.indexOf('android') > -1) {
    os = 'android';
  }

  if (ua.indexOf('darwin') > -1) {
    os = 'ios';
  }

  const match = ua.split(/\s+/).find(x => x.startsWith('arcwallet'));
  if (match) {
    const tmp = match.split('/');
    if (tmp.length > 1) {
      version = tmp[1];
    }
  }

  return { os, version };
};

module.exports = function createHandlers({
  action,
  pathname,
  claims,
  onPreAuth,
  onAuth,
  onComplete,
  onExpire,
  onError,
  tokenGenerator,
  tokenStorage,
  authenticator,
  authPrincipal,
  getSignParams = noop,
  getPathName = noTouch,
  options,
}) {
  const { sessionDidKey, tokenKey, checksumKey } = options;

  // if user want to do multiple-step did-auth
  const steps = Array.isArray(claims) ? claims : [claims];
  if (steps.some(x => x.authPrincipal)) {
    // eslint-disable-next-line no-console
    console.warn('Setting authPrincipal in claims object is not recommended, and may break things');
  }

  let shouldCheckUser = true;

  // Prepend auth principal claim by default
  if (authPrincipal) {
    let target = '';
    let description = 'Please select authentication principal';
    let chainInfo;
    let targetType;
    let declareParams;

    if (typeof authPrincipal === 'string') {
      if (isValidDid(authPrincipal)) {
        // If auth principal is provided as a did
        target = authPrincipal;
      } else {
        // If auth principal is provided as a string
        description = authPrincipal;
      }
    }
    if (typeof authPrincipal === 'object') {
      target = get(authPrincipal, 'target', target);
      description = get(authPrincipal, 'description', description);
      targetType = get(authPrincipal, 'targetType', targetType);
      declareParams = get(authPrincipal, 'declareParams', declareParams);

      // If provided a chainInfo
      if (authPrincipal.chainInfo && authenticator._isValidChainInfo(authPrincipal.chainInfo)) {
        chainInfo = authPrincipal.chainInfo;
      }
      if (authenticator._isValidChainInfo(authPrincipal)) {
        chainInfo = authPrincipal;
      }
    }

    if (target || (targetType && targetType.role)) {
      shouldCheckUser = false;
    }

    steps.unshift({
      authPrincipal: () => ({
        description,
        target,
        chainInfo,
        targetType,
        declareParams,
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

  const onProcessError = ({ req, res, stage, err }) => {
    const { token, store } = req.context || {};
    if (store) {
      debug('error', token);
      tokenStorage.update(token, { status: STATUS_ERROR, error: err.message });
    }

    res.json({ error: err.message });
    onError({ stage, err });
  };

  // For web app
  const generateActionToken = async (req, res) => {
    try {
      const token = sha3(tokenGenerator({ req, action, pathname }))
        .replace(/^0x/, '')
        .slice(0, 8);

      // Always set currentStep to 0 when generate a new token
      await tokenStorage.create(token, STATUS_CREATED);
      await tokenStorage.update(token, { currentStep: 0 });

      const sessionDid = get(req, sessionDidKey);
      const checksum = sessionDid ? getDidCheckSum(sessionDid) : '';
      debug('generate token', { action, pathname, token, sessionDid, checksum });

      res.json({
        token,
        url: authenticator.uri({
          token,
          pathname: getPathName(pathname, req),
          query: Object.assign({ [checksumKey]: checksum }, req.query),
        }),
      });
    } catch (err) {
      onProcessError({ req, res, stage: 'generate-token', err });
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
        if (shouldCheckUser) {
          const sessionDid = get(req, sessionDidKey);
          if (sessionDid && store.did && sessionDid !== store.did) {
            debug('did mismatch', { sessionDid, store });
            res.status(403).json({ error: errors.didMismatch[locale] });
            await tokenStorage.update(token, { status: STATUS_FORBIDDEN });
            return;
          }
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
      onProcessError({ req, res, stage: 'check-token-status', err });
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
      onProcessError({ req, res, stage: 'mark-token-timeout', err });
    }
  };

  // Only check userDid and userPk if we have done auth principal
  const checkUser = async ({ context, params, userDid, userPk }) => {
    if (shouldCheckUser === false) {
      return false;
    }

    const { locale, token, isAuthPrincipalStep } = context;
    const { [checksumKey]: checksum } = params;

    // Only check userDid and userPk if we have done auth principal
    if (isAuthPrincipalStep === false) {
      if (!userDid) {
        return errors.didMissing[locale];
      }
      if (!userPk) {
        return errors.pkMissing[locale];
      }

      // check userDid mismatch
      const didChecksum = getDidCheckSum(userDid);
      debug('check did checksum', { session: checksum, current: didChecksum });
      if (didChecksum && checksum && didChecksum !== checksum) {
        await tokenStorage.update(token, { status: STATUS_FORBIDDEN });
        return errors.didMismatch[locale];
      }
    }

    return false;
  };

  // eslint-disable-next-line consistent-return
  const onAuthRequest = async (req, res) => {
    const { locale, token, store, params, wallet } = req.context;
    const { userDid, userPk } = params;

    debug('onAuthRequest.context', req.context);

    const error = await checkUser({ context: req.context, params, userDid, userPk });
    if (error) {
      return res.json({ error });
    }

    try {
      if (store && store.status === STATUS_FORBIDDEN) {
        return res.json({ error: errors.didMismatch[locale] });
      }

      if (store && store.status !== STATUS_SCANNED) {
        await tokenStorage.update(token, { did: userDid, status: STATUS_SCANNED });
      }

      const signParams = await getSignParams(req);
      res.jsonp(
        await authenticator.sign(
          Object.assign(signParams, {
            token,
            userDid,
            userPk,
            walletVersion: wallet.version,
            walletOS: wallet.os,
            claims: store ? steps[store.currentStep] : steps[0],
            pathname: getPathName(pathname, req),
            extraParams: createExtraParams(locale, req.query),
          })
        )
      );
    } catch (err) {
      onProcessError({ req, res, stage: 'send-auth-claim', err });
    }
  };

  // eslint-disable-next-line consistent-return
  const onAuthResponse = async (req, res) => {
    const { locale, token, store, params, wallet } = req.context;

    try {
      const { userDid, userPk, claims: claimResponse } = await authenticator.verify(params, locale);
      debug('onAuthResponse.verify', { userDid, token, claims: claimResponse });

      // Since we can only get userDid after authPrincipal
      // So we update userDid in the token storage here
      // But we just need to update the did once
      if (!store.did) {
        await tokenStorage.update(token, { did: userDid });
      }

      const error = await checkUser({ context: req.context, params, userDid, userPk });
      if (error) {
        return res.json({ error });
      }

      const cbParams = {
        step: store ? store.currentStep : 0,
        req,
        userDid,
        userPk,
        token,
        claims: claimResponse,
        walletVersion: wallet.version,
        walletOS: wallet.os,
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
            return res.json(Object.assign({}, result || {}));
          }

          // Move to next step: nextStep is persisted here to avoid an memory storage error
          const nextStep = store.currentStep + 1;
          await tokenStorage.update(token, { currentStep: nextStep });
          const signParams = await getSignParams(req);

          try {
            const nextSignedClaim = await authenticator.sign(
              Object.assign(signParams, {
                token,
                userDid,
                userPk,
                walletVersion: wallet.version,
                walletOS: wallet.os,
                claims: steps[nextStep],
                pathname: getPathName(pathname, req),
                extraParams: createExtraParams(locale, req.query),
              })
            );
            return res.jsonp(nextSignedClaim);
          } catch (err) {
            return onProcessError({ req, res, stage: 'next-auth-claim', err });
          }
        }

        // If we have a invalid token
        return res.json({ error: errors.token404[locale] });
      }

      // If we have no token
      const result = await onAuth(cbParams);
      res.json(Object.assign({}, result || {}));
    } catch (err) {
      onProcessError({ req, res, stage: 'verify-auth-claim', err });
    }
  };

  const ensureContext = async (req, res, next) => {
    const wallet = parseWalletUA(req.headers['user-agent']);
    const params = Object.assign({}, req.body, req.query, req.params);
    const token = params[tokenKey];
    const locale = getLocale(req);
    const store = token ? await tokenStorage.read(token) : null;
    const isAuthPrincipalStep = store ? store.currentStep === 0 : false;

    req.context = { locale, token, wallet, params, store, isAuthPrincipalStep };
    return next();
  };

  const ensureSignedJson = (isSwap = false) => (req, res, next) => {
    if (isSwap === false && req.ensureSignedJson === undefined) {
      req.ensureSignedJson = true;
      const originJson = res.json;
      res.json = payload => {
        let data;
        if (payload.error) {
          data = { error: payload.error };
        } else if (payload.response) {
          data = { response: payload.response };
        } else {
          data = { response: payload };
        }

        const signed = authenticator.signResponse(data);
        // debug('ensureSignedJson.do', signed);
        originJson.call(res, signed);
      };
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
    checkUser,
  };
};

module.exports.parseWalletUA = parseWalletUA;
