<a name="module_@arcblock/did"></a>


## [**@arcblock/did**](https://github.com/arcblock/did)

Utility functions to create/inspect did, and do did-based auth, an implementation of abt-did-protocol

**Requires**: [@arcblock/mcrypto](./mcrypto/), [@arcblock/forge-util](./forge-util/)  

* [fromSecretKey(sk, type)](#fromSecretKey) ⇒ `string`
* [fromPublicKey(pk, type)](#fromPublicKey) ⇒ `string`
* [fromHash(hash, role)](#fromHash) ⇒ `string`
* [isFromPublicKey(did, pk)](#isFromPublicKey) ⇒ `boolean`
* [fromTypeInfo(type)](#fromTypeInfo) ⇒
* [toTypeInfo(did, \[returnString\])](#toTypeInfo) ⇒ `object`
* [isValid(did)](#isValid) ⇒ `boolean`

<a name="fromSecretKey"></a>

### fromSecretKey(sk, type) ⇒ `string`

Gen DID from private key and type config

Spec: <https://github.com/ArcBlock/ABT-DID-Protocol#create-did>

**Kind**: static method  
**Returns**: `string` - DID string  
**Access**: public  

| Param | Type     | Description                                                                                                                         |
| ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| sk    | `string` | hex encoded secret key string                                                                                                       |
| type  | `object` | wallet type, {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType} |

<a name="fromPublicKey"></a>

### fromPublicKey(pk, type) ⇒ `string`

Gen DID from public key and type config

**Kind**: static method  
**Returns**: `string` - DID string  
**Access**: public  

| Param | Type     | Description                                                                                                                         |
| ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| pk    | `string` | hex encoded public key                                                                                                              |
| type  | `object` | wallet type, {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType} |

<a name="fromHash"></a>

### fromHash(hash, role) ⇒ `string`

Gen DID from an hex encoded hash and role type

**Kind**: static method  
**Returns**: `string` - DID string  
**Access**: public  

| Param | Type     | Description                                                                                                        |
| ----- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| hash  | `string` | hex encoded hash                                                                                                   |
| role  | `enum`   | role type, {[**@see**](https://github.com/see) [**@arcblock/mcrypto**](https://github.com/arcblock/mcrypto)#types} |

<a name="isFromPublicKey"></a>

### isFromPublicKey(did, pk) ⇒ `boolean`

Check if an DID is generated from a publicKey

**Kind**: static method  
**Access**: public  

| Param | Type     | Description                                 |
| ----- | -------- | ------------------------------------------- |
| did   | `string` | string of the did, usually base58btc format |
| pk    | `string` | hex encoded publicKey string                |

<a name="fromTypeInfo"></a>

### fromTypeInfo(type) ⇒

Convert type info object to hex string

**Kind**: static method  
**Returns**: string  
**Access**: public  

| Param | Type     | Description                                                                                                                         |
| ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| type  | `object` | wallet type, {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType} |

<a name="toTypeInfo"></a>

### toTypeInfo(did, [returnString]) ⇒ `object`

Get type info from did (base58 format)

**Kind**: static method  
**Returns**: `object` - wallet type {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType}  
**Access**: public  

| Param          | Type      | Default | Description    |
| -------------- | --------- | ------- | -------------- |
| did            | `string`  |         | address string |
| [returnString] | `boolean` | `true`  |                |

<a name="isValid"></a>

### isValid(did) ⇒ `boolean`

Check if a DID string is valid

**Kind**: static method  
**Access**: public  

| Param | Type     | Description    |
| ----- | -------- | -------------- |
| did   | `string` | address string |
