![grpc-client](https://www.arcblock.io/.netlify/functions/badge/?text=grpc-client)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

gRpc Client library to connect your app with forge powered blockchain node, all requests are sent over tcp, can be used in only Node.js environment.

A `GRpcClient` instance mainly supports 3 groups of methods that saves you time when read/write data from/to blockchain.

* `rpcs`: read/write block/transaction/account/asset/chain/node data form/to the blockchain
* `senders`: shortcut methods that takes a `wallet` and a `tx` object, then do the signing, and sending
* `encoders`: shortcut methods that takes a `wallet` and a `tx` object, encode the transaction for later signing, used internally by senders


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Examples](#examples)
* [Debugging](#debugging)
* [Documentation](#documentation)


## Install

```sh
npm i @arcblock/grpc-client
// or
yarn add @arcblock/grpc-client
```


## Usage

```js
const GRpcClient = require('@arcblock/grpc-client');

const client = new GRpcClient('tcp://127.0.0.1:28210');
console.log({
  rpcs: client.getRpcMethods(),
  senders: client.getTxSendMethods(),
  encoders: client.getTxEncodeMethods(),
});

(async () => {
  // fetch forge change info
  const { info } = await client.getChainInfo();
  console.log('chainInfo', info);

  // get block info
  const stream = client.getBlock({ height: 11 });
  stream
    .on('data', function({ block }) {
      console.log('blockInfo:', block);
    })
    .on('error', err => {
      console.error('error', err);
    });
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

* If you are in Node.js: `DEBUG=@arcblock/grpc-client node script.js`


## Documentation

* Complete method list can be found here: [README.md](./docs/README.md)
* Rpc arguments and response structure can be found here: [API.md](./docs/API.md)
