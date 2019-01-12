/* eslint no-console:"off" */
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { ForgeRpc, ForgeApp, parseConfig, decodeAny } = require('@arcblock/forge-node');
const { forge } = parseConfig(path.resolve(__dirname, './forge.toml'));
const client = new ForgeRpc(Object.assign({}, forge, forge.sdk || {}));

// Append application specific proto for use
ForgeApp.addProtobuf({
  baseDir: path.resolve(__dirname, './gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});

(async () => {
  try {
    // WalletRpc
    const sender = await client.createWallet({
      passphrase: '123456',
      moniker: 'wangshijun',
      type: {
        pk: enums.KeyType.SECP256K1,
        hash: enums.HashType.KECCAK,
        address: enums.EncodingType.BASE16,
      },
    });
    const { token } = await client.loadWallet({ address: sender, passphrase: '123456' });
    const account = await client.getAccountState({ address: sender.wallet.address });
    account.on('data', async ({ state }) => {
      state.data = decodeAny(state.data);
      console.log('accountInfo.storeList:', state.data.value.storeList);
      const kvTx = {
        type: 'KvTx',
        value: {
          key: `key_${Math.round(Math.random() * 10000)}`,
          value: `value_${Math.round(Math.random() * 1000000)}`,
        },
      };
      console.log('accountInfo.kvTx:', kvTx);

      const { tx: signedTx } = await client.createTx({
        from: sender.wallet.address,
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
