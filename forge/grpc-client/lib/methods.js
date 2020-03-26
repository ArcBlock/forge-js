// This file is generated automatically, do not edit

/**
 * Format big number presentation amount to token number
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#fromUnitToToken
 * @param {string} value
 * @returns {string}
 */

/**
 * Encode amount to corresponding token big number presentation
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#fromTokenToUnit
 * @param {number} amount
 * @returns {BN}
 */

/**
 * Converts a relative locktime to absolute locktime
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#toLocktime
 * @param {number} number - number of blocks want to lock
 * @param {object} [options={}] - options to underlying methods
 * @returns {number}
 */

/**
 * List all transaction send methods
 * Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getTxSendMethods
 * @returns {Array<string>} method name list
 */

/**
 * List all transaction encode methods, each method can be used to encode transaction to buffer and object
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getTxEncodeMethods
 * @returns {Array<string>} method name list
 */

/**
 * List all transaction sign methods, each method can be used to sign transaction to an object
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getTxSignMethods
 * @returns {Array<string>} method name list
 */

/**
 * List all transaction multi sign methods, each method can be used to do multi sign a transaction
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getTxMultiSignMethods
 * @returns {Array<string>} method name list
 */

/**
 * Get protobuf message class by name, only supports forge-built-in types
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getType
 * @param {string} x
 * @returns {class|null} message type
 */

/**
 * Decode transaction buffer/base64/base58 to an object
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#decodeTx
 * @param {buffer|hex|base48|base64} input
 * @returns {object} transaction object
 */

/**
 * Declare an DID and it's public key on chain
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#declare
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#migrateAccount
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#delegate
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#revokeDelegate
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#createAsset
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#updateAsset
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#prepareConsumeAsset
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#finalizeConsumeAsset
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#consumeAsset
 * @param {object} params
 * @param {object} params.tx - transaction to send, should be result from `finalizeConsumeAsset`
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Create an asset factory that can be used to produce multiple assets in a transaction
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#createAssetFactory
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#acquireAsset
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#upgradeNode
 * @param {object} params
 * @param {number} params.height - at which height should the chain stop to perform the upgrade
 * @param {string} params.version - to which version should upgrade to
 * @param {string} params.delegator - who authorized this transaction
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Setup a swap that's used to accomplish cross-chain operations
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#setupSwap
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#retrieveSwap
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#revokeSwap
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#transfer
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#prepareExchange
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#finalizeExchange
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
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#exchange
 * @param {object} params
 * @param {object} params.tx - the transaction object from `finalizeExchange`
 * @param {WalletObject} params.wallet - the wallet to sign the transaction
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Send a poke transaction to get some token for free
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#checkin
 * @param {object} params
 * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */

/**
 * Send a refuel transaction to get some gas
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#refuel
 * @param {object} params
 * @param {WalletObject} params.wallet - the wallet to sign the transaction, also who will get the token
 * @param {object} params.data - extra data to put in itx
 * @param {object} extra - other param to underlying client implementation
 * @returns {Promise} the `transactionHash` once resolved
 */
