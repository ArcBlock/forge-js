// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./cli');

cli(
  'create:cli',
  'create a new forge CLI in the current repo',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: false,
    },
  }
);
