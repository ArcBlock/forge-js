![mcrypto:js](https://www.arcblock.io/.netlify/functions/badge/?text=mcrypto:js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Forge [mcrypto](https://github.com/ArcBlock/mcrypto) implementation for javascript, just a wrapper around existing javascript crypto libraries.


## Usage

```shell
npm i @arcblock/mcrypto -S
# OR
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


## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)


## Implementation

### Hasher

* keccakf1600: js-sha3
* sha2: hash.js
* sha3: js-sha3

### Signer

* [`ed25519`](https://github.com/ArcBlock/forge-js/commit/ed25519): tweetnacl
* secp256k1: elliptic

### Crypter

* aes-cbc-256: crypto-js
