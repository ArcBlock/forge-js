/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to subscribe a transfer
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/subscribe_transfer.js`
 */

const moment = require('moment');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');
const GraphqlClient = require('../lib/node');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const sender = fromRandom();
    const receiver = fromRandom();
    console.log({ sender: sender.toJSON() });
    console.log({ receiver: receiver.toJSON() });

    const declare = async (wallet, name) =>
      client.sendDeclareTx({
        tx: {
          itx: {
            moniker: name,
          },
        },
        wallet,
      });

    const checkin = async wallet =>
      client.sendPokeTx({
        tx: {
          nonce: 0,
          itx: {
            date: moment(new Date().toISOString())
              .utc()
              .format('YYYY-MM-DD'),
            address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
          },
        },
        wallet,
      });

    // subscribe(topic: "transfer", filter: "value.itx.to=\\"${receiver.toAddress()}\\"");
    const subscription = await client.subscribe({ topic: 'transfer' });

    subscription.on('data', d => console.log('onTransfer', d));
    subscription.on('error', console.error);

    // 1. declare user
    console.log('declare sender', await declare(sender, 'sender'));
    console.log('declare receiver', await declare(receiver, 'receiver'));
    await sleep(3000);

    // 2. checkin
    console.log('checkin sender', await checkin(sender));
    console.log('checkin receiver', await checkin(receiver));
    await sleep(3000);

    // 5. Transfer token
    const hash = await client.sendTransferTx({
      tx: {
        itx: {
          to: receiver.toAddress(),
          value: fromTokenToUnit(10),
        },
      },
      wallet: sender,
    });
    console.log('transfer.hash', hash);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
