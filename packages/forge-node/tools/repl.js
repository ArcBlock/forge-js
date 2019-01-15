/* eslint no-console:"off" */
/**
 * scripts to load within Node REPL
 * @link https://stackoverflow.com/questions/8425102/how-do-i-load-my-script-into-the-node-js-repl
 **/

const path = require('path');
const { RpcClient, parseConfig } = require('@arcblock/forge-node');
const client = new RpcClient(
  parseConfig(path.resolve(__dirname, '../../../examples/simple/forge.toml'))
);
const debug = (...args) => {
  console.log('x'.repeat(80));
  console.log(...args);
  console.log('');
};

global.debug = debug;
global.client = client;
