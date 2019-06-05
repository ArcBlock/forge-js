/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do cross-chain with forge-sdk
 * Run script with: `DEBUG=@arcblock/* node docs/cross_chain.js`
 *
 * @link https://github.com/ArcBlock/cross-chain/blob/master/src/v2_custodian.md
 */
const ForgeSDK = require('../index');

const { hexToBytes, fromTokenToUnit } = ForgeSDK.Util;
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// Connect application and asset chain

(async () => {
  try {
    const buyer = ForgeSDK.Wallet.fromRandom(); // alice
    const seller = ForgeSDK.Wallet.fromRandom(); // bob
    console.log({ buyer: buyer.toJSON(), seller: seller.toJSON() });

    // 1. declare buyer
    let res = await ForgeSDK.sendDeclareTx({
      tx: { itx: { moniker: 'buyer' } },
      wallet: buyer,
    });
    console.log('declare.buyer.result', res);

    // 2. declare seller
    res = await ForgeSDK.sendDeclareTx({
      tx: { itx: { moniker: 'seller' } },
      wallet: seller,
    });
    console.log('declare.seller.result', res);

    // 3. create asset for buyer
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
    const assetAddress = ForgeSDK.Util.toAssetAddress(asset);
    asset.address = assetAddress;
    res = await ForgeSDK.sendCreateAssetTx({
      tx: { itx: asset },
      wallet: buyer,
    });
    console.log('create_asset.result', res, assetAddress);

    // assemble exchange tx: multisig
    const exchange = {
      pk: Buffer.from(hexToBytes(buyer.publicKey)), // pk of application
      itx: {
        to: seller.toAddress(),
        buyer: {
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

    // 4.1 buyer: encode and sign the transaction
    const { buffer: senderBuffer, object: encoded1 } = await ForgeSDK.encodeExchangeTx({
      tx: exchange,
      wallet: buyer,
    });
    const senderSignature = buyer.sign(senderBuffer);
    console.log('exchange.buyer.encoded', encoded1);
    console.log(
      'exchange.buyer.encoded.itx',
      Uint8Array.from(Buffer.from(encoded1.itx.value, 'base64')).toString()
    );
    console.log('exchange.buyer.signature', senderSignature);
    console.log(
      'exchange.buyer.signatureBin',
      Uint8Array.from(hexToBytes(senderSignature)).toString()
    );

    console.log('');
    console.log('---------ENCODE.2-----------------------------------------');
    console.log('');

    // 4.2 seller: do the multi sig
    exchange.signature = Buffer.from(hexToBytes(senderSignature));
    exchange.nonce = encoded1.nonce;
    exchange.from = encoded1.from;
    exchange.signatures = [
      {
        pk: Buffer.from(hexToBytes(seller.publicKey)),
        signer: seller.toAddress(),
      },
    ];

    const { buffer: receiverBuffer, object: encoded2 } = await ForgeSDK.encodeExchangeTx({
      tx: exchange,
      wallet: seller,
    });
    const receiverSignature = seller.sign(receiverBuffer);
    const receiverSig = encoded2.signaturesList.find(x => x.signer === seller.toAddress());
    receiverSig.signature = Buffer.from(hexToBytes(receiverSignature));

    console.log('exchange.seller.encoded', encoded2);
    console.log('exchange.seller.signature', receiverSignature);

    console.log('');
    console.log('---------ENCODE.3-----------------------------------------');
    console.log('');

    delete encoded2.signature;

    // 4.3 Send the exchange tx
    await sleep(5000);
    res = await ForgeSDK.sendExchangeTx({
      tx: encoded2,
      wallet: buyer,
      signature: senderSignature,
    });
    console.log('exchange.result', res);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
