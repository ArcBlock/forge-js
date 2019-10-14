/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do delegate tx with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/delegate_exchange.js`
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
              typeUrl: 'fg:t:exchange',
              rules: [],
            },
          ],
        },
      },
      wallet: alice,
    });
    console.log('alice.delegate.hash', hash);

    // assemble exchange tx: multisig
    const exchange = {
      itx: {
        to: bob.toAddress(),
        sender: {
          value: fromTokenToUnit(5, 18),
        },
        receiver: {
          value: fromTokenToUnit(1, 18),
        },
      },
    };

    // 4.1 Sender: encode and sign the transaction
    const encoded1 = await client.signExchangeTx({
      tx: exchange,
      wallet: betty,
      delegatee: alice.toAddress(),
    });

    // 4.2 Receiver: do the multi sig
    const encoded2 = await client.multiSignExchangeTx({
      tx: encoded1,
      wallet: bob,
    });

    // 4.3 Send the exchange tx
    await sleep(3000);
    const hashExchange = await client.sendExchangeTx({
      tx: encoded2,
      wallet: bob,
      signature: encoded1.signature,
    });

    console.log('exchange hash', hashExchange);
    console.log('view exchange', `${endpoint}/node/explorer/txs/${hashExchange}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
