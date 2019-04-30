const chalk = require('chalk');
const shell = require('shelljs');
const { cli, action } = require('core/cli');
const { execute, run } = require('./display');

cli('asset <address>', 'Get asset info by address', input => action(execute, run, input), {
  requirements: {
    forgeRelease: false,
    runningNode: true,
    rpcClient: true,
    wallet: false,
  },
  options: [],
  handlers: {
    '--help': () => {
      shell.echo(`
Examples:
  - ${chalk.cyan('forge asset zyquEMz5kiVu78SF1')}      Show asset state for specified address
        `);
    },
  },
});
