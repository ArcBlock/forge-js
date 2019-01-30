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

goog.exportSymbol('proto.forge_abi.EncodingType', null, global);
goog.exportSymbol('proto.forge_abi.HashType', null, global);
goog.exportSymbol('proto.forge_abi.KeyType', null, global);
goog.exportSymbol('proto.forge_abi.StakeType', null, global);
goog.exportSymbol('proto.forge_abi.StateType', null, global);
goog.exportSymbol('proto.forge_abi.StatusCode', null, global);
goog.exportSymbol('proto.forge_abi.TopicType', null, global);
goog.exportSymbol('proto.forge_abi.UpgradeAction', null, global);
goog.exportSymbol('proto.forge_abi.UpgradeType', null, global);
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
  INVALID_STAKE_STATE: 32,
  EXPIRED_WALLET_TOKEN: 33,
  BANNED_UNSTAKE: 34,
  INVALID_ASSET: 35,
  INVALID_TX_SIZE: 36,
  FORBIDDEN: 403,
  INTERNAL: 500,
};

/**
 * @enum {number}
 */
proto.forge_abi.TopicType = {
  TRANSFER: 0,
  ACCOUNT_MIGRATE: 1,
  CONFIRM: 2,
  CREATE_ASSET: 3,
  EXCHANGE: 4,
  REVOKE: 5,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  UPDATE_ASSET: 20,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  STAKE: 24,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  CHANNEL_STATE: 131,
  FORGE_STATE: 132,
  STAKE_STATE: 133,
};

/**
 * @enum {number}
 */
proto.forge_abi.KeyType = {
  ED25519: 0,
  SECP256K1: 1,
};

/**
 * @enum {number}
 */
proto.forge_abi.HashType = {
  KECCAK: 0,
  SHA3: 1,
  SHA2: 2,
  KECCAK_384: 6,
  SHA3_384: 7,
  SHA2_384: 9,
  KECCAK_512: 13,
  SHA3_512: 14,
  SHA2_512: 15,
};

/**
 * @enum {number}
 */
proto.forge_abi.EncodingType = {
  BASE16: 0,
  BASE58: 1,
};

/**
 * @enum {number}
 */
proto.forge_abi.UpgradeType = {
  CONFIG_APP: 0,
  CONFIG_FORGE: 1,
  CONFIG_DFS: 2,
  CONFIG_CONSENSUS: 3,
  CONFIG_P2P: 4,
  EXE_APP: 10,
  EXE_FORGE: 11,
  EXE_DFS: 12,
  EXE_CONSENSUS: 13,
  EXE_P2P: 14,
};

/**
 * @enum {number}
 */
proto.forge_abi.UpgradeAction = {
  VERIFY: 0,
  BACKUP: 1,
  REPLACE: 2,
  RESTART_APP: 10,
  RESTART_DFS: 11,
  RESTART_CONSENSUS: 12,
  RESTART_P2P: 13,
  RESTART_FORGE: 14,
  ROLLBACK_IF_FAIL: 30,
  RESTART_ALL_IF_FAIL: 31,
  CRASH_IF_FAIL: 33,
  DROP_ADDRESS_BOOK: 50,
};

/**
 * @enum {number}
 */
proto.forge_abi.StateType = {
  STATE_ACCOUNT: 0,
  STATE_ASSET: 1,
  STATE_CHANNEL: 2,
  STATE_FORGE: 3,
  STATE_STAKE: 4,
};

/**
 * @enum {number}
 */
proto.forge_abi.StakeType = {
  STAKE_NODE: 0,
  STAKE_USER: 1,
  STAKE_ASSET: 2,
  STAKE_CHAIN: 3,
};

goog.object.extend(exports, proto.forge_abi);

module.exports = proto.forge_abi;
