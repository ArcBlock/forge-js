// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./delete');

cli(
  'account:delete <address>',
  'Delete an account by address',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      runningNode: true,
      rpcClient: true,
      wallet: false,
    },
    options: [],
  }
);
