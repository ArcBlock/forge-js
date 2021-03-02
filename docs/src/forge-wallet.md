---
title: '@arcblock/forge-wallet'
description: 'Utility function to create and use an forge compatible crypto wallet'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---


## Modules

<dl>
<dt><a href="#module_@arcblock/forge-wallet">@arcblock/forge-wallet</a></dt>
<dd><p>This module wraps common utility functions to help developers manipulate crypto wallets</p>
</dd>
</dl>


## Typedefs

<dl>
<dt><a href="#WalletObject">WalletObject</a></dt>
<dd></dd>
</dl>


## [**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)

This module wraps common utility functions to help developers manipulate crypto wallets

**Requires**: `module:@arcblock/mcrypto`, `module:@arcblock/did`  
**Example**  

```js
yarn add @arcblock/forge-wallet
```

* [Wallet(keyPair, \[type\])](#Wallet) ⇒ [`WalletObject`](#WalletObject)
* [fromSecretKey(sk, \[type\])](#fromSecretKey) ⇒ [`WalletObject`](#WalletObject)
* [fromPublicKey(pk, \[type\])](#fromPublicKey) ⇒ [`WalletObject`](#WalletObject)
* [fromAddress(address)](#fromAddress) ⇒ [`WalletObject`](#WalletObject)
* [fromRandom(\[type\])](#fromRandom) ⇒ [`WalletObject`](#WalletObject)
* [fromJSON(json)](#fromJSON) ⇒ [`WalletObject`](#WalletObject)
* [isValid(wallet, canSign)](#isValid)

### Wallet(keyPair, [type]) ⇒ [`WalletObject`](#WalletObject)

Generate an wallet instance that can be used to sign a message or verify a signature

**Kind**: static method  
**Returns**: [`WalletObject`](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param      | Type      | Default               | Description          |
| ---------- | --------- | --------------------- | -------------------- |
| keyPair    | `object`  |                       | the key pair         |
| keyPair.sk | `string`  |                       | the secretKey        |
| keyPair.pk | `string`  |                       | the wallet publicKey |
| [type]     | `DidType` | `&#x27;default&#x27;` | wallet type          |

### fromSecretKey(sk, [type]) ⇒ [`WalletObject`](#WalletObject)

Generate a wallet from secretKey

**Kind**: static method  
**Returns**: [`WalletObject`](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param  | Type      | Default               | Description                          |
| ------ | --------- | --------------------- | ------------------------------------ |
| sk     | `string`  |                       | the secret key, `hex encoded string` |
| [type] | `DidType` | `&#x27;default&#x27;` | wallet type                          |

**Example**  

```js
const assert = require('assert');
const { fromSecretKey } = require('@arcblock/forge-wallet');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const sig =
  '0x08a102851c38c072e42756c1cc70938b5499c8e9358dfe5f383823f56cdb282ffda60fcd581a02c6c673069e5afc0bf09abbe3639b61b84d64fd58ef9f083003';

const wallet = fromSecretKey(sk, type);
const message = 'data to sign';
const signature = wallet.sign(message);
assert.equal(signature, sig, "signature should match");
assert.ok(wallet.verify(message, signature), "signature should be verified");
```

### fromPublicKey(pk, [type]) ⇒ [`WalletObject`](#WalletObject)

Generate a wallet from publicKey

**Kind**: static method  
**Returns**: [`WalletObject`](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param  | Type      | Default               | Description                          |
| ------ | --------- | --------------------- | ------------------------------------ |
| pk     | `string`  |                       | the public key, `hex encoded string` |
| [type] | `DidType` | `&#x27;default&#x27;` | wallet type                          |

### fromAddress(address) ⇒ [`WalletObject`](#WalletObject)

Generate a wallet from address (did)

Since we do not know the publicKey and secretKey, this kind of wallet cannot be used for signing and verifying

**Kind**: static method  
**Returns**: [`WalletObject`](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param   | Type     | Description        |
| ------- | -------- | ------------------ |
| address | `string` | the wallet address |

**Example**  

```js
const assert = require('assert');
const { fromAddress } = require('@arcblock/forge-wallet');

const address = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const wallet = fromAddress(address);
console.log(wallet.toJSON());
```

### fromRandom([type]) ⇒ [`WalletObject`](#WalletObject)

Generate a wallet by generating a random secretKey

**Kind**: static method  
**Returns**: [`WalletObject`](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param  | Type      | Default               | Description |
| ------ | --------- | --------------------- | ----------- |
| [type] | `DidType` | `&#x27;default&#x27;` | wallet type |

**Example**  

```js
const { fromRandom } = require('@arcblock/forge-wallet');
const wallet = fromRandom();
// Do something with wallet
```

### fromJSON(json) ⇒ [`WalletObject`](#WalletObject)

Generating a wallet from a serialized json presentation of another wallet

**Kind**: static method  
**Returns**: [`WalletObject`](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| json  | `object` | json presentation of a wallet |

**Example**  

```js
const { fromJSON, fromRandom } = require('@arcblock/forge-wallet');
const wallet = fromRandom();
const wallet2 = fromJSON(wallet.toJSON());
// wallet2 is identical to wallet
```

### isValid(wallet, canSign)

Check if an object is valid wallet object

**Kind**: static method  
**Access**: public  

| Param   | Type      | Default | Description                    |
| ------- | --------- | ------- | ------------------------------ |
| wallet  | `object`  |         |                                |
| canSign | `boolean` | `true`  | should the wallet support sign |


## WalletObject

**Kind**: global typedef  
**Access**: public  
**Properties**

| Name      | Type        | Description                                                                              |
| --------- | ----------- | ---------------------------------------------------------------------------------------- |
| type      | `DidType`   | Indicates the wallet type                                                                |
| secretKey | `secretKey` | Wallet secretKey                                                                         |
| publicKey | `publicKey` | Wallet publicKey                                                                         |
| sign      | `function`  | Sign `data`, data is hashed using the `HashType` defined in type before signing          |
| verify    | `function`  | Verify `signature`, data is hashed using the `HashType` defined in type before verifying |
| toAddress | `function`  | Get wallet address without `did:abt:` prefix                                             |
| toJSON    | `function`  | Serialize wallet to json object, checkout [fromJSON](fromJSON) for deserialisation       |

  