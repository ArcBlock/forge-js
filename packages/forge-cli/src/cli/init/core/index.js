// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./core');

cli('init:core', 'download latest forge-core release to this machine', input =>
  action(execute, run, input)
);
