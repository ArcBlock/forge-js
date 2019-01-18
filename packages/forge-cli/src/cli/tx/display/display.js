const shell = require('shelljs');
const { createRpcClient } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [hash] }) {
  try {
    const client = createRpcClient();
    const stream = await client.getTx({ hash: hash });
    stream
      .on('data', function(result) {
        if (result && result.code === 0) {
          shell.echo(`${pretty(result.$format().info.tx)}`);
        } else {
          shell.echo(`${symbols.error} get tx error: ${pretty(result)}`);
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
