const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');
const hashFns = {
  sha224: require('crypto-js/sha224'),
  sha256: require('crypto-js/sha256'),
  sha384: require('crypto-js/sha384'),
  sha512: require('crypto-js/sha512'),
};
const encoders = {
  utf8: require('crypto-js/enc-utf8'),
  hex: require('crypto-js/enc-hex'),
  base64: require('crypto-js/enc-base64'),
};

class Sha2Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `hash${x}`;
      const hasher = hashFns[`sha${x}`];
      const fn = (data, round = 2, outputEncoding = 'hex') => {
        const input = isHexStrict(data) ? hexToBytes(data) : data;
        if (round === 1) {
          return hasher(input).toString(encoders[outputEncoding]);
        }

        return fn(hasher(input), round - 1, outputEncoding);
      };

      this[name] = fn;
    });
  }
}

module.exports = new Sha2Hasher();
