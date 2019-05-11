const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./use');

cli(
  'use [version]',
  'Active an already downloaded forge release',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: true,
      runningNode: false,
      rpcClient: false,
      wallet: false,
    },
    options: [],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge use 0.22.0')}      activate forge v0.22.0
  - ${chalk.cyan('forge use v0.22.0')}     activate forge v0.22.0
        `);
      },
    },
  }
);
