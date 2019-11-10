/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
const qs = require('querystring');
const { toBase58 } = require('@arcblock/forge-util');
const { toDid } = require('@arcblock/did');

const Jwt = require('../jwt');
const WalletAuthenticator = require('./wallet');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:wallet`);

class AgentAuthenticator extends WalletAuthenticator {
  /**
   * Sign a auth response that returned to wallet: tell the wallet the appInfo/chainInfo
   *
   * @method
   * @param {object} params
   * @param {string} params.token - action token
   * @param {string} params.userDid - decoded from req.query, base58
   * @param {string} params.userPk - decoded from req.query, base58
   * @param {object} params.claims - info required by application to complete the auth
   * @param {object} params.appInfo - which application authorized me to sign
   * @param {object} params.authorizer - application pk and did
   * @param {object} params.verifiableClaims - what did the application authorized me to request from user
   * @param {object} params.extraParams - extra query params and locale
   * @returns {object} { appPk, authInfo }
   */
  async sign({
    token = '',
    userDid,
    userPk,
    claims,
    appInfo,
    authorizer,
    verifiableClaims = [],
    pathname = '',
    extraParams = {},
  }) {
    this._verifyClaims(verifiableClaims);
    this._verifyAuthorizer(authorizer);
    this._validateAppInfo(appInfo, { address: authorizer.did });

    const claimsInfo = await this.genRequestedClaims({ claims, userDid, userPk, extraParams });
    // FIXME: this maybe buggy if user provided multiple claims
    const tmp = claimsInfo.find(x => this._isValidChainInfo(x.chainInfo));

    const payload = {
      status: 'ok',
      action: 'responseAuth',
      appInfo,
      iss: toDid(authorizer.did),
      agentPk: this.appPk,
      agentDid: this.wallet.address,
      chainInfo: tmp ? tmp.chainInfo : this.chainInfo,
      verifiableClaims,
      requestedClaims: claimsInfo.map(x => {
        delete x.chainInfo;
        return x;
      }),
      url: `${this.baseUrl}${pathname}?${qs.stringify(
        Object.assign({ [this.tokenKey]: token }, extraParams)
      )}`,
    };

    debug('responseAuth.sign', { token, userDid, payload, extraParams });
    return {
      appPk: toBase58(authorizer.pk),
      authInfo: Jwt.sign(this.wallet.address, this.wallet.sk, payload),
    };
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
