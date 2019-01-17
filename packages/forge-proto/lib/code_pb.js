/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.forge_abi.StatusCode', null, global);
/**
 * @enum {number}
 */
proto.forge_abi.StatusCode = {
  OK: 0,
  INVALID_NONCE: 1,
  INVALID_SIGNATURE: 2,
  INVALID_SENDER_STATE: 3,
  INVALID_RECEIVER_STATE: 4,
  INSUFFICIENT_DATA: 5,
  INSUFFICIENT_FUND: 6,
  INVALID_OWNER: 7,
  INVALID_TX: 8,
  UNSUPPORTED_TX: 9,
  INVALID_MONIKER: 16,
  INVALID_PASSPHRASE: 17,
  INVALID_CHANNEL: 18,
  INVALID_CHANNEL_WAITING_DATA: 19,
  INVALID_MULTISIG: 20,
  INVALID_WALLET: 21,
  INVALID_CHAIN_ID: 22,
  NEED_CONFIRMATION: 23,
  CONSENSUS_RPC_ERROR: 24,
  STORAGE_RPC_ERROR: 25,
  NOENT: 26,
  ACCOUNT_MIGRATED: 27,
  CHANNEL_IS_FULL: 28,
  REVOKED_TX: 29,
  UNSUPPORTED_STAKE: 30,
  INSUFFICIENT_STAKE: 31,
  INTERNAL: 500,
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
