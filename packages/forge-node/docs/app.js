#!/usr/bin/env node

/* eslint no-console:"off" */
process.env.DEBUG = '*';
const path = require('path');
const { ForgeApp, parseConfig } = require('../');
const { enums } = require('@arcblock/forge-proto');

// const debug = require('debug')(`${require('../package.json').name}:App`);
const debug = console.log;
const config = parseConfig(path.resolve(__dirname, './kv.toml'));

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
  async verifyTx(tx, senderState) {
    const kvPair = tx.itx.value;
    debug('TxHandler.verifyTx', kvPair);

    if (!kvPair.key) {
      return { result: INSUFFICIENT_DATA };
    }
    if (!kvPair.value) {
      return { result: INSUFFICIENT_DATA };
    }

    if (senderState.data) {
      debug('TxHandler.verifyTx.existence');
      const { key } = kvPair;
      const { value: data } = senderState.data;
      if (Array.isArray(data.store) && data.store.any(x => x.key === key)) {
        return { result: INVALID_SENDER_STATE };
      }
    }

    return { result: OK };
  },

  async updateState(tx, senderState) {
    const kvPair = tx.itx.value;

    debug('TxHandler.updateState', { kvPair, data: senderState.data });
    const { value: oldData } = senderState.data || {};
    let store = (oldData ? oldData.store : []) || [];
    store.push(kvPair);

    senderState.data = oldData ? Object.assign(oldData, { store }) : { store };
    debug('TxHandler.updateState.final', senderState.data);
    return { code: OK, states: [senderState] };
  },
});
server.start();
