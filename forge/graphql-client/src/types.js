
/**
 * List all query method names
 *
 * @name GraphQLClient#getQueries
 * @function
 * @memberof GraphQLClient
 * @returns {Array<string>} method name list
 * @example
 * const methods = client.getQueries();
 * // list of query methods
 * // [
 * //   getAccountState,
 * //   getAssetState,
 * //   getBlock,
 * //   getBlocks,
 * //   getChainInfo,
 * //   getConfig,
 * //   getDelegateState,
 * //   getForgeState,
 * //   getForgeStats,
 * //   getForgeStatsByDay,
 * //   getForgeStatsByHour,
 * //   getHealthStatus,
 * //   getNetInfo,
 * //   getNodeInfo,
 * //   getSimulatorStatus,
 * //   getSwapState,
 * //   getSwapStatistics,
 * //   getTx,
 * //   getUnconfirmedTxs,
 * //   getValidatorsInfo,
 * //   listAssetTransactions,
 * //   listAssets,
 * //   listBlocks,
 * //   listStakes,
 * //   listSwap,
 * //   listTopAccounts,
 * //   listTransactions,
 * // ]
 */

/**
 * List all mutation method names
 *
 * @name GraphQLClient#getMutations
 * @function
 * @memberof GraphQLClient
 * @returns {Array<string>} method name list
 * @example
 * const methods = client.getMutations();
 * // list of mutation methods
 * // [
 * //   sendTx,
 * //   startSimulator,
 * //   stopSimulator,
 * //   unsubscribe,
 * // ]
 */

/**
 * List all subscription method names
 *
 * @name GraphQLClient#getSubscription
 * @function
 * @memberof GraphQLClient
 * @returns {Array<string>} method name list
 * @example
 * const methods = client.getSubscriptions();
 * // list of subscription methods
 * // [
 * //   subscribe,
 * // ]
 */

/**
 * Send raw graphql query to forge graphql endpoint
 *
 * @name GraphQLClient#doRawQuery
 * @function
 * @memberof GraphQLClient
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 * @example
 * const res = await client.doRawQuery('
 *   getChainInfo {
 *     code
 *     info {
 *       address
 *       blockHeight
 *     }
 *   }
 * ');
 *
 * // Then
 * // res.getChainInfo.code
 * // res.getChainInfo.info
 */

/**
 * Send raw graphql subscription to forge graphql endpoint
 *
 * @name GraphQLClient#doRawSubscription
 * @function
 * @memberof GraphQLClient
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 */

/**
 * Structure of GraphQLClient.WalletObject
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.WalletObject
 * @property {string} publicKey
 * @property {string} secretKey
 * @property {GraphQLClient~WalletTypeObject} type
 */

/**
 * Structure of GraphQLClient.WalletTypeObject
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.WalletTypeObject
 * @property {number} pk
 * @property {number} role
 * @property {number} hash
 * @property {number} address - defaults to base58btc
 */

/**
 * Structure of GraphQLClient.TxEncodeOutput
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TxEncodeOutput
 * @property {object} object - the transaction object, human readable
 * @property {buffer} buffer - the transaction binary presentation, can be used to signing, encoding to other formats
 */


/**
 * Structure of GraphQLClient.AddressFilter
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AddressFilter
 * @property {...GraphQLClient.Direction} direction
 * @property {string} receiver
 * @property {string} sender
 */

/**
 * Structure of GraphQLClient.PageInput
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PageInput
 * @property {string} cursor
 * @property {Array<...GraphQLClient.PageOrder>} order
 * @property {number} size
 */

/**
 * Structure of GraphQLClient.PageOrder
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PageOrder
 * @property {string} field
 * @property {string} type
 */

/**
 * Structure of GraphQLClient.RangeFilter
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.RangeFilter
 * @property {string} from
 * @property {string} to
 */

/**
 * Structure of GraphQLClient.TimeFilter
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TimeFilter
 * @property {string} endDateTime
 * @property {string} startDateTime
 */

/**
 * Structure of GraphQLClient.TypeFilter
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TypeFilter
 * @property {Array<...GraphQLClient.string>} types
 */

/**
 * Structure of GraphQLClient.ValidityFilter
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ValidityFilter
 * @property {...GraphQLClient.Validity} validity
 */

/**
 * Structure of GraphQLClient.AbciServerStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AbciServerStatus
 * @property {string} abciConsensus
 * @property {string} abciInfo
 */

/**
 * Structure of GraphQLClient.AccountConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AccountConfig
 * @property {string} address
 * @property {string} balance
 * @property {string} pk
 */

/**
 * Structure of GraphQLClient.AccountConfigEntry
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AccountConfigEntry
 * @property {string} key
 * @property {...GraphQLClient.AccountConfig} value
 */

/**
 * Structure of GraphQLClient.AccountMigrateTx
 *
 * Checkout the following snippet for the format of AccountMigrateTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "pk": "abc",
  "type": {
    "address": "BASE16",
    "hash": "KECCAK",
    "pk": "ED25519",
    "role": "ROLE_ACCOUNT"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AccountMigrateTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} pk
 * @property {...GraphQLClient.WalletType} type
 */

/**
 * Structure of GraphQLClient.AccountState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AccountState
 * @property {string} address
 * @property {string} balance
 * @property {...GraphQLClient.StateContext} context
 * @property {...GraphQLClient.Any} data
 * @property {string} issuer
 * @property {Array<...GraphQLClient.string>} migratedFrom
 * @property {Array<...GraphQLClient.string>} migratedTo
 * @property {string} moniker
 * @property {string} nonce
 * @property {string} numAssets
 * @property {string} numTxs
 * @property {string} pk
 * @property {...GraphQLClient.PokeInfo} poke
 * @property {...GraphQLClient.StakeContext} stake
 * @property {...GraphQLClient.WalletType} type
 * @property {...GraphQLClient.CircularQueue} withdrawItems
 */

/**
 * Structure of GraphQLClient.AcquireAssetTx
 *
 * Checkout the following snippet for the format of AcquireAssetTx:
 * ```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "specs": [
    {
      "address": "abc",
      "data": "abc"
    }
  ],
  "to": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AcquireAssetTx
 * @property {...GraphQLClient.Any} data
 * @property {Array<...GraphQLClient.AssetSpec>} specs
 * @property {string} to
 */

/**
 * Structure of GraphQLClient.Any
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Any
 * @property {string} typeUrl
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.AssetSpec
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AssetSpec
 * @property {string} address
 * @property {string} data
 */

/**
 * Structure of GraphQLClient.AssetState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.AssetState
 * @property {string} address
 * @property {string} consumedTime
 * @property {...GraphQLClient.StateContext} context
 * @property {...GraphQLClient.Any} data
 * @property {string} issuer
 * @property {string} moniker
 * @property {string} owner
 * @property {string} parent
 * @property {boolean} readonly
 * @property {...GraphQLClient.StakeContext} stake
 * @property {boolean} transferrable
 * @property {number} ttl
 */

/**
 * Structure of GraphQLClient.BlockId
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.BlockId
 * @property {string} hash
 * @property {...GraphQLClient.PartSetHeader} partsHeader
 */

/**
 * Structure of GraphQLClient.BlockInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.BlockInfo
 * @property {string} appHash
 * @property {string} consensusHash
 * @property {string} dataHash
 * @property {string} evidenceHash
 * @property {string} height
 * @property {Array<...GraphQLClient.TransactionInfo>} invalidTxs
 * @property {Array<...GraphQLClient.string>} invalidTxsHashes
 * @property {...GraphQLClient.BlockId} lastBlockId
 * @property {string} lastCommitHash
 * @property {string} lastResultsHash
 * @property {string} nextValidatorsHash
 * @property {number} numTxs
 * @property {string} proposer
 * @property {string} time
 * @property {string} totalTxs
 * @property {Array<...GraphQLClient.TransactionInfo>} txs
 * @property {Array<...GraphQLClient.string>} txsHashes
 * @property {string} validatorsHash
 * @property {...GraphQLClient.Version} version
 */

/**
 * Structure of GraphQLClient.BlockInfoSimple
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.BlockInfoSimple
 * @property {string} appHash
 * @property {string} consensusHash
 * @property {string} dataHash
 * @property {string} evidenceHash
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} invalidTxsHashes
 * @property {...GraphQLClient.BlockId} lastBlockId
 * @property {string} lastCommitHash
 * @property {string} lastResultsHash
 * @property {string} nextValidatorsHash
 * @property {number} numTxs
 * @property {string} proposer
 * @property {string} time
 * @property {string} totalTxs
 * @property {Array<...GraphQLClient.string>} txsHashes
 * @property {string} validatorsHash
 * @property {...GraphQLClient.Version} version
 */

/**
 * Structure of GraphQLClient.ChainInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ChainInfo
 * @property {string} address
 * @property {string} appHash
 * @property {string} blockHash
 * @property {string} blockHeight
 * @property {string} blockTime
 * @property {string} consensusVersion
 * @property {Array<...GraphQLClient.ForgeAppsVersionEntry>} forgeAppsVersion
 * @property {string} id
 * @property {string} moniker
 * @property {string} network
 * @property {Array<...GraphQLClient.string>} supportedTxs
 * @property {boolean} synced
 * @property {string} totalTxs
 * @property {string} version
 * @property {string} votingPower
 */

/**
 * Structure of GraphQLClient.CircularQueue
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.CircularQueue
 * @property {boolean} circular
 * @property {boolean} fifo
 * @property {Array<...GraphQLClient.QueueItem>} items
 * @property {number} maxItems
 * @property {string} typeUrl
 */

/**
 * Structure of GraphQLClient.CodeInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.CodeInfo
 * @property {string} binary
 * @property {string} checksum
 */

/**
 * Structure of GraphQLClient.ConsensusParams
 *
 * Checkout the following snippet for the format of ConsensusParams:
 * ```json
{
  "maxBytes": "abc",
  "maxCandidates": 123,
  "maxGas": "abc",
  "maxValidators": 123,
  "paramChanged": true,
  "pubKeyTypes": [
    "abc"
  ],
  "validatorChanged": true,
  "validators": [
    {
      "address": "abc",
      "power": "abc"
    }
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ConsensusParams
 * @property {string} maxBytes
 * @property {number} maxCandidates
 * @property {string} maxGas
 * @property {number} maxValidators
 * @property {boolean} paramChanged
 * @property {Array<...GraphQLClient.string>} pubKeyTypes
 * @property {boolean} validatorChanged
 * @property {Array<...GraphQLClient.Validator>} validators
 */

/**
 * Structure of GraphQLClient.ConsensusStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ConsensusStatus
 * @property {string} blockHeight
 * @property {boolean} health
 * @property {boolean} synced
 */

/**
 * Structure of GraphQLClient.ConsumeAssetTx
 *
 * Checkout the following snippet for the format of ConsumeAssetTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "issuer": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ConsumeAssetTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} issuer
 */

/**
 * Structure of GraphQLClient.CoreProtocol
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.CoreProtocol
 * @property {string} address
 * @property {string} name
 */

/**
 * Structure of GraphQLClient.CreateAssetTx
 *
 * Checkout the following snippet for the format of CreateAssetTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "moniker": "abc",
  "parent": "abc",
  "readonly": true,
  "transferrable": true,
  "ttl": 123
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.CreateAssetTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} moniker
 * @property {string} parent
 * @property {boolean} readonly
 * @property {boolean} transferrable
 * @property {number} ttl
 */

/**
 * Structure of GraphQLClient.DeclareConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DeclareConfig
 * @property {string} cost
 * @property {number} hierarchy
 * @property {boolean} restricted
 */

/**
 * Structure of GraphQLClient.DeclareTx
 *
 * Checkout the following snippet for the format of DeclareTx:
 * ```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "issuer": "abc",
  "moniker": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DeclareTx
 * @property {...GraphQLClient.Any} data
 * @property {string} issuer
 * @property {string} moniker
 */

/**
 * Structure of GraphQLClient.DelegateConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DelegateConfig
 * @property {number} deltaInterval
 * @property {Array<...GraphQLClient.string>} typeUrls
 */

/**
 * Structure of GraphQLClient.DelegateOpState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DelegateOpState
 * @property {string} balance
 * @property {string} balanceDelta
 * @property {string} numTxs
 * @property {string} numTxsDelta
 * @property {string} rule
 */

/**
 * Structure of GraphQLClient.DelegateState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DelegateState
 * @property {string} address
 * @property {...GraphQLClient.StateContext} context
 * @property {...GraphQLClient.Any} data
 * @property {Array<...GraphQLClient.OpsEntry>} ops
 */

/**
 * Structure of GraphQLClient.DeployProtocolTx
 *
 * Checkout the following snippet for the format of DeployProtocolTx:
 * ```json
{
  "address": "abc",
  "code": [
    {
      "binary": "abc",
      "checksum": "abc"
    }
  ],
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "description": "abc",
  "name": "abc",
  "namespace": "abc",
  "pipeline": "abc",
  "proto": "abc",
  "sources": [
    "abc"
  ],
  "tags": [
    "abc"
  ],
  "typeUrls": [
    {
      "module": "abc",
      "url": "abc"
    }
  ],
  "version": 123
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DeployProtocolTx
 * @property {string} address
 * @property {Array<...GraphQLClient.CodeInfo>} code
 * @property {...GraphQLClient.Any} data
 * @property {string} description
 * @property {string} name
 * @property {string} namespace
 * @property {string} pipeline
 * @property {string} proto
 * @property {Array<...GraphQLClient.string>} sources
 * @property {Array<...GraphQLClient.string>} tags
 * @property {Array<...GraphQLClient.TypeUrls>} typeUrls
 * @property {number} version
 */

/**
 * Structure of GraphQLClient.DiskSpaceStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DiskSpaceStatus
 * @property {string} forgeUsage
 * @property {string} total
 */

/**
 * Structure of GraphQLClient.Evidence
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Evidence
 * @property {string} chainId
 * @property {string} chainType
 * @property {string} hash
 * @property {string} originalTx
 * @property {string} receiverAddress
 */

/**
 * Structure of GraphQLClient.ExchangeInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ExchangeInfo
 * @property {Array<...GraphQLClient.string>} assets
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.ExchangeTx
 *
 * Checkout the following snippet for the format of ExchangeTx:
 * ```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "expiredAt": "2019-04-29T00:00:00.000Z",
  "receiver": {
    "assets": [
      "abc"
    ],
    "value": "abc"
  },
  "sender": {
    "assets": [
      "abc"
    ],
    "value": "abc"
  },
  "to": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ExchangeTx
 * @property {...GraphQLClient.Any} data
 * @property {string} expiredAt
 * @property {...GraphQLClient.ExchangeInfo} receiver
 * @property {...GraphQLClient.ExchangeInfo} sender
 * @property {string} to
 */

/**
 * Structure of GraphQLClient.ForgeAppsVersionEntry
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ForgeAppsVersionEntry
 * @property {string} key
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.ForgeState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ForgeState
 * @property {Array<...GraphQLClient.AccountConfigEntry>} accountConfig
 * @property {string} address
 * @property {...GraphQLClient.ConsensusParams} consensus
 * @property {...GraphQLClient.Any} data
 * @property {Array<...GraphQLClient.GasEntry>} gas
 * @property {Array<...GraphQLClient.CoreProtocol>} protocols
 * @property {Array<...GraphQLClient.StakeSummaryEntry>} stakeSummary
 * @property {Array<...GraphQLClient.TasksEntry>} tasks
 * @property {...GraphQLClient.ForgeToken} token
 * @property {...GraphQLClient.TokenSwapConfig} tokenSwapConfig
 * @property {...GraphQLClient.TransactionConfig} txConfig
 * @property {...GraphQLClient.UpgradeInfo} upgradeInfo
 * @property {string} version
 */

/**
 * Structure of GraphQLClient.ForgeStats
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ForgeStats
 * @property {number} avgBlockTime
 * @property {number} avgTps
 * @property {number} maxTps
 * @property {Array<...GraphQLClient.string>} numAccountMigrateTxs
 * @property {Array<...GraphQLClient.string>} numBlocks
 * @property {Array<...GraphQLClient.number>} numConsensusUpgradeTxs
 * @property {Array<...GraphQLClient.string>} numConsumeAssetTxs
 * @property {Array<...GraphQLClient.string>} numCreateAssetTxs
 * @property {Array<...GraphQLClient.string>} numDeclareFileTxs
 * @property {Array<...GraphQLClient.string>} numDeclareTxs
 * @property {Array<...GraphQLClient.string>} numExchangeTxs
 * @property {Array<...GraphQLClient.string>} numPokeTxs
 * @property {Array<...GraphQLClient.string>} numStakeTxs
 * @property {Array<...GraphQLClient.string>} numStakes
 * @property {Array<...GraphQLClient.number>} numSysUpgradeTxs
 * @property {Array<...GraphQLClient.string>} numTransferTxs
 * @property {Array<...GraphQLClient.string>} numTxs
 * @property {Array<...GraphQLClient.string>} numUpdateAssetTxs
 * @property {Array<...GraphQLClient.number>} numValidators
 * @property {Array<...GraphQLClient.number>} tps
 */

/**
 * Structure of GraphQLClient.ForgeStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ForgeStatus
 * @property {...GraphQLClient.AbciServerStatus} abciServer
 * @property {string} abiServer
 * @property {string} forgeWeb
 * @property {boolean} health
 */

/**
 * Structure of GraphQLClient.ForgeToken
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ForgeToken
 * @property {number} decimal
 * @property {string} description
 * @property {string} icon
 * @property {number} inflationRate
 * @property {string} initialSupply
 * @property {string} name
 * @property {string} symbol
 * @property {string} totalSupply
 * @property {string} unit
 */

/**
 * Structure of GraphQLClient.GasEntry
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GasEntry
 * @property {string} key
 * @property {number} value
 */

/**
 * Structure of GraphQLClient.GeoInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GeoInfo
 * @property {string} city
 * @property {string} country
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * Structure of GraphQLClient.Header
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Header
 * @property {string} appHash
 * @property {string} chainId
 * @property {string} consensusHash
 * @property {string} dataHash
 * @property {string} evidenceHash
 * @property {string} height
 * @property {...GraphQLClient.BlockId} lastBlockId
 * @property {string} lastCommitHash
 * @property {string} lastResultsHash
 * @property {string} nextValidatorsHash
 * @property {string} numTxs
 * @property {string} proposerAddress
 * @property {string} time
 * @property {string} totalTxs
 * @property {string} validatorsHash
 * @property {...GraphQLClient.Version} version
 */

/**
 * Structure of GraphQLClient.HealthStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.HealthStatus
 * @property {...GraphQLClient.ConsensusStatus} consensus
 * @property {...GraphQLClient.ForgeStatus} forge
 * @property {...GraphQLClient.NetworkStatus} network
 * @property {...GraphQLClient.StorageStatus} storage
 */

/**
 * Structure of GraphQLClient.IndexedAccountState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.IndexedAccountState
 * @property {string} address
 * @property {string} balance
 * @property {string} genesisTime
 * @property {string} migratedFrom
 * @property {string} migratedTo
 * @property {string} moniker
 * @property {string} nonce
 * @property {string} numAssets
 * @property {string} numTxs
 * @property {Array<...GraphQLClient.string>} recentNumTxs
 * @property {string} renaissanceTime
 * @property {string} totalReceivedStakes
 * @property {string} totalStakes
 * @property {string} totalUnstakes
 */

/**
 * Structure of GraphQLClient.IndexedAssetState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.IndexedAssetState
 * @property {string} address
 * @property {string} consumedTime
 * @property {...GraphQLClient.Any} data
 * @property {string} genesisTime
 * @property {string} issuer
 * @property {string} moniker
 * @property {string} owner
 * @property {string} parent
 * @property {boolean} readonly
 * @property {string} renaissanceTime
 * @property {boolean} transferrable
 * @property {string} ttl
 */

/**
 * Structure of GraphQLClient.IndexedBlock
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.IndexedBlock
 * @property {string} height
 * @property {string} numInvalidTxs
 * @property {string} numTxs
 * @property {string} proposer
 * @property {string} time
 */

/**
 * Structure of GraphQLClient.IndexedStakeState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.IndexedStakeState
 * @property {string} address
 * @property {string} balance
 * @property {string} genesisTime
 * @property {string} message
 * @property {string} receiver
 * @property {string} renaissanceTime
 * @property {string} sender
 * @property {number} type
 */

/**
 * Structure of GraphQLClient.IndexedTransaction
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.IndexedTransaction
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} hash
 * @property {string} receiver
 * @property {string} sender
 * @property {string} time
 * @property {...GraphQLClient.Transaction} tx
 * @property {string} type
 * @property {boolean} valid
 */

/**
 * Structure of GraphQLClient.KvPair
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.KvPair
 * @property {string} key
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.LastCommitInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.LastCommitInfo
 * @property {number} round
 * @property {Array<...GraphQLClient.VoteInfo>} votes
 */

/**
 * Structure of GraphQLClient.Multisig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Multisig
 * @property {...GraphQLClient.Any} data
 * @property {string} delegator
 * @property {string} pk
 * @property {string} signature
 * @property {string} signer
 */

/**
 * Structure of GraphQLClient.NetInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.NetInfo
 * @property {Array<...GraphQLClient.string>} listeners
 * @property {boolean} listening
 * @property {number} nPeers
 * @property {Array<...GraphQLClient.PeerInfo>} peers
 */

/**
 * Structure of GraphQLClient.NetworkStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.NetworkStatus
 * @property {boolean} health
 * @property {number} numPeers
 */

/**
 * Structure of GraphQLClient.NodeInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.NodeInfo
 * @property {string} address
 * @property {string} appHash
 * @property {string} blockHash
 * @property {string} blockHeight
 * @property {string} blockTime
 * @property {string} consensusVersion
 * @property {Array<...GraphQLClient.ForgeAppsVersionEntry>} forgeAppsVersion
 * @property {...GraphQLClient.GeoInfo} geoInfo
 * @property {string} id
 * @property {string} ip
 * @property {string} moniker
 * @property {string} network
 * @property {string} p2pAddress
 * @property {Array<...GraphQLClient.string>} supportedTxs
 * @property {boolean} synced
 * @property {string} totalTxs
 * @property {string} version
 * @property {string} votingPower
 */

/**
 * Structure of GraphQLClient.OpsEntry
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.OpsEntry
 * @property {string} key
 * @property {...GraphQLClient.DelegateOpState} value
 */

/**
 * Structure of GraphQLClient.PageInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PageInfo
 * @property {string} cursor
 * @property {boolean} next
 * @property {number} total
 */

/**
 * Structure of GraphQLClient.PartSetHeader
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PartSetHeader
 * @property {string} hash
 * @property {number} total
 */

/**
 * Structure of GraphQLClient.PeerInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PeerInfo
 * @property {string} consensusVersion
 * @property {...GraphQLClient.GeoInfo} geoInfo
 * @property {string} id
 * @property {string} ip
 * @property {string} moniker
 * @property {string} network
 */

/**
 * Structure of GraphQLClient.PokeConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PokeConfig
 * @property {string} amount
 * @property {string} dailyLimit
 * @property {boolean} enabled
 */

/**
 * Structure of GraphQLClient.PokeInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PokeInfo
 * @property {string} amount
 * @property {string} dailyLimit
 * @property {string} leftover
 */

/**
 * Structure of GraphQLClient.PokeTx
 *
 * Checkout the following snippet for the format of PokeTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "date": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PokeTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} date
 */

/**
 * Structure of GraphQLClient.ProtocolState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ProtocolState
 * @property {string} address
 * @property {...GraphQLClient.StateContext} context
 * @property {...GraphQLClient.Any} data
 * @property {string} group
 * @property {...GraphQLClient.DeployProtocolTx} itx
 * @property {Array<...GraphQLClient.string>} migratedFrom
 * @property {Array<...GraphQLClient.string>} migratedTo
 * @property {string} rootHash
 * @property {string} status
 */

/**
 * Structure of GraphQLClient.PubKey
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.PubKey
 * @property {string} data
 * @property {string} type
 */

/**
 * Structure of GraphQLClient.QueueItem
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.QueueItem
 * @property {string} hash
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.RequestBeginBlock
 *
 * Checkout the following snippet for the format of RequestBeginBlock:
 * ```json
{
  "byzantineValidators": [
    {
      "chainId": "abc",
      "chainType": "abc",
      "hash": "abc",
      "originalTx": "abc",
      "receiverAddress": "abc"
    }
  ],
  "hash": "abc",
  "header": {
    "appHash": "abc",
    "chainId": "abc",
    "consensusHash": "abc",
    "dataHash": "abc",
    "evidenceHash": "abc",
    "height": "abc",
    "lastBlockId": {
      "hash": "abc",
      "partsHeader": {
        "hash": "abc",
        "total": 123
      }
    },
    "lastCommitHash": "abc",
    "lastResultsHash": "abc",
    "nextValidatorsHash": "abc",
    "numTxs": "abc",
    "proposerAddress": "abc",
    "time": "2019-04-29T00:00:00.000Z",
    "totalTxs": "abc",
    "validatorsHash": "abc",
    "version": {
      "app": "abc",
      "block": "abc"
    }
  },
  "lastCommitInfo": {
    "round": 123,
    "votes": [
      {
        "signedLastBlock": true,
        "validator": {
          "address": "abc",
          "power": "abc"
        }
      }
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.RequestBeginBlock
 * @property {Array<...GraphQLClient.Evidence>} byzantineValidators
 * @property {string} hash
 * @property {...GraphQLClient.Header} header
 * @property {...GraphQLClient.LastCommitInfo} lastCommitInfo
 */

/**
 * Structure of GraphQLClient.RequestEndBlock
 *
 * Checkout the following snippet for the format of RequestEndBlock:
 * ```json
{
  "height": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.RequestEndBlock
 * @property {string} height
 */

/**
 * Structure of GraphQLClient.ResponseGetAccountState
 *
 * Checkout the following snippet for the format of ResponseGetAccountState:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "state": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "issuer": "abc",
    "migratedFrom": [
      "abc"
    ],
    "migratedTo": [
      "abc"
    ],
    "moniker": "abc",
    "nonce": "abc",
    "numAssets": "abc",
    "numTxs": "abc",
    "pk": "abc",
    "poke": {
      "amount": "abc",
      "dailyLimit": "abc",
      "leftover": "abc"
    },
    "stake": {
      "recentReceivedStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "totalReceivedStakes": "abc",
      "totalStakes": "abc",
      "totalUnstakes": "abc"
    },
    "type": {
      "address": "BASE16",
      "hash": "KECCAK",
      "pk": "ED25519",
      "role": "ROLE_ACCOUNT"
    },
    "withdrawItems": {
      "circular": true,
      "fifo": true,
      "items": [
        {
          "hash": "abc",
          "value": "abc"
        }
      ],
      "maxItems": 123,
      "typeUrl": "abc"
    }
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetAccountState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.AccountState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetAssetState
 *
 * Checkout the following snippet for the format of ResponseGetAssetState:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "state": {
    "address": "abc",
    "consumedTime": "2019-04-29T00:00:00.000Z",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "issuer": "abc",
    "moniker": "abc",
    "owner": "abc",
    "parent": "abc",
    "readonly": true,
    "stake": {
      "recentReceivedStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "totalReceivedStakes": "abc",
      "totalStakes": "abc",
      "totalUnstakes": "abc"
    },
    "transferrable": true,
    "ttl": 123
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetAssetState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.AssetState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetBlock
 *
 * Checkout the following snippet for the format of ResponseGetBlock:
 * ```json
{
  "block": {
    "appHash": "abc",
    "consensusHash": "abc",
    "dataHash": "abc",
    "evidenceHash": "abc",
    "height": "abc",
    "invalidTxs": [
      {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    ],
    "invalidTxsHashes": [
      "abc"
    ],
    "lastBlockId": {
      "hash": "abc",
      "partsHeader": {
        "hash": "abc",
        "total": 123
      }
    },
    "lastCommitHash": "abc",
    "lastResultsHash": "abc",
    "nextValidatorsHash": "abc",
    "numTxs": 123,
    "proposer": "abc",
    "time": "2019-04-29T00:00:00.000Z",
    "totalTxs": "abc",
    "txs": [
      {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    ],
    "txsHashes": [
      "abc"
    ],
    "validatorsHash": "abc",
    "version": {
      "app": "abc",
      "block": "abc"
    }
  },
  "code": "INVALID_LOCK_STATUS"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetBlock
 * @property {...GraphQLClient.BlockInfo} block
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseGetBlocks
 *
 * Checkout the following snippet for the format of ResponseGetBlocks:
 * ```json
{
  "blocks": [
    {
      "appHash": "abc",
      "consensusHash": "abc",
      "dataHash": "abc",
      "evidenceHash": "abc",
      "height": "abc",
      "invalidTxsHashes": [
        "abc"
      ],
      "lastBlockId": {
        "hash": "abc",
        "partsHeader": {
          "hash": "abc",
          "total": 123
        }
      },
      "lastCommitHash": "abc",
      "lastResultsHash": "abc",
      "nextValidatorsHash": "abc",
      "numTxs": 123,
      "proposer": "abc",
      "time": "2019-04-29T00:00:00.000Z",
      "totalTxs": "abc",
      "txsHashes": [
        "abc"
      ],
      "validatorsHash": "abc",
      "version": {
        "app": "abc",
        "block": "abc"
      }
    }
  ],
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetBlocks
 * @property {Array<...GraphQLClient.BlockInfoSimple>} blocks
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseGetChainInfo
 *
 * Checkout the following snippet for the format of ResponseGetChainInfo:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "info": {
    "address": "abc",
    "appHash": "abc",
    "blockHash": "abc",
    "blockHeight": "abc",
    "blockTime": "2019-04-29T00:00:00.000Z",
    "consensusVersion": "abc",
    "forgeAppsVersion": [
      {
        "key": "abc",
        "value": "abc"
      }
    ],
    "id": "abc",
    "moniker": "abc",
    "network": "abc",
    "supportedTxs": [
      "abc"
    ],
    "synced": true,
    "totalTxs": "abc",
    "version": "abc",
    "votingPower": "abc"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetChainInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ChainInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetConfig
 *
 * Checkout the following snippet for the format of ResponseGetConfig:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "config": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetConfig
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} config
 */

/**
 * Structure of GraphQLClient.ResponseGetDelegateState
 *
 * Checkout the following snippet for the format of ResponseGetDelegateState:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "state": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "ops": [
      {
        "key": "abc",
        "value": {
          "balance": "abc",
          "balanceDelta": "abc",
          "numTxs": "abc",
          "numTxsDelta": "abc",
          "rule": "abc"
        }
      }
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetDelegateState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.DelegateState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetForgeState
 *
 * Checkout the following snippet for the format of ResponseGetForgeState:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "state": {
    "accountConfig": [
      {
        "key": "abc",
        "value": {
          "address": "abc",
          "balance": "abc",
          "pk": "abc"
        }
      }
    ],
    "address": "abc",
    "consensus": {
      "maxBytes": "abc",
      "maxCandidates": 123,
      "maxGas": "abc",
      "maxValidators": 123,
      "paramChanged": true,
      "pubKeyTypes": [
        "abc"
      ],
      "validatorChanged": true,
      "validators": [
        {
          "address": "abc",
          "power": "abc"
        }
      ]
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "gas": [
      {
        "key": "abc",
        "value": 123
      }
    ],
    "protocols": [
      {
        "address": "abc",
        "name": "abc"
      }
    ],
    "stakeSummary": [
      {
        "key": 123,
        "value": {
          "context": {
            "genesisTime": "2019-04-29T00:00:00.000Z",
            "genesisTx": {
              "code": "INVALID_LOCK_STATUS",
              "hash": "abc",
              "height": "abc",
              "index": 123,
              "tags": [
                {
                  "key": "abc",
                  "value": "abc"
                }
              ],
              "time": "2019-04-29T00:00:00.000Z",
              "tx": {
                "chainId": "abc",
                "delegator": "abc",
                "from": "abc",
                "nonce": "abc",
                "pk": "abc",
                "signature": "abc",
                "signatures": [
                  {
                    "data": {
                      "typeUrl": "abc",
                      "value": "abc"
                    },
                    "delegator": "abc",
                    "pk": "abc",
                    "signature": "abc",
                    "signer": "abc"
                  }
                ]
              }
            },
            "renaissanceTime": "2019-04-29T00:00:00.000Z",
            "renaissanceTx": {
              "code": "INVALID_LOCK_STATUS",
              "hash": "abc",
              "height": "abc",
              "index": 123,
              "tags": [
                {
                  "key": "abc",
                  "value": "abc"
                }
              ],
              "time": "2019-04-29T00:00:00.000Z",
              "tx": {
                "chainId": "abc",
                "delegator": "abc",
                "from": "abc",
                "nonce": "abc",
                "pk": "abc",
                "signature": "abc",
                "signatures": [
                  {
                    "data": {
                      "typeUrl": "abc",
                      "value": "abc"
                    },
                    "delegator": "abc",
                    "pk": "abc",
                    "signature": "abc",
                    "signer": "abc"
                  }
                ]
              }
            }
          },
          "totalStakes": "abc",
          "totalUnstakes": "abc"
        }
      }
    ],
    "tasks": [
      {
        "key": "abc",
        "value": [
          {
            "actions": [
              "BACKUP"
            ],
            "dataHash": "abc",
            "type": "CONFIG_APP"
          }
        ]
      }
    ],
    "token": {
      "decimal": 123,
      "description": "abc",
      "icon": "abc",
      "inflationRate": 123,
      "initialSupply": "abc",
      "name": "abc",
      "symbol": "abc",
      "totalSupply": "abc",
      "unit": "abc"
    },
    "tokenSwapConfig": {
      "commissionHolderAddress": "abc",
      "commissionRate": 123,
      "maxCommission": "abc",
      "minCommission": "abc",
      "revokeCommissionRate": 123
    },
    "txConfig": {
      "declare": {
        "cost": "abc",
        "hierarchy": 123,
        "restricted": true
      },
      "delegate": {
        "deltaInterval": 123,
        "typeUrls": [
          "abc"
        ]
      },
      "maxAssetSize": 123,
      "maxListSize": 123,
      "maxMultisig": 123,
      "minimumStake": "abc",
      "poke": {
        "amount": "abc",
        "dailyLimit": "abc",
        "enabled": true
      },
      "stake": {
        "timeoutGeneral": 123,
        "timeoutStakeForNode": 123
      }
    },
    "upgradeInfo": {
      "height": "abc",
      "version": "abc"
    },
    "version": "abc"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetForgeState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ForgeState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetForgeStats
 *
 * Checkout the following snippet for the format of ResponseGetForgeStats:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "forgeStats": {
    "avgBlockTime": 123,
    "avgTps": 123,
    "maxTps": 123,
    "numAccountMigrateTxs": [
      "abc"
    ],
    "numBlocks": [
      "abc"
    ],
    "numConsensusUpgradeTxs": [
      123
    ],
    "numConsumeAssetTxs": [
      "abc"
    ],
    "numCreateAssetTxs": [
      "abc"
    ],
    "numDeclareFileTxs": [
      "abc"
    ],
    "numDeclareTxs": [
      "abc"
    ],
    "numExchangeTxs": [
      "abc"
    ],
    "numPokeTxs": [
      "abc"
    ],
    "numStakeTxs": [
      "abc"
    ],
    "numStakes": [
      "abc"
    ],
    "numSysUpgradeTxs": [
      123
    ],
    "numTransferTxs": [
      "abc"
    ],
    "numTxs": [
      "abc"
    ],
    "numUpdateAssetTxs": [
      "abc"
    ],
    "numValidators": [
      123
    ],
    "tps": [
      123
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetForgeStats
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ForgeStats} forgeStats
 */

/**
 * Structure of GraphQLClient.ResponseGetHealthStatus
 *
 * Checkout the following snippet for the format of ResponseGetHealthStatus:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "healthStatus": {
    "consensus": {
      "blockHeight": "abc",
      "health": true,
      "synced": true
    },
    "forge": {
      "abciServer": {
        "abciConsensus": "abc",
        "abciInfo": "abc"
      },
      "abiServer": "abc",
      "forgeWeb": "abc",
      "health": true
    },
    "network": {
      "health": true,
      "numPeers": 123
    },
    "storage": {
      "diskSpace": {
        "forgeUsage": "abc",
        "total": "abc"
      },
      "health": true,
      "indexerServer": "abc",
      "stateDb": "abc"
    }
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetHealthStatus
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.HealthStatus} healthStatus
 */

/**
 * Structure of GraphQLClient.ResponseGetNetInfo
 *
 * Checkout the following snippet for the format of ResponseGetNetInfo:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "netInfo": {
    "listeners": [
      "abc"
    ],
    "listening": true,
    "nPeers": 123,
    "peers": [
      {
        "consensusVersion": "abc",
        "geoInfo": {
          "city": "abc",
          "country": "abc",
          "latitude": 123,
          "longitude": 123
        },
        "id": "abc",
        "ip": "abc",
        "moniker": "abc",
        "network": "abc"
      }
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetNetInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.NetInfo} netInfo
 */

/**
 * Structure of GraphQLClient.ResponseGetNodeInfo
 *
 * Checkout the following snippet for the format of ResponseGetNodeInfo:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "info": {
    "address": "abc",
    "appHash": "abc",
    "blockHash": "abc",
    "blockHeight": "abc",
    "blockTime": "2019-04-29T00:00:00.000Z",
    "consensusVersion": "abc",
    "forgeAppsVersion": [
      {
        "key": "abc",
        "value": "abc"
      }
    ],
    "geoInfo": {
      "city": "abc",
      "country": "abc",
      "latitude": 123,
      "longitude": 123
    },
    "id": "abc",
    "ip": "abc",
    "moniker": "abc",
    "network": "abc",
    "p2pAddress": "abc",
    "supportedTxs": [
      "abc"
    ],
    "synced": true,
    "totalTxs": "abc",
    "version": "abc",
    "votingPower": "abc"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetNodeInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.NodeInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetSimulatorStatus
 *
 * Checkout the following snippet for the format of ResponseGetSimulatorStatus:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "result": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetSimulatorStatus
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} result
 */

/**
 * Structure of GraphQLClient.ResponseGetSwapState
 *
 * Checkout the following snippet for the format of ResponseGetSwapState:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "state": {
    "address": "abc",
    "assets": [
      "abc"
    ],
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "hash": "abc",
    "hashkey": "abc",
    "hashlock": "abc",
    "locktime": 123,
    "receiver": "abc",
    "sender": "abc",
    "value": "abc"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetSwapState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.SwapState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetSwapStatistics
 *
 * Checkout the following snippet for the format of ResponseGetSwapStatistics:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "statistics": {
    "address": "abc",
    "lockedAssetsIn": 123,
    "lockedAssetsOut": 123,
    "lockedValueIn": "abc",
    "lockedValueOut": "abc"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetSwapStatistics
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.SwapStatistics} statistics
 */

/**
 * Structure of GraphQLClient.ResponseGetTx
 *
 * Checkout the following snippet for the format of ResponseGetTx:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "info": {
    "code": "INVALID_LOCK_STATUS",
    "hash": "abc",
    "height": "abc",
    "index": 123,
    "tags": [
      {
        "key": "abc",
        "value": "abc"
      }
    ],
    "time": "2019-04-29T00:00:00.000Z",
    "tx": {
      "chainId": "abc",
      "delegator": "abc",
      "from": "abc",
      "nonce": "abc",
      "pk": "abc",
      "signature": "abc",
      "signatures": [
        {
          "data": {
            "typeUrl": "abc",
            "value": "abc"
          },
          "delegator": "abc",
          "pk": "abc",
          "signature": "abc",
          "signer": "abc"
        }
      ]
    }
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetTx
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.TransactionInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetUnconfirmedTxs
 *
 * Checkout the following snippet for the format of ResponseGetUnconfirmedTxs:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "unconfirmedTxs": {
    "nTxs": 123,
    "txs": [
      {
        "chainId": "abc",
        "delegator": "abc",
        "from": "abc",
        "nonce": "abc",
        "pk": "abc",
        "signature": "abc",
        "signatures": [
          {
            "data": {
              "typeUrl": "abc",
              "value": "abc"
            },
            "delegator": "abc",
            "pk": "abc",
            "signature": "abc",
            "signer": "abc"
          }
        ]
      }
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetUnconfirmedTxs
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {...GraphQLClient.UnconfirmedTxs} unconfirmedTxs
 */

/**
 * Structure of GraphQLClient.ResponseGetValidatorsInfo
 *
 * Checkout the following snippet for the format of ResponseGetValidatorsInfo:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "validatorsInfo": {
    "blockHeight": "abc",
    "validators": [
      {
        "address": "abc",
        "geoInfo": {
          "city": "abc",
          "country": "abc",
          "latitude": 123,
          "longitude": 123
        },
        "name": "abc",
        "proposerPriority": "abc",
        "pubKey": {
          "data": "abc",
          "type": "abc"
        },
        "votingPower": "abc"
      }
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetValidatorsInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ValidatorsInfo} validatorsInfo
 */

/**
 * Structure of GraphQLClient.ResponseListAssetTransactions
 *
 * Checkout the following snippet for the format of ResponseListAssetTransactions:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "transactions": [
    {
      "code": "INVALID_LOCK_STATUS",
      "hash": "abc",
      "receiver": "abc",
      "sender": "abc",
      "time": "abc",
      "tx": {
        "chainId": "abc",
        "delegator": "abc",
        "from": "abc",
        "nonce": "abc",
        "pk": "abc",
        "signature": "abc",
        "signatures": [
          {
            "data": {
              "typeUrl": "abc",
              "value": "abc"
            },
            "delegator": "abc",
            "pk": "abc",
            "signature": "abc",
            "signer": "abc"
          }
        ]
      },
      "type": "abc",
      "valid": true
    }
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListAssetTransactions
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.IndexedTransaction>} transactions
 */

/**
 * Structure of GraphQLClient.ResponseListAssets
 *
 * Checkout the following snippet for the format of ResponseListAssets:
 * ```json
{
  "account": {
    "address": "abc",
    "balance": "abc",
    "genesisTime": "abc",
    "migratedFrom": "abc",
    "migratedTo": "abc",
    "moniker": "abc",
    "nonce": "abc",
    "numAssets": "abc",
    "numTxs": "abc",
    "recentNumTxs": [
      "abc"
    ],
    "renaissanceTime": "abc",
    "totalReceivedStakes": "abc",
    "totalStakes": "abc",
    "totalUnstakes": "abc"
  },
  "assets": [
    {
      "address": "abc",
      "consumedTime": "abc",
      "data": {
        "typeUrl": "abc",
        "value": "abc"
      },
      "genesisTime": "abc",
      "issuer": "abc",
      "moniker": "abc",
      "owner": "abc",
      "parent": "abc",
      "readonly": true,
      "renaissanceTime": "abc",
      "transferrable": true,
      "ttl": "abc"
    }
  ],
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListAssets
 * @property {...GraphQLClient.IndexedAccountState} account
 * @property {Array<...GraphQLClient.IndexedAssetState>} assets
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListBlocks
 *
 * Checkout the following snippet for the format of ResponseListBlocks:
 * ```json
{
  "blocks": [
    {
      "height": "abc",
      "numInvalidTxs": "abc",
      "numTxs": "abc",
      "proposer": "abc",
      "time": "abc"
    }
  ],
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListBlocks
 * @property {Array<...GraphQLClient.IndexedBlock>} blocks
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListStakes
 *
 * Checkout the following snippet for the format of ResponseListStakes:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "stakes": [
    {
      "address": "abc",
      "balance": "abc",
      "genesisTime": "abc",
      "message": "abc",
      "receiver": "abc",
      "renaissanceTime": "abc",
      "sender": "abc",
      "type": 123
    }
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListStakes
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.IndexedStakeState>} stakes
 */

/**
 * Structure of GraphQLClient.ResponseListSwap
 *
 * Checkout the following snippet for the format of ResponseListSwap:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "swap": [
    {
      "address": "abc",
      "assets": [
        "abc"
      ],
      "context": {
        "genesisTime": "2019-04-29T00:00:00.000Z",
        "genesisTx": {
          "code": "INVALID_LOCK_STATUS",
          "hash": "abc",
          "height": "abc",
          "index": 123,
          "tags": [
            {
              "key": "abc",
              "value": "abc"
            }
          ],
          "time": "2019-04-29T00:00:00.000Z",
          "tx": {
            "chainId": "abc",
            "delegator": "abc",
            "from": "abc",
            "nonce": "abc",
            "pk": "abc",
            "signature": "abc",
            "signatures": [
              {
                "data": {
                  "typeUrl": "abc",
                  "value": "abc"
                },
                "delegator": "abc",
                "pk": "abc",
                "signature": "abc",
                "signer": "abc"
              }
            ]
          }
        },
        "renaissanceTime": "2019-04-29T00:00:00.000Z",
        "renaissanceTx": {
          "code": "INVALID_LOCK_STATUS",
          "hash": "abc",
          "height": "abc",
          "index": 123,
          "tags": [
            {
              "key": "abc",
              "value": "abc"
            }
          ],
          "time": "2019-04-29T00:00:00.000Z",
          "tx": {
            "chainId": "abc",
            "delegator": "abc",
            "from": "abc",
            "nonce": "abc",
            "pk": "abc",
            "signature": "abc",
            "signatures": [
              {
                "data": {
                  "typeUrl": "abc",
                  "value": "abc"
                },
                "delegator": "abc",
                "pk": "abc",
                "signature": "abc",
                "signer": "abc"
              }
            ]
          }
        }
      },
      "hash": "abc",
      "hashkey": "abc",
      "hashlock": "abc",
      "locktime": 123,
      "receiver": "abc",
      "sender": "abc",
      "value": "abc"
    }
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListSwap
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.SwapState>} swap
 */

/**
 * Structure of GraphQLClient.ResponseListTopAccounts
 *
 * Checkout the following snippet for the format of ResponseListTopAccounts:
 * ```json
{
  "accounts": [
    {
      "address": "abc",
      "balance": "abc",
      "genesisTime": "abc",
      "migratedFrom": "abc",
      "migratedTo": "abc",
      "moniker": "abc",
      "nonce": "abc",
      "numAssets": "abc",
      "numTxs": "abc",
      "recentNumTxs": [
        "abc"
      ],
      "renaissanceTime": "abc",
      "totalReceivedStakes": "abc",
      "totalStakes": "abc",
      "totalUnstakes": "abc"
    }
  ],
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListTopAccounts
 * @property {Array<...GraphQLClient.IndexedAccountState>} accounts
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListTransactions
 *
 * Checkout the following snippet for the format of ResponseListTransactions:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "transactions": [
    {
      "code": "INVALID_LOCK_STATUS",
      "hash": "abc",
      "receiver": "abc",
      "sender": "abc",
      "time": "abc",
      "tx": {
        "chainId": "abc",
        "delegator": "abc",
        "from": "abc",
        "nonce": "abc",
        "pk": "abc",
        "signature": "abc",
        "signatures": [
          {
            "data": {
              "typeUrl": "abc",
              "value": "abc"
            },
            "delegator": "abc",
            "pk": "abc",
            "signature": "abc",
            "signer": "abc"
          }
        ]
      },
      "type": "abc",
      "valid": true
    }
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListTransactions
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.IndexedTransaction>} transactions
 */

/**
 * Structure of GraphQLClient.ResponseSendTx
 *
 * Checkout the following snippet for the format of ResponseSendTx:
 * ```json
{
  "code": "INVALID_LOCK_STATUS",
  "hash": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseSendTx
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.ResponseStartSimulator
 *
 * Checkout the following snippet for the format of ResponseStartSimulator:
 * ```json
{
  "code": "INVALID_LOCK_STATUS"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseStartSimulator
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseStopSimulator
 *
 * Checkout the following snippet for the format of ResponseStopSimulator:
 * ```json
{
  "code": "INVALID_LOCK_STATUS"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseStopSimulator
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseSubscribe
 *
 * Checkout the following snippet for the format of ResponseSubscribe:
 * ```json
{
  "consumeAsset": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "stake": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "topic": "abc",
  "assetState": {
    "address": "abc",
    "consumedTime": "2019-04-29T00:00:00.000Z",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "issuer": "abc",
    "moniker": "abc",
    "owner": "abc",
    "parent": "abc",
    "readonly": true,
    "stake": {
      "recentReceivedStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "totalReceivedStakes": "abc",
      "totalStakes": "abc",
      "totalUnstakes": "abc"
    },
    "transferrable": true,
    "ttl": 123
  },
  "stakeState": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "from": "abc",
    "message": "abc",
    "to": "abc"
  },
  "endBlock": {
    "height": "abc"
  },
  "updateAsset": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "revokeWithdraw": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "code": "INVALID_LOCK_STATUS",
  "withdrawToken": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "updateConsensusParams": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "accountMigrate": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "upgradeNode": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "delegateState": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "ops": [
      {
        "key": "abc",
        "value": {
          "balance": "abc",
          "balanceDelta": "abc",
          "numTxs": "abc",
          "numTxsDelta": "abc",
          "rule": "abc"
        }
      }
    ]
  },
  "setupSwap": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "retrieveSwap": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "acquireAsset": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "protocolState": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "group": "abc",
    "itx": {
      "address": "abc",
      "code": [
        {
          "binary": "abc",
          "checksum": "abc"
        }
      ],
      "data": {
        "typeUrl": "abc",
        "value": "abc"
      },
      "description": "abc",
      "name": "abc",
      "namespace": "abc",
      "pipeline": "abc",
      "proto": "abc",
      "sources": [
        "abc"
      ],
      "tags": [
        "abc"
      ],
      "typeUrls": [
        {
          "module": "abc",
          "url": "abc"
        }
      ],
      "version": 123
    },
    "migratedFrom": [
      "abc"
    ],
    "migratedTo": [
      "abc"
    ],
    "rootHash": "abc",
    "status": "abc"
  },
  "declare": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "forgeState": {
    "accountConfig": [
      {
        "key": "abc",
        "value": {
          "address": "abc",
          "balance": "abc",
          "pk": "abc"
        }
      }
    ],
    "address": "abc",
    "consensus": {
      "maxBytes": "abc",
      "maxCandidates": 123,
      "maxGas": "abc",
      "maxValidators": 123,
      "paramChanged": true,
      "pubKeyTypes": [
        "abc"
      ],
      "validatorChanged": true,
      "validators": [
        {
          "address": "abc",
          "power": "abc"
        }
      ]
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "gas": [
      {
        "key": "abc",
        "value": 123
      }
    ],
    "protocols": [
      {
        "address": "abc",
        "name": "abc"
      }
    ],
    "stakeSummary": [
      {
        "key": 123,
        "value": {
          "context": {
            "genesisTime": "2019-04-29T00:00:00.000Z",
            "genesisTx": {
              "code": "INVALID_LOCK_STATUS",
              "hash": "abc",
              "height": "abc",
              "index": 123,
              "tags": [
                {
                  "key": "abc",
                  "value": "abc"
                }
              ],
              "time": "2019-04-29T00:00:00.000Z",
              "tx": {
                "chainId": "abc",
                "delegator": "abc",
                "from": "abc",
                "nonce": "abc",
                "pk": "abc",
                "signature": "abc",
                "signatures": [
                  {
                    "data": {
                      "typeUrl": "abc",
                      "value": "abc"
                    },
                    "delegator": "abc",
                    "pk": "abc",
                    "signature": "abc",
                    "signer": "abc"
                  }
                ]
              }
            },
            "renaissanceTime": "2019-04-29T00:00:00.000Z",
            "renaissanceTx": {
              "code": "INVALID_LOCK_STATUS",
              "hash": "abc",
              "height": "abc",
              "index": 123,
              "tags": [
                {
                  "key": "abc",
                  "value": "abc"
                }
              ],
              "time": "2019-04-29T00:00:00.000Z",
              "tx": {
                "chainId": "abc",
                "delegator": "abc",
                "from": "abc",
                "nonce": "abc",
                "pk": "abc",
                "signature": "abc",
                "signatures": [
                  {
                    "data": {
                      "typeUrl": "abc",
                      "value": "abc"
                    },
                    "delegator": "abc",
                    "pk": "abc",
                    "signature": "abc",
                    "signer": "abc"
                  }
                ]
              }
            }
          },
          "totalStakes": "abc",
          "totalUnstakes": "abc"
        }
      }
    ],
    "tasks": [
      {
        "key": "abc",
        "value": [
          {
            "actions": [
              "BACKUP"
            ],
            "dataHash": "abc",
            "type": "CONFIG_APP"
          }
        ]
      }
    ],
    "token": {
      "decimal": 123,
      "description": "abc",
      "icon": "abc",
      "inflationRate": 123,
      "initialSupply": "abc",
      "name": "abc",
      "symbol": "abc",
      "totalSupply": "abc",
      "unit": "abc"
    },
    "tokenSwapConfig": {
      "commissionHolderAddress": "abc",
      "commissionRate": 123,
      "maxCommission": "abc",
      "minCommission": "abc",
      "revokeCommissionRate": 123
    },
    "txConfig": {
      "declare": {
        "cost": "abc",
        "hierarchy": 123,
        "restricted": true
      },
      "delegate": {
        "deltaInterval": 123,
        "typeUrls": [
          "abc"
        ]
      },
      "maxAssetSize": 123,
      "maxListSize": 123,
      "maxMultisig": 123,
      "minimumStake": "abc",
      "poke": {
        "amount": "abc",
        "dailyLimit": "abc",
        "enabled": true
      },
      "stake": {
        "timeoutGeneral": 123,
        "timeoutStakeForNode": 123
      }
    },
    "upgradeInfo": {
      "height": "abc",
      "version": "abc"
    },
    "version": "abc"
  },
  "activateProtocol": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "depositToken": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "declareFile": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "revokeDelegate": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "exchange": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "poke": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "accountState": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "data": {
      "typeUrl": "abc",
      "value": "abc"
    },
    "issuer": "abc",
    "migratedFrom": [
      "abc"
    ],
    "migratedTo": [
      "abc"
    ],
    "moniker": "abc",
    "nonce": "abc",
    "numAssets": "abc",
    "numTxs": "abc",
    "pk": "abc",
    "poke": {
      "amount": "abc",
      "dailyLimit": "abc",
      "leftover": "abc"
    },
    "stake": {
      "recentReceivedStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          {
            "hash": "abc",
            "value": "abc"
          }
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "totalReceivedStakes": "abc",
      "totalStakes": "abc",
      "totalUnstakes": "abc"
    },
    "type": {
      "address": "BASE16",
      "hash": "KECCAK",
      "pk": "ED25519",
      "role": "ROLE_ACCOUNT"
    },
    "withdrawItems": {
      "circular": true,
      "fifo": true,
      "items": [
        {
          "hash": "abc",
          "value": "abc"
        }
      ],
      "maxItems": 123,
      "typeUrl": "abc"
    }
  },
  "delegate": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "swapState": {
    "address": "abc",
    "assets": [
      "abc"
    ],
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "code": "INVALID_LOCK_STATUS",
        "hash": "abc",
        "height": "abc",
        "index": 123,
        "tags": [
          {
            "key": "abc",
            "value": "abc"
          }
        ],
        "time": "2019-04-29T00:00:00.000Z",
        "tx": {
          "chainId": "abc",
          "delegator": "abc",
          "from": "abc",
          "nonce": "abc",
          "pk": "abc",
          "signature": "abc",
          "signatures": [
            {
              "data": {
                "typeUrl": "abc",
                "value": "abc"
              },
              "delegator": "abc",
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      }
    },
    "hash": "abc",
    "hashkey": "abc",
    "hashlock": "abc",
    "locktime": 123,
    "receiver": "abc",
    "sender": "abc",
    "value": "abc"
  },
  "updateValidator": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "sysUpgrade": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "deployProtocol": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "confirm": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "transfer": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "createAsset": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "consensusUpgrade": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "revoke": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "deactivateProtocol": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "beginBlock": {
    "byzantineValidators": [
      {
        "chainId": "abc",
        "chainType": "abc",
        "hash": "abc",
        "originalTx": "abc",
        "receiverAddress": "abc"
      }
    ],
    "hash": "abc",
    "header": {
      "appHash": "abc",
      "chainId": "abc",
      "consensusHash": "abc",
      "dataHash": "abc",
      "evidenceHash": "abc",
      "height": "abc",
      "lastBlockId": {
        "hash": "abc",
        "partsHeader": {
          "hash": "abc",
          "total": 123
        }
      },
      "lastCommitHash": "abc",
      "lastResultsHash": "abc",
      "nextValidatorsHash": "abc",
      "numTxs": "abc",
      "proposerAddress": "abc",
      "time": "2019-04-29T00:00:00.000Z",
      "totalTxs": "abc",
      "validatorsHash": "abc",
      "version": {
        "app": "abc",
        "block": "abc"
      }
    },
    "lastCommitInfo": {
      "round": 123,
      "votes": [
        {
          "signedLastBlock": true,
          "validator": {
            "address": "abc",
            "power": "abc"
          }
        }
      ]
    }
  },
  "revokeSwap": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "approveWithdraw": {
    "chainId": "abc",
    "delegator": "abc",
    "from": "abc",
    "nonce": "abc",
    "pk": "abc",
    "signature": "abc",
    "signatures": [
      {
        "data": {
          "typeUrl": "abc",
          "value": "abc"
        },
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseSubscribe
 * @property {...GraphQLClient.Transaction} consumeAsset
 * @property {...GraphQLClient.Transaction} stake
 * @property {string} topic
 * @property {...GraphQLClient.AssetState} assetState
 * @property {...GraphQLClient.StakeState} stakeState
 * @property {...GraphQLClient.RequestEndBlock} endBlock
 * @property {...GraphQLClient.Transaction} updateAsset
 * @property {...GraphQLClient.Transaction} revokeWithdraw
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.Transaction} withdrawToken
 * @property {...GraphQLClient.Transaction} updateConsensusParams
 * @property {...GraphQLClient.Transaction} accountMigrate
 * @property {...GraphQLClient.Transaction} upgradeNode
 * @property {...GraphQLClient.DelegateState} delegateState
 * @property {...GraphQLClient.Transaction} setupSwap
 * @property {...GraphQLClient.Transaction} retrieveSwap
 * @property {...GraphQLClient.Transaction} acquireAsset
 * @property {...GraphQLClient.ProtocolState} protocolState
 * @property {...GraphQLClient.Transaction} declare
 * @property {...GraphQLClient.ForgeState} forgeState
 * @property {...GraphQLClient.Transaction} activateProtocol
 * @property {...GraphQLClient.Transaction} depositToken
 * @property {...GraphQLClient.Transaction} declareFile
 * @property {...GraphQLClient.Transaction} revokeDelegate
 * @property {...GraphQLClient.Transaction} exchange
 * @property {...GraphQLClient.Transaction} poke
 * @property {...GraphQLClient.AccountState} accountState
 * @property {...GraphQLClient.Transaction} delegate
 * @property {...GraphQLClient.SwapState} swapState
 * @property {...GraphQLClient.Transaction} updateValidator
 * @property {...GraphQLClient.Transaction} sysUpgrade
 * @property {...GraphQLClient.Transaction} deployProtocol
 * @property {...GraphQLClient.Transaction} confirm
 * @property {...GraphQLClient.Transaction} transfer
 * @property {...GraphQLClient.Transaction} createAsset
 * @property {...GraphQLClient.Transaction} consensusUpgrade
 * @property {...GraphQLClient.Transaction} revoke
 * @property {...GraphQLClient.Transaction} deactivateProtocol
 * @property {...GraphQLClient.RequestBeginBlock} beginBlock
 * @property {...GraphQLClient.Transaction} revokeSwap
 * @property {...GraphQLClient.Transaction} approveWithdraw
 */

/**
 * Structure of GraphQLClient.ResponseUnsubscribe
 *
 * Checkout the following snippet for the format of ResponseUnsubscribe:
 * ```json
{
  "code": "INVALID_LOCK_STATUS"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseUnsubscribe
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.RetrieveSwapTx
 *
 * Checkout the following snippet for the format of RetrieveSwapTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "hashkey": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.RetrieveSwapTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} hashkey
 */

/**
 * Structure of GraphQLClient.RevokeSwapTx
 *
 * Checkout the following snippet for the format of RevokeSwapTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.RevokeSwapTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 */

/**
 * Structure of GraphQLClient.SetupSwapTx
 *
 * Checkout the following snippet for the format of SetupSwapTx:
 * ```json
{
  "assets": [
    "abc"
  ],
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "hashlock": "abc",
  "locktime": 123,
  "receiver": "abc",
  "value": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SetupSwapTx
 * @property {Array<...GraphQLClient.string>} assets
 * @property {...GraphQLClient.Any} data
 * @property {string} hashlock
 * @property {number} locktime
 * @property {string} receiver
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.StakeConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeConfig
 * @property {number} timeoutGeneral
 * @property {number} timeoutStakeForNode
 */

/**
 * Structure of GraphQLClient.StakeContext
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeContext
 * @property {...GraphQLClient.CircularQueue} recentReceivedStakes
 * @property {...GraphQLClient.CircularQueue} recentStakes
 * @property {string} totalReceivedStakes
 * @property {string} totalStakes
 * @property {string} totalUnstakes
 */

/**
 * Structure of GraphQLClient.StakeState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeState
 * @property {string} address
 * @property {string} balance
 * @property {...GraphQLClient.StateContext} context
 * @property {...GraphQLClient.Any} data
 * @property {string} from
 * @property {string} message
 * @property {string} to
 */

/**
 * Structure of GraphQLClient.StakeSummary
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeSummary
 * @property {...GraphQLClient.StateContext} context
 * @property {string} totalStakes
 * @property {string} totalUnstakes
 */

/**
 * Structure of GraphQLClient.StakeSummaryEntry
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeSummaryEntry
 * @property {number} key
 * @property {...GraphQLClient.StakeSummary} value
 */

/**
 * Structure of GraphQLClient.StateContext
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StateContext
 * @property {string} genesisTime
 * @property {...GraphQLClient.TransactionInfo} genesisTx
 * @property {string} renaissanceTime
 * @property {...GraphQLClient.TransactionInfo} renaissanceTx
 */

/**
 * Structure of GraphQLClient.StorageStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StorageStatus
 * @property {...GraphQLClient.DiskSpaceStatus} diskSpace
 * @property {boolean} health
 * @property {string} indexerServer
 * @property {string} stateDb
 */

/**
 * Structure of GraphQLClient.SwapState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SwapState
 * @property {string} address
 * @property {Array<...GraphQLClient.string>} assets
 * @property {...GraphQLClient.StateContext} context
 * @property {string} hash
 * @property {string} hashkey
 * @property {string} hashlock
 * @property {number} locktime
 * @property {string} receiver
 * @property {string} sender
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.SwapStatistics
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SwapStatistics
 * @property {string} address
 * @property {number} lockedAssetsIn
 * @property {number} lockedAssetsOut
 * @property {string} lockedValueIn
 * @property {string} lockedValueOut
 */

/**
 * Structure of GraphQLClient.TasksEntry
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TasksEntry
 * @property {string} key
 * @property {...GraphQLClient.UpgradeTasks} value
 */

/**
 * Structure of GraphQLClient.TokenSwapConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TokenSwapConfig
 * @property {string} commissionHolderAddress
 * @property {number} commissionRate
 * @property {string} maxCommission
 * @property {string} minCommission
 * @property {number} revokeCommissionRate
 */

/**
 * Structure of GraphQLClient.Transaction
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Transaction
 * @property {string} chainId
 * @property {string} delegator
 * @property {string} from
 * @property {...Itx} itx
 * @property {undefined} itxJson
 * @property {string} nonce
 * @property {string} pk
 * @property {string} signature
 * @property {Array<...GraphQLClient.Multisig>} signatures
 */

/**
 * Structure of GraphQLClient.TransactionConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TransactionConfig
 * @property {...GraphQLClient.DeclareConfig} declare
 * @property {...GraphQLClient.DelegateConfig} delegate
 * @property {number} maxAssetSize
 * @property {number} maxListSize
 * @property {number} maxMultisig
 * @property {string} minimumStake
 * @property {...GraphQLClient.PokeConfig} poke
 * @property {...GraphQLClient.StakeConfig} stake
 */

/**
 * Structure of GraphQLClient.TransactionInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TransactionInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} hash
 * @property {string} height
 * @property {number} index
 * @property {Array<...GraphQLClient.KvPair>} tags
 * @property {string} time
 * @property {...GraphQLClient.Transaction} tx
 */

/**
 * Structure of GraphQLClient.TransferTx
 *
 * Checkout the following snippet for the format of TransferTx:
 * ```json
{
  "assets": [
    "abc"
  ],
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "to": "abc",
  "value": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TransferTx
 * @property {Array<...GraphQLClient.string>} assets
 * @property {...GraphQLClient.Any} data
 * @property {string} to
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.TypeUrls
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TypeUrls
 * @property {string} module
 * @property {string} url
 */

/**
 * Structure of GraphQLClient.UnconfirmedTxs
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UnconfirmedTxs
 * @property {number} nTxs
 * @property {Array<...GraphQLClient.Transaction>} txs
 */

/**
 * Structure of GraphQLClient.UpdateAssetTx
 *
 * Checkout the following snippet for the format of UpdateAssetTx:
 * ```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "moniker": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UpdateAssetTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} moniker
 */

/**
 * Structure of GraphQLClient.UpgradeInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UpgradeInfo
 * @property {string} height
 * @property {string} version
 */

/**
 * Structure of GraphQLClient.UpgradeNodeTx
 *
 * Checkout the following snippet for the format of UpgradeNodeTx:
 * ```json
{
  "height": "abc",
  "override": true,
  "version": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UpgradeNodeTx
 * @property {string} height
 * @property {boolean} override
 * @property {string} version
 */

/**
 * Structure of GraphQLClient.UpgradeTask
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UpgradeTask
 * @property {Array<...GraphQLClient.UpgradeAction>} actions
 * @property {string} dataHash
 * @property {...GraphQLClient.UpgradeType} type
 */

/**
 * Structure of GraphQLClient.UpgradeTasks
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UpgradeTasks
 * @property {Array<...GraphQLClient.UpgradeTask>} item
 */

/**
 * Structure of GraphQLClient.Validator
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Validator
 * @property {string} address
 * @property {string} power
 */

/**
 * Structure of GraphQLClient.ValidatorInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ValidatorInfo
 * @property {string} address
 * @property {...GraphQLClient.GeoInfo} geoInfo
 * @property {string} name
 * @property {string} proposerPriority
 * @property {...GraphQLClient.PubKey} pubKey
 * @property {string} votingPower
 */

/**
 * Structure of GraphQLClient.ValidatorsInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ValidatorsInfo
 * @property {string} blockHeight
 * @property {Array<...GraphQLClient.ValidatorInfo>} validators
 */

/**
 * Structure of GraphQLClient.Version
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Version
 * @property {string} app
 * @property {string} block
 */

/**
 * Structure of GraphQLClient.VoteInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.VoteInfo
 * @property {boolean} signedLastBlock
 * @property {...GraphQLClient.Validator} validator
 */

/**
 * Structure of GraphQLClient.WalletType
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.WalletType
 * @property {...GraphQLClient.EncodingType} address
 * @property {...GraphQLClient.HashType} hash
 * @property {...GraphQLClient.KeyType} pk
 * @property {...GraphQLClient.RoleType} role
 */


/**
 * Structure of GraphQLClient.GetAccountStateParams
 *
 * Checkout the following snippet for the format of GetAccountStateParams:
 * ```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetAccountStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetAssetStateParams
 *
 * Checkout the following snippet for the format of GetAssetStateParams:
 * ```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetAssetStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetBlockParams
 *
 * Checkout the following snippet for the format of GetBlockParams:
 * ```json
{
  "height": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetBlockParams
 * @property {string} height
 */

/**
 * Structure of GraphQLClient.GetBlocksParams
 *
 * Checkout the following snippet for the format of GetBlocksParams:
 * ```json
{
  "emptyExcluded": true
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetBlocksParams
 * @property {boolean} emptyExcluded
 * @property {...GraphQLClient.RangeFilter} heightFilter
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.GetConfigParams
 *
 * Checkout the following snippet for the format of GetConfigParams:
 * ```json
{
  "parsed": true
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetConfigParams
 * @property {boolean} parsed
 */

/**
 * Structure of GraphQLClient.GetDelegateStateParams
 *
 * Checkout the following snippet for the format of GetDelegateStateParams:
 * ```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetDelegateStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetForgeStateParams
 *
 * Checkout the following snippet for the format of GetForgeStateParams:
 * ```json
{
  "height": "abc",
  "keys": [
    "abc"
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetForgeStateParams
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetForgeStatsByDayParams
 *
 * Checkout the following snippet for the format of GetForgeStatsByDayParams:
 * ```json
{
  "endDate": "abc",
  "startDate": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetForgeStatsByDayParams
 * @property {string} endDate
 * @property {string} startDate
 */

/**
 * Structure of GraphQLClient.GetForgeStatsByHourParams
 *
 * Checkout the following snippet for the format of GetForgeStatsByHourParams:
 * ```json
{
  "date": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetForgeStatsByHourParams
 * @property {string} date
 */

/**
 * Structure of GraphQLClient.GetSwapStateParams
 *
 * Checkout the following snippet for the format of GetSwapStateParams:
 * ```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetSwapStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetSwapStatisticsParams
 *
 * Checkout the following snippet for the format of GetSwapStatisticsParams:
 * ```json
{
  "address": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetSwapStatisticsParams
 * @property {string} address
 */

/**
 * Structure of GraphQLClient.GetTxParams
 *
 * Checkout the following snippet for the format of GetTxParams:
 * ```json
{
  "hash": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetTxParams
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.GetUnconfirmedTxsParams
 *
 * Checkout the following snippet for the format of GetUnconfirmedTxsParams:
 * ```json
{}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetUnconfirmedTxsParams
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListAssetTransactionsParams
 *
 * Checkout the following snippet for the format of ListAssetTransactionsParams:
 * ```json
{
  "address": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListAssetTransactionsParams
 * @property {string} address
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListAssetsParams
 *
 * Checkout the following snippet for the format of ListAssetsParams:
 * ```json
{
  "ownerAddress": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListAssetsParams
 * @property {string} ownerAddress
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListBlocksParams
 *
 * Checkout the following snippet for the format of ListBlocksParams:
 * ```json
{
  "proposer": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListBlocksParams
 * @property {...GraphQLClient.RangeFilter} heightFilter
 * @property {...GraphQLClient.RangeFilter} numInvalidTxsFilter
 * @property {...GraphQLClient.RangeFilter} numTxsFilter
 * @property {...GraphQLClient.PageInput} paging
 * @property {string} proposer
 * @property {...GraphQLClient.TimeFilter} timeFilter
 */

/**
 * Structure of GraphQLClient.ListStakesParams
 *
 * Checkout the following snippet for the format of ListStakesParams:
 * ```json
{}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListStakesParams
 * @property {...GraphQLClient.AddressFilter} addressFilter
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListSwapParams
 *
 * Checkout the following snippet for the format of ListSwapParams:
 * ```json
{
  "available": true,
  "paging": "abc",
  "receiver": "abc",
  "sender": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListSwapParams
 * @property {boolean} available
 * @property {string} paging
 * @property {string} receiver
 * @property {string} sender
 */

/**
 * Structure of GraphQLClient.ListTopAccountsParams
 *
 * Checkout the following snippet for the format of ListTopAccountsParams:
 * ```json
{}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListTopAccountsParams
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListTransactionsParams
 *
 * Checkout the following snippet for the format of ListTransactionsParams:
 * ```json
{}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListTransactionsParams
 * @property {...GraphQLClient.AddressFilter} addressFilter
 * @property {...GraphQLClient.PageInput} paging
 * @property {...GraphQLClient.TimeFilter} timeFilter
 * @property {...GraphQLClient.TypeFilter} typeFilter
 * @property {...GraphQLClient.ValidityFilter} validityFilter
 */

/**
 * Structure of GraphQLClient.SendTxParams
 *
 * Checkout the following snippet for the format of SendTxParams:
 * ```json
{
  "commit": true,
  "token": "abc",
  "tx": "abc",
  "wallet": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SendTxParams
 * @property {boolean} commit
 * @property {string} token
 * @property {string} tx
 * @property {string} wallet
 */

/**
 * Structure of GraphQLClient.UnsubscribeParams
 *
 * Checkout the following snippet for the format of UnsubscribeParams:
 * ```json
{
  "topic": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UnsubscribeParams
 * @property {string} topic
 */

/**
 * Structure of GraphQLClient.SubscribeParams
 *
 * Checkout the following snippet for the format of SubscribeParams:
 * ```json
{
  "filter": "abc",
  "topic": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SubscribeParams
 * @property {string} filter
 * @property {string} topic
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.AccountMigrateTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.AccountMigrateTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send AccountMigrateTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendAccountMigrateTx
 * @param {GraphQLClient.AccountMigrateTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.AcquireAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.AcquireAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send AcquireAssetTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendAcquireAssetTx
 * @param {GraphQLClient.AcquireAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ApproveWithdrawTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.ApproveWithdrawTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send ApproveWithdrawTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendApproveWithdrawTx
 * @param {GraphQLClient.ApproveWithdrawTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ConsumeAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.ConsumeAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send ConsumeAssetTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendConsumeAssetTx
 * @param {GraphQLClient.ConsumeAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.CreateAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.CreateAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send CreateAssetTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendCreateAssetTx
 * @param {GraphQLClient.CreateAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeclareTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.DeclareTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send DeclareTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDeclareTx
 * @param {GraphQLClient.DeclareTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DelegateTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.DelegateTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send DelegateTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDelegateTx
 * @param {GraphQLClient.DelegateTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DepositTokenTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.DepositTokenTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send DepositTokenTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDepositTokenTx
 * @param {GraphQLClient.DepositTokenTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ExchangeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.ExchangeTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send ExchangeTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendExchangeTx
 * @param {GraphQLClient.ExchangeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.PokeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.PokeTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send PokeTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendPokeTx
 * @param {GraphQLClient.PokeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.RefuelTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.RefuelTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send RefuelTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendRefuelTx
 * @param {GraphQLClient.RefuelTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.RetrieveSwapTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.RetrieveSwapTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send RetrieveSwapTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendRetrieveSwapTx
 * @param {GraphQLClient.RetrieveSwapTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.RevokeDelegateTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.RevokeDelegateTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send RevokeDelegateTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendRevokeDelegateTx
 * @param {GraphQLClient.RevokeDelegateTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.RevokeSwapTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.RevokeSwapTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send RevokeSwapTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendRevokeSwapTx
 * @param {GraphQLClient.RevokeSwapTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.RevokeWithdrawTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.RevokeWithdrawTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send RevokeWithdrawTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendRevokeWithdrawTx
 * @param {GraphQLClient.RevokeWithdrawTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.SetupSwapTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.SetupSwapTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send SetupSwapTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendSetupSwapTx
 * @param {GraphQLClient.SetupSwapTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.TransferTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.TransferTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send TransferTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendTransferTx
 * @param {GraphQLClient.TransferTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpdateAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.UpdateAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send UpdateAssetTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendUpdateAssetTx
 * @param {GraphQLClient.UpdateAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpdateConsensusParamsTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.UpdateConsensusParamsTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send UpdateConsensusParamsTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendUpdateConsensusParamsTx
 * @param {GraphQLClient.UpdateConsensusParamsTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpdateValidatorTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.UpdateValidatorTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send UpdateValidatorTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendUpdateValidatorTx
 * @param {GraphQLClient.UpdateValidatorTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpgradeNodeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.UpgradeNodeTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send UpgradeNodeTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendUpgradeNodeTx
 * @param {GraphQLClient.UpgradeNodeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.WithdrawTokenTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.WithdrawTokenTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send WithdrawTokenTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendWithdrawTokenTx
 * @param {GraphQLClient.WithdrawTokenTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * Encode a AccountMigrateTx transaction for later use
 *
 * @name GraphQLClient#encodeAccountMigrateTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.AccountMigrateTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a AcquireAssetTx transaction for later use
 *
 * @name GraphQLClient#encodeAcquireAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.AcquireAssetTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a ApproveWithdrawTx transaction for later use
 *
 * @name GraphQLClient#encodeApproveWithdrawTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ApproveWithdrawTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a ConsumeAssetTx transaction for later use
 *
 * @name GraphQLClient#encodeConsumeAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ConsumeAssetTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a CreateAssetTx transaction for later use
 *
 * @name GraphQLClient#encodeCreateAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.CreateAssetTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a DeclareTx transaction for later use
 *
 * @name GraphQLClient#encodeDeclareTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DeclareTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a DelegateTx transaction for later use
 *
 * @name GraphQLClient#encodeDelegateTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DelegateTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a DepositTokenTx transaction for later use
 *
 * @name GraphQLClient#encodeDepositTokenTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DepositTokenTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a ExchangeTx transaction for later use
 *
 * @name GraphQLClient#encodeExchangeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ExchangeTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a PokeTx transaction for later use
 *
 * @name GraphQLClient#encodePokeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.PokeTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a RefuelTx transaction for later use
 *
 * @name GraphQLClient#encodeRefuelTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.RefuelTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a RetrieveSwapTx transaction for later use
 *
 * @name GraphQLClient#encodeRetrieveSwapTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.RetrieveSwapTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a RevokeDelegateTx transaction for later use
 *
 * @name GraphQLClient#encodeRevokeDelegateTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.RevokeDelegateTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a RevokeSwapTx transaction for later use
 *
 * @name GraphQLClient#encodeRevokeSwapTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.RevokeSwapTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a RevokeWithdrawTx transaction for later use
 *
 * @name GraphQLClient#encodeRevokeWithdrawTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.RevokeWithdrawTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a SetupSwapTx transaction for later use
 *
 * @name GraphQLClient#encodeSetupSwapTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.SetupSwapTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a TransferTx transaction for later use
 *
 * @name GraphQLClient#encodeTransferTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.TransferTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a UpdateAssetTx transaction for later use
 *
 * @name GraphQLClient#encodeUpdateAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpdateAssetTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a UpdateConsensusParamsTx transaction for later use
 *
 * @name GraphQLClient#encodeUpdateConsensusParamsTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpdateConsensusParamsTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a UpdateValidatorTx transaction for later use
 *
 * @name GraphQLClient#encodeUpdateValidatorTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpdateValidatorTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a UpgradeNodeTx transaction for later use
 *
 * @name GraphQLClient#encodeUpgradeNodeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpgradeNodeTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a WithdrawTokenTx transaction for later use
 *
 * @name GraphQLClient#encodeWithdrawTokenTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.WithdrawTokenTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * getAccountState
 *
 * @name GraphQLClient#getAccountState
 * @param {GraphQLClient.GetAccountStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetAccountState>} Checkout {@link GraphQLClient.ResponseGetAccountState} for resolved data format
 */


/**
 * getAssetState
 *
 * @name GraphQLClient#getAssetState
 * @param {GraphQLClient.GetAssetStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetAssetState>} Checkout {@link GraphQLClient.ResponseGetAssetState} for resolved data format
 */


/**
 * getBlock
 *
 * @name GraphQLClient#getBlock
 * @param {GraphQLClient.GetBlockParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetBlock>} Checkout {@link GraphQLClient.ResponseGetBlock} for resolved data format
 */


/**
 * getBlocks
 *
 * @name GraphQLClient#getBlocks
 * @param {GraphQLClient.GetBlocksParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetBlocks>} Checkout {@link GraphQLClient.ResponseGetBlocks} for resolved data format
 */


/**
 * getChainInfo
 *
 * @name GraphQLClient#getChainInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetChainInfo>} Checkout {@link GraphQLClient.ResponseGetChainInfo} for resolved data format
 */


/**
 * getConfig
 *
 * @name GraphQLClient#getConfig
 * @param {GraphQLClient.GetConfigParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetConfig>} Checkout {@link GraphQLClient.ResponseGetConfig} for resolved data format
 */


/**
 * getDelegateState
 *
 * @name GraphQLClient#getDelegateState
 * @param {GraphQLClient.GetDelegateStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetDelegateState>} Checkout {@link GraphQLClient.ResponseGetDelegateState} for resolved data format
 */


/**
 * getForgeState
 *
 * @name GraphQLClient#getForgeState
 * @param {GraphQLClient.GetForgeStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeState>} Checkout {@link GraphQLClient.ResponseGetForgeState} for resolved data format
 */


/**
 * getForgeStats
 *
 * @name GraphQLClient#getForgeStats
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */


/**
 * getForgeStatsByDay
 *
 * @name GraphQLClient#getForgeStatsByDay
 * @param {GraphQLClient.GetForgeStatsByDayParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */


/**
 * getForgeStatsByHour
 *
 * @name GraphQLClient#getForgeStatsByHour
 * @param {GraphQLClient.GetForgeStatsByHourParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */


/**
 * getHealthStatus
 *
 * @name GraphQLClient#getHealthStatus
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetHealthStatus>} Checkout {@link GraphQLClient.ResponseGetHealthStatus} for resolved data format
 */


/**
 * getNetInfo
 *
 * @name GraphQLClient#getNetInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetNetInfo>} Checkout {@link GraphQLClient.ResponseGetNetInfo} for resolved data format
 */


/**
 * getNodeInfo
 *
 * @name GraphQLClient#getNodeInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetNodeInfo>} Checkout {@link GraphQLClient.ResponseGetNodeInfo} for resolved data format
 */


/**
 * getSimulatorStatus
 *
 * @name GraphQLClient#getSimulatorStatus
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetSimulatorStatus>} Checkout {@link GraphQLClient.ResponseGetSimulatorStatus} for resolved data format
 */


/**
 * getSwapState
 *
 * @name GraphQLClient#getSwapState
 * @param {GraphQLClient.GetSwapStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetSwapState>} Checkout {@link GraphQLClient.ResponseGetSwapState} for resolved data format
 */


/**
 * getSwapStatistics
 *
 * @name GraphQLClient#getSwapStatistics
 * @param {GraphQLClient.GetSwapStatisticsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetSwapStatistics>} Checkout {@link GraphQLClient.ResponseGetSwapStatistics} for resolved data format
 */


/**
 * getTx
 *
 * @name GraphQLClient#getTx
 * @param {GraphQLClient.GetTxParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetTx>} Checkout {@link GraphQLClient.ResponseGetTx} for resolved data format
 */


/**
 * getUnconfirmedTxs
 *
 * @name GraphQLClient#getUnconfirmedTxs
 * @param {GraphQLClient.GetUnconfirmedTxsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetUnconfirmedTxs>} Checkout {@link GraphQLClient.ResponseGetUnconfirmedTxs} for resolved data format
 */


/**
 * getValidatorsInfo
 *
 * @name GraphQLClient#getValidatorsInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetValidatorsInfo>} Checkout {@link GraphQLClient.ResponseGetValidatorsInfo} for resolved data format
 */


/**
 * listAssetTransactions
 *
 * @name GraphQLClient#listAssetTransactions
 * @param {GraphQLClient.ListAssetTransactionsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListAssetTransactions>} Checkout {@link GraphQLClient.ResponseListAssetTransactions} for resolved data format
 */


/**
 * listAssets
 *
 * @name GraphQLClient#listAssets
 * @param {GraphQLClient.ListAssetsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListAssets>} Checkout {@link GraphQLClient.ResponseListAssets} for resolved data format
 */


/**
 * listBlocks
 *
 * @name GraphQLClient#listBlocks
 * @param {GraphQLClient.ListBlocksParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListBlocks>} Checkout {@link GraphQLClient.ResponseListBlocks} for resolved data format
 */


/**
 * listStakes
 *
 * @name GraphQLClient#listStakes
 * @param {GraphQLClient.ListStakesParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListStakes>} Checkout {@link GraphQLClient.ResponseListStakes} for resolved data format
 */


/**
 * listSwap
 *
 * @name GraphQLClient#listSwap
 * @param {GraphQLClient.ListSwapParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListSwap>} Checkout {@link GraphQLClient.ResponseListSwap} for resolved data format
 */


/**
 * listTopAccounts
 *
 * @name GraphQLClient#listTopAccounts
 * @param {GraphQLClient.ListTopAccountsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListTopAccounts>} Checkout {@link GraphQLClient.ResponseListTopAccounts} for resolved data format
 */


/**
 * listTransactions
 *
 * @name GraphQLClient#listTransactions
 * @param {GraphQLClient.ListTransactionsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListTransactions>} Checkout {@link GraphQLClient.ResponseListTransactions} for resolved data format
 */


/**
 * sendTx
 *
 * @name GraphQLClient#sendTx
 * @param {GraphQLClient.SendTxParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseSendTx>} Checkout {@link GraphQLClient.ResponseSendTx} for resolved data format
 */


/**
 * startSimulator
 *
 * @name GraphQLClient#startSimulator
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseStartSimulator>} Checkout {@link GraphQLClient.ResponseStartSimulator} for resolved data format
 */


/**
 * stopSimulator
 *
 * @name GraphQLClient#stopSimulator
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseStopSimulator>} Checkout {@link GraphQLClient.ResponseStopSimulator} for resolved data format
 */


/**
 * unsubscribe
 *
 * @name GraphQLClient#unsubscribe
 * @param {GraphQLClient.UnsubscribeParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseUnsubscribe>} Checkout {@link GraphQLClient.ResponseUnsubscribe} for resolved data format
 */


/**
 * subscribe
 *
 * @name GraphQLClient#subscribe
 * @param {GraphQLClient.SubscribeParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseSubscribe>} Checkout {@link GraphQLClient.ResponseSubscribe} for resolved data format
 */
