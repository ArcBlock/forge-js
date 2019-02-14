const shell = require('shelljs');
const { createRpcClient, debug } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function execute({ args: [address] }) {
  try {
    const client = createRpcClient();
    const stream = await client.getAccountState({ address: address });
    stream
      .on('data', function(result) {
        debug('accountState', result.state.stake.recentStakes);
        if (result && result.code === 0) {
          const { state } = result.$format();
          state.balance = `${client.fromArc(state.balance)} TOKEN`;
          shell.echo(`${pretty(state)}`);
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
