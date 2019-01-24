/* eslint no-case-declarations:"off" */
const shell = require('shelljs');
const { runNativeForgeCommand, debug } = require('core/env');
const { symbols } = require('core/ui');

const webUrl = 'http://localhost:8210';
const startWebUI = runNativeForgeCommand('rpc "Application.start(:forge_web)"', { silent: true });
const stopWebUI = runNativeForgeCommand('rpc "Application.stop(:forge_web)"', { silent: true });

function processOutput(output, action) {
  if (/:error/.test(output)) {
    if (/:already_started/.test(output)) {
      shell.echo(`${symbols.warning} forge web already started`);
    } else {
      shell.echo(`${symbols.error} forge web ${action} failed: ${output.trim()}`);
    }
  } else {
    shell.echo(`${symbols.success} forge web ${action} success!`);
  }
}

async function main({ args: [action = 'none'] }) {
  /* eslint-disable indent */
  switch (action) {
    case 'none':
      shell.exec('forge web -h');
      break;
    case 'start':
      const { stdout, stderr } = startWebUI();
      processOutput(stdout || stderr, action);
      shell.echo(`${symbols.info} running at: ${webUrl}`);
      break;
    case 'stop':
      const { stdout2, stderr2 } = stopWebUI();
      debug('stop', { stdout2, stderr2 });
      processOutput(stdout2 || stderr2, action);
      break;
    case 'open':
      shell.echo(`Opening ${webUrl}...`);
      shell.exec(`open ${webUrl}`);
      break;
    default:
      break;
  }
  /* eslint-enable indent */
}

exports.run = main;
exports.execute = main;
