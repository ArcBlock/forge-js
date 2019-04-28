/**
 * @fileOverview hasher implementation for sha3
 * @module @arcblock/mcrypto/hasher/sha3
 * @requires @arcblock/forge-util
 * @requires js-sha3
 */
const sha3 = require('js-sha3');
const { isHexStrict, hexToBytes } = require('@arcblock/forge-util');

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

  /**
   * Do hash with length of 224
   *
   * @function
   * @name hash224
   * @param {string} input - data to hash in hex format
   * @param {number} round - how many round to do the hash, larger = safer = slower
   * @returns {string} hash in hex format
   * @memberof Sha3Hasher
   */

  /**
   * Do hash with length of 256
   *
   * @function
   * @name hash256
   * @param {string} input - data to hash in hex format
   * @param {number} round - how many round to do the hash, larger = safer = slower
   * @returns {string} hash in hex format
   * @memberof Sha3Hasher
   */

  /**
   * Do hash with length of 384
   *
   * @function
   * @name hash384
   * @param {string} input - data to hash in hex format
   * @param {number} round - how many round to do the hash, larger = safer = slower
   * @returns {string} hash in hex format
   * @memberof Sha3Hasher
   */

  /**
   * Do hash with length of 512
   *
   * @function
   * @name hash512
   * @param {string} input - data to hash in hex format
   * @param {number} round - how many round to do the hash, larger = safer = slower
   * @returns {string} hash in hex format
   * @memberof Sha3Hasher
   */
}

module.exports = new Sha3Hasher();
