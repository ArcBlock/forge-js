# [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Forge Javascript SDK packages all in one


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [TODO](#todo)


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


## TODO

* add test case
* expose more modules: Util, Wallet, Message
* generate dts
