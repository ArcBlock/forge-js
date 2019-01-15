/* eslint no-console:"off" */
const inquirer = require('inquirer');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const questions = [
  {
    type: 'confirm',
    name: 'node',
    message: 'Found a local node (0xdeadbeef), is this the one for backup?',
    default: false,
  },
  {
    type: 'list',
    name: 'type',
    message: 'Select backup type',
    choices: ['config', 'full'],
  },
  {
    type: 'confirm',
    name: 'start',
    message: 'Start the backup now?',
  },
];

// Execute the cli silently.
function execute(data) {
  const { node, type, start } = data;
  console.log(`execute for ${node}, ${type}, ${start}`);
}

// Run the cli interactively
function run() {
  inquirer.prompt(questions).then(answers => {
    const { node, type, start } = answers;
    console.log(`execute for ${node}, ${type}, ${start}`);
  });
}

exports.run = run;
exports.execute = execute;
