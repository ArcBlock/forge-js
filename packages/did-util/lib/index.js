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
const { fromHash, toDid } = require('@arcblock/did');
const { createMessage } = require('@arcblock/forge-message/lite');
const { transactions } = require('@arcblock/forge-proto/lite');

/**
 * Create an asset address
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @returns {string} asset address without `did:abt:` prefix
 */
function toAssetAddress(itx) {
  return toItxAddress(itx, 'CreateAssetTx');
}

/**
 * Create an asset did
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @returns {string} asset address without `did:abt:` prefix
 */
function toAssetDid(itx) {
  return toDid(toAssetAddress(itx));
}

/**
 * Create an itx address
 *
 * @public
 * @static
 * @param {object} itx - an object of forge supported itx
 * @returns {string} itx address without `did:abt:` prefix
 */
function toItxAddress(itx, type) {
  if (transactions.indexOf(type) === -1) {
    throw new Error(`Unsupported itx type ${type}`);
  }

  const message = createMessage(type, itx);
  const itxBytes = message.serializeBinary();
  const hash = Hasher.SHA3.hash256(itxBytes);
  const address = fromHash(hash, types.RoleType.ROLE_ASSET);
  return address;
}

/**
 * Create an itx did
 *
 * @public
 * @static
 * @param {object} itx - an object of forge supported itx
 * @returns {string} itx address without `did:abt:` prefix
 */
function toItxDid(itx, type) {
  return toDid(toItxAddress(itx, type));
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
  const hash = Hasher.SHA3.hash256(buffer);
  return fromHash(hash, types.RoleType.ROLE_STAKE);
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
function toStakeDid(sender, receiver) {
  toDid(toStakeAddress(sender, receiver));
}

module.exports = {
  toAssetAddress,
  toAssetDid,
  toItxAddress,
  toItxDid,
  toStakeAddress,
  toStakeDid,
};
