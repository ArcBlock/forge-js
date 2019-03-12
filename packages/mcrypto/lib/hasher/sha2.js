const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');
const hashFns = {
  sha224: require('crypto-js/sha224'),
  sha256: require('crypto-js/sha256'),
  sha384: require('crypto-js/sha384'),
  sha512: require('crypto-js/sha512'),
};
const hex = require('crypto-js/enc-hex');

class Sha2Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `hash${x}`;
      const hasher = hashFns[`sha${x}`];
      const hashFn = (data, round) => {
        const input = isHexStrict(data) ? hexToBytes(data) : data;
        if (round === 1) {
          return hasher(input).toString(hex);
        }

        return hashFn(hasher(input), round - 1);
      };

      this[name] = (data, round = 2) => `0x${hashFn(data, round)}`;
    });
  }
}

module.exports = new Sha2Hasher();
