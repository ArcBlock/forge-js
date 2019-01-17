const ora = require('ora');
const util = require('util');
const symbols = require('log-symbols');

// TODO: random spinner style
// const spinners = require('cli-spinners');

// TODO: getProgress bar

module.exports = {
  symbols,
  pretty: data => util.inspect(data, { depth: 8, colors: true, compact: false }),
  getSpinner: opts => {
    const spinner = ora(opts);
    return spinner;
  },
};
