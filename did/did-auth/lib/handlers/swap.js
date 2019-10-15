/* eslint-disable object-curly-newline */
const { UUID } = require('@arcblock/forge-util');
// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:handlers:swap`);
const createHandlers = require('./util');

const noop = () => {};

module.exports = class WalletHandlers {
  /**
   * Creates an instance of DID Auth Handlers.
   *
   * @param {object} config
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {string} config.offerChain - offer chain endpoint
   * @param {string} config.demandChain - demand chain endpoint
   * @param {object} config.swapStorage - storage that contains swap information
   * @param {object} config.tokenStorage - storage that contains action token information
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   */
  constructor({
    tokenGenerator,
    swapStorage,
    tokenStorage,
    authenticator,
    offerChain,
    demandChain,
    offerLocktime = 28800,
    demandLocktime = 57600,
    onPreAuth = noop,
  }) {
    if (!offerChain) {
      throw new Error('Swap handlers require valid offerChain host');
    }
    if (!demandChain) {
      throw new Error('Swap handlers require valid demandChain host');
    }

    this.authenticator = authenticator;
    this.swapStorage = swapStorage;
    this.tokenStorage = tokenStorage;
    this.offerChain = offerChain;
    this.demandChain = demandChain;
    this.offerLocktime = offerLocktime;
    this.demandLocktime = demandLocktime;

    if (typeof tokenGenerator === 'function') {
      this.tokenGenerator = tokenGenerator;
    } else {
      this.tokenGenerator = () => Date.now().toString();
    }

    if (typeof onPreAuth === 'function') {
      this.onPreAuth = onPreAuth;
    } else {
      this.onPreAuth = noop;
    }
  }

  // TODO: add validation here
  start(payload) {
    const {
      offerDid,
      offerAssets = [],
      offerToken = 0,
      offerLocktime,

      demandDid,
      demandAssets = [],
      demandToken = 0,
      demandLocktime,
    } = payload;

    const traceId = UUID();
    const updates = {
      traceId,
      status: 'not_started',
      offerDid,
      offerAssets,
      offerToken,
      offerLocktime: offerLocktime || this.offerLocktime,
      offerChain: this.offerChain,

      demandDid,
      demandAssets,
      demandToken,
      demandLocktime: demandLocktime || this.demandLocktime,
      demandChain: this.demandChain,

      created_at: new Date(),
      updated_at: new Date(),
    };

    return this.swapStorage.create(traceId, updates);
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
   * @param {string} [config.prefix='/api/swap'] - url prefix for this group endpoints
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
    swapKey = 'traceId',
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

    const {
      generateActionToken,
      expireActionToken,
      checkActionToken,
      onAuthRequest,
      onAuthResponse,
    } = createHandlers({
      action,
      pathname,
      claims,
      onAuth,
      onComplete,
      onExpire,
      onError,
      sessionDidKey,
      tokenKey,
      checksumKey,
      onPreAuth: this.onPreAuth,
      tokenGenerator: this.tokenGenerator,
      tokenStorage: this.tokenStorage,
      authenticator: this.authenticator,
    });

    // Now express app have route handlers attached to the following url
    // For browser
    //  - `POST /api/swap/` create new swap
    //  - `GET /api/swap/:id/token` create new token
    //  - `GET /api/swap/:id/status` check for token status
    //  - `GET /api/swap/:id/timeout` expire a token
    // For wallet
    //  - `GET /api/swap/:id/auth` create auth response
    //  - `POST /api/swap/:id/auth` submit on client done setup_swap

    // Shared middleware that ensure a valid swap id exists in the url
    const ensureSwap = async (req, res, next) => {
      const { [swapKey]: swapId } = req.query;

      if (!swapId) {
        return res.send({ error: 'Swap ID is required to start' });
      }

      const swap = await this.swapStorage.read(swapId);
      if (!swap) {
        return res.send({ error: 'Swap not found' });
      }

      req.swapId = req.swapId;
      req.swap = req.swap;

      return next();
    };

    app.post('/api/swap', async (req, res) => {
      const swap = await this.start(req.body);
      return res.jsonp(swap);
    });

    // Now express app have route handlers attached to the following url
    // - `GET /api/did/{action}/token` create new token
    // - `GET /api/did/{action}/status` check for token status
    // - `GET /api/did/{action}/timeout` expire a token
    // - `GET /api/did/{action}/auth` create auth response
    // - `POST /api/did/{action}/auth` process payment request

    // 1. WEB: to generate new token
    app.get(`${prefix}/${action}/token`, ensureSwap, generateActionToken);

    // 2. WEB: check for token status
    app.get(`${prefix}/${action}/status`, ensureSwap, checkActionToken);

    // 3. WEB: to expire old token
    app.get(`${prefix}/${action}/timeout`, ensureSwap, expireActionToken);

    // 4. Wallet: fetch auth request
    app.get(pathname, ensureSwap, onAuthRequest);

    // 5. Wallet: submit auth response
    app.post(pathname, ensureSwap, onAuthResponse);
  }
};
