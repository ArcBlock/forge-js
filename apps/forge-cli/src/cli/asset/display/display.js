const shell = require('shelljs');
const { createRpcClient } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [address] }) {
  try {
    const client = createRpcClient();
    const stream = await client.getAssetState({ address: address });
    stream
      .on('data', function(result) {
        if (result && result.code === 0) {
          const { state } = result.$format();
          if (state) {
            shell.echo(`${pretty(state)}`);
          } else {
            shell.echo(
              `${
                symbols.error
              } cannot get state for address \`${address}\`, please ensure it's valid`
            );
          }
        } else {
          shell.echo(`${symbols.error} get asset info error: ${pretty(result)}`);
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
