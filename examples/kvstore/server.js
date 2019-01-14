#!/usr/bin/env node
/* eslint no-console:"off" */
const path = require('path');
const { TcpServer, parseConfig, addProtobuf } = require('@arcblock/forge-node');

const config = parseConfig(path.resolve(__dirname, './forge.toml'));

addProtobuf({
  baseDir: path.resolve(__dirname, 'gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});

const server = TcpServer.create(config.app);
server.addHandler('verifyTx', require('./handlers/verify'));
server.addHandler('updateState', require('./handlers/update'));
server.start();
