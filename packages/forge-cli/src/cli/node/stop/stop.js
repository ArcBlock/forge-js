const shell = require('shelljs');
const { symbols, getSpinner } = require('core/ui');
const { getForgeProcesses } = require('core/env');

async function main() {
  try {
    const list = await getForgeProcesses();
    const heartProcess = list.find(x => x.name === 'forge');
    if (!heartProcess) {
      throw new Error('cannot get heart process info');
    }

    shell.echo(`${symbols.success} Sending kill signal to forge daemon...`);
    const spinner = getSpinner('Waiting for forge daemon to stop...');
    spinner.start();
    const { code, stderr } = shell.exec(`kill ${heartProcess.pid}`);
    if (code === 0) {
      spinner.succeed('Forge daemon stopped!');
    } else {
      spinner.fail(`Forge daemon stop failed ${stderr}!`);
    }
    process.exit(0);
  } catch (err) {
    shell.echo(`${symbols.error} cannot get daemon process info, ensure forge is started!`);
    process.exit(1);
  }
}

exports.run = main;
exports.execute = main;
