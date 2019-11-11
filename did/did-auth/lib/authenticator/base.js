const Jwt = require('../jwt');

// eslint-disable-next-line
const debug = require('debug')(`${require('../../package.json').name}:authenticator:base`);

class BaseAuthenticator {
  _validateWallet(wallet) {
    if (!wallet) {
      throw new Error('WalletAuthenticator cannot work without wallet');
    }
    if (!wallet.sk) {
      throw new Error('WalletAuthenticator cannot work without wallet.sk');
    }
    if (!wallet.pk) {
      throw new Error('WalletAuthenticator cannot work without wallet.pk');
    }
    if (!wallet.address) {
      throw new Error('WalletAuthenticator cannot work without wallet.address');
    }

    return wallet;
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
  _verify(data, fieldPk, fieldInfo, locale = 'en', enforceTimestamp = true) {
    return new Promise((resolve, reject) => {
      debug('verify', data, locale);

      const errors = {
        pkMissing: {
          en: `${fieldPk} is required to complete auth`,
          zh: `${fieldPk} 参数缺失`,
        },
        tokenMissing: {
          en: `${fieldInfo} is required to complete auth`,
          zh: 'JWT Token 参数缺失',
        },
        pkFormat: {
          en: `${fieldPk} should be either base58 or base16 format`,
          zh: `${fieldPk} 无法解析`,
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

      const pk = data[fieldPk];
      const info = data[fieldInfo];
      if (!pk) {
        return reject(new Error(errors.pkMissing[locale]));
      }
      if (!info) {
        return reject(new Error(errors.tokenMissing[locale]));
      }

      if (!pk) {
        return reject(new Error(errors.pkFormat[locale]));
      }

      const isValid = Jwt.verify(info, pk);
      if (!isValid) {
        // NOTE: since the token can be invalid because of wallet-app clock not in sync
        // We should tell the user that if it's caused by clock
        const isValidSig = Jwt.verify(info, pk, { tolerance: 0, enforceTimestamp: false });
        if (enforceTimestamp) {
          const error = isValidSig ? errors.timeInvalid[locale] : errors.tokenInvalid[locale];
          return reject(new Error(error));
        }
      }

      return resolve(Jwt.decode(info));
    });
  }
}

module.exports = BaseAuthenticator;
