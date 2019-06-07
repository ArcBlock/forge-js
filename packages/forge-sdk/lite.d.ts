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
    pk: number;
    role: number;
    hash: number;
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
    Wallet: typeof Wallet;
    WalletType: typeof WalletType;
  }
}

/**
 * Validates if a value is an Uint8Array.
 *
 * @public
 * @static
 * @param {*} value - value to validate
 * @returns {Boolean} boolean indicating if a value is an Uint8Array
 */
declare function isUint8Array(value: any): boolean;
declare namespace ForgeSdkUtil {
  export interface T100 {
    isBN: (object: any) => boolean;
    isBigNumber: (object: any) => boolean;
    isHexPrefixed: (str: string) => boolean;
    stripHexPrefix: (str: string) => any;
    utf8ToHex: (str: string) => string;
    hexToUtf8: (hex: string) => string;
    numberToHex: (value: any) => string;
    hexToNumber: (value: any) => number;
    hexToNumberString: (value: any) => string;
    numberToBN: any;
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
declare namespace ForgeSdkUtil {
  export interface T100 {
    toAssetAddress: typeof toAssetAddress;
    toAssetDid: typeof toAssetDid;
    toItxAddress: typeof toItxAddress;
    toItxDid: typeof toItxDid;
    toStakeAddress: typeof toStakeAddress;
    toStakeDid: typeof toStakeDid;
    toTetherAddress: typeof toTetherAddress;
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

  sendExchangeTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.ExchangeTetherTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendWithdrawTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.WithdrawTetherTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendDeclareTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendAccountMigrateTx(
    param: GraphQLClient.TxParam<GraphQLClient.AccountMigrateTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendTransferTx(
    param: GraphQLClient.TxParam<GraphQLClient.TransferTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendExchangeTx(
    param: GraphQLClient.TxParam<GraphQLClient.ExchangeTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendCreateAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.CreateAssetTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendRevokeTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.RevokeTetherTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendDepositTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.DepositTetherTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendApproveTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.ApproveTetherTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendUpgradeNodeTx(
    param: GraphQLClient.TxParam<GraphQLClient.UpgradeNodeTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendUpdateAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.UpdateAssetTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendConsumeAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.ConsumeAssetTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendAcquireAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.AcquireAssetTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendPokeTx(
    param: GraphQLClient.TxParam<GraphQLClient.PokeTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendDeployProtocolTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendStakeTx(
    param: GraphQLClient.TxParam<GraphQLClient.StakeTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  encodeExchangeTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.ExchangeTetherTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeWithdrawTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.WithdrawTetherTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeDeclareTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeAccountMigrateTx(
    param: GraphQLClient.TxParam<GraphQLClient.AccountMigrateTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeTransferTx(
    param: GraphQLClient.TxParam<GraphQLClient.TransferTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeExchangeTx(
    param: GraphQLClient.TxParam<GraphQLClient.ExchangeTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeCreateAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.CreateAssetTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeRevokeTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.RevokeTetherTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeDepositTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.DepositTetherTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeApproveTetherTx(
    param: GraphQLClient.TxParam<GraphQLClient.ApproveTetherTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeUpgradeNodeTx(
    param: GraphQLClient.TxParam<GraphQLClient.UpgradeNodeTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeUpdateAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.UpdateAssetTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeConsumeAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.ConsumeAssetTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeAcquireAssetTx(
    param: GraphQLClient.TxParam<GraphQLClient.AcquireAssetTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodePokeTx(
    param: GraphQLClient.TxParam<GraphQLClient.PokeTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeDeployProtocolTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeStakeTx(
    param: GraphQLClient.TxParam<GraphQLClient.StakeTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  getAccountState(
    params: GraphQLClient.GetAccountStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAccountState>;
  getAssetState(
    params: GraphQLClient.GetAssetStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAssetState>;
  getBlock(
    params: GraphQLClient.GetBlockParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlock>;
  getBlocks(
    params: GraphQLClient.GetBlocksParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlocks>;
  getChainInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetChainInfo>;
  getConfig(
    params: GraphQLClient.GetConfigParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetConfig>;
  getForgeState(
    params: GraphQLClient.GetForgeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeState>;
  getForgeStats(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStats>;
  getForgeStatsByDay(
    params: GraphQLClient.GetForgeStatsByDayParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStats>;
  getForgeStatsByHour(
    params: GraphQLClient.GetForgeStatsByHourParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStats>;
  getHealthStatus(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetHealthStatus>;
  getNetInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetNetInfo>;
  getNodeInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetNodeInfo>;
  getProtocolState(
    params: GraphQLClient.GetProtocolStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetProtocolState>;
  getProtocols(
    params: GraphQLClient.GetProtocolsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetProtocols>;
  getSimulatorStatus(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetSimulatorStatus>;
  getStakeState(
    params: GraphQLClient.GetStakeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetStakeState>;
  getTetherState(
    params: GraphQLClient.GetTetherStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTetherState>;
  getTx(params: GraphQLClient.GetTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTx>;
  getUnconfirmedTxs(
    params: GraphQLClient.GetUnconfirmedTxsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetUnconfirmedTxs>;
  getValidatorsInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetValidatorsInfo>;
  listAssetTransactions(
    params: GraphQLClient.ListAssetTransactionsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListAssetTransactions>;
  listAssets(
    params: GraphQLClient.ListAssetsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListAssets>;
  listBlocks(
    params: GraphQLClient.ListBlocksParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListBlocks>;
  listStakes(
    params: GraphQLClient.ListStakesParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListStakes>;
  listTethers(
    params: GraphQLClient.ListTethersParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListTethers>;
  listTopAccounts(
    params: GraphQLClient.ListTopAccountsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListTopAccounts>;
  listTransactions(
    params: GraphQLClient.ListTransactionsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseListTransactions>;
  sendTx(
    params: GraphQLClient.SendTxParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseSendTx>;
  startSimulator(): GraphQLClient.QueryResult<GraphQLClient.ResponseStartSimulator>;
  stopSimulator(): GraphQLClient.QueryResult<GraphQLClient.ResponseStopSimulator>;
  unsubscribe(
    params: GraphQLClient.UnsubscribeParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseUnsubscribe>;
  subscribe(
    params: GraphQLClient.SubscribeParams
  ): GraphQLClient.SubscriptionResult<GraphQLClient.ResponseSubscribe>;
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
    wallet: GraphQLClient.WalletObject;
    signature: string;
  }

  export interface ItxParam<T> {
    nonce: number;
    from: string;
    pk: string;
    chainId: string;
    signature: string;
    signatures: array;
    itx: T;
  }

  export interface WalletObject {
    publicKey: string;
    secretKey: string;
    type: GraphQLClient.WalletTypeObject;
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

  export enum ProtocolStatus {
    PAUSED,
    RUNNING,
    TERMINATED,
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
    INVALID_DEPOSIT_TARGET,
    INVALID_MONIKER,
    UNTRANSFERRABLE_ASSET,
    INSUFFICIENT_FUND,
    INSUFFICIENT_STAKE,
    UNSUPPORTED_TX,
    CONSENSUS_RPC_ERROR,
    INSUFFICIENT_DATA,
    INVALID_REQUEST,
    INVALID_DEPOSIT,
    UNSUPPORTED_STAKE,
    INVALID_CUSTODIAN,
    CONSUMED_ASSET,
    INVALID_SIGNER_STATE,
    INVALID_TX,
    FORBIDDEN,
    INVALID_STAKE_STATE,
    EXPIRED_ASSET,
    BANNED_UNSTAKE,
    ACCOUNT_MIGRATED,
    INVALID_SENDER_STATE,
    INVALID_PASSPHRASE,
    INVALID_RECEIVER_STATE,
    INVALID_WALLET,
    INVALID_DEPOSITOR,
    INVALID_SIGNATURE,
    INVALID_DEPOSIT_VALUE,
    INVALID_LOCK_STATUS,
    EXPIRED_WALLET_TOKEN,
    INVALID_FORGE_STATE,
    STORAGE_RPC_ERROR,
    EXCEED_DEPOSIT_CAP,
    TOO_MANY_TXS,
    INVALID_NONCE,
    INVALID_EXPIRY_DATE,
    TIMEOUT,
    INVALID_TX_SIZE,
    INVALID_MULTISIG,
    INVALID_OWNER,
    DUPLICATE_TETHER,
    EXPIRED_TX,
    NOENT,
    READONLY_ASSET,
    INVALID_CHAIN_ID,
    INVALID_WITHDRAWER,
    INTERNAL,
    INVALID_ASSET,
    OK,
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

  export interface AddressFilter {}

  export interface PageInput {}

  export interface PageOrder {}

  export interface RangeFilter {}

  export interface TimeFilter {}

  export interface TypeFilter {}

  export interface ValidityFilter {}

  export interface AbciServerStatus {
    abciConsensus: string;
    abciInfo: string;
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
    height: string;
    time: string;
    totalVotingPower: string;
    type: string;
    validator: GraphQLClient.Validator;
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
    address: string;
    consensus: GraphQLClient.ConsensusParams;
    data: GraphQLClient.Any;
    forgeAppHash: string;
    pokeConfig: GraphQLClient.PokeConfig;
    protocols: Array<CoreProtocol>;
    stakeConfig: GraphQLClient.StakeConfig;
    stakeSummary: Array<StakeSummaryEntry>;
    tasks: Array<TasksEntry>;
    token: GraphQLClient.ForgeToken;
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
    genesisTime: string;
    moniker: string;
    owner: string;
    readonly: boolean;
    renaissanceTime: string;
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
    address: string;
    amount: string;
    balance: string;
    dailyLimit: string;
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
    itx: GraphQLClient.DeployProtocolTx;
    migratedFrom: Array<string>;
    migratedTo: Array<string>;
    rootHash: string;
    status: GraphQLClient.ProtocolStatus;
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
    assetState: GraphQLClient.AssetState;
    beginBlock: GraphQLClient.RequestBeginBlock;
    code: GraphQLClient.StatusCode;
    confirm: GraphQLClient.Transaction;
    consensusUpgrade: GraphQLClient.Transaction;
    createAsset: GraphQLClient.Transaction;
    declare: GraphQLClient.Transaction;
    declareFile: GraphQLClient.Transaction;
    endBlock: GraphQLClient.RequestEndBlock;
    exchange: GraphQLClient.Transaction;
    forgeState: GraphQLClient.ForgeState;
    protocolState: GraphQLClient.ProtocolState;
    revoke: GraphQLClient.Transaction;
    stake: GraphQLClient.Transaction;
    stakeState: GraphQLClient.StakeState;
    sysUpgrade: GraphQLClient.Transaction;
    topic: string;
    transfer: GraphQLClient.Transaction;
    updateAsset: GraphQLClient.Transaction;
  }

  export interface ResponseUnsubscribe {
    code: GraphQLClient.StatusCode;
  }

  export interface RevokeTetherTx {
    data: GraphQLClient.Any;
    tether: string;
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

  export interface Transaction {
    chainId: string;
    from: string;
    itx: Itx;
    nonce: string;
    pk: string;
    signature: string;
    signatures: Array<Multisig>;
  }

  export interface TransactionConfig {
    declare: GraphQLClient.DeclareConfig;
    maxAssetSize: number;
    maxListSize: number;
    maxMultisig: number;
    minimumStake: string;
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

  export type Itx =
    | GraphQLClient.WithdrawTetherTx
    | GraphQLClient.UpgradeNodeTx
    | GraphQLClient.UpdateAssetTx
    | GraphQLClient.TransferTx
    | GraphQLClient.SysUpgradeTx
    | GraphQLClient.StakeTx
    | GraphQLClient.RevokeTetherTx
    | GraphQLClient.PokeTx
    | GraphQLClient.ExchangeTetherTx
    | GraphQLClient.ExchangeTx
    | GraphQLClient.DepositTetherTx
    | GraphQLClient.DeployProtocolTx
    | GraphQLClient.DeclareTx
    | GraphQLClient.DeclareFileTx
    | GraphQLClient.CreateAssetTx
    | GraphQLClient.ConsumeAssetTx
    | GraphQLClient.ConsensusUpgradeTx
    | GraphQLClient.ApproveTetherTx
    | GraphQLClient.AcquireAssetTx
    | GraphQLClient.AccountMigrateTx;

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
