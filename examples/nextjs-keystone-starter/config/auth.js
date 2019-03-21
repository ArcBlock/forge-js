const qs = require('querystring');
const multibase = require('multibase');
// const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes } = require('@arcblock/forge-util');
const { jwtDecode, jwtVerify, jwtSign } = require('@arcblock/abt-did');

const wallet = {
  type: {
    role: 'ROLE_APPLICATION',
    pk: 'ED25519',
    hash: 'SHA3',
    address: 'BASE58',
  },
  sk: process.env.APP_SK,
  pk: '0x816bb2a1f0156ebf7491d97f3be7b9f2f11ece0d65eafaef8af99cccb5f18177',
  address: 'zNKaZFAhe4azLAUQUzi6s8s4F8wZ3L9izeU4',
};

const appDID = `did:abt:${wallet.address}`;

const meta = {
  chainHost: 'http://abt-testnet.arcblock.co:8210/api/',
  chainId: 'forge',
  chainToken: 'TBA',
  copyright: 'https://example-application/copyright',
  decimals: 16,
  description: 'Starter projects to develop web application on forge',
  icon: '/images/logo@2x.png',
  name: 'Forge Web Starter',
  path: 'https://arcwallet.io/i/',
  publisher: appDID,
  subtitle: 'Starter projects to develop web application on forge',
};

// const authUrl = 'http://localhost:3000/api/auth';
const authUrl = 'http://wangshijun.natapp1.cc/api/auth';

module.exports = {
  wallet,
  meta,

  getLoginUri() {
    const params = {
      appPk: multibase.encode('base58btc', hexToBytes(wallet.pk)).toString(),
      appDid: `abt:did:${wallet.address}`,
      action: 'requestAuth',
      url: authUrl,
    };

    return `${meta.path}?${qs.stringify(params)}`;
  },

  // TODO: userDID is not used here
  getAuthInfo(userDID) {
    const payload = {
      action: 'responseAuth',
      appInfo: meta,
      requestedClaims: [
        {
          items: ['email', 'fullName', 'phone'],
          meta: { description: 'Please provide your profile information.' },
          type: 'profile',
        },
      ],
      url: authUrl,
    };

    return {
      appPk: multibase.encode('base58btc', hexToBytes(wallet.pk)).toString(),
      authInfo: jwtSign(appDID, wallet.sk, payload),
    };
  },

  verifyAuth(data) {
    console.log('verifyLogin', data);
    return !!data;
  },
};
