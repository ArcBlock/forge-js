/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
const { Secp256k1Signer } = require('./secp256k1');

/**
 * Signer implementation for secp256k1, based on `elliptic`, and ethereum compatible
 *
 * @class EthereumSigner
 */
class EthereumSigner extends Secp256k1Signer {
  constructor() {
    super();
    this.pkHasFormatPrefix = false;
  }
}

module.exports = new EthereumSigner();
module.exports.EthereumSigner = EthereumSigner;
