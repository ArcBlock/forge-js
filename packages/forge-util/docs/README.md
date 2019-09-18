<a name="module_@arcblock/forge-util"></a>


## [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)

Contains many utility functions to help developers manipulate encoding/decoding/formatting/bignumber

**Example**  

```js
yarn add @arcblock/forge-util
```

* [@arcblock/forge-util](#module_@arcblock/forge-util)
  * _static_
    * [.isHexPrefixed(str)](#module_@arcblock/forge-util.isHexPrefixed) ⇒ <code>Boolean</code>
    * [.stripHexPrefix(str)](#module_@arcblock/forge-util.stripHexPrefix) ⇒ <code>String</code> \| <code>Optional</code>
    * [.isBN(object)](#module_@arcblock/forge-util.isBN) ⇒ <code>Boolean</code>
    * [.isBigNumber(object)](#module_@arcblock/forge-util.isBigNumber) ⇒ <code>Boolean</code>
    * [.isHexStrict(hex)](#module_@arcblock/forge-util.isHexStrict) ⇒ <code>Boolean</code>
    * [.isHex(hex)](#module_@arcblock/forge-util.isHex) ⇒ <code>Boolean</code>
    * [.toBN(number,)](#module_@arcblock/forge-util.toBN) ⇒ <code>BN</code>
    * [.utf8ToHex(str)](#module_@arcblock/forge-util.utf8ToHex) ⇒ <code>String</code>
    * [.hexToUtf8(hex)](#module_@arcblock/forge-util.hexToUtf8) ⇒ <code>String</code>
    * [.hexToNumber(value)](#module_@arcblock/forge-util.hexToNumber) ⇒ <code>Number</code>
    * [.numberToHex(value)](#module_@arcblock/forge-util.numberToHex) ⇒ <code>String</code>
    * [.bytesToHex(bytes)](#module_@arcblock/forge-util.bytesToHex) ⇒ <code>String</code>
    * [.hexToBytes(hex)](#module_@arcblock/forge-util.hexToBytes) ⇒ <code>Array</code>
    * [.toHex(value, returnType)](#module_@arcblock/forge-util.toHex) ⇒ <code>String</code>
    * [.fromUintToToken(input, \[decimal\], optionsInput)](#module_@arcblock/forge-util.fromUintToToken) ⇒ <code>string</code>
    * [.fromTokenToUnit(input, \[decimal\])](#module_@arcblock/forge-util.fromTokenToUnit) ⇒
    * [.isUint8Array(value)](#module_@arcblock/forge-util.isUint8Array) ⇒ <code>Boolean</code>
    * [.toAddress(did)](#module_@arcblock/forge-util.toAddress) ⇒ <code>string</code>
    * [.toDid(did)](#module_@arcblock/forge-util.toDid) ⇒ <code>string</code>
  * _inner_
    * [~UUID()](#module_@arcblock/forge-util..UUID) ⇒ <code>string</code>
    * [~isUUID(str)](#module_@arcblock/forge-util..isUUID) ⇒ <code>boolean</code>
    * [~toUint8Array(v, \[autoHex\], \[enforceStrictHex\])](#module_@arcblock/forge-util..toUint8Array) ⇒ <code>Uint8Array</code>
    * [~toBuffer(v, \[autoHex\], \[enforceStrictHex\])](#module_@arcblock/forge-util..toBuffer) ⇒ <code>buffer</code>
    * [~toBase58(v, \[autoHex\], \[enforceStrictHex\])](#module_@arcblock/forge-util..toBase58) ⇒ <code>string</code>
    * [~fromBase58(v)](#module_@arcblock/forge-util..fromBase58) ⇒ <code>buffer</code>

<a name="module_@arcblock/forge-util.isHexPrefixed"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).isHexPrefixed(str) ⇒ <code>Boolean</code>

Returns a `Boolean` on whether or not the a `String` starts with '0x'

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>Boolean</code> - a boolean if it is or is not hex prefixed  
**Throws**:

* if the str input is not a string

**Access**: public  

| Param | Type                | Description            |
| ----- | ------------------- | ---------------------- |
| str   | <code>String</code> | the string input value |

<a name="module_@arcblock/forge-util.stripHexPrefix"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).stripHexPrefix(str) ⇒ <code>String</code> \| <code>Optional</code>

Removes '0x' from a given `String` if present

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>String</code> \| <code>Optional</code> - a string by pass if necessary  
**Access**: public  

| Param | Type                | Description      |
| ----- | ------------------- | ---------------- |
| str   | <code>String</code> | the string value |

<a name="module_@arcblock/forge-util.isBN"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).isBN(object) ⇒ <code>Boolean</code>

Returns true if object is BN, otherwise false

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param  | Type                |
| ------ | ------------------- |
| object | <code>Object</code> |

<a name="module_@arcblock/forge-util.isBigNumber"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).isBigNumber(object) ⇒ <code>Boolean</code>

Returns true if object is BigNumber, otherwise false

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param  | Type                |
| ------ | ------------------- |
| object | <code>Object</code> |

<a name="module_@arcblock/forge-util.isHexStrict"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).isHexStrict(hex) ⇒ <code>Boolean</code>

Check if string is HEX, requires a 0x in front

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| hex   | <code>String</code> | to be checked |

<a name="module_@arcblock/forge-util.isHex"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).isHex(hex) ⇒ <code>Boolean</code>

Check if string is HEX

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| hex   | <code>String</code> | to be checked |

<a name="module_@arcblock/forge-util.toBN"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).toBN(number,) ⇒ <code>BN</code>

Takes an input and transforms it into an BN

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>BN</code> - BN  
**Access**: public  

| Param   | Type                                                          | Description              |
| ------- | ------------------------------------------------------------- | ------------------------ |
| number, | <code>Number</code> \| <code>String</code> \| <code>BN</code> | string, HEX string or BN |

<a name="module_@arcblock/forge-util.utf8ToHex"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).utf8ToHex(str) ⇒ <code>String</code>

Should be called to get hex representation (prefixed by 0x) of utf8 string

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>String</code> - hex representation of input string  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| str   | <code>String</code> |

<a name="module_@arcblock/forge-util.hexToUtf8"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).hexToUtf8(hex) ⇒ <code>String</code>

Should be called to get utf8 from it's hex representation

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>String</code> - ascii string representation of hex value  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| hex   | <code>String</code> |

<a name="module_@arcblock/forge-util.hexToNumber"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).hexToNumber(value) ⇒ <code>Number</code>

Converts value to it's number representation

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param | Type                                                          |
| ----- | ------------------------------------------------------------- |
| value | <code>String</code> \| <code>Number</code> \| <code>BN</code> |

<a name="module_@arcblock/forge-util.numberToHex"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).numberToHex(value) ⇒ <code>String</code>

Converts value to it's hex representation

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param | Type                                                          |
| ----- | ------------------------------------------------------------- |
| value | <code>String</code> \| <code>Number</code> \| <code>BN</code> |

<a name="module_@arcblock/forge-util.bytesToHex"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).bytesToHex(bytes) ⇒ <code>String</code>

Convert a byte array to a hex string

Note: Implementation from crypto-js

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>String</code> - the hex string  
**Access**: public  

| Param | Type               |
| ----- | ------------------ |
| bytes | <code>Array</code> |

<a name="module_@arcblock/forge-util.hexToBytes"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).hexToBytes(hex) ⇒ <code>Array</code>

Convert a hex string to a byte array

Note: Implementation from crypto-js

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>Array</code> - the byte array  
**Access**: public  

| Param | Type                |
| ----- | ------------------- |
| hex   | <code>String</code> |

<a name="module_@arcblock/forge-util.toHex"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).toHex(value, returnType) ⇒ <code>String</code>

Auto converts any given value into it's hex representation.
And even stringifys objects before.

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param      | Type                                                                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| value      | <code>String</code> \| <code>Number</code> \| <code>BN</code> \| <code>Object</code> \| <code>TypedArray</code> \| <code>Buffer</code> |
| returnType | <code>Boolean</code>                                                                                                                   |

<a name="module_@arcblock/forge-util.fromUintToToken"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).fromUintToToken(input, [decimal], optionsInput) ⇒ <code>string</code>

Format a big number to human readable number, such as 1_0000_0000_0000_000 => 1 Token

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param        | Type                                       | Default         |
| ------------ | ------------------------------------------ | --------------- |
| input        | <code>string</code> \| <code>number</code> |                 |
| [decimal]    | <code>number</code>                        | <code>18</code> |
| optionsInput | <code>\*</code>                            |                 |

<a name="module_@arcblock/forge-util.fromTokenToUnit"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).fromTokenToUnit(input, [decimal]) ⇒

Convert human readable token number to big number instance

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: BN  
**Access**: public  

| Param     | Type                | Default         |
| --------- | ------------------- | --------------- |
| input     | <code>string</code> |                 |
| [decimal] | <code>number</code> | <code>18</code> |

<a name="module_@arcblock/forge-util.isUint8Array"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).isUint8Array(value) ⇒ <code>Boolean</code>

Validates if a value is an Uint8Array.

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>Boolean</code> - boolean indicating if a value is an Uint8Array  
**Access**: public  

| Param | Type            | Description       |
| ----- | --------------- | ----------------- |
| value | <code>\*</code> | value to validate |

<a name="module_@arcblock/forge-util.toAddress"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).toAddress(did) ⇒ <code>string</code>

Convert did to address: remove `did:abt:` prefix if exists

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| did   | <code>string</code> | address string |

<a name="module_@arcblock/forge-util.toDid"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util).toDid(did) ⇒ <code>string</code>

Convert address to did: prepend `did:abt:` prefix

**Kind**: static method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Access**: public  

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| did   | <code>string</code> | address string |

<a name="module_@arcblock/forge-util..UUID"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)~UUID() ⇒ <code>string</code>

Generate a random UUID

**Kind**: inner method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Returns**: <code>string</code> - generated uuid  
<a name="module_@arcblock/forge-util..isUUID"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)~isUUID(str) ⇒ <code>boolean</code>

Check if a string is valid UUID

**Kind**: inner method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  

| Param | Type                |
| ----- | ------------------- |
| str   | <code>string</code> |

<a name="module_@arcblock/forge-util..toUint8Array"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)~toUint8Array(v, [autoHex], [enforceStrictHex]) ⇒ <code>Uint8Array</code>

Convert input to Uint8Array on best effort

**Kind**: inner method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Throws**:

* <code>Error</code> 

| Param              | Type                                                                                      | Default            |
| ------------------ | ----------------------------------------------------------------------------------------- | ------------------ |
| v                  | <code>buffer</code> \| <code>base58</code> \| <code>hex</code> \| <code>Uint8Array</code> |                    |
| [autoHex]          | <code>boolean</code>                                                                      | <code>false</code> |
| [enforceStrictHex] | <code>boolean</code>                                                                      | <code>false</code> |

<a name="module_@arcblock/forge-util..toBuffer"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)~toBuffer(v, [autoHex], [enforceStrictHex]) ⇒ <code>buffer</code>

Convert input to Buffer on best effort

**Kind**: inner method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Throws**:

* <code>Error</code> 

| Param              | Type                                                                                      | Default            |
| ------------------ | ----------------------------------------------------------------------------------------- | ------------------ |
| v                  | <code>buffer</code> \| <code>base58</code> \| <code>hex</code> \| <code>Uint8Array</code> |                    |
| [autoHex]          | <code>boolean</code>                                                                      | <code>false</code> |
| [enforceStrictHex] | <code>boolean</code>                                                                      | <code>false</code> |

<a name="module_@arcblock/forge-util..toBase58"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)~toBase58(v, [autoHex], [enforceStrictHex]) ⇒ <code>string</code>

Convert input to base58btc format on best effort

**Kind**: inner method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  
**Throws**:

* <code>Error</code> 

| Param              | Type                                                                                      | Default            |
| ------------------ | ----------------------------------------------------------------------------------------- | ------------------ |
| v                  | <code>buffer</code> \| <code>base58</code> \| <code>hex</code> \| <code>Uint8Array</code> |                    |
| [autoHex]          | <code>boolean</code>                                                                      | <code>false</code> |
| [enforceStrictHex] | <code>boolean</code>                                                                      | <code>false</code> |

<a name="module_@arcblock/forge-util..fromBase58"></a>

### [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)~fromBase58(v) ⇒ <code>buffer</code>

Decode base58 string

**Kind**: inner method of [<code>@arcblock/forge-util</code>](#module_@arcblock/forge-util)  

| Param | Type                |
| ----- | ------------------- |
| v     | <code>string</code> |
