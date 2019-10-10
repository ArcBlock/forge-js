---
title: '@arcblock/forge-proto'
description: 'Static modules generated from forge-sdk protobuf files'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---

<a name="module_@arcblock/forge-proto"></a>


## [**@arcblock/forge-proto**](https://github.com/arcblock/forge-proto)

Contains all static generated javascript files from forge-abi and forge-core-protocols

**Example**  

```js
yarn add @arcblock/forge-proto

const { enums, fromTypeUrl, toTypeUrl } = require('@arcblock/forge-proto'); // full version, larger bundle
const { enums, fromTypeUrl, toTypeUrl } = require('@arcblock/forge-proto/lite'); // lite version, smaller bundle
```

* [module.exports(proto, json, urls)](#exp_module_@arcblock/forge-proto--module.exports) ⇒ `object` ⏏
      _ _static_
        _ [enums](#module_@arcblock/forge-proto--module.exports.enums)
        _ [messages](#module_@arcblock/forge-proto--module.exports.messages)
      _ _inner_
        _ [~getMessageType(type)](#module_@arcblock/forge-proto--module.exports..getMessageType) ⇒ `object`
        _ [~toTypeUrl(type)](#module_@arcblock/forge-proto--module.exports..toTypeUrl) ⇒ `string`
        \* [~fromTypeUrl(url)](#module_@arcblock/forge-proto--module.exports..fromTypeUrl) ⇒ `string`

<a name="exp_module_@arcblock/forge-proto--module.exports"></a>

### module.exports(proto, json, urls) ⇒ `object` ⏏

Generate type provider from types map and json spec

**Kind**: Exported function  

| Param | Type     | Description                                      |
| ----- | -------- | ------------------------------------------------ |
| proto | `object` | collection of types                              |
| json  | `object` | collection of fields/types used in the types map |
| urls  | `object` | collection of typeUrls registered to forge-core  |

<a name="module_@arcblock/forge-proto--module.exports.enums"></a>

#### module.exports.enums

All enum types and its values (number format), can be accessed from width: enums.KEY_TYPE.[`ED25519`](https://github.com/ArcBlock/forge-js/commit/ED25519)

**Kind**: static property of [`module.exports`](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  
**Read only**: true  
<a name="module_@arcblock/forge-proto--module.exports.messages"></a>

#### module.exports.messages

All enum types and its values (human readable string format), can be accessed from width: messages.KEY_TYPE.[`ED25519`](https://github.com/ArcBlock/forge-js/commit/ED25519)

**Kind**: static property of [`module.exports`](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  
**Read only**: true  
<a name="module_@arcblock/forge-proto--module.exports..getMessageType"></a>

#### module.exports~getMessageType(type) ⇒ `object`

Search for a type and its fields descriptor, then the result can be used to create a protobuf message

**Kind**: inner method of [`module.exports`](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  

| Param | Type     | Description                            |
| ----- | -------- | -------------------------------------- |
| type  | `string` | such as `Transaction`, or `TransferTx` |

<a name="module_@arcblock/forge-proto--module.exports..toTypeUrl"></a>

#### module.exports~toTypeUrl(type) ⇒ `string`

Convert type name to typeUrl, return input when no match found

```javascript
toTypeUrl('StakeTx') // 'fg:t:stake'
```

**Kind**: inner method of [`module.exports`](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| type  | `string` |

<a name="module_@arcblock/forge-proto--module.exports..fromTypeUrl"></a>

#### module.exports~fromTypeUrl(url) ⇒ `string`

Convert typeUrl string to type constructor name, return input when no match found

```javascript
fromTypeUrl('fg:t:stake') // StakeTx
```

**Kind**: inner method of [`module.exports`](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| url   | `string` |

  