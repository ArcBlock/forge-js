# `@arcblock/graphql-client`

Client library to connect your app with forge powered blockchain node, all requests are sent over http/https, can be used in both Node.js and browser environment.

A `GraphQLClient` instance mainly supports 5 groups of methods that saves you time when read/write data from/to blockchain.

- `queries`: query block/transaction/account/asset/chain/node data form the blockchain
- `mutations`: send transaction to the blockchain, `sendTx`, all transactions should be signed before sending out to the blockchain
- `subscriptions`: listen to changes of any data on the blockchain
- `senders`: shortcut methods that takes a `wallet` and a `tx` object, then do the signing, and sending
- `encoders`: shortcut methods that takes a `wallet` and a `tx` object, encode the transaction for later signing, used internally by senders

## Table of Contents

- [`@arcblock/graphql-client`](#arcblockgraphql-client)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Documentation](#documentation)

## Install

```shell
npm i @arcblock/graphql-client -S
# OR
yarn add @arcblock/graphql-client
```

## Usage

```js
const Mcrypto = require('@arcblock/mcrypto');
const GraphQLClient = require('@arcblock/graphql-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');

const client = new GraphQLClient('http://localhost:8210/api');
console.log({
  queries: client.getQueries(),
  subscriptions: client.getSubscriptions(),
  mutations: client.getMutations(),
  senders: client.getTxSendMethods(),
  encoders: client.getTxEncodeMethods(),
});

(async () => {
  // Query chain state data
  const chainInfo = await client.getChainInfo();
  const forgeState = await client.getForgeState();
  const block = await client.getBlock({ height: 2 });
  console.log('getChainInfo', chainInfo);
  console.log('getForgeState', forgeState);
  console.log('getBlock', block);

  // Send transaction
  const wallet = fromRandom(
    WalletType({
      role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
      pk: Mcrypto.types.KeyType.SECP256K1,
      hash: Mcrypto.types.HashType.SHA3,
    })
  );
  const hash = await client.sendDeclareTx({
    tx: {
      itx: {
        moniker: 'username',
        pk: Buffer.from(hexToBytes(wallet.publicKey)),
        type,
      },
    },
    wallet,
  });
  console.log(hash);
})();
```

## Documentation

Checkout: [QUERIES.md](./QUERIES.md).
