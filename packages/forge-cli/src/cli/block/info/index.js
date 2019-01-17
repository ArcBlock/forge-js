// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./info');

cli(
  'block:info <height>',
  'get the block info from the running node',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: true,
    },
  }
);
