# [**@arcblock/did-auth-storage**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Interface for define a storage class that can be used by [@arcblock/did-auth].

## Table of Contents

- [**@arcblock/did-auth-storage**](#arcblockdid-auth-storage)
  - [Table of Contents](#table-of-contents)
  - [Motivation & Spec](#motivation--spec)
  - [Install](#install)
  - [Usage](#usage)

## Motivation & Spec

> Since tokens are used everywhere make achieve better QR code experience, we should allow users to customize how to generate/store/update token records.

Basic APIs that a token storage should support:

- `async init()`, optional, **should be called before creating any instance**, open a database connection, creating a embed database on file system
- `async create(token, status = created)`, create a new token record, persist in data store
- `async exist?(token, did)`, check for token existense
- `async read(token)`, read a token from database,
- `async update(token, updates)`, update token record
- `async delete(token)`, remove a token record
- `async gc()`, optional, run garbage collection on the token storage

Plan to support:

- token-storage-mongo
- token-storage-psql
- token-storage-nedb
- token-storage-memory

## Install

```sh
npm install @arcblock/did-auth-storage
// or
yarn add @arcblock/did-auth-storage
```

## Usage

```js
const StorageInterface = require('@arcblock/did-auth-storage');
const keystone = require('keystone');

module.exports = class KeystoneStorage extends StorageInterface {
  constructor() {
    this.model = keystone.list('LoginToken').model;
  }

  create(token, status = 'created') {
    const LoginToken = this.model;
    const item = new LoginToken({ token, status });
    return item.save();
  }

  read(token) {
    return this.model.findOne({ token });
  }

  update(token, updates) {
    return this.model.findOneAndUpdate({ token }, updates);
  }

  delete(token) {
    return this.model.remove({ token });
  }

  exist(token, did) {
    return this.model.findOne({ token, did });
  }
};
```
