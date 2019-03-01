# `@arcblock/mcrypto`

> Forge [mcrypto](https://github.com/ArcBlock/mcrypto) implementation for javascript, just a wrapper around existing javascript crypto libraries.

## Usage

```shell
yarn add @arcblock/mcrypto
```

### Sign/Verify

```javascript
const { Signer } = require('@arcblock/mcrypto');

const keyPair = Signer.Ed25519.genKeyPair();
const message = 'some message to sign';
const signature = Signer.Ed25519.sign(message, keyPair.secretKey);
const result = Signer.Ed25519.verify(message, signature, keyPair.publicKey);
assert.ok(result);
```

### Hashing

```javascript
const { Hasher } = require('@arcblock/mcrypto');

const message = 'message to hash';
const hash = Hasher.SHA2.hash256(message);
```

## Implementation

### Hasher

- keccakf1600: crypto-js
- sha2: crypto-js
- sha3: jssha3

### Signer

- ed25519: tweetnacl
- secp256k1: elliptic

### Crypter

- aes-cbc-256: crypto-js
