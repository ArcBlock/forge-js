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
    options: [['--graphql', 'Open graphql playground instead of forge admin panel']],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge web start')}          start forge web
  - ${chalk.cyan('forge web stop')}           stop forge web
  - ${chalk.cyan('forge web open')}           open admin panel in default browser
  - ${chalk.cyan('forge web open --graphql')} open graphql playground in default browser
        `);
      },
    },
  }
);
