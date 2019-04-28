/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblokc/graphql-client node docs/poke.js`
 */
const Mcrypto = require('@arcblock/mcrypto');
const moment = require('moment');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const GraphqlClient = require('../src/node');

// const client = new GraphqlClient('https://test.abtnetwork.io/api'); // test
const client = new GraphqlClient('http://127.0.0.1:8210/api'); // local
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
      data: {
        moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
        type,
      },
      wallet,
    });

    console.log('declare.result', res);

    res = await client.sendPokeTx({
      data: {
        nonce: 0,
        date: moment(new Date().toISOString())
          .utc()
          .format('YYYY-MM-DD'),
        address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
      },
      wallet,
    });
    console.log('poke.result', res);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
