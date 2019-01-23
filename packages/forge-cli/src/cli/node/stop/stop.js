const shell = require('shelljs');
const { symbols } = require('core/ui');
const { runNativeForgeCommand } = require('core/env');

const stop = runNativeForgeCommand('stop', { silent: true });
function main() {
  const { code, stderr } = stop();
  if (code === 0) {
    shell.echo(`${symbols.success} forge daemon stopped!`);
  } else {
    shell.echo(`${symbols.error} forge daemon stop failed ${stderr}!`);
  }
}

exports.run = main;
exports.execute = main;
