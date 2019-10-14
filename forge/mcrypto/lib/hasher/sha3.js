const sha3 = require('js-sha3');
const { toUint8Array } = require('@arcblock/forge-util');
const encode = require('../encode');

/**
 * Sha3 support with different hash length
 *
 * @class Sha3Hasher
 */
class Sha3Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `hash${x}`;
      const hasher = sha3[`sha3_${x}`];
      const hashFn = (input, round) => {
        if (round === 1) {
          return hasher(input);
        }

        return hashFn(hasher(input), round - 1);
      };

      this[name] = (data, round = 1, encoding = 'hex') => {
        let input = data;
        try {
          input = toUint8Array(data);
        } catch (err) {
          // Do nothing
        }
        const res = hashFn(input, round);
        return encode(`0x${res}`, encoding);
      };
    });
  }
}

/**
 * Do hash with length of 224
 *
 * @function
 * @name Sha3Hasher#hash224
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=1] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha3Hasher
 */

/**
 * Do hash with length of 256
 *
 * @function
 * @name Sha3Hasher#hash256
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=1] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha3Hasher
 */

/**
 * Do hash with length of 384
 *
 * @function
 * @name Sha3Hasher#hash384
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=1] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha3Hasher
 */

/**
 * Do hash with length of 512
 *
 * @function
 * @name Sha3Hasher#hash512
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=1] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha3Hasher
 */

module.exports = new Sha3Hasher();
