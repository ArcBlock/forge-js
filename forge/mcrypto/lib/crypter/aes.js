/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable global-require */
const AES = require('crypto-js/aes');

const encoders = {
  latin1: require('crypto-js/enc-latin1'),
  utf8: require('crypto-js/enc-utf8'),
  hex: require('crypto-js/enc-hex'),
  utf16: require('crypto-js/enc-utf16'),
  base64: require('crypto-js/enc-base64'),
};

const Crypter = require('../protocols/crypter');

// AES-CBC-256
class AesCrypter extends Crypter {
  constructor() {
    super();
  }

  encrypt(message, secret) {
    const text = typeof message === 'string' ? message : JSON.stringify(message);
    return AES.encrypt(text, secret).toString();
  }

  decrypt(cipher, secret, outputEncoding = 'utf8') {
    return AES.decrypt(cipher, secret).toString(encoders[outputEncoding]);
  }
}

module.exports = new AesCrypter();
