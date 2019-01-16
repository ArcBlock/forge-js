const shell = require('shelljs');
const { symbols, getSpinner } = require('core/ui');
const { config } = require('core/env');

// const questions = [
//   {
//     type: 'text',
//     name: 'PARAMETER_1',  // For primtive type parameter
//     message: 'Please write concise description:',
//     validate: input => {
//       if (!input || input.length < 10) return 'Description should be more than 10 characters long';
//       return true;
//     },
//   },
//   {
//     type: 'autocomplete',
//     name: 'PARAMETER_2',  // For array type parameter
//     message: 'Choose from a list:',
//     source: (anwsers, inp) => {
//       const input = inp || '';
//       return new Promise((resolve) => {
//         const result = fuzzy.filter(input, templates);
//         resolve(result.map(item => item.original));
//       });
//     },
//   },
// ];

function main() {
  const { forgeBinPath, forgeConfigPath } = config.cli;
  if (!forgeBinPath) {
    shell.echo(`${symbols.error} forgeBinPath not found, abort!`);
    return;
  }

  shell.exec(`FORGE_CONFIG=${forgeConfigPath} ${forgeBinPath} console`);
}

exports.run = main;
exports.execute = main;
