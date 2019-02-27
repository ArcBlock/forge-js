# `@arcblock/mcrypto`

> Forge [mcrypto](https://github.com/ArcBlock/mcrypto) implementation for javascript.

## Usage

```shell
yarn add @arcblock/mcrypto
```

```javascript
const { signer } = require('@arcblock/mcrypto');

const keyPair = signer.ed25519.genKeyPair();
const message = 'some message to sign';
const signature = signer.ed25519.sign(message, keyPair.secretKey);
const result = signer.ed25519.verify(message, signature, keyPair.publicKey);
assert.ok(result);
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
