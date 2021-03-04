![forge-wallet](https://www.arcblock.io/.netlify/functions/badge/?text=forge-wallet)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Utility function to create and use a forge compatible wallet, the wallet is also DID compatible.


## Usage

```shell
yarn add @arcblock/forge-wallet
# OR
npm i @arcblock/forge-wallet -S
```

```javascript
const assert = require('assert');
const { fromSecretKey, WalletType, fromJSON } = require('@arcblock/forge-wallet');
const { types } = require('@arcblock/mcrypto');

const sk =
  '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
const appId = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
const sig =
  '0x08a102851c38c072e42756c1cc70938b5499c8e9358dfe5f383823f56cdb282ffda60fcd581a02c6c673069e5afc0bf09abbe3639b61b84d64fd58ef9f083003';

const type = WalletType({
  role: types.RoleType.ROLE_APPLICATION,
  pk: types.KeyType.ED25519,
  hash: types.HashType.SHA3,
  address: types.EncodingType.BASE58,
});

const wallet = fromSecretKey(sk, type);
const message = 'data to sign';
const signature = wallet.sign(message);
assert.equal(signature, sig, 'signature should match');
assert.ok(wallet.verify(message, signature), 'signature should be verified');

const wallet2 = fromJSON(wallet.toJSON());
// Do something with wallet 2
```


## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)
