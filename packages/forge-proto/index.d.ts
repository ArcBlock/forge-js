// Generate by [js2dts@0.3.3](https://github.com/whxaxes/js2dts#readme)

declare const _ArcblockForgeProto: any;
export = _ArcblockForgeProto;

declare namespace Enums {
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

  export enum Direction {
    MUTUAL = 0,
    ONE_WAY = 1,
    UNION = 2,
  }

  export enum Validity {
    BOTH = 0,
    VALID = 1,
    INVALID = 2,
  }

  export enum SupportedTxs {
    0 = ConsensusUpgradeTx,
    1 = DeployProtocolTx,
    2 = SysUpgradeTx,
    3 = ExchangeTetherTx,
    4 = WithdrawTetherTx,
    5 = AccountMigrateTx,
    6 = DeclareTx,
    7 = AcquireAssetTx,
    8 = CreateAssetTx,
    9 = RevokeTetherTx,
    10 = ExchangeTx,
    11 = ApproveTetherTx,
    12 = ConsumeAssetTx,
    13 = UpgradeNodeTx,
    14 = UpdateAssetTx,
    15 = DepositTetherTx,
    16 = PokeTx,
    17 = StakeTx,
    18 = TransferTx,
  }

  export enum SupportedStakes {
    0 = StakeForNode,
    1 = stakeForAsset,
    2 = stakeForChain,
    3 = stakeForUser,
  }

  export interface main {
    StatusCode: typeof Enums.StatusCode;
    TopicType: typeof Enums.TopicType;
    KeyType: typeof Enums.KeyType;
    HashType: typeof Enums.HashType;
    EncodingType: typeof Enums.EncodingType;
    RoleType: typeof Enums.RoleType;
    UpgradeType: typeof Enums.UpgradeType;
    UpgradeAction: typeof Enums.UpgradeAction;
    StateType: typeof Enums.StateType;
    StakeType: typeof Enums.StakeType;
    ProtocolStatus: typeof Enums.ProtocolStatus;
    Direction: typeof Enums.Direction;
    Validity: typeof Enums.Validity;
    SupportedTxs: typeof Enums.SupportedTxs;
    SupportedStakes: typeof Enums.SupportedStakes;
  }
}
declare namespace Messages {
  export enum StatusCode {
    0 = OK,
    1 = INVALID_NONCE,
    2 = INVALID_SIGNATURE,
    3 = INVALID_SENDER_STATE,
    4 = INVALID_RECEIVER_STATE,
    5 = INSUFFICIENT_DATA,
    6 = INSUFFICIENT_FUND,
    7 = INVALID_OWNER,
    8 = INVALID_TX,
    9 = UNSUPPORTED_TX,
    10 = EXPIRED_TX,
    11 = TOO_MANY_TXS,
    12 = INVALID_LOCK_STATUS,
    13 = INVALID_REQUEST,
    16 = INVALID_MONIKER,
    17 = INVALID_PASSPHRASE,
    20 = INVALID_MULTISIG,
    21 = INVALID_WALLET,
    22 = INVALID_CHAIN_ID,
    24 = CONSENSUS_RPC_ERROR,
    25 = STORAGE_RPC_ERROR,
    26 = NOENT,
    27 = ACCOUNT_MIGRATED,
    30 = UNSUPPORTED_STAKE,
    31 = INSUFFICIENT_STAKE,
    32 = INVALID_STAKE_STATE,
    33 = EXPIRED_WALLET_TOKEN,
    34 = BANNED_UNSTAKE,
    35 = INVALID_ASSET,
    36 = INVALID_TX_SIZE,
    37 = INVALID_SIGNER_STATE,
    38 = INVALID_FORGE_STATE,
    39 = EXPIRED_ASSET,
    40 = UNTRANSFERRABLE_ASSET,
    41 = READONLY_ASSET,
    42 = CONSUMED_ASSET,
    43 = INVALID_DEPOSIT_VALUE,
    44 = EXCEED_DEPOSIT_CAP,
    45 = INVALID_DEPOSIT_TARGET,
    46 = INVALID_DEPOSITOR,
    47 = INVALID_WITHDRAWER,
    48 = DUPLICATE_TETHER,
    49 = INVALID_EXPIRY_DATE,
    50 = INVALID_DEPOSIT,
    51 = INVALID_CUSTODIAN,
    403 = FORBIDDEN,
    500 = INTERNAL,
    504 = TIMEOUT,
  }

  export enum TopicType {
    0 = TRANSFER,
    1 = EXCHANGE,
    2 = DECLARE,
    3 = CREATE_ASSET,
    4 = UPDATE_ASSET,
    5 = STAKE,
    6 = ACCOUNT_MIGRATE,
    16 = BEGIN_BLOCK,
    17 = END_BLOCK,
    21 = CONSENSUS_UPGRADE,
    22 = DECLARE_FILE,
    23 = SYS_UPGRADE,
    24 = APPLICATION,
    25 = CONSUME_ASSET,
    26 = POKE,
    129 = ACCOUNT_STATE,
    130 = ASSET_STATE,
    131 = FORGE_STATE,
    132 = STAKE_STATE,
    133 = PROTOCOL_STATE,
  }

  export enum KeyType {
    0 = ED25519,
    1 = SECP256K1,
  }

  export enum HashType {
    0 = KECCAK,
    1 = SHA3,
    2 = SHA2,
    6 = KECCAK_384,
    7 = SHA3_384,
    13 = KECCAK_512,
    14 = SHA3_512,
  }

  export enum EncodingType {
    0 = BASE16,
    1 = BASE58,
  }

  export enum RoleType {
    0 = ROLE_ACCOUNT,
    1 = ROLE_NODE,
    2 = ROLE_DEVICE,
    3 = ROLE_APPLICATION,
    4 = ROLE_SMART_CONTRACT,
    5 = ROLE_BOT,
    6 = ROLE_ASSET,
    7 = ROLE_STAKE,
    8 = ROLE_VALIDATOR,
    9 = ROLE_GROUP,
    10 = ROLE_TX,
    11 = ROLE_TETHER,
    63 = ROLE_ANY,
  }

  export enum UpgradeType {
    0 = CONFIG_APP,
    1 = CONFIG_FORGE,
    2 = CONFIG_DFS,
    3 = CONFIG_CONSENSUS,
    4 = CONFIG_P2P,
    10 = EXE_APP,
    11 = EXE_FORGE,
    12 = EXE_DFS,
    13 = EXE_CONSENSUS,
    14 = EXE_P2P,
  }

  export enum UpgradeAction {
    0 = VERIFY,
    1 = BACKUP,
    2 = REPLACE,
    10 = RESTART_APP,
    11 = RESTART_DFS,
    12 = RESTART_CONSENSUS,
    13 = RESTART_P2P,
    14 = RESTART_FORGE,
    30 = ROLLBACK_IF_FAIL,
    31 = RESTART_ALL_IF_FAIL,
    33 = CRASH_IF_FAIL,
    50 = DROP_ADDRESS_BOOK,
  }

  export enum StateType {
    0 = STATE_ACCOUNT,
    1 = STATE_ASSET,
    2 = STATE_CHANNEL,
    3 = STATE_FORGE,
    4 = STATE_STAKE,
  }

  export enum StakeType {
    0 = STAKE_NODE,
    1 = STAKE_USER,
    2 = STAKE_ASSET,
    3 = STAKE_CHAIN,
  }

  export enum ProtocolStatus {
    0 = RUNNING,
    1 = PAUSED,
    2 = TERMINATED,
  }

  export enum Direction {
    0 = MUTUAL,
    1 = ONE_WAY,
    2 = UNION,
  }

  export enum Validity {
    0 = BOTH,
    1 = VALID,
    2 = INVALID,
  }

  export interface main {
    StatusCode: typeof Messages.StatusCode;
    TopicType: typeof Messages.TopicType;
    KeyType: typeof Messages.KeyType;
    HashType: typeof Messages.HashType;
    EncodingType: typeof Messages.EncodingType;
    RoleType: typeof Messages.RoleType;
    UpgradeType: typeof Messages.UpgradeType;
    UpgradeAction: typeof Messages.UpgradeAction;
    StateType: typeof Messages.StateType;
    StakeType: typeof Messages.StakeType;
    ProtocolStatus: typeof Messages.ProtocolStatus;
    Direction: typeof Messages.Direction;
    Validity: typeof Messages.Validity;
  }
}
