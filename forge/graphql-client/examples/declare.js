/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare an identity on the blockchain
 *
 * In real world, identities may belong to different entities: application, user, node, device
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/declare_account.js`
 */
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);

(async () => {
  try {
    // Send without sign
    const user1 = fromRandom();
    const hash1 = await client.declare({
      moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
      data: { type: 'json', value: Math.random() },
      wallet: user1,
    });

    console.log('view user1 account', `${endpoint}/node/explorer/accounts/${user1.toAddress()}`);
    console.log('view user1 tx', `${endpoint}/node/explorer/txs/${hash1}`);

    // Sign and then send: sendDeclareTx
    const user2 = fromRandom();
    const signed = await client.signDeclareTx({
      tx: {
        itx: {
          moniker: 'sign_and_send',
          data: { type: 'json', value: Math.random() },
        },
      },
      wallet: user2,
    });
    const hash2 = await client.sendDeclareTx({ tx: signed, wallet: user2 });
    console.log('view user2 account', `${endpoint}/node/explorer/accounts/${user2.toAddress()}`);
    console.log('view user2 tx', `${endpoint}/node/explorer/txs/${hash2}`);

    // Sign and then send: sendTx
    const user3 = fromRandom();
    const signed3 = await client.signDeclareTx({
      tx: {
        itx: {
          moniker: 'sign_and_send',
          data: { type: 'json', value: Math.random() },
        },
      },
      wallet: user3,
      encoding: 'base64',
    });
    const hash3 = await client.sendTx({ tx: signed3 });
    console.log('view user3 account', `${endpoint}/node/explorer/accounts/${user3.toAddress()}`);
    console.log('view user3 tx', `${endpoint}/node/explorer/txs/${hash3.hash}`);

    const user4 = fromRandom('eth');
    const hash4 = await client.declare({
      moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
      wallet: user4,
    });
    console.log('view user4 account', `${endpoint}/node/explorer/accounts/${user4.toAddress()}`);
    console.log('view user4 tx', `${endpoint}/node/explorer/txs/${hash4.hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
