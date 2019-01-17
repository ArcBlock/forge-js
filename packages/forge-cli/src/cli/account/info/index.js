// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./info');

cli(
  'account:info [address]',
  'get an account info by address',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: true,
      wallet: false,
    },
    options: [],
  }
);
