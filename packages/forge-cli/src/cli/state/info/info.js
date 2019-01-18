const shell = require('shelljs');
const { createRpcClient } = require('core/env');
const { symbols, pretty, hr } = require('core/ui');

async function getChainInfo(client) {
  try {
    const res = await client.getChainInfo();
    shell.echo(`${symbols.success} Chain Info`);
    shell.echo(hr);
    shell.echo(pretty(res.$format().info));
  } catch (err) {
    shell.echo(`${symbols.error} rpc request field: ${err.message}`);
  }
}

async function getForgeInfo(client) {
  try {
    const res = await client.getForgeState();
    shell.echo(`${symbols.success} Forge State`);
    shell.echo(hr);
    shell.echo(pretty(res.$format().state));
  } catch (err) {
    shell.echo(`${symbols.error} rpc request field: ${err.message}`);
  }
}

async function main({ args: [mode = 'all'] }) {
  const client = createRpcClient();

  if (mode === 'chain') {
    await getChainInfo(client);
  }
  if (mode === 'forge') {
    await getForgeInfo(client);
  }
  if (mode === 'all') {
    await getChainInfo(client);
    await getForgeInfo(client);
  }
}

exports.run = main;
exports.execute = main;
