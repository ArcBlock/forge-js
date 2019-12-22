
## GRpcClient

An grpc client that can read/write data to a forge powered blockchain node, can be used only in node.js

Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`

**Kind**: global class  
**See**: GRpcClient.getRpcMethods  

* [GRpcClient](#GRpcClient)
  * [new GRpcClient(config)](#new_GRpcClient_new)
    * _instance_
      * [getRpcMethods()](#GRpcClient+getRpcMethods) ⇒ `object`
      * [fromUnitToToken(value)](#GRpcClient+fromUnitToToken) ⇒ `string`
      * [fromTokenToUnit(amount)](#GRpcClient+fromTokenToUnit) ⇒ `BN`
      * [toLocktime(number, \[options\])](#GRpcClient+toLocktime) ⇒ `number`
      * [getTxSendMethods()](#GRpcClient+getTxSendMethods) ⇒ `Array.<string>`
      * [getTxEncodeMethods()](#GRpcClient+getTxEncodeMethods) ⇒ `Array.<string>`
      * [getTxSignMethods()](#GRpcClient+getTxSignMethods) ⇒ `Array.<string>`
      * [getTxMultiSignMethods()](#GRpcClient+getTxMultiSignMethods) ⇒ `Array.<string>`
      * [getType(x)](#GRpcClient+getType) ⇒ `class` \| `null`
      * [decodeTx(input)](#GRpcClient+decodeTx) ⇒ `object`
      * [declare(params, extra)](#GRpcClient+declare) ⇒ `Promise`
      * [migrateAccount(params, extra)](#GRpcClient+migrateAccount) ⇒ `Promise`
      * [delegate(params, extra)](#GRpcClient+delegate) ⇒ `Promise`
      * [revokeDelegate(params, extra)](#GRpcClient+revokeDelegate) ⇒ `Promise`
      * [createAsset(params, extra)](#GRpcClient+createAsset) ⇒ `Promise`
      * [updateAsset(params, extra)](#GRpcClient+updateAsset) ⇒ `Promise`
      * [prepareConsumeAsset(params, extra)](#GRpcClient+prepareConsumeAsset) ⇒ `Promise`
      * [finalizeConsumeAsset(params, extra)](#GRpcClient+finalizeConsumeAsset) ⇒ `Promise`
      * [consumeAsset(params, extra)](#GRpcClient+consumeAsset) ⇒ `Promise`
      * [createAssetFactory(params, extra)](#GRpcClient+createAssetFactory) ⇒ `Promise`
      * [acquireAsset(params, extra)](#GRpcClient+acquireAsset) ⇒ `Promise`
      * [upgradeNode(params, extra)](#GRpcClient+upgradeNode) ⇒ `Promise`
      * [deployContract(params, extra)](#GRpcClient+deployContract) ⇒ `Promise`
      * [activateContract(params, extra)](#GRpcClient+activateContract) ⇒ `Promise`
      * [deactivateContract(params, extra)](#GRpcClient+deactivateContract) ⇒ `Promise`
      * [setupSwap(params, extra)](#GRpcClient+setupSwap) ⇒ `Promise`
      * [retrieveSwap(params, extra)](#GRpcClient+retrieveSwap) ⇒ `Promise`
      * [revokeSwap(params, extra)](#GRpcClient+revokeSwap) ⇒ `Promise`
      * [transfer(params, extra)](#GRpcClient+transfer) ⇒ `Promise`
      * [prepareExchange(params, extra)](#GRpcClient+prepareExchange) ⇒ `Promise`
      * [finalizeExchange(params, extra)](#GRpcClient+finalizeExchange) ⇒ `Promise`
      * [exchange(params, extra)](#GRpcClient+exchange) ⇒ `Promise`
      * [checkin(params, extra)](#GRpcClient+checkin) ⇒ `Promise`
      * [refuel(params, extra)](#GRpcClient+refuel) ⇒ `Promise`
      * [sendTx(params)](#GRpcClient+sendTx) ⇒ [`Promise.<ResponseSendTx>`](#GRpcClient.ResponseSendTx)
      * [getTx(params)](#GRpcClient+getTx) ⇒ `EventEmitter`
      * [getBlock(params)](#GRpcClient+getBlock) ⇒ `EventEmitter`
      * [getBlocks(params)](#GRpcClient+getBlocks) ⇒ [`Promise.<ResponseGetBlocks>`](#GRpcClient.ResponseGetBlocks)
      * [getUnconfirmedTxs(params)](#GRpcClient+getUnconfirmedTxs) ⇒ [`Promise.<ResponseGetUnconfirmedTxs>`](#GRpcClient.ResponseGetUnconfirmedTxs)
      * [getChainInfo(params)](#GRpcClient+getChainInfo) ⇒ [`Promise.<ResponseGetChainInfo>`](#GRpcClient.ResponseGetChainInfo)
      * [getNodeInfo(params)](#GRpcClient+getNodeInfo) ⇒ [`Promise.<ResponseGetNodeInfo>`](#GRpcClient.ResponseGetNodeInfo)
      * [search(params)](#GRpcClient+search) ⇒ [`Promise.<ResponseSearch>`](#GRpcClient.ResponseSearch)
      * [getNetInfo(params)](#GRpcClient+getNetInfo) ⇒ [`Promise.<ResponseGetNetInfo>`](#GRpcClient.ResponseGetNetInfo)
      * [getValidatorsInfo(params)](#GRpcClient+getValidatorsInfo) ⇒ [`Promise.<ResponseGetValidatorsInfo>`](#GRpcClient.ResponseGetValidatorsInfo)
      * [getConfig(params)](#GRpcClient+getConfig) ⇒ [`Promise.<ResponseGetConfig>`](#GRpcClient.ResponseGetConfig)
      * [subscribe(params)](#GRpcClient+subscribe) ⇒ `EventEmitter`
      * [unsubscribe(params)](#GRpcClient+unsubscribe) ⇒ [`Promise.<ResponseUnsubscribe>`](#GRpcClient.ResponseUnsubscribe)
      * [storeFile(params)](#GRpcClient+storeFile) ⇒ [`Promise.<ResponseStoreFile>`](#GRpcClient.ResponseStoreFile)
      * [loadFile(params)](#GRpcClient+loadFile) ⇒ `EventEmitter`
      * [pinFile(params)](#GRpcClient+pinFile) ⇒ [`Promise.<ResponsePinFile>`](#GRpcClient.ResponsePinFile)
      * [getAccountState(params)](#GRpcClient+getAccountState) ⇒ `EventEmitter`
      * [getAssetState(params)](#GRpcClient+getAssetState) ⇒ `EventEmitter`
      * [getForgeState(params)](#GRpcClient+getForgeState) ⇒ [`Promise.<ResponseGetForgeState>`](#GRpcClient.ResponseGetForgeState)
      * [getProtocolState(params)](#GRpcClient+getProtocolState) ⇒ `EventEmitter`
      * [getStakeState(params)](#GRpcClient+getStakeState) ⇒ `EventEmitter`
      * [getSwapState(params)](#GRpcClient+getSwapState) ⇒ `EventEmitter`
      * [getDelegateState(params)](#GRpcClient+getDelegateState) ⇒ `EventEmitter`
      * [declareNode(params)](#GRpcClient+declareNode) ⇒ [`Promise.<ResponseDeclareNode>`](#GRpcClient.ResponseDeclareNode)
      * [getForgeStats(params)](#GRpcClient+getForgeStats) ⇒ [`Promise.<ResponseGetForgeStats>`](#GRpcClient.ResponseGetForgeStats)
      * [listTransactions(params)](#GRpcClient+listTransactions) ⇒ [`Promise.<ResponseListTransactions>`](#GRpcClient.ResponseListTransactions)
      * [listAssets(params)](#GRpcClient+listAssets) ⇒ [`Promise.<ResponseListAssets>`](#GRpcClient.ResponseListAssets)
      * [listStakes(params)](#GRpcClient+listStakes) ⇒ [`Promise.<ResponseListStakes>`](#GRpcClient.ResponseListStakes)
      * [listAccount(params)](#GRpcClient+listAccount) ⇒ [`Promise.<ResponseListAccount>`](#GRpcClient.ResponseListAccount)
      * [listTopAccounts(params)](#GRpcClient+listTopAccounts) ⇒ [`Promise.<ResponseListTopAccounts>`](#GRpcClient.ResponseListTopAccounts)
      * [listAssetTransactions(params)](#GRpcClient+listAssetTransactions) ⇒ [`Promise.<ResponseListAssetTransactions>`](#GRpcClient.ResponseListAssetTransactions)
      * [listBlocks(params)](#GRpcClient+listBlocks) ⇒ [`Promise.<ResponseListBlocks>`](#GRpcClient.ResponseListBlocks)
      * [getHealthStatus(params)](#GRpcClient+getHealthStatus) ⇒ [`Promise.<ResponseGetHealthStatus>`](#GRpcClient.ResponseGetHealthStatus)
      * [listSwap(params)](#GRpcClient+listSwap) ⇒ [`Promise.<ResponseListSwap>`](#GRpcClient.ResponseListSwap)
      * [getSwapStatistics(params)](#GRpcClient+getSwapStatistics) ⇒ [`Promise.<ResponseGetSwapStatistics>`](#GRpcClient.ResponseGetSwapStatistics)
      * [0(params)](#GRpcClient+0) ⇒ `Promise.<string>`
      * [1(params)](#GRpcClient+1) ⇒ `Promise.<string>`
      * [2(params)](#GRpcClient+2) ⇒ `Promise.<string>`
      * [3(params)](#GRpcClient+3) ⇒ `Promise.<string>`
      * [4(params)](#GRpcClient+4) ⇒ `Promise.<string>`
      * [5(params)](#GRpcClient+5) ⇒ `Promise.<string>`
      * [6(params)](#GRpcClient+6) ⇒ `Promise.<string>`
      * [7(params)](#GRpcClient+7) ⇒ `Promise.<string>`
      * [8(params)](#GRpcClient+8) ⇒ `Promise.<string>`
      * [9(params)](#GRpcClient+9) ⇒ `Promise.<string>`
      * [10(params)](#GRpcClient+10) ⇒ `Promise.<string>`
      * [11(params)](#GRpcClient+11) ⇒ `Promise.<string>`
      * [12(params)](#GRpcClient+12) ⇒ `Promise.<string>`
      * [13(params)](#GRpcClient+13) ⇒ `Promise.<string>`
      * [14(params)](#GRpcClient+14) ⇒ `Promise.<string>`
      * [15(params)](#GRpcClient+15) ⇒ `Promise.<string>`
      * [16(params)](#GRpcClient+16) ⇒ `Promise.<string>`
      * [17(params)](#GRpcClient+17) ⇒ `Promise.<string>`
      * [18(params)](#GRpcClient+18) ⇒ `Promise.<string>`
      * [19(params)](#GRpcClient+19) ⇒ `Promise.<string>`
      * [20(params)](#GRpcClient+20) ⇒ `Promise.<string>`
      * [21(params)](#GRpcClient+21) ⇒ `Promise.<string>`
      * [22(params)](#GRpcClient+22) ⇒ `Promise.<string>`
      * [23(params)](#GRpcClient+23) ⇒ `Promise.<string>`
      * [24(params)](#GRpcClient+24) ⇒ `Promise.<string>`
      * [25(params)](#GRpcClient+25) ⇒ `Promise.<string>`
      * [0(params)](#GRpcClient+0) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [1(params)](#GRpcClient+1) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [2(params)](#GRpcClient+2) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [3(params)](#GRpcClient+3) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [4(params)](#GRpcClient+4) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [5(params)](#GRpcClient+5) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [6(params)](#GRpcClient+6) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [7(params)](#GRpcClient+7) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [8(params)](#GRpcClient+8) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [9(params)](#GRpcClient+9) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [10(params)](#GRpcClient+10) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [11(params)](#GRpcClient+11) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [12(params)](#GRpcClient+12) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [13(params)](#GRpcClient+13) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [14(params)](#GRpcClient+14) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [15(params)](#GRpcClient+15) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [16(params)](#GRpcClient+16) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [17(params)](#GRpcClient+17) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [18(params)](#GRpcClient+18) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [19(params)](#GRpcClient+19) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [20(params)](#GRpcClient+20) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [21(params)](#GRpcClient+21) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [22(params)](#GRpcClient+22) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [23(params)](#GRpcClient+23) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [24(params)](#GRpcClient+24) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
      * [25(params)](#GRpcClient+25) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)
    * _static_
      * [TxEncodeOutput](#GRpcClient.TxEncodeOutput) : `object`
      * [RequestSendTx](#GRpcClient.RequestSendTx) : `object`
      * [ResponseSendTx](#GRpcClient.ResponseSendTx) : `object`
      * [RequestGetTx](#GRpcClient.RequestGetTx) : `object`
      * [ResponseGetTx](#GRpcClient.ResponseGetTx) : `object`
      * [RequestGetBlock](#GRpcClient.RequestGetBlock) : `object`
      * [ResponseGetBlock](#GRpcClient.ResponseGetBlock) : `object`
      * [RequestGetBlocks](#GRpcClient.RequestGetBlocks) : `object`
      * [ResponseGetBlocks](#GRpcClient.ResponseGetBlocks) : `object`
      * [RequestDeclareNode](#GRpcClient.RequestDeclareNode) : `object`
      * [ResponseDeclareNode](#GRpcClient.ResponseDeclareNode) : `object`
      * [RequestGetAccountState](#GRpcClient.RequestGetAccountState) : `object`
      * [ResponseGetAccountState](#GRpcClient.ResponseGetAccountState) : `object`
      * [RequestGetAssetState](#GRpcClient.RequestGetAssetState) : `object`
      * [ResponseGetAssetState](#GRpcClient.ResponseGetAssetState) : `object`
      * [RequestGetProtocolState](#GRpcClient.RequestGetProtocolState) : `object`
      * [ResponseGetProtocolState](#GRpcClient.ResponseGetProtocolState) : `object`
      * [RequestGetStakeState](#GRpcClient.RequestGetStakeState) : `object`
      * [ResponseGetStakeState](#GRpcClient.ResponseGetStakeState) : `object`
      * [RequestGetForgeState](#GRpcClient.RequestGetForgeState) : `object`
      * [ResponseGetForgeState](#GRpcClient.ResponseGetForgeState) : `object`
      * [RequestGetSwapState](#GRpcClient.RequestGetSwapState) : `object`
      * [ResponseGetSwapState](#GRpcClient.ResponseGetSwapState) : `object`
      * [RequestGetDelegateState](#GRpcClient.RequestGetDelegateState) : `object`
      * [ResponseGetDelegateState](#GRpcClient.ResponseGetDelegateState) : `object`
      * [RequestStoreFile](#GRpcClient.RequestStoreFile) : `object`
      * [ResponseStoreFile](#GRpcClient.ResponseStoreFile) : `object`
      * [RequestLoadFile](#GRpcClient.RequestLoadFile) : `object`
      * [ResponseLoadFile](#GRpcClient.ResponseLoadFile) : `object`
      * [RequestPinFile](#GRpcClient.RequestPinFile) : `object`
      * [ResponsePinFile](#GRpcClient.ResponsePinFile) : `object`
      * [RequestGetChainInfo](#GRpcClient.RequestGetChainInfo) : `object`
      * [ResponseGetChainInfo](#GRpcClient.ResponseGetChainInfo) : `object`
      * [RequestGetNodeInfo](#GRpcClient.RequestGetNodeInfo) : `object`
      * [ResponseGetNodeInfo](#GRpcClient.ResponseGetNodeInfo) : `object`
      * [RequestSearch](#GRpcClient.RequestSearch) : `object`
      * [ResponseSearch](#GRpcClient.ResponseSearch) : `object`
      * [RequestGetUnconfirmedTxs](#GRpcClient.RequestGetUnconfirmedTxs) : `object`
      * [ResponseGetUnconfirmedTxs](#GRpcClient.ResponseGetUnconfirmedTxs) : `object`
      * [RequestGetNetInfo](#GRpcClient.RequestGetNetInfo) : `object`
      * [ResponseGetNetInfo](#GRpcClient.ResponseGetNetInfo) : `object`
      * [RequestGetValidatorsInfo](#GRpcClient.RequestGetValidatorsInfo) : `object`
      * [ResponseGetValidatorsInfo](#GRpcClient.ResponseGetValidatorsInfo) : `object`
      * [RequestSubscribe](#GRpcClient.RequestSubscribe) : `object`
      * [ResponseSubscribe](#GRpcClient.ResponseSubscribe) : `object`
      * [RequestUnsubscribe](#GRpcClient.RequestUnsubscribe) : `object`
      * [ResponseUnsubscribe](#GRpcClient.ResponseUnsubscribe) : `object`
      * [RequestGetConfig](#GRpcClient.RequestGetConfig) : `object`
      * [ResponseGetConfig](#GRpcClient.ResponseGetConfig) : `object`
      * [ByDay](#GRpcClient.ByDay) : `object`
      * [ByHour](#GRpcClient.ByHour) : `object`
      * [RequestGetForgeStats](#GRpcClient.RequestGetForgeStats) : `object`
      * [ResponseGetForgeStats](#GRpcClient.ResponseGetForgeStats) : `object`
      * [RequestListTransactions](#GRpcClient.RequestListTransactions) : `object`
      * [ResponseListTransactions](#GRpcClient.ResponseListTransactions) : `object`
      * [RequestListAssets](#GRpcClient.RequestListAssets) : `object`
      * [ResponseListAssets](#GRpcClient.ResponseListAssets) : `object`
      * [RequestListStakes](#GRpcClient.RequestListStakes) : `object`
      * [ResponseListStakes](#GRpcClient.ResponseListStakes) : `object`
      * [RequestListAccount](#GRpcClient.RequestListAccount) : `object`
      * [ResponseListAccount](#GRpcClient.ResponseListAccount) : `object`
      * [RequestListTopAccounts](#GRpcClient.RequestListTopAccounts) : `object`
      * [ResponseListTopAccounts](#GRpcClient.ResponseListTopAccounts) : `object`
      * [RequestListAssetTransactions](#GRpcClient.RequestListAssetTransactions) : `object`
      * [ResponseListAssetTransactions](#GRpcClient.ResponseListAssetTransactions) : `object`
      * [RequestListBlocks](#GRpcClient.RequestListBlocks) : `object`
      * [ResponseListBlocks](#GRpcClient.ResponseListBlocks) : `object`
      * [RequestListSwap](#GRpcClient.RequestListSwap) : `object`
      * [ResponseListSwap](#GRpcClient.ResponseListSwap) : `object`
      * [RequestGetSwapStatistics](#GRpcClient.RequestGetSwapStatistics) : `object`
      * [ResponseGetSwapStatistics](#GRpcClient.ResponseGetSwapStatistics) : `object`
      * [RequestGetHealthStatus](#GRpcClient.RequestGetHealthStatus) : `object`
      * [ResponseGetHealthStatus](#GRpcClient.ResponseGetHealthStatus) : `object`
      * [BigUint](#GRpcClient.BigUint) : `object`
      * [BigSint](#GRpcClient.BigSint) : `object`
      * [WalletType](#GRpcClient.WalletType) : `object`
      * [WalletInfo](#GRpcClient.WalletInfo) : `object`
      * [ChainInfo](#GRpcClient.ChainInfo) : `object`
      * [NodeInfo](#GRpcClient.NodeInfo) : `object`
      * [Validator](#GRpcClient.Validator) : `object`
      * [ConsensusParams](#GRpcClient.ConsensusParams) : `object`
      * [UpgradeTask](#GRpcClient.UpgradeTask) : `object`
      * [UpgradeTasks](#GRpcClient.UpgradeTasks) : `object`
      * [AbciContext](#GRpcClient.AbciContext) : `object`
      * [Multisig](#GRpcClient.Multisig) : `object`
      * [Transaction](#GRpcClient.Transaction) : `object`
      * [TransactionInfo](#GRpcClient.TransactionInfo) : `object`
      * [DeclareConfig](#GRpcClient.DeclareConfig) : `object`
      * [DelegateConfig](#GRpcClient.DelegateConfig) : `object`
      * [TransactionConfig](#GRpcClient.TransactionConfig) : `object`
      * [BlockInfo](#GRpcClient.BlockInfo) : `object`
      * [BlockInfoSimple](#GRpcClient.BlockInfoSimple) : `object`
      * [TxStatus](#GRpcClient.TxStatus) : `object`
      * [CircularQueue](#GRpcClient.CircularQueue) : `object`
      * [StateContext](#GRpcClient.StateContext) : `object`
      * [StakeContext](#GRpcClient.StakeContext) : `object`
      * [StakeSummary](#GRpcClient.StakeSummary) : `object`
      * [StakeConfig](#GRpcClient.StakeConfig) : `object`
      * [UnconfirmedTxs](#GRpcClient.UnconfirmedTxs) : `object`
      * [NetInfo](#GRpcClient.NetInfo) : `object`
      * [GeoInfo](#GRpcClient.GeoInfo) : `object`
      * [PeerInfo](#GRpcClient.PeerInfo) : `object`
      * [ValidatorsInfo](#GRpcClient.ValidatorsInfo) : `object`
      * [ValidatorInfo](#GRpcClient.ValidatorInfo) : `object`
      * [GenesisInfo](#GRpcClient.GenesisInfo) : `object`
      * [ForgeStats](#GRpcClient.ForgeStats) : `object`
      * [TxStatistics](#GRpcClient.TxStatistics) : `object`
      * [ForgeToken](#GRpcClient.ForgeToken) : `object`
      * [PokeInfo](#GRpcClient.PokeInfo) : `object`
      * [PokeConfig](#GRpcClient.PokeConfig) : `object`
      * [UpgradeInfo](#GRpcClient.UpgradeInfo) : `object`
      * [WithdrawItem](#GRpcClient.WithdrawItem) : `object`
      * [AccountConfig](#GRpcClient.AccountConfig) : `object`
      * [TokenSwapConfig](#GRpcClient.TokenSwapConfig) : `object`
      * [Evidence](#GRpcClient.Evidence) : `object`
      * [AccountState](#GRpcClient.AccountState) : `object`
      * [AssetState](#GRpcClient.AssetState) : `object`
      * [CoreProtocol](#GRpcClient.CoreProtocol) : `object`
      * [ForgeState](#GRpcClient.ForgeState) : `object`
      * [RootState](#GRpcClient.RootState) : `object`
      * [StakeState](#GRpcClient.StakeState) : `object`
      * [StatisticsState](#GRpcClient.StatisticsState) : `object`
      * [BlacklistState](#GRpcClient.BlacklistState) : `object`
      * [ProtocolState](#GRpcClient.ProtocolState) : `object`
      * [SwapState](#GRpcClient.SwapState) : `object`
      * [SwapStatistics](#GRpcClient.SwapStatistics) : `object`
      * [DelegateOpState](#GRpcClient.DelegateOpState) : `object`
      * [DelegateState](#GRpcClient.DelegateState) : `object`
      * [CodeInfo](#GRpcClient.CodeInfo) : `object`
      * [TypeUrls](#GRpcClient.TypeUrls) : `object`
      * [DeployProtocolTx](#GRpcClient.DeployProtocolTx) : `object`
      * [ConsensusUpgradeTx](#GRpcClient.ConsensusUpgradeTx) : `object`
      * [SysUpgradeTx](#GRpcClient.SysUpgradeTx) : `object`
      * [PageOrder](#GRpcClient.PageOrder) : `object`
      * [PageInput](#GRpcClient.PageInput) : `object`
      * [TypeFilter](#GRpcClient.TypeFilter) : `object`
      * [TimeFilter](#GRpcClient.TimeFilter) : `object`
      * [AddressFilter](#GRpcClient.AddressFilter) : `object`
      * [PageInfo](#GRpcClient.PageInfo) : `object`
      * [IndexedTransaction](#GRpcClient.IndexedTransaction) : `object`
      * [IndexedAccountState](#GRpcClient.IndexedAccountState) : `object`
      * [IndexedAssetState](#GRpcClient.IndexedAssetState) : `object`
      * [IndexedStakeState](#GRpcClient.IndexedStakeState) : `object`
      * [IndexedBlock](#GRpcClient.IndexedBlock) : `object`
      * [HealthStatus](#GRpcClient.HealthStatus) : `object`
      * [ConsensusStatus](#GRpcClient.ConsensusStatus) : `object`
      * [NetworkStatus](#GRpcClient.NetworkStatus) : `object`
      * [StorageStatus](#GRpcClient.StorageStatus) : `object`
      * [DiskSpaceStatus](#GRpcClient.DiskSpaceStatus) : `object`
      * [ForgeStatus](#GRpcClient.ForgeStatus) : `object`
      * [AbciServerStatus](#GRpcClient.AbciServerStatus) : `object`
      * [ValidityFilter](#GRpcClient.ValidityFilter) : `object`
      * [RangeFilter](#GRpcClient.RangeFilter) : `object`
      * [AccountMigrateTx](#GRpcClient.AccountMigrateTx) : `object`
      * [AssetSpec](#GRpcClient.AssetSpec) : `object`
      * [AcquireAssetTx](#GRpcClient.AcquireAssetTx) : `object`
      * [ActivateProtocolTx](#GRpcClient.ActivateProtocolTx) : `object`
      * [ApproveWithdrawTx](#GRpcClient.ApproveWithdrawTx) : `object`
      * [ConsumeAssetTx](#GRpcClient.ConsumeAssetTx) : `object`
      * [CreateAssetTx](#GRpcClient.CreateAssetTx) : `object`
      * [AssetAttributes](#GRpcClient.AssetAttributes) : `object`
      * [AssetFactory](#GRpcClient.AssetFactory) : `object`
      * [AssetFactoryState](#GRpcClient.AssetFactoryState) : `object`
      * [DeactivateProtocolTx](#GRpcClient.DeactivateProtocolTx) : `object`
      * [DeclareTx](#GRpcClient.DeclareTx) : `object`
      * [DelegateTx](#GRpcClient.DelegateTx) : `object`
      * [DelegateOp](#GRpcClient.DelegateOp) : `object`
      * [DepositTokenTx](#GRpcClient.DepositTokenTx) : `object`
      * [ExchangeInfo](#GRpcClient.ExchangeInfo) : `object`
      * [ExchangeTx](#GRpcClient.ExchangeTx) : `object`
      * [PokeTx](#GRpcClient.PokeTx) : `object`
      * [RefuelTx](#GRpcClient.RefuelTx) : `object`
      * [RetrieveSwapTx](#GRpcClient.RetrieveSwapTx) : `object`
      * [RevokeDelegateTx](#GRpcClient.RevokeDelegateTx) : `object`
      * [RevokeSwapTx](#GRpcClient.RevokeSwapTx) : `object`
      * [RevokeWithdrawTx](#GRpcClient.RevokeWithdrawTx) : `object`
      * [SetupSwapTx](#GRpcClient.SetupSwapTx) : `object`
      * [TransferTx](#GRpcClient.TransferTx) : `object`
      * [UpdateAssetTx](#GRpcClient.UpdateAssetTx) : `object`
      * [UpdateValidatorTx](#GRpcClient.UpdateValidatorTx) : `object`
      * [UpgradeNodeTx](#GRpcClient.UpgradeNodeTx) : `object`
      * [WithdrawTokenTx](#GRpcClient.WithdrawTokenTx) : `object`
      * [Timestamp](#GRpcClient.Timestamp) : `object`
      * [Any](#GRpcClient.Any) : `object`
      * [KVPair](#GRpcClient.KVPair) : `object`
      * [BlockParams](#GRpcClient.BlockParams) : `object`
      * [EvidenceParams](#GRpcClient.EvidenceParams) : `object`
      * [ValidatorParams](#GRpcClient.ValidatorParams) : `object`
      * [ConsensusParams](#GRpcClient.ConsensusParams) : `object`
      * [LastCommitInfo](#GRpcClient.LastCommitInfo) : `object`
      * [Version](#GRpcClient.Version) : `object`
      * [BlockID](#GRpcClient.BlockID) : `object`
      * [PartSetHeader](#GRpcClient.PartSetHeader) : `object`
      * [Validator](#GRpcClient.Validator) : `object`
      * [ValidatorUpdate](#GRpcClient.ValidatorUpdate) : `object`
      * [VoteInfo](#GRpcClient.VoteInfo) : `object`
      * [PubKey](#GRpcClient.PubKey) : `object`
      * [Evidence](#GRpcClient.Evidence) : `object`
      * [Header](#GRpcClient.Header) : `object`
      * [RequestBeginBlock](#GRpcClient.RequestBeginBlock) : `object`
      * [RequestEndBlock](#GRpcClient.RequestEndBlock) : `object`
      * [ResponseBeginBlock](#GRpcClient.ResponseBeginBlock) : `object`
      * [ResponseEndBlock](#GRpcClient.ResponseEndBlock) : `object`
      * [ResponseCheckTx](#GRpcClient.ResponseCheckTx) : `object`
      * [ResponseDeliverTx](#GRpcClient.ResponseDeliverTx) : `object`
      * [sendConsensusUpgradeTxInput](#GRpcClient.sendConsensusUpgradeTxInput) : `Object`
      * [sendDeployProtocolTxInput](#GRpcClient.sendDeployProtocolTxInput) : `Object`
      * [sendSysUpgradeTxInput](#GRpcClient.sendSysUpgradeTxInput) : `Object`
      * [sendAccountMigrateTxInput](#GRpcClient.sendAccountMigrateTxInput) : `Object`
      * [sendAcquireAssetTxInput](#GRpcClient.sendAcquireAssetTxInput) : `Object`
      * [sendActivateProtocolTxInput](#GRpcClient.sendActivateProtocolTxInput) : `Object`
      * [sendApproveWithdrawTxInput](#GRpcClient.sendApproveWithdrawTxInput) : `Object`
      * [sendConsumeAssetTxInput](#GRpcClient.sendConsumeAssetTxInput) : `Object`
      * [sendCreateAssetTxInput](#GRpcClient.sendCreateAssetTxInput) : `Object`
      * [sendDeactivateProtocolTxInput](#GRpcClient.sendDeactivateProtocolTxInput) : `Object`
      * [sendDeclareTxInput](#GRpcClient.sendDeclareTxInput) : `Object`
      * [sendDelegateTxInput](#GRpcClient.sendDelegateTxInput) : `Object`
      * [sendDepositTokenTxInput](#GRpcClient.sendDepositTokenTxInput) : `Object`
      * [sendExchangeTxInput](#GRpcClient.sendExchangeTxInput) : `Object`
      * [sendPokeTxInput](#GRpcClient.sendPokeTxInput) : `Object`
      * [sendRefuelTxInput](#GRpcClient.sendRefuelTxInput) : `Object`
      * [sendRetrieveSwapTxInput](#GRpcClient.sendRetrieveSwapTxInput) : `Object`
      * [sendRevokeDelegateTxInput](#GRpcClient.sendRevokeDelegateTxInput) : `Object`
      * [sendRevokeSwapTxInput](#GRpcClient.sendRevokeSwapTxInput) : `Object`
      * [sendRevokeWithdrawTxInput](#GRpcClient.sendRevokeWithdrawTxInput) : `Object`
      * [sendSetupSwapTxInput](#GRpcClient.sendSetupSwapTxInput) : `Object`
      * [sendTransferTxInput](#GRpcClient.sendTransferTxInput) : `Object`
      * [sendUpdateAssetTxInput](#GRpcClient.sendUpdateAssetTxInput) : `Object`
      * [sendUpdateValidatorTxInput](#GRpcClient.sendUpdateValidatorTxInput) : `Object`
      * [sendUpgradeNodeTxInput](#GRpcClient.sendUpgradeNodeTxInput) : `Object`
      * [sendWithdrawTokenTxInput](#GRpcClient.sendWithdrawTokenTxInput) : `Object`

### new GRpcClient(config)

Creates an instance of GRpcClient, and generate transaction sending and receiving methods

| Param             | Type                 | Default                                           | Description                                                     |
| ----------------- | -------------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| config            | `object` \| `string` | `tcp://127.0.0.1:28210`                           | config object, if a string passed, will be used as the endpoint |
| [config.endpoint] | `string`             | `&quot;\&quot;tcp://127.0.0.1:28210\&quot;&quot;` | grpc endpoint the client can connect to                         |
| [config.chainId]  | `string`             | `&quot;\&quot;\&quot;&quot;`                      | chainId used to construct transaction                           |

### gRpcClient.getRpcMethods() ⇒ `object`

List standard rpc methods

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

### gRpcClient.fromUnitToToken(value) ⇒ `string`

Format big number presentation amount to token number

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param | Type     |
| ----- | -------- |
| value | `string` |

### gRpcClient.fromTokenToUnit(amount) ⇒ `BN`

Encode amount to corresponding token big number presentation

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type     |
| ------ | -------- |
| amount | `number` |

### gRpcClient.toLocktime(number, [options]) ⇒ `number`

Converts a relative locktime to absolute locktime

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param     | Type     | Default | Description                   |
| --------- | -------- | ------- | ----------------------------- |
| number    | `number` |         | number of blocks want to lock |
| [options] | `object` | `{}`    | options to underlying methods |

### gRpcClient.getTxSendMethods() ⇒ `Array.<string>`

List all transaction send methods
Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Array.<string>` - method name list  

### gRpcClient.getTxEncodeMethods() ⇒ `Array.<string>`

List all transaction encode methods, each method can be used to encode transaction to buffer and object

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Array.<string>` - method name list  

### gRpcClient.getTxSignMethods() ⇒ `Array.<string>`

List all transaction sign methods, each method can be used to sign transaction to an object

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Array.<string>` - method name list  

### gRpcClient.getTxMultiSignMethods() ⇒ `Array.<string>`

List all transaction multi sign methods, each method can be used to do multi sign a transaction

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Array.<string>` - method name list  

### gRpcClient.getType(x) ⇒ `class` \| `null`

Get protobuf message class by name, only supports forge-built-in types

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `class` \| `null` - message type  

| Param | Type     |
| ----- | -------- |
| x     | `string` |

### gRpcClient.decodeTx(input) ⇒ `object`

Decode transaction buffer/base64/base58 to an object

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `object` - transaction object  

| Param | Type                                      |
| ----- | ----------------------------------------- |
| input | `buffer` \| `hex` \| `base48` \| `base64` |

### gRpcClient.declare(params, extra) ⇒ `Promise`

Declare an DID and it's public key on chain

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the transaction hash once resolved  

| Param           | Type           | Default                      | Description                                     |
| --------------- | -------------- | ---------------------------- | ----------------------------------------------- |
| params          | `object`       |                              |                                                 |
| params.moniker  | `string`       |                              | user nickname                                   |
| [params.issuer] | `string`       | `&quot;\&quot;\&quot;&quot;` | who issued the account                          |
| [params.data]   | `object`       |                              | who issued the account                          |
| params.wallet   | `WalletObject` |                              | wallet to sign the tx                           |
| extra           | `object`       |                              | other param to underlying client implementation |

### gRpcClient.migrateAccount(params, extra) ⇒ `Promise`

Migrate current account to a new account

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the transaction hash once resolved  

| Param       | Type           | Description                                     |
| ----------- | -------------- | ----------------------------------------------- |
| params      | `object`       |                                                 |
| params.from | `WalletObject` | which account to migrate from                   |
| params.to   | `WalletObject` | which account to migrate to                     |
| extra       | `object`       | other param to underlying client implementation |

### gRpcClient.delegate(params, extra) ⇒ `Promise`

Delegate some privileges to another account
So that that account can send transactions on behalf of the delegator

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `[transactionHash, delegateAddress]` once resolved  

| Param             | Type           | Description                                           |
| ----------------- | -------------- | ----------------------------------------------------- |
| params            | `object`       |                                                       |
| params.from       | `WalletObject` | the delegator, who grants the privilege to others     |
| params.to         | `WalletObject` | the delegatee, who is authorized to send transactions |
| params.privileges | `Array`        | the privilege settings                                |
| extra             | `object`       | other param to underlying client implementation       |

### gRpcClient.revokeDelegate(params, extra) ⇒ `Promise`

Revoke a previous delegation

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the transaction hash once resolved  

| Param             | Type           | Description                                           |
| ----------------- | -------------- | ----------------------------------------------------- |
| params            | `object`       |                                                       |
| params.from       | `WalletObject` | the delegator, who grants the privilege to others     |
| params.to         | `WalletObject` | the delegatee, who is authorized to send transactions |
| params.privileges | `Array`        | the privilege settings                                |
| extra             | `object`       | other param to underlying client implementation       |

### gRpcClient.createAsset(params, extra) ⇒ `Promise`

Create an new asset (non-fungible-token)

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.updateAsset(params, extra) ⇒ `Promise`

Update an existing asset (non-fungible-token)

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.prepareConsumeAsset(params, extra) ⇒ `Promise`

Prepare a transaction that consumes an asset (non-fungible-token)

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.finalizeConsumeAsset(params, extra) ⇒ `Promise`

Prepare a transaction that consumes an asset (non-fungible-token)

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                                          |
| ---------------- | -------------- | -------------------------------------------------------------------- |
| params           | `object`       |                                                                      |
| params.tx        | `object`       | transaction to finalize, should be result from `prepareConsumeAsset` |
| params.address   | `string`       | asset address to be consumed                                         |
| params.delegator | `string`       | who authorized this transaction                                      |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                                   |
| extra            | `object`       | other param to underlying client implementation                      |

### gRpcClient.consumeAsset(params, extra) ⇒ `Promise`

Send a transaction that consumes an asset (non-fungible-token)

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                                       |
| ------------- | -------------- | ----------------------------------------------------------------- |
| params        | `object`       |                                                                   |
| params.tx     | `object`       | transaction to send, should be result from `finalizeConsumeAsset` |
| params.wallet | `WalletObject` | the wallet to sign the transaction                                |
| extra         | `object`       | other param to underlying client implementation                   |

### gRpcClient.createAssetFactory(params, extra) ⇒ `Promise`

Create an asset factory that can be used to produce multiple assets in a transaction

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.acquireAsset(params, extra) ⇒ `Promise`

Acquire an asset from factory

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.upgradeNode(params, extra) ⇒ `Promise`

Do an on-chain upgrade, should be used with forge-cli

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                                  |
| ---------------- | -------------- | ------------------------------------------------------------ |
| params           | `object`       |                                                              |
| params.height    | `number`       | at which height should the chain stop to perform the upgrade |
| params.version   | `string`       | to which version should upgrade to                           |
| params.delegator | `string`       | who authorized this transaction                              |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                           |
| extra            | `object`       | other param to underlying client implementation              |

### gRpcClient.deployContract(params, extra) ⇒ `Promise`

Deploy a contract to a running chain node, requires moderator privilege

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                                 |
| ---------------- | -------------- | ----------------------------------------------------------- |
| params           | `object`       |                                                             |
| params.payload   | `object`       | the contract payload, usually from `forge contract:compile` |
| params.delegator | `string`       | who authorized this transaction                             |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                          |
| extra            | `object`       | other param to underlying client implementation             |

### gRpcClient.activateContract(params, extra) ⇒ `Promise`

Activate an previously paused/disabled contract

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the contract address to activate                |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### gRpcClient.deactivateContract(params, extra) ⇒ `Promise`

Deactivate an previously running/enabled contract

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the contract address to deactivate              |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### gRpcClient.setupSwap(params, extra) ⇒ `Promise`

Setup a swap that's used to accomplish cross-chain operations

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.retrieveSwap(params, extra) ⇒ `Promise`

Retrieve a swap during an atomic-swap process

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the swap address to retrieve                    |
| params.hashkey   | `string`       | the hashkey to unlock the swap                  |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### gRpcClient.revokeSwap(params, extra) ⇒ `Promise`

Revoke a swap during an atomic-swap process

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the swap address to revoke                      |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |

### gRpcClient.transfer(params, extra) ⇒ `Promise`

Transfer token or assets to another account

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.prepareExchange(params, extra) ⇒ `Promise`

Prepare an exchange transaction between multiple accounts

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
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

### gRpcClient.finalizeExchange(params, extra) ⇒ `Promise`

Finalize an exchange transaction between multiple accounts

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transaction` object once resolved  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.tx        | `object`       | the transaction object from `prepareExchange`   |
| params.delegator | `string`       | who authorized this transaction                 |
| params.data      | `object`       | extra data in the multi sig                     |
| params.wallet    | `WalletObject` | the wallet who is the demander                  |
| extra            | `object`       | other param to underlying client implementation |

### gRpcClient.exchange(params, extra) ⇒ `Promise`

Send an exchange transaction

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                     |
| ------------- | -------------- | ----------------------------------------------- |
| params        | `object`       |                                                 |
| params.tx     | `object`       | the transaction object from `finalizeExchange`  |
| params.wallet | `WalletObject` | the wallet to sign the transaction              |
| extra         | `object`       | other param to underlying client implementation |

### gRpcClient.checkin(params, extra) ⇒ `Promise`

Send a poke transaction to get some token for free

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                                     |
| ------------- | -------------- | --------------------------------------------------------------- |
| params        | `object`       |                                                                 |
| params.wallet | `WalletObject` | the wallet to sign the transaction, also who will get the token |
| extra         | `object`       | other param to underlying client implementation                 |

### gRpcClient.refuel(params, extra) ⇒ `Promise`

Send a refuel transaction to get some gas

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise` - the `transactionHash` once resolved  

| Param         | Type           | Description                                                     |
| ------------- | -------------- | --------------------------------------------------------------- |
| params        | `object`       |                                                                 |
| params.wallet | `WalletObject` | the wallet to sign the transaction, also who will get the token |
| params.data   | `object`       | extra data to put in itx                                        |
| extra         | `object`       | other param to underlying client implementation                 |

### gRpcClient.sendTx(params) ⇒ [`Promise.<ResponseSendTx>`](#GRpcClient.ResponseSendTx)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                         |
| ------ | -------------------------------------------- |
| params | [`RequestSendTx`](#GRpcClient.RequestSendTx) |

### gRpcClient.getTx(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetTx](#GRpcClient.ResponseGetTx) for payload format.  

| Param  | Type                                       |
| ------ | ------------------------------------------ |
| params | [`RequestGetTx`](#GRpcClient.RequestGetTx) |

### gRpcClient.getBlock(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetBlock](#GRpcClient.ResponseGetBlock) for payload format.  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestGetBlock`](#GRpcClient.RequestGetBlock) |

### gRpcClient.getBlocks(params) ⇒ [`Promise.<ResponseGetBlocks>`](#GRpcClient.ResponseGetBlocks)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestGetBlocks`](#GRpcClient.RequestGetBlocks) |

### gRpcClient.getUnconfirmedTxs(params) ⇒ [`Promise.<ResponseGetUnconfirmedTxs>`](#GRpcClient.ResponseGetUnconfirmedTxs)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [`RequestGetUnconfirmedTxs`](#GRpcClient.RequestGetUnconfirmedTxs) |

### gRpcClient.getChainInfo(params) ⇒ [`Promise.<ResponseGetChainInfo>`](#GRpcClient.ResponseGetChainInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RequestGetChainInfo`](#GRpcClient.RequestGetChainInfo) |

### gRpcClient.getNodeInfo(params) ⇒ [`Promise.<ResponseGetNodeInfo>`](#GRpcClient.ResponseGetNodeInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestGetNodeInfo`](#GRpcClient.RequestGetNodeInfo) |

### gRpcClient.search(params) ⇒ [`Promise.<ResponseSearch>`](#GRpcClient.ResponseSearch)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                         |
| ------ | -------------------------------------------- |
| params | [`RequestSearch`](#GRpcClient.RequestSearch) |

### gRpcClient.getNetInfo(params) ⇒ [`Promise.<ResponseGetNetInfo>`](#GRpcClient.ResponseGetNetInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestGetNetInfo`](#GRpcClient.RequestGetNetInfo) |

### gRpcClient.getValidatorsInfo(params) ⇒ [`Promise.<ResponseGetValidatorsInfo>`](#GRpcClient.ResponseGetValidatorsInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [`RequestGetValidatorsInfo`](#GRpcClient.RequestGetValidatorsInfo) |

### gRpcClient.getConfig(params) ⇒ [`Promise.<ResponseGetConfig>`](#GRpcClient.ResponseGetConfig)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestGetConfig`](#GRpcClient.RequestGetConfig) |

### gRpcClient.subscribe(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseSubscribe](#GRpcClient.ResponseSubscribe) for payload format.  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestSubscribe`](#GRpcClient.RequestSubscribe) |

### gRpcClient.unsubscribe(params) ⇒ [`Promise.<ResponseUnsubscribe>`](#GRpcClient.ResponseUnsubscribe)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestUnsubscribe`](#GRpcClient.RequestUnsubscribe) |

### gRpcClient.storeFile(params) ⇒ [`Promise.<ResponseStoreFile>`](#GRpcClient.ResponseStoreFile)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestStoreFile`](#GRpcClient.RequestStoreFile) |

### gRpcClient.loadFile(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseLoadFile](#GRpcClient.ResponseLoadFile) for payload format.  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestLoadFile`](#GRpcClient.RequestLoadFile) |

### gRpcClient.pinFile(params) ⇒ [`Promise.<ResponsePinFile>`](#GRpcClient.ResponsePinFile)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                           |
| ------ | ---------------------------------------------- |
| params | [`RequestPinFile`](#GRpcClient.RequestPinFile) |

### gRpcClient.getAccountState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetAccountState](#GRpcClient.ResponseGetAccountState) for payload format.  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`RequestGetAccountState`](#GRpcClient.RequestGetAccountState) |

### gRpcClient.getAssetState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetAssetState](#GRpcClient.ResponseGetAssetState) for payload format.  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetAssetState`](#GRpcClient.RequestGetAssetState) |

### gRpcClient.getForgeState(params) ⇒ [`Promise.<ResponseGetForgeState>`](#GRpcClient.ResponseGetForgeState)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetForgeState`](#GRpcClient.RequestGetForgeState) |

### gRpcClient.getProtocolState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetProtocolState](#GRpcClient.ResponseGetProtocolState) for payload format.  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`RequestGetProtocolState`](#GRpcClient.RequestGetProtocolState) |

### gRpcClient.getStakeState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetStakeState](#GRpcClient.ResponseGetStakeState) for payload format.  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetStakeState`](#GRpcClient.RequestGetStakeState) |

### gRpcClient.getSwapState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetSwapState](#GRpcClient.ResponseGetSwapState) for payload format.  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RequestGetSwapState`](#GRpcClient.RequestGetSwapState) |

### gRpcClient.getDelegateState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetDelegateState](#GRpcClient.ResponseGetDelegateState) for payload format.  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`RequestGetDelegateState`](#GRpcClient.RequestGetDelegateState) |

### gRpcClient.declareNode(params) ⇒ [`Promise.<ResponseDeclareNode>`](#GRpcClient.ResponseDeclareNode)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestDeclareNode`](#GRpcClient.RequestDeclareNode) |

### gRpcClient.getForgeStats(params) ⇒ [`Promise.<ResponseGetForgeStats>`](#GRpcClient.ResponseGetForgeStats)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetForgeStats`](#GRpcClient.RequestGetForgeStats) |

### gRpcClient.listTransactions(params) ⇒ [`Promise.<ResponseListTransactions>`](#GRpcClient.ResponseListTransactions)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`RequestListTransactions`](#GRpcClient.RequestListTransactions) |

### gRpcClient.listAssets(params) ⇒ [`Promise.<ResponseListAssets>`](#GRpcClient.ResponseListAssets)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListAssets`](#GRpcClient.RequestListAssets) |

### gRpcClient.listStakes(params) ⇒ [`Promise.<ResponseListStakes>`](#GRpcClient.ResponseListStakes)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListStakes`](#GRpcClient.RequestListStakes) |

### gRpcClient.listAccount(params) ⇒ [`Promise.<ResponseListAccount>`](#GRpcClient.ResponseListAccount)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestListAccount`](#GRpcClient.RequestListAccount) |

### gRpcClient.listTopAccounts(params) ⇒ [`Promise.<ResponseListTopAccounts>`](#GRpcClient.ResponseListTopAccounts)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`RequestListTopAccounts`](#GRpcClient.RequestListTopAccounts) |

### gRpcClient.listAssetTransactions(params) ⇒ [`Promise.<ResponseListAssetTransactions>`](#GRpcClient.ResponseListAssetTransactions)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [`RequestListAssetTransactions`](#GRpcClient.RequestListAssetTransactions) |

### gRpcClient.listBlocks(params) ⇒ [`Promise.<ResponseListBlocks>`](#GRpcClient.ResponseListBlocks)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListBlocks`](#GRpcClient.RequestListBlocks) |

### gRpcClient.getHealthStatus(params) ⇒ [`Promise.<ResponseGetHealthStatus>`](#GRpcClient.ResponseGetHealthStatus)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`RequestGetHealthStatus`](#GRpcClient.RequestGetHealthStatus) |

### gRpcClient.listSwap(params) ⇒ [`Promise.<ResponseListSwap>`](#GRpcClient.ResponseListSwap)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestListSwap`](#GRpcClient.RequestListSwap) |

### gRpcClient.getSwapStatistics(params) ⇒ [`Promise.<ResponseGetSwapStatistics>`](#GRpcClient.ResponseGetSwapStatistics)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [`RequestGetSwapStatistics`](#GRpcClient.RequestGetSwapStatistics) |

### gRpcClient.0(params) ⇒ `Promise.<string>`

Send sendConsensusUpgradeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                     |
| ------ | ------------------------------------------------------------------------ |
| params | [`sendConsensusUpgradeTxInput`](#GRpcClient.sendConsensusUpgradeTxInput) |

### gRpcClient.1(params) ⇒ `Promise.<string>`

Send sendDeployProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [`sendDeployProtocolTxInput`](#GRpcClient.sendDeployProtocolTxInput) |

### gRpcClient.2(params) ⇒ `Promise.<string>`

Send sendSysUpgradeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`sendSysUpgradeTxInput`](#GRpcClient.sendSysUpgradeTxInput) |

### gRpcClient.3(params) ⇒ `Promise.<string>`

Send sendAccountMigrateTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [`sendAccountMigrateTxInput`](#GRpcClient.sendAccountMigrateTxInput) |

### gRpcClient.4(params) ⇒ `Promise.<string>`

Send sendAcquireAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`sendAcquireAssetTxInput`](#GRpcClient.sendAcquireAssetTxInput) |

### gRpcClient.5(params) ⇒ `Promise.<string>`

Send sendActivateProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                     |
| ------ | ------------------------------------------------------------------------ |
| params | [`sendActivateProtocolTxInput`](#GRpcClient.sendActivateProtocolTxInput) |

### gRpcClient.6(params) ⇒ `Promise.<string>`

Send sendApproveWithdrawTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [`sendApproveWithdrawTxInput`](#GRpcClient.sendApproveWithdrawTxInput) |

### gRpcClient.7(params) ⇒ `Promise.<string>`

Send sendConsumeAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`sendConsumeAssetTxInput`](#GRpcClient.sendConsumeAssetTxInput) |

### gRpcClient.8(params) ⇒ `Promise.<string>`

Send sendCreateAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`sendCreateAssetTxInput`](#GRpcClient.sendCreateAssetTxInput) |

### gRpcClient.9(params) ⇒ `Promise.<string>`

Send sendDeactivateProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                         |
| ------ | ---------------------------------------------------------------------------- |
| params | [`sendDeactivateProtocolTxInput`](#GRpcClient.sendDeactivateProtocolTxInput) |

### gRpcClient.10(params) ⇒ `Promise.<string>`

Send sendDeclareTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`sendDeclareTxInput`](#GRpcClient.sendDeclareTxInput) |

### gRpcClient.11(params) ⇒ `Promise.<string>`

Send sendDelegateTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`sendDelegateTxInput`](#GRpcClient.sendDelegateTxInput) |

### gRpcClient.12(params) ⇒ `Promise.<string>`

Send sendDepositTokenTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`sendDepositTokenTxInput`](#GRpcClient.sendDepositTokenTxInput) |

### gRpcClient.13(params) ⇒ `Promise.<string>`

Send sendExchangeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`sendExchangeTxInput`](#GRpcClient.sendExchangeTxInput) |

### gRpcClient.14(params) ⇒ `Promise.<string>`

Send sendPokeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`sendPokeTxInput`](#GRpcClient.sendPokeTxInput) |

### gRpcClient.15(params) ⇒ `Promise.<string>`

Send sendRefuelTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`sendRefuelTxInput`](#GRpcClient.sendRefuelTxInput) |

### gRpcClient.16(params) ⇒ `Promise.<string>`

Send sendRetrieveSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`sendRetrieveSwapTxInput`](#GRpcClient.sendRetrieveSwapTxInput) |

### gRpcClient.17(params) ⇒ `Promise.<string>`

Send sendRevokeDelegateTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [`sendRevokeDelegateTxInput`](#GRpcClient.sendRevokeDelegateTxInput) |

### gRpcClient.18(params) ⇒ `Promise.<string>`

Send sendRevokeSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`sendRevokeSwapTxInput`](#GRpcClient.sendRevokeSwapTxInput) |

### gRpcClient.19(params) ⇒ `Promise.<string>`

Send sendRevokeWithdrawTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [`sendRevokeWithdrawTxInput`](#GRpcClient.sendRevokeWithdrawTxInput) |

### gRpcClient.20(params) ⇒ `Promise.<string>`

Send sendSetupSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`sendSetupSwapTxInput`](#GRpcClient.sendSetupSwapTxInput) |

### gRpcClient.21(params) ⇒ `Promise.<string>`

Send sendTransferTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`sendTransferTxInput`](#GRpcClient.sendTransferTxInput) |

### gRpcClient.22(params) ⇒ `Promise.<string>`

Send sendUpdateAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`sendUpdateAssetTxInput`](#GRpcClient.sendUpdateAssetTxInput) |

### gRpcClient.23(params) ⇒ `Promise.<string>`

Send sendUpdateValidatorTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [`sendUpdateValidatorTxInput`](#GRpcClient.sendUpdateValidatorTxInput) |

### gRpcClient.24(params) ⇒ `Promise.<string>`

Send sendUpgradeNodeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`sendUpgradeNodeTxInput`](#GRpcClient.sendUpgradeNodeTxInput) |

### gRpcClient.25(params) ⇒ `Promise.<string>`

Send sendWithdrawTokenTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.<string>` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [`sendWithdrawTokenTxInput`](#GRpcClient.sendWithdrawTokenTxInput) |

### gRpcClient.0(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeConsensusUpgradeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                       |
| ------ | ------------------------------------------ |
| params | `GRpcClient.encodeConsensusUpgradeTxInput` |

### gRpcClient.1(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeDeployProtocolTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | `GRpcClient.encodeDeployProtocolTxInput` |

### gRpcClient.2(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeSysUpgradeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                 |
| ------ | ------------------------------------ |
| params | `GRpcClient.encodeSysUpgradeTxInput` |

### gRpcClient.3(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeAccountMigrateTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | `GRpcClient.encodeAccountMigrateTxInput` |

### gRpcClient.4(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeAcquireAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                   |
| ------ | -------------------------------------- |
| params | `GRpcClient.encodeAcquireAssetTxInput` |

### gRpcClient.5(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeActivateProtocolTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                       |
| ------ | ------------------------------------------ |
| params | `GRpcClient.encodeActivateProtocolTxInput` |

### gRpcClient.6(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeApproveWithdrawTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                      |
| ------ | ----------------------------------------- |
| params | `GRpcClient.encodeApproveWithdrawTxInput` |

### gRpcClient.7(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeConsumeAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                   |
| ------ | -------------------------------------- |
| params | `GRpcClient.encodeConsumeAssetTxInput` |

### gRpcClient.8(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeCreateAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                  |
| ------ | ------------------------------------- |
| params | `GRpcClient.encodeCreateAssetTxInput` |

### gRpcClient.9(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeDeactivateProtocolTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                         |
| ------ | -------------------------------------------- |
| params | `GRpcClient.encodeDeactivateProtocolTxInput` |

### gRpcClient.10(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeDeclareTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                              |
| ------ | --------------------------------- |
| params | `GRpcClient.encodeDeclareTxInput` |

### gRpcClient.11(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeDelegateTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                               |
| ------ | ---------------------------------- |
| params | `GRpcClient.encodeDelegateTxInput` |

### gRpcClient.12(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeDepositTokenTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                   |
| ------ | -------------------------------------- |
| params | `GRpcClient.encodeDepositTokenTxInput` |

### gRpcClient.13(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeExchangeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                               |
| ------ | ---------------------------------- |
| params | `GRpcClient.encodeExchangeTxInput` |

### gRpcClient.14(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodePokeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                           |
| ------ | ------------------------------ |
| params | `GRpcClient.encodePokeTxInput` |

### gRpcClient.15(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeRefuelTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                             |
| ------ | -------------------------------- |
| params | `GRpcClient.encodeRefuelTxInput` |

### gRpcClient.16(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeRetrieveSwapTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                   |
| ------ | -------------------------------------- |
| params | `GRpcClient.encodeRetrieveSwapTxInput` |

### gRpcClient.17(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeRevokeDelegateTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | `GRpcClient.encodeRevokeDelegateTxInput` |

### gRpcClient.18(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeRevokeSwapTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                 |
| ------ | ------------------------------------ |
| params | `GRpcClient.encodeRevokeSwapTxInput` |

### gRpcClient.19(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeRevokeWithdrawTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | `GRpcClient.encodeRevokeWithdrawTxInput` |

### gRpcClient.20(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeSetupSwapTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                |
| ------ | ----------------------------------- |
| params | `GRpcClient.encodeSetupSwapTxInput` |

### gRpcClient.21(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeTransferTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                               |
| ------ | ---------------------------------- |
| params | `GRpcClient.encodeTransferTxInput` |

### gRpcClient.22(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeUpdateAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                  |
| ------ | ------------------------------------- |
| params | `GRpcClient.encodeUpdateAssetTxInput` |

### gRpcClient.23(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeUpdateValidatorTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                      |
| ------ | ----------------------------------------- |
| params | `GRpcClient.encodeUpdateValidatorTxInput` |

### gRpcClient.24(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeUpgradeNodeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                  |
| ------ | ------------------------------------- |
| params | `GRpcClient.encodeUpgradeNodeTxInput` |

### gRpcClient.25(params) ⇒ [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput)

Encode a encodeWithdrawTokenTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.<TxEncodeOutput>`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                    |
| ------ | --------------------------------------- |
| params | `GRpcClient.encodeWithdrawTokenTxInput` |

### GRpcClient.TxEncodeOutput : `object`

Structure of GRpcClient.TxEncodeOutput

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     | Description                                                                            |
| ------ | -------- | -------------------------------------------------------------------------------------- |
| object | `object` | the transaction object, human readable                                                 |
| buffer | `buffer` | the transaction binary presentation, can be used to signing, encoding to other formats |

### GRpcClient.RequestSendTx : `object`

Structure of GRpcClient.RequestSendTx

```javascript
{
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "delegator": "arcblock",
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      }
    ],
    "itx": {
      "type": "string",
      "value": "ABCD 1234"
    }
  },
  "wallet": {
    "type": {
      "pk": 0,
      "hash": 0,
      "address": 0,
      "role": 0
    },
    "sk": {},
    "pk": {},
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "token": "arcblock",
  "commit": true
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                     |
| ------ | ---------------------------------------- |
| tx     | [`Transaction`](#GRpcClient.Transaction) |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo)   |
| token  | `string`                                 |
| commit | `boolean`                                |

### GRpcClient.ResponseSendTx : `object`

Structure of GRpcClient.ResponseSendTx

```javascript
{
  "code": 0,
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| code | `GRpcClient.StatusCode` |
| hash | `string`                |

### GRpcClient.RequestGetTx : `object`

Structure of GRpcClient.RequestGetTx

```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| hash | `string` |

### GRpcClient.ResponseGetTx : `object`

Structure of GRpcClient.ResponseGetTx

```javascript
{
  "code": 0,
  "info": {
    "tx": {
      "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "nonce": 5,
      "chainId": "arcblock",
      "pk": {},
      "gas": 2,
      "delegator": "arcblock",
      "signature": {},
      "signatures": [
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
          "delegator": "arcblock",
          "data": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
          "delegator": "arcblock",
          "data": {
            "type": "string",
            "value": "ABCD 1234"
          }
        }
      ],
      "itx": {
        "type": "string",
        "value": "ABCD 1234"
      }
    },
    "height": 5,
    "index": 2,
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "tags": [
      {
        "key": {},
        "value": {}
      },
      {
        "key": {},
        "value": {}
      }
    ],
    "code": 0,
    "time": "2019-12-22T08:40:02.466Z"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                             |
| ---- | ------------------------------------------------ |
| code | `GRpcClient.StatusCode`                          |
| info | [`TransactionInfo`](#GRpcClient.TransactionInfo) |

### GRpcClient.RequestGetBlock : `object`

Structure of GRpcClient.RequestGetBlock

```javascript
{
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| height | `number` |

### GRpcClient.ResponseGetBlock : `object`

Structure of GRpcClient.ResponseGetBlock

```javascript
{
  "code": 0,
  "block": {
    "height": 5,
    "numTxs": 2,
    "time": "2019-12-22T08:40:02.460Z",
    "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "txs": [
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2019-12-22T08:40:02.460Z"
      },
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2019-12-22T08:40:02.461Z"
      }
    ],
    "totalTxs": 5,
    "invalidTxs": [
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2019-12-22T08:40:02.461Z"
      },
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2019-12-22T08:40:02.461Z"
      }
    ],
    "txsHashes": [
      "arcblock",
      "arcblock"
    ],
    "invalidTxsHashes": [
      "arcblock",
      "arcblock"
    ],
    "consensusHash": {},
    "dataHash": {},
    "evidenceHash": {},
    "lastCommitHash": {},
    "lastResultsHash": {},
    "nextValidatorsHash": {},
    "validatorsHash": {},
    "version": {
      "Block": 5,
      "App": 5
    },
    "lastBlockId": {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "partsHeader": {
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
      }
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                 |
| ----- | ------------------------------------ |
| code  | `GRpcClient.StatusCode`              |
| block | [`BlockInfo`](#GRpcClient.BlockInfo) |

### GRpcClient.RequestGetBlocks : `object`

Structure of GRpcClient.RequestGetBlocks

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "heightFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "emptyExcluded": true
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                     |
| ------------- | ---------------------------------------- |
| paging        | [`PageInput`](#GRpcClient.PageInput)     |
| heightFilter  | [`RangeFilter`](#GRpcClient.RangeFilter) |
| emptyExcluded | `boolean`                                |

### GRpcClient.ResponseGetBlocks : `object`

Structure of GRpcClient.ResponseGetBlocks

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "blocks": [
    {
      "height": 5,
      "numTxs": 2,
      "time": "2019-12-22T08:40:02.461Z",
      "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "totalTxs": 5,
      "txsHashes": [
        "arcblock",
        "arcblock"
      ],
      "invalidTxsHashes": [
        "arcblock",
        "arcblock"
      ],
      "consensusHash": {},
      "dataHash": {},
      "evidenceHash": {},
      "lastCommitHash": {},
      "lastResultsHash": {},
      "nextValidatorsHash": {},
      "validatorsHash": {},
      "version": {
        "Block": 5,
        "App": 5
      },
      "lastBlockId": {
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "partsHeader": {
          "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
        }
      }
    },
    {
      "height": 5,
      "numTxs": 2,
      "time": "2019-12-22T08:40:02.461Z",
      "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "totalTxs": 5,
      "txsHashes": [
        "arcblock",
        "arcblock"
      ],
      "invalidTxsHashes": [
        "arcblock",
        "arcblock"
      ],
      "consensusHash": {},
      "dataHash": {},
      "evidenceHash": {},
      "lastCommitHash": {},
      "lastResultsHash": {},
      "nextValidatorsHash": {},
      "validatorsHash": {},
      "version": {
        "Block": 5,
        "App": 5
      },
      "lastBlockId": {
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "partsHeader": {
          "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
        }
      }
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                                     |
| ------ | -------------------------------------------------------- |
| code   | `GRpcClient.StatusCode`                                  |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                       |
| blocks | [`Array.<BlockInfoSimple>`](#GRpcClient.BlockInfoSimple) |

### GRpcClient.RequestDeclareNode : `object`

Structure of GRpcClient.RequestDeclareNode

```javascript
{
  "validator": true,
  "issuer": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type      |
| --------- | --------- |
| validator | `boolean` |
| issuer    | `string`  |

### GRpcClient.ResponseDeclareNode : `object`

Structure of GRpcClient.ResponseDeclareNode

```javascript
{
  "code": 0,
  "wallet": {
    "type": {
      "pk": 0,
      "hash": 0,
      "address": 0,
      "role": 0
    },
    "sk": {},
    "pk": {},
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "delegator": "arcblock",
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      }
    ],
    "itx": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                     |
| ------ | ---------------------------------------- |
| code   | `GRpcClient.StatusCode`                  |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo)   |
| tx     | [`Transaction`](#GRpcClient.Transaction) |

### GRpcClient.RequestGetAccountState : `object`

Structure of GRpcClient.RequestGetAccountState

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `string`         |
| keys    | `Array.<string>` |
| height  | `number`         |

### GRpcClient.ResponseGetAccountState : `object`

Structure of GRpcClient.ResponseGetAccountState

```javascript
{
  "code": 0,
  "state": {
    "nonce": 5,
    "numTxs": 5,
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "pk": {},
    "type": {
      "pk": 0,
      "hash": 0,
      "address": 0,
      "role": 0
    },
    "moniker": "arcblock",
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2019-12-22T08:40:02.462Z",
      "renaissanceTime": "2019-12-22T08:40:02.462Z"
    },
    "issuer": "arcblock",
    "migratedTo": [
      "arcblock",
      "arcblock"
    ],
    "migratedFrom": [
      "arcblock",
      "arcblock"
    ],
    "numAssets": 5,
    "stake": {
      "recentStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      },
      "recentReceivedStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      }
    },
    "pinnedFiles": {
      "items": [
        {},
        {}
      ],
      "typeUrl": "arcblock",
      "maxItems": 2,
      "circular": true,
      "fifo": true
    },
    "poke": {},
    "withdrawItems": {
      "items": [
        {},
        {}
      ],
      "typeUrl": "arcblock",
      "maxItems": 2,
      "circular": true,
      "fifo": true
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                       |
| ----- | ------------------------------------------ |
| code  | `GRpcClient.StatusCode`                    |
| state | [`AccountState`](#GRpcClient.AccountState) |

### GRpcClient.RequestGetAssetState : `object`

Structure of GRpcClient.RequestGetAssetState

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `string`         |
| keys    | `Array.<string>` |
| height  | `number`         |

### GRpcClient.ResponseGetAssetState : `object`

Structure of GRpcClient.ResponseGetAssetState

```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "owner": "arcblock",
    "moniker": "arcblock",
    "readonly": true,
    "transferrable": true,
    "ttl": 2,
    "consumedTime": "2019-12-22T08:40:02.462Z",
    "issuer": "arcblock",
    "parent": "arcblock",
    "stake": {
      "recentStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      },
      "recentReceivedStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      }
    },
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2019-12-22T08:40:02.462Z",
      "renaissanceTime": "2019-12-22T08:40:02.462Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                   |
| ----- | -------------------------------------- |
| code  | `GRpcClient.StatusCode`                |
| state | [`AssetState`](#GRpcClient.AssetState) |

### GRpcClient.RequestGetProtocolState : `object`

Structure of GRpcClient.RequestGetProtocolState

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `string`         |
| keys    | `Array.<string>` |
| height  | `number`         |

### GRpcClient.ResponseGetProtocolState : `object`

Structure of GRpcClient.ResponseGetProtocolState

```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "itx": {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "name": "arcblock",
      "version": 2,
      "namespace": "arcblock",
      "description": "arcblock",
      "typeUrls": [
        {
          "url": "arcblock",
          "module": "arcblock"
        },
        {
          "url": "arcblock",
          "module": "arcblock"
        }
      ],
      "proto": "arcblock",
      "pipeline": "arcblock",
      "sources": [
        "arcblock",
        "arcblock"
      ],
      "code": [
        {
          "checksum": {},
          "binary": {}
        },
        {
          "checksum": {},
          "binary": {}
        }
      ],
      "tags": [
        "arcblock",
        "arcblock"
      ],
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    },
    "rootHash": {},
    "status": 0,
    "migratedTo": [
      "arcblock",
      "arcblock"
    ],
    "migratedFrom": [
      "arcblock",
      "arcblock"
    ],
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2019-12-22T08:40:02.463Z",
      "renaissanceTime": "2019-12-22T08:40:02.463Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                         |
| ----- | -------------------------------------------- |
| code  | `GRpcClient.StatusCode`                      |
| state | [`ProtocolState`](#GRpcClient.ProtocolState) |

### GRpcClient.RequestGetStakeState : `object`

Structure of GRpcClient.RequestGetStakeState

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `string`         |
| keys    | `Array.<string>` |
| height  | `number`         |

### GRpcClient.ResponseGetStakeState : `object`

Structure of GRpcClient.ResponseGetStakeState

```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "message": "arcblock",
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2019-12-22T08:40:02.463Z",
      "renaissanceTime": "2019-12-22T08:40:02.463Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                   |
| ----- | -------------------------------------- |
| code  | `GRpcClient.StatusCode`                |
| state | [`StakeState`](#GRpcClient.StakeState) |

### GRpcClient.RequestGetForgeState : `object`

Structure of GRpcClient.RequestGetForgeState

```javascript
{
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type             |
| ------ | ---------------- |
| keys   | `Array.<string>` |
| height | `number`         |

### GRpcClient.ResponseGetForgeState : `object`

Structure of GRpcClient.ResponseGetForgeState

```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "consensus": {
      "maxBytes": 5,
      "maxGas": 4,
      "maxValidators": 2,
      "maxCandidates": 2,
      "pubKeyTypes": [
        "arcblock",
        "arcblock"
      ],
      "validators": [
        {
          "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "power": 5
        },
        {
          "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "power": 5
        }
      ],
      "validatorChanged": true,
      "paramChanged": true
    },
    "tasks": {
      "5": {
        "item": [
          {
            "type": 0,
            "dataHash": "arcblock",
            "actions": [
              null,
              null
            ]
          },
          {
            "type": 0,
            "dataHash": "arcblock",
            "actions": [
              null,
              null
            ]
          }
        ]
      }
    },
    "stakeSummary": {
      "2": {
        "context": {
          "genesisTx": "arcblock",
          "renaissanceTx": "arcblock",
          "genesisTime": "2019-12-22T08:40:02.463Z",
          "renaissanceTime": "2019-12-22T08:40:02.463Z"
        }
      }
    },
    "version": "arcblock",
    "token": {
      "name": "arcblock",
      "symbol": "arcblock",
      "unit": "arcblock",
      "description": "arcblock",
      "icon": {},
      "decimal": 2,
      "initialSupply": 5,
      "totalSupply": 5,
      "inflationRate": 2
    },
    "txConfig": {
      "maxAssetSize": 2,
      "maxListSize": 2,
      "maxMultisig": 2,
      "minimumStake": 5,
      "declare": {
        "restricted": true,
        "hierarchy": 2
      },
      "delegate": {
        "deltaInterval": 2,
        "typeUrls": [
          "arcblock",
          "arcblock"
        ]
      },
      "poke": {
        "dailyLimit": 5,
        "amount": 5,
        "enabled": true
      },
      "stake": {
        "timeoutGeneral": 2,
        "timeoutStakeForNode": 2
      }
    },
    "protocols": [
      {
        "name": "arcblock",
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
      },
      {
        "name": "arcblock",
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
      }
    ],
    "gas": {
      "arcblock": 2
    },
    "upgradeInfo": {
      "height": 5,
      "version": "arcblock"
    },
    "accountConfig": {
      "arcblock": {
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "pk": {}
      }
    },
    "tokenSwapConfig": {
      "commissionHolderAddress": "arcblock",
      "withdrawInterval": 2,
      "commissionRate": 2,
      "revokeCommission": 2
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                   |
| ----- | -------------------------------------- |
| code  | `GRpcClient.StatusCode`                |
| state | [`ForgeState`](#GRpcClient.ForgeState) |

### GRpcClient.RequestGetSwapState : `object`

Structure of GRpcClient.RequestGetSwapState

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `string`         |
| keys    | `Array.<string>` |
| height  | `number`         |

### GRpcClient.ResponseGetSwapState : `object`

Structure of GRpcClient.ResponseGetSwapState

```javascript
{
  "code": 0,
  "state": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "hashkey": {},
    "sender": "arcblock",
    "receiver": "arcblock",
    "assets": [
      "arcblock",
      "arcblock"
    ],
    "locktime": 2,
    "hashlock": {},
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2019-12-22T08:40:02.463Z",
      "renaissanceTime": "2019-12-22T08:40:02.463Z"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                 |
| ----- | ------------------------------------ |
| code  | `GRpcClient.StatusCode`              |
| state | [`SwapState`](#GRpcClient.SwapState) |

### GRpcClient.RequestGetDelegateState : `object`

Structure of GRpcClient.RequestGetDelegateState

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `string`         |
| keys    | `Array.<string>` |
| height  | `number`         |

### GRpcClient.ResponseGetDelegateState : `object`

Structure of GRpcClient.ResponseGetDelegateState

```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "ops": {
      "arcblock": {
        "rule": "arcblock",
        "numTxs": 5,
        "numTxsDelta": 5
      }
    },
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2019-12-22T08:40:02.463Z",
      "renaissanceTime": "2019-12-22T08:40:02.463Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                         |
| ----- | -------------------------------------------- |
| code  | `GRpcClient.StatusCode`                      |
| state | [`DelegateState`](#GRpcClient.DelegateState) |

### GRpcClient.RequestStoreFile : `object`

Structure of GRpcClient.RequestStoreFile

```javascript
{
  "chunk": {}
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| chunk | `Uint8Array` |

### GRpcClient.ResponseStoreFile : `object`

Structure of GRpcClient.ResponseStoreFile

```javascript
{
  "code": 0,
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| code | `GRpcClient.StatusCode` |
| hash | `string`                |

### GRpcClient.RequestLoadFile : `object`

Structure of GRpcClient.RequestLoadFile

```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| hash | `string` |

### GRpcClient.ResponseLoadFile : `object`

Structure of GRpcClient.ResponseLoadFile

```javascript
{
  "code": 0,
  "chunk": {}
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                    |
| ----- | ----------------------- |
| code  | `GRpcClient.StatusCode` |
| chunk | `Uint8Array`            |

### GRpcClient.RequestPinFile : `object`

Structure of GRpcClient.RequestPinFile

```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| hash | `string` |

### GRpcClient.ResponsePinFile : `object`

Structure of GRpcClient.ResponsePinFile

```javascript
{
  "code": 0
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| code | `GRpcClient.StatusCode` |

### GRpcClient.RequestGetChainInfo : `object`

Structure of GRpcClient.RequestGetChainInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  

### GRpcClient.ResponseGetChainInfo : `object`

Structure of GRpcClient.ResponseGetChainInfo

```javascript
{
  "code": 0,
  "info": {
    "id": "arcblock",
    "network": "arcblock",
    "moniker": "arcblock",
    "consensusVersion": "arcblock",
    "synced": true,
    "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "blockHash": {},
    "blockHeight": 5,
    "blockTime": "2019-12-22T08:40:02.461Z",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "votingPower": 5,
    "totalTxs": 5,
    "version": "arcblock",
    "forgeAppsVersion": {
      "arcblock": "arcblock"
    },
    "supportedTxs": [
      "arcblock",
      "arcblock"
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                 |
| ---- | ------------------------------------ |
| code | `GRpcClient.StatusCode`              |
| info | [`ChainInfo`](#GRpcClient.ChainInfo) |

### GRpcClient.RequestGetNodeInfo : `object`

Structure of GRpcClient.RequestGetNodeInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  

### GRpcClient.ResponseGetNodeInfo : `object`

Structure of GRpcClient.ResponseGetNodeInfo

```javascript
{
  "code": 0,
  "info": {
    "id": "arcblock",
    "network": "arcblock",
    "moniker": "arcblock",
    "consensusVersion": "arcblock",
    "synced": true,
    "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "blockHash": {},
    "blockHeight": 5,
    "blockTime": "2019-12-22T08:40:02.461Z",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "votingPower": 5,
    "totalTxs": 5,
    "version": "arcblock",
    "forgeAppsVersion": {
      "arcblock": "arcblock"
    },
    "supportedTxs": [
      "arcblock",
      "arcblock"
    ],
    "ip": "arcblock",
    "geoInfo": {
      "city": "arcblock",
      "country": "arcblock",
      "latitude": "12.2",
      "longitude": "12.2"
    },
    "p2pAddress": "arcblock"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | `GRpcClient.StatusCode`            |
| info | [`NodeInfo`](#GRpcClient.NodeInfo) |

### GRpcClient.RequestSearch : `object`

Structure of GRpcClient.RequestSearch

```javascript
{
  "key": "arcblock",
  "value": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| key   | `string` |
| value | `string` |

### GRpcClient.ResponseSearch : `object`

Structure of GRpcClient.ResponseSearch

```javascript
{
  "code": 0,
  "txs": [
    {
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "height": 5,
      "index": 2,
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "tags": [
        {
          "key": {},
          "value": {}
        },
        {
          "key": {},
          "value": {}
        }
      ],
      "code": 0,
      "time": "2019-12-22T08:40:02.462Z"
    },
    {
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "height": 5,
      "index": 2,
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "tags": [
        {
          "key": {},
          "value": {}
        },
        {
          "key": {},
          "value": {}
        }
      ],
      "code": 0,
      "time": "2019-12-22T08:40:02.462Z"
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                                     |
| ---- | -------------------------------------------------------- |
| code | `GRpcClient.StatusCode`                                  |
| txs  | [`Array.<TransactionInfo>`](#GRpcClient.TransactionInfo) |

### GRpcClient.RequestGetUnconfirmedTxs : `object`

Structure of GRpcClient.RequestGetUnconfirmedTxs

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                 |
| ------ | ------------------------------------ |
| paging | [`PageInput`](#GRpcClient.PageInput) |

### GRpcClient.ResponseGetUnconfirmedTxs : `object`

Structure of GRpcClient.ResponseGetUnconfirmedTxs

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "unconfirmedTxs": {
    "nTxs": 2,
    "txs": [
      {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      }
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name           | Type                                           |
| -------------- | ---------------------------------------------- |
| code           | `GRpcClient.StatusCode`                        |
| page           | [`PageInfo`](#GRpcClient.PageInfo)             |
| unconfirmedTxs | [`UnconfirmedTxs`](#GRpcClient.UnconfirmedTxs) |

### GRpcClient.RequestGetNetInfo : `object`

Structure of GRpcClient.RequestGetNetInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  

### GRpcClient.ResponseGetNetInfo : `object`

Structure of GRpcClient.ResponseGetNetInfo

```javascript
{
  "code": 0,
  "netInfo": {
    "listening": true,
    "listeners": [
      "arcblock",
      "arcblock"
    ],
    "nPeers": 2,
    "peers": [
      {
        "id": "arcblock",
        "network": "arcblock",
        "consensusVersion": "arcblock",
        "moniker": "arcblock",
        "ip": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      },
      {
        "id": "arcblock",
        "network": "arcblock",
        "consensusVersion": "arcblock",
        "moniker": "arcblock",
        "ip": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      }
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                             |
| ------- | -------------------------------- |
| code    | `GRpcClient.StatusCode`          |
| netInfo | [`NetInfo`](#GRpcClient.NetInfo) |

### GRpcClient.RequestGetValidatorsInfo : `object`

Structure of GRpcClient.RequestGetValidatorsInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  

### GRpcClient.ResponseGetValidatorsInfo : `object`

Structure of GRpcClient.ResponseGetValidatorsInfo

```javascript
{
  "code": 0,
  "validatorsInfo": {
    "blockHeight": 5,
    "validators": [
      {
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "pubKey": {
          "type": "arcblock",
          "data": {}
        },
        "votingPower": 5,
        "proposerPriority": "arcblock",
        "name": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      },
      {
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "pubKey": {
          "type": "arcblock",
          "data": {}
        },
        "votingPower": 5,
        "proposerPriority": "arcblock",
        "name": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      }
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name           | Type                                           |
| -------------- | ---------------------------------------------- |
| code           | `GRpcClient.StatusCode`                        |
| validatorsInfo | [`ValidatorsInfo`](#GRpcClient.ValidatorsInfo) |

### GRpcClient.RequestSubscribe : `object`

Structure of GRpcClient.RequestSubscribe

```javascript
{
  "topic": "arcblock",
  "filter": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| topic  | `string` |
| filter | `string` |

### GRpcClient.ResponseSubscribe : `object`

Structure of GRpcClient.ResponseSubscribe

```javascript
{
  "topic": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name               | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| code               | `GRpcClient.StatusCode`                              |
| topic              | `string`                                             |
| transfer           | [`Transaction`](#GRpcClient.Transaction)             |
| accountMigrate     | [`Transaction`](#GRpcClient.Transaction)             |
| confirm            | [`Transaction`](#GRpcClient.Transaction)             |
| createAsset        | [`Transaction`](#GRpcClient.Transaction)             |
| exchange           | [`Transaction`](#GRpcClient.Transaction)             |
| revoke             | [`Transaction`](#GRpcClient.Transaction)             |
| beginBlock         | [`RequestBeginBlock`](#GRpcClient.RequestBeginBlock) |
| endBlock           | [`RequestEndBlock`](#GRpcClient.RequestEndBlock)     |
| declare            | [`Transaction`](#GRpcClient.Transaction)             |
| updateAsset        | [`Transaction`](#GRpcClient.Transaction)             |
| consensusUpgrade   | [`Transaction`](#GRpcClient.Transaction)             |
| declareFile        | [`Transaction`](#GRpcClient.Transaction)             |
| sysUpgrade         | [`Transaction`](#GRpcClient.Transaction)             |
| stake              | [`Transaction`](#GRpcClient.Transaction)             |
| delegate           | [`Transaction`](#GRpcClient.Transaction)             |
| activateProtocol   | [`Transaction`](#GRpcClient.Transaction)             |
| deactivateProtocol | [`Transaction`](#GRpcClient.Transaction)             |
| revokeDelegate     | [`Transaction`](#GRpcClient.Transaction)             |
| depositToken       | [`Transaction`](#GRpcClient.Transaction)             |
| withdrawToken      | [`Transaction`](#GRpcClient.Transaction)             |
| approveWithdraw    | [`Transaction`](#GRpcClient.Transaction)             |
| revokeWithdraw     | [`Transaction`](#GRpcClient.Transaction)             |
| setupSwap          | [`Transaction`](#GRpcClient.Transaction)             |
| revokeSwap         | [`Transaction`](#GRpcClient.Transaction)             |
| retrieveSwap       | [`Transaction`](#GRpcClient.Transaction)             |
| poke               | [`Transaction`](#GRpcClient.Transaction)             |
| deployProtocol     | [`Transaction`](#GRpcClient.Transaction)             |
| consumeAsset       | [`Transaction`](#GRpcClient.Transaction)             |
| acquireAsset       | [`Transaction`](#GRpcClient.Transaction)             |
| upgradeNode        | [`Transaction`](#GRpcClient.Transaction)             |
| accountState       | [`AccountState`](#GRpcClient.AccountState)           |
| assetState         | [`AssetState`](#GRpcClient.AssetState)               |
| forgeState         | [`ForgeState`](#GRpcClient.ForgeState)               |
| stakeState         | [`StakeState`](#GRpcClient.StakeState)               |
| protocolState      | [`ProtocolState`](#GRpcClient.ProtocolState)         |
| delegateState      | [`DelegateState`](#GRpcClient.DelegateState)         |
| swapState          | [`SwapState`](#GRpcClient.SwapState)                 |

### GRpcClient.RequestUnsubscribe : `object`

Structure of GRpcClient.RequestUnsubscribe

```javascript
{
  "topic": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| topic | `string` |

### GRpcClient.ResponseUnsubscribe : `object`

Structure of GRpcClient.ResponseUnsubscribe

```javascript
{
  "code": 0
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| code | `GRpcClient.StatusCode` |

### GRpcClient.RequestGetConfig : `object`

Structure of GRpcClient.RequestGetConfig

```javascript
{
  "parsed": true
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type      |
| ------ | --------- |
| parsed | `boolean` |

### GRpcClient.ResponseGetConfig : `object`

Structure of GRpcClient.ResponseGetConfig

```javascript
{
  "code": 0,
  "config": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                    |
| ------ | ----------------------- |
| code   | `GRpcClient.StatusCode` |
| config | `string`                |

### GRpcClient.ByDay : `object`

Structure of GRpcClient.ByDay

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type     |
| --------- | -------- |
| startDate | `string` |
| endDate   | `string` |

### GRpcClient.ByHour : `object`

Structure of GRpcClient.ByHour

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| date | `string` |

### GRpcClient.RequestGetForgeStats : `object`

Structure of GRpcClient.RequestGetForgeStats

```javascript
{
  "dayInfo": {
    "startDate": "arcblock",
    "endDate": "arcblock"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| dayInfo | [`ByDay`](#GRpcClient.ByDay)   |
| date    | [`ByHour`](#GRpcClient.ByHour) |

### GRpcClient.ResponseGetForgeStats : `object`

Structure of GRpcClient.ResponseGetForgeStats

```javascript
{
  "code": 0,
  "forgeStats": {
    "numBlocks": [
      5,
      5
    ],
    "numTxs": [
      5,
      5
    ],
    "numStakes": [
      null,
      null
    ],
    "numValidators": [
      2,
      2
    ],
    "numAccountMigrateTxs": [
      5,
      5
    ],
    "numCreateAssetTxs": [
      5,
      5
    ],
    "numConsensusUpgradeTxs": [
      2,
      2
    ],
    "numDeclareTxs": [
      5,
      5
    ],
    "numDeclareFileTxs": [
      5,
      5
    ],
    "numExchangeTxs": [
      5,
      5
    ],
    "numStakeTxs": [
      5,
      5
    ],
    "numSysUpgradeTxs": [
      2,
      2
    ],
    "numTransferTxs": [
      5,
      5
    ],
    "numUpdateAssetTxs": [
      5,
      5
    ],
    "numConsumeAssetTxs": [
      5,
      5
    ],
    "numPokeTxs": [
      5,
      5
    ],
    "tps": [
      2,
      2
    ],
    "maxTps": 2,
    "avgTps": 2,
    "avgBlockTime": "12.2"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                   |
| ---------- | -------------------------------------- |
| code       | `GRpcClient.StatusCode`                |
| forgeStats | [`ForgeStats`](#GRpcClient.ForgeStats) |

### GRpcClient.RequestListTransactions : `object`

Structure of GRpcClient.RequestListTransactions

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "timeFilter": {
    "startDateTime": "arcblock",
    "endDateTime": "arcblock"
  },
  "addressFilter": {
    "sender": "arcblock",
    "receiver": "arcblock",
    "direction": 0
  },
  "typeFilter": {
    "types": [
      "arcblock",
      "arcblock"
    ]
  },
  "validityFilter": {
    "validity": 0
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name           | Type                                           |
| -------------- | ---------------------------------------------- |
| paging         | [`PageInput`](#GRpcClient.PageInput)           |
| timeFilter     | [`TimeFilter`](#GRpcClient.TimeFilter)         |
| addressFilter  | [`AddressFilter`](#GRpcClient.AddressFilter)   |
| typeFilter     | [`TypeFilter`](#GRpcClient.TypeFilter)         |
| validityFilter | [`ValidityFilter`](#GRpcClient.ValidityFilter) |

### GRpcClient.ResponseListTransactions : `object`

Structure of GRpcClient.ResponseListTransactions

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "transactions": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                                                           |
| ------------ | -------------------------------------------------------------- |
| code         | `GRpcClient.StatusCode`                                        |
| page         | [`PageInfo`](#GRpcClient.PageInfo)                             |
| transactions | [`Array.<IndexedTransaction>`](#GRpcClient.IndexedTransaction) |

### GRpcClient.RequestListAssets : `object`

Structure of GRpcClient.RequestListAssets

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "ownerAddress": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                                 |
| ------------ | ------------------------------------ |
| paging       | [`PageInput`](#GRpcClient.PageInput) |
| ownerAddress | `string`                             |

### GRpcClient.ResponseListAssets : `object`

Structure of GRpcClient.ResponseListAssets

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "assets": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "owner": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "readonly": true,
      "consumedTime": "arcblock",
      "issuer": "arcblock",
      "parent": "arcblock",
      "transferrable": true,
      "ttl": 5,
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "owner": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "readonly": true,
      "consumedTime": "arcblock",
      "issuer": "arcblock",
      "parent": "arcblock",
      "transferrable": true,
      "ttl": 5,
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                                         |
| ------ | ------------------------------------------------------------ |
| code   | `GRpcClient.StatusCode`                                      |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                           |
| assets | [`Array.<IndexedAssetState>`](#GRpcClient.IndexedAssetState) |

### GRpcClient.RequestListStakes : `object`

Structure of GRpcClient.RequestListStakes

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "addressFilter": {
    "sender": "arcblock",
    "receiver": "arcblock",
    "direction": 0
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                         |
| ------------- | -------------------------------------------- |
| paging        | [`PageInput`](#GRpcClient.PageInput)         |
| addressFilter | [`AddressFilter`](#GRpcClient.AddressFilter) |

### GRpcClient.ResponseListStakes : `object`

Structure of GRpcClient.ResponseListStakes

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "stakes": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "message": "arcblock",
      "type": 2
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "message": "arcblock",
      "type": 2
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                                         |
| ------ | ------------------------------------------------------------ |
| code   | `GRpcClient.StatusCode`                                      |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                           |
| stakes | [`Array.<IndexedStakeState>`](#GRpcClient.IndexedStakeState) |

### GRpcClient.RequestListAccount : `object`

Structure of GRpcClient.RequestListAccount

```javascript
{
  "ownerAddress": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type     |
| ------------ | -------- |
| ownerAddress | `string` |

### GRpcClient.ResponseListAccount : `object`

Structure of GRpcClient.ResponseListAccount

```javascript
{
  "code": 0,
  "account": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "numAssets": 5,
    "numTxs": 5,
    "nonce": 5,
    "genesisTime": "arcblock",
    "renaissanceTime": "arcblock",
    "moniker": "arcblock",
    "migratedFrom": "arcblock",
    "migratedTo": "arcblock",
    "recentNumTxs": [
      5,
      5
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                                     |
| ------- | -------------------------------------------------------- |
| code    | `GRpcClient.StatusCode`                                  |
| account | [`IndexedAccountState`](#GRpcClient.IndexedAccountState) |

### GRpcClient.RequestListTopAccounts : `object`

Structure of GRpcClient.RequestListTopAccounts

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                 |
| ------ | ------------------------------------ |
| paging | [`PageInput`](#GRpcClient.PageInput) |

### GRpcClient.ResponseListTopAccounts : `object`

Structure of GRpcClient.ResponseListTopAccounts

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "accounts": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numAssets": 5,
      "numTxs": 5,
      "nonce": 5,
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "migratedFrom": "arcblock",
      "migratedTo": "arcblock",
      "recentNumTxs": [
        5,
        5
      ]
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numAssets": 5,
      "numTxs": 5,
      "nonce": 5,
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "migratedFrom": "arcblock",
      "migratedTo": "arcblock",
      "recentNumTxs": [
        5,
        5
      ]
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| code     | `GRpcClient.StatusCode`                                          |
| page     | [`PageInfo`](#GRpcClient.PageInfo)                               |
| accounts | [`Array.<IndexedAccountState>`](#GRpcClient.IndexedAccountState) |

### GRpcClient.RequestListAssetTransactions : `object`

Structure of GRpcClient.RequestListAssetTransactions

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                 |
| ------- | ------------------------------------ |
| paging  | [`PageInput`](#GRpcClient.PageInput) |
| address | `string`                             |

### GRpcClient.ResponseListAssetTransactions : `object`

Structure of GRpcClient.ResponseListAssetTransactions

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "transactions": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                                                           |
| ------------ | -------------------------------------------------------------- |
| code         | `GRpcClient.StatusCode`                                        |
| page         | [`PageInfo`](#GRpcClient.PageInfo)                             |
| transactions | [`Array.<IndexedTransaction>`](#GRpcClient.IndexedTransaction) |

### GRpcClient.RequestListBlocks : `object`

Structure of GRpcClient.RequestListBlocks

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "timeFilter": {
    "startDateTime": "arcblock",
    "endDateTime": "arcblock"
  },
  "heightFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "numTxsFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "numInvalidTxsFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                | Type                                     |
| ------------------- | ---------------------------------------- |
| paging              | [`PageInput`](#GRpcClient.PageInput)     |
| proposer            | `string`                                 |
| timeFilter          | [`TimeFilter`](#GRpcClient.TimeFilter)   |
| heightFilter        | [`RangeFilter`](#GRpcClient.RangeFilter) |
| numTxsFilter        | [`RangeFilter`](#GRpcClient.RangeFilter) |
| numInvalidTxsFilter | [`RangeFilter`](#GRpcClient.RangeFilter) |

### GRpcClient.ResponseListBlocks : `object`

Structure of GRpcClient.ResponseListBlocks

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "blocks": [
    {
      "height": 5,
      "time": "arcblock",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numTxs": 5,
      "numInvalidTxs": 5
    },
    {
      "height": 5,
      "time": "arcblock",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numTxs": 5,
      "numInvalidTxs": 5
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                               |
| ------ | -------------------------------------------------- |
| code   | `GRpcClient.StatusCode`                            |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                 |
| blocks | [`Array.<IndexedBlock>`](#GRpcClient.IndexedBlock) |

### GRpcClient.RequestListSwap : `object`

Structure of GRpcClient.RequestListSwap

```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "sender": "arcblock",
  "receiver": "arcblock",
  "available": true
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                 |
| --------- | ------------------------------------ |
| paging    | [`PageInput`](#GRpcClient.PageInput) |
| sender    | `string`                             |
| receiver  | `string`                             |
| available | `boolean`                            |

### GRpcClient.ResponseListSwap : `object`

Structure of GRpcClient.ResponseListSwap

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "swap": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "hashkey": {},
      "sender": "arcblock",
      "receiver": "arcblock",
      "assets": [
        "arcblock",
        "arcblock"
      ],
      "locktime": 2,
      "hashlock": {},
      "context": {
        "genesisTx": "arcblock",
        "renaissanceTx": "arcblock",
        "genesisTime": "2019-12-22T08:40:02.465Z",
        "renaissanceTime": "2019-12-22T08:40:02.465Z"
      }
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "hashkey": {},
      "sender": "arcblock",
      "receiver": "arcblock",
      "assets": [
        "arcblock",
        "arcblock"
      ],
      "locktime": 2,
      "hashlock": {},
      "context": {
        "genesisTx": "arcblock",
        "renaissanceTx": "arcblock",
        "genesisTime": "2019-12-22T08:40:02.465Z",
        "renaissanceTime": "2019-12-22T08:40:02.465Z"
      }
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                         |
| ---- | -------------------------------------------- |
| code | `GRpcClient.StatusCode`                      |
| page | [`PageInfo`](#GRpcClient.PageInfo)           |
| swap | [`Array.<SwapState>`](#GRpcClient.SwapState) |

### GRpcClient.RequestGetSwapStatistics : `object`

Structure of GRpcClient.RequestGetSwapStatistics

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

### GRpcClient.ResponseGetSwapStatistics : `object`

Structure of GRpcClient.ResponseGetSwapStatistics

```javascript
{
  "code": 0,
  "statistics": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "lockedAssetsOut": 2,
    "lockedAssetsIn": 2
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                           |
| ---------- | ---------------------------------------------- |
| code       | `GRpcClient.StatusCode`                        |
| statistics | [`SwapStatistics`](#GRpcClient.SwapStatistics) |

### GRpcClient.RequestGetHealthStatus : `object`

Structure of GRpcClient.RequestGetHealthStatus

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  

### GRpcClient.ResponseGetHealthStatus : `object`

Structure of GRpcClient.ResponseGetHealthStatus

```javascript
{
  "code": 0,
  "healthStatus": {
    "consensus": {
      "health": true,
      "synced": true,
      "blockHeight": 5
    },
    "network": {
      "health": true,
      "numPeers": 2
    },
    "storage": {
      "health": true,
      "indexerServer": "arcblock",
      "stateDb": "arcblock",
      "diskSpace": {
        "forgeUsage": "arcblock",
        "total": "arcblock"
      }
    },
    "forge": {
      "health": true,
      "abiServer": "arcblock",
      "forgeWeb": "arcblock",
      "abciServer": {
        "abciConsensus": "arcblock",
        "abciInfo": "arcblock"
      }
    }
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                                       |
| ------------ | ------------------------------------------ |
| code         | `GRpcClient.StatusCode`                    |
| healthStatus | [`HealthStatus`](#GRpcClient.HealthStatus) |

### GRpcClient.BigUint : `object`

Structure of GRpcClient.BigUint

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| value | `Uint8Array` |

### GRpcClient.BigSint : `object`

Structure of GRpcClient.BigSint

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| value | `Uint8Array` |
| minus | `boolean`    |

### GRpcClient.WalletType : `object`

Structure of GRpcClient.WalletType

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                      |
| ------- | ------------------------- |
| pk      | `GRpcClient.KeyType`      |
| hash    | `GRpcClient.HashType`     |
| address | `GRpcClient.EncodingType` |
| role    | `GRpcClient.RoleType`     |

### GRpcClient.WalletInfo : `object`

Structure of GRpcClient.WalletInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                   |
| ------- | -------------------------------------- |
| type    | [`WalletType`](#GRpcClient.WalletType) |
| sk      | `Uint8Array`                           |
| pk      | `Uint8Array`                           |
| address | `string`                               |

### GRpcClient.ChainInfo : `object`

Structure of GRpcClient.ChainInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                                 |
| ---------------- | ------------------------------------ |
| id               | `string`                             |
| network          | `string`                             |
| moniker          | `string`                             |
| consensusVersion | `string`                             |
| synced           | `boolean`                            |
| appHash          | `Uint8Array`                         |
| blockHash        | `Uint8Array`                         |
| blockHeight      | `number`                             |
| blockTime        | [`Timestamp`](#GRpcClient.Timestamp) |
| address          | `string`                             |
| votingPower      | `number`                             |
| totalTxs         | `number`                             |
| version          | `string`                             |
| forgeAppsVersion | `string`                             |
| supportedTxs     | `Array.<string>`                     |

### GRpcClient.NodeInfo : `object`

Structure of GRpcClient.NodeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                                 |
| ---------------- | ------------------------------------ |
| id               | `string`                             |
| network          | `string`                             |
| moniker          | `string`                             |
| consensusVersion | `string`                             |
| synced           | `boolean`                            |
| appHash          | `Uint8Array`                         |
| blockHash        | `Uint8Array`                         |
| blockHeight      | `number`                             |
| blockTime        | [`Timestamp`](#GRpcClient.Timestamp) |
| address          | `string`                             |
| votingPower      | `number`                             |
| totalTxs         | `number`                             |
| version          | `string`                             |
| forgeAppsVersion | `string`                             |
| supportedTxs     | `Array.<string>`                     |
| ip               | `string`                             |
| geoInfo          | [`GeoInfo`](#GRpcClient.GeoInfo)     |
| p2pAddress       | `string`                             |

### GRpcClient.Validator : `object`

Structure of GRpcClient.Validator

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| power   | `number` |

### GRpcClient.ConsensusParams : `object`

Structure of GRpcClient.ConsensusParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                                         |
| ---------------- | -------------------------------------------- |
| maxBytes         | `number`                                     |
| maxGas           | `number`                                     |
| maxValidators    | `number`                                     |
| maxCandidates    | `number`                                     |
| pubKeyTypes      | `Array.<string>`                             |
| validators       | [`Array.<Validator>`](#GRpcClient.Validator) |
| validatorChanged | `boolean`                                    |
| paramChanged     | `boolean`                                    |

### GRpcClient.UpgradeTask : `object`

Structure of GRpcClient.UpgradeTask

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                               |
| -------- | ---------------------------------- |
| type     | `GRpcClient.UpgradeType`           |
| dataHash | `string`                           |
| actions  | `Array.<GRpcClient.UpgradeAction>` |

### GRpcClient.UpgradeTasks : `object`

Structure of GRpcClient.UpgradeTasks

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                             |
| ---- | ------------------------------------------------ |
| item | [`Array.<UpgradeTask>`](#GRpcClient.UpgradeTask) |

### GRpcClient.AbciContext : `object`

Structure of GRpcClient.AbciContext

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                       |
| ------------- | ------------------------------------------ |
| txHash        | `string`                                   |
| blockHeight   | `number`                                   |
| blockTime     | [`Timestamp`](#GRpcClient.Timestamp)       |
| totalTxs      | `number`                                   |
| txStatistics  | [`TxStatistics`](#GRpcClient.TxStatistics) |
| txIndex       | `number`                                   |
| lastBlockTime | [`Timestamp`](#GRpcClient.Timestamp)       |

### GRpcClient.Multisig : `object`

Structure of GRpcClient.Multisig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                     |
| --------- | ------------------------ |
| signer    | `string`                 |
| pk        | `Uint8Array`             |
| signature | `Uint8Array`             |
| delegator | `string`                 |
| data      | [`Any`](#GRpcClient.Any) |

### GRpcClient.Transaction : `object`

Structure of GRpcClient.Transaction

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                       |
| ---------- | ------------------------------------------ |
| from       | `string`                                   |
| nonce      | `number`                                   |
| chainId    | `string`                                   |
| pk         | `Uint8Array`                               |
| gas        | `number`                                   |
| delegator  | `string`                                   |
| signature  | `Uint8Array`                               |
| signatures | [`Array.<Multisig>`](#GRpcClient.Multisig) |
| itx        | [`Any`](#GRpcClient.Any)                   |

### GRpcClient.TransactionInfo : `object`

Structure of GRpcClient.TransactionInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                     |
| ------ | ---------------------------------------- |
| tx     | [`Transaction`](#GRpcClient.Transaction) |
| height | `number`                                 |
| index  | `number`                                 |
| hash   | `string`                                 |
| tags   | [`Array.<KVPair>`](#GRpcClient.KVPair)   |
| code   | `GRpcClient.StatusCode`                  |
| time   | [`Timestamp`](#GRpcClient.Timestamp)     |

### GRpcClient.DeclareConfig : `object`

Structure of GRpcClient.DeclareConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                             |
| ---------- | -------------------------------- |
| restricted | `boolean`                        |
| hierarchy  | `number`                         |
| cost       | [`BigUint`](#GRpcClient.BigUint) |

### GRpcClient.DelegateConfig : `object`

Structure of GRpcClient.DelegateConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type             |
| ------------- | ---------------- |
| deltaInterval | `number`         |
| typeUrls      | `Array.<string>` |

### GRpcClient.TransactionConfig : `object`

Structure of GRpcClient.TransactionConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                                           |
| ------------ | ---------------------------------------------- |
| maxAssetSize | `number`                                       |
| maxListSize  | `number`                                       |
| maxMultisig  | `number`                                       |
| minimumStake | `number`                                       |
| declare      | [`DeclareConfig`](#GRpcClient.DeclareConfig)   |
| delegate     | [`DelegateConfig`](#GRpcClient.DelegateConfig) |
| poke         | [`PokeConfig`](#GRpcClient.PokeConfig)         |
| stake        | [`StakeConfig`](#GRpcClient.StakeConfig)       |

### GRpcClient.BlockInfo : `object`

Structure of GRpcClient.BlockInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name               | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| height             | `number`                                                 |
| numTxs             | `number`                                                 |
| time               | [`Timestamp`](#GRpcClient.Timestamp)                     |
| appHash            | `Uint8Array`                                             |
| proposer           | `Uint8Array`                                             |
| txs                | [`Array.<TransactionInfo>`](#GRpcClient.TransactionInfo) |
| totalTxs           | `number`                                                 |
| invalidTxs         | [`Array.<TransactionInfo>`](#GRpcClient.TransactionInfo) |
| txsHashes          | `Array.<string>`                                         |
| invalidTxsHashes   | `Array.<string>`                                         |
| consensusHash      | `Uint8Array`                                             |
| dataHash           | `Uint8Array`                                             |
| evidenceHash       | `Uint8Array`                                             |
| lastCommitHash     | `Uint8Array`                                             |
| lastResultsHash    | `Uint8Array`                                             |
| nextValidatorsHash | `Uint8Array`                                             |
| validatorsHash     | `Uint8Array`                                             |
| version            | [`Version`](#GRpcClient.Version)                         |
| lastBlockId        | [`BlockID`](#GRpcClient.BlockID)                         |

### GRpcClient.BlockInfoSimple : `object`

Structure of GRpcClient.BlockInfoSimple

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name               | Type                                 |
| ------------------ | ------------------------------------ |
| height             | `number`                             |
| numTxs             | `number`                             |
| time               | [`Timestamp`](#GRpcClient.Timestamp) |
| appHash            | `Uint8Array`                         |
| proposer           | `Uint8Array`                         |
| totalTxs           | `number`                             |
| txsHashes          | `Array.<string>`                     |
| invalidTxsHashes   | `Array.<string>`                     |
| consensusHash      | `Uint8Array`                         |
| dataHash           | `Uint8Array`                         |
| evidenceHash       | `Uint8Array`                         |
| lastCommitHash     | `Uint8Array`                         |
| lastResultsHash    | `Uint8Array`                         |
| nextValidatorsHash | `Uint8Array`                         |
| validatorsHash     | `Uint8Array`                         |
| version            | [`Version`](#GRpcClient.Version)     |
| lastBlockId        | [`BlockID`](#GRpcClient.BlockID)     |

### GRpcClient.TxStatus : `object`

Structure of GRpcClient.TxStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| code | `GRpcClient.StatusCode` |
| hash | `string`                |

### GRpcClient.CircularQueue : `object`

Structure of GRpcClient.CircularQueue

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                 |
| -------- | -------------------- |
| items    | `Array.<Uint8Array>` |
| typeUrl  | `string`             |
| maxItems | `number`             |
| circular | `boolean`            |
| fifo     | `boolean`            |

### GRpcClient.StateContext : `object`

Structure of GRpcClient.StateContext

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                 |
| --------------- | ------------------------------------ |
| genesisTx       | `string`                             |
| renaissanceTx   | `string`                             |
| genesisTime     | [`Timestamp`](#GRpcClient.Timestamp) |
| renaissanceTime | [`Timestamp`](#GRpcClient.Timestamp) |

### GRpcClient.StakeContext : `object`

Structure of GRpcClient.StakeContext

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                 | Type                                         |
| -------------------- | -------------------------------------------- |
| totalStakes          | [`BigUint`](#GRpcClient.BigUint)             |
| totalUnstakes        | [`BigUint`](#GRpcClient.BigUint)             |
| totalReceivedStakes  | [`BigUint`](#GRpcClient.BigUint)             |
| recentStakes         | [`CircularQueue`](#GRpcClient.CircularQueue) |
| recentReceivedStakes | [`CircularQueue`](#GRpcClient.CircularQueue) |

### GRpcClient.StakeSummary : `object`

Structure of GRpcClient.StakeSummary

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                       |
| ------------- | ------------------------------------------ |
| totalStakes   | [`BigUint`](#GRpcClient.BigUint)           |
| totalUnstakes | [`BigUint`](#GRpcClient.BigUint)           |
| context       | [`StateContext`](#GRpcClient.StateContext) |

### GRpcClient.StakeConfig : `object`

Structure of GRpcClient.StakeConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                | Type     |
| ------------------- | -------- |
| timeoutGeneral      | `number` |
| timeoutStakeForNode | `number` |

### GRpcClient.UnconfirmedTxs : `object`

Structure of GRpcClient.UnconfirmedTxs

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                             |
| ---- | ------------------------------------------------ |
| nTxs | `number`                                         |
| txs  | [`Array.<Transaction>`](#GRpcClient.Transaction) |

### GRpcClient.NetInfo : `object`

Structure of GRpcClient.NetInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                       |
| --------- | ------------------------------------------ |
| listening | `boolean`                                  |
| listeners | `Array.<string>`                           |
| nPeers    | `number`                                   |
| peers     | [`Array.<PeerInfo>`](#GRpcClient.PeerInfo) |

### GRpcClient.GeoInfo : `object`

Structure of GRpcClient.GeoInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type     |
| --------- | -------- |
| city      | `string` |
| country   | `string` |
| latitude  | `number` |
| longitude | `number` |

### GRpcClient.PeerInfo : `object`

Structure of GRpcClient.PeerInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                             |
| ---------------- | -------------------------------- |
| id               | `string`                         |
| network          | `string`                         |
| consensusVersion | `string`                         |
| moniker          | `string`                         |
| ip               | `string`                         |
| geoInfo          | [`GeoInfo`](#GRpcClient.GeoInfo) |

### GRpcClient.ValidatorsInfo : `object`

Structure of GRpcClient.ValidatorsInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                                                 |
| ----------- | ---------------------------------------------------- |
| blockHeight | `number`                                             |
| validators  | [`Array.<ValidatorInfo>`](#GRpcClient.ValidatorInfo) |

### GRpcClient.ValidatorInfo : `object`

Structure of GRpcClient.ValidatorInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                             |
| ---------------- | -------------------------------- |
| address          | `string`                         |
| pubKey           | [`PubKey`](#GRpcClient.PubKey)   |
| votingPower      | `number`                         |
| proposerPriority | `string`                         |
| name             | `string`                         |
| geoInfo          | [`GeoInfo`](#GRpcClient.GeoInfo) |

### GRpcClient.GenesisInfo : `object`

Structure of GRpcClient.GenesisInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                                 |
| --------------- | ---------------------------------------------------- |
| genesisTime     | `string`                                             |
| chainId         | `string`                                             |
| consensusParams | [`ConsensusParams`](#GRpcClient.ConsensusParams)     |
| validators      | [`Array.<ValidatorInfo>`](#GRpcClient.ValidatorInfo) |
| appHash         | `string`                                             |

### GRpcClient.ForgeStats : `object`

Structure of GRpcClient.ForgeStats

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                   | Type                                     |
| ---------------------- | ---------------------------------------- |
| numBlocks              | `Array.<number>`                         |
| numTxs                 | `Array.<number>`                         |
| numStakes              | [`Array.<BigUint>`](#GRpcClient.BigUint) |
| numValidators          | `Array.<number>`                         |
| numAccountMigrateTxs   | `Array.<number>`                         |
| numCreateAssetTxs      | `Array.<number>`                         |
| numConsensusUpgradeTxs | `Array.<number>`                         |
| numDeclareTxs          | `Array.<number>`                         |
| numDeclareFileTxs      | `Array.<number>`                         |
| numExchangeTxs         | `Array.<number>`                         |
| numStakeTxs            | `Array.<number>`                         |
| numSysUpgradeTxs       | `Array.<number>`                         |
| numTransferTxs         | `Array.<number>`                         |
| numUpdateAssetTxs      | `Array.<number>`                         |
| numConsumeAssetTxs     | `Array.<number>`                         |
| numPokeTxs             | `Array.<number>`                         |
| tps                    | `Array.<number>`                         |
| maxTps                 | `number`                                 |
| avgTps                 | `number`                                 |
| avgBlockTime           | `number`                                 |

### GRpcClient.TxStatistics : `object`

Structure of GRpcClient.TxStatistics

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                   | Type     |
| ---------------------- | -------- |
| numAccountMigrateTxs   | `number` |
| numCreateAssetTxs      | `number` |
| numConsensusUpgradeTxs | `number` |
| numDeclareTxs          | `number` |
| numDeclareFileTxs      | `number` |
| numExchangeTxs         | `number` |
| numStakeTxs            | `number` |
| numSysUpgradeTxs       | `number` |
| numTransferTxs         | `number` |
| numUpdateAssetTxs      | `number` |
| numConsumeAssetTxs     | `number` |
| numPokeTxs             | `number` |

### GRpcClient.ForgeToken : `object`

Structure of GRpcClient.ForgeToken

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type         |
| ------------- | ------------ |
| name          | `string`     |
| symbol        | `string`     |
| unit          | `string`     |
| description   | `string`     |
| icon          | `Uint8Array` |
| decimal       | `number`     |
| initialSupply | `number`     |
| totalSupply   | `number`     |
| inflationRate | `number`     |

### GRpcClient.PokeInfo : `object`

Structure of GRpcClient.PokeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                             |
| ---------- | -------------------------------- |
| dailyLimit | [`BigUint`](#GRpcClient.BigUint) |
| leftover   | [`BigUint`](#GRpcClient.BigUint) |
| amount     | [`BigUint`](#GRpcClient.BigUint) |

### GRpcClient.PokeConfig : `object`

Structure of GRpcClient.PokeConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| dailyLimit | `number`  |
| amount     | `number`  |
| enabled    | `boolean` |

### GRpcClient.UpgradeInfo : `object`

Structure of GRpcClient.UpgradeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| height  | `number` |
| version | `string` |

### GRpcClient.WithdrawItem : `object`

Structure of GRpcClient.WithdrawItem

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                             |
| ----- | -------------------------------- |
| hash  | `string`                         |
| value | [`BigUint`](#GRpcClient.BigUint) |

### GRpcClient.AccountConfig : `object`

Structure of GRpcClient.AccountConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                             |
| ------- | -------------------------------- |
| address | `string`                         |
| pk      | `Uint8Array`                     |
| balance | [`BigUint`](#GRpcClient.BigUint) |

### GRpcClient.TokenSwapConfig : `object`

Structure of GRpcClient.TokenSwapConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                    | Type                             |
| ----------------------- | -------------------------------- |
| commissionHolderAddress | `string`                         |
| withdrawInterval        | `number`                         |
| commission              | [`BigUint`](#GRpcClient.BigUint) |
| commissionRate          | `number`                         |
| revokeCommission        | `number`                         |

### GRpcClient.Evidence : `object`

Structure of GRpcClient.Evidence

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type         |
| --------------- | ------------ |
| hash            | `string`     |
| chainType       | `string`     |
| chainId         | `string`     |
| originalTx      | `Uint8Array` |
| receiverAddress | `string`     |

### GRpcClient.AccountState : `object`

Structure of GRpcClient.AccountState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                         |
| --------------- | -------------------------------------------- |
| balance         | [`BigUint`](#GRpcClient.BigUint)             |
| nonce           | `number`                                     |
| numTxs          | `number`                                     |
| address         | `string`                                     |
| pk              | `Uint8Array`                                 |
| type            | [`WalletType`](#GRpcClient.WalletType)       |
| moniker         | `string`                                     |
| context         | [`StateContext`](#GRpcClient.StateContext)   |
| issuer          | `string`                                     |
| gasBalance      | [`BigUint`](#GRpcClient.BigUint)             |
| migratedTo      | `Array.<string>`                             |
| migratedFrom    | `Array.<string>`                             |
| numAssets       | `number`                                     |
| stake           | [`StakeContext`](#GRpcClient.StakeContext)   |
| pinnedFiles     | [`CircularQueue`](#GRpcClient.CircularQueue) |
| poke            | [`PokeInfo`](#GRpcClient.PokeInfo)           |
| depositReceived | [`BigUint`](#GRpcClient.BigUint)             |
| withdrawItems   | [`CircularQueue`](#GRpcClient.CircularQueue) |
| data            | [`Any`](#GRpcClient.Any)                     |

### GRpcClient.AssetState : `object`

Structure of GRpcClient.AssetState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                       |
| ------------- | ------------------------------------------ |
| address       | `string`                                   |
| owner         | `string`                                   |
| moniker       | `string`                                   |
| readonly      | `boolean`                                  |
| transferrable | `boolean`                                  |
| ttl           | `number`                                   |
| consumedTime  | [`Timestamp`](#GRpcClient.Timestamp)       |
| issuer        | `string`                                   |
| parent        | `string`                                   |
| stake         | [`StakeContext`](#GRpcClient.StakeContext) |
| context       | [`StateContext`](#GRpcClient.StateContext) |
| data          | [`Any`](#GRpcClient.Any)                   |

### GRpcClient.CoreProtocol : `object`

Structure of GRpcClient.CoreProtocol

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| name    | `string` |
| address | `string` |

### GRpcClient.ForgeState : `object`

Structure of GRpcClient.ForgeState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                                 |
| --------------- | ---------------------------------------------------- |
| address         | `string`                                             |
| consensus       | [`ConsensusParams`](#GRpcClient.ConsensusParams)     |
| tasks           | [`UpgradeTasks`](#GRpcClient.UpgradeTasks)           |
| stakeSummary    | [`StakeSummary`](#GRpcClient.StakeSummary)           |
| version         | `string`                                             |
| token           | [`ForgeToken`](#GRpcClient.ForgeToken)               |
| txConfig        | [`TransactionConfig`](#GRpcClient.TransactionConfig) |
| protocols       | [`Array.<CoreProtocol>`](#GRpcClient.CoreProtocol)   |
| gas             | `number`                                             |
| upgradeInfo     | [`UpgradeInfo`](#GRpcClient.UpgradeInfo)             |
| accountConfig   | [`AccountConfig`](#GRpcClient.AccountConfig)         |
| tokenSwapConfig | [`TokenSwapConfig`](#GRpcClient.TokenSwapConfig)     |
| data            | [`Any`](#GRpcClient.Any)                             |

### GRpcClient.RootState : `object`

Structure of GRpcClient.RootState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type         |
| ---------- | ------------ |
| address    | `string`     |
| account    | `Uint8Array` |
| asset      | `Uint8Array` |
| receipt    | `Uint8Array` |
| protocol   | `Uint8Array` |
| governance | `Uint8Array` |
| custom     | `Uint8Array` |

### GRpcClient.StakeState : `object`

Structure of GRpcClient.StakeState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                       |
| ------- | ------------------------------------------ |
| address | `string`                                   |
| from    | `string`                                   |
| to      | `string`                                   |
| balance | [`BigUint`](#GRpcClient.BigUint)           |
| message | `string`                                   |
| context | [`StateContext`](#GRpcClient.StateContext) |
| data    | [`Any`](#GRpcClient.Any)                   |

### GRpcClient.StatisticsState : `object`

Structure of GRpcClient.StatisticsState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                       |
| ------------- | ------------------------------------------ |
| address       | `string`                                   |
| numBlocks     | `number`                                   |
| numTxs        | `number`                                   |
| numStakes     | [`BigUint`](#GRpcClient.BigUint)           |
| numValidators | `number`                                   |
| txStatistics  | [`TxStatistics`](#GRpcClient.TxStatistics) |

### GRpcClient.BlacklistState : `object`

Structure of GRpcClient.BlacklistState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| address | `Array.<string>` |

### GRpcClient.ProtocolState : `object`

Structure of GRpcClient.ProtocolState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                                               |
| ------------ | -------------------------------------------------- |
| address      | `string`                                           |
| itx          | [`DeployProtocolTx`](#GRpcClient.DeployProtocolTx) |
| rootHash     | `Uint8Array`                                       |
| status       | `GRpcClient.ProtocolStatus`                        |
| migratedTo   | `Array.<string>`                                   |
| migratedFrom | `Array.<string>`                                   |
| context      | [`StateContext`](#GRpcClient.StateContext)         |
| data         | [`Any`](#GRpcClient.Any)                           |

### GRpcClient.SwapState : `object`

Structure of GRpcClient.SwapState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                                       |
| -------- | ------------------------------------------ |
| hash     | `string`                                   |
| address  | `string`                                   |
| hashkey  | `Uint8Array`                               |
| sender   | `string`                                   |
| receiver | `string`                                   |
| value    | [`BigUint`](#GRpcClient.BigUint)           |
| assets   | `Array.<string>`                           |
| locktime | `number`                                   |
| hashlock | `Uint8Array`                               |
| context  | [`StateContext`](#GRpcClient.StateContext) |

### GRpcClient.SwapStatistics : `object`

Structure of GRpcClient.SwapStatistics

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                             |
| --------------- | -------------------------------- |
| address         | `string`                         |
| lockedValueOut  | [`BigUint`](#GRpcClient.BigUint) |
| lockedValueIn   | [`BigUint`](#GRpcClient.BigUint) |
| lockedAssetsOut | `number`                         |
| lockedAssetsIn  | `number`                         |

### GRpcClient.DelegateOpState : `object`

Structure of GRpcClient.DelegateOpState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name         | Type                             |
| ------------ | -------------------------------- |
| rule         | `string`                         |
| numTxs       | `number`                         |
| numTxsDelta  | `number`                         |
| balance      | [`BigUint`](#GRpcClient.BigUint) |
| balanceDelta | [`BigUint`](#GRpcClient.BigUint) |

### GRpcClient.DelegateState : `object`

Structure of GRpcClient.DelegateState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                             |
| ------- | ------------------------------------------------ |
| address | `string`                                         |
| ops     | [`DelegateOpState`](#GRpcClient.DelegateOpState) |
| context | [`StateContext`](#GRpcClient.StateContext)       |
| data    | [`Any`](#GRpcClient.Any)                         |

### GRpcClient.CodeInfo : `object`

Structure of GRpcClient.CodeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type         |
| -------- | ------------ |
| checksum | `Uint8Array` |
| binary   | `Uint8Array` |

### GRpcClient.TypeUrls : `object`

Structure of GRpcClient.TypeUrls

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| url    | `string` |
| module | `string` |

### GRpcClient.DeployProtocolTx : `object`

Structure of GRpcClient.DeployProtocolTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "name": "arcblock",
  "version": 2,
  "namespace": "arcblock",
  "description": "arcblock",
  "typeUrls": [
    {
      "url": "arcblock",
      "module": "arcblock"
    },
    {
      "url": "arcblock",
      "module": "arcblock"
    }
  ],
  "proto": "arcblock",
  "pipeline": "arcblock",
  "sources": [
    "arcblock",
    "arcblock"
  ],
  "code": [
    {
      "checksum": {},
      "binary": {}
    },
    {
      "checksum": {},
      "binary": {}
    }
  ],
  "tags": [
    "arcblock",
    "arcblock"
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                                       |
| ----------- | ------------------------------------------ |
| address     | `string`                                   |
| name        | `string`                                   |
| version     | `number`                                   |
| namespace   | `string`                                   |
| description | `string`                                   |
| typeUrls    | [`Array.<TypeUrls>`](#GRpcClient.TypeUrls) |
| proto       | `string`                                   |
| pipeline    | `string`                                   |
| sources     | `Array.<string>`                           |
| code        | [`Array.<CodeInfo>`](#GRpcClient.CodeInfo) |
| tags        | `Array.<string>`                           |
| data        | [`Any`](#GRpcClient.Any)                   |

### GRpcClient.ConsensusUpgradeTx : `object`

Structure of GRpcClient.ConsensusUpgradeTx

```javascript
{
  "validators": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "power": 5
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "power": 5
    }
  ],
  "maxBytes": 5,
  "maxGas": 4,
  "maxValidators": 2,
  "maxCandidates": 2,
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                         |
| ------------- | -------------------------------------------- |
| validators    | [`Array.<Validator>`](#GRpcClient.Validator) |
| maxBytes      | `number`                                     |
| maxGas        | `number`                                     |
| maxValidators | `number`                                     |
| maxCandidates | `number`                                     |
| data          | [`Any`](#GRpcClient.Any)                     |

### GRpcClient.SysUpgradeTx : `object`

Structure of GRpcClient.SysUpgradeTx

```javascript
{
  "task": {
    "type": 0,
    "dataHash": "arcblock",
    "actions": [
      null,
      null
    ]
  },
  "gracePeriod": 5,
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                                     |
| ----------- | ---------------------------------------- |
| task        | [`UpgradeTask`](#GRpcClient.UpgradeTask) |
| gracePeriod | `number`                                 |
| data        | [`Any`](#GRpcClient.Any)                 |

### GRpcClient.PageOrder : `object`

Structure of GRpcClient.PageOrder

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| field | `string` |
| type  | `string` |

### GRpcClient.PageInput : `object`

Structure of GRpcClient.PageInput

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                         |
| ------ | -------------------------------------------- |
| cursor | `string`                                     |
| size   | `number`                                     |
| order  | [`Array.<PageOrder>`](#GRpcClient.PageOrder) |

### GRpcClient.TypeFilter : `object`

Structure of GRpcClient.TypeFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type             |
| ----- | ---------------- |
| types | `Array.<string>` |

### GRpcClient.TimeFilter : `object`

Structure of GRpcClient.TimeFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| startDateTime | `string` |
| endDateTime   | `string` |

### GRpcClient.AddressFilter : `object`

Structure of GRpcClient.AddressFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                   |
| --------- | ---------------------- |
| sender    | `string`               |
| receiver  | `string`               |
| direction | `GRpcClient.Direction` |

### GRpcClient.PageInfo : `object`

Structure of GRpcClient.PageInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type      |
| ------ | --------- |
| cursor | `string`  |
| next   | `boolean` |
| total  | `number`  |

### GRpcClient.IndexedTransaction : `object`

Structure of GRpcClient.IndexedTransaction

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                                     |
| -------- | ---------------------------------------- |
| hash     | `string`                                 |
| sender   | `string`                                 |
| receiver | `string`                                 |
| time     | `string`                                 |
| type     | `string`                                 |
| tx       | [`Transaction`](#GRpcClient.Transaction) |
| valid    | `boolean`                                |
| code     | `GRpcClient.StatusCode`                  |

### GRpcClient.IndexedAccountState : `object`

Structure of GRpcClient.IndexedAccountState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                | Type                             |
| ------------------- | -------------------------------- |
| address             | `string`                         |
| balance             | [`BigUint`](#GRpcClient.BigUint) |
| numAssets           | `number`                         |
| numTxs              | `number`                         |
| nonce               | `number`                         |
| genesisTime         | `string`                         |
| renaissanceTime     | `string`                         |
| moniker             | `string`                         |
| migratedFrom        | `string`                         |
| migratedTo          | `string`                         |
| totalReceivedStakes | [`BigUint`](#GRpcClient.BigUint) |
| totalStakes         | [`BigUint`](#GRpcClient.BigUint) |
| totalUnstakes       | [`BigUint`](#GRpcClient.BigUint) |
| recentNumTxs        | `Array.<number>`                 |

### GRpcClient.IndexedAssetState : `object`

Structure of GRpcClient.IndexedAssetState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                     |
| --------------- | ------------------------ |
| address         | `string`                 |
| owner           | `string`                 |
| genesisTime     | `string`                 |
| renaissanceTime | `string`                 |
| moniker         | `string`                 |
| readonly        | `boolean`                |
| consumedTime    | `string`                 |
| issuer          | `string`                 |
| parent          | `string`                 |
| transferrable   | `boolean`                |
| ttl             | `number`                 |
| data            | [`Any`](#GRpcClient.Any) |

### GRpcClient.IndexedStakeState : `object`

Structure of GRpcClient.IndexedStakeState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                             |
| --------------- | -------------------------------- |
| address         | `string`                         |
| balance         | [`BigUint`](#GRpcClient.BigUint) |
| sender          | `string`                         |
| receiver        | `string`                         |
| genesisTime     | `string`                         |
| renaissanceTime | `string`                         |
| message         | `string`                         |
| type            | `number`                         |

### GRpcClient.IndexedBlock : `object`

Structure of GRpcClient.IndexedBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| height        | `number` |
| time          | `string` |
| proposer      | `string` |
| numTxs        | `number` |
| numInvalidTxs | `number` |

### GRpcClient.HealthStatus : `object`

Structure of GRpcClient.HealthStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                             |
| --------- | ------------------------------------------------ |
| consensus | [`ConsensusStatus`](#GRpcClient.ConsensusStatus) |
| network   | [`NetworkStatus`](#GRpcClient.NetworkStatus)     |
| storage   | [`StorageStatus`](#GRpcClient.StorageStatus)     |
| forge     | [`ForgeStatus`](#GRpcClient.ForgeStatus)         |

### GRpcClient.ConsensusStatus : `object`

Structure of GRpcClient.ConsensusStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type      |
| ----------- | --------- |
| health      | `boolean` |
| synced      | `boolean` |
| blockHeight | `number`  |

### GRpcClient.NetworkStatus : `object`

Structure of GRpcClient.NetworkStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type      |
| -------- | --------- |
| health   | `boolean` |
| numPeers | `number`  |

### GRpcClient.StorageStatus : `object`

Structure of GRpcClient.StorageStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                             |
| ------------- | ------------------------------------------------ |
| health        | `boolean`                                        |
| indexerServer | `string`                                         |
| stateDb       | `string`                                         |
| diskSpace     | [`DiskSpaceStatus`](#GRpcClient.DiskSpaceStatus) |

### GRpcClient.DiskSpaceStatus : `object`

Structure of GRpcClient.DiskSpaceStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type     |
| ---------- | -------- |
| forgeUsage | `string` |
| total      | `string` |

### GRpcClient.ForgeStatus : `object`

Structure of GRpcClient.ForgeStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                               |
| ---------- | -------------------------------------------------- |
| health     | `boolean`                                          |
| abiServer  | `string`                                           |
| forgeWeb   | `string`                                           |
| abciServer | [`AbciServerStatus`](#GRpcClient.AbciServerStatus) |

### GRpcClient.AbciServerStatus : `object`

Structure of GRpcClient.AbciServerStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| abciConsensus | `string` |
| abciInfo      | `string` |

### GRpcClient.ValidityFilter : `object`

Structure of GRpcClient.ValidityFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                  |
| -------- | --------------------- |
| validity | `GRpcClient.Validity` |

### GRpcClient.RangeFilter : `object`

Structure of GRpcClient.RangeFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| from | `number` |
| to   | `number` |

### GRpcClient.AccountMigrateTx : `object`

Structure of GRpcClient.AccountMigrateTx

```javascript
{
  "pk": {},
  "type": {
    "pk": 0,
    "hash": 0,
    "address": 0,
    "role": 0
  },
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                   |
| ------- | -------------------------------------- |
| pk      | `Uint8Array`                           |
| type    | [`WalletType`](#GRpcClient.WalletType) |
| address | `string`                               |
| data    | [`Any`](#GRpcClient.Any)               |

### GRpcClient.AssetSpec : `object`

Structure of GRpcClient.AssetSpec

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| data    | `string` |

### GRpcClient.AcquireAssetTx : `object`

Structure of GRpcClient.AcquireAssetTx

```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "specs": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "data": "arcblock"
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "data": "arcblock"
    }
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                         |
| ----- | -------------------------------------------- |
| to    | `string`                                     |
| specs | [`Array.<AssetSpec>`](#GRpcClient.AssetSpec) |
| data  | [`Any`](#GRpcClient.Any)                     |

### GRpcClient.ActivateProtocolTx : `object`

Structure of GRpcClient.ActivateProtocolTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| address | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.ApproveWithdrawTx : `object`

Structure of GRpcClient.ApproveWithdrawTx

```javascript
{
  "withdrawTxHash": "arcblock",
  "evidence": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "chainType": "arcblock",
    "chainId": "arcblock",
    "originalTx": {},
    "receiverAddress": "arcblock"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name           | Type                               |
| -------------- | ---------------------------------- |
| withdrawTxHash | `string`                           |
| evidence       | [`Evidence`](#GRpcClient.Evidence) |

### GRpcClient.ConsumeAssetTx : `object`

Structure of GRpcClient.ConsumeAssetTx

```javascript
{
  "issuer": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| issuer  | `string`                 |
| address | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.CreateAssetTx : `object`

Structure of GRpcClient.CreateAssetTx

```javascript
{
  "moniker": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  },
  "readonly": true,
  "transferrable": true,
  "ttl": 2,
  "parent": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                     |
| ------------- | ------------------------ |
| moniker       | `string`                 |
| data          | [`Any`](#GRpcClient.Any) |
| readonly      | `boolean`                |
| transferrable | `boolean`                |
| ttl           | `number`                 |
| parent        | `string`                 |
| address       | `string`                 |

### GRpcClient.AssetAttributes : `object`

Structure of GRpcClient.AssetAttributes

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type      |
| ------------- | --------- |
| transferrable | `boolean` |
| ttl           | `number`  |

### GRpcClient.AssetFactory : `object`

Structure of GRpcClient.AssetFactory

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                             |
| --------------- | ------------------------------------------------ |
| description     | `string`                                         |
| limit           | `number`                                         |
| price           | [`BigUint`](#GRpcClient.BigUint)                 |
| template        | `string`                                         |
| allowedSpecArgs | `Array.<string>`                                 |
| assetName       | `string`                                         |
| attributes      | [`AssetAttributes`](#GRpcClient.AssetAttributes) |
| data            | [`Any`](#GRpcClient.Any)                         |

### GRpcClient.AssetFactoryState : `object`

Structure of GRpcClient.AssetFactoryState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                             |
| --------------- | ------------------------------------------------ |
| description     | `string`                                         |
| limit           | `number`                                         |
| price           | [`BigUint`](#GRpcClient.BigUint)                 |
| template        | `string`                                         |
| allowedSpecArgs | `Array.<string>`                                 |
| assetName       | `string`                                         |
| attributes      | [`AssetAttributes`](#GRpcClient.AssetAttributes) |
| numCreated      | `number`                                         |
| data            | [`Any`](#GRpcClient.Any)                         |

### GRpcClient.DeactivateProtocolTx : `object`

Structure of GRpcClient.DeactivateProtocolTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| address | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.DeclareTx : `object`

Structure of GRpcClient.DeclareTx

```javascript
{
  "moniker": "arcblock",
  "issuer": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| moniker | `string`                 |
| issuer  | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.DelegateTx : `object`

Structure of GRpcClient.DelegateTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "ops": [
    {
      "typeUrl": "arcblock",
      "rules": [
        "arcblock",
        "arcblock"
      ]
    },
    {
      "typeUrl": "arcblock",
      "rules": [
        "arcblock",
        "arcblock"
      ]
    }
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                           |
| ------- | ---------------------------------------------- |
| address | `string`                                       |
| to      | `string`                                       |
| ops     | [`Array.<DelegateOp>`](#GRpcClient.DelegateOp) |
| data    | [`Any`](#GRpcClient.Any)                       |

### GRpcClient.DelegateOp : `object`

Structure of GRpcClient.DelegateOp

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type             |
| ------- | ---------------- |
| typeUrl | `string`         |
| rules   | `Array.<string>` |

### GRpcClient.DepositTokenTx : `object`

Structure of GRpcClient.DepositTokenTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "evidence": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "chainType": "arcblock",
    "chainId": "arcblock",
    "originalTx": {},
    "receiverAddress": "arcblock"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                               |
| -------- | ---------------------------------- |
| value    | [`BigUint`](#GRpcClient.BigUint)   |
| address  | `string`                           |
| evidence | [`Evidence`](#GRpcClient.Evidence) |

### GRpcClient.ExchangeInfo : `object`

Structure of GRpcClient.ExchangeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                             |
| ------ | -------------------------------- |
| value  | [`BigUint`](#GRpcClient.BigUint) |
| assets | `Array.<string>`                 |

### GRpcClient.ExchangeTx : `object`

Structure of GRpcClient.ExchangeTx

```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "sender": {
    "assets": [
      "arcblock",
      "arcblock"
    ]
  },
  "receiver": {
    "assets": [
      "arcblock",
      "arcblock"
    ]
  },
  "expiredAt": "2019-12-22T08:40:02.468Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                       |
| --------- | ------------------------------------------ |
| to        | `string`                                   |
| sender    | [`ExchangeInfo`](#GRpcClient.ExchangeInfo) |
| receiver  | [`ExchangeInfo`](#GRpcClient.ExchangeInfo) |
| expiredAt | [`Timestamp`](#GRpcClient.Timestamp)       |
| data      | [`Any`](#GRpcClient.Any)                   |

### GRpcClient.PokeTx : `object`

Structure of GRpcClient.PokeTx

```javascript
{
  "date": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| date    | `string`                 |
| address | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.RefuelTx : `object`

Structure of GRpcClient.RefuelTx

```javascript
{
  "date": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                     |
| ---- | ------------------------ |
| date | `string`                 |
| data | [`Any`](#GRpcClient.Any) |

### GRpcClient.RetrieveSwapTx : `object`

Structure of GRpcClient.RetrieveSwapTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "hashkey": {},
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| address | `string`                 |
| hashkey | `Uint8Array`             |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.RevokeDelegateTx : `object`

Structure of GRpcClient.RevokeDelegateTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "typeUrls": [
    "arcblock",
    "arcblock"
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                     |
| -------- | ------------------------ |
| address  | `string`                 |
| to       | `string`                 |
| typeUrls | `Array.<string>`         |
| data     | [`Any`](#GRpcClient.Any) |

### GRpcClient.RevokeSwapTx : `object`

Structure of GRpcClient.RevokeSwapTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| address | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.RevokeWithdrawTx : `object`

Structure of GRpcClient.RevokeWithdrawTx

```javascript
{
  "withdrawTxHash": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name           | Type     |
| -------------- | -------- |
| withdrawTxHash | `string` |

### GRpcClient.SetupSwapTx : `object`

Structure of GRpcClient.SetupSwapTx

```javascript
{
  "assets": [
    "arcblock",
    "arcblock"
  ],
  "receiver": "arcblock",
  "hashlock": {},
  "locktime": 2,
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                             |
| -------- | -------------------------------- |
| value    | [`BigUint`](#GRpcClient.BigUint) |
| assets   | `Array.<string>`                 |
| receiver | `string`                         |
| hashlock | `Uint8Array`                     |
| locktime | `number`                         |
| data     | [`Any`](#GRpcClient.Any)         |

### GRpcClient.TransferTx : `object`

Structure of GRpcClient.TransferTx

```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "assets": [
    "arcblock",
    "arcblock"
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                             |
| ------ | -------------------------------- |
| to     | `string`                         |
| value  | [`BigUint`](#GRpcClient.BigUint) |
| assets | `Array.<string>`                 |
| data   | [`Any`](#GRpcClient.Any)         |

### GRpcClient.UpdateAssetTx : `object`

Structure of GRpcClient.UpdateAssetTx

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "moniker": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                     |
| ------- | ------------------------ |
| address | `string`                 |
| moniker | `string`                 |
| data    | [`Any`](#GRpcClient.Any) |

### GRpcClient.UpdateValidatorTx : `object`

Structure of GRpcClient.UpdateValidatorTx

```javascript
{
  "candidates": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "power": 5
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "power": 5
    }
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                         |
| ---------- | -------------------------------------------- |
| candidates | [`Array.<Validator>`](#GRpcClient.Validator) |
| data       | [`Any`](#GRpcClient.Any)                     |

### GRpcClient.UpgradeNodeTx : `object`

Structure of GRpcClient.UpgradeNodeTx

```javascript
{
  "height": 5,
  "version": "arcblock",
  "override": true
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type      |
| -------- | --------- |
| height   | `number`  |
| version  | `string`  |
| override | `boolean` |

### GRpcClient.WithdrawTokenTx : `object`

Structure of GRpcClient.WithdrawTokenTx

```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "chainType": "arcblock",
  "chainId": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                             |
| --------- | -------------------------------- |
| value     | [`BigUint`](#GRpcClient.BigUint) |
| to        | `string`                         |
| chainType | `string`                         |
| chainId   | `string`                         |

### GRpcClient.Timestamp : `object`

Structure of GRpcClient.Timestamp

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| seconds | `number` |
| nanos   | `number` |

### GRpcClient.Any : `object`

Structure of GRpcClient.Any

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type         |
| -------- | ------------ |
| type_url | `string`     |
| value    | `Uint8Array` |

### GRpcClient.KVPair : `object`

Structure of GRpcClient.KVPair

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| key   | `Uint8Array` |
| value | `Uint8Array` |

### GRpcClient.BlockParams : `object`

Structure of GRpcClient.BlockParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type     |
| -------- | -------- |
| maxBytes | `number` |
| maxGas   | `number` |

### GRpcClient.EvidenceParams : `object`

Structure of GRpcClient.EvidenceParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| maxAge | `number` |

### GRpcClient.ValidatorParams : `object`

Structure of GRpcClient.ValidatorParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type             |
| ----------- | ---------------- |
| pubKeyTypes | `Array.<string>` |

### GRpcClient.ConsensusParams : `object`

Structure of GRpcClient.ConsensusParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                             |
| --------- | ------------------------------------------------ |
| block     | [`BlockParams`](#GRpcClient.BlockParams)         |
| evidence  | [`EvidenceParams`](#GRpcClient.EvidenceParams)   |
| validator | [`ValidatorParams`](#GRpcClient.ValidatorParams) |

### GRpcClient.LastCommitInfo : `object`

Structure of GRpcClient.LastCommitInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                       |
| ----- | ------------------------------------------ |
| round | `number`                                   |
| votes | [`Array.<VoteInfo>`](#GRpcClient.VoteInfo) |

### GRpcClient.Version : `object`

Structure of GRpcClient.Version

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| Block | `number` |
| App   | `number` |

### GRpcClient.BlockID : `object`

Structure of GRpcClient.BlockID

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                                         |
| ----------- | -------------------------------------------- |
| hash        | `Uint8Array`                                 |
| partsHeader | [`PartSetHeader`](#GRpcClient.PartSetHeader) |

### GRpcClient.PartSetHeader : `object`

Structure of GRpcClient.PartSetHeader

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| total | `number`     |
| hash  | `Uint8Array` |

### GRpcClient.Validator : `object`

Structure of GRpcClient.Validator

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type         |
| ------- | ------------ |
| address | `Uint8Array` |
| power   | `number`     |

### GRpcClient.ValidatorUpdate : `object`

Structure of GRpcClient.ValidatorUpdate

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                           |
| ------ | ------------------------------ |
| pubKey | [`PubKey`](#GRpcClient.PubKey) |
| power  | `number`                       |

### GRpcClient.VoteInfo : `object`

Structure of GRpcClient.VoteInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                 |
| --------------- | ------------------------------------ |
| validator       | [`Validator`](#GRpcClient.Validator) |
| signedLastBlock | `boolean`                            |

### GRpcClient.PubKey : `object`

Structure of GRpcClient.PubKey

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type         |
| ---- | ------------ |
| type | `string`     |
| data | `Uint8Array` |

### GRpcClient.Evidence : `object`

Structure of GRpcClient.Evidence

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                                 |
| ---------------- | ------------------------------------ |
| type             | `string`                             |
| validator        | [`Validator`](#GRpcClient.Validator) |
| height           | `number`                             |
| time             | [`Timestamp`](#GRpcClient.Timestamp) |
| totalVotingPower | `number`                             |

### GRpcClient.Header : `object`

Structure of GRpcClient.Header

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name               | Type                                 |
| ------------------ | ------------------------------------ |
| version            | [`Version`](#GRpcClient.Version)     |
| chainId            | `string`                             |
| height             | `number`                             |
| time               | [`Timestamp`](#GRpcClient.Timestamp) |
| numTxs             | `number`                             |
| totalTxs           | `number`                             |
| lastBlockId        | [`BlockID`](#GRpcClient.BlockID)     |
| lastCommitHash     | `Uint8Array`                         |
| dataHash           | `Uint8Array`                         |
| validatorsHash     | `Uint8Array`                         |
| nextValidatorsHash | `Uint8Array`                         |
| consensusHash      | `Uint8Array`                         |
| appHash            | `Uint8Array`                         |
| lastResultsHash    | `Uint8Array`                         |
| evidenceHash       | `Uint8Array`                         |
| proposerAddress    | `Uint8Array`                         |

### GRpcClient.RequestBeginBlock : `object`

Structure of GRpcClient.RequestBeginBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                | Type                                           |
| ------------------- | ---------------------------------------------- |
| hash                | `Uint8Array`                                   |
| header              | [`Header`](#GRpcClient.Header)                 |
| lastCommitInfo      | [`LastCommitInfo`](#GRpcClient.LastCommitInfo) |
| byzantineValidators | [`Array.<Evidence>`](#GRpcClient.Evidence)     |

### GRpcClient.RequestEndBlock : `object`

Structure of GRpcClient.RequestEndBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| height | `number` |

### GRpcClient.ResponseBeginBlock : `object`

Structure of GRpcClient.ResponseBeginBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                   |
| ---- | -------------------------------------- |
| tags | [`Array.<KVPair>`](#GRpcClient.KVPair) |

### GRpcClient.ResponseEndBlock : `object`

Structure of GRpcClient.ResponseEndBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                                     |
| --------------------- | -------------------------------------------------------- |
| validatorUpdates      | [`Array.<ValidatorUpdate>`](#GRpcClient.ValidatorUpdate) |
| consensusParamUpdates | [`ConsensusParams`](#GRpcClient.ConsensusParams)         |
| tags                  | [`Array.<KVPair>`](#GRpcClient.KVPair)                   |

### GRpcClient.ResponseCheckTx : `object`

Structure of GRpcClient.ResponseCheckTx

```javascript
{
  "code": 2,
  "data": {},
  "log": "arcblock",
  "info": "arcblock",
  "tags": [
    {
      "key": {},
      "value": {}
    },
    {
      "key": {},
      "value": {}
    }
  ],
  "codespace": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                   |
| --------- | -------------------------------------- |
| code      | `number`                               |
| data      | `Uint8Array`                           |
| log       | `string`                               |
| info      | `string`                               |
| gasWanted | `number`                               |
| gasUsed   | `number`                               |
| tags      | [`Array.<KVPair>`](#GRpcClient.KVPair) |
| codespace | `string`                               |

### GRpcClient.ResponseDeliverTx : `object`

Structure of GRpcClient.ResponseDeliverTx

```javascript
{
  "code": 2,
  "data": {},
  "log": "arcblock",
  "info": "arcblock",
  "tags": [
    {
      "key": {},
      "value": {}
    },
    {
      "key": {},
      "value": {}
    }
  ],
  "codespace": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                   |
| --------- | -------------------------------------- |
| code      | `number`                               |
| data      | `Uint8Array`                           |
| log       | `string`                               |
| info      | `string`                               |
| gasWanted | `number`                               |
| gasUsed   | `number`                               |
| tags      | [`Array.<KVPair>`](#GRpcClient.KVPair) |
| codespace | `string`                               |

### GRpcClient.sendConsensusUpgradeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                | Description                                                                                   |
| --------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                            |                                                                                               |
| input.tx              | `object`                            | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendConsensusUpgradeTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                            | the sender pk                                                                                 |
| [input.tx.from]       | `string`                            | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                            | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                            | the chainId                                                                                   |
| [input.tx.signature]  | `string`                            | transaction signature                                                                         |
| [input.tx.signatures] | `array`                             | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                            | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                            | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendDeployProtocolTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendDeployProtocolTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendSysUpgradeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                          | Description                                                                                   |
| --------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                      |                                                                                               |
| input.tx              | `object`                      | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendSysUpgradeTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                      | the sender pk                                                                                 |
| [input.tx.from]       | `string`                      | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                      | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                      | the chainId                                                                                   |
| [input.tx.signature]  | `string`                      | transaction signature                                                                         |
| [input.tx.signatures] | `array`                       | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                      | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                      | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendAccountMigrateTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendAccountMigrateTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendAcquireAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                            | Description                                                                                   |
| --------------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                        |                                                                                               |
| input.tx              | `object`                        | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendAcquireAssetTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendActivateProtocolTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                | Description                                                                                   |
| --------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                            |                                                                                               |
| input.tx              | `object`                            | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendActivateProtocolTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                            | the sender pk                                                                                 |
| [input.tx.from]       | `string`                            | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                            | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                            | the chainId                                                                                   |
| [input.tx.signature]  | `string`                            | transaction signature                                                                         |
| [input.tx.signatures] | `array`                             | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                            | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                            | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendApproveWithdrawTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                               | Description                                                                                   |
| --------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                           |                                                                                               |
| input.tx              | `object`                           | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendApproveWithdrawTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendConsumeAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                            | Description                                                                                   |
| --------------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                        |                                                                                               |
| input.tx              | `object`                        | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendConsumeAssetTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendCreateAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                           | Description                                                                                   |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                       |                                                                                               |
| input.tx              | `object`                       | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendCreateAssetTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendDeactivateProtocolTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                  | Description                                                                                   |
| --------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                              |                                                                                               |
| input.tx              | `object`                              | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendDeactivateProtocolTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                              | the sender pk                                                                                 |
| [input.tx.from]       | `string`                              | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                              | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                              | the chainId                                                                                   |
| [input.tx.signature]  | `string`                              | transaction signature                                                                         |
| [input.tx.signatures] | `array`                               | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                              | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                              | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendDeclareTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                       | Description                                                                                   |
| --------------------- | -------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                   |                                                                                               |
| input.tx              | `object`                   | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendDeclareTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                   | the sender pk                                                                                 |
| [input.tx.from]       | `string`                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                   | the chainId                                                                                   |
| [input.tx.signature]  | `string`                   | transaction signature                                                                         |
| [input.tx.signatures] | `array`                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendDelegateTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                        | Description                                                                                   |
| --------------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                    |                                                                                               |
| input.tx              | `object`                    | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendDelegateTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                    | the sender pk                                                                                 |
| [input.tx.from]       | `string`                    | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                    | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                    | the chainId                                                                                   |
| [input.tx.signature]  | `string`                    | transaction signature                                                                         |
| [input.tx.signatures] | `array`                     | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                    | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                    | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendDepositTokenTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                            | Description                                                                                   |
| --------------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                        |                                                                                               |
| input.tx              | `object`                        | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendDepositTokenTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendExchangeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                        | Description                                                                                   |
| --------------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                    |                                                                                               |
| input.tx              | `object`                    | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendExchangeTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                    | the sender pk                                                                                 |
| [input.tx.from]       | `string`                    | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                    | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                    | the chainId                                                                                   |
| [input.tx.signature]  | `string`                    | transaction signature                                                                         |
| [input.tx.signatures] | `array`                     | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                    | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                    | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendPokeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                    | Description                                                                                   |
| --------------------- | ----------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                |                                                                                               |
| input.tx              | `object`                | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendPokeTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                | the sender pk                                                                                 |
| [input.tx.from]       | `string`                | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                | the chainId                                                                                   |
| [input.tx.signature]  | `string`                | transaction signature                                                                         |
| [input.tx.signatures] | `array`                 | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendRefuelTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                      | Description                                                                                   |
| --------------------- | ------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                  |                                                                                               |
| input.tx              | `object`                  | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendRefuelTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                  | the sender pk                                                                                 |
| [input.tx.from]       | `string`                  | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                  | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                  | the chainId                                                                                   |
| [input.tx.signature]  | `string`                  | transaction signature                                                                         |
| [input.tx.signatures] | `array`                   | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                  | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                  | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendRetrieveSwapTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                            | Description                                                                                   |
| --------------------- | ------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                        |                                                                                               |
| input.tx              | `object`                        | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendRetrieveSwapTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                        | the sender pk                                                                                 |
| [input.tx.from]       | `string`                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                        | the chainId                                                                                   |
| [input.tx.signature]  | `string`                        | transaction signature                                                                         |
| [input.tx.signatures] | `array`                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendRevokeDelegateTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendRevokeDelegateTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendRevokeSwapTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                          | Description                                                                                   |
| --------------------- | ----------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                      |                                                                                               |
| input.tx              | `object`                      | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendRevokeSwapTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                      | the sender pk                                                                                 |
| [input.tx.from]       | `string`                      | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                      | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                      | the chainId                                                                                   |
| [input.tx.signature]  | `string`                      | transaction signature                                                                         |
| [input.tx.signatures] | `array`                       | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                      | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                      | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendRevokeWithdrawTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                              | Description                                                                                   |
| --------------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                          |                                                                                               |
| input.tx              | `object`                          | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendRevokeWithdrawTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                          | the sender pk                                                                                 |
| [input.tx.from]       | `string`                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                          | the chainId                                                                                   |
| [input.tx.signature]  | `string`                          | transaction signature                                                                         |
| [input.tx.signatures] | `array`                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendSetupSwapTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                         | Description                                                                                   |
| --------------------- | ---------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                     |                                                                                               |
| input.tx              | `object`                     | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendSetupSwapTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                     | the sender pk                                                                                 |
| [input.tx.from]       | `string`                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                     | the chainId                                                                                   |
| [input.tx.signature]  | `string`                     | transaction signature                                                                         |
| [input.tx.signatures] | `array`                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendTransferTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                        | Description                                                                                   |
| --------------------- | --------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                    |                                                                                               |
| input.tx              | `object`                    | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendTransferTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                    | the sender pk                                                                                 |
| [input.tx.from]       | `string`                    | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                    | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                    | the chainId                                                                                   |
| [input.tx.signature]  | `string`                    | transaction signature                                                                         |
| [input.tx.signatures] | `array`                     | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                    | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                    | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendUpdateAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                           | Description                                                                                   |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                       |                                                                                               |
| input.tx              | `object`                       | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendUpdateAssetTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendUpdateValidatorTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                               | Description                                                                                   |
| --------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                           |                                                                                               |
| input.tx              | `object`                           | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendUpdateValidatorTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendUpgradeNodeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                           | Description                                                                                   |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                       |                                                                                               |
| input.tx              | `object`                       | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendUpgradeNodeTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GRpcClient.sendWithdrawTokenTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                             | Description                                                                                   |
| --------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                         |                                                                                               |
| input.tx              | `object`                         | data of the transaction                                                                       |
| input.tx.itx          | `GRpcClient.sendWithdrawTokenTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |
