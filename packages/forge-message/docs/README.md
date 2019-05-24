<a name="module_@arcblock/forge-message"></a>


## [**@arcblock/forge-message**](https://github.com/arcblock/forge-message)

Contains basic helper methods to encode/format/mock a protobuf message

**Requires**: <code>module:[**@arcblock/forge-util**](https://github.com/arcblock/forge-util)</code>, <code>module:[**@arcblock/forge-proto**](https://github.com/arcblock/forge-proto)</code>  
**Example**  

```js
yarn add @arcblock/forge-message

const { createMessage, fakeMessage, formatMessage } = require('@arcblock/forge-message');
```

* [@arcblock/forge-message](#module_@arcblock/forge-message)
  * [.fakeMessage(type)](#module_@arcblock/forge-message.fakeMessage) ⇒ <code>object</code>
  * [.formatMessage(type, data)](#module_@arcblock/forge-message.formatMessage) ⇒ <code>object</code>
  * [.createMessage(type, params)](#module_@arcblock/forge-message.createMessage) ⇒ <code>object</code>
  * [.decodeAny(data)](#module_@arcblock/forge-message.decodeAny) ⇒ <code>object</code>
  * [.encodeAny(data)](#module_@arcblock/forge-message.encodeAny) ⇒ <code>object</code>
  * [.encodeTimestamp(value)](#module_@arcblock/forge-message.encodeTimestamp) ⇒ <code>object</code>
  * [.decodeTimestamp(data)](#module_@arcblock/forge-message.decodeTimestamp) ⇒ <code>strong</code>
  * [.encodeBigInt(value, type)](#module_@arcblock/forge-message.encodeBigInt) ⇒ <code>object</code>
  * [.decodeBigInt(data)](#module_@arcblock/forge-message.decodeBigInt) ⇒ <code>string</code>

<a name="module_@arcblock/forge-message.fakeMessage"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).fakeMessage(type) ⇒ <code>object</code>

Generated a fake message for a type, the message can be RPC request/response

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Access**: public  

| Param | Type                | Description                                                                |
| ----- | ------------------- | -------------------------------------------------------------------------- |
| type  | <code>string</code> | Message type string, should be defined in forge-abi or forge-core-protocol |

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

<a name="module_@arcblock/forge-message.formatMessage"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).formatMessage(type, data) ⇒ <code>object</code>

Format an message from RPC to UI friendly

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>object</code> - [almost same structure as input]  
**Access**: public  

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| type  | <code>string</code> | input type  |
| data  | <code>object</code> | input data  |

<a name="module_@arcblock/forge-message.createMessage"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).createMessage(type, params) ⇒ <code>object</code>

Create an protobuf encoded Typed message with specified data, ready to send to rpc server

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>object</code> - Message instance  
**Access**: public  

| Param  | Type                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| type   | <code>string</code> | message type defined in forge-proto |
| params | <code>object</code> | message content                     |

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

<a name="module_@arcblock/forge-message.decodeAny"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).decodeAny(data) ⇒ <code>object</code>

Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>object</code> - Object%{type, value}  
**Access**: public  

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| data  | <code>object</code> | encoded data object |

<a name="module_@arcblock/forge-message.encodeAny"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).encodeAny(data) ⇒ <code>object</code>

Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
Does nothing on already encoded message

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>object</code> - google.protobuf.Any  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| data  | <code>object</code> |

<a name="module_@arcblock/forge-message.encodeTimestamp"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).encodeTimestamp(value) ⇒ <code>object</code>

Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>object</code> - instanceof google.protobuf.Timestamp  
**Access**: public  

| Param | Type                                       |
| ----- | ------------------------------------------ |
| value | <code>string</code> \| <code>object</code> |

<a name="module_@arcblock/forge-message.decodeTimestamp"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).decodeTimestamp(data) ⇒ <code>strong</code>

Decode google.protobuf.Timestamp message to ISO Date String

FIXME: node strictly equal because we rounded the `nanos` field

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>strong</code> - String timestamp  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| data  | <code>object</code> |

<a name="module_@arcblock/forge-message.encodeBigInt"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).encodeBigInt(value, type) ⇒ <code>object</code>

Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>object</code> - Message  
**Access**: public  

| Param | Type                                                              | Description                       |
| ----- | ----------------------------------------------------------------- | --------------------------------- |
| value | <code>buffer</code> \| <code>string</code> \| <code>number</code> | value to encode                   |
| type  | <code>string</code>                                               | type names defined in forge-proto |

<a name="module_@arcblock/forge-message.decodeBigInt"></a>

### [**@arcblock/forge-message**](https://github.com/arcblock/forge-message).decodeBigInt(data) ⇒ <code>string</code>

Convert BigUint and BigSint to string representation of numbers

**Kind**: static method of [<code>@arcblock/forge-message</code>](#module_@arcblock/forge-message)  
**Returns**: <code>string</code> - human readable number  
**Access**: public  
**Link**: <https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript>  

| Param      | Type                 | Description               |
| ---------- | -------------------- | ------------------------- |
| data       | <code>object</code>  | usually from encodeBigInt |
| data.value | <code>buffer</code>  |                           |
| data.minus | <code>boolean</code> |                           |
