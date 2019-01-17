const shell = require('shelljs');
const { runNativeForgeCommand } = require('core/env');

const describe = runNativeForgeCommand('describe');
const pid = runNativeForgeCommand('pid');

function main() {
  shell.echo('Forge release info');
  describe();

  shell.echo('');
  shell.echo('Forge running node PID');
  pid();
}

exports.run = main;
exports.execute = main;
