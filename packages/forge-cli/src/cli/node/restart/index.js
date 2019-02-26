const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./restart');

cli(
  'restart [app]',
  'Restart the forge managed applications: core/app/tendermint/ipfs',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
      wallet: false,
    },
    options: [],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge restart forge')}        restart forge
  - ${chalk.cyan('forge restart ipfs')}         restart ipfs
  - ${chalk.cyan('forge restart tendermint')}   restart tendermint
        `);
      },
    },
  }
);
