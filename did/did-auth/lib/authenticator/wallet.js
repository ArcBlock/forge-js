/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
const qs = require('querystring');
const isEqual = require('lodash/isEqual');
const ForgeSDK = require('@arcblock/forge-sdk');
const { toBase58 } = require('@arcblock/forge-util');
const { fromAddress } = require('@arcblock/forge-wallet');
const { toAddress } = require('@arcblock/did');

const Jwt = require('../jwt');
const BaseAuthenticator = require('./base');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:wallet`);

const { DEFAULT_CHAIN_INFO } = BaseAuthenticator;

class WalletAuthenticator extends BaseAuthenticator {
  /**
   * @typedef ApplicationInfo
   * @prop {string} name - application name
   * @prop {string} description - application description
   * @prop {string} icon - application icon/logo url
   * @prop {string} link - application home page, with which user can return application from wallet
   * @prop {string} path - deep link url
   * @prop {string} publisher - application did with `did:abt:` prefix
   */

  /**
   * @typedef ChainInfo
   * @prop {string} id - application chain id
   * @prop {string} host - graphql endpoint of the application chain
   * @prop {boolean} restrictedDeclare - whether the declaration is restricted
   */

  /**
   * Creates an instance of DID Authenticator.
   *
   * @class
   * @param {object} config
   * @param {Wallet|Function} config.wallet - wallet instance {@see @arcblock/forge-wallet} or a function that returns wallet instance
   * @param {ApplicationInfo|Function} config.appInfo - application basic info or a function that returns application info
   * @param {ChainInfo|Function} config.chainInfo - application chain info or a function that returns chain info
   * @param {object} [config.baseUrl] - url to assemble wallet request uri, can be inferred from request object
   * @param {string} [config.tokenKey='_t_'] - query param key for `token`
   * @example
   * const ForgeSDK = require('@arcblock/forge-sdk');
   *
   * const wallet = ForgeSDK.Wallet.fromRandom().toJSON();
   * const chainHost = 'https://zinc.abtnetwork.io/api';
   * const chainId = 'zinc-2019-05-17';
   * const auth = new Authenticator({
   *   wallet,
   *   baseUrl: 'http://zinc.abtnetwork.io/webapp',
   *   appInfo: {
   *     name: 'ABT Wallet Demo',
   *     description: 'Demo application to show the potential of ABT Wallet',
   *     icon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
   *   },
   *   chainInfo: {
   *     host: chainHost,
   *     id: chainId,
   *   },
   * });
   */
  constructor({ wallet, appInfo, chainInfo = DEFAULT_CHAIN_INFO, baseUrl = '', tokenKey = '_t_' }) {
    super();

    this.wallet = this._validateWallet(wallet);
    this.appInfo = this._validateAppInfo(appInfo);
    this.chainInfo = chainInfo;

    this.baseUrl = baseUrl;
    this.tokenKey = tokenKey;

    if (!this.appInfo.link) {
      this.appInfo.link = this.baseUrl;
    }
  }

  /**
   * Generate a deep link url that can be displayed as QRCode for ABT Wallet to consume
   *
   * @method
   * @param {object} params
   * @param {string} params.token - action token
   * @param {string} params.baseUrl - baseUrl inferred from request object
   * @param {string} params.pathname - wallet callback pathname
   * @param {object} params.query - params that should be persisted in wallet callback url
   * @returns {string}
   */
  async uri({ baseUrl, pathname = '', token = '', query = {} } = {}) {
    const params = Object.assign({}, query, { [this.tokenKey]: token });
    const payload = {
      action: 'requestAuth',
      url: encodeURIComponent(`${this.baseUrl || baseUrl}${pathname}?${qs.stringify(params)}`),
    };

    const uri = `https://abtwallet.io/i/?${qs.stringify(payload)}`;
    debug('uri', { token, pathname, uri, params, payload });
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
  getPublicUrl(pathname, params = {}, baseUrl = '') {
    return `${this.baseUrl || baseUrl}${pathname}?${qs.stringify(params)}`;
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
  async signResponse({ response = {}, error = '' }, baseUrl, request) {
    const wallet = await this.getWalletInfo({ baseUrl, request });
    const appInfo = await this.getAppInfo({ baseUrl, request });
    if (!appInfo.publisher) {
      appInfo.publisher = `did:abt:${wallet.address}`;
    }

    const payload = {
      appInfo,
      status: error ? 'error' : 'ok',
      errorMessage: error || '',
      response,
    };

    return {
      appPk: toBase58(wallet.pk),
      authInfo: Jwt.sign(wallet.address, wallet.sk, payload),
    };
  }

  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo
   *
   * @method
   * @param {object} params
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.pathname - pathname to assemble callback url
   * @param {object} params.challenge - random challenge to be included in the body
   * @param {object} params.extraParams - extra query params and locale
   * @param {string} params.context.token - action token
   * @param {string} params.context.userDid - decoded from req.query, base58
   * @param {string} params.context.userPk - decoded from req.query, base58
   * @param {string} params.context.walletOS - wallet os from user-agent
   * @param {string} params.context.walletVersion - wallet version from user-agent
   * @param {string} params.context.sessionDid - did of logged-in user
   * @returns {object} { appPk, authInfo }
   */
  async sign({ context, request, claims, pathname = '', baseUrl = '', challenge = '', extraParams = {} }) {
    // debug('sign.context', context);
    // debug('sign.params', extraParams);

    const claimsInfo = await this.genRequestedClaims({
      claims,
      context: Object.assign({ baseUrl, request }, context),
      extraParams,
    });
    const infoParams = Object.assign({ baseUrl, request }, context, extraParams);

    // FIXME: this maybe buggy if user provided multiple claims
    const tmp = claimsInfo.find(x => isEqual(this._isValidChainInfo(x.chainInfo), DEFAULT_CHAIN_INFO) === false);

    const appInfo = await this.getAppInfo(infoParams);
    const chainInfo = await this.getChainInfo(infoParams, tmp ? tmp.chainInfo : DEFAULT_CHAIN_INFO);
    const wallet = await this.getWalletInfo(infoParams);
    if (!appInfo.publisher) {
      appInfo.publisher = `did:abt:${wallet.address}`;
    }

    const payload = {
      action: 'responseAuth',
      challenge,
      appInfo,
      chainInfo,
      requestedClaims: claimsInfo.map(x => {
        delete x.chainInfo;
        return x;
      }),
      url: `${this.baseUrl || baseUrl}${pathname}?${qs.stringify({ [this.tokenKey]: context.token })}`,
    };

    // debug('sign.payload', payload);

    return {
      appPk: toBase58(wallet.pk),
      authInfo: Jwt.sign(wallet.address, wallet.sk, payload),
    };
  }

  /**
   * Determine chainInfo on the fly
   *
   * @param {object} params - contains the context of this request
   * @param {object|undefined} info - chain info object or function
   * @returns {ChainInfo}
   * @memberof WalletAuthenticator
   */
  async getChainInfo(params, info) {
    if (info) {
      return this._isValidChainInfo(info) ? info : DEFAULT_CHAIN_INFO;
    }

    if (typeof this.chainInfo === 'function') {
      const result = await this.chainInfo(params);
      return this._isValidChainInfo(result) ? result : DEFAULT_CHAIN_INFO;
    }

    return this.chainInfo || DEFAULT_CHAIN_INFO;
  }

  /**
   * Determine appInfo on the fly
   *
   * @param {object} params - contains the context of this request
   * @param {object|undefined} info - app info object or function
   * @returns {ApplicationInfo}
   * @memberof WalletAuthenticator
   */
  async getAppInfo(params) {
    if (typeof this.appInfo === 'function') {
      const result = await this.appInfo(params);
      if (!result.link) {
        result.link = params.baseUrl;
      }
      if (this._validateAppInfo(result)) {
        return result;
      }

      throw new Error('Invalid appInfo function provided');
    }

    return this.appInfo;
  }

  async getWalletInfo(params) {
    if (typeof this.wallet === 'function') {
      const result = await this.wallet(params);
      if (this._validateWallet(result)) {
        return result;
      }

      throw new Error('Invalid wallet function provided');
    }

    return this.wallet;
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
    return new Promise(async (resolve, reject) => {
      try {
        const { iss, challenge = '', action = 'responseAuth', requestedClaims } = await this._verify(
          data,
          'userPk',
          'userInfo',
          locale,
          enforceTimestamp
        );

        resolve({
          token: data.token,
          userDid: toAddress(iss),
          userPk: data.userPk,
          claims: requestedClaims,
          action,
          challenge,
        });

        debug('verify.context', { userPk: data.userPk, userDid: toAddress(iss), action, challenge });
        debug('verify.claims', requestedClaims);
      } catch (err) {
        reject(err);
      }
    });
  }

  // ---------------------------------------
  // Request claim related methods
  // ---------------------------------------
  genRequestedClaims({ claims, context, extraParams }) {
    return Promise.all(
      Object.keys(claims).map(x => {
        let name = x;
        let claim = claims[x];

        if (Array.isArray(claims[x])) {
          [name, claim] = claims[x];
        }

        if (typeof this[name] === 'function') {
          return this[name]({ claim, context, extraParams });
        }

        throw new Error(`Unsupported claim type ${name}`);
      })
    );
  }

  async getClaimInfo({ claim, context, extraParams }) {
    const { userDid, userPk, walletOS, sessionDid, walletVersion } = context;
    const result =
      typeof claim === 'function'
        ? await claim({
            userDid: userDid ? toAddress(userDid) : '',
            userPk: userPk || '',
            sessionDid: sessionDid || '',
            walletOS,
            walletVersion,
            extraParams,
            context,
          })
        : claim;

    const infoParams = Object.assign({}, context, extraParams);
    const chainInfo = await this.getChainInfo(infoParams, result.chainInfo);

    result.chainInfo = chainInfo;

    return result;
  }

  // 要求同意协议
  async agreement({ claim, context, extraParams }) {
    const { uri, hash, description, chainInfo, meta = {} } = await this.getClaimInfo({
      claim,
      context,
      extraParams,
    });

    return {
      type: 'agreement',
      description: description || 'Confirm your agreement to the document',
      uri,
      hash,
      chainInfo,
      meta,
    };
  }

  // 要求用户信息
  async profile({ claim, context, extraParams }) {
    const { fields, description, chainInfo, meta = {} } = await this.getClaimInfo({
      claim,
      context,
      extraParams,
    });
    return {
      type: 'profile',
      items: fields || ['fullName'],
      description: description || 'Please provide your profile information.',
      chainInfo,
      meta,
    };
  }

  // Request wallet to sign something: transaction/text/html/image
  async signature({ claim, context, extraParams }) {
    const {
      data,
      type = 'mime:text/plain',
      digest = '',
      display = '',
      method = 'sha3', // set this to `none` to instruct wallet not to hash before signing
      wallet,
      sender,
      description: desc,
      chainInfo,
      meta = {},
    } = await this.getClaimInfo({
      claim,
      context,
      extraParams,
    });

    debug('claim.signature', { data, digest, type, sender, context });

    if (!data && !digest) {
      throw new Error('Signature claim requires either data or digest to be provided');
    }

    const description = desc || 'Sign this transaction to continue.';

    // We have to encode the transaction
    if (type.endsWith('Tx')) {
      if (!chainInfo.host || !chainInfo.id) {
        throw new Error('Invalid chainInfo when trying to encoding transaction');
      }

      ForgeSDK.connect(chainInfo.host, { chainId: chainInfo.id, name: chainInfo.id });

      if (typeof ForgeSDK[`encode${type}`] !== 'function') {
        throw new Error(`Unsupported transaction type ${type}`);
      }

      if (!data.pk) {
        data.pk = context.userPk;
      }

      const { buffer: txBuffer } = await ForgeSDK[`encode${type}`](
        {
          tx: data,
          wallet: wallet || fromAddress(sender || context.userDid),
        },
        { conn: chainInfo.id }
      );

      return {
        type: 'signature',
        description,
        typeUrl: 'fg:t:transaction',
        origin: toBase58(txBuffer),
        method,
        display,
        digest: '',
        sig: '',
        chainInfo,
        meta,
      };
    }

    // We have en encoded transaction
    if (type === 'fg:t:transaction') {
      return {
        type: 'signature',
        description,
        typeUrl: 'fg:t:transaction',
        origin: toBase58(data),
        display,
        method,
        digest: '',
        sig: '',
        chainInfo,
        meta,
      };
    }

    // If we are ask user to sign anything just pass the data
    // Wallet should not hash the data if `method` is empty
    // If we are asking user to sign a very large piece of data
    // Just hash the data and show him the digest
    return {
      type: 'signature',
      description: desc || 'Sign this message to continue.',
      origin: data ? toBase58(data) : null,
      typeUrl: type,
      display,
      method,
      digest,
      sig: '',
      chainInfo,
      meta,
    };
  }

  // 资产持有证明
  async holdingOfAsset({ claim, context, extraParams }) {
    const { target, description, meta = {}, chainInfo } = await this.getClaimInfo({ claim, context, extraParams });

    if (!target) {
      throw new Error('Holding of asset claim requires a target asset DID');
    }

    return {
      type: 'asset',
      description: description || 'Please prove that you hold the asset',
      chainInfo,
      target,
      meta,
    };
  }

  // 选择 DID
  async authPrincipal({ claim, context, extraParams }) {
    const { target, targetType, declareParams, description, chainInfo, meta = {} } = await this.getClaimInfo({
      claim,
      context,
      extraParams,
    });

    return {
      type: 'authPrincipal',
      description: description || 'Please set the authentication principal',
      meta,
      target,
      targetType,
      declareParams,
      chainInfo,
    };
  }

  // request wallet provide verifiableCredential
  async verifiableCredential({ claim, context, extraParams }) {
    const { item, trustedIssuers, description: desc, chainInfo, tag, meta = {} } = await this.getClaimInfo({
      claim,
      context,
      extraParams,
    });

    return {
      type: 'verifiableCredential',
      description: desc || 'Please provide Verifiable Credential match this case',
      item,
      trustedIssuers,
      chainInfo,
      meta,
      tag,
    };
  }

  // 要求 setup swap，做同构链的跨链
  async swap({ claim, context, extraParams }) {
    const {
      swapId,
      description,
      offerAssets,
      offerToken,
      offerChainId,
      demandAssets,
      demandToken,
      demandLocktime,
      receiver,
      demandChainId,
      meta = {},
    } = await this.getClaimInfo({
      claim,
      context,
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
      offerChain: offerChainId,
      meta,
    };
  }

  _validateAppInfo(appInfo) {
    if (typeof appInfo === 'function') {
      return appInfo;
    }

    if (!appInfo) {
      throw new Error('WalletAuthenticator cannot work without appInfo');
    }
    if (!appInfo.name) {
      throw new Error('WalletAuthenticator cannot work without appInfo.name');
    }
    if (!appInfo.description) {
      throw new Error('WalletAuthenticator cannot work without appInfo.description');
    }
    if (!appInfo.icon) {
      throw new Error('WalletAuthenticator cannot work without appInfo.icon');
    }

    if (!appInfo.path) {
      appInfo.path = 'https://abtwallet.io/i/';
    }

    return appInfo;
  }

  _isValidChainInfo(x) {
    return x && x.id && x.host;
  }
}

module.exports = WalletAuthenticator;
