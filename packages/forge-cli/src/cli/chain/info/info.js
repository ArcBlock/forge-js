const shell = require('shelljs');
const { client } = require('core/env');
const { symbols, pretty } = require('core/ui');

async function getChainInfo() {
  try {
    const res = await client.getChainInfo();
    shell.echo(pretty(res.$format().info));
  } catch (err) {
    shell.echo(`${symbols.error} rpc request field: ${err.message}`);
  }
}

exports.run = getChainInfo;
exports.execute = getChainInfo;
