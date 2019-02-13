// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./create');

cli(
  'account:create',
  'Interactively create an account, guarded by a passphrase',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      runningNode: true,
      rpcClient: true,
    },
  }
);
