const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const shell = require('shelljs');
const safeEval = require('safe-eval');
const { enums } = require('@arcblock/forge-proto');
const { fakeMessage } = require('@arcblock/forge-message');
const { symbols, hr, pretty } = require('core/ui');
const { createRpcClient, config, debug } = require('core/env');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const fakeMessages = enums.SupportedTxs.reduce((acc, x) => {
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
          .filter(input || '', enums.SupportedTxs)
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
  const wallet = config.get('cli.wallet');

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
        debug.error(err);
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
