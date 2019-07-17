<a name="module_@arcblock/did"></a>


## [**@arcblock/did**](https://github.com/arcblock/did)

Utility functions to create/inspect did, and do did-based auth, an implementation of abt-did-protocol

**Requires**: <code>module:[**@arcblock/mcrypto**](https://github.com/arcblock/mcrypto)</code>, <code>module:[**@arcblock/forge-util**](https://github.com/arcblock/forge-util)</code>  

* [@arcblock/did](#module_@arcblock/did)
  * [.fromSecretKey(sk, type)](#module_@arcblock/did.fromSecretKey) ⇒ <code>string</code>
  * [.fromPublicKey(pk, type)](#module_@arcblock/did.fromPublicKey) ⇒ <code>string</code>
  * [.fromHash(hash, role)](#module_@arcblock/did.fromHash) ⇒ <code>string</code>
  * [.isFromPublicKey(did, pk)](#module_@arcblock/did.isFromPublicKey) ⇒ <code>boolean</code>
  * [.fromTypeInfo(type)](#module_@arcblock/did.fromTypeInfo) ⇒
  * [.toTypeInfo(did, \[returnString\])](#module_@arcblock/did.toTypeInfo) ⇒ <code>object</code>
  * [.isValid(did)](#module_@arcblock/did.isValid) ⇒ <code>boolean</code>

<a name="module_@arcblock/did.fromSecretKey"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).fromSecretKey(sk, type) ⇒ <code>string</code>

Gen DID from private key and type config

Spec: <https://github.com/ArcBlock/ABT-DID-Protocol#create-did>

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Returns**: <code>string</code> - DID string  
**Access**: public  

| Param | Type                | Description                                                                                                                         |
| ----- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| sk    | <code>string</code> | hex encoded secret key string                                                                                                       |
| type  | <code>object</code> | wallet type, {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType} |

<a name="module_@arcblock/did.fromPublicKey"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).fromPublicKey(pk, type) ⇒ <code>string</code>

Gen DID from public key and type config

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Returns**: <code>string</code> - DID string  
**Access**: public  

| Param | Type                | Description                                                                                                                         |
| ----- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| pk    | <code>string</code> | hex encoded public key                                                                                                              |
| type  | <code>object</code> | wallet type, {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType} |

<a name="module_@arcblock/did.fromHash"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).fromHash(hash, role) ⇒ <code>string</code>

Gen DID from an hex encoded hash and role type

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Returns**: <code>string</code> - DID string  
**Access**: public  

| Param | Type                | Description                                                                                                        |
| ----- | ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| hash  | <code>string</code> | hex encoded hash                                                                                                   |
| role  | <code>enum</code>   | role type, {[**@see**](https://github.com/see) [**@arcblock/mcrypto**](https://github.com/arcblock/mcrypto)#types} |

<a name="module_@arcblock/did.isFromPublicKey"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).isFromPublicKey(did, pk) ⇒ <code>boolean</code>

Check if an DID is generated from a publicKey

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Access**: public  

| Param | Type                | Description                                 |
| ----- | ------------------- | ------------------------------------------- |
| did   | <code>string</code> | string of the did, usually base58btc format |
| pk    | <code>string</code> | hex encoded publicKey string                |

<a name="module_@arcblock/did.fromTypeInfo"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).fromTypeInfo(type) ⇒

Convert type info object to hex string

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Returns**: string  
**Access**: public  

| Param | Type                | Description                                                                                                                         |
| ----- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| type  | <code>object</code> | wallet type, {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType} |

<a name="module_@arcblock/did.toTypeInfo"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).toTypeInfo(did, [returnString]) ⇒ <code>object</code>

Get type info from did (base58 format)

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Returns**: <code>object</code> - wallet type {[**@see**](https://github.com/see) [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)#WalletType}  
**Access**: public  

| Param          | Type                 | Default           | Description    |
| -------------- | -------------------- | ----------------- | -------------- |
| did            | <code>string</code>  |                   | address string |
| [returnString] | <code>boolean</code> | <code>true</code> |                |

<a name="module_@arcblock/did.isValid"></a>

### [**@arcblock/did**](https://github.com/arcblock/did).isValid(did) ⇒ <code>boolean</code>

Check if a DID string is valid

**Kind**: static method of [<code>@arcblock/did</code>](#module_@arcblock/did)  
**Access**: public  

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| did   | <code>string</code> | address string |
