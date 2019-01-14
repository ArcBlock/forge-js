/* eslint no-console:"off" */
const { enums, fromTypeUrl } = require('@arcblock/forge-proto');
const { OK } = enums.StatusCode;

/**
 * Update data.store on account state
 *
 * If we have saved any value in the account state previously, it's structure should be
 * { data: { typeUrl: 'KV/kv_store', value: Buffer }}, a `store` field should exist on value
 *
 * FIXME: due to grpc-node issue, repeated fields `x` will be renamed to `xList`
 *
 * @param {*} tx
 * @param {*} senderState
 * @returns
 */
module.exports = async function([tx, senderState]) {
  const kvPair = tx.itx.value;
  console.log('TxHandler.updateState', {
    kvPair,
    store: senderState.data ? senderState.data.value : [],
  });

  // compose new store
  const { typeUrl, value: prev } = senderState.data || {};
  const storeList = ((prev ? prev.storeList : []) || []).concat([kvPair]);
  console.log('TxHandler.updateState.store', require('util').inspect(storeList, { depth: 8 }));

  // reset account state to new store
  senderState.data = {
    type: fromTypeUrl(typeUrl) || 'AccountKvState',
    value: { store: storeList },
  };

  return { code: OK, states: [senderState] };
};
