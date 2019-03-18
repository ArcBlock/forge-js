# `forge-graphql-client`

> Graphql Client for Forge, provided gRPC similar features to interact with a forge-powered app.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)


## Install

```shell
npm i @arcblock/forge-graphql-client -S
# OR
yarn add @arcblock/forge-graphql-client
```


## Usage

```js
const Mcrypto = require('@arcblock/mcrypto');
const GraphqlClient = require('@arcblock/forge-graphql-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');

const client = new GraphqlClient('http://localhost:8210/api');
console.log({
  queries: client.getQueries(),
  subscriptions: client.getSubscriptions(),
  mutations: client.getMutations(),
  transactions: client.getTxMethods(),
});

(async () => {
  // Query Data
  const chainInfo = await client.getChainInfo();
  const forgeState = await client.getForgeState();
  const block = await client.getBlock({ height: 2 });
  console.log('getChainInfo', chainInfo);
  console.log('getForgeState', forgeState);
  console.log('getBlock', block);

  // Send Transaction
  const wallet = fromRandom(
    WalletType({
      role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
      pk: Mcrypto.types.KeyType.SECP256K1,
      hash: Mcrypto.types.HashType.SHA3,
    })
  );
  const res = await client.sendDeclareTx({
    data: {
      moniker: `wangshijun_${Math.round(Math.random() * 1000)}`,
      pk: Buffer.from(hexToBytes(wallet.publicKey)),
      type,
    },
    wallet,
  });
  console.log(res);
})();
```


## Documentation

Checkout: [API.md](./docs/API.md).
