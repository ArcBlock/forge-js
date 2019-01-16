// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./node');

cli(
  'backup:node',
  'allow forge admin to backup the current node',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      rpcClient: false,
    },
  }
);
