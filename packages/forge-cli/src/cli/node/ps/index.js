// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./ps');

cli(
  'ps',
  'list application status for forge (includes tendermint and ipfs)',
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
