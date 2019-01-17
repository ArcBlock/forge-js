const shell = require('shelljs');
const { client } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [address] }) {
  try {
    const stream = await client.getAccountState({ address: address });
    stream
      .on('data', function(result) {
        if (result && result.code === 0) {
          shell.echo(`${pretty(result.$format().state)}`);
        } else {
          shell.echo(`${symbols.error} get account info error: ${pretty(result)}`);
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
