// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./send');

cli('tx:send', 'Send a signed tx to the network', input => action(execute, run, input), {
  requirements: {
    forgeRelease: true,
    runningNode: true,
    rpcClient: true,
    wallet: true,
  },
  options: [],
});
