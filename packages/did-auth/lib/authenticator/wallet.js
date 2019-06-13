/* eslint-disable indent */
/* eslint-disable object-curly-newline */
const qs = require('querystring');
const Mcrypto = require('@arcblock/mcrypto');
const { toHex, toBase58 } = require('@arcblock/forge-util');
const { fromAddress } = require('@arcblock/forge-wallet');
const { toAddress, toDid } = require('@arcblock/did');
const { decode, verify, sign } = require('../jwt');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:wallet`);

module.exports = class WalletAuthenticator {
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
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   */
  constructor({ wallet, appInfo, baseUrl, client, tokenKey = '_t_' }) {
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
    this.tokenKey = tokenKey;
    this.appPk = toBase58(wallet.pk);
  }

  uri({ token, pathname, query = {} }) {
    const params = Object.assign({}, query, { [this.tokenKey]: token });
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

  async sign({ token, userDid, userPk, claims, pathname, extraParams }) {
    const payload = {
      action: 'responseAuth',
      appInfo: this.appInfo,
      requestedClaims: await this.genRequestedClaims({ claims, userDid, userPk, extraParams }),
      url: `${this.baseUrl}${pathname}?${qs.stringify(
        Object.assign({ [this.tokenKey]: token }, extraParams)
      )}`,
    };

    debug('responseAuth.sign', { token, userDid, payload, extraParams });
    return {
      appPk: this.appPk,
      authInfo: sign(toDid(this.wallet.address), this.wallet.sk, payload),
    };
  }

  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @param {object} data
   * @param {string} locale
   * @returns Promise<>
   */
  verify(data, locale = 'en') {
    return new Promise((resolve, reject) => {
      debug('verify', data, locale);

      const errors = {
        pkMissing: {
          en: 'userPk is required to complete auth',
          zh: 'userPk 参数缺失',
        },
        tokenMissing: {
          en: 'userInfo is required to complete auth',
          zh: 'JWT Token 参数缺失',
        },
        pkFormat: {
          en: 'userPk should be either base58 or base16 format',
          zh: 'userPk 无法解析',
        },
        tokenInvalid: {
          en: 'Invalid JWT token',
          zh: '签名无效',
        },
        timeInvalid: {
          en: 'JWT token expired, make sure your device time in sync with network',
          zh: '签名中的时间戳无效，请确保设备和网络时间同步',
        },
      };

      const { userPk, userInfo, token } = data;
      if (!userPk) {
        return reject(new Error(errors.pkMissing[locale]));
      }
      if (!userInfo) {
        return reject(new Error(errors.tokenMissing[locale]));
      }

      const userPkHex = toHex(userPk);
      if (!userPkHex) {
        return reject(new Error(errors.pkFormat[locale]));
      }

      const isValid = verify(userInfo, userPkHex);
      if (!isValid) {
        // NOTE: since the token can be invalid because of wallet-app clock not in sync
        // We should tell the user that if it's caused by clock
        const error = verify(userInfo, userPkHex, 0, false)
          ? errors.timeInvalid[locale]
          : errors.tokenInvalid[locale];
        return reject(new Error(error));
      }

      const { iss, requestedClaims } = decode(userInfo);
      debug('decode', { iss, requestedClaims });

      // check timestamp
      return resolve({ token, userDid: iss, claims: requestedClaims });
    });
  }

  // ---------------------------------------
  // Request claim related methods
  // ---------------------------------------
  genRequestedClaims({ claims, userDid, userPk, extraParams }) {
    return Promise.all(
      Object.keys(claims).map(x => this[x]({ claim: claims[x], userDid, userPk, extraParams }))
    );
  }

  async getClaimInfo({ claim, userDid, userPk, extraParams }) {
    const userPkHex = toHex(userPk);
    const result =
      typeof claim === 'function'
        ? await claim({
            userDid,
            userAddress: toAddress(userDid),
            userPk,
            userPkHex,
            extraParams,
          })
        : claim;

    result.userPkHex = userPkHex;
    return result;
  }

  // 要求同意协议
  async agreement({ claim, userDid, userPk, extraParams }) {
    const { uri, hash, description } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });

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
  async profile({ claim, userDid, userPk, extraParams }) {
    const { fields, description } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });
    return {
      type: 'profile',
      items: fields || ['fullName'],
      meta: {
        description: description || 'Please provide your profile information.',
      },
    };
  }

  // 要求签名
  async signature({ claim, userDid, userPk, extraParams }) {
    const { txData, txType, wallet, sender, description, userPkHex } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });
    if (userPkHex && !txData.pk) {
      txData.pk = userPkHex;
    }

    debug('getClaim.signature', { txData, txType, sender, userDid, userPk });
    const { buffer: txBuffer } = await this.client[`encode${txType}`]({
      tx: txData,
      wallet: wallet || fromAddress(sender || userDid),
    });

    return {
      type: 'signature',
      data: toBase58(Mcrypto.Hasher.SHA3.hash256(txBuffer)),
      meta: {
        description: description || 'You have to sign this transaction to continue.',
        typeUrl: 'fg:t:transaction',
      },
      method: 'sha3',
      origin: toBase58(txBuffer),
      sig: '',
    };
  }

  // 资产持有证明
  async holdingOfAsset({ claim, userDid, userPk, extraParams }) {
    const { target, description } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });
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
  async holdingOfToken({ claim, userDid, userPk, extraParams }) {
    const { target, description } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });
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
