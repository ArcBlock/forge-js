const shell = require('shelljs');
const { symbols, getSpinner } = require('core/ui');
const { runNativeForgeCommand } = require('core/env');

const stop = runNativeForgeCommand('stop', { silent: true });
function main() {
  shell.echo(`${symbols.success} Sending kill signal to forge daemon...`);
  const spinner = getSpinner('Waiting for forge daemon to stop...');
  spinner.start();
  const { code, stderr } = stop();
  if (code === 0) {
    spinner.succeed('Forge daemon stopped!');
  } else {
    spinner.fail(`Forge daemon stop failed ${stderr}!`);
  }
}

exports.run = main;
exports.execute = main;
