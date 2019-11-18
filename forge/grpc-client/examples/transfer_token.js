/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to transfer tokens between 2 accounts
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/transfer_token.js`
 */

const moment = require('moment');
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const sender = fromRandom();
    const receiver = fromRandom();
    console.log({
      sender: sender.toAddress(),
      receiver: receiver.toAddress(),
    });

    // 1. Declare sender
    let hash = await client.declare({ moniker: 'sender', wallet: sender });
    console.log('sender declare tx', `${endpoint}/node/explorer/txs/${hash}`);
    console.log('sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);

    // 2. Declare receiver
    hash = await client.declare({ moniker: 'receiver', wallet: receiver });
    console.log('receiver declare tx', `${endpoint}/node/explorer/txs/${hash}`);
    console.log('receiver account', `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`);

    await sleep(3000);

    // 3. Poke for sender
    hash = await client.checkin({ wallet: sender });
    console.log('sender poke tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 4. Poke for receiver
    hash = await client.checkin({ wallet: receiver });
    console.log('receiver poke tx', `${endpoint}/node/explorer/txs/${hash}`);

    await sleep(3000);

    // 5. Transfer token
    hash = await client.transfer({
      to: receiver.toAddress(),
      token: 10,
      wallet: sender,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
