# [**@arcblock/grpc-client**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> gRPC client to read/write data on forge powered blockchain

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributors](#contributors)

## Install

```sh
npm install @arcblock/grpc-client
// or
yarn add @arcblock/grpc-client
```

## Usage

```js
const { RpcClient } = require('@arcblock/grpc-client');
const { parse } = require('@arcblock/forge-config');

const client = new RpcClient(parse('./forge.toml'));
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
