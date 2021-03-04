![forge-sdk](https://www.arcblock.io/.netlify/functions/badge/?text=forge-sdk)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Forge Javascript SDK packages all in one


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [ES5(commonjs)](#es5commonjs)
  * [ES6](#es6)
  * [Util](#util)
  * [Wallet](#wallet)
  * [Message](#message)
* [Packages Included](#packages-included)


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

const sender = ForgeSDK.Wallet.fromRandom();
const receiver = ForgeSDK.Wallet.fromRandom();

// Declare on test chain
await ForgeSDK.declare({ moniker: 'sender', wallet: sender }, { conn: 'test' }).then(console.log);
await ForgeSDK.declare({ moniker: 'receiver', wallet: receiver }, { conn: 'test' }).then(console.log);

// Get zinc chain info
ForgeSDK.getChainInfo({ conn: 'zinc' }).then(console.log);

// Get local chain info
ForgeSDK.getChainInfo({ conn: 'local' }).then(console.log);

// Poke and transfer on test chain
await ForgeSDK.checkin({ wallet: sender }, { conn: 'test' }).then(console.log);
await ForgeSDK.transfer({ to: receiver.toAddress(), token: 1, wallet: sender }, { conn: 'test' }).then(console.log);
```

### ES6

> If you want to support both node.js and browser, please use lite version
> And the lite version only supports http connections

```js
import ForgeSDK from '@arcblock/forge-sdk/lite';

ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });

ForgeSDK.getChainInfo().then(console.log);
ForgeSDK.declare({
  moniker: 'abcd',
  wallet: ForgeSDK.Wallet.fromRandom(),
}).then(console.log);
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

const message = ForgeSDK.Message.createMessage('Transaction', {
  from: 'xxx',
  nonce: 1234,
  itx: {},
});
console.log(message);
```


## Packages Included

* [graphql-client](https://www.npmjs.com/package/@arcblock/graphql-client), available after `ForgeSDK.connect`
* [grpc-client](https://www.npmjs.com/package/@arcblock/grpc-client), available after `ForgeSDK.connect`
* [forge-util](https://www.npmjs.com/package/@arcblock/forge-util), available on `ForgeSDK.Util`
* [did-util](https://www.npmjs.com/package/@arcblock/did-util), available on `ForgeSDK.Util`
* [forge-wallet](https://www.npmjs.com/package/@arcblock/forge-wallet), available on `ForgeSDK.Wallet`
* [forge-message](https://www.npmjs.com/package/@arcblock/forge-message), available on `ForgeSDK.Message`
