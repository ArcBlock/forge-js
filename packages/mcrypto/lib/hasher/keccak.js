const sha3 = require('js-sha3');

class KeccakHasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `sha${x}`;
      const hasher = data => sha3[`keccak${x}`](data);
      const fn = (data, round = 1) => {
        if (round === 1) {
          return hasher(data);
        }

        return fn(hasher(data), round - 1);
      };

      this[name] = fn;
    });
  }
}

module.exports = new KeccakHasher();
