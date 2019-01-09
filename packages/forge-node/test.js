/* eslint no-console:"off" */
const ForgeRpc = require('./src/rpc');
const { enums } = require('@arcblock/forge-proto');
const debug = require('debug')(require('./package.json').name);

const walletInfo = {
  passphrase: '123456',
  moniker: 'wangshijun',
  type: {
    pk: enums.KeyType.SECP256K1,
    hash: enums.HashType.KECCAK,
    address: enums.EncodingType.BASE16,
  },
};

console.log(enums, walletInfo);

(async () => {
  try {
    const sdk = new ForgeRpc({});
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

    const wallet = await sdk.createWallet(walletInfo);
    debug('walletInfo', wallet);
  } catch (err) {
    console.error('error', err);
  }
})();
