const shell = require('shelljs');
const { createRpcClient, debug } = require('core/env');
const { symbols, pretty } = require('core/ui');

// TODO: this command is incomplete due to: https://github.com/ArcBlock/forge/issues/221
async function main() {
  const client = createRpcClient();
  try {
    const res = await client.declareNode({});
    shell.echo(`${symbols.success} successfully declared current node as validator candidate`);
    shell.echo(pretty(res.$format()));
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} declare current running node as validator candidate failed!`);
  }
}

exports.run = main;
exports.execute = main;
