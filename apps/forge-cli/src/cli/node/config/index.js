// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./config');

cli('config', 'Read and display forge config', input => action(execute, run, input), {
  requirements: {
    forgeRelease: true,
    rpcClient: true,
    wallet: false,
  },
  options: [],
});
