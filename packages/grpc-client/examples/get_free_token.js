/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/get_free_token.js`
 */
const moment = require('moment');
const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = 'https://test.abtnetwork.io'; // testnet
// const endpoint = 'http://127.0.0.1:8210'; // local
// const endpoint = 'http://did-workshop.arcblock.co:8210'; // workshop

const client = new GraphqlClient(`${endpoint}/api`);
const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const wallet = fromRandom(type);
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
          type,
        },
      },
      wallet,
    });

    console.log('declare.result', res);
    console.log('view account', `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`);

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
      wallet,
    });
    console.log('poke.result', res);
    console.log('view tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
