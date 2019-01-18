/* eslint no-console:"off" */
const path = require('path');
const { enums } = require('@arcblock/forge-proto');
const { RpcClient, parseConfig } = require('@arcblock/forge-sdk');
const client = new RpcClient(parseConfig(path.resolve(__dirname, './forge.toml')));

const debug = (...args) => {
  console.log('');
  console.log('-'.repeat(80));
  console.log('');
  console.log(...args);
};

// Because creating an wallet is asynchronous we need to add some delay to retrieve user info
const delay = (timeout = 1000) => new Promise(resolve => setTimeout(resolve, timeout));
const random = prefix => `${prefix}_${Math.round(Math.random() * 1000000)}`;

debug('Supported RPC methods', Object.keys(client.listRpcMethods()));
debug('Supported Tx methods', client.listTxMethods());

const getAccountState = address => {
  const account = client.getAccountState([{ address }]);
  account.on('data', data => {
    debug(`accountInfo.${address}`, data.$format().state);
  });
};

(async () => {
  try {
    // ChainRpc
    const res = await client.getChainInfo();
    debug('chainInfo', res.$format());

    const stream = client.getBlock({ height: res.info.blockHeight - 1 });
    stream.on('data', function({ block }) {
      debug('blockInfo:', block);
    });

    // WalletRpc
    const walletType = {
      pk: enums.KeyType.SECP256K1,
      hash: enums.HashType.KECCAK,
      address: enums.EncodingType.BASE16,
    };
    const sender = await client.createWallet({
      passphrase: '123456',
      moniker: random('wangshijun'),
      type: walletType,
    });
    await delay();
    getAccountState(sender.wallet.address);

    const receiver = await client.createWallet({
      passphrase: '123456',
      moniker: random('tyrchen'),
      type: walletType,
    });
    await delay();
    getAccountState(receiver.wallet.address);

    // Send transaction the easy way
    const hash = await client.sendTransferTx({
      from: sender.wallet.address,
      token: sender.token,
      itx: {
        to: receiver.wallet.address,
        value: client.toArc(20),
      },
    });
    debug('txInfo.sent.oneShot', { hash });

    await delay();
    getAccountState(sender.wallet.address);
  } catch (err) {
    console.error('error', err);
  }
})();
