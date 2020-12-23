![DID](https://www.arcblock.io/.netlify/functions/badge/?text=DID-EXT)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Extensions to work with ArcBlock DID


## Usage

```terminal
yarn add @arcblock/did-ext
```

```javascript
const { WalletType } = require('@arcblock/forge-wallet');
const { fromAppDid } = require('@arcblock/did-ext');

const type = WalletType({ role: types.RoleType.ROLE_ACCOUNT });
const rootSk = '0x07abfceff5cdfb0cd164d2da98099c15b7223fc5a1b8c02c2cf1f74670c72aac27e1d28ed47cf4f2c4330a6e6e1dc0724721e80fa56177fdba926937a253fe7e'; // prettier-ignore
let wallet = fromAppDid('', rootSk, type);
console.log(wallet.toJSON());
wallet = fromAppDid('zNKdqQxDUVz2YkfArfqc1CzjbX2QSNnMk1iW', rootSk, type);
console.log(wallet.toJSON());
```

Will output:

```js
{
  type: {
    role: 'ROLE_ACCOUNT',
    pk: 'ED25519',
    hash: 'SHA3',
    address: 'BASE58'
  },
  sk: '0x2e47d7b4c367c04cd594feac2c2bbe3eefe02723c3be2b682aabef1ec0c2902e9f16f990b2df33928c22b5b49a73eaa0ee52e40735eddd98e16e3c4538546546',
  pk: '0x9f16f990b2df33928c22b5b49a73eaa0ee52e40735eddd98e16e3c4538546546',
  address: 'z1Zhi9h6do1EUNkM63CEXHonyHx47WQKtxB'
}
{
  type: {
    role: 'ROLE_ACCOUNT',
    pk: 'ED25519',
    hash: 'SHA3',
    address: 'BASE58'
  },
  sk: '0x00b16a229aae56a4bc9e4cb2fdf3bfafcb1c81cca57120db9593e8711a9f859a3a0d2a698006ac0f2f62341a1ddb53404adb4e4b17d1a843af9791991fa4c302',
  pk: '0x3a0d2a698006ac0f2f62341a1ddb53404adb4e4b17d1a843af9791991fa4c302',
  address: 'z1m7dNPVzpgMwRSXDtKywWK6tp5mbK57bN5'
}
```


## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)
