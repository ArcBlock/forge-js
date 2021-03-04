![forge-util](https://www.arcblock.io/.netlify/functions/badge/?text=forge-util)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Utility functions to ease crypto/encoding related tasks, some methods are migrated from [web3-utils](https://github.com/ethereum/web3.js/blob/1.0/packages/web3-utils/README.md)


## Usage

```shell
yarn add @arcblock/forge-util
# OR
npm i @arcblock/forge-util -S
```

```javascript
const Util = require('@arcblock/forge-util');

console.log(Util.fromTokenToUnit(100)); // 100_0000_0000_0000_0000
console.log(Util.fromUnitToToken('1000000000000000000')); // 100
console.log(Util.isStrictHex('0x123abc')); // true
```


## API List

Following are the most used methods in `@arcblock/forge-util`:

* `toHex`: convert any value to hex encoded string
* `fromUnitToToken`: convert human readable token presentation to big number
* `fromTokenToUnit`: convert big number to human readable token representation
* `toUint8Array`: convert any value to Uint8Array
* `toBuffer`: convert any value to buffer
* `toBase58`: convert any value to base58 format
* `fromBase58`: convert base58 format to buffer
* `toBase64`: convert any value to base64 url encoded string
* `fromBase64`: convert base64 url encoded string to buffer
* `UUID`: generate a random UUID
* `isUUID`: check if a string is valid UUID
* `toDid`: prepend an did with `did:abt:` prefix
* `toAddress`: remove `did:abt:` prefix

Checkout [lib/index.d.ts](./lib/index.d.ts) for more API.
Checkout [tests/index.spec.js](./tests/index.spec.js) for more usage examples.


## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)
