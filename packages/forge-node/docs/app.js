#!/usr/bin/env node

/* eslint no-console:"off" */
process.env.DEBUG = '*';
const path = require('path');
const { AppServer, parseConfig } = require('..');
const config = parseConfig(path.resolve(__dirname, './kv.toml'));

// TODO: transaction handlers
const server = AppServer.createServer(config.app, {});
server.start();
