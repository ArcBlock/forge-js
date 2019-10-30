
/**
 * Validates if a value is an Uint8Array.
 *
 * @public
 * @static
 * @param {*} value - value to validate
 * @returns {Boolean} boolean indicating if a value is an Uint8Array
 */
declare function isUint8Array(value: any): boolean;
/**
 * Convert input to Uint8Array on best effort
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array|string} v
 * @returns {Uint8Array}
 * @throws {Error}
 */
declare function toUint8Array(v: any): Uint8Array;
/**
 * Convert input to Buffer on best effort
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array} v
 * @returns {buffer}
 * @throws {Error}
 */
declare function toBuffer(v: any): any;
/**
 * Convert input to base58btc format on best effort
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array} v
 * @returns {string}
 * @throws {Error}
 */
declare function toBase58(v: any): string;
/**
 * Decode base58 string
 *
 * @public
 * @static
 * @param {string} v
 * @returns {buffer}
 */
declare function fromBase58(v: string): any;
/**
 * Convert input to base64 format
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array} v
 * @param {escape} [escape=true]
 * @returns {string}
 * @throws {Error}
 */
declare function toBase64(v: any, escape?: typeof escape): string;
/**
 * Decode base64 string to buffer
 *
 * @public
 * @static
 * @param {string} v
 * @returns {buffer}
 */
declare function fromBase64(v: string): any;
/**
 * Generate a random UUID
 *
 * @public
 * @static
 * @returns {string} Generated uuid
 */
declare function UUID(): string;
/**
 * Check if a string is valid UUID
 *
 * @public
 * @static
 * @param {string} str
 * @returns {boolean}
 */
declare function isUUID(str: string): boolean;
/**
 * Convert address to did: prepend `did:abt:` prefix
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
declare function toDid(address: any): string;
/**
 * Convert did to address: remove `did:abt:` prefix if exists
 *
 * @public
 * @static
 * @param {string} did - address string
 * @returns {string}
 */
declare function toAddress(did: string): string;
declare namespace ForgeSdkUtil {
  export interface T100 {
    BN: any;
    isBN: (object: any) => boolean;
    isBigNumber: (object: any) => boolean;
    isHexPrefixed: (str: string) => boolean;
    stripHexPrefix: (str: string) => any;
    utf8ToHex: (str: string) => string;
    hexToUtf8: (hex: string) => string;
    numberToHex: (value: any) => string;
    hexToNumber: (value: any) => number;
    isHex: (hex: string) => boolean;
    isHexStrict: (hex: string) => boolean;
    isUint8Array: typeof isUint8Array;
    hexToBytes: (hex: string) => any[];
    bytesToHex: (bytes: any[]) => string;
    toHex: (value: any, returnType: boolean) => string;
    numberToString: (arg: any) => any;
    fromUnitToToken: (input: string | number, decimal?: number, optionsInput: any) => string;
    fromTokenToUnit: (input: string, decimal?: number) => any;
    toBN: (number: any) => any;
    toUint8Array: typeof toUint8Array;
    toBuffer: typeof toBuffer;
    toBase58: typeof toBase58;
    fromBase58: typeof fromBase58;
    toBase64: typeof toBase64;
    fromBase64: typeof fromBase64;
    UUID: typeof UUID;
    isUUID: typeof isUUID;
    toDid: typeof toDid;
    toAddress: typeof toAddress;
  }
}

/**
 * Generate a wallet from secretKey
 *
 * @public
 * @static
 * @param {string} sk - the secret key, `hex encoded string`
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const assert = require('assert');
 * const { fromSecretKey } = require('@arcblock/forge-wallet');
 *
 * const sk =
 *   '0xD67C071B6F51D2B61180B9B1AA9BE0DD0704619F0E30453AB4A592B036EDE644E4852B7091317E3622068E62A5127D1FB0D4AE2FC50213295E10652D2F0ABFC7';
 * const sig =
 *   '0x08a102851c38c072e42756c1cc70938b5499c8e9358dfe5f383823f56cdb282ffda60fcd581a02c6c673069e5afc0bf09abbe3639b61b84d64fd58ef9f083003';
 *
 * const wallet = fromSecretKey(sk, type);
 * const message = 'data to sign';
 * const signature = wallet.sign(message);
 * assert.equal(signature, sig, "signature should match");
 * assert.ok(wallet.verify(message, signature), "signature should be verified");
 */
declare function fromSecretKey(sk: string, _type?: ForgeSdkWallet.T100): WalletObject;
/**
 * Generate a wallet from publicKey
 *
 * @public
 * @static
 * @param {string} pk - the public key, `hex encoded string`
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
declare function fromPublicKey(pk: string, _type?: ForgeSdkWallet.T100): WalletObject;
/**
 * Generate a wallet by generating a random secretKey
 *
 * @public
 * @static
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * // Do something with wallet
 */
declare function fromRandom(_type?: ForgeSdkWallet.T100): WalletObject;
/**
 * Generate a wallet from address (did)
 *
 * Since we do not know the publicKey and secretKey, this kind of wallet cannot be used for signing and verifying
 *
 * @public
 * @static
 * @param {string} address - the wallet address
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const assert = require('assert');
 * const { fromAddress } = require('@arcblock/forge-wallet');
 *
 * const address = 'zNKtCNqYWLYWYW3gWRA1vnRykfCBZYHZvzKr';
 * const wallet = fromAddress(address);
 * console.log(wallet.toJSON());
 */
declare function fromAddress(address: string): WalletObject;
/**
 * Generating a wallet from a serialized json presentation of another wallet
 *
 * @public
 * @static
 * @param {object} json - json presentation of a wallet
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 * @example
 * const { fromJSON, fromRandom } = require('@arcblock/forge-wallet');
 * const wallet = fromRandom();
 * const wallet2 = fromJSON(wallet.toJSON());
 * // wallet2 is identical to wallet
 */
declare function fromJSON(json: any): WalletObject;
/**
 * Check if an object is valid wallet object
 *
 * @public
 * @static
 * @param {object} wallet
 * @param {boolean} canSign - should the wallet support sign
 */
declare function isValid(wallet: any, canSign?: boolean): boolean;
/**
 * @public
 * @static
 * @global
 * @name WalletObject
 * @typedef WalletObject
 * @prop {WalletTypeObject} type - Indicates the wallet type
 * @prop {secretKey} secretKey - Wallet secretKey
 * @prop {publicKey} publicKey - Wallet publicKey
 * @prop {function} sign - Sign `data`, data is hashed using the `HashType` defined in type before signing
 * @prop {function} verify - Verify `signature`, data is hashed using the `HashType` defined in type before verifying
 * @prop {function} toAddress - Get wallet address without `did:abt:` prefix
 * @prop {function} toJSON - Serialize wallet to json object, checkout {@link fromJSON} for deserialisation
 */

/**
 * Generate an wallet instance that can be used to sign a message or verify a signature
 *
 * @public
 * @static
 * @param {object} keyPair - the key pair
 * @param {string} keyPair.sk - the secretKey
 * @param {string} keyPair.pk - the wallet publicKey
 * @param {WalletTypeObject} [type=defaultWalletType] - wallet type
 * @returns {WalletObject} wallet object that can be used to sign/verify/getAddress
 */
declare function Wallet(keyPair: ForgeSdkWallet.T101, type?: WalletTypeObject): WalletObject;
/**
 * The structure of a forge wallet type
 *
 * @public
 * @static
 * @global
 * @typedef {Object} WalletTypeObject
 * @prop {number} role - Enum field to identify wallet role type
 * @prop {number} pk - Crypto algorithm to derive publicKey from the secretKey
 * @prop {number} hash - Hash algorithm used to hash data before sign them
 */

/**
 * Create an wallet type object that be used as param to create a new wallet
 *
 * @public
 * @static
 * @param {WalletTypeObject} [type=defaultWalletType]
 * @returns {object}
 * @example
 * const assert = require('assert');
 * const { WalletType } = require('@arcblock/forge-wallet');
 * const { types } = require('@arcblock/mcrypto');
 *
 * const type = WalletType({
 *   role: types.RoleType.ROLE_APPLICATION,
 *   pk: types.KeyType.ED25519,
 *   hash: types.HashType.SHA3,
 * });
 */
declare function WalletType(type?: WalletTypeObject): any;
declare namespace ForgeSdkWallet {
  export interface T100 {
    pk: any;
    role: any;
    hash: any;
  }
  export interface WalletTypeObject {
    role: number;
    pk: number;
    hash: number;
  }
  export interface WalletObject {
    type: WalletTypeObject;
    secretKey: any;
    publicKey: any;
    sign: (...args: any[]) => any;
    verify: (...args: any[]) => any;
    toAddress: (...args: any[]) => any;
    toJSON: (...args: any[]) => any;
  }
  export interface T101 {
    sk: string;
    pk: string;
  }
  export interface T102 {
    [key: string]: any;
  }
  export interface T103 {
    fromSecretKey: typeof fromSecretKey;
    fromPublicKey: typeof fromPublicKey;
    fromRandom: typeof fromRandom;
    fromAddress: typeof fromAddress;
    fromDID: typeof fromAddress;
    fromJSON: typeof fromJSON;
    isValid: typeof isValid;
    Wallet: typeof Wallet;
    WalletType: typeof WalletType;
  }
}

/**
 * Format an message from RPC to UI friendly
 *
 * @public
 * @static
 * @param {string} type - input type
 * @param {object} data - input data
 * @returns {object} [almost same structure as input]
 */
declare function formatMessage(type: string, data: any): any;
/**
 * Create an protobuf encoded Typed message with specified data, ready to send to rpc server
 *
 * @public
 * @static
 * @param {string} type - message type defined in forge-proto
 * @param {object} params - message content
 * @returns {object} Message instance
 * @example
 * const { createMessage } = require('@arcblock/forge-message');
 * const message = createMessage ('CreateAssetTx', {
 *   moniker: 'asset',
 *   address: 'zaAKEJRKQWsdfjksdfjkASRD',
 * });
 *
 * message.getMoniker();  // 'asset'
 * message.getAddress();  // 'zaAKEJRKQWsdfjksdfjkASRD'
 * message.getReadonly(); // false
 * message.setReadonly(true);
 */
declare function createMessage(type: string, params: any): any;
/**
 * Generated a fake message for a type, the message can be RPC request/response
 *
 * @public
 * @static
 * @param {string} type - Message type string, should be defined in forge-abi or forge-core-protocol
 * @returns {object}
 * @example
 * const { fakeMessage} = require('@arcblock/forge-message');
 * const message = fakeMessage('CreateAssetTx');
 * // will output
 * {
 *   moniker: 'arcblock',
 *   data: { type: 'string', value: 'ABCD 1234' },
 *   readonly: true,
 *   transferrable: true,
 *   ttl: 2,
 *   parent: 'arcblock',
 *   address: 'F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55',
 * }
 */
declare function fakeMessage(type: string): any;
/**
 * Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }
 *
 * @public
 * @static
 * @param {object} data encoded data object
 * @returns {object} Object%{type, value}
 */
declare function decodeAny(data: any): any;
/**
 * Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
 * Does nothing on already encoded message
 *
 * @public
 * @static
 * @param {object} data
 * @returns {object} google.protobuf.Any
 */
declare function encodeAny(data: any): any;
/**
 * Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object
 *
 * @public
 * @static
 * @param {string|object} value
 * @returns {object} instanceof google.protobuf.Timestamp
 */
declare function encodeTimestamp(value: any): any;
/**
 * Decode google.protobuf.Timestamp message to ISO Date String
 *
 * FIXME: node strictly equal because we rounded the `nanos` field
 *
 * @public
 * @static
 * @param {object} data
 * @returns {strong} String timestamp
 */
declare function decodeTimestamp(data: any): any;
/**
 * Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided
 *
 * @public
 * @static
 * @param {buffer|string|number} value - value to encode
 * @param {string} type - type names defined in forge-proto
 * @returns {object} Message
 */
declare function encodeBigInt(value: any, type: string): any;
/**
 * Convert BigUint and BigSint to string representation of numbers
 *
 * @public
 * @static
 * @link https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript
 * @param {object} data - usually from encodeBigInt
 * @param {buffer} data.value
 * @param {boolean} data.minus
 * @returns {string} human readable number
 */
declare function decodeBigInt(data: ForgeSDKMessage.T100): string;
/**
 * Attach an $format method to rpc response
 *
 * @private
 * @param {object} data
 * @param {string} type
 */
declare function attachFormatFn(type: string, data: any, key?: string): void;
/**
 * Attach an example method to
 *
 * @private
 * @param {object} data
 * @param {string} type
 */
declare function attachExampleFn(type: string, host: any, key: any): void;
/**
 * Add type provider that can be used to format/create messages
 *
 * @param {object} provider - proto generated from {@see @arcblock/forge-proto}
 */
declare function addProvider(provider: any): void;
declare function getMessageType(type: any): any;
declare function toTypeUrl(type: any): any;
declare function fromTypeUrl(url: any): any;
declare namespace ForgeSDKMessage {
  export interface T100 {
    value: any;
    minus: boolean;
  }
  export interface T101 {
    formatMessage: typeof formatMessage;
    createMessage: typeof createMessage;
    fakeMessage: typeof fakeMessage;
    decodeAny: typeof decodeAny;
    encodeAny: typeof encodeAny;
    encodeTimestamp: typeof encodeTimestamp;
    decodeTimestamp: typeof decodeTimestamp;
    encodeBigInt: typeof encodeBigInt;
    decodeBigInt: typeof decodeBigInt;
    attachFormatFn: typeof attachFormatFn;
    attachExampleFn: typeof attachExampleFn;
    addProvider: typeof addProvider;
    getMessageType: typeof getMessageType;
    toTypeUrl: typeof toTypeUrl;
    fromTypeUrl: typeof fromTypeUrl;
  }
}

/**
 * Create an asset address
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @returns {string} asset address without `did:abt:` prefix
 */
declare function toAssetAddress(itx: any): string;
/**
 * Create an asset did
 *
 * @public
 * @static
 * @param {object} itx - an object of `CreateAssetTx`
 * @returns {string} asset address without `did:abt:` prefix
 */
declare function toAssetDid(itx: any): string;
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
declare function toItxAddress(itx: any, type: string, role?: any): string;
/**
 * Create an itx did
 *
 * @public
 * @static
 * @param {object} itx - an object of forge supported itx
 * @returns {string} itx address without `did:abt:` prefix
 */
declare function toItxDid(itx: any, type: any): string;
/**
 * Generate an stake address, eg: the did of the stake
 *
 * @public
 * @static
 * @param {string} sender - sender address
 * @param {string} receiver - receiver address
 * @returns {string} stake address without `did:abt:` prefix
 */
declare function toStakeAddress(sender: string, receiver: string): string;
/**
 * Generate an delegate address, eg: the did of the delegation
 *
 * @public
 * @static
 * @param {string} addr1 - delegator address
 * @param {string} addr2 - delegatee address
 * @returns {string} delegation address that can be used to retrieve delegation state
 */
declare function toDelegateAddress(addr1: string, addr2: string): string;
/**
 * Generate an stake address, eg: the did of the stake
 *
 * @public
 * @static
 * @param {string} sender - sender address
 * @param {string} receiver - receiver address
 * @returns {string} stake address without `did:abt:` prefix
 */
declare function toStakeDid(sender: string, receiver: string): string;
/**
 * Generate a tether address from the deposit tether tx hash
 *
 * @public
 * @static
 * @param {string} hash - DepositTetherTx hash
 * @returns {string} stake address without `did:abt:` prefix
 */
declare function toTetherAddress(hash: string): string;
/**
 * Generate a swap address from the setup swap tx hash
 *
 * @public
 * @static
 * @param {string} hash - SetupSwapTx hash
 * @returns {string} swap address without `did:abt:` prefix
 */
declare function toSwapAddress(hash: string): string;
declare namespace ForgeSdkUtil {
  export interface T100 {
    toAssetAddress: typeof toAssetAddress;
    toAssetDid: typeof toAssetDid;
    toItxAddress: typeof toItxAddress;
    toItxDid: typeof toItxDid;
    toStakeAddress: typeof toStakeAddress;
    toDelegateAddress: typeof toDelegateAddress;
    toStakeDid: typeof toStakeDid;
    toTetherAddress: typeof toTetherAddress;
    toSwapAddress: typeof toSwapAddress;
  }
}

/**
 * An grpc client that can read/write data to a forge powered blockchain node, can be used only in node.js
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 */
declare interface ForgeSDK {
  /**
   * Creates an instance of GRpcClient, and generate transaction sending and receiving methods
   *
   * @param {object|string} config - config object, if a string passed, will be used as the endpoint
   * @param {string} [config.endpoint="tcp://127.0.0.1:28210"] - grpc endpoint the client can connect to
   * @param {string} [config.chainId=""] - chainId used to construct transaction
   * @see GRpcClient.getRpcMethods
   * @see GRpcClient.getTxSendMethods
   */
  /**
   * List standard rpc methods
   *
   * @returns {object}
   */
  getRpcMethods(): any;
}

declare namespace forge_abi {

export enum StatusCode {
  OK = 0,
  INVALID_NONCE = 1,
  INVALID_SIGNATURE = 2,
  INVALID_SENDER_STATE = 3,
  INVALID_RECEIVER_STATE = 4,
  INSUFFICIENT_DATA = 5,
  INSUFFICIENT_FUND = 6,
  INVALID_OWNER = 7,
  INVALID_TX = 8,
  UNSUPPORTED_TX = 9,
  EXPIRED_TX = 10,
  TOO_MANY_TXS = 11,
  INVALID_LOCK_STATUS = 12,
  INVALID_REQUEST = 13,
  INVALID_MONIKER = 16,
  INVALID_PASSPHRASE = 17,
  INVALID_MULTISIG = 20,
  INVALID_WALLET = 21,
  INVALID_CHAIN_ID = 22,
  CONSENSUS_RPC_ERROR = 24,
  STORAGE_RPC_ERROR = 25,
  NOENT = 26,
  ACCOUNT_MIGRATED = 27,
  UNSUPPORTED_STAKE = 30,
  INSUFFICIENT_STAKE = 31,
  INVALID_STAKE_STATE = 32,
  EXPIRED_WALLET_TOKEN = 33,
  BANNED_UNSTAKE = 34,
  INVALID_ASSET = 35,
  INVALID_TX_SIZE = 36,
  INVALID_SIGNER_STATE = 37,
  INVALID_FORGE_STATE = 38,
  EXPIRED_ASSET = 39,
  UNTRANSFERRABLE_ASSET = 40,
  READONLY_ASSET = 41,
  CONSUMED_ASSET = 42,
  INVALID_DEPOSIT_VALUE = 43,
  EXCEED_DEPOSIT_CAP = 44,
  INVALID_DEPOSIT_TARGET = 45,
  INVALID_DEPOSITOR = 46,
  INVALID_WITHDRAWER = 47,
  DUPLICATE_TETHER = 48,
  INVALID_EXPIRY_DATE = 49,
  INVALID_DEPOSIT = 50,
  INVALID_CUSTODIAN = 51,
  INSUFFICIENT_GAS = 52,
  INVALID_SWAP = 53,
  INVALID_HASHKEY = 54,
  INVALID_DELEGATION = 55,
  INSUFFICIENT_DELEGATION = 56,
  INVALID_DELEGATION_RULE = 57,
  INVALID_DELEGATION_TYPE_URL = 58,
  SENDER_NOT_AUTHORIZED = 59,
  PROTOCOL_NOT_RUNNING = 60,
  PROTOCOL_NOT_PAUSED = 61,
  PROTOCOL_NOT_ACTIVATED = 62,
  INVALID_DEACTIVATION = 63,
  SENDER_WITHDRAW_ITEMS_FULL = 64,
  WITHDRAW_ITEM_MISSING = 65,
  INVALID_WITHDRAW_TX = 66,
  INVALID_CHAIN_TYPE = 67,
  INVALID_TIME = 68,
  FORBIDDEN = 403,
  INTERNAL = 500,
  TIMEOUT = 504,
}

export enum KeyType {
  ED25519 = 0,
  SECP256K1 = 1,
}

export enum HashType {
  KECCAK = 0,
  SHA3 = 1,
  SHA2 = 2,
  KECCAK_384 = 6,
  SHA3_384 = 7,
  KECCAK_512 = 13,
  SHA3_512 = 14,
}

export enum EncodingType {
  BASE16 = 0,
  BASE58 = 1,
}

export enum RoleType {
  ROLE_ACCOUNT = 0,
  ROLE_NODE = 1,
  ROLE_DEVICE = 2,
  ROLE_APPLICATION = 3,
  ROLE_SMART_CONTRACT = 4,
  ROLE_BOT = 5,
  ROLE_ASSET = 6,
  ROLE_STAKE = 7,
  ROLE_VALIDATOR = 8,
  ROLE_GROUP = 9,
  ROLE_TX = 10,
  ROLE_TETHER = 11,
  ROLE_ANY = 63,
}

export enum UpgradeType {
  CONFIG_APP = 0,
  CONFIG_FORGE = 1,
  CONFIG_DFS = 2,
  CONFIG_CONSENSUS = 3,
  CONFIG_P2P = 4,
  EXE_APP = 10,
  EXE_FORGE = 11,
  EXE_DFS = 12,
  EXE_CONSENSUS = 13,
  EXE_P2P = 14,
}

export enum UpgradeAction {
  VERIFY = 0,
  BACKUP = 1,
  REPLACE = 2,
  RESTART_APP = 10,
  RESTART_DFS = 11,
  RESTART_CONSENSUS = 12,
  RESTART_P2P = 13,
  RESTART_FORGE = 14,
  ROLLBACK_IF_FAIL = 30,
  RESTART_ALL_IF_FAIL = 31,
  CRASH_IF_FAIL = 33,
  DROP_ADDRESS_BOOK = 50,
}

export enum StateType {
  STATE_ACCOUNT = 0,
  STATE_ASSET = 1,
  STATE_CHANNEL = 2,
  STATE_FORGE = 3,
  STATE_STAKE = 4,
}

export enum StakeType {
  STAKE_NODE = 0,
  STAKE_USER = 1,
  STAKE_ASSET = 2,
  STAKE_CHAIN = 3,
}

export enum ProtocolStatus {
  RUNNING = 0,
  PAUSED = 1,
  TERMINATED = 2,
}

export interface RequestCreateTx {
  itx: google.protobuf.Any;
  from: string;
  nonce: number;
  wallet: forge_abi.WalletInfo;
  token: string;
}

export interface ResponseCreateTx {
  code: forge_abi.StatusCode;
  tx: forge_abi.Transaction;
}

export interface RequestMultisig {
  tx: forge_abi.Transaction;
  data: google.protobuf.Any;
  wallet: forge_abi.WalletInfo;
  token: string;
  delegatee: string;
}

export interface ResponseMultisig {
  code: forge_abi.StatusCode;
  tx: forge_abi.Transaction;
}

export interface RequestSendTx {
  tx: forge_abi.Transaction;
  wallet: forge_abi.WalletInfo;
  token: string;
  commit: boolean;
}

export interface ResponseSendTx {
  code: forge_abi.StatusCode;
  hash: string;
}

export interface RequestGetTx {
  hash: string;
}

export interface ResponseGetTx {
  code: forge_abi.StatusCode;
  info: forge_abi.TransactionInfo;
}

export interface RequestGetBlock {
  height: number;
}

export interface ResponseGetBlock {
  code: forge_abi.StatusCode;
  block: forge_abi.BlockInfo;
}

export interface RequestGetBlocks {
  paging: forge_abi.PageInput;
  heightFilter: forge_abi.RangeFilter;
  emptyExcluded: boolean;
}

export interface ResponseGetBlocks {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  blocks: Array<forge_abi.BlockInfoSimple>;
}

export interface RequestCreateWallet {
  passphrase: string;
  type: forge_abi.WalletType;
  moniker: string;
}

export interface ResponseCreateWallet {
  code: forge_abi.StatusCode;
  token: string;
  wallet: forge_abi.WalletInfo;
}

export interface RequestLoadWallet {
  address: string;
  passphrase: string;
}

export interface ResponseLoadWallet {
  code: forge_abi.StatusCode;
  token: string;
  wallet: forge_abi.WalletInfo;
}

export interface RequestRecoverWallet {
  data: Uint8Array;
  type: forge_abi.WalletType;
  passphrase: string;
  moniker: string;
}

export interface ResponseRecoverWallet {
  code: forge_abi.StatusCode;
  token: string;
  wallet: forge_abi.WalletInfo;
}

export interface RequestListWallet {

}

export interface ResponseListWallet {
  code: forge_abi.StatusCode;
  address: string;
}

export interface RequestRemoveWallet {
  address: string;
}

export interface ResponseRemoveWallet {
  code: forge_abi.StatusCode;
}

export interface RequestDeclareNode {
  validator: boolean;
}

export interface ResponseDeclareNode {
  code: forge_abi.StatusCode;
  wallet: forge_abi.WalletInfo;
}

export interface RequestGetAccountState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetAccountState {
  code: forge_abi.StatusCode;
  state: forge_abi.AccountState;
}

export interface RequestGetAssetState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetAssetState {
  code: forge_abi.StatusCode;
  state: forge_abi.AssetState;
}

export interface RequestGetProtocolState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetProtocolState {
  code: forge_abi.StatusCode;
  state: forge_abi.ProtocolState;
}

export interface RequestGetStakeState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetStakeState {
  code: forge_abi.StatusCode;
  state: forge_abi.StakeState;
}

export interface RequestGetForgeState {
  keys: Array<string>;
  height: number;
}

export interface ResponseGetForgeState {
  code: forge_abi.StatusCode;
  state: forge_abi.ForgeState;
}

export interface RequestGetTetherState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetTetherState {
  code: forge_abi.StatusCode;
  state: forge_abi.TetherState;
}

export interface RequestGetSwapState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetSwapState {
  code: forge_abi.StatusCode;
  state: forge_abi.SwapState;
}

export interface RequestGetDelegateState {
  address: string;
  keys: Array<string>;
  height: number;
}

export interface ResponseGetDelegateState {
  code: forge_abi.StatusCode;
  state: forge_abi.DelegateState;
}

export interface RequestStoreFile {
  chunk: Uint8Array;
}

export interface ResponseStoreFile {
  code: forge_abi.StatusCode;
  hash: string;
}

export interface RequestLoadFile {
  hash: string;
}

export interface ResponseLoadFile {
  code: forge_abi.StatusCode;
  chunk: Uint8Array;
}

export interface RequestPinFile {
  hash: string;
}

export interface ResponsePinFile {
  code: forge_abi.StatusCode;
}

export interface RequestGetChainInfo {

}

export interface ResponseGetChainInfo {
  code: forge_abi.StatusCode;
  info: forge_abi.ChainInfo;
}

export interface RequestGetNodeInfo {

}

export interface ResponseGetNodeInfo {
  code: forge_abi.StatusCode;
  info: forge_abi.NodeInfo;
}

export interface RequestSearch {
  key: string;
  value: string;
}

export interface ResponseSearch {
  code: forge_abi.StatusCode;
  txs: Array<forge_abi.TransactionInfo>;
}

export interface RequestGetUnconfirmedTxs {
  paging: forge_abi.PageInput;
}

export interface ResponseGetUnconfirmedTxs {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  unconfirmedTxs: forge_abi.UnconfirmedTxs;
}

export interface RequestGetNetInfo {

}

export interface ResponseGetNetInfo {
  code: forge_abi.StatusCode;
  netInfo: forge_abi.NetInfo;
}

export interface RequestGetValidatorsInfo {

}

export interface ResponseGetValidatorsInfo {
  code: forge_abi.StatusCode;
  validatorsInfo: forge_abi.ValidatorsInfo;
}

export interface RequestSubscribe {
  topic: string;
  filter: string;
}

export interface ResponseSubscribe {
  code: forge_abi.StatusCode;
  topic: string;
  transfer: forge_abi.Transaction;
  accountMigrate: forge_abi.Transaction;
  confirm: forge_abi.Transaction;
  createAsset: forge_abi.Transaction;
  exchange: forge_abi.Transaction;
  revoke: forge_abi.Transaction;
  beginBlock: abci_vendor.RequestBeginBlock;
  endBlock: abci_vendor.RequestEndBlock;
  declare: forge_abi.Transaction;
  updateAsset: forge_abi.Transaction;
  consensusUpgrade: forge_abi.Transaction;
  declareFile: forge_abi.Transaction;
  sysUpgrade: forge_abi.Transaction;
  stake: forge_abi.Transaction;
  delegate: forge_abi.Transaction;
  activateProtocol: forge_abi.Transaction;
  deactivateProtocol: forge_abi.Transaction;
  revokeDelegate: forge_abi.Transaction;
  depositToken: forge_abi.Transaction;
  withdrawToken: forge_abi.Transaction;
  approveWithdraw: forge_abi.Transaction;
  revokeWithdraw: forge_abi.Transaction;
  accountState: forge_abi.AccountState;
  assetState: forge_abi.AssetState;
  forgeState: forge_abi.ForgeState;
  stakeState: forge_abi.StakeState;
  protocolState: forge_abi.ProtocolState;
  delegateState: forge_abi.DelegateState;
}

export interface RequestUnsubscribe {
  topic: string;
}

export interface ResponseUnsubscribe {
  code: forge_abi.StatusCode;
}

export interface RequestGetConfig {
  parsed: boolean;
}

export interface ResponseGetConfig {
  code: forge_abi.StatusCode;
  config: string;
}

export interface ByDay {
  startDate: string;
  endDate: string;
}

export interface ByHour {
  date: string;
}

export interface RequestGetForgeStats {
  dayInfo: forge_abi.ByDay;
  date: forge_abi.ByHour;
}

export interface ResponseGetForgeStats {
  code: forge_abi.StatusCode;
  forgeStats: forge_abi.ForgeStats;
}

export interface RequestListTransactions {
  paging: forge_abi.PageInput;
  timeFilter: forge_abi.TimeFilter;
  addressFilter: forge_abi.AddressFilter;
  typeFilter: forge_abi.TypeFilter;
  validityFilter: forge_abi.ValidityFilter;
}

export interface ResponseListTransactions {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  transactions: Array<forge_abi.IndexedTransaction>;
}

export interface RequestListAssets {
  paging: forge_abi.PageInput;
  ownerAddress: string;
}

export interface ResponseListAssets {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  assets: Array<forge_abi.IndexedAssetState>;
}

export interface RequestListStakes {
  paging: forge_abi.PageInput;
  addressFilter: forge_abi.AddressFilter;
}

export interface ResponseListStakes {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  stakes: Array<forge_abi.IndexedStakeState>;
}

export interface RequestListAccount {
  ownerAddress: string;
}

export interface ResponseListAccount {
  code: forge_abi.StatusCode;
  account: forge_abi.IndexedAccountState;
}

export interface RequestListTopAccounts {
  paging: forge_abi.PageInput;
}

export interface ResponseListTopAccounts {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  accounts: Array<forge_abi.IndexedAccountState>;
}

export interface RequestListAssetTransactions {
  paging: forge_abi.PageInput;
  address: string;
}

export interface ResponseListAssetTransactions {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  transactions: Array<forge_abi.IndexedTransaction>;
}

export interface RequestListBlocks {
  paging: forge_abi.PageInput;
  proposer: string;
  timeFilter: forge_abi.TimeFilter;
  heightFilter: forge_abi.RangeFilter;
  numTxsFilter: forge_abi.RangeFilter;
  numInvalidTxsFilter: forge_abi.RangeFilter;
}

export interface ResponseListBlocks {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  blocks: Array<forge_abi.IndexedBlock>;
}

export interface RequestListTethers {
  paging: forge_abi.PageInput;
  depositor: string;
  withdrawer: string;
  custodian: string;
  available: boolean;
}

export interface ResponseListTethers {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  tethers: Array<forge_abi.TetherState>;
}

export interface RequestListSwap {
  paging: forge_abi.PageInput;
  sender: string;
  receiver: string;
  available: boolean;
}

export interface ResponseListSwap {
  code: forge_abi.StatusCode;
  page: forge_abi.PageInfo;
  swap: Array<forge_abi.SwapState>;
}

export interface RequestGetHealthStatus {

}

export interface ResponseGetHealthStatus {
  code: forge_abi.StatusCode;
  healthStatus: forge_abi.HealthStatus;
}

export interface BigUint {
  value: Uint8Array;
}

export interface BigSint {
  value: Uint8Array;
  minus: boolean;
}

export interface WalletType {
  pk: forge_abi.KeyType;
  hash: forge_abi.HashType;
  address: forge_abi.EncodingType;
  role: forge_abi.RoleType;
}

export interface WalletInfo {
  type: forge_abi.WalletType;
  sk: Uint8Array;
  pk: Uint8Array;
  address: string;
}

export interface ChainInfo {
  id: string;
  network: string;
  moniker: string;
  consensusVersion: string;
  synced: boolean;
  appHash: Uint8Array;
  blockHash: Uint8Array;
  blockHeight: number;
  blockTime: google.protobuf.Timestamp;
  address: string;
  votingPower: number;
  totalTxs: number;
  version: string;
  forgeAppsVersion: string;
  supportedTxs: Array<string>;
}

export interface NodeInfo {
  id: string;
  network: string;
  moniker: string;
  consensusVersion: string;
  synced: boolean;
  appHash: Uint8Array;
  blockHash: Uint8Array;
  blockHeight: number;
  blockTime: google.protobuf.Timestamp;
  address: string;
  votingPower: number;
  totalTxs: number;
  version: string;
  forgeAppsVersion: string;
  supportedTxs: Array<string>;
  ip: string;
  geoInfo: forge_abi.GeoInfo;
  p2pAddress: string;
}

export interface Validator {
  address: string;
  power: number;
}

export interface ConsensusParams {
  maxBytes: number;
  maxGas: number;
  maxValidators: number;
  maxCandidates: number;
  pubKeyTypes: Array<string>;
  validators: Array<forge_abi.Validator>;
  validatorChanged: boolean;
  paramChanged: boolean;
}

export interface UpgradeTask {
  type: forge_abi.UpgradeType;
  dataHash: string;
  actions: Array<forge_abi.UpgradeAction>;
}

export interface UpgradeTasks {
  item: Array<forge_abi.UpgradeTask>;
}

export interface AbciContext {
  txHash: string;
  blockHeight: number;
  blockTime: google.protobuf.Timestamp;
  totalTxs: number;
  txStatistics: forge_abi.TxStatistics;
  txIndex: number;
  lastBlockTime: google.protobuf.Timestamp;
}

export interface Multisig {
  signer: string;
  pk: Uint8Array;
  signature: Uint8Array;
  delegator: string;
  data: google.protobuf.Any;
}

export interface Transaction {
  from: string;
  nonce: number;
  chainId: string;
  pk: Uint8Array;
  gas: number;
  delegator: string;
  signature: Uint8Array;
  signatures: Array<forge_abi.Multisig>;
  itx: google.protobuf.Any;
}

export interface TransactionInfo {
  tx: forge_abi.Transaction;
  height: number;
  index: number;
  hash: string;
  tags: Array<abci_vendor.KVPair>;
  code: forge_abi.StatusCode;
  time: google.protobuf.Timestamp;
}

export interface DeclareConfig {
  restricted: boolean;
  hierarchy: number;
}

export interface DelegateConfig {
  deltaInterval: number;
  typeUrls: Array<string>;
}

export interface TransactionConfig {
  maxAssetSize: number;
  maxListSize: number;
  maxMultisig: number;
  minimumStake: number;
  declare: forge_abi.DeclareConfig;
  delegate: forge_abi.DelegateConfig;
  poke: forge_abi.PokeConfig;
  stake: forge_abi.StakeConfig;
}

export interface BlockInfo {
  height: number;
  numTxs: number;
  time: google.protobuf.Timestamp;
  appHash: Uint8Array;
  proposer: Uint8Array;
  txs: Array<forge_abi.TransactionInfo>;
  totalTxs: number;
  invalidTxs: Array<forge_abi.TransactionInfo>;
  txsHashes: Array<string>;
  invalidTxsHashes: Array<string>;
  consensusHash: Uint8Array;
  dataHash: Uint8Array;
  evidenceHash: Uint8Array;
  lastCommitHash: Uint8Array;
  lastResultsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  validatorsHash: Uint8Array;
  version: abci_vendor.Version;
  lastBlockId: abci_vendor.BlockID;
}

export interface BlockInfoSimple {
  height: number;
  numTxs: number;
  time: google.protobuf.Timestamp;
  appHash: Uint8Array;
  proposer: Uint8Array;
  totalTxs: number;
  txsHashes: Array<string>;
  invalidTxsHashes: Array<string>;
  consensusHash: Uint8Array;
  dataHash: Uint8Array;
  evidenceHash: Uint8Array;
  lastCommitHash: Uint8Array;
  lastResultsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  validatorsHash: Uint8Array;
  version: abci_vendor.Version;
  lastBlockId: abci_vendor.BlockID;
}

export interface TxStatus {
  code: forge_abi.StatusCode;
  hash: string;
}

export interface CircularQueue {
  items: Array<Uint8Array>;
  typeUrl: string;
  maxItems: number;
  circular: boolean;
  fifo: boolean;
}

export interface StateContext {
  genesisTx: string;
  renaissanceTx: string;
  genesisTime: google.protobuf.Timestamp;
  renaissanceTime: google.protobuf.Timestamp;
}

export interface StakeContext {
  totalStakes: forge_abi.BigUint;
  totalUnstakes: forge_abi.BigUint;
  totalReceivedStakes: forge_abi.BigUint;
  recentStakes: forge_abi.CircularQueue;
  recentReceivedStakes: forge_abi.CircularQueue;
}

export interface StakeSummary {
  totalStakes: forge_abi.BigUint;
  totalUnstakes: forge_abi.BigUint;
  context: forge_abi.StateContext;
}

export interface StakeConfig {
  timeoutGeneral: number;
  timeoutStakeForNode: number;
}

export interface UnconfirmedTxs {
  nTxs: number;
  txs: Array<forge_abi.Transaction>;
}

export interface NetInfo {
  listening: boolean;
  listeners: Array<string>;
  nPeers: number;
  peers: Array<forge_abi.PeerInfo>;
}

export interface GeoInfo {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface PeerInfo {
  id: string;
  network: string;
  consensusVersion: string;
  moniker: string;
  ip: string;
  geoInfo: forge_abi.GeoInfo;
}

export interface ValidatorsInfo {
  blockHeight: number;
  validators: Array<forge_abi.ValidatorInfo>;
}

export interface ValidatorInfo {
  address: string;
  pubKey: abci_vendor.PubKey;
  votingPower: number;
  proposerPriority: string;
  name: string;
  geoInfo: forge_abi.GeoInfo;
}

export interface GenesisInfo {
  genesisTime: string;
  chainId: string;
  consensusParams: abci_vendor.ConsensusParams;
  validators: Array<forge_abi.ValidatorInfo>;
  appHash: string;
}

export interface ForgeStats {
  numBlocks: Array<number>;
  numTxs: Array<number>;
  numStakes: Array<forge_abi.BigUint>;
  numValidators: Array<number>;
  numAccountMigrateTxs: Array<number>;
  numCreateAssetTxs: Array<number>;
  numConsensusUpgradeTxs: Array<number>;
  numDeclareTxs: Array<number>;
  numDeclareFileTxs: Array<number>;
  numExchangeTxs: Array<number>;
  numStakeTxs: Array<number>;
  numSysUpgradeTxs: Array<number>;
  numTransferTxs: Array<number>;
  numUpdateAssetTxs: Array<number>;
  numConsumeAssetTxs: Array<number>;
  numPokeTxs: Array<number>;
  tps: Array<number>;
  maxTps: number;
  avgTps: number;
  avgBlockTime: number;
}

export interface TxStatistics {
  numAccountMigrateTxs: number;
  numCreateAssetTxs: number;
  numConsensusUpgradeTxs: number;
  numDeclareTxs: number;
  numDeclareFileTxs: number;
  numExchangeTxs: number;
  numStakeTxs: number;
  numSysUpgradeTxs: number;
  numTransferTxs: number;
  numUpdateAssetTxs: number;
  numConsumeAssetTxs: number;
  numPokeTxs: number;
}

export interface ForgeToken {
  name: string;
  symbol: string;
  unit: string;
  description: string;
  icon: Uint8Array;
  decimal: number;
  initialSupply: number;
  totalSupply: number;
  inflationRate: number;
}

export interface PokeInfo {
  dailyLimit: forge_abi.BigUint;
  leftover: forge_abi.BigUint;
  amount: forge_abi.BigUint;
}

export interface PokeConfig {
  dailyLimit: number;
  amount: number;
  enabled: boolean;
}

export interface UpgradeInfo {
  height: number;
  version: string;
}

export interface WithdrawItem {
  hash: string;
  value: forge_abi.BigUint;
}

export interface AccountConfig {
  address: string;
  pk: Uint8Array;
  balance: forge_abi.BigUint;
}

export interface TokenSwapConfig {
  commissionHolderAddress: string;
  withdrawInterval: number;
  commission: forge_abi.BigUint;
  commissionRate: number;
  revokeCommission: number;
}

export interface Evidence {
  hash: string;
  chainType: string;
  chainId: string;
  originalTx: Uint8Array;
  receiverAddress: string;
}

export interface AccountState {
  balance: forge_abi.BigUint;
  nonce: number;
  numTxs: number;
  address: string;
  pk: Uint8Array;
  type: forge_abi.WalletType;
  moniker: string;
  context: forge_abi.StateContext;
  issuer: string;
  gasBalance: forge_abi.BigUint;
  migratedTo: Array<string>;
  migratedFrom: Array<string>;
  numAssets: number;
  stake: forge_abi.StakeContext;
  pinnedFiles: forge_abi.CircularQueue;
  poke: forge_abi.PokeInfo;
  depositReceived: forge_abi.BigUint;
  withdrawItems: forge_abi.CircularQueue;
  data: google.protobuf.Any;
}

export interface AssetState {
  address: string;
  owner: string;
  moniker: string;
  readonly: boolean;
  transferrable: boolean;
  ttl: number;
  consumedTime: google.protobuf.Timestamp;
  issuer: string;
  parent: string;
  stake: forge_abi.StakeContext;
  context: forge_abi.StateContext;
  data: google.protobuf.Any;
}

export interface CoreProtocol {
  name: string;
  address: string;
}

export interface ForgeState {
  address: string;
  consensus: forge_abi.ConsensusParams;
  tasks: forge_abi.UpgradeTasks;
  stakeSummary: forge_abi.StakeSummary;
  version: string;
  token: forge_abi.ForgeToken;
  txConfig: forge_abi.TransactionConfig;
  protocols: Array<forge_abi.CoreProtocol>;
  gas: number;
  upgradeInfo: forge_abi.UpgradeInfo;
  accountConfig: forge_abi.AccountConfig;
  tokenSwapConfig: forge_abi.TokenSwapConfig;
  data: google.protobuf.Any;
}

export interface RootState {
  address: string;
  account: Uint8Array;
  asset: Uint8Array;
  receipt: Uint8Array;
  protocol: Uint8Array;
  governance: Uint8Array;
  custom: Uint8Array;
}

export interface StakeState {
  address: string;
  from: string;
  to: string;
  balance: forge_abi.BigUint;
  message: string;
  context: forge_abi.StateContext;
  data: google.protobuf.Any;
}

export interface StatisticsState {
  address: string;
  numBlocks: number;
  numTxs: number;
  numStakes: forge_abi.BigUint;
  numValidators: number;
  txStatistics: forge_abi.TxStatistics;
}

export interface BlacklistState {
  address: Array<string>;
}

export interface ProtocolState {
  address: string;
  itx: forge_abi.DeployProtocolTx;
  rootHash: Uint8Array;
  status: forge_abi.ProtocolStatus;
  migratedTo: Array<string>;
  migratedFrom: Array<string>;
  context: forge_abi.StateContext;
  data: google.protobuf.Any;
}

export interface TetherState {
  hash: string;
  available: boolean;
  custodian: string;
  depositor: string;
  withdrawer: string;
  value: forge_abi.BigUint;
  commission: forge_abi.BigUint;
  charge: forge_abi.BigUint;
  target: string;
  locktime: google.protobuf.Timestamp;
  address: string;
}

export interface TetherInfo {
  available: boolean;
  hash: string;
}

export interface SwapState {
  hash: string;
  address: string;
  hashkey: Uint8Array;
  sender: string;
  receiver: string;
  value: forge_abi.BigUint;
  assets: Array<string>;
  locktime: number;
  hashlock: Uint8Array;
  context: forge_abi.StateContext;
}

export interface DelegateOpState {
  rule: string;
  numTxs: number;
  numTxsDelta: number;
  balance: forge_abi.BigUint;
  balanceDelta: forge_abi.BigUint;
}

export interface DelegateState {
  address: string;
  ops: forge_abi.DelegateOpState;
  context: forge_abi.StateContext;
  data: google.protobuf.Any;
}

export interface CodeInfo {
  checksum: Uint8Array;
  binary: Uint8Array;
}

export interface TypeUrls {
  url: string;
  module: string;
}

export interface DeployProtocolTx {
  address: string;
  name: string;
  version: number;
  namespace: string;
  description: string;
  typeUrls: Array<forge_abi.TypeUrls>;
  proto: string;
  pipeline: string;
  sources: Array<string>;
  code: Array<forge_abi.CodeInfo>;
  tags: Array<string>;
  data: google.protobuf.Any;
}

export interface ConsensusUpgradeTx {
  validators: Array<forge_abi.Validator>;
  maxBytes: number;
  maxGas: number;
  maxValidators: number;
  maxCandidates: number;
  data: google.protobuf.Any;
}

export interface SysUpgradeTx {
  task: forge_abi.UpgradeTask;
  gracePeriod: number;
  data: google.protobuf.Any;
}

export interface PageOrder {
  field: string;
  type: string;
}

export interface PageInput {
  cursor: string;
  size: number;
  order: Array<forge_abi.PageOrder>;
}

export interface TypeFilter {
  types: Array<string>;
}

export interface TimeFilter {
  startDateTime: string;
  endDateTime: string;
}

export enum Direction {
  MUTUAL = 0,
  ONE_WAY = 1,
  UNION = 2,
}

export interface AddressFilter {
  sender: string;
  receiver: string;
  direction: forge_abi.Direction;
}

export interface PageInfo {
  cursor: string;
  next: boolean;
  total: number;
}

export interface IndexedTransaction {
  hash: string;
  sender: string;
  receiver: string;
  time: string;
  type: string;
  tx: forge_abi.Transaction;
  valid: boolean;
  code: forge_abi.StatusCode;
}

export interface IndexedAccountState {
  address: string;
  balance: forge_abi.BigUint;
  numAssets: number;
  numTxs: number;
  nonce: number;
  genesisTime: string;
  renaissanceTime: string;
  moniker: string;
  migratedFrom: string;
  migratedTo: string;
  totalReceivedStakes: forge_abi.BigUint;
  totalStakes: forge_abi.BigUint;
  totalUnstakes: forge_abi.BigUint;
  recentNumTxs: Array<number>;
}

export interface IndexedAssetState {
  address: string;
  owner: string;
  genesisTime: string;
  renaissanceTime: string;
  moniker: string;
  readonly: boolean;
  consumedTime: string;
  issuer: string;
  parent: string;
  transferrable: boolean;
  ttl: number;
  data: google.protobuf.Any;
}

export interface IndexedStakeState {
  address: string;
  balance: forge_abi.BigUint;
  sender: string;
  receiver: string;
  genesisTime: string;
  renaissanceTime: string;
  message: string;
  type: number;
}

export interface IndexedBlock {
  height: number;
  time: string;
  proposer: string;
  numTxs: number;
  numInvalidTxs: number;
}

export interface HealthStatus {
  consensus: forge_abi.ConsensusStatus;
  network: forge_abi.NetworkStatus;
  storage: forge_abi.StorageStatus;
  forge: forge_abi.ForgeStatus;
}

export interface ConsensusStatus {
  health: boolean;
  synced: boolean;
  blockHeight: number;
}

export interface NetworkStatus {
  health: boolean;
  numPeers: number;
}

export interface StorageStatus {
  health: boolean;
  indexerServer: string;
  stateDb: string;
  diskSpace: forge_abi.DiskSpaceStatus;
}

export interface DiskSpaceStatus {
  forgeUsage: string;
  total: string;
}

export interface ForgeStatus {
  health: boolean;
  abiServer: string;
  forgeWeb: string;
  abciServer: forge_abi.AbciServerStatus;
}

export interface AbciServerStatus {
  abciConsensus: string;
  abciInfo: string;
}

export enum Validity {
  BOTH = 0,
  VALID = 1,
  INVALID = 2,
}

export interface ValidityFilter {
  validity: forge_abi.Validity;
}

export interface RangeFilter {
  from: number;
  to: number;
}







export interface AccountMigrateTx {
  pk: Uint8Array;
  type: forge_abi.WalletType;
  address: string;
  data: google.protobuf.Any;
}

export interface AssetSpec {
  address: string;
  data: string;
}

export interface AcquireAssetTx {
  to: string;
  specs: Array<forge_abi.AssetSpec>;
  data: google.protobuf.Any;
}

export interface ActivateProtocolTx {
  address: string;
  data: google.protobuf.Any;
}

export interface ApproveTetherTx {
  withdraw: string;
  data: google.protobuf.Any;
}

export interface ApproveWithdrawTx {
  withdrawTxHash: string;
  evidence: forge_abi.Evidence;
}

export interface ConsumeAssetTx {
  issuer: string;
  address: string;
  data: google.protobuf.Any;
}

export interface CreateAssetTx {
  moniker: string;
  data: google.protobuf.Any;
  readonly: boolean;
  transferrable: boolean;
  ttl: number;
  parent: string;
  address: string;
}

export interface AssetAttributes {
  transferrable: boolean;
  ttl: number;
}

export interface AssetFactory {
  description: string;
  limit: number;
  price: forge_abi.BigUint;
  template: string;
  allowedSpecArgs: Array<string>;
  assetName: string;
  attributes: forge_abi.AssetAttributes;
  data: google.protobuf.Any;
}

export interface AssetFactoryState {
  description: string;
  limit: number;
  price: forge_abi.BigUint;
  template: string;
  allowedSpecArgs: Array<string>;
  assetName: string;
  attributes: forge_abi.AssetAttributes;
  numCreated: number;
  data: google.protobuf.Any;
}

export interface DeactivateProtocolTx {
  address: string;
  data: google.protobuf.Any;
}

export interface DeclareTx {
  moniker: string;
  issuer: string;
  data: google.protobuf.Any;
}

export interface DelegateTx {
  address: string;
  to: string;
  ops: Array<forge_abi.DelegateOp>;
  data: google.protobuf.Any;
}

export interface DelegateOp {
  typeUrl: string;
  rules: Array<string>;
}

export interface DepositTetherTx {
  value: forge_abi.BigUint;
  commission: forge_abi.BigUint;
  charge: forge_abi.BigUint;
  target: string;
  withdrawer: string;
  locktime: google.protobuf.Timestamp;
}

export interface DepositTokenTx {
  value: forge_abi.BigUint;
  address: string;
  evidence: forge_abi.Evidence;
}

export interface ExchangeInfo {
  value: forge_abi.BigUint;
  assets: Array<string>;
}

export interface ExchangeTx {
  to: string;
  sender: forge_abi.ExchangeInfo;
  receiver: forge_abi.ExchangeInfo;
  expiredAt: google.protobuf.Timestamp;
  data: google.protobuf.Any;
}

export interface TetherExchangeInfo {
  value: forge_abi.BigUint;
  assets: Array<string>;
  deposit: forge_abi.Transaction;
}

export interface ExchangeTetherTx {
  sender: forge_abi.ExchangeInfo;
  receiver: forge_abi.TetherExchangeInfo;
  expiredAt: google.protobuf.Timestamp;
  data: google.protobuf.Any;
}

export interface PokeTx {
  date: string;
  address: string;
  data: google.protobuf.Any;
}

export interface RetrieveSwapTx {
  address: string;
  hashkey: Uint8Array;
  data: google.protobuf.Any;
}

export interface RevokeDelegateTx {
  address: string;
  to: string;
  typeUrls: Array<string>;
  data: google.protobuf.Any;
}

export interface RevokeSwapTx {
  address: string;
  data: google.protobuf.Any;
}

export interface RevokeTetherTx {
  tether: string;
  data: google.protobuf.Any;
}

export interface RevokeWithdrawTx {
  withdrawTxHash: string;
}

export interface SetupSwapTx {
  value: forge_abi.BigUint;
  assets: Array<string>;
  receiver: string;
  hashlock: Uint8Array;
  locktime: number;
  data: google.protobuf.Any;
}

export interface stakeForAsset {

}

export interface stakeForChain {

}

export interface StakeForNode {

}

export interface stakeForUser {

}

export interface StakeTx {
  to: string;
  value: forge_abi.BigSint;
  message: string;
  address: string;
  data: google.protobuf.Any;
}

export interface TransferTx {
  to: string;
  value: forge_abi.BigUint;
  assets: Array<string>;
  data: google.protobuf.Any;
}

export interface UpdateAssetTx {
  address: string;
  moniker: string;
  data: google.protobuf.Any;
}

export interface UpgradeNodeTx {
  height: number;
  version: string;
  override: boolean;
}

export interface TetherTradeInfo {
  value: forge_abi.BigUint;
  assets: Array<string>;
  tether: string;
}

export interface WithdrawTetherTx {
  from: string;
  nonce: number;
  chainId: string;
  pk: Uint8Array;
  signature: Uint8Array;
  signatures: Array<forge_abi.Multisig>;
  sender: forge_abi.ExchangeInfo;
  receiver: forge_abi.TetherTradeInfo;
  expiredAt: google.protobuf.Timestamp;
  data: google.protobuf.Any;
}

export interface WithdrawTokenTx {
  value: forge_abi.BigUint;
  to: string;
  chainType: string;
  chainId: string;
  ttl: google.protobuf.Timestamp;
}
}

declare namespace google.protobuf {

export interface Any {
  type_url: string;
  value: Uint8Array;
}

export interface Timestamp {
  seconds: google.protobuf.int64;
  nanos: google.protobuf.int32;
}
}

declare namespace abci_vendor {

export interface KVPair {
  key: Uint8Array;
  value: Uint8Array;
}

export interface BlockParams {
  maxBytes: abci_vendor.int64;
  maxGas: abci_vendor.int64;
}

export interface EvidenceParams {
  maxAge: abci_vendor.int64;
}

export interface ValidatorParams {
  pubKeyTypes: Array<string>;
}

export interface ConsensusParams {
  block: abci_vendor.BlockParams;
  evidence: abci_vendor.EvidenceParams;
  validator: abci_vendor.ValidatorParams;
}

export interface LastCommitInfo {
  round: abci_vendor.int32;
  votes: Array<abci_vendor.VoteInfo>;
}

export interface Version {
  Block: number;
  App: number;
}

export interface BlockID {
  hash: Uint8Array;
  partsHeader: abci_vendor.PartSetHeader;
}

export interface PartSetHeader {
  total: abci_vendor.int32;
  hash: Uint8Array;
}

export interface Validator {
  address: Uint8Array;
  power: abci_vendor.int64;
}

export interface ValidatorUpdate {
  pubKey: abci_vendor.PubKey;
  power: abci_vendor.int64;
}

export interface VoteInfo {
  validator: abci_vendor.Validator;
  signedLastBlock: boolean;
}

export interface PubKey {
  type: string;
  data: Uint8Array;
}

export interface Evidence {
  type: string;
  validator: abci_vendor.Validator;
  height: abci_vendor.int64;
  time: google.protobuf.Timestamp;
  totalVotingPower: abci_vendor.int64;
}

export interface Header {
  version: abci_vendor.Version;
  chainId: string;
  height: abci_vendor.int64;
  time: google.protobuf.Timestamp;
  numTxs: abci_vendor.int64;
  totalTxs: abci_vendor.int64;
  lastBlockId: abci_vendor.BlockID;
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  validatorsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  consensusHash: Uint8Array;
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  evidenceHash: Uint8Array;
  proposerAddress: Uint8Array;
}

export interface RequestBeginBlock {
  hash: Uint8Array;
  header: abci_vendor.Header;
  lastCommitInfo: abci_vendor.LastCommitInfo;
  byzantineValidators: Array<abci_vendor.Evidence>;
}

export interface RequestEndBlock {
  height: abci_vendor.int64;
}

export interface ResponseBeginBlock {
  tags: Array<abci_vendor.KVPair>;
}

export interface ResponseEndBlock {
  validatorUpdates: Array<abci_vendor.ValidatorUpdate>;
  consensusParamUpdates: abci_vendor.ConsensusParams;
  tags: Array<abci_vendor.KVPair>;
}

export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: abci_vendor.int64;
  gasUsed: abci_vendor.int64;
  tags: Array<abci_vendor.KVPair>;
  codespace: string;
}

export interface ResponseDeliverTx {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: abci_vendor.int64;
  gasUsed: abci_vendor.int64;
  tags: Array<abci_vendor.KVPair>;
  codespace: string;
}
}

declare namespace GRpcClient {
  export interface UnaryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface StreamResult<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }

  export interface TxParam<T> {
    tx: ItxParam<T>;
    wallet: GRpcClient.WalletObject,
    delegatee: string;
    signature: string;
  }

  export interface ItxParam<T> {
    nonce: number;
    from: string;
    pk: string;
    chainId: string;
    signature: string;
    delegator: string;
    signatures: array;
    itx: T;
  }

  export interface WalletObject {
    publicKey: string;
    secretKey: string;
    type: GRpcClient.WalletTypeObject,
    sign(message: string): string;
    verify(message: string, signature: string): boolean;
    toJSON(): object;
    toAddress(): string;
  }

  export interface WalletTypeObject {
    pk: number;
    role: number;
    address: number;
    hash: number;
  }

  export interface EncodeTxResult {
    object: object;
    buffer: buffer;
  }
}

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

/*~ Write your module's methods and properties in this class */
declare interface ForgeSDK {

  getQueries(): string[];
  getSubscriptions(): string[];
  getMutations(): string[];

  /**
   * Send raw query to ocap and return results
   *
   * @param {*} query
   * @memberof BaseClient
   * @return Promise
   */
  doRawQuery(query: any, requestOptions?: any): Promise<any>;
  doRawSubscription(query: any): Promise<any>;

  generateQueryFns(): void;
  generateSubscriptionFns(): void;
  generateMutationFns(): void;

  sendRevokeSwapTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeSwapTx>): Promise<GraphQLClient.ResponseSendTx>;
sendWithdrawTokenTx(param: GraphQLClient.TxParam<GraphQLClient.WithdrawTokenTx>): Promise<GraphQLClient.ResponseSendTx>;
sendSetupSwapTx(param: GraphQLClient.TxParam<GraphQLClient.SetupSwapTx>): Promise<GraphQLClient.ResponseSendTx>;
sendAccountMigrateTx(param: GraphQLClient.TxParam<GraphQLClient.AccountMigrateTx>): Promise<GraphQLClient.ResponseSendTx>;
sendStakeTx(param: GraphQLClient.TxParam<GraphQLClient.StakeTx>): Promise<GraphQLClient.ResponseSendTx>;
sendDepositTokenTx(param: GraphQLClient.TxParam<GraphQLClient.DepositTokenTx>): Promise<GraphQLClient.ResponseSendTx>;
sendDeactivateProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.DeactivateProtocolTx>): Promise<GraphQLClient.ResponseSendTx>;
sendPokeTx(param: GraphQLClient.TxParam<GraphQLClient.PokeTx>): Promise<GraphQLClient.ResponseSendTx>;
sendCreateAssetTx(param: GraphQLClient.TxParam<GraphQLClient.CreateAssetTx>): Promise<GraphQLClient.ResponseSendTx>;
sendRevokeDelegateTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeDelegateTx>): Promise<GraphQLClient.ResponseSendTx>;
sendTransferTx(param: GraphQLClient.TxParam<GraphQLClient.TransferTx>): Promise<GraphQLClient.ResponseSendTx>;
sendRevokeWithdrawTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeWithdrawTx>): Promise<GraphQLClient.ResponseSendTx>;
sendConsumeAssetTx(param: GraphQLClient.TxParam<GraphQLClient.ConsumeAssetTx>): Promise<GraphQLClient.ResponseSendTx>;
sendDelegateTx(param: GraphQLClient.TxParam<GraphQLClient.DelegateTx>): Promise<GraphQLClient.ResponseSendTx>;
sendExchangeTx(param: GraphQLClient.TxParam<GraphQLClient.ExchangeTx>): Promise<GraphQLClient.ResponseSendTx>;
sendActivateProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.ActivateProtocolTx>): Promise<GraphQLClient.ResponseSendTx>;
sendUpgradeNodeTx(param: GraphQLClient.TxParam<GraphQLClient.UpgradeNodeTx>): Promise<GraphQLClient.ResponseSendTx>;
sendUpdateAssetTx(param: GraphQLClient.TxParam<GraphQLClient.UpdateAssetTx>): Promise<GraphQLClient.ResponseSendTx>;
sendApproveWithdrawTx(param: GraphQLClient.TxParam<GraphQLClient.ApproveWithdrawTx>): Promise<GraphQLClient.ResponseSendTx>;
sendRetrieveSwapTx(param: GraphQLClient.TxParam<GraphQLClient.RetrieveSwapTx>): Promise<GraphQLClient.ResponseSendTx>;
sendDeclareTx(param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>): Promise<GraphQLClient.ResponseSendTx>;
sendDeployProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>): Promise<GraphQLClient.ResponseSendTx>;
sendAcquireAssetTx(param: GraphQLClient.TxParam<GraphQLClient.AcquireAssetTx>): Promise<GraphQLClient.ResponseSendTx>;
  encodeRevokeSwapTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeSwapTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeWithdrawTokenTx(param: GraphQLClient.TxParam<GraphQLClient.WithdrawTokenTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeSetupSwapTx(param: GraphQLClient.TxParam<GraphQLClient.SetupSwapTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeAccountMigrateTx(param: GraphQLClient.TxParam<GraphQLClient.AccountMigrateTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeStakeTx(param: GraphQLClient.TxParam<GraphQLClient.StakeTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeDepositTokenTx(param: GraphQLClient.TxParam<GraphQLClient.DepositTokenTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeDeactivateProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.DeactivateProtocolTx>): Promise<GraphQLClient.EncodeTxResult>;
encodePokeTx(param: GraphQLClient.TxParam<GraphQLClient.PokeTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeCreateAssetTx(param: GraphQLClient.TxParam<GraphQLClient.CreateAssetTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeRevokeDelegateTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeDelegateTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeTransferTx(param: GraphQLClient.TxParam<GraphQLClient.TransferTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeRevokeWithdrawTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeWithdrawTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeConsumeAssetTx(param: GraphQLClient.TxParam<GraphQLClient.ConsumeAssetTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeDelegateTx(param: GraphQLClient.TxParam<GraphQLClient.DelegateTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeExchangeTx(param: GraphQLClient.TxParam<GraphQLClient.ExchangeTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeActivateProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.ActivateProtocolTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeUpgradeNodeTx(param: GraphQLClient.TxParam<GraphQLClient.UpgradeNodeTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeUpdateAssetTx(param: GraphQLClient.TxParam<GraphQLClient.UpdateAssetTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeApproveWithdrawTx(param: GraphQLClient.TxParam<GraphQLClient.ApproveWithdrawTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeRetrieveSwapTx(param: GraphQLClient.TxParam<GraphQLClient.RetrieveSwapTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeDeclareTx(param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeDeployProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>): Promise<GraphQLClient.EncodeTxResult>;
encodeAcquireAssetTx(param: GraphQLClient.TxParam<GraphQLClient.AcquireAssetTx>): Promise<GraphQLClient.EncodeTxResult>;
  signRevokeSwapTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeSwapTx>): Promise<GraphQLClient.Transaction>;
signWithdrawTokenTx(param: GraphQLClient.TxParam<GraphQLClient.WithdrawTokenTx>): Promise<GraphQLClient.Transaction>;
signSetupSwapTx(param: GraphQLClient.TxParam<GraphQLClient.SetupSwapTx>): Promise<GraphQLClient.Transaction>;
signAccountMigrateTx(param: GraphQLClient.TxParam<GraphQLClient.AccountMigrateTx>): Promise<GraphQLClient.Transaction>;
signStakeTx(param: GraphQLClient.TxParam<GraphQLClient.StakeTx>): Promise<GraphQLClient.Transaction>;
signDepositTokenTx(param: GraphQLClient.TxParam<GraphQLClient.DepositTokenTx>): Promise<GraphQLClient.Transaction>;
signDeactivateProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.DeactivateProtocolTx>): Promise<GraphQLClient.Transaction>;
signPokeTx(param: GraphQLClient.TxParam<GraphQLClient.PokeTx>): Promise<GraphQLClient.Transaction>;
signCreateAssetTx(param: GraphQLClient.TxParam<GraphQLClient.CreateAssetTx>): Promise<GraphQLClient.Transaction>;
signRevokeDelegateTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeDelegateTx>): Promise<GraphQLClient.Transaction>;
signTransferTx(param: GraphQLClient.TxParam<GraphQLClient.TransferTx>): Promise<GraphQLClient.Transaction>;
signRevokeWithdrawTx(param: GraphQLClient.TxParam<GraphQLClient.RevokeWithdrawTx>): Promise<GraphQLClient.Transaction>;
signConsumeAssetTx(param: GraphQLClient.TxParam<GraphQLClient.ConsumeAssetTx>): Promise<GraphQLClient.Transaction>;
signDelegateTx(param: GraphQLClient.TxParam<GraphQLClient.DelegateTx>): Promise<GraphQLClient.Transaction>;
signExchangeTx(param: GraphQLClient.TxParam<GraphQLClient.ExchangeTx>): Promise<GraphQLClient.Transaction>;
signActivateProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.ActivateProtocolTx>): Promise<GraphQLClient.Transaction>;
signUpgradeNodeTx(param: GraphQLClient.TxParam<GraphQLClient.UpgradeNodeTx>): Promise<GraphQLClient.Transaction>;
signUpdateAssetTx(param: GraphQLClient.TxParam<GraphQLClient.UpdateAssetTx>): Promise<GraphQLClient.Transaction>;
signApproveWithdrawTx(param: GraphQLClient.TxParam<GraphQLClient.ApproveWithdrawTx>): Promise<GraphQLClient.Transaction>;
signRetrieveSwapTx(param: GraphQLClient.TxParam<GraphQLClient.RetrieveSwapTx>): Promise<GraphQLClient.Transaction>;
signDeclareTx(param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>): Promise<GraphQLClient.Transaction>;
signDeployProtocolTx(param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>): Promise<GraphQLClient.Transaction>;
signAcquireAssetTx(param: GraphQLClient.TxParam<GraphQLClient.AcquireAssetTx>): Promise<GraphQLClient.Transaction>;
  multiSignExchangeTx(param: GraphQLClient.TxParam<GraphQLClient.ExchangeTx>): Promise<GraphQLClient.Transaction>;
multiSignConsumeAssetTx(param: GraphQLClient.TxParam<GraphQLClient.ConsumeAssetTx>): Promise<GraphQLClient.Transaction>;
  getAccountState(params: GraphQLClient.GetAccountStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAccountState>
getAssetState(params: GraphQLClient.GetAssetStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAssetState>
getBlock(params: GraphQLClient.GetBlockParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlock>
getBlocks(params: GraphQLClient.GetBlocksParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlocks>
getChainInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetChainInfo>
getConfig(params: GraphQLClient.GetConfigParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetConfig>
getDelegateState(params: GraphQLClient.GetDelegateStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetDelegateState>
getForgeState(params: GraphQLClient.GetForgeStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeState>
getForgeStats(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStats>
getForgeStatsByDay(params: GraphQLClient.GetForgeStatsByDayParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStats>
getForgeStatsByHour(params: GraphQLClient.GetForgeStatsByHourParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStats>
getHealthStatus(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetHealthStatus>
getNetInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetNetInfo>
getNodeInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetNodeInfo>
getProtocolState(params: GraphQLClient.GetProtocolStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetProtocolState>
getProtocols(params: GraphQLClient.GetProtocolsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetProtocols>
getSimulatorStatus(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetSimulatorStatus>
getStakeState(params: GraphQLClient.GetStakeStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetStakeState>
getSwapState(params: GraphQLClient.GetSwapStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetSwapState>
getTetherState(params: GraphQLClient.GetTetherStateParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTetherState>
getTx(params: GraphQLClient.GetTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTx>
getUnconfirmedTxs(params: GraphQLClient.GetUnconfirmedTxsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetUnconfirmedTxs>
getValidatorsInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetValidatorsInfo>
listAssetTransactions(params: GraphQLClient.ListAssetTransactionsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListAssetTransactions>
listAssets(params: GraphQLClient.ListAssetsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListAssets>
listBlocks(params: GraphQLClient.ListBlocksParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListBlocks>
listStakes(params: GraphQLClient.ListStakesParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListStakes>
listSwap(params: GraphQLClient.ListSwapParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListSwap>
listTethers(params: GraphQLClient.ListTethersParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListTethers>
listTopAccounts(params: GraphQLClient.ListTopAccountsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListTopAccounts>
listTransactions(params: GraphQLClient.ListTransactionsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListTransactions>
  sendTx(params: GraphQLClient.SendTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseSendTx>
startSimulator(): GraphQLClient.QueryResult<GraphQLClient.ResponseStartSimulator>
stopSimulator(): GraphQLClient.QueryResult<GraphQLClient.ResponseStopSimulator>
unsubscribe(params: GraphQLClient.UnsubscribeParams): GraphQLClient.QueryResult<GraphQLClient.ResponseUnsubscribe>
  subscribe(params: GraphQLClient.SubscribeParams): GraphQLClient.SubscriptionResult<GraphQLClient.ResponseSubscribe>
}

declare namespace GraphQLClient {
  export interface QueryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface SubscriptionResult<T> {
    then(fn: (result: GraphQLClient.Subscription<T>) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface Subscription<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }

  export interface TxParam<T> {
    tx: ItxParam<T>;
    wallet: GraphQLClient.WalletObject,
    delegatee: string;
    signature: string;
  }

  export interface ItxParam<T> {
    nonce: number;
    from: string;
    pk: string;
    chainId: string;
    delegator: string;
    signature: string;
    signatures: array;
    itx: T;
  }

  export interface WalletObject {
    publicKey: string;
    secretKey: string;
    type: GraphQLClient.WalletTypeObject,
    sign(message: string): string;
    verify(message: string, signature: string): boolean;
    toJSON(): object;
    toAddress(): string;
  }

  export interface WalletTypeObject {
    pk: number;
    role: number;
    address: number;
    hash: number;
  }

  export interface EncodeTxResult {
    object: object;
    buffer: buffer;
  }


export enum Direction {
  MUTUAL,
  ONE_WAY,
  UNION,
}

export enum EncodingType {
  BASE16,
  BASE58,
}

export enum HashType {
  KECCAK,
  KECCAK_384,
  KECCAK_512,
  SHA2,
  SHA3,
  SHA3_384,
  SHA3_512,
}

export enum KeyType {
  ED25519,
  SECP256K1,
}

export enum RoleType {
  ROLE_ACCOUNT,
  ROLE_ANY,
  ROLE_APPLICATION,
  ROLE_ASSET,
  ROLE_BOT,
  ROLE_DEVICE,
  ROLE_GROUP,
  ROLE_NODE,
  ROLE_SMART_CONTRACT,
  ROLE_STAKE,
  ROLE_TETHER,
  ROLE_TX,
  ROLE_VALIDATOR,
}

export enum StatusCode {
  SENDER_WITHDRAW_ITEMS_FULL,
  INVALID_SIGNATURE,
  INVALID_MONIKER,
  INSUFFICIENT_FUND,
  DUPLICATE_TETHER,
  INVALID_DELEGATION_RULE,
  INVALID_SIGNER_STATE,
  INVALID_WALLET,
  STORAGE_RPC_ERROR,
  UNSUPPORTED_STAKE,
  INVALID_CUSTODIAN,
  INVALID_WITHDRAWER,
  INVALID_DEPOSIT,
  INSUFFICIENT_GAS,
  INVALID_HASHKEY,
  INSUFFICIENT_STAKE,
  INVALID_RECEIVER_STATE,
  INVALID_DEPOSITOR,
  EXPIRED_WALLET_TOKEN,
  INVALID_SWAP,
  UNTRANSFERRABLE_ASSET,
  INSUFFICIENT_DATA,
  INVALID_SENDER_STATE,
  CONSENSUS_RPC_ERROR,
  INVALID_LOCK_STATUS,
  INVALID_MULTISIG,
  EXPIRED_ASSET,
  SENDER_NOT_AUTHORIZED,
  CONSUMED_ASSET,
  BANNED_UNSTAKE,
  INVALID_ASSET,
  UNSUPPORTED_TX,
  INTERNAL,
  INVALID_WITHDRAW_TX,
  WITHDRAW_ITEM_MISSING,
  NOENT,
  INSUFFICIENT_DELEGATION,
  INVALID_EXPIRY_DATE,
  READONLY_ASSET,
  INVALID_REQUEST,
  EXPIRED_TX,
  PROTOCOL_NOT_PAUSED,
  INVALID_DEPOSIT_VALUE,
  ACCOUNT_MIGRATED,
  INVALID_CHAIN_ID,
  INVALID_DEPOSIT_TARGET,
  INVALID_DELEGATION_TYPE_URL,
  INVALID_NONCE,
  INVALID_STAKE_STATE,
  INVALID_CHAIN_TYPE,
  INVALID_PASSPHRASE,
  INVALID_FORGE_STATE,
  EXCEED_DEPOSIT_CAP,
  TIMEOUT,
  INVALID_TX,
  PROTOCOL_NOT_ACTIVATED,
  INVALID_OWNER,
  INVALID_TIME,
  INVALID_DELEGATION,
  INVALID_DEACTIVATION,
  FORBIDDEN,
  INVALID_TX_SIZE,
  PROTOCOL_NOT_RUNNING,
  OK,
  TOO_MANY_TXS,
}

export enum UpgradeAction {
  BACKUP,
  CRASH_IF_FAIL,
  DROP_ADDRESS_BOOK,
  REPLACE,
  RESTART_ALL_IF_FAIL,
  RESTART_APP,
  RESTART_CONSENSUS,
  RESTART_DFS,
  RESTART_FORGE,
  RESTART_P2P,
  ROLLBACK_IF_FAIL,
  VERIFY,
}

export enum UpgradeType {
  CONFIG_APP,
  CONFIG_CONSENSUS,
  CONFIG_DFS,
  CONFIG_FORGE,
  CONFIG_P2P,
  EXE_APP,
  EXE_CONSENSUS,
  EXE_DFS,
  EXE_FORGE,
  EXE_P2P,
}

export enum Validity {
  BOTH,
  INVALID,
  VALID,
}

export interface AddressFilter {

}

export interface PageInput {

}

export interface PageOrder {

}

export interface RangeFilter {

}

export interface TimeFilter {

}

export interface TypeFilter {

}

export interface ValidityFilter {

}

export interface AbciServerStatus {
  abciConsensus: string;
  abciInfo: string;
}

export interface AccountConfig {
  address: string;
  balance: string;
  pk: string;
}

export interface AccountConfigEntry {
  key: string;
  value: GraphQLClient.AccountConfig;
}

export interface AccountMigrateTx {
  address: string;
  data: GraphQLClient.Any;
  pk: string;
  type: GraphQLClient.WalletType;
}

export interface AccountState {
  address: string;
  balance: string;
  context: GraphQLClient.StateContext;
  data: GraphQLClient.Any;
  issuer: string;
  migratedFrom: Array<string>;
  migratedTo: Array<string>;
  moniker: string;
  nonce: string;
  numAssets: string;
  numTxs: string;
  pk: string;
  poke: GraphQLClient.PokeInfo;
  stake: GraphQLClient.StakeContext;
  type: GraphQLClient.WalletType;
}

export interface AcquireAssetTx {
  data: GraphQLClient.Any;
  specs: Array<AssetSpec>;
  to: string;
}

export interface Any {
  typeUrl: string;
  value: string;
}

export interface ApproveTetherTx {
  data: GraphQLClient.Any;
  withdraw: string;
}

export interface AssetSpec {
  address: string;
  data: string;
}

export interface AssetState {
  address: string;
  consumedTime: string;
  context: GraphQLClient.StateContext;
  data: GraphQLClient.Any;
  issuer: string;
  moniker: string;
  owner: string;
  parent: string;
  readonly: boolean;
  stake: GraphQLClient.StakeContext;
  transferrable: boolean;
  ttl: number;
}

export interface BlockId {
  hash: string;
  partsHeader: GraphQLClient.PartSetHeader;
}

export interface BlockInfo {
  appHash: string;
  consensusHash: string;
  dataHash: string;
  evidenceHash: string;
  height: string;
  invalidTxs: Array<TransactionInfo>;
  invalidTxsHashes: Array<string>;
  lastBlockId: GraphQLClient.BlockId;
  lastCommitHash: string;
  lastResultsHash: string;
  nextValidatorsHash: string;
  numTxs: number;
  proposer: string;
  time: string;
  totalTxs: string;
  txs: Array<TransactionInfo>;
  txsHashes: Array<string>;
  validatorsHash: string;
  version: GraphQLClient.Version;
}

export interface BlockInfoSimple {
  appHash: string;
  consensusHash: string;
  dataHash: string;
  evidenceHash: string;
  height: string;
  invalidTxsHashes: Array<string>;
  lastBlockId: GraphQLClient.BlockId;
  lastCommitHash: string;
  lastResultsHash: string;
  nextValidatorsHash: string;
  numTxs: number;
  proposer: string;
  time: string;
  totalTxs: string;
  txsHashes: Array<string>;
  validatorsHash: string;
  version: GraphQLClient.Version;
}

export interface ChainInfo {
  address: string;
  appHash: string;
  blockHash: string;
  blockHeight: string;
  blockTime: string;
  consensusVersion: string;
  forgeAppsVersion: Array<ForgeAppsVersionEntry>;
  id: string;
  moniker: string;
  network: string;
  supportedTxs: Array<string>;
  synced: boolean;
  totalTxs: string;
  version: string;
  votingPower: string;
}

export interface CircularQueue {
  circular: boolean;
  fifo: boolean;
  items: Array<string>;
  maxItems: number;
  typeUrl: string;
}

export interface CodeInfo {
  binary: string;
  checksum: string;
}

export interface ConsensusParams {
  maxBytes: string;
  maxCandidates: number;
  maxGas: string;
  maxValidators: number;
  paramChanged: boolean;
  pubKeyTypes: Array<string>;
  validatorChanged: boolean;
  validators: Array<Validator>;
}

export interface ConsensusStatus {
  blockHeight: string;
  health: boolean;
  synced: boolean;
}

export interface ConsensusUpgradeTx {
  data: GraphQLClient.Any;
  maxBytes: string;
  maxCandidates: number;
  maxGas: string;
  maxValidators: number;
  validators: Array<Validator>;
}

export interface ConsumeAssetTx {
  address: string;
  data: GraphQLClient.Any;
  issuer: string;
}

export interface CoreProtocol {
  address: string;
  name: string;
}

export interface CreateAssetTx {
  address: string;
  data: GraphQLClient.Any;
  moniker: string;
  parent: string;
  readonly: boolean;
  transferrable: boolean;
  ttl: number;
}

export interface DeclareConfig {
  hierarchy: number;
  restricted: boolean;
}

export interface DeclareFileTx {
  hash: string;
}

export interface DeclareTx {
  data: GraphQLClient.Any;
  issuer: string;
  moniker: string;
}

export interface DelegateConfig {
  deltaInterval: number;
  typeUrls: Array<string>;
}

export interface DelegateOpState {
  balance: string;
  balanceDelta: string;
  numTxs: string;
  numTxsDelta: string;
  rule: string;
}

export interface DelegateState {
  address: string;
  context: GraphQLClient.StateContext;
  data: GraphQLClient.Any;
  ops: Array<OpsEntry>;
}

export interface DeployProtocolTx {
  address: string;
  code: Array<CodeInfo>;
  data: GraphQLClient.Any;
  description: string;
  name: string;
  namespace: string;
  pipeline: string;
  proto: string;
  sources: Array<string>;
  tags: Array<string>;
  typeUrls: Array<TypeUrls>;
  version: number;
}

export interface DepositTetherTx {
  charge: string;
  commission: string;
  locktime: string;
  target: string;
  value: string;
  withdrawer: string;
}

export interface DiskSpaceStatus {
  forgeUsage: string;
  total: string;
}

export interface Evidence {
  chainId: string;
  chainType: string;
  hash: string;
  originalTx: string;
  receiverAddress: string;
}

export interface ExchangeInfo {
  assets: Array<string>;
  value: string;
}

export interface ExchangeTetherTx {
  data: GraphQLClient.Any;
  expiredAt: string;
  receiver: GraphQLClient.TetherExchangeInfo;
  sender: GraphQLClient.ExchangeInfo;
}

export interface ExchangeTx {
  data: GraphQLClient.Any;
  expiredAt: string;
  receiver: GraphQLClient.ExchangeInfo;
  sender: GraphQLClient.ExchangeInfo;
  to: string;
}

export interface ExtraAccountMigrate {
  address: string;
}

export interface ExtraCreateAsset {
  asset: string;
}

export interface ForgeAppsVersionEntry {
  key: string;
  value: string;
}

export interface ForgeState {
  accountConfig: Array<AccountConfigEntry>;
  address: string;
  consensus: GraphQLClient.ConsensusParams;
  data: GraphQLClient.Any;
  gas: Array<GasEntry>;
  protocols: Array<CoreProtocol>;
  stakeSummary: Array<StakeSummaryEntry>;
  tasks: Array<TasksEntry>;
  token: GraphQLClient.ForgeToken;
  tokenSwapConfig: GraphQLClient.TokenSwapConfig;
  txConfig: GraphQLClient.TransactionConfig;
  upgradeInfo: GraphQLClient.UpgradeInfo;
  version: string;
}

export interface ForgeStats {
  avgBlockTime: number;
  avgTps: number;
  maxTps: number;
  numAccountMigrateTxs: Array<string>;
  numBlocks: Array<string>;
  numConsensusUpgradeTxs: Array<number>;
  numConsumeAssetTxs: Array<string>;
  numCreateAssetTxs: Array<string>;
  numDeclareFileTxs: Array<string>;
  numDeclareTxs: Array<string>;
  numExchangeTxs: Array<string>;
  numPokeTxs: Array<string>;
  numStakeTxs: Array<string>;
  numStakes: Array<string>;
  numSysUpgradeTxs: Array<number>;
  numTransferTxs: Array<string>;
  numTxs: Array<string>;
  numUpdateAssetTxs: Array<string>;
  numValidators: Array<number>;
  tps: Array<number>;
}

export interface ForgeStatus {
  abciServer: GraphQLClient.AbciServerStatus;
  abiServer: string;
  forgeWeb: string;
  health: boolean;
}

export interface ForgeToken {
  decimal: number;
  description: string;
  icon: string;
  inflationRate: number;
  initialSupply: string;
  name: string;
  symbol: string;
  totalSupply: string;
  unit: string;
}

export interface GasEntry {
  key: string;
  value: number;
}

export interface GeoInfo {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Header {
  appHash: string;
  chainId: string;
  consensusHash: string;
  dataHash: string;
  evidenceHash: string;
  height: string;
  lastBlockId: GraphQLClient.BlockId;
  lastCommitHash: string;
  lastResultsHash: string;
  nextValidatorsHash: string;
  numTxs: string;
  proposerAddress: string;
  time: string;
  totalTxs: string;
  validatorsHash: string;
  version: GraphQLClient.Version;
}

export interface HealthStatus {
  consensus: GraphQLClient.ConsensusStatus;
  forge: GraphQLClient.ForgeStatus;
  network: GraphQLClient.NetworkStatus;
  storage: GraphQLClient.StorageStatus;
}

export interface IndexedAccountState {
  address: string;
  balance: string;
  genesisTime: string;
  migratedFrom: string;
  migratedTo: string;
  moniker: string;
  nonce: string;
  numAssets: string;
  numTxs: string;
  recentNumTxs: Array<string>;
  renaissanceTime: string;
  totalReceivedStakes: string;
  totalStakes: string;
  totalUnstakes: string;
}

export interface IndexedAssetState {
  address: string;
  consumedTime: string;
  data: GraphQLClient.Any;
  genesisTime: string;
  issuer: string;
  moniker: string;
  owner: string;
  parent: string;
  readonly: boolean;
  renaissanceTime: string;
  transferrable: boolean;
  ttl: string;
}

export interface IndexedBlock {
  height: string;
  numInvalidTxs: string;
  numTxs: string;
  proposer: string;
  time: string;
}

export interface IndexedStakeState {
  address: string;
  balance: string;
  genesisTime: string;
  message: string;
  receiver: string;
  renaissanceTime: string;
  sender: string;
  type: number;
}

export interface IndexedTransaction {
  code: GraphQLClient.StatusCode;
  hash: string;
  receiver: string;
  sender: string;
  time: string;
  tx: GraphQLClient.Transaction;
  type: string;
  valid: boolean;
}

export interface KvPair {
  key: string;
  value: string;
}

export interface LastCommitInfo {
  round: number;
  votes: Array<VoteInfo>;
}

export interface Multisig {
  data: GraphQLClient.Any;
  delegator: string;
  pk: string;
  signature: string;
  signer: string;
}

export interface NetInfo {
  listeners: Array<string>;
  listening: boolean;
  nPeers: number;
  peers: Array<PeerInfo>;
}

export interface NetworkStatus {
  health: boolean;
  numPeers: number;
}

export interface NodeInfo {
  address: string;
  appHash: string;
  blockHash: string;
  blockHeight: string;
  blockTime: string;
  consensusVersion: string;
  forgeAppsVersion: Array<ForgeAppsVersionEntry>;
  geoInfo: GraphQLClient.GeoInfo;
  id: string;
  ip: string;
  moniker: string;
  network: string;
  p2pAddress: string;
  supportedTxs: Array<string>;
  synced: boolean;
  totalTxs: string;
  version: string;
  votingPower: string;
}

export interface OpsEntry {
  key: string;
  value: GraphQLClient.DelegateOpState;
}

export interface PageInfo {
  cursor: string;
  next: boolean;
  total: number;
}

export interface PartSetHeader {
  hash: string;
  total: number;
}

export interface PeerInfo {
  consensusVersion: string;
  geoInfo: GraphQLClient.GeoInfo;
  id: string;
  ip: string;
  moniker: string;
  network: string;
}

export interface PokeConfig {
  amount: string;
  dailyLimit: string;
  enabled: boolean;
}

export interface PokeInfo {
  amount: string;
  dailyLimit: string;
  leftover: string;
}

export interface PokeTx {
  address: string;
  data: GraphQLClient.Any;
  date: string;
}

export interface Protocol {
  address: string;
  code: Array<CodeInfo>;
  data: GraphQLClient.Any;
  description: string;
  group: string;
  installedAt: string;
  name: string;
  namespace: string;
  pipeline: string;
  proto: string;
  sources: Array<string>;
  typeUrls: Array<TypeUrls>;
  version: number;
}

export interface ProtocolState {
  address: string;
  context: GraphQLClient.StateContext;
  data: GraphQLClient.Any;
  group: string;
  itx: GraphQLClient.DeployProtocolTx;
  migratedFrom: Array<string>;
  migratedTo: Array<string>;
  rootHash: string;
  status: string;
}

export interface PubKey {
  data: string;
  type: string;
}

export interface RequestBeginBlock {
  byzantineValidators: Array<Evidence>;
  hash: string;
  header: GraphQLClient.Header;
  lastCommitInfo: GraphQLClient.LastCommitInfo;
}

export interface RequestEndBlock {
  height: string;
}

export interface ResponseGetAccountState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.AccountState;
}

export interface ResponseGetAssetState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.AssetState;
}

export interface ResponseGetBlock {
  block: GraphQLClient.BlockInfo;
  code: GraphQLClient.StatusCode;
}

export interface ResponseGetBlocks {
  blocks: Array<BlockInfoSimple>;
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
}

export interface ResponseGetChainInfo {
  code: GraphQLClient.StatusCode;
  info: GraphQLClient.ChainInfo;
}

export interface ResponseGetConfig {
  code: GraphQLClient.StatusCode;
}

export interface ResponseGetDelegateState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.DelegateState;
}

export interface ResponseGetForgeState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.ForgeState;
}

export interface ResponseGetForgeStats {
  code: GraphQLClient.StatusCode;
  forgeStats: GraphQLClient.ForgeStats;
}

export interface ResponseGetHealthStatus {
  code: GraphQLClient.StatusCode;
  healthStatus: GraphQLClient.HealthStatus;
}

export interface ResponseGetNetInfo {
  code: GraphQLClient.StatusCode;
  netInfo: GraphQLClient.NetInfo;
}

export interface ResponseGetNodeInfo {
  code: GraphQLClient.StatusCode;
  info: GraphQLClient.NodeInfo;
}

export interface ResponseGetProtocolState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.ProtocolState;
}

export interface ResponseGetProtocols {
  code: GraphQLClient.StatusCode;
  protocols: Array<Protocol>;
}

export interface ResponseGetSimulatorStatus {
  code: GraphQLClient.StatusCode;
  result: string;
}

export interface ResponseGetStakeState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.StakeState;
}

export interface ResponseGetSwapState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.SwapState;
}

export interface ResponseGetTetherState {
  code: GraphQLClient.StatusCode;
  state: GraphQLClient.TetherState;
}

export interface ResponseGetTx {
  code: GraphQLClient.StatusCode;
  info: GraphQLClient.TransactionInfo;
}

export interface ResponseGetUnconfirmedTxs {
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
  unconfirmedTxs: GraphQLClient.UnconfirmedTxs;
}

export interface ResponseGetValidatorsInfo {
  code: GraphQLClient.StatusCode;
  validatorsInfo: GraphQLClient.ValidatorsInfo;
}

export interface ResponseListAssetTransactions {
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
  transactions: Array<IndexedTransaction>;
}

export interface ResponseListAssets {
  account: GraphQLClient.IndexedAccountState;
  assets: Array<IndexedAssetState>;
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
}

export interface ResponseListBlocks {
  blocks: Array<IndexedBlock>;
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
}

export interface ResponseListStakes {
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
  stakes: Array<IndexedStakeState>;
}

export interface ResponseListSwap {
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
  swap: Array<SwapState>;
}

export interface ResponseListTethers {
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
  tethers: Array<TetherState>;
}

export interface ResponseListTopAccounts {
  accounts: Array<IndexedAccountState>;
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
}

export interface ResponseListTransactions {
  code: GraphQLClient.StatusCode;
  page: GraphQLClient.PageInfo;
  transactions: Array<IndexedTransaction>;
}

export interface ResponseSendTx {
  code: GraphQLClient.StatusCode;
  hash: string;
}

export interface ResponseStartSimulator {
  code: GraphQLClient.StatusCode;
}

export interface ResponseStopSimulator {
  code: GraphQLClient.StatusCode;
}

export interface ResponseSubscribe {
  accountMigrate: GraphQLClient.Transaction;
  accountState: GraphQLClient.AccountState;
  activateProtocol: GraphQLClient.Transaction;
  approveWithdraw: GraphQLClient.Transaction;
  assetState: GraphQLClient.AssetState;
  beginBlock: GraphQLClient.RequestBeginBlock;
  code: GraphQLClient.StatusCode;
  confirm: GraphQLClient.Transaction;
  consensusUpgrade: GraphQLClient.Transaction;
  createAsset: GraphQLClient.Transaction;
  deactivateProtocol: GraphQLClient.Transaction;
  declare: GraphQLClient.Transaction;
  declareFile: GraphQLClient.Transaction;
  delegate: GraphQLClient.Transaction;
  delegateState: GraphQLClient.DelegateState;
  depositToken: GraphQLClient.Transaction;
  endBlock: GraphQLClient.RequestEndBlock;
  exchange: GraphQLClient.Transaction;
  forgeState: GraphQLClient.ForgeState;
  protocolState: GraphQLClient.ProtocolState;
  revoke: GraphQLClient.Transaction;
  revokeDelegate: GraphQLClient.Transaction;
  revokeWithdraw: GraphQLClient.Transaction;
  stake: GraphQLClient.Transaction;
  stakeState: GraphQLClient.StakeState;
  sysUpgrade: GraphQLClient.Transaction;
  topic: string;
  transfer: GraphQLClient.Transaction;
  updateAsset: GraphQLClient.Transaction;
  withdrawToken: GraphQLClient.Transaction;
}

export interface ResponseUnsubscribe {
  code: GraphQLClient.StatusCode;
}

export interface RetrieveSwapTx {
  address: string;
  data: GraphQLClient.Any;
  hashkey: string;
}

export interface RevokeSwapTx {
  address: string;
  data: GraphQLClient.Any;
}

export interface RevokeTetherTx {
  data: GraphQLClient.Any;
  tether: string;
}

export interface SetupSwapTx {
  assets: Array<string>;
  data: GraphQLClient.Any;
  hashlock: string;
  locktime: number;
  receiver: string;
  value: string;
}

export interface StakeConfig {
  timeoutGeneral: number;
  timeoutStakeForNode: number;
}

export interface StakeContext {
  recentReceivedStakes: GraphQLClient.CircularQueue;
  recentStakes: GraphQLClient.CircularQueue;
  totalReceivedStakes: string;
  totalStakes: string;
  totalUnstakes: string;
}

export interface StakeDataType {
  type: string;
}

export interface StakeState {
  address: string;
  balance: string;
  context: GraphQLClient.StateContext;
  data: GraphQLClient.Any;
  from: string;
  message: string;
  to: string;
}

export interface StakeSummary {
  context: GraphQLClient.StateContext;
  totalStakes: string;
  totalUnstakes: string;
}

export interface StakeSummaryEntry {
  key: number;
  value: GraphQLClient.StakeSummary;
}

export interface StakeTx {
  data: GraphQLClient.StakeDataType;
  message: string;
  to: string;
  value: string;
}

export interface StateContext {
  genesisTime: string;
  genesisTx: GraphQLClient.TransactionInfo;
  renaissanceTime: string;
  renaissanceTx: GraphQLClient.TransactionInfo;
}

export interface StorageStatus {
  diskSpace: GraphQLClient.DiskSpaceStatus;
  health: boolean;
  indexerServer: string;
  stateDb: string;
}

export interface SwapState {
  address: string;
  assets: Array<string>;
  context: GraphQLClient.StateContext;
  hash: string;
  hashkey: string;
  hashlock: string;
  locktime: number;
  receiver: string;
  sender: string;
  value: string;
}

export interface SysUpgradeTx {
  data: GraphQLClient.Any;
  gracePeriod: string;
  task: GraphQLClient.UpgradeTask;
}

export interface TasksEntry {
  key: string;
  value: GraphQLClient.UpgradeTasks;
}

export interface TetherExchangeInfo {
  assets: Array<string>;
  deposit: GraphQLClient.Transaction;
  value: string;
}

export interface TetherState {
  address: string;
  available: boolean;
  charge: string;
  commission: string;
  custodian: string;
  depositor: string;
  hash: string;
  locktime: string;
  target: string;
  value: string;
  withdrawer: string;
}

export interface TetherTradeInfo {
  assets: Array<string>;
  tether: string;
  value: string;
}

export interface TokenSwapConfig {
  commission: string;
  commissionHolderAddress: string;
  commissionRate: number;
  revokeCommission: number;
  withdrawInterval: number;
}

export interface Transaction {
  chainId: string;
  delegator: string;
  from: string;
  itx: Itx;
  itxJson: undefined;
  nonce: string;
  pk: string;
  signature: string;
  signatures: Array<Multisig>;
}

export interface TransactionConfig {
  declare: GraphQLClient.DeclareConfig;
  delegate: GraphQLClient.DelegateConfig;
  maxAssetSize: number;
  maxListSize: number;
  maxMultisig: number;
  minimumStake: string;
  poke: GraphQLClient.PokeConfig;
  stake: GraphQLClient.StakeConfig;
}

export interface TransactionInfo {
  accountMigrate: GraphQLClient.ExtraAccountMigrate;
  code: GraphQLClient.StatusCode;
  createAsset: GraphQLClient.ExtraCreateAsset;
  hash: string;
  height: string;
  index: number;
  tags: Array<KvPair>;
  time: string;
  tx: GraphQLClient.Transaction;
}

export interface TransferTx {
  assets: Array<string>;
  data: GraphQLClient.Any;
  to: string;
  value: string;
}

export interface TypeUrls {
  module: string;
  url: string;
}

export interface UnconfirmedTxs {
  nTxs: number;
  txs: Array<Transaction>;
}

export interface UpdateAssetTx {
  address: string;
  data: GraphQLClient.Any;
  moniker: string;
}

export interface UpgradeInfo {
  height: string;
  version: string;
}

export interface UpgradeNodeTx {
  height: string;
  override: boolean;
  version: string;
}

export interface UpgradeTask {
  actions: Array<UpgradeAction>;
  dataHash: string;
  type: GraphQLClient.UpgradeType;
}

export interface UpgradeTasks {
  item: Array<UpgradeTask>;
}

export interface Validator {
  address: string;
  power: string;
}

export interface ValidatorInfo {
  address: string;
  geoInfo: GraphQLClient.GeoInfo;
  name: string;
  proposerPriority: string;
  pubKey: GraphQLClient.PubKey;
  votingPower: string;
}

export interface ValidatorsInfo {
  blockHeight: string;
  validators: Array<ValidatorInfo>;
}

export interface Version {
  app: string;
  block: string;
}

export interface VoteInfo {
  signedLastBlock: boolean;
  validator: GraphQLClient.Validator;
}

export interface WalletType {
  address: GraphQLClient.EncodingType;
  hash: GraphQLClient.HashType;
  pk: GraphQLClient.KeyType;
  role: GraphQLClient.RoleType;
}

export interface WithdrawTetherTx {
  chainId: string;
  data: GraphQLClient.Any;
  expiredAt: string;
  from: string;
  nonce: string;
  pk: string;
  receiver: GraphQLClient.TetherTradeInfo;
  sender: GraphQLClient.ExchangeInfo;
  signature: string;
  signatures: Array<Multisig>;
}

export type Itx = GraphQLClient.RevokeSwapTx | GraphQLClient.RetrieveSwapTx | GraphQLClient.SetupSwapTx | GraphQLClient.WithdrawTetherTx | GraphQLClient.UpgradeNodeTx | GraphQLClient.UpdateAssetTx | GraphQLClient.TransferTx | GraphQLClient.SysUpgradeTx | GraphQLClient.StakeTx | GraphQLClient.RevokeTetherTx | GraphQLClient.PokeTx | GraphQLClient.ExchangeTetherTx | GraphQLClient.ExchangeTx | GraphQLClient.DepositTetherTx | GraphQLClient.DeployProtocolTx | GraphQLClient.DeclareTx | GraphQLClient.DeclareFileTx | GraphQLClient.CreateAssetTx | GraphQLClient.ConsumeAssetTx | GraphQLClient.ConsensusUpgradeTx | GraphQLClient.ApproveTetherTx | GraphQLClient.AcquireAssetTx | GraphQLClient.AccountMigrateTx;


export interface GetAccountStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetAssetStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetBlockParams {
  height: string;
}

export interface GetBlocksParams {
  emptyExcluded: boolean;
  heightFilter: undefined;
  paging: undefined;
}

export interface GetConfigParams {
  parsed: boolean;
}

export interface GetDelegateStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetForgeStateParams {
  height: string;
  keys: Array<string>;
}

export interface GetForgeStatsByDayParams {
  endDate: string;
  startDate: string;
}

export interface GetForgeStatsByHourParams {
  date: string;
}

export interface GetProtocolStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetProtocolsParams {
  address: string;
}

export interface GetStakeStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetSwapStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetTetherStateParams {
  address: string;
  height: string;
  keys: Array<string>;
}

export interface GetTxParams {
  hash: string;
}

export interface GetUnconfirmedTxsParams {
  paging: undefined;
}

export interface ListAssetTransactionsParams {
  address: string;
  paging: undefined;
}

export interface ListAssetsParams {
  ownerAddress: string;
  paging: undefined;
}

export interface ListBlocksParams {
  heightFilter: undefined;
  numInvalidTxsFilter: undefined;
  numTxsFilter: undefined;
  paging: undefined;
  proposer: string;
  timeFilter: undefined;
}

export interface ListStakesParams {
  addressFilter: undefined;
  paging: undefined;
}

export interface ListSwapParams {
  available: boolean;
  paging: string;
  receiver: string;
  sender: string;
}

export interface ListTethersParams {
  available: boolean;
  custodian: string;
  depositor: string;
  paging: string;
  withdrawer: string;
}

export interface ListTopAccountsParams {
  paging: undefined;
}

export interface ListTransactionsParams {
  addressFilter: undefined;
  paging: undefined;
  timeFilter: undefined;
  typeFilter: undefined;
  validityFilter: undefined;
}

export interface SendTxParams {
  commit: boolean;
  token: string;
  tx: string;
  wallet: string;
}

export interface UnsubscribeParams {
  topic: string;
}

export interface SubscribeParams {
  filter: string;
  topic: string;
}
}

/**
  * Connect to a forge grpc/graphql endpoint
  * Then switch the current connection of ForgeSDK to that connection
  *
  * @public
  * @function
  * @param {string} endpoint - endpoint url string
  * @param {object} options - connection config
  * @param {string} options.name - connection name
  * @param {string} options.default - set this connection as default?
  * @see GraphQLClient for methods available when connected to graphql endpoint
  * @see GRpcClient for methods available when connected to grpc endpoint
  */
declare function connect(endpoint: string, options: ConnectOptions): void;

declare interface ConnectOptions {
  name: string;
  default: bool;
}


  declare interface ForgeSDK {
    Util: ForgeSdkUtil.T100;
    Wallet: ForgeSdkWallet.T103;
    Message: ForgeSDKMessage.T101;
    connect: typeof connect;
  }

  declare const _Lib: ForgeSDK;
  export = _Lib;
