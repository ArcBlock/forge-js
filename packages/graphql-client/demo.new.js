/* eslint no-console:"off" */
const protobuf = require('protobufjs');
const camelcase = require('camelcase');
const base64 = require('base64-url');
const { fromSecretKey, fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes, bytesToHex, stripHexPrefix, toArc } = require('@arcblock/forge-util');

const GraphqlClient = require('./src/node');
const jsonDescriptor = require('./src/schema/protobuf.json');
const { processJson } = require('./util');

const client = new GraphqlClient('http://localhost:8210/api'); // local
// const client = new GraphqlClient('http://abt-test.arcblock.co:8210/api'); // abt testnet

// console.log({
//   queries: client.getQueries(),
//   subscriptions: client.getSubscriptions(),
//   mutations: client.getMutations(),
// });

const packageName = 'forge_abi';
const root = protobuf.Root.fromJSON(jsonDescriptor);
const { transactions, typeUrls } = processJson(jsonDescriptor, packageName);

const toHex = bytes => stripHexPrefix(bytesToHex(bytes)).toUpperCase();

const methods = {};
transactions.forEach(x => {
  const method = camelcase(`send_${x}`);
  const txSendFn = async ({ data, wallet }) => {
    // Determine sender address
    const address = wallet.toAddress();

    // Determine chainId
    const { info } = await client.getChainInfo();
    const chainId = info.network;

    // Determine nonce
    let nonce = 1;
    if (x !== 'DeclareTx') {
      const res = await client.getAccountState({ address });
      // console.log(`getAccountState.${address}`, res);
      if (!res.state) {
        throw new Error(`Address ${address} not declared on chain, please declare before send tx`);
      }
      nonce = res.state.nonce;
    }
    // console.log({
    //   pk: stripHexPrefix(wallet.publicKey).toUpperCase(),
    //   sk: stripHexPrefix(wallet.secretKey).toUpperCase(),
    //   address,
    //   nonce,
    //   chainId,
    // });

    const Any = root.lookupType('google.protobuf.Any');
    const Transaction = root.lookupType(`${packageName}.Transaction`);
    const ItxType = root.lookupType(`${packageName}.${x}`);

    const itx = ItxType.fromObject(data);
    const itxBytes = ItxType.encode(itx).finish();
    // console.log({ itxBytes, itxHex: toHex(itxBytes) });

    const txObj = {
      from: address,
      nonce,
      chainId: chainId,
      itx: Any.fromObject({
        type_url: typeUrls[x],
        value: itxBytes,
      }),
    };

    const txToSign = Transaction.fromObject(txObj);
    const txToSignBytes = Transaction.encode(txToSign).finish();

    const signature = wallet.sign(txToSignBytes);
    // console.log({
    //   txToSignBytes,
    //   txToSignHex: toHex(txToSignBytes),
    //   signature: stripHexPrefix(signature).toUpperCase(),
    // });

    txObj.signature = Buffer.from(hexToBytes(signature));
    const tx = Transaction.fromObject(txObj);
    const txBytes = Transaction.encode(tx).finish();
    const txStr = base64.escape(Buffer.from(txBytes).toString('base64'));
    // console.log({ txBytes, txHex: toHex(txBytes), txStr });

    return client.sendTx({ tx: txStr });
  };

  txSendFn.name = method;
  methods[method] = txSendFn;
});
console.log(Object.keys(methods));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));
    const sender = fromRandom(type);
    const res1 = await methods.sendDeclareTx({
      data: {
        moniker: `wangshijun_${Math.round(Math.random() * 1000)}`,
        pk: Buffer.from(hexToBytes(sender.publicKey)),
        type,
      },
      wallet: sender,
    });

    const receiver = fromRandom(type);
    const res2 = await methods.sendDeclareTx({
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
    const res = await methods.sendTransferTx({
      data: {
        to: receiver.toAddress(),
        value: { value: toArc(100).toBuffer() },
      },
      wallet: sender,
    });

    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
