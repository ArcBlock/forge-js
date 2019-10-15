/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
const { getRandomBytes, Hasher } = require('@arcblock/mcrypto');
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
      offerAddress,
      offerAssets = [],
      offerToken = 0,
      offerLocktime,

      demandAddress,
      demandAssets = [],
      demandToken = 0,
      demandLocktime,
    } = payload;

    const traceId = ForgeSDK.Util.UUID();
    const updates = {
      traceId,
      status: 'not_started',
      offerAddress,
      offerAssets,
      offerToken,
      offerLocktime: offerLocktime || this.offerLocktime,
      offerChain: this.offerChain,
      offerSetupHash: '', // 卖家 setup_swap 的 hash
      offerSwapAddress: '', // 卖家 setup_swap 的地址
      offerRetrieveHash: '', // 卖家 retrieve_swap 的 hash
      offerRevokeHash: '', // 卖家 revoke_swap 的 hash

      demandAddress, // TODO: this should be auto generated
      demandAssets,
      demandToken,
      demandLocktime: demandLocktime || this.demandLocktime,
      demandChain: this.demandChain,
      demandSetupHash: '', // 卖家 setup_swap 的 hash
      demandSwapAddress: '', // 卖家 setup_swap 的地址
      demandRetrieveHash: '', // 卖家 retrieve_swap 的 hash
      demandRevokeHash: '', // 卖家 revoke_swap 的 hash

      createdAt: new Date(),
      updatedAt: new Date(),
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
      ensureContext,
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
      const traceId = req.query.traceId || req.query[swapKey];

      if (!traceId) {
        return res.json({ error: 'Swap ID is required to start' });
      }

      const swap = await this.swapStorage.read(traceId);
      if (!swap) {
        return res.json({ error: 'Swap not found' });
      }

      req.traceId = req.traceId;
      req.swap = swap;

      return next();
    };

    // Now express app have route handlers attached to the following url
    // Browser
    //  - `GET /api/did/{action}/token` create new token
    //  - `GET /api/did/{action}/status` check for token status
    //  - `GET /api/did/{action}/timeout` expire a token
    // Wallet
    //  - `GET /api/did/{action}/auth` create auth response
    //  - `POST /api/did/{action}/auth` process payment request
    //  - `GET /api/did/{action}/retrieve` create new token

    // 0. create an empty swap data row
    app.post('/api/swap', async (req, res) => {
      const swap = await this.start(req.body);
      return res.jsonp(swap);
    });

    // 1. WEB: to generate new token
    app.get(`${prefix}/${action}/token`, ensureSwap, generateActionToken);

    // 2. WEB: check for token status
    app.get(`${prefix}/${action}/status`, ensureSwap, ensureContext, checkActionToken);

    // 3. WEB: to expire old token
    app.get(`${prefix}/${action}/timeout`, ensureSwap, ensureContext, expireActionToken);

    // 4. Wallet: fetch auth request
    app.get(pathname, ensureSwap, ensureContext, onAuthRequest);

    // 5. Wallet: submit auth response
    app.post(pathname, ensureSwap, ensureContext, onAuthResponse);

    // 6. Wallet: get swap address that setup by seller, and trigger retrieve job
    // TODO: payment process should be indicated on token storage two
    app.get(`${prefix}/${action}/retrieve`, ensureSwap, ensureContext, async (req, res) => {
      const { locale, token, params } = req.context;
      const { userDid, userPk } = params;

      debug('sign.input', params, req.swap);

      try {
        const authInfo = await this.authenticator.sign({
          token,
          userDid,
          userPk,
          claims: {
            authPrincipal: () => ({
              target: req.swap.offerAddress,
              description: 'Please provided the address to complete swap',
            }),
          },
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

        debug('retrieve.result', authInfo);
        res.json(authInfo);
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'auth-response', err });
      }
    });

    app.post(`${prefix}/${action}/retrieve`, ensureSwap, ensureContext, async (req, res) => {
      const { locale, token, params } = req.context;
      const { traceId } = params;

      try {
        const { userDid, claims: claimResponse } = await this.authenticator.verify(params, locale);
        debug('verify', { userDid, token, claims: claimResponse });

        // TODO: validate the swap and userDid should match
        if (req.swap.offerSetupHash && req.swap.offerSwapAddress) {
          return res.json({ status: 0, swapAddress: req.swap.offerSwapAddress });
        }

        const { state } = await ForgeSDK.getSwapState(
          { address: req.swap.demandSetupHash },
          { conn: this.demandChain }
        );

        // 然后服务端在应用链上 setup_swap
        const hashkey = getRandomBytes(32);
        const hashlock = Hasher.SHA3.hash256(hashkey);
        const hash = await ForgeSDK.sendSetupSwapTx({
          tx: {
            itx: {
              value: ForgeSDK.fromTokenToUnit(0),
              assets: req.swap.offerAssets,
              receiver: req.swap.offerAddress,
              hashlock,
              locktime: state.locktime - 50, // TODO: make this dynamic calculated and different from above
            },
          },
          wallet: ForgeSDK.Wallet.fromJSON(this.authenticator.wallet),
        });
        console.log('swap.onSellerSetup', { hashkey, hashlock, hash });
        const address = ForgeSDK.Util.toSwapAddress(hash);

        const updates = {
          status: 'both_setup',
          offerSetupHash: hash,
          offerSwapAddress: address,
          offerRetrieveHash: '',
          offerRevokeHash: '',
          updatedAt: new Date(),
        };
        await this.swapStorage.update(traceId, updates);

        // TODO: trigger verifier on user retrieve swap
        return res.json({ status: 0, swapAddress: req.swap.offerSwapAddress });
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'auth-request', err });
      }
    });
  }
};
