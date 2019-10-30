const ForgeSDK = require('@arcblock/forge-sdk');

module.exports = class AssetRecipient {
  /**
   * Creates an instance of AssetRecipient.
   *
   * @param {object} attributes
   * @param {WalletObject} attributes.wallet - wallet
   * @param {string} attributes.name - recipient name
   * @param {string} attributes.location - recipient website
   */
  constructor({ wallet, name, location }) {
    this.wallet = wallet;
    this.attributes = { name, location };
  }

  toJSON() {
    return Object.assign(
      {
        did: this.wallet.toAddress(),
        pk: ForgeSDK.Util.toBase58(this.wallet.publicKey),
      },
      this.attributes
    );
  }
};
