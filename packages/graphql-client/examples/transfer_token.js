/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to transfer tokens between 2 accounts
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/transfer_token.js`
 */

const moment = require('moment');
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const sender = fromRandom();
    const receiver = fromRandom();
    console.log({
      sender: sender.toJSON(),
      receiver: receiver.toJSON(),
    });

    // 1. Declare sender
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'sender',
        },
      },
      wallet: sender,
    });
    console.log('sender declare tx', `${endpoint}/node/explorer/txs/${res}`);
    console.log('sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);

    // 2. Declare receiver
    res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'receiver',
        },
      },
      wallet: receiver,
    });
    console.log('receiver declare tx', `${endpoint}/node/explorer/txs/${res}`);
    console.log('receiver account', `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`);

    await sleep(3000);

    // 3. Poke for sender
    res = await client.sendPokeTx({
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet: sender,
    });
    console.log('sender poke tx', `${endpoint}/node/explorer/txs/${res}`);

    // 4. Poke for receiver
    res = await client.sendPokeTx({
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet: receiver,
    });
    console.log('receiver poke tx', `${endpoint}/node/explorer/txs/${res}`);

    await sleep(3000);

    // 5. Transfer token
    res = await client.sendTransferTx({
      tx: {
        itx: {
          to: receiver.toAddress(),
          value: fromTokenToUnit(10),
        },
      },
      wallet: sender,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
