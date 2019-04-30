/* eslint no-console:"off" */

/**
 * This script demonstrates the whole workflow of consume assets with graphql-client
 *
 * Run script with: `DEBUG=@arcblock/graphql-client node examples/consume_asset.js`
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
    const issuer = fromRandom(type); // the one create asset and responsible for consuming asset
    const consumer = fromRandom(type); // the one bought the asset and want to use it
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
          key: 'value2',
        },
      },
    };
    const assetAddress = toAssetAddress(asset, issuer.toAddress());
    asset.address = assetAddress;
    res = await client.sendCreateAssetTx({
      tx: { itx: asset },
      wallet: issuer,
    });
    console.log('view asset state', `${endpoint}/node/explorer/assets/${assetAddress}`);
    console.log('view asset tx', `${endpoint}/node/explorer/txs/${res}`);

    // Start multisig for asset consume

    const tx = {
      from: issuer.toAddress(),
      pk: Buffer.from(hexToBytes(issuer.publicKey)), // pk of application
      itx: {
        issuer: issuer.toAddress(),
      },
    };

    console.log('consume.start', tx);

    // 4.1 issuer: encode and sign the transaction
    const { buffer, object: encoded1 } = await client.encodeConsumeAssetTx({
      tx,
      wallet: issuer,
    });
    const issuerSignature = issuer.sign(buffer);
    console.log('issuer.encoded', encoded1);
    console.log(
      'issuer.encoded.itx',
      Uint8Array.from(Buffer.from(encoded1.itx.value, 'base64')).toString()
    );
    console.log('issuer.signature', issuerSignature);
    console.log('issuer.signatureBin', Uint8Array.from(hexToBytes(issuerSignature)).toString());

    // 4.2 consumer: populate signatures field
    tx.signature = Buffer.from(hexToBytes(issuerSignature));
    tx.nonce = encoded1.nonce;
    tx.from = encoded1.from;
    tx.signatures = [
      {
        pk: Buffer.from(hexToBytes(consumer.publicKey)),
        signer: consumer.toAddress(),
        data: {
          typeUrl: 'fg:x:address',
          value: assetAddress,
        },
      },
    ];

    // 4.2 consumer: do multi signature, and attach signature to signatures list
    const { buffer: consumerBuffer, object: encoded2 } = await client.encodeConsumeAssetTx({
      tx,
      wallet: consumer,
    });
    const receiverSignature = consumer.sign(consumerBuffer);
    encoded2.signatures = encoded2.signaturesList;
    delete encoded2.signaturesList;
    const receiverSig = encoded2.signatures.find(x => x.signer === consumer.toAddress());
    receiverSig.signature = Buffer.from(hexToBytes(receiverSignature));

    console.log('consumer.encoded', encoded2);
    console.log('consumer.signature', receiverSignature);
    delete encoded2.signature;

    // 4.3 Send the consume tx
    await sleep(5000);
    res = await client.sendConsumeAssetTx({
      tx: encoded2,
      wallet: issuer,
      signature: issuerSignature,
    });
    console.log('view consume tx', `${endpoint}/node/explorer/txs/${res}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
