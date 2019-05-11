const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./init');

cli(
  'init [version]',
  'Download and setup forge release on this machine',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      rpcClient: false,
    },
    options: [['-m, --mirror <url>', 'Mirror host used to download forge release']],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge init')}             download and activate latest version
  - ${chalk.cyan('forge init 0.22.0')}      download and activate forge v0.22.0
  - ${chalk.cyan('forge init v0.22.0')}     download and activate forge v0.22.0
  - ${chalk.cyan(
    'forge init --mirror http://arcblock.oss-cn-beijing.aliyuncs.com'
  )}      specify a custom mirror for download
        `);
      },
    },
  }
);
