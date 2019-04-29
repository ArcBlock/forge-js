/* eslint no-console:"off" */
/**
 * scripts to load within Node REPL
 * @link https://stackoverflow.com/questions/8425102/how-do-i-load-my-script-into-the-node-js-repl
 **/

const { RpcClient } = require('../');
const client = new RpcClient('tcp://127.0.0.1:28210');
const debug = (...args) => {
  console.log('x'.repeat(80));
  console.log(...args);
  console.log('');
};

global.debug = debug;
global.client = client;
