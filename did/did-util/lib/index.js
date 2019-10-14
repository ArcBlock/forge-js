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
  return toItxAddress(itx, 'CreateAssetTx', types.RoleType.ROLE_ASSET);
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
 * @param {string} type - itx type string
 * @param {enum} [role=types.RoleType.ROLE_TX] - role type
 * @returns {string} itx address without `did:abt:` prefix
 */
function toItxAddress(itx, type, role = types.RoleType.ROLE_TX) {
  if (transactions.indexOf(type) === -1) {
    throw new Error(`Unsupported itx type ${type}`);
  }

  const message = createMessage(type, itx);
  // console.log({ message: message.toObject(), itx });
  const itxBytes = message.serializeBinary();
  const hash = Hasher.SHA3.hash256(itxBytes);
  const address = fromHash(hash, role);
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
  const buffer = Buffer.concat([senderBuffer, receiverBuffer]);
  const hash = Hasher.SHA3.hash256(buffer);
  return fromHash(hash, types.RoleType.ROLE_STAKE);
}

/**
 * Generate an delegate address, eg: the did of the delegation
 *
 * @public
 * @static
 * @param {string} addr1 - delegator address
 * @param {string} addr2 - delegatee address
 * @returns {string} delegation address that can be used to retrieve delegation state
 */
function toDelegateAddress(addr1, addr2) {
  const addr1Buffer = Buffer.from(addr1);
  const addr2Buffer = Buffer.from(addr2);
  const buffer = Buffer.concat([addr1Buffer, addr2Buffer]);
  const hash = Hasher.SHA3.hash256(buffer);
  return fromHash(hash, types.RoleType.ROLE_DELEGATE);
}

/**
 * Generate a tether address from the deposit tether tx hash
 *
 * @public
 * @static
 * @param {string} hash - DepositTetherTx hash
 * @returns {string} stake address without `did:abt:` prefix
 */
function toTetherAddress(hash) {
  return fromHash(hash, types.RoleType.ROLE_TETHER);
}

/**
 * Generate a swap address from the setup swap tx hash
 *
 * @public
 * @static
 * @param {string} hash - SetupSwapTx hash
 * @returns {string} swap address without `did:abt:` prefix
 */
function toSwapAddress(hash) {
  return fromHash(hash, types.RoleType.ROLE_SWAP);
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
  toDelegateAddress,
  toStakeDid,
  toTetherAddress,
  toSwapAddress,
};
