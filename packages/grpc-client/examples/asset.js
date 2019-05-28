/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to create and update asset
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/asset.js`
 */

const Mcrypto = require('@arcblock/mcrypto');
const GRpcClient = require('@arcblock/grpc-client');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const owner = fromRandom(type);
    console.log({ owner: owner.toJSON() });

    // 1. declare owner
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'owner',
        },
      },
      wallet: owner,
    });
    console.log('declare.owner.result', res);
    console.log('view owner account', `${endpoint}/node/explorer/accounts/${owner.toAddress()}`);

    // 2. create asset for owner
    const asset = {
      moniker: 'asset',
      readonly: false, // if we want to update the asset, we should set this to false
      transferrable: false,
      data: {
        typeUrl: 'json',
        value: {
          key: 'value',
        },
      },
    };
    const assetAddress = toAssetAddress(asset, owner.toAddress());
    asset.address = assetAddress;
    res = await client.sendCreateAssetTx({ tx: { itx: asset }, wallet: owner });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('create asset tx', `${endpoint}/node/explorer/txs/${res}`);

    // wait for asset state consolidates
    await sleep(5000);

    // 3. read asset
    const { state } = await client.getAssetState({ address: assetAddress });
    console.log('asset state', state);

    // 4. update asset
    res = await client.sendUpdateAssetTx({
      tx: {
        itx: {
          moniker: 'asset_updated',
          address: assetAddress,
          data: {
            typeUrl: 'json',
            value: {
              key: 'value updated',
            },
          },
        },
      },
      wallet: owner,
    });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('update asset tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
