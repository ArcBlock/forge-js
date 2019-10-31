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
    const lily = fromRandom();
    console.log({
      alice: alice.toJSON(),
      bob: bob.toJSON(),
      betty: betty.toJSON(),
      lily: lily.toJSON(),
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

    // delegate from alice to betty
    const delegate = async (from, to, label) => {
      const [hash] = await client.delegate({
        from,
        to,
        privileges: [
          {
            typeUrl: 'fg:t:exchange',
            rules: [],
          },
        ],
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

    // 3. create asset for sender
    // eslint-disable-next-line prefer-const
    let [hash, assetAddress] = await client.createAsset({
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
    console.log('tx1', tx1);

    // 4.2 Receiver: do the multi sig
    const tx2 = await client.finalizeExchange({
      tx: tx1,
      wallet: lily,
      delegator: bob.toAddress(),
    });

    console.log('tx2', tx2);

    // 4.3 Send the exchange tx
    await sleep(3000);
    const hashExchange = await client.exchange({
      tx: tx2,
      wallet: betty,
    });

    console.log('exchange hash', hashExchange);
    console.log('view exchange', `${endpoint}/node/explorer/txs/${hashExchange}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
