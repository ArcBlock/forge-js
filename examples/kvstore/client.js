/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { RpcClient, parseConfig, decodeAny } = require('@arcblock/forge-sdk');
require('./config/setup');

const client = new RpcClient(parseConfig(path.resolve(__dirname, './config/forge.toml')));

const debug = (...args) => {
  console.log('');
  console.log('-'.repeat(80));
  console.log('');
  console.log(...args);
};
const delay = (timeout = 1000) => new Promise(resolve => setTimeout(resolve, timeout));
const random = prefix => `${prefix}_${Math.round(Math.random() * 1000000)}`;

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
        moniker: random('wangshijun'),
        type: {
          pk: enums.KeyType.SECP256K1,
          hash: enums.HashType.KECCAK,
          address: enums.EncodingType.BASE16,
        },
      });
      fs.writeFileSync('./address.json', JSON.stringify(sender.wallet.address));
      address = sender.wallet.address;
      debug('Create wallet on forge chain', sender.$format());
      await delay();
    }

    // unlock the wallet
    const { token } = await client.loadWallet({ address, passphrase: '123456' });
    debug('Unlock wallet on forge chain', token);

    const account = client.getAccountState({ address });
    account.on('data', async ({ state }) => {
      state.data = decodeAny(state.data);
      debug('accountInfo.storeList:', state.data.value ? state.data.value.storeList : []);
      const kvTx = {
        type: 'KvTx',
        value: {
          key: random('key'),
          // key: '',
          value: random('value'),
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
