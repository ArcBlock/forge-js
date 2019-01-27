const sha3 = require('js-sha3');

class Sha3Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `sha${x}`;
      const hasher = sha3[`sha3_${x}`];
      const fn = (data, round = 1, outputEncoding = 'hex') => {
        if (round === 1) {
          // TODO: outputEncoding other than hex
          return hasher(data).toString();
        }

        return fn(hasher(data), outputEncoding, round - 1);
      };

      this[name] = fn;
    });
  }
}

module.exports = new Sha3Hasher();
