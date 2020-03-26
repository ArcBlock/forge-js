/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do exchange tx with graphql-client
 * Since exchange tx requires multi-parti-signature, it's complicated
 *
 * How to do a multisig?
 * First of all, for a tx that you received, generate a new structure `Multisig`.
 * Add `signer` (the address of the signer) and `data` field
 * (if no extra data, please keep it as default value - `nil`).
 * Then put the new structure into the 1st element of the `tx.signatures`.
 * Then encode the entire tx and sign it with private key as normal.
 * Then put the signed result into the `signature` field of the `Multisig` structure
 * of the 1st element of `tx.signatures`.
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/exchange.js`
 */

const GraphQLClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphQLClient({ endpoint: `${endpoint}/api` });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const sender = fromRandom();
    const receiver = fromRandom();
    console.log({
      sender: sender.toAddress(),
      receiver: receiver.toAddress(),
    });

    // 1. declare sender
    let hash = await client.declare({ moniker: 'sender', wallet: sender });
    console.log('declare.sender.result', hash);
    console.log('view sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);

    // 2. declare receiver
    hash = await client.declare({ moniker: 'receiver', wallet: receiver });
    console.log('declare.receiver.result', hash);
    console.log(
      'view receiver account',
      `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`
    );

    // 2.1 receiver checkin
    await client.checkin({ wallet: receiver });
    await sleep(3000);

    // 3. create asset for sender
    let assetAddress;
    // eslint-disable-next-line prefer-const
    [hash, assetAddress] = await client.createAsset({
      moniker: 'asset',
      data: {
        typeUrl: 'json',
        value: {
          key: 'value2',
          sn: Math.random(),
        },
      },
      wallet: sender,
    });
    console.log('create_asset.result', hash, assetAddress);
    console.log('view asset', `${endpoint}/node/explorer/assets/${assetAddress}`);
    await sleep(2000);

    // 4.1 Sender: encode and sign the transaction
    const tx1 = await client.prepareExchange({
      receiver: receiver.toAddress(),
      offerAssets: [assetAddress],
      demandToken: 5,
      wallet: sender,
    });

    // 4.2 Receiver: do the multi sig
    const tx2 = await client.finalizeExchange({
      tx: tx1,
      wallet: receiver,
    });

    console.log({ tx1, tx2 });

    // 4.3 Send the exchange tx
    hash = await client.exchange({
      tx: tx2,
      wallet: sender,
    });

    console.log('exchange hash', hash);
    console.log('exchange tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
