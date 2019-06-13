/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
const EC = require('elliptic').ec;
const BN = require('bn.js');
const randomBytes = require('randombytes');
const { isHexStrict, toHex } = require('@arcblock/forge-util');
const Signer = require('../protocols/signer');

const secp256k1 = new EC('secp256k1');
const compressed = false;
const encode = require('../encode');

/**
 * Signer implementation for secp256k1, based on `elliptic`
 *
 * @class Secp256k1Signer
 */
class Secp256k1Signer extends Signer {
  constructor() {
    super();
  }

  strip0x(input) {
    return isHexStrict(input) ? input.replace(/^0x/i, '') : input;
  }

  isValidSK(sk) {
    const bn = new BN(sk);
    return bn.cmp(secp256k1.curve.n) < 0 && !bn.isZero();
  }

  /**
   * @public
   * @typedef KeyPair
   * @prop {string} publicKey - publicKey in hex format
   * @prop {string} secretKey - secretKey in hex format
   * @memberof Secp256k1Signer
   */

  /**
   * Generate random secret/public key pair
   *
   * @param {string} [encoding='hex']
   * @returns {KeyPair}
   * @memberof Secp256k1Signer
   */
  genKeyPair(encoding = 'hex') {
    let sk = null;
    do {
      sk = Uint8Array.from(randomBytes(32));
    } while (!this.isValidSK(sk));
    const pk = this.getPublicKey(toHex(sk));
    return { secretKey: encode(sk, encoding), publicKey: encode(pk, encoding) };
  }

  /**
   * Get publicKey from secretKey
   *
   * @param {string} sk - must be a hex encoded string
   * @param {string} [encoding='hex']
   * @returns {string} hex encoded publicKey
   * @memberof Secp256k1Signer
   */
  getPublicKey(sk, encoding = 'hex') {
    const pk = secp256k1
      .keyFromPrivate(this.strip0x(toHex(sk)), 'hex')
      .getPublic(compressed, 'hex');
    return encode(`0x${pk}`, encoding);
  }

  /**
   * Sign a message and get the signature hex
   *
   * @param {string} message
   * @param {string} sk
   * @param {string} [encoding='hex']
   * @returns {string} hex encoded signature
   * @memberof Secp256k1Signer
   */
  sign(message, sk, encoding = 'hex') {
    const signature = secp256k1
      .keyFromPrivate(this.strip0x(sk), 'hex')
      .sign(this.strip0x(message))
      .toDER('hex');
    return encode(`0x${signature}`, encoding);
  }

  /**
   * Verify if a signature is valid
   *
   * @param {string} message
   * @param {string} signature
   * @param {string} pk
   * @returns {bool}
   */
  verify(message, signature, pk) {
    return secp256k1
      .keyFromPublic(this.strip0x(pk), 'hex')
      .verify(this.strip0x(message), this.strip0x(signature));
  }
}

module.exports = new Secp256k1Signer();
