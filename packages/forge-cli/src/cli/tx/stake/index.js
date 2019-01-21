// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./stake');

cli(
  'stake',
  'Stake token to various entities: node&#x2F;user&#x2F;asset',
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
