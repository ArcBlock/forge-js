/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
const { createVerifier } = require('@arcblock/tx-util');
const { createRetriever, verifyUserSwap } = require('@arcblock/swap-retriever');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:handlers:swap`);
const createHandlers = require('./util');

const noop = () => {};

class AtomicSwapHandlers {
  /**
   * Creates an instance of atomic swap handlers.
   *
   * @class
   * @param {object} config
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.swapStorage - storage that contains swap information
   * @param {object} config.tokenStorage - storage that contains action token information
   * @param {string} config.offerChainHost - offer chain endpoint
   * @param {string} config.demandChainHost - demand chain endpoint
   * @param {string} config.offerChainId - offer chain endpoint
   * @param {string} config.demandChainId - demand chain endpoint
   * @param {number} config.offerLocktime - num of blocks that will be locked before app chain swap can be revoked
   * @param {number} config.demandLocktime - num of blocks that will be locked before asset chain swap can be revoked
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   * @param {string} [config.options.prefix='/api/swap'] - url prefix for this group endpoints
   * @param {string} [config.options.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.options.tokenKey='_t_'] - query param key for `token`
   * @param {string} [config.options.checksumKey='_cs_'] - query param key for `checksum`
   * @param {boolean} [config.options.signedResponse=false] - whether should we return signed response
   */
  constructor({
    authenticator,
    tokenGenerator,
    swapStorage,
    tokenStorage,
    offerChainHost,
    offerChainId,
    demandChainHost,
    demandChainId,
    offerLocktime = 28800,
    demandLocktime = 57600,
    onPreAuth = noop,
    options = {},
  }) {
    if (!offerChainHost || !offerChainId) {
      throw new Error('Swap handlers require valid offerChain host');
    }
    if (!demandChainHost || !demandChainId) {
      throw new Error('Swap handlers require valid demandChain host');
    }

    this.authenticator = authenticator;
    this.swapStorage = swapStorage;
    this.tokenStorage = tokenStorage;
    this.offerChainHost = offerChainHost;
    this.offerChainId = offerChainId;
    this.demandChainHost = demandChainHost;
    this.demandChainId = demandChainId;
    this.offerLocktime = offerLocktime;
    this.demandLocktime = demandLocktime;

    ForgeSDK.connect(offerChainHost, { chainId: offerChainId, name: offerChainId });
    ForgeSDK.connect(demandChainHost, { chainId: demandChainId, name: demandChainId });

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

    this.options = Object.assign(
      {
        prefix: '/api/did',
        sessionDidKey: 'user.did',
        swapKey: 'traceId',
        tokenKey: '_t_',
        checksumKey: '_cs_',
        signedResponse: true,
      },
      options
    );
  }

  /**
   * Create an swap placeholder, which must be finalized before actually doing the swap
   *
   * @method
   * @param {object} payload
   * @returns {Promise<object>}
   */
  start(payload = {}) {
    const {
      offerUserAddress = '',
      offerAssets = [],
      offerToken = '0',

      demandUserAddress = '',
      demandAssets = [],
      demandToken = '0',
    } = payload;

    const traceId = ForgeSDK.Util.UUID();
    const updates = {
      traceId,
      status: 'not_started',
      offerUserAddress, // 卖家地址
      offerAssets,
      offerToken,
      offerLocktime: 0,
      offerChainId: this.offerChainId,
      offerChainHost: this.offerChainHost,
      offerSetupHash: '', // 卖家 setup_swap 的 hash
      offerSwapAddress: '', // 卖家 setup_swap 的地址
      offerRetrieveHash: '', // 卖家 retrieve_swap 的 hash
      offerRevokeHash: '', // 卖家 revoke_swap 的 hash

      demandUserAddress, // 买家地址
      demandAssets,
      demandToken,
      demandLocktime: 0,
      demandChainHost: this.demandChainHost,
      demandChainId: this.demandChainId,
      demandSetupHash: '', // 买家 setup_swap 的 hash
      demandSwapAddress: '', // 买家 setup_swap 的地址
      demandRetrieveHash: '', // 买家 retrieve_swap 的 hash
      demandRevokeHash: '', // 买家 revoke_swap 的 hash

      createdAt: new Date(),
    };

    return this.swapStorage.create(traceId, updates);
  }

  /**
   * Attach routes and handlers for authenticator
   * Now express app have route handlers attached to the following url
   * Browser
   *  - `GET /api/did/{action}/token` create new token
   *  - `GET /api/did/{action}/status` check for token status
   *  - `GET /api/did/{action}/timeout` expire a token
   * Wallet
   *  - `GET /api/did/{action}/auth` create auth response
   *  - `POST /api/did/{action}/auth` process payment request
   *  - `GET /api/did/{action}/retrieve` check payment
   *  - `POST /api/did/{action}/retrieve` submit
   *
   * @method
   * @param {object} config - attach config { app, action, claims, prefix = '/api' }
   * @param {object} config.app - express instance to attach routes to
   * @param {object} config.claims - claims for this request
   * @param {string} config.action - action of this group of routes
   * @param {function} config.onAuth - callback when user completed auth in abt wallet, and data posted back
   * @param {function} [config.onComplete=noop] - callback when the whole auth process is done, action token is removed
   * @param {function} [config.onExpire=noop] - callback when the action token expired
   * @param {function} [config.onError=console.error] - callback when there are some errors
   * @param {boolean|string|did} [config.authPrincipal=true] - whether should we do auth principal claim first
   * @returns void
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
    authPrincipal = true,
  }) {
    if (typeof onAuth !== 'function') {
      throw new Error('onAuth callback is required to attach did auth handlers');
    }
    if (typeof onComplete !== 'function') {
      throw new Error('onComplete callback is required to attach did auth handlers');
    }

    const { prefix, swapKey, signedResponse } = this.options;

    // pathname for abt wallet, which will be included for authenticator signing
    const authPath = `${prefix}/${action}/auth`;
    const retrievePath = `${prefix}/${action}/retrieve`;
    debug('attach routes', { action, prefix, authPath });

    // Shared middleware that ensure a valid swap id exists in the url
    const ensureSwap = async (req, res, next) => {
      const traceId =
        req.query.traceId || req.query[swapKey] || req.params.traceId || req.params[swapKey];

      if (!traceId) {
        return res.json({ error: 'Swap ID is required to start' });
      }

      const swap = await this.swapStorage.read(traceId);
      if (!swap) {
        return res.json({ error: 'Swap not found' });
      }

      req.traceId = traceId;
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
          { conn: this.demandChainId }
        );

        if (!state) {
          throw new Error('The swap address does not exist on demand chain');
        }

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
      ensureRequester,
      createExtraParams,
      ensureSignedJson,
      checkUser,
    } = createHandlers({
      action,
      pathname: authPath,
      claims,
      onAuth: onAuthAugmented,
      onComplete,
      onExpire,
      onError,
      authPrincipal,
      options: this.options,
      onPreAuth: this.onPreAuth,
      tokenGenerator: this.tokenGenerator,
      tokenStorage: this.tokenStorage,
      authenticator: this.authenticator,
    });

    const ensureWeb = ensureRequester('web');
    const ensureWallet = ensureRequester('wallet');
    const ensureSignedRes = ensureSignedJson(!signedResponse);

    // 0. create swap or retrieve swap
    app.get('/api/swap/:traceId', ensureSwap, async (req, res) => res.jsonp(req.swap));
    app.post('/api/swap', async (req, res) => {
      const swap = await this.start(req.body);
      return res.jsonp(swap);
    });

    // 1. WEB: to generate new token
    app.get(`${prefix}/${action}/token`, ensureWeb, ensureSwap, generateActionToken);

    // 2. WEB: check for token status
    app.get(`${prefix}/${action}/status`, ensureWeb, ensureSwap, ensureContext, checkActionToken);

    // 3. WEB: to expire old token
    app.get(`${prefix}/${action}/timeout`, ensureWeb, ensureSwap, ensureContext, expireActionToken);

    // 4. Wallet: fetch auth request
    app.get(authPath, ensureWallet, ensureSignedRes, ensureSwap, ensureContext, onAuthRequest);

    // 5. Wallet: submit auth response
    app.post(authPath, ensureWallet, ensureSignedRes, ensureSwap, ensureContext, onAuthResponse);

    // 6. Wallet: simple auth principal stub that used for wallet to pickup retrieve
    app.get(
      retrievePath,
      ensureWallet,
      ensureSignedRes,
      ensureSwap,
      ensureContext,
      async (req, res) => {
        const { locale, token, params, wallet } = req.context;
        const { userDid, userPk } = params;

        debug('retrieve.sign.input', params, req.swap);

        try {
          const authInfo = await this.authenticator.sign({
            token,
            userDid,
            userPk,
            claims: {
              authPrincipal: () => ({
                target: req.swap.demandUserAddress,
                // TODO: add i18n for this message
                description: 'Please provided the address to complete swap',
              }),
            },
            walletVersion: wallet.version,
            walletOS: wallet.os,
            pathname: retrievePath,
            extraParams: createExtraParams(locale, req.query),
          });

          res.jsonp(authInfo);
        } catch (err) {
          res.json({ error: err.message });
          onError({ stage: 'retrieve-response', err });
        }
      }
    );

    // 7. Wallet: setup seller swap and start retriever
    app.post(
      retrievePath,
      ensureWallet,
      ensureSignedRes,
      ensureSwap,
      ensureContext,
      async (req, res) => {
        const { locale, token, params } = req.context;
        const { traceId } = params;

        // FIXME: enforceTimestamp is turned off for now
        const { userDid, userPk, claims: claimResponse } = await this.authenticator.verify(
          params,
          locale,
          false
        );
        debug('retrieve.verify', { userDid, token, claims: claimResponse, swap: req.swap });

        const result = await checkUser({ context: req.context, params, userDid, userPk });
        if (result) {
          res.json({ error: result });
          return;
        }

        if (req.swap.offerSetupHash && req.swap.offerSwapAddress) {
          res.json({ swapAddress: req.swap.offerSwapAddress });
          return;
        }

        // Prevent duplicate setup_swap in case user is retrying
        if (req.swap.status === 'seller_setup') {
          res.json({ error: 'A retrieve is in progress, please retry if that retrieve failed' });
          return;
        }
        await this.swapStorage.update(traceId, { status: 'seller_setup' });

        // Prevent retrieve on edge cases
        if (req.swap.status === 'user_retrieve') {
          res.json({ error: 'You have already retrieved this swap' });
          return;
        }
        if (req.swap.status === 'both_retrieve') {
          res.json({ error: 'The swap already completed successfully' });
          return;
        }
        if (req.swap.status === 'user_revoke') {
          res.json({ error: 'You have revoked the swap, so retrieve is forbidden' });
          return;
        }
        if (req.swap.status === 'seller_revoke') {
          res.json({ error: 'Seller have revoked the swap, so retrieve is forbidden' });
          return;
        }
        if (req.swap.status === 'both_revoke') {
          res.json({ error: 'Both have revoked the swap, so retrieve is forbidden' });
          return;
        }

        try {
          const doSetup = async () =>
            // eslint-disable-next-line consistent-return
            new Promise(async (resolve, reject) => {
              const { state } = await ForgeSDK.getSwapState(
                { address: req.swap.demandSwapAddress },
                { conn: this.demandChainId }
              );

              try {
                verifyUserSwap(state, req.swap);
              } catch (err) {
                return reject(err);
              }

              // Then setup swap for user
              try {
                const [hash, address] = await ForgeSDK.setupSwap(
                  {
                    token: await ForgeSDK.fromUnitToToken(req.swap.offerToken, {
                      conn: this.offerChainId,
                    }),
                    assets: req.swap.offerAssets,
                    receiver: req.swap.demandUserAddress,
                    hashlock: `0x${state.hashlock}`,
                    locktime: this.offerLocktime,
                    wallet: ForgeSDK.Wallet.fromJSON(this.authenticator.wallet),
                  },
                  { conn: this.offerChainId }
                );

                // Check tx status
                const verifier = createVerifier({
                  hash,
                  chainHost: this.offerChainHost,
                  chainId: this.offerChainId,
                });

                verifier.on('error', err => {
                  const error = new Error(
                    `SetupSwap tx verify failed: ${hash}: ${JSON.stringify(err)}`
                  );
                  reject(error);
                });
                verifier.on('done', async () => {
                  debug('swap.setup.done.both', { traceId, hash });
                  // eslint-disable-next-line no-shadow
                  const { state } = await ForgeSDK.getSwapState(
                    { address },
                    { conn: this.offerChainId }
                  );
                  resolve({ hash, locktime: state.locktime, address });
                });
              } catch (err) {
                debug('swap.setup.error', { traceId, errors: err.errors });
                reject(err);
              }
            });

          const { hash, locktime, address } = await doSetup();
          await this.swapStorage.update(traceId, {
            status: 'both_setup',
            offerLocktime: locktime,
            offerSetupHash: hash,
            offerSwapAddress: address,
          });

          res.json({ swapAddress: address });

          const retriever = createRetriever({
            traceId,
            offerSwapAddress: address,
            offerUserAddress: req.swap.offerUserAddress,
            demandSwapAddress: req.swap.demandSwapAddress,
            demandUserAddress: req.swap.demandUserAddress,
            offerChainHost: this.offerChainHost,
            offerChainId: this.offerChainId,
            demandChainHost: this.demandChainHost,
            demandChainId: this.demandChainId,
            retrieveWallet: this.authenticator.wallet,
            checkInterval: 2000,
            autoStart: true,
            maxRetry: 60,
          });

          retriever.on('error', async args => {
            console.error('swap.retrieve.error', args);
            try {
              await this.swapStorage.update(traceId, { status: 'error' });
            } catch (err) {
              // Do something
            }
          });

          // eslint-disable-next-line no-shadow
          retriever.on('retrieved.user', async ({ hash }) => {
            try {
              await this.swapStorage.update(traceId, {
                status: 'user_retrieve',
                offerRetrieveHash: hash,
              });
            } catch (err) {
              // Do something
            }
          });

          // eslint-disable-next-line no-shadow
          retriever.on('retrieved.both', async ({ hash }) => {
            try {
              await this.swapStorage.update(traceId, {
                status: 'both_retrieve',
                demandRetrieveHash: hash,
              });
            } catch (err) {
              // Do something
            }
          });
        } catch (err) {
          let errorMessage = err.message;

          if (Array.isArray(err.errors)) {
            console.error('swap.setup.error', JSON.stringify(err.errors));
            errorMessage = err.errors.map(x => x.message).join(';');
          } else {
            console.error('swap.setup.error', err);
          }

          res.json({ error: errorMessage });
          await this.swapStorage.update(traceId, { status: 'error', errorMessage });
          onError({ stage: 'offer-setup-swap', err });
        }
      }
    );
  }
}

module.exports = AtomicSwapHandlers;
