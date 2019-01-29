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
const GraphqlClient = require('@arcblock/forge-graphql-client');
const client = new GraphqlClient('http://localhost:8210/api');
console.log({
  queries: client.getQueries(),
  subscriptions: client.getSubscriptions(),
  mutations: client.getMutations(),
});

// Query Data
(async () => {
  const { getChainInfo } = await client.getChainInfo();
  const { getForgeState } = await client.getForgeState();
  const { getBlock } = await client.getBlock({ height: 2 });
  console.log('getChainInfo', getChainInfo);
  console.log('getForgeState', getForgeState);
  console.log('getBlock', getBlock);
})();

// Mutation
// TODO:

// Subscription
// TODO:
```


## Documentation

Checkout: [API.md](./docs/API.md).
