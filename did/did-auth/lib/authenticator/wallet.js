/* eslint-disable indent */
/* eslint-disable object-curly-newline */
const qs = require('querystring');
const Mcrypto = require('@arcblock/mcrypto');
const ForgeSDK = require('@arcblock/forge-sdk');
const { toBase58 } = require('@arcblock/forge-util');
const { fromAddress } = require('@arcblock/forge-wallet');
const { toAddress } = require('@arcblock/did');
const { decode, verify, sign } = require('../jwt');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:wallet`);

class WalletAuthenticator {
  /**
   * @typedef ApplicationInfo
   * @prop {string} name - application name
   * @prop {string} description - application description
   * @prop {string} icon - application icon/logo url
   * @prop {string} path - application icon/logo url
   * @prop {string} publisher - application did with `did:abt:` prefix
   */

  /**
   * @typedef ChainInfo
   * @prop {string} id - application chain id
   * @prop {string} host - graphql endpoint of the application chain
   */

  /**
   * Creates an instance of DID Authenticator.
   *
   * @class
   * @param {object} config
   * @param {Wallet} config.wallet - wallet instance {@see @arcblock/forge-wallet}
   * @param {ApplicationInfo} config.appInfo - application basic info
   * @param {ChainInfo} config.chainInfo - application chain info
   * @param {ChainInfo} [config.crossChainInfo={}] - asset chain info
   * @param {object} config.baseUrl - url to assemble wallet request uri
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   */
  constructor({ wallet, appInfo, chainInfo, crossChainInfo, baseUrl, tokenKey = '_t_' }) {
    if (typeof wallet.sk === 'undefined') {
      throw new Error('WalletAuthenticator cannot work without wallet.sk');
    }
    if (typeof wallet.pk === 'undefined') {
      throw new Error('WalletAuthenticator cannot work without wallet.pk');
    }
    if (!appInfo) {
      throw new Error('WalletAuthenticator cannot work without appInfo');
    }
    if (!chainInfo) {
      throw new Error('WalletAuthenticator cannot work without chainInfo');
    }
    if (typeof chainInfo.host === 'undefined') {
      throw new Error('WalletAuthenticator cannot work without chainInfo.host');
    }
    if (typeof chainInfo.id === 'undefined') {
      throw new Error('WalletAuthenticator cannot work without chainInfo.id');
    }

    this.wallet = wallet;
    this.appInfo = appInfo;
    this.chainInfo = chainInfo;
    this.crossChainInfo = crossChainInfo;
    this.baseUrl = baseUrl;
    this.tokenKey = tokenKey;
    this.appPk = toBase58(wallet.pk);

    ForgeSDK.connect(chainInfo.host, { chainId: chainInfo.id, name: chainInfo.id });
  }

  /**
   * Generate a deep link url that can be displayed as QRCode for ABT Wallet to consume
   *
   * @method
   * @param {object} params
   * @param {string} params.token - action token
   * @param {string} params.pathname - wallet callback pathname
   * @param {object} params.query - params that should be persisted in wallet callback url
   * @returns {string}
   */
  uri({ token, pathname, query = {} }) {
    const params = Object.assign({}, query, { [this.tokenKey]: token });
    const payload = {
      action: 'requestAuth',
      url: encodeURIComponent(`${this.baseUrl}${pathname}?${qs.stringify(params)}`),
    };

    const uri = `${this.appInfo.path}?${qs.stringify(payload)}`;
    debug('requestAuth.uri', { token, pathname, uri, params, payload });
    return uri;
  }

  /**
   * Compute public url to return to wallet
   *
   * @method
   * @param {string} pathname
   * @param {object} params
   * @returns {string}
   */
  getPublicUrl(pathname, params = {}) {
    return `${this.baseUrl}${pathname}?${qs.stringify(params)}`;
  }

  /**
   * Sign a plain response, usually on auth success or error
   *
   * @method
   * @param {object} params
   * @param {object} params.response - response
   * @param {string} params.error - error message
   * @returns {object} { appPk, authInfo }
   */
  signResponse({ response = {}, error = '' }) {
    const payload = {
      appInfo: this.appInfo,
      status: error ? 'error' : 'ok',
      errorMessage: error || '',
      response,
    };

    debug('signResponse', { response, error });
    return {
      appPk: this.appPk,
      authInfo: sign(this.wallet.address, this.wallet.sk, payload),
    };
  }

  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo/crossChainInfo
   *
   * @method
   * @param {object} params
   * @param {string} params.token - action token
   * @param {string} params.userDid - decoded from req.query, base58
   * @param {string} params.userPk - decoded from req.query, base58
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.extraParams - extra query params and locale
   * @returns {object} { appPk, authInfo }
   */
  async sign({ token, userDid, userPk, claims, pathname, extraParams }) {
    const isValidChainInfo = x => x && x.id && x.host;

    const claimsInfo = await this.genRequestedClaims({ claims, userDid, userPk, extraParams });
    const tmp = claimsInfo.find(x => isValidChainInfo(x.chainInfo));

    const payload = {
      action: 'responseAuth',
      appInfo: this.appInfo,
      chainInfo: tmp ? tmp.chainInfo : this.chainInfo,
      requestedClaims: claimsInfo.map(x => {
        delete x.chainInfo;
        return x;
      }),
      url: `${this.baseUrl}${pathname}?${qs.stringify(
        Object.assign({ [this.tokenKey]: token }, extraParams)
      )}`,
    };

    if (
      isValidChainInfo(this.crossChainInfo) &&
      this.crossChainInfo.host !== payload.chainInfo.host
    ) {
      payload.crossChainInfo = this.crossChainInfo;
    }

    debug('responseAuth.sign', { token, userDid, payload, extraParams });
    return {
      appPk: this.appPk,
      authInfo: sign(this.wallet.address, this.wallet.sk, payload),
    };
  }

  /**
   * Verify a DID auth response sent from ABT Wallet
   *
   * @method
   * @param {object} data
   * @param {string} [locale=en]
   * @param {boolean} [enforceTimestamp=true]
   * @returns Promise<boolean>
   */
  verify(data, locale = 'en', enforceTimestamp = true) {
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

      if (!userPk) {
        return reject(new Error(errors.pkFormat[locale]));
      }

      const isValid = verify(userInfo, userPk);
      if (!isValid) {
        // NOTE: since the token can be invalid because of wallet-app clock not in sync
        // We should tell the user that if it's caused by clock
        const isValidSig = verify(userInfo, userPk, 0, false);
        if (enforceTimestamp) {
          const error = isValidSig ? errors.timeInvalid[locale] : errors.tokenInvalid[locale];
          return reject(new Error(error));
        }
      }

      const { iss, requestedClaims } = decode(userInfo);
      debug('decode', { iss, requestedClaims });

      // check timestamp
      return resolve({ token, userDid: toAddress(iss), userPk, claims: requestedClaims });
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
    const result =
      typeof claim === 'function'
        ? await claim({
            userDid: userDid ? toAddress(userDid) : '',
            userPk: userPk || '',
            extraParams,
          })
        : claim;

    return result;
  }

  // 要求同意协议
  async agreement({ claim, userDid, userPk, extraParams }) {
    const { uri, hash, description, meta = {} } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });

    return {
      type: 'agreement',
      description: description || 'Confirm your agreement to the document',
      uri,
      hash,
      meta,
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

  // 要求签名，可以是前 transaction 或者任意类型的消息
  async signature({ claim, userDid, userPk, extraParams }) {
    const {
      txData,
      txType,
      wallet,
      sender,
      description,
      chainInfo,
      meta = {},
    } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });

    debug('getClaim.signature', { txData, txType, sender, userDid, userPk });

    // If we are signing a transaction
    if (typeof ForgeSDK[`encode${txType}`] === 'function') {
      if (!txData.pk) {
        txData.pk = userPk;
      }

      const { buffer: txBuffer } = await ForgeSDK[`encode${txType}`](
        {
          tx: txData,
          wallet: wallet || fromAddress(sender || userDid),
        },
        { conn: chainInfo ? chainInfo.id : this.chainInfo.id }
      );

      return {
        type: 'signature',
        data: toBase58(Mcrypto.Hasher.SHA3.hash256(txBuffer)),
        description: description || 'You have to sign this transaction to continue.',
        typeUrl: 'fg:t:transaction',
        method: 'sha3',
        origin: toBase58(txBuffer),
        sig: '',
        chainInfo,
        meta: Object.assign(meta, {
          // FIXME: these fields should not exist here
          description: description || 'You have to sign this transaction to continue.',
          typeUrl: 'fg:t:transaction',
        }),
      };
    }

    // If we are ask user to sign anything
    return {
      type: 'signature',
      data: toBase58(txData),
      description: description || 'Sign this message to continue.',
      // TODO: https://github.com/ArcBlock/ABT-DID-Protocol/issues/46
      typeUrl: 'walletkit::signature',
      method: 'sha3',
      origin: toBase58(txData),
      sig: '',
      chainInfo,
      meta,
    };
  }

  // 资产持有证明
  async holdingOfAsset({ claim, userDid, userPk, extraParams }) {
    const { assetDid, description } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });
    return {
      type: 'asset',
      description: description || 'Please prove that you hold the asset',
      meta: {
        id: assetDid,
      },
    };
  }

  // 选择 DID
  async authPrincipal({ claim, userDid, userPk, extraParams }) {
    const { target, description, meta = {} } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });

    return {
      type: 'authPrincipal',
      description: description || 'Please set the authentication principal',
      meta,
      target,
    };
  }

  // 要求 setup swap，做同构链的跨链
  async swap({ claim, userDid, userPk, extraParams }) {
    const {
      swapId,
      description,
      offerAssets,
      offerToken,
      demandAssets,
      demandToken,
      demandLocktime,
      receiver,
      demandChainId,
      meta = {},
    } = await this.getClaimInfo({
      claim,
      userDid,
      userPk,
      extraParams,
    });

    return {
      type: 'swap',
      description: description || 'Please setup swap on the asset chain',
      swapId,
      offerAssets,
      offerToken,
      demandAssets,
      demandToken,
      demandLocktime,
      receiver,
      demandChain: demandChainId,
      meta,
    };
  }
}

module.exports = WalletAuthenticator;
