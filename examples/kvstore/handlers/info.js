/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const { OK } = enums.StatusCode;

/**
 * Each app server must implement `info` handler
 *
 * @returns verify result
 */
module.exports = async function([forgeVersion]) {
  console.log('TxHandler.info', forgeVersion);
  return {
    code: OK,
    typeUrls: Object.values({
      KvTx: 'KV/kv',
      AccountKvState: 'KV/kv_state',
    }),
  };
};
