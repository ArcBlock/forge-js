/* eslint-disable no-console */
const ForgeSDK = require('@arcblock/forge-sdk');
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
 * Please make sure ForgeSDK is connected to the chains
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
        const error = new Error(`Swap ${offerSwapAddress} not found on chain ${offerChainId}`);
        events.emit('error', { traceId, type: 'exception', error, retryCount });
        return;
      }

      if (!target) {
        const error = new Error(`Swap ${demandSwapAddress} not found on chain ${demandChainId}`);
        events.emit('error', { traceId, type: 'exception', error, retryCount });
        return;
      }

      if (source.state && source.state.hashkey) {
        debug('swap.retrieve.done.user', { traceId, retryCount });

        // Figure out user retrieve hash
        try {
          const { transactions } = await ForgeSDK.listTransactions(
            {
              addressFilter: { sender: demandUserAddress },
              typeFilter: { types: ['fg:t:retrieve_swap'] },
            },
            { conn: offerChainId }
          );

          const tx = transactions.find(x => x.tx.itxJson === demandSwapAddress);
          if (tx) {
            debug('swap.retrieve.done.tx', { traceId, tx: tx.tx });
            events.emit('retrieved.user', { traceId, hash: tx ? tx.hash : '', retryCount });
          }
        } catch (err) {
          console.error('swap.retrieve.done.error', err);
          events.emit('retrieved.user', { traceId, hash: '', retryCount });
        }

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

module.exports = {
  createRetriever,
};
