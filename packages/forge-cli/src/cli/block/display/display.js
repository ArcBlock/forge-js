const shell = require('shelljs');
const chalk = require('chalk');
const { range } = require('lodash');
const { createRpcClient, debug } = require('core/env');
const { symbols, hr, pretty } = require('core/ui');

function parseBlockHeight(input, latest) {
  if (input.indexOf('...') > 0) {
    const [lower, upper] = input.split('...').map(x => Number(x));
    debug('parseBlockHeight', { input, lower, upper, latest });
    if (lower && upper) {
      return range(lower, upper)
        .concat(upper)
        .filter(x => x > 0 && x <= latest);
    }
  }

  const tmp = input.split(',');
  debug('parseBlockHeight', { input, tmp });
  if (!tmp.length) {
    shell.echo(`${symbols.info} query latest block at ${latest}`);
    return [latest];
  }

  return tmp
    .map(x => Number(x))
    .map(x => (x > 0 ? x : latest + x))
    .filter(x => x > 0 && x <= latest);
}

async function execute({ args: [height = ''], opts = {} }) {
  const client = createRpcClient();
  try {
    const { info } = await client.getChainInfo({});
    const heights = parseBlockHeight(height, info.blockHeight);
    debug('Query Blocks on height', heights);

    const stream = await client.getBlock(heights.map(x => ({ height: x })));
    stream
      .on('data', function(result) {
        const { block } = result.$format();
        if (!opts.showTxs) {
          delete block.txs;
        }
        shell.echo(hr);
        shell.echo(`Block#${result.block.height} ${pretty(block)}`);
        shell.echo('');
      })
      .on('error', err => {
        debug.error(err);
        shell.echo(
          `${symbols.error} block not found, maybe invalid height, run ${chalk.cyan(
            'forge status chain'
          )} to check latest height?`
        );
      });
  } catch (err) {
    debug.error(err);
    shell.echo(
      `${symbols.error} block not found, maybe invalid height, run ${chalk.cyan(
        'forge status chain'
      )} to check latest height?`
    );
  }
}

exports.run = execute;
exports.execute = execute;
