# [**@arcblock/did-auth**](https://github.com/arcblock/forge-js)

[![build status](https://img.shields.io/travis/ArcBlock/forge-js.svg)](https://travis-ci.org/ArcBlock/forge-js)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/forge-js.svg)](https://codecov.io/gh/ArcBlock/forge-js)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ArcBlock/forge-js.svg)](LICENSE)

> Helper classes to help you setup a node.js web server that can handle DID Authentication

## Table of Contents

- [**@arcblock/did-auth**](#arcblockdid-auth)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)

## Install

```sh
npm install @arcblock/did-auth
// or
yarn add @arcblock/did-auth
```

## Usage

```js
const { types } = require('@arcblock/mcrypto');
const { Authenticator, Handlers } = require('@arcblock/did-auth');
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
