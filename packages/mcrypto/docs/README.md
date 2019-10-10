<a name="module_@arcblock/mcrypto"></a>


## [**@arcblock/mcrypto**](https://github.com/arcblock/mcrypto)

Forge [mcrypto](https://github.com/ArcBlock/mcrypto) implementation for javascript.
Just a wrapper around existing javascript crypto libraries, implementation details can be found:

* Signer
  * [`Ed25519`](https://github.com/ArcBlock/forge-js/commit/Ed25519) [Ed25519Signer](Ed25519Signer)
  * Secp256k1 [Secp256k1Signer](Secp256k1Signer)
* Hasher
  * SHA2 [Sha2Hasher](Sha2Hasher)
  * SHA3 [Sha3Hasher](Sha3Hasher)
  * KECCAK [KecaakHasher](KecaakHasher)

**Example**  

```js
yarn add @arcblock/mcrypto
```

* [Signer](#Signer) : `object`
* [Hasher](#Hasher) : `object`
* [Crypter](#Crypter)
* [types](#types) : `object`
* [getSigner(type)](#getSigner) ⇒ `object`
* [getHasher(type)](#getHasher) ⇒ `object`

<a name="Signer"></a>

### Signer : `object`

Contains all supported signers, eg: `Ed25519` and `Secp256k1`

**Kind**: static property  
**Read only**: true  
**Example**  

```js
const { Signer } = require('@arcblock/mcrypto');
const message = 'some message to sign';

// Use Signer directly
const keyPair = Signer.Ed25519.genKeyPair();
const signature = Signer.Ed25519.sign(message, keyPair.secretKey);
const result = Signer.Ed25519.verify(message, signature, keyPair.publicKey);
assert.ok(result);
```

<a name="Hasher"></a>

### Hasher : `object`

Contains all supported hasher, eg: `SHA2`,`SHA3` and `Keccak`, each of them supports `hash224`, `hash256`, `hash384`, `hash512`

**Kind**: static property  
**Read only**: true  
**Example**  

```js
const { Hasher } = require('@arcblock/mcrypto');

const message = 'message to hash';
const hash = Hasher.SHA2.hash256(message);
```

<a name="Crypter"></a>

### Crypter

Contains all supported crypter, eg: `AES`, each of them supports `encrypt`, `decrypt`

**Kind**: static property  
<a name="types"></a>

### types : `object`

Contains type constants that represent can be used to compose different crypto method, each crypto method consist one of:
FIXME: enum definition of forge-abi and abt-did-elixir are not exactly the same

**Kind**: static property  
**Read only**: true  
**Example**  

```js
const { types } = require('@arcblock/mcrypto');

// types.RoleType.ROLE_ACCOUNT
// types.KeyType.ED25519
// types.HashType.SHA3
// types.EncodingType.BASE58
```

<a name="getSigner"></a>

### getSigner(type) ⇒ `object`

Get signer instance

**Kind**: static method  
**Returns**: `object` - signer instance  

| Param | Type     | Description                                                                                                                                                       |
| ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type  | `number` | algorithm used to derive key pair, possible values are - types.KeyType.[`ED25519`](https://github.com/ArcBlock/forge-js/commit/ED25519) - types.KeyType.SECP256k1 |

**Example**  

```js
const { getSigner, types } = require('@arcblock/mcrypto');
const message = 'some message to sign';

const signer = getSigner(types.KeyType.ED25519);
const keyPair1 = signer.genKeyPair();
const signature1 = signer.sign(message, keyPair1.secretKey);
const result1 = signer.verify(message, signature1, keyPair1.publicKey);
assert.ok(result1);
```

<a name="getHasher"></a>

### getHasher(type) ⇒ `object`

Get hasher instance

**Kind**: static method  
**Returns**: `object` - hasher instance  

| Param | Type     | Description                                                                                                                                                                                            |
| ----- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type  | `number` | algorithm used to hash data, possible values - types.HashType.KECCAK - types.HashType.KECCAK_384 - types.HashType.KECCAK_512 - types.HashType.SHA3 - types.HashType.SHA3_384 - types.HashType.SHA3_512 |

**Example**  

```js
const { getHasher, types } = require('@arcblock/mcrypto');

const hashFn = getHasher(types.HashType.SHA3);
const hash2 = hashFn(message);
```
