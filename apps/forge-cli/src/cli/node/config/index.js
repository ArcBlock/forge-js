const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./config');

cli('config', 'Read and display forge config', input => action(execute, run, input), {
  requirements: {
    forgeRelease: true,
    rpcClient: true,
    wallet: false,
  },
  options: [['-p, --peer', 'Fetch config for peer to join this chain']],
  handlers: {
    '--help': () => {
      shell.echo(`
Examples:
  - ${chalk.cyan('forge config')}             show config for current node
  - ${chalk.cyan('forge config --peer')}      generate config for peer(new node)
`);
    },
  },
});
