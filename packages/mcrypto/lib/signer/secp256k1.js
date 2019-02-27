const EC = require('elliptic').ec;
const Signer = require('../protocols/signer');

const secp256k1 = new EC('secp256k1');

class Secp256k1Signer extends Signer {
  constructor() {
    super();
  }

  genKeyPair(compressed = false, encoding = 'hex') {
    const keyPair = secp256k1.genKeyPair();
    const secretKey = keyPair.getPrivate(encoding);
    const publicKey = keyPair.getPublic(compressed, encoding);
    return { secretKey, publicKey };
  }

  getPublicKey(secretKey, compressed = false, encoding = 'hex') {
    return secp256k1.keyFromPrivate(secretKey, encoding).getPublic(compressed, encoding);
  }

  sign(message, privateKey, encoding = 'hex') {
    return secp256k1
      .keyFromPrivate(privateKey, encoding)
      .sign(message)
      .toDER(encoding);
  }

  verify(message, signature, publicKey, encoding = 'hex') {
    return secp256k1.keyFromPublic(publicKey, encoding).verify(message, signature);
  }
}

module.exports = new Secp256k1Signer();
