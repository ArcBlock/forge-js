const hashFns = {
  sha224: require('crypto-js/sha224'),
  sha256: require('crypto-js/sha256'),
  sha384: require('crypto-js/sha384'),
  sha512: require('crypto-js/sha512'),
};
const encoders = {
  latin1: require('crypto-js/enc-latin1'),
  utf8: require('crypto-js/enc-utf8'),
  hex: require('crypto-js/enc-hex'),
  utf16: require('crypto-js/enc-utf16'),
  base64: require('crypto-js/enc-base64'),
};

class Sha2Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `sha${x}`;
      const hasher = hashFns[name];
      const fn = (data, outputEncoding = 'hex', round = 2) => {
        if (round === 1) {
          return hasher(data).toString(encoders[outputEncoding]);
        }

        return fn(hasher(data), outputEncoding, round - 1);
      };

      this[name] = fn;
    });
  }
}

module.exports = new Sha2Hasher();
