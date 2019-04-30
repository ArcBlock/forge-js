/* eslint no-console:"off" */

/**
 * This script demonstrates how to do transfer asset
 * Since exchange tx requires multi-parti-signature, it's complicated
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/transfer_asset.js`
 */

const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/graphql-client');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');

const endpoint = 'https://test.abtnetwork.io'; // testnet
// const endpoint = 'http://127.0.0.1:8210'; // local
// const endpoint = 'http://did-workshop.arcblock.co:8210'; // workshop

const client = new GraphqlClient(`${endpoint}/api`);
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const sender = fromRandom(type);
    const receiver = fromRandom(type);
    console.log({
      sender: sender.toJSON(),
      receiver: receiver.toJSON(),
    });

    // 1. declare sender
    let res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'sender',
          pk: Buffer.from(hexToBytes(sender.publicKey)),
          type,
        },
      },
      wallet: sender,
    });
    console.log('view sender account', `${endpoint}/node/explorer/accounts/${sender.toAddress()}`);
    console.log('view sender tx', `${endpoint}/node/explorer/txs/${res}`);

    // 2. declare receiver
    res = await client.sendDeclareTx({
      tx: {
        itx: {
          moniker: 'receiver',
          pk: Buffer.from(hexToBytes(receiver.publicKey)),
          type,
        },
      },
      wallet: receiver,
    });
    console.log(
      'view receiver account',
      `${endpoint}/node/explorer/accounts/${receiver.toAddress()}`
    );
    console.log('view receiver tx', `${endpoint}/node/explorer/txs/${res}`);

    // 3. create asset for sender
    const asset = {
      moniker: 'asset_to_be_transferred',
      readonly: true,
      transferrable: true,
      data: {
        typeUrl: 'json',
        value: {
          value: 'something valuable',
        },
      },
    };
    const assetAddress = toAssetAddress(asset, sender.toAddress());
    asset.address = assetAddress;
    res = await client.sendCreateAssetTx({
      tx: { itx: asset },
      wallet: sender,
    });
    console.log('created asset', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('created asset tx', `${endpoint}/node/explorer/txs/${res}`);

    // 4. transfer asset to receiver
    await sleep(3000);
    res = await client.sendTransferTx({
      tx: {
        itx: {
          to: receiver.toAddress(),
          assets: [assetAddress],
        },
      },
      wallet: sender,
    });
    console.log('view transfer tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
