// eslint-disable-next-line import/no-unresolved
const { cli, action } = require('core/cli');
const { execute, run } = require('./list');
const { enums } = require('@arcblock/forge-proto');

const roles = ['all'];
for (let role in enums.AccountRole) {
  roles.push(role.toLowerCase());
}

cli(
  'account:list [role]',
  `List all accounts stored in this node, role=[${roles}], default role is all`,
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
