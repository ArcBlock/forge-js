/* eslint no-console:"off" */
const path = require('path');
// const debug = require('debug')(require('../package.json').name);
// const { enums } = require('@arcblock/forge-proto');
const { ForgeRpc, ForgeApp, parseConfig, decodeAny } = require('../');
const config = parseConfig(path.resolve(__dirname, './kvstore/kv.toml'));

// Append application specific proto for use
ForgeApp.addProtobuf({
  baseDir: path.resolve(__dirname, './kvstore/gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});

(async () => {
  try {
    const client = new ForgeRpc(Object.assign({}, config.forge, config.forge.sdk || {}));
    const sender = 'fa2ebd8b2aabf79b40789bc0fc9f46055adb2b68a';
    const passphrase = '123456';
    const { token } = await client.loadWallet({ address: sender, passphrase });

    // ChainRpc
    // const res = await client.getChainInfo();
    // debug('chainInfo', res.info);

    // const stream = client.getBlock({ height: 11 });
    // stream
    //   .on('data', function({ block }) {
    //     debug('blockInfo:', block);
    //   })
    //   .on('error', err => {
    //     console.error('error', err);
    //   });

    // // WalletRpc
    // const walletType = {
    //   pk: enums.KeyType.SECP256K1,
    //   hash: enums.HashType.KECCAK,
    //   address: enums.EncodingType.BASE16,
    // };
    // const sender = await client.createWallet({
    //   passphrase: '123456',
    //   moniker: 'wangshijun',
    //   type: walletType,
    // });
    // console.log({ sender, result });
    // const receiver = await client.createWallet({
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
    // const { tx } = await client.createTx({
    //   from: sender.wallet.address,
    //   token: sender.token,
    //   nonce: 2,
    //   itx: transferTx,
    // });
    // const { hash: transferHash } = await client.sendTx({
    //   tx,
    //   token: sender.token,
    //   commit: true,
    // });
    // debug('txInfo.sent', { transferHash });

    const account = await client.getAccountState({
      // address: sender.wallet.address,
      address: sender,
    });
    account.on('data', async ({ state }) => {
      state.data = decodeAny(state.data);
      console.log('accountInfo.storeList:', state.data.value.storeList);
      const kvTx = {
        type: 'KvTx',
        value: {
          key: `key_${Math.round(Math.random() * 10000)}`,
          value: 'value',
        },
      };
      console.log('accountInfo.kvTx:', kvTx);

      const { tx: signedTx } = await client.createTx({
        // from: sender.wallet.address,
        // token: sender.token,
        from: sender,
        token,
        nonce: state.nonce,
        itx: kvTx,
      });
      const { hash: kvHash } = await client.sendTx({
        tx: signedTx,
        token: sender.token,
        commit: true,
      });
      console.log('txInfo.sent', { kvHash });
    });
  } catch (err) {
    console.error('error', err);
  }
})();
