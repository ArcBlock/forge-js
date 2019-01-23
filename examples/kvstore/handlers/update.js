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
module.exports = async function(req, res, next) {
  const { itx, sender } = req;
  const kvPair = itx.value;
  console.log('TxHandler.updateState', {
    kvPair,
    store: sender.data ? sender.data.value : [],
  });

  // compose new store
  const { typeUrl, value: prev } = sender.data || {};
  const storeList = ((prev ? prev.storeList : []) || []).concat([kvPair]);
  console.log('TxHandler.updateState.store', require('util').inspect(storeList, { depth: 8 }));

  // reset account state to new store
  sender.data = {
    type: fromTypeUrl(typeUrl) || 'AccountKvState',
    value: { store: storeList },
  };

  Object.assign(res, { code: OK, states: [sender] });
  next();
};
