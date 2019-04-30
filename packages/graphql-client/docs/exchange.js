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
 * Run script with: `DEBUG=@arcblokc/graphql-client node docs/exchange.js`
 */

const Mcrypto = require('@arcblock/mcrypto');
const { toAssetAddress } = require('@arcblock/did-util');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes, fromTokenToUnit } = require('@arcblock/forge-util');

const GraphqlClient = require('../src/node');

const client = new GraphqlClient('https://test.abtnetwork.io/api'); // test
// const client = new GraphqlClient('http://127.0.0.1:8210/api'); // local
// const client = new GraphqlClient('http://did-workshop.arcblock.co:8210/api'); // workshop
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

    // Declare sender
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
    console.log('declare.sender.result', res);

    // Declare receiver
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
    console.log('declare.receiver.result', res);

    // Create asset for sender
    const asset = {
      moniker: 'asset',
      readonly: true,
      transferrable: true,
      data: {
        typeUrl: 'json',
        value: {
          key: 'value2',
        },
      },
    };
    const assetAddress = toAssetAddress(asset, sender.toAddress());
    asset.address = assetAddress;
    res = await client.sendCreateAssetTx({
      tx: { itx: asset },
      wallet: sender,
    });
    console.log('create_asset.result', res, assetAddress);

    // assemble exchange tx: multisig
    const exchange = {
      pk: Buffer.from(hexToBytes(sender.publicKey)), // pk of application
      itx: {
        to: receiver.toAddress(),
        sender: {
          // What we offer
          assets: [assetAddress],
        },
        receiver: {
          // What user offer
          value: {
            value: Buffer.from(fromTokenToUnit(0).toBuffer()),
            minus: false,
          },
        },
      },
    };

    console.log('exchange.input', exchange);

    console.log('');
    console.log('---------ENCODE.1-----------------------------------------');
    console.log('');

    const { buffer: senderBuffer, object: encoded1 } = await client.encodeExchangeTx({
      tx: exchange,
      wallet: sender,
    });
    const senderSignature = sender.sign(senderBuffer);
    console.log('exchange.sender.encoded', encoded1);
    console.log(
      'exchange.sender.encoded.itx',
      Uint8Array.from(Buffer.from(encoded1.itx.value, 'base64')).toString()
    );
    console.log('exchange.sender.signature', senderSignature);
    console.log(
      'exchange.sender.signatureBin',
      Uint8Array.from(hexToBytes(senderSignature)).toString()
    );

    console.log('');
    console.log('---------ENCODE.2-----------------------------------------');
    console.log('');

    exchange.signature = Buffer.from(hexToBytes(senderSignature));
    exchange.nonce = encoded1.nonce;
    exchange.from = encoded1.from;
    exchange.signatures = [
      {
        pk: Buffer.from(hexToBytes(receiver.publicKey)),
        signer: receiver.toAddress(),
      },
    ];

    const { buffer: receiverBuffer, object: encoded2 } = await client.encodeExchangeTx({
      tx: exchange,
      wallet: receiver,
    });
    encoded2.signatures = encoded2.signaturesList;
    delete encoded2.signaturesList;
    const receiverSignature = receiver.sign(receiverBuffer);
    const receiverSig = encoded2.signatures.find(x => x.signer === receiver.toAddress());
    receiverSig.signature = Buffer.from(hexToBytes(receiverSignature));

    console.log('exchange.receiver.encoded', encoded2);
    console.log('exchange.receiver.signature', receiverSignature);
    // console.log('exchange.receiver.signatures', encoded2.signatures);

    console.log('');
    console.log('---------ENCODE.3-----------------------------------------');
    console.log('');

    delete encoded2.signature;

    await sleep(5000);
    res = await client.sendExchangeTx({
      tx: encoded2,
      wallet: sender,
      signature: senderSignature,
    });
    console.log('exchange.result', res);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
