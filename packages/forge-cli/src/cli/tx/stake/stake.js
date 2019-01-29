const fuzzy = require('fuzzy');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const { createRpcClient, config, debug } = require('core/env');
const { symbols } = require('core/ui');
const { enums } = require('@arcblock/forge-proto');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getQuestions(state) {
  return [
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
      message: `tokens to (un)stake (minimum 1 token, ${state.balance} available, ${
        state.stake.totalStakes
      } staked)`,
      validate: input => {
        const value = Number(input);
        if (!value || (value > 0 && value < 1) || (value < 0 && value > -1)) {
          return 'The minimum amount to stake is 1 token';
        }

        if (value > 0 && value > state.balance) {
          return 'Stake amount exceeds account balance';
        }

        if (value < 0 && Math.abs(value) > state.stake.totalStakes) {
          return 'Unstake amount exceeds staked total';
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
}

async function main(answers) {
  debug('stake', answers);

  const { type, target, amount, message } = answers;
  const { address, token } = config.get('cli.wallet');
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
    shell.echo(`${symbols.info} If tx not found, you can try some time later`);
  } catch (err) {
    if (err.errcode === 'INVALID_RECEIVER_STATE') {
      shell.echo(`${symbols.error} stake failed, please check stake target address`);
    } else if (err.errcode === 'BANNED_UNSTAKE') {
      shell.echo(`${symbols.error} stake failed, ensure you can unstake at this time`);
    } else {
      shell.echo(`${symbols.error} stake failed`);
    }
  }
}

function getState() {
  return new Promise(resolve => {
    const client = createRpcClient();
    const { address } = config.get('cli.wallet');
    const stream = client.getAccountState({ address });
    stream
      .on('data', function(result) {
        if (result && result.code === 0) {
          const { state } = result.$format();
          debug('getState', result.$format().state);
          state.balance = client.fromArc(state.balance);
          state.stake.totalStakes = client.fromArc(state.stake.totalStakes);

          resolve(state);
        } else {
          resolve({ balance: 0, stake: { totalStakes: 0 } });
        }
      })
      .on('error', () => {
        resolve({ balance: 0, stake: { totalStakes: 0 } });
      });
  });
}

// Run the cli interactively
async function run() {
  const state = await getState();
  const questions = await getQuestions(state);
  inquirer.prompt(questions).then(main);
}

exports.run = run;
exports.execute = main;
