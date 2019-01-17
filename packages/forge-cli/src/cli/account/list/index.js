// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./list');

cli(
  'account:list [role]',
  'list all accounts stored in this node (monitor, address, role)',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: true,
    },
    options: [
      // ['--some-option [value]', 'some test option'],
    ],
  }
);
