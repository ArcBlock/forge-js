// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./me');

cli('me', 'Print current unlocked wallet', input => action(execute, run, input), {
  requirements: {
    forgeRelease: false,
    runningNode: true,
    rpcClient: true,
    wallet: true,
  },
  options: [],
});
