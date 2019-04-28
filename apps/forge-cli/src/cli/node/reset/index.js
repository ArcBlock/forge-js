const { cli, action } = require('core/cli');
const { execute, run } = require('./reset');

cli('reset', 'Reset current chain state, run with caution', input => action(execute, run, input), {
  requirements: {
    forgeRelease: true,
    runningNode: false,
    rpcClient: false,
    wallet: false,
  },
  options: [],
});
