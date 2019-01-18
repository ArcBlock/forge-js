const shell = require('shelljs');
const { runNativeForgeCommand } = require('core/env');
const { hr } = require('core/ui');

const describe = runNativeForgeCommand('describe');

function main() {
  shell.echo(hr);
  shell.echo('Forge Daemon Info');
  shell.echo(hr);
  shell.exec('forge ps');

  shell.echo('');
  shell.echo(hr);
  shell.echo('Forge CLI Info');
  shell.echo(hr);
  shell.exec('forge --version');
  shell.echo('');

  shell.echo(hr);
  shell.echo('Forge Release Info');
  shell.echo(hr);
  describe();
}

exports.run = main;
exports.execute = main;
