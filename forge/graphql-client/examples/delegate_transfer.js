/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do delegate tx with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/delegate_transfer.js`
 */

const GraphQLClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphQLClient({ endpoint: `${endpoint}/api` });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const alice = fromRandom();
    const bob = fromRandom();
    const betty = fromRandom();
    console.log({
      alice: alice.toJSON(),
      bob: bob.toJSON(),
      betty: betty.toJSON(),
    });

    const declare = async (wallet, moniker) => {
      const hash = await client.declare({ moniker: `user_${moniker}`, wallet });
      console.log(`${moniker}.declare.result`, hash);
      console.log(
        `${moniker}.account.detail`,
        `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`
      );
    };

    const checkin = async (wallet, moniker) => {
      const hash = await client.checkin({ wallet });
      console.log(`${moniker}.checkin.result`, hash);
    };

    // declare accounts
    await declare(alice, 'alice');
    await declare(bob, 'bob');
    await declare(betty, 'betty');

    // wait
    await sleep(1000);

    // checkin accounts
    await checkin(alice, 'alice');
    await checkin(bob, 'bob');
    // await checkin(betty, 'betty');

    // delegate from alice to betty
    const [hash] = await client.delegate({
      from: alice,
      to: betty,
      privileges: [
        {
          typeUrl: 'fg:t:transfer',
          rules: [],
        },
      ],
    });
    console.log('alice.delegate.hash', hash);

    // transfer from alice to bob by betty
    const hash2 = await client.transfer({
      to: bob.toAddress(),
      token: 1,
      delegator: alice.toAddress(),
      wallet: betty,
    });
    console.log('betty.transfer.hash', hash2);

    await sleep(1000);
    const hash3 = await client.revokeDelegate({
      from: alice,
      to: betty,
      privileges: ['fg:t:transfer'],
    });
    console.log('alice.revokeDelegate.hash', hash3);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
