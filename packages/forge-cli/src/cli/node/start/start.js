const inquirer = require('inquirer');
const shell = require('shelljs');
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

exports.execute = main;
exports.run = () => {
  inquirer.prompt(questions).then(main);
};
