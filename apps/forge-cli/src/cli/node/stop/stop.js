/* eslint-disable consistent-return */
const shell = require('shelljs');
const { symbols, getSpinner } = require('core/ui');
const { config, getForgeProcesses, sleep, runNativeWebCommand } = require('core/env');

const stopForgeWeb = runNativeWebCommand('stop', { silent: true });

function isStopped() {
  const { starterBinPath, forgeConfigPath } = config.get('cli');
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${starterBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  return !!pidNumber;
}

function waitUntilStopped() {
  return new Promise(resolve => {
    if (isStopped(true)) {
      return resolve();
    }

    const timer = setInterval(() => {
      if (isStopped(true)) {
        clearInterval(timer);
        return resolve();
      }
    }, 800);
  });
}

async function main() {
  try {
    const list = await getForgeProcesses();
    const starterProcess = list.find(x => x.name === 'starter');
    if (!starterProcess) {
      throw new Error('cannot get starter process info');
    }

    shell.echo(`${symbols.success} Sending kill signal to forge daemon...`);
    const spinner = getSpinner('Waiting for forge daemon to stop...');
    spinner.start();
    const { code, stderr } = shell.exec(`kill ${starterProcess.pid}`, { silent: true });
    if (code !== 0) {
      spinner.fail(`Forge daemon stop failed ${stderr}!`);
      return;
    }

    try {
      await stopForgeWeb();
    } catch (err) {
      // do nothing
    }
    await waitUntilStopped();
    await sleep(5000);
    spinner.succeed('Forge daemon stopped!');

    process.exit(0);
  } catch (err) {
    shell.echo(`${symbols.error} cannot get daemon process info, ensure forge is started!`);
    process.exit(1);
  }
}

exports.run = main;
exports.execute = main;
