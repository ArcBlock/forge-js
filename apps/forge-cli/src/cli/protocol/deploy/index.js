// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./deploy');

cli(
  'protocol:deploy [itxPath]',
  'Deploy a compiled transaction protocol to ABT Node',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
      wallet: false,
    },
    options: [],
  }
);
