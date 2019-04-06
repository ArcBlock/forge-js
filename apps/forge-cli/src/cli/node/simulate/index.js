// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./simulate');

cli(
  'simulate [action]',
  'Start/stop simulator and generate some random data',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: false,
      wallet: false,
    },
    alias: 'simulator',
    options: [],
  }
);
