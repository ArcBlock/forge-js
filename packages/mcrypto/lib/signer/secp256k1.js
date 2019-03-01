const EC = require('elliptic').ec;
const { isHexStrict } = require('@arcblock/forge-util');
const Signer = require('../protocols/signer');

const secp256k1 = new EC('secp256k1');

class Secp256k1Signer extends Signer {
  constructor() {
    super();
  }

  strip0x(input) {
    return isHexStrict(input) ? input.replace(/^0x/i, '') : input;
  }

  genKeyPair(compressed = false, encoding = 'hex') {
    const keyPair = secp256k1.genKeyPair();
    const secretKey = keyPair.getPrivate(encoding);
    const publicKey = keyPair.getPublic(compressed, encoding);
    return { secretKey, publicKey };
  }

  getPublicKey(secretKey, compressed = false, encoding = 'hex') {
    return secp256k1
      .keyFromPrivate(this.strip0x(secretKey), encoding)
      .getPublic(compressed, encoding);
  }

  sign(message, privateKey, encoding = 'hex') {
    return secp256k1
      .keyFromPrivate(this.strip0x(privateKey), encoding)
      .sign(this.strip0x(message))
      .toDER(encoding);
  }

  verify(message, signature, publicKey, encoding = 'hex') {
    return secp256k1
      .keyFromPublic(this.strip0x(publicKey), encoding)
      .verify(this.strip0x(message), signature);
  }
}

module.exports = new Secp256k1Signer();
