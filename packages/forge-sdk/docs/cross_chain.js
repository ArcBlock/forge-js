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
const util = require('util');
const moment = require('moment');
const ForgeSDK = require('../index');

const { hexToBytes, bytesToHex, toHex, fromTokenToUnit, toStakeAddress } = ForgeSDK.Util;
const inspect = d => util.inspect(d, { depth: 8, colors: true });
const printLine = () => {
  console.log('');
  console.log('-'.repeat(80));
  console.log('');
};

const sleep = timeout =>
  new Promise(resolve => {
    printLine();
    setTimeout(() => {
      resolve();
    }, timeout);
  });

const getOffsetTime = days => ({
  seconds: Math.round(Date.now() / 1000) + days * 24 * 60 * 60,
});

// This is confuse
const CHAIN_ID_ASSET = 'forge';
const CHAIN_ID_APP = 'asset';

// Connect application and asset chain
ForgeSDK.connect('http://127.0.0.1:8210/api', {
  chainId: CHAIN_ID_ASSET,
  name: 'asset',
  default: true,
});
ForgeSDK.connect('http://47.104.23.85:8210/api', {
  chainId: CHAIN_ID_APP,
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
  console.log(`${moniker}.prepare`, wallet.toJSON());
  let hash = await ForgeSDK.sendDeclareTx({ tx: { itx: { moniker } }, wallet }, { conn: 'asset' });
  console.log(`${moniker}.declare.asset`, hash);
  hash = await doCheckin(wallet, { conn: 'asset' });
  console.log(`${moniker}.poke.asset`, hash);

  if (CHAIN_ID_APP !== CHAIN_ID_ASSET) {
    hash = await ForgeSDK.sendDeclareTx({ tx: { itx: { moniker } }, wallet }, { conn: 'app' });
    console.log(`${moniker}.declare.app`, hash);
    hash = await doCheckin(wallet, { conn: 'app' });
    console.log(`${moniker}.poke.app`, hash);
  }
  printLine();
};

const createAsset = async (moniker, wallet) => {
  const asset = {
    moniker,
    readonly: true,
    transferrable: true,
    data: {
      typeUrl: 'json',
      value: {
        size: 'xxl',
        color: 'red',
        serial: ForgeSDK.Wallet.fromRandom().publicKey,
      },
    },
  };
  asset.address = ForgeSDK.Util.toAssetAddress(asset);
  const hash = await ForgeSDK.sendCreateAssetTx({ tx: { itx: asset }, wallet }, { conn: 'app' });
  console.log('asset.create.address', asset.address);
  console.log('asset.create.tx', hash);

  return asset.address;
};

const doCustodianStake = async wallet => {
  // FIXME: this should be the address of a node
  // because stake is still not well supported by forge
  const anchor = 'zyszYYCzecsLCyKgksYd7SG3d2DKjb52mw1q';
  console.log('custodian.stake.from', wallet.toAddress());
  console.log('custodian.stake.to', anchor);

  const stake = {
    to: anchor,
    value: fromTokenToUnit(20),
    message: 'custodian stake',
    address: toStakeAddress(wallet.toAddress(), anchor),
    data: {
      // FIXME: this is the only supported one
      type: 'StakeForNode',
      value: {},
    },
  };
  console.log('custodian.stake.address', stake.address);

  const hash = await ForgeSDK.sendStakeTx({ tx: { itx: stake }, wallet }, { conn: 'asset' });
  console.log('custodian.stake.tx', hash);
  return hash;
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
    await sleep(4000);

    // 2. stake to become a real custodian
    const stakeHash = await doCustodianStake(custodian);
    await sleep(4000);

    // We must wait for the custodian stake to complete
    const res = await ForgeSDK.getTx({ hash: stakeHash }, { conn: 'asset' });
    console.log('custodian stake tx', res);
    if (!res.info || res.info.code !== 'OK') {
      process.exit(1);
      return;
    }

    // 3. buyer and custodian to do deposit
    // In real world applications, custodian should create this transaction
    // And ask buyer to sign first, then sign the transaction by him self
    const deposit = {
      value: fromTokenToUnit(2),
      commission: fromTokenToUnit(0.1), // 交易手续费
      charge: fromTokenToUnit(0.01), // 回滚手续费
      target: CHAIN_ID_APP,
      withdrawer: seller.toAddress(),
      locktime: getOffsetTime(7),
    };

    // 3.1 buyer sign the tx
    const { object: depositTxObj, buffer: depositTxBuffer } = await ForgeSDK.encodeDepositTetherTx(
      {
        tx: { itx: deposit },
        wallet: buyer,
      },
      { conn: 'asset' }
    );
    const buyerSignature = buyer.sign(bytesToHex(depositTxBuffer));
    depositTxObj.signature = Buffer.from(hexToBytes(buyerSignature));
    console.log('buyerSignature', buyerSignature);

    // 3.2 custodian sign the tx
    depositTxObj.signaturesList = [
      {
        signer: custodian.toAddress(),
        pk: Buffer.from(hexToBytes(custodian.publicKey)),
      },
    ];
    const depositTxNew = ForgeSDK.createMessage('Transaction', depositTxObj);
    const depositBufferNew = depositTxNew.serializeBinary();
    const custodianSignature = custodian.sign(bytesToHex(depositBufferNew));
    const depositTxNewObj = depositTxNew.toObject();
    depositTxNewObj.signaturesList = [
      {
        signer: custodian.toAddress(),
        pk: Buffer.from(hexToBytes(custodian.publicKey)),
        signature: Buffer.from(hexToBytes(custodianSignature)),
      },
    ];

    console.log('custodianSignature', custodianSignature);
    console.log('depositTxNewObj', inspect(ForgeSDK.formatMessage('Transaction', depositTxNewObj)));
    const depositHash = await ForgeSDK.sendDepositTetherTx(
      {
        tx: depositTxNewObj,
        wallet: custodian,
        signature: buyerSignature,
      },
      { conn: 'asset' }
    );
    console.log('depositTether.tx', depositHash);
    await sleep(4000);

    // =========================================================================
    // TODO: 4. verify the deposit
    // =========================================================================

    // 5. exchange on the app chain

    // 5.1 create asset for seller
    const assetAddress = await createAsset('T Shirt', seller);
    await sleep(4000);

    // 5.2 assemble exchange tether tx
    const exchange = {
      expiredAt: getOffsetTime(6),
      sender: {
        assets: [assetAddress],
      },
      receiver: {
        value: fromTokenToUnit(20),
        deposit: depositTxNewObj,
      },
    };

    // 5.3 seller sign the transaction
    const {
      object: exchangeTxObj,
      buffer: exchangeTxBuffer,
    } = await ForgeSDK.encodeExchangeTetherTx(
      {
        tx: { itx: exchange },
        wallet: seller,
      },
      { conn: 'app' }
    );
    const sellerSignature = seller.sign(exchangeTxBuffer);
    exchangeTxObj.signature = Buffer.from(hexToBytes(sellerSignature));
    console.log('sellerSignature', sellerSignature);

    // 5.4 buyer sign the tx
    exchangeTxObj.signaturesList = [
      {
        signer: buyer.toAddress(),
        pk: Buffer.from(hexToBytes(buyer.publicKey)),
      },
    ];
    const exchangeTxNew = ForgeSDK.createMessage('Transaction', exchangeTxObj);
    const exchangeBufferNew = exchangeTxNew.serializeBinary();
    const buyerSignature2 = buyer.sign(bytesToHex(exchangeBufferNew));
    const exchangeTxNewObj = exchangeTxNew.toObject();
    exchangeTxNewObj.signaturesList = [
      {
        signer: buyer.toAddress(),
        pk: Buffer.from(hexToBytes(buyer.publicKey)),
        signature: Buffer.from(hexToBytes(buyerSignature2)),
      },
    ];
    console.log(
      'exchangeTxNewObj',
      inspect(ForgeSDK.formatMessage('Transaction', exchangeTxNewObj))
    );
    console.log('buyerSignature2', buyerSignature2);

    // 5.5 seller send the tx
    const exchangeHash = await ForgeSDK.sendExchangeTetherTx(
      {
        tx: exchangeTxNewObj,
        wallet: seller,
        signature: sellerSignature,
      },
      { conn: 'app' }
    );
    console.log('exchangeTether.tx', exchangeHash);
    await sleep(4000);

    // 6. withdraw tether tx, should contain enough info to recreate exchange tether tx
    const withdraw = Object.assign(
      {
        from: exchangeTxNewObj.from,
        nonce: exchangeTxNewObj.nonce,
        chainId: exchangeTxNewObj.chainId,
        pk: exchangeTxNewObj.pk,
        signature: exchangeTxNewObj.signature,
        signatures: exchangeTxNewObj.signatures || exchangeTxNewObj.signaturesList,
      },
      exchange
    );
    withdraw.receiver.tether = ForgeSDK.Util.toTetherAddress(toHex(depositHash));
    console.log('withdraw', inspect(withdraw));
    const withdrawHash = await ForgeSDK.sendWithdrawTetherTx(
      {
        tx: { itx: withdraw },
        wallet: seller,
      },
      { conn: 'asset' }
    );
    console.log('withdrawTether.tx', withdrawHash);
    await sleep(4000);

    // 7. approve tether
    // 8. revoke tether

    return;
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
