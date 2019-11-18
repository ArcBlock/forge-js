/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/get_free_token.js`
 */
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });

(async () => {
  try {
    const wallet = fromRandom();
    let hash = await client.declare({
      moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
      wallet,
    });

    console.log('view account', `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`);
    console.log('declare tx', `${endpoint}/node/explorer/txs/${hash}`);

    hash = await client.checkin({ wallet });
    console.log('poke tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
