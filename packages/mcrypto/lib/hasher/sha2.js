/* eslint-disable global-require */
const { toUint8Array } = require('@arcblock/forge-util');
const encode = require('../encode');

const hashFns = {
  sha224: require('hash.js/lib/hash/sha/224'),
  sha256: require('hash.js/lib/hash/sha/256'),
  sha384: require('hash.js/lib/hash/sha/384'),
  sha512: require('hash.js/lib/hash/sha/512'),
};

/**
 * Sha2 support with different hash length
 *
 * @class
 */
class Sha2Hasher {
  constructor() {
    [224, 256, 384, 512].forEach(x => {
      const name = `hash${x}`;
      const hasher = hashFns[`sha${x}`];
      const hashFn = (input, round) => {
        if (round === 1) {
          return `0x${hasher()
            .update(input)
            .digest('hex')}`;
        }

        return hashFn(hashFn(input, 1), round - 1);
      };

      this[name] = (data, round = 2, encoding = 'hex') => {
        let input = data;
        try {
          input = toUint8Array(data, true);
        } catch (err) {
          // Do nothing
        }
        const res = hashFn(input, round);
        return encode(res, encoding);
      };
    });
  }
}

/**
 * Do hash with length of 224
 *
 * @function
 * @name Sha2Hasher#hash224
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha2Hasher
 */

/**
 * Do hash with length of 256
 *
 * @function
 * @name Sha2Hasher#hash256
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha2Hasher
 */

/**
 * Do hash with length of 384
 *
 * @function
 * @name Sha2Hasher#hash384
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha2Hasher
 */

/**
 * Do hash with length of 512
 *
 * @function
 * @name Sha2Hasher#hash512
 * @param {hex|buffer|base58|Uint8Array|string} input - data to hash
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @param {string} [encoding="hex"] - output encoding
 * @returns {string} depends on encoding param, hex by default
 * @memberof Sha2Hasher
 */
module.exports = new Sha2Hasher();
