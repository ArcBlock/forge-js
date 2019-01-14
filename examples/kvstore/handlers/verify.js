/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const { OK, INSUFFICIENT_DATA, INVALID_SENDER_STATE } = enums.StatusCode;

/**
 * Each app server must implement `verifyTx` handler
 *
 * @param {*} tx
 * @param {*} senderState
 * @returns verify result
 */
module.exports = async function([tx, senderState]) {
  const kvPair = tx.itx.value;
  console.log('TxHandler.verifyTx', kvPair);

  if (!kvPair.key) {
    return { result: INSUFFICIENT_DATA };
  }
  if (!kvPair.value) {
    return { result: INSUFFICIENT_DATA };
  }

  if (senderState.data) {
    const { key } = kvPair;
    const { value: data } = senderState.data;
    if (Array.isArray(data.store) && data.store.any(x => x.key === key)) {
      return { result: INVALID_SENDER_STATE };
    }
  }

  return { result: OK };
};
