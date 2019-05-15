const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./reset');

cli('reset', 'Reset current chain state, run with caution', input => action(execute, run, input), {
  requirements: {
    forgeRelease: true,
    runningNode: false,
    rpcClient: false,
    wallet: false,
  },
  options: [['-y, --yes', 'Use default value for all options']],
  handlers: {
    '--help': () => {
      shell.echo(`
Examples:
  - ${chalk.cyan('forge reset')}           reset interactively
  - ${chalk.cyan('forge reset --yes')}     force reset
        `);
    },
  },
});
