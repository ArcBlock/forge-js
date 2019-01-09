/* eslint no-console:"off" */
const { enums } = require('@arcblock/forge-proto');
const debug = require('debug')(require('./package.json').name);
const ForgeRpc = require('./src/rpc');
const { parseConfig } = require('./src/util');
const config = parseConfig('./test.toml');

(async () => {
  try {
    const sdk = new ForgeRpc(Object.assign({}, config.forge, config.forge.sdk || {}));

    // ChainRpc
    // const res = await sdk.getChainInfo();
    // debug('chainInfo', res.info);

    // const stream = sdk.getBlock({ height: 11 });
    // stream
    //   .on('data', function({ block }) {
    //     debug('blockInfo:', block);
    //   })
    //   .on('error', err => {
    //     console.error('error', err);
    //   });

    // WalletRpc
    const walletType = {
      pk: enums.KeyType.SECP256K1,
      hash: enums.HashType.KECCAK,
      address: enums.EncodingType.BASE16,
    };
    const sender = await sdk.createWallet({
      passphrase: '123456',
      moniker: 'wangshijun',
      type: walletType,
    });
    debug('walletInfo.sender', sender);

    const receiver = await sdk.createWallet({
      passphrase: '123456',
      moniker: 'tyrchain',
      type: walletType,
    });
    debug('walletInfo.receiver', receiver);

    const itx = {
      type: 'TransferTx',
      value: {
        to: receiver.wallet.address,
        value: 100,
      },
    };

    const { tx } = await sdk.createTx({
      from: sender.wallet.address,
      token: sender.token,
      nonce: 2,
      itx,
    });
    debug('txInfo.create', { tx });

    tx.itx = itx;
    const { hash } = await sdk.sendTx({
      tx,
      token: sender.token,
      commit: true,
    });
    debug('txInfo.sent', { hash });
    return;

    // StateRpc
    // const account = await sdk.getAccountState({
    //   address: 'f525b15c6f31041aa17f1e3e0a436c3c114343956',
    // });
    // account.on('data', function({ state }) {
    //   debug('accountInfo:', state);
    // });
  } catch (err) {
    console.error('error', err);
  }
})();
