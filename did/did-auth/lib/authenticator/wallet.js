/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
const qs = require('querystring');
const ForgeSDK = require('@arcblock/forge-sdk');
const { toBase58 } = require('@arcblock/forge-util');
const { fromAddress } = require('@arcblock/forge-wallet');
const { toAddress } = require('@arcblock/did');

const Jwt = require('../jwt');
const BaseAuthenticator = require('./base');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:wallet`);

class WalletAuthenticator extends BaseAuthenticator {
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
   * @param {object} config.baseUrl - url to assemble wallet request uri
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
  constructor({ wallet, appInfo, chainInfo, baseUrl, tokenKey = '_t_' }) {
    super();

    if (!baseUrl) {
      throw new Error('WalletAuthenticator cannot work without a public accessible baseUrl');
    }

    this.wallet = this._validateWallet(wallet);
    this.appInfo = this._validateAppInfo(appInfo, wallet);
    this.chainInfo = this._validateChainInfo(chainInfo);

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
  uri({ pathname = '', token = '', query = {} } = {}) {
    const params = Object.assign({}, query, { [this.tokenKey]: token });
    const payload = {
      action: 'requestAuth',
      url: encodeURIComponent(`${this.baseUrl}${pathname}?${qs.stringify(params)}`),
    };

    const uri = `${this.appInfo.path}?${qs.stringify(payload)}`;
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

    // debug('signResponse', { response, error });
    return {
      appPk: this.appPk,
      authInfo: Jwt.sign(this.wallet.address, this.wallet.sk, payload),
    };
  }

  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo
   *
   * @method
   * @param {object} params
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.extraParams - extra query params and locale
   * @param {string} params.context.token - action token
   * @param {string} params.context.userDid - decoded from req.query, base58
   * @param {string} params.context.userPk - decoded from req.query, base58
   * @param {string} params.context.walletOS - wallet os from user-agent
   * @param {string} params.context.walletVersion - wallet version from user-agent
   * @param {string} params.context.sessionDid - did of logged-in user
   * @returns {object} { appPk, authInfo }
   */
  async sign({ context, claims, pathname = '', extraParams = {} }) {
    const claimsInfo = await this.genRequestedClaims({ claims, context, extraParams });

    // FIXME: this maybe buggy if user provided multiple claims
    const tmp = claimsInfo.find(x => this.getChainInfo({ context, extraParams }, x.chainInfo || {}));

    const payload = {
      action: 'responseAuth',
      appInfo: this.appInfo,
      chainInfo: this.getChainInfo({ context, extraParams }, tmp ? tmp.chainInfo : undefined),
      requestedClaims: claimsInfo.map(x => {
        delete x.chainInfo;
        return x;
      }),
      url: `${this.baseUrl}${pathname}?${qs.stringify(Object.assign({ [this.tokenKey]: context.token }, extraParams))}`,
    };

    debug('sign.context', context);
    debug('sign.params', extraParams);
    debug('sign.payload', payload);

    return {
      appPk: this.appPk,
      authInfo: Jwt.sign(this.wallet.address, this.wallet.sk, payload),
    };
  }

  getChainInfo({ context, extraParams }, info) {
    if (info) {
      return this._isValidChainInfo(info) ? info : null;
    }

    if (typeof this.chainInfo === 'function') {
      return this.chainInfo({ context, extraParams });
    }

    return this.chainInfo;
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
        const { iss, requestedClaims } = await this._verify(data, 'userPk', 'userInfo', locale, enforceTimestamp);

        resolve({
          token: data.token,
          userDid: toAddress(iss),
          userPk: data.userPk,
          claims: requestedClaims,
        });

        debug('verify.context', { userPk: data.userPk, userDid: toAddress(iss) });
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
          })
        : claim;

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
        { conn: chainInfo ? chainInfo.id : this.chainInfo.id }
      );

      return {
        type: 'signature',
        description,
        typeUrl: 'fg:t:transaction',
        origin: toBase58(txBuffer),
        method: 'sha3',
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
        method: 'sha3',
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
      method: 'sha3',
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

  _validateAppInfo(appInfo, wallet) {
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

    if (!appInfo.link) {
      // eslint-disable-next-line no-console
      console.warn('It\'s recommended that you set appInfo.link to allow users to return to your dapp easily.'); // prettier-ignore
    }

    if (!appInfo.path) {
      appInfo.path = 'https://abtwallet.io/i/';
    }

    if (!appInfo.publisher) {
      appInfo.publisher = `did:abt:${wallet.address}`;
    }

    return appInfo;
  }

  _validateChainInfo(chainInfo) {
    if (typeof x === 'function') {
      return true;
    }

    if (!chainInfo) {
      throw new Error('WalletAuthenticator cannot work without chainInfo');
    }
    if (!chainInfo.host) {
      throw new Error('WalletAuthenticator cannot work without chainInfo.host');
    }
    if (!chainInfo.id) {
      throw new Error('WalletAuthenticator cannot work without chainInfo.id');
    }

    return chainInfo;
  }

  _isValidChainInfo(x) {
    return x && x.id && x.host;
  }
}

module.exports = WalletAuthenticator;
