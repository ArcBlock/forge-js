/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { RpcClient, addProtobuf, parseConfig, decodeAny } = require('@arcblock/forge-node');
const client = new RpcClient(parseConfig(path.resolve(__dirname, './forge.toml')));
const debug = (...args) => {
  console.log('x'.repeat(80));
  console.log(...args);
  console.log('');
};

// Append application specific proto for use
addProtobuf({
  baseDir: path.resolve(__dirname, './gen/'),
  packageName: 'kvstore_abi',
  typeUrls: {
    KvTx: 'KV/kv',
    AccountKvState: 'KV/kv_state',
  },
});

// debug('Supported RPC methods', client.listRpcMethods());

(async () => {
  try {
    // Create an wallet account or load from file
    let address = null;
    if (fs.existsSync('./address.json')) {
      address = require('./address.json');
      debug('Load wallet address from file', address);
    } else {
      const sender = await client.createWallet({
        passphrase: '123456',
        moniker: 'wangshijun',
        type: {
          pk: enums.KeyType.SECP256K1,
          hash: enums.HashType.KECCAK,
          address: enums.EncodingType.BASE16,
        },
      });
      fs.writeFileSync('./address.json', JSON.stringify(sender.wallet.address));
      address = sender.wallet.address;
      debug('Create wallet on forge chain', sender.$format());
    }

    // unlock the wallet
    const { token } = await client.loadWallet({ address, passphrase: '123456' });
    debug('Unlock wallet on forge chain', token);

    const account = await client.getAccountState({ address });
    account.on('data', async ({ state }) => {
      state.data = decodeAny(state.data);
      debug('accountInfo.storeList:', state.data.value ? state.data.value.storeList : []);
      const kvTx = {
        type: 'KvTx',
        value: {
          key: `key_${Math.round(Math.random() * 10000)}`,
          // key: '',
          value: `value_${Math.round(Math.random() * 1000000)}`,
          // value: '',
        },
      };
      debug('accountInfo.kvTx:', kvTx);

      const { tx: signedTx } = await client.createTx({
        from: address,
        token,
        nonce: state.nonce,
        itx: kvTx,
      });
      const { hash: kvHash } = await client.sendTx({
        tx: signedTx,
        token: token,
        commit: true,
      });
      debug('txInfo.sent', { kvHash });
    });
  } catch (err) {
    debug('error', err);
  }
})();
