const shell = require('shelljs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { config } = require('core/env');
const { symbols } = require('core/ui');

async function main({ opts: { yes } }) {
  // Confirm stopped
  const { starterBinPath, forgeConfigPath } = config.get('cli');
  const { stdout: pid } = shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${starterBinPath} pid`, {
    silent: true,
  });

  const pidNumber = Number(pid);
  if (pidNumber) {
    shell.echo(`${symbols.error} forge is running!`);
    shell.echo(`${symbols.info} Please run ${chalk.cyan('forge stop')} first, then we can reset!`);
    process.exit(0);
    return;
  }

  // Confirm
  let confirm = yes;
  if (!yes) {
    const questions = [
      {
        type: 'confirm',
        name: 'confirm',
        default: false,
        message: chalk.red(
          'Reset chain state will erase all local data, including transactions/logs, are you sure to continue?'
        ),
      },
    ];
    const answers = await inquirer.prompt(questions);
    // eslint-disable-next-line prefer-destructuring
    confirm = answers.confirm;
  }

  if (confirm) {
    shell.exec('rm -rf ~/.forge_release');
    shell.echo(`${symbols.info} rm -rf ~/.forge_release`);
    shell.exec('rm -rf ~/.forge_cli/keys');
    shell.echo(`${symbols.info} rm -rf ~/.forge_cli/keys`);
  } else {
    shell.echo(`${symbols.info} User abort, nothing changed!`);
    process.exit();
  }
}

exports.run = main;
exports.execute = main;
