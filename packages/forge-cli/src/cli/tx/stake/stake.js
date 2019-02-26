const inquirer = require('inquirer');
const { getQuestions, main } = require('./lib');

const action = 'stake';

async function run() {
  const questions = await getQuestions(action);
  inquirer.prompt(questions).then(args => main(args, action));
}

exports.run = run;
exports.execute = args => main(args, action);
