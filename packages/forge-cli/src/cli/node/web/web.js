const shell = require('shelljs');
const { runNativeForgeCommand, debug } = require('core/env');
const { symbols } = require('core/ui');

const startWebUI = runNativeForgeCommand('rpc "Application.start(:cover)"', { silent: true });
const stopWebUI = runNativeForgeCommand('rpc "Application.stop(:cover)"', { silent: true });

function processOutput(output, action) {
  if (/:error/.test(output)) {
    shell.echo(`${symbols.error} web ${action} failed: ${output.trim()}`);
  } else {
    shell.echo(`${symbols.success} forge web ui ${action} success!`);
  }
}

async function main({ args: [action] }) {
  if (action === 'start') {
    const { stdout, stderr } = startWebUI();
    processOutput(stdout || stderr, action);
  }
  if (action === 'stop') {
    const { stdout, stderr } = stopWebUI();
    debug('stop', { stdout, stderr });
    processOutput(stdout || stderr, action);
  }
  if (action === 'open') {
    shell.exec('open http://localhost:8210');
  }
}

exports.run = main;
exports.execute = main;
