const shell = require('shelljs');
const { config } = require('core/env');
const { symbols, hr } = require('core/ui');

async function execute() {
  const wallet = config.get('cli.wallet');
  shell.echo(hr);
  shell.echo(`${symbols.success} Current wallet: ${wallet.address}`);
  shell.echo(hr);
  shell.exec(`forge account ${wallet.address}`);
}

exports.run = execute;
exports.execute = execute;
