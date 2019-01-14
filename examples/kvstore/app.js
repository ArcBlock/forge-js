#!/usr/bin/env node

/* eslint no-console:"off" */
const path = require('path');
const { enums, fromTypeUrl } = require('@arcblock/forge-proto');
const { ForgeApp, parseConfig } = require('@arcblock/forge-node');

const config = parseConfig(path.resolve(__dirname, './forge.toml'));

ForgeApp.addProtobuf({
  baseDir: path.resolve(__dirname, 'gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});

const { OK, INSUFFICIENT_DATA, INVALID_SENDER_STATE } = enums.StatusCode;

const server = ForgeApp.createServer(config.app, {
  /**
   * Each app server must implement `verifyTx` handler
   *
   * @param {*} tx
   * @param {*} senderState
   * @returns verify result
   */
  async verifyTx(tx, senderState) {
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
  },

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
  async updateState(tx, senderState) {
    const kvPair = tx.itx.value;
    console.log('TxHandler.updateState', { kvPair, store: senderState.data.value });

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
  },
});

server.start();
