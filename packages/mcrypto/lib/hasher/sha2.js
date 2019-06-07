/* eslint-disable global-require */
const { isHexStrict, stripHexPrefix } = require('@arcblock/forge-util');

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
      const hashFn = (data, round) => {
        if (round === 1) {
          const input = isHexStrict(data) ? Buffer.from(stripHexPrefix(data), 'hex') : data;
          return `0x${hasher()
            .update(input)
            .digest('hex')}`;
        }

        return hashFn(hashFn(data, 1), round - 1);
      };

      this[name] = (data, round = 2) => hashFn(data, round);
    });
  }
}

/**
 * Do hash with length of 224
 *
 * @function
 * @name Sha2Hasher#hash224
 * @param {string} input - data to hash in hex format
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @returns {string} hash in hex format
 * @memberof Sha2Hasher
 */

/**
 * Do hash with length of 256
 *
 * @function
 * @name Sha2Hasher#hash256
 * @param {string} input - data to hash in hex format
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @returns {string} hash in hex format
 * @memberof Sha2Hasher
 */

/**
 * Do hash with length of 384
 *
 * @function
 * @name Sha2Hasher#hash384
 * @param {string} input - data to hash in hex format
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @returns {string} hash in hex format
 * @memberof Sha2Hasher
 */

/**
 * Do hash with length of 512
 *
 * @function
 * @name Sha2Hasher#hash512
 * @param {string} input - data to hash in hex format
 * @param {number} [round=2] - how many round to do the hash, larger = safer = slower
 * @returns {string} hash in hex format
 * @memberof Sha2Hasher
 */
module.exports = new Sha2Hasher();
