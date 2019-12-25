
## [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)

Contains utility functions to help developers manipulate encoding/decoding/formatting/bignumber

**Example**  

```js
yarn add @arcblock/forge-util

const Util = require('@arcblock/forge-util');
console.log(Util.fromTokenToUnit(100)); // 100_0000_0000_0000_0000
console.log(Util.fromUnitToToken('1000000000000000000')); // 100
console.log(Util.isStrictHex('0x123abc')); // true
```

* [isHexPrefixed(str)](#isHexPrefixed) ⇒ `Boolean`
* [stripHexPrefix(str)](#stripHexPrefix) ⇒ `String` \| `Optional`
* [isBN(object)](#isBN) ⇒ `Boolean`
* [isBigNumber(object)](#isBigNumber) ⇒ `Boolean`
* [isHexStrict(hex)](#isHexStrict) ⇒ `Boolean`
* [isHex(hex)](#isHex) ⇒ `Boolean`
* [toBN(number,)](#toBN) ⇒ `BN`
* [utf8ToHex(str)](#utf8ToHex) ⇒ `String`
* [hexToUtf8(hex)](#hexToUtf8) ⇒ `String`
* [hexToNumber(value)](#hexToNumber) ⇒ `Number`
* [numberToHex(value)](#numberToHex) ⇒ `String`
* [bytesToHex(bytes)](#bytesToHex) ⇒ `String`
* [hexToBytes(hex)](#hexToBytes) ⇒ `Array`
* [toHex(value, returnType)](#toHex) ⇒ `String`
* [fromUnitToToken(input, \[decimal\], optionsInput)](#fromUnitToToken) ⇒ `string`
* [fromTokenToUnit(input, \[decimal\])](#fromTokenToUnit) ⇒
* [isUint8Array(value)](#isUint8Array) ⇒ `Boolean`
* [UUID()](#UUID) ⇒ `string`
* [isUUID(str)](#isUUID) ⇒ `boolean`
* [toUint8Array(v)](#toUint8Array) ⇒ `Uint8Array`
* [toBuffer(v)](#toBuffer) ⇒ `buffer`
* [toBase58(v)](#toBase58) ⇒ `string`
* [fromBase58(v)](#fromBase58) ⇒ `buffer`
* [toBase64(v, \[escape\])](#toBase64) ⇒ `string`
* [fromBase64(v)](#fromBase64) ⇒ `buffer`
* [toAddress(did)](#toAddress) ⇒ `string`
* [toDid(did)](#toDid) ⇒ `string`

### isHexPrefixed(str) ⇒ `Boolean`

Returns a `boolean` on whether or not the `string` starts with '0x'

**Kind**: static method  
**Returns**: `Boolean` - a boolean if it is or is not hex prefixed  
**Throws**:

* if the str input is not a string

**Access**: public  

| Param | Type     | Description            |
| ----- | -------- | ---------------------- |
| str   | `String` | the string input value |

### stripHexPrefix(str) ⇒ `String` \| `Optional`

Removes '0x' from a given `String` if present

**Kind**: static method  
**Returns**: `String` \| `Optional` - a string by pass if necessary  
**Access**: public  

| Param | Type     | Description      |
| ----- | -------- | ---------------- |
| str   | `String` | the string value |

### isBN(object) ⇒ `Boolean`

Returns true if object is BN, otherwise false

**Kind**: static method  
**Access**: public  

| Param  | Type     |
| ------ | -------- |
| object | `Object` |

### isBigNumber(object) ⇒ `Boolean`

Returns true if object is BigNumber, otherwise false

**Kind**: static method  
**Access**: public  

| Param  | Type     |
| ------ | -------- |
| object | `Object` |

### isHexStrict(hex) ⇒ `Boolean`

Check if string is HEX, requires a 0x in front

**Kind**: static method  
**Access**: public  

| Param | Type     | Description   |
| ----- | -------- | ------------- |
| hex   | `String` | to be checked |

### isHex(hex) ⇒ `Boolean`

Check if string is HEX

**Kind**: static method  
**Access**: public  

| Param | Type     | Description   |
| ----- | -------- | ------------- |
| hex   | `String` | to be checked |

### toBN(number,) ⇒ `BN`

Takes an input and transforms it into an BN

**Kind**: static method  
**Returns**: `BN` - BN  
**Access**: public  

| Param   | Type                         | Description              |
| ------- | ---------------------------- | ------------------------ |
| number, | `Number` \| `String` \| `BN` | string, HEX string or BN |

### utf8ToHex(str) ⇒ `String`

Should be called to get hex representation (prefixed by 0x) of utf8 string

**Kind**: static method  
**Returns**: `String` - hex representation of input string  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| str   | `String` |

### hexToUtf8(hex) ⇒ `String`

Should be called to get utf8 from it's hex representation

**Kind**: static method  
**Returns**: `String` - ascii string representation of hex value  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| hex   | `String` |

### hexToNumber(value) ⇒ `Number`

Converts value to it's number representation

**Kind**: static method  
**Access**: public  

| Param | Type                         |
| ----- | ---------------------------- |
| value | `String` \| `Number` \| `BN` |

### numberToHex(value) ⇒ `String`

Converts value to hex representation

**Kind**: static method  
**Access**: public  

| Param | Type                         |
| ----- | ---------------------------- |
| value | `String` \| `Number` \| `BN` |

### bytesToHex(bytes) ⇒ `String`

Convert a byte array to a hex string

Note: Implementation from crypto-js

**Kind**: static method  
**Returns**: `String` - the hex string  
**Access**: public  

| Param | Type    |
| ----- | ------- |
| bytes | `Array` |

### hexToBytes(hex) ⇒ `Array`

Convert a hex string to a byte array

Note: Implementation from crypto-js

**Kind**: static method  
**Returns**: `Array` - the byte array  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| hex   | `String` |

### toHex(value, returnType) ⇒ `String`

Auto converts any given value into it's hex representation.
And even stringifys objects before.

**Kind**: static method  
**Access**: public  

| Param      | Type                                                                 |
| ---------- | -------------------------------------------------------------------- |
| value      | `String` \| `Number` \| `BN` \| `Object` \| `TypedArray` \| `Buffer` |
| returnType | `Boolean`                                                            |

### fromUnitToToken(input, [decimal], optionsInput) ⇒ `string`

Format a big number to human readable number, such as 1_0000_0000_0000_000 => 1 Token

**Kind**: static method  
**Access**: public  

| Param        | Type                 | Default |
| ------------ | -------------------- | ------- |
| input        | `string` \| `number` |         |
| [decimal]    | `number`             | `18`    |
| optionsInput | `\*`                 |         |

### fromTokenToUnit(input, [decimal]) ⇒

Convert human readable token number to big number instance

**Kind**: static method  
**Returns**: BN  
**Access**: public  

| Param     | Type     | Default |
| --------- | -------- | ------- |
| input     | `string` |         |
| [decimal] | `number` | `18`    |

### isUint8Array(value) ⇒ `Boolean`

Validates if a value is an Uint8Array.

**Kind**: static method  
**Returns**: `Boolean` - boolean indicating if a value is an Uint8Array  
**Access**: public  

| Param | Type | Description       |
| ----- | ---- | ----------------- |
| value | `\*` | value to validate |

### UUID() ⇒ `string`

Generate a random UUID

**Kind**: static method  
**Returns**: `string` - Generated uuid  
**Access**: public  

### isUUID(str) ⇒ `boolean`

Check if a string is valid UUID

**Kind**: static method  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| str   | `string` |

### toUint8Array(v) ⇒ `Uint8Array`

Convert input to Uint8Array on best effort, base64 node supported

**Kind**: static method  
**Throws**:

* `Error` 

**Access**: public  

| Param | Type                                                      |
| ----- | --------------------------------------------------------- |
| v     | `buffer` \| `base58` \| `hex` \| `Uint8Array` \| `string` |

### toBuffer(v) ⇒ `buffer`

Convert input to Buffer on best effort, base64 not supported

**Kind**: static method  
**Throws**:

* `Error` 

**Access**: public  

| Param | Type                                          |
| ----- | --------------------------------------------- |
| v     | `buffer` \| `base58` \| `hex` \| `Uint8Array` |

### toBase58(v) ⇒ `string`

Convert input to base58btc format on best effort

**Kind**: static method  
**Throws**:

* `Error` 

**Access**: public  

| Param | Type                                          |
| ----- | --------------------------------------------- |
| v     | `buffer` \| `base58` \| `hex` \| `Uint8Array` |

### fromBase58(v) ⇒ `buffer`

Decode base58 string

**Kind**: static method  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| v     | `string` |

### toBase64(v, [escape]) ⇒ `string`

Convert input to base64 format

**Kind**: static method  
**Throws**:

* `Error` 

**Access**: public  

| Param    | Type                                          | Default |
| -------- | --------------------------------------------- | ------- |
| v        | `buffer` \| `base58` \| `hex` \| `Uint8Array` |         |
| [escape] | `escape`                                      | `true`  |

### fromBase64(v) ⇒ `buffer`

Decode base64(base64_url) string to buffer

**Kind**: static method  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| v     | `string` |

### toAddress(did) ⇒ `string`

Convert did to address: remove `did:abt:` prefix if exists

**Kind**: static method  
**Access**: public  

| Param | Type     | Description    |
| ----- | -------- | -------------- |
| did   | `string` | address string |

### toDid(did) ⇒ `string`

Convert address to did: prepend `did:abt:` prefix

**Kind**: static method  
**Access**: public  

| Param | Type     | Description    |
| ----- | -------- | -------------- |
| did   | `string` | address string |
