const shell = require('shelljs');
const chalk = require('chalk');
const { createRpcClient, debug } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [argHeight] }) {
  if (!/^[1-9]\d*$/.test(argHeight)) {
    shell.echo(`${symbols.error} Please input a right block height and try again.`);
    return;
  }
  try {
    const client = createRpcClient();
    const stream = await client.getBlock({ height: argHeight });
    stream
      .on('data', function(result) {
        shell.echo(`${pretty(result.$format().block)}`);
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
