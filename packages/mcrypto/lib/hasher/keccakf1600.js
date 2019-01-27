// see issue: https://github.com/brix/crypto-js/issues/173
const sha3 = require('crypto-js/sha3');
const encoders = {
  latin1: require('crypto-js/enc-latin1'),
  utf8: require('crypto-js/enc-utf8'),
  hex: require('crypto-js/enc-hex'),
  utf16: require('crypto-js/enc-utf16'),
  base64: require('crypto-js/enc-base64'),
};

class Kecakf1600Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `sha${x}`;
      const hasher = data => sha3(data, { outputLength: x });
      const fn = (data, round = 1, outputEncoding = 'hex') => {
        if (round === 1) {
          return hasher(data).toString(encoders[outputEncoding]);
        }

        return fn(hasher(data), outputEncoding, round - 1);
      };

      this[name] = fn;
    });
  }
}

module.exports = new Kecakf1600Hasher();
