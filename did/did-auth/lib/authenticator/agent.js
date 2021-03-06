/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
const qs = require('querystring');
const isEqual = require('lodash/isEqual');
const { toBase58 } = require('@arcblock/forge-util');
const { toDid } = require('@arcblock/did');

const Jwt = require('../jwt');
const BaseAuthenticator = require('./base');
const WalletAuthenticator = require('./wallet');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:wallet`);

const { DEFAULT_CHAIN_INFO } = BaseAuthenticator;

/**
 * Authenticator that can be used to sign did-auth payment on-behalf of another application
 * Can be used to build centralized platform services that aims to ease the life of developers
 *
 * @class AgentAuthenticator
 * @extends {WalletAuthenticator}
 */
class AgentAuthenticator extends WalletAuthenticator {
  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo
   *
   * @method
   * @param {object} params
   * @param {string} params.context.token - action token
   * @param {string} params.context.userDid - decoded from req.query, base58
   * @param {string} params.context.userPk - decoded from req.query, base58
   * @param {string} params.context.walletOS - wallet os from user-agent
   * @param {string} params.context.walletVersion - wallet version from user-agent
   * @param {string} params.context.sessionDid - did of logged-in user
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.appInfo - which application authorized me to sign
   * @param {object} params.authorizer - application pk and did
   * @param {object} params.verifiableClaims - what did the application authorized me to request from user
   * @param {object} params.extraParams - extra query params and locale
   * @returns {object} { appPk, authInfo }
   */
  async sign({
    token = '',
    context,
    claims,
    appInfo,
    authorizer,
    verifiableClaims = [],
    pathname = '',
    baseUrl = '',
    extraParams = {},
    request,
  }) {
    this._verifyClaims(verifiableClaims);
    this._verifyAuthorizer(authorizer);
    this._validateAppInfo(appInfo, { address: authorizer.did });

    const claimsInfo = await this.genRequestedClaims({
      claims,
      context: Object.assign({ baseUrl, request }, context),
      extraParams,
    });
    const infoParams = Object.assign({ baseUrl, request }, context, extraParams);

    // FIXME: this maybe buggy if user provided multiple claims
    const tmp = claimsInfo.find(x => isEqual(this._isValidChainInfo(x.chainInfo), DEFAULT_CHAIN_INFO) === false);

    const wallet = await this.getWalletInfo(infoParams);
    if (!appInfo.publisher) {
      appInfo.publisher = toDid(authorizer.did);
    }

    const chainInfo = await this.getChainInfo(infoParams, tmp ? tmp.chainInfo : null);

    const payload = {
      action: 'responseAuth',
      appInfo,
      iss: toDid(authorizer.did),
      agentDid: toDid(wallet.address),
      chainInfo,
      verifiableClaims,
      requestedClaims: claimsInfo.map(x => {
        delete x.chainInfo;
        return x;
      }),
      url: `${this.baseUrl || baseUrl}${pathname}?${qs.stringify(
        Object.assign({ [this.tokenKey]: token }, extraParams)
      )}`,
    };

    const signed = {
      appPk: toBase58(authorizer.pk),
      agentPk: toBase58(wallet.pk),
      authInfo: Jwt.sign(wallet.address, wallet.sk, payload),
    };

    debug('responseAuth.sign', { context, extraParams, payload, signed });
    return signed;
  }

  _verifyClaims(claims) {
    if (!Array.isArray(claims) || !claims.length) {
      throw new Error('Non-empty verified claims must be provided for agent to sign');
    }
  }

  _verifyAuthorizer(authorizer) {
    if (!authorizer || !authorizer.pk || !authorizer.did) {
      throw new Error('Valid authorizer did and pk must be provided for agent to sign');
    }
  }
}

module.exports = AgentAuthenticator;
