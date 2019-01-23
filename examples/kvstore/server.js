#!/usr/bin/env node
/* eslint no-console:"off" */
process.env.DEBUG = '*';

const path = require('path');
const { TcpServer, parseConfig } = require('@arcblock/forge-sdk');

const config = parseConfig(path.resolve(__dirname, './config/forge.toml'));

require('./config/setup');

const server = TcpServer.create(config.app);
server.addHandler('KvTx.verifyTx', require('./handlers/verify_input'));
server.addHandler('KvTx.verifyTx', require('./handlers/verify_state'));
server.addHandler('KvTx.updateState', require('./handlers/update'));
server.addHandler('info', require('./handlers/info'));
server.start();
