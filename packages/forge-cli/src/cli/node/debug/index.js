// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./debug');

cli(
  'debug',
  'Print current forge-release, forge-cli and its dependency version',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      rpcClient: true,
    },
    options: [],
  }
);
