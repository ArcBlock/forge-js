/**
 * List all query method names
 *
 * @method
 * @name GraphQLClient#getQueries
 * @returns {Array<string>} method name list
 */

/**
 * List all mutation method names
 *
 * @method
 * @name GraphQLClient#getMutations
 * @returns {Array<string>} method name list
 */

/**
 * List all subscription method names
 *
 * @method
 * @name GraphQLClient#getSubscription
 * @returns {Array<string>} method name list
 */

/**
 * Send raw graphql query to forge graphql endpoint
 *
 * @method
 * @name GraphQLClient#doRawQuery
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 */

/**
 * Send raw graphql subscription to forge graphql endpoint
 *
 * @method
 * @name GraphQLClient#doRawSubscription
 * @param {string} query - graphql query string
 * @returns {Promise} usually axios response data
 */

/**
 * Common props for sending or encoding a transaction
 *
 * @typedef {Object} GraphQLClient.TxInputExtra
 * @prop {string} chainId - if not specified, will fetch from graphql endpoint
 * @prop {number} nonce - if not specified, will use Date.now as nonce
 * @prop {string} from - sender address, if not specified, will use wallet.toAddress
 * @prop {string} pk - sender publicKey, if not specified, will use wallet.publicKey
 */

/**
 * Structure of GraphQLClient.WalletObject
 *
 * @typedef {Object} GraphQLClient.WalletObject
 * @property {string} publicKey
 * @property {string} secretKey
 * @property {GraphQLClient~WalletTypeObject} type
 */

/**
 * Structure of GraphQLClient.WalletTypeObject
 *
 * @typedef {Object} GraphQLClient.WalletTypeObject
 * @property {number} pk
 * @property {number} role
 * @property {number} hash
 * @property {number} address - defaults to base58btc
 */

/**
 * Structure of GraphQLClient.EncodeTxResult
 *
 * @typedef {Object} GraphQLClient.EncodeTxResult
 * @property {object} object - the transaction object, human readable
 * @property {buffer} buffer - the transaction binary presentation, can be used to signing, encoding to other formats
 */

/**
 * Structure of GraphQLClient.AddressFilter
 *
 * @typedef {Object} GraphQLClient.AddressFilter
 * @property {...GraphQLClient.Direction} direction
 * @property {string} receiver
 * @property {string} sender
 */

/**
 * Structure of GraphQLClient.PageInput
 *
 * @typedef {Object} GraphQLClient.PageInput
 * @property {string} cursor
 * @property {Array<...GraphQLClient.PageOrder>} order
 * @property {number} size
 */

/**
 * Structure of GraphQLClient.PageOrder
 *
 * @typedef {Object} GraphQLClient.PageOrder
 * @property {string} field
 * @property {string} type
 */

/**
 * Structure of GraphQLClient.RangeFilter
 *
 * @typedef {Object} GraphQLClient.RangeFilter
 * @property {string} from
 * @property {string} to
 */

/**
 * Structure of GraphQLClient.TimeFilter
 *
 * @typedef {Object} GraphQLClient.TimeFilter
 * @property {string} endDateTime
 * @property {string} startDateTime
 */

/**
 * Structure of GraphQLClient.TypeFilter
 *
 * @typedef {Object} GraphQLClient.TypeFilter
 * @property {Array<...GraphQLClient.string>} types
 */

/**
 * Structure of GraphQLClient.ValidityFilter
 *
 * @typedef {Object} GraphQLClient.ValidityFilter
 * @property {...GraphQLClient.Validity} validity
 */

/**
 * Structure of GraphQLClient.AbciServerStatus
 *
 * @typedef {Object} GraphQLClient.AbciServerStatus
 * @property {string} abciConsensus
 * @property {string} abciInfo
 */

/**
 * Structure of GraphQLClient.AccountMigrateTx
 *
 * @typedef {Object} GraphQLClient.AccountMigrateTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} pk
 * @property {...GraphQLClient.WalletType} type
 */

/**
 * Structure of GraphQLClient.AccountState
 *
 * @typedef {Object} GraphQLClient.AccountState
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
 * @typedef {Object} GraphQLClient.Any
 * @property {string} typeUrl
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.AssetState
 *
 * @typedef {Object} GraphQLClient.AssetState
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
 * @typedef {Object} GraphQLClient.BlockId
 * @property {string} hash
 * @property {...GraphQLClient.PartSetHeader} partsHeader
 */

/**
 * Structure of GraphQLClient.BlockInfo
 *
 * @typedef {Object} GraphQLClient.BlockInfo
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
 * @typedef {Object} GraphQLClient.BlockInfoSimple
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
 * @typedef {Object} GraphQLClient.ChainInfo
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
 * @typedef {Object} GraphQLClient.CircularQueue
 * @property {boolean} circular
 * @property {boolean} fifo
 * @property {Array<...GraphQLClient.string>} items
 * @property {number} maxItems
 * @property {string} typeUrl
 */

/**
 * Structure of GraphQLClient.ConsensusParams
 *
 * @typedef {Object} GraphQLClient.ConsensusParams
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
 * @typedef {Object} GraphQLClient.ConsensusStatus
 * @property {string} blockHeight
 * @property {boolean} health
 * @property {boolean} synced
 */

/**
 * Structure of GraphQLClient.ConsensusUpgradeTx
 *
 * @typedef {Object} GraphQLClient.ConsensusUpgradeTx
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
 * @typedef {Object} GraphQLClient.ConsumeAssetTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} issuer
 */

/**
 * Structure of GraphQLClient.CoreProtocol
 *
 * @typedef {Object} GraphQLClient.CoreProtocol
 * @property {string} address
 * @property {string} name
 */

/**
 * Structure of GraphQLClient.CreateAssetTx
 *
 * @typedef {Object} GraphQLClient.CreateAssetTx
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
 * @typedef {Object} GraphQLClient.DeclareFileTx
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.DeclareTx
 *
 * @typedef {Object} GraphQLClient.DeclareTx
 * @property {...GraphQLClient.Any} data
 * @property {string} issuer
 * @property {string} moniker
 */

/**
 * Structure of GraphQLClient.DiskSpaceStatus
 *
 * @typedef {Object} GraphQLClient.DiskSpaceStatus
 * @property {string} forgeUsage
 * @property {string} total
 */

/**
 * Structure of GraphQLClient.Evidence
 *
 * @typedef {Object} GraphQLClient.Evidence
 * @property {string} height
 * @property {string} time
 * @property {string} totalVotingPower
 * @property {string} type
 * @property {...GraphQLClient.Validator} validator
 */

/**
 * Structure of GraphQLClient.ExchangeInfo
 *
 * @typedef {Object} GraphQLClient.ExchangeInfo
 * @property {Array<...GraphQLClient.string>} assets
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.ExchangeTx
 *
 * @typedef {Object} GraphQLClient.ExchangeTx
 * @property {...GraphQLClient.Any} data
 * @property {string} expiredAt
 * @property {...GraphQLClient.ExchangeInfo} receiver
 * @property {...GraphQLClient.ExchangeInfo} sender
 * @property {string} to
 */

/**
 * Structure of GraphQLClient.ExtraAccountMigrate
 *
 * @typedef {Object} GraphQLClient.ExtraAccountMigrate
 * @property {string} address
 */

/**
 * Structure of GraphQLClient.ExtraCreateAsset
 *
 * @typedef {Object} GraphQLClient.ExtraCreateAsset
 * @property {string} asset
 */

/**
 * Structure of GraphQLClient.ForgeAppsVersionEntry
 *
 * @typedef {Object} GraphQLClient.ForgeAppsVersionEntry
 * @property {string} key
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.ForgeState
 *
 * @typedef {Object} GraphQLClient.ForgeState
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
 * @typedef {Object} GraphQLClient.ForgeStats
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
 * @typedef {Object} GraphQLClient.ForgeStatus
 * @property {...GraphQLClient.AbciServerStatus} abciServer
 * @property {string} abiServer
 * @property {string} forgeWeb
 * @property {boolean} health
 */

/**
 * Structure of GraphQLClient.ForgeToken
 *
 * @typedef {Object} GraphQLClient.ForgeToken
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
 * @typedef {Object} GraphQLClient.GeoInfo
 * @property {string} city
 * @property {string} country
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * Structure of GraphQLClient.Header
 *
 * @typedef {Object} GraphQLClient.Header
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
 * @typedef {Object} GraphQLClient.HealthStatus
 * @property {...GraphQLClient.ConsensusStatus} consensus
 * @property {...GraphQLClient.ForgeStatus} forge
 * @property {...GraphQLClient.NetworkStatus} network
 * @property {...GraphQLClient.StorageStatus} storage
 */

/**
 * Structure of GraphQLClient.IndexedAccountState
 *
 * @typedef {Object} GraphQLClient.IndexedAccountState
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
 * @typedef {Object} GraphQLClient.IndexedAssetState
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
 * @typedef {Object} GraphQLClient.IndexedBlock
 * @property {string} height
 * @property {string} numInvalidTxs
 * @property {string} numTxs
 * @property {string} proposer
 * @property {string} time
 */

/**
 * Structure of GraphQLClient.IndexedStakeState
 *
 * @typedef {Object} GraphQLClient.IndexedStakeState
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
 * @typedef {Object} GraphQLClient.IndexedTransaction
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
 * @typedef {Object} GraphQLClient.KvPair
 * @property {string} key
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.LastCommitInfo
 *
 * @typedef {Object} GraphQLClient.LastCommitInfo
 * @property {number} round
 * @property {Array<...GraphQLClient.VoteInfo>} votes
 */

/**
 * Structure of GraphQLClient.Multisig
 *
 * @typedef {Object} GraphQLClient.Multisig
 * @property {...GraphQLClient.Any} data
 * @property {string} pk
 * @property {string} signature
 * @property {string} signer
 */

/**
 * Structure of GraphQLClient.NetInfo
 *
 * @typedef {Object} GraphQLClient.NetInfo
 * @property {Array<...GraphQLClient.string>} listeners
 * @property {boolean} listening
 * @property {number} nPeers
 * @property {Array<...GraphQLClient.PeerInfo>} peers
 */

/**
 * Structure of GraphQLClient.NetworkStatus
 *
 * @typedef {Object} GraphQLClient.NetworkStatus
 * @property {boolean} health
 * @property {number} numPeers
 */

/**
 * Structure of GraphQLClient.NodeInfo
 *
 * @typedef {Object} GraphQLClient.NodeInfo
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
 * @typedef {Object} GraphQLClient.PageInfo
 * @property {string} cursor
 * @property {boolean} next
 * @property {number} total
 */

/**
 * Structure of GraphQLClient.PartSetHeader
 *
 * @typedef {Object} GraphQLClient.PartSetHeader
 * @property {string} hash
 * @property {number} total
 */

/**
 * Structure of GraphQLClient.PeerInfo
 *
 * @typedef {Object} GraphQLClient.PeerInfo
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
 * @typedef {Object} GraphQLClient.PokeConfig
 * @property {string} address
 * @property {string} amount
 * @property {string} balance
 * @property {string} dailyLimit
 */

/**
 * Structure of GraphQLClient.PokeInfo
 *
 * @typedef {Object} GraphQLClient.PokeInfo
 * @property {string} amount
 * @property {string} dailyLimit
 * @property {string} leftover
 */

/**
 * Structure of GraphQLClient.PokeTx
 *
 * @typedef {Object} GraphQLClient.PokeTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} date
 */

/**
 * Structure of GraphQLClient.ProtocolState
 *
 * @typedef {Object} GraphQLClient.ProtocolState
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
 * @typedef {Object} GraphQLClient.PubKey
 * @property {string} data
 * @property {string} type
 */

/**
 * Structure of GraphQLClient.RequestBeginBlock
 *
 * @typedef {Object} GraphQLClient.RequestBeginBlock
 * @property {Array<...GraphQLClient.Evidence>} byzantineValidators
 * @property {string} hash
 * @property {...GraphQLClient.Header} header
 * @property {...GraphQLClient.LastCommitInfo} lastCommitInfo
 */

/**
 * Structure of GraphQLClient.RequestEndBlock
 *
 * @typedef {Object} GraphQLClient.RequestEndBlock
 * @property {string} height
 */

/**
 * Structure of GraphQLClient.ResponseGetAccountState
 *
 * @typedef {Object} GraphQLClient.ResponseGetAccountState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.AccountState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetAssetState
 *
 * @typedef {Object} GraphQLClient.ResponseGetAssetState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.AssetState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetBlock
 *
 * @typedef {Object} GraphQLClient.ResponseGetBlock
 * @property {...GraphQLClient.BlockInfo} block
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseGetBlocks
 *
 * @typedef {Object} GraphQLClient.ResponseGetBlocks
 * @property {Array<...GraphQLClient.BlockInfoSimple>} blocks
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseGetChainInfo
 *
 * @typedef {Object} GraphQLClient.ResponseGetChainInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ChainInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetConfig
 *
 * @typedef {Object} GraphQLClient.ResponseGetConfig
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} config
 */

/**
 * Structure of GraphQLClient.ResponseGetForgeState
 *
 * @typedef {Object} GraphQLClient.ResponseGetForgeState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ForgeState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetForgeStats
 *
 * @typedef {Object} GraphQLClient.ResponseGetForgeStats
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ForgeStats} forgeStats
 */

/**
 * Structure of GraphQLClient.ResponseGetHealthStatus
 *
 * @typedef {Object} GraphQLClient.ResponseGetHealthStatus
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.HealthStatus} healthStatus
 */

/**
 * Structure of GraphQLClient.ResponseGetNetInfo
 *
 * @typedef {Object} GraphQLClient.ResponseGetNetInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.NetInfo} netInfo
 */

/**
 * Structure of GraphQLClient.ResponseGetNodeInfo
 *
 * @typedef {Object} GraphQLClient.ResponseGetNodeInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.NodeInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetProtocolState
 *
 * @typedef {Object} GraphQLClient.ResponseGetProtocolState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ProtocolState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetSimulatorStatus
 *
 * @typedef {Object} GraphQLClient.ResponseGetSimulatorStatus
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} result
 */

/**
 * Structure of GraphQLClient.ResponseGetStakeState
 *
 * @typedef {Object} GraphQLClient.ResponseGetStakeState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.StakeState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetTx
 *
 * @typedef {Object} GraphQLClient.ResponseGetTx
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.TransactionInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetUnconfirmedTxs
 *
 * @typedef {Object} GraphQLClient.ResponseGetUnconfirmedTxs
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {...GraphQLClient.UnconfirmedTxs} unconfirmedTxs
 */

/**
 * Structure of GraphQLClient.ResponseGetValidatorsInfo
 *
 * @typedef {Object} GraphQLClient.ResponseGetValidatorsInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ValidatorsInfo} validatorsInfo
 */

/**
 * Structure of GraphQLClient.ResponseListAssetTransactions
 *
 * @typedef {Object} GraphQLClient.ResponseListAssetTransactions
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.IndexedTransaction>} transactions
 */

/**
 * Structure of GraphQLClient.ResponseListAssets
 *
 * @typedef {Object} GraphQLClient.ResponseListAssets
 * @property {...GraphQLClient.IndexedAccountState} account
 * @property {Array<...GraphQLClient.IndexedAssetState>} assets
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListBlocks
 *
 * @typedef {Object} GraphQLClient.ResponseListBlocks
 * @property {Array<...GraphQLClient.IndexedBlock>} blocks
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListStakes
 *
 * @typedef {Object} GraphQLClient.ResponseListStakes
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.IndexedStakeState>} stakes
 */

/**
 * Structure of GraphQLClient.ResponseListTopAccounts
 *
 * @typedef {Object} GraphQLClient.ResponseListTopAccounts
 * @property {Array<...GraphQLClient.IndexedAccountState>} accounts
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListTransactions
 *
 * @typedef {Object} GraphQLClient.ResponseListTransactions
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 * @property {Array<...GraphQLClient.IndexedTransaction>} transactions
 */

/**
 * Structure of GraphQLClient.ResponseSendTx
 *
 * @typedef {Object} GraphQLClient.ResponseSendTx
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.ResponseStartSimulator
 *
 * @typedef {Object} GraphQLClient.ResponseStartSimulator
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseStopSimulator
 *
 * @typedef {Object} GraphQLClient.ResponseStopSimulator
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseSubscribe
 *
 * @typedef {Object} GraphQLClient.ResponseSubscribe
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
 * @typedef {Object} GraphQLClient.ResponseUnsubscribe
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.StakeConfig
 *
 * @typedef {Object} GraphQLClient.StakeConfig
 * @property {number} timeoutGeneral
 * @property {number} timeoutStakeForNode
 */

/**
 * Structure of GraphQLClient.StakeContext
 *
 * @typedef {Object} GraphQLClient.StakeContext
 * @property {...GraphQLClient.CircularQueue} recentReceivedStakes
 * @property {...GraphQLClient.CircularQueue} recentStakes
 * @property {string} totalReceivedStakes
 * @property {string} totalStakes
 * @property {string} totalUnstakes
 */

/**
 * Structure of GraphQLClient.StakeDataType
 *
 * @typedef {Object} GraphQLClient.StakeDataType
 * @property {string} type
 */

/**
 * Structure of GraphQLClient.StakeState
 *
 * @typedef {Object} GraphQLClient.StakeState
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
 * @typedef {Object} GraphQLClient.StakeSummary
 * @property {...GraphQLClient.StateContext} context
 * @property {string} totalStakes
 * @property {string} totalUnstakes
 */

/**
 * Structure of GraphQLClient.StakeSummaryEntry
 *
 * @typedef {Object} GraphQLClient.StakeSummaryEntry
 * @property {number} key
 * @property {...GraphQLClient.StakeSummary} value
 */

/**
 * Structure of GraphQLClient.StakeTx
 *
 * @typedef {Object} GraphQLClient.StakeTx
 * @property {...GraphQLClient.StakeDataType} data
 * @property {string} message
 * @property {string} to
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.StateContext
 *
 * @typedef {Object} GraphQLClient.StateContext
 * @property {string} genesisTime
 * @property {...GraphQLClient.TransactionInfo} genesisTx
 * @property {string} renaissanceTime
 * @property {...GraphQLClient.TransactionInfo} renaissanceTx
 */

/**
 * Structure of GraphQLClient.StorageStatus
 *
 * @typedef {Object} GraphQLClient.StorageStatus
 * @property {...GraphQLClient.DiskSpaceStatus} diskSpace
 * @property {boolean} health
 * @property {string} indexerServer
 * @property {string} stateDb
 */

/**
 * Structure of GraphQLClient.SysUpgradeTx
 *
 * @typedef {Object} GraphQLClient.SysUpgradeTx
 * @property {...GraphQLClient.Any} data
 * @property {string} gracePeriod
 * @property {...GraphQLClient.UpgradeTask} task
 */

/**
 * Structure of GraphQLClient.TasksEntry
 *
 * @typedef {Object} GraphQLClient.TasksEntry
 * @property {string} key
 * @property {...GraphQLClient.UpgradeTasks} value
 */

/**
 * Structure of GraphQLClient.Transaction
 *
 * @typedef {Object} GraphQLClient.Transaction
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
 * @typedef {Object} GraphQLClient.TransactionConfig
 * @property {number} maxAssetSize
 * @property {number} maxListSize
 * @property {number} maxMultisig
 * @property {string} minimumStake
 */

/**
 * Structure of GraphQLClient.TransactionInfo
 *
 * @typedef {Object} GraphQLClient.TransactionInfo
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
 * @typedef {Object} GraphQLClient.TransferTx
 * @property {Array<...GraphQLClient.string>} assets
 * @property {...GraphQLClient.Any} data
 * @property {string} to
 * @property {string} value
 */

/**
 * Structure of GraphQLClient.UnconfirmedTxs
 *
 * @typedef {Object} GraphQLClient.UnconfirmedTxs
 * @property {number} nTxs
 * @property {Array<...GraphQLClient.Transaction>} txs
 */

/**
 * Structure of GraphQLClient.UpdateAssetTx
 *
 * @typedef {Object} GraphQLClient.UpdateAssetTx
 * @property {string} address
 * @property {...GraphQLClient.Any} data
 * @property {string} moniker
 */

/**
 * Structure of GraphQLClient.UpgradeInfo
 *
 * @typedef {Object} GraphQLClient.UpgradeInfo
 * @property {string} height
 * @property {string} version
 */

/**
 * Structure of GraphQLClient.UpgradeTask
 *
 * @typedef {Object} GraphQLClient.UpgradeTask
 * @property {Array<...GraphQLClient.UpgradeAction>} actions
 * @property {string} dataHash
 * @property {...GraphQLClient.UpgradeType} type
 */

/**
 * Structure of GraphQLClient.UpgradeTasks
 *
 * @typedef {Object} GraphQLClient.UpgradeTasks
 * @property {Array<...GraphQLClient.UpgradeTask>} item
 */

/**
 * Structure of GraphQLClient.Validator
 *
 * @typedef {Object} GraphQLClient.Validator
 * @property {string} address
 * @property {string} power
 */

/**
 * Structure of GraphQLClient.ValidatorInfo
 *
 * @typedef {Object} GraphQLClient.ValidatorInfo
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
 * @typedef {Object} GraphQLClient.ValidatorsInfo
 * @property {string} blockHeight
 * @property {Array<...GraphQLClient.ValidatorInfo>} validators
 */

/**
 * Structure of GraphQLClient.Version
 *
 * @typedef {Object} GraphQLClient.Version
 * @property {string} app
 * @property {string} block
 */

/**
 * Structure of GraphQLClient.VoteInfo
 *
 * @typedef {Object} GraphQLClient.VoteInfo
 * @property {boolean} signedLastBlock
 * @property {...GraphQLClient.Validator} validator
 */

/**
 * Structure of GraphQLClient.WalletType
 *
 * @typedef {Object} GraphQLClient.WalletType
 * @property {...GraphQLClient.EncodingType} address
 * @property {...GraphQLClient.HashType} hash
 * @property {...GraphQLClient.KeyType} pk
 * @property {...GraphQLClient.RoleType} role
 */

/**
 * Structure of GraphQLClient.GetAccountStateParams
 *
 * @typedef {Object} GraphQLClient.GetAccountStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetAssetStateParams
 *
 * @typedef {Object} GraphQLClient.GetAssetStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetBlockParams
 *
 * @typedef {Object} GraphQLClient.GetBlockParams
 * @property {string} height
 */

/**
 * Structure of GraphQLClient.GetBlocksParams
 *
 * @typedef {Object} GraphQLClient.GetBlocksParams
 * @property {boolean} emptyExcluded
 * @property {...GraphQLClient.RangeFilter} heightFilter
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.GetForgeStateParams
 *
 * @typedef {Object} GraphQLClient.GetForgeStateParams
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetForgeStatsByDayParams
 *
 * @typedef {Object} GraphQLClient.GetForgeStatsByDayParams
 * @property {string} endDate
 * @property {string} startDate
 */

/**
 * Structure of GraphQLClient.GetForgeStatsByHourParams
 *
 * @typedef {Object} GraphQLClient.GetForgeStatsByHourParams
 * @property {string} date
 */

/**
 * Structure of GraphQLClient.GetProtocolStateParams
 *
 * @typedef {Object} GraphQLClient.GetProtocolStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetStakeStateParams
 *
 * @typedef {Object} GraphQLClient.GetStakeStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetTxParams
 *
 * @typedef {Object} GraphQLClient.GetTxParams
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.GetUnconfirmedTxsParams
 *
 * @typedef {Object} GraphQLClient.GetUnconfirmedTxsParams
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListAssetTransactionsParams
 *
 * @typedef {Object} GraphQLClient.ListAssetTransactionsParams
 * @property {string} address
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListAssetsParams
 *
 * @typedef {Object} GraphQLClient.ListAssetsParams
 * @property {string} ownerAddress
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListBlocksParams
 *
 * @typedef {Object} GraphQLClient.ListBlocksParams
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
 * @typedef {Object} GraphQLClient.ListStakesParams
 * @property {...GraphQLClient.AddressFilter} addressFilter
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListTopAccountsParams
 *
 * @typedef {Object} GraphQLClient.ListTopAccountsParams
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListTransactionsParams
 *
 * @typedef {Object} GraphQLClient.ListTransactionsParams
 * @property {...GraphQLClient.AddressFilter} addressFilter
 * @property {...GraphQLClient.PageInput} paging
 * @property {...GraphQLClient.TimeFilter} timeFilter
 * @property {...GraphQLClient.TypeFilter} typeFilter
 * @property {...GraphQLClient.ValidityFilter} validityFilter
 */

/**
 * Structure of GraphQLClient.SendTxParams
 *
 * @typedef {Object} GraphQLClient.SendTxParams
 * @property {boolean} commit
 * @property {string} token
 * @property {string} tx
 * @property {string} wallet
 */

/**
 * Structure of GraphQLClient.UnsubscribeParams
 *
 * @typedef {Object} GraphQLClient.UnsubscribeParams
 * @property {string} topic
 */

/**
 * Structure of GraphQLClient.SubscribeParams
 *
 * @typedef {Object} GraphQLClient.SubscribeParams
 * @property {string} filter
 * @property {string} topic
 */

/**
 * Structure of param.data for transaction sending/encoding method sendCreateAssetTx
 *
 * @typedef {Object} GraphQLClient.CreateAssetTxInputData
 * @prop {...GraphQLClient.CreateAssetTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendCreateAssetTx
 *
 * @typedef {Object} GraphQLClient.CreateAssetTxInput
 * @prop {...GraphQLClient.CreateAssetTxSendInputData} input.data - should be the CreateAssetTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendCreateAssetTx
 * @param {GraphQLClient.CreateAssetTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendTransferTx
 *
 * @typedef {Object} GraphQLClient.TransferTxInputData
 * @prop {...GraphQLClient.TransferTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendTransferTx
 *
 * @typedef {Object} GraphQLClient.TransferTxInput
 * @prop {...GraphQLClient.TransferTxSendInputData} input.data - should be the TransferTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendTransferTx
 * @param {GraphQLClient.TransferTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendPokeTx
 *
 * @typedef {Object} GraphQLClient.PokeTxInputData
 * @prop {...GraphQLClient.PokeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendPokeTx
 *
 * @typedef {Object} GraphQLClient.PokeTxInput
 * @prop {...GraphQLClient.PokeTxSendInputData} input.data - should be the PokeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendPokeTx
 * @param {GraphQLClient.PokeTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendDeployProtocolTx
 *
 * @typedef {Object} GraphQLClient.DeployProtocolTxInputData
 * @prop {...GraphQLClient.DeployProtocolTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendDeployProtocolTx
 *
 * @typedef {Object} GraphQLClient.DeployProtocolTxInput
 * @prop {...GraphQLClient.DeployProtocolTxSendInputData} input.data - should be the DeployProtocolTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendDeployProtocolTx
 * @param {GraphQLClient.DeployProtocolTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendUpgradeNodeTx
 *
 * @typedef {Object} GraphQLClient.UpgradeNodeTxInputData
 * @prop {...GraphQLClient.UpgradeNodeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendUpgradeNodeTx
 *
 * @typedef {Object} GraphQLClient.UpgradeNodeTxInput
 * @prop {...GraphQLClient.UpgradeNodeTxSendInputData} input.data - should be the UpgradeNodeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendUpgradeNodeTx
 * @param {GraphQLClient.UpgradeNodeTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendUpdateAssetTx
 *
 * @typedef {Object} GraphQLClient.UpdateAssetTxInputData
 * @prop {...GraphQLClient.UpdateAssetTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendUpdateAssetTx
 *
 * @typedef {Object} GraphQLClient.UpdateAssetTxInput
 * @prop {...GraphQLClient.UpdateAssetTxSendInputData} input.data - should be the UpdateAssetTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendUpdateAssetTx
 * @param {GraphQLClient.UpdateAssetTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendAccountMigrateTx
 *
 * @typedef {Object} GraphQLClient.AccountMigrateTxInputData
 * @prop {...GraphQLClient.AccountMigrateTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendAccountMigrateTx
 *
 * @typedef {Object} GraphQLClient.AccountMigrateTxInput
 * @prop {...GraphQLClient.AccountMigrateTxSendInputData} input.data - should be the AccountMigrateTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendAccountMigrateTx
 * @param {GraphQLClient.AccountMigrateTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendConsumeAssetTx
 *
 * @typedef {Object} GraphQLClient.ConsumeAssetTxInputData
 * @prop {...GraphQLClient.ConsumeAssetTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendConsumeAssetTx
 *
 * @typedef {Object} GraphQLClient.ConsumeAssetTxInput
 * @prop {...GraphQLClient.ConsumeAssetTxSendInputData} input.data - should be the ConsumeAssetTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendConsumeAssetTx
 * @param {GraphQLClient.ConsumeAssetTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendDeclareTx
 *
 * @typedef {Object} GraphQLClient.DeclareTxInputData
 * @prop {...GraphQLClient.DeclareTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendDeclareTx
 *
 * @typedef {Object} GraphQLClient.DeclareTxInput
 * @prop {...GraphQLClient.DeclareTxSendInputData} input.data - should be the DeclareTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendDeclareTx
 * @param {GraphQLClient.DeclareTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendExchangeTx
 *
 * @typedef {Object} GraphQLClient.ExchangeTxInputData
 * @prop {...GraphQLClient.ExchangeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendExchangeTx
 *
 * @typedef {Object} GraphQLClient.ExchangeTxInput
 * @prop {...GraphQLClient.ExchangeTxSendInputData} input.data - should be the ExchangeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendExchangeTx
 * @param {GraphQLClient.ExchangeTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendDeclareFileTx
 *
 * @typedef {Object} GraphQLClient.DeclareFileTxInputData
 * @prop {...GraphQLClient.DeclareFileTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendDeclareFileTx
 *
 * @typedef {Object} GraphQLClient.DeclareFileTxInput
 * @prop {...GraphQLClient.DeclareFileTxSendInputData} input.data - should be the DeclareFileTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendDeclareFileTx
 * @param {GraphQLClient.DeclareFileTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendStakeTx
 *
 * @typedef {Object} GraphQLClient.StakeTxInputData
 * @prop {...GraphQLClient.StakeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendStakeTx
 *
 * @typedef {Object} GraphQLClient.StakeTxInput
 * @prop {...GraphQLClient.StakeTxSendInputData} input.data - should be the StakeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @method
 * @name GraphQLClient#sendStakeTx
 * @param {GraphQLClient.StakeTxInput}
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeCreateAssetTx
 * @param {GraphQLClient.CreateAssetTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeTransferTx
 * @param {GraphQLClient.TransferTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodePokeTx
 * @param {GraphQLClient.PokeTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeDeployProtocolTx
 * @param {GraphQLClient.DeployProtocolTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeUpgradeNodeTx
 * @param {GraphQLClient.UpgradeNodeTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeUpdateAssetTx
 * @param {GraphQLClient.UpdateAssetTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeAccountMigrateTx
 * @param {GraphQLClient.AccountMigrateTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeConsumeAssetTx
 * @param {GraphQLClient.ConsumeAssetTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeDeclareTx
 * @param {GraphQLClient.DeclareTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeExchangeTx
 * @param {GraphQLClient.ExchangeTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeDeclareFileTx
 * @param {GraphQLClient.DeclareFileTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @method
 * @name GraphQLClient#encodeStakeTx
 * @param {GraphQLClient.StakeTxInput}
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getAccountState(address: "abc", height: "abc", keys: ["abc"]) {
 *     code
 *     state {
 *       address
 *       balance
 *       issuer
 *       migratedFrom
 *       migratedTo
 *       moniker
 *       nonce
 *       numAssets
 *       numTxs
 *       pk
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *       poke {
 *         amount
 *         dailyLimit
 *         leftover
 *       }
 *       stake {
 *         totalReceivedStakes
 *         totalStakes
 *         totalUnstakes
 *         recentReceivedStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *         recentStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *       }
 *       type {
 *         address
 *         hash
 *         pk
 *         role
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getAccountState
 * @param {...GraphQLClient.GetAccountStateParams}
 * @returns {Promise<GraphQLClient.ResponseGetAccountState>} Checkout {@link GraphQLClient.ResponseGetAccountState} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getAssetState(address: "abc", height: "abc", keys: ["abc"]) {
 *     code
 *     state {
 *       address
 *       consumedTime
 *       issuer
 *       moniker
 *       owner
 *       readonly
 *       transferrable
 *       ttl
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *       stake {
 *         totalReceivedStakes
 *         totalStakes
 *         totalUnstakes
 *         recentReceivedStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *         recentStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getAssetState
 * @param {...GraphQLClient.GetAssetStateParams}
 * @returns {Promise<GraphQLClient.ResponseGetAssetState>} Checkout {@link GraphQLClient.ResponseGetAssetState} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getBlock(height: "abc") {
 *     code
 *     block {
 *       appHash
 *       consensusHash
 *       dataHash
 *       evidenceHash
 *       height
 *       invalidTxsHashes
 *       lastCommitHash
 *       lastResultsHash
 *       nextValidatorsHash
 *       numTxs
 *       proposer
 *       time
 *       totalTxs
 *       txsHashes
 *       validatorsHash
 *       invalidTxs {
 *         code
 *         hash
 *         height
 *         index
 *         time
 *         accountMigrate {
 *           address
 *         }
 *         createAsset {
 *           asset
 *         }
 *         tags {
 *           key
 *           value
 *         }
 *         tx {
 *           chainId
 *           from
 *           nonce
 *           pk
 *           signature
 *           signatures {
 *             pk
 *             signature
 *             signer
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           itx {
 *             __typename
 *             ... on UpdateAssetTx {
 *               address
 *               moniker
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on TransferTx {
 *               assets
 *               to
 *               value
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on SysUpgradeTx {
 *               gracePeriod
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               task {
 *                 actions
 *                 dataHash
 *                 type
 *               }
 *             }
 *             ... on StakeTx {
 *               message
 *               to
 *               value
 *               data {
 *                 type
 *               }
 *             }
 *             ... on ExchangeTx {
 *               expiredAt
 *               to
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               receiver {
 *                 assets
 *                 value
 *               }
 *               sender {
 *                 assets
 *                 value
 *               }
 *             }
 *             ... on DeclareFileTx {
 *               hash
 *             }
 *             ... on DeclareTx {
 *               issuer
 *               moniker
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on CreateAssetTx {
 *               address
 *               moniker
 *               parent
 *               readonly
 *               transferrable
 *               ttl
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on ConsumeAssetTx {
 *               address
 *               issuer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on ConsensusUpgradeTx {
 *               maxBytes
 *               maxCandidates
 *               maxGas
 *               maxValidators
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               validators {
 *                 address
 *                 power
 *               }
 *             }
 *             ... on PokeTx {
 *               address
 *               date
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on AccountMigrateTx {
 *               address
 *               pk
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               type {
 *                 address
 *                 hash
 *                 pk
 *                 role
 *               }
 *             }
 *           }
 *         }
 *       }
 *       lastBlockId {
 *         hash
 *         partsHeader {
 *           hash
 *           total
 *         }
 *       }
 *       txs {
 *         code
 *         hash
 *         height
 *         index
 *         time
 *         accountMigrate {
 *           address
 *         }
 *         createAsset {
 *           asset
 *         }
 *         tags {
 *           key
 *           value
 *         }
 *         tx {
 *           chainId
 *           from
 *           nonce
 *           pk
 *           signature
 *           signatures {
 *             pk
 *             signature
 *             signer
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           itx {
 *             __typename
 *             ... on UpdateAssetTx {
 *               address
 *               moniker
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on TransferTx {
 *               assets
 *               to
 *               value
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on SysUpgradeTx {
 *               gracePeriod
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               task {
 *                 actions
 *                 dataHash
 *                 type
 *               }
 *             }
 *             ... on StakeTx {
 *               message
 *               to
 *               value
 *               data {
 *                 type
 *               }
 *             }
 *             ... on ExchangeTx {
 *               expiredAt
 *               to
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               receiver {
 *                 assets
 *                 value
 *               }
 *               sender {
 *                 assets
 *                 value
 *               }
 *             }
 *             ... on DeclareFileTx {
 *               hash
 *             }
 *             ... on DeclareTx {
 *               issuer
 *               moniker
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on CreateAssetTx {
 *               address
 *               moniker
 *               parent
 *               readonly
 *               transferrable
 *               ttl
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on ConsumeAssetTx {
 *               address
 *               issuer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on ConsensusUpgradeTx {
 *               maxBytes
 *               maxCandidates
 *               maxGas
 *               maxValidators
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               validators {
 *                 address
 *                 power
 *               }
 *             }
 *             ... on PokeTx {
 *               address
 *               date
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             ... on AccountMigrateTx {
 *               address
 *               pk
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *               type {
 *                 address
 *                 hash
 *                 pk
 *                 role
 *               }
 *             }
 *           }
 *         }
 *       }
 *       version {
 *         app
 *         block
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getBlock
 * @param {...GraphQLClient.GetBlockParams}
 * @returns {Promise<GraphQLClient.ResponseGetBlock>} Checkout {@link GraphQLClient.ResponseGetBlock} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getBlocks(emptyExcluded: true) {
 *     code
 *     blocks {
 *       appHash
 *       consensusHash
 *       dataHash
 *       evidenceHash
 *       height
 *       invalidTxsHashes
 *       lastCommitHash
 *       lastResultsHash
 *       nextValidatorsHash
 *       numTxs
 *       proposer
 *       time
 *       totalTxs
 *       txsHashes
 *       validatorsHash
 *       lastBlockId {
 *         hash
 *         partsHeader {
 *           hash
 *           total
 *         }
 *       }
 *       version {
 *         app
 *         block
 *       }
 *     }
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getBlocks
 * @param {...GraphQLClient.GetBlocksParams}
 * @returns {Promise<GraphQLClient.ResponseGetBlocks>} Checkout {@link GraphQLClient.ResponseGetBlocks} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getChainInfo {
 *     code
 *     info {
 *       address
 *       appHash
 *       blockHash
 *       blockHeight
 *       blockTime
 *       consensusVersion
 *       id
 *       moniker
 *       network
 *       supportedTxs
 *       synced
 *       totalTxs
 *       version
 *       votingPower
 *       forgeAppsVersion {
 *         key
 *         value
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getChainInfo
 * @returns {Promise<GraphQLClient.ResponseGetChainInfo>} Checkout {@link GraphQLClient.ResponseGetChainInfo} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getConfig {
 *     code
 *     config
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getConfig
 * @returns {Promise<GraphQLClient.ResponseGetConfig>} Checkout {@link GraphQLClient.ResponseGetConfig} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getForgeState(height: "abc", keys: ["abc"]) {
 *     code
 *     state {
 *       address
 *       forgeAppHash
 *       version
 *       consensus {
 *         maxBytes
 *         maxCandidates
 *         maxGas
 *         maxValidators
 *         paramChanged
 *         pubKeyTypes
 *         validatorChanged
 *         validators {
 *           address
 *           power
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *       pokeConfig {
 *         address
 *         amount
 *         balance
 *         dailyLimit
 *       }
 *       protocols {
 *         address
 *         name
 *       }
 *       stakeConfig {
 *         timeoutGeneral
 *         timeoutStakeForNode
 *       }
 *       stakeSummary {
 *         key
 *         value {
 *           totalStakes
 *           totalUnstakes
 *           context {
 *             genesisTime
 *             renaissanceTime
 *             genesisTx {
 *               code
 *               hash
 *               height
 *               index
 *               time
 *               accountMigrate {
 *                 address
 *               }
 *               createAsset {
 *                 asset
 *               }
 *               tags {
 *                 key
 *                 value
 *               }
 *               tx {
 *                 chainId
 *                 from
 *                 nonce
 *                 pk
 *                 signature
 *               }
 *             }
 *             renaissanceTx {
 *               code
 *               hash
 *               height
 *               index
 *               time
 *               accountMigrate {
 *                 address
 *               }
 *               createAsset {
 *                 asset
 *               }
 *               tags {
 *                 key
 *                 value
 *               }
 *               tx {
 *                 chainId
 *                 from
 *                 nonce
 *                 pk
 *                 signature
 *               }
 *             }
 *           }
 *         }
 *       }
 *       tasks {
 *         key
 *         value {
 *           item {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *       }
 *       token {
 *         decimal
 *         description
 *         icon
 *         inflationRate
 *         initialSupply
 *         name
 *         symbol
 *         totalSupply
 *         unit
 *       }
 *       txConfig {
 *         maxAssetSize
 *         maxListSize
 *         maxMultisig
 *         minimumStake
 *       }
 *       upgradeInfo {
 *         height
 *         version
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getForgeState
 * @param {...GraphQLClient.GetForgeStateParams}
 * @returns {Promise<GraphQLClient.ResponseGetForgeState>} Checkout {@link GraphQLClient.ResponseGetForgeState} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getForgeStats {
 *     code
 *     forgeStats {
 *       avgBlockTime
 *       avgTps
 *       maxTps
 *       numAccountMigrateTxs
 *       numBlocks
 *       numConsensusUpgradeTxs
 *       numConsumeAssetTxs
 *       numCreateAssetTxs
 *       numDeclareFileTxs
 *       numDeclareTxs
 *       numExchangeTxs
 *       numPokeTxs
 *       numStakes
 *       numStakeTxs
 *       numSysUpgradeTxs
 *       numTransferTxs
 *       numTxs
 *       numUpdateAssetTxs
 *       numValidators
 *       tps
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getForgeStats
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getForgeStatsByDay(endDate: "abc", startDate: "abc") {
 *     code
 *     forgeStats {
 *       avgBlockTime
 *       avgTps
 *       maxTps
 *       numAccountMigrateTxs
 *       numBlocks
 *       numConsensusUpgradeTxs
 *       numConsumeAssetTxs
 *       numCreateAssetTxs
 *       numDeclareFileTxs
 *       numDeclareTxs
 *       numExchangeTxs
 *       numPokeTxs
 *       numStakes
 *       numStakeTxs
 *       numSysUpgradeTxs
 *       numTransferTxs
 *       numTxs
 *       numUpdateAssetTxs
 *       numValidators
 *       tps
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getForgeStatsByDay
 * @param {...GraphQLClient.GetForgeStatsByDayParams}
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getForgeStatsByHour(date: "abc") {
 *     code
 *     forgeStats {
 *       avgBlockTime
 *       avgTps
 *       maxTps
 *       numAccountMigrateTxs
 *       numBlocks
 *       numConsensusUpgradeTxs
 *       numConsumeAssetTxs
 *       numCreateAssetTxs
 *       numDeclareFileTxs
 *       numDeclareTxs
 *       numExchangeTxs
 *       numPokeTxs
 *       numStakes
 *       numStakeTxs
 *       numSysUpgradeTxs
 *       numTransferTxs
 *       numTxs
 *       numUpdateAssetTxs
 *       numValidators
 *       tps
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getForgeStatsByHour
 * @param {...GraphQLClient.GetForgeStatsByHourParams}
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getHealthStatus {
 *     code
 *     healthStatus {
 *       consensus {
 *         blockHeight
 *         health
 *         synced
 *       }
 *       forge {
 *         abiServer
 *         forgeWeb
 *         health
 *         abciServer {
 *           abciConsensus
 *           abciInfo
 *         }
 *       }
 *       network {
 *         health
 *         numPeers
 *       }
 *       storage {
 *         health
 *         indexerServer
 *         stateDb
 *         diskSpace {
 *           forgeUsage
 *           total
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getHealthStatus
 * @returns {Promise<GraphQLClient.ResponseGetHealthStatus>} Checkout {@link GraphQLClient.ResponseGetHealthStatus} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getNetInfo {
 *     code
 *     netInfo {
 *       listeners
 *       listening
 *       nPeers
 *       peers {
 *         consensusVersion
 *         id
 *         ip
 *         moniker
 *         network
 *         geoInfo {
 *           city
 *           country
 *           latitude
 *           longitude
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getNetInfo
 * @returns {Promise<GraphQLClient.ResponseGetNetInfo>} Checkout {@link GraphQLClient.ResponseGetNetInfo} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getNodeInfo {
 *     code
 *     info {
 *       address
 *       appHash
 *       blockHash
 *       blockHeight
 *       blockTime
 *       consensusVersion
 *       id
 *       ip
 *       moniker
 *       network
 *       p2pAddress
 *       supportedTxs
 *       synced
 *       totalTxs
 *       version
 *       votingPower
 *       forgeAppsVersion {
 *         key
 *         value
 *       }
 *       geoInfo {
 *         city
 *         country
 *         latitude
 *         longitude
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getNodeInfo
 * @returns {Promise<GraphQLClient.ResponseGetNodeInfo>} Checkout {@link GraphQLClient.ResponseGetNodeInfo} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getProtocolState(address: "abc", height: "abc", keys: ["abc"]) {
 *     code
 *     state {
 *       address
 *       description
 *       migratedFrom
 *       migratedTo
 *       name
 *       rootHash
 *       status
 *       txHash
 *       version
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getProtocolState
 * @param {...GraphQLClient.GetProtocolStateParams}
 * @returns {Promise<GraphQLClient.ResponseGetProtocolState>} Checkout {@link GraphQLClient.ResponseGetProtocolState} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getSimulatorStatus {
 *     code
 *     result
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getSimulatorStatus
 * @returns {Promise<GraphQLClient.ResponseGetSimulatorStatus>} Checkout {@link GraphQLClient.ResponseGetSimulatorStatus} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getStakeState(address: "abc", height: "abc", keys: ["abc"]) {
 *     code
 *     state {
 *       address
 *       balance
 *       from
 *       message
 *       to
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getStakeState
 * @param {...GraphQLClient.GetStakeStateParams}
 * @returns {Promise<GraphQLClient.ResponseGetStakeState>} Checkout {@link GraphQLClient.ResponseGetStakeState} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getTx(hash: "abc") {
 *     code
 *     info {
 *       code
 *       hash
 *       height
 *       index
 *       time
 *       accountMigrate {
 *         address
 *       }
 *       createAsset {
 *         asset
 *       }
 *       tags {
 *         key
 *         value
 *       }
 *       tx {
 *         chainId
 *         from
 *         nonce
 *         pk
 *         signature
 *         signatures {
 *           pk
 *           signature
 *           signer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         itx {
 *           __typename
 *           ... on UpdateAssetTx {
 *             address
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on TransferTx {
 *             assets
 *             to
 *             value
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on SysUpgradeTx {
 *             gracePeriod
 *             data {
 *               typeUrl
 *               value
 *             }
 *             task {
 *               actions
 *               dataHash
 *               type
 *             }
 *           }
 *           ... on StakeTx {
 *             message
 *             to
 *             value
 *             data {
 *               type
 *             }
 *           }
 *           ... on ExchangeTx {
 *             expiredAt
 *             to
 *             data {
 *               typeUrl
 *               value
 *             }
 *             receiver {
 *               assets
 *               value
 *             }
 *             sender {
 *               assets
 *               value
 *             }
 *           }
 *           ... on DeclareFileTx {
 *             hash
 *           }
 *           ... on DeclareTx {
 *             issuer
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on CreateAssetTx {
 *             address
 *             moniker
 *             parent
 *             readonly
 *             transferrable
 *             ttl
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsumeAssetTx {
 *             address
 *             issuer
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsensusUpgradeTx {
 *             maxBytes
 *             maxCandidates
 *             maxGas
 *             maxValidators
 *             data {
 *               typeUrl
 *               value
 *             }
 *             validators {
 *               address
 *               power
 *             }
 *           }
 *           ... on PokeTx {
 *             address
 *             date
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on AccountMigrateTx {
 *             address
 *             pk
 *             data {
 *               typeUrl
 *               value
 *             }
 *             type {
 *               address
 *               hash
 *               pk
 *               role
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getTx
 * @param {...GraphQLClient.GetTxParams}
 * @returns {Promise<GraphQLClient.ResponseGetTx>} Checkout {@link GraphQLClient.ResponseGetTx} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getUnconfirmedTxs {
 *     code
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *     unconfirmedTxs {
 *       nTxs
 *       txs {
 *         chainId
 *         from
 *         nonce
 *         pk
 *         signature
 *         signatures {
 *           pk
 *           signature
 *           signer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         itx {
 *           __typename
 *           ... on UpdateAssetTx {
 *             address
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on TransferTx {
 *             assets
 *             to
 *             value
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on SysUpgradeTx {
 *             gracePeriod
 *             data {
 *               typeUrl
 *               value
 *             }
 *             task {
 *               actions
 *               dataHash
 *               type
 *             }
 *           }
 *           ... on StakeTx {
 *             message
 *             to
 *             value
 *             data {
 *               type
 *             }
 *           }
 *           ... on ExchangeTx {
 *             expiredAt
 *             to
 *             data {
 *               typeUrl
 *               value
 *             }
 *             receiver {
 *               assets
 *               value
 *             }
 *             sender {
 *               assets
 *               value
 *             }
 *           }
 *           ... on DeclareFileTx {
 *             hash
 *           }
 *           ... on DeclareTx {
 *             issuer
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on CreateAssetTx {
 *             address
 *             moniker
 *             parent
 *             readonly
 *             transferrable
 *             ttl
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsumeAssetTx {
 *             address
 *             issuer
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsensusUpgradeTx {
 *             maxBytes
 *             maxCandidates
 *             maxGas
 *             maxValidators
 *             data {
 *               typeUrl
 *               value
 *             }
 *             validators {
 *               address
 *               power
 *             }
 *           }
 *           ... on PokeTx {
 *             address
 *             date
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on AccountMigrateTx {
 *             address
 *             pk
 *             data {
 *               typeUrl
 *               value
 *             }
 *             type {
 *               address
 *               hash
 *               pk
 *               role
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getUnconfirmedTxs
 * @param {...GraphQLClient.GetUnconfirmedTxsParams}
 * @returns {Promise<GraphQLClient.ResponseGetUnconfirmedTxs>} Checkout {@link GraphQLClient.ResponseGetUnconfirmedTxs} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   getValidatorsInfo {
 *     code
 *     validatorsInfo {
 *       blockHeight
 *       validators {
 *         address
 *         name
 *         proposerPriority
 *         votingPower
 *         geoInfo {
 *           city
 *           country
 *           latitude
 *           longitude
 *         }
 *         pubKey {
 *           data
 *           type
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#getValidatorsInfo
 * @returns {Promise<GraphQLClient.ResponseGetValidatorsInfo>} Checkout {@link GraphQLClient.ResponseGetValidatorsInfo} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   listAssetTransactions(address: "abc") {
 *     code
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *     transactions {
 *       code
 *       hash
 *       receiver
 *       sender
 *       time
 *       type
 *       valid
 *       tx {
 *         chainId
 *         from
 *         nonce
 *         pk
 *         signature
 *         signatures {
 *           pk
 *           signature
 *           signer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         itx {
 *           __typename
 *           ... on UpdateAssetTx {
 *             address
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on TransferTx {
 *             assets
 *             to
 *             value
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on SysUpgradeTx {
 *             gracePeriod
 *             data {
 *               typeUrl
 *               value
 *             }
 *             task {
 *               actions
 *               dataHash
 *               type
 *             }
 *           }
 *           ... on StakeTx {
 *             message
 *             to
 *             value
 *             data {
 *               type
 *             }
 *           }
 *           ... on ExchangeTx {
 *             expiredAt
 *             to
 *             data {
 *               typeUrl
 *               value
 *             }
 *             receiver {
 *               assets
 *               value
 *             }
 *             sender {
 *               assets
 *               value
 *             }
 *           }
 *           ... on DeclareFileTx {
 *             hash
 *           }
 *           ... on DeclareTx {
 *             issuer
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on CreateAssetTx {
 *             address
 *             moniker
 *             parent
 *             readonly
 *             transferrable
 *             ttl
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsumeAssetTx {
 *             address
 *             issuer
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsensusUpgradeTx {
 *             maxBytes
 *             maxCandidates
 *             maxGas
 *             maxValidators
 *             data {
 *               typeUrl
 *               value
 *             }
 *             validators {
 *               address
 *               power
 *             }
 *           }
 *           ... on PokeTx {
 *             address
 *             date
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on AccountMigrateTx {
 *             address
 *             pk
 *             data {
 *               typeUrl
 *               value
 *             }
 *             type {
 *               address
 *               hash
 *               pk
 *               role
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#listAssetTransactions
 * @param {...GraphQLClient.ListAssetTransactionsParams}
 * @returns {Promise<GraphQLClient.ResponseListAssetTransactions>} Checkout {@link GraphQLClient.ResponseListAssetTransactions} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   listAssets(ownerAddress: "abc") {
 *     code
 *     account {
 *       address
 *       balance
 *       genesisTime
 *       migratedFrom
 *       migratedTo
 *       moniker
 *       nonce
 *       numAssets
 *       numTxs
 *       recentNumTxs
 *       renaissanceTime
 *       totalReceivedStakes
 *       totalStakes
 *       totalUnstakes
 *     }
 *     assets {
 *       address
 *       genesisTime
 *       moniker
 *       owner
 *       readonly
 *       renaissanceTime
 *     }
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#listAssets
 * @param {...GraphQLClient.ListAssetsParams}
 * @returns {Promise<GraphQLClient.ResponseListAssets>} Checkout {@link GraphQLClient.ResponseListAssets} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   listBlocks(proposer: "abc") {
 *     code
 *     blocks {
 *       height
 *       numInvalidTxs
 *       numTxs
 *       proposer
 *       time
 *     }
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#listBlocks
 * @param {...GraphQLClient.ListBlocksParams}
 * @returns {Promise<GraphQLClient.ResponseListBlocks>} Checkout {@link GraphQLClient.ResponseListBlocks} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   listStakes {
 *     code
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *     stakes {
 *       address
 *       balance
 *       genesisTime
 *       message
 *       receiver
 *       renaissanceTime
 *       sender
 *       type
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#listStakes
 * @param {...GraphQLClient.ListStakesParams}
 * @returns {Promise<GraphQLClient.ResponseListStakes>} Checkout {@link GraphQLClient.ResponseListStakes} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   listTopAccounts {
 *     code
 *     accounts {
 *       address
 *       balance
 *       genesisTime
 *       migratedFrom
 *       migratedTo
 *       moniker
 *       nonce
 *       numAssets
 *       numTxs
 *       recentNumTxs
 *       renaissanceTime
 *       totalReceivedStakes
 *       totalStakes
 *       totalUnstakes
 *     }
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#listTopAccounts
 * @param {...GraphQLClient.ListTopAccountsParams}
 * @returns {Promise<GraphQLClient.ResponseListTopAccounts>} Checkout {@link GraphQLClient.ResponseListTopAccounts} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * {
 *   listTransactions {
 *     code
 *     page {
 *       cursor
 *       next
 *       total
 *     }
 *     transactions {
 *       code
 *       hash
 *       receiver
 *       sender
 *       time
 *       type
 *       valid
 *       tx {
 *         chainId
 *         from
 *         nonce
 *         pk
 *         signature
 *         signatures {
 *           pk
 *           signature
 *           signer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         itx {
 *           __typename
 *           ... on UpdateAssetTx {
 *             address
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on TransferTx {
 *             assets
 *             to
 *             value
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on SysUpgradeTx {
 *             gracePeriod
 *             data {
 *               typeUrl
 *               value
 *             }
 *             task {
 *               actions
 *               dataHash
 *               type
 *             }
 *           }
 *           ... on StakeTx {
 *             message
 *             to
 *             value
 *             data {
 *               type
 *             }
 *           }
 *           ... on ExchangeTx {
 *             expiredAt
 *             to
 *             data {
 *               typeUrl
 *               value
 *             }
 *             receiver {
 *               assets
 *               value
 *             }
 *             sender {
 *               assets
 *               value
 *             }
 *           }
 *           ... on DeclareFileTx {
 *             hash
 *           }
 *           ... on DeclareTx {
 *             issuer
 *             moniker
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on CreateAssetTx {
 *             address
 *             moniker
 *             parent
 *             readonly
 *             transferrable
 *             ttl
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsumeAssetTx {
 *             address
 *             issuer
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on ConsensusUpgradeTx {
 *             maxBytes
 *             maxCandidates
 *             maxGas
 *             maxValidators
 *             data {
 *               typeUrl
 *               value
 *             }
 *             validators {
 *               address
 *               power
 *             }
 *           }
 *           ... on PokeTx {
 *             address
 *             date
 *             data {
 *               typeUrl
 *               value
 *             }
 *           }
 *           ... on AccountMigrateTx {
 *             address
 *             pk
 *             data {
 *               typeUrl
 *               value
 *             }
 *             type {
 *               address
 *               hash
 *               pk
 *               role
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#listTransactions
 * @param {...GraphQLClient.ListTransactionsParams}
 * @returns {Promise<GraphQLClient.ResponseListTransactions>} Checkout {@link GraphQLClient.ResponseListTransactions} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * mutation {
 *   sendTx(commit: true, token: "abc", tx: "abc", wallet: "abc") {
 *     code
 *     hash
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#sendTx
 * @param {...GraphQLClient.SendTxParams}
 * @returns {Promise<GraphQLClient.ResponseSendTx>} Checkout {@link GraphQLClient.ResponseSendTx} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * mutation {
 *   startSimulator {
 *     code
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#startSimulator
 * @returns {Promise<GraphQLClient.ResponseStartSimulator>} Checkout {@link GraphQLClient.ResponseStartSimulator} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * mutation {
 *   stopSimulator {
 *     code
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#stopSimulator
 * @returns {Promise<GraphQLClient.ResponseStopSimulator>} Checkout {@link GraphQLClient.ResponseStopSimulator} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * mutation {
 *   unsubscribe(topic: "abc") {
 *     code
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#unsubscribe
 * @param {...GraphQLClient.UnsubscribeParams}
 * @returns {Promise<GraphQLClient.ResponseUnsubscribe>} Checkout {@link GraphQLClient.ResponseUnsubscribe} for resolved data format
 */

/**
 * Use following query for result format reference
 *
 * ```graphql
 * subscription {
 *   subscribe(filter: "abc", topic: "abc") {
 *     code
 *     topic
 *     accountMigrate {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     accountState {
 *       address
 *       balance
 *       issuer
 *       migratedFrom
 *       migratedTo
 *       moniker
 *       nonce
 *       numAssets
 *       numTxs
 *       pk
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *       poke {
 *         amount
 *         dailyLimit
 *         leftover
 *       }
 *       stake {
 *         totalReceivedStakes
 *         totalStakes
 *         totalUnstakes
 *         recentReceivedStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *         recentStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *       }
 *       type {
 *         address
 *         hash
 *         pk
 *         role
 *       }
 *     }
 *     assetState {
 *       address
 *       consumedTime
 *       issuer
 *       moniker
 *       owner
 *       readonly
 *       transferrable
 *       ttl
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *       stake {
 *         totalReceivedStakes
 *         totalStakes
 *         totalUnstakes
 *         recentReceivedStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *         recentStakes {
 *           circular
 *           fifo
 *           items
 *           maxItems
 *           typeUrl
 *         }
 *       }
 *     }
 *     beginBlock {
 *       hash
 *       byzantineValidators {
 *         height
 *         time
 *         totalVotingPower
 *         type
 *         validator {
 *           address
 *           power
 *         }
 *       }
 *       header {
 *         appHash
 *         chainId
 *         consensusHash
 *         dataHash
 *         evidenceHash
 *         height
 *         lastCommitHash
 *         lastResultsHash
 *         nextValidatorsHash
 *         numTxs
 *         proposerAddress
 *         time
 *         totalTxs
 *         validatorsHash
 *         lastBlockId {
 *           hash
 *           partsHeader {
 *             hash
 *             total
 *           }
 *         }
 *         version {
 *           app
 *           block
 *         }
 *       }
 *       lastCommitInfo {
 *         round
 *         votes {
 *           signedLastBlock
 *           validator {
 *             address
 *             power
 *           }
 *         }
 *       }
 *     }
 *     confirm {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     consensusUpgrade {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     createAsset {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     declare {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     declareFile {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     endBlock {
 *       height
 *     }
 *     exchange {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     forgeState {
 *       address
 *       forgeAppHash
 *       version
 *       consensus {
 *         maxBytes
 *         maxCandidates
 *         maxGas
 *         maxValidators
 *         paramChanged
 *         pubKeyTypes
 *         validatorChanged
 *         validators {
 *           address
 *           power
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *       pokeConfig {
 *         address
 *         amount
 *         balance
 *         dailyLimit
 *       }
 *       protocols {
 *         address
 *         name
 *       }
 *       stakeConfig {
 *         timeoutGeneral
 *         timeoutStakeForNode
 *       }
 *       stakeSummary {
 *         key
 *         value {
 *           totalStakes
 *           totalUnstakes
 *           context {
 *             genesisTime
 *             renaissanceTime
 *             genesisTx {
 *               code
 *               hash
 *               height
 *               index
 *               time
 *               accountMigrate {
 *                 address
 *               }
 *               createAsset {
 *                 asset
 *               }
 *               tags {
 *                 key
 *                 value
 *               }
 *               tx {
 *                 chainId
 *                 from
 *                 nonce
 *                 pk
 *                 signature
 *               }
 *             }
 *             renaissanceTx {
 *               code
 *               hash
 *               height
 *               index
 *               time
 *               accountMigrate {
 *                 address
 *               }
 *               createAsset {
 *                 asset
 *               }
 *               tags {
 *                 key
 *                 value
 *               }
 *               tx {
 *                 chainId
 *                 from
 *                 nonce
 *                 pk
 *                 signature
 *               }
 *             }
 *           }
 *         }
 *       }
 *       tasks {
 *         key
 *         value {
 *           item {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *       }
 *       token {
 *         decimal
 *         description
 *         icon
 *         inflationRate
 *         initialSupply
 *         name
 *         symbol
 *         totalSupply
 *         unit
 *       }
 *       txConfig {
 *         maxAssetSize
 *         maxListSize
 *         maxMultisig
 *         minimumStake
 *       }
 *       upgradeInfo {
 *         height
 *         version
 *       }
 *     }
 *     protocolState {
 *       address
 *       description
 *       migratedFrom
 *       migratedTo
 *       name
 *       rootHash
 *       status
 *       txHash
 *       version
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *     }
 *     revoke {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     stake {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     stakeState {
 *       address
 *       balance
 *       from
 *       message
 *       to
 *       context {
 *         genesisTime
 *         renaissanceTime
 *         genesisTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *         renaissanceTx {
 *           code
 *           hash
 *           height
 *           index
 *           time
 *           accountMigrate {
 *             address
 *           }
 *           createAsset {
 *             asset
 *           }
 *           tags {
 *             key
 *             value
 *           }
 *           tx {
 *             chainId
 *             from
 *             nonce
 *             pk
 *             signature
 *             signatures {
 *               pk
 *               signature
 *               signer
 *               data {
 *                 typeUrl
 *                 value
 *               }
 *             }
 *             itx {
 *               __typename
 *               ... on UpdateAssetTx {
 *                 address
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on TransferTx {
 *                 assets
 *                 to
 *                 value
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on SysUpgradeTx {
 *                 gracePeriod
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 task {
 *                   actions
 *                   dataHash
 *                   type
 *                 }
 *               }
 *               ... on StakeTx {
 *                 message
 *                 to
 *                 value
 *                 data {
 *                   type
 *                 }
 *               }
 *               ... on ExchangeTx {
 *                 expiredAt
 *                 to
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 receiver {
 *                   assets
 *                   value
 *                 }
 *                 sender {
 *                   assets
 *                   value
 *                 }
 *               }
 *               ... on DeclareFileTx {
 *                 hash
 *               }
 *               ... on DeclareTx {
 *                 issuer
 *                 moniker
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on CreateAssetTx {
 *                 address
 *                 moniker
 *                 parent
 *                 readonly
 *                 transferrable
 *                 ttl
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsumeAssetTx {
 *                 address
 *                 issuer
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on ConsensusUpgradeTx {
 *                 maxBytes
 *                 maxCandidates
 *                 maxGas
 *                 maxValidators
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 validators {
 *                   address
 *                   power
 *                 }
 *               }
 *               ... on PokeTx {
 *                 address
 *                 date
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *               }
 *               ... on AccountMigrateTx {
 *                 address
 *                 pk
 *                 data {
 *                   typeUrl
 *                   value
 *                 }
 *                 type {
 *                   address
 *                   hash
 *                   pk
 *                   role
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *       data {
 *         typeUrl
 *         value
 *       }
 *     }
 *     sysUpgrade {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     transfer {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *     updateAsset {
 *       chainId
 *       from
 *       nonce
 *       pk
 *       signature
 *       signatures {
 *         pk
 *         signature
 *         signer
 *         data {
 *           typeUrl
 *           value
 *         }
 *       }
 *       itx {
 *         __typename
 *         ... on UpdateAssetTx {
 *           address
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on TransferTx {
 *           assets
 *           to
 *           value
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on SysUpgradeTx {
 *           gracePeriod
 *           data {
 *             typeUrl
 *             value
 *           }
 *           task {
 *             actions
 *             dataHash
 *             type
 *           }
 *         }
 *         ... on StakeTx {
 *           message
 *           to
 *           value
 *           data {
 *             type
 *           }
 *         }
 *         ... on ExchangeTx {
 *           expiredAt
 *           to
 *           data {
 *             typeUrl
 *             value
 *           }
 *           receiver {
 *             assets
 *             value
 *           }
 *           sender {
 *             assets
 *             value
 *           }
 *         }
 *         ... on DeclareFileTx {
 *           hash
 *         }
 *         ... on DeclareTx {
 *           issuer
 *           moniker
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on CreateAssetTx {
 *           address
 *           moniker
 *           parent
 *           readonly
 *           transferrable
 *           ttl
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsumeAssetTx {
 *           address
 *           issuer
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on ConsensusUpgradeTx {
 *           maxBytes
 *           maxCandidates
 *           maxGas
 *           maxValidators
 *           data {
 *             typeUrl
 *             value
 *           }
 *           validators {
 *             address
 *             power
 *           }
 *         }
 *         ... on PokeTx {
 *           address
 *           date
 *           data {
 *             typeUrl
 *             value
 *           }
 *         }
 *         ... on AccountMigrateTx {
 *           address
 *           pk
 *           data {
 *             typeUrl
 *             value
 *           }
 *           type {
 *             address
 *             hash
 *             pk
 *             role
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 * ```
 *
 * @method
 * @name GraphQLClient#subscribe
 * @param {...GraphQLClient.SubscribeParams}
 * @returns {Promise<GraphQLClient.ResponseSubscribe>} Checkout {@link GraphQLClient.ResponseSubscribe} for resolved data format
 */
