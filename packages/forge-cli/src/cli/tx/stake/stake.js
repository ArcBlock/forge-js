const inquirer = require('inquirer');
const { getQuestions, main } = require('./lib');

async function run() {
  const questions = await getQuestions('stake');
  inquirer.prompt(questions).then(args => main(args, 'stake'));
}

exports.run = run;
exports.execute = args => main(args, 'stake');
