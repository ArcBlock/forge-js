![DID](https://www.arcblock.io/.netlify/functions/badge/?text=DID)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Javascript library to manipulate ArcBlock DID: <https://github.com/ArcBlock/abt-did-spec>

## Usage

```terminal
yarn add @arcblock/mcrypto @arcblock/did
```

```javascript
const Mcrypto = require('@arcblock/mcrypto');
const { fromSecretKey, fromPublicKey, fromAppDID } = require('@arcblock/did');

const { types } = Mcrypto;
const keyPair = Mcrypto.Signer.Ed25519.genKeyPair();

// Gen DID from secretKey
const address = fromSecretKey(keyPir.secretKey, {
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});
console.log(`abt:did:${address}`);

// Gen DID from publicKey
const address = fromPublicKey(keyPir.publicKey, {
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});
console.log(`abt:did:${address}`);

// Gen DID from appId
const seed =
  '0xa0c42a9c3ac6abf2ba6a9946ae83af18f51bf1c9fa7dacc4c92513cc4dd015834341c775dcd4c0fac73547c5662d81a9e9361a0aac604a73a321bd9103bce8af';
const appDID = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const userDID = fromAppDID(appDID, keyPir.publicKey, {
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
});
console.log(`abt:did:${userDID}`);
```


## Documentation

For full documentation, checkout [README.md](./docs/README.md).
