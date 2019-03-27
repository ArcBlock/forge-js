# [**@arcblock/did-auth**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Helper classes to help you setup a node.js web server that can handle DID Authentication

## Table of Contents

- [**@arcblock/did-auth**](#arcblockdid-auth)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Motivation and workflow](#motivation-and-workflow)
    - [Parties](#parties)
    - [Workflow](#workflow)

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

## Motivation and workflow

> Basic DID Auth Workflow for WEB Applications

### Parties

- S: WEB Server
- A: ABT Wallet
- C: Web Client
- T: action token {token, did, status}

### Workflow

1. A web application that plan to use DID auth is hosted on `S`, web server
2. `C` loads a webpage from `S`, `C` found that user is not logged in
3. `C` ask `S` for a action token and login uri, the uri is used to display qrcode for `A` to scan
    - When `S` generates the action token, the action token is persisted in data store
    - The uri for `A` should contain the action token, so when `A` sends requests to `S`, `S` knows how to merge the session after authentication
    - `T = { token, status = created }`
4. `A` scan the qrcode displayed on `C`
5. `A` send `GET` request to `S`, to get application meta info, and requested claims
    - `S` should mark the qrcode status as `scanned` when receive this request
    - `A` should add `did` on the request url, so `S` knows how to merge the session
    - `T = { token, did, status = scanned }`
6. `A` collects user authenticated info and sign the payload, then send `POST` request to `S`
    - `S` should verify the jwt signature before any further processing
    - `S` should create/update the user when processing this request
    - `S` should only update login status when `token` and `did` match the stored ones
    - `T = { token, did, status = succeed | failed }`
7. When `C` got the token in step 3, it should check login status every second to get the login status
    - Login status should be notified on the web page when changed
    - Refresh the page when login status is `succeed`

> The above workflow not only works for login process, but also works for payment/signature/agreement process
