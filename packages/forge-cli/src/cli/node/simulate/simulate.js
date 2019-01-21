const shell = require('shelljs');
const chalk = require('chalk');
const { symbols } = require('core/ui');
const { runNativeSimulatorCommand } = require('core/env');

const startSimulator = runNativeSimulatorCommand('foreground');
const stopSimulator = runNativeSimulatorCommand('stop');
const getSimulatorPid = runNativeSimulatorCommand('pid', { silent: true });

async function main({ args: [action = 'start'] }) {
  const { stdout } = getSimulatorPid();
  const pidNumber = Number(stdout);
  if (action === 'start' && pidNumber) {
    shell.echo(`${symbols.error} simulator is already started!`);
    process.exit(0);
  } else if (!pidNumber) {
    shell.echo(`${symbols.error} simulator is not started yet!`);
    shell.echo(`${symbols.info} Please run ${chalk.cyan('forge simulate start')} first!`);
    process.exit(0);
  }

  if (action === 'start') {
    startSimulator();
    shell.echo(`${symbols.success} Simulator started`);
  }
  if (action === 'stop') {
    stopSimulator();
    shell.echo(`${symbols.success} Simulator stopped`);
  }

  process.exit();
}

exports.run = main;
exports.execute = main;
