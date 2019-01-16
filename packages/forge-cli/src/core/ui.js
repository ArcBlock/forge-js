const ora = require('ora');
const symbols = require('log-symbols');

// TODO: random spinner style
// const spinners = require('cli-spinners');

// TODO: getProgress bar

module.exports = {
  symbols,
  getSpinner: opts => {
    const spinner = ora(opts);
    return spinner;
  },
};
