// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./reboot');

cli(
  'reboot',
  'Restart the forge daemon',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      rpcClient: true,
    },
    options: [],
  }
);
