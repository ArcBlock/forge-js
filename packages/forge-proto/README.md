# [**@arcblock/forge-proto**](https://github.com/arcblock/forge-js/packages/forge-proto)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Javascript modules generated using protoc from ForgeSDK protobuf

## Table of Contents

- [**@arcblock/forge-proto**](#arcblockforge-proto)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)

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
