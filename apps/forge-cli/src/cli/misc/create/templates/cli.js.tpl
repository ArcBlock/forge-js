const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const shell = require('shelljs');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const questions = [
  {
    type: 'text',
    name: 'PARAMETER_1',  // For primtive type parameter
    message: 'Please write concise description:',
    validate: input => {
      if (!input || input.length < 10) return 'Description should be more than 10 characters long';
      return true;
    },
  },
  {
    type: 'autocomplete',
    name: 'PARAMETER_2',  // For array type parameter
    message: 'Choose from a list:',
    source: (anwsers, inp) => {
      const input = inp || '';
      return new Promise((resolve) => {
        const result = fuzzy.filter(input, templates);
        resolve(result.map(item => item.original));
      });
    },
  },
];

// Execute the cli silently.
function execute(data) {
  const { PARAMETER_1, PARAMETER_2 } = data;
  // PLEASE REMOVE ME
  // your action function call here. e.g.
  // your_action(PARAMETER_1, PARAMETER_2);
}

// Run the cli interactively
function run() {
  inquirer.prompt(questions).then((answers) => {
    const { PARAMETER_1, PARAMETER_2 } = answers;
    // PLEASE REMOVE ME
    // your action function call here. e.g.
    // your_action(PARAMETER_1, PARAMETER_2);
  });
}

exports.run = run;
exports.execute = execute;
