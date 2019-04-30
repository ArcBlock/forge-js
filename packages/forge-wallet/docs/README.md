## Modules

<dl>
<dt><a href="#module_@arcblock/forge-wallet">@arcblock/forge-wallet</a></dt>
<dd><p>This module wraps common utility functions to help developers manipulate crypto wallets</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#WalletTypeObject">WalletTypeObject</a> : <code>Object</code></dt>
<dd><p>The structure of a forge wallet type</p>
</dd>
<dt><a href="#WalletObject">WalletObject</a></dt>
<dd></dd>
</dl>

<a name="module_@arcblock/forge-wallet"></a>

## @arcblock/forge-wallet
This module wraps common utility functions to help developers manipulate crypto wallets

**Requires**: <code>module:@arcblock/mcrypto</code>, <code>module:@arcblock/abt-did</code>  
**Example**  
```js
yarn add @arcblock/forge-wallet
```

* [@arcblock/forge-wallet](#module_@arcblock/forge-wallet)
    * [.WalletType(type)](#module_@arcblock/forge-wallet.WalletType) ⇒ <code>object</code>
    * [.Wallet(keyPair, type)](#module_@arcblock/forge-wallet.Wallet) ⇒ [<code>WalletObject</code>](#WalletObject)
    * [.fromSecretKey(sk, type)](#module_@arcblock/forge-wallet.fromSecretKey) ⇒ [<code>WalletObject</code>](#WalletObject)
    * [.fromPublicKey(pk, type)](#module_@arcblock/forge-wallet.fromPublicKey) ⇒ [<code>WalletObject</code>](#WalletObject)
    * [.fromAddress(address)](#module_@arcblock/forge-wallet.fromAddress) ⇒ [<code>WalletObject</code>](#WalletObject)
    * [.fromRandom(type)](#module_@arcblock/forge-wallet.fromRandom) ⇒ [<code>WalletObject</code>](#WalletObject)
    * [.fromJSON(json)](#module_@arcblock/forge-wallet.fromJSON) ⇒ [<code>WalletObject</code>](#WalletObject)

<a name="module_@arcblock/forge-wallet.WalletType"></a>

### @arcblock/forge-wallet.WalletType(type) ⇒ <code>object</code>
Create an wallet type object that be used as param to create a new wallet

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Access**: public  

| Param | Type |
| --- | --- |
| type | [<code>WalletTypeObject</code>](#WalletTypeObject) | 

**Example**  
```js
const assert = require('assert');
const { WalletType } = require('@arcblock/forge-wallet');
const { types } = require('@arcblock/mcrypto');

const type = WalletType({
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});
```
<a name="module_@arcblock/forge-wallet.Wallet"></a>

### @arcblock/forge-wallet.Wallet(keyPair, type) ⇒ [<code>WalletObject</code>](#WalletObject)
Generate an wallet instance that can be used to sign a message or verify a signature

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Returns**: [<code>WalletObject</code>](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| keyPair | <code>object</code> | the key pair |
| keyPair.sk | <code>string</code> | the secretKey |
| keyPair.pk | <code>string</code> | the wallet publicKey |
| type | [<code>WalletTypeObject</code>](#WalletTypeObject) | wallet type |

<a name="module_@arcblock/forge-wallet.fromSecretKey"></a>

### @arcblock/forge-wallet.fromSecretKey(sk, type) ⇒ [<code>WalletObject</code>](#WalletObject)
Generate a wallet from secretKey

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Returns**: [<code>WalletObject</code>](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sk | <code>string</code> | the secret key, `hex encoded string` |
| type | [<code>WalletTypeObject</code>](#WalletTypeObject) | wallet type |

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
<a name="module_@arcblock/forge-wallet.fromPublicKey"></a>

### @arcblock/forge-wallet.fromPublicKey(pk, type) ⇒ [<code>WalletObject</code>](#WalletObject)
Generate a wallet from publicKey

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Returns**: [<code>WalletObject</code>](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| pk | <code>string</code> | the public key, `hex encoded string` |
| type | [<code>WalletTypeObject</code>](#WalletTypeObject) | wallet type |

<a name="module_@arcblock/forge-wallet.fromAddress"></a>

### @arcblock/forge-wallet.fromAddress(address) ⇒ [<code>WalletObject</code>](#WalletObject)
Generate a wallet from address (did)

Since we do not know the publicKey and secretKey, this kind of wallet cannot be used for signing and verifying

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Returns**: [<code>WalletObject</code>](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | the wallet address |

**Example**  
```js
const assert = require('assert');
const { fromAddress } = require('@arcblock/forge-wallet');

const address = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const wallet = fromAddress(address);
console.log(wallet.toJSON());
```
<a name="module_@arcblock/forge-wallet.fromRandom"></a>

### @arcblock/forge-wallet.fromRandom(type) ⇒ [<code>WalletObject</code>](#WalletObject)
Generate a wallet by generating a random secretKey

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Returns**: [<code>WalletObject</code>](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>WalletTypeObject</code>](#WalletTypeObject) | wallet type |

**Example**  
```js
const { fromRandom } = require('@arcblock/forge-wallet');
const wallet = fromRandom(type);
// Do something with wallet
```
<a name="module_@arcblock/forge-wallet.fromJSON"></a>

### @arcblock/forge-wallet.fromJSON(json) ⇒ [<code>WalletObject</code>](#WalletObject)
Generating a wallet from a serialized json presentation of another wallet

**Kind**: static method of [<code>@arcblock/forge-wallet</code>](#module_@arcblock/forge-wallet)  
**Returns**: [<code>WalletObject</code>](#WalletObject) - wallet object that can be used to sign/verify/getAddress  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>object</code> | json presentation of a wallet |

**Example**  
```js
const { fromJSON, fromRandom } = require('@arcblock/forge-wallet');
const wallet = fromRandom(type);
const wallet2 = fromJSON(wallet.toJSON());
// wallet2 is identical to wallet
```
<a name="WalletTypeObject"></a>

## WalletTypeObject : <code>Object</code>
The structure of a forge wallet type

**Kind**: global typedef  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| role | <code>number</code> | Enum field to identify wallet role type |
| pk | <code>number</code> | Crypto algorithm to derive publicKey from the secretKey |
| hash | <code>number</code> | Hash algorithm used to hash data before sign them |

<a name="WalletObject"></a>

## WalletObject
**Kind**: global typedef  
**Access**: public  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | [<code>WalletTypeObject</code>](#WalletTypeObject) | Indicates the wallet type |
| secretKey | <code>secretKey</code> | Wallet secretKey |
| publicKey | <code>publicKey</code> | Wallet publicKey |
| sign | <code>function</code> | Sign `data`, data is hashed using the `HashType` defined in type before signing |
| verify | <code>function</code> | Verify `signature`, data is hashed using the `HashType` defined in type before verifying |
| toAddress | <code>function</code> | Get wallet address without `did:abt:` prefix |
| toJSON | <code>function</code> | Serialize wallet to json object, checkout [fromJSON](fromJSON) for deserialisation |

