// source: enum.proto
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
goog.exportSymbol('proto.forge_abi.ProtocolStatus', null, global);
goog.exportSymbol('proto.forge_abi.RoleType', null, global);
goog.exportSymbol('proto.forge_abi.StakeType', null, global);
goog.exportSymbol('proto.forge_abi.StateType', null, global);
goog.exportSymbol('proto.forge_abi.StatusCode', null, global);
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
  EXPIRED_TX: 10,
  TOO_MANY_TXS: 11,
  INVALID_LOCK_STATUS: 12,
  INVALID_REQUEST: 13,
  INVALID_MONIKER: 16,
  INVALID_PASSPHRASE: 17,
  INVALID_MULTISIG: 20,
  INVALID_WALLET: 21,
  INVALID_CHAIN_ID: 22,
  CONSENSUS_RPC_ERROR: 24,
  STORAGE_RPC_ERROR: 25,
  NOENT: 26,
  ACCOUNT_MIGRATED: 27,
  RPC_CONNECTION_ERROR: 28,
  UNSUPPORTED_STAKE: 30,
  INSUFFICIENT_STAKE: 31,
  INVALID_STAKE_STATE: 32,
  EXPIRED_WALLET_TOKEN: 33,
  BANNED_UNSTAKE: 34,
  INVALID_ASSET: 35,
  INVALID_TX_SIZE: 36,
  INVALID_SIGNER_STATE: 37,
  INVALID_FORGE_STATE: 38,
  EXPIRED_ASSET: 39,
  UNTRANSFERRABLE_ASSET: 40,
  READONLY_ASSET: 41,
  CONSUMED_ASSET: 42,
  INVALID_DEPOSIT_VALUE: 43,
  EXCEED_DEPOSIT_CAP: 44,
  INVALID_DEPOSIT_TARGET: 45,
  INVALID_DEPOSITOR: 46,
  INVALID_WITHDRAWER: 47,
  INVALID_EXPIRY_DATE: 49,
  INVALID_DEPOSIT: 50,
  INVALID_CUSTODIAN: 51,
  INSUFFICIENT_GAS: 52,
  INVALID_SWAP: 53,
  INVALID_HASHKEY: 54,
  INVALID_DELEGATION: 55,
  INSUFFICIENT_DELEGATION: 56,
  INVALID_DELEGATION_RULE: 57,
  INVALID_DELEGATION_TYPE_URL: 58,
  SENDER_NOT_AUTHORIZED: 59,
  PROTOCOL_NOT_RUNNING: 60,
  PROTOCOL_NOT_PAUSED: 61,
  PROTOCOL_NOT_ACTIVATED: 62,
  INVALID_DEACTIVATION: 63,
  SENDER_WITHDRAW_ITEMS_FULL: 64,
  WITHDRAW_ITEM_MISSING: 65,
  INVALID_WITHDRAW_TX: 66,
  INVALID_CHAIN_TYPE: 67,
  INVALID_TIME: 68,
  INVALID_SUBSCRIBE: 69,
  INVALID_DID_TYPE: 70,
  INVALID_CANDIDATE_STATE: 71,
  VALIDATOR_NOT_FOUND: 72,
  VALIDATOR_NOT_CHANGED: 73,
  FORBIDDEN: 403,
  INTERNAL: 500,
  TIMEOUT: 504,
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
  KECCAK_512: 13,
  SHA3_512: 14,
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
proto.forge_abi.RoleType = {
  ROLE_ACCOUNT: 0,
  ROLE_NODE: 1,
  ROLE_DEVICE: 2,
  ROLE_APPLICATION: 3,
  ROLE_SMART_CONTRACT: 4,
  ROLE_BOT: 5,
  ROLE_ASSET: 6,
  ROLE_STAKE: 7,
  ROLE_VALIDATOR: 8,
  ROLE_GROUP: 9,
  ROLE_TX: 10,
  ROLE_ANY: 63,
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

/**
 * @enum {number}
 */
proto.forge_abi.ProtocolStatus = {
  RUNNING: 0,
  PAUSED: 1,
  TERMINATED: 2,
};

goog.object.extend(exports, proto.forge_abi);
