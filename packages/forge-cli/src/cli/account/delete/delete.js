const shell = require('shelljs');
const { createRpcClient } = require('core/env');
const { symbols } = require('core/ui');
const pretty = require('json-stringify-pretty-compact');

// FIXME
async function execute({ args: [address] }) {
  try {
    const client = createRpcClient();
    const stream = await client.removeWallet({ address: address });
    stream
      .on('data', function(result) {
        shell.echo(`${symbols.success} remove account success: `);
        shell.echo(`${pretty(result)}`);
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
