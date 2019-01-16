const chalk = require('chalk');
const ora = require('ora');

// TODO: random spinner style
// const spinners = require('cli-spinners');

// TODO: getProgress bar

// Symbols
const crossMark = chalk.red('✘');
const checkMark = chalk.green('✔︎');
const warnMark = chalk.yellow('�');

module.exports = {
  crossMark,
  checkMark,
  warnMark,
  getSpinner: opts => {
    const spinner = ora(opts);
    return spinner;
  },
};
