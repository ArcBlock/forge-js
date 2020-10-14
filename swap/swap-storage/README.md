# [**@arcblock/swap-storage**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Interface for define a storage class that can be used by forge atomic swap process.


## Table of Contents

* [Motivation & Spec](#motivation--spec)
  * [Fields](#fields)
  * [APIs](#apis)
  * [Events](#events)
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Motivation & Spec

> Since traceIds are used everywhere make achieve better QR code experience, we should allow users to customize how to generate/store/update traceId records.

Swap transactions are tracked using a traceId, which is generated when creating a new atomic swap.

### Fields

Possible fields to exist in a swap record

* `traceId`: primary key
* `status`: default to `not_started`, will change on events
* `offerUserAddress`: '',
* `offerAssets`: \[],
* `offerToken`: 0,
* `offerLocktime`: 28800,
* `offerChain`: '', // 卖家要卖货的链
* `offerSetupHash`: '', // 卖家 setup_swap 的 hash
* `offerSwapAddress`: '', // 卖家 setup_swap 的地址
* `offerRetrieveHash`: '', // 卖家 retrieve_swap 的 hash
* `offerRevokeHash`: '', // 卖家 revoke_swap 的 hash
* `demandUserAddress`: '',
* `demandAssets`: \[],
* `demandToken`: 0,
* `demandLocktime`: 57600,
* `demandChain`: '', // 买家要付款的链
* `demandSetupHash`: '', // 买家 setup_swap 的 hash
* `demandSwapAddress`: '', // 买家 setup_swap 的地址
* `demandRetrieveHash`: '', // 买家 retrieve_swap 的 hash
* `demandRevokeHash`: '', // 买家 revoke_swap 的 hash
* `errorMessage`: '', // detailed error message
* `createdAt`: new Date(), // 创建时间
* `updatedAt`: new Date(), // 更新时间

### APIs

Basic APIs that a traceId storage should support:

* `create(traceId, payload)`: 创建记录
* `update(traceId, updates)`: 更新记录
* `read(traceId)`：按 traceId 查询
* `delete(traceId)`：删除记录
* `finalize(traceId, payload)`：把订单交换物、交换双方固定下来
* `listByStatus(status)`: 按状态查询订单
* `listByOfferAddress(address, status)`: 按卖方查询订单
* `listByDemandAddress(address, status)`：按买方查询订单
* `purge(ttl)`：清理掉无效的数据

### Events

Events that will be emitted during a atomic-swap process

* `create`: when creating a new record
* `update`: when updating the record
* `destroy`: when deleting the record
* `finalize`: when finalize swap payload
* `user_setup`: when buyer have done setup_swap
* `seller_setup`: when seller is doing setup
* `both_setup`: when seller have done setup_swap
* `user_retrieve`: when buyer have done retrieve_swap
* `both_retrieve`: when seller have done retrieve_swap
* `user_revoke`: when buyer have done revoke_swap
* `seller_revoke`: when seller have done revoke_swap
* `both_revoke`: when seller have done revoke_swap


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


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
