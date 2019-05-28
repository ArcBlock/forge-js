const shell = require('shelljs');
const chalk = require('chalk');
const onExit = require('death');
const { enums } = require('@arcblock/forge-proto');
const { range, uniq } = require('lodash');
const { createRpcClient, debug } = require('core/env');
const { symbols, hr, pretty } = require('core/ui');

function parseBlockHeight(input, latest) {
  if (input === 'first') {
    return [1];
  }

  if (input === 'last' || input === 'latest') {
    return [latest];
  }

  // range
  if (input.indexOf('...') > 0) {
    const [lower, upper] = input.split('...').map(x => Number(x));
    debug('parseBlockHeight', { input, lower, upper, latest });
    if (lower && upper) {
      return range(lower, upper)
        .concat(upper)
        .filter(x => x > 0 && x <= latest);
    }
  }

  // number
  const tmp = input.split(',').filter(x => !!x);
  debug('parseBlockHeight', { input, tmp });
  if (!tmp.length) {
    shell.echo(`${symbols.info} query latest block at ${latest}`);
    return [latest];
  }

  // list
  return tmp
    .map(x => Number(x))
    .map(x => (x > 0 ? x : latest + x))
    .filter(x => x > 0 && x <= latest);
}

function displayBlock(res, opts) {
  const { block } = res.$format();
  if (!opts.showTxs) {
    delete block.txs;
  }
  shell.echo(hr);
  shell.echo(`Block#${res.block.height} ${pretty(block)}`);
  shell.echo('');
}

async function fetchBlocks(client, heights, opts) {
  try {
    const stream = await client.getBlock(heights.map(x => ({ height: x })));
    stream
      .on('data', d => displayBlock(d, opts))
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

async function streamingBlocks(client, opts) {
  let topic = '';
  client
    .subscribe({ type: enums.TopicType.END_BLOCK, filter: '' })
    .on('data', (res) => {
      debug('streamingBlocks.data', res);
      if (res.topic) {
        shell.echo(`${symbols.success} Subscribe success, topic: ${res.topic}`);
        shell.echo(`${symbols.info} Waiting for new blocks...`);
        // eslint-disable-next-line prefer-destructuring
        topic = res.topic;
        return;
      }

      if (res.endBlock && res.endBlock.height) {
        client
          .getBlock(res.endBlock)
          .on('data', d => displayBlock(d, opts))
          .on('error', debug.error);
      }
    })
    .on('error', err => {
      debug.error(err);
      shell.echo(`${symbols.error} block streaming error, ${err.message || err.toString()}`);
    });

  onExit(async () => {
    if (topic) {
      shell.echo(`${symbols.info} Unsubscribing...`);
      await client.unsubscribe({ topic });
      process.exit();
    }
  });
}

async function execute({ args: [height = ''], opts = {} }) {
  const client = createRpcClient();
  if (opts.stream) {
    await streamingBlocks(client, opts);
  } else {
    const { info } = await client.getChainInfo({});
    const heights = uniq(parseBlockHeight(height, info.blockHeight));
    debug('Query Blocks on height', heights);

    await fetchBlocks(client, heights, opts);
  }
}

exports.run = execute;
exports.execute = execute;
