![did-auth](https://www.arcblock.io/.netlify/functions/badge/?text=did-auth)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This library aims to ease the process of handling `Did-Auth` process between different parts, its implemented according to [ABT-DID-Protocol](https://github.com/ArcBlock/abt-did-spec), and can eliminate the threat of middle-man attach if properly used, there are typically 2 use case for the library:

- `dApp <--> dApp`: for inter application communication, we provide `AppAuthenticator` and `AppHandlers`
- `dApp <--> ABT Wallet`: for application and wallet communication, we provide `WalletAuthenticator` and `WalletHandlers`

## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [Install](#Install)
- [Usage](#Usage)
  - [Between dApp and ABT Wallet](#Between-dApp-and-ABT-Wallet)
  - [Between dApp and dApp](#Between-dApp-and-dApp)
    - [Initialize authenticator and handlers](#Initialize-authenticator-and-handlers)
    - [For the server](#For-the-server)
    - [For the client](#For-the-client)

## Install

```sh
npm install @arcblock/did-auth
// or
yarn add @arcblock/did-auth
```

## Usage

### Between dApp and ABT Wallet

`WalletAuthenticator` and `WalletHandlers` should be used together with [@arcblock/react-forge](https://www.npmjs.com/package/@arcblock/react-forge).

```js
const ForgeSDK = require('@arcblock/forge-sdk');
const { WalletAuthenticator, WalletHandlers } = require('@arcblock/did-auth');

// First setup authenticator and handler factory
const wallet = ForgeSDK.Wallet.fromRandom().toJSON();
const authenticator = new WalletAuthenticator({
  wallet,
  baseUrl: 'http://wangshijun.natapp1.cc',
  appInfo: {
    description: 'Starter projects to develop web application on forge',
    icon: '/images/logo@2x.png',
    name: 'Forge Web Starter',
    path: 'https://arcwallet.io/i/',
    publisher: `did:abt:${wallet.address}`,
    subtitle: 'Starter projects to develop web application on forge',
  },
  chainInfo: {
    chainHost: 'http://did-workshop.arcblock.co:8210/api',
    chainId: 'forge',
    chainToken: 'TBA',
    decimals: 16,
  },

  // Should be set when the application need to do Cross-Chain transactions
  crossChainInfo: {
    chainHost: 'http://did-workshop.arcblock.co:8210/api',
    chainId: 'forge',
    chainToken: 'TBA',
    decimals: 16,
  },
});

const handlers = new WalletHandlers({
  authenticator,
  tokenGenerator: () => Date.now().toString(),
  tokenStorage: new MongoStorage({
    url: process.env.MONGO_URI,
  }),
});

// Then attach handler to express server
const express = require('express');
const app = express();

handlers.attach({
  prefix: '/api/did',
  action: 'login',
  claims: {
    profile: () => ({
      fields: ['fullName', 'email'],
      description: 'Please provide your name and email to continue',
    }),
  },
  onAuth: async ({ claims, userDid }) => {
    try {
      const profile = claims.find(x => x.type === 'profile');
      console.info('login.success', { userDid, profile });
    } catch (err) {
      console.error('login.error', err);
    }
  },
});

// Then your app will have 5 api endpoints that can be consumed by AuthComponent
// - `GET /api/did/login/token` create new token
// - `GET /api/did/login/status` check for token status
// - `GET /api/did/login/timeout` expire a token
// - `GET /api/did/login/auth` create auth response
// - `POST /api/did/login/auth` process login request
```

### Between dApp and dApp

Please note that `AppAuthenticator` and `AppHandlers` should be used to sign and verify the message sent between dApps, so there must are both a client and a server.

#### Initialize authenticator and handlers

```js
const ForgeSDK = require('@arcblock/forge-sdk');
const { AppAuthenticator, AppHandlers } = require('@arcblock/did-auth');

// First setup authenticator and handler factory
const wallet = ForgeSDK.Wallet.fromRandom().toJSON();
const authenticator = new AppAuthenticator(wallet);
const handlers = new AppHandlers(authenticator);
```

#### For the server

```js
const express = require('express');
const app = express();

app.post('/api/endpoint', handlers.attach(), (req, res) => {
  console.log('client.appPk', req.appPk);
  console.log('verified payload', req.payload);

  // Sent signed response: sensitive info should not be here
  res.jsonSecure({
    key: 'value',
  });
});
```

#### For the client

```js
const axios = require('axios');

const signedPayload = authenticator.sign({
  amount,
  depositorDid,
  depositorPk,
  withdrawer: appAuth.wallet.address,
  merchantId: process.env.MERCHANT_ID,
});

const res = await axios.post('http://example.com/api/endpoint', signedPayload);
const payload = await authenticator.verify(res.data);
if (payload.error) {
  throw new Error(payload.error);
}
// Do something with the payload
```
