#!/usr/bin/env node

/* eslint no-console:"off" */
process.env.DEBUG = '*';
const path = require('path');
const { parseConfig, ForgeApp } = require('..');
const config = parseConfig(path.resolve(__dirname, './kv.toml'));
// const debug = require('debug')(`${require('../package.json').name}:App`);
const debug = console.log;

ForgeApp.addProtobuf({
  baseDir: path.resolve(__dirname, 'gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});

const server = ForgeApp.createServer(config.app, {
  verifyTx: ({ tx, sender }) => {
    debug('TxHandler.verifyTx', { tx, sender });
  },
  updateState: ({ tx, sender }) => {
    debug('TxHandler.updateState', { tx, sender });
  },
});
server.start();
