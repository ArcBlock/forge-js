/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/get_free_token.js`
 */
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
(async () => {
  try {
    const wallet = fromRandom();
    let res = await client.declare({
      moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
      wallet,
    });

    console.log('declare.result', res);
    console.log('view account', `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`);

    res = await client.checkin({ wallet });
    console.log('poke.result', res);
    console.log('view tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
