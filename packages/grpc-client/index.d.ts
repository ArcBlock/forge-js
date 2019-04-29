// Generate by [js2dts@0.3.2](https://github.com/whxaxes/js2dts#readme)

/**
 * An grpc client that can read/write data to a forge powered blockchain node, can be used only in node.js
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 ```js
 const GRpcClient = require('@arcblock/grpc-client');
 const client = new GRpcClient("tcp://127.0.0.1:28210");
 (async () => {
 // fetch forge change info
 const { info } = await client.getChainInfo();
 console.log('chainInfo', info);
 
 // get block info
 const stream = client.getBlock({ height: 11 });
 stream
 .on('data', function({ block }) {
 console.log('blockInfo:', block);
 })
 .on('error', err => {
 console.error('error', err);
 });
 })();
 ```
 * @class
 */
declare class GRpcClient {
  /**
   * Creates an instance of GRpcClient, and generate transaction sending and receiving methods
   *
   * @param {object|string} config - config object, if a string passed, will be used as the endpoint
   * @param {string} [config.endpoint="tcp://127.0.0.1:28210"] - grpc endpoint the client can connect to
   * @param {string} [config.chainId=""] - chainId used to construct transaction
   * @see GRpcClient.getQueries
   * @see GRpcClient.getMutations
   * @see GRpcClient.getSubscriptions
   * @see GRpcClient.getRpcMethods
   * @see GRpcClient.getTxSendMethods
   */
  constructor(config?: any);
  /**
   * List standard rpc methods
   *
   * @returns {object}
   */
  getRpcMethods(): any;
  /**
   * List generated transaction send methods
   *
   * @returns {object}
   */
  getTxSendMethods(): any;
  processOne(request: forge_abi.Request): GRpcClient.UnaryResult<forge_abi.Response>;
  process(
    request: forge_abi.Request | Array<forge_abi.Request>
  ): GRpcClient.StreamResult<forge_abi.Response>;
  createTx(request: forge_abi.RequestCreateTx): GRpcClient.UnaryResult<forge_abi.ResponseCreateTx>;
  multisig(request: forge_abi.RequestMultisig): GRpcClient.UnaryResult<forge_abi.ResponseMultisig>;
  sendTx(request: forge_abi.RequestSendTx): GRpcClient.UnaryResult<forge_abi.ResponseSendTx>;
  getTx(
    request: forge_abi.RequestGetTx | Array<forge_abi.RequestGetTx>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetTx>;
  getBlock(
    request: forge_abi.RequestGetBlock | Array<forge_abi.RequestGetBlock>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetBlock>;
  getBlocks(
    request: forge_abi.RequestGetBlocks
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetBlocks>;
  getUnconfirmedTxs(
    request: forge_abi.RequestGetUnconfirmedTxs
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetUnconfirmedTxs>;
  getChainInfo(
    request: forge_abi.RequestGetChainInfo
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetChainInfo>;
  getNodeInfo(
    request: forge_abi.RequestGetNodeInfo
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetNodeInfo>;
  search(request: forge_abi.RequestSearch): GRpcClient.UnaryResult<forge_abi.ResponseSearch>;
  getNetInfo(
    request: forge_abi.RequestGetNetInfo
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetNetInfo>;
  getValidatorsInfo(
    request: forge_abi.RequestGetValidatorsInfo
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetValidatorsInfo>;
  getConfig(
    request: forge_abi.RequestGetConfig
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetConfig>;
  subscribe(
    request: forge_abi.RequestSubscribe
  ): GRpcClient.StreamResult<forge_abi.ResponseSubscribe>;
  unsubscribe(
    request: forge_abi.RequestUnsubscribe
  ): GRpcClient.UnaryResult<forge_abi.ResponseUnsubscribe>;
  storeFile(
    request: forge_abi.RequestStoreFile | Array<forge_abi.RequestStoreFile>
  ): GRpcClient.UnaryResult<forge_abi.ResponseStoreFile>;
  loadFile(request: forge_abi.RequestLoadFile): GRpcClient.StreamResult<forge_abi.ResponseLoadFile>;
  pinFile(request: forge_abi.RequestPinFile): GRpcClient.UnaryResult<forge_abi.ResponsePinFile>;
  getAccountState(
    request: forge_abi.RequestGetAccountState | Array<forge_abi.RequestGetAccountState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetAccountState>;
  getAssetState(
    request: forge_abi.RequestGetAssetState | Array<forge_abi.RequestGetAssetState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetAssetState>;
  getForgeState(
    request: forge_abi.RequestGetForgeState
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetForgeState>;
  getProtocolState(
    request: forge_abi.RequestGetProtocolState | Array<forge_abi.RequestGetProtocolState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetProtocolState>;
  getStakeState(
    request: forge_abi.RequestGetStakeState | Array<forge_abi.RequestGetStakeState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetStakeState>;
  createWallet(
    request: forge_abi.RequestCreateWallet
  ): GRpcClient.UnaryResult<forge_abi.ResponseCreateWallet>;
  loadWallet(
    request: forge_abi.RequestLoadWallet
  ): GRpcClient.UnaryResult<forge_abi.ResponseLoadWallet>;
  recoverWallet(
    request: forge_abi.RequestRecoverWallet
  ): GRpcClient.UnaryResult<forge_abi.ResponseRecoverWallet>;
  listWallet(
    request: forge_abi.RequestListWallet
  ): GRpcClient.StreamResult<forge_abi.ResponseListWallet>;
  removeWallet(
    request: forge_abi.RequestRemoveWallet
  ): GRpcClient.UnaryResult<forge_abi.ResponseRemoveWallet>;
  declareNode(
    request: forge_abi.RequestDeclareNode
  ): GRpcClient.UnaryResult<forge_abi.ResponseDeclareNode>;
  getForgeStats(
    request: forge_abi.RequestGetForgeStats
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetForgeStats>;
  listTransactions(
    request: forge_abi.RequestListTransactions
  ): GRpcClient.UnaryResult<forge_abi.ResponseListTransactions>;
  listAssets(
    request: forge_abi.RequestListAssets
  ): GRpcClient.UnaryResult<forge_abi.ResponseListAssets>;
  listStakes(
    request: forge_abi.RequestListStakes
  ): GRpcClient.UnaryResult<forge_abi.ResponseListStakes>;
  listAccount(
    request: forge_abi.RequestListAccount
  ): GRpcClient.UnaryResult<forge_abi.ResponseListAccount>;
  listTopAccounts(
    request: forge_abi.RequestListTopAccounts
  ): GRpcClient.UnaryResult<forge_abi.ResponseListTopAccounts>;
  listAssetTransactions(
    request: forge_abi.RequestListAssetTransactions
  ): GRpcClient.UnaryResult<forge_abi.ResponseListAssetTransactions>;
  listBlocks(
    request: forge_abi.RequestListBlocks
  ): GRpcClient.UnaryResult<forge_abi.ResponseListBlocks>;
  getHealthStatus(
    request: forge_abi.RequestGetHealthStatus
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetHealthStatus>;
  encodeConsensusUpgradeTx(
    param: GRpcClient.TxParam<GRpcClient.ConsensusUpgradeTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeDeclareTx(
    param: GRpcClient.TxParam<GRpcClient.DeclareTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeDeployProtocolTx(
    param: GRpcClient.TxParam<GRpcClient.DeployProtocolTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeSysUpgradeTx(
    param: GRpcClient.TxParam<GRpcClient.SysUpgradeTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeDeclareFileTx(
    param: GRpcClient.TxParam<GRpcClient.DeclareFileTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeCreateAssetTx(
    param: GRpcClient.TxParam<GRpcClient.CreateAssetTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeStakeTx(param: GRpcClient.TxParam<GRpcClient.StakeTx>): Promise<GRpcClient.ResponseSendTx>;
  encodeExchangeTx(
    param: GRpcClient.TxParam<GRpcClient.ExchangeTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeAccountMigrateTx(
    param: GRpcClient.TxParam<GRpcClient.AccountMigrateTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeUpgradeNodeTx(
    param: GRpcClient.TxParam<GRpcClient.UpgradeNodeTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeUpdateAssetTx(
    param: GRpcClient.TxParam<GRpcClient.UpdateAssetTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodeConsumeAssetTx(
    param: GRpcClient.TxParam<GRpcClient.ConsumeAssetTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  encodePokeTx(param: GRpcClient.TxParam<GRpcClient.PokeTx>): Promise<GRpcClient.ResponseSendTx>;
  encodeTransferTx(
    param: GRpcClient.TxParam<GRpcClient.TransferTx>
  ): Promise<GRpcClient.ResponseSendTx>;
  sendConsensusUpgradeTx(
    param: GRpcClient.TxParam<GRpcClient.ConsensusUpgradeTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendDeclareTx(
    param: GRpcClient.TxParam<GRpcClient.DeclareTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendDeployProtocolTx(
    param: GRpcClient.TxParam<GRpcClient.DeployProtocolTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendSysUpgradeTx(
    param: GRpcClient.TxParam<GRpcClient.SysUpgradeTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendDeclareFileTx(
    param: GRpcClient.TxParam<GRpcClient.DeclareFileTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendCreateAssetTx(
    param: GRpcClient.TxParam<GRpcClient.CreateAssetTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendStakeTx(param: GRpcClient.TxParam<GRpcClient.StakeTx>): Promise<GRpcClient.EncodeTxResult>;
  sendExchangeTx(
    param: GRpcClient.TxParam<GRpcClient.ExchangeTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendAccountMigrateTx(
    param: GRpcClient.TxParam<GRpcClient.AccountMigrateTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendUpgradeNodeTx(
    param: GRpcClient.TxParam<GRpcClient.UpgradeNodeTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendUpdateAssetTx(
    param: GRpcClient.TxParam<GRpcClient.UpdateAssetTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendConsumeAssetTx(
    param: GRpcClient.TxParam<GRpcClient.ConsumeAssetTx>
  ): Promise<GRpcClient.EncodeTxResult>;
  sendPokeTx(param: GRpcClient.TxParam<GRpcClient.PokeTx>): Promise<GRpcClient.EncodeTxResult>;
  sendTransferTx(
    param: GRpcClient.TxParam<GRpcClient.TransferTx>
  ): Promise<GRpcClient.EncodeTxResult>;

  /**
   * List generated transaction send methods
   *
   * @returns {object}
   */
  getTxEncodeMethods(): any;
}
declare const GRpcClient: typeof GRpcClient;
export = GRpcClient;

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
    TOO_MANY_TXS = 11,
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
    TIMEOUT = 504,
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
    POKE = 26,
    ACCOUNT_STATE = 129,
    ASSET_STATE = 130,
    FORGE_STATE = 131,
    STAKE_STATE = 132,
    PROTOCOL_STATE = 133,
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
    data: google.protobuf.Any;
  }

  export interface Transaction {
    from: string;
    nonce: number;
    chainId: string;
    pk: Uint8Array;
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
    createAsset: forge_abi.ExtraCreateAsset;
    accountMigrate: forge_abi.ExtraAccountMigrate;
  }

  export interface TransactionConfig {
    maxAssetSize: number;
    maxListSize: number;
    maxMultisig: number;
    minimumStake: number;
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
    address: string;
    dailyLimit: number;
    balance: number;
    amount: number;
  }

  export interface ExtraCreateAsset {
    asset: string;
  }

  export interface ExtraAccountMigrate {
    address: string;
  }

  export interface UpgradeInfo {
    height: number;
    version: string;
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
    poke: forge_abi.PokeInfo;
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
    forgeAppHash: Uint8Array;
    token: forge_abi.ForgeToken;
    txConfig: forge_abi.TransactionConfig;
    stakeConfig: forge_abi.StakeConfig;
    pokeConfig: forge_abi.PokeConfig;
    protocols: Array<forge_abi.CoreProtocol>;
    upgradeInfo: forge_abi.UpgradeInfo;
    data: google.protobuf.Any;
  }

  export interface RootState {
    address: string;
    account: Uint8Array;
    asset: Uint8Array;
    receipt: Uint8Array;
    protocol: Uint8Array;
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
    name: string;
    version: number;
    description: string;
    txHash: string;
    rootHash: Uint8Array;
    status: forge_abi.ProtocolStatus;
    migratedTo: Array<string>;
    migratedFrom: Array<string>;
    context: forge_abi.StateContext;
    data: google.protobuf.Any;
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
    paging: forge_abi.PageInput;
  }

  export interface ResponseGetUnconfirmedTxs {
    code: forge_abi.StatusCode;
    page: forge_abi.PageInfo;
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
    accountState: forge_abi.AccountState;
    assetState: forge_abi.AssetState;
    forgeState: forge_abi.ForgeState;
    stakeState: forge_abi.StakeState;
    protocolState: forge_abi.ProtocolState;
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

  export interface RequestGetHealthStatus {}

  export interface ResponseGetHealthStatus {
    code: forge_abi.StatusCode;
    healthStatus: forge_abi.HealthStatus;
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

  export interface DeclareTx {
    moniker: string;
    issuer: string;
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

  export interface AccountMigrateTx {
    pk: Uint8Array;
    type: forge_abi.WalletType;
    address: string;
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
    readonly: boolean;
    transferrable: boolean;
    ttl: number;
    parent: string;
    address: string;
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

  export interface PokeTx {
    date: string;
    address: string;
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
    input: ItxParam<T>;
    wallet: GraphQLClient.WalletObject;
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
    type: GRpcClient.WalletTypeObject;
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
