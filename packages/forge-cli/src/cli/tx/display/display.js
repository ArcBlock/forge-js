const shell = require('shelljs');
const { createRpcClient, debug } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [hash] }) {
  if (!hash) {
    shell.exec('forge tx -h --color always');
    return;
  }
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
        debug.error(err, err.errno, err.errcode);
        shell.echo(`${symbols.error} transaction not found, maybe a invalid hash?`);
      });
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} transaction not found, check invalid hash?`);
  }
}

exports.run = execute;
exports.execute = execute;
