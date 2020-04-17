# [**@arcblock/swap-storage-nedb**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses [nedb](https://www.npmjs.com/package/nedb) to store data, implements interfaces defined in `@arcblock/swap-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/swap-storage-nedb
// or
yarn add @arcblock/swap-storage-nedb
```


## Usage

```js
const DiskStorage = require('@arcblock/swap-storage-nedb');

const storage = new DiskStorage({
  dbPath: '/path/to/swap.db',
});

(async () => {
  const item = await storage.create({});
})();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
