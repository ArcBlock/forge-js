# [**@arcblock/did-agent-storage**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Interface for define a storage class that can be used by [@arcblock/did-auth].


## Table of Contents

* [Motivation & Spec](#motivation--spec)
  * [Fields](#fields)
  * [APIs](#apis)
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Motivation & Spec

### Fields

Possible fields to exist in a did-agent storage record

* `authorizeId`: Primary key
* `ownerDid`: Owner DID
* `agentDid`: Agent DID
* `appDid`: Application DID
* `appPk`: Application public key
* `appName`: Application name
* `appDescription`: Application description
* `appIcon`: Application logo/icon
* `certificateContent`: Application authorize content

### APIs

Basic APIs that a did-agent storage should support:

* `create(authorizeId, payload)`: 创建记录
* `update(authorizeId, updates)`: 更新记录
* `read(authorizeId)`：按 authorizeId 查询
* `delete(authorizeId)`：删除记录
* `listByApp(appDid)`: 按应用查询
* `listByOwner(ownerDid)`: 按所有者查询


## Install

```sh
npm install @arcblock/did-agent-storage
// or
yarn add @arcblock/did-agent-storage
```


## Usage

```js
const StorageInterface = require('@arcblock/did-agent-storage');
let storage = {};
module.exports = class MemoryAgentStorage extends StorageInterface {
  read(authorizeId) {
    return storage[authorizeId];
  }

  create(authorizeId, payload = {}) {
    storage[authorizeId] = Object.assign({ authorizeId }, payload);
    return this.read(authorizeId);
  }

  update(authorizeId, updates) {
    delete updates.authorizeId;
    storage[authorizeId] = Object.assign(storage[authorizeId], updates);
    return storage[authorizeId];
  }

  delete(authorizeId) {
    delete storage[authorizeId];
  }

  listByOwner(ownerDid) {
    Object.keys(storage)
      .filter(x => storage[x].ownerDid === ownerDid)
      .map(x => storage[x]);
  }

  listByApp(appDid) {
    Object.keys(storage)
      .filter(x => storage[x].appDid === appDid)
      .map(x => storage[x]);
  }

  clear() {
    storage = {};
  }
};
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
