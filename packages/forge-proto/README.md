# [**@arcblock/forge-proto**](https://github.com/arcblock/forge-js/packages/forge-proto)

[![build status](https://img.shields.io/travis/ArcBlock/forge-js.svg)](https://travis-ci.org/ArcBlock/forge-js)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ArcBlock/forge-js.svg)](LICENSE)

> Javascript modules generated using protoc from ForgeSDK protobuf

## Table of Contents

- [**@arcblock/forge-proto**](#arcblockforge-proto)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)

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

## Contributors

| Name           | Website                   |
| -------------- | ------------------------- |
| **wangshijun** | <https://www.arcblock.io> |

- wangshijun

## License

[MIT](LICENSE) © [ArcBlock](https://www.arcblock.io)
