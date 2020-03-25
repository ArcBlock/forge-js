
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
 * Convert input to Uint8Array on best effort, base64 node supported
 *
 * @public
 * @static
 * @param {buffer|base58|hex|Uint8Array|string} v
 * @returns {Uint8Array}
 * @throws {Error}
 */
declare function toUint8Array(v: any): Uint8Array;
/**
 * Convert input to Buffer on best effort, base64 not supported
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
 * Decode base64(base64_url) string to buffer
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
 * Convert did to address: remove `did:abt:` prefix
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
    fromUnitToToken: (input: string | number, decimal?: number, optionsInput?: any) => string;
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

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */

/*~ Write your module's methods and properties in this class */
declare interface ForgeSDK {

  getQueries(): string[];
  getSubscriptions(): string[];
  getMutations(): string[];

  /**
   * Send raw query to forge and return results
   *
   * @param {*} query
   * @memberof GraphQLClient
   * @return Promise
   */
  doRawQuery(query: any, requestOptions?: any): Promise<any>;
  doRawSubscription(query: any): Promise<any>;

  doBatchQuery(queries: object, requestOptions?: any): Promise<object>;

  fromUnitToToken(value: string): Promise<string>;
  fromTokenToUnit(amount: number): Promise<BN>;
  toLocktime(number: number, options: any): Promise<number>;
  getTxSendMethods(): Array<string>;
  getTxSendMethods(): Array<string>;
  getTxSignMethods(): Array.<string>;
  getTxMultiSignMethods(): Array.<string>;
  getType(x: string): Object;
  decodeTx(input: string|buffer): object;
  declare(params: object, extra: any): Promise<string>;
  migrateAccount(params: object, extra: any): Promise<string>;
  delegate(params: object, extra: any): Promise<string>;
  revokeDelegate(params: object, extra: any): Promise<string>;
  createAsset(params: object, extra: any):  Promise<string>;
  updateAsset(params: object, extra: any):  Promise<string>;
  prepareConsumeAsset(params: object, extra: any): Promise<string>;
  finalizeConsumeAsset(params: object, extra: any): Promise<string>;
  consumeAsset(params: object, extra: any): Promise<string>;
  createAssetFactory(params: object, extra: any): Promise<string>;
  acquireAsset(params: object, extra: any): Promise<string>;
  upgradeNode(params: object, extra: any): Promise<string>;
  setupSwap(params: object, extra: any): Promise<string>;
  retrieveSwap(params: object, extra: any): Promise<string>;
  revokeSwap(params: object, extra: any): Promise<string>;
  transfer(params: object, extra: any): Promise<string>;
  prepareExchange(params: object, extra: any): Promise<string>;
  finalizeExchange(params: object, extra: any): Promise<string>;
  exchange(params: object, extra: any): Promise<string>;
  checkin(params: object, extra: any): Promise<string>;
  refuel(params: object, extra: any): Promise<string>;

  generateQueryFns(): void;
  generateSubscriptionFns(): void;
  generateMutationFns(): void;

  
  
  
  
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
getSwapStatistics(params: GraphQLClient.GetSwapStatisticsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetSwapStatistics>
getTx(params: GraphQLClient.GetTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTx>
getUnconfirmedTxs(params: GraphQLClient.GetUnconfirmedTxsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetUnconfirmedTxs>
getValidatorsInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetValidatorsInfo>
listAssetTransactions(params: GraphQLClient.ListAssetTransactionsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListAssetTransactions>
listAssets(params: GraphQLClient.ListAssetsParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListAssets>
listBlocks(params: GraphQLClient.ListBlocksParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListBlocks>
listStakes(params: GraphQLClient.ListStakesParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListStakes>
listSwap(params: GraphQLClient.ListSwapParams): GraphQLClient.QueryResult<GraphQLClient.ResponseListSwap>
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
    delegator: string;
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
  ROLE_TX,
  ROLE_VALIDATOR,
}

export enum StatusCode {
  INVALID_DEACTIVATION,
  INSUFFICIENT_GAS,
  INVALID_DEPOSIT_TARGET,
  EXCEED_DEPOSIT_CAP,
  INVALID_REQUEST,
  INVALID_DELEGATION_TYPE_URL,
  INVALID_SIGNATURE,
  EXPIRED_ASSET,
  INVALID_OWNER,
  INVALID_NONCE,
  UNSUPPORTED_STAKE,
  INVALID_FORGE_STATE,
  SENDER_WITHDRAW_ITEMS_FULL,
  PROTOCOL_NOT_RUNNING,
  INVALID_CHAIN_ID,
  VALIDATOR_NOT_FOUND,
  INVALID_PASSPHRASE,
  FORBIDDEN,
  ACCOUNT_MIGRATED,
  RPC_CONNECTION_ERROR,
  READONLY_ASSET,
  INVALID_TX_SIZE,
  INVALID_DEPOSIT,
  PROTOCOL_NOT_PAUSED,
  INVALID_SUBSCRIBE,
  INVALID_DEPOSIT_VALUE,
  INVALID_TIME,
  INVALID_DID_TYPE,
  INVALID_TX,
  CONSUMED_ASSET,
  PROTOCOL_NOT_ACTIVATED,
  TOO_MANY_TXS,
  WITHDRAW_ITEM_MISSING,
  INVALID_DELEGATION_RULE,
  UNTRANSFERRABLE_ASSET,
  INTERNAL,
  INVALID_SIGNER_STATE,
  SENDER_NOT_AUTHORIZED,
  INVALID_DELEGATION,
  INVALID_RECEIVER_STATE,
  UNSUPPORTED_TX,
  NOENT,
  INVALID_WALLET,
  EXPIRED_TX,
  INVALID_CHAIN_TYPE,
  VALIDATOR_NOT_CHANGED,
  INVALID_WITHDRAW_TX,
  INVALID_STAKE_STATE,
  TIMEOUT,
  INVALID_LOCK_STATUS,
  INVALID_WITHDRAWER,
  INVALID_MULTISIG,
  INVALID_HASHKEY,
  INSUFFICIENT_STAKE,
  INVALID_DEPOSITOR,
  INVALID_ASSET,
  INSUFFICIENT_DATA,
  BANNED_UNSTAKE,
  CONSENSUS_RPC_ERROR,
  INSUFFICIENT_FUND,
  INVALID_MONIKER,
  INVALID_SWAP,
  INSUFFICIENT_DELEGATION,
  INVALID_EXPIRY_DATE,
  INVALID_CUSTODIAN,
  OK,
  INVALID_CANDIDATE_STATE,
  INVALID_SENDER_STATE,
  STORAGE_RPC_ERROR,
  EXPIRED_WALLET_TOKEN,
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
  withdrawItems: GraphQLClient.CircularQueue;
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
  items: Array<QueueItem>;
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
  cost: string;
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

export interface ExchangeTx {
  data: GraphQLClient.Any;
  expiredAt: string;
  receiver: GraphQLClient.ExchangeInfo;
  sender: GraphQLClient.ExchangeInfo;
  to: string;
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

export interface QueueItem {
  hash: string;
  value: string;
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

export interface ResponseGetSwapStatistics {
  code: GraphQLClient.StatusCode;
  statistics: GraphQLClient.SwapStatistics;
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
  depositToken: GraphQLClient.Transaction;
  revokeDelegate: GraphQLClient.Transaction;
  topic: string;
  accountState: GraphQLClient.AccountState;
  delegate: GraphQLClient.Transaction;
  accountMigrate: GraphQLClient.Transaction;
  code: GraphQLClient.StatusCode;
  forgeState: GraphQLClient.ForgeState;
  deactivateProtocol: GraphQLClient.Transaction;
  beginBlock: GraphQLClient.RequestBeginBlock;
  retrieveSwap: GraphQLClient.Transaction;
  protocolState: GraphQLClient.ProtocolState;
  consensusUpgrade: GraphQLClient.Transaction;
  withdrawToken: GraphQLClient.Transaction;
  declareFile: GraphQLClient.Transaction;
  approveWithdraw: GraphQLClient.Transaction;
  delegateState: GraphQLClient.DelegateState;
  transfer: GraphQLClient.Transaction;
  declare: GraphQLClient.Transaction;
  stakeState: GraphQLClient.StakeState;
  updateConsensusParams: GraphQLClient.Transaction;
  revoke: GraphQLClient.Transaction;
  revokeSwap: GraphQLClient.Transaction;
  exchange: GraphQLClient.Transaction;
  updateAsset: GraphQLClient.Transaction;
  swapState: GraphQLClient.SwapState;
  assetState: GraphQLClient.AssetState;
  stake: GraphQLClient.Transaction;
  createAsset: GraphQLClient.Transaction;
  setupSwap: GraphQLClient.Transaction;
  upgradeNode: GraphQLClient.Transaction;
  confirm: GraphQLClient.Transaction;
  revokeWithdraw: GraphQLClient.Transaction;
  deployProtocol: GraphQLClient.Transaction;
  sysUpgrade: GraphQLClient.Transaction;
  updateValidator: GraphQLClient.Transaction;
  activateProtocol: GraphQLClient.Transaction;
  endBlock: GraphQLClient.RequestEndBlock;
  acquireAsset: GraphQLClient.Transaction;
  poke: GraphQLClient.Transaction;
  consumeAsset: GraphQLClient.Transaction;
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

export interface SwapStatistics {
  address: string;
  lockedAssetsIn: number;
  lockedAssetsOut: number;
  lockedValueIn: string;
  lockedValueOut: string;
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

export interface TokenSwapConfig {
  commissionHolderAddress: string;
  commissionRate: number;
  maxCommission: string;
  minCommission: string;
  revokeCommissionRate: number;
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
  code: GraphQLClient.StatusCode;
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

export type Itx = GraphQLClient.RevokeSwapTx | GraphQLClient.RetrieveSwapTx | GraphQLClient.SetupSwapTx | GraphQLClient.UpgradeNodeTx | GraphQLClient.UpdateAssetTx | GraphQLClient.TransferTx | GraphQLClient.SysUpgradeTx | GraphQLClient.StakeTx | GraphQLClient.PokeTx | GraphQLClient.ExchangeTx | GraphQLClient.DeployProtocolTx | GraphQLClient.DeclareTx | GraphQLClient.DeclareFileTx | GraphQLClient.CreateAssetTx | GraphQLClient.ConsumeAssetTx | GraphQLClient.ConsensusUpgradeTx | GraphQLClient.AcquireAssetTx | GraphQLClient.AccountMigrateTx;


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

export interface GetSwapStatisticsParams {
  address: string;
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
    connect: typeof connect;
  }

  declare const _Lib: ForgeSDK;
  export = _Lib;
