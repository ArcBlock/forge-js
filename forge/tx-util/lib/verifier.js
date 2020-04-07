/* eslint-disable object-curly-newline */
const ForgeSDK = require('@arcblock/forge-sdk');
const { EventEmitter } = require('events');

const debug = require('debug')(require('../package.json').name);

const create = ({ key, label, fn, validate }) => params => {
  const { chainHost, chainId = '', checkInterval = 1000, autoStart = true, maxRetry = 20 } = params;
  debug(`${label}.verify.params`, params);

  if (!params[key]) {
    throw new Error(`${key} must be provided to create ${label} verifier`);
  }
  if (!chainHost) {
    throw new Error(`chainHost must be provided to create ${label} verifier`);
  }

  ForgeSDK.connect(chainHost, { chainId, name: chainId || chainHost });

  if (typeof ForgeSDK[fn] !== 'function') {
    throw new Error(`Verify method ${fn} does not exist on ForgeSDK.`);
  }

  const param = params[key];
  const events = new EventEmitter();
  let retryCount = 0;

  const doCheck = async () => {
    if (retryCount > maxRetry) {
      events.emit('error', {
        [key]: params[key],
        type: 'expired',
        retryCount,
        error: new Error('Transaction verifier exceeded max retry count'),
      });
      return false;
    }

    retryCount += 1;

    try {
      const res = await ForgeSDK[fn]({ [key]: param }, { conn: chainId || chainHost });
      if (res && res.code === 'OK') {
        try {
          const result = validate(res);
          if (result) {
            debug(`${label}.verify.done`, { [key]: param, retryCount });
            events.emit('done', { [key]: param, data: res });
            return true;
          }
          debug(`${label}.verify.pending`, { [key]: param, code: res.code, retryCount });
          setTimeout(doCheck, checkInterval);
        } catch (err) {
          events.emit('error', {
            [key]: param,
            type: 'invalid',
            retryCount,
            data: res,
          });
        }
      } else {
        debug(`${label}.verify.pending`, { [key]: param, code: res.code, retryCount });
        setTimeout(doCheck, checkInterval);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(`${label}.verify.error`, err);
      setTimeout(doCheck, checkInterval);
      events.emit('error', {
        [key]: param,
        type: 'exception',
        error: err,
        retryCount,
      });
    }

    return false;
  };

  events.start = doCheck;

  if (autoStart) {
    doCheck();
  }

  return events;
};

/**
 * Create an async verifier
 */
const createAsync = verifierParams => params =>
  new Promise((resolve, reject) => {
    const verifier = create(verifierParams)(params);
    verifier.on('done', resolve);
    verifier.on('error', reject);
  });

module.exports = {
  create,
  createAsync,
};
