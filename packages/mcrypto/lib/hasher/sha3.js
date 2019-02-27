const sha3 = require('js-sha3');
const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');

class Sha3Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `sha${x}`;
      const hasher = sha3[`sha3_${x}`];
      const fn = (data, round = 1) => {
        if (round === 1) {
          return hasher(isHexStrict(data) ? hexToBytes(data) : data);
        }

        return fn(hasher(data), round - 1);
      };

      this[name] = fn;
    });
  }
}

module.exports = new Sha3Hasher();
