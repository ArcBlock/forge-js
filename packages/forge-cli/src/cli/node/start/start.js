const fs = require('fs');
const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const { execSync } = require('child_process');
const { symbols } = require('core/ui');
const { config, debug } = require('core/env');

const questions = [
  {
    type: 'list',
    name: 'mode',
    message: 'Select forge start mode',
    default: 'start',
    choices: [
      new inquirer.Separator(),
      { value: 'start', name: 'Start forge as a daemon in the background' },
      { value: 'console', name: 'Start forge with a interactive console attached' },
      { value: 'foreground', name: 'Start forge in the foreground' },
    ],
  },
];

function getForgeReleaseEnv() {
  if (process.env.FORGE_RELEASE && fs.existsSync(process.env.FORGE_RELEASE)) {
    return process.env.FORGE_RELEASE;
  }

  return config.get('cli.forgeReleaseDir');
}

function isStarted(silent = false) {
  const { starterBinPath, forgeConfigPath } = config.get('cli');
  const { stdout: pid } = shell.exec(
    `FORGE_CONFIG=${forgeConfigPath} FORGE_RELEASE=${getForgeReleaseEnv()} ${starterBinPath} pid`,
    {
      silent: true,
    }
  );

  const pidNumber = Number(pid);
  if (pidNumber) {
    if (silent === false) {
      shell.echo(`${symbols.info} forge is already started!`);
      shell.echo(`${symbols.info} Please run ${chalk.cyan('forge stop')} first!`);
    }
    return true;
  }

  return false;
}

async function main({ mode = 'start' } = {}) {
  const { starterBinPath, forgeConfigPath } = config.get('cli');
  if (!starterBinPath) {
    shell.echo(`${symbols.error} starterBinPath not found, abort!`);
    return;
  }

  const command = `FORGE_CONFIG=${forgeConfigPath} FORGE_RELEASE=${getForgeReleaseEnv()} ${starterBinPath} ${mode}`;
  debug('start command', command);
  if (mode === 'console') {
    execSync(command, { stdio: 'inherit' });
  } else {
    shell.exec(command);
  }

  if (mode === 'start') {
    await waitUntilStarted();
    shell.echo(`${symbols.success} forge daemon successfully started`);
    shell.exec('forge ps');
  }
}

function waitUntilStarted() {
  return new Promise(resolve => {
    if (isStarted(true)) {
      return resolve();
    }

    const timer = setInterval(() => {
      if (isStarted(true)) {
        clearInterval(timer);
        return resolve();
      }
    }, 800);
  });
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
