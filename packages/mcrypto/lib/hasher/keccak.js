const sha3 = require('js-sha3');
const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');

class KeccakHasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `hash${x}`;
      const hasher = data => sha3[`keccak${x}`](data);
      const hashFn = (data, round) => {
        const input = isHexStrict(data) ? hexToBytes(data) : data;
        if (round === 1) {
          return hasher(input);
        }

        return hashFn(hasher(input), round - 1);
      };

      this[name] = (data, round = 1) => `0x${hashFn(data, round)}`;
    });
  }
}

module.exports = new KeccakHasher();
