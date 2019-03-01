const sha3 = require('js-sha3');
const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');

class Sha3Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `hash${x}`;
      const hasher = sha3[`sha3_${x}`];
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

module.exports = new Sha3Hasher();
