const ora = require('ora');
const util = require('util');
const inquirer = require('inquirer');
const symbols = require('log-symbols');

// TODO: random spinner style
// const spinners = require('cli-spinners');

// TODO: getProgress bar

module.exports = {
  symbols,
  hr: new inquirer.Separator().line,
  pretty: (data, options) =>
    util.inspect(data, Object.assign({ depth: 8, colors: true, compact: false }, options)),
  getSpinner: opts => {
    const spinner = ora(opts);
    return spinner;
  },
};
