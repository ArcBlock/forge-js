// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./init');

cli(
  'init',
  'Download and setup latest forge-core release on this machine',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: false,
    },
  }
);
