const shell = require('shelljs');
const { createRpcClient } = require('core/env');
const { symbols } = require('core/ui');

async function execute({ args: [address] }) {
  try {
    const client = createRpcClient();
    await client.removeWallet({ address });
    shell.echo(`${symbols.success} remove account success: ${address}`);
  } catch (err) {
    shell.echo(`${symbols.error} error: ${err}`);
  }
}

exports.run = execute;
exports.execute = execute;
