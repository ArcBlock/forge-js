#!/usr/bin/env node

/* eslint no-console:"off" */
process.env.DEBUG = '*';
const path = require('path');
const { parseConfig, TCPServer } = require('..');
const config = parseConfig(path.resolve(__dirname, './kv.toml'));

// TODO: transaction handlers
const server = TCPServer.createServer(config.app, {});
server.start();
