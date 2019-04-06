// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./version');

cli(
  'version',
  'Output version for all components, including forge-cli, forge, storage and consensus engine',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      rpcClient: true,
      wallet: false,
    },
    options: [],
  }
);
