# `@arcblock/abt-did`

> Javascript library to manipulate ArcBlock DID: https://github.com/ArcBlock/abt-did-spec

## Usage

```terminal
yarn add @arcblock/mcrypto @arcblock/abt-did
```

```javascript
const Mcrypto = require('@arcblock/mcrypto');
const randomBytes = require('randombytes');
const { types, fromSecretKey, fromPublicKey, fromAppDID } = require('@arcblock/abt-did');

const keyPair = Mcrypto.Signer.Ed25519.genKeyPair();

// Gen DID from secretKey
const address = fromSecretKey(keyPir.secretKey, {
  role: enums.RoleType.ROLE_APPLICATION,
  key: enums.KeyType.ED25519,
  hash: enums.HashType.SHA3,
});
console.log(`abt:did:${address}`);

// Gen DID from publicKey
const address = fromPublicKey(keyPir.publicKey, {
  role: enums.RoleType.ROLE_APPLICATION,
  key: enums.KeyType.ED25519,
  hash: enums.HashType.SHA3,
});
console.log(`abt:did:${address}`);

// Gen DID from appId
const seed =
  '0xa0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af';
const appDID = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const userDID = fromAppDID(appDID, keyPir.publicKey, {
  role: enums.RoleType.ROLE_APPLICATION,
  key: enums.KeyType.ED25519,
  hash: enums.HashType.SHA3,
})
console.log(`abt:did:${userDID}`);
```
