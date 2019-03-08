/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const { OK } = enums.StatusCode;

/**
 * Each app server must implement `info` handler
 *
 * @returns verify result
 */
module.exports = async function(req, res, next) {
  console.log('TxHandler.info', req.forgeVersion);
  Object.assign(res, {
    code: OK,
    typeUrls: Object.values({
      KvTx: 'KV/kv',
      AccountKvState: 'KV/kv_state',
    }),
    appHash: req.serverConfig.appHash,
  });
  next();
};
