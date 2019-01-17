// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./display');

cli('tx <hash>', 'get a tx detail and display', input => action(execute, run, input), {
  requirements: {
    forgeRelease: false,
    rpcClient: true,
    wallet: false,
  },
  options: [],
});
