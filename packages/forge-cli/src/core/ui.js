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
  pretty: data => util.inspect(data, { depth: 8, colors: true, compact: false }),
  getSpinner: opts => {
    const spinner = ora(opts);
    return spinner;
  },
};
