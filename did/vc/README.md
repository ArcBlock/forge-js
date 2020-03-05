![Verifiable Credentials](https://www.arcblock.io/.netlify/functions/badge/?text=Verifiable+Credentials)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Javascript library to manipulate Verifiable Credentials (VC) to DID Protocol

## Usage

```terminal
yarn add @arcblock/vc
```

```javascript
const VC = require('@arcblock/vc');

const issuer = fromRandom();
const owner = fromRandom();
const vc = create({
  type: 'EmailVerificationCredential',
  issuer: {
    wallet: issuer,
    name: 'DID.KYC.Email',
  },
  subject: {
    id: owner.toAddress(),
    key: 'value',
    method: 'SHA3',
  },
});

console.log(vc);

const result = VC.verify({ vc, ownerDid: owner.toAddress(), trustedIssuers: issuer.toAddress() });
console.log(result); // true
```

## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)
