const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./web');

cli(
  'web [action]',
  'Start or stop the web UI of running forge node',
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
  - ${chalk.cyan('forge web start')}      start the web UI
  - ${chalk.cyan('forge web stop')}       stop the web UI
  - ${chalk.cyan('forge web open')}       open the web UI in default browser
        `);
      },
    },
  }
);
