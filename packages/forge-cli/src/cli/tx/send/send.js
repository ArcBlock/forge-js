const fuzzy = require('fuzzy');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const safeEval = require('safe-eval');
const { enums } = require('@arcblock/forge-proto');
const { fakeMessage } = require('@arcblock/forge-sdk');
const { symbols, hr, pretty } = require('core/ui');
const { createRpcClient, config } = require('core/env');
const debug = require('debug')(require('../../../../package.json').name);

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const fakeMessages = enums.SupportedTxs.reduce((acc, x) => {
  acc[x] = pretty(fakeMessage(x), { colors: false });
  return acc;
}, {});

const questions = [
  {
    type: 'autocomplete',
    name: 'type',
    message: 'Select transaction type you want to send:',
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
    message: 'Please enter the itx data object (js supported):',
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

async function main(data) {
  const client = createRpcClient();
  const { type, itx: itxStr } = data;
  const itx = safeEval(itxStr, { client });
  const { wallet } = config.cli;

  shell.echo(hr);
  shell.echo(pretty(itx));
  shell.echo(hr);

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
