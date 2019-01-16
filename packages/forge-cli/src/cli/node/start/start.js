const inquirer = require('inquirer');
const shell = require('shelljs');
const { symbols } = require('core/ui');
const { config } = require('core/env');

const questions = [
  {
    type: 'list',
    name: 'mode',
    message: 'Select forge start mode',
    default: 'start',
    choices: [
      new inquirer.Separator(),
      { value: 'start', name: 'Start forge as a daemon' },
      { value: 'foreground', name: 'Start forge in the foreground' },
      { value: 'console', name: 'Start forge with a console attached' },
    ],
  },
];

function main({ mode = 'start' } = {}) {
  const { forgeBinPath, forgeConfigPath } = config.cli;
  if (!forgeBinPath) {
    shell.echo(`${symbols.error} forgeBinPath not found, abort!`);
    return;
  }

  shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} ${mode}`);
}

exports.execute = main;
exports.run = () => {
  inquirer.prompt(questions).then(main);
};
