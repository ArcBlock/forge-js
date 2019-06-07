# [**@arcblock/did-util**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Helper functions to calculate did


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)


## Install

```sh
npm install @arcblock/did-util
// or
yarn add @arcblock/did-util
```


## Usage

```js
const { types } = require('@arcblock/mcrypto');
const { Authenticator, Handlers } = require('@arcblock/did-util');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');

const type = WalletType({
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});

const wallet = fromSecretKey(process.env.APP_SK, type).toJSON();

module.exports = new Authenticator({
  wallet,
  baseUrl: 'http://wangshijun.natapp1.cc',
  appInfo: {
    chainHost: 'http://did-workshop.arcblock.co:8210/api',
    chainId: 'forge',
    chainToken: 'TBA',
    copyright: 'https://example-application/copyright',
    decimals: 16,
    description: 'Starter projects to develop web application on forge',
    icon: '/images/logo@2x.png',
    name: 'Forge Web Starter',
    path: 'https://arcwallet.io/i/',
    publisher: `did:abt:${wallet.address}`,
    subtitle: 'Starter projects to develop web application on forge',
  },
});
```


## Documentation

For full documentation, checkout [README.md](./docs/README.md).


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
