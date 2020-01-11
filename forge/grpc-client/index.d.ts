// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

/**
 * An grpc client that can read/write data to a forge powered blockchain node, can be used only in node.js
 *
 * Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`
 *
 * @class
 */
declare class GRpcClient {
  /**
   * Creates an instance of GRpcClient, and generate transaction sending and receiving methods
   *
   * @param {object|string} config - config object, if a string passed, will be used as the endpoint
   * @param {string} [config.endpoint="tcp://127.0.0.1:28210"] - grpc endpoint the client can connect to
   * @param {string} [config.chainId=""] - chainId used to construct transaction
   * @see GRpcClient.getRpcMethods
   */
  constructor(config?: any);
  /**
   * List standard rpc methods
   *
   * @returns {object}
   */
  getRpcMethods(): any;

  fromUnitToToken(value: string): Promise<string>;
  fromTokenToUnit(amount: number): Promise<BN>;
  toLocktime(number: number, options: any): Promise<number>;
  getTxSendMethods(): Array<string>;
  getTxSendMethods(): Array<string>;
  getTxSignMethods(): Array<string>;
  getTxMultiSignMethods(): Array<string>;
  getType(x: string): Object;
  decodeTx(input: string | buffer): object;
  declare(params: object, extra: any): Promise<string>;
  migrateAccount(params: object, extra: any): Promise<string>;
  delegate(params: object, extra: any): Promise<string>;
  revokeDelegate(params: object, extra: any): Promise<string>;
  createAsset(params: object, extra: any): Promise<string>;
  updateAsset(params: object, extra: any): Promise<string>;
  prepareConsumeAsset(params: object, extra: any): Promise<string>;
  finalizeConsumeAsset(params: object, extra: any): Promise<string>;
  consumeAsset(params: object, extra: any): Promise<string>;
  createAssetFactory(params: object, extra: any): Promise<string>;
  acquireAsset(params: object, extra: any): Promise<string>;
  upgradeNode(params: object, extra: any): Promise<string>;
  deployContract(params: object, extra: any): Promise<string>;
  activateContract(params: object, extra: any): Promise<string>;
  deactivateContract(params: object, extra: any): Promise<string>;
  setupSwap(params: object, extra: any): Promise<string>;
  retrieveSwap(params: object, extra: any): Promise<string>;
  revokeSwap(params: object, extra: any): Promise<string>;
  transfer(params: object, extra: any): Promise<string>;
  prepareExchange(params: object, extra: any): Promise<string>;
  finalizeExchange(params: object, extra: any): Promise<string>;
  exchange(params: object, extra: any): Promise<string>;
  checkin(params: object, extra: any): Promise<string>;
  refuel(params: object, extra: any): Promise<string>;

  sendTx(request: forge_abi.RequestSendTx): GRpcClient.UnaryResult<forge_abi.ResponseSendTx>;
  getTx(
    request: forge_abi.RequestGetTx | Array<forge_abi.RequestGetTx>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetTx>;
  getBlock(
    request: forge_abi.RequestGetBlock | Array<forge_abi.RequestGetBlock>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetBlock>;
  getBlocks(request: forge_abi.RequestGetBlocks): GRpcClient.UnaryResult<forge_abi.ResponseGetBlocks>;
  getUnconfirmedTxs(
    request: forge_abi.RequestGetUnconfirmedTxs
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetUnconfirmedTxs>;
  getChainInfo(request: forge_abi.RequestGetChainInfo): GRpcClient.UnaryResult<forge_abi.ResponseGetChainInfo>;
  getNodeInfo(request: forge_abi.RequestGetNodeInfo): GRpcClient.UnaryResult<forge_abi.ResponseGetNodeInfo>;
  search(request: forge_abi.RequestSearch): GRpcClient.UnaryResult<forge_abi.ResponseSearch>;
  getNetInfo(request: forge_abi.RequestGetNetInfo): GRpcClient.UnaryResult<forge_abi.ResponseGetNetInfo>;
  getValidatorsInfo(
    request: forge_abi.RequestGetValidatorsInfo
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetValidatorsInfo>;
  getConfig(request: forge_abi.RequestGetConfig): GRpcClient.UnaryResult<forge_abi.ResponseGetConfig>;
  subscribe(request: forge_abi.RequestSubscribe): GRpcClient.StreamResult<forge_abi.ResponseSubscribe>;
  unsubscribe(request: forge_abi.RequestUnsubscribe): GRpcClient.UnaryResult<forge_abi.ResponseUnsubscribe>;
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
  getForgeState(request: forge_abi.RequestGetForgeState): GRpcClient.UnaryResult<forge_abi.ResponseGetForgeState>;
  getProtocolState(
    request: forge_abi.RequestGetProtocolState | Array<forge_abi.RequestGetProtocolState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetProtocolState>;
  getStakeState(
    request: forge_abi.RequestGetStakeState | Array<forge_abi.RequestGetStakeState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetStakeState>;
  getSwapState(
    request: forge_abi.RequestGetSwapState | Array<forge_abi.RequestGetSwapState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetSwapState>;
  getDelegateState(
    request: forge_abi.RequestGetDelegateState | Array<forge_abi.RequestGetDelegateState>
  ): GRpcClient.StreamResult<forge_abi.ResponseGetDelegateState>;
  declareNode(request: forge_abi.RequestDeclareNode): GRpcClient.UnaryResult<forge_abi.ResponseDeclareNode>;
  getForgeStats(request: forge_abi.RequestGetForgeStats): GRpcClient.UnaryResult<forge_abi.ResponseGetForgeStats>;
  listTransactions(
    request: forge_abi.RequestListTransactions
  ): GRpcClient.UnaryResult<forge_abi.ResponseListTransactions>;
  listAssets(request: forge_abi.RequestListAssets): GRpcClient.UnaryResult<forge_abi.ResponseListAssets>;
  listStakes(request: forge_abi.RequestListStakes): GRpcClient.UnaryResult<forge_abi.ResponseListStakes>;
  listAccount(request: forge_abi.RequestListAccount): GRpcClient.UnaryResult<forge_abi.ResponseListAccount>;
  listTopAccounts(request: forge_abi.RequestListTopAccounts): GRpcClient.UnaryResult<forge_abi.ResponseListTopAccounts>;
  listAssetTransactions(
    request: forge_abi.RequestListAssetTransactions
  ): GRpcClient.UnaryResult<forge_abi.ResponseListAssetTransactions>;
  listBlocks(request: forge_abi.RequestListBlocks): GRpcClient.UnaryResult<forge_abi.ResponseListBlocks>;
  getHealthStatus(request: forge_abi.RequestGetHealthStatus): GRpcClient.UnaryResult<forge_abi.ResponseGetHealthStatus>;
  listSwap(request: forge_abi.RequestListSwap): GRpcClient.UnaryResult<forge_abi.ResponseListSwap>;
  getSwapStatistics(
    request: forge_abi.RequestGetSwapStatistics
  ): GRpcClient.UnaryResult<forge_abi.ResponseGetSwapStatistics>;
  encodeConsensusUpgradeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeDeployProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeSysUpgradeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeWithdrawTokenTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeTransferTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeAccountMigrateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeDeclareTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeRevokeDelegateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeDeactivateProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeRevokeWithdrawTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeCreateAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeRetrieveSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeConsumeAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodePokeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeUpdateAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeExchangeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeUpdateConsensusParamsTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeRevokeSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeActivateProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeApproveWithdrawTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeUpgradeNodeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeUpdateValidatorTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeAcquireAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeDelegateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeDepositTokenTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeSetupSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  encodeRefuelTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.ResponseSendTx>;
  sendConsensusUpgradeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendDeployProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendSysUpgradeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendWithdrawTokenTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendTransferTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendAccountMigrateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendDeclareTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendRevokeDelegateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendDeactivateProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendRevokeWithdrawTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendCreateAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendRetrieveSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendConsumeAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendPokeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendUpdateAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendExchangeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendUpdateConsensusParamsTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendRevokeSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendActivateProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendApproveWithdrawTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendUpgradeNodeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendUpdateValidatorTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendAcquireAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendDelegateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendDepositTokenTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendSetupSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  sendRefuelTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.EncodeTxResult>;
  signConsensusUpgradeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signDeployProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signSysUpgradeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signWithdrawTokenTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signTransferTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signAccountMigrateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signDeclareTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signRevokeDelegateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signDeactivateProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signRevokeWithdrawTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signCreateAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signRetrieveSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signConsumeAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signPokeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signUpdateAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signExchangeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signUpdateConsensusParamsTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signRevokeSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signActivateProtocolTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signApproveWithdrawTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signUpgradeNodeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signUpdateValidatorTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signAcquireAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signDelegateTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signDepositTokenTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signSetupSwapTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  signRefuelTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  multiSignExchangeTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  multiSignConsumeAssetTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
  multiSignDeclareTx(param: GRpcClient.TxParam<GRpcClient.undefined>): Promise<GRpcClient.Transaction>;
}
declare const GRpcClient: typeof GRpcClient;
export = GRpcClient;

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
    RPC_CONNECTION_ERROR = 28,
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
    INVALID_SUBSCRIBE = 69,
    INVALID_DID_TYPE = 70,
    INVALID_CANDIDATE_STATE = 71,
    VALIDATOR_NOT_FOUND = 72,
    VALIDATOR_NOT_CHANGED = 73,
    FORBIDDEN = 403,
    INTERNAL = 500,
    TIMEOUT = 504,
    DUPLICATE_TETHER = 48,
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
    ROLE_TETHER = 11,
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

  export interface RequestDeclareNode {
    validator: boolean;
    issuer: string;
  }

  export interface ResponseDeclareNode {
    code: forge_abi.StatusCode;
    wallet: forge_abi.WalletInfo;
    tx: forge_abi.Transaction;
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
    delegate: forge_abi.Transaction;
    activateProtocol: forge_abi.Transaction;
    deactivateProtocol: forge_abi.Transaction;
    revokeDelegate: forge_abi.Transaction;
    depositToken: forge_abi.Transaction;
    withdrawToken: forge_abi.Transaction;
    approveWithdraw: forge_abi.Transaction;
    revokeWithdraw: forge_abi.Transaction;
    setupSwap: forge_abi.Transaction;
    revokeSwap: forge_abi.Transaction;
    retrieveSwap: forge_abi.Transaction;
    poke: forge_abi.Transaction;
    deployProtocol: forge_abi.Transaction;
    consumeAsset: forge_abi.Transaction;
    acquireAsset: forge_abi.Transaction;
    upgradeNode: forge_abi.Transaction;
    updateValidator: forge_abi.Transaction;
    updateConsensusParams: forge_abi.Transaction;
    accountState: forge_abi.AccountState;
    assetState: forge_abi.AssetState;
    forgeState: forge_abi.ForgeState;
    stakeState: forge_abi.StakeState;
    protocolState: forge_abi.ProtocolState;
    delegateState: forge_abi.DelegateState;
    swapState: forge_abi.SwapState;
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

  export interface RequestGetSwapStatistics {
    address: string;
  }

  export interface ResponseGetSwapStatistics {
    code: forge_abi.StatusCode;
    statistics: forge_abi.SwapStatistics;
  }

  export interface RequestGetHealthStatus {}

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
    cost: forge_abi.BigUint;
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
    commissionRate: number;
    revokeCommissionRate: number;
    minCommission: forge_abi.BigUint;
    maxCommission: forge_abi.BigUint;
    withdrawInterval: number;
    commission: forge_abi.BigUint;
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

  export interface SwapStatistics {
    address: string;
    lockedValueOut: forge_abi.BigUint;
    lockedValueIn: forge_abi.BigUint;
    lockedAssetsOut: number;
    lockedAssetsIn: number;
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

  export interface PokeTx {
    date: string;
    address: string;
    data: google.protobuf.Any;
  }

  export interface RefuelTx {
    date: string;
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

  export interface UpdateConsensusParamsTx {
    delegateConfig: forge_abi.DelegateConfig;
    declareConfig: forge_abi.DeclareConfig;
    tokenSwapConfig: forge_abi.TokenSwapConfig;
  }

  export interface UpdateValidatorTx {
    candidates: Array<forge_abi.Validator>;
    data: google.protobuf.Any;
  }

  export interface UpgradeNodeTx {
    height: number;
    version: string;
    override: boolean;
  }

  export interface WithdrawTokenTx {
    value: forge_abi.BigUint;
    to: string;
    chainType: string;
    chainId: string;
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
    wallet: GRpcClient.WalletObject;
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
