const qs = require('querystring');
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes, bytesToHex, isHex } = require('@arcblock/forge-util');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const { jwtDecode, jwtVerify, jwtSign, fromPublicKey } = require('@arcblock/abt-did');

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_APPLICATION,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

const wallet = fromSecretKey(process.env.APP_SK, type).toJSON();
const appDID = `did:abt:${wallet.address}`;

const meta = {
  chainHost: 'http://did-workshop.arcblock.co:8210/api',
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
const appPk = multibase.encode('base58btc', Buffer.from(hexToBytes(wallet.pk))).toString();

module.exports = {
  wallet,
  meta,

  getLoginUri(sessionID) {
    const params = {
      appPk,
      appDid: `abt:did:${wallet.address}`,
      action: 'requestAuth',
      url: `${authUrl}?${qs.stringify({ sessionID })}`,
    };

    return `${meta.path}?${qs.stringify(params)}`;
  },

  // TODO: userDID is not used here
  getAuthInfo(sessionID, userDID) {
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
      url: `${authUrl}?${qs.stringify({ sessionID })}`,
    };

    return {
      appPk,
      authInfo: jwtSign(appDID, wallet.sk, payload),
    };
  },

  verifyAuth(data) {
    return new Promise((resolve, reject) => {
      console.log('verifyLogin', data);

      const { userPk, userInfo, sessionID } = data;
      if (!userPk) {
        return reject(new Error('userPk is required to login'));
      }
      if (!userInfo) {
        return reject(new Error('userInfo(jwt token) is required to login'));
      }

      let userPkHex = '';
      if (multibase.isEncoded(userPk)) {
        userPkHex = bytesToHex(multibase.decode(userPk));
      } else if (isHex(userPk)) {
        userPkHex = `0x${userPk}`;
      } else {
        return reject(new Error('userPk should be either base58 or base16 format'));
      }

      const isValid = jwtVerify(userInfo, userPkHex);
      if (!isValid) {
        return reject(new Error('userInfo signature invalid'));
      }

      const payload = jwtDecode(userInfo);
      if (Array.isArray(payload.requestedClaims)) {
        payload.requestedClaims = payload.requestedClaims.reduce((acc, x) => {
          acc[x.type] = x;
          delete acc[x.type].type;
          return acc;
        }, {});
      }

      // check timestamp
      return resolve({ sessionID, userDID: payload.iss, requestedClaims: payload.requestedClaims });
    });
  },
};
