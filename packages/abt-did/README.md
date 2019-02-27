# `@arcblock/abt-did`

> Javascript library to manipulate ArcBlock DID

## Usage

```terminal
yarn add @arcblock/mcrypto @arcblock/abt-did
```

```javascript
const Mcrypto = require('@arcblock/mcrypto');
const { types, fromSecretKey } = require('@arcblock/abt-did');

const keyPair = Mcrypto.signer.ed25519.genKeyPair();
const address = fromSecretKey(keyPir.secretKey, {
  roleType: enums.RoleType.ROLE_APPLICATION,
  keyType: enums.KeyType.ED25519,
  hashType: enums.HashType.SHA3,
});

console.log(`abt:did:${address}`);
```
