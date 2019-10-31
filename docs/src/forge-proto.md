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

* [@arcblock/forge-proto](#module_@arcblock/forge-proto)
  * [module.exports(proto, json, urls)](#exp_module_@arcblock/forge-proto--module.exports) ⇒ <code>object</code> ⏏
    * _static_
      * [.enums](#module_@arcblock/forge-proto--module.exports.enums)
      * [.messages](#module_@arcblock/forge-proto--module.exports.messages)
    * _inner_
      * [~getMessageType(type)](#module_@arcblock/forge-proto--module.exports..getMessageType) ⇒ <code>object</code>
      * [~toTypeUrl(type)](#module_@arcblock/forge-proto--module.exports..toTypeUrl) ⇒ <code>string</code>
      * [~fromTypeUrl(url)](#module_@arcblock/forge-proto--module.exports..fromTypeUrl) ⇒ <code>string</code>

<a name="exp_module_@arcblock/forge-proto--module.exports"></a>

### module.exports(proto, json, urls) ⇒ <code>object</code> ⏏

Generate type provider from types map and json spec

**Kind**: Exported function  

| Param | Type                | Description                                      |
| ----- | ------------------- | ------------------------------------------------ |
| proto | <code>object</code> | collection of types                              |
| json  | <code>object</code> | collection of fields/types used in the types map |
| urls  | <code>object</code> | collection of typeUrls registered to forge-core  |

<a name="module_@arcblock/forge-proto--module.exports.enums"></a>

#### module.exports.enums

All enum types and its values (number format), can be accessed from width: enums.KEY_TYPE.[`ED25519`](https://github.com/ArcBlock/forge-js/commit/ED25519)

**Kind**: static property of [<code>module.exports</code>](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  
**Read only**: true  
<a name="module_@arcblock/forge-proto--module.exports.messages"></a>

#### module.exports.messages

All enum types and its values (human readable string format), can be accessed from width: messages.KEY_TYPE.[`ED25519`](https://github.com/ArcBlock/forge-js/commit/ED25519)

**Kind**: static property of [<code>module.exports</code>](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  
**Read only**: true  
<a name="module_@arcblock/forge-proto--module.exports..getMessageType"></a>

#### module.exports~getMessageType(type) ⇒ <code>object</code>

Search for a type and its fields descriptor, then the result can be used to create a protobuf message

**Kind**: inner method of [<code>module.exports</code>](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  

| Param | Type                | Description                            |
| ----- | ------------------- | -------------------------------------- |
| type  | <code>string</code> | such as `Transaction`, or `TransferTx` |

<a name="module_@arcblock/forge-proto--module.exports..toTypeUrl"></a>

#### module.exports~toTypeUrl(type) ⇒ <code>string</code>

Convert type name to typeUrl, return input when no match found

```javascript
toTypeUrl('StakeTx') // 'fg:t:stake'
```

**Kind**: inner method of [<code>module.exports</code>](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| type  | <code>string</code> |

<a name="module_@arcblock/forge-proto--module.exports..fromTypeUrl"></a>

#### module.exports~fromTypeUrl(url) ⇒ <code>string</code>

Convert typeUrl string to type constructor name, return input when no match found

```javascript
fromTypeUrl('fg:t:stake') // StakeTx
```

**Kind**: inner method of [<code>module.exports</code>](#exp_module_@arcblock/forge-proto--module.exports)  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| url   | <code>string</code> |

  