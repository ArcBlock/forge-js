const inquirer = require('inquirer');
const { getQuestions, main } = require('../stake/lib');

const action = 'unstake';

async function run() {
  const questions = await getQuestions(action);
  inquirer.prompt(questions).then(args => main(args, action));
}

exports.run = run;
exports.execute = args => main(args, action);
