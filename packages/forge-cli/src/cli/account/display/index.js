// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./display');

cli('account <address>', 'Get an account info by address', input => action(execute, run, input), {
  requirements: {
    forgeRelease: false,
    runningNode: true,
    rpcClient: true,
    wallet: false,
  },
  options: [],
});
