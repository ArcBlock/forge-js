![graphql-client](https://www.arcblock.io/.netlify/functions/badge/?text=graphql-client)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Client library to connect your app with forge powered blockchain node, all requests are sent over http/https, can be used in both Node.js and browser environment.

A `GraphQLClient` instance mainly supports 5 groups of methods that saves you time when read/write data from/to blockchain.

* `queries`: query block/transaction/account/asset/chain/node data form the blockchain
* `mutations`: send transaction to the blockchain, `sendTx`, all transactions should be signed before sending out to the blockchain
* `subscriptions`: listen to changes of any data on the blockchain
* `senders`: shortcut methods that takes a `wallet` and a `tx` object, then do the signing, and sending
* `encoders`: shortcut methods that takes a `wallet` and a `tx` object, encode the transaction for later signing, used internally by senders


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Examples](#examples)
* [Debugging](#debugging)
* [Documentation](#documentation)


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
  const hash = await client.declare({
    moniker: 'username',
    wallet,
  });
  console.log(hash);
})();
```


## Examples

* [Declare identify on the blockchain](./examples/declare.js)
* [Get free token for newly created account](./examples/get_free_token.js)
* [Transfer assets between 2 accounts](./examples/transfer_asset.js)
* [Transfer tokens between 2 accounts](./examples/transfer_token.js)
* [Exchange asset and token between 2 newly created accounts](./examples/exchange.js)
* [Create/update asset on the blockchain](./examples/asset.js)
* [Consume newly create asset](./examples/consume_asset.js)
* [Stake for the connected node](./examples/stake_for_node.js)


## Debugging

* If you are in Node.js: `DEBUG=@arcblock/graphql-client node script.js`
* If you are in browser: `localStorage.setItem('DEBUG', '@arcblock/graphql-client')`


## Documentation

* Query arguments and response structure can be found here: [QUERIES.md](./docs/QUERIES.md)
* Complete method list can be found here: [README.md](./docs/README.md)
