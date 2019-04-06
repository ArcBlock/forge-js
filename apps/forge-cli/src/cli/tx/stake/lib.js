const fuzzy = require('fuzzy');
const chalk = require('chalk');
const inquirer = require('inquirer');
const shell = require('shelljs');
const Table = require('cli-table-redemption');
const { createRpcClient, config, debug } = require('core/env');
const { symbols } = require('core/ui');
const { enums, getMessageType, fromTypeUrl } = require('@arcblock/forge-proto');
const { formatMessage } = require('@arcblock/grpc-client');

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
        action === 'stake' ? state.balance : state.stake.totalStakes - state.stake.totalUnstakes
      } available)`,
      validate: input => {
        const value = Number(input);
        if (value <= 1) {
          return `The minimum amount to ${action} is 1 token`;
        }

        if (action === 'stake' && value > state.balance) {
          return 'Stake amount exceeds account balance';
        }

        if (action === 'unstake' && value > state.stake.totalStakes - state.stake.totalUnstakes) {
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
        value: client.fromTokenToUnit(action === 'stake' ? amount : -amount),
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
          state.balance = client.fromUnitToToken(state.balance);
          state.stake.totalStakes = client.fromUnitToToken(state.stake.totalStakes);
          state.stake.totalUnstakes = client.fromUnitToToken(state.stake.totalUnstakes);

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

async function getStakes(opts) {
  const client = createRpcClient();
  const address = opts.address || config.get('cli.wallet').address;
  try {
    const res = await client.listTransactions({
      paging: { size: 100 },
      addressFilter: { sender: address },
      typeFilter: { types: ['stake'] },
    });

    const txs = res.transactionsList;
    if (!txs.length) {
      shell.echo(`${symbols.warning} no stake transaction found for ${address}`);
      return;
    }

    const table = new Table({
      head: ['Type', 'To', 'Value', 'Message', 'Time'],
      style: { 'padding-left': 1, head: ['cyan', 'bold'], compact: true },
      colWidths: [15, 40, 10, 20, 24],
    });

    // shell.echo(`${symbols.success} found ${txs.length} stakes for address ${address}`);
    txs.forEach(x => {
      const type = fromTypeUrl(x.tx.itx.typeUrl);
      const { fn: Message } = getMessageType(type);
      const itx = formatMessage(type, Message.deserializeBinary(x.tx.itx.value).toObject());
      table.push([
        itx.data.type,
        itx.to,
        client.fromUnitToToken(itx.value),
        itx.message,
        x.time.slice(0, 19),
      ]);
    });
    shell.echo(table.toString());
  } catch (err) {
    shell.echo(`${symbols.error} failed to fetch stake transaction for ${address}`);
  }
}

exports.getQuestions = getQuestions;
exports.getStakes = getStakes;
exports.main = main;
