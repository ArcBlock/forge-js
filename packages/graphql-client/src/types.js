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
 * Common props for sending or encoding a transaction
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.TxInputExtra
 * @prop {string} chainId - if not specified, will fetch from graphql endpoint
 * @prop {number} nonce - if not specified, will use Date.now as nonce
 * @prop {string} from - sender address, if not specified, will use wallet.toAddress
 * @prop {string} pk - sender publicKey, if not specified, will use wallet.publicKey
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
 * Structure of GraphQLClient.EncodeTxResult
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.EncodeTxResult
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.DeclareFileTx
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.DeclareTx
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.RequestEndBlock
 * @property {string} height
 */

/**
 * Structure of GraphQLClient.ResponseGetAccountState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetAccountState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.AccountState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetAssetState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetAssetState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.AssetState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetBlock
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetBlock
 * @property {...GraphQLClient.BlockInfo} block
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseGetBlocks
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetChainInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ChainInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetConfig
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetConfig
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} config
 */

/**
 * Structure of GraphQLClient.ResponseGetForgeState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetForgeState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ForgeState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetForgeStats
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetForgeStats
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ForgeStats} forgeStats
 */

/**
 * Structure of GraphQLClient.ResponseGetHealthStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetHealthStatus
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.HealthStatus} healthStatus
 */

/**
 * Structure of GraphQLClient.ResponseGetNetInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetNetInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.NetInfo} netInfo
 */

/**
 * Structure of GraphQLClient.ResponseGetNodeInfo
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetNodeInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.NodeInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetProtocolState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetProtocolState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ProtocolState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetSimulatorStatus
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetSimulatorStatus
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} result
 */

/**
 * Structure of GraphQLClient.ResponseGetStakeState
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetStakeState
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.StakeState} state
 */

/**
 * Structure of GraphQLClient.ResponseGetTx
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetTx
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.TransactionInfo} info
 */

/**
 * Structure of GraphQLClient.ResponseGetUnconfirmedTxs
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseGetValidatorsInfo
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.ValidatorsInfo} validatorsInfo
 */

/**
 * Structure of GraphQLClient.ResponseListAssetTransactions
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListBlocks
 * @property {Array<...GraphQLClient.IndexedBlock>} blocks
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListStakes
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseListTopAccounts
 * @property {Array<...GraphQLClient.IndexedAccountState>} accounts
 * @property {...GraphQLClient.StatusCode} code
 * @property {...GraphQLClient.PageInfo} page
 */

/**
 * Structure of GraphQLClient.ResponseListTransactions
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseSendTx
 * @property {...GraphQLClient.StatusCode} code
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.ResponseStartSimulator
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseStartSimulator
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseStopSimulator
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ResponseStopSimulator
 * @property {...GraphQLClient.StatusCode} code
 */

/**
 * Structure of GraphQLClient.ResponseSubscribe
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetAccountStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetAssetStateParams
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetBlockParams
 * @property {string} height
 */

/**
 * Structure of GraphQLClient.GetBlocksParams
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetForgeStateParams
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetForgeStatsByDayParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetForgeStatsByDayParams
 * @property {string} endDate
 * @property {string} startDate
 */

/**
 * Structure of GraphQLClient.GetForgeStatsByHourParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetForgeStatsByHourParams
 * @property {string} date
 */

/**
 * Structure of GraphQLClient.GetProtocolStateParams
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetStakeStateParams
 * @property {string} address
 * @property {string} height
 * @property {Array<...GraphQLClient.string>} keys
 */

/**
 * Structure of GraphQLClient.GetTxParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetTxParams
 * @property {string} hash
 */

/**
 * Structure of GraphQLClient.GetUnconfirmedTxsParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.GetUnconfirmedTxsParams
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListAssetTransactionsParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListAssetTransactionsParams
 * @property {string} address
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListAssetsParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListAssetsParams
 * @property {string} ownerAddress
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListBlocksParams
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListStakesParams
 * @property {...GraphQLClient.AddressFilter} addressFilter
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListTopAccountsParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.ListTopAccountsParams
 * @property {...GraphQLClient.PageInput} paging
 */

/**
 * Structure of GraphQLClient.ListTransactionsParams
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
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.UnsubscribeParams
 * @property {string} topic
 */

/**
 * Structure of GraphQLClient.SubscribeParams
 *
 * @memberof GraphQLClient
 * @typedef {object} GraphQLClient.SubscribeParams
 * @property {string} filter
 * @property {string} topic
 */

/**
 * Structure of param.data for transaction sending/encoding method sendCreateAssetTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.CreateAssetTxInputData
 * @prop {...GraphQLClient.CreateAssetTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendCreateAssetTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.CreateAssetTxInput
 * @prop {...GraphQLClient.CreateAssetTxSendInputData} input.data - should be the CreateAssetTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendCreateAssetTx
 * @param {GraphQLClient.CreateAssetTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendTransferTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.TransferTxInputData
 * @prop {...GraphQLClient.TransferTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendTransferTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.TransferTxInput
 * @prop {...GraphQLClient.TransferTxSendInputData} input.data - should be the TransferTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendTransferTx
 * @param {GraphQLClient.TransferTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendPokeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.PokeTxInputData
 * @prop {...GraphQLClient.PokeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendPokeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.PokeTxInput
 * @prop {...GraphQLClient.PokeTxSendInputData} input.data - should be the PokeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendPokeTx
 * @param {GraphQLClient.PokeTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendDeployProtocolTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeployProtocolTxInputData
 * @prop {...GraphQLClient.DeployProtocolTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendDeployProtocolTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeployProtocolTxInput
 * @prop {...GraphQLClient.DeployProtocolTxSendInputData} input.data - should be the DeployProtocolTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDeployProtocolTx
 * @param {GraphQLClient.DeployProtocolTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendUpgradeNodeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpgradeNodeTxInputData
 * @prop {...GraphQLClient.UpgradeNodeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendUpgradeNodeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpgradeNodeTxInput
 * @prop {...GraphQLClient.UpgradeNodeTxSendInputData} input.data - should be the UpgradeNodeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendUpgradeNodeTx
 * @param {GraphQLClient.UpgradeNodeTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendUpdateAssetTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpdateAssetTxInputData
 * @prop {...GraphQLClient.UpdateAssetTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendUpdateAssetTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.UpdateAssetTxInput
 * @prop {...GraphQLClient.UpdateAssetTxSendInputData} input.data - should be the UpdateAssetTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendUpdateAssetTx
 * @param {GraphQLClient.UpdateAssetTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendAccountMigrateTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.AccountMigrateTxInputData
 * @prop {...GraphQLClient.AccountMigrateTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendAccountMigrateTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.AccountMigrateTxInput
 * @prop {...GraphQLClient.AccountMigrateTxSendInputData} input.data - should be the AccountMigrateTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendAccountMigrateTx
 * @param {GraphQLClient.AccountMigrateTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendConsumeAssetTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ConsumeAssetTxInputData
 * @prop {...GraphQLClient.ConsumeAssetTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendConsumeAssetTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ConsumeAssetTxInput
 * @prop {...GraphQLClient.ConsumeAssetTxSendInputData} input.data - should be the ConsumeAssetTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendConsumeAssetTx
 * @param {GraphQLClient.ConsumeAssetTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendDeclareTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeclareTxInputData
 * @prop {...GraphQLClient.DeclareTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendDeclareTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeclareTxInput
 * @prop {...GraphQLClient.DeclareTxSendInputData} input.data - should be the DeclareTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDeclareTx
 * @param {GraphQLClient.DeclareTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendExchangeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ExchangeTxInputData
 * @prop {...GraphQLClient.ExchangeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendExchangeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.ExchangeTxInput
 * @prop {...GraphQLClient.ExchangeTxSendInputData} input.data - should be the ExchangeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendExchangeTx
 * @param {GraphQLClient.ExchangeTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendDeclareFileTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeclareFileTxInputData
 * @prop {...GraphQLClient.DeclareFileTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendDeclareFileTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.DeclareFileTxInput
 * @prop {...GraphQLClient.DeclareFileTxSendInputData} input.data - should be the DeclareFileTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendDeclareFileTx
 * @param {GraphQLClient.DeclareFileTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Structure of param.data for transaction sending/encoding method sendStakeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.StakeTxInputData
 * @prop {...GraphQLClient.StakeTx}
 * @prop {...GraphQLClient.TxInputExtra}
 */

/**
 * Structure of param for transaction sending/encoding method sendStakeTx
 *
 * @memberof GraphQLClient
 * @typedef {Object} GraphQLClient.StakeTxInput
 * @prop {...GraphQLClient.StakeTxSendInputData} input.data - should be the StakeTx object in most simple case
 * @prop {object} input.wallet - should be a wallet instance constructed using forge-wallet
 * @prop {object} input.signature - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send transaction and get the hash, if you want to get transaction detail please use {@link GraphQLClient#getTx}
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#sendStakeTx
 * @param {GraphQLClient.StakeTxInput} params
 * @returns {Promise} returns transaction hash if success, otherwise error was thrown
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeCreateAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.CreateAssetTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeTransferTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.TransferTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodePokeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.PokeTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeDeployProtocolTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DeployProtocolTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeUpgradeNodeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpgradeNodeTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeUpdateAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.UpdateAssetTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeAccountMigrateTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.AccountMigrateTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeConsumeAssetTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ConsumeAssetTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeDeclareTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DeclareTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeExchangeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.ExchangeTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeDeclareFileTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.DeclareFileTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Encode transaction, users can pass plain objects for itx.data field
 *
 * @name GraphQLClient#encodeStakeTx
 * @function
 * @memberof GraphQLClient
 * @param {GraphQLClient.StakeTxInput} params
 * @returns {object} result - we provide two formats of the encoding result
 * @returns {buffer} result.buffer - binary presentation of the tx, can be used for further encoding or signing
 * @returns {object} result.object - human readable tx object
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getAccountState
 * @param {...GraphQLClient.GetAccountStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetAccountState>} Checkout {@link GraphQLClient.ResponseGetAccountState} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getAssetState
 * @param {...GraphQLClient.GetAssetStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetAssetState>} Checkout {@link GraphQLClient.ResponseGetAssetState} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getBlock
 * @param {...GraphQLClient.GetBlockParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetBlock>} Checkout {@link GraphQLClient.ResponseGetBlock} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getBlocks
 * @param {...GraphQLClient.GetBlocksParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetBlocks>} Checkout {@link GraphQLClient.ResponseGetBlocks} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getChainInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetChainInfo>} Checkout {@link GraphQLClient.ResponseGetChainInfo} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getConfig
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetConfig>} Checkout {@link GraphQLClient.ResponseGetConfig} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getForgeState
 * @param {...GraphQLClient.GetForgeStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeState>} Checkout {@link GraphQLClient.ResponseGetForgeState} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getForgeStats
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getForgeStatsByDay
 * @param {...GraphQLClient.GetForgeStatsByDayParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getForgeStatsByHour
 * @param {...GraphQLClient.GetForgeStatsByHourParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetForgeStats>} Checkout {@link GraphQLClient.ResponseGetForgeStats} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getHealthStatus
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetHealthStatus>} Checkout {@link GraphQLClient.ResponseGetHealthStatus} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getNetInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetNetInfo>} Checkout {@link GraphQLClient.ResponseGetNetInfo} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getNodeInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetNodeInfo>} Checkout {@link GraphQLClient.ResponseGetNodeInfo} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getProtocolState
 * @param {...GraphQLClient.GetProtocolStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetProtocolState>} Checkout {@link GraphQLClient.ResponseGetProtocolState} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getSimulatorStatus
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetSimulatorStatus>} Checkout {@link GraphQLClient.ResponseGetSimulatorStatus} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getStakeState
 * @param {...GraphQLClient.GetStakeStateParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetStakeState>} Checkout {@link GraphQLClient.ResponseGetStakeState} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getTx
 * @param {...GraphQLClient.GetTxParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetTx>} Checkout {@link GraphQLClient.ResponseGetTx} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getUnconfirmedTxs
 * @param {...GraphQLClient.GetUnconfirmedTxsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetUnconfirmedTxs>} Checkout {@link GraphQLClient.ResponseGetUnconfirmedTxs} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#getValidatorsInfo
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseGetValidatorsInfo>} Checkout {@link GraphQLClient.ResponseGetValidatorsInfo} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#listAssetTransactions
 * @param {...GraphQLClient.ListAssetTransactionsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListAssetTransactions>} Checkout {@link GraphQLClient.ResponseListAssetTransactions} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#listAssets
 * @param {...GraphQLClient.ListAssetsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListAssets>} Checkout {@link GraphQLClient.ResponseListAssets} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#listBlocks
 * @param {...GraphQLClient.ListBlocksParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListBlocks>} Checkout {@link GraphQLClient.ResponseListBlocks} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#listStakes
 * @param {...GraphQLClient.ListStakesParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListStakes>} Checkout {@link GraphQLClient.ResponseListStakes} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#listTopAccounts
 * @param {...GraphQLClient.ListTopAccountsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListTopAccounts>} Checkout {@link GraphQLClient.ResponseListTopAccounts} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#listTransactions
 * @param {...GraphQLClient.ListTransactionsParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseListTransactions>} Checkout {@link GraphQLClient.ResponseListTransactions} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#sendTx
 * @param {...GraphQLClient.SendTxParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseSendTx>} Checkout {@link GraphQLClient.ResponseSendTx} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#startSimulator
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseStartSimulator>} Checkout {@link GraphQLClient.ResponseStartSimulator} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#stopSimulator
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseStopSimulator>} Checkout {@link GraphQLClient.ResponseStopSimulator} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#unsubscribe
 * @param {...GraphQLClient.UnsubscribeParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseUnsubscribe>} Checkout {@link GraphQLClient.ResponseUnsubscribe} for resolved data format
 */

/**
 * Checkout following query for result format reference:
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
 * @name GraphQLClient#subscribe
 * @param {...GraphQLClient.SubscribeParams} params
 * @function
 * @memberof GraphQLClient
 * @returns {Promise<GraphQLClient.ResponseSubscribe>} Checkout {@link GraphQLClient.ResponseSubscribe} for resolved data format
 */
