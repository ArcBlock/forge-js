const shell = require('shelljs');
const { client } = require('core/env');
const { symbols } = require('core/ui');
const pretty = require('json-stringify-pretty-compact');

// FIXME
async function execute({ args: [address] }) {
  if (!address) {
    shell.echo(`${symbols.error} Please input an account address and try again.`);
    return;
  }
  try {
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
