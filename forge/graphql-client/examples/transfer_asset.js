/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do transfer asset
 * Since exchange tx requires multi-parti-signature, it's complicated
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/transfer_asset.js`
 */

const GraphqlClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
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
    console.log('view sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);
    console.log('view sender tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 2. declare receiver
    hash = await client.declare({ moniker: 'receiver', wallet: receiver });
    console.log(
      'view receiver account',
      `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`
    );
    console.log('view receiver tx', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);

    // 3. create asset for sender
    let assetAddress;
    // eslint-disable-next-line prefer-const
    [hash, assetAddress] = await client.createAsset({
      moniker: 'asset_to_be_transferred',
      data: {
        typeUrl: 'json',
        value: {
          value: 'something valuable',
          sn: Math.random(),
        },
      },
      wallet: sender,
    });
    console.log('created asset', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('created asset tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 4. transfer asset to receiver
    await sleep(3000);
    hash = await client.transfer({
      to: receiver.toAddress(),
      assets: [assetAddress],
      memo: 'this is the transfer note',
      wallet: sender,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
