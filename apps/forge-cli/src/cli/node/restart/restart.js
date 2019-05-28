/* eslint-disable consistent-return */
const shell = require('shelljs');
const chalk = require('chalk');
const { getForgeProcesses } = require('core/env');
const { symbols, getSpinner } = require('core/ui');

async function main({ args: [app = 'none'] }) {
  if (app === 'none') {
    shell.exec('forge restart -h --color always');
    process.exit(0);
  }

  const processes = await getForgeProcesses();

  if (!processes.length) {
    shell.echo(
      `${symbols.warning} forge daemon not started yet, start with ${chalk.cyan('forge start')}`
    );
    shell.echo('');
    process.exit(0);
  }

  const pattern = new RegExp(app, 'i');
  const processInfo = processes.find(x => pattern.test(x.name));

  if (processInfo) {
    const oldPid = processInfo.pid;
    shell.echo(`${symbols.success} process id for ${app}: ${oldPid}`);
    shell.exec(`kill ${oldPid}`);
    shell.echo(`${symbols.success} sending kill signal to ${oldPid}`);
    const spinner = getSpinner(`Waiting for ${app} to restart...`);
    spinner.start();
    const newPid = await waitUntilRestart(app, oldPid);
    spinner.succeed(`Restart success! new pid is ${newPid}`);
    shell.exec('forge ps');
  } else {
    shell.echo(`${symbols.error} process not found for ${app}`);
  }

  process.exit();
}

function waitUntilRestart(app, oldPid) {
  return new Promise(resolve => {
    const timer = setInterval(() => {
      const newPid = isRestarted(app, oldPid);
      if (newPid) {
        clearInterval(timer);
        return resolve(newPid);
      }
    }, 500);
  });
}

async function isRestarted(app, oldPid) {
  const processes = await getForgeProcesses();
  if (!processes.length) {
    return false;
  }

  const pattern = new RegExp(app, 'i');
  const processInfo = processes.find(x => pattern.test(x.name));

  if (processInfo && processInfo.pid > oldPid) {
    return processInfo.pid;
  }

  return false;
}

exports.run = main;
exports.execute = main;
