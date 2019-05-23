/* eslint-disable indent */
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
  /**
   * @typedef ApplicationInfo
   * @prop {string} chainId - chain id
   * @prop {string} chainHost - graphql endpoint of the chain
   * @prop {string} chainToken - token symbol
   * @prop {string} decimals - token decimals
   * @prop {string} name - application name
   * @prop {string} description - application description
   * @prop {string} icon - application icon/logo url
   * @prop {string} path - application icon/logo url
   * @prop {string} publisher - application did with `did:abt:` prefix
   */

  /**
   * Creates an instance of DID Authenticator.
   *
   * @public
   * @param {object} config
   * @param {Wallet} config.wallet - wallet instance {@see @arcblock/forge-wallet}
   * @param {ApplicationInfo} config.appInfo - application basic info
   * @param {object} config.baseUrl - url to assemble wallet request uri
   * @param {GraphQLClient} config.client - GraphQLClient instance {@see @arcblock/graphql-client}
   */
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

  uri({ token, pathname, query = {} }) {
    const params = Object.assign({}, query, { token });
    const payload = {
      appPk: this.appPk,
      appDid: toDid(this.wallet.address),
      action: 'requestAuth',
      url: encodeURIComponent(`${this.baseUrl}${pathname}?${qs.stringify(params)}`),
    };

    const uri = `${this.appInfo.path}?${qs.stringify(payload)}`;
    debug('requestAuth.uri', { token, pathname, uri, params, payload });
    return uri;
  }

  async sign({ token, did, userPk, claims, pathname, extraParams }) {
    const payload = {
      action: 'responseAuth',
      appInfo: this.appInfo,
      requestedClaims: await this.genRequestedClaims({ claims, did, userPk, extraParams }),
      url: `${this.baseUrl}${pathname}?${qs.stringify(Object.assign({ token }, extraParams))}`,
    };

    debug('responseAuth.sign', { token, did, payload, extraParams });
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
  genRequestedClaims({ claims, did, userPk, extraParams }) {
    return Promise.all(
      Object.keys(claims).map(x => this[x]({ claim: claims[x], did, userPk, extraParams }))
    );
  }
  async getClaimInfo({ claim, did, userPk, extraParams }) {
    const userPkHex = getUserPkHex(userPk);
    const result =
      typeof claim === 'function'
        ? await claim({
            userDid: did,
            userAddress: toAddress(did),
            userPk,
            userPkHex,
            extraParams,
          })
        : claim;

    result.userPkHex = userPkHex;
    return result;
  }

  // 要求同意协议
  async agreement({ claim, did, userPk, extraParams }) {
    const { uri, hash, description } = await this.getClaimInfo({ claim, did, userPk, extraParams });

    return {
      type: 'agreement',
      meta: {
        description: description || 'Confirm your agreement to the document',
      },
      uri,
      hash,
    };
  }

  // 要求用户信息
  async profile({ claim, did, userPk, extraParams }) {
    const { fields, description } = await this.getClaimInfo({ claim, did, userPk, extraParams });
    return {
      type: 'profile',
      items: fields || ['fullName'],
      meta: {
        description: description || 'Please provide your profile information.',
      },
    };
  }

  // 要求签名
  async signature({ claim, did, userPk, extraParams }) {
    const { txData, txType, wallet, sender, description, userPkHex } = await this.getClaimInfo({
      claim,
      did,
      userPk,
      extraParams,
    });
    if (userPkHex && !txData.pk) {
      txData.pk = Buffer.from(hexToBytes(userPkHex));
    }

    debug('getClaim.signature', { txData, txType, sender, did, userPk });
    const { buffer: txBuffer } = await this.client[`encode${txType}`]({
      tx: txData,
      wallet: wallet || fromAddress(sender || did),
    });

    return {
      type: 'signature',
      data: base58Encode(hexToBytes(Mcrypto.Hasher.SHA3.hash256(txBuffer))),
      meta: {
        description: description || 'You have to sign this transaction to continue.',
        typeUrl: 'fg:t:transaction',
      },
      method: 'sha3',
      origin: base58Encode(txBuffer),
      sig: '',
    };
  }

  // 资产持有证明
  async holdingOfAsset({ claim, did, userPk, extraParams }) {
    const { target, description } = await this.getClaimInfo({ claim, did, userPk, extraParams });
    return {
      type: 'did',
      did_type: 'asset',
      target,
      did: '',
      meta: {
        description: description || 'Please prove that you hold the asset',
      },
    };
  }

  // 通证持有证明
  async holdingOfToken({ claim, did, userPk, extraParams }) {
    const { target, description } = await this.getClaimInfo({ claim, did, userPk, extraParams });
    return {
      type: 'did',
      did_type: 'account',
      target: Number(target),
      did: '',
      meta: {
        description: description || `Please prove that you have ${target} token`,
      },
    };
  }
};
