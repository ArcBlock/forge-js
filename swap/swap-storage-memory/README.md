# [**@arcblock/swap-storage-memory**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses memory to store data, implements interfaces defined in `@arcblock/swap-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/swap-storage-memory
// or
yarn add @arcblock/swap-storage-memory
```


## Usage

```js
const MemoryStorage = require('@arcblock/swap-storage-memory');

const storage = new MemoryStorage();

(async () => {
  const item = await storage.create({});
})();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
