/* eslint no-console:"off" */
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { RpcClient, parseConfig } = require('@arcblock/forge-node');
const client = new RpcClient(parseConfig(path.resolve(__dirname, './forge.toml')));
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
    debug('chainInfo', res.$format());

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
    account.on('data', async data => {
      debug('accountInfo', data.$format());
    });
  } catch (err) {
    console.error('error', err);
  }
})();
