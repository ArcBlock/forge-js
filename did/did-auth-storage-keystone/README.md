# [**@arcblock/did-auth-storage-keystone**](https://github.com/arcblock/abt-did-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses keystone.js to store data, implements interfaces defined in `@arcblock/did-auth-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [1. Create model when bootstrap keystone](#1-create-model-when-bootstrap-keystone)
  * [2. Create storage instance when setup routes](#2-create-storage-instance-when-setup-routes)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/did-auth-storage-keystone keystone
// or
yarn add @arcblock/did-auth-storage-keystone keystone
```


## Usage

### 1. Create model when bootstrap keystone

```js
const KeystoneStorage = require('@arcblock/did-auth-storage-keystone');
const keystone = require('keystone');

KeystoneStorage.init();
```

### 2. Create storage instance when setup routes

```js
const { Handlers, Authenticator } = require('@arcblock/did-auth');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const KeystoneStorage = require('@arcblock/did-auth-storage-keystone');
const Mcrypto = require('@arcblock/mcrypto');
const keystone = require('keystone');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const wallet = fromSecretKey(process.env.APP_SK, type).toJSON();

// Setup keystone.js
keystone.set('routes', app => {
  const handler = new Handlers({
    tokenGenerator: req => req.sessionID + Date.now(),
    tokenStorage: new KeystoneStorage(),
    authenticator: new Authenticator({
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
    }),
  });

  // Enable payment
  handler.attach({
    app,
    action: 'payment',
    claims: {
      signature: {
        txType: 'TransferTx',
        txData: {
          to: wallet.address,
          value: {
            value: fromTokenToUnit(100).toBuffer(),
            minus: false,
          },
        },
        description: 'Please pay 100 TBA to unlock the secret document',
      },
    },
    onAuth: async ({ claims, did }) => {
      console.log('pay.onAuth', { claims, did });
    },
    onComplete: (req, { did }) => {
      console.log('pay.onComplete', { did });
    },
  });

  // Now keystone app have route handlers attached to the following url
  // - `GET /api/did/payment/token` create new token
  // - `GET /api/did/payment/status` check for token status
  // - `GET /api/did/payment/auth` create auth response
  // - `POST /api/did/payment/auth` process payment request
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
