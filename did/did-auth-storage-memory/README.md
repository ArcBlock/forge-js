# [**@arcblock/did-connect-storage-memory**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses mongo to store data, implements interfaces defined in `@arcblock/did-connect-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/did-connect-storage-memory
// or
yarn add @arcblock/did-connect-storage-memory
```


## Usage

```js
const MemoryStorage = require('@arcblock/did-connect-storage-memory');

const storage = new MemoryStorage();

(async () => {
  const token = '123456';
  const item = await storage.create(token);
})();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
