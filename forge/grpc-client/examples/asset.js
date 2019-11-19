/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to create and update asset
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/asset.js`
 */

const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const owner = fromRandom();
    console.log({ owner: owner.toAddress() });

    // 1. declare owner
    let hash = await client.declare({ moniker: 'owner', wallet: owner });
    console.log('declare.owner.result', hash);
    console.log('view owner account', `${endpoint}/node/explorer/accounts/${owner.toAddress()}`);

    // 2. create asset for owner
    let assetAddress;
    // eslint-disable-next-line prefer-const
    [hash, assetAddress] = await client.createAsset({
      moniker: 'asset',
      readonly: false, // if we want to update the asset, we should set this to false
      transferrable: false,
      data: {
        typeUrl: 'json',
        value: {
          key: 'value',
        },
      },
      wallet: owner,
    });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('create asset tx', `${endpoint}/node/explorer/txs/${hash}`);

    // wait for asset state consolidates
    await sleep(5000);

    // 3. read asset
    const { state } = await client.getAssetState({ address: assetAddress });
    console.log('asset state', state);

    // 4. update asset
    hash = await client.updateAsset({
      moniker: 'asset_updated',
      address: assetAddress,
      data: {
        typeUrl: 'json',
        value: {
          key: 'value updated',
        },
      },
      wallet: owner,
    });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('update asset tx', `${endpoint}/node/explorer/txs/${hash}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
