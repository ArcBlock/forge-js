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

  getAccountState(
    params: GetAccountStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAccountState>;
  getAssetState(
    params: GetAssetStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetAssetState>;
  getBlock(params: GetBlockParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlock>;
  getBlocks(params: GetBlocksParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetBlocks>;
  getChainInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetChainInfo>;
  getConfig(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetConfig>;
  getForgeState(
    params: GetForgeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeState>;
  getForgeStatistics(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStatistics>;
  getForgeStatisticsByDay(
    params: GetForgeStatisticsByDayParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStatistics>;
  getForgeStatisticsByHour(
    params: GetForgeStatisticsByHourParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetForgeStatistics>;
  getNetInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetNetInfo>;
  getStakeState(
    params: GetStakeStateParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetStakeState>;
  getTx(params: GetTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseGetTx>;
  getUnconfirmedTxs(
    params: GetUnconfirmedTxsParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseGetUnconfirmedTxs>;
  getValidatorsInfo(): GraphQLClient.QueryResult<GraphQLClient.ResponseGetValidatorsInfo>;
  listWallet(): GraphQLClient.QueryResult<GraphQLClient.ResponseListWallet>;
  loadFile(params: LoadFileParams): GraphQLClient.QueryResult<GraphQLClient.ResponseLoadFile>;
  loadWallet(params: LoadWalletParams): GraphQLClient.QueryResult<GraphQLClient.ResponseLoadWallet>;
  multisig(params: MultisigParams): GraphQLClient.QueryResult<GraphQLClient.ResponseMultisig>;
  pinFile(params: PinFileParams): GraphQLClient.QueryResult<GraphQLClient.ResponsePinFile>;
  search(params: SearchParams): GraphQLClient.QueryResult<GraphQLClient.ResponseSearch>;
  createTx(params: CreateTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseCreateTx>;
  createWallet(
    params: CreateWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseCreateWallet>;
  declare(params: DeclareParams): GraphQLClient.QueryResult<string>;
  declareNode(
    params: DeclareNodeParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseDeclareNode>;
  recoverWallet(
    params: RecoverWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseRecoverWallet>;
  removeWallet(
    params: RemoveWalletParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseRemoveWallet>;
  sendTx(params: SendTxParams): GraphQLClient.QueryResult<GraphQLClient.ResponseSendTx>;
  storeFile(params: StoreFileParams): GraphQLClient.QueryResult<GraphQLClient.ResponseStoreFile>;
  unsubscribe(
    params: UnsubscribeParams
  ): GraphQLClient.QueryResult<GraphQLClient.ResponseUnsubscribe>;
  subscribe(
    params: SubscribeParams
  ): GraphQLClient.SubscriptionResult<GraphQLClient.ResponseSubscribe>;
}

declare namespace GraphQLClient {
  export interface QueryResult<T> {
    then(fn: (result: T) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface EventListener<T> {
    (result: T): any;
    (err: Error | string): any;
  }

  export interface SubscriptionResult<T> {
    then(fn: (result: GraphQLClient.Subscription<T>) => any): Promise<any>;
    catch(fn: (err: Error) => any): Promise<any>;
  }

  export interface Subscription<T> {
    on(event: string, callback: GraphQLClient.EventListener<T>): void;
  }

  export enum EncodingType {
    BASE16,
    BASE58,
  }

  export enum HashType {
    KECCAK,
    KECCAK_384,
    KECCAK_512,
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
    ACCOUNT_MIGRATED,
    BANNED_UNSTAKE,
    CONSENSUS_RPC_ERROR,
    EXPIRED_TX,
    EXPIRED_WALLET_TOKEN,
    FORBIDDEN,
    INSUFFICIENT_DATA,
    INSUFFICIENT_FUND,
    INSUFFICIENT_STAKE,
    INTERNAL,
    INVALID_ASSET,
    INVALID_CHAIN_ID,
    INVALID_FORGE_STATE,
    INVALID_MONIKER,
    INVALID_MULTISIG,
    INVALID_NONCE,
    INVALID_OWNER,
    INVALID_PASSPHRASE,
    INVALID_RECEIVER_STATE,
    INVALID_SENDER_STATE,
    INVALID_SIGNATURE,
    INVALID_SIGNER_STATE,
    INVALID_STAKE_STATE,
    INVALID_TX,
    INVALID_TX_SIZE,
    INVALID_WALLET,
    NOENT,
    OK,
    STORAGE_RPC_ERROR,
    UNSUPPORTED_STAKE,
    UNSUPPORTED_TX,
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

  export interface AccountMigrateTx {
    pk: string;
    type: GraphQLClient.WalletType;
  }

  export interface AccountState {
    address: string;
    balance: string;
    context: GraphQLClient.StateContext;
    data: GraphQLClient.Any;
    migratedFrom: Array<string>;
    migratedTo: Array<string>;
    moniker: string;
    nonce: number;
    numAssets: number;
    numTxs: number;
    pinnedFiles: GraphQLClient.CircularQueue;
    pk: string;
    stake: GraphQLClient.StakeContext;
    type: GraphQLClient.WalletType;
  }

  export interface Any {
    typeUrl: string;
    value: string;
  }

  export interface AssetState {
    address: string;
    context: GraphQLClient.StateContext;
    data: GraphQLClient.Any;
    moniker: string;
    owner: string;
    readonly: boolean;
    stake: GraphQLClient.StakeContext;
  }

  export interface BlockId {
    hash: string;
    partsHeader: GraphQLClient.PartSetHeader;
  }

  export interface BlockInfo {
    appHash: string;
    height: number;
    numTxs: number;
    proposer: string;
    time: string;
    totalTxs: number;
    txs: Array<Transaction>;
  }

  export interface ChainInfo {
    address: string;
    appHash: string;
    blockHash: string;
    blockHeight: number;
    blockTime: string;
    consensusVersion: string;
    dataVersion: string;
    forgeAppsVersion: Array<ForgeAppsVersionEntry>;
    id: string;
    moniker: string;
    network: string;
    supportedTxs: Array<string>;
    synced: boolean;
    totalTxs: number;
    version: string;
    votingPower: number;
  }

  export interface CircularQueue {
    circular: boolean;
    fifo: boolean;
    items: Array<string>;
    maxItems: number;
    typeUrl: string;
  }

  export interface ConsensusParams {
    maxBytes: number;
    maxCandidates: number;
    maxGas: number;
    maxValidators: number;
    paramChanged: boolean;
    pubKeyTypes: Array<string>;
    validatorChanged: boolean;
    validators: Array<Validator>;
  }

  export interface ConsensusUpgradeTx {
    validators: Array<Validator>;
  }

  export interface CreateAssetTx {
    data: GraphQLClient.Any;
    moniker: string;
    readonly: boolean;
  }

  export interface DeclareFileTx {
    hash: string;
  }

  export interface DeclareTx {
    moniker: string;
    pk: string;
    type: GraphQLClient.WalletType;
  }

  export interface Evidence {
    height: number;
    time: string;
    totalVotingPower: number;
    type: string;
    validator: GraphQLClient.Validator;
  }

  export interface ExchangeInfo {
    assets: Array<string>;
    value: string;
  }

  export interface ExchangeTx {
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
    address: string;
    consensus: GraphQLClient.ConsensusParams;
    data: GraphQLClient.Any;
    dataVersion: string;
    forgeAppHash: string;
    stakeSummary: Array<StakeSummaryEntry>;
    tasks: Array<TasksEntry>;
    version: string;
  }

  export interface ForgeStatistics {
    numAccountMigrateTxs: Array<number>;
    numBlocks: Array<number>;
    numConsensusUpgradeTxs: Array<number>;
    numCreateAssetTxs: Array<number>;
    numDeclareFileTxs: Array<number>;
    numDeclareTxs: Array<number>;
    numExchangeTxs: Array<number>;
    numStakeTxs: Array<number>;
    numStakes: Array<string>;
    numSysUpgradeTxs: Array<number>;
    numTransferTxs: Array<number>;
    numTxs: Array<number>;
    numUpdateAssetTxs: Array<number>;
    numValidators: Array<number>;
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
    height: number;
    lastBlockId: GraphQLClient.BlockId;
    lastCommitHash: string;
    lastResultsHash: string;
    nextValidatorsHash: string;
    numTxs: number;
    proposerAddress: string;
    time: string;
    totalTxs: number;
    validatorsHash: string;
    version: GraphQLClient.Version;
  }

  export interface KvPair {
    key: string;
    value: string;
  }

  export interface LastCommitInfo {
    round: number;
    votes: Array<VoteInfo>;
  }

  export interface NetInfo {
    listeners: Array<string>;
    listening: boolean;
    nPeers: number;
    peers: Array<PeerInfo>;
  }

  export interface NodeInfo {
    geoInfo: GraphQLClient.GeoInfo;
    id: string;
    ip: string;
    moniker: string;
    network: string;
    version: string;
  }

  export interface PartSetHeader {
    hash: string;
    total: number;
  }

  export interface PeerInfo {
    nodeInfo: GraphQLClient.NodeInfo;
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
    height: number;
  }

  export interface ResponseCreateTx {
    code: GraphQLClient.StatusCode;
    tx: GraphQLClient.Transaction;
  }

  export interface ResponseCreateWallet {
    code: GraphQLClient.StatusCode;
    token: string;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseDeclareNode {
    code: GraphQLClient.StatusCode;
    wallet: GraphQLClient.WalletInfo;
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
    blocks: Array<BlockInfo>;
    code: GraphQLClient.StatusCode;
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

  export interface ResponseGetForgeStatistics {
    code: GraphQLClient.StatusCode;
    forgeStatistics: GraphQLClient.ForgeStatistics;
  }

  export interface ResponseGetNetInfo {
    code: GraphQLClient.StatusCode;
    netInfo: GraphQLClient.NetInfo;
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
    unconfirmedTxs: GraphQLClient.UnconfirmedTxs;
  }

  export interface ResponseGetValidatorsInfo {
    code: GraphQLClient.StatusCode;
    validatorsInfo: GraphQLClient.ValidatorsInfo;
  }

  export interface ResponseListWallet {
    address: Array<string>;
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseLoadFile {
    chunk: string;
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseLoadWallet {
    code: GraphQLClient.StatusCode;
    token: string;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseMultisig {
    code: GraphQLClient.StatusCode;
    tx: GraphQLClient.Transaction;
  }

  export interface ResponsePinFile {
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseRecoverWallet {
    code: GraphQLClient.StatusCode;
    token: string;
    wallet: GraphQLClient.WalletInfo;
  }

  export interface ResponseRemoveWallet {
    code: GraphQLClient.StatusCode;
  }

  export interface ResponseSearch {
    code: GraphQLClient.StatusCode;
    txs: Array<TransactionInfo>;
  }

  export interface ResponseSendTx {
    code: GraphQLClient.StatusCode;
    hash: string;
  }

  export interface ResponseStoreFile {
    code: GraphQLClient.StatusCode;
    hash: string;
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

  export interface SysUpgradeTx {
    gracePeriod: number;
    task: GraphQLClient.UpgradeTask;
  }

  export interface TasksEntry {
    key: number;
    value: GraphQLClient.UpgradeTasks;
  }

  export interface Transaction {
    chainId: number;
    from: string;
    itx: Itx;
    nonce: number;
    signature: string;
    signatures: Array<KvPair>;
  }

  export interface TransactionInfo {
    code: GraphQLClient.StatusCode;
    hash: string;
    height: number;
    index: number;
    tags: Array<KvPair>;
    tx: GraphQLClient.Transaction;
  }

  export interface TransferTx {
    assets: Array<string>;
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
    power: number;
  }

  export interface ValidatorInfo {
    address: string;
    name: string;
    proposerPriority: string;
    pubKey: GraphQLClient.PubKey;
    votingPower: number;
  }

  export interface ValidatorsInfo {
    blockHeight: number;
    validators: Array<ValidatorInfo>;
  }

  export interface Version {
    App: number;
    Block: number;
  }

  export interface VoteInfo {
    signedLastBlock: boolean;
    validator: GraphQLClient.Validator;
  }

  export interface WalletInfo {
    address: string;
    pk: string;
    sk: string;
    type: GraphQLClient.WalletType;
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
    | GraphQLClient.ConsensusUpgradeTx
    | GraphQLClient.AccountMigrateTx;

  export interface GetAccountStateParams {
    address: string;
    appHash: string;
    keys: Array<string>;
  }

  export interface GetAssetStateParams {
    address: string;
    appHash: string;
    keys: Array<string>;
  }

  export interface GetBlockParams {
    height: number;
  }

  export interface GetBlocksParams {
    maxHeight: number;
    minHeight: number;
  }

  export interface GetForgeStateParams {
    appHash: string;
    keys: Array<string>;
  }

  export interface GetForgeStatisticsByDayParams {
    endDate: string;
    startDate: string;
  }

  export interface GetForgeStatisticsByHourParams {
    date: string;
  }

  export interface GetStakeStateParams {
    address: string;
    appHash: string;
    keys: Array<string>;
  }

  export interface GetTxParams {
    hash: string;
  }

  export interface GetUnconfirmedTxsParams {
    limit: number;
  }

  export interface LoadFileParams {
    hash: string;
  }

  export interface LoadWalletParams {
    address: string;
    passphrase: string;
  }

  export interface MultisigParams {
    token: string;
    tx: string;
    wallet: string;
  }

  export interface PinFileParams {
    hash: string;
  }

  export interface SearchParams {
    key: string;
    value: string;
  }

  export interface CreateTxParams {
    from: string;
    itx: string;
    nonce: number;
    token: string;
    wallet: string;
  }

  export interface CreateWalletParams {
    moniker: string;
    passphrase: string;
    type: string;
  }

  export interface DeclareParams {
    declareTx: string;
    send: string;
    sign: boolean;
    token: string;
    wallet: string;
  }

  export interface DeclareNodeParams {
    validator: boolean;
  }

  export interface RecoverWalletParams {
    data: string;
    moniker: string;
    passphrase: string;
    type: string;
  }

  export interface RemoveWalletParams {
    address: string;
  }

  export interface SendTxParams {
    commit: boolean;
    token: string;
    tx: string;
    wallet: string;
  }

  export interface StoreFileParams {
    chunk: string;
  }

  export interface UnsubscribeParams {
    topic: string;
  }

  export interface SubscribeParams {
    filter: string;
    type: string;
  }
}
