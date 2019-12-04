![forge-proto](https://www.arcblock.io/.netlify/functions/badge/?text=forge-proto)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Javascript modules generated using protoc from ForgeSDK protobuf


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)
* [Contributors](#contributors)


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

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)


## Contributors

| Name           | Website                   |
| -------------- | ------------------------- |
| **wangshijun** | <https://www.arcblock.io> |
