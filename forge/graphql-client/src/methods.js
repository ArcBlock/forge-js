// This file is generated automatically, do not edit

/**
 * Format big number presentation amount to token number
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#fromUnitToToken
 * @param {string} value
 * @returns {string}
 */

/**
 * Encode amount to corresponding token big number presentation
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#fromTokenToUnit
 * @param {number} amount
 * @returns {BN}
 */

/**
 * Converts a relative locktime to absolute locktime
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#toLocktime
 * @param {number} number - number of blocks want to lock
 * @param {object} [options={}] - options to underlying methods
 * @returns {number}
 */

/**
 * List all transaction send methods
 * Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#getTxSendMethods
 * @returns {Array<string>} method name list
 */

/**
 * List all transaction encode methods, each method can be used to encode transaction to buffer and object
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#getTxEncodeMethods
 * @returns {Array<string>} method name list
 */

/**
 * List all transaction sign methods, each method can be used to sign transaction to an object
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#getTxSignMethods
 * @returns {Array<string>} method name list
 */

/**
 * List all transaction multi sign methods, each method can be used to do multi sign a transaction
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#getTxMultiSignMethods
 * @returns {Array<string>} method name list
 */

/**
 * Get protobuf message class by name, only supports forge-built-in types
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#getType
 * @param {string} x
 * @returns {class|null} message type
 */

/**
 * Decode transaction buffer/base64/base58 to an object
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#decodeTx
 * @param {buffer|hex|base48|base64} input
 * @returns {object} transaction object
 */

/**
 * Declare an DID and it's public key on chain
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#declare
 * @param {object} params
 * @param {string} params.moniker - user nickname
 * @param {string} [params.issuer=""] - who issued the account
 * @param {object} [params.data=undefined] - who issued the account
 * @param {WalletObject} params.wallet - wallet to sign the tx
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the transaction hash once resolved
 */

/**
 * Migrate current account to a new account
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#migrateAccount
 * @param {object} params
 * @param {WalletObject} params.from - which account to migrate from
 * @param {WalletObject} params.to - which account to migrate to
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the transaction hash once resolved
 */

/**
 * Delegate some privileges to another account
 * So that that account can send transactions on behalf of the delegator
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#delegate
 * @param {object} params
 * @param {WalletObject} params.from - the delegator, who grants the privilege to others
 * @param {WalletObject} params.to - the delegatee, who is authorized to send transactions
 * @param {Array} params.privileges - the privilege settings
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `[transactionHash, delegateAddress]` once resolved
 */

/**
 * Revoke a previous delegation
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#revokeDelegate
 * @param {object} params
 * @param {WalletObject} params.from - the delegator, who grants the privilege to others
 * @param {WalletObject} params.to - the delegatee, who is authorized to send transactions
 * @param {Array} params.privileges - the privilege settings
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the transaction hash once resolved
 */

/**
 * Create an new asset (non-fungible-token)
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#createAsset
 * @param {object} params
 * @param {string} params.moniker - asset name
 * @param {string} params.parent - asset parent
 * @param {object} params.data - asset data payload
 * @param {number} params.ttl - ttl after first consumption
 * @param {boolean} params.readonly - whether the asset can be updated after creation
 * @param {boolean} params.transferrable - whether the asset can be transferred to another account
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the initial owner of the asset
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `[transactionHash, assetAddress]` once resolved
 */

/**
 * Update an existing asset (non-fungible-token)
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#updateAsset
 * @param {object} params
 * @param {string} params.address - asset address
 * @param {string} params.moniker - asset name
 * @param {object} params.data - asset data payload
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Prepare a transaction that consumes an asset (non-fungible-token)
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#prepareConsumeAsset
 * @param {object} params
 * @param {string} params.issuer - issuer address
 * @param {string} params.address - parent address
 * @param {object} params.data - extra data payload
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Prepare a transaction that consumes an asset (non-fungible-token)
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#finalizeConsumeAsset
 * @param {object} params
 * @param {object} params.tx - transaction to finalize, should be result from `prepareConsumeAsset`
 * @param {string} params.address - asset address to be consumed
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Send a transaction that consumes an asset (non-fungible-token)
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#consumeAsset
 * @param {object} params
 * @param {object} params.tx - transaction to send, should be result from `finalizeConsumeAsset`
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Create an asset factory that can be used to produce multiple assets in a transaction
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#createAssetFactory
 * @param {object} params
 * @param {string} params.moniker - asset name
 * @param {object} params.factory - asset factory attributes
 * @param {string} params.factory.description - asset factory name
 * @param {number} params.factory.limit - how many assets can be generated from this factory
 * @param {price} params.factory.price - how much should charge user when acquire asset
 * @param {string} params.factory.template - mustache compatible
 * @param {Array} params.factory.templateVariables - list of allowed template variables
 * @param {string} params.factory.assetName - protobuf type known to forge that can be used to create this asset
 * @param {string} params.factory.attributes - attributes for assets that are generated from this factory
 * @param {boolean} params.readonly - whether the asset can be updated after creation
 * @param {boolean} params.transferrable - whether the asset can be transferred to another account
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the initial owner of the asset
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `[transactionHash, factoryAddress]` once resolved
 */

/**
 * Acquire an asset from factory
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#acquireAsset
 * @param {object} params
 * @param {string} params.assetFactory - Asset factory address
 * @param {Array} params.assetVariables - list of asset variables that can be populated into asset factory template
 * @param {boolean} params.readonly - whether the asset can be updated after creation, should match factory settings
 * @param {boolean} params.transferrable - whether the asset can be transferred to another account, should match factory settings
 * @param {number} params.ttl - asset expire
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the initial owner of the asset
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `[transactionHash, [assetAddress]]` once resolved
 */

/**
 * Do an on-chain upgrade, should be used with forge-cli
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#upgradeNode
 * @param {object} params
 * @param {number} params.height - at which height should the chain stop to perform the upgrade
 * @param {string} params.version - to which version should upgrade to
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Deploy a contract to a running chain node, requires moderator privilege
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#deployContract
 * @param {object} params
 * @param {object} params.payload - the contract payload, usually from `forge contract:compile`
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Activate an previously paused/disabled contract
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#activateContract
 * @param {object} params
 * @param {string} params.address - the contract address to activate
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Deactivate an previously running/enabled contract
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#deactivateContract
 * @param {object} params
 * @param {string} params.address - the contract address to deactivate
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Setup a swap that's used to accomplish cross-chain operations
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#setupSwap
 * @param {object} params
 * @param {number} params.token - how much token to offer
 * @param {Array} params.assets - how much assets to offer
 * @param {string} params.receiver - who can retrieve this swap
 * @param {string} params.hashlock - sha3 from hashkey
 * @param {string} params.delegator - who authorized this transaction
 * @param {number} [params.locktime=1000] - how much block height to lock the swap before it can be revoked
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `[transactionHash, swapAddress]` once resolved
 */

/**
 * Retrieve a swap during an atomic-swap process
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#retrieveSwap
 * @param {object} params
 * @param {string} params.address - the swap address to retrieve
 * @param {string} params.hashkey - the hashkey to unlock the swap
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Revoke a swap during an atomic-swap process
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#revokeSwap
 * @param {object} params
 * @param {string} params.address - the swap address to revoke
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Transfer token or assets to another account
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#transfer
 * @param {object} params
 * @param {number} params.token - how much token can be transferred
 * @param {Array} params.assets - which assets should be transferred
 * @param {string} params.to - who receive the transfer
 * @param {string} params.memo - transaction note
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Prepare an exchange transaction between multiple accounts
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#prepareExchange
 * @param {object} params
 * @param {number} params.offerToken - how much token can be sent
 * @param {Array} params.offerAssets - which assets should be sent
 * @param {number} params.demandToken - how much token can be received
 * @param {Array} params.demandAssets - which assets should be received
 * @param {string} params.receiver - who receive the transfer
 * @param {string} params.memo - transaction note
 * @param {string} params.delegator - which assets should be transferred
 * @param {WalletObject} params.wallet - the wallet who is the offerer
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transaction` object once resolved
 */

/**
 * Finalize an exchange transaction between multiple accounts
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#finalizeExchange
 * @param {object} params
 * @param {object} params.tx - the transaction object from `prepareExchange`
 * @param {string} params.delegator - who authorized this transaction
 * @param {object} params.data - extra data in the multi sig
 * @param {WalletObject} params.wallet - the wallet who is the demander
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transaction` object once resolved
 */

/**
 * Send an exchange transaction
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#exchange
 * @param {object} params
 * @param {object} params.tx - the transaction object from `finalizeExchange`
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Send a poke transaction to get some token for free
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#checkin
 * @param {object} params
 * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Send a refuel transaction to get some gas
 *
 * @memberof GraphQLClient
 * @function
 * @name GraphQLClient#refuel
 * @param {object} params
 * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
 * @param {object} params.data - extra data to put in itx
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */
