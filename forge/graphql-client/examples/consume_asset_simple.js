/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates the whole workflow of consume assets with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/consume_asset_simple.js`
 */

const GraphQLClient = require('@arcblock/graphql-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphQLClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const issuer = fromRandom(); // the one create asset and responsible for consuming asset
    const consumer = fromRandom(); // the one bought the asset and want to use it
    console.log({
      issuer: issuer.toAddress(),
      consumer: consumer.toAddress(),
    });

    // 1. declare issuer
    let hash = await client.declare({ moniker: 'issuer', wallet: issuer });
    console.log('issuer account', `${endpoint}/node/explorer/accounts/${issuer.toAddress()}`);
    console.log('issuer tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 2. declare consumer
    hash = await client.declare({ moniker: 'consumer', wallet: consumer });
    console.log('consumer account', `${endpoint}/node/explorer/accounts/${consumer.toAddress()}`);
    console.log('consumer tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 3. create asset for issuer
    let assetAddress;
    // eslint-disable-next-line prefer-const
    [hash, assetAddress] = await client.createAsset({
      moniker: 'asset_to_be_consumed',
      data: {
        typeUrl: 'json',
        value: {
          sn: Math.random(), // To make this asset uniq every time this script runs
          key: 'value2',
        },
      },
      wallet: issuer,
    });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('view asset tx', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);

    // 4. transfer asset from issuer to consumer
    hash = await client.transfer({
      to: consumer.toAddress(),
      assets: [assetAddress],
      wallet: issuer,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);
    const { state } = await client.getAssetState({ address: assetAddress });
    console.log('asset state', state);

    // 5.1 issuer: encode and sign the transaction
    const tx = await client.prepareConsumeAsset({
      issuer: issuer.toAddress(),
      wallet: issuer,
    });

    // 5.2 consumer: populate signatures field
    const tx2 = await client.finalizeConsumeAsset({
      tx,
      wallet: consumer,
      address: assetAddress,
    });
    // console.log('consumer.signed', inspect(tx2));

    // 5.3 Send the consume tx
    await sleep(3000);
    hash = await client.consumeAsset({
      tx: tx2,
      wallet: consumer,
    });
    console.log('view consume tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
