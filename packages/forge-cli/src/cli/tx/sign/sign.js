const fuzzy = require('fuzzy');
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
    message: 'Select transaction type you want to sign:',
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
    message: 'Please enter the inner transaction:',
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

function main(data) {
  const { type, itx: itxStr } = data;
  const itx = safeEval(itxStr);
  const { wallet } = config.cli;

  return new Promise(resolve => {
    const account = client.getAccountState({ address: wallet.address });
    account.on('data', async ({ state }) => {
      try {
        const res = await client.createTx({
          from: wallet.address,
          token: wallet.token,
          nonce: state.nonce,
          itx: { type, value: itx },
        });
        debug(`sign ${type} tx`, res);
        shell.echo(`${symbols.success} tx create success!`);
        shell.echo(res.$format().tx);
      } catch (err) {
        console.error(err);
        shell.echo(`${symbols.error} tx create failed`);
      }

      resolve();
    });
  });
}

function run() {
  inquirer.prompt(questions).then(main);
}

exports.run = run;
exports.execute = main;
