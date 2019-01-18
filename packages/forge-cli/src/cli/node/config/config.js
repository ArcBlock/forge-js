const fs = require('fs');
const shell = require('shelljs');
const { symbols, hr } = require('core/ui');
const { config } = require('core/env');

function main() {
  const { forgeConfigPath } = config.cli;
  shell.echo(hr);
  shell.echo(`${symbols.info} config file path: ${forgeConfigPath}`);
  shell.echo(hr);
  shell.echo(fs.readFileSync(forgeConfigPath).toString());
}

exports.run = main;
exports.execute = main;
