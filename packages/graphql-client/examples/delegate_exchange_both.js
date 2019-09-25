/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do delegate tx with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/delegate_transfer.js`
 */

const moment = require('moment');
const GraphQLClient = require('@arcblock/graphql-client');
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
    const lily = fromRandom();
    console.log({
      alice: alice.toJSON(),
      bob: bob.toJSON(),
      betty: betty.toJSON(),
      lily: lily.toJSON(),
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

    // delegate from alice to betty
    const delegate = async (from, to, label) => {
      const address = toDelegateAddress(from.toAddress(), to.toAddress());
      const hash = await client.sendDelegateTx({
        tx: {
          itx: {
            address,
            to: to.toAddress(),
            ops: [
              {
                typeUrl: 'fg:t:exchange',
                rules: [],
              },
            ],
          },
        },
        wallet: from,
      });
      console.log(`${label}.delegate.hash`, hash);
    };

    // declare accounts
    await declare(alice, 'alice');
    await declare(bob, 'bob');
    await declare(betty, 'betty');
    await declare(lily, 'lily');

    // wait
    await sleep(3000);

    // checkin accounts
    await checkin(alice, 'alice');
    await checkin(bob, 'bob');
    // await checkin(betty, 'betty');
    // await checkin(lily, 'lily');

    // delegate
    await delegate(alice, betty, 'alice');
    await delegate(bob, lily, 'bob');
    await sleep(3000);

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
    console.log('encoded1', encoded1);

    // 4.2 Receiver: do the multi sig
    const encoded2 = await client.multiSignExchangeTx({
      tx: encoded1,
      wallet: lily,
      delegatee: bob.toAddress(),
    });

    console.log('encoded2', encoded2);

    // 4.3 Send the exchange tx
    await sleep(3000);
    const hashExchange = await client.sendExchangeTx({
      tx: encoded2,
      wallet: lily,
      signature: encoded2.signature,
    });

    console.log('exchange hash', hashExchange);
    console.log('view exchange', `${endpoint}/node/explorer/txs/${hashExchange}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
