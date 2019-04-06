const chalk = require('chalk');
const shell = require('shelljs');
const { cli, action } = require('core/cli');
const { execute, run } = require('./stake');

cli(
  'stake [show]',
  'Stake to various entities: node/user/asset',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
      wallet: ({ _, address }) => !(_.includes('show') && address),
    },
    options: [['-d, --address <addr>', 'Show stakes for `address`']],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge stake')}                      Send a stake transaction
  - ${chalk.cyan('forge stake show')}                 List stakes transactions for current wallet
  - ${chalk.cyan('forge stake show --address abc')}   List stakes transactions for specified address
        `);
      },
    },
  }
);
