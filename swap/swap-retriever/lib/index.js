/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
const { EventEmitter } = require('events');

const debug = require('debug')(require('../package.json').name);

/**
 * Generate a atomic swap retriever
 * Please make sure ForgeSDK is connected to the chains
 *
 * @param {object} params - params to setup the retriever
 * @param {string} params.checkAddress - which swap address to check
 * @param {string} params.retrieveAddress - which swap address to retrieve
 * @param {string} params.checkChain - which chain to check the swap
 * @param {string} params.retrieveChain - which chain to retrieve the swap
 * @param {number} params.checkInterval - query interval to check the swap
 * @param {boolean} params.autoStart - should the verifier start on create
 * @param {number} params.maxRetry - max number of checks before mark the tx as expired
 * @returns {EventEmitter} verifier object
 */
const createRetriever = params => {
  const {
    checkAddress,
    retrieveAddress,
    checkChain,
    retrieveChain,
    retrieveWallet,
    checkInterval = 2000,
    autoStart = true,
    maxRetry = 60,
  } = params;
  debug('swap.retrieve.params', params);

  ['checkAddress', 'retrieveAddress', 'checkChain', 'retrieveChain', 'retrieveWallet'].forEach(
    x => {
      if (!params[x]) {
        throw new Error(`${x} must be provided to create retriever`);
      }
    }
  );

  const events = new EventEmitter();
  let retryCount = -1;

  const doCheck = async () => {
    if (retryCount > maxRetry) {
      events.emit('error', {
        params,
        type: 'expired',
        retryCount,
        error: new Error('Swap retriever exceeded max retry count'),
      });
      return;
    }

    retryCount += 1;

    try {
      const [source, target] = await Promise.all([
        ForgeSDK.getSwapState({ address: checkAddress }, { conn: checkChain }),
        ForgeSDK.getSwapState({ address: retrieveAddress }, { conn: retrieveChain }),
      ]);

      if (!source) {
        events.emit('error', {
          params,
          type: 'exception',
          error: new Error(`swap state of ${checkAddress} not found on chain ${checkChain}`),
          retryCount,
        });
        return;
      }

      if (!target) {
        events.emit('error', {
          params,
          type: 'exception',
          error: new Error(`swap state of ${retrieveAddress} not found on chain ${retrieveChain}`),
          retryCount,
        });
        return;
      }

      if (source.state && source.state.hashkey) {
        debug('swap.retrieve.checkDone', { params, retryCount });
        const wallet = ForgeSDK.Wallet.fromJSON(retrieveWallet);
        events.emit('user-retrieved', {
          params,
          state: source.state,
          retryCount,
        });
        try {
          const retrieveHash = await ForgeSDK.sendRetrieveSwapTx(
            {
              tx: { itx: { address: retrieveAddress, hashkey: source.state.hashkey } },
              wallet,
              commit: true,
            },
            { conn: retrieveChain }
          );
          debug('swap.retrieve.sent', { params, retrieveHash });
          const { state } = await ForgeSDK.getSwapState(
            { address: retrieveAddress },
            { conn: retrieveChain }
          );
          if (state.hashkey) {
            debug('swap.retrieve.confirmed', { params, retrieveHash });
            events.emit('both-retrieved', {
              params,
              retrieveHash,
              retryCount,
            });
          } else {
            events.emit('error', {
              params,
              type: 'exception',
              error: new Error(`RetrieveSwap tx failed: ${retrieveHash}`),
              retryCount,
            });
          }
        } catch (err) {
          events.emit('error', {
            params,
            type: 'exception',
            error: err,
            retryCount,
          });
        }
      } else {
        debug('swap.retrieve.pending', { params, retryCount });
        setTimeout(doCheck, checkInterval);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setTimeout(doCheck, checkInterval);
      debug('swap.retrieve.error', { params, err, retryCount });
      events.emit('error', {
        params,
        type: 'exception',
        error: err,
        retryCount,
      });
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
