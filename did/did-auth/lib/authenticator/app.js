/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
// Inter application did-auth process
const { toDid } = require('@arcblock/did');
const { toBase58 } = require('@arcblock/forge-util');
const JWT = require('../jwt');
const BaseAuthenticator = require('./base');

class AppAuthenticator extends BaseAuthenticator {
  /**
   * Creates an instance of DID Authenticator.
   *
   * @class
   * @param {Wallet} wallet - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(wallet) {
    super();
    this.wallet = this._validateWallet(wallet);
    this.fieldPk = 'appPk';
    this.fieldInfo = 'authInfo';
  }

  /**
   * Generate and sign a jwt token, used to inter-application-communication
   *
   * @method
   * @param {object} payload - data to be included before signing
   * @returns {object} { appPk, appInfo }
   */
  sign(payload) {
    const { pk, sk, address } = this.wallet;
    return {
      appPk: toBase58(pk),
      appInfo: JWT.sign(toDid(address), sk, payload),
    };
  }

  /**
   * Verify a jwt token signed by another application, used for inter-application communication
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
        const decoded = await this._verify(data, 'appPk', 'authInfo', locale, enforceTimestamp);
        resolve(decoded);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = AppAuthenticator;
