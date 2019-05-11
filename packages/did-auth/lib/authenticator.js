/* eslint-disable object-curly-newline */
const qs = require('querystring');
const multibase = require('multibase');
const Mcrypto = require('@arcblock/mcrypto');
const { hexToBytes, bytesToHex, isHex } = require('@arcblock/forge-util');
const { fromAddress } = require('@arcblock/forge-wallet');
const { jwtDecode, jwtVerify, jwtSign, toAddress, toDid } = require('@arcblock/did');
const debug = require('debug')(`${require('../package.json').name}:authenticator`);

const base58Encode = buffer => multibase.encode('base58btc', buffer).toString();

const getUserPkHex = userPk => {
  let userPkHex = '';
  // We should support both base16 and base58 format
  if (multibase.isEncoded(userPk)) {
    userPkHex = bytesToHex(multibase.decode(userPk));
  } else if (isHex(userPk)) {
    userPkHex = `0x${userPk}`;
  }

  debug('getUserPkHex', { userPk, userPkHex });
  return userPkHex;
};

module.exports = class Authenticator {
  constructor({ wallet, appInfo, baseUrl, client }) {
    if (typeof wallet.sk === 'undefined') {
      throw new Error('DID Authenticator cannot work without secretKey');
    }
    if (typeof wallet.pk === 'undefined') {
      throw new Error('DID Authenticator cannot work without publicKey');
    }

    this.client = client;
    this.wallet = wallet;
    this.appInfo = appInfo;
    this.baseUrl = baseUrl;
    this.appPk = multibase.encode('base58btc', Buffer.from(hexToBytes(wallet.pk))).toString();
  }

  uri({ token, pathname }) {
    const params = {
      appPk: this.appPk,
      appDid: toDid(this.wallet.address),
      action: 'requestAuth',
      url: `${this.baseUrl}${pathname}?${qs.stringify({ token })}`,
    };

    const uri = `${this.appInfo.path}?${qs.stringify(params)}`;
    debug('uri', { token, pathname, uri });
    return uri;
  }

  async sign({ token, did, userPk, claims, pathname }) {
    const payload = {
      action: 'responseAuth',
      appInfo: this.appInfo,
      requestedClaims: await this.genRequestedClaims(claims, did, userPk),
      url: `${this.baseUrl}${pathname}?${qs.stringify({ token })}`,
    };

    debug('sign', payload);
    return {
      appPk: this.appPk,
      authInfo: jwtSign(toDid(this.wallet.address), this.wallet.sk, payload),
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

      const userPkHex = getUserPkHex(userPk);
      if (!userPkHex) {
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
  genRequestedClaims(claims, did, userPk) {
    return Promise.all(Object.keys(claims).map(x => this[x](claims[x], did, userPk)));
  }

  async profile(claim, did, userPk) {
    const userPkHex = getUserPkHex(userPk);
    const { fields, description } =
      typeof claim === 'function'
        ? await claim({ userDid: did, userAddress: toAddress(did), userPk, userPkHex })
        : claim;
    return {
      items: fields || ['fullName'],
      meta: {
        description: description || 'Please provide your profile information.',
      },
      type: 'profile',
    };
  }

  // FIXME: Security Risk!! application should keep a copy of the buffer hash to avoid middle man attack
  async signature(claim, did, userPk) {
    const userPkHex = getUserPkHex(userPk);
    const { txData, txType, wallet, sender, description } =
      typeof claim === 'function'
        ? await claim({ userDid: did, userAddress: toAddress(did), userPk, userPkHex })
        : claim;

    if (userPkHex && !txData.pk) {
      txData.pk = Buffer.from(hexToBytes(userPkHex));
    }

    debug('getClaim.signature', { txData, txType, sender, did, userPk });
    const { buffer: txBuffer } = await this.client[`encode${txType}`]({
      tx: txData,
      wallet: wallet || fromAddress(sender || did),
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
