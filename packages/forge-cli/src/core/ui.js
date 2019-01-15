const chalk = require('chalk');
const ora = require('ora');

// TODO: random spinner style
// const spinners = require('cli-spinners');

const crossMark = chalk.red('✘');
const checkMark = chalk.green('✔︎');

module.exports = {
  crossMark,
  checkMark,
  getSpinner: opts => {
    const spinner = ora(opts);
    return spinner;
  },
};
