const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./download');

cli(
  'download [version]',
  'Download a forge release without activate it',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      runningNode: false,
      rpcClient: false,
      wallet: false,
    },
    options: [['-m, --mirror <url>', 'Mirror host used to download forge release']],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge download')}           download latest version
  - ${chalk.cyan('forge download 0.22.0')}    download forge v0.22.0
  - ${chalk.cyan('forge download v0.22.0')}   download forge v0.22.0
  - ${chalk.cyan(
    'forge download --mirror http://arcblock.oss-cn-beijing.aliyuncs.com'
  )}      specify a mirror
        `);
      },
    },
  }
);
