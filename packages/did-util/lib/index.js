/**
 * @fileOverview Utility functions to calculate various kinds of did, such as asset address
 *
 * @module @arcblock/did-util
 * @requires @arcblock/mcrypto
 * @requires @arcblock/did
 * @requires @arcblock/forge-util
 * @requires @arcblock/forge-wallet
 * @requires @arcblock/forge-message
 */
const { types, Hasher } = require('@arcblock/mcrypto');
const { WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');
const { fromPublicKey, toTypeInfo } = require('@arcblock/did');
const { createMessage } = require('@arcblock/forge-message/lite');

/**
 * Create an asset address, eg: the did of an asset
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @param {string} sender - creator address, also the initial owner of the asset
 * @returns {string} asset address without `did:abt:` prefix
 */
function toAssetAddress(itx, sender) {
  const walletType = toTypeInfo(sender);
  walletType.role = types.RoleType.ROLE_ASSET;

  itx.address = '';

  const addressBuffer = Buffer.from(sender);
  const message = createMessage('CreateAssetTx', itx);
  const itxBytes = message.serializeBinary();
  const itxSha3Buffer = Buffer.from(hexToBytes(Hasher.SHA3.hash256(itxBytes)));
  const buffer = Buffer.concat([addressBuffer, itxSha3Buffer]);

  const address = fromPublicKey(buffer, WalletType(walletType));
  return address;
}

/**
 * Generate an stake address, eg: the did of the stake
 *
 * @public
 * @static
 * @param {string} sender - sender address
 * @param {string} receiver - receiver address
 * @returns {string} stake address without `did:abt:` prefix
 */
function toStakeAddress(sender, receiver) {
  const senderBuffer = Buffer.from(sender);
  const receiverBuffer = Buffer.from(receiver);

  const buffer = Buffer.concat(
    sender < receiver ? [senderBuffer, receiverBuffer] : [receiverBuffer, senderBuffer]
  );
  const walletType = WalletType({
    role: types.RoleType.ROLE_STAKE,
    pk: types.KeyType.ED25519,
    hash: types.HashType.SHA3,
  });

  return fromPublicKey(buffer, walletType);
}

module.exports = {
  toAssetAddress,
  toStakeAddress,
};
