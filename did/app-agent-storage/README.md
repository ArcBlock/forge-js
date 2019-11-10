# [**@arcblock/app-agent-storage**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Interface for define a storage class that can be used by [@arcblock/did-auth].

## Table of Contents

- [Motivation & Spec](#motivation--spec)
- [Install](#install)
- [Usage](#usage)
- [Contributors](#contributors)

## Motivation & Spec

### Fields

Possible fields to exist in a did-agent storage record

- `authorizeId`: Primary key
- `ownerDid`: Owner DID
- `agentDid`: Agent DID
- `appDid`: Application DID
- `appPk`: Application public key
- `appName`: Application name
- `appDescription`: Application description
- `appIcon`: Application logo/icon
- `certificateContent`: Application authorize content
- `certificateSignature`: Application authorize signature
- `certificateContentSigned`: Application authorize signed

### APIs

Basic APIs that a did-agent storage should support:

- `create(authorizeId, payload)`: 创建记录
- `update(authorizeId, updates)`: 更新记录
- `read(authorizeId)`：按 authorizeId 查询
- `delete(authorizeId)`：删除记录
- `listByApp(appDid)`: 按应用查询
- `listByOwner(ownerDid)`: 按所有者查询

## Install

```sh
npm install @arcblock/app-agent-storage
// or
yarn add @arcblock/app-agent-storage
```

## Usage

```js
const StorageInterface = require('@arcblock/app-agent-storage');

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

## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
