// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./start');

cli(
  'start',
  'start forge-core and forge-app',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      rpcClient: true,
    },
    options: [],
  }
);
