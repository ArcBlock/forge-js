// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { enums } = require('@arcblock/forge-proto');
const { execute, run } = require('./list');

const roles = ['all'].concat(Object.keys(enums.AccountRole).map(x => x.toLowerCase()));

cli(
  'account:list [role]',
  `List all accounts stored in this node, role=[${roles}], default role is all`,
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      runningNode: true,
      rpcClient: true,
    },
    options: [
      // ['--some-option [value]', 'some test option'],
    ],
  }
);
