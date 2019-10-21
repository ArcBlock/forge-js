/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
const { EventEmitter } = require('events');

const debug = require('debug')(require('../package.json').name);

/**
 * Generate a transaction verifier by tx hash
 * Emit events on transaction included in a block
 *
 *  - `error`: when there is something wrong when verify the transaction
 *  - `done`: when the transaction is successfully verified
 *
 * @param {object} params
 * @param {string} params.hash - tx hash to check
 * @param {string} params.chainHost - on which chain to check the tx
 * @param {string} params.chainId - on which chain to check the tx
 * @param {number} params.checkInterval - tx query interval to see the tx
 * @param {boolean} params.autoStart - should the verifier start on create
 * @param {number} params.maxRetry - max number of checks before mark the tx as expired
 * @returns {EventEmitter} verifier object
 */
const createVerifier = params => {
  const {
    hash,
    chainHost,
    chainId = '',
    checkInterval = 1000,
    autoStart = true,
    maxRetry = 20,
  } = params;
  debug('tx.verify.params', params);

  if (!hash) {
    throw new Error('Transaction hash must be provided to create verifier');
  }
  if (!chainHost) {
    throw new Error('chainHost must be provided to create verifier');
  }

  ForgeSDK.connect(chainHost, { chainId, name: chainId || chainHost });

  const events = new EventEmitter();
  let retryCount = -1;

  const doCheck = async () => {
    if (retryCount > maxRetry) {
      events.emit('error', {
        hash,
        type: 'expired',
        retryCount,
        error: new Error('Transaction verifier exceeded max retry count'),
      });
      return;
    }

    retryCount += 1;

    try {
      const res = await ForgeSDK.getTx({ hash }, { conn: chainId || chainHost });
      if (res && res.code === 'OK' && res.info) {
        if (res.info.code === 'OK') {
          debug('tx.verify.done', { hash, retryCount });
          events.emit('done', { hash, tx: res.info });
        } else {
          events.emit('error', {
            hash,
            type: 'invalid',
            retryCount,
            code: res.info.code,
            error: new Error(res.info.code),
          });
        }
      } else {
        debug('tx.verify.pending', { hash, txCode: res.code, retryCount });
        setTimeout(doCheck, checkInterval);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setTimeout(doCheck, checkInterval);
      debug('tx.verify.error', { hash, err, retryCount });
      events.emit('error', {
        hash,
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
  createVerifier,
};
