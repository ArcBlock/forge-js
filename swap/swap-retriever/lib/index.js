/* eslint-disable no-console */
const ForgeSDK = require('@arcblock/forge-sdk');
const get = require('lodash/get');
const { createVerifier } = require('@arcblock/tx-util');
const { EventEmitter } = require('events');

const debug = require('debug')(require('../package.json').name);

const printError = err => {
  if (Array.isArray(err.errors)) {
    console.error(JSON.stringify(err.errors));
  } else {
    console.error(err);
  }
};

/**
 * Generate a atomic swap retriever
 *
 * Will emit following events during retrieving
 *  - error: any error occurs
 *  - retrieved.user: user have retrieved
 *  - retrieved.both: both have retrieved
 *
 * @param {object} params - params to setup the retriever
 * @param {string} params.traceId - which traceId address to check
 * @param {string} params.offerUserAddress - who setup the offer
 * @param {string} params.offerSwapAddress - which swap address to check
 * @param {string} params.demandUserAddress - which setup the token
 * @param {string} params.demandSwapAddress - which swap address to retrieve
 * @param {string} params.offerChainId - which chain to check the swap, make sure you have connected to this chain
 * @param {string} params.offerChainHost - which chain to check the swap, make sure you have connected to this chain
 * @param {string} params.demandChainId - which chain to retrieve the swap, make sure you have connected to this chain
 * @param {string} params.demandChainHost - which chain to retrieve the swap, make sure you have connected to this chain
 * @param {number} params.checkInterval - query interval to check the swap
 * @param {boolean} params.autoStart - should the verifier start on create
 * @param {number} params.maxRetry - max number of checks before mark the tx as expired
 * @returns {EventEmitter} verifier object
 */
const createRetriever = params => {
  const {
    traceId,
    offerUserAddress,
    offerSwapAddress,
    demandUserAddress,
    demandSwapAddress,
    offerChainId,
    offerChainHost,
    demandChainId,
    demandChainHost,
    retrieveWallet,
    checkInterval = 2000,
    autoStart = true,
    maxRetry = 60,
  } = params;

  [
    'traceId',
    'offerUserAddress',
    'offerSwapAddress',
    'demandUserAddress',
    'demandSwapAddress',
    'offerChainId',
    'offerChainHost',
    'demandChainId',
    'demandChainHost',
    'retrieveWallet',
  ].forEach(x => {
    if (!params[x]) {
      throw new Error(`${x} must be provided to create swap retriever`);
    }
  });

  debug('swap.retrieve.params', {
    offerUserAddress,
    offerSwapAddress,
    demandUserAddress,
    demandSwapAddress,
    offerChainId,
    offerChainHost,
    demandChainId,
    demandChainHost,
    retrieveWallet: retrieveWallet.address,
  });

  ForgeSDK.connect(offerChainHost, { chainId: offerChainId, name: offerChainId });
  ForgeSDK.connect(demandChainHost, { chainId: demandChainId, name: demandChainId });

  const events = new EventEmitter();
  let retryCount = -1;

  const doCheck = async () => {
    if (retryCount > maxRetry) {
      events.emit('error', {
        traceId,
        type: 'expired',
        retryCount,
        error: new Error('Swap retriever exceeded max retry count'),
      });
      return;
    }

    retryCount += 1;

    try {
      const [source, target] = await Promise.all([
        ForgeSDK.getSwapState({ address: offerSwapAddress }, { conn: offerChainId }),
        ForgeSDK.getSwapState({ address: demandSwapAddress }, { conn: demandChainId }),
      ]);

      if (!source) {
        const error = new Error(`Offer swap ${offerSwapAddress} not found on chain ${offerChainId}`); // prettier-ignore
        events.emit('error', { traceId, type: 'exception', error, retryCount });
        return;
      }

      if (!target) {
        const error = new Error(`Demand swap ${demandSwapAddress} not found on chain ${demandChainId}`); // prettier-ignore
        events.emit('error', { traceId, type: 'exception', error, retryCount });
        return;
      }

      if (source.state && source.state.hashkey) {
        // Figure out user retrieve hash
        const demandRetrieveHash = get(source.state, 'context.renaissanceTx.hash', '');
        debug('swap.retrieve.done.user', { traceId, demandRetrieveHash, retryCount });
        events.emit('retrieved.user', { traceId, hash: demandRetrieveHash, retryCount });

        // Sent retrieve swap
        try {
          const hash = await ForgeSDK.retrieveSwap(
            {
              address: demandSwapAddress,
              hashkey: `0x${source.state.hashkey}`,
              wallet: ForgeSDK.Wallet.fromJSON(retrieveWallet),
            },
            { conn: demandChainId }
          );
          debug('swap.retrieve.sent', { traceId, hash });

          // Check tx status
          const verifier = createVerifier({
            hash,
            chainHost: demandChainHost,
            chainId: demandChainId,
          });

          verifier.on('error', err => {
            const error = new Error(`RetrieveSwap tx verify failed: ${hash}: ${err}`);
            events.emit('error', { traceId, type: 'exception', error, retryCount });
          });
          verifier.on('done', () => {
            debug('swap.retrieve.done.both', { traceId, hash, retryCount });
            events.emit('retrieved.both', { traceId, hash, retryCount });
          });
        } catch (err) {
          printError(err);
          events.emit('error', { traceId, type: 'exception', error: err, retryCount });
        }
      } else {
        debug('swap.retrieve.pending', { traceId, retryCount });
        setTimeout(doCheck, checkInterval);
      }
    } catch (err) {
      printError(err);
      setTimeout(doCheck, checkInterval);
      events.emit('error', { traceId, type: 'exception', error: err, retryCount });
    }
  };

  events.start = () => {
    setTimeout(doCheck, checkInterval);
  };

  if (autoStart) {
    setTimeout(() => {
      events.start();
    }, 0);
  }

  return events;
};

/**
 * Verify if a user swap is properly setup
 *
 * @param {object} swapState - swap state from on chain
 * @param {object} swapStore - swap storage record
 * @returns {boolean} - true on success
 * @throws {Error}
 */
const verifyUserSwap = (swapState, swapStore) => {
  const address = swapStore.demandSwapAddress;
  const offerUser = swapStore.offerUserAddress;
  const demandUser = swapStore.demandUserAddress;

  if (!swapState) {
    throw new Error(`User swap ${address} not found on demand chain`);
  }

  if (swapState.sender !== demandUser) {
    const delegator = get(swapState, 'context.genesisTx.tx.delegator', '');
    // debug('verifyUserSwap', { offerUser, demandUser, delegator, swapState, swapStore });
    if (delegator) {
      if (delegator !== demandUser) {
        throw new Error(`User swap ${address} not delegated by ${demandUser}`);
      }
    } else {
      throw new Error(`User swap ${address} not setup by ${demandUser}`);
    }
  }

  if (swapState.receiver !== offerUser) {
    throw new Error(`User swap ${address} not setup for ${offerUser}`);
  }

  if (swapState.locktime < swapStore.demandLocktime) {
    throw new Error(`User swap ${address} does not have expected locktime`);
  }

  if (swapState.value !== swapStore.demandToken) {
    throw new Error(`User swap ${address} not have enough token ${swapStore.demandToken}`);
  }

  if (Array.isArray(swapStore.demandAssets) && swapStore.demandAssets.length > 0) {
    const storeAssets = [].concat(swapStore.demandAssets);
    const stateAssets = [].concat(swapState.assets);

    if (storeAssets.length !== stateAssets.length) {
      throw new Error(`User swap ${address} not have enough assets`);
    }

    storeAssets.sort();
    stateAssets.sort();

    for (let i = 0; i < storeAssets.length; i++) {
      if (storeAssets[i] !== stateAssets[i]) {
        throw new Error(`User swap ${address} does not include exactly same assets`);
      }
    }
  }

  return true;
};

module.exports = {
  createRetriever,
  verifyUserSwap,
};
