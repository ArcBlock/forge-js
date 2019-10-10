---
title: '@arcblock/forge-message'
description: 'Utility functions to encode and decode message that can send to forge'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---

<a name="module_@arcblock/forge-message"></a>


## [**@arcblock/forge-message**](https://github.com/arcblock/forge-message)

Contains basic helper methods to encode/format/mock a protobuf message

**Requires**: [@arcblock/forge-util](./forge-util/), [@arcblock/forge-proto](./forge-proto/)  
**Example**  

```js
yarn add @arcblock/forge-message

const { createMessage, fakeMessage, formatMessage } = require('@arcblock/forge-message');
```

* [fakeMessage(type)](#fakeMessage) ⇒ `object`
* [formatMessage(type, data)](#formatMessage) ⇒ `object`
* [createMessage(type, params)](#createMessage) ⇒ `object`
* [decodeAny(data)](#decodeAny) ⇒ `object`
* [encodeAny(data)](#encodeAny) ⇒ `object`
* [encodeTimestamp(value)](#encodeTimestamp) ⇒ `object`
* [decodeTimestamp(data)](#decodeTimestamp) ⇒ `strong`
* [encodeBigInt(value, type)](#encodeBigInt) ⇒ `object`
* [decodeBigInt(data)](#decodeBigInt) ⇒ `string`

<a name="fakeMessage"></a>

### fakeMessage(type) ⇒ `object`

Generated a fake message for a type, the message can be RPC request/response

**Kind**: static method  
**Access**: public  

| Param | Type     | Description                                                                |
| ----- | -------- | -------------------------------------------------------------------------- |
| type  | `string` | Message type string, should be defined in forge-abi or forge-core-protocol |

**Example**  

```js
const { fakeMessage} = require('@arcblock/forge-message');
const message = fakeMessage('CreateAssetTx');
// will output
{
  moniker: 'arcblock',
  data: { type: 'string', value: 'ABCD 1234' },
  readonly: true,
  transferrable: true,
  ttl: 2,
  parent: 'arcblock',
  address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
}
```

<a name="formatMessage"></a>

### formatMessage(type, data) ⇒ `object`

Format an message from RPC to UI friendly

**Kind**: static method  
**Returns**: `object` - [almost same structure as input]  
**Access**: public  

| Param | Type     | Description |
| ----- | -------- | ----------- |
| type  | `string` | input type  |
| data  | `object` | input data  |

<a name="createMessage"></a>

### createMessage(type, params) ⇒ `object`

Create an protobuf encoded Typed message with specified data, ready to send to rpc server

**Kind**: static method  
**Returns**: `object` - Message instance  
**Access**: public  

| Param  | Type     | Description                         |
| ------ | -------- | ----------------------------------- |
| type   | `string` | message type defined in forge-proto |
| params | `object` | message content                     |

**Example**  

```js
const { createMessage } = require('@arcblock/forge-message');
const message = createMessage ('CreateAssetTx', {
  moniker: 'asset',
  address: 'zaAKEJRKQWsdfjksdfjkASRD',
});

message.getMoniker();  // 'asset'
message.getAddress();  // 'zaAKEJRKQWsdfjksdfjkASRD'
message.getReadonly(); // false
message.setReadonly(true);
```

<a name="decodeAny"></a>

### decodeAny(data) ⇒ `object`

Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }

**Kind**: static method  
**Returns**: `object` - Object%{type, value}  
**Access**: public  

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| data  | `object` | encoded data object |

<a name="encodeAny"></a>

### encodeAny(data) ⇒ `object`

Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
Does nothing on already encoded message

**Kind**: static method  
**Returns**: `object` - google.protobuf.Any  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| data  | `object` |

<a name="encodeTimestamp"></a>

### encodeTimestamp(value) ⇒ `object`

Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object

**Kind**: static method  
**Returns**: `object` - instanceof google.protobuf.Timestamp  
**Access**: public  

| Param | Type                 |
| ----- | -------------------- |
| value | `string` \| `object` |

<a name="decodeTimestamp"></a>

### decodeTimestamp(data) ⇒ `strong`

Decode google.protobuf.Timestamp message to ISO Date String

FIXME: node strictly equal because we rounded the `nanos` field

**Kind**: static method  
**Returns**: `strong` - String timestamp  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| data  | `object` |

<a name="encodeBigInt"></a>

### encodeBigInt(value, type) ⇒ `object`

Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided

**Kind**: static method  
**Returns**: `object` - Message  
**Access**: public  

| Param | Type                             | Description                       |
| ----- | -------------------------------- | --------------------------------- |
| value | `buffer` \| `string` \| `number` | value to encode                   |
| type  | `string`                         | type names defined in forge-proto |

<a name="decodeBigInt"></a>

### decodeBigInt(data) ⇒ `string`

Convert BigUint and BigSint to string representation of numbers

**Kind**: static method  
**Returns**: `string` - human readable number  
**Access**: public  
**Link**: <https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript>  

| Param      | Type      | Description               |
| ---------- | --------- | ------------------------- |
| data       | `object`  | usually from encodeBigInt |
| data.value | `buffer`  |                           |
| data.minus | `boolean` |                           |

  