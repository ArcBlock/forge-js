/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
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
    const authPath = `${prefix}/${action}/auth`;
    const retrievePath = `${prefix}/${action}/retrieve`;
    debug('attach routes', { action, prefix, authPath });

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

    // Update swap storage
    const onAuthAugmented = async cbParams => {
      const { claims: userClaims, extraParams } = cbParams;
      const { traceId } = extraParams;
      const swap = userClaims.find(x => x.type === 'swap');
      const result = await onAuth(cbParams);

      if (swap && traceId) {
        debug('swap.onUserSetup', { traceId, swap });

        const { state } = await ForgeSDK.getSwapState(
          { address: swap.address },
          { conn: this.demandChain }
        );

        await this.swapStorage.update(traceId, {
          status: 'user_setup',
          demandSetupHash: state.hash,
          demandSwapAddress: swap.address,
        });

        const url = this.authenticator.getPublicUrl(retrievePath, extraParams);
        return Object.assign({}, result || {}, { response: { callback: url } });
      }

      return result;
    };

    const {
      generateActionToken,
      expireActionToken,
      checkActionToken,
      onAuthRequest,
      onAuthResponse,
      ensureContext,
      createExtraParams,
    } = createHandlers({
      action,
      pathname: authPath,
      claims,
      onAuth: onAuthAugmented,
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
    // Browser
    //  - `GET /api/did/{action}/token` create new token
    //  - `GET /api/did/{action}/status` check for token status
    //  - `GET /api/did/{action}/timeout` expire a token
    // Wallet
    //  - `GET /api/did/{action}/auth` create auth response
    //  - `POST /api/did/{action}/auth` process payment request
    //  - `GET /api/did/{action}/retrieve` check payment
    //  - `POST /api/did/{action}/retrieve` submit

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
    app.get(authPath, ensureSwap, ensureContext, onAuthRequest);

    // 5. Wallet: submit auth response
    app.post(authPath, ensureSwap, ensureContext, onAuthResponse);

    // 6. Wallet: get swap address that setup by seller, and trigger retrieve job
    app.get(retrievePath, ensureSwap, ensureContext, async (req, res) => {
      const { locale, token, params } = req.context;
      const { userDid, userPk } = params;

      debug('retrieve.sign.input', params, req.swap);

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
          pathname: authPath,
          extraParams: createExtraParams({ locale }, req.query),
        });

        debug('retrieve.result', authInfo);
        res.json(authInfo);
      } catch (err) {
        res.json({ error: err.message });
        onError({ stage: 'auth-response', err });
      }
    });

    app.post(retrievePath, ensureSwap, ensureContext, async (req, res) => {
      const { locale, token, params } = req.context;
      const { traceId } = params;

      try {
        const { userDid, claims: claimResponse } = await this.authenticator.verify(
          params,
          locale,
          false
        );
        debug('retrieve.verify', { userDid, token, claims: claimResponse });

        if (req.swap.offerSetupHash && req.swap.offerSwapAddress) {
          return res.json({ status: 0, response: { swapAddress: req.swap.offerSwapAddress } });
        }

        const { state } = await ForgeSDK.getSwapState(
          { address: req.swap.demandSwapAddress },
          { conn: this.demandChain }
        );
        const hash = await ForgeSDK.sendSetupSwapTx({
          tx: {
            itx: {
              value: ForgeSDK.Util.fromTokenToUnit(req.swap.offerToken), // FIXME: decimal
              assets: req.swap.offerAssets,
              receiver: req.swap.offerAddress,
              hashlock: ForgeSDK.Util.toUint8Array(`0x${state.hashlock}`),
              locktime: state.locktime - 50, // TODO: make this dynamic calculated and different from above
            },
          },
          wallet: ForgeSDK.Wallet.fromJSON(this.authenticator.wallet),
          commit: true,
        });
        debug('swap.onSellerSetup', { state, hash });
        const address = ForgeSDK.Util.toSwapAddress(hash);

        await this.swapStorage.update(traceId, {
          status: 'both_setup',
          offerSetupHash: hash,
          offerSwapAddress: address,
        });

        // TODO: trigger verifier on user retrieve swap
        return res.json({ status: 0, response: { swapAddress: address } });
      } catch (err) {
        console.error('swap.retrieve.error', err);
        res.json({ error: err.message });
        onError({ stage: 'auth-request', err });
      }
    });
  }
};
