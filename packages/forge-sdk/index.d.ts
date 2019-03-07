declare class RpcClient {
  config: any;
  constructor(config: any);
  /**
   * Arc is the smallest, infungible unit used for Forge Apps. If app define decimal as 16,
   * then 1 token (e.g. ABT) = 10^16 arc. When sending transfer tx or exchange tx,
   * the value shall be created with Arc.
   */
  fromArc(value: any): any;
  toArc(value: any): any;
  /**
   * List standard rpc methods
   *
   * @returns Object
   * @memberof RpcClient
   */
  listRpcMethods(): ForgeSDK.T100;
  /**
   * List standard rpc methods
   *
   * @returns Object
   * @memberof RpcClient
   */
  listTxMethods(): ForgeSDK.T100;
  processOne(request: forge_abi.Request): RpcClient.UnaryResult<forge_abi.Response>;
  process(
    request: forge_abi.Request | Array<forge_abi.Request>
  ): RpcClient.StreamResult<forge_abi.Response>;
  createTx(request: forge_abi.RequestCreateTx): RpcClient.UnaryResult<forge_abi.ResponseCreateTx>;
  multisig(request: forge_abi.RequestMultisig): RpcClient.UnaryResult<forge_abi.ResponseMultisig>;
  sendTx(request: forge_abi.RequestSendTx): RpcClient.UnaryResult<forge_abi.ResponseSendTx>;
  getTx(
    request: forge_abi.RequestGetTx | Array<forge_abi.RequestGetTx>
  ): RpcClient.StreamResult<forge_abi.ResponseGetTx>;
  getBlock(
    request: forge_abi.RequestGetBlock | Array<forge_abi.RequestGetBlock>
  ): RpcClient.StreamResult<forge_abi.ResponseGetBlock>;
  getBlocks(
    request: forge_abi.RequestGetBlocks
  ): RpcClient.UnaryResult<forge_abi.ResponseGetBlocks>;
  getUnconfirmedTxs(
    request: forge_abi.RequestGetUnconfirmedTxs
  ): RpcClient.UnaryResult<forge_abi.ResponseGetUnconfirmedTxs>;
  getChainInfo(
    request: forge_abi.RequestGetChainInfo
  ): RpcClient.UnaryResult<forge_abi.ResponseGetChainInfo>;
  getNodeInfo(
    request: forge_abi.RequestGetNodeInfo
  ): RpcClient.UnaryResult<forge_abi.ResponseGetNodeInfo>;
  search(request: forge_abi.RequestSearch): RpcClient.UnaryResult<forge_abi.ResponseSearch>;
  getNetInfo(
    request: forge_abi.RequestGetNetInfo
  ): RpcClient.UnaryResult<forge_abi.ResponseGetNetInfo>;
  getValidatorsInfo(
    request: forge_abi.RequestGetValidatorsInfo
  ): RpcClient.UnaryResult<forge_abi.ResponseGetValidatorsInfo>;
  getConfig(
    request: forge_abi.RequestGetConfig
  ): RpcClient.UnaryResult<forge_abi.ResponseGetConfig>;
  getAssetAddress(
    request: forge_abi.RequestGetAssetAddress
  ): RpcClient.UnaryResult<forge_abi.ResponseGetAssetAddress>;
  signData(request: forge_abi.RequestSignData): RpcClient.UnaryResult<forge_abi.ResponseSignData>;
  subscribe(
    request: forge_abi.RequestSubscribe
  ): RpcClient.StreamResult<forge_abi.ResponseSubscribe>;
  unsubscribe(
    request: forge_abi.RequestUnsubscribe
  ): RpcClient.UnaryResult<forge_abi.ResponseUnsubscribe>;
  storeFile(
    request: forge_abi.RequestStoreFile | Array<forge_abi.RequestStoreFile>
  ): RpcClient.UnaryResult<forge_abi.ResponseStoreFile>;
  loadFile(request: forge_abi.RequestLoadFile): RpcClient.StreamResult<forge_abi.ResponseLoadFile>;
  pinFile(request: forge_abi.RequestPinFile): RpcClient.UnaryResult<forge_abi.ResponsePinFile>;
  getAccountState(
    request: forge_abi.RequestGetAccountState | Array<forge_abi.RequestGetAccountState>
  ): RpcClient.StreamResult<forge_abi.ResponseGetAccountState>;
  getAssetState(
    request: forge_abi.RequestGetAssetState | Array<forge_abi.RequestGetAssetState>
  ): RpcClient.StreamResult<forge_abi.ResponseGetAssetState>;
  getStakeState(
    request: forge_abi.RequestGetStakeState | Array<forge_abi.RequestGetStakeState>
  ): RpcClient.StreamResult<forge_abi.ResponseGetStakeState>;
  getForgeState(
    request: forge_abi.RequestGetForgeState
  ): RpcClient.UnaryResult<forge_abi.ResponseGetForgeState>;
  createWallet(
    request: forge_abi.RequestCreateWallet
  ): RpcClient.UnaryResult<forge_abi.ResponseCreateWallet>;
  loadWallet(
    request: forge_abi.RequestLoadWallet
  ): RpcClient.UnaryResult<forge_abi.ResponseLoadWallet>;
  recoverWallet(
    request: forge_abi.RequestRecoverWallet
  ): RpcClient.UnaryResult<forge_abi.ResponseRecoverWallet>;
  listWallet(
    request: forge_abi.RequestListWallet
  ): RpcClient.StreamResult<forge_abi.ResponseListWallet>;
  removeWallet(
    request: forge_abi.RequestRemoveWallet
  ): RpcClient.UnaryResult<forge_abi.ResponseRemoveWallet>;
  declareNode(
    request: forge_abi.RequestDeclareNode
  ): RpcClient.UnaryResult<forge_abi.ResponseDeclareNode>;
  getForgeStatistics(
    request: forge_abi.RequestGetForgeStatistics
  ): RpcClient.UnaryResult<forge_abi.ResponseGetForgeStatistics>;
  listTransactions(
    request: forge_abi.RequestListTransactions
  ): RpcClient.UnaryResult<forge_abi.ResponseListTransactions>;
  getAssets(
    request: forge_abi.RequestGetAssets
  ): RpcClient.UnaryResult<forge_abi.ResponseGetAssets>;
  getStakes(
    request: forge_abi.RequestGetStakes
  ): RpcClient.UnaryResult<forge_abi.ResponseGetStakes>;
  getTopAccounts(
    request: forge_abi.RequestGetTopAccounts
  ): RpcClient.UnaryResult<forge_abi.ResponseGetTopAccounts>;
  listAssetTransactions(
    request: forge_abi.RequestListAssetTransactions
  ): RpcClient.UnaryResult<forge_abi.ResponseListAssetTransactions>;
}
/**
 * Create new TCP Server to handle transactions from forge-core
 *
 * @param {*} config
 * @returns net.Server
 */
declare function create(config: any): Readonly<ForgeSDK.T101>;
declare function addSource(T104: any): void;
declare function parseConfig(configPath: any): any;
/**
 * Create an protobuf encoded Typed message with specified data, ready to send to rpc server
 *
 * @param {*} type
 * @param {*} params
 * @returns Message
 */
declare function createMessage(type: any, params: any): any;
/**
 * Format an message from RPC to UI friendly
 *
 * @param {*} type
 * @param {*} data
 * @returns object [almost same structure as input]
 */
declare function formatMessage(type: any, data: any): any;
/**
 * Generated a fake message for a type, the message can be RPC request/response
 *
 * @param {String} type
 */
declare function fakeMessage(type: string): any;
/**
 * Encode { type, value } => google.protobuf.Any%{ typeUrl, value }
 * Does nothing on already encoded message
 *
 * @param {*} data
 * @returns google.protobuf.Any
 */
declare function encodeAny(data: any): any;
/**
 * Decode an google.protobuf.Any%{ typeUrl, value } => { type, value }
 *
 * @param {*} data encoded data object
 * @returns Object%{type, value}
 */
declare function decodeAny(data: any): any;
/**
 * Convert an { seconds, nanos } | date-string to google.protobuf.Timestamp object
 *
 * @param {String|Object} value
 * @returns google.protobuf.Timestamp
 */
declare function encodeTimestamp(value: any): any;
/**
 * Decode google.protobuf.Timestamp message to ISO Date String
 *
 * FIXME: node strictly equal because we rounded the `nanos` field
 *
 * @param {*} data
 * @returns String
 */
declare function decodeTimestamp(data: any): string;
/**
 * Encode BigUint and BigSint types defined in forge-sdk, double encoding is avoided
 *
 * @param {*} value
 * @param {*} type
 * @returns Message
 */
declare function encodeBigInt(value: any, type: any): any;
/**
 * Convert BigUint and BigSint to string representation of numbers
 *
 * @link https://stackoverflow.com/questions/23948278/how-to-convert-byte-array-into-a-signed-big-integer-in-javascript
 * @param {*} data
 * @returns String
 */
declare function decodeBigInt(data: any): string;
declare const Buffer: ForgeSDK.T103;
declare function encode(data: any, type: any): Buffer;
/**
 * Decode socket data from forge-core
 * TODO: handle rest buffer that exceeds the length
 *
 * @param {*} buffer
 * @param {*} type
 * @returns
 */
declare function decode(buffer: any, type: any): any;
/**
 * Decode any fields in payload for direct use
 *
 * @param {Object} payload
 * @returns payload
 */
declare function decodePayload(payload: any): any;
declare const ForgeSDK: ForgeSDK.T104;
declare namespace ForgeSDK {
  export interface T100 {
    [key: string]: any;
  }
  export interface T101 {
    host: any;
    port: any;
    addHandler: any;
    removeHandler: any;
    start(done: any): void;
    close(done: any): void;
  }
  export interface T102 {
    create: typeof create;
  }
  export interface T103 {
    prototype: Buffer;
    /**
     * When passed a reference to the .buffer property of a TypedArray instance,
     * the newly created Buffer will share the same allocated memory as the TypedArray.
     * The optional {byteOffset} and {length} arguments specify a memory range
     * within the {arrayBuffer} that will be shared by the Buffer.
     *
     * @param arrayBuffer The .buffer property of any TypedArray or a new ArrayBuffer()
     */
    from(
      arrayBuffer: ArrayBuffer | SharedArrayBuffer,
      byteOffset?: number,
      length?: number
    ): Buffer;
    /**
     * Creates a new Buffer using the passed {data}
     * @param values to create a new Buffer
     */
    of(...items: number[]): Buffer;
    /**
     * Returns true if {obj} is a Buffer
     *
     * @param obj object to test.
     */
    isBuffer(obj: any): any;
    /**
     * Returns true if {encoding} is a valid encoding argument.
     * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
     *
     * @param encoding string to test.
     */
    isEncoding(encoding: string): boolean;
    /**
     * Gives the actual byte length of a string. encoding defaults to 'utf8'.
     * This is not the same as String.prototype.length since that returns the number of characters in a string.
     *
     * @param string string to test.
     * @param encoding encoding used to evaluate (defaults to 'utf8')
     */
    byteLength(
      string:
        | string
        | Uint8Array
        | ArrayBuffer
        | SharedArrayBuffer
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Int8Array
        | Int16Array
        | Int32Array
        | Float32Array
        | Float64Array
        | DataView,
      encoding?: string
    ): number;
    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     *
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     *
     * @param list An array of Buffer objects to concatenate
     * @param totalLength Total length of the buffers when concatenated.
     *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     */
    concat(list: Uint8Array[], totalLength?: number): Buffer;
    /**
     * The same as buf1.compare(buf2).
     */
    compare(buf1: Uint8Array, buf2: Uint8Array): number;
    /**
     * Allocates a new buffer of {size} octets.
     *
     * @param size count of octets to allocate.
     * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
     *    If parameter is omitted, buffer will be filled with zeros.
     * @param encoding encoding used for call to buf.fill while initalizing
     */
    alloc(size: number, fill?: string | number | Buffer, encoding?: string): Buffer;
    /**
     * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
     * of the newly created Buffer are unknown and may contain sensitive data.
     *
     * @param size count of octets to allocate
     */
    allocUnsafe(size: number): Buffer;
    /**
     * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
     * of the newly created Buffer are unknown and may contain sensitive data.
     *
     * @param size count of octets to allocate
     */
    allocUnsafeSlow(size: number): Buffer;
    /**
     * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
     */
    poolSize: number;
  }
  export interface T104 {
    RpcClient: typeof RpcClient;
    TcpServer: ForgeSDK.T102;
    addProtobuf: typeof addSource;
    parseConfig: typeof parseConfig;
    createMessage: typeof createMessage;
    formatMessage: typeof formatMessage;
    fakeMessage: typeof fakeMessage;
    encodeAny: typeof encodeAny;
    decodeAny: typeof decodeAny;
    encodeTimestamp: typeof encodeTimestamp;
    decodeTimestamp: typeof decodeTimestamp;
    encodeBigInt: typeof encodeBigInt;
    decodeBigInt: typeof decodeBigInt;
    encodeVarint: (v: any) => any;
    decodeVarint: (buffer: any) => any;
    encodeZigzag: (v: any) => any;
    decodeZigzag: (buffer: any) => any[];
    encodeSocketData: typeof encode;
    decodeSocketData: typeof decode;
    decodePayload: typeof decodePayload;
  }
}
export = ForgeSDK;

declare namespace forge_abi {
  export interface RequestVerifyTx {
    tx: forge_abi.Transaction;
    states: Array<forge_abi.AccountState>;
    assets: Array<forge_abi.AssetState>;
    stakes: Array<forge_abi.StakeState>;
    context: forge_abi.AbciContext;
    appState: forge_abi.ForgeState;
  }

  export interface ResponseVerifyTx {
    code: forge_abi.StatusCode;
  }

  export interface RequestUpdateState {
    tx: forge_abi.Transaction;
    states: Array<forge_abi.AccountState>;
    assets: Array<forge_abi.AssetState>;
    stakes: Array<forge_abi.StakeState>;
    context: forge_abi.AbciContext;
    appState: forge_abi.ForgeState;
  }

  export interface ResponseUpdateState {
    code: forge_abi.StatusCode;
    states: Array<forge_abi.AccountState>;
    assets: Array<forge_abi.AssetState>;
    stakes: Array<forge_abi.StakeState>;
    appState: forge_abi.ForgeState;
  }

  export interface RequestInfo {
    forgeVersion: string;
  }

  export interface ResponseInfo {
    typeUrls: Array<string>;
    appHash: Uint8Array;
  }

  export interface Request {
    verifyTx: forge_abi.RequestVerifyTx;
    updateState: forge_abi.RequestUpdateState;
    info: forge_abi.RequestInfo;
  }

  export interface Response {
    verifyTx: forge_abi.ResponseVerifyTx;
    updateState: forge_abi.ResponseUpdateState;
    info: forge_abi.ResponseInfo;
  }

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
    FORBIDDEN = 403,
    INTERNAL = 500,
  }

  export enum TopicType {
    TRANSFER = 0,
    EXCHANGE = 1,
    DECLARE = 2,
    CREATE_ASSET = 3,
    UPDATE_ASSET = 4,
    STAKE = 5,
    ACCOUNT_MIGRATE = 6,
    BEGIN_BLOCK = 16,
    END_BLOCK = 17,
    CONSENSUS_UPGRADE = 21,
    DECLARE_FILE = 22,
    SYS_UPGRADE = 23,
    APPLICATION = 24,
    CONSUME_ASSET = 25,
    ACCOUNT_STATE = 129,
    ASSET_STATE = 130,
    FORGE_STATE = 131,
    STAKE_STATE = 132,
  }

  export enum KeyType {
    ED25519 = 0,
    SECP256K1 = 1,
  }

  export enum HashType {
    KECCAK = 0,
    SHA3 = 1,
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

  export interface BigUint {
    value: Uint8Array;
  }

  export interface BigSint {
    value: Uint8Array;
    minus: forge_abi.bool;
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
    synced: forge_abi.bool;
    appHash: Uint8Array;
    blockHash: Uint8Array;
    blockHeight: number;
    blockTime: google.protobuf.Timestamp;
    address: string;
    votingPower: number;
    totalTxs: number;
    version: string;
    dataVersion: string;
    forgeAppsVersion: string;
    supportedTxs: Array<string>;
  }

  export interface NodeInfo {
    id: string;
    network: string;
    moniker: string;
    consensusVersion: string;
    synced: forge_abi.bool;
    appHash: Uint8Array;
    blockHash: Uint8Array;
    blockHeight: number;
    blockTime: google.protobuf.Timestamp;
    address: string;
    votingPower: number;
    totalTxs: number;
    version: string;
    dataVersion: string;
    forgeAppsVersion: string;
    supportedTxs: Array<string>;
    ip: string;
    geoInfo: forge_abi.GeoInfo;
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
    validatorChanged: forge_abi.bool;
    paramChanged: forge_abi.bool;
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
    signature: Uint8Array;
    data: google.protobuf.Any;
  }

  export interface Transaction {
    from: string;
    nonce: number;
    signature: Uint8Array;
    chainId: string;
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

  export interface BlockInfo {
    height: number;
    numTxs: number;
    time: google.protobuf.Timestamp;
    appHash: string;
    proposer: string;
    txs: Array<forge_abi.TransactionInfo>;
    totalTxs: number;
    invalidTxs: Array<forge_abi.TransactionInfo>;
    txsHashes: Array<string>;
    invalidTxsHashes: Array<string>;
  }

  export interface TxStatus {
    code: forge_abi.StatusCode;
    hash: string;
  }

  export interface CircularQueue {
    items: Array<Uint8Array>;
    typeUrl: string;
    maxItems: number;
    circular: forge_abi.bool;
    fifo: forge_abi.bool;
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

  export interface UnconfirmedTxs {
    nTxs: number;
    txs: Array<forge_abi.Transaction>;
  }

  export interface NetInfo {
    listening: forge_abi.bool;
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
  }

  export interface GenesisInfo {
    genesisTime: string;
    chainId: string;
    consensusParams: abci_vendor.ConsensusParams;
    validators: Array<forge_abi.ValidatorInfo>;
    appHash: string;
  }

  export interface ForgeStatistics {
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
    migratedTo: Array<string>;
    migratedFrom: Array<string>;
    numAssets: number;
    stake: forge_abi.StakeContext;
    pinnedFiles: forge_abi.CircularQueue;
    data: google.protobuf.Any;
  }

  export interface AssetState {
    address: string;
    owner: string;
    moniker: string;
    readonly: forge_abi.bool;
    transferrable: forge_abi.bool;
    ttl: number;
    consumedTime: google.protobuf.Timestamp;
    issuer: string;
    stake: forge_abi.StakeContext;
    context: forge_abi.StateContext;
    data: google.protobuf.Any;
  }

  export interface ForgeState {
    address: string;
    consensus: forge_abi.ConsensusParams;
    tasks: forge_abi.UpgradeTasks;
    stakeSummary: forge_abi.StakeSummary;
    version: string;
    dataVersion: string;
    forgeAppHash: Uint8Array;
    token: forge_abi.ForgeToken;
    data: google.protobuf.Any;
  }

  export interface RootState {
    address: string;
    account: Uint8Array;
    asset: Uint8Array;
    receipt: Uint8Array;
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
  }

  export interface ResponseMultisig {
    code: forge_abi.StatusCode;
    tx: forge_abi.Transaction;
  }

  export interface RequestSendTx {
    tx: forge_abi.Transaction;
    wallet: forge_abi.WalletInfo;
    token: string;
    commit: forge_abi.bool;
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
    minHeight: number;
    maxHeight: number;
    emptyExcluded: forge_abi.bool;
  }

  export interface ResponseGetBlocks {
    code: forge_abi.StatusCode;
    page: forge_abi.PageInfo;
    blocks: Array<forge_abi.BlockInfo>;
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

  export interface RequestListWallet {}

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
    validator: forge_abi.bool;
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

  export interface RequestGetChainInfo {}

  export interface ResponseGetChainInfo {
    code: forge_abi.StatusCode;
    info: forge_abi.ChainInfo;
  }

  export interface RequestGetNodeInfo {}

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
    limit: number;
  }

  export interface ResponseGetUnconfirmedTxs {
    code: forge_abi.StatusCode;
    unconfirmedTxs: forge_abi.UnconfirmedTxs;
  }

  export interface RequestGetNetInfo {}

  export interface ResponseGetNetInfo {
    code: forge_abi.StatusCode;
    netInfo: forge_abi.NetInfo;
  }

  export interface RequestGetValidatorsInfo {}

  export interface ResponseGetValidatorsInfo {
    code: forge_abi.StatusCode;
    validatorsInfo: forge_abi.ValidatorsInfo;
  }

  export interface RequestSubscribe {
    type: forge_abi.TopicType;
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
    accountState: forge_abi.Transaction;
    assetState: forge_abi.Transaction;
    forgeState: forge_abi.Transaction;
    stakeState: forge_abi.Transaction;
  }

  export interface RequestUnsubscribe {
    topic: string;
  }

  export interface ResponseUnsubscribe {
    code: forge_abi.StatusCode;
  }

  export interface RequestGetConfig {}

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

  export interface RequestGetForgeStatistics {
    dayInfo: forge_abi.ByDay;
    date: forge_abi.ByHour;
  }

  export interface ResponseGetForgeStatistics {
    code: forge_abi.StatusCode;
    forgeStatistics: forge_abi.ForgeStatistics;
  }

  export interface RequestListTransactions {
    paging: forge_abi.PageInput;
    timeFilter: forge_abi.TimeFilter;
    addressFilter: forge_abi.AddressFilter;
    typeFilter: forge_abi.TypeFilter;
  }

  export interface ResponseListTransactions {
    code: forge_abi.StatusCode;
    page: forge_abi.PageInfo;
    transactions: Array<forge_abi.IndexedTransaction>;
  }

  export interface RequestGetAssetAddress {
    senderAddress: string;
    itx: forge_abi.CreateAssetTx;
    walletType: forge_abi.WalletType;
  }

  export interface ResponseGetAssetAddress {
    code: forge_abi.StatusCode;
    assetAddress: string;
  }

  export interface RequestSignData {
    data: Uint8Array;
    wallet: forge_abi.WalletInfo;
    token: string;
  }

  export interface ResponseSignData {
    code: forge_abi.StatusCode;
    signature: Uint8Array;
  }

  export interface RequestGetAssets {
    paging: forge_abi.PageInput;
    ownerAddress: string;
  }

  export interface ResponseGetAssets {
    code: forge_abi.StatusCode;
    page: forge_abi.PageInfo;
    assets: Array<forge_abi.IndexedAssetState>;
  }

  export interface RequestGetStakes {
    paging: forge_abi.PageInput;
    addressFilter: forge_abi.AddressFilter;
  }

  export interface ResponseGetStakes {
    code: forge_abi.StatusCode;
    page: forge_abi.PageInfo;
    stakes: Array<forge_abi.IndexedStakeState>;
  }

  export interface RequestGetTopAccounts {
    paging: forge_abi.PageInput;
  }

  export interface ResponseGetTopAccounts {
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

  export interface AccountMigrateTx {
    pk: Uint8Array;
    type: forge_abi.WalletType;
  }

  export interface ConsensusUpgradeTx {
    validators: Array<forge_abi.Validator>;
    maxBytes: number;
    maxGas: number;
    maxValidators: number;
    maxCandidates: number;
    data: google.protobuf.Any;
  }

  export interface ConsumeAssetTx {
    issuer: string;
    address: string;
    data: google.protobuf.Any;
  }

  export interface CreateAssetTx {
    moniker: string;
    data: google.protobuf.Any;
    readonly: forge_abi.bool;
    transferrable: forge_abi.bool;
    ttl: number;
    parent: string;
  }

  export interface DeclareTx {
    moniker: string;
    pk: Uint8Array;
    type: forge_abi.WalletType;
    issuer: string;
    data: google.protobuf.Any;
  }

  export interface DeclareFileTx {
    hash: string;
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

  export interface stakeForAsset {}

  export interface stakeForChain {}

  export interface StakeForNode {}

  export interface stakeForUser {}

  export interface StakeTx {
    to: string;
    value: forge_abi.BigSint;
    message: string;
    data: google.protobuf.Any;
  }

  export interface SysUpgradeTx {
    task: forge_abi.UpgradeTask;
    gracePeriod: number;
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
    next: forge_abi.bool;
    total: number;
  }

  export interface IndexedTransaction {
    hash: string;
    sender: string;
    receiver: string;
    time: string;
    type: string;
    tx: forge_abi.Transaction;
    consumeAsset: forge_abi.IndexedConsumeAsset;
    createAsset: forge_abi.IndexedCreateAsset;
    exchange: forge_abi.IndexedExchange;
    transfer: forge_abi.IndexedTransfer;
    updateAsset: forge_abi.IndexedUpdateAsset;
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
    readonly: forge_abi.bool;
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

  export interface IndexedConsumeAsset {
    asset: string;
  }

  export interface IndexedCreateAsset {
    asset: string;
  }

  export interface IndexedExchange {
    senderAssets: Array<string>;
    receiverAssets: Array<string>;
  }

  export interface IndexedTransfer {
    assets: Array<string>;
  }

  export interface IndexedUpdateAsset {
    asset: string;
  }
}

declare namespace google.protobuf {
  export interface Timestamp {
    seconds: google.protobuf.int64;
    nanos: google.protobuf.int32;
  }

  export interface Any {
    type_url: string;
    value: Uint8Array;
  }
}

declare namespace abci_vendor {
  export interface KVPair {
    key: Uint8Array;
    value: Uint8Array;
  }

  export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
  }

  export interface Proof {
    ops: Array<abci_vendor.ProofOp>;
  }

  export interface BlockSizeParams {
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
    blockSize: abci_vendor.BlockSizeParams;
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

  export interface PartSetHeader {
    total: abci_vendor.int32;
    hash: Uint8Array;
  }

  export interface BlockID {
    hash: Uint8Array;
    partsHeader: abci_vendor.PartSetHeader;
  }

  export interface Validator {
    address: Uint8Array;
    power: abci_vendor.int64;
  }

  export interface PubKey {
    type: string;
    data: Uint8Array;
  }

  export interface ValidatorUpdate {
    pubKey: abci_vendor.PubKey;
    power: abci_vendor.int64;
  }

  export interface VoteInfo {
    validator: abci_vendor.Validator;
    signedLastBlock: abci_vendor.bool;
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

  export interface RequestEcho {
    message: string;
  }

  export interface RequestFlush {}

  export interface RequestInfo {
    version: string;
    blockVersion: number;
    p2pVersion: number;
  }

  export interface RequestSetOption {
    key: string;
    value: string;
  }

  export interface RequestInitChain {
    time: google.protobuf.Timestamp;
    chainId: string;
    consensusParams: abci_vendor.ConsensusParams;
    validators: Array<abci_vendor.ValidatorUpdate>;
    appStateBytes: Uint8Array;
  }

  export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: abci_vendor.int64;
    prove: abci_vendor.bool;
  }

  export interface RequestBeginBlock {
    hash: Uint8Array;
    header: abci_vendor.Header;
    lastCommitInfo: abci_vendor.LastCommitInfo;
    byzantineValidators: Array<abci_vendor.Evidence>;
  }

  export interface RequestCheckTx {
    tx: Uint8Array;
  }

  export interface RequestDeliverTx {
    tx: Uint8Array;
  }

  export interface RequestEndBlock {
    height: abci_vendor.int64;
  }

  export interface RequestCommit {}

  export interface Request {
    echo: abci_vendor.RequestEcho;
    flush: abci_vendor.RequestFlush;
    info: abci_vendor.RequestInfo;
    setOption: abci_vendor.RequestSetOption;
    initChain: abci_vendor.RequestInitChain;
    query: abci_vendor.RequestQuery;
    beginBlock: abci_vendor.RequestBeginBlock;
    checkTx: abci_vendor.RequestCheckTx;
    deliverTx: abci_vendor.RequestDeliverTx;
    endBlock: abci_vendor.RequestEndBlock;
    commit: abci_vendor.RequestCommit;
  }

  export interface ResponseException {
    error: string;
  }

  export interface ResponseEcho {
    message: string;
  }

  export interface ResponseFlush {}

  export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: number;
    lastBlockHeight: abci_vendor.int64;
    lastBlockAppHash: Uint8Array;
  }

  export interface ResponseSetOption {
    code: number;
    log: string;
    info: string;
  }

  export interface ResponseInitChain {
    consensusParams: abci_vendor.ConsensusParams;
    validators: Array<abci_vendor.ValidatorUpdate>;
  }

  export interface ResponseQuery {
    code: number;
    log: string;
    info: string;
    index: abci_vendor.int64;
    key: Uint8Array;
    value: Uint8Array;
    proof: abci_vendor.Proof;
    height: abci_vendor.int64;
    codespace: string;
  }

  export interface ResponseBeginBlock {
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

  export interface ResponseEndBlock {
    validatorUpdates: Array<abci_vendor.ValidatorUpdate>;
    consensusParamUpdates: abci_vendor.ConsensusParams;
    tags: Array<abci_vendor.KVPair>;
  }

  export interface ResponseCommit {
    data: Uint8Array;
  }

  export interface Response {
    exception: abci_vendor.ResponseException;
    echo: abci_vendor.ResponseEcho;
    flush: abci_vendor.ResponseFlush;
    info: abci_vendor.ResponseInfo;
    setOption: abci_vendor.ResponseSetOption;
    initChain: abci_vendor.ResponseInitChain;
    query: abci_vendor.ResponseQuery;
    beginBlock: abci_vendor.ResponseBeginBlock;
    checkTx: abci_vendor.ResponseCheckTx;
    deliverTx: abci_vendor.ResponseDeliverTx;
    endBlock: abci_vendor.ResponseEndBlock;
    commit: abci_vendor.ResponseCommit;
  }

  export interface RequestPing {}

  export interface RequestBroadcastTx {
    tx: Uint8Array;
  }

  export interface ResponsePing {}

  export interface ResponseBroadcastTx {
    checkTx: abci_vendor.ResponseCheckTx;
    deliverTx: abci_vendor.ResponseDeliverTx;
  }
}

declare namespace RpcClient {
  export interface UnaryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface StreamResult<T> {
    on(event: 'data', fn: (data: T) => any): this;
    on(event: 'error', fn: (err: Error) => void): this;
  }
}
