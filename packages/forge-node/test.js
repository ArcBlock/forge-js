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
    const { token, wallet } = await sdk.createWallet({
      passphrase: '123456',
      moniker: 'wangshijun',
      type: {
        pk: enums.KeyType.SECP256K1,
        hash: enums.HashType.KECCAK,
        address: enums.EncodingType.BASE16,
      },
    });
    debug('walletInfo', { wallet, token });

    const itx = {
      type: 'TransferTx',
      value: {
        to: 'f7063a4b6060adaccbda72c9cae73a0dcd3fd2d87',
        value: 100,
      },
    };

    const { tx } = await sdk.createTx({
      from: wallet.address,
      token,
      nonce: 2,
      itx,
    });
    debug('txInfo.create', { tx });

    tx.itx = itx;
    const { hash } = await sdk.sendTx({
      tx,
      token,
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
