/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to do cross-chain with forge-sdk
 * Run script with: `DEBUG=@arcblock/* node docs/cross_chain.js`
 *
 * Deploy protocol
forge protocol:deploy _build/protocols/stake/stake.itx.json
forge protocol:deploy _build/protocols/deposit_tether/deposit_tether.itx.json
forge protocol:deploy _build/protocols/exchange_tether/exchange_tether.itx.json
forge protocol:deploy _build/protocols/withdraw_tether/withdraw_tether.itx.json
forge protocol:deploy _build/protocols/approve_tether/approve_tether.itx.json
forge protocol:deploy _build/protocols/revoke_tether/revoke_tether.itx.json
 *
 * @link https://github.com/ArcBlock/cross-chain/blob/master/src/v2_custodian.md
 */
const moment = require('moment');
const ForgeSDK = require('../index');

const { hexToBytes, fromTokenToUnit } = ForgeSDK.Util;
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

// Connect application and asset chain
// ForgeSDK.connect('http://did-workshop.arcblock.co:8220/api', {
ForgeSDK.connect('http://127.0.0.1:8210/api', {
  chainId: 'forge',
  name: 'asset',
  default: true,
});
ForgeSDK.connect('http://did-workshop.arcblock.co:8210/api', {
  chainId: 'forge_workshop',
  name: 'app',
});

const doCheckin = async (wallet, { conn = '' }) =>
  ForgeSDK.sendPokeTx(
    {
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet,
    },
    { conn }
  );

const createAccount = async (moniker, wallet) => {
  console.log(`${moniker}.prepare`, wallet.toAddress());
  let hash = await ForgeSDK.sendDeclareTx({ tx: { itx: { moniker } }, wallet }, { conn: 'asset' });
  console.log(`${moniker}.declare.asset`, hash);
  hash = await doCheckin(wallet, { conn: 'asset' });
  console.log(`${moniker}.checkin.asset`, hash);

  hash = await ForgeSDK.sendDeclareTx({ tx: { itx: { moniker } }, wallet }, { conn: 'app' });
  console.log(`${moniker}.declare.app`, hash);
  hash = await doCheckin(wallet, { conn: 'app' });
  console.log(`${moniker}.checkin.app`, hash);
};

const doCustodianStake = async wallet => {
  const anchor = 'zyt4TpbBV6kTaoPBggQpytQfBWQHSfuGmYma';
  console.log('custodian.stake.from', wallet.toAddress());
  console.log('custodian.stake.to', anchor);

  const stake = {
    to: anchor,
    value: ForgeSDK.Util.fromTokenToUnit(10),
    message: 'custodian stake',
    address: ForgeSDK.Util.toStakeAddress(wallet.toAddress(), anchor),
    data: {
      type: 'stakeForUser',
      value: {},
    },
  };
  console.log('custodian.stake.address', stake.address);

  const hash = await ForgeSDK.sendStakeTx({ tx: { itx: stake }, wallet }, { conn: 'asset' });
  console.log('custodian.stake.tx', hash);
};

(async () => {
  try {
    // 1. prepare wallets and accounts
    const buyer = ForgeSDK.Wallet.fromRandom(); // alice
    const seller = ForgeSDK.Wallet.fromRandom(); // bob
    const custodian = ForgeSDK.Wallet.fromRandom(); // custodian

    await createAccount('buyer', buyer);
    await createAccount('seller', seller);
    await createAccount('custodian', custodian);

    // 2. stake for custodian
    await doCustodianStake(custodian);

    return;

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
