const fuzzy = require('fuzzy');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const safeEval = require('safe-eval');
const { transactions } = require('@arcblock/forge-proto');
const { fakeMessage } = require('@arcblock/forge-sdk');
const { symbols, pretty } = require('core/ui');
const { client, config } = require('core/env');
const debug = require('debug')(require('../../../../package.json').name);

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const questions = [
  {
    type: 'autocomplete',
    name: 'type',
    message: 'Select transaction type you want to send:',
    source: (_, input) =>
      Promise.resolve(
        fuzzy
          .filter(input || '', transactions)
          .map(x => x.original)
          .sort()
      ),
  },
  {
    type: 'editor',
    name: 'itx',
    message: 'Please enter the itx data object (js supported):',
    default: answers => pretty(fakeMessage(answers.type), { colors: false }),
    validate: x => {
      try {
        safeEval(x);
      } catch (err) {
        return err.message || err.toString();
      }

      return true;
    },
  },
];

async function main(data) {
  const { type, itx: itxStr } = data;
  const itx = safeEval(itxStr);
  const { wallet } = config.cli;

  try {
    const method = `send${type}`;
    const res = await client[method]({
      from: wallet.address,
      token: wallet.token,
      itx,
    });

    debug(`send ${type} tx`, res);
    shell.echo(`${symbols.success} tx send success! ${chalk.cyan(res)}`);
  } catch (err) {
    console.error(err);
    shell.echo(`${symbols.error} tx send failed`);
  }
}

function run() {
  inquirer.prompt(questions).then(main);
}

exports.run = run;
exports.execute = main;
