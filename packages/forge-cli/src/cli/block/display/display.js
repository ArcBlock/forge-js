const shell = require('shelljs');
const { createRpcClient } = require('core/env');
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
        if (result && result.code === 0) {
          shell.echo(`${pretty(result.$format().block)}`);
        } else {
          shell.echo(`${symbols.error} get block info error: ${pretty(result)}`);
        }
      })
      .on('error', err => {
        shell.echo(`${symbols.error} error: ${err}`);
      });
  } catch (err) {
    shell.echo(`${symbols.error} error: ${err}`);
  }
}

exports.run = execute;
exports.execute = execute;
