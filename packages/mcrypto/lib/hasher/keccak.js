const sha3 = require('js-sha3');
const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');

class KeccakHasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `sha${x}`;
      const hasher = data => sha3[`keccak${x}`](data);
      const fn = (data, round = 1) => {
        const input = isHexStrict(data) ? hexToBytes(data) : data;
        if (round === 1) {
          return hasher(input);
        }

        return fn(hasher(input), round - 1);
      };

      this[name] = fn;
    });
  }
}

module.exports = new KeccakHasher();
