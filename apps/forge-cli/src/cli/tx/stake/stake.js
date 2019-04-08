const inquirer = require('inquirer');
const { getQuestions, getStakes, main } = require('./lib');

const direction = 'stake';

async function run({ args: [action = 'send'], opts }) {
  if (action === 'send') {
    const questions = await getQuestions(direction);
    inquirer.prompt(questions).then(args => main(args, direction));
  }
  if (action === 'show') {
    await getStakes(opts);
  }
}

exports.run = run;
exports.execute = args => main(args, direction);
