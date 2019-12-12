/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare an identity on the blockchain
 *
 * In real world, identities may belong to different entities: application, user, node, device
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/declare.js`
 */
const GraphqlClient = require('@arcblock/graphql-client');
const Mcrypto = require('@arcblock/mcrypto');
const { fromRandom, fromSecretKey, WalletType } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
// change this to your chain moderator sk before run the script
const sk = '<YOUR MODERATOR SK HERE>';

(async () => {
  try {
    const issuer = fromSecretKey(sk, WalletType({ role: Mcrypto.types.RoleType.ROLE_ACCOUNT }));
    console.log(issuer.toJSON());

    console.log('issuer', `${endpoint}/node/explorer/accounts/${issuer.toAddress()}`);

    // Sign and then send: sendDeclareTx
    const user = fromRandom();
    const tx1 = await client.prepareDeclare({
      issuer: issuer.toAddress(),
      moniker: 'user',
      wallet: user,
    });
    const tx2 = await client.finalizeDeclare({
      tx: tx1,
      wallet: issuer,
    });

    const hash = await client.sendDeclareTx({ tx: tx2, wallet: issuer });
    console.log('user', `${endpoint}/node/explorer/accounts/${user.toAddress()}`);
    console.log('tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
