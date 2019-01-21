const fuzzy = require('fuzzy');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const { createRpcClient, config, debug } = require('core/env');
const { symbols } = require('core/ui');
const { enums } = require('@arcblock/forge-proto');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const questions = [
  {
    type: 'autocomplete',
    name: 'type',
    message: 'Choose stake type:',
    source: (_, inp) =>
      new Promise(resolve => {
        resolve(fuzzy.filter(inp || '', enums.SupportedStakes).map(item => item.original));
      }),
  },
  {
    type: 'text',
    name: 'target',
    message: 'Address to stake for?',
    validate: input => {
      if (!input) {
        return 'The target address to stake can not be empty!';
      }

      return true;
    },
  },
  {
    type: 'number',
    name: 'amount',
    message: 'tokens to stake (minimum 1 token)',
    validate: input => {
      if (input <= 0) {
        return 'The minimum amount to stake is 1 token';
      }

      return true;
    },
  },
  {
    type: 'text',
    name: 'message',
    message: `Message to attach to the stake tx? ${chalk.gray('(optional)')}`,
  },
];

async function main(answers) {
  debug('stake', answers);

  const { type, target, amount, message } = answers;
  const { address, token } = config.cli.wallet;
  const client = createRpcClient();

  try {
    const hash = await client.sendStakeTx({
      from: address,
      token,
      itx: {
        to: target,
        value: client.toArc(amount),
        message,
        data: {
          type,
          value: {},
        },
      },
    });

    const typeStr = type.replace(/^StakeFor/i, '').toLowerCase();
    shell.echo(`${symbols.success} stake to ${typeStr} ${chalk.cyan(target)} success!`);
    shell.echo(
      `${symbols.info} run ${chalk.cyan('forge status')} to check forge and chain state change`
    );
    shell.echo(`${symbols.info} run ${chalk.cyan(`forge tx ${hash}`)} to check tx state`);
  } catch (err) {
    debug.error('stake error', err);
    shell.echo(`${symbols.error} stake failed`);
  }
}

// Run the cli interactively
function run() {
  inquirer.prompt(questions).then(main);
}

exports.run = run;
exports.execute = main;
