// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./info');

cli('chain:info', 'get the blockchain info from the running node', input =>
  action(execute, run, input)
);
