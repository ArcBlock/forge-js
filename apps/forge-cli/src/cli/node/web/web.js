/* eslint no-case-declarations:"off" */
const shell = require('shelljs');
const { runNativeWebCommand, webUrl, debug, sleep } = require('core/env');
const { symbols } = require('core/ui');

const startWebUI = runNativeWebCommand('start', { silent: true });
const stopWebUI = runNativeWebCommand('stop', { silent: true });
const pidWebUI = runNativeWebCommand('pid', { silent: true });

function isForgeWebStarted() {
  const { stdout } = pidWebUI();
  if (Number(stdout)) {
    return true;
  }

  return false;
}

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

async function main({ args: [action = 'none'], opts }) {
  /* eslint-disable indent */
  switch (action) {
    case 'none':
      shell.exec('forge web -h --color always');
      break;
    case 'start':
      const { stdout, stderr } = startWebUI();
      processOutput(stdout || stderr, action);
      shell.echo(`${symbols.info} forge web running at:     ${webUrl()}`);
      shell.echo(`${symbols.info} graphql endpoint at:      ${webUrl()}/api`);
      shell.echo(`${symbols.info} graphql playground at:    ${webUrl()}/api/playground`);
      break;
    case 'stop':
      const { stdout: stdout2, stderr: stderr2 } = stopWebUI();
      debug('stop', { stdout2, stderr2 });
      processOutput(stdout2 || stderr2, action);
      break;
    case 'open':
      if (isForgeWebStarted() === false) {
        shell.echo(`${symbols.info} forge web not started yet`);
        await main({ args: ['start'] });
        await sleep(2000);
      }
      const url = opts.graphql ? `${webUrl()}/api/playground` : webUrl();
      shell.echo(`Opening ${url}...`);
      shell.exec(`open ${url}`);
      break;
    default:
      break;
  }
  /* eslint-enable indent */
}

exports.run = main;
exports.execute = main;
