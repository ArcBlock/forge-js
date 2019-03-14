/* eslint no-console:"off" */
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes, fromTokenToUnit } = require('@arcblock/forge-util');

const GraphqlClient = require('./src/node');

const client = new GraphqlClient('http://localhost:8210/api'); // local
// const client = new GraphqlClient('http://abt-test.arcblock.co:8210/api'); // abt testnet

// console.log({
//   queries: client.getQueries(),
//   subscriptions: client.getSubscriptions(),
//   mutations: client.getMutations(),
//   transactions: client.getTxMethods(),
// });

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
    const sender = fromRandom(type);
    const res1 = await client.sendDeclareTx({
      data: {
        moniker: `wangshijun_${Math.round(Math.random() * 1000)}`,
        pk: Buffer.from(hexToBytes(sender.publicKey)),
        type,
      },
      wallet: sender,
    });

    const receiver = fromRandom(type);
    const res2 = await client.sendDeclareTx({
      data: {
        moniker: `paper_${Math.round(Math.random() * 1000)}`,
        pk: Buffer.from(hexToBytes(receiver.publicKey)),
        type,
      },
      wallet: receiver,
    });
    console.log({
      sender: sender.toJSON(),
      receiver: receiver.toJSON(),
      res1,
      res2,
    });

    await delay(5000);
    const res = await client.sendTransferTx({
      data: {
        to: receiver.toAddress(),
        value: { value: fromTokenToUnit(100).toBuffer() },
      },
      wallet: sender,
    });

    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
