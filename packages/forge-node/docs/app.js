#!/usr/bin/env node

/* eslint no-console:"off" */
process.env.DEBUG = '*';
const path = require('path');
const { parseConfig, TCPServer } = require('..');
const config = parseConfig(path.resolve(__dirname, './kv.toml'));
// const debug = require('debug')(`${require('../package.json').name}:App`);
const debug = console.log;

const server = TCPServer.createServer(config.app, {
  verifyTx: ({ tx, sender }) => {
    debug('TxHandler.verifyTx', { tx, sender });
  },
  updateState: ({ tx, sender }) => {
    debug('TxHandler.updateState', { tx, sender });
  },
});
server.start();
