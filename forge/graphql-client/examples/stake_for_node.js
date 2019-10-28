/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/stake_for_node.js`
 */
const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const user = fromRandom(type);

    // 1. declare user
    let hash = await client.sendDeclareTx({
      moniker: `stake_user_${Math.round(Math.random() * 10000)}`,
      wallet: user,
    });

    console.log('user account', `${endpoint}/node/explorer/accounts/${user.toAddress()}`);
    console.log('user declare tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 2. get free tokens to stake
    hash = await client.sendPokeTx({ wallet: user });
    console.log('user poke tx', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);

    // 3. get node address
    const { info } = await client.getChainInfo();
    const nodeAddress = info.address;

    // 4. stake for the node
    hash = await client.sendStakeTx({
      tx: {
        itx: {
          to: nodeAddress,
          value: fromTokenToUnit(10),
          message: 'Test Stake',
          data: {
            type: 'StakeForNode',
            value: {},
          },
        },
      },
      wallet: user,
    });
    console.log('user stake tx', `${endpoint}/node/explorer/txs/${hash}`);
    console.log('user stake to', `${endpoint}/node/explorer/accounts/${nodeAddress}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
