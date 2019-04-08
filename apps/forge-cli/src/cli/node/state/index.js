const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./state');

cli(
  'state [type]',
  'List the information of the chain and the node, chain|core|net|validator|web',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: true,
      rpcClient: true,
      wallet: false,
    },
    options: [],
    alias: 'status',
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge status')}           display status for all components
  - ${chalk.cyan('forge status web')}       display status for forge web
  - ${chalk.cyan('forge status chain')}     display status about chain
  - ${chalk.cyan('forge status core')}      display status of forge core
  - ${chalk.cyan('forge status net')}       display status of network
  - ${chalk.cyan('forge status validator')} display status of validators
        `);
      },
    },
  }
);
