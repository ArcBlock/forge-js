const shell = require('shelljs');
const { config, requiredDirs, runNativeForgeCommand } = require('core/env');
const { hr } = require('core/ui');

const describe = runNativeForgeCommand('describe');

function main() {
  shell.echo(hr);
  shell.echo('Forge Daemon Info');
  shell.echo(hr);
  shell.exec('forge ps');

  shell.echo('');
  shell.echo(hr);
  shell.echo('Forge CLI Version');
  shell.echo(hr);
  shell.exec('forge --version');

  shell.echo('');
  shell.echo(hr);
  shell.echo('Forge CLI Env');
  shell.echo(hr);
  shell.echo('Required Dirs:');
  shell.echo(`  cache: ${requiredDirs.cache}`);
  shell.echo(`  release: ${requiredDirs.release}`);
  shell.echo(hr);
  shell.echo('Runtime config:');
  shell.echo(`  forgeBinPath: ${config.get('cli.forgeBinPath')}`);
  shell.echo(`  starterBinPath: ${config.get('cli.starterBinPath')}`);
  shell.echo(`  simulatorBinPath: ${config.get('cli.simulatorBinPath')}`);
  shell.echo(`  forgeConfigPath: ${config.get('cli.forgeConfigPath')}`);

  shell.echo('');
  shell.echo(hr);
  shell.echo('Forge Release Info');
  shell.echo(hr);
  describe();
}

exports.run = main;
exports.execute = main;
