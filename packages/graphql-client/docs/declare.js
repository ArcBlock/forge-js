/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node docs/declare.js`
 */
const Mcrypto = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const GraphqlClient = require('../src/node');

const client = new GraphqlClient('https://test.abtnetwork.io/api'); // test
// const client = new GraphqlClient('http://127.0.0.1:8210/api'); // local
// const client = new GraphqlClient('http://did-workshop.arcblock.co:8210/api'); // workshop

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
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
