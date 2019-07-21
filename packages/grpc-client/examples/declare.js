/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare an identity on the blockchain
 *
 * In real world, identities may belong to different entities: application, user, node, device
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/declare_account.js`
 */
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });

(async () => {
  try {
    // Send directly: GrpcClient will sign
    const wallet = fromRandom();
    const res = await client.sendDeclareTx({
      tx: {
        nonce: 0,
        itx: {
          moniker: `grpc_user_${Math.round(Math.random() * 10000)}`,
        },
      },
      wallet,
    });
    console.log('view account', `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`);
    console.log('view account tx', `${endpoint}/node/explorer/txs/${res}`);

    // Sign and then send: sendDeclareTx
    const user2 = fromRandom();
    const signed = await client.signDeclareTx({
      tx: {
        itx: {
          moniker: 'sign_and_send',
        },
      },
      wallet: user2,
    });
    const hash2 = await client.sendDeclareTx({ tx: signed, wallet: user2 });
    console.log('view user2 account', `${endpoint}/node/explorer/accounts/${user2.toAddress()}`);
    console.log('view user2 tx', `${endpoint}/node/explorer/txs/${hash2}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
