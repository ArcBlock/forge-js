const shell = require('shelljs');
const chalk = require('chalk');
const { cli, action } = require('core/cli');
const { execute, run } = require('./display');

cli(
  'block [height]',
  'Get the block info from the running node',
  input => action(execute, run, input),
  {
    requirements: {
      forgeRelease: false,
      runningNode: true,
      rpcClient: true,
    },
    options: [
      ['-d, --show-txs', 'Show transaction details'],
      ['-f, --stream', 'Streaming new blocks on the chain'],
    ],
    handlers: {
      '--help': () => {
        shell.echo(`
Examples:
  - ${chalk.cyan('forge block')}                display latest block, txs not printed
  - ${chalk.cyan('forge block -f')}             Streaming for new blocks generated
  - ${chalk.cyan('forge block --show-txs')}     display latest block, txs printed
  - ${chalk.cyan('forge block 123')}            display block at height 123
  - ${chalk.cyan('forge block last')}           display latest block
  - ${chalk.cyan('forge block first')}          display first block
  - ${chalk.cyan('forge block 123,456')}        display 2 blocks
  - ${chalk.cyan('forge block 1...4')}          display block from height 1,2,3,4
        `);
      },
    },
  }
);
