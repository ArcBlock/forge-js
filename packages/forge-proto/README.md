![forge-proto](https://www.arcblock.io/.netlify/functions/badge/?text=forge-proto)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Javascript modules generated using protoc from ForgeSDK protobuf


## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [Install](#Install)
- [Usage](#Usage)
- [Documentation](#Documentation)
- [Contributors](#Contributors)


## Install

```sh
npm install @arcblock/forge-proto
// or
yarn add @arcblock/forge-proto
```


## Usage

```js
const { fromTypeUrl, toTypeUrl, getMessageType, enums } = require('@arcblock/forge-proto');

console.log(fromTypeUrl('fg:t:stake'));   // StakeTx
console.log(toTypeUrl('StakeTx'));        // fg:t:stake

const { fields, fn: Message } = getMessageType('RequestCreateTx');
const message = new Message({
  from: 'abc',
});
```


## Documentation

For full documentation, checkout [README.md](./docs/README.md).


## Contributors

| Name           | Website                   |
| -------------- | ------------------------- |
| **wangshijun** | <https://www.arcblock.io> |
