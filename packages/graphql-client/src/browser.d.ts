export as namespace GraphQLClient;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = GraphQLClient;

/*~ Write your module's methods and properties in this class */
declare class GraphQLClient {
  config: any;
  schema: void;
  constructor(httpEndpoint: string);

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

  sendDeclareTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendDeployProtocolTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendConsensusUpgradeTx(
    param: GraphQLClient.TxParam<GraphQLClient.ConsensusUpgradeTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  sendSysUpgradeTx(
    param: GraphQLClient.TxParam<GraphQLClient.SysUpgradeTx>
  ): Promise<GraphQLClient.ResponseSendTx>;
  encodeDeclareTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeclareTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeDeployProtocolTx(
    param: GraphQLClient.TxParam<GraphQLClient.DeployProtocolTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeConsensusUpgradeTx(
    param: GraphQLClient.TxParam<GraphQLClient.ConsensusUpgradeTx>
  ): Promise<GraphQLClient.EncodeTxResult>;
  encodeSysUpgradeTx(
    param: GraphQLClient.TxParam<GraphQLClient.SysUpgradeTx>
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
  getConfig(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetConfig>;
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
  getSimulatorStatus(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetSimulatorStatus>;
  getStakeState(
    params: GraphQLClient.GetStakeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetStakeState>;
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
    data: T;
    wallet: GraphQLClient.WalletObject;
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

  export enum RoleType {
    ROLE_ACCOUNT,
    ROLE_APPLICATION,
    ROLE_ASSET,
    ROLE_BOT,
    ROLE_DEVICE,
    ROLE_NODE,
    ROLE_SMART_CONTRACT,
    ROLE_STAKE,
    ROLE_VALIDATOR,
  }

  export enum StatusCode {
    INVALID_PASSPHRASE,
    INVALID_SIGNER_STATE,
    EXPIRED_WALLET_TOKEN,
    UNSUPPORTED_STAKE,
    INVALID_MULTISIG,
    INTERNAL,
    INVALID_TX_SIZE,
    INVALID_WALLET,
    EXPIRED_ASSET,
    UNSUPPORTED_TX,
    CONSENSUS_RPC_ERROR,
    INVALID_NONCE,
    INVALID_ASSET,
    NOENT,
    INVALID_SIGNATURE,
    INVALID_MONIKER,
    UNTRANSFERRABLE_ASSET,
    INVALID_SENDER_STATE,
    FORBIDDEN,
    BANNED_UNSTAKE,
    INVALID_RECEIVER_STATE,
    INVALID_OWNER,
    INVALID_CHAIN_ID,
    EXPIRED_TX,
    CONSUMED_ASSET,
    READONLY_ASSET,
    INVALID_TX,
    INVALID_STAKE_STATE,
    TOO_MANY_TXS,
    INSUFFICIENT_FUND,
    INSUFFICIENT_DATA,
    TIMEOUT,
    INSUFFICIENT_STAKE,
    INVALID_FORGE_STATE,
    ACCOUNT_MIGRATED,
    OK,
    STORAGE_RPC_ERROR,
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

  export interface Any {
    typeUrl: string;
    value: string;
  }

  export interface AssetState {
    address: string;
    consumedTime: string;
    context: GraphQLClient.StateContext;
    data: GraphQLClient.Any;
    issuer: string;
    moniker: string;
    owner: string;
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
    dataVersion: string;
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

  export interface CreateAssetTx {
    address: string;
    data: GraphQLClient.Any;
    moniker: string;
    parent: string;
    readonly: boolean;
    transferrable: boolean;
    ttl: number;
  }

  export interface DeclareFileTx {
    hash: string;
  }

  export interface DeclareTx {
    data: GraphQLClient.Any;
    issuer: string;
    moniker: string;
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
    dataVersion: string;
    forgeAppHash: string;
    pokeConfig: GraphQLClient.PokeConfig;
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
    dataVersion: string;
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
    config: string;
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

  export interface ResponseGetSimulatorStatus {
    code: GraphQLClient.StatusCode;
    result: string;
  }

  export interface ResponseGetStakeState {
    code: GraphQLClient.StatusCode;
    state: GraphQLClient.StakeState;
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
    accountState: GraphQLClient.Transaction;
    assetState: GraphQLClient.Transaction;
    beginBlock: GraphQLClient.RequestBeginBlock;
    code: GraphQLClient.StatusCode;
    confirm: GraphQLClient.Transaction;
    consensusUpgrade: GraphQLClient.Transaction;
    createAsset: GraphQLClient.Transaction;
    declare: GraphQLClient.Transaction;
    declareFile: GraphQLClient.Transaction;
    endBlock: GraphQLClient.RequestEndBlock;
    exchange: GraphQLClient.Transaction;
    forgeState: GraphQLClient.Transaction;
    revoke: GraphQLClient.Transaction;
    stake: GraphQLClient.Transaction;
    stakeState: GraphQLClient.Transaction;
    sysUpgrade: GraphQLClient.Transaction;
    topic: string;
    transfer: GraphQLClient.Transaction;
    updateAsset: GraphQLClient.Transaction;
  }

  export interface ResponseUnsubscribe {
    code: GraphQLClient.StatusCode;
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

  export type Itx =
    | GraphQLClient.UpdateAssetTx
    | GraphQLClient.TransferTx
    | GraphQLClient.SysUpgradeTx
    | GraphQLClient.StakeTx
    | GraphQLClient.ExchangeTx
    | GraphQLClient.DeclareFileTx
    | GraphQLClient.DeclareTx
    | GraphQLClient.CreateAssetTx
    | GraphQLClient.ConsumeAssetTx
    | GraphQLClient.ConsensusUpgradeTx
    | GraphQLClient.PokeTx
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

  export interface GetStakeStateParams {
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
    type: string;
  }
}
