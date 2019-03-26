/* eslint-disable object-curly-newline */
const qs = require('querystring');
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const GraphQLClient = require('@arcblock/forge-graphql-client');
const { hexToBytes, bytesToHex, isHex } = require('@arcblock/forge-util');
const { fromAddress } = require('@arcblock/forge-wallet');
const { jwtDecode, jwtVerify, jwtSign } = require('@arcblock/abt-did');
const debug = require('debug')('DIDAuth:Authenticator');

const base58Encode = buffer => multibase.encode('base58btc', buffer).toString();

module.exports = class Authenticator {
  constructor({ wallet, appInfo, baseUrl }) {
    if (typeof wallet.sk === 'undefined') {
      throw new Error('DID Authenticator cannot work without secretKey');
    }
    if (typeof wallet.pk === 'undefined') {
      throw new Error('DID Authenticator cannot work without publicKey');
    }

    this.wallet = wallet;
    this.appInfo = appInfo;
    this.baseUrl = baseUrl;
    this.appPk = multibase.encode('base58btc', Buffer.from(hexToBytes(wallet.pk))).toString();
    this.client = new GraphQLClient(appInfo.chainHost);
  }

  uri({ token, pathname }) {
    const params = {
      appPk: this.appPk,
      appDid: `abt:did:${this.wallet.address}`,
      action: 'requestAuth',
      url: `${this.baseUrl}${pathname}?${qs.stringify({ token })}`,
    };

    const uri = `${this.appInfo.path}?${qs.stringify(params)}`;
    debug('uri', { token, pathname, uri });
    return uri;
  }

  async sign({ token, did, claims, pathname }) {
    const payload = {
      action: 'responseAuth',
      appInfo: this.appInfo,
      requestedClaims: await this.genRequestedClaims(claims, did),
      url: `${this.baseUrl}${pathname}?${qs.stringify({ token })}`,
    };

    debug('sign', payload);
    return {
      appPk: this.appPk,
      authInfo: jwtSign(`did:abt:${this.wallet.address}`, this.wallet.sk, payload),
    };
  }

  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @param {*} data
   * @returns Promise<>
   */
  verify(data) {
    return new Promise((resolve, reject) => {
      debug('verify', data);

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

      const { iss, requestedClaims } = jwtDecode(userInfo);
      debug('decode', { iss, requestedClaims });

      // check timestamp
      return resolve({ token, did: iss, claims: requestedClaims });
    });
  }

  // ---------------------------------------
  // Request claim related methods
  // ---------------------------------------
  genRequestedClaims(params, did) {
    return Promise.all(Object.keys(params).map(x => this[x](params[x], did)));
  }

  profile({ fields, description }) {
    return {
      items: fields || ['fullName'],
      meta: { description: description || 'Please provide your profile information.' },
      type: 'profile',
    };
  }

  async signature({ txData, txType, sender, description }, did) {
    debug('getClain.signature', { txData, txType, sender, did });

    // TODO: make this more robust
    const { buffer: txBuffer } = await this.client[`encode${txType}`]({
      data: txData,
      wallet: fromAddress(sender || did),
    });

    return {
      data: base58Encode(hexToBytes(Mcrypto.Hasher.SHA3.hash256(txBuffer))),
      meta: {
        description: description || 'You have to sign this transaction to continue.',
        typeUrl: 'fg:t:transaction',
      },
      method: 'sha3',
      origin: base58Encode(txBuffer),
      sig: '',
      type: 'signature',
    };
  }
};
