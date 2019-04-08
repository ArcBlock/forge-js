// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./stop');

cli(
  'stop',
  'Stop the forge daemon (forge-core, forge-app, consensus engine, storage engine)',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
    },
    options: [],
  }
);
