/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do delegate tx with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/delegate_transfer.js`
 */

const GraphQLClient = require('@arcblock/graphql-client');
const moment = require('moment');
const { toDelegateAddress } = require('@arcblock/did-util');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

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
      const hash = await client.sendDeclareTx({
        tx: {
          itx: {
            moniker: `user_${moniker}`,
          },
        },
        wallet,
      });
      console.log(`${moniker}.declare.result`, hash);
      console.log(
        `${moniker}.account.detail`,
        `${endpoint}/node/explorer/accounts/${wallet.toAddress()}`
      );
    };

    const checkin = async (wallet, moniker) => {
      const hash = await client.sendPokeTx({
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
      console.log(`${moniker}.checkin.result`, hash);
    };

    // declare accounts
    await declare(alice, 'alice');
    await declare(bob, 'bob');
    await declare(betty, 'betty');

    // wait
    await sleep(3000);

    // checkin accounts
    await checkin(alice, 'alice');
    await checkin(bob, 'bob');
    // await checkin(betty, 'betty');

    // delegate from alice to betty
    const address = toDelegateAddress(alice.toAddress(), betty.toAddress());
    const hash = await client.sendDelegateTx({
      tx: {
        itx: {
          address,
          to: betty.toAddress(),
          ops: [
            {
              typeUrl: 'fg:t:transfer',
              rules: [],
            },
          ],
        },
      },
      wallet: alice,
    });
    console.log('alice.delegate.hash', hash);

    // transfer from alice to bob by betty
    const hash2 = await client.sendTransferTx({
      tx: {
        itx: {
          to: bob.toAddress(),
          value: fromTokenToUnit(1, 18),
        },
      },
      delegatee: alice.toAddress(),
      wallet: betty,
    });
    console.log('betty.transfer.hash', hash2);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
