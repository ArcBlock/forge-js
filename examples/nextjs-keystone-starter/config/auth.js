const qs = require('querystring');
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes, bytesToHex, isHex } = require('@arcblock/forge-util');
const { fromSecretKey, fromAddress, WalletType } = require('@arcblock/forge-wallet');
const { jwtDecode, jwtVerify, jwtSign } = require('@arcblock/abt-did');
const GraphQLClient = require('@arcblock/forge-graphql-client');

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

// const baseUrl = 'http://localhost:3000/api/auth';
const baseUrl = 'http://wangshijun.natapp1.cc/api';
const appPk = multibase.encode('base58btc', Buffer.from(hexToBytes(wallet.pk))).toString();
const client = new GraphQLClient(meta.chainHost);

const requestClaims = {
  profile({ fields, description }) {
    return {
      items: fields || ['fullName'],
      meta: { description: description || 'Please provide your profile information.' },
      type: 'profile',
    };
  },

  // eslint-disable-next-line object-curly-newline
  async signature({ txData, txType, sender, description }) {
    const { buffer: txBuffer } = await client[`encode${txType}`]({
      data: txData,
      wallet: fromAddress(sender),
    });

    return {
      data: multibase.encode('base58btc', hexToBytes(Mcrypto.Hasher.SHA3.hash256(txBuffer))),
      meta: {
        description: description || 'You have to sign this transaction to continue.',
        typeUrl: 'fg:t:transaction',
      },
      method: 'sha3',
      origin: multibase.encode('base58btc', txBuffer),
      sig: '',
      type: 'signature',
    };
  },

  generate(params) {
    return Promise.all(Object.keys(params).map(x => requestClaims[x](params[x])));
  },
};

module.exports = {
  wallet,
  meta,

  getLoginUri(token) {
    const params = {
      appPk,
      appDid: `abt:did:${wallet.address}`,
      action: 'requestAuth',
      url: `${baseUrl}/auth?${qs.stringify({ token })}`,
    };

    return `${meta.path}?${qs.stringify(params)}`;
  },

  async getAuthInfo({ token, claims }) {
    const payload = {
      action: 'responseAuth',
      appInfo: meta,
      requestedClaims: await requestClaims.generate(claims),
      url: `${baseUrl}/auth?${qs.stringify({ token })}`,
    };

    return {
      appPk,
      authInfo: jwtSign(appDID, wallet.sk, payload),
    };
  },

  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @param {*} data
   * @returns Promise<>
   */
  verifyAuth(data) {
    return new Promise((resolve, reject) => {
      console.log('verifyLogin', data);

      const { userPk, userInfo, token } = data;
      if (!userPk) {
        return reject(new Error('userPk is required to login'));
      }
      if (!userInfo) {
        return reject(new Error('userInfo(jwt token) is required to login'));
      }

      // We should support both base16 and base58 format
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
      return resolve({ token, did: payload.iss, requestedClaims: payload.requestedClaims });
    });
  },
};
