<a name="module_@arcblock/forge-proto"></a>

## @arcblock/forge-proto
Contains all static generated javascript files from forge-abi and forge-core-protocols

**Example**  
```js
yarn add @arcblock/forge-proto

const { enums, fromTypeUrl, toTypeUrl } = require('@arcblock/forge-proto'); // full version, larger bundle
const { enums, fromTypeUrl, toTypeUrl } = require('@arcblock/forge-proto/lite'); // lite version, smaller bundle
```

* [@arcblock/forge-proto](#module_@arcblock/forge-proto)
    * _static_
        * [.enums](#module_@arcblock/forge-proto.enums)
        * [.messages](#module_@arcblock/forge-proto.messages)
    * _inner_
        * [~getMessageType(type)](#module_@arcblock/forge-proto..getMessageType) ⇒ <code>object</code>
        * [~toTypeUrl(type)](#module_@arcblock/forge-proto..toTypeUrl) ⇒ <code>string</code>
        * [~fromTypeUrl(url)](#module_@arcblock/forge-proto..fromTypeUrl) ⇒ <code>string</code>

<a name="module_@arcblock/forge-proto.enums"></a>

### @arcblock/forge-proto.enums
All enum types and its values (number format), can be accessed from width: enums.KEY_TYPE.ED25519

**Kind**: static property of [<code>@arcblock/forge-proto</code>](#module_@arcblock/forge-proto)  
**Access**: public  
**Read only**: true  
<a name="module_@arcblock/forge-proto.messages"></a>

### @arcblock/forge-proto.messages
All enum types and its values (human readable string format), can be accessed from width: messages.KEY_TYPE.ED25519

**Kind**: static property of [<code>@arcblock/forge-proto</code>](#module_@arcblock/forge-proto)  
**Access**: public  
**Read only**: true  
<a name="module_@arcblock/forge-proto..getMessageType"></a>

### @arcblock/forge-proto~getMessageType(type) ⇒ <code>object</code>
Search for a type and its fields descriptor, then the result can be used to create a protobuf message

**Kind**: inner method of [<code>@arcblock/forge-proto</code>](#module_@arcblock/forge-proto)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | such as `Transaction`, or `TransferTx` |

<a name="module_@arcblock/forge-proto..toTypeUrl"></a>

### @arcblock/forge-proto~toTypeUrl(type) ⇒ <code>string</code>
Convert type name to typeUrl, return input when no match found

```javascript
toTypeUrl('StakeTx') // 'fg:t:stake'
```

**Kind**: inner method of [<code>@arcblock/forge-proto</code>](#module_@arcblock/forge-proto)  
**Access**: public  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="module_@arcblock/forge-proto..fromTypeUrl"></a>

### @arcblock/forge-proto~fromTypeUrl(url) ⇒ <code>string</code>
Convert typeUrl string to type constructor name, return input when no match found

```javascript
fromTypeUrl('fg:t:stake') // StakeTx
```

**Kind**: inner method of [<code>@arcblock/forge-proto</code>](#module_@arcblock/forge-proto)  
**Access**: public  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 

