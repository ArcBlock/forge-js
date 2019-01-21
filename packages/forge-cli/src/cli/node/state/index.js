// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./state');

cli(
  'state [type]',
  'List the information of the chain and the node, chain|core|net|validator',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
      wallet: false,
    },
    options: [],
    alias: 'status',
  }
);
