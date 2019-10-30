const ForgeSDK = require('@arcblock/forge-sdk');

module.exports = class AssetIssuer {
  /**
   * Creates an instance of AssetIssuer.
   *
   * @param {object} attributes
   * @param {WalletObject} attributes.wallet - wallet
   * @param {string} attributes.name - issuer name
   * @param {string} attributes.url - issuer website
   * @param {string} attributes.logo -  issuer logo image url or logo base64
   */
  constructor({ wallet, name, url, logo }) {
    this.wallet = wallet;
    this.attributes = { name, url, logo };
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
