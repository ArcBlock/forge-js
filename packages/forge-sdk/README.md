# [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Forge Javascript SDK packages all in one

## Table of Contents

- [**@arcblock/forge-sdk**](#arcblockforge-sdk)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)

## Install

```sh
npm i @arcblock/forge-sdk
// OR
yarn add @arcblock/forge-sdk
```

## Usage

```js
ForgeSDK.connect('http://127.0.0.1:8210/api', { name: 'local' });

(async () => {
  const res = await ForgeSDK.getChainInfo();
  console.log(res);
})();
```
