/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
const { createVerifier } = require('@arcblock/tx-util');
const { createRetriever, verifyUserSwap } = require('@arcblock/swap-retriever');
const get = require('lodash.get');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:handlers:swap`);
const createHandlers = require('./util');
const BaseHandler = require('./base');

const { preparePathname, prepareBaseUrl } = createHandlers;

const noop = () => {};

class AtomicSwapHandlers extends BaseHandler {
  /**
   * Creates an instance of atomic swap handlers.
   *
   * @class
   * @param {object} config
   * @param {object} config.authenticator - Authenticator instance that can to jwt sign/verify
   * @param {function} config.tokenGenerator - function to generate action token
   * @param {object} config.swapStorage - storage that contains swap information
   * @param {object} config.tokenStorage - storage that contains action token information
   * @param {string} config.swapContext.offerChainHost - offer chain endpoint
   * @param {string} config.swapContext.offerChainId - offer chain endpoint
   * @param {number} config.swapContext.offerLocktime - num of blocks that will be locked before app chain swap can be revoked
   * @param {string} config.swapContext.demandChainHost - demand chain endpoint
   * @param {string} config.swapContext.demandChainId - demand chain endpoint
   * @param {number} config.swapContext.demandLocktime - num of blocks that will be locked before asset chain swap can be revoked
   * @param {function} [config.onPreAuth=noop] - function called before each auth request send back to app, used to check for permission, throw error to halt the auth process
   * @param {string} [config.options.prefix='/api/swap'] - url prefix for this group endpoints
   * @param {string} [config.options.sessionDidKey='user.did'] - key path to extract session user did from request object
   * @param {string} [config.options.tokenKey='_t_'] - query param key for `token`
   */
  constructor({
    authenticator,
    tokenGenerator,
    swapStorage,
    swapContext,
    tokenStorage,
    onPreAuth = noop,
    options = {},
  }) {
    super({ tokenGenerator, tokenStorage, authenticator, onPreAuth });

    // Handle events from Swap Storage
    this.swapStorage = swapStorage;
    this.swapStorage.on('create', data => this.emit('swap.created', data));
    this.swapStorage.on('destroy', token => this.emit('swap.deleted', { token }));
    this.swapStorage.on('update', async data => {
      const events = {
        user_setup: 'swap.user_setup',
        both_setup: 'swap.both_setup',
        user_retrieve: 'swap.user_retrieve',
        seller_retrieve: 'swap.seller_retrieve',
        both_retrieve: 'swap.both_retrieve',
        user_revoke: 'swap.user_revoke',
        seller_revoke: 'swap.seller_revoke',
        both_revoke: 'swap.both_revoke',
        error: 'swap.failed',
        expire: 'swap.expired',
      };

      if (events[data.status]) {
        const payload = await this.swapStorage.read(data.traceId || data.token);
        this.emit(events[data.status], payload);
      }
    });

    // Setup swap context
    this.swapContext = Object.assign({ offerLocktime: 1200, demandLocktime: 2400 }, swapContext || {});
    const { offerChainHost = '', offerChainId = '', demandChainHost = '', demandChainId = '' } = this.swapContext;
    if (offerChainId && offerChainHost) {
      ForgeSDK.connect(offerChainHost, { chainId: offerChainId, name: offerChainId });
    }
    if (demandChainId && demandChainHost) {
      ForgeSDK.connect(demandChainHost, { chainId: demandChainId, name: demandChainId });
    }

    this.options = Object.assign(
      {
        prefix: '/api/did',
        sessionDidKey: 'user.did',
        swapKey: 'traceId',
        tokenKey: '_t_',
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
  async start(payload = {}) {
    const {
      offerUserAddress = '',
      offerAssets = [],
      offerToken = '0',

      demandUserAddress = '',
      demandAssets = [],
      demandToken = '0',
    } = payload;

    const { offerChainHost = '', offerChainId = '', demandChainHost = '', demandChainId = '' } = this.swapContext;

    const traceId = ForgeSDK.Util.UUID();
    const updates = {
      traceId,
      status: 'not_started',
      offerUserAddress, // 卖家地址
      offerAssets,
      offerToken,
      offerLocktime: 0,
      offerChainId,
      offerChainHost,
      offerSetupHash: '', // 卖家 setup_swap 的 hash
      offerSwapAddress: '', // 卖家 setup_swap 的地址
      offerRetrieveHash: '', // 卖家 retrieve_swap 的 hash
      offerRevokeHash: '', // 卖家 revoke_swap 的 hash

      demandUserAddress, // 买家地址
      demandAssets,
      demandToken,
      demandLocktime: 0,
      demandChainHost,
      demandChainId,
      demandSetupHash: '', // 买家 setup_swap 的 hash
      demandSwapAddress: '', // 买家 setup_swap 的地址
      demandRetrieveHash: '', // 买家 retrieve_swap 的 hash
      demandRevokeHash: '', // 买家 revoke_swap 的 hash

      createdAt: new Date(),
    };

    await this.swapStorage.create(traceId, updates);
    return updates;
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
   * @param {function} [config.onDecline=noop] - callback when user declined in wallet
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
    onDecline = noop,
    onComplete = noop,
    onExpire = noop,
    // eslint-disable-next-line no-console
    onError = console.error,
    authPrincipal = true,
  }) {
    if (typeof onAuth !== 'function') {
      throw new Error('onAuth callback is required to attach swap handlers');
    }
    if (typeof onDecline !== 'function') {
      throw new Error('onDecline callback is required to attach swap handlers');
    }
    if (typeof onComplete !== 'function') {
      throw new Error('onComplete callback is required to attach swap handlers');
    }

    const { prefix, swapKey, tokenKey } = this.options;

    // pathname for abt wallet, which will be included for authenticator signing
    const authPath = `${prefix}/${action}/auth`;
    const retrievePath = `${prefix}/${action}/retrieve`;
    debug('attach routes', { action, prefix, authPath });

    // Shared middleware that ensure a valid swap id exists in the url
    const ensureSwap = async (req, res, next) => {
      const token = req.query[tokenKey];
      const store = token ? await this.tokenStorage.read(token) : null;
      const traceIdFromToken = store ? store.extraParams[swapKey] : null;
      const traceId = traceIdFromToken || req.query[swapKey] || req.params[swapKey];

      if (!traceId) {
        return res.jsonp({ error: 'Swap ID is required to start' });
      }

      const swap = await this.swapStorage.read(traceId);
      if (!swap) {
        return res.jsonp({ error: 'Swap not found' });
      }

      req.traceId = traceId;
      req.swap = swap;

      return next();
    };

    // Update swap storage
    const onAuthAugmented = async cbParams => {
      const { claims: userClaims, extraParams } = cbParams;
      const traceId = extraParams[swapKey];
      const swap = userClaims.find(x => x.type === 'swap');
      const result = await onAuth(cbParams);

      debug('swap.onUserSetup', { traceId, swap });
      if (swap && traceId) {
        const { state } = await ForgeSDK.getSwapState({ address: swap.address }, { conn: swap.demandChain });

        if (!state) {
          throw new Error('The swap address does not exist on demand chain');
        }

        await this.swapStorage.update(traceId, {
          status: 'user_setup',
          demandSetupHash: state.hash,
          demandSwapAddress: swap.address,
        });

        const url = this.authenticator.getPublicUrl(
          preparePathname(retrievePath, cbParams.req),
          extraParams,
          prepareBaseUrl(cbParams.req, extraParams)
        );
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
      onDecline,
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

    // 0. create swap or retrieve swap
    app.post(`${prefix}/swap`, async (req, res) => {
      const swap = await this.start(req.body);
      return res.jsonp(swap);
    });
    // app.get(`${prefix}/swap/:traceId`, ensureSwap, async (req, res) => res.jsonp(req.swap));

    // 1. WEB: to generate new token
    app.get(`${prefix}/${action}/token`, ensureWeb, ensureSwap, generateActionToken);

    // 2. WEB: check for token status
    app.get(`${prefix}/${action}/status`, ensureWeb, ensureContext, ensureSwap, checkActionToken);

    // 3. WEB: to expire old token
    app.get(`${prefix}/${action}/timeout`, ensureWeb, ensureContext, ensureSwap, expireActionToken);

    // 4. Wallet: fetch auth request
    app.get(authPath, ensureWallet, ensureSignedJson, ensureContext, ensureSwap, onAuthRequest);

    // 5. Wallet: submit auth response
    app.post(authPath, ensureWallet, ensureSignedJson, ensureContext, ensureSwap, onAuthResponse);

    app.get(`${authPath}/submit`, ensureWallet, ensureSignedJson, ensureContext, ensureSwap, onAuthResponse);

    // 6. Wallet: simple auth principal stub that used for wallet to pickup retrieve
    app.get(retrievePath, ensureWallet, ensureSignedJson, ensureContext, ensureSwap, async (req, res) => {
      const { locale, token, params, wallet, store } = req.context;
      const { userDid, userPk } = params;

      debug('retrieve.sign.input', params, req.swap);

      try {
        const authInfo = await this.authenticator.sign({
          context: {
            token,
            userDid,
            userPk,
            sessionDid: store ? store.sessionDid : '',
            walletVersion: wallet.version,
            walletOS: wallet.os,
          },
          claims: {
            authPrincipal: () => ({
              target: req.swap.demandUserAddress,
              // TODO: add i18n for this message
              description: 'Please provided the address to complete swap',
            }),
          },
          pathname: preparePathname(retrievePath, req),
          baseUrl: prepareBaseUrl(req, get(store, 'extraParams', {})),
          extraParams: createExtraParams(locale, params, store ? store.extraParams : {}),
          request: req,
        });

        res.jsonp(authInfo);
      } catch (err) {
        res.jsonp({ error: err.message });
        onError({ stage: 'retrieve-response', err });
      }
    });

    // 7. Wallet: setup seller swap and start retriever
    app.post(retrievePath, ensureWallet, ensureSignedJson, ensureContext, ensureSwap, async (req, res) => {
      const { locale, token, params } = req.context;
      const traceId = params[swapKey];

      // FIXME: enforceTimestamp is turned off for now
      const { userDid, userPk, claims: claimResponse } = await this.authenticator.verify(params, locale, false);
      debug('retrieve.verify', { userDid, token, claims: claimResponse, swap: req.swap });

      const result = await checkUser({ context: req.context, params, userDid, userPk });
      if (result) {
        res.jsonp({ error: result });
        return;
      }

      if (req.swap.offerSetupHash && req.swap.offerSwapAddress) {
        res.jsonp({ swapAddress: req.swap.offerSwapAddress });
        return;
      }

      // Prevent duplicate setup_swap in case user is retrying
      if (req.swap.status === 'seller_setup') {
        res.jsonp({ error: 'A retrieve is in progress, please retry if that retrieve failed' });
        return;
      }
      await this.swapStorage.update(traceId, { status: 'seller_setup' });

      // Prevent retrieve on edge cases
      if (req.swap.status === 'user_retrieve') {
        res.jsonp({ error: 'You have already retrieved this swap' });
        return;
      }
      if (req.swap.status === 'both_retrieve') {
        res.jsonp({ error: 'The swap already completed successfully' });
        return;
      }
      if (req.swap.status === 'user_revoke') {
        res.jsonp({ error: 'You have revoked the swap, so retrieve is forbidden' });
        return;
      }
      if (req.swap.status === 'seller_revoke') {
        res.jsonp({ error: 'Seller have revoked the swap, so retrieve is forbidden' });
        return;
      }
      if (req.swap.status === 'both_revoke') {
        res.jsonp({ error: 'Both have revoked the swap, so retrieve is forbidden' });
        return;
      }

      try {
        const doSetup = async () =>
          // eslint-disable-next-line consistent-return
          new Promise(async (resolve, reject) => {
            const { state } = await ForgeSDK.getSwapState(
              { address: req.swap.demandSwapAddress },
              { conn: req.swap.demandChainId }
            );

            try {
              verifyUserSwap(state, req.swap);
            } catch (err) {
              return reject(err);
            }

            // Then setup swap for user
            try {
              const setupWallet = await this.authenticator.getWalletInfo({ request: req });
              const [hash, address] = await ForgeSDK.setupSwap(
                {
                  token: await ForgeSDK.fromUnitToToken(req.swap.offerToken, {
                    conn: req.swap.offerChainId,
                  }),
                  assets: req.swap.offerAssets,
                  receiver: req.swap.demandUserAddress,
                  hashlock: `0x${state.hashlock}`,
                  locktime: this.swapContext.offerLocktime,
                  wallet: ForgeSDK.Wallet.fromJSON(setupWallet),
                },
                { conn: req.swap.offerChainId }
              );

              // Check tx status
              const verifier = createVerifier({
                hash,
                chainHost: req.swap.offerChainHost,
                chainId: req.swap.offerChainId,
              });

              verifier.on('error', err => {
                const error = new Error(`SetupSwap tx verify failed: ${hash}: ${JSON.stringify(err)}`);
                this.swapStorage.update(traceId, { status: 'user_setup' });
                reject(error);
              });
              verifier.on('done', async () => {
                debug('swap.setup.done.both', { traceId, hash });
                // eslint-disable-next-line no-shadow
                const { state } = await ForgeSDK.getSwapState({ address }, { conn: req.swap.offerChainId });
                this.swapStorage.update(traceId, { status: 'both_setup' });
                resolve({ hash, locktime: state.locktime, address });
              });
            } catch (err) {
              debug('swap.setup.error', { traceId, errors: err.errors });
              this.swapStorage.update(traceId, { status: 'user_setup' });
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

        res.jsonp({ swapAddress: address });

        const retrieveWallet = await this.authenticator.getWalletInfo({ request: req });
        const retriever = createRetriever({
          traceId,
          offerSwapAddress: address,
          offerUserAddress: req.swap.offerUserAddress,
          demandSwapAddress: req.swap.demandSwapAddress,
          demandUserAddress: req.swap.demandUserAddress,
          offerChainHost: req.swap.offerChainHost,
          offerChainId: req.swap.offerChainId,
          demandChainHost: req.swap.demandChainHost,
          demandChainId: req.swap.demandChainId,
          retrieveWallet,
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
        retriever.on('revoked.user', async ({ hash }) => {
          try {
            await this.swapStorage.update(traceId, {
              status: 'user_revoke',
              demandRevokeHash: hash,
            });
          } catch (err) {
            // Do something
          }
        });

        // eslint-disable-next-line no-shadow
        retriever.on('revoked.both', async ({ hash }) => {
          try {
            await this.swapStorage.update(traceId, {
              status: 'both_revoke',
              offerRevokeHash: hash,
            });
          } catch (err) {
            // Do something
          }
        });

        // eslint-disable-next-line no-shadow
        retriever.on('revoked.seller', async ({ hash }) => {
          try {
            await this.swapStorage.update(traceId, {
              status: 'seller_revoke',
              offerRevokeHash: hash,
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

        res.jsonp({ error: errorMessage });
        await this.swapStorage.update(traceId, { status: 'error', errorMessage });
        onError({ stage: 'offer-setup-swap', err });
      }
    });
  }
}

module.exports = AtomicSwapHandlers;
