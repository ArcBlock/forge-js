/* eslint no-console:"off" */
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { ForgeRpc, parseConfig } = require('@arcblock/forge-node');
const { forge } = parseConfig(path.resolve(__dirname, './forge.toml'));
const client = new ForgeRpc(Object.assign({}, forge, forge.sdk || {}));

(async () => {
  try {
    // ChainRpc
    const res = await client.getChainInfo();
    console.log('chainInfo', res.info);

    const stream = client.getBlock({ height: 11 });
    stream
      .on('data', function({ block }) {
        console.log('blockInfo:', block);
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
    const sender = await client.createWallet({
      passphrase: '123456',
      moniker: 'wangshijun',
      type: walletType,
    });
    const receiver = await client.createWallet({
      passphrase: '123456',
      moniker: 'tyrchain',
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
    console.log('txInfo.sent', { transferHash });

    const account = await client.getAccountState({
      address: sender.wallet.address,
    });
    account.on('data', async ({ state }) => {
      console.log('accountInfo', state);
    });
  } catch (err) {
    console.error('error', err);
  }
})();
