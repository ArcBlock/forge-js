# [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Forge Javascript SDK packages all in one

## Table of Contents

- [Install](#install)
- [Usage](#usage)

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

ForgeSDK.connect('http://127.0.0.1:8210/api', { name: 'http' });
ForgeSDK.connect('tcp://127.0.0.1:28210', { name: 'tcp' });

// http as default
ForgeSDK.getChainInfo().then(console.log);
ForgeSDK.sendDeclareTx({
  tx: { itx: { moniker: 'abcd' } },
  wallet: ForgeSDK.Wallet.fromRandom(),
}).then(console.log);

// use tcp explicitly
ForgeSDK.getChainInfo(null, { conn: 'tcp' }).then(console.log);
```

### ES6 (lite version)

> Support both node.js and browser

```js
import ForgeSDK from '@arcblock/forge-sdk/lite';

ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });

ForgeSDK.getChainInfo().then(console.log);
ForgeSDK.sendDeclareTx({
  tx: { itx: { moniker: 'abcd' } },
  wallet: ForgeSDK.Wallet.fromRandom(),
}).then(console.log);
```
