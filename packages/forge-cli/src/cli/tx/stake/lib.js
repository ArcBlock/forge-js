const fuzzy = require('fuzzy');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const { createRpcClient, config, debug } = require('core/env');
const { symbols } = require('core/ui');
const { enums } = require('@arcblock/forge-proto');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

async function getQuestions(action) {
  const state = await getState();
  const address = await getAddress();

  return [
    {
      type: 'autocomplete',
      name: 'type',
      message: `Choose ${action} type:`,
      source: (_, inp) =>
        new Promise(resolve => {
          resolve(fuzzy.filter(inp || '', enums.SupportedStakes).map(item => item.original));
        }),
    },
    {
      type: 'text',
      name: 'target',
      default: args => (args.type === 'StakeForNode' ? address : ''),
      message: `Address to ${action === 'stake' ? 'stake to' : 'unstake from'}?`,
      validate: input => {
        if (!input) {
          return `The address to ${action} can not be empty!`;
        }

        return true;
      },
    },
    {
      type: 'number',
      name: 'amount',
      message: `Amount of tokens to ${action} (minimum 1 token, ${
        action === 'stake' ? state.balance : state.stake.totalStakes
      } available)`,
      validate: input => {
        const value = Number(input);
        if (value <= 1) {
          return `The minimum amount to ${action} is 1 token`;
        }

        if (action === 'stake' && value > state.balance) {
          return 'Stake amount exceeds account balance';
        }

        if (action === 'unstake' && value > state.stake.totalStakes) {
          return 'Unstake amount exceeds staked total';
        }

        return true;
      },
    },
    {
      type: 'text',
      name: 'message',
      default: '',
      message: `Message to attach to the tx? ${chalk.gray('(optional)')}`,
    },
  ];
}

async function main(answers, action) {
  debug(action, answers);

  const { type, target, amount, message } = answers;
  const { address, token } = config.get('cli.wallet');
  const client = createRpcClient();

  try {
    const hash = await client.sendStakeTx({
      from: address,
      token,
      itx: {
        to: target,
        value: client.toArc(action === 'stake' ? amount : -amount),
        message,
        data: {
          type,
          value: {},
        },
      },
    });

    const typeStr = type.replace(/^StakeFor/i, '').toLowerCase();
    shell.echo(
      `${symbols.success} ${
        action === 'stake' ? 'stake to' : 'unstake from'
      } ${typeStr} ${chalk.cyan(target)} success!`
    );
    shell.echo(
      `${symbols.info} run ${chalk.cyan('forge status')} to check forge and chain state change`
    );
    shell.echo(`${symbols.info} run ${chalk.cyan(`forge tx ${hash}`)} to check tx state`);
    shell.echo(`${symbols.info} If tx not found, you can try some time later`);
  } catch (err) {
    if (err.errcode === 'INVALID_RECEIVER_STATE') {
      shell.echo(`${symbols.error} ${action} failed, please check address`);
    } else if (err.errcode === 'BANNED_UNSTAKE') {
      shell.echo(`${symbols.error} ${action} failed, ensure you can unstake at this time`);
    } else {
      shell.echo(`${symbols.error} ${action} failed: ${err.message || err.toString()}`);
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

async function getAddress() {
  const client = createRpcClient();
  const result = await client.getChainInfo({});
  // debug('stake node address', result.$format().info);
  return result.$format().info.address;
}

exports.getQuestions = getQuestions;
exports.main = main;
