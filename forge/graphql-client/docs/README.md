
## GraphQLClient

An http client that can read/write data to a forge powered blockchain node, can be used in both node.js and browser.

Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`

**Kind**: global class  
**See**

* GraphQLClient#getQueries
* GraphQLClient#getMutations
* GraphQLClient#getSubscriptions
* GraphQLClient#getTxSendMethods
* GraphQLClient#getTxEncodeMethods


* [GraphQLClient](#GraphQLClient)
  * [new GraphQLClient(config)](#new_GraphQLClient_new)
    * _instance_
      * [fromUnitToToken(value)](#GraphQLClient+fromUnitToToken) ⇒ `string`
      * [fromTokenToUnit(amount)](#GraphQLClient+fromTokenToUnit) ⇒ `BN`
      * [toLocktime(number, \[options\])](#GraphQLClient+toLocktime) ⇒ `number`
      * [getTxSendMethods()](#GraphQLClient+getTxSendMethods) ⇒ `Array.<string>`
      * [getTxEncodeMethods()](#GraphQLClient+getTxEncodeMethods) ⇒ `Array.<string>`
      * [getTxSignMethods()](#GraphQLClient+getTxSignMethods) ⇒ `Array.<string>`
      * [getTxMultiSignMethods()](#GraphQLClient+getTxMultiSignMethods) ⇒ `Array.<string>`
      * [getType(x)](#GraphQLClient+getType) ⇒ `class` \| `null`
      * [decodeTx(input)](#GraphQLClient+decodeTx) ⇒ `object`
      * [declare(params, extra)](#GraphQLClient+declare) ⇒ `Promise`
      * [migrateAccount(params, extra)](#GraphQLClient+migrateAccount) ⇒ `Promise`
      * [delegate(params, extra)](#GraphQLClient+delegate) ⇒ `Promise`
      * [revokeDelegate(params, extra)](#GraphQLClient+revokeDelegate) ⇒ `Promise`
      * [createAsset(params, extra)](#GraphQLClient+createAsset) ⇒ `Promise`
      * [updateAsset(params, extra)](#GraphQLClient+updateAsset) ⇒ `Promise`
      * [prepareConsumeAsset(params, extra)](#GraphQLClient+prepareConsumeAsset) ⇒ `Promise`
      * [finalizeConsumeAsset(params, extra)](#GraphQLClient+finalizeConsumeAsset) ⇒ `Promise`
      * [consumeAsset(params, extra)](#GraphQLClient+consumeAsset) ⇒ `Promise`
      * [createAssetFactory(params, extra)](#GraphQLClient+createAssetFactory) ⇒ `Promise`
      * [acquireAsset(params, extra)](#GraphQLClient+acquireAsset) ⇒ `Promise`
      * [upgradeNode(params, extra)](#GraphQLClient+upgradeNode) ⇒ `Promise`
      * [setupSwap(params, extra)](#GraphQLClient+setupSwap) ⇒ `Promise`
      * [retrieveSwap(params, extra)](#GraphQLClient+retrieveSwap) ⇒ `Promise`
      * [revokeSwap(params, extra)](#GraphQLClient+revokeSwap) ⇒ `Promise`
      * [transfer(params, extra)](#GraphQLClient+transfer) ⇒ `Promise`
      * [prepareExchange(params, extra)](#GraphQLClient+prepareExchange) ⇒ `Promise`
      * [finalizeExchange(params, extra)](#GraphQLClient+finalizeExchange) ⇒ `Promise`
      * [exchange(params, extra)](#GraphQLClient+exchange) ⇒ `Promise`
      * [checkin(params, extra)](#GraphQLClient+checkin) ⇒ `Promise`
      * [refuel(params, extra)](#GraphQLClient+refuel) ⇒ `Promise`
      * [getQueries()](#GraphQLClient+getQueries) ⇒ `Array.<string>`
      * [getMutations()](#GraphQLClient+getMutations) ⇒ `Array.<string>`
      * [getSubscription()](#GraphQLClient+getSubscription) ⇒ `Array.<string>`
      * [doRawQuery(query)](#GraphQLClient+doRawQuery) ⇒ `Promise`
      * [doRawSubscription(query)](#GraphQLClient+doRawSubscription) ⇒ `Promise`
      * [sendAccountMigrateTx(params)](#GraphQLClient+sendAccountMigrateTx) ⇒ `Promise.<string>`
      * [sendAcquireAssetTx(params)](#GraphQLClient+sendAcquireAssetTx) ⇒ `Promise.<string>`
      * [sendApproveWithdrawTx(params)](#GraphQLClient+sendApproveWithdrawTx) ⇒ `Promise.<string>`
      * [sendConsumeAssetTx(params)](#GraphQLClient+sendConsumeAssetTx) ⇒ `Promise.<string>`
      * [sendCreateAssetTx(params)](#GraphQLClient+sendCreateAssetTx) ⇒ `Promise.<string>`
      * [sendDeclareTx(params)](#GraphQLClient+sendDeclareTx) ⇒ `Promise.<string>`
      * [sendDelegateTx(params)](#GraphQLClient+sendDelegateTx) ⇒ `Promise.<string>`
      * [sendDepositTokenTx(params)](#GraphQLClient+sendDepositTokenTx) ⇒ `Promise.<string>`
      * [sendExchangeTx(params)](#GraphQLClient+sendExchangeTx) ⇒ `Promise.<string>`
      * [sendPokeTx(params)](#GraphQLClient+sendPokeTx) ⇒ `Promise.<string>`
      * [sendRefuelTx(params)](#GraphQLClient+sendRefuelTx) ⇒ `Promise.<string>`
      * [sendRetrieveSwapTx(params)](#GraphQLClient+sendRetrieveSwapTx) ⇒ `Promise.<string>`
      * [sendRevokeDelegateTx(params)](#GraphQLClient+sendRevokeDelegateTx) ⇒ `Promise.<string>`
      * [sendRevokeSwapTx(params)](#GraphQLClient+sendRevokeSwapTx) ⇒ `Promise.<string>`
      * [sendRevokeWithdrawTx(params)](#GraphQLClient+sendRevokeWithdrawTx) ⇒ `Promise.<string>`
      * [sendSetupSwapTx(params)](#GraphQLClient+sendSetupSwapTx) ⇒ `Promise.<string>`
      * [sendTransferTx(params)](#GraphQLClient+sendTransferTx) ⇒ `Promise.<string>`
      * [sendUpdateAssetTx(params)](#GraphQLClient+sendUpdateAssetTx) ⇒ `Promise.<string>`
      * [sendUpdateConsensusParamsTx(params)](#GraphQLClient+sendUpdateConsensusParamsTx) ⇒ `Promise.<string>`
      * [sendUpdateValidatorTx(params)](#GraphQLClient+sendUpdateValidatorTx) ⇒ `Promise.<string>`
      * [sendUpgradeNodeTx(params)](#GraphQLClient+sendUpgradeNodeTx) ⇒ `Promise.<string>`
      * [sendWithdrawTokenTx(params)](#GraphQLClient+sendWithdrawTokenTx) ⇒ `Promise.<string>`
      * [encodeAccountMigrateTx(params)](#GraphQLClient+encodeAccountMigrateTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeAcquireAssetTx(params)](#GraphQLClient+encodeAcquireAssetTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeApproveWithdrawTx(params)](#GraphQLClient+encodeApproveWithdrawTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeConsumeAssetTx(params)](#GraphQLClient+encodeConsumeAssetTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeCreateAssetTx(params)](#GraphQLClient+encodeCreateAssetTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeDeclareTx(params)](#GraphQLClient+encodeDeclareTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeDelegateTx(params)](#GraphQLClient+encodeDelegateTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeDepositTokenTx(params)](#GraphQLClient+encodeDepositTokenTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeExchangeTx(params)](#GraphQLClient+encodeExchangeTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodePokeTx(params)](#GraphQLClient+encodePokeTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeRefuelTx(params)](#GraphQLClient+encodeRefuelTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeRetrieveSwapTx(params)](#GraphQLClient+encodeRetrieveSwapTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeRevokeDelegateTx(params)](#GraphQLClient+encodeRevokeDelegateTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeRevokeSwapTx(params)](#GraphQLClient+encodeRevokeSwapTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeRevokeWithdrawTx(params)](#GraphQLClient+encodeRevokeWithdrawTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeSetupSwapTx(params)](#GraphQLClient+encodeSetupSwapTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeTransferTx(params)](#GraphQLClient+encodeTransferTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeUpdateAssetTx(params)](#GraphQLClient+encodeUpdateAssetTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeUpdateConsensusParamsTx(params)](#GraphQLClient+encodeUpdateConsensusParamsTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeUpdateValidatorTx(params)](#GraphQLClient+encodeUpdateValidatorTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeUpgradeNodeTx(params)](#GraphQLClient+encodeUpgradeNodeTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [encodeWithdrawTokenTx(params)](#GraphQLClient+encodeWithdrawTokenTx) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)
      * [getAccountState(params)](#GraphQLClient+getAccountState) ⇒ [`Promise.<ResponseGetAccountState>`](#GraphQLClient.ResponseGetAccountState)
      * [getAssetState(params)](#GraphQLClient+getAssetState) ⇒ [`Promise.<ResponseGetAssetState>`](#GraphQLClient.ResponseGetAssetState)
      * [getBlock(params)](#GraphQLClient+getBlock) ⇒ [`Promise.<ResponseGetBlock>`](#GraphQLClient.ResponseGetBlock)
      * [getBlocks(params)](#GraphQLClient+getBlocks) ⇒ [`Promise.<ResponseGetBlocks>`](#GraphQLClient.ResponseGetBlocks)
      * [getChainInfo()](#GraphQLClient+getChainInfo) ⇒ [`Promise.<ResponseGetChainInfo>`](#GraphQLClient.ResponseGetChainInfo)
      * [getConfig(params)](#GraphQLClient+getConfig) ⇒ [`Promise.<ResponseGetConfig>`](#GraphQLClient.ResponseGetConfig)
      * [getDelegateState(params)](#GraphQLClient+getDelegateState) ⇒ [`Promise.<ResponseGetDelegateState>`](#GraphQLClient.ResponseGetDelegateState)
      * [getForgeState(params)](#GraphQLClient+getForgeState) ⇒ [`Promise.<ResponseGetForgeState>`](#GraphQLClient.ResponseGetForgeState)
      * [getForgeStats()](#GraphQLClient+getForgeStats) ⇒ [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats)
      * [getForgeStatsByDay(params)](#GraphQLClient+getForgeStatsByDay) ⇒ [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats)
      * [getForgeStatsByHour(params)](#GraphQLClient+getForgeStatsByHour) ⇒ [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats)
      * [getHealthStatus()](#GraphQLClient+getHealthStatus) ⇒ [`Promise.<ResponseGetHealthStatus>`](#GraphQLClient.ResponseGetHealthStatus)
      * [getNetInfo()](#GraphQLClient+getNetInfo) ⇒ [`Promise.<ResponseGetNetInfo>`](#GraphQLClient.ResponseGetNetInfo)
      * [getNodeInfo()](#GraphQLClient+getNodeInfo) ⇒ [`Promise.<ResponseGetNodeInfo>`](#GraphQLClient.ResponseGetNodeInfo)
      * [getSimulatorStatus()](#GraphQLClient+getSimulatorStatus) ⇒ [`Promise.<ResponseGetSimulatorStatus>`](#GraphQLClient.ResponseGetSimulatorStatus)
      * [getSwapState(params)](#GraphQLClient+getSwapState) ⇒ [`Promise.<ResponseGetSwapState>`](#GraphQLClient.ResponseGetSwapState)
      * [getSwapStatistics(params)](#GraphQLClient+getSwapStatistics) ⇒ [`Promise.<ResponseGetSwapStatistics>`](#GraphQLClient.ResponseGetSwapStatistics)
      * [getTx(params)](#GraphQLClient+getTx) ⇒ [`Promise.<ResponseGetTx>`](#GraphQLClient.ResponseGetTx)
      * [getUnconfirmedTxs(params)](#GraphQLClient+getUnconfirmedTxs) ⇒ [`Promise.<ResponseGetUnconfirmedTxs>`](#GraphQLClient.ResponseGetUnconfirmedTxs)
      * [getValidatorsInfo()](#GraphQLClient+getValidatorsInfo) ⇒ [`Promise.<ResponseGetValidatorsInfo>`](#GraphQLClient.ResponseGetValidatorsInfo)
      * [listAssetTransactions(params)](#GraphQLClient+listAssetTransactions) ⇒ [`Promise.<ResponseListAssetTransactions>`](#GraphQLClient.ResponseListAssetTransactions)
      * [listAssets(params)](#GraphQLClient+listAssets) ⇒ [`Promise.<ResponseListAssets>`](#GraphQLClient.ResponseListAssets)
      * [listBlocks(params)](#GraphQLClient+listBlocks) ⇒ [`Promise.<ResponseListBlocks>`](#GraphQLClient.ResponseListBlocks)
      * [listStakes(params)](#GraphQLClient+listStakes) ⇒ [`Promise.<ResponseListStakes>`](#GraphQLClient.ResponseListStakes)
      * [listSwap(params)](#GraphQLClient+listSwap) ⇒ [`Promise.<ResponseListSwap>`](#GraphQLClient.ResponseListSwap)
      * [listTopAccounts(params)](#GraphQLClient+listTopAccounts) ⇒ [`Promise.<ResponseListTopAccounts>`](#GraphQLClient.ResponseListTopAccounts)
      * [listTransactions(params)](#GraphQLClient+listTransactions) ⇒ [`Promise.<ResponseListTransactions>`](#GraphQLClient.ResponseListTransactions)
      * [sendTx(params)](#GraphQLClient+sendTx) ⇒ [`Promise.<ResponseSendTx>`](#GraphQLClient.ResponseSendTx)
      * [startSimulator()](#GraphQLClient+startSimulator) ⇒ [`Promise.<ResponseStartSimulator>`](#GraphQLClient.ResponseStartSimulator)
      * [stopSimulator()](#GraphQLClient+stopSimulator) ⇒ [`Promise.<ResponseStopSimulator>`](#GraphQLClient.ResponseStopSimulator)
      * [unsubscribe(params)](#GraphQLClient+unsubscribe) ⇒ [`Promise.<ResponseUnsubscribe>`](#GraphQLClient.ResponseUnsubscribe)
      * [subscribe(params)](#GraphQLClient+subscribe) ⇒ [`Promise.<ResponseSubscribe>`](#GraphQLClient.ResponseSubscribe)
    * _static_
      * [WalletObject](#GraphQLClient.WalletObject) : `Object`
      * [WalletTypeObject](#GraphQLClient.WalletTypeObject) : `Object`
      * [TxEncodeOutput](#GraphQLClient.TxEncodeOutput) : `object`
      * [AddressFilter](#GraphQLClient.AddressFilter) : `object`
      * [PageInput](#GraphQLClient.PageInput) : `object`
      * [PageOrder](#GraphQLClient.PageOrder) : `object`
      * [RangeFilter](#GraphQLClient.RangeFilter) : `object`
      * [TimeFilter](#GraphQLClient.TimeFilter) : `object`
      * [TypeFilter](#GraphQLClient.TypeFilter) : `object`
      * [ValidityFilter](#GraphQLClient.ValidityFilter) : `object`
      * [AbciServerStatus](#GraphQLClient.AbciServerStatus) : `object`
      * [AccountConfig](#GraphQLClient.AccountConfig) : `object`
      * [AccountConfigEntry](#GraphQLClient.AccountConfigEntry) : `object`
      * [AccountMigrateTx](#GraphQLClient.AccountMigrateTx) : `object`
      * [AccountState](#GraphQLClient.AccountState) : `object`
      * [AcquireAssetTx](#GraphQLClient.AcquireAssetTx) : `object`
      * [Any](#GraphQLClient.Any) : `object`
      * [AssetSpec](#GraphQLClient.AssetSpec) : `object`
      * [AssetState](#GraphQLClient.AssetState) : `object`
      * [BlockId](#GraphQLClient.BlockId) : `object`
      * [BlockInfo](#GraphQLClient.BlockInfo) : `object`
      * [BlockInfoSimple](#GraphQLClient.BlockInfoSimple) : `object`
      * [ChainInfo](#GraphQLClient.ChainInfo) : `object`
      * [CircularQueue](#GraphQLClient.CircularQueue) : `object`
      * [CodeInfo](#GraphQLClient.CodeInfo) : `object`
      * [ConsensusParams](#GraphQLClient.ConsensusParams) : `object`
      * [ConsensusStatus](#GraphQLClient.ConsensusStatus) : `object`
      * [ConsumeAssetTx](#GraphQLClient.ConsumeAssetTx) : `object`
      * [CoreProtocol](#GraphQLClient.CoreProtocol) : `object`
      * [CreateAssetTx](#GraphQLClient.CreateAssetTx) : `object`
      * [DeclareConfig](#GraphQLClient.DeclareConfig) : `object`
      * [DeclareTx](#GraphQLClient.DeclareTx) : `object`
      * [DelegateConfig](#GraphQLClient.DelegateConfig) : `object`
      * [DelegateOpState](#GraphQLClient.DelegateOpState) : `object`
      * [DelegateState](#GraphQLClient.DelegateState) : `object`
      * [DeployProtocolTx](#GraphQLClient.DeployProtocolTx) : `object`
      * [DiskSpaceStatus](#GraphQLClient.DiskSpaceStatus) : `object`
      * [Evidence](#GraphQLClient.Evidence) : `object`
      * [ExchangeInfo](#GraphQLClient.ExchangeInfo) : `object`
      * [ExchangeTx](#GraphQLClient.ExchangeTx) : `object`
      * [ForgeAppsVersionEntry](#GraphQLClient.ForgeAppsVersionEntry) : `object`
      * [ForgeState](#GraphQLClient.ForgeState) : `object`
      * [ForgeStats](#GraphQLClient.ForgeStats) : `object`
      * [ForgeStatus](#GraphQLClient.ForgeStatus) : `object`
      * [ForgeToken](#GraphQLClient.ForgeToken) : `object`
      * [GasEntry](#GraphQLClient.GasEntry) : `object`
      * [GeoInfo](#GraphQLClient.GeoInfo) : `object`
      * [Header](#GraphQLClient.Header) : `object`
      * [HealthStatus](#GraphQLClient.HealthStatus) : `object`
      * [IndexedAccountState](#GraphQLClient.IndexedAccountState) : `object`
      * [IndexedAssetState](#GraphQLClient.IndexedAssetState) : `object`
      * [IndexedBlock](#GraphQLClient.IndexedBlock) : `object`
      * [IndexedStakeState](#GraphQLClient.IndexedStakeState) : `object`
      * [IndexedTransaction](#GraphQLClient.IndexedTransaction) : `object`
      * [KvPair](#GraphQLClient.KvPair) : `object`
      * [LastCommitInfo](#GraphQLClient.LastCommitInfo) : `object`
      * [Multisig](#GraphQLClient.Multisig) : `object`
      * [NetInfo](#GraphQLClient.NetInfo) : `object`
      * [NetworkStatus](#GraphQLClient.NetworkStatus) : `object`
      * [NodeInfo](#GraphQLClient.NodeInfo) : `object`
      * [OpsEntry](#GraphQLClient.OpsEntry) : `object`
      * [PageInfo](#GraphQLClient.PageInfo) : `object`
      * [PartSetHeader](#GraphQLClient.PartSetHeader) : `object`
      * [PeerInfo](#GraphQLClient.PeerInfo) : `object`
      * [PokeConfig](#GraphQLClient.PokeConfig) : `object`
      * [PokeInfo](#GraphQLClient.PokeInfo) : `object`
      * [PokeTx](#GraphQLClient.PokeTx) : `object`
      * [ProtocolState](#GraphQLClient.ProtocolState) : `object`
      * [PubKey](#GraphQLClient.PubKey) : `object`
      * [QueueItem](#GraphQLClient.QueueItem) : `object`
      * [RequestBeginBlock](#GraphQLClient.RequestBeginBlock) : `object`
      * [RequestEndBlock](#GraphQLClient.RequestEndBlock) : `object`
      * [ResponseGetAccountState](#GraphQLClient.ResponseGetAccountState) : `object`
      * [ResponseGetAssetState](#GraphQLClient.ResponseGetAssetState) : `object`
      * [ResponseGetBlock](#GraphQLClient.ResponseGetBlock) : `object`
      * [ResponseGetBlocks](#GraphQLClient.ResponseGetBlocks) : `object`
      * [ResponseGetChainInfo](#GraphQLClient.ResponseGetChainInfo) : `object`
      * [ResponseGetConfig](#GraphQLClient.ResponseGetConfig) : `object`
      * [ResponseGetDelegateState](#GraphQLClient.ResponseGetDelegateState) : `object`
      * [ResponseGetForgeState](#GraphQLClient.ResponseGetForgeState) : `object`
      * [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) : `object`
      * [ResponseGetHealthStatus](#GraphQLClient.ResponseGetHealthStatus) : `object`
      * [ResponseGetNetInfo](#GraphQLClient.ResponseGetNetInfo) : `object`
      * [ResponseGetNodeInfo](#GraphQLClient.ResponseGetNodeInfo) : `object`
      * [ResponseGetSimulatorStatus](#GraphQLClient.ResponseGetSimulatorStatus) : `object`
      * [ResponseGetSwapState](#GraphQLClient.ResponseGetSwapState) : `object`
      * [ResponseGetSwapStatistics](#GraphQLClient.ResponseGetSwapStatistics) : `object`
      * [ResponseGetTx](#GraphQLClient.ResponseGetTx) : `object`
      * [ResponseGetUnconfirmedTxs](#GraphQLClient.ResponseGetUnconfirmedTxs) : `object`
      * [ResponseGetValidatorsInfo](#GraphQLClient.ResponseGetValidatorsInfo) : `object`
      * [ResponseListAssetTransactions](#GraphQLClient.ResponseListAssetTransactions) : `object`
      * [ResponseListAssets](#GraphQLClient.ResponseListAssets) : `object`
      * [ResponseListBlocks](#GraphQLClient.ResponseListBlocks) : `object`
      * [ResponseListStakes](#GraphQLClient.ResponseListStakes) : `object`
      * [ResponseListSwap](#GraphQLClient.ResponseListSwap) : `object`
      * [ResponseListTopAccounts](#GraphQLClient.ResponseListTopAccounts) : `object`
      * [ResponseListTransactions](#GraphQLClient.ResponseListTransactions) : `object`
      * [ResponseSendTx](#GraphQLClient.ResponseSendTx) : `object`
      * [ResponseStartSimulator](#GraphQLClient.ResponseStartSimulator) : `object`
      * [ResponseStopSimulator](#GraphQLClient.ResponseStopSimulator) : `object`
      * [ResponseSubscribe](#GraphQLClient.ResponseSubscribe) : `object`
      * [ResponseUnsubscribe](#GraphQLClient.ResponseUnsubscribe) : `object`
      * [RetrieveSwapTx](#GraphQLClient.RetrieveSwapTx) : `object`
      * [RevokeSwapTx](#GraphQLClient.RevokeSwapTx) : `object`
      * [SetupSwapTx](#GraphQLClient.SetupSwapTx) : `object`
      * [StakeConfig](#GraphQLClient.StakeConfig) : `object`
      * [StakeContext](#GraphQLClient.StakeContext) : `object`
      * [StakeState](#GraphQLClient.StakeState) : `object`
      * [StakeSummary](#GraphQLClient.StakeSummary) : `object`
      * [StakeSummaryEntry](#GraphQLClient.StakeSummaryEntry) : `object`
      * [StateContext](#GraphQLClient.StateContext) : `object`
      * [StorageStatus](#GraphQLClient.StorageStatus) : `object`
      * [SwapState](#GraphQLClient.SwapState) : `object`
      * [SwapStatistics](#GraphQLClient.SwapStatistics) : `object`
      * [TasksEntry](#GraphQLClient.TasksEntry) : `object`
      * [TokenSwapConfig](#GraphQLClient.TokenSwapConfig) : `object`
      * [Transaction](#GraphQLClient.Transaction) : `object`
      * [TransactionConfig](#GraphQLClient.TransactionConfig) : `object`
      * [TransactionInfo](#GraphQLClient.TransactionInfo) : `object`
      * [TransferTx](#GraphQLClient.TransferTx) : `object`
      * [TypeUrls](#GraphQLClient.TypeUrls) : `object`
      * [UnconfirmedTxs](#GraphQLClient.UnconfirmedTxs) : `object`
      * [UpdateAssetTx](#GraphQLClient.UpdateAssetTx) : `object`
      * [UpgradeInfo](#GraphQLClient.UpgradeInfo) : `object`
      * [UpgradeNodeTx](#GraphQLClient.UpgradeNodeTx) : `object`
      * [UpgradeTask](#GraphQLClient.UpgradeTask) : `object`
      * [UpgradeTasks](#GraphQLClient.UpgradeTasks) : `object`
      * [Validator](#GraphQLClient.Validator) : `object`
      * [ValidatorInfo](#GraphQLClient.ValidatorInfo) : `object`
      * [ValidatorsInfo](#GraphQLClient.ValidatorsInfo) : `object`
      * [Version](#GraphQLClient.Version) : `object`
      * [VoteInfo](#GraphQLClient.VoteInfo) : `object`
      * [WalletType](#GraphQLClient.WalletType) : `object`
      * [GetAccountStateParams](#GraphQLClient.GetAccountStateParams) : `object`
      * [GetAssetStateParams](#GraphQLClient.GetAssetStateParams) : `object`
      * [GetBlockParams](#GraphQLClient.GetBlockParams) : `object`
      * [GetBlocksParams](#GraphQLClient.GetBlocksParams) : `object`
      * [GetConfigParams](#GraphQLClient.GetConfigParams) : `object`
      * [GetDelegateStateParams](#GraphQLClient.GetDelegateStateParams) : `object`
      * [GetForgeStateParams](#GraphQLClient.GetForgeStateParams) : `object`
      * [GetForgeStatsByDayParams](#GraphQLClient.GetForgeStatsByDayParams) : `object`
      * [GetForgeStatsByHourParams](#GraphQLClient.GetForgeStatsByHourParams) : `object`
      * [GetSwapStateParams](#GraphQLClient.GetSwapStateParams) : `object`
      * [GetSwapStatisticsParams](#GraphQLClient.GetSwapStatisticsParams) : `object`
      * [GetTxParams](#GraphQLClient.GetTxParams) : `object`
      * [GetUnconfirmedTxsParams](#GraphQLClient.GetUnconfirmedTxsParams) : `object`
      * [ListAssetTransactionsParams](#GraphQLClient.ListAssetTransactionsParams) : `object`
      * [ListAssetsParams](#GraphQLClient.ListAssetsParams) : `object`
      * [ListBlocksParams](#GraphQLClient.ListBlocksParams) : `object`
      * [ListStakesParams](#GraphQLClient.ListStakesParams) : `object`
      * [ListSwapParams](#GraphQLClient.ListSwapParams) : `object`
      * [ListTopAccountsParams](#GraphQLClient.ListTopAccountsParams) : `object`
      * [ListTransactionsParams](#GraphQLClient.ListTransactionsParams) : `object`
      * [SendTxParams](#GraphQLClient.SendTxParams) : `object`
      * [UnsubscribeParams](#GraphQLClient.UnsubscribeParams) : `object`
      * [SubscribeParams](#GraphQLClient.SubscribeParams) : `object`
      * [AccountMigrateTxInput](#GraphQLClient.AccountMigrateTxInput) : `Object`
      * [AcquireAssetTxInput](#GraphQLClient.AcquireAssetTxInput) : `Object`
      * [ApproveWithdrawTxInput](#GraphQLClient.ApproveWithdrawTxInput) : `Object`
      * [ConsumeAssetTxInput](#GraphQLClient.ConsumeAssetTxInput) : `Object`
      * [CreateAssetTxInput](#GraphQLClient.CreateAssetTxInput) : `Object`
      * [DeclareTxInput](#GraphQLClient.DeclareTxInput) : `Object`
      * [DelegateTxInput](#GraphQLClient.DelegateTxInput) : `Object`
      * [DepositTokenTxInput](#GraphQLClient.DepositTokenTxInput) : `Object`
      * [ExchangeTxInput](#GraphQLClient.ExchangeTxInput) : `Object`
      * [PokeTxInput](#GraphQLClient.PokeTxInput) : `Object`
      * [RefuelTxInput](#GraphQLClient.RefuelTxInput) : `Object`
      * [RetrieveSwapTxInput](#GraphQLClient.RetrieveSwapTxInput) : `Object`
      * [RevokeDelegateTxInput](#GraphQLClient.RevokeDelegateTxInput) : `Object`
      * [RevokeSwapTxInput](#GraphQLClient.RevokeSwapTxInput) : `Object`
      * [RevokeWithdrawTxInput](#GraphQLClient.RevokeWithdrawTxInput) : `Object`
      * [SetupSwapTxInput](#GraphQLClient.SetupSwapTxInput) : `Object`
      * [TransferTxInput](#GraphQLClient.TransferTxInput) : `Object`
      * [UpdateAssetTxInput](#GraphQLClient.UpdateAssetTxInput) : `Object`
      * [UpdateConsensusParamsTxInput](#GraphQLClient.UpdateConsensusParamsTxInput) : `Object`
      * [UpdateValidatorTxInput](#GraphQLClient.UpdateValidatorTxInput) : `Object`
      * [UpgradeNodeTxInput](#GraphQLClient.UpgradeNodeTxInput) : `Object`
      * [WithdrawTokenTxInput](#GraphQLClient.WithdrawTokenTxInput) : `Object`

### new GraphQLClient(config)

Create an instance of GraphQLClient

| Param             | Type                 | Default                                             | Description                                                     |
| ----------------- | -------------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| config            | `object` \| `string` | `http://localhost:8210/api`                         | config object, if a string passed, will be used as the endpoint |
| [config.endpoint] | `string`             | `&quot;&#x27;http://localhost:8210/api&#x27;&quot;` | the graphql endpoint                                            |
| [config.chainId]  | `string`             | `&quot;&#x27;&#x27;&quot;`                          | the chainId of the network                                      |

**Example**  

```js
const GraphQLClient = require('@arcblock/graphql-client');

const client = new GraphQLClient('https://argon.abtnetwork.io/api');
// const client = new GraphQLClient({ endpoint: 'https://argon.abtnetwork.io/api' });

const res = await client.getChainInfo();
```

### graphQLClient.fromUnitToToken(value) ⇒ `string`

Format big number presentation amount to token number

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  

| Param | Type     |
| ----- | -------- |
| value | `string` |

### graphQLClient.fromTokenToUnit(amount) ⇒ `BN`

Encode amount to corresponding token big number presentation

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  

| Param  | Type     |
| ------ | -------- |
| amount | `number` |

### graphQLClient.toLocktime(number, [options]) ⇒ `number`

Converts a relative locktime to absolute locktime

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  

| Param     | Type     | Default | Description                   |
| --------- | -------- | ------- | ----------------------------- |
| number    | `number` |         | number of blocks want to lock |
| [options] | `object` | `{}`    | options to underlying methods |

### graphQLClient.getTxSendMethods() ⇒ `Array.<string>`

List all transaction send methods
Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  

### graphQLClient.getTxEncodeMethods() ⇒ `Array.<string>`

List all transaction encode methods, each method can be used to encode transaction to buffer and object

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  

### graphQLClient.getTxSignMethods() ⇒ `Array.<string>`

List all transaction sign methods, each method can be used to sign transaction to an object

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  

### graphQLClient.getTxMultiSignMethods() ⇒ `Array.<string>`

List all transaction multi sign methods, each method can be used to do multi sign a transaction

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  

### graphQLClient.getType(x) ⇒ `class` \| `null`

Get protobuf message class by name, only supports forge-built-in types

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `class` \| `null` - message type  

| Param | Type     |
| ----- | -------- |
| x     | `string` |

### graphQLClient.decodeTx(input) ⇒ `object`

Decode transaction buffer/base64/base58 to an object

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `object` - transaction object  

| Param | Type                                      |
| ----- | ----------------------------------------- |
| input | `buffer` \| `hex` \| `base48` \| `base64` |

### graphQLClient.declare(params, extra) ⇒ `Promise`

Declare an DID and it's public key on chain

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the transaction hash once resolved  

| Param           | Type           | Default                      | Description                                     |
| --------------- | -------------- | ---------------------------- | ----------------------------------------------- |
| params          | `object`       |                              |                                                 |
| params.moniker  | `string`       |                              | user nickname                                   |
| [params.issuer] | `string`       | `&quot;\&quot;\&quot;&quot;` | who issued the account                          |
| [params.data]   | `object`       |                              | who issued the account                          |
| params.wallet   | `WalletObject` |                              | wallet to sign the tx                           |
| extra           | `object`       |                              | other param to underlying client implementation |

### graphQLClient.migrateAccount(params, extra) ⇒ `Promise`

Migrate current account to a new account

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the transaction hash once resolved  

| Param       | Type           | Description                                     |
| ----------- | -------------- | ----------------------------------------------- |
| params      | `object`       |                                                 |
| params.from | `WalletObject` | which account to migrate from                   |
| params.to   | `WalletObject` | which account to migrate to                     |
| extra       | `object`       | other param to underlying client implementation |

### graphQLClient.delegate(params, extra) ⇒ `Promise`

Delegate some privileges to another account
So that that account can send transactions on behalf of the delegator

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `[transactionHash, delegateAddress]` once resolved  

| Param             | Type           | Description                                           |
| ----------------- | -------------- | ----------------------------------------------------- |
| params            | `object`       |                                                       |
| params.from       | `WalletObject` | the delegator, who grants the privilege to others     |
| params.to         | `WalletObject` | the delegatee, who is authorized to send transactions |
| params.privileges | `Array`        | the privilege settings                                |
| extra             | `object`       | other param to underlying client implementation       |

### graphQLClient.revokeDelegate(params, extra) ⇒ `Promise`

Revoke a previous delegation

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the transaction hash once resolved  

| Param             | Type           | Description                                           |
| ----------------- | -------------- | ----------------------------------------------------- |
| params            | `object`       |                                                       |
| params.from       | `WalletObject` | the delegator, who grants the privilege to others     |
| params.to         | `WalletObject` | the delegatee, who is authorized to send transactions |
| params.privileges | `Array`        | the privilege settings                                |
| extra             | `object`       | other param to underlying client implementation       |

### graphQLClient.createAsset(params, extra) ⇒ `Promise`

Create an new asset (non-fungible-token)

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `[transactionHash, assetAddress]` once resolved  

| Param                | Type           | Description                                             |
| -------------------- | -------------- | ------------------------------------------------------- |
| params               | `object`       |                                                         |
| params.moniker       | `string`       | asset name                                              |
| params.parent        | `string`       | asset parent                                            |
| params.data          | `object`       | asset data payload                                      |
| params.ttl           | `number`       | ttl after first consumption                             |
| params.readonly      | `boolean`      | whether the asset can be updated after creation         |
| params.transferrable | `boolean`      | whether the asset can be transferred to another account |
| params.delegator     | `string`       | who authorized this transaction                         |
| params.wallet        | `WalletObject` | the initial owner of the asset                          |
| extra                | `object`       | other param to underlying client implementation         |

### graphQLClient.updateAsset(params, extra) ⇒ `Promise`

Update an existing asset (non-fungible-token)

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | asset address                                   |
| params.moniker   | `string`       | asset name                                      |
| params.data      | `object`       | asset data payload                              |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### graphQLClient.prepareConsumeAsset(params, extra) ⇒ `Promise`

Prepare a transaction that consumes an asset (non-fungible-token)

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.issuer    | `string`       | issuer address                                  |
| params.address   | `string`       | parent address                                  |
| params.data      | `object`       | extra data payload                              |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### graphQLClient.finalizeConsumeAsset(params, extra) ⇒ `Promise`

Prepare a transaction that consumes an asset (non-fungible-token)

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                                          |
| ---------------- | -------------- | -------------------------------------------------------------------- |
| params           | `object`       |                                                                      |
| params.tx        | `object`       | transaction to finalize, should be result from `prepareConsumeAsset` |
| params.address   | `string`       | asset address to be consumed                                         |
| params.delegator | `string`       | who authorized this transaction                                      |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                                   |
| extra            | `object`       | other param to underlying client implementation                      |

### graphQLClient.consumeAsset(params, extra) ⇒ `Promise`

Send a transaction that consumes an asset (non-fungible-token)

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                                       |
| ------------- | -------------- | ----------------------------------------------------------------- |
| params        | `object`       |                                                                   |
| params.tx     | `object`       | transaction to send, should be result from `finalizeConsumeAsset` |
| params.wallet | `WalletObject` | the wallet to sign the transaction                                |
| extra         | `object`       | other param to underlying client implementation                   |

### graphQLClient.createAssetFactory(params, extra) ⇒ `Promise`

Create an asset factory that can be used to produce multiple assets in a transaction

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `[transactionHash, factoryAddress]` once resolved  

| Param                            | Type           | Description                                                        |
| -------------------------------- | -------------- | ------------------------------------------------------------------ |
| params                           | `object`       |                                                                    |
| params.moniker                   | `string`       | asset name                                                         |
| params.factory                   | `object`       | asset factory attributes                                           |
| params.factory.description       | `string`       | asset factory name                                                 |
| params.factory.limit             | `number`       | how many assets can be generated from this factory                 |
| params.factory.price             | `price`        | how much should charge user when acquire asset                     |
| params.factory.template          | `string`       | mustache compatible                                                |
| params.factory.templateVariables | `Array`        | list of allowed template variables                                 |
| params.factory.assetName         | `string`       | protobuf type known to forge that can be used to create this asset |
| params.factory.attributes        | `string`       | attributes for assets that are generated from this factory         |
| params.readonly                  | `boolean`      | whether the asset can be updated after creation                    |
| params.transferrable             | `boolean`      | whether the asset can be transferred to another account            |
| params.delegator                 | `string`       | who authorized this transaction                                    |
| params.wallet                    | `WalletObject` | the initial owner of the asset                                     |
| extra                            | `object`       | other param to underlying client implementation                    |

### graphQLClient.acquireAsset(params, extra) ⇒ `Promise`

Acquire an asset from factory

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `[transactionHash, [assetAddress]]` once resolved  

| Param                 | Type           | Description                                                                            |
| --------------------- | -------------- | -------------------------------------------------------------------------------------- |
| params                | `object`       |                                                                                        |
| params.assetFactory   | `string`       | Asset factory address                                                                  |
| params.assetVariables | `Array`        | list of asset variables that can be populated into asset factory template              |
| params.readonly       | `boolean`      | whether the asset can be updated after creation, should match factory settings         |
| params.transferrable  | `boolean`      | whether the asset can be transferred to another account, should match factory settings |
| params.ttl            | `number`       | asset expire                                                                           |
| params.delegator      | `string`       | who authorized this transaction                                                        |
| params.wallet         | `WalletObject` | the initial owner of the asset                                                         |
| extra                 | `object`       | other param to underlying client implementation                                        |

### graphQLClient.upgradeNode(params, extra) ⇒ `Promise`

Do an on-chain upgrade, should be used with forge-cli

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                                  |
| ---------------- | -------------- | ------------------------------------------------------------ |
| params           | `object`       |                                                              |
| params.height    | `number`       | at which height should the chain stop to perform the upgrade |
| params.version   | `string`       | to which version should upgrade to                           |
| params.delegator | `string`       | who authorized this transaction                              |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                           |
| extra            | `object`       | other param to underlying client implementation              |

### graphQLClient.setupSwap(params, extra) ⇒ `Promise`

Setup a swap that's used to accomplish cross-chain operations

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `[transactionHash, swapAddress]` once resolved  

| Param             | Type           | Default | Description                                                     |
| ----------------- | -------------- | ------- | --------------------------------------------------------------- |
| params            | `object`       |         |                                                                 |
| params.token      | `number`       |         | how much token to offer                                         |
| params.assets     | `Array`        |         | how much assets to offer                                        |
| params.receiver   | `string`       |         | who can retrieve this swap                                      |
| params.hashlock   | `string`       |         | sha3 from hashkey                                               |
| params.delegator  | `string`       |         | who authorized this transaction                                 |
| [params.locktime] | `number`       | `1000`  | how much block height to lock the swap before it can be revoked |
| params.wallet     | `WalletObject` |         | the wallet to sign the transaction                              |
| extra             | `object`       |         | other param to underlying client implementation                 |

### graphQLClient.retrieveSwap(params, extra) ⇒ `Promise`

Retrieve a swap during an atomic-swap process

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the swap address to retrieve                    |
| params.hashkey   | `string`       | the hashkey to unlock the swap                  |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### graphQLClient.revokeSwap(params, extra) ⇒ `Promise`

Revoke a swap during an atomic-swap process

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the swap address to revoke                      |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### graphQLClient.transfer(params, extra) ⇒ `Promise`

Transfer token or assets to another account

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.token     | `number`       | how much token can be transferred               |
| params.assets    | `Array`        | which assets should be transferred              |
| params.to        | `string`       | who receive the transfer                        |
| params.memo      | `string`       | transaction note                                |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### graphQLClient.prepareExchange(params, extra) ⇒ `Promise`

Prepare an exchange transaction between multiple accounts

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transaction` object once resolved  

| Param               | Type           | Description                                     |
| ------------------- | -------------- | ----------------------------------------------- |
| params              | `object`       |                                                 |
| params.offerToken   | `number`       | how much token can be sent                      |
| params.offerAssets  | `Array`        | which assets should be sent                     |
| params.demandToken  | `number`       | how much token can be received                  |
| params.demandAssets | `Array`        | which assets should be received                 |
| params.receiver     | `string`       | who receive the transfer                        |
| params.memo         | `string`       | transaction note                                |
| params.delegator    | `string`       | which assets should be transferred              |
| params.wallet       | `WalletObject` | the wallet who is the offerer                   |
| extra               | `object`       | other param to underlying client implementation |

### graphQLClient.finalizeExchange(params, extra) ⇒ `Promise`

Finalize an exchange transaction between multiple accounts

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transaction` object once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.tx        | `object`       | the transaction object from `prepareExchange`   |
| params.delegator | `string`       | who authorized this transaction                 |
| params.data      | `object`       | extra data in the multi sig                     |
| params.wallet    | `WalletObject` | the wallet who is the demander                  |
| extra            | `object`       | other param to underlying client implementation |

### graphQLClient.exchange(params, extra) ⇒ `Promise`

Send an exchange transaction

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                     |
| ------------- | -------------- | ----------------------------------------------- |
| params        | `object`       |                                                 |
| params.tx     | `object`       | the transaction object from `finalizeExchange`  |
| params.wallet | `WalletObject` | the wallet to sign the transaction              |
| extra         | `object`       | other param to underlying client implementation |

### graphQLClient.checkin(params, extra) ⇒ `Promise`

Send a poke transaction to get some token for free

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                                     |
| ------------- | -------------- | --------------------------------------------------------------- |
| params        | `object`       |                                                                 |
| params.wallet | `WalletObject` | the wallet to sign the transaction, also who will get the token |
| extra         | `object`       | other param to underlying client implementation                 |

### graphQLClient.refuel(params, extra) ⇒ `Promise`

Send a refuel transaction to get some gas

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                                     |
| ------------- | -------------- | --------------------------------------------------------------- |
| params        | `object`       |                                                                 |
| params.wallet | `WalletObject` | the wallet to sign the transaction, also who will get the token |
| params.data   | `object`       | extra data to put in itx                                        |
| extra         | `object`       | other param to underlying client implementation                 |

### graphQLClient.getQueries() ⇒ `Array.<string>`

List all query method names

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  
**Example**  

```js
const methods = client.getQueries();
// list of query methods
// [
//   getAccountState,
//   getAssetState,
//   getBlock,
//   getBlocks,
//   getChainInfo,
//   getConfig,
//   getDelegateState,
//   getForgeState,
//   getForgeStats,
//   getForgeStatsByDay,
//   getForgeStatsByHour,
//   getHealthStatus,
//   getNetInfo,
//   getNodeInfo,
//   getSimulatorStatus,
//   getSwapState,
//   getSwapStatistics,
//   getTx,
//   getUnconfirmedTxs,
//   getValidatorsInfo,
//   listAssetTransactions,
//   listAssets,
//   listBlocks,
//   listStakes,
//   listSwap,
//   listTopAccounts,
//   listTransactions,
// ]
```

### graphQLClient.getMutations() ⇒ `Array.<string>`

List all mutation method names

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  
**Example**  

```js
const methods = client.getMutations();
// list of mutation methods
// [
//   sendTx,
//   startSimulator,
//   stopSimulator,
//   unsubscribe,
// ]
```

### graphQLClient.getSubscription() ⇒ `Array.<string>`

List all subscription method names

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.<string>` - method name list  
**Example**  

```js
const methods = client.getSubscriptions();
// list of subscription methods
// [
//   subscribe,
// ]
```

### graphQLClient.doRawQuery(query) ⇒ `Promise`

Send raw graphql query to forge graphql endpoint

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - usually axios response data  

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| query | `string` | graphql query string |

**Example**  

```js
const res = await client.doRawQuery('
  getChainInfo {
    code
    info {
      address
      blockHeight
    }
  }
');

// Then
// res.getChainInfo.code
// res.getChainInfo.info
```

### graphQLClient.doRawSubscription(query) ⇒ `Promise`

Send raw graphql subscription to forge graphql endpoint

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise` - usually axios response data  

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| query | `string` | graphql query string |

### graphQLClient.sendAccountMigrateTx(params) ⇒ `Promise.<string>`

Send AccountMigrateTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`AccountMigrateTxInput`](#GraphQLClient.AccountMigrateTxInput) |

### graphQLClient.sendAcquireAssetTx(params) ⇒ `Promise.<string>`

Send AcquireAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`AcquireAssetTxInput`](#GraphQLClient.AcquireAssetTxInput) |

### graphQLClient.sendApproveWithdrawTx(params) ⇒ `Promise.<string>`

Send ApproveWithdrawTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`ApproveWithdrawTxInput`](#GraphQLClient.ApproveWithdrawTxInput) |

### graphQLClient.sendConsumeAssetTx(params) ⇒ `Promise.<string>`

Send ConsumeAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`ConsumeAssetTxInput`](#GraphQLClient.ConsumeAssetTxInput) |

### graphQLClient.sendCreateAssetTx(params) ⇒ `Promise.<string>`

Send CreateAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`CreateAssetTxInput`](#GraphQLClient.CreateAssetTxInput) |

### graphQLClient.sendDeclareTx(params) ⇒ `Promise.<string>`

Send DeclareTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`DeclareTxInput`](#GraphQLClient.DeclareTxInput) |

### graphQLClient.sendDelegateTx(params) ⇒ `Promise.<string>`

Send DelegateTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`DelegateTxInput`](#GraphQLClient.DelegateTxInput) |

### graphQLClient.sendDepositTokenTx(params) ⇒ `Promise.<string>`

Send DepositTokenTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`DepositTokenTxInput`](#GraphQLClient.DepositTokenTxInput) |

### graphQLClient.sendExchangeTx(params) ⇒ `Promise.<string>`

Send ExchangeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`ExchangeTxInput`](#GraphQLClient.ExchangeTxInput) |

### graphQLClient.sendPokeTx(params) ⇒ `Promise.<string>`

Send PokeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                        |
| ------ | ------------------------------------------- |
| params | [`PokeTxInput`](#GraphQLClient.PokeTxInput) |

### graphQLClient.sendRefuelTx(params) ⇒ `Promise.<string>`

Send RefuelTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                            |
| ------ | ----------------------------------------------- |
| params | [`RefuelTxInput`](#GraphQLClient.RefuelTxInput) |

### graphQLClient.sendRetrieveSwapTx(params) ⇒ `Promise.<string>`

Send RetrieveSwapTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`RetrieveSwapTxInput`](#GraphQLClient.RetrieveSwapTxInput) |

### graphQLClient.sendRevokeDelegateTx(params) ⇒ `Promise.<string>`

Send RevokeDelegateTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`RevokeDelegateTxInput`](#GraphQLClient.RevokeDelegateTxInput) |

### graphQLClient.sendRevokeSwapTx(params) ⇒ `Promise.<string>`

Send RevokeSwapTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`RevokeSwapTxInput`](#GraphQLClient.RevokeSwapTxInput) |

### graphQLClient.sendRevokeWithdrawTx(params) ⇒ `Promise.<string>`

Send RevokeWithdrawTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`RevokeWithdrawTxInput`](#GraphQLClient.RevokeWithdrawTxInput) |

### graphQLClient.sendSetupSwapTx(params) ⇒ `Promise.<string>`

Send SetupSwapTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`SetupSwapTxInput`](#GraphQLClient.SetupSwapTxInput) |

### graphQLClient.sendTransferTx(params) ⇒ `Promise.<string>`

Send TransferTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`TransferTxInput`](#GraphQLClient.TransferTxInput) |

### graphQLClient.sendUpdateAssetTx(params) ⇒ `Promise.<string>`

Send UpdateAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpdateAssetTxInput`](#GraphQLClient.UpdateAssetTxInput) |

### graphQLClient.sendUpdateConsensusParamsTx(params) ⇒ `Promise.<string>`

Send UpdateConsensusParamsTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                          |
| ------ | ----------------------------------------------------------------------------- |
| params | [`UpdateConsensusParamsTxInput`](#GraphQLClient.UpdateConsensusParamsTxInput) |

### graphQLClient.sendUpdateValidatorTx(params) ⇒ `Promise.<string>`

Send UpdateValidatorTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`UpdateValidatorTxInput`](#GraphQLClient.UpdateValidatorTxInput) |

### graphQLClient.sendUpgradeNodeTx(params) ⇒ `Promise.<string>`

Send UpgradeNodeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpgradeNodeTxInput`](#GraphQLClient.UpgradeNodeTxInput) |

### graphQLClient.sendWithdrawTokenTx(params) ⇒ `Promise.<string>`

Send WithdrawTokenTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`WithdrawTokenTxInput`](#GraphQLClient.WithdrawTokenTxInput) |

### graphQLClient.encodeAccountMigrateTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a AccountMigrateTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`AccountMigrateTxInput`](#GraphQLClient.AccountMigrateTxInput) |

### graphQLClient.encodeAcquireAssetTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a AcquireAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`AcquireAssetTxInput`](#GraphQLClient.AcquireAssetTxInput) |

### graphQLClient.encodeApproveWithdrawTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a ApproveWithdrawTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`ApproveWithdrawTxInput`](#GraphQLClient.ApproveWithdrawTxInput) |

### graphQLClient.encodeConsumeAssetTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a ConsumeAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`ConsumeAssetTxInput`](#GraphQLClient.ConsumeAssetTxInput) |

### graphQLClient.encodeCreateAssetTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a CreateAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`CreateAssetTxInput`](#GraphQLClient.CreateAssetTxInput) |

### graphQLClient.encodeDeclareTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a DeclareTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`DeclareTxInput`](#GraphQLClient.DeclareTxInput) |

### graphQLClient.encodeDelegateTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a DelegateTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`DelegateTxInput`](#GraphQLClient.DelegateTxInput) |

### graphQLClient.encodeDepositTokenTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a DepositTokenTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`DepositTokenTxInput`](#GraphQLClient.DepositTokenTxInput) |

### graphQLClient.encodeExchangeTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a ExchangeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`ExchangeTxInput`](#GraphQLClient.ExchangeTxInput) |

### graphQLClient.encodePokeTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a PokeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                        |
| ------ | ------------------------------------------- |
| params | [`PokeTxInput`](#GraphQLClient.PokeTxInput) |

### graphQLClient.encodeRefuelTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a RefuelTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                            |
| ------ | ----------------------------------------------- |
| params | [`RefuelTxInput`](#GraphQLClient.RefuelTxInput) |

### graphQLClient.encodeRetrieveSwapTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a RetrieveSwapTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`RetrieveSwapTxInput`](#GraphQLClient.RetrieveSwapTxInput) |

### graphQLClient.encodeRevokeDelegateTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a RevokeDelegateTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`RevokeDelegateTxInput`](#GraphQLClient.RevokeDelegateTxInput) |

### graphQLClient.encodeRevokeSwapTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a RevokeSwapTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`RevokeSwapTxInput`](#GraphQLClient.RevokeSwapTxInput) |

### graphQLClient.encodeRevokeWithdrawTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a RevokeWithdrawTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`RevokeWithdrawTxInput`](#GraphQLClient.RevokeWithdrawTxInput) |

### graphQLClient.encodeSetupSwapTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a SetupSwapTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`SetupSwapTxInput`](#GraphQLClient.SetupSwapTxInput) |

### graphQLClient.encodeTransferTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a TransferTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`TransferTxInput`](#GraphQLClient.TransferTxInput) |

### graphQLClient.encodeUpdateAssetTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a UpdateAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpdateAssetTxInput`](#GraphQLClient.UpdateAssetTxInput) |

### graphQLClient.encodeUpdateConsensusParamsTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a UpdateConsensusParamsTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                          |
| ------ | ----------------------------------------------------------------------------- |
| params | [`UpdateConsensusParamsTxInput`](#GraphQLClient.UpdateConsensusParamsTxInput) |

### graphQLClient.encodeUpdateValidatorTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a UpdateValidatorTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`UpdateValidatorTxInput`](#GraphQLClient.UpdateValidatorTxInput) |

### graphQLClient.encodeUpgradeNodeTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a UpgradeNodeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpgradeNodeTxInput`](#GraphQLClient.UpgradeNodeTxInput) |

### graphQLClient.encodeWithdrawTokenTx(params) ⇒ [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput)

Encode a WithdrawTokenTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`WithdrawTokenTxInput`](#GraphQLClient.WithdrawTokenTxInput) |

### graphQLClient.getAccountState(params) ⇒ [`Promise.<ResponseGetAccountState>`](#GraphQLClient.ResponseGetAccountState)

getAccountState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetAccountState>`](#GraphQLClient.ResponseGetAccountState) - Checkout [ResponseGetAccountState](#GraphQLClient.ResponseGetAccountState) for resolved data format  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`GetAccountStateParams`](#GraphQLClient.GetAccountStateParams) |

### graphQLClient.getAssetState(params) ⇒ [`Promise.<ResponseGetAssetState>`](#GraphQLClient.ResponseGetAssetState)

getAssetState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetAssetState>`](#GraphQLClient.ResponseGetAssetState) - Checkout [ResponseGetAssetState](#GraphQLClient.ResponseGetAssetState) for resolved data format  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`GetAssetStateParams`](#GraphQLClient.GetAssetStateParams) |

### graphQLClient.getBlock(params) ⇒ [`Promise.<ResponseGetBlock>`](#GraphQLClient.ResponseGetBlock)

getBlock

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetBlock>`](#GraphQLClient.ResponseGetBlock) - Checkout [ResponseGetBlock](#GraphQLClient.ResponseGetBlock) for resolved data format  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`GetBlockParams`](#GraphQLClient.GetBlockParams) |

### graphQLClient.getBlocks(params) ⇒ [`Promise.<ResponseGetBlocks>`](#GraphQLClient.ResponseGetBlocks)

getBlocks

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetBlocks>`](#GraphQLClient.ResponseGetBlocks) - Checkout [ResponseGetBlocks](#GraphQLClient.ResponseGetBlocks) for resolved data format  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`GetBlocksParams`](#GraphQLClient.GetBlocksParams) |

### graphQLClient.getChainInfo() ⇒ [`Promise.<ResponseGetChainInfo>`](#GraphQLClient.ResponseGetChainInfo)

getChainInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetChainInfo>`](#GraphQLClient.ResponseGetChainInfo) - Checkout [ResponseGetChainInfo](#GraphQLClient.ResponseGetChainInfo) for resolved data format  

### graphQLClient.getConfig(params) ⇒ [`Promise.<ResponseGetConfig>`](#GraphQLClient.ResponseGetConfig)

getConfig

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetConfig>`](#GraphQLClient.ResponseGetConfig) - Checkout [ResponseGetConfig](#GraphQLClient.ResponseGetConfig) for resolved data format  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`GetConfigParams`](#GraphQLClient.GetConfigParams) |

### graphQLClient.getDelegateState(params) ⇒ [`Promise.<ResponseGetDelegateState>`](#GraphQLClient.ResponseGetDelegateState)

getDelegateState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetDelegateState>`](#GraphQLClient.ResponseGetDelegateState) - Checkout [ResponseGetDelegateState](#GraphQLClient.ResponseGetDelegateState) for resolved data format  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`GetDelegateStateParams`](#GraphQLClient.GetDelegateStateParams) |

### graphQLClient.getForgeState(params) ⇒ [`Promise.<ResponseGetForgeState>`](#GraphQLClient.ResponseGetForgeState)

getForgeState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetForgeState>`](#GraphQLClient.ResponseGetForgeState) - Checkout [ResponseGetForgeState](#GraphQLClient.ResponseGetForgeState) for resolved data format  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`GetForgeStateParams`](#GraphQLClient.GetForgeStateParams) |

### graphQLClient.getForgeStats() ⇒ [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats)

getForgeStats

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

### graphQLClient.getForgeStatsByDay(params) ⇒ [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats)

getForgeStatsByDay

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [`GetForgeStatsByDayParams`](#GraphQLClient.GetForgeStatsByDayParams) |

### graphQLClient.getForgeStatsByHour(params) ⇒ [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats)

getForgeStatsByHour

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetForgeStats>`](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [`GetForgeStatsByHourParams`](#GraphQLClient.GetForgeStatsByHourParams) |

### graphQLClient.getHealthStatus() ⇒ [`Promise.<ResponseGetHealthStatus>`](#GraphQLClient.ResponseGetHealthStatus)

getHealthStatus

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetHealthStatus>`](#GraphQLClient.ResponseGetHealthStatus) - Checkout [ResponseGetHealthStatus](#GraphQLClient.ResponseGetHealthStatus) for resolved data format  

### graphQLClient.getNetInfo() ⇒ [`Promise.<ResponseGetNetInfo>`](#GraphQLClient.ResponseGetNetInfo)

getNetInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetNetInfo>`](#GraphQLClient.ResponseGetNetInfo) - Checkout [ResponseGetNetInfo](#GraphQLClient.ResponseGetNetInfo) for resolved data format  

### graphQLClient.getNodeInfo() ⇒ [`Promise.<ResponseGetNodeInfo>`](#GraphQLClient.ResponseGetNodeInfo)

getNodeInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetNodeInfo>`](#GraphQLClient.ResponseGetNodeInfo) - Checkout [ResponseGetNodeInfo](#GraphQLClient.ResponseGetNodeInfo) for resolved data format  

### graphQLClient.getSimulatorStatus() ⇒ [`Promise.<ResponseGetSimulatorStatus>`](#GraphQLClient.ResponseGetSimulatorStatus)

getSimulatorStatus

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetSimulatorStatus>`](#GraphQLClient.ResponseGetSimulatorStatus) - Checkout [ResponseGetSimulatorStatus](#GraphQLClient.ResponseGetSimulatorStatus) for resolved data format  

### graphQLClient.getSwapState(params) ⇒ [`Promise.<ResponseGetSwapState>`](#GraphQLClient.ResponseGetSwapState)

getSwapState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetSwapState>`](#GraphQLClient.ResponseGetSwapState) - Checkout [ResponseGetSwapState](#GraphQLClient.ResponseGetSwapState) for resolved data format  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`GetSwapStateParams`](#GraphQLClient.GetSwapStateParams) |

### graphQLClient.getSwapStatistics(params) ⇒ [`Promise.<ResponseGetSwapStatistics>`](#GraphQLClient.ResponseGetSwapStatistics)

getSwapStatistics

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetSwapStatistics>`](#GraphQLClient.ResponseGetSwapStatistics) - Checkout [ResponseGetSwapStatistics](#GraphQLClient.ResponseGetSwapStatistics) for resolved data format  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [`GetSwapStatisticsParams`](#GraphQLClient.GetSwapStatisticsParams) |

### graphQLClient.getTx(params) ⇒ [`Promise.<ResponseGetTx>`](#GraphQLClient.ResponseGetTx)

getTx

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetTx>`](#GraphQLClient.ResponseGetTx) - Checkout [ResponseGetTx](#GraphQLClient.ResponseGetTx) for resolved data format  

| Param  | Type                                        |
| ------ | ------------------------------------------- |
| params | [`GetTxParams`](#GraphQLClient.GetTxParams) |

### graphQLClient.getUnconfirmedTxs(params) ⇒ [`Promise.<ResponseGetUnconfirmedTxs>`](#GraphQLClient.ResponseGetUnconfirmedTxs)

getUnconfirmedTxs

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetUnconfirmedTxs>`](#GraphQLClient.ResponseGetUnconfirmedTxs) - Checkout [ResponseGetUnconfirmedTxs](#GraphQLClient.ResponseGetUnconfirmedTxs) for resolved data format  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [`GetUnconfirmedTxsParams`](#GraphQLClient.GetUnconfirmedTxsParams) |

### graphQLClient.getValidatorsInfo() ⇒ [`Promise.<ResponseGetValidatorsInfo>`](#GraphQLClient.ResponseGetValidatorsInfo)

getValidatorsInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseGetValidatorsInfo>`](#GraphQLClient.ResponseGetValidatorsInfo) - Checkout [ResponseGetValidatorsInfo](#GraphQLClient.ResponseGetValidatorsInfo) for resolved data format  

### graphQLClient.listAssetTransactions(params) ⇒ [`Promise.<ResponseListAssetTransactions>`](#GraphQLClient.ResponseListAssetTransactions)

listAssetTransactions

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListAssetTransactions>`](#GraphQLClient.ResponseListAssetTransactions) - Checkout [ResponseListAssetTransactions](#GraphQLClient.ResponseListAssetTransactions) for resolved data format  

| Param  | Type                                                                        |
| ------ | --------------------------------------------------------------------------- |
| params | [`ListAssetTransactionsParams`](#GraphQLClient.ListAssetTransactionsParams) |

### graphQLClient.listAssets(params) ⇒ [`Promise.<ResponseListAssets>`](#GraphQLClient.ResponseListAssets)

listAssets

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListAssets>`](#GraphQLClient.ResponseListAssets) - Checkout [ResponseListAssets](#GraphQLClient.ResponseListAssets) for resolved data format  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`ListAssetsParams`](#GraphQLClient.ListAssetsParams) |

### graphQLClient.listBlocks(params) ⇒ [`Promise.<ResponseListBlocks>`](#GraphQLClient.ResponseListBlocks)

listBlocks

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListBlocks>`](#GraphQLClient.ResponseListBlocks) - Checkout [ResponseListBlocks](#GraphQLClient.ResponseListBlocks) for resolved data format  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`ListBlocksParams`](#GraphQLClient.ListBlocksParams) |

### graphQLClient.listStakes(params) ⇒ [`Promise.<ResponseListStakes>`](#GraphQLClient.ResponseListStakes)

listStakes

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListStakes>`](#GraphQLClient.ResponseListStakes) - Checkout [ResponseListStakes](#GraphQLClient.ResponseListStakes) for resolved data format  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`ListStakesParams`](#GraphQLClient.ListStakesParams) |

### graphQLClient.listSwap(params) ⇒ [`Promise.<ResponseListSwap>`](#GraphQLClient.ResponseListSwap)

listSwap

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListSwap>`](#GraphQLClient.ResponseListSwap) - Checkout [ResponseListSwap](#GraphQLClient.ResponseListSwap) for resolved data format  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`ListSwapParams`](#GraphQLClient.ListSwapParams) |

### graphQLClient.listTopAccounts(params) ⇒ [`Promise.<ResponseListTopAccounts>`](#GraphQLClient.ResponseListTopAccounts)

listTopAccounts

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListTopAccounts>`](#GraphQLClient.ResponseListTopAccounts) - Checkout [ResponseListTopAccounts](#GraphQLClient.ResponseListTopAccounts) for resolved data format  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`ListTopAccountsParams`](#GraphQLClient.ListTopAccountsParams) |

### graphQLClient.listTransactions(params) ⇒ [`Promise.<ResponseListTransactions>`](#GraphQLClient.ResponseListTransactions)

listTransactions

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseListTransactions>`](#GraphQLClient.ResponseListTransactions) - Checkout [ResponseListTransactions](#GraphQLClient.ResponseListTransactions) for resolved data format  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`ListTransactionsParams`](#GraphQLClient.ListTransactionsParams) |

### graphQLClient.sendTx(params) ⇒ [`Promise.<ResponseSendTx>`](#GraphQLClient.ResponseSendTx)

sendTx

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseSendTx>`](#GraphQLClient.ResponseSendTx) - Checkout [ResponseSendTx](#GraphQLClient.ResponseSendTx) for resolved data format  

| Param  | Type                                          |
| ------ | --------------------------------------------- |
| params | [`SendTxParams`](#GraphQLClient.SendTxParams) |

### graphQLClient.startSimulator() ⇒ [`Promise.<ResponseStartSimulator>`](#GraphQLClient.ResponseStartSimulator)

startSimulator

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseStartSimulator>`](#GraphQLClient.ResponseStartSimulator) - Checkout [ResponseStartSimulator](#GraphQLClient.ResponseStartSimulator) for resolved data format  

### graphQLClient.stopSimulator() ⇒ [`Promise.<ResponseStopSimulator>`](#GraphQLClient.ResponseStopSimulator)

stopSimulator

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseStopSimulator>`](#GraphQLClient.ResponseStopSimulator) - Checkout [ResponseStopSimulator](#GraphQLClient.ResponseStopSimulator) for resolved data format  

### graphQLClient.unsubscribe(params) ⇒ [`Promise.<ResponseUnsubscribe>`](#GraphQLClient.ResponseUnsubscribe)

unsubscribe

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseUnsubscribe>`](#GraphQLClient.ResponseUnsubscribe) - Checkout [ResponseUnsubscribe](#GraphQLClient.ResponseUnsubscribe) for resolved data format  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`UnsubscribeParams`](#GraphQLClient.UnsubscribeParams) |

### graphQLClient.subscribe(params) ⇒ [`Promise.<ResponseSubscribe>`](#GraphQLClient.ResponseSubscribe)

subscribe

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.<ResponseSubscribe>`](#GraphQLClient.ResponseSubscribe) - Checkout [ResponseSubscribe](#GraphQLClient.ResponseSubscribe) for resolved data format  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`SubscribeParams`](#GraphQLClient.SubscribeParams) |

### GraphQLClient.WalletObject : `Object`

Structure of GraphQLClient.WalletObject

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                             |
| --------- | -------------------------------- |
| publicKey | `string`                         |
| secretKey | `string`                         |
| type      | `GraphQLClient~WalletTypeObject` |

### GraphQLClient.WalletTypeObject : `Object`

Structure of GraphQLClient.WalletTypeObject

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     | Description           |
| ------- | -------- | --------------------- |
| pk      | `number` |                       |
| role    | `number` |                       |
| hash    | `number` |                       |
| address | `number` | defaults to base58btc |

### GraphQLClient.TxEncodeOutput : `object`

Structure of GraphQLClient.TxEncodeOutput

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type     | Description                                                                            |
| ------ | -------- | -------------------------------------------------------------------------------------- |
| object | `object` | the transaction object, human readable                                                 |
| buffer | `buffer` | the transaction binary presentation, can be used to signing, encoding to other formats |

### GraphQLClient.AddressFilter : `object`

Structure of GraphQLClient.AddressFilter

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                      |
| ------------ | ------------------------- |
| ...direction | `GraphQLClient.Direction` |
| receiver     | `string`                  |
| sender       | `string`                  |

### GraphQLClient.PageInput : `object`

Structure of GraphQLClient.PageInput

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type                                 |
| ------ | ------------------------------------ |
| cursor | `string`                             |
| order  | `Array.<...GraphQLClient.PageOrder>` |
| size   | `number`                             |

### GraphQLClient.PageOrder : `object`

Structure of GraphQLClient.PageOrder

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| field | `string` |
| type  | `string` |

### GraphQLClient.RangeFilter : `object`

Structure of GraphQLClient.RangeFilter

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| from | `string` |
| to   | `string` |

### GraphQLClient.TimeFilter : `object`

Structure of GraphQLClient.TimeFilter

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| endDateTime   | `string` |
| startDateTime | `string` |

### GraphQLClient.TypeFilter : `object`

Structure of GraphQLClient.TypeFilter

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type                              |
| ----- | --------------------------------- |
| types | `Array.<...GraphQLClient.string>` |

### GraphQLClient.ValidityFilter : `object`

Structure of GraphQLClient.ValidityFilter

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                     |
| ----------- | ------------------------ |
| ...validity | `GraphQLClient.Validity` |

### GraphQLClient.AbciServerStatus : `object`

Structure of GraphQLClient.AbciServerStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| abciConsensus | `string` |
| abciInfo      | `string` |

### GraphQLClient.AccountConfig : `object`

Structure of GraphQLClient.AccountConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| balance | `string` |
| pk      | `string` |

### GraphQLClient.AccountConfigEntry : `object`

Structure of GraphQLClient.AccountConfigEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                            |
| -------- | ----------------------------------------------- |
| key      | `string`                                        |
| ...value | [`AccountConfig`](#GraphQLClient.AccountConfig) |

### GraphQLClient.AccountMigrateTx : `object`

Structure of GraphQLClient.AccountMigrateTx

Checkout the following snippet for the format of AccountMigrateTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                      |
| ------- | ----------------------------------------- |
| address | `string`                                  |
| ...data | [`Any`](#GraphQLClient.Any)               |
| pk      | `string`                                  |
| ...type | [`WalletType`](#GraphQLClient.WalletType) |

### GraphQLClient.AccountState : `object`

Structure of GraphQLClient.AccountState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                            |
| ---------------- | ----------------------------------------------- |
| address          | `string`                                        |
| balance          | `string`                                        |
| ...context       | [`StateContext`](#GraphQLClient.StateContext)   |
| ...data          | [`Any`](#GraphQLClient.Any)                     |
| issuer           | `string`                                        |
| migratedFrom     | `Array.<...GraphQLClient.string>`               |
| migratedTo       | `Array.<...GraphQLClient.string>`               |
| moniker          | `string`                                        |
| nonce            | `string`                                        |
| numAssets        | `string`                                        |
| numTxs           | `string`                                        |
| pk               | `string`                                        |
| ...poke          | [`PokeInfo`](#GraphQLClient.PokeInfo)           |
| ...stake         | [`StakeContext`](#GraphQLClient.StakeContext)   |
| ...type          | [`WalletType`](#GraphQLClient.WalletType)       |
| ...withdrawItems | [`CircularQueue`](#GraphQLClient.CircularQueue) |

### GraphQLClient.AcquireAssetTx : `object`

Structure of GraphQLClient.AcquireAssetTx

Checkout the following snippet for the format of AcquireAssetTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                 |
| ------- | ------------------------------------ |
| ...data | [`Any`](#GraphQLClient.Any)          |
| specs   | `Array.<...GraphQLClient.AssetSpec>` |
| to      | `string`                             |

### GraphQLClient.Any : `object`

Structure of GraphQLClient.Any

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| typeUrl | `string` |
| value   | `string` |

### GraphQLClient.AssetSpec : `object`

Structure of GraphQLClient.AssetSpec

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| data    | `string` |

### GraphQLClient.AssetState : `object`

Structure of GraphQLClient.AssetState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                          |
| ------------- | --------------------------------------------- |
| address       | `string`                                      |
| consumedTime  | `string`                                      |
| ...context    | [`StateContext`](#GraphQLClient.StateContext) |
| ...data       | [`Any`](#GraphQLClient.Any)                   |
| issuer        | `string`                                      |
| moniker       | `string`                                      |
| owner         | `string`                                      |
| parent        | `string`                                      |
| readonly      | `boolean`                                     |
| ...stake      | [`StakeContext`](#GraphQLClient.StakeContext) |
| transferrable | `boolean`                                     |
| ttl           | `number`                                      |

### GraphQLClient.BlockId : `object`

Structure of GraphQLClient.BlockId

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name           | Type                                            |
| -------------- | ----------------------------------------------- |
| hash           | `string`                                        |
| ...partsHeader | [`PartSetHeader`](#GraphQLClient.PartSetHeader) |

### GraphQLClient.BlockInfo : `object`

Structure of GraphQLClient.BlockInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name               | Type                                       |
| ------------------ | ------------------------------------------ |
| appHash            | `string`                                   |
| consensusHash      | `string`                                   |
| dataHash           | `string`                                   |
| evidenceHash       | `string`                                   |
| height             | `string`                                   |
| invalidTxs         | `Array.<...GraphQLClient.TransactionInfo>` |
| invalidTxsHashes   | `Array.<...GraphQLClient.string>`          |
| ...lastBlockId     | [`BlockId`](#GraphQLClient.BlockId)        |
| lastCommitHash     | `string`                                   |
| lastResultsHash    | `string`                                   |
| nextValidatorsHash | `string`                                   |
| numTxs             | `number`                                   |
| proposer           | `string`                                   |
| time               | `string`                                   |
| totalTxs           | `string`                                   |
| txs                | `Array.<...GraphQLClient.TransactionInfo>` |
| txsHashes          | `Array.<...GraphQLClient.string>`          |
| validatorsHash     | `string`                                   |
| ...version         | [`Version`](#GraphQLClient.Version)        |

### GraphQLClient.BlockInfoSimple : `object`

Structure of GraphQLClient.BlockInfoSimple

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name               | Type                                |
| ------------------ | ----------------------------------- |
| appHash            | `string`                            |
| consensusHash      | `string`                            |
| dataHash           | `string`                            |
| evidenceHash       | `string`                            |
| height             | `string`                            |
| invalidTxsHashes   | `Array.<...GraphQLClient.string>`   |
| ...lastBlockId     | [`BlockId`](#GraphQLClient.BlockId) |
| lastCommitHash     | `string`                            |
| lastResultsHash    | `string`                            |
| nextValidatorsHash | `string`                            |
| numTxs             | `number`                            |
| proposer           | `string`                            |
| time               | `string`                            |
| totalTxs           | `string`                            |
| txsHashes          | `Array.<...GraphQLClient.string>`   |
| validatorsHash     | `string`                            |
| ...version         | [`Version`](#GraphQLClient.Version) |

### GraphQLClient.ChainInfo : `object`

Structure of GraphQLClient.ChainInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                             |
| ---------------- | ------------------------------------------------ |
| address          | `string`                                         |
| appHash          | `string`                                         |
| blockHash        | `string`                                         |
| blockHeight      | `string`                                         |
| blockTime        | `string`                                         |
| consensusVersion | `string`                                         |
| forgeAppsVersion | `Array.<...GraphQLClient.ForgeAppsVersionEntry>` |
| id               | `string`                                         |
| moniker          | `string`                                         |
| network          | `string`                                         |
| supportedTxs     | `Array.<...GraphQLClient.string>`                |
| synced           | `boolean`                                        |
| totalTxs         | `string`                                         |
| version          | `string`                                         |
| votingPower      | `string`                                         |

### GraphQLClient.CircularQueue : `object`

Structure of GraphQLClient.CircularQueue

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                 |
| -------- | ------------------------------------ |
| circular | `boolean`                            |
| fifo     | `boolean`                            |
| items    | `Array.<...GraphQLClient.QueueItem>` |
| maxItems | `number`                             |
| typeUrl  | `string`                             |

### GraphQLClient.CodeInfo : `object`

Structure of GraphQLClient.CodeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type     |
| -------- | -------- |
| binary   | `string` |
| checksum | `string` |

### GraphQLClient.ConsensusParams : `object`

Structure of GraphQLClient.ConsensusParams

Checkout the following snippet for the format of ConsensusParams:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                 |
| ---------------- | ------------------------------------ |
| maxBytes         | `string`                             |
| maxCandidates    | `number`                             |
| maxGas           | `string`                             |
| maxValidators    | `number`                             |
| paramChanged     | `boolean`                            |
| pubKeyTypes      | `Array.<...GraphQLClient.string>`    |
| validatorChanged | `boolean`                            |
| validators       | `Array.<...GraphQLClient.Validator>` |

### GraphQLClient.ConsensusStatus : `object`

Structure of GraphQLClient.ConsensusStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type      |
| ----------- | --------- |
| blockHeight | `string`  |
| health      | `boolean` |
| synced      | `boolean` |

### GraphQLClient.ConsumeAssetTx : `object`

Structure of GraphQLClient.ConsumeAssetTx

Checkout the following snippet for the format of ConsumeAssetTx:

```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "issuer": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| address | `string`                    |
| ...data | [`Any`](#GraphQLClient.Any) |
| issuer  | `string`                    |

### GraphQLClient.CoreProtocol : `object`

Structure of GraphQLClient.CoreProtocol

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| name    | `string` |

### GraphQLClient.CreateAssetTx : `object`

Structure of GraphQLClient.CreateAssetTx

Checkout the following snippet for the format of CreateAssetTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                        |
| ------------- | --------------------------- |
| address       | `string`                    |
| ...data       | [`Any`](#GraphQLClient.Any) |
| moniker       | `string`                    |
| parent        | `string`                    |
| readonly      | `boolean`                   |
| transferrable | `boolean`                   |
| ttl           | `number`                    |

### GraphQLClient.DeclareConfig : `object`

Structure of GraphQLClient.DeclareConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| cost       | `string`  |
| hierarchy  | `number`  |
| restricted | `boolean` |

### GraphQLClient.DeclareTx : `object`

Structure of GraphQLClient.DeclareTx

Checkout the following snippet for the format of DeclareTx:

```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "issuer": "abc",
  "moniker": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| ...data | [`Any`](#GraphQLClient.Any) |
| issuer  | `string`                    |
| moniker | `string`                    |

### GraphQLClient.DelegateConfig : `object`

Structure of GraphQLClient.DelegateConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                              |
| ------------- | --------------------------------- |
| deltaInterval | `number`                          |
| typeUrls      | `Array.<...GraphQLClient.string>` |

### GraphQLClient.DelegateOpState : `object`

Structure of GraphQLClient.DelegateOpState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type     |
| ------------ | -------- |
| balance      | `string` |
| balanceDelta | `string` |
| numTxs       | `string` |
| numTxsDelta  | `string` |
| rule         | `string` |

### GraphQLClient.DelegateState : `object`

Structure of GraphQLClient.DelegateState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                          |
| ---------- | --------------------------------------------- |
| address    | `string`                                      |
| ...context | [`StateContext`](#GraphQLClient.StateContext) |
| ...data    | [`Any`](#GraphQLClient.Any)                   |
| ops        | `Array.<...GraphQLClient.OpsEntry>`           |

### GraphQLClient.DeployProtocolTx : `object`

Structure of GraphQLClient.DeployProtocolTx

Checkout the following snippet for the format of DeployProtocolTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                |
| ----------- | ----------------------------------- |
| address     | `string`                            |
| code        | `Array.<...GraphQLClient.CodeInfo>` |
| ...data     | [`Any`](#GraphQLClient.Any)         |
| description | `string`                            |
| name        | `string`                            |
| namespace   | `string`                            |
| pipeline    | `string`                            |
| proto       | `string`                            |
| sources     | `Array.<...GraphQLClient.string>`   |
| tags        | `Array.<...GraphQLClient.string>`   |
| typeUrls    | `Array.<...GraphQLClient.TypeUrls>` |
| version     | `number`                            |

### GraphQLClient.DiskSpaceStatus : `object`

Structure of GraphQLClient.DiskSpaceStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type     |
| ---------- | -------- |
| forgeUsage | `string` |
| total      | `string` |

### GraphQLClient.Evidence : `object`

Structure of GraphQLClient.Evidence

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type     |
| --------------- | -------- |
| chainId         | `string` |
| chainType       | `string` |
| hash            | `string` |
| originalTx      | `string` |
| receiverAddress | `string` |

### GraphQLClient.ExchangeInfo : `object`

Structure of GraphQLClient.ExchangeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type                              |
| ------ | --------------------------------- |
| assets | `Array.<...GraphQLClient.string>` |
| value  | `string`                          |

### GraphQLClient.ExchangeTx : `object`

Structure of GraphQLClient.ExchangeTx

Checkout the following snippet for the format of ExchangeTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                          |
| ----------- | --------------------------------------------- |
| ...data     | [`Any`](#GraphQLClient.Any)                   |
| expiredAt   | `string`                                      |
| ...receiver | [`ExchangeInfo`](#GraphQLClient.ExchangeInfo) |
| ...sender   | [`ExchangeInfo`](#GraphQLClient.ExchangeInfo) |
| to          | `string`                                      |

### GraphQLClient.ForgeAppsVersionEntry : `object`

Structure of GraphQLClient.ForgeAppsVersionEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| key   | `string` |
| value | `string` |

### GraphQLClient.ForgeState : `object`

Structure of GraphQLClient.ForgeState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name               | Type                                                    |
| ------------------ | ------------------------------------------------------- |
| accountConfig      | `Array.<...GraphQLClient.AccountConfigEntry>`           |
| address            | `string`                                                |
| ...consensus       | [`ConsensusParams`](#GraphQLClient.ConsensusParams)     |
| ...data            | [`Any`](#GraphQLClient.Any)                             |
| gas                | `Array.<...GraphQLClient.GasEntry>`                     |
| protocols          | `Array.<...GraphQLClient.CoreProtocol>`                 |
| stakeSummary       | `Array.<...GraphQLClient.StakeSummaryEntry>`            |
| tasks              | `Array.<...GraphQLClient.TasksEntry>`                   |
| ...token           | [`ForgeToken`](#GraphQLClient.ForgeToken)               |
| ...tokenSwapConfig | [`TokenSwapConfig`](#GraphQLClient.TokenSwapConfig)     |
| ...txConfig        | [`TransactionConfig`](#GraphQLClient.TransactionConfig) |
| ...upgradeInfo     | [`UpgradeInfo`](#GraphQLClient.UpgradeInfo)             |
| version            | `string`                                                |

### GraphQLClient.ForgeStats : `object`

Structure of GraphQLClient.ForgeStats

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                   | Type                              |
| ---------------------- | --------------------------------- |
| avgBlockTime           | `number`                          |
| avgTps                 | `number`                          |
| maxTps                 | `number`                          |
| numAccountMigrateTxs   | `Array.<...GraphQLClient.string>` |
| numBlocks              | `Array.<...GraphQLClient.string>` |
| numConsensusUpgradeTxs | `Array.<...GraphQLClient.number>` |
| numConsumeAssetTxs     | `Array.<...GraphQLClient.string>` |
| numCreateAssetTxs      | `Array.<...GraphQLClient.string>` |
| numDeclareFileTxs      | `Array.<...GraphQLClient.string>` |
| numDeclareTxs          | `Array.<...GraphQLClient.string>` |
| numExchangeTxs         | `Array.<...GraphQLClient.string>` |
| numPokeTxs             | `Array.<...GraphQLClient.string>` |
| numStakeTxs            | `Array.<...GraphQLClient.string>` |
| numStakes              | `Array.<...GraphQLClient.string>` |
| numSysUpgradeTxs       | `Array.<...GraphQLClient.number>` |
| numTransferTxs         | `Array.<...GraphQLClient.string>` |
| numTxs                 | `Array.<...GraphQLClient.string>` |
| numUpdateAssetTxs      | `Array.<...GraphQLClient.string>` |
| numValidators          | `Array.<...GraphQLClient.number>` |
| tps                    | `Array.<...GraphQLClient.number>` |

### GraphQLClient.ForgeStatus : `object`

Structure of GraphQLClient.ForgeStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                                  |
| ------------- | ----------------------------------------------------- |
| ...abciServer | [`AbciServerStatus`](#GraphQLClient.AbciServerStatus) |
| abiServer     | `string`                                              |
| forgeWeb      | `string`                                              |
| health        | `boolean`                                             |

### GraphQLClient.ForgeToken : `object`

Structure of GraphQLClient.ForgeToken

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| decimal       | `number` |
| description   | `string` |
| icon          | `string` |
| inflationRate | `number` |
| initialSupply | `string` |
| name          | `string` |
| symbol        | `string` |
| totalSupply   | `string` |
| unit          | `string` |

### GraphQLClient.GasEntry : `object`

Structure of GraphQLClient.GasEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| key   | `string` |
| value | `number` |

### GraphQLClient.GeoInfo : `object`

Structure of GraphQLClient.GeoInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type     |
| --------- | -------- |
| city      | `string` |
| country   | `string` |
| latitude  | `number` |
| longitude | `number` |

### GraphQLClient.Header : `object`

Structure of GraphQLClient.Header

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name               | Type                                |
| ------------------ | ----------------------------------- |
| appHash            | `string`                            |
| chainId            | `string`                            |
| consensusHash      | `string`                            |
| dataHash           | `string`                            |
| evidenceHash       | `string`                            |
| height             | `string`                            |
| ...lastBlockId     | [`BlockId`](#GraphQLClient.BlockId) |
| lastCommitHash     | `string`                            |
| lastResultsHash    | `string`                            |
| nextValidatorsHash | `string`                            |
| numTxs             | `string`                            |
| proposerAddress    | `string`                            |
| time               | `string`                            |
| totalTxs           | `string`                            |
| validatorsHash     | `string`                            |
| ...version         | [`Version`](#GraphQLClient.Version) |

### GraphQLClient.HealthStatus : `object`

Structure of GraphQLClient.HealthStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                                                |
| ------------ | --------------------------------------------------- |
| ...consensus | [`ConsensusStatus`](#GraphQLClient.ConsensusStatus) |
| ...forge     | [`ForgeStatus`](#GraphQLClient.ForgeStatus)         |
| ...network   | [`NetworkStatus`](#GraphQLClient.NetworkStatus)     |
| ...storage   | [`StorageStatus`](#GraphQLClient.StorageStatus)     |

### GraphQLClient.IndexedAccountState : `object`

Structure of GraphQLClient.IndexedAccountState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                | Type                              |
| ------------------- | --------------------------------- |
| address             | `string`                          |
| balance             | `string`                          |
| genesisTime         | `string`                          |
| migratedFrom        | `string`                          |
| migratedTo          | `string`                          |
| moniker             | `string`                          |
| nonce               | `string`                          |
| numAssets           | `string`                          |
| numTxs              | `string`                          |
| recentNumTxs        | `Array.<...GraphQLClient.string>` |
| renaissanceTime     | `string`                          |
| totalReceivedStakes | `string`                          |
| totalStakes         | `string`                          |
| totalUnstakes       | `string`                          |

### GraphQLClient.IndexedAssetState : `object`

Structure of GraphQLClient.IndexedAssetState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type                        |
| --------------- | --------------------------- |
| address         | `string`                    |
| consumedTime    | `string`                    |
| ...data         | [`Any`](#GraphQLClient.Any) |
| genesisTime     | `string`                    |
| issuer          | `string`                    |
| moniker         | `string`                    |
| owner           | `string`                    |
| parent          | `string`                    |
| readonly        | `boolean`                   |
| renaissanceTime | `string`                    |
| transferrable   | `boolean`                   |
| ttl             | `string`                    |

### GraphQLClient.IndexedBlock : `object`

Structure of GraphQLClient.IndexedBlock

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| height        | `string` |
| numInvalidTxs | `string` |
| numTxs        | `string` |
| proposer      | `string` |
| time          | `string` |

### GraphQLClient.IndexedStakeState : `object`

Structure of GraphQLClient.IndexedStakeState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type     |
| --------------- | -------- |
| address         | `string` |
| balance         | `string` |
| genesisTime     | `string` |
| message         | `string` |
| receiver        | `string` |
| renaissanceTime | `string` |
| sender          | `string` |
| type            | `number` |

### GraphQLClient.IndexedTransaction : `object`

Structure of GraphQLClient.IndexedTransaction

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                  |
| hash     | `string`                                    |
| receiver | `string`                                    |
| sender   | `string`                                    |
| time     | `string`                                    |
| ...tx    | [`Transaction`](#GraphQLClient.Transaction) |
| type     | `string`                                    |
| valid    | `boolean`                                   |

### GraphQLClient.KvPair : `object`

Structure of GraphQLClient.KvPair

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| key   | `string` |
| value | `string` |

### GraphQLClient.LastCommitInfo : `object`

Structure of GraphQLClient.LastCommitInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type                                |
| ----- | ----------------------------------- |
| round | `number`                            |
| votes | `Array.<...GraphQLClient.VoteInfo>` |

### GraphQLClient.Multisig : `object`

Structure of GraphQLClient.Multisig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                        |
| --------- | --------------------------- |
| ...data   | [`Any`](#GraphQLClient.Any) |
| delegator | `string`                    |
| pk        | `string`                    |
| signature | `string`                    |
| signer    | `string`                    |

### GraphQLClient.NetInfo : `object`

Structure of GraphQLClient.NetInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                                |
| --------- | ----------------------------------- |
| listeners | `Array.<...GraphQLClient.string>`   |
| listening | `boolean`                           |
| nPeers    | `number`                            |
| peers     | `Array.<...GraphQLClient.PeerInfo>` |

### GraphQLClient.NetworkStatus : `object`

Structure of GraphQLClient.NetworkStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type      |
| -------- | --------- |
| health   | `boolean` |
| numPeers | `number`  |

### GraphQLClient.NodeInfo : `object`

Structure of GraphQLClient.NodeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                             |
| ---------------- | ------------------------------------------------ |
| address          | `string`                                         |
| appHash          | `string`                                         |
| blockHash        | `string`                                         |
| blockHeight      | `string`                                         |
| blockTime        | `string`                                         |
| consensusVersion | `string`                                         |
| forgeAppsVersion | `Array.<...GraphQLClient.ForgeAppsVersionEntry>` |
| ...geoInfo       | [`GeoInfo`](#GraphQLClient.GeoInfo)              |
| id               | `string`                                         |
| ip               | `string`                                         |
| moniker          | `string`                                         |
| network          | `string`                                         |
| p2pAddress       | `string`                                         |
| supportedTxs     | `Array.<...GraphQLClient.string>`                |
| synced           | `boolean`                                        |
| totalTxs         | `string`                                         |
| version          | `string`                                         |
| votingPower      | `string`                                         |

### GraphQLClient.OpsEntry : `object`

Structure of GraphQLClient.OpsEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                                |
| -------- | --------------------------------------------------- |
| key      | `string`                                            |
| ...value | [`DelegateOpState`](#GraphQLClient.DelegateOpState) |

### GraphQLClient.PageInfo : `object`

Structure of GraphQLClient.PageInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type      |
| ------ | --------- |
| cursor | `string`  |
| next   | `boolean` |
| total  | `number`  |

### GraphQLClient.PartSetHeader : `object`

Structure of GraphQLClient.PartSetHeader

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| hash  | `string` |
| total | `number` |

### GraphQLClient.PeerInfo : `object`

Structure of GraphQLClient.PeerInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                |
| ---------------- | ----------------------------------- |
| consensusVersion | `string`                            |
| ...geoInfo       | [`GeoInfo`](#GraphQLClient.GeoInfo) |
| id               | `string`                            |
| ip               | `string`                            |
| moniker          | `string`                            |
| network          | `string`                            |

### GraphQLClient.PokeConfig : `object`

Structure of GraphQLClient.PokeConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| amount     | `string`  |
| dailyLimit | `string`  |
| enabled    | `boolean` |

### GraphQLClient.PokeInfo : `object`

Structure of GraphQLClient.PokeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type     |
| ---------- | -------- |
| amount     | `string` |
| dailyLimit | `string` |
| leftover   | `string` |

### GraphQLClient.PokeTx : `object`

Structure of GraphQLClient.PokeTx

Checkout the following snippet for the format of PokeTx:

```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "date": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| address | `string`                    |
| ...data | [`Any`](#GraphQLClient.Any) |
| date    | `string`                    |

### GraphQLClient.ProtocolState : `object`

Structure of GraphQLClient.ProtocolState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                                                  |
| ------------ | ----------------------------------------------------- |
| address      | `string`                                              |
| ...context   | [`StateContext`](#GraphQLClient.StateContext)         |
| ...data      | [`Any`](#GraphQLClient.Any)                           |
| group        | `string`                                              |
| ...itx       | [`DeployProtocolTx`](#GraphQLClient.DeployProtocolTx) |
| migratedFrom | `Array.<...GraphQLClient.string>`                     |
| migratedTo   | `Array.<...GraphQLClient.string>`                     |
| rootHash     | `string`                                              |
| status       | `string`                                              |

### GraphQLClient.PubKey : `object`

Structure of GraphQLClient.PubKey

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| data | `string` |
| type | `string` |

### GraphQLClient.QueueItem : `object`

Structure of GraphQLClient.QueueItem

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| hash  | `string` |
| value | `string` |

### GraphQLClient.RequestBeginBlock : `object`

Structure of GraphQLClient.RequestBeginBlock

Checkout the following snippet for the format of RequestBeginBlock:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                | Type                                              |
| ------------------- | ------------------------------------------------- |
| byzantineValidators | `Array.<...GraphQLClient.Evidence>`               |
| hash                | `string`                                          |
| ...header           | [`Header`](#GraphQLClient.Header)                 |
| ...lastCommitInfo   | [`LastCommitInfo`](#GraphQLClient.LastCommitInfo) |

### GraphQLClient.RequestEndBlock : `object`

Structure of GraphQLClient.RequestEndBlock

Checkout the following snippet for the format of RequestEndBlock:

```json
{
  "height": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| height | `string` |

### GraphQLClient.ResponseGetAccountState : `object`

Structure of GraphQLClient.ResponseGetAccountState

Checkout the following snippet for the format of ResponseGetAccountState:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                    |
| ...state | [`AccountState`](#GraphQLClient.AccountState) |

### GraphQLClient.ResponseGetAssetState : `object`

Structure of GraphQLClient.ResponseGetAssetState

Checkout the following snippet for the format of ResponseGetAssetState:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                      |
| -------- | ----------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                |
| ...state | [`AssetState`](#GraphQLClient.AssetState) |

### GraphQLClient.ResponseGetBlock : `object`

Structure of GraphQLClient.ResponseGetBlock

Checkout the following snippet for the format of ResponseGetBlock:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                    |
| -------- | --------------------------------------- |
| ...block | [`BlockInfo`](#GraphQLClient.BlockInfo) |
| ...code  | `GraphQLClient.StatusCode`              |

### GraphQLClient.ResponseGetBlocks : `object`

Structure of GraphQLClient.ResponseGetBlocks

Checkout the following snippet for the format of ResponseGetBlocks:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                       |
| ------- | ------------------------------------------ |
| blocks  | `Array.<...GraphQLClient.BlockInfoSimple>` |
| ...code | `GraphQLClient.StatusCode`                 |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)      |

### GraphQLClient.ResponseGetChainInfo : `object`

Structure of GraphQLClient.ResponseGetChainInfo

Checkout the following snippet for the format of ResponseGetChainInfo:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                    |
| ------- | --------------------------------------- |
| ...code | `GraphQLClient.StatusCode`              |
| ...info | [`ChainInfo`](#GraphQLClient.ChainInfo) |

### GraphQLClient.ResponseGetConfig : `object`

Structure of GraphQLClient.ResponseGetConfig

Checkout the following snippet for the format of ResponseGetConfig:

```json
{
  "code": "INVALID_LOCK_STATUS",
  "config": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |
| config  | `string`                   |

### GraphQLClient.ResponseGetDelegateState : `object`

Structure of GraphQLClient.ResponseGetDelegateState

Checkout the following snippet for the format of ResponseGetDelegateState:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                            |
| -------- | ----------------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                      |
| ...state | [`DelegateState`](#GraphQLClient.DelegateState) |

### GraphQLClient.ResponseGetForgeState : `object`

Structure of GraphQLClient.ResponseGetForgeState

Checkout the following snippet for the format of ResponseGetForgeState:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                      |
| -------- | ----------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                |
| ...state | [`ForgeState`](#GraphQLClient.ForgeState) |

### GraphQLClient.ResponseGetForgeStats : `object`

Structure of GraphQLClient.ResponseGetForgeStats

Checkout the following snippet for the format of ResponseGetForgeStats:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                      |
| ------------- | ----------------------------------------- |
| ...code       | `GraphQLClient.StatusCode`                |
| ...forgeStats | [`ForgeStats`](#GraphQLClient.ForgeStats) |

### GraphQLClient.ResponseGetHealthStatus : `object`

Structure of GraphQLClient.ResponseGetHealthStatus

Checkout the following snippet for the format of ResponseGetHealthStatus:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type                                          |
| --------------- | --------------------------------------------- |
| ...code         | `GraphQLClient.StatusCode`                    |
| ...healthStatus | [`HealthStatus`](#GraphQLClient.HealthStatus) |

### GraphQLClient.ResponseGetNetInfo : `object`

Structure of GraphQLClient.ResponseGetNetInfo

Checkout the following snippet for the format of ResponseGetNetInfo:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| ...code    | `GraphQLClient.StatusCode`          |
| ...netInfo | [`NetInfo`](#GraphQLClient.NetInfo) |

### GraphQLClient.ResponseGetNodeInfo : `object`

Structure of GraphQLClient.ResponseGetNodeInfo

Checkout the following snippet for the format of ResponseGetNodeInfo:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | `GraphQLClient.StatusCode`            |
| ...info | [`NodeInfo`](#GraphQLClient.NodeInfo) |

### GraphQLClient.ResponseGetSimulatorStatus : `object`

Structure of GraphQLClient.ResponseGetSimulatorStatus

Checkout the following snippet for the format of ResponseGetSimulatorStatus:

```json
{
  "code": "INVALID_LOCK_STATUS",
  "result": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |
| result  | `string`                   |

### GraphQLClient.ResponseGetSwapState : `object`

Structure of GraphQLClient.ResponseGetSwapState

Checkout the following snippet for the format of ResponseGetSwapState:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                    |
| -------- | --------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`              |
| ...state | [`SwapState`](#GraphQLClient.SwapState) |

### GraphQLClient.ResponseGetSwapStatistics : `object`

Structure of GraphQLClient.ResponseGetSwapStatistics

Checkout the following snippet for the format of ResponseGetSwapStatistics:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                              |
| ------------- | ------------------------------------------------- |
| ...code       | `GraphQLClient.StatusCode`                        |
| ...statistics | [`SwapStatistics`](#GraphQLClient.SwapStatistics) |

### GraphQLClient.ResponseGetTx : `object`

Structure of GraphQLClient.ResponseGetTx

Checkout the following snippet for the format of ResponseGetTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                                |
| ------- | --------------------------------------------------- |
| ...code | `GraphQLClient.StatusCode`                          |
| ...info | [`TransactionInfo`](#GraphQLClient.TransactionInfo) |

### GraphQLClient.ResponseGetUnconfirmedTxs : `object`

Structure of GraphQLClient.ResponseGetUnconfirmedTxs

Checkout the following snippet for the format of ResponseGetUnconfirmedTxs:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name              | Type                                              |
| ----------------- | ------------------------------------------------- |
| ...code           | `GraphQLClient.StatusCode`                        |
| ...page           | [`PageInfo`](#GraphQLClient.PageInfo)             |
| ...unconfirmedTxs | [`UnconfirmedTxs`](#GraphQLClient.UnconfirmedTxs) |

### GraphQLClient.ResponseGetValidatorsInfo : `object`

Structure of GraphQLClient.ResponseGetValidatorsInfo

Checkout the following snippet for the format of ResponseGetValidatorsInfo:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name              | Type                                              |
| ----------------- | ------------------------------------------------- |
| ...code           | `GraphQLClient.StatusCode`                        |
| ...validatorsInfo | [`ValidatorsInfo`](#GraphQLClient.ValidatorsInfo) |

### GraphQLClient.ResponseListAssetTransactions : `object`

Structure of GraphQLClient.ResponseListAssetTransactions

Checkout the following snippet for the format of ResponseListAssetTransactions:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                                          |
| ------------ | --------------------------------------------- |
| ...code      | `GraphQLClient.StatusCode`                    |
| ...page      | [`PageInfo`](#GraphQLClient.PageInfo)         |
| transactions | `Array.<...GraphQLClient.IndexedTransaction>` |

### GraphQLClient.ResponseListAssets : `object`

Structure of GraphQLClient.ResponseListAssets

Checkout the following snippet for the format of ResponseListAssets:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                                        |
| ---------- | ----------------------------------------------------------- |
| ...account | [`IndexedAccountState`](#GraphQLClient.IndexedAccountState) |
| assets     | `Array.<...GraphQLClient.IndexedAssetState>`                |
| ...code    | `GraphQLClient.StatusCode`                                  |
| ...page    | [`PageInfo`](#GraphQLClient.PageInfo)                       |

### GraphQLClient.ResponseListBlocks : `object`

Structure of GraphQLClient.ResponseListBlocks

Checkout the following snippet for the format of ResponseListBlocks:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                    |
| ------- | --------------------------------------- |
| blocks  | `Array.<...GraphQLClient.IndexedBlock>` |
| ...code | `GraphQLClient.StatusCode`              |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)   |

### GraphQLClient.ResponseListStakes : `object`

Structure of GraphQLClient.ResponseListStakes

Checkout the following snippet for the format of ResponseListStakes:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                         |
| ------- | -------------------------------------------- |
| ...code | `GraphQLClient.StatusCode`                   |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)        |
| stakes  | `Array.<...GraphQLClient.IndexedStakeState>` |

### GraphQLClient.ResponseListSwap : `object`

Structure of GraphQLClient.ResponseListSwap

Checkout the following snippet for the format of ResponseListSwap:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | `GraphQLClient.StatusCode`            |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo) |
| swap    | `Array.<...GraphQLClient.SwapState>`  |

### GraphQLClient.ResponseListTopAccounts : `object`

Structure of GraphQLClient.ResponseListTopAccounts

Checkout the following snippet for the format of ResponseListTopAccounts:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                           |
| -------- | ---------------------------------------------- |
| accounts | `Array.<...GraphQLClient.IndexedAccountState>` |
| ...code  | `GraphQLClient.StatusCode`                     |
| ...page  | [`PageInfo`](#GraphQLClient.PageInfo)          |

### GraphQLClient.ResponseListTransactions : `object`

Structure of GraphQLClient.ResponseListTransactions

Checkout the following snippet for the format of ResponseListTransactions:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                                          |
| ------------ | --------------------------------------------- |
| ...code      | `GraphQLClient.StatusCode`                    |
| ...page      | [`PageInfo`](#GraphQLClient.PageInfo)         |
| transactions | `Array.<...GraphQLClient.IndexedTransaction>` |

### GraphQLClient.ResponseSendTx : `object`

Structure of GraphQLClient.ResponseSendTx

Checkout the following snippet for the format of ResponseSendTx:

```json
{
  "code": "INVALID_LOCK_STATUS",
  "hash": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |
| hash    | `string`                   |

### GraphQLClient.ResponseStartSimulator : `object`

Structure of GraphQLClient.ResponseStartSimulator

Checkout the following snippet for the format of ResponseStartSimulator:

```json
{
  "code": "INVALID_LOCK_STATUS"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |

### GraphQLClient.ResponseStopSimulator : `object`

Structure of GraphQLClient.ResponseStopSimulator

Checkout the following snippet for the format of ResponseStopSimulator:

```json
{
  "code": "INVALID_LOCK_STATUS"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |

### GraphQLClient.ResponseSubscribe : `object`

Structure of GraphQLClient.ResponseSubscribe

Checkout the following snippet for the format of ResponseSubscribe:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                     | Type                                                    |
| ------------------------ | ------------------------------------------------------- |
| ...consumeAsset          | [`Transaction`](#GraphQLClient.Transaction)             |
| ...stake                 | [`Transaction`](#GraphQLClient.Transaction)             |
| topic                    | `string`                                                |
| ...assetState            | [`AssetState`](#GraphQLClient.AssetState)               |
| ...stakeState            | [`StakeState`](#GraphQLClient.StakeState)               |
| ...endBlock              | [`RequestEndBlock`](#GraphQLClient.RequestEndBlock)     |
| ...updateAsset           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...revokeWithdraw        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...code                  | `GraphQLClient.StatusCode`                              |
| ...withdrawToken         | [`Transaction`](#GraphQLClient.Transaction)             |
| ...updateConsensusParams | [`Transaction`](#GraphQLClient.Transaction)             |
| ...accountMigrate        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...upgradeNode           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...delegateState         | [`DelegateState`](#GraphQLClient.DelegateState)         |
| ...setupSwap             | [`Transaction`](#GraphQLClient.Transaction)             |
| ...retrieveSwap          | [`Transaction`](#GraphQLClient.Transaction)             |
| ...acquireAsset          | [`Transaction`](#GraphQLClient.Transaction)             |
| ...protocolState         | [`ProtocolState`](#GraphQLClient.ProtocolState)         |
| ...declare               | [`Transaction`](#GraphQLClient.Transaction)             |
| ...forgeState            | [`ForgeState`](#GraphQLClient.ForgeState)               |
| ...activateProtocol      | [`Transaction`](#GraphQLClient.Transaction)             |
| ...depositToken          | [`Transaction`](#GraphQLClient.Transaction)             |
| ...declareFile           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...revokeDelegate        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...exchange              | [`Transaction`](#GraphQLClient.Transaction)             |
| ...poke                  | [`Transaction`](#GraphQLClient.Transaction)             |
| ...accountState          | [`AccountState`](#GraphQLClient.AccountState)           |
| ...delegate              | [`Transaction`](#GraphQLClient.Transaction)             |
| ...swapState             | [`SwapState`](#GraphQLClient.SwapState)                 |
| ...updateValidator       | [`Transaction`](#GraphQLClient.Transaction)             |
| ...sysUpgrade            | [`Transaction`](#GraphQLClient.Transaction)             |
| ...deployProtocol        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...confirm               | [`Transaction`](#GraphQLClient.Transaction)             |
| ...transfer              | [`Transaction`](#GraphQLClient.Transaction)             |
| ...createAsset           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...consensusUpgrade      | [`Transaction`](#GraphQLClient.Transaction)             |
| ...revoke                | [`Transaction`](#GraphQLClient.Transaction)             |
| ...deactivateProtocol    | [`Transaction`](#GraphQLClient.Transaction)             |
| ...beginBlock            | [`RequestBeginBlock`](#GraphQLClient.RequestBeginBlock) |
| ...revokeSwap            | [`Transaction`](#GraphQLClient.Transaction)             |
| ...approveWithdraw       | [`Transaction`](#GraphQLClient.Transaction)             |

### GraphQLClient.ResponseUnsubscribe : `object`

Structure of GraphQLClient.ResponseUnsubscribe

Checkout the following snippet for the format of ResponseUnsubscribe:

```json
{
  "code": "INVALID_LOCK_STATUS"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |

### GraphQLClient.RetrieveSwapTx : `object`

Structure of GraphQLClient.RetrieveSwapTx

Checkout the following snippet for the format of RetrieveSwapTx:

```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "hashkey": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| address | `string`                    |
| ...data | [`Any`](#GraphQLClient.Any) |
| hashkey | `string`                    |

### GraphQLClient.RevokeSwapTx : `object`

Structure of GraphQLClient.RevokeSwapTx

Checkout the following snippet for the format of RevokeSwapTx:

```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| address | `string`                    |
| ...data | [`Any`](#GraphQLClient.Any) |

### GraphQLClient.SetupSwapTx : `object`

Structure of GraphQLClient.SetupSwapTx

Checkout the following snippet for the format of SetupSwapTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                              |
| -------- | --------------------------------- |
| assets   | `Array.<...GraphQLClient.string>` |
| ...data  | [`Any`](#GraphQLClient.Any)       |
| hashlock | `string`                          |
| locktime | `number`                          |
| receiver | `string`                          |
| value    | `string`                          |

### GraphQLClient.StakeConfig : `object`

Structure of GraphQLClient.StakeConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                | Type     |
| ------------------- | -------- |
| timeoutGeneral      | `number` |
| timeoutStakeForNode | `number` |

### GraphQLClient.StakeContext : `object`

Structure of GraphQLClient.StakeContext

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                    | Type                                            |
| ----------------------- | ----------------------------------------------- |
| ...recentReceivedStakes | [`CircularQueue`](#GraphQLClient.CircularQueue) |
| ...recentStakes         | [`CircularQueue`](#GraphQLClient.CircularQueue) |
| totalReceivedStakes     | `string`                                        |
| totalStakes             | `string`                                        |
| totalUnstakes           | `string`                                        |

### GraphQLClient.StakeState : `object`

Structure of GraphQLClient.StakeState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                          |
| ---------- | --------------------------------------------- |
| address    | `string`                                      |
| balance    | `string`                                      |
| ...context | [`StateContext`](#GraphQLClient.StateContext) |
| ...data    | [`Any`](#GraphQLClient.Any)                   |
| from       | `string`                                      |
| message    | `string`                                      |
| to         | `string`                                      |

### GraphQLClient.StakeSummary : `object`

Structure of GraphQLClient.StakeSummary

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                          |
| ------------- | --------------------------------------------- |
| ...context    | [`StateContext`](#GraphQLClient.StateContext) |
| totalStakes   | `string`                                      |
| totalUnstakes | `string`                                      |

### GraphQLClient.StakeSummaryEntry : `object`

Structure of GraphQLClient.StakeSummaryEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| key      | `number`                                      |
| ...value | [`StakeSummary`](#GraphQLClient.StakeSummary) |

### GraphQLClient.StateContext : `object`

Structure of GraphQLClient.StateContext

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                                |
| ---------------- | --------------------------------------------------- |
| genesisTime      | `string`                                            |
| ...genesisTx     | [`TransactionInfo`](#GraphQLClient.TransactionInfo) |
| renaissanceTime  | `string`                                            |
| ...renaissanceTx | [`TransactionInfo`](#GraphQLClient.TransactionInfo) |

### GraphQLClient.StorageStatus : `object`

Structure of GraphQLClient.StorageStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                                |
| ------------- | --------------------------------------------------- |
| ...diskSpace  | [`DiskSpaceStatus`](#GraphQLClient.DiskSpaceStatus) |
| health        | `boolean`                                           |
| indexerServer | `string`                                            |
| stateDb       | `string`                                            |

### GraphQLClient.SwapState : `object`

Structure of GraphQLClient.SwapState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                          |
| ---------- | --------------------------------------------- |
| address    | `string`                                      |
| assets     | `Array.<...GraphQLClient.string>`             |
| ...context | [`StateContext`](#GraphQLClient.StateContext) |
| hash       | `string`                                      |
| hashkey    | `string`                                      |
| hashlock   | `string`                                      |
| locktime   | `number`                                      |
| receiver   | `string`                                      |
| sender     | `string`                                      |
| value      | `string`                                      |

### GraphQLClient.SwapStatistics : `object`

Structure of GraphQLClient.SwapStatistics

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type     |
| --------------- | -------- |
| address         | `string` |
| lockedAssetsIn  | `number` |
| lockedAssetsOut | `number` |
| lockedValueIn   | `string` |
| lockedValueOut  | `string` |

### GraphQLClient.TasksEntry : `object`

Structure of GraphQLClient.TasksEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| key      | `string`                                      |
| ...value | [`UpgradeTasks`](#GraphQLClient.UpgradeTasks) |

### GraphQLClient.TokenSwapConfig : `object`

Structure of GraphQLClient.TokenSwapConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                    | Type     |
| ----------------------- | -------- |
| commissionHolderAddress | `string` |
| commissionRate          | `number` |
| maxCommission           | `string` |
| minCommission           | `string` |
| revokeCommissionRate    | `number` |

### GraphQLClient.Transaction : `object`

Structure of GraphQLClient.Transaction

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                |
| ---------- | ----------------------------------- |
| chainId    | `string`                            |
| delegator  | `string`                            |
| from       | `string`                            |
| ...itx     | `Itx`                               |
| itxJson    | `undefined`                         |
| nonce      | `string`                            |
| pk         | `string`                            |
| signature  | `string`                            |
| signatures | `Array.<...GraphQLClient.Multisig>` |

### GraphQLClient.TransactionConfig : `object`

Structure of GraphQLClient.TransactionConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                                              |
| ------------ | ------------------------------------------------- |
| ...declare   | [`DeclareConfig`](#GraphQLClient.DeclareConfig)   |
| ...delegate  | [`DelegateConfig`](#GraphQLClient.DelegateConfig) |
| maxAssetSize | `number`                                          |
| maxListSize  | `number`                                          |
| maxMultisig  | `number`                                          |
| minimumStake | `string`                                          |
| ...poke      | [`PokeConfig`](#GraphQLClient.PokeConfig)         |
| ...stake     | [`StakeConfig`](#GraphQLClient.StakeConfig)       |

### GraphQLClient.TransactionInfo : `object`

Structure of GraphQLClient.TransactionInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| ...code | `GraphQLClient.StatusCode`                  |
| hash    | `string`                                    |
| height  | `string`                                    |
| index   | `number`                                    |
| tags    | `Array.<...GraphQLClient.KvPair>`           |
| time    | `string`                                    |
| ...tx   | [`Transaction`](#GraphQLClient.Transaction) |

### GraphQLClient.TransferTx : `object`

Structure of GraphQLClient.TransferTx

Checkout the following snippet for the format of TransferTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                              |
| ------- | --------------------------------- |
| assets  | `Array.<...GraphQLClient.string>` |
| ...data | [`Any`](#GraphQLClient.Any)       |
| to      | `string`                          |
| value   | `string`                          |

### GraphQLClient.TypeUrls : `object`

Structure of GraphQLClient.TypeUrls

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| module | `string` |
| url    | `string` |

### GraphQLClient.UnconfirmedTxs : `object`

Structure of GraphQLClient.UnconfirmedTxs

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type                                   |
| ---- | -------------------------------------- |
| nTxs | `number`                               |
| txs  | `Array.<...GraphQLClient.Transaction>` |

### GraphQLClient.UpdateAssetTx : `object`

Structure of GraphQLClient.UpdateAssetTx

Checkout the following snippet for the format of UpdateAssetTx:

```json
{
  "address": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "moniker": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| address | `string`                    |
| ...data | [`Any`](#GraphQLClient.Any) |
| moniker | `string`                    |

### GraphQLClient.UpgradeInfo : `object`

Structure of GraphQLClient.UpgradeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| height  | `string` |
| version | `string` |

### GraphQLClient.UpgradeNodeTx : `object`

Structure of GraphQLClient.UpgradeNodeTx

Checkout the following snippet for the format of UpgradeNodeTx:

```json
{
  "height": "abc",
  "override": true,
  "version": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type      |
| -------- | --------- |
| height   | `string`  |
| override | `boolean` |
| version  | `string`  |

### GraphQLClient.UpgradeTask : `object`

Structure of GraphQLClient.UpgradeTask

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                     |
| -------- | ---------------------------------------- |
| actions  | `Array.<...GraphQLClient.UpgradeAction>` |
| dataHash | `string`                                 |
| ...type  | `GraphQLClient.UpgradeType`              |

### GraphQLClient.UpgradeTasks : `object`

Structure of GraphQLClient.UpgradeTasks

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type                                   |
| ---- | -------------------------------------- |
| item | `Array.<...GraphQLClient.UpgradeTask>` |

### GraphQLClient.Validator : `object`

Structure of GraphQLClient.Validator

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| power   | `string` |

### GraphQLClient.ValidatorInfo : `object`

Structure of GraphQLClient.ValidatorInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                |
| ---------------- | ----------------------------------- |
| address          | `string`                            |
| ...geoInfo       | [`GeoInfo`](#GraphQLClient.GeoInfo) |
| name             | `string`                            |
| proposerPriority | `string`                            |
| ...pubKey        | [`PubKey`](#GraphQLClient.PubKey)   |
| votingPower      | `string`                            |

### GraphQLClient.ValidatorsInfo : `object`

Structure of GraphQLClient.ValidatorsInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                     |
| ----------- | ---------------------------------------- |
| blockHeight | `string`                                 |
| validators  | `Array.<...GraphQLClient.ValidatorInfo>` |

### GraphQLClient.Version : `object`

Structure of GraphQLClient.Version

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| app   | `string` |
| block | `string` |

### GraphQLClient.VoteInfo : `object`

Structure of GraphQLClient.VoteInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type                                    |
| --------------- | --------------------------------------- |
| signedLastBlock | `boolean`                               |
| ...validator    | [`Validator`](#GraphQLClient.Validator) |

### GraphQLClient.WalletType : `object`

Structure of GraphQLClient.WalletType

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                         |
| ---------- | ---------------------------- |
| ...address | `GraphQLClient.EncodingType` |
| ...hash    | `GraphQLClient.HashType`     |
| ...pk      | `GraphQLClient.KeyType`      |
| ...role    | `GraphQLClient.RoleType`     |

### GraphQLClient.GetAccountStateParams : `object`

Structure of GraphQLClient.GetAccountStateParams

Checkout the following snippet for the format of GetAccountStateParams:

```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                              |
| ------- | --------------------------------- |
| address | `string`                          |
| height  | `string`                          |
| keys    | `Array.<...GraphQLClient.string>` |

### GraphQLClient.GetAssetStateParams : `object`

Structure of GraphQLClient.GetAssetStateParams

Checkout the following snippet for the format of GetAssetStateParams:

```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                              |
| ------- | --------------------------------- |
| address | `string`                          |
| height  | `string`                          |
| keys    | `Array.<...GraphQLClient.string>` |

### GraphQLClient.GetBlockParams : `object`

Structure of GraphQLClient.GetBlockParams

Checkout the following snippet for the format of GetBlockParams:

```json
{
  "height": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| height | `string` |

### GraphQLClient.GetBlocksParams : `object`

Structure of GraphQLClient.GetBlocksParams

Checkout the following snippet for the format of GetBlocksParams:

```json
{
  "emptyExcluded": true
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name            | Type                                        |
| --------------- | ------------------------------------------- |
| emptyExcluded   | `boolean`                                   |
| ...heightFilter | [`RangeFilter`](#GraphQLClient.RangeFilter) |
| ...paging       | [`PageInput`](#GraphQLClient.PageInput)     |

### GraphQLClient.GetConfigParams : `object`

Structure of GraphQLClient.GetConfigParams

Checkout the following snippet for the format of GetConfigParams:

```json
{
  "parsed": true
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type      |
| ------ | --------- |
| parsed | `boolean` |

### GraphQLClient.GetDelegateStateParams : `object`

Structure of GraphQLClient.GetDelegateStateParams

Checkout the following snippet for the format of GetDelegateStateParams:

```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                              |
| ------- | --------------------------------- |
| address | `string`                          |
| height  | `string`                          |
| keys    | `Array.<...GraphQLClient.string>` |

### GraphQLClient.GetForgeStateParams : `object`

Structure of GraphQLClient.GetForgeStateParams

Checkout the following snippet for the format of GetForgeStateParams:

```json
{
  "height": "abc",
  "keys": [
    "abc"
  ]
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type                              |
| ------ | --------------------------------- |
| height | `string`                          |
| keys   | `Array.<...GraphQLClient.string>` |

### GraphQLClient.GetForgeStatsByDayParams : `object`

Structure of GraphQLClient.GetForgeStatsByDayParams

Checkout the following snippet for the format of GetForgeStatsByDayParams:

```json
{
  "endDate": "abc",
  "startDate": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type     |
| --------- | -------- |
| endDate   | `string` |
| startDate | `string` |

### GraphQLClient.GetForgeStatsByHourParams : `object`

Structure of GraphQLClient.GetForgeStatsByHourParams

Checkout the following snippet for the format of GetForgeStatsByHourParams:

```json
{
  "date": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| date | `string` |

### GraphQLClient.GetSwapStateParams : `object`

Structure of GraphQLClient.GetSwapStateParams

Checkout the following snippet for the format of GetSwapStateParams:

```json
{
  "address": "abc",
  "height": "abc",
  "keys": [
    "abc"
  ]
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                              |
| ------- | --------------------------------- |
| address | `string`                          |
| height  | `string`                          |
| keys    | `Array.<...GraphQLClient.string>` |

### GraphQLClient.GetSwapStatisticsParams : `object`

Structure of GraphQLClient.GetSwapStatisticsParams

Checkout the following snippet for the format of GetSwapStatisticsParams:

```json
{
  "address": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

### GraphQLClient.GetTxParams : `object`

Structure of GraphQLClient.GetTxParams

Checkout the following snippet for the format of GetTxParams:

```json
{
  "hash": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| hash | `string` |

### GraphQLClient.GetUnconfirmedTxsParams : `object`

Structure of GraphQLClient.GetUnconfirmedTxsParams

Checkout the following snippet for the format of GetUnconfirmedTxsParams:

```json
{}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| ...paging | [`PageInput`](#GraphQLClient.PageInput) |

### GraphQLClient.ListAssetTransactionsParams : `object`

Structure of GraphQLClient.ListAssetTransactionsParams

Checkout the following snippet for the format of ListAssetTransactionsParams:

```json
{
  "address": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| address   | `string`                                |
| ...paging | [`PageInput`](#GraphQLClient.PageInput) |

### GraphQLClient.ListAssetsParams : `object`

Structure of GraphQLClient.ListAssetsParams

Checkout the following snippet for the format of ListAssetsParams:

```json
{
  "ownerAddress": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name         | Type                                    |
| ------------ | --------------------------------------- |
| ownerAddress | `string`                                |
| ...paging    | [`PageInput`](#GraphQLClient.PageInput) |

### GraphQLClient.ListBlocksParams : `object`

Structure of GraphQLClient.ListBlocksParams

Checkout the following snippet for the format of ListBlocksParams:

```json
{
  "proposer": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                   | Type                                        |
| ---------------------- | ------------------------------------------- |
| ...heightFilter        | [`RangeFilter`](#GraphQLClient.RangeFilter) |
| ...numInvalidTxsFilter | [`RangeFilter`](#GraphQLClient.RangeFilter) |
| ...numTxsFilter        | [`RangeFilter`](#GraphQLClient.RangeFilter) |
| ...paging              | [`PageInput`](#GraphQLClient.PageInput)     |
| proposer               | `string`                                    |
| ...timeFilter          | [`TimeFilter`](#GraphQLClient.TimeFilter)   |

### GraphQLClient.ListStakesParams : `object`

Structure of GraphQLClient.ListStakesParams

Checkout the following snippet for the format of ListStakesParams:

```json
{}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                            |
| ---------------- | ----------------------------------------------- |
| ...addressFilter | [`AddressFilter`](#GraphQLClient.AddressFilter) |
| ...paging        | [`PageInput`](#GraphQLClient.PageInput)         |

### GraphQLClient.ListSwapParams : `object`

Structure of GraphQLClient.ListSwapParams

Checkout the following snippet for the format of ListSwapParams:

```json
{
  "available": true,
  "paging": "abc",
  "receiver": "abc",
  "sender": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type      |
| --------- | --------- |
| available | `boolean` |
| paging    | `string`  |
| receiver  | `string`  |
| sender    | `string`  |

### GraphQLClient.ListTopAccountsParams : `object`

Structure of GraphQLClient.ListTopAccountsParams

Checkout the following snippet for the format of ListTopAccountsParams:

```json
{}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                                    |
| --------- | --------------------------------------- |
| ...paging | [`PageInput`](#GraphQLClient.PageInput) |

### GraphQLClient.ListTransactionsParams : `object`

Structure of GraphQLClient.ListTransactionsParams

Checkout the following snippet for the format of ListTransactionsParams:

```json
{}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name              | Type                                              |
| ----------------- | ------------------------------------------------- |
| ...addressFilter  | [`AddressFilter`](#GraphQLClient.AddressFilter)   |
| ...paging         | [`PageInput`](#GraphQLClient.PageInput)           |
| ...timeFilter     | [`TimeFilter`](#GraphQLClient.TimeFilter)         |
| ...typeFilter     | [`TypeFilter`](#GraphQLClient.TypeFilter)         |
| ...validityFilter | [`ValidityFilter`](#GraphQLClient.ValidityFilter) |

### GraphQLClient.SendTxParams : `object`

Structure of GraphQLClient.SendTxParams

Checkout the following snippet for the format of SendTxParams:

```json
{
  "commit": true,
  "token": "abc",
  "tx": "abc",
  "wallet": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type      |
| ------ | --------- |
| commit | `boolean` |
| token  | `string`  |
| tx     | `string`  |
| wallet | `string`  |

### GraphQLClient.UnsubscribeParams : `object`

Structure of GraphQLClient.UnsubscribeParams

Checkout the following snippet for the format of UnsubscribeParams:

```json
{
  "topic": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| topic | `string` |

### GraphQLClient.SubscribeParams : `object`

Structure of GraphQLClient.SubscribeParams

Checkout the following snippet for the format of SubscribeParams:

```json
{
  "filter": "abc",
  "topic": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| filter | `string` |
| topic  | `string` |

### GraphQLClient.AccountMigrateTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                                  | Description                                                                                   |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                              |                                                                                               |
| input.tx              | `object`                                              | data of the transaction                                                                       |
| input.tx.itx          | [`AccountMigrateTx`](#GraphQLClient.AccountMigrateTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                              | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                              | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                              | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                              | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                              | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                               | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                              | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                              | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.AcquireAssetTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                              | Description                                                                                   |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                          |                                                                                               |
| input.tx              | `object`                                          | data of the transaction                                                                       |
| input.tx.itx          | [`AcquireAssetTx`](#GraphQLClient.AcquireAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.ApproveWithdrawTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.ApproveWithdrawTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.ConsumeAssetTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                              | Description                                                                                   |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                          |                                                                                               |
| input.tx              | `object`                                          | data of the transaction                                                                       |
| input.tx.itx          | [`ConsumeAssetTx`](#GraphQLClient.ConsumeAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.CreateAssetTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                            | Description                                                                                   |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                        |                                                                                               |
| input.tx              | `object`                                        | data of the transaction                                                                       |
| input.tx.itx          | [`CreateAssetTx`](#GraphQLClient.CreateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.DeclareTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                    | Description                                                                                   |
| --------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                |                                                                                               |
| input.tx              | `object`                                | data of the transaction                                                                       |
| input.tx.itx          | [`DeclareTx`](#GraphQLClient.DeclareTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                 | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.DelegateTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                       | Description                                                                                   |
| --------------------- | -------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                   |                                                                                               |
| input.tx              | `object`                   | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.DelegateTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                   | the sender pk                                                                                 |
| [input.tx.from]       | `string`                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                   | the chainId                                                                                   |
| [input.tx.signature]  | `string`                   | transaction signature                                                                         |
| [input.tx.signatures] | `array`                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.DepositTokenTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                           | Description                                                                                   |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                       |                                                                                               |
| input.tx              | `object`                       | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.DepositTokenTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.ExchangeTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                      | Description                                                                                   |
| --------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                  |                                                                                               |
| input.tx              | `object`                                  | data of the transaction                                                                       |
| input.tx.itx          | [`ExchangeTx`](#GraphQLClient.ExchangeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                  | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                  | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                  | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                  | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                  | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                   | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                  | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                  | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.PokeTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | [`PokeTx`](#GraphQLClient.PokeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.RefuelTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                     | Description                                                                                   |
| --------------------- | ------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                 |                                                                                               |
| input.tx              | `object`                 | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.RefuelTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                 | the sender pk                                                                                 |
| [input.tx.from]       | `string`                 | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                 | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                 | the chainId                                                                                   |
| [input.tx.signature]  | `string`                 | transaction signature                                                                         |
| [input.tx.signatures] | `array`                  | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                 | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                 | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.RetrieveSwapTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                              | Description                                                                                   |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                          |                                                                                               |
| input.tx              | `object`                                          | data of the transaction                                                                       |
| input.tx.itx          | [`RetrieveSwapTx`](#GraphQLClient.RetrieveSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.RevokeDelegateTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                             | Description                                                                                   |
| --------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                         |                                                                                               |
| input.tx              | `object`                         | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.RevokeDelegateTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.RevokeSwapTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                          | Description                                                                                   |
| --------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                      |                                                                                               |
| input.tx              | `object`                                      | data of the transaction                                                                       |
| input.tx.itx          | [`RevokeSwapTx`](#GraphQLClient.RevokeSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                      | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                      | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                      | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                      | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                      | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                       | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                      | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                      | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.RevokeWithdrawTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                             | Description                                                                                   |
| --------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                         |                                                                                               |
| input.tx              | `object`                         | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.RevokeWithdrawTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.SetupSwapTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                        | Description                                                                                   |
| --------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                    |                                                                                               |
| input.tx              | `object`                                    | data of the transaction                                                                       |
| input.tx.itx          | [`SetupSwapTx`](#GraphQLClient.SetupSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                    | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                    | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                    | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                    | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                    | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                     | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                    | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                    | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.TransferTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                      | Description                                                                                   |
| --------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                  |                                                                                               |
| input.tx              | `object`                                  | data of the transaction                                                                       |
| input.tx.itx          | [`TransferTx`](#GraphQLClient.TransferTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                  | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                  | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                  | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                  | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                  | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                   | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                  | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                  | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.UpdateAssetTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                            | Description                                                                                   |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                        |                                                                                               |
| input.tx              | `object`                                        | data of the transaction                                                                       |
| input.tx.itx          | [`UpdateAssetTx`](#GraphQLClient.UpdateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.UpdateConsensusParamsTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                    | Description                                                                                   |
| --------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                |                                                                                               |
| input.tx              | `object`                                | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.UpdateConsensusParamsTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                 | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.UpdateValidatorTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.UpdateValidatorTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.UpgradeNodeTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                            | Description                                                                                   |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                        |                                                                                               |
| input.tx              | `object`                                        | data of the transaction                                                                       |
| input.tx.itx          | [`UpgradeNodeTx`](#GraphQLClient.UpgradeNodeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.WithdrawTokenTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                            | Description                                                                                   |
| --------------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                        |                                                                                               |
| input.tx              | `object`                        | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.WithdrawTokenTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |
