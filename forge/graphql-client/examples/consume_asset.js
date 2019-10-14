/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates the whole workflow of consume assets with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/consume_asset.js`
 */

const GraphqlClient = require('@arcblock/graphql-client');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const issuer = fromRandom(); // the one create asset and responsible for consuming asset
    const consumer = fromRandom(); // the one bought the asset and want to use it
    console.log({ issuer: issuer.toJSON(), consumer: consumer.toJSON() });

    // 1. declare issuer
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'issuer',
        },
      },
      wallet: issuer,
    });
    console.log('issuer account', `${endpoint}/node/explorer/accounts/${issuer.toAddress()}`);
    console.log('issuer tx', `${endpoint}/node/explorer/txs/${res}`);

    // 2. declare consumer
    res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'consumer',
        },
      },
      wallet: consumer,
    });
    console.log('consumer account', `${endpoint}/node/explorer/accounts/${consumer.toAddress()}`);
    console.log('consumer tx', `${endpoint}/node/explorer/txs/${res}`);

    // 3. create asset for issuer
    const asset = {
      moniker: 'asset_to_be_consumed',
      readonly: true,
      transferrable: true,
      data: {
        typeUrl: 'json',
        value: {
          sn: Math.random(), // To make this asset uniq every time this script runs
          key: 'value2',
        },
      },
    };
    const assetAddress = toAssetAddress(asset);
    asset.address = assetAddress;
    res = await client.sendCreateAssetTx({
      tx: { itx: asset },
      wallet: issuer,
    });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('view asset tx', `${endpoint}/node/explorer/txs/${res}`);
    await sleep(3000);

    // 4. transfer asset from issuer to consumer
    res = await client.sendTransferTx({
      tx: { itx: { assets: [assetAddress], to: consumer.toAddress() } },
      wallet: issuer,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${res}`);

    // 5. Start multisig for asset consume
    const tx = await client.signConsumeAssetTx({
      tx: {
        itx: {
          issuer: issuer.toAddress(),
        },
      },
      wallet: issuer,
    });

    // 5.1 issuer: encode and sign the transaction
    console.log('issuer.signed', tx);

    // 5.2 consumer: populate signatures field
    const tx2 = await client.multiSignConsumeAssetTx({
      tx,
      wallet: consumer,
      data: {
        typeUrl: 'fg:x:address',
        value: assetAddress,
      },
    });
    console.log('consumer.signed', tx2);

    // 5.3 Send the consume tx
    await sleep(3000);
    res = await client.sendConsumeAssetTx({
      tx: tx2,
      wallet: issuer,
      signature: tx2.signature,
    });
    console.log('view consume tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
