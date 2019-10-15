# [**@arcblock/swap-storage**](https://github.com/arcblock/abt-did-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Interface for define a storage class that can be used by [@arcblock/did-auth].

## Table of Contents

- [**@arcblock/swap-storage**](#arcblockswap-storage)
  - [Table of Contents](#table-of-contents)
  - [Motivation & Spec](#motivation--spec)
  - [Install](#install)
  - [Usage](#usage)

## Motivation & Spec

> Since traceIds are used everywhere make achieve better QR code experience, we should allow users to customize how to generate/store/update traceId records.

Basic APIs that a traceId storage should support:

- `async init()`, optional, **should be called before creating any instance**, open a database connection, creating a embed database on file system
- `async create(traceId, status = created)`, create a new traceId record, persist in data store
- `async exist?(traceId, did)`, check for traceId existense
- `async read(traceId)`, read a traceId from database,
- `async update(traceId, updates)`, update traceId record
- `async delete(traceId)`, remove a traceId record
- `async gc()`, optional, run garbage collection on the traceId storage

Plan to support:

- swap-storage-mongo
- swap-storage-psql
- swap-storage-nedb
- swap-storage-memory

## Install

```sh
npm install @arcblock/swap-storage
// or
yarn add @arcblock/swap-storage
```

## Usage

```js
const StorageInterface = require('@arcblock/swap-storage');
const keystone = require('keystone');

module.exports = class KeystoneStorage extends StorageInterface {
  constructor() {
    this.model = keystone.list('LoginToken').model;
  }

  create(traceId, status = 'created') {
    const LoginToken = this.model;
    const item = new LoginToken({ traceId, status });
    return item.save();
  }

  read(traceId) {
    return this.model.findOne({ traceId });
  }

  update(traceId, updates) {
    return this.model.findOneAndUpdate({ traceId }, updates);
  }

  delete(traceId) {
    return this.model.remove({ traceId });
  }

  exist(traceId, did) {
    return this.model.findOne({ traceId, did });
  }
};
```
