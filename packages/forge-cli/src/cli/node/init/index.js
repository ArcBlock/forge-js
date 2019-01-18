// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./init');

cli(
  'init',
  'download and setup latest forge-core release to this machine',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: false,
    },
  }
);
