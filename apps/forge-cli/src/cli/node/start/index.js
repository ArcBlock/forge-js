// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./start');

cli('start', 'Start forge as a daemon in the background', input => action(execute, run, input), {
  requirements: {
    forgeRelease: true,
    rpcClient: true,
  },
  options: [],
});
