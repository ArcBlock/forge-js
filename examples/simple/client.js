/* eslint no-console:"off" */
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { ForgeRpc, parseConfig } = require('@arcblock/forge-node');
const { forge } = parseConfig(path.resolve(__dirname, './forge.toml'));
const client = new ForgeRpc(Object.assign({}, forge, forge.sdk || {}));
const debug = (...args) => {
  console.log('x'.repeat(80));
  console.log(...args);
  console.log('');
};

debug('Supported RPC methods', client.listRpcMethods());

(async () => {
  try {
    // ChainRpc
    const res = await client.getChainInfo();
    debug('chainInfo', res.info);

    const stream = client.getBlock({ height: 11 });
    stream
      .on('data', function({ block }) {
        debug('blockInfo:', block);
      })
      .on('error', err => {
        debug('error', err);
      });

    // WalletRpc
    const walletType = {
      pk: enums.KeyType.SECP256K1,
      hash: enums.HashType.KECCAK,
      address: enums.EncodingType.BASE16,
    };
    const sender = await client.createWallet({
      passphrase: '123456',
      moniker: 'wangshijun',
      type: walletType,
    });
    const receiver = await client.createWallet({
      passphrase: '123456',
      moniker: 'tyrchen',
      type: walletType,
    });

    // ForgeCore: Transfer
    const { tx } = await client.createTx({
      from: sender.wallet.address,
      token: sender.token,
      nonce: 2,
      itx: {
        type: 'TransferTx',
        value: {
          to: receiver.wallet.address,
          value: 100,
        },
      },
    });
    const { hash: transferHash } = await client.sendTx({
      tx,
      token: sender.token,
      commit: true,
    });
    debug('txInfo.sent', { transferHash });

    const account = await client.getAccountState({
      address: sender.wallet.address,
    });
    account.on('data', async ({ state }) => {
      debug('accountInfo', state);
    });
  } catch (err) {
    console.error('error', err);
  }
})();
