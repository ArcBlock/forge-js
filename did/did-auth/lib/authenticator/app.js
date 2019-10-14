/* eslint-disable object-curly-newline */
// Inter application did-auth process
const { toDid } = require('@arcblock/did');
const { toHex, toBase58 } = require('@arcblock/forge-util');
const JWT = require('../jwt');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:app`);

module.exports = class AppAuthenticator {
  /**
   * Creates an instance of DID Authenticator.
   *
   * @public
   * @param {Wallet} wallet - wallet instance {@see @arcblock/forge-wallet}
   */
  constructor(wallet) {
    if (typeof wallet.sk === 'undefined') {
      throw new Error('DID Authenticator cannot work without secretKey');
    }
    if (typeof wallet.pk === 'undefined') {
      throw new Error('DID Authenticator cannot work without publicKey');
    }

    this.wallet = wallet;
  }

  /**
   * Generate and sign a jwt token, used to inter-application-communication
   *
   * @public
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
   * @param {object} data
   * @param {string} locale
   * @returns Promise<>
   */
  verify(data, locale = 'en') {
    return new Promise((resolve, reject) => {
      debug('verify', data, locale);

      const errors = {
        pkMissing: {
          en: 'appPk is required to complete auth',
          zh: 'appPk 参数缺失',
        },
        tokenMissing: {
          en: 'appInfo is required to complete auth',
          zh: 'JWT Token 参数缺失',
        },
        pkFormat: {
          en: 'appPk should be either base58 or base16 format',
          zh: 'appPk 无法解析',
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

      const { appPk, appInfo } = data;
      if (!appPk) {
        return reject(new Error(errors.pkMissing[locale]));
      }
      if (!appInfo) {
        return reject(new Error(errors.tokenMissing[locale]));
      }

      const appPkHex = toHex(appPk);
      if (!appPkHex) {
        return reject(new Error(errors.pkFormat[locale]));
      }

      const isValid = JWT.verify(appInfo, appPkHex);
      if (!isValid) {
        // NOTE: since the token can be invalid because of wallet-app clock not in sync
        // We should tell the user that if it's caused by clock
        const error = JWT.verify(appInfo, appPkHex, 0, false)
          ? errors.timeInvalid[locale]
          : errors.tokenInvalid[locale];
        return reject(new Error(error));
      }

      return resolve(JWT.decode(appInfo));
    });
  }
};
