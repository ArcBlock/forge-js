/**
 * List all query method names
 *
 * @name GraphQLClient#getQueries
 * @function
 * @memberof GraphQLClient
 * @returns {Array<string>} method name list
 */

/**
 * List all mutation method names
 *
 * @name GraphQLClient#getMutations
 * @function
 * @memberof GraphQLClient
 * @returns {Array<string>} method name list
 */

/**
 * List all subscription method names
 *
 * @name GraphQLClient#getSubscription
 * @function
 * @memberof GraphQLClient
 * @returns {Array<string>} method name list
 */

/**
 * Send raw graphql query to forge graphql endpoint
 *
 * @name GraphQLClient#doRawQuery
 * @function
 * @memberof GraphQLClient
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
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
 * @property {Array<...GraphQLClient.string>} items
 * @property {number} maxItems
 * @property {string} typeUrl
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
 * Structure of GraphQLClient.ConsensusUpgradeTx 
 *
 * Checkout the following snippet for the format of ConsensusUpgradeTx:
 * ```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "maxBytes": "abc",
  "maxCandidates": 123,
  "maxGas": "abc",
  "maxValidators": 123,
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
 * @typedef {object} GraphQLClient.ConsensusUpgradeTx
 * @property {...GraphQLClient.Any} data
 * @property {string} maxBytes
 * @property {number} maxCandidates
 * @property {string} maxGas
 * @property {number} maxValidators
 * @property {Array<...GraphQLClient.Validator>} validators
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
 * Structure of GraphQLClient.DeclareFileTx 
 *
 * Checkout the following snippet for the format of DeclareFileTx:
 * ```json
{
  "hash": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DeclareFileTx
 * @property {string} hash
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
 * @property {string} height
 * @property {string} time
 * @property {string} totalVotingPower
 * @property {string} type
 * @property {...GraphQLClient.Validator} validator
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
 * Structure of GraphQLClient.ExtraAccountMigrate
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ExtraAccountMigrate
 * @property {string} address
 */

/**
 * Structure of GraphQLClient.ExtraCreateAsset
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ExtraCreateAsset
 * @property {string} asset
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
 * @property {string} address
 * @property {...GraphQLClient.ConsensusParams} consensus
 * @property {...GraphQLClient.Any} data
 * @property {string} forgeAppHash
 * @property {...GraphQLClient.PokeConfig} pokeConfig
 * @property {Array<...GraphQLClient.CoreProtocol>} protocols
 * @property {...GraphQLClient.StakeConfig} stakeConfig
 * @property {Array<...GraphQLClient.StakeSummaryEntry>} stakeSummary
 * @property {Array<...GraphQLClient.TasksEntry>} tasks
 * @property {...GraphQLClient.ForgeToken} token
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
 * @property {string} genesisTime
 * @property {string} moniker
 * @property {string} owner
 * @property {boolean} readonly
 * @property {string} renaissanceTime
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
 * @property {string} address
 * @property {string} amount
 * @property {string} balance
 * @property {string} dailyLimit
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
 * @property {string} description
 * @property {Array<...GraphQLClient.string>} migratedFrom
 * @property {Array<...GraphQLClient.string>} migratedTo
 * @property {string} name
 * @property {string} rootHash
 * @property {...GraphQLClient.ProtocolStatus} status
 * @property {string} txHash
 * @property {number} version
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
 * Structure of GraphQLClient.RequestBeginBlock 
 *
 * Checkout the following snippet for the format of RequestBeginBlock:
 * ```json
{
  "byzantineValidators": [
    {
      "height": "abc",
      "time": "2019-04-29T00:00:00.000Z",
      "totalVotingPower": "abc",
      "type": "abc",
      "validator": {
        "address": "abc",
        "power": "abc"
      }
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
  "code": "OK",
  "state": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
          "abc"
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          "abc"
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
  "code": "OK",
  "state": {
    "address": "abc",
    "consumedTime": "2019-04-29T00:00:00.000Z",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
    "readonly": true,
    "stake": {
      "recentReceivedStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          "abc"
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          "abc"
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
  "code": "OK"
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
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
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
 * Structure of GraphQLClient.ResponseGetForgeState 
 *
 * Checkout the following snippet for the format of ResponseGetForgeState:
 * ```json
{
  "code": "OK",
  "state": {
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
    "forgeAppHash": "abc",
    "pokeConfig": {
      "address": "abc",
      "amount": "abc",
      "balance": "abc",
      "dailyLimit": "abc"
    },
    "protocols": [
      {
        "address": "abc",
        "name": "abc"
      }
    ],
    "stakeConfig": {
      "timeoutGeneral": 123,
      "timeoutStakeForNode": 123
    },
    "stakeSummary": [
      {
        "key": 123,
        "value": {
          "context": {
            "genesisTime": "2019-04-29T00:00:00.000Z",
            "genesisTx": {
              "accountMigrate": {
                "address": "abc"
              },
              "code": "OK",
              "createAsset": {
                "asset": "abc"
              },
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
                    "pk": "abc",
                    "signature": "abc",
                    "signer": "abc"
                  }
                ]
              }
            },
            "renaissanceTime": "2019-04-29T00:00:00.000Z",
            "renaissanceTx": {
              "accountMigrate": {
                "address": "abc"
              },
              "code": "OK",
              "createAsset": {
                "asset": "abc"
              },
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
    "txConfig": {
      "maxAssetSize": 123,
      "maxListSize": 123,
      "maxMultisig": 123,
      "minimumStake": "abc"
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
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
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
 * Structure of GraphQLClient.ResponseGetProtocolState 
 *
 * Checkout the following snippet for the format of ResponseGetProtocolState:
 * ```json
{
  "code": "OK",
  "state": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
    "description": "abc",
    "migratedFrom": [
      "abc"
    ],
    "migratedTo": [
      "abc"
    ],
    "name": "abc",
    "rootHash": "abc",
    "status": "PAUSED",
    "txHash": "abc",
    "version": 123
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetProtocolState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ProtocolState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetSimulatorStatus 
 *
 * Checkout the following snippet for the format of ResponseGetSimulatorStatus:
 * ```json
{
  "code": "OK",
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
 * Structure of GraphQLClient.ResponseGetStakeState 
 *
 * Checkout the following snippet for the format of ResponseGetStakeState:
 * ```json
{
  "code": "OK",
  "state": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetStakeState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.StakeState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetTx 
 *
 * Checkout the following snippet for the format of ResponseGetTx:
 * ```json
{
  "code": "OK",
  "info": {
    "accountMigrate": {
      "address": "abc"
    },
    "code": "OK",
    "createAsset": {
      "asset": "abc"
    },
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
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "transactions": [
    {
      "code": "OK",
      "hash": "abc",
      "receiver": "abc",
      "sender": "abc",
      "time": "abc",
      "tx": {
        "chainId": "abc",
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
      "genesisTime": "abc",
      "moniker": "abc",
      "owner": "abc",
      "readonly": true,
      "renaissanceTime": "abc"
    }
  ],
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
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
  "code": "OK",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "transactions": [
    {
      "code": "OK",
      "hash": "abc",
      "receiver": "abc",
      "sender": "abc",
      "time": "abc",
      "tx": {
        "chainId": "abc",
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
  "code": "OK",
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
  "code": "OK"
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
  "code": "OK"
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
  "accountMigrate": {
    "chainId": "abc",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
          "abc"
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          "abc"
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
    }
  },
  "assetState": {
    "address": "abc",
    "consumedTime": "2019-04-29T00:00:00.000Z",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
    "readonly": true,
    "stake": {
      "recentReceivedStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          "abc"
        ],
        "maxItems": 123,
        "typeUrl": "abc"
      },
      "recentStakes": {
        "circular": true,
        "fifo": true,
        "items": [
          "abc"
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
  "beginBlock": {
    "byzantineValidators": [
      {
        "height": "abc",
        "time": "2019-04-29T00:00:00.000Z",
        "totalVotingPower": "abc",
        "type": "abc",
        "validator": {
          "address": "abc",
          "power": "abc"
        }
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
  "code": "OK",
  "confirm": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "consensusUpgrade": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "createAsset": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "declare": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "declareFile": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "endBlock": {
    "height": "abc"
  },
  "exchange": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "forgeState": {
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
    "forgeAppHash": "abc",
    "pokeConfig": {
      "address": "abc",
      "amount": "abc",
      "balance": "abc",
      "dailyLimit": "abc"
    },
    "protocols": [
      {
        "address": "abc",
        "name": "abc"
      }
    ],
    "stakeConfig": {
      "timeoutGeneral": 123,
      "timeoutStakeForNode": 123
    },
    "stakeSummary": [
      {
        "key": 123,
        "value": {
          "context": {
            "genesisTime": "2019-04-29T00:00:00.000Z",
            "genesisTx": {
              "accountMigrate": {
                "address": "abc"
              },
              "code": "OK",
              "createAsset": {
                "asset": "abc"
              },
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
                    "pk": "abc",
                    "signature": "abc",
                    "signer": "abc"
                  }
                ]
              }
            },
            "renaissanceTime": "2019-04-29T00:00:00.000Z",
            "renaissanceTx": {
              "accountMigrate": {
                "address": "abc"
              },
              "code": "OK",
              "createAsset": {
                "asset": "abc"
              },
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
    "txConfig": {
      "maxAssetSize": 123,
      "maxListSize": 123,
      "maxMultisig": 123,
      "minimumStake": "abc"
    },
    "upgradeInfo": {
      "height": "abc",
      "version": "abc"
    },
    "version": "abc"
  },
  "protocolState": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
    "description": "abc",
    "migratedFrom": [
      "abc"
    ],
    "migratedTo": [
      "abc"
    ],
    "name": "abc",
    "rootHash": "abc",
    "status": "PAUSED",
    "txHash": "abc",
    "version": 123
  },
  "revoke": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "stake": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "stakeState": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
              "pk": "abc",
              "signature": "abc",
              "signer": "abc"
            }
          ]
        }
      },
      "renaissanceTime": "2019-04-29T00:00:00.000Z",
      "renaissanceTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "OK",
        "createAsset": {
          "asset": "abc"
        },
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
  "sysUpgrade": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "topic": "abc",
  "transfer": {
    "chainId": "abc",
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
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "updateAsset": {
    "chainId": "abc",
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
 * @property {...GraphQLClient.Transaction} accountMigrate
 * @property {...GraphQLClient.AccountState} accountState
 * @property {...GraphQLClient.AssetState} assetState
 * @property {...GraphQLClient.RequestBeginBlock} beginBlock
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.Transaction} confirm
 * @property {...GraphQLClient.Transaction} consensusUpgrade
 * @property {...GraphQLClient.Transaction} createAsset
 * @property {...GraphQLClient.Transaction} declare
 * @property {...GraphQLClient.Transaction} declareFile
 * @property {...GraphQLClient.RequestEndBlock} endBlock
 * @property {...GraphQLClient.Transaction} exchange
 * @property {...GraphQLClient.ForgeState} forgeState
 * @property {...GraphQLClient.ProtocolState} protocolState
 * @property {...GraphQLClient.Transaction} revoke
 * @property {...GraphQLClient.Transaction} stake
 * @property {...GraphQLClient.StakeState} stakeState
 * @property {...GraphQLClient.Transaction} sysUpgrade
 * @property {string} topic
 * @property {...GraphQLClient.Transaction} transfer
 * @property {...GraphQLClient.Transaction} updateAsset
 */

/**
 * Structure of GraphQLClient.ResponseUnsubscribe 
 *
 * Checkout the following snippet for the format of ResponseUnsubscribe:
 * ```json
{
  "code": "OK"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseUnsubscribe
 * @property {...GraphQLClient.StatusCode} code
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
 * Structure of GraphQLClient.StakeDataType
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeDataType
 * @property {string} type
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
 * Structure of GraphQLClient.StakeTx 
 *
 * Checkout the following snippet for the format of StakeTx:
 * ```json
{
  "data": {
    "type": "abc"
  },
  "message": "abc",
  "to": "abc",
  "value": "abc"
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.StakeTx
 * @property {...GraphQLClient.StakeDataType} data
 * @property {string} message
 * @property {string} to
 * @property {string} value
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
 * Structure of GraphQLClient.SysUpgradeTx 
 *
 * Checkout the following snippet for the format of SysUpgradeTx:
 * ```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "gracePeriod": "abc",
  "task": {
    "actions": [
      "BACKUP"
    ],
    "dataHash": "abc",
    "type": "CONFIG_APP"
  }
}
 * ```
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SysUpgradeTx
 * @property {...GraphQLClient.Any} data
 * @property {string} gracePeriod
 * @property {...GraphQLClient.UpgradeTask} task
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
 * Structure of GraphQLClient.Transaction
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.Transaction
 * @property {string} chainId
 * @property {string} from
 * @property {...Itx} itx
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
 * @property {number} maxAssetSize
 * @property {number} maxListSize
 * @property {number} maxMultisig
 * @property {string} minimumStake
 */

/**
 * Structure of GraphQLClient.TransactionInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.TransactionInfo
 * @property {...GraphQLClient.ExtraAccountMigrate} accountMigrate
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ExtraCreateAsset} createAsset
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
 * Structure of GraphQLClient.GetProtocolStateParams 
 *
 * Checkout the following snippet for the format of GetProtocolStateParams:
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
 * @typedef {object} GraphQLClient.GetProtocolStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetStakeStateParams 
 *
 * Checkout the following snippet for the format of GetStakeStateParams:
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
 * @typedef {object} GraphQLClient.GetStakeStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
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
 * @typedef {Object} GraphQLClient.DeployProtocolTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.DeployProtocolTx} input.tx.itx - the actual transaction object
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
 * Send DeployProtocolTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDeployProtocolTx
 * @param {GraphQLClient.DeployProtocolTxInput} params
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
 * @typedef {Object} GraphQLClient.DeclareFileTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.DeclareFileTx} input.tx.itx - the actual transaction object
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
 * Send DeclareFileTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDeclareFileTx
 * @param {GraphQLClient.DeclareFileTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */

/**
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.StakeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GraphQLClient.StakeTx} input.tx.itx - the actual transaction object
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
 * Send StakeTx transaction and get the hash, use {@link GraphQLClient#getTx} to get transaction detail
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendStakeTx
 * @param {GraphQLClient.StakeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
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
 * Encode a TransferTx transaction for later use
 *
 * @name GraphQLClient#encodeTransferTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.TransferTxInput} params
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
 * Encode a DeployProtocolTx transaction for later use
 *
 * @name GraphQLClient#encodeDeployProtocolTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DeployProtocolTxInput} params
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
 * Encode a UpdateAssetTx transaction for later use
 *
 * @name GraphQLClient#encodeUpdateAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpdateAssetTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
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
 * Encode a ConsumeAssetTx transaction for later use
 *
 * @name GraphQLClient#encodeConsumeAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ConsumeAssetTxInput} params
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
 * Encode a ExchangeTx transaction for later use
 *
 * @name GraphQLClient#encodeExchangeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ExchangeTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */

/**
 * Encode a DeclareFileTx transaction for later use
 *
 * @name GraphQLClient#encodeDeclareFileTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DeclareFileTxInput} params
 * @returns {Promise<GraphQLClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */

/**
 * Encode a StakeTx transaction for later use
 *
 * @name GraphQLClient#encodeStakeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.StakeTxInput} params
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
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetConfig>} Checkout {@link GraphQLClient.ResponseGetConfig} for resolved data format
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
 * getProtocolState
 *
 * @name GraphQLClient#getProtocolState
 * @param {GraphQLClient.GetProtocolStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetProtocolState>} Checkout {@link GraphQLClient.ResponseGetProtocolState} for resolved data format
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
 * getStakeState
 *
 * @name GraphQLClient#getStakeState
 * @param {GraphQLClient.GetStakeStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetStakeState>} Checkout {@link GraphQLClient.ResponseGetStakeState} for resolved data format
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
