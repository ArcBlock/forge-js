---
title: 'Forge SDK'
description: 'Javascript lib to work with Forge'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---

![forge-javascript-sdk](https://www.arcblock.io/.netlify/functions/badge/?text=Forge%20Javascript%20SDK)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Packages](#packages)
- [Install](#install)
- [Usage](#usage)
  - [ES5(commonjs)](#es5commonjs)
  - [ES6](#es6)
  - [Util](#util)
  - [Wallet](#wallet)
  - [Message](#message)
- [Documentation](#documentation)
- [Contribution](#contribution)
- [Compatibility](#compatibility)
- [Report a Bug?](#report-a-bug)
- [License](#license)

## Introduction

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Last updated at 10/10/2019, 2:00:48 AM

Javascript SDK for [forge](https://docs.arcblock.io/forge/latest/), which is an awesome framework to write distributed blockchain applications.

## Packages

- [@arcblock/did <img src="https://img.shields.io/npm/v/@arcblock/did.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/did)
- [@arcblock/did-connect-js <img src="https://img.shields.io/npm/v/@arcblock/did-connect-js.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/did-connect-js)
- [@arcblock/did-util <img src="https://img.shields.io/npm/v/@arcblock/did-util.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/did-util)
- [@arcblock/forge-config <img src="https://img.shields.io/npm/v/@arcblock/forge-config.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/forge-config)
- [@arcblock/forge-message <img src="https://img.shields.io/npm/v/@arcblock/forge-message.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/forge-message)
- [@arcblock/forge-proto <img src="https://img.shields.io/npm/v/@arcblock/forge-proto.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/forge-proto)
- [@arcblock/forge-sdk <img src="https://img.shields.io/npm/v/@arcblock/forge-sdk.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/forge-sdk)
- [@arcblock/forge-util <img src="https://img.shields.io/npm/v/@arcblock/forge-util.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/forge-util)
- [@arcblock/forge-wallet <img src="https://img.shields.io/npm/v/@arcblock/forge-wallet.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/forge-wallet)
- [@arcblock/graphql-client <img src="https://img.shields.io/npm/v/@arcblock/graphql-client.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/graphql-client)
- [@arcblock/grpc-client <img src="https://img.shields.io/npm/v/@arcblock/grpc-client.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/grpc-client)
- [@arcblock/mcrypto <img src="https://img.shields.io/npm/v/@arcblock/mcrypto.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/mcrypto)
- [@arcblock/tcp-server <img src="https://img.shields.io/npm/v/@arcblock/tcp-server.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/tcp-server)
- [@arcblock/tx-util <img src="https://img.shields.io/npm/v/@arcblock/tx-util.svg" alt="Version">](https://www.npmjs.com/package/@arcblock/tx-util)

## Install

```sh
npm i @arcblock/forge-sdk
// OR
yarn add @arcblock/forge-sdk
```

## Usage

### ES5(commonjs)

> Support Node.js

```js
const ForgeSDK = require('@arcblock/forge-sdk');

// Connect to multi endpoints
ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });
ForgeSDK.connect('https://zinc.abtnetwork.io/api', { name: 'zinc' });
ForgeSDK.connect('tcp://127.0.0.1:28210', { name: 'local' });

// Declare on test chain
ForgeSDK.sendDeclareTx({
  tx: { itx: { moniker: 'abcd' } },
  wallet: ForgeSDK.Wallet.fromRandom(),
}).then(console.log);

// Get zinc chain info
ForgeSDK.getChainInfo({ conn: 'zinc' }).then(console.log);

// Get local chain info
ForgeSDK.getChainInfo({ conn: 'local' }).then(console.log);
```

### ES6

> If you want to support both node.js and browser, please use lite version
> And the lite version only supports http connections

```js
import ForgeSDK from '@arcblock/forge-sdk/lite';

ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });

ForgeSDK.getChainInfo().then(console.log);
```

### Util

```javascript
const ForgeSDK = require('@arcblock/forge-sdk');

const bn = ForgeSDK.Util.fromTokenToUnit(10, 16);
console.log(bn);
```

### Wallet

```javascript
const ForgeSDK = require('@arcblock/forge-sdk');

const wallet = ForgeSDK.Wallet.fromRandom();
console.log(wallet.toJSON());
```

### Message

```javascript
const ForgeSDK = require('@arcblock/forge-sdk');

const message = ForgeSDK.Message.createMessage('Transaction', { from: 'abcd' });
console.log(message);
```

## Documentation

[https://docs.arcblock.io/forge/sdks/javascript/latest/](https://docs.arcblock.io/forge/sdks/javascript/latest/)

## Contribution

Checkout [CONTRIBUTION.md](https://github.com/ArcBlock/forge-js/blob/master/CONTRIBUTION.md)

## Compatibility

Forge javascript sdk works with node.js v8.x or above, checkout [Travis](https://travis-ci.com/ArcBlock/forge-js/builds) for status.

## Report a Bug?

Bugs and feature requests please create new issues [here](https://github.com/ArcBlock/forge-js/issues)

## License

Copyright 2018-2019 ArcBlock

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
