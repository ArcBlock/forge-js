const shell = require('shelljs');
const { fromUnitToToken } = require('@arcblock/forge-util');
const { createRpcClient, config } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [addr] }) {
  try {
    const client = createRpcClient();
    const address = addr === 'me' ? config.get('cli.wallet').address : addr;
    const stream = await client.getAccountState({ address });
    stream
      .on('data', (result) => {
        if (result && result.code === 0) {
          const { state } = result.$format();
          if (state) {
            state.balance = `${fromUnitToToken(state.balance)} TOKEN`;
            shell.echo(`${pretty(state)}`);
          } else {
            shell.echo(
              `${
                symbols.error
              } cannot get state for address \`${address}\`, please ensure it's valid`
            );
          }
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
