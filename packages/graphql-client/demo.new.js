/* eslint no-console:"off" */
const protobuf = require('protobufjs');
const camelcase = require('camelcase');
const base64 = require('base64-url');
const { fromSecretKey, fromRandom, WalletType } = require('@arcblock/forge-wallet');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes, bytesToHex, stripHexPrefix } = require('@arcblock/forge-util');

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
const { messages, enums, spec, transactions, stakes, typeUrls } = processJson(
  jsonDescriptor,
  packageName
);
console.log({ messages, enums, spec, transactions, stakes, typeUrls });

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
      const { state: account } = await client.getAccountState({ address });
      if (!account) {
        throw new Error('Wallet address not declared on chain, please declare before send any tx');
      }
      nonce = account.nonce;
    }
    console.log({ address, nonce, chainId });

    const Any = root.lookupType('google.protobuf.Any');
    const Transaction = root.lookupType(`${packageName}.Transaction`);
    const ItxType = root.lookupType(`${packageName}.${x}`);

    const itx = ItxType.fromObject(data);
    const itxBytes = ItxType.encode(itx).finish();
    console.log({ wallet, itx, itxBytes: bytesToHex(itxBytes) });

    const txObj = {
      from: wallet.toAddress(),
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
    console.log({ txToSign, txToSignBytes: bytesToHex(txToSignBytes), signature });

    txObj.signature = Buffer.from(hexToBytes(signature));
    const tx = Transaction.fromObject(txObj);
    const txBytes = Transaction.encode(tx).finish();
    const txStr = base64.escape(Buffer.from(txBytes).toString('base64'));
    console.log({ tx, txBytes, txStr });

    return client.sendTx({ tx: txStr });
  };

  txSendFn.name = method;
  methods[method] = txSendFn;
});
console.log(Object.keys(methods));

const { types } = Mcrypto;
const type = WalletType({
  role: types.RoleType.ROLE_ACCOUNT,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';

(async () => {
  try {
    const wallet = fromSecretKey(sk, type);
    // const wallet = fromRandom(type);
    // console.log(wallet);
    const res = await methods.sendDeclareTx({
      data: {
        moniker: `wangshijun_${Math.round(Math.random() * 1000)}`,
        pk: Buffer.from(hexToBytes(wallet.publicKey)),
        type,
        issuer: '',
        data: null,
      },
      wallet,
    });

    console.log(res);
  } catch (err) {
    console.error(err);
  }
})();
