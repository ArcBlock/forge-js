# `@arcblock/forge-util`

> Utility functions to ease crypto/encoding related tasks, most methods are migrated from [web3-utils](https://github.com/ethereum/web3.js/blob/1.0/packages/web3-utils/README.md)

## Usage

```shell
yarn add @arcblock/forge-util

# OR
npm i @arcblock/forge-util -S
```

```javascript
const Util = require('@arcblock/forge-util');

console.log(Util.toArc(100));                     // 100_0000_0000_0000_0000
console.log(Util.fromArc('1000000000000000000')); // 100
console.log(Util.isStrictHex('0x123abc'));        // true
```

Checkout [lib/index.d.ts](./lib/index.d.ts) for more API.
