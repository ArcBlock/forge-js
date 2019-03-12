const EC = require('elliptic').ec;
const BN = require('bn.js');
const randomBytes = require('randombytes');
const { isHexStrict, bytesToHex } = require('@arcblock/forge-util');
const Signer = require('../protocols/signer');

const secp256k1 = new EC('secp256k1');
const compressed = false;
const encoding = 'hex';

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

  genKeyPair() {
    let sk = null;
    do {
      sk = Uint8Array.from(randomBytes(32));
    } while (!this.isValidSK(sk));
    const pk = this.getPublicKey(bytesToHex(sk));
    return { secretKey: bytesToHex(sk), publicKey: pk };
  }

  getPublicKey(sk) {
    const pk = secp256k1.keyFromPrivate(this.strip0x(sk), encoding).getPublic(compressed, encoding);
    return `0x${pk}`;
  }

  sign(message, sk) {
    const signature = secp256k1
      .keyFromPrivate(this.strip0x(sk), encoding)
      .sign(this.strip0x(message))
      .toDER(encoding);
    return `0x${signature}`;
  }

  verify(message, signature, pk) {
    return secp256k1
      .keyFromPublic(this.strip0x(pk), encoding)
      .verify(this.strip0x(message), this.strip0x(signature));
  }
}

module.exports = new Secp256k1Signer();
