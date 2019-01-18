const shell = require('shelljs');
const { client } = require('core/env');
const { symbols, pretty, hr } = require('core/ui');

async function getChainInfo() {
  try {
    const res = await client.getChainInfo();
    shell.echo(`${symbols.success} Chain Info`);
    shell.echo(hr);
    shell.echo(pretty(res.$format().info));
  } catch (err) {
    shell.echo(`${symbols.error} rpc request field: ${err.message}`);
  }
}

async function getForgeInfo() {
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
  if (mode === 'chain') {
    await getChainInfo();
  }
  if (mode === 'forge') {
    await getForgeInfo();
  }
  if (mode === 'all') {
    await getChainInfo();
    await getForgeInfo();
  }
}

exports.run = main;
exports.execute = main;
