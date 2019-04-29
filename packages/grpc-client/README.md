# [**@arcblock/grpc-client**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> gRPC client to read/write data on forge powered blockchain

## Table of Contents

- [**@arcblock/grpc-client**](#arcblockgrpc-client)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Documentation](#documentation)

## Install

```sh
npm install @arcblock/grpc-client
// or
yarn add @arcblock/grpc-client
```

## Usage

```js
const { GRpcClient } = require('@arcblock/grpc-client');

const client = new GRpcClient('tcp://127.0.0.1:28210');
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

## Documentation

For complete API documentation please refer [API.md](./API.md)
