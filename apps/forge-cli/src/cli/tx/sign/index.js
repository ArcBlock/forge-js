// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./sign');

cli(
  'tx:sign',
  'Sign a transaction (base64) according to sender’s wallet',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
      wallet: true,
    },
    options: [],
  }
);
