// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./create');

cli(
  'create:cli',
  'Create a new forge CLI in the current repo',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      runningNode: false,
      rpcClient: false,
      wallet: false,
    },
    options: [],
  }
);
