/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do delegate tx with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/delegate_exchange.js`
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
    await sleep(3000);

    // checkin accounts
    await checkin(alice, 'alice');
    await checkin(bob, 'bob');
    await sleep(3000);

    // delegate from alice to betty
    const hash = await client.delegate({
      from: alice,
      to: betty,
      privileges: [
        {
          typeUrl: 'fg:t:exchange',
          rules: [],
        },
      ],
    });
    console.log('alice.delegate.hash', hash);

    // 3. create asset for sender
    // eslint-disable-next-line prefer-const
    let [, assetAddress] = await client.createAsset({
      moniker: 'asset',
      data: {
        typeUrl: 'json',
        value: {
          key: 'value2',
          sn: Math.random(),
        },
      },
      wallet: bob,
    });
    console.log('create_asset.result', hash, assetAddress);
    console.log('view asset', `${endpoint}/node/explorer/assets/${assetAddress}`);
    await sleep(3000);

    // 4.1 Sender: encode and sign the transaction
    const tx1 = await client.prepareExchange({
      receiver: bob.toAddress(),
      offerToken: 5,
      demandAssets: [assetAddress],
      wallet: betty,
      delegator: alice.toAddress(),
    });

    // 4.2 Receiver: do the multi sig
    const tx2 = await client.finalizeExchange({
      tx: tx1,
      wallet: bob,
    });

    // 4.3 Send the exchange tx
    const hashExchange = await client.exchange({
      tx: tx2,
      wallet: bob,
    });

    console.log('exchange hash', hashExchange);
    console.log('view exchange', `${endpoint}/node/explorer/txs/${hashExchange}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
