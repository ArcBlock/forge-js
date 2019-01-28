const EC = require('elliptic').ec;
const Signer = require('../protocols/signer');

const secp256k1 = new EC('secp256k1');

class Secp256k1Signer extends Signer {
  constructor() {
    super();
  }

  genKeyPair() {
    return secp256k1.genKeyPair();
  }

  getPublicKey(privateKey, compressed = true) {
    return secp256k1
      .keyFromPrivate(privateKey, 'hex')
      .getPublic(compressed)
      .encode('hex');
  }

  sign(data, privateKey) {
    return secp256k1.keyFromPrivate(privateKey, 'hex').sign(data);
  }

  verify(hash, signature, publicKey) {
    return secp256k1.keyFromPublic(publicKey, 'hex').verify(hash, signature);
  }
}

module.exports = new Secp256k1Signer();
