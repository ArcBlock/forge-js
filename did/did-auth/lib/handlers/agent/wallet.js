/* eslint-disable object-curly-newline */
// eslint-disable-next-line
const debug = require('debug')(`${require('../../../package.json').name}:handlers:wallet`);

const WalletHandlers = require('../wallet');
const createHandlers = require('../util');

const noop = () => {};

class AgentWalletHandlers extends WalletHandlers {
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @class
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.tokenStorage - did auth token storage
   * @param {object} config.agentStorage - agent auth storage
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   * @param {object} [config.options={}] - custom options to define all handlers attached
   * @param {string} [config.options.prefix='/api/agent/:authorizeId'] - url prefix for this group endpoints
   * @param {string} [config.options.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.options.tokenKey='_t_'] - query param key for `token`
   * @param {string} [config.options.checksumKey='_cs_'] - query param key for `checksum`
   * @param {boolean|string|did} [config.options.authPrincipal=true] - whether should we do auth principal claim first
   */
  constructor({
    tokenGenerator,
    tokenStorage,
    agentStorage,
    authenticator,
    onPreAuth = noop,
    options = {},
  }) {
    if (options && !options.prefix) {
      options.prefix = '/api/agent/:authorizeId';
    }

    super({ tokenGenerator, tokenStorage, authenticator, onPreAuth, options });

    this.agentStorage = agentStorage;
  }

  /**
   * Attach routes and handlers for authenticator
   * Now express app have route handlers attached to the following url
   * - `GET /api/agent/:authorizeId/{action}/token` create new token
   * - `GET /api/agent/:authorizeId/{action}/status` check for token status
   * - `GET /api/agent/:authorizeId/{action}/timeout` expire a token
   * - `GET /api/agent/:authorizeId/{action}/auth` create auth response
   * - `POST /api/agent/:authorizeId/{action}/auth` process payment request
   *
   * @method
   * @param {object} config
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
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
  }) {
    if (typeof onAuth !== 'function') {
      throw new Error('onAuth callback is required to attach did auth handlers');
    }
    if (typeof onComplete !== 'function') {
      throw new Error('onComplete callback is required to attach did auth handlers');
    }
    if (!claims || Object.keys(claims).length === 0) {
      throw new Error('claims are required to attach did auth handlers');
    }

    const { prefix, appKey = '' } = this.options;

    // pathname for abt wallet, which will be included for authenticator signing
    const pathname = `${prefix}/${action}/auth`;
    debug('attach routes', { action, prefix, pathname });

    // Extract extra signature params from `req.authorization`
    const getSignParams = req => {
      if (!req.authorization) {
        throw new Error(
          'AgentWalletHandlers require valid req.authorization to compose sign params'
        );
      }

      const {
        appPk,
        appDid,
        appName,
        appDescription,
        appIcon,
        certificateSignature,
        certificateContentSigned,
      } = req.authorization;

      return {
        authorizer: { pk: appPk, did: appDid },
        appInfo: { name: appName, description: appDescription, icon: appIcon },
        verifiableClaims: [
          {
            content: certificateContentSigned,
            sig: certificateSignature,
          },
        ],
      };
    };

    // Shared middleware that ensure a valid authorization id exists in the url
    const ensureAuthorization = async (req, res, next) => {
      const authorizeId =
        req.query.authorizeId || req.query[appKey] || req.params.authorizeId || req.params[appKey];

      if (!authorizeId) {
        return res.json({ error: 'App ID is required to start' });
      }

      const authorization = await this.agentStorage.read(authorizeId);
      if (!authorization) {
        return res.json({ error: 'App authorization not found' });
      }

      req.authorizeId = authorizeId;
      req.authorization = authorization;

      return next();
    };

    const {
      generateActionToken,
      expireActionToken,
      checkActionToken,
      onAuthRequest,
      onAuthResponse,
      ensureContext,
      ensureRequester,
      ensureSignedJson,
    } = createHandlers({
      action,
      pathname,
      claims,
      onAuth,
      onComplete,
      onExpire,
      onError,
      getSignParams,
      getPathName: (url, req) => url.replace('/:authorizeId/', `/${req.authorizeId}/`),
      options: this.options,
      onPreAuth: this.onPreAuth,
      tokenGenerator: this.tokenGenerator,
      tokenStorage: this.tokenStorage,
      authenticator: this.authenticator,
    });

    const ensureWeb = ensureRequester('web');
    const ensureWallet = ensureRequester('wallet');
    const ensureSignedRes = ensureSignedJson(false);

    // 1. WEB: to generate new token
    app.get(`${prefix}/${action}/token`, ensureAuthorization, ensureWeb, generateActionToken);

    // 2. WEB: check for token status
    app.get(
      `${prefix}/${action}/status`,
      ensureAuthorization,
      ensureWeb,
      ensureContext,
      checkActionToken
    );

    // 3. WEB: to expire old token
    app.get(
      `${prefix}/${action}/timeout`,
      ensureAuthorization,
      ensureWeb,
      ensureContext,
      expireActionToken
    );

    // 4. Wallet: fetch auth request
    app.get(
      pathname,
      ensureAuthorization,
      ensureWallet,
      ensureContext,
      ensureSignedRes,
      onAuthRequest
    );

    // 5. Wallet: submit auth response
    app.post(
      pathname,
      ensureAuthorization,
      ensureWallet,
      ensureContext,
      ensureSignedRes,
      onAuthResponse
    );
  }
}

module.exports = AgentWalletHandlers;
