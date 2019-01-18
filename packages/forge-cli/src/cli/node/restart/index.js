// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./restart');

cli(
  'restart <app>',
  'restart the forge managed applications: core/app/tendermint/ipfs',
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
