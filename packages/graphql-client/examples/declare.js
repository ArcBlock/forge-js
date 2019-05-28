/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare an identity on the blockchain
 *
 * In real world, identities may belong to different entities: application, user, node, device
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/declare_account.js`
 */
const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const type = WalletType({
  // Different entities maybe choose different wallet role type
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const wallet = fromRandom(type);
    const res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: `poke_user_${Math.round(Math.random() * 10000)}`,
        },
      },
      wallet,
    });

    console.log('declare.result', res);
    console.log('view account', `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`);
    console.log('view account tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
