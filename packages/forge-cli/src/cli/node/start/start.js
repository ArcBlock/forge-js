const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const { execSync } = require('child_process');
const { symbols } = require('core/ui');
const { config } = require('core/env');

const questions = [
  {
    type: 'list',
    name: 'mode',
    message: 'Select forge start mode',
    default: 'console',
    choices: [
      new inquirer.Separator(),
      { value: 'console', name: 'Start forge with a interactive console attached' },
      { value: 'start', name: 'Start forge as a daemon in the background' },
      { value: 'foreground', name: 'Start forge in the foreground' },
    ],
  },
];

function isStarted() {
  const { forgeBinPath, forgeConfigPath } = config.get('cli');
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (pidNumber) {
    shell.echo(`${symbols.info} forge is already started!`);
    shell.echo(`${symbols.info} Please run ${chalk.cyan('forge stop')} first!`);
    return true;
  }

  return false;
}

function main({ mode = 'console' } = {}) {
  const { forgeBinPath, forgeConfigPath } = config.get('cli');
  if (!forgeBinPath) {
    shell.echo(`${symbols.error} forgeBinPath not found, abort!`);
    return;
  }

  const command = `FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} ${mode}`;
  if (mode === 'console') {
    execSync(command, { stdio: 'inherit' });
  } else {
    shell.exec(command);
  }
}

exports.execute = () => {
  if (isStarted()) {
    return;
  }
  main();
};

exports.run = () => {
  if (isStarted()) {
    return;
  }
  inquirer.prompt(questions).then(main);
};
