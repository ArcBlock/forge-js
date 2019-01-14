/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const { INSUFFICIENT_DATA } = enums.StatusCode;

/**
 * Each app server must implement `verifyTx` handler
 *
 * @param {*} tx
 * @param {*} senderState
 * @returns verify result
 */
module.exports = async function([tx]) {
  const kvPair = tx.itx.value;
  console.log('TxHandler.verifyTx', kvPair);

  if (!kvPair.key) {
    return { result: INSUFFICIENT_DATA };
  }
  if (!kvPair.value) {
    return { result: INSUFFICIENT_DATA };
  }
};
