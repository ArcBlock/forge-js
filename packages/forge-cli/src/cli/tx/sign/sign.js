const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const shell = require('shelljs');
const safeEval = require('safe-eval');
const { transactions } = require('@arcblock/forge-proto');
const { fakeMessage } = require('@arcblock/forge-sdk');
const { symbols, hr, pretty } = require('core/ui');
const { createRpcClient, config } = require('core/env');
const debug = require('debug')(require('../../../../package.json').name);

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const fakeMessages = transactions.reduce((acc, x) => {
  acc[x] = pretty(fakeMessage(x), { colors: false });
  return acc;
}, {});

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
    default: answers => fakeMessages[answers.type],
    validate: x => {
      try {
        safeEval(x, { client: createRpcClient() });
      } catch (err) {
        return err.message || err.toString();
      }

      return true;
    },
  },
];

function main(data) {
  const client = createRpcClient();
  const { type, itx: itxStr } = data;
  const itx = safeEval(itxStr, { client });
  const { wallet } = config.cli;

  shell.echo(hr);
  shell.echo(pretty(itx));
  shell.echo(hr);

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
