/* eslint no-console:"off" */
const path = require('path');
const debug = require('debug')(require('../package.json').name);
const { enums } = require('@arcblock/forge-proto');
const { ForgeRpc, parseConfig } = require('..');
const config = parseConfig(path.resolve(__dirname, './kv.toml'));

(async () => {
  try {
    const sdk = new ForgeRpc(Object.assign({}, config.forge, config.forge.sdk || {}));

    // Append application specific proto for use
    sdk.addSource(path.resolve(__dirname, 'gen/'), 'kvstore_abi');

    // ChainRpc
    const res = await sdk.getChainInfo();
    debug('chainInfo', res.info);

    const stream = sdk.getBlock({ height: 11 });
    stream
      .on('data', function({ block }) {
        debug('blockInfo:', block);
      })
      .on('error', err => {
        console.error('error', err);
      });

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
    // const result = await sdk.loadWallet({
    //   address: sender.wallet.address,
    //   passphrase: '123456',
    // });
    // console.log({ sender, result });
    // const receiver = await sdk.createWallet({
    //   passphrase: '123456',
    //   moniker: 'tyrchain',
    //   type: walletType,
    // });

    // ForgeCore: Transfer
    // const transferTx = {
    //   type: 'TransferTx',
    //   value: {
    //     to: receiver.wallet.address,
    //     value: 100,
    //   },
    // };
    // const { tx } = await sdk.createTx({
    //   from: sender.wallet.address,
    //   token: sender.token,
    //   nonce: 2,
    //   itx: transferTx,
    // });
    // const { hash: transferHash } = await sdk.sendTx({
    //   tx,
    //   token: sender.token,
    //   commit: true,
    // });
    // debug('txInfo.sent', { transferHash });

    // Application: KvTx
    const kvTx = {
      typeUrl: 'KV/kv',
      type: 'KvTx',
      value: {
        key: Buffer.from('random'),
        value: Buffer.from('value'),
      },
    };
    const { tx: signedTx } = await sdk.createTx({
      from: sender.wallet.address,
      token: sender.token,
      // token: result.token,
      nonce: 2,
      itx: kvTx,
    });
    const { hash: kvHash } = await sdk.sendTx({ tx: signedTx, token: sender.token, commit: true });
    debug('txInfo.sent', { kvHash });

    // StateRpc
    const account = await sdk.getAccountState({
      address: sender.wallet.address,
    });
    account.on('data', function({ state }) {
      debug('accountInfo:', state);
    });
  } catch (err) {
    console.error('error', err);
  }
})();
