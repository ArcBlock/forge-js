/* eslint no-console:"off" */

/**
 * This script demonstrates how to migrate account
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/migrate_account.js`
 */
const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');

const endpoint = 'https://test.abtnetwork.io'; // testnet
// const endpoint = 'http://127.0.0.1:8210'; // local
// const endpoint = 'http://did-workshop.arcblock.co:8210'; // workshop

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const migrateFrom = fromRandom(type);
    const migrateTo = fromRandom(type);

    // 1. declare migrate_from account
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `migrate_from_${Math.round(Math.random() * 10000)}`,
        },
      },
      wallet: migrateFrom,
    });

    console.log('from account', `${endpoint}/node/explorer/accounts/${migrateFrom.toAddress()}`);
    console.log('from account tx', `${endpoint}/node/explorer/txs/${res}`);

    // 2. declare migrate_to account
    res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `migrate_to_${Math.round(Math.random() * 10000)}`,
        },
      },
      wallet: migrateTo,
    });
    console.log('to account', `${endpoint}/node/explorer/accounts/${migrateTo.toAddress()}`);
    console.log('to account tx', `${endpoint}/node/explorer/txs/${res}`);
    await sleep(3000);

    // 3. FIXME: migrate: with from's pk/sk
    res = await client.sendAccountMigrateTx({
      tx: {
        itx: {
          address: migrateTo.toAddress(),
          pk: Buffer.from(hexToBytes(migrateTo.publicKey)),
          type,
        },
      },
      wallet: migrateFrom,
    });

    console.log('migrate tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
