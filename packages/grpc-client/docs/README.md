<a name="GRpcClient"></a>


## GRpcClient

An grpc client that can read/write data to a forge powered blockchain node, can be used only in node.js

Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`

**Kind**: global class  
**See**

* GRpcClient.getRpcMethods
* GRpcClient.getTxSendMethods


* [GRpcClient](#GRpcClient)
  * [new GRpcClient(config)](#new_GRpcClient_new)
  * _instance_
    * [.getType(x)](#GRpcClient+getType) ⇒ <code>class</code> \| <code>null</code>
    * [.decodeTx(buffer)](#GRpcClient+decodeTx) ⇒ <code>object</code>
    * [.getRpcMethods()](#GRpcClient+getRpcMethods) ⇒ <code>object</code>
    * [.getTxSendMethods()](#GRpcClient+getTxSendMethods) ⇒ <code>object</code>
    * [.getTxEncodeMethods()](#GRpcClient+getTxEncodeMethods) ⇒ <code>object</code>
    * [.createTx(params)](#GRpcClient+createTx) ⇒ [<code>Promise.&lt;ResponseCreateTx></code>](#GRpcClient.ResponseCreateTx)
    * [.multisig(params)](#GRpcClient+multisig) ⇒ [<code>Promise.&lt;ResponseMultisig></code>](#GRpcClient.ResponseMultisig)
    * [.sendTx(params)](#GRpcClient+sendTx) ⇒ [<code>Promise.&lt;ResponseSendTx></code>](#GRpcClient.ResponseSendTx)
    * [.getTx(params)](#GRpcClient+getTx) ⇒ <code>EventEmitter</code>
    * [.getBlock(params)](#GRpcClient+getBlock) ⇒ <code>EventEmitter</code>
    * [.getBlocks(params)](#GRpcClient+getBlocks) ⇒ [<code>Promise.&lt;ResponseGetBlocks></code>](#GRpcClient.ResponseGetBlocks)
    * [.getUnconfirmedTxs(params)](#GRpcClient+getUnconfirmedTxs) ⇒ [<code>Promise.&lt;ResponseGetUnconfirmedTxs></code>](#GRpcClient.ResponseGetUnconfirmedTxs)
    * [.getChainInfo(params)](#GRpcClient+getChainInfo) ⇒ [<code>Promise.&lt;ResponseGetChainInfo></code>](#GRpcClient.ResponseGetChainInfo)
    * [.getNodeInfo(params)](#GRpcClient+getNodeInfo) ⇒ [<code>Promise.&lt;ResponseGetNodeInfo></code>](#GRpcClient.ResponseGetNodeInfo)
    * [.search(params)](#GRpcClient+search) ⇒ [<code>Promise.&lt;ResponseSearch></code>](#GRpcClient.ResponseSearch)
    * [.getNetInfo(params)](#GRpcClient+getNetInfo) ⇒ [<code>Promise.&lt;ResponseGetNetInfo></code>](#GRpcClient.ResponseGetNetInfo)
    * [.getValidatorsInfo(params)](#GRpcClient+getValidatorsInfo) ⇒ [<code>Promise.&lt;ResponseGetValidatorsInfo></code>](#GRpcClient.ResponseGetValidatorsInfo)
    * [.getConfig(params)](#GRpcClient+getConfig) ⇒ [<code>Promise.&lt;ResponseGetConfig></code>](#GRpcClient.ResponseGetConfig)
    * [.subscribe(params)](#GRpcClient+subscribe) ⇒ <code>EventEmitter</code>
    * [.unsubscribe(params)](#GRpcClient+unsubscribe) ⇒ [<code>Promise.&lt;ResponseUnsubscribe></code>](#GRpcClient.ResponseUnsubscribe)
    * [.storeFile(params)](#GRpcClient+storeFile) ⇒ [<code>Promise.&lt;ResponseStoreFile></code>](#GRpcClient.ResponseStoreFile)
    * [.loadFile(params)](#GRpcClient+loadFile) ⇒ <code>EventEmitter</code>
    * [.pinFile(params)](#GRpcClient+pinFile) ⇒ [<code>Promise.&lt;ResponsePinFile></code>](#GRpcClient.ResponsePinFile)
    * [.getAccountState(params)](#GRpcClient+getAccountState) ⇒ <code>EventEmitter</code>
    * [.getAssetState(params)](#GRpcClient+getAssetState) ⇒ <code>EventEmitter</code>
    * [.getForgeState(params)](#GRpcClient+getForgeState) ⇒ [<code>Promise.&lt;ResponseGetForgeState></code>](#GRpcClient.ResponseGetForgeState)
    * [.getProtocolState(params)](#GRpcClient+getProtocolState) ⇒ <code>EventEmitter</code>
    * [.getStakeState(params)](#GRpcClient+getStakeState) ⇒ <code>EventEmitter</code>
    * [.getTetherState(params)](#GRpcClient+getTetherState) ⇒ <code>EventEmitter</code>
    * [.getSwapState(params)](#GRpcClient+getSwapState) ⇒ <code>EventEmitter</code>
    * [.createWallet(params)](#GRpcClient+createWallet) ⇒ [<code>Promise.&lt;ResponseCreateWallet></code>](#GRpcClient.ResponseCreateWallet)
    * [.loadWallet(params)](#GRpcClient+loadWallet) ⇒ [<code>Promise.&lt;ResponseLoadWallet></code>](#GRpcClient.ResponseLoadWallet)
    * [.recoverWallet(params)](#GRpcClient+recoverWallet) ⇒ [<code>Promise.&lt;ResponseRecoverWallet></code>](#GRpcClient.ResponseRecoverWallet)
    * [.listWallet(params)](#GRpcClient+listWallet) ⇒ <code>EventEmitter</code>
    * [.removeWallet(params)](#GRpcClient+removeWallet) ⇒ [<code>Promise.&lt;ResponseRemoveWallet></code>](#GRpcClient.ResponseRemoveWallet)
    * [.declareNode(params)](#GRpcClient+declareNode) ⇒ [<code>Promise.&lt;ResponseDeclareNode></code>](#GRpcClient.ResponseDeclareNode)
    * [.getForgeStats(params)](#GRpcClient+getForgeStats) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GRpcClient.ResponseGetForgeStats)
    * [.listTransactions(params)](#GRpcClient+listTransactions) ⇒ [<code>Promise.&lt;ResponseListTransactions></code>](#GRpcClient.ResponseListTransactions)
    * [.listAssets(params)](#GRpcClient+listAssets) ⇒ [<code>Promise.&lt;ResponseListAssets></code>](#GRpcClient.ResponseListAssets)
    * [.listStakes(params)](#GRpcClient+listStakes) ⇒ [<code>Promise.&lt;ResponseListStakes></code>](#GRpcClient.ResponseListStakes)
    * [.listAccount(params)](#GRpcClient+listAccount) ⇒ [<code>Promise.&lt;ResponseListAccount></code>](#GRpcClient.ResponseListAccount)
    * [.listTopAccounts(params)](#GRpcClient+listTopAccounts) ⇒ [<code>Promise.&lt;ResponseListTopAccounts></code>](#GRpcClient.ResponseListTopAccounts)
    * [.listAssetTransactions(params)](#GRpcClient+listAssetTransactions) ⇒ [<code>Promise.&lt;ResponseListAssetTransactions></code>](#GRpcClient.ResponseListAssetTransactions)
    * [.listBlocks(params)](#GRpcClient+listBlocks) ⇒ [<code>Promise.&lt;ResponseListBlocks></code>](#GRpcClient.ResponseListBlocks)
    * [.getHealthStatus(params)](#GRpcClient+getHealthStatus) ⇒ [<code>Promise.&lt;ResponseGetHealthStatus></code>](#GRpcClient.ResponseGetHealthStatus)
    * [.listTethers(params)](#GRpcClient+listTethers) ⇒ [<code>Promise.&lt;ResponseListTethers></code>](#GRpcClient.ResponseListTethers)
    * [.listSwap(params)](#GRpcClient+listSwap) ⇒ [<code>Promise.&lt;ResponseListSwap></code>](#GRpcClient.ResponseListSwap)
    * [.sendConsensusUpgradeTx(params)](#GRpcClient+sendConsensusUpgradeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendDeployProtocolTx(params)](#GRpcClient+sendDeployProtocolTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendSysUpgradeTx(params)](#GRpcClient+sendSysUpgradeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendAccountMigrateTx(params)](#GRpcClient+sendAccountMigrateTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendAcquireAssetTx(params)](#GRpcClient+sendAcquireAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendApproveTetherTx(params)](#GRpcClient+sendApproveTetherTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendConsumeAssetTx(params)](#GRpcClient+sendConsumeAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendCreateAssetTx(params)](#GRpcClient+sendCreateAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendDeclareTx(params)](#GRpcClient+sendDeclareTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendDepositTetherTx(params)](#GRpcClient+sendDepositTetherTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendExchangeTetherTx(params)](#GRpcClient+sendExchangeTetherTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendExchangeTx(params)](#GRpcClient+sendExchangeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendPokeTx(params)](#GRpcClient+sendPokeTx) ⇒ <code>Promise.&lt;string></code>
    * [.checkin(params)](#GRpcClient+checkin) ⇒ <code>Promise.&lt;string></code>
    * [.sendRetrieveSwapTx(params)](#GRpcClient+sendRetrieveSwapTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendRevokeSwapTx(params)](#GRpcClient+sendRevokeSwapTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendRevokeTetherTx(params)](#GRpcClient+sendRevokeTetherTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendSetupSwapTx(params)](#GRpcClient+sendSetupSwapTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendStakeTx(params)](#GRpcClient+sendStakeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendTransferTx(params)](#GRpcClient+sendTransferTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendUpdateAssetTx(params)](#GRpcClient+sendUpdateAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendUpgradeNodeTx(params)](#GRpcClient+sendUpgradeNodeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendWithdrawTetherTx(params)](#GRpcClient+sendWithdrawTetherTx) ⇒ <code>Promise.&lt;string></code>
    * [.encodeConsensusUpgradeTx(params)](#GRpcClient+encodeConsensusUpgradeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeDeployProtocolTx(params)](#GRpcClient+encodeDeployProtocolTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeSysUpgradeTx(params)](#GRpcClient+encodeSysUpgradeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeAccountMigrateTx(params)](#GRpcClient+encodeAccountMigrateTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeAcquireAssetTx(params)](#GRpcClient+encodeAcquireAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeApproveTetherTx(params)](#GRpcClient+encodeApproveTetherTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeConsumeAssetTx(params)](#GRpcClient+encodeConsumeAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeCreateAssetTx(params)](#GRpcClient+encodeCreateAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeDeclareTx(params)](#GRpcClient+encodeDeclareTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeDepositTetherTx(params)](#GRpcClient+encodeDepositTetherTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeExchangeTetherTx(params)](#GRpcClient+encodeExchangeTetherTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeExchangeTx(params)](#GRpcClient+encodeExchangeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodePokeTx(params)](#GRpcClient+encodePokeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeRetrieveSwapTx(params)](#GRpcClient+encodeRetrieveSwapTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeRevokeSwapTx(params)](#GRpcClient+encodeRevokeSwapTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeRevokeTetherTx(params)](#GRpcClient+encodeRevokeTetherTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeSetupSwapTx(params)](#GRpcClient+encodeSetupSwapTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeStakeTx(params)](#GRpcClient+encodeStakeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeTransferTx(params)](#GRpcClient+encodeTransferTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeUpdateAssetTx(params)](#GRpcClient+encodeUpdateAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeUpgradeNodeTx(params)](#GRpcClient+encodeUpgradeNodeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
    * [.encodeWithdrawTetherTx(params)](#GRpcClient+encodeWithdrawTetherTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)
  * _static_
    * [.TxEncodeOutput](#GRpcClient.TxEncodeOutput) : <code>object</code>
    * [.RequestCreateTx](#GRpcClient.RequestCreateTx) : <code>object</code>
    * [.ResponseCreateTx](#GRpcClient.ResponseCreateTx) : <code>object</code>
    * [.RequestMultisig](#GRpcClient.RequestMultisig) : <code>object</code>
    * [.ResponseMultisig](#GRpcClient.ResponseMultisig) : <code>object</code>
    * [.RequestSendTx](#GRpcClient.RequestSendTx) : <code>object</code>
    * [.ResponseSendTx](#GRpcClient.ResponseSendTx) : <code>object</code>
    * [.RequestGetTx](#GRpcClient.RequestGetTx) : <code>object</code>
    * [.ResponseGetTx](#GRpcClient.ResponseGetTx) : <code>object</code>
    * [.RequestGetBlock](#GRpcClient.RequestGetBlock) : <code>object</code>
    * [.ResponseGetBlock](#GRpcClient.ResponseGetBlock) : <code>object</code>
    * [.RequestGetBlocks](#GRpcClient.RequestGetBlocks) : <code>object</code>
    * [.ResponseGetBlocks](#GRpcClient.ResponseGetBlocks) : <code>object</code>
    * [.RequestCreateWallet](#GRpcClient.RequestCreateWallet) : <code>object</code>
    * [.ResponseCreateWallet](#GRpcClient.ResponseCreateWallet) : <code>object</code>
    * [.RequestLoadWallet](#GRpcClient.RequestLoadWallet) : <code>object</code>
    * [.ResponseLoadWallet](#GRpcClient.ResponseLoadWallet) : <code>object</code>
    * [.RequestRecoverWallet](#GRpcClient.RequestRecoverWallet) : <code>object</code>
    * [.ResponseRecoverWallet](#GRpcClient.ResponseRecoverWallet) : <code>object</code>
    * [.RequestListWallet](#GRpcClient.RequestListWallet) : <code>object</code>
    * [.ResponseListWallet](#GRpcClient.ResponseListWallet) : <code>object</code>
    * [.RequestRemoveWallet](#GRpcClient.RequestRemoveWallet) : <code>object</code>
    * [.ResponseRemoveWallet](#GRpcClient.ResponseRemoveWallet) : <code>object</code>
    * [.RequestDeclareNode](#GRpcClient.RequestDeclareNode) : <code>object</code>
    * [.ResponseDeclareNode](#GRpcClient.ResponseDeclareNode) : <code>object</code>
    * [.RequestGetAccountState](#GRpcClient.RequestGetAccountState) : <code>object</code>
    * [.ResponseGetAccountState](#GRpcClient.ResponseGetAccountState) : <code>object</code>
    * [.RequestGetAssetState](#GRpcClient.RequestGetAssetState) : <code>object</code>
    * [.ResponseGetAssetState](#GRpcClient.ResponseGetAssetState) : <code>object</code>
    * [.RequestGetProtocolState](#GRpcClient.RequestGetProtocolState) : <code>object</code>
    * [.ResponseGetProtocolState](#GRpcClient.ResponseGetProtocolState) : <code>object</code>
    * [.RequestGetStakeState](#GRpcClient.RequestGetStakeState) : <code>object</code>
    * [.ResponseGetStakeState](#GRpcClient.ResponseGetStakeState) : <code>object</code>
    * [.RequestGetForgeState](#GRpcClient.RequestGetForgeState) : <code>object</code>
    * [.ResponseGetForgeState](#GRpcClient.ResponseGetForgeState) : <code>object</code>
    * [.RequestGetTetherState](#GRpcClient.RequestGetTetherState) : <code>object</code>
    * [.ResponseGetTetherState](#GRpcClient.ResponseGetTetherState) : <code>object</code>
    * [.RequestGetSwapState](#GRpcClient.RequestGetSwapState) : <code>object</code>
    * [.ResponseGetSwapState](#GRpcClient.ResponseGetSwapState) : <code>object</code>
    * [.RequestStoreFile](#GRpcClient.RequestStoreFile) : <code>object</code>
    * [.ResponseStoreFile](#GRpcClient.ResponseStoreFile) : <code>object</code>
    * [.RequestLoadFile](#GRpcClient.RequestLoadFile) : <code>object</code>
    * [.ResponseLoadFile](#GRpcClient.ResponseLoadFile) : <code>object</code>
    * [.RequestPinFile](#GRpcClient.RequestPinFile) : <code>object</code>
    * [.ResponsePinFile](#GRpcClient.ResponsePinFile) : <code>object</code>
    * [.RequestGetChainInfo](#GRpcClient.RequestGetChainInfo) : <code>object</code>
    * [.ResponseGetChainInfo](#GRpcClient.ResponseGetChainInfo) : <code>object</code>
    * [.RequestGetNodeInfo](#GRpcClient.RequestGetNodeInfo) : <code>object</code>
    * [.ResponseGetNodeInfo](#GRpcClient.ResponseGetNodeInfo) : <code>object</code>
    * [.RequestSearch](#GRpcClient.RequestSearch) : <code>object</code>
    * [.ResponseSearch](#GRpcClient.ResponseSearch) : <code>object</code>
    * [.RequestGetUnconfirmedTxs](#GRpcClient.RequestGetUnconfirmedTxs) : <code>object</code>
    * [.ResponseGetUnconfirmedTxs](#GRpcClient.ResponseGetUnconfirmedTxs) : <code>object</code>
    * [.RequestGetNetInfo](#GRpcClient.RequestGetNetInfo) : <code>object</code>
    * [.ResponseGetNetInfo](#GRpcClient.ResponseGetNetInfo) : <code>object</code>
    * [.RequestGetValidatorsInfo](#GRpcClient.RequestGetValidatorsInfo) : <code>object</code>
    * [.ResponseGetValidatorsInfo](#GRpcClient.ResponseGetValidatorsInfo) : <code>object</code>
    * [.RequestSubscribe](#GRpcClient.RequestSubscribe) : <code>object</code>
    * [.ResponseSubscribe](#GRpcClient.ResponseSubscribe) : <code>object</code>
    * [.RequestUnsubscribe](#GRpcClient.RequestUnsubscribe) : <code>object</code>
    * [.ResponseUnsubscribe](#GRpcClient.ResponseUnsubscribe) : <code>object</code>
    * [.RequestGetConfig](#GRpcClient.RequestGetConfig) : <code>object</code>
    * [.ResponseGetConfig](#GRpcClient.ResponseGetConfig) : <code>object</code>
    * [.ByDay](#GRpcClient.ByDay) : <code>object</code>
    * [.ByHour](#GRpcClient.ByHour) : <code>object</code>
    * [.RequestGetForgeStats](#GRpcClient.RequestGetForgeStats) : <code>object</code>
    * [.ResponseGetForgeStats](#GRpcClient.ResponseGetForgeStats) : <code>object</code>
    * [.RequestListTransactions](#GRpcClient.RequestListTransactions) : <code>object</code>
    * [.ResponseListTransactions](#GRpcClient.ResponseListTransactions) : <code>object</code>
    * [.RequestListAssets](#GRpcClient.RequestListAssets) : <code>object</code>
    * [.ResponseListAssets](#GRpcClient.ResponseListAssets) : <code>object</code>
    * [.RequestListStakes](#GRpcClient.RequestListStakes) : <code>object</code>
    * [.ResponseListStakes](#GRpcClient.ResponseListStakes) : <code>object</code>
    * [.RequestListAccount](#GRpcClient.RequestListAccount) : <code>object</code>
    * [.ResponseListAccount](#GRpcClient.ResponseListAccount) : <code>object</code>
    * [.RequestListTopAccounts](#GRpcClient.RequestListTopAccounts) : <code>object</code>
    * [.ResponseListTopAccounts](#GRpcClient.ResponseListTopAccounts) : <code>object</code>
    * [.RequestListAssetTransactions](#GRpcClient.RequestListAssetTransactions) : <code>object</code>
    * [.ResponseListAssetTransactions](#GRpcClient.ResponseListAssetTransactions) : <code>object</code>
    * [.RequestListBlocks](#GRpcClient.RequestListBlocks) : <code>object</code>
    * [.ResponseListBlocks](#GRpcClient.ResponseListBlocks) : <code>object</code>
    * [.RequestListTethers](#GRpcClient.RequestListTethers) : <code>object</code>
    * [.ResponseListTethers](#GRpcClient.ResponseListTethers) : <code>object</code>
    * [.RequestListSwap](#GRpcClient.RequestListSwap) : <code>object</code>
    * [.ResponseListSwap](#GRpcClient.ResponseListSwap) : <code>object</code>
    * [.RequestGetHealthStatus](#GRpcClient.RequestGetHealthStatus) : <code>object</code>
    * [.ResponseGetHealthStatus](#GRpcClient.ResponseGetHealthStatus) : <code>object</code>
    * [.BigUint](#GRpcClient.BigUint) : <code>object</code>
    * [.BigSint](#GRpcClient.BigSint) : <code>object</code>
    * [.WalletType](#GRpcClient.WalletType) : <code>object</code>
    * [.WalletInfo](#GRpcClient.WalletInfo) : <code>object</code>
    * [.ChainInfo](#GRpcClient.ChainInfo) : <code>object</code>
    * [.NodeInfo](#GRpcClient.NodeInfo) : <code>object</code>
    * [.Validator](#GRpcClient.Validator) : <code>object</code>
    * [.ConsensusParams](#GRpcClient.ConsensusParams) : <code>object</code>
    * [.UpgradeTask](#GRpcClient.UpgradeTask) : <code>object</code>
    * [.UpgradeTasks](#GRpcClient.UpgradeTasks) : <code>object</code>
    * [.AbciContext](#GRpcClient.AbciContext) : <code>object</code>
    * [.Multisig](#GRpcClient.Multisig) : <code>object</code>
    * [.Transaction](#GRpcClient.Transaction) : <code>object</code>
    * [.TransactionInfo](#GRpcClient.TransactionInfo) : <code>object</code>
    * [.DeclareConfig](#GRpcClient.DeclareConfig) : <code>object</code>
    * [.TransactionConfig](#GRpcClient.TransactionConfig) : <code>object</code>
    * [.BlockInfo](#GRpcClient.BlockInfo) : <code>object</code>
    * [.BlockInfoSimple](#GRpcClient.BlockInfoSimple) : <code>object</code>
    * [.TxStatus](#GRpcClient.TxStatus) : <code>object</code>
    * [.CircularQueue](#GRpcClient.CircularQueue) : <code>object</code>
    * [.StateContext](#GRpcClient.StateContext) : <code>object</code>
    * [.StakeContext](#GRpcClient.StakeContext) : <code>object</code>
    * [.StakeSummary](#GRpcClient.StakeSummary) : <code>object</code>
    * [.StakeConfig](#GRpcClient.StakeConfig) : <code>object</code>
    * [.UnconfirmedTxs](#GRpcClient.UnconfirmedTxs) : <code>object</code>
    * [.NetInfo](#GRpcClient.NetInfo) : <code>object</code>
    * [.GeoInfo](#GRpcClient.GeoInfo) : <code>object</code>
    * [.PeerInfo](#GRpcClient.PeerInfo) : <code>object</code>
    * [.ValidatorsInfo](#GRpcClient.ValidatorsInfo) : <code>object</code>
    * [.ValidatorInfo](#GRpcClient.ValidatorInfo) : <code>object</code>
    * [.GenesisInfo](#GRpcClient.GenesisInfo) : <code>object</code>
    * [.ForgeStats](#GRpcClient.ForgeStats) : <code>object</code>
    * [.TxStatistics](#GRpcClient.TxStatistics) : <code>object</code>
    * [.ForgeToken](#GRpcClient.ForgeToken) : <code>object</code>
    * [.PokeInfo](#GRpcClient.PokeInfo) : <code>object</code>
    * [.PokeConfig](#GRpcClient.PokeConfig) : <code>object</code>
    * [.UpgradeInfo](#GRpcClient.UpgradeInfo) : <code>object</code>
    * [.AccountState](#GRpcClient.AccountState) : <code>object</code>
    * [.AssetState](#GRpcClient.AssetState) : <code>object</code>
    * [.CoreProtocol](#GRpcClient.CoreProtocol) : <code>object</code>
    * [.ForgeState](#GRpcClient.ForgeState) : <code>object</code>
    * [.RootState](#GRpcClient.RootState) : <code>object</code>
    * [.StakeState](#GRpcClient.StakeState) : <code>object</code>
    * [.StatisticsState](#GRpcClient.StatisticsState) : <code>object</code>
    * [.BlacklistState](#GRpcClient.BlacklistState) : <code>object</code>
    * [.ProtocolState](#GRpcClient.ProtocolState) : <code>object</code>
    * [.TetherState](#GRpcClient.TetherState) : <code>object</code>
    * [.TetherInfo](#GRpcClient.TetherInfo) : <code>object</code>
    * [.SwapState](#GRpcClient.SwapState) : <code>object</code>
    * [.CodeInfo](#GRpcClient.CodeInfo) : <code>object</code>
    * [.TypeUrls](#GRpcClient.TypeUrls) : <code>object</code>
    * [.DeployProtocolTx](#GRpcClient.DeployProtocolTx) : <code>object</code>
    * [.ConsensusUpgradeTx](#GRpcClient.ConsensusUpgradeTx) : <code>object</code>
    * [.SysUpgradeTx](#GRpcClient.SysUpgradeTx) : <code>object</code>
    * [.PageOrder](#GRpcClient.PageOrder) : <code>object</code>
    * [.PageInput](#GRpcClient.PageInput) : <code>object</code>
    * [.TypeFilter](#GRpcClient.TypeFilter) : <code>object</code>
    * [.TimeFilter](#GRpcClient.TimeFilter) : <code>object</code>
    * [.AddressFilter](#GRpcClient.AddressFilter) : <code>object</code>
    * [.PageInfo](#GRpcClient.PageInfo) : <code>object</code>
    * [.IndexedTransaction](#GRpcClient.IndexedTransaction) : <code>object</code>
    * [.IndexedAccountState](#GRpcClient.IndexedAccountState) : <code>object</code>
    * [.IndexedAssetState](#GRpcClient.IndexedAssetState) : <code>object</code>
    * [.IndexedStakeState](#GRpcClient.IndexedStakeState) : <code>object</code>
    * [.IndexedBlock](#GRpcClient.IndexedBlock) : <code>object</code>
    * [.HealthStatus](#GRpcClient.HealthStatus) : <code>object</code>
    * [.ConsensusStatus](#GRpcClient.ConsensusStatus) : <code>object</code>
    * [.NetworkStatus](#GRpcClient.NetworkStatus) : <code>object</code>
    * [.StorageStatus](#GRpcClient.StorageStatus) : <code>object</code>
    * [.DiskSpaceStatus](#GRpcClient.DiskSpaceStatus) : <code>object</code>
    * [.ForgeStatus](#GRpcClient.ForgeStatus) : <code>object</code>
    * [.AbciServerStatus](#GRpcClient.AbciServerStatus) : <code>object</code>
    * [.ValidityFilter](#GRpcClient.ValidityFilter) : <code>object</code>
    * [.RangeFilter](#GRpcClient.RangeFilter) : <code>object</code>
    * [.AccountMigrateTx](#GRpcClient.AccountMigrateTx) : <code>object</code>
    * [.AssetSpec](#GRpcClient.AssetSpec) : <code>object</code>
    * [.AcquireAssetTx](#GRpcClient.AcquireAssetTx) : <code>object</code>
    * [.ApproveTetherTx](#GRpcClient.ApproveTetherTx) : <code>object</code>
    * [.ConsumeAssetTx](#GRpcClient.ConsumeAssetTx) : <code>object</code>
    * [.CreateAssetTx](#GRpcClient.CreateAssetTx) : <code>object</code>
    * [.AssetAttributes](#GRpcClient.AssetAttributes) : <code>object</code>
    * [.AssetFactory](#GRpcClient.AssetFactory) : <code>object</code>
    * [.AssetFactoryState](#GRpcClient.AssetFactoryState) : <code>object</code>
    * [.DeclareTx](#GRpcClient.DeclareTx) : <code>object</code>
    * [.DepositTetherTx](#GRpcClient.DepositTetherTx) : <code>object</code>
    * [.ExchangeInfo](#GRpcClient.ExchangeInfo) : <code>object</code>
    * [.ExchangeTx](#GRpcClient.ExchangeTx) : <code>object</code>
    * [.TetherExchangeInfo](#GRpcClient.TetherExchangeInfo) : <code>object</code>
    * [.ExchangeTetherTx](#GRpcClient.ExchangeTetherTx) : <code>object</code>
    * [.PokeTx](#GRpcClient.PokeTx) : <code>object</code>
    * [.RetrieveSwapTx](#GRpcClient.RetrieveSwapTx) : <code>object</code>
    * [.RevokeSwapTx](#GRpcClient.RevokeSwapTx) : <code>object</code>
    * [.RevokeTetherTx](#GRpcClient.RevokeTetherTx) : <code>object</code>
    * [.SetupSwapTx](#GRpcClient.SetupSwapTx) : <code>object</code>
    * [.stakeForAsset](#GRpcClient.stakeForAsset) : <code>object</code>
    * [.stakeForChain](#GRpcClient.stakeForChain) : <code>object</code>
    * [.StakeForNode](#GRpcClient.StakeForNode) : <code>object</code>
    * [.stakeForUser](#GRpcClient.stakeForUser) : <code>object</code>
    * [.StakeTx](#GRpcClient.StakeTx) : <code>object</code>
    * [.TransferTx](#GRpcClient.TransferTx) : <code>object</code>
    * [.UpdateAssetTx](#GRpcClient.UpdateAssetTx) : <code>object</code>
    * [.UpgradeNodeTx](#GRpcClient.UpgradeNodeTx) : <code>object</code>
    * [.TetherTradeInfo](#GRpcClient.TetherTradeInfo) : <code>object</code>
    * [.WithdrawTetherTx](#GRpcClient.WithdrawTetherTx) : <code>object</code>
    * [.Any](#GRpcClient.Any) : <code>object</code>
    * [.Timestamp](#GRpcClient.Timestamp) : <code>object</code>
    * [.KVPair](#GRpcClient.KVPair) : <code>object</code>
    * [.BlockParams](#GRpcClient.BlockParams) : <code>object</code>
    * [.EvidenceParams](#GRpcClient.EvidenceParams) : <code>object</code>
    * [.ValidatorParams](#GRpcClient.ValidatorParams) : <code>object</code>
    * [.ConsensusParams](#GRpcClient.ConsensusParams) : <code>object</code>
    * [.LastCommitInfo](#GRpcClient.LastCommitInfo) : <code>object</code>
    * [.Version](#GRpcClient.Version) : <code>object</code>
    * [.BlockID](#GRpcClient.BlockID) : <code>object</code>
    * [.PartSetHeader](#GRpcClient.PartSetHeader) : <code>object</code>
    * [.Validator](#GRpcClient.Validator) : <code>object</code>
    * [.ValidatorUpdate](#GRpcClient.ValidatorUpdate) : <code>object</code>
    * [.VoteInfo](#GRpcClient.VoteInfo) : <code>object</code>
    * [.PubKey](#GRpcClient.PubKey) : <code>object</code>
    * [.Evidence](#GRpcClient.Evidence) : <code>object</code>
    * [.Header](#GRpcClient.Header) : <code>object</code>
    * [.RequestBeginBlock](#GRpcClient.RequestBeginBlock) : <code>object</code>
    * [.RequestEndBlock](#GRpcClient.RequestEndBlock) : <code>object</code>
    * [.ResponseBeginBlock](#GRpcClient.ResponseBeginBlock) : <code>object</code>
    * [.ResponseEndBlock](#GRpcClient.ResponseEndBlock) : <code>object</code>
    * [.ResponseCheckTx](#GRpcClient.ResponseCheckTx) : <code>object</code>
    * [.ResponseDeliverTx](#GRpcClient.ResponseDeliverTx) : <code>object</code>
    * [.ConsensusUpgradeTxInput](#GRpcClient.ConsensusUpgradeTxInput) : <code>Object</code>
    * [.DeployProtocolTxInput](#GRpcClient.DeployProtocolTxInput) : <code>Object</code>
    * [.SysUpgradeTxInput](#GRpcClient.SysUpgradeTxInput) : <code>Object</code>
    * [.AccountMigrateTxInput](#GRpcClient.AccountMigrateTxInput) : <code>Object</code>
    * [.AcquireAssetTxInput](#GRpcClient.AcquireAssetTxInput) : <code>Object</code>
    * [.ApproveTetherTxInput](#GRpcClient.ApproveTetherTxInput) : <code>Object</code>
    * [.ConsumeAssetTxInput](#GRpcClient.ConsumeAssetTxInput) : <code>Object</code>
    * [.CreateAssetTxInput](#GRpcClient.CreateAssetTxInput) : <code>Object</code>
    * [.DeclareTxInput](#GRpcClient.DeclareTxInput) : <code>Object</code>
    * [.DepositTetherTxInput](#GRpcClient.DepositTetherTxInput) : <code>Object</code>
    * [.ExchangeTetherTxInput](#GRpcClient.ExchangeTetherTxInput) : <code>Object</code>
    * [.ExchangeTxInput](#GRpcClient.ExchangeTxInput) : <code>Object</code>
    * [.PokeTxInput](#GRpcClient.PokeTxInput) : <code>Object</code>
    * [.PokeTxInput](#GRpcClient.PokeTxInput) : <code>Object</code>
    * [.RetrieveSwapTxInput](#GRpcClient.RetrieveSwapTxInput) : <code>Object</code>
    * [.RevokeSwapTxInput](#GRpcClient.RevokeSwapTxInput) : <code>Object</code>
    * [.RevokeTetherTxInput](#GRpcClient.RevokeTetherTxInput) : <code>Object</code>
    * [.SetupSwapTxInput](#GRpcClient.SetupSwapTxInput) : <code>Object</code>
    * [.StakeTxInput](#GRpcClient.StakeTxInput) : <code>Object</code>
    * [.TransferTxInput](#GRpcClient.TransferTxInput) : <code>Object</code>
    * [.UpdateAssetTxInput](#GRpcClient.UpdateAssetTxInput) : <code>Object</code>
    * [.UpgradeNodeTxInput](#GRpcClient.UpgradeNodeTxInput) : <code>Object</code>
    * [.WithdrawTetherTxInput](#GRpcClient.WithdrawTetherTxInput) : <code>Object</code>

<a name="new_GRpcClient_new"></a>

### new GRpcClient(config)

Creates an instance of GRpcClient, and generate transaction sending and receiving methods

| Param             | Type                                       | Default                                    | Description                                                     |
| ----------------- | ------------------------------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| config            | <code>object</code> \| <code>string</code> | <code>tcp://127.0.0.1:28210</code>         | config object, if a string passed, will be used as the endpoint |
| [config.endpoint] | <code>string</code>                        | <code>"\\"tcp://127.0.0.1:28210\\""</code> | grpc endpoint the client can connect to                         |
| [config.chainId]  | <code>string</code>                        | <code>"\\"\\""</code>                      | chainId used to construct transaction                           |

<a name="GRpcClient+getType"></a>

### gRpcClient.getType(x) ⇒ <code>class</code> \| <code>null</code>

Get protobuf message class by name, only supports forge-built-in types

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>class</code> \| <code>null</code> - message type  

| Param | Type                |
| ----- | ------------------- |
| x     | <code>string</code> |

<a name="GRpcClient+decodeTx"></a>

### gRpcClient.decodeTx(buffer) ⇒ <code>object</code>

Decode transaction buffer to an object

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>object</code> - transaction object  

| Param  | Type                |
| ------ | ------------------- |
| buffer | <code>buffer</code> |

<a name="GRpcClient+getRpcMethods"></a>

### gRpcClient.getRpcMethods() ⇒ <code>object</code>

List standard rpc methods

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient+getTxSendMethods"></a>

### gRpcClient.getTxSendMethods() ⇒ <code>object</code>

List generated transaction send methods

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient+getTxEncodeMethods"></a>

### gRpcClient.getTxEncodeMethods() ⇒ <code>object</code>

List generated transaction send methods

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient+createTx"></a>

### gRpcClient.createTx(params) ⇒ [<code>Promise.&lt;ResponseCreateTx></code>](#GRpcClient.ResponseCreateTx)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>RequestCreateTx</code>](#GRpcClient.RequestCreateTx) |

<a name="GRpcClient+multisig"></a>

### gRpcClient.multisig(params) ⇒ [<code>Promise.&lt;ResponseMultisig></code>](#GRpcClient.ResponseMultisig)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>RequestMultisig</code>](#GRpcClient.RequestMultisig) |

<a name="GRpcClient+sendTx"></a>

### gRpcClient.sendTx(params) ⇒ [<code>Promise.&lt;ResponseSendTx></code>](#GRpcClient.ResponseSendTx)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [<code>RequestSendTx</code>](#GRpcClient.RequestSendTx) |

<a name="GRpcClient+getTx"></a>

### gRpcClient.getTx(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetTx](#GRpcClient.ResponseGetTx) for payload format.  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [<code>RequestGetTx</code>](#GRpcClient.RequestGetTx) |

<a name="GRpcClient+getBlock"></a>

### gRpcClient.getBlock(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetBlock](#GRpcClient.ResponseGetBlock) for payload format.  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>RequestGetBlock</code>](#GRpcClient.RequestGetBlock) |

<a name="GRpcClient+getBlocks"></a>

### gRpcClient.getBlocks(params) ⇒ [<code>Promise.&lt;ResponseGetBlocks></code>](#GRpcClient.ResponseGetBlocks)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [<code>RequestGetBlocks</code>](#GRpcClient.RequestGetBlocks) |

<a name="GRpcClient+getUnconfirmedTxs"></a>

### gRpcClient.getUnconfirmedTxs(params) ⇒ [<code>Promise.&lt;ResponseGetUnconfirmedTxs></code>](#GRpcClient.ResponseGetUnconfirmedTxs)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                          |
| ------ | ----------------------------------------------------------------------------- |
| params | [<code>RequestGetUnconfirmedTxs</code>](#GRpcClient.RequestGetUnconfirmedTxs) |

<a name="GRpcClient+getChainInfo"></a>

### gRpcClient.getChainInfo(params) ⇒ [<code>Promise.&lt;ResponseGetChainInfo></code>](#GRpcClient.ResponseGetChainInfo)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RequestGetChainInfo</code>](#GRpcClient.RequestGetChainInfo) |

<a name="GRpcClient+getNodeInfo"></a>

### gRpcClient.getNodeInfo(params) ⇒ [<code>Promise.&lt;ResponseGetNodeInfo></code>](#GRpcClient.ResponseGetNodeInfo)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>RequestGetNodeInfo</code>](#GRpcClient.RequestGetNodeInfo) |

<a name="GRpcClient+search"></a>

### gRpcClient.search(params) ⇒ [<code>Promise.&lt;ResponseSearch></code>](#GRpcClient.ResponseSearch)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [<code>RequestSearch</code>](#GRpcClient.RequestSearch) |

<a name="GRpcClient+getNetInfo"></a>

### gRpcClient.getNetInfo(params) ⇒ [<code>Promise.&lt;ResponseGetNetInfo></code>](#GRpcClient.ResponseGetNetInfo)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RequestGetNetInfo</code>](#GRpcClient.RequestGetNetInfo) |

<a name="GRpcClient+getValidatorsInfo"></a>

### gRpcClient.getValidatorsInfo(params) ⇒ [<code>Promise.&lt;ResponseGetValidatorsInfo></code>](#GRpcClient.ResponseGetValidatorsInfo)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                          |
| ------ | ----------------------------------------------------------------------------- |
| params | [<code>RequestGetValidatorsInfo</code>](#GRpcClient.RequestGetValidatorsInfo) |

<a name="GRpcClient+getConfig"></a>

### gRpcClient.getConfig(params) ⇒ [<code>Promise.&lt;ResponseGetConfig></code>](#GRpcClient.ResponseGetConfig)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [<code>RequestGetConfig</code>](#GRpcClient.RequestGetConfig) |

<a name="GRpcClient+subscribe"></a>

### gRpcClient.subscribe(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseSubscribe](#GRpcClient.ResponseSubscribe) for payload format.  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [<code>RequestSubscribe</code>](#GRpcClient.RequestSubscribe) |

<a name="GRpcClient+unsubscribe"></a>

### gRpcClient.unsubscribe(params) ⇒ [<code>Promise.&lt;ResponseUnsubscribe></code>](#GRpcClient.ResponseUnsubscribe)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>RequestUnsubscribe</code>](#GRpcClient.RequestUnsubscribe) |

<a name="GRpcClient+storeFile"></a>

### gRpcClient.storeFile(params) ⇒ [<code>Promise.&lt;ResponseStoreFile></code>](#GRpcClient.ResponseStoreFile)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [<code>RequestStoreFile</code>](#GRpcClient.RequestStoreFile) |

<a name="GRpcClient+loadFile"></a>

### gRpcClient.loadFile(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseLoadFile](#GRpcClient.ResponseLoadFile) for payload format.  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>RequestLoadFile</code>](#GRpcClient.RequestLoadFile) |

<a name="GRpcClient+pinFile"></a>

### gRpcClient.pinFile(params) ⇒ [<code>Promise.&lt;ResponsePinFile></code>](#GRpcClient.ResponsePinFile)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [<code>RequestPinFile</code>](#GRpcClient.RequestPinFile) |

<a name="GRpcClient+getAccountState"></a>

### gRpcClient.getAccountState(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetAccountState](#GRpcClient.ResponseGetAccountState) for payload format.  

| Param  | Type                                                                      |
| ------ | ------------------------------------------------------------------------- |
| params | [<code>RequestGetAccountState</code>](#GRpcClient.RequestGetAccountState) |

<a name="GRpcClient+getAssetState"></a>

### gRpcClient.getAssetState(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetAssetState](#GRpcClient.ResponseGetAssetState) for payload format.  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>RequestGetAssetState</code>](#GRpcClient.RequestGetAssetState) |

<a name="GRpcClient+getForgeState"></a>

### gRpcClient.getForgeState(params) ⇒ [<code>Promise.&lt;ResponseGetForgeState></code>](#GRpcClient.ResponseGetForgeState)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>RequestGetForgeState</code>](#GRpcClient.RequestGetForgeState) |

<a name="GRpcClient+getProtocolState"></a>

### gRpcClient.getProtocolState(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetProtocolState](#GRpcClient.ResponseGetProtocolState) for payload format.  

| Param  | Type                                                                        |
| ------ | --------------------------------------------------------------------------- |
| params | [<code>RequestGetProtocolState</code>](#GRpcClient.RequestGetProtocolState) |

<a name="GRpcClient+getStakeState"></a>

### gRpcClient.getStakeState(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetStakeState](#GRpcClient.ResponseGetStakeState) for payload format.  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>RequestGetStakeState</code>](#GRpcClient.RequestGetStakeState) |

<a name="GRpcClient+getTetherState"></a>

### gRpcClient.getTetherState(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetTetherState](#GRpcClient.ResponseGetTetherState) for payload format.  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>RequestGetTetherState</code>](#GRpcClient.RequestGetTetherState) |

<a name="GRpcClient+getSwapState"></a>

### gRpcClient.getSwapState(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseGetSwapState](#GRpcClient.ResponseGetSwapState) for payload format.  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RequestGetSwapState</code>](#GRpcClient.RequestGetSwapState) |

<a name="GRpcClient+createWallet"></a>

### gRpcClient.createWallet(params) ⇒ [<code>Promise.&lt;ResponseCreateWallet></code>](#GRpcClient.ResponseCreateWallet)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RequestCreateWallet</code>](#GRpcClient.RequestCreateWallet) |

<a name="GRpcClient+loadWallet"></a>

### gRpcClient.loadWallet(params) ⇒ [<code>Promise.&lt;ResponseLoadWallet></code>](#GRpcClient.ResponseLoadWallet)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RequestLoadWallet</code>](#GRpcClient.RequestLoadWallet) |

<a name="GRpcClient+recoverWallet"></a>

### gRpcClient.recoverWallet(params) ⇒ [<code>Promise.&lt;ResponseRecoverWallet></code>](#GRpcClient.ResponseRecoverWallet)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>RequestRecoverWallet</code>](#GRpcClient.RequestRecoverWallet) |

<a name="GRpcClient+listWallet"></a>

### gRpcClient.listWallet(params) ⇒ <code>EventEmitter</code>

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>EventEmitter</code> - EventEmitter that emits `data` event when new data received, checkout [ResponseListWallet](#GRpcClient.ResponseListWallet) for payload format.  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RequestListWallet</code>](#GRpcClient.RequestListWallet) |

<a name="GRpcClient+removeWallet"></a>

### gRpcClient.removeWallet(params) ⇒ [<code>Promise.&lt;ResponseRemoveWallet></code>](#GRpcClient.ResponseRemoveWallet)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RequestRemoveWallet</code>](#GRpcClient.RequestRemoveWallet) |

<a name="GRpcClient+declareNode"></a>

### gRpcClient.declareNode(params) ⇒ [<code>Promise.&lt;ResponseDeclareNode></code>](#GRpcClient.ResponseDeclareNode)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>RequestDeclareNode</code>](#GRpcClient.RequestDeclareNode) |

<a name="GRpcClient+getForgeStats"></a>

### gRpcClient.getForgeStats(params) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GRpcClient.ResponseGetForgeStats)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>RequestGetForgeStats</code>](#GRpcClient.RequestGetForgeStats) |

<a name="GRpcClient+listTransactions"></a>

### gRpcClient.listTransactions(params) ⇒ [<code>Promise.&lt;ResponseListTransactions></code>](#GRpcClient.ResponseListTransactions)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                        |
| ------ | --------------------------------------------------------------------------- |
| params | [<code>RequestListTransactions</code>](#GRpcClient.RequestListTransactions) |

<a name="GRpcClient+listAssets"></a>

### gRpcClient.listAssets(params) ⇒ [<code>Promise.&lt;ResponseListAssets></code>](#GRpcClient.ResponseListAssets)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RequestListAssets</code>](#GRpcClient.RequestListAssets) |

<a name="GRpcClient+listStakes"></a>

### gRpcClient.listStakes(params) ⇒ [<code>Promise.&lt;ResponseListStakes></code>](#GRpcClient.ResponseListStakes)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RequestListStakes</code>](#GRpcClient.RequestListStakes) |

<a name="GRpcClient+listAccount"></a>

### gRpcClient.listAccount(params) ⇒ [<code>Promise.&lt;ResponseListAccount></code>](#GRpcClient.ResponseListAccount)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>RequestListAccount</code>](#GRpcClient.RequestListAccount) |

<a name="GRpcClient+listTopAccounts"></a>

### gRpcClient.listTopAccounts(params) ⇒ [<code>Promise.&lt;ResponseListTopAccounts></code>](#GRpcClient.ResponseListTopAccounts)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                      |
| ------ | ------------------------------------------------------------------------- |
| params | [<code>RequestListTopAccounts</code>](#GRpcClient.RequestListTopAccounts) |

<a name="GRpcClient+listAssetTransactions"></a>

### gRpcClient.listAssetTransactions(params) ⇒ [<code>Promise.&lt;ResponseListAssetTransactions></code>](#GRpcClient.ResponseListAssetTransactions)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                                  |
| ------ | ------------------------------------------------------------------------------------- |
| params | [<code>RequestListAssetTransactions</code>](#GRpcClient.RequestListAssetTransactions) |

<a name="GRpcClient+listBlocks"></a>

### gRpcClient.listBlocks(params) ⇒ [<code>Promise.&lt;ResponseListBlocks></code>](#GRpcClient.ResponseListBlocks)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RequestListBlocks</code>](#GRpcClient.RequestListBlocks) |

<a name="GRpcClient+getHealthStatus"></a>

### gRpcClient.getHealthStatus(params) ⇒ [<code>Promise.&lt;ResponseGetHealthStatus></code>](#GRpcClient.ResponseGetHealthStatus)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                                      |
| ------ | ------------------------------------------------------------------------- |
| params | [<code>RequestGetHealthStatus</code>](#GRpcClient.RequestGetHealthStatus) |

<a name="GRpcClient+listTethers"></a>

### gRpcClient.listTethers(params) ⇒ [<code>Promise.&lt;ResponseListTethers></code>](#GRpcClient.ResponseListTethers)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>RequestListTethers</code>](#GRpcClient.RequestListTethers) |

<a name="GRpcClient+listSwap"></a>

### gRpcClient.listSwap(params) ⇒ [<code>Promise.&lt;ResponseListSwap></code>](#GRpcClient.ResponseListSwap)

Send gRPC call and return the result

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>RequestListSwap</code>](#GRpcClient.RequestListSwap) |

<a name="GRpcClient+sendConsensusUpgradeTx"></a>

### gRpcClient.sendConsensusUpgradeTx(params) ⇒ <code>Promise.&lt;string></code>

Send ConsensusUpgradeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                        |
| ------ | --------------------------------------------------------------------------- |
| params | [<code>ConsensusUpgradeTxInput</code>](#GRpcClient.ConsensusUpgradeTxInput) |

<a name="GRpcClient+sendDeployProtocolTx"></a>

### gRpcClient.sendDeployProtocolTx(params) ⇒ <code>Promise.&lt;string></code>

Send DeployProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>DeployProtocolTxInput</code>](#GRpcClient.DeployProtocolTxInput) |

<a name="GRpcClient+sendSysUpgradeTx"></a>

### gRpcClient.sendSysUpgradeTx(params) ⇒ <code>Promise.&lt;string></code>

Send SysUpgradeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>SysUpgradeTxInput</code>](#GRpcClient.SysUpgradeTxInput) |

<a name="GRpcClient+sendAccountMigrateTx"></a>

### gRpcClient.sendAccountMigrateTx(params) ⇒ <code>Promise.&lt;string></code>

Send AccountMigrateTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>AccountMigrateTxInput</code>](#GRpcClient.AccountMigrateTxInput) |

<a name="GRpcClient+sendAcquireAssetTx"></a>

### gRpcClient.sendAcquireAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send AcquireAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>AcquireAssetTxInput</code>](#GRpcClient.AcquireAssetTxInput) |

<a name="GRpcClient+sendApproveTetherTx"></a>

### gRpcClient.sendApproveTetherTx(params) ⇒ <code>Promise.&lt;string></code>

Send ApproveTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>ApproveTetherTxInput</code>](#GRpcClient.ApproveTetherTxInput) |

<a name="GRpcClient+sendConsumeAssetTx"></a>

### gRpcClient.sendConsumeAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send ConsumeAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>ConsumeAssetTxInput</code>](#GRpcClient.ConsumeAssetTxInput) |

<a name="GRpcClient+sendCreateAssetTx"></a>

### gRpcClient.sendCreateAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send CreateAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>CreateAssetTxInput</code>](#GRpcClient.CreateAssetTxInput) |

<a name="GRpcClient+sendDeclareTx"></a>

### gRpcClient.sendDeclareTx(params) ⇒ <code>Promise.&lt;string></code>

Send DeclareTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [<code>DeclareTxInput</code>](#GRpcClient.DeclareTxInput) |

<a name="GRpcClient+sendDepositTetherTx"></a>

### gRpcClient.sendDepositTetherTx(params) ⇒ <code>Promise.&lt;string></code>

Send DepositTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>DepositTetherTxInput</code>](#GRpcClient.DepositTetherTxInput) |

<a name="GRpcClient+sendExchangeTetherTx"></a>

### gRpcClient.sendExchangeTetherTx(params) ⇒ <code>Promise.&lt;string></code>

Send ExchangeTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>ExchangeTetherTxInput</code>](#GRpcClient.ExchangeTetherTxInput) |

<a name="GRpcClient+sendExchangeTx"></a>

### gRpcClient.sendExchangeTx(params) ⇒ <code>Promise.&lt;string></code>

Send ExchangeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>ExchangeTxInput</code>](#GRpcClient.ExchangeTxInput) |

<a name="GRpcClient+sendPokeTx"></a>

### gRpcClient.sendPokeTx(params) ⇒ <code>Promise.&lt;string></code>

Send PokeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [<code>PokeTxInput</code>](#GRpcClient.PokeTxInput) |

<a name="GRpcClient+checkin"></a>

### gRpcClient.checkin(params) ⇒ <code>Promise.&lt;string></code>

Send PokeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [<code>PokeTxInput</code>](#GRpcClient.PokeTxInput) |

<a name="GRpcClient+sendRetrieveSwapTx"></a>

### gRpcClient.sendRetrieveSwapTx(params) ⇒ <code>Promise.&lt;string></code>

Send RetrieveSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RetrieveSwapTxInput</code>](#GRpcClient.RetrieveSwapTxInput) |

<a name="GRpcClient+sendRevokeSwapTx"></a>

### gRpcClient.sendRevokeSwapTx(params) ⇒ <code>Promise.&lt;string></code>

Send RevokeSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RevokeSwapTxInput</code>](#GRpcClient.RevokeSwapTxInput) |

<a name="GRpcClient+sendRevokeTetherTx"></a>

### gRpcClient.sendRevokeTetherTx(params) ⇒ <code>Promise.&lt;string></code>

Send RevokeTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RevokeTetherTxInput</code>](#GRpcClient.RevokeTetherTxInput) |

<a name="GRpcClient+sendSetupSwapTx"></a>

### gRpcClient.sendSetupSwapTx(params) ⇒ <code>Promise.&lt;string></code>

Send SetupSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [<code>SetupSwapTxInput</code>](#GRpcClient.SetupSwapTxInput) |

<a name="GRpcClient+sendStakeTx"></a>

### gRpcClient.sendStakeTx(params) ⇒ <code>Promise.&lt;string></code>

Send StakeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [<code>StakeTxInput</code>](#GRpcClient.StakeTxInput) |

<a name="GRpcClient+sendTransferTx"></a>

### gRpcClient.sendTransferTx(params) ⇒ <code>Promise.&lt;string></code>

Send TransferTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>TransferTxInput</code>](#GRpcClient.TransferTxInput) |

<a name="GRpcClient+sendUpdateAssetTx"></a>

### gRpcClient.sendUpdateAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send UpdateAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>UpdateAssetTxInput</code>](#GRpcClient.UpdateAssetTxInput) |

<a name="GRpcClient+sendUpgradeNodeTx"></a>

### gRpcClient.sendUpgradeNodeTx(params) ⇒ <code>Promise.&lt;string></code>

Send UpgradeNodeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>UpgradeNodeTxInput</code>](#GRpcClient.UpgradeNodeTxInput) |

<a name="GRpcClient+sendWithdrawTetherTx"></a>

### gRpcClient.sendWithdrawTetherTx(params) ⇒ <code>Promise.&lt;string></code>

Send WithdrawTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>WithdrawTetherTxInput</code>](#GRpcClient.WithdrawTetherTxInput) |

<a name="GRpcClient+encodeConsensusUpgradeTx"></a>

### gRpcClient.encodeConsensusUpgradeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a ConsensusUpgradeTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                        |
| ------ | --------------------------------------------------------------------------- |
| params | [<code>ConsensusUpgradeTxInput</code>](#GRpcClient.ConsensusUpgradeTxInput) |

<a name="GRpcClient+encodeDeployProtocolTx"></a>

### gRpcClient.encodeDeployProtocolTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a DeployProtocolTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>DeployProtocolTxInput</code>](#GRpcClient.DeployProtocolTxInput) |

<a name="GRpcClient+encodeSysUpgradeTx"></a>

### gRpcClient.encodeSysUpgradeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a SysUpgradeTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>SysUpgradeTxInput</code>](#GRpcClient.SysUpgradeTxInput) |

<a name="GRpcClient+encodeAccountMigrateTx"></a>

### gRpcClient.encodeAccountMigrateTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a AccountMigrateTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>AccountMigrateTxInput</code>](#GRpcClient.AccountMigrateTxInput) |

<a name="GRpcClient+encodeAcquireAssetTx"></a>

### gRpcClient.encodeAcquireAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a AcquireAssetTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>AcquireAssetTxInput</code>](#GRpcClient.AcquireAssetTxInput) |

<a name="GRpcClient+encodeApproveTetherTx"></a>

### gRpcClient.encodeApproveTetherTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a ApproveTetherTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>ApproveTetherTxInput</code>](#GRpcClient.ApproveTetherTxInput) |

<a name="GRpcClient+encodeConsumeAssetTx"></a>

### gRpcClient.encodeConsumeAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a ConsumeAssetTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>ConsumeAssetTxInput</code>](#GRpcClient.ConsumeAssetTxInput) |

<a name="GRpcClient+encodeCreateAssetTx"></a>

### gRpcClient.encodeCreateAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a CreateAssetTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>CreateAssetTxInput</code>](#GRpcClient.CreateAssetTxInput) |

<a name="GRpcClient+encodeDeclareTx"></a>

### gRpcClient.encodeDeclareTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a DeclareTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [<code>DeclareTxInput</code>](#GRpcClient.DeclareTxInput) |

<a name="GRpcClient+encodeDepositTetherTx"></a>

### gRpcClient.encodeDepositTetherTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a DepositTetherTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [<code>DepositTetherTxInput</code>](#GRpcClient.DepositTetherTxInput) |

<a name="GRpcClient+encodeExchangeTetherTx"></a>

### gRpcClient.encodeExchangeTetherTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a ExchangeTetherTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>ExchangeTetherTxInput</code>](#GRpcClient.ExchangeTetherTxInput) |

<a name="GRpcClient+encodeExchangeTx"></a>

### gRpcClient.encodeExchangeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a ExchangeTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>ExchangeTxInput</code>](#GRpcClient.ExchangeTxInput) |

<a name="GRpcClient+encodePokeTx"></a>

### gRpcClient.encodePokeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a PokeTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [<code>PokeTxInput</code>](#GRpcClient.PokeTxInput) |

<a name="GRpcClient+encodeRetrieveSwapTx"></a>

### gRpcClient.encodeRetrieveSwapTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a RetrieveSwapTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RetrieveSwapTxInput</code>](#GRpcClient.RetrieveSwapTxInput) |

<a name="GRpcClient+encodeRevokeSwapTx"></a>

### gRpcClient.encodeRevokeSwapTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a RevokeSwapTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [<code>RevokeSwapTxInput</code>](#GRpcClient.RevokeSwapTxInput) |

<a name="GRpcClient+encodeRevokeTetherTx"></a>

### gRpcClient.encodeRevokeTetherTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a RevokeTetherTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [<code>RevokeTetherTxInput</code>](#GRpcClient.RevokeTetherTxInput) |

<a name="GRpcClient+encodeSetupSwapTx"></a>

### gRpcClient.encodeSetupSwapTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a SetupSwapTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [<code>SetupSwapTxInput</code>](#GRpcClient.SetupSwapTxInput) |

<a name="GRpcClient+encodeStakeTx"></a>

### gRpcClient.encodeStakeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a StakeTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [<code>StakeTxInput</code>](#GRpcClient.StakeTxInput) |

<a name="GRpcClient+encodeTransferTx"></a>

### gRpcClient.encodeTransferTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a TransferTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [<code>TransferTxInput</code>](#GRpcClient.TransferTxInput) |

<a name="GRpcClient+encodeUpdateAssetTx"></a>

### gRpcClient.encodeUpdateAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a UpdateAssetTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>UpdateAssetTxInput</code>](#GRpcClient.UpdateAssetTxInput) |

<a name="GRpcClient+encodeUpgradeNodeTx"></a>

### gRpcClient.encodeUpgradeNodeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a UpgradeNodeTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [<code>UpgradeNodeTxInput</code>](#GRpcClient.UpgradeNodeTxInput) |

<a name="GRpcClient+encodeWithdrawTetherTx"></a>

### gRpcClient.encodeWithdrawTetherTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput)

Encode a WithdrawTetherTx transaction for later use

**Kind**: instance method of [<code>GRpcClient</code>](#GRpcClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [<code>WithdrawTetherTxInput</code>](#GRpcClient.WithdrawTetherTxInput) |

<a name="GRpcClient.TxEncodeOutput"></a>

### GRpcClient.TxEncodeOutput : <code>object</code>

Structure of GRpcClient.TxEncodeOutput

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                | Description                                                                            |
| ------ | ------------------- | -------------------------------------------------------------------------------------- |
| object | <code>object</code> | the transaction object, human readable                                                 |
| buffer | <code>buffer</code> | the transaction binary presentation, can be used to signing, encoding to other formats |

<a name="GRpcClient.RequestCreateTx"></a>

### GRpcClient.RequestCreateTx : <code>object</code>

Structure of GRpcClient.RequestCreateTx 

```javascript
{
  "itx": {
    "type": "string",
    "value": "ABCD 1234"
  },
  "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "nonce": 5,
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
  "token": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| itx    | [<code>Any</code>](#GRpcClient.Any)               |
| from   | <code>string</code>                               |
| nonce  | <code>number</code>                               |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo) |
| token  | <code>string</code>                               |

<a name="GRpcClient.ResponseCreateTx"></a>

### GRpcClient.ResponseCreateTx : <code>object</code>

Structure of GRpcClient.ResponseCreateTx 

```javascript
{
  "code": 0,
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                |
| ---- | --------------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>                  |
| tx   | [<code>Transaction</code>](#GRpcClient.Transaction) |

<a name="GRpcClient.RequestMultisig"></a>

### GRpcClient.RequestMultisig : <code>object</code>

Structure of GRpcClient.RequestMultisig 

```javascript
{
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
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
  "data": {
    "type": "string",
    "value": "ABCD 1234"
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
  "token": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                |
| ------ | --------------------------------------------------- |
| tx     | [<code>Transaction</code>](#GRpcClient.Transaction) |
| data   | [<code>Any</code>](#GRpcClient.Any)                 |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo)   |
| token  | <code>string</code>                                 |

<a name="GRpcClient.ResponseMultisig"></a>

### GRpcClient.ResponseMultisig : <code>object</code>

Structure of GRpcClient.ResponseMultisig 

```javascript
{
  "code": 0,
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                |
| ---- | --------------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>                  |
| tx   | [<code>Transaction</code>](#GRpcClient.Transaction) |

<a name="GRpcClient.RequestSendTx"></a>

### GRpcClient.RequestSendTx : <code>object</code>

Structure of GRpcClient.RequestSendTx 

```javascript
{
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                |
| ------ | --------------------------------------------------- |
| tx     | [<code>Transaction</code>](#GRpcClient.Transaction) |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo)   |
| token  | <code>string</code>                                 |
| commit | <code>boolean</code>                                |

<a name="GRpcClient.ResponseSendTx"></a>

### GRpcClient.ResponseSendTx : <code>object</code>

Structure of GRpcClient.ResponseSendTx 

```javascript
{
  "code": 0,
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | <code>GRpcClient.StatusCode</code> |
| hash | <code>string</code>                |

<a name="GRpcClient.RequestGetTx"></a>

### GRpcClient.RequestGetTx : <code>object</code>

Structure of GRpcClient.RequestGetTx 

```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| hash | <code>string</code> |

<a name="GRpcClient.ResponseGetTx"></a>

### GRpcClient.ResponseGetTx : <code>object</code>

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
      "signature": {},
      "signatures": [
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
          "data": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
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
    "time": "2019-07-08T09:59:22.219Z"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                        |
| ---- | ----------------------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>                          |
| info | [<code>TransactionInfo</code>](#GRpcClient.TransactionInfo) |

<a name="GRpcClient.RequestGetBlock"></a>

### GRpcClient.RequestGetBlock : <code>object</code>

Structure of GRpcClient.RequestGetBlock 

```javascript
{
  "height": 5
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| height | <code>number</code> |

<a name="GRpcClient.ResponseGetBlock"></a>

### GRpcClient.ResponseGetBlock : <code>object</code>

Structure of GRpcClient.ResponseGetBlock 

```javascript
{
  "code": 0,
  "block": {
    "height": 5,
    "numTxs": 2,
    "time": "2019-07-08T09:59:22.215Z",
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
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
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
        "time": "2019-07-08T09:59:22.215Z"
      },
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
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
        "time": "2019-07-08T09:59:22.215Z"
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
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
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
        "time": "2019-07-08T09:59:22.215Z"
      },
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
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
        "time": "2019-07-08T09:59:22.215Z"
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                            |
| ----- | ----------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>              |
| block | [<code>BlockInfo</code>](#GRpcClient.BlockInfo) |

<a name="GRpcClient.RequestGetBlocks"></a>

### GRpcClient.RequestGetBlocks : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                |
| ------------- | --------------------------------------------------- |
| paging        | [<code>PageInput</code>](#GRpcClient.PageInput)     |
| heightFilter  | [<code>RangeFilter</code>](#GRpcClient.RangeFilter) |
| emptyExcluded | <code>boolean</code>                                |

<a name="GRpcClient.ResponseGetBlocks"></a>

### GRpcClient.ResponseGetBlocks : <code>object</code>

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
      "time": "2019-07-08T09:59:22.216Z",
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
      "time": "2019-07-08T09:59:22.216Z",
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                                     |
| page   | [<code>PageInfo</code>](#GRpcClient.PageInfo)                          |
| blocks | [<code>Array.&lt;BlockInfoSimple></code>](#GRpcClient.BlockInfoSimple) |

<a name="GRpcClient.RequestCreateWallet"></a>

### GRpcClient.RequestCreateWallet : <code>object</code>

Structure of GRpcClient.RequestCreateWallet 

```javascript
{
  "passphrase": "arcblock",
  "type": {
    "pk": 0,
    "hash": 0,
    "address": 0,
    "role": 0
  },
  "moniker": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                              |
| ---------- | ------------------------------------------------- |
| passphrase | <code>string</code>                               |
| type       | [<code>WalletType</code>](#GRpcClient.WalletType) |
| moniker    | <code>string</code>                               |

<a name="GRpcClient.ResponseCreateWallet"></a>

### GRpcClient.ResponseCreateWallet : <code>object</code>

Structure of GRpcClient.ResponseCreateWallet 

```javascript
{
  "code": 0,
  "token": "arcblock",
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
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                |
| token  | <code>string</code>                               |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestLoadWallet"></a>

### GRpcClient.RequestLoadWallet : <code>object</code>

Structure of GRpcClient.RequestLoadWallet 

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "passphrase": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                |
| ---------- | ------------------- |
| address    | <code>string</code> |
| passphrase | <code>string</code> |

<a name="GRpcClient.ResponseLoadWallet"></a>

### GRpcClient.ResponseLoadWallet : <code>object</code>

Structure of GRpcClient.ResponseLoadWallet 

```javascript
{
  "code": 0,
  "token": "arcblock",
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
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                |
| token  | <code>string</code>                               |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestRecoverWallet"></a>

### GRpcClient.RequestRecoverWallet : <code>object</code>

Structure of GRpcClient.RequestRecoverWallet 

```javascript
{
  "data": {},
  "type": {
    "pk": 0,
    "hash": 0,
    "address": 0,
    "role": 0
  },
  "passphrase": "arcblock",
  "moniker": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                              |
| ---------- | ------------------------------------------------- |
| data       | <code>Uint8Array</code>                           |
| type       | [<code>WalletType</code>](#GRpcClient.WalletType) |
| passphrase | <code>string</code>                               |
| moniker    | <code>string</code>                               |

<a name="GRpcClient.ResponseRecoverWallet"></a>

### GRpcClient.ResponseRecoverWallet : <code>object</code>

Structure of GRpcClient.ResponseRecoverWallet 

```javascript
{
  "code": 0,
  "token": "arcblock",
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
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                |
| token  | <code>string</code>                               |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestListWallet"></a>

### GRpcClient.RequestListWallet : <code>object</code>

Structure of GRpcClient.RequestListWallet 

```javascript
{}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.ResponseListWallet"></a>

### GRpcClient.ResponseListWallet : <code>object</code>

Structure of GRpcClient.ResponseListWallet 

```javascript
{
  "code": 0,
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                               |
| ------- | ---------------------------------- |
| code    | <code>GRpcClient.StatusCode</code> |
| address | <code>string</code>                |

<a name="GRpcClient.RequestRemoveWallet"></a>

### GRpcClient.RequestRemoveWallet : <code>object</code>

Structure of GRpcClient.RequestRemoveWallet 

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| address | <code>string</code> |

<a name="GRpcClient.ResponseRemoveWallet"></a>

### GRpcClient.ResponseRemoveWallet : <code>object</code>

Structure of GRpcClient.ResponseRemoveWallet 

```javascript
{
  "code": 0
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | <code>GRpcClient.StatusCode</code> |

<a name="GRpcClient.RequestDeclareNode"></a>

### GRpcClient.RequestDeclareNode : <code>object</code>

Structure of GRpcClient.RequestDeclareNode 

```javascript
{
  "validator": true
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                 |
| --------- | -------------------- |
| validator | <code>boolean</code> |

<a name="GRpcClient.ResponseDeclareNode"></a>

### GRpcClient.ResponseDeclareNode : <code>object</code>

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
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                |
| wallet | [<code>WalletInfo</code>](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestGetAccountState"></a>

### GRpcClient.RequestGetAccountState : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>string</code>            |
| keys    | <code>Array.&lt;string></code> |
| height  | <code>number</code>            |

<a name="GRpcClient.ResponseGetAccountState"></a>

### GRpcClient.ResponseGetAccountState : <code>object</code>

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
      "genesisTime": "2019-07-08T09:59:22.216Z",
      "renaissanceTime": "2019-07-08T09:59:22.216Z"
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
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                                  |
| ----- | ----------------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>                    |
| state | [<code>AccountState</code>](#GRpcClient.AccountState) |

<a name="GRpcClient.RequestGetAssetState"></a>

### GRpcClient.RequestGetAssetState : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>string</code>            |
| keys    | <code>Array.&lt;string></code> |
| height  | <code>number</code>            |

<a name="GRpcClient.ResponseGetAssetState"></a>

### GRpcClient.ResponseGetAssetState : <code>object</code>

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
    "consumedTime": "2019-07-08T09:59:22.216Z",
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
      "genesisTime": "2019-07-08T09:59:22.216Z",
      "renaissanceTime": "2019-07-08T09:59:22.216Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                              |
| ----- | ------------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>                |
| state | [<code>AssetState</code>](#GRpcClient.AssetState) |

<a name="GRpcClient.RequestGetProtocolState"></a>

### GRpcClient.RequestGetProtocolState : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>string</code>            |
| keys    | <code>Array.&lt;string></code> |
| height  | <code>number</code>            |

<a name="GRpcClient.ResponseGetProtocolState"></a>

### GRpcClient.ResponseGetProtocolState : <code>object</code>

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
      "genesisTime": "2019-07-08T09:59:22.217Z",
      "renaissanceTime": "2019-07-08T09:59:22.217Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                                    |
| ----- | ------------------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>                      |
| state | [<code>ProtocolState</code>](#GRpcClient.ProtocolState) |

<a name="GRpcClient.RequestGetStakeState"></a>

### GRpcClient.RequestGetStakeState : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>string</code>            |
| keys    | <code>Array.&lt;string></code> |
| height  | <code>number</code>            |

<a name="GRpcClient.ResponseGetStakeState"></a>

### GRpcClient.ResponseGetStakeState : <code>object</code>

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
      "genesisTime": "2019-07-08T09:59:22.217Z",
      "renaissanceTime": "2019-07-08T09:59:22.217Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                              |
| ----- | ------------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>                |
| state | [<code>StakeState</code>](#GRpcClient.StakeState) |

<a name="GRpcClient.RequestGetForgeState"></a>

### GRpcClient.RequestGetForgeState : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                           |
| ------ | ------------------------------ |
| keys   | <code>Array.&lt;string></code> |
| height | <code>number</code>            |

<a name="GRpcClient.ResponseGetForgeState"></a>

### GRpcClient.ResponseGetForgeState : <code>object</code>

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
          "genesisTime": "2019-07-08T09:59:22.217Z",
          "renaissanceTime": "2019-07-08T09:59:22.217Z"
        }
      }
    },
    "version": "arcblock",
    "forgeAppHash": {},
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
      }
    },
    "stakeConfig": {
      "timeoutGeneral": 2,
      "timeoutStakeForNode": 2
    },
    "pokeConfig": {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "dailyLimit": 5,
      "balance": 5,
      "amount": 5
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
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                              |
| ----- | ------------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>                |
| state | [<code>ForgeState</code>](#GRpcClient.ForgeState) |

<a name="GRpcClient.RequestGetTetherState"></a>

### GRpcClient.RequestGetTetherState : <code>object</code>

Structure of GRpcClient.RequestGetTetherState 

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>string</code>            |
| keys    | <code>Array.&lt;string></code> |
| height  | <code>number</code>            |

<a name="GRpcClient.ResponseGetTetherState"></a>

### GRpcClient.ResponseGetTetherState : <code>object</code>

Structure of GRpcClient.ResponseGetTetherState 

```javascript
{
  "code": 0,
  "state": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "available": true,
    "custodian": "arcblock",
    "depositor": "arcblock",
    "withdrawer": "arcblock",
    "target": "arcblock",
    "locktime": "2019-07-08T09:59:22.217Z",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                                |
| ----- | --------------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>                  |
| state | [<code>TetherState</code>](#GRpcClient.TetherState) |

<a name="GRpcClient.RequestGetSwapState"></a>

### GRpcClient.RequestGetSwapState : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>string</code>            |
| keys    | <code>Array.&lt;string></code> |
| height  | <code>number</code>            |

<a name="GRpcClient.ResponseGetSwapState"></a>

### GRpcClient.ResponseGetSwapState : <code>object</code>

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
      "genesisTime": "2019-07-08T09:59:22.217Z",
      "renaissanceTime": "2019-07-08T09:59:22.217Z"
    }
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                            |
| ----- | ----------------------------------------------- |
| code  | <code>GRpcClient.StatusCode</code>              |
| state | [<code>SwapState</code>](#GRpcClient.SwapState) |

<a name="GRpcClient.RequestStoreFile"></a>

### GRpcClient.RequestStoreFile : <code>object</code>

Structure of GRpcClient.RequestStoreFile 

```javascript
{
  "chunk": {}
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                    |
| ----- | ----------------------- |
| chunk | <code>Uint8Array</code> |

<a name="GRpcClient.ResponseStoreFile"></a>

### GRpcClient.ResponseStoreFile : <code>object</code>

Structure of GRpcClient.ResponseStoreFile 

```javascript
{
  "code": 0,
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | <code>GRpcClient.StatusCode</code> |
| hash | <code>string</code>                |

<a name="GRpcClient.RequestLoadFile"></a>

### GRpcClient.RequestLoadFile : <code>object</code>

Structure of GRpcClient.RequestLoadFile 

```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| hash | <code>string</code> |

<a name="GRpcClient.ResponseLoadFile"></a>

### GRpcClient.ResponseLoadFile : <code>object</code>

Structure of GRpcClient.ResponseLoadFile 

```javascript
{
  "code": 0,
  "chunk": {}
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                               |
| ----- | ---------------------------------- |
| code  | <code>GRpcClient.StatusCode</code> |
| chunk | <code>Uint8Array</code>            |

<a name="GRpcClient.RequestPinFile"></a>

### GRpcClient.RequestPinFile : <code>object</code>

Structure of GRpcClient.RequestPinFile 

```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| hash | <code>string</code> |

<a name="GRpcClient.ResponsePinFile"></a>

### GRpcClient.ResponsePinFile : <code>object</code>

Structure of GRpcClient.ResponsePinFile 

```javascript
{
  "code": 0
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | <code>GRpcClient.StatusCode</code> |

<a name="GRpcClient.RequestGetChainInfo"></a>

### GRpcClient.RequestGetChainInfo : <code>object</code>

Structure of GRpcClient.RequestGetChainInfo 

```javascript
{}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.ResponseGetChainInfo"></a>

### GRpcClient.ResponseGetChainInfo : <code>object</code>

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
    "blockTime": "2019-07-08T09:59:22.216Z",
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                            |
| ---- | ----------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>              |
| info | [<code>ChainInfo</code>](#GRpcClient.ChainInfo) |

<a name="GRpcClient.RequestGetNodeInfo"></a>

### GRpcClient.RequestGetNodeInfo : <code>object</code>

Structure of GRpcClient.RequestGetNodeInfo 

```javascript
{}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.ResponseGetNodeInfo"></a>

### GRpcClient.ResponseGetNodeInfo : <code>object</code>

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
    "blockTime": "2019-07-08T09:59:22.216Z",
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                          |
| ---- | --------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>            |
| info | [<code>NodeInfo</code>](#GRpcClient.NodeInfo) |

<a name="GRpcClient.RequestSearch"></a>

### GRpcClient.RequestSearch : <code>object</code>

Structure of GRpcClient.RequestSearch 

```javascript
{
  "key": "arcblock",
  "value": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |
| value | <code>string</code> |

<a name="GRpcClient.ResponseSearch"></a>

### GRpcClient.ResponseSearch : <code>object</code>

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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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
      "time": "2019-07-08T09:59:22.216Z"
    },
    {
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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
      "time": "2019-07-08T09:59:22.216Z"
    }
  ]
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                                   |
| ---- | ---------------------------------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>                                     |
| txs  | [<code>Array.&lt;TransactionInfo></code>](#GRpcClient.TransactionInfo) |

<a name="GRpcClient.RequestGetUnconfirmedTxs"></a>

### GRpcClient.RequestGetUnconfirmedTxs : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                            |
| ------ | ----------------------------------------------- |
| paging | [<code>PageInput</code>](#GRpcClient.PageInput) |

<a name="GRpcClient.ResponseGetUnconfirmedTxs"></a>

### GRpcClient.ResponseGetUnconfirmedTxs : <code>object</code>

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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name           | Type                                                      |
| -------------- | --------------------------------------------------------- |
| code           | <code>GRpcClient.StatusCode</code>                        |
| page           | [<code>PageInfo</code>](#GRpcClient.PageInfo)             |
| unconfirmedTxs | [<code>UnconfirmedTxs</code>](#GRpcClient.UnconfirmedTxs) |

<a name="GRpcClient.RequestGetNetInfo"></a>

### GRpcClient.RequestGetNetInfo : <code>object</code>

Structure of GRpcClient.RequestGetNetInfo 

```javascript
{}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.ResponseGetNetInfo"></a>

### GRpcClient.ResponseGetNetInfo : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| code    | <code>GRpcClient.StatusCode</code>          |
| netInfo | [<code>NetInfo</code>](#GRpcClient.NetInfo) |

<a name="GRpcClient.RequestGetValidatorsInfo"></a>

### GRpcClient.RequestGetValidatorsInfo : <code>object</code>

Structure of GRpcClient.RequestGetValidatorsInfo 

```javascript
{}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.ResponseGetValidatorsInfo"></a>

### GRpcClient.ResponseGetValidatorsInfo : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name           | Type                                                      |
| -------------- | --------------------------------------------------------- |
| code           | <code>GRpcClient.StatusCode</code>                        |
| validatorsInfo | [<code>ValidatorsInfo</code>](#GRpcClient.ValidatorsInfo) |

<a name="GRpcClient.RequestSubscribe"></a>

### GRpcClient.RequestSubscribe : <code>object</code>

Structure of GRpcClient.RequestSubscribe 

```javascript
{
  "topic": "arcblock",
  "filter": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| topic  | <code>string</code> |
| filter | <code>string</code> |

<a name="GRpcClient.ResponseSubscribe"></a>

### GRpcClient.ResponseSubscribe : <code>object</code>

Structure of GRpcClient.ResponseSubscribe 

```javascript
{
  "topic": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                                            |
| ---------------- | --------------------------------------------------------------- |
| code             | <code>GRpcClient.StatusCode</code>                              |
| topic            | <code>string</code>                                             |
| transfer         | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| accountMigrate   | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| confirm          | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| createAsset      | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| exchange         | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| revoke           | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| beginBlock       | [<code>RequestBeginBlock</code>](#GRpcClient.RequestBeginBlock) |
| endBlock         | [<code>RequestEndBlock</code>](#GRpcClient.RequestEndBlock)     |
| declare          | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| updateAsset      | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| consensusUpgrade | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| declareFile      | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| sysUpgrade       | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| stake            | [<code>Transaction</code>](#GRpcClient.Transaction)             |
| accountState     | [<code>AccountState</code>](#GRpcClient.AccountState)           |
| assetState       | [<code>AssetState</code>](#GRpcClient.AssetState)               |
| forgeState       | [<code>ForgeState</code>](#GRpcClient.ForgeState)               |
| stakeState       | [<code>StakeState</code>](#GRpcClient.StakeState)               |
| protocolState    | [<code>ProtocolState</code>](#GRpcClient.ProtocolState)         |

<a name="GRpcClient.RequestUnsubscribe"></a>

### GRpcClient.RequestUnsubscribe : <code>object</code>

Structure of GRpcClient.RequestUnsubscribe 

```javascript
{
  "topic": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| topic | <code>string</code> |

<a name="GRpcClient.ResponseUnsubscribe"></a>

### GRpcClient.ResponseUnsubscribe : <code>object</code>

Structure of GRpcClient.ResponseUnsubscribe 

```javascript
{
  "code": 0
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | <code>GRpcClient.StatusCode</code> |

<a name="GRpcClient.RequestGetConfig"></a>

### GRpcClient.RequestGetConfig : <code>object</code>

Structure of GRpcClient.RequestGetConfig 

```javascript
{
  "parsed": true
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                 |
| ------ | -------------------- |
| parsed | <code>boolean</code> |

<a name="GRpcClient.ResponseGetConfig"></a>

### GRpcClient.ResponseGetConfig : <code>object</code>

Structure of GRpcClient.ResponseGetConfig 

```javascript
{
  "code": 0,
  "config": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                               |
| ------ | ---------------------------------- |
| code   | <code>GRpcClient.StatusCode</code> |
| config | <code>string</code>                |

<a name="GRpcClient.ByDay"></a>

### GRpcClient.ByDay : <code>object</code>

Structure of GRpcClient.ByDay

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                |
| --------- | ------------------- |
| startDate | <code>string</code> |
| endDate   | <code>string</code> |

<a name="GRpcClient.ByHour"></a>

### GRpcClient.ByHour : <code>object</code>

Structure of GRpcClient.ByHour

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| date | <code>string</code> |

<a name="GRpcClient.RequestGetForgeStats"></a>

### GRpcClient.RequestGetForgeStats : <code>object</code>

Structure of GRpcClient.RequestGetForgeStats 

```javascript
{
  "dayInfo": {
    "startDate": "arcblock",
    "endDate": "arcblock"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                      |
| ------- | ----------------------------------------- |
| dayInfo | [<code>ByDay</code>](#GRpcClient.ByDay)   |
| date    | [<code>ByHour</code>](#GRpcClient.ByHour) |

<a name="GRpcClient.ResponseGetForgeStats"></a>

### GRpcClient.ResponseGetForgeStats : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                              |
| ---------- | ------------------------------------------------- |
| code       | <code>GRpcClient.StatusCode</code>                |
| forgeStats | [<code>ForgeStats</code>](#GRpcClient.ForgeStats) |

<a name="GRpcClient.RequestListTransactions"></a>

### GRpcClient.RequestListTransactions : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name           | Type                                                      |
| -------------- | --------------------------------------------------------- |
| paging         | [<code>PageInput</code>](#GRpcClient.PageInput)           |
| timeFilter     | [<code>TimeFilter</code>](#GRpcClient.TimeFilter)         |
| addressFilter  | [<code>AddressFilter</code>](#GRpcClient.AddressFilter)   |
| typeFilter     | [<code>TypeFilter</code>](#GRpcClient.TypeFilter)         |
| validityFilter | [<code>ValidityFilter</code>](#GRpcClient.ValidityFilter) |

<a name="GRpcClient.ResponseListTransactions"></a>

### GRpcClient.ResponseListTransactions : <code>object</code>

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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| code         | <code>GRpcClient.StatusCode</code>                                           |
| page         | [<code>PageInfo</code>](#GRpcClient.PageInfo)                                |
| transactions | [<code>Array.&lt;IndexedTransaction></code>](#GRpcClient.IndexedTransaction) |

<a name="GRpcClient.RequestListAssets"></a>

### GRpcClient.RequestListAssets : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                            |
| ------------ | ----------------------------------------------- |
| paging       | [<code>PageInput</code>](#GRpcClient.PageInput) |
| ownerAddress | <code>string</code>                             |

<a name="GRpcClient.ResponseListAssets"></a>

### GRpcClient.ResponseListAssets : <code>object</code>

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
      "readonly": true
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "owner": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "readonly": true
    }
  ]
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                                         |
| page   | [<code>PageInfo</code>](#GRpcClient.PageInfo)                              |
| assets | [<code>Array.&lt;IndexedAssetState></code>](#GRpcClient.IndexedAssetState) |

<a name="GRpcClient.RequestListStakes"></a>

### GRpcClient.RequestListStakes : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                    |
| ------------- | ------------------------------------------------------- |
| paging        | [<code>PageInput</code>](#GRpcClient.PageInput)         |
| addressFilter | [<code>AddressFilter</code>](#GRpcClient.AddressFilter) |

<a name="GRpcClient.ResponseListStakes"></a>

### GRpcClient.ResponseListStakes : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                                         |
| page   | [<code>PageInfo</code>](#GRpcClient.PageInfo)                              |
| stakes | [<code>Array.&lt;IndexedStakeState></code>](#GRpcClient.IndexedStakeState) |

<a name="GRpcClient.RequestListAccount"></a>

### GRpcClient.RequestListAccount : <code>object</code>

Structure of GRpcClient.RequestListAccount 

```javascript
{
  "ownerAddress": "arcblock"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                |
| ------------ | ------------------- |
| ownerAddress | <code>string</code> |

<a name="GRpcClient.ResponseListAccount"></a>

### GRpcClient.ResponseListAccount : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                                                |
| ------- | ------------------------------------------------------------------- |
| code    | <code>GRpcClient.StatusCode</code>                                  |
| account | [<code>IndexedAccountState</code>](#GRpcClient.IndexedAccountState) |

<a name="GRpcClient.RequestListTopAccounts"></a>

### GRpcClient.RequestListTopAccounts : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                            |
| ------ | ----------------------------------------------- |
| paging | [<code>PageInput</code>](#GRpcClient.PageInput) |

<a name="GRpcClient.ResponseListTopAccounts"></a>

### GRpcClient.ResponseListTopAccounts : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| code     | <code>GRpcClient.StatusCode</code>                                             |
| page     | [<code>PageInfo</code>](#GRpcClient.PageInfo)                                  |
| accounts | [<code>Array.&lt;IndexedAccountState></code>](#GRpcClient.IndexedAccountState) |

<a name="GRpcClient.RequestListAssetTransactions"></a>

### GRpcClient.RequestListAssetTransactions : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| paging  | [<code>PageInput</code>](#GRpcClient.PageInput) |
| address | <code>string</code>                             |

<a name="GRpcClient.ResponseListAssetTransactions"></a>

### GRpcClient.ResponseListAssetTransactions : <code>object</code>

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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| code         | <code>GRpcClient.StatusCode</code>                                           |
| page         | [<code>PageInfo</code>](#GRpcClient.PageInfo)                                |
| transactions | [<code>Array.&lt;IndexedTransaction></code>](#GRpcClient.IndexedTransaction) |

<a name="GRpcClient.RequestListBlocks"></a>

### GRpcClient.RequestListBlocks : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                | Type                                                |
| ------------------- | --------------------------------------------------- |
| paging              | [<code>PageInput</code>](#GRpcClient.PageInput)     |
| proposer            | <code>string</code>                                 |
| timeFilter          | [<code>TimeFilter</code>](#GRpcClient.TimeFilter)   |
| heightFilter        | [<code>RangeFilter</code>](#GRpcClient.RangeFilter) |
| numTxsFilter        | [<code>RangeFilter</code>](#GRpcClient.RangeFilter) |
| numInvalidTxsFilter | [<code>RangeFilter</code>](#GRpcClient.RangeFilter) |

<a name="GRpcClient.ResponseListBlocks"></a>

### GRpcClient.ResponseListBlocks : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| code   | <code>GRpcClient.StatusCode</code>                               |
| page   | [<code>PageInfo</code>](#GRpcClient.PageInfo)                    |
| blocks | [<code>Array.&lt;IndexedBlock></code>](#GRpcClient.IndexedBlock) |

<a name="GRpcClient.RequestListTethers"></a>

### GRpcClient.RequestListTethers : <code>object</code>

Structure of GRpcClient.RequestListTethers 

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
  "depositor": "arcblock",
  "withdrawer": "arcblock",
  "custodian": "arcblock",
  "available": true
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| paging     | [<code>PageInput</code>](#GRpcClient.PageInput) |
| depositor  | <code>string</code>                             |
| withdrawer | <code>string</code>                             |
| custodian  | <code>string</code>                             |
| available  | <code>boolean</code>                            |

<a name="GRpcClient.ResponseListTethers"></a>

### GRpcClient.ResponseListTethers : <code>object</code>

Structure of GRpcClient.ResponseListTethers 

```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "tethers": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "available": true,
      "custodian": "arcblock",
      "depositor": "arcblock",
      "withdrawer": "arcblock",
      "target": "arcblock",
      "locktime": "2019-07-08T09:59:22.218Z",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "available": true,
      "custodian": "arcblock",
      "depositor": "arcblock",
      "withdrawer": "arcblock",
      "target": "arcblock",
      "locktime": "2019-07-08T09:59:22.218Z",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
    }
  ]
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| code    | <code>GRpcClient.StatusCode</code>                             |
| page    | [<code>PageInfo</code>](#GRpcClient.PageInfo)                  |
| tethers | [<code>Array.&lt;TetherState></code>](#GRpcClient.TetherState) |

<a name="GRpcClient.RequestListSwap"></a>

### GRpcClient.RequestListSwap : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                            |
| --------- | ----------------------------------------------- |
| paging    | [<code>PageInput</code>](#GRpcClient.PageInput) |
| sender    | <code>string</code>                             |
| receiver  | <code>string</code>                             |
| available | <code>boolean</code>                            |

<a name="GRpcClient.ResponseListSwap"></a>

### GRpcClient.ResponseListSwap : <code>object</code>

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
        "genesisTime": "2019-07-08T09:59:22.218Z",
        "renaissanceTime": "2019-07-08T09:59:22.218Z"
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
        "genesisTime": "2019-07-08T09:59:22.218Z",
        "renaissanceTime": "2019-07-08T09:59:22.218Z"
      }
    }
  ]
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                       |
| ---- | ---------------------------------------------------------- |
| code | <code>GRpcClient.StatusCode</code>                         |
| page | [<code>PageInfo</code>](#GRpcClient.PageInfo)              |
| swap | [<code>Array.&lt;SwapState></code>](#GRpcClient.SwapState) |

<a name="GRpcClient.RequestGetHealthStatus"></a>

### GRpcClient.RequestGetHealthStatus : <code>object</code>

Structure of GRpcClient.RequestGetHealthStatus 

```javascript
{}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.ResponseGetHealthStatus"></a>

### GRpcClient.ResponseGetHealthStatus : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                                  |
| ------------ | ----------------------------------------------------- |
| code         | <code>GRpcClient.StatusCode</code>                    |
| healthStatus | [<code>HealthStatus</code>](#GRpcClient.HealthStatus) |

<a name="GRpcClient.BigUint"></a>

### GRpcClient.BigUint : <code>object</code>

Structure of GRpcClient.BigUint

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                    |
| ----- | ----------------------- |
| value | <code>Uint8Array</code> |

<a name="GRpcClient.BigSint"></a>

### GRpcClient.BigSint : <code>object</code>

Structure of GRpcClient.BigSint

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                    |
| ----- | ----------------------- |
| value | <code>Uint8Array</code> |
| minus | <code>boolean</code>    |

<a name="GRpcClient.WalletType"></a>

### GRpcClient.WalletType : <code>object</code>

Structure of GRpcClient.WalletType

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                 |
| ------- | ------------------------------------ |
| pk      | <code>GRpcClient.KeyType</code>      |
| hash    | <code>GRpcClient.HashType</code>     |
| address | <code>GRpcClient.EncodingType</code> |
| role    | <code>GRpcClient.RoleType</code>     |

<a name="GRpcClient.WalletInfo"></a>

### GRpcClient.WalletInfo : <code>object</code>

Structure of GRpcClient.WalletInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                              |
| ------- | ------------------------------------------------- |
| type    | [<code>WalletType</code>](#GRpcClient.WalletType) |
| sk      | <code>Uint8Array</code>                           |
| pk      | <code>Uint8Array</code>                           |
| address | <code>string</code>                               |

<a name="GRpcClient.ChainInfo"></a>

### GRpcClient.ChainInfo : <code>object</code>

Structure of GRpcClient.ChainInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                            |
| ---------------- | ----------------------------------------------- |
| id               | <code>string</code>                             |
| network          | <code>string</code>                             |
| moniker          | <code>string</code>                             |
| consensusVersion | <code>string</code>                             |
| synced           | <code>boolean</code>                            |
| appHash          | <code>Uint8Array</code>                         |
| blockHash        | <code>Uint8Array</code>                         |
| blockHeight      | <code>number</code>                             |
| blockTime        | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| address          | <code>string</code>                             |
| votingPower      | <code>number</code>                             |
| totalTxs         | <code>number</code>                             |
| version          | <code>string</code>                             |
| forgeAppsVersion | <code>string</code>                             |
| supportedTxs     | <code>Array.&lt;string></code>                  |

<a name="GRpcClient.NodeInfo"></a>

### GRpcClient.NodeInfo : <code>object</code>

Structure of GRpcClient.NodeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                            |
| ---------------- | ----------------------------------------------- |
| id               | <code>string</code>                             |
| network          | <code>string</code>                             |
| moniker          | <code>string</code>                             |
| consensusVersion | <code>string</code>                             |
| synced           | <code>boolean</code>                            |
| appHash          | <code>Uint8Array</code>                         |
| blockHash        | <code>Uint8Array</code>                         |
| blockHeight      | <code>number</code>                             |
| blockTime        | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| address          | <code>string</code>                             |
| votingPower      | <code>number</code>                             |
| totalTxs         | <code>number</code>                             |
| version          | <code>string</code>                             |
| forgeAppsVersion | <code>string</code>                             |
| supportedTxs     | <code>Array.&lt;string></code>                  |
| ip               | <code>string</code>                             |
| geoInfo          | [<code>GeoInfo</code>](#GRpcClient.GeoInfo)     |
| p2pAddress       | <code>string</code>                             |

<a name="GRpcClient.Validator"></a>

### GRpcClient.Validator : <code>object</code>

Structure of GRpcClient.Validator

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| address | <code>string</code> |
| power   | <code>number</code> |

<a name="GRpcClient.ConsensusParams"></a>

### GRpcClient.ConsensusParams : <code>object</code>

Structure of GRpcClient.ConsensusParams

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                                       |
| ---------------- | ---------------------------------------------------------- |
| maxBytes         | <code>number</code>                                        |
| maxGas           | <code>number</code>                                        |
| maxValidators    | <code>number</code>                                        |
| maxCandidates    | <code>number</code>                                        |
| pubKeyTypes      | <code>Array.&lt;string></code>                             |
| validators       | [<code>Array.&lt;Validator></code>](#GRpcClient.Validator) |
| validatorChanged | <code>boolean</code>                                       |
| paramChanged     | <code>boolean</code>                                       |

<a name="GRpcClient.UpgradeTask"></a>

### GRpcClient.UpgradeTask : <code>object</code>

Structure of GRpcClient.UpgradeTask

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                                             |
| -------- | ------------------------------------------------ |
| type     | <code>GRpcClient.UpgradeType</code>              |
| dataHash | <code>string</code>                              |
| actions  | <code>Array.&lt;GRpcClient.UpgradeAction></code> |

<a name="GRpcClient.UpgradeTasks"></a>

### GRpcClient.UpgradeTasks : <code>object</code>

Structure of GRpcClient.UpgradeTasks

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| item | [<code>Array.&lt;UpgradeTask></code>](#GRpcClient.UpgradeTask) |

<a name="GRpcClient.AbciContext"></a>

### GRpcClient.AbciContext : <code>object</code>

Structure of GRpcClient.AbciContext

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                  |
| ------------- | ----------------------------------------------------- |
| txHash        | <code>string</code>                                   |
| blockHeight   | <code>number</code>                                   |
| blockTime     | [<code>Timestamp</code>](#GRpcClient.Timestamp)       |
| totalTxs      | <code>number</code>                                   |
| txStatistics  | [<code>TxStatistics</code>](#GRpcClient.TxStatistics) |
| txIndex       | <code>number</code>                                   |
| lastBlockTime | [<code>Timestamp</code>](#GRpcClient.Timestamp)       |

<a name="GRpcClient.Multisig"></a>

### GRpcClient.Multisig : <code>object</code>

Structure of GRpcClient.Multisig

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                |
| --------- | ----------------------------------- |
| signer    | <code>string</code>                 |
| pk        | <code>Uint8Array</code>             |
| signature | <code>Uint8Array</code>             |
| data      | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.Transaction"></a>

### GRpcClient.Transaction : <code>object</code>

Structure of GRpcClient.Transaction

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                                     |
| ---------- | -------------------------------------------------------- |
| from       | <code>string</code>                                      |
| nonce      | <code>number</code>                                      |
| chainId    | <code>string</code>                                      |
| pk         | <code>Uint8Array</code>                                  |
| gas        | <code>number</code>                                      |
| signature  | <code>Uint8Array</code>                                  |
| signatures | [<code>Array.&lt;Multisig></code>](#GRpcClient.Multisig) |
| itx        | [<code>Any</code>](#GRpcClient.Any)                      |

<a name="GRpcClient.TransactionInfo"></a>

### GRpcClient.TransactionInfo : <code>object</code>

Structure of GRpcClient.TransactionInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                 |
| ------ | ---------------------------------------------------- |
| tx     | [<code>Transaction</code>](#GRpcClient.Transaction)  |
| height | <code>number</code>                                  |
| index  | <code>number</code>                                  |
| hash   | <code>string</code>                                  |
| tags   | [<code>Array.&lt;KVPair></code>](#GRpcClient.KVPair) |
| code   | <code>GRpcClient.StatusCode</code>                   |
| time   | [<code>Timestamp</code>](#GRpcClient.Timestamp)      |

<a name="GRpcClient.DeclareConfig"></a>

### GRpcClient.DeclareConfig : <code>object</code>

Structure of GRpcClient.DeclareConfig

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                 |
| ---------- | -------------------- |
| restricted | <code>boolean</code> |
| hierarchy  | <code>number</code>  |

<a name="GRpcClient.TransactionConfig"></a>

### GRpcClient.TransactionConfig : <code>object</code>

Structure of GRpcClient.TransactionConfig

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                                    |
| ------------ | ------------------------------------------------------- |
| maxAssetSize | <code>number</code>                                     |
| maxListSize  | <code>number</code>                                     |
| maxMultisig  | <code>number</code>                                     |
| minimumStake | <code>number</code>                                     |
| declare      | [<code>DeclareConfig</code>](#GRpcClient.DeclareConfig) |

<a name="GRpcClient.BlockInfo"></a>

### GRpcClient.BlockInfo : <code>object</code>

Structure of GRpcClient.BlockInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name               | Type                                                                   |
| ------------------ | ---------------------------------------------------------------------- |
| height             | <code>number</code>                                                    |
| numTxs             | <code>number</code>                                                    |
| time               | [<code>Timestamp</code>](#GRpcClient.Timestamp)                        |
| appHash            | <code>Uint8Array</code>                                                |
| proposer           | <code>Uint8Array</code>                                                |
| txs                | [<code>Array.&lt;TransactionInfo></code>](#GRpcClient.TransactionInfo) |
| totalTxs           | <code>number</code>                                                    |
| invalidTxs         | [<code>Array.&lt;TransactionInfo></code>](#GRpcClient.TransactionInfo) |
| txsHashes          | <code>Array.&lt;string></code>                                         |
| invalidTxsHashes   | <code>Array.&lt;string></code>                                         |
| consensusHash      | <code>Uint8Array</code>                                                |
| dataHash           | <code>Uint8Array</code>                                                |
| evidenceHash       | <code>Uint8Array</code>                                                |
| lastCommitHash     | <code>Uint8Array</code>                                                |
| lastResultsHash    | <code>Uint8Array</code>                                                |
| nextValidatorsHash | <code>Uint8Array</code>                                                |
| validatorsHash     | <code>Uint8Array</code>                                                |
| version            | [<code>Version</code>](#GRpcClient.Version)                            |
| lastBlockId        | [<code>BlockID</code>](#GRpcClient.BlockID)                            |

<a name="GRpcClient.BlockInfoSimple"></a>

### GRpcClient.BlockInfoSimple : <code>object</code>

Structure of GRpcClient.BlockInfoSimple

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name               | Type                                            |
| ------------------ | ----------------------------------------------- |
| height             | <code>number</code>                             |
| numTxs             | <code>number</code>                             |
| time               | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| appHash            | <code>Uint8Array</code>                         |
| proposer           | <code>Uint8Array</code>                         |
| totalTxs           | <code>number</code>                             |
| txsHashes          | <code>Array.&lt;string></code>                  |
| invalidTxsHashes   | <code>Array.&lt;string></code>                  |
| consensusHash      | <code>Uint8Array</code>                         |
| dataHash           | <code>Uint8Array</code>                         |
| evidenceHash       | <code>Uint8Array</code>                         |
| lastCommitHash     | <code>Uint8Array</code>                         |
| lastResultsHash    | <code>Uint8Array</code>                         |
| nextValidatorsHash | <code>Uint8Array</code>                         |
| validatorsHash     | <code>Uint8Array</code>                         |
| version            | [<code>Version</code>](#GRpcClient.Version)     |
| lastBlockId        | [<code>BlockID</code>](#GRpcClient.BlockID)     |

<a name="GRpcClient.TxStatus"></a>

### GRpcClient.TxStatus : <code>object</code>

Structure of GRpcClient.TxStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                               |
| ---- | ---------------------------------- |
| code | <code>GRpcClient.StatusCode</code> |
| hash | <code>string</code>                |

<a name="GRpcClient.CircularQueue"></a>

### GRpcClient.CircularQueue : <code>object</code>

Structure of GRpcClient.CircularQueue

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                               |
| -------- | ---------------------------------- |
| items    | <code>Array.&lt;Uint8Array></code> |
| typeUrl  | <code>string</code>                |
| maxItems | <code>number</code>                |
| circular | <code>boolean</code>               |
| fifo     | <code>boolean</code>               |

<a name="GRpcClient.StateContext"></a>

### GRpcClient.StateContext : <code>object</code>

Structure of GRpcClient.StateContext

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                            |
| --------------- | ----------------------------------------------- |
| genesisTx       | <code>string</code>                             |
| renaissanceTx   | <code>string</code>                             |
| genesisTime     | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| renaissanceTime | [<code>Timestamp</code>](#GRpcClient.Timestamp) |

<a name="GRpcClient.StakeContext"></a>

### GRpcClient.StakeContext : <code>object</code>

Structure of GRpcClient.StakeContext

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                 | Type                                                    |
| -------------------- | ------------------------------------------------------- |
| totalStakes          | [<code>BigUint</code>](#GRpcClient.BigUint)             |
| totalUnstakes        | [<code>BigUint</code>](#GRpcClient.BigUint)             |
| totalReceivedStakes  | [<code>BigUint</code>](#GRpcClient.BigUint)             |
| recentStakes         | [<code>CircularQueue</code>](#GRpcClient.CircularQueue) |
| recentReceivedStakes | [<code>CircularQueue</code>](#GRpcClient.CircularQueue) |

<a name="GRpcClient.StakeSummary"></a>

### GRpcClient.StakeSummary : <code>object</code>

Structure of GRpcClient.StakeSummary

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                  |
| ------------- | ----------------------------------------------------- |
| totalStakes   | [<code>BigUint</code>](#GRpcClient.BigUint)           |
| totalUnstakes | [<code>BigUint</code>](#GRpcClient.BigUint)           |
| context       | [<code>StateContext</code>](#GRpcClient.StateContext) |

<a name="GRpcClient.StakeConfig"></a>

### GRpcClient.StakeConfig : <code>object</code>

Structure of GRpcClient.StakeConfig

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                | Type                |
| ------------------- | ------------------- |
| timeoutGeneral      | <code>number</code> |
| timeoutStakeForNode | <code>number</code> |

<a name="GRpcClient.UnconfirmedTxs"></a>

### GRpcClient.UnconfirmedTxs : <code>object</code>

Structure of GRpcClient.UnconfirmedTxs

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| nTxs | <code>number</code>                                            |
| txs  | [<code>Array.&lt;Transaction></code>](#GRpcClient.Transaction) |

<a name="GRpcClient.NetInfo"></a>

### GRpcClient.NetInfo : <code>object</code>

Structure of GRpcClient.NetInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                     |
| --------- | -------------------------------------------------------- |
| listening | <code>boolean</code>                                     |
| listeners | <code>Array.&lt;string></code>                           |
| nPeers    | <code>number</code>                                      |
| peers     | [<code>Array.&lt;PeerInfo></code>](#GRpcClient.PeerInfo) |

<a name="GRpcClient.GeoInfo"></a>

### GRpcClient.GeoInfo : <code>object</code>

Structure of GRpcClient.GeoInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                |
| --------- | ------------------- |
| city      | <code>string</code> |
| country   | <code>string</code> |
| latitude  | <code>number</code> |
| longitude | <code>number</code> |

<a name="GRpcClient.PeerInfo"></a>

### GRpcClient.PeerInfo : <code>object</code>

Structure of GRpcClient.PeerInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                        |
| ---------------- | ------------------------------------------- |
| id               | <code>string</code>                         |
| network          | <code>string</code>                         |
| consensusVersion | <code>string</code>                         |
| moniker          | <code>string</code>                         |
| ip               | <code>string</code>                         |
| geoInfo          | [<code>GeoInfo</code>](#GRpcClient.GeoInfo) |

<a name="GRpcClient.ValidatorsInfo"></a>

### GRpcClient.ValidatorsInfo : <code>object</code>

Structure of GRpcClient.ValidatorsInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name        | Type                                                               |
| ----------- | ------------------------------------------------------------------ |
| blockHeight | <code>number</code>                                                |
| validators  | [<code>Array.&lt;ValidatorInfo></code>](#GRpcClient.ValidatorInfo) |

<a name="GRpcClient.ValidatorInfo"></a>

### GRpcClient.ValidatorInfo : <code>object</code>

Structure of GRpcClient.ValidatorInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                        |
| ---------------- | ------------------------------------------- |
| address          | <code>string</code>                         |
| pubKey           | [<code>PubKey</code>](#GRpcClient.PubKey)   |
| votingPower      | <code>number</code>                         |
| proposerPriority | <code>string</code>                         |
| name             | <code>string</code>                         |
| geoInfo          | [<code>GeoInfo</code>](#GRpcClient.GeoInfo) |

<a name="GRpcClient.GenesisInfo"></a>

### GRpcClient.GenesisInfo : <code>object</code>

Structure of GRpcClient.GenesisInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                                               |
| --------------- | ------------------------------------------------------------------ |
| genesisTime     | <code>string</code>                                                |
| chainId         | <code>string</code>                                                |
| consensusParams | [<code>ConsensusParams</code>](#GRpcClient.ConsensusParams)        |
| validators      | [<code>Array.&lt;ValidatorInfo></code>](#GRpcClient.ValidatorInfo) |
| appHash         | <code>string</code>                                                |

<a name="GRpcClient.ForgeStats"></a>

### GRpcClient.ForgeStats : <code>object</code>

Structure of GRpcClient.ForgeStats

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                   | Type                                                   |
| ---------------------- | ------------------------------------------------------ |
| numBlocks              | <code>Array.&lt;number></code>                         |
| numTxs                 | <code>Array.&lt;number></code>                         |
| numStakes              | [<code>Array.&lt;BigUint></code>](#GRpcClient.BigUint) |
| numValidators          | <code>Array.&lt;number></code>                         |
| numAccountMigrateTxs   | <code>Array.&lt;number></code>                         |
| numCreateAssetTxs      | <code>Array.&lt;number></code>                         |
| numConsensusUpgradeTxs | <code>Array.&lt;number></code>                         |
| numDeclareTxs          | <code>Array.&lt;number></code>                         |
| numDeclareFileTxs      | <code>Array.&lt;number></code>                         |
| numExchangeTxs         | <code>Array.&lt;number></code>                         |
| numStakeTxs            | <code>Array.&lt;number></code>                         |
| numSysUpgradeTxs       | <code>Array.&lt;number></code>                         |
| numTransferTxs         | <code>Array.&lt;number></code>                         |
| numUpdateAssetTxs      | <code>Array.&lt;number></code>                         |
| numConsumeAssetTxs     | <code>Array.&lt;number></code>                         |
| numPokeTxs             | <code>Array.&lt;number></code>                         |
| tps                    | <code>Array.&lt;number></code>                         |
| maxTps                 | <code>number</code>                                    |
| avgTps                 | <code>number</code>                                    |
| avgBlockTime           | <code>number</code>                                    |

<a name="GRpcClient.TxStatistics"></a>

### GRpcClient.TxStatistics : <code>object</code>

Structure of GRpcClient.TxStatistics

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                   | Type                |
| ---------------------- | ------------------- |
| numAccountMigrateTxs   | <code>number</code> |
| numCreateAssetTxs      | <code>number</code> |
| numConsensusUpgradeTxs | <code>number</code> |
| numDeclareTxs          | <code>number</code> |
| numDeclareFileTxs      | <code>number</code> |
| numExchangeTxs         | <code>number</code> |
| numStakeTxs            | <code>number</code> |
| numSysUpgradeTxs       | <code>number</code> |
| numTransferTxs         | <code>number</code> |
| numUpdateAssetTxs      | <code>number</code> |
| numConsumeAssetTxs     | <code>number</code> |
| numPokeTxs             | <code>number</code> |

<a name="GRpcClient.ForgeToken"></a>

### GRpcClient.ForgeToken : <code>object</code>

Structure of GRpcClient.ForgeToken

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                    |
| ------------- | ----------------------- |
| name          | <code>string</code>     |
| symbol        | <code>string</code>     |
| unit          | <code>string</code>     |
| description   | <code>string</code>     |
| icon          | <code>Uint8Array</code> |
| decimal       | <code>number</code>     |
| initialSupply | <code>number</code>     |
| totalSupply   | <code>number</code>     |
| inflationRate | <code>number</code>     |

<a name="GRpcClient.PokeInfo"></a>

### GRpcClient.PokeInfo : <code>object</code>

Structure of GRpcClient.PokeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                        |
| ---------- | ------------------------------------------- |
| dailyLimit | [<code>BigUint</code>](#GRpcClient.BigUint) |
| leftover   | [<code>BigUint</code>](#GRpcClient.BigUint) |
| amount     | [<code>BigUint</code>](#GRpcClient.BigUint) |

<a name="GRpcClient.PokeConfig"></a>

### GRpcClient.PokeConfig : <code>object</code>

Structure of GRpcClient.PokeConfig

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                |
| ---------- | ------------------- |
| address    | <code>string</code> |
| dailyLimit | <code>number</code> |
| balance    | <code>number</code> |
| amount     | <code>number</code> |

<a name="GRpcClient.UpgradeInfo"></a>

### GRpcClient.UpgradeInfo : <code>object</code>

Structure of GRpcClient.UpgradeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| height  | <code>number</code> |
| version | <code>string</code> |

<a name="GRpcClient.AccountState"></a>

### GRpcClient.AccountState : <code>object</code>

Structure of GRpcClient.AccountState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                                    |
| --------------- | ------------------------------------------------------- |
| balance         | [<code>BigUint</code>](#GRpcClient.BigUint)             |
| nonce           | <code>number</code>                                     |
| numTxs          | <code>number</code>                                     |
| address         | <code>string</code>                                     |
| pk              | <code>Uint8Array</code>                                 |
| type            | [<code>WalletType</code>](#GRpcClient.WalletType)       |
| moniker         | <code>string</code>                                     |
| context         | [<code>StateContext</code>](#GRpcClient.StateContext)   |
| issuer          | <code>string</code>                                     |
| gasBalance      | [<code>BigUint</code>](#GRpcClient.BigUint)             |
| migratedTo      | <code>Array.&lt;string></code>                          |
| migratedFrom    | <code>Array.&lt;string></code>                          |
| numAssets       | <code>number</code>                                     |
| stake           | [<code>StakeContext</code>](#GRpcClient.StakeContext)   |
| pinnedFiles     | [<code>CircularQueue</code>](#GRpcClient.CircularQueue) |
| poke            | [<code>PokeInfo</code>](#GRpcClient.PokeInfo)           |
| depositReceived | [<code>BigUint</code>](#GRpcClient.BigUint)             |
| data            | [<code>Any</code>](#GRpcClient.Any)                     |

<a name="GRpcClient.AssetState"></a>

### GRpcClient.AssetState : <code>object</code>

Structure of GRpcClient.AssetState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                  |
| ------------- | ----------------------------------------------------- |
| address       | <code>string</code>                                   |
| owner         | <code>string</code>                                   |
| moniker       | <code>string</code>                                   |
| readonly      | <code>boolean</code>                                  |
| transferrable | <code>boolean</code>                                  |
| ttl           | <code>number</code>                                   |
| consumedTime  | [<code>Timestamp</code>](#GRpcClient.Timestamp)       |
| issuer        | <code>string</code>                                   |
| parent        | <code>string</code>                                   |
| stake         | [<code>StakeContext</code>](#GRpcClient.StakeContext) |
| context       | [<code>StateContext</code>](#GRpcClient.StateContext) |
| data          | [<code>Any</code>](#GRpcClient.Any)                   |

<a name="GRpcClient.CoreProtocol"></a>

### GRpcClient.CoreProtocol : <code>object</code>

Structure of GRpcClient.CoreProtocol

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| name    | <code>string</code> |
| address | <code>string</code> |

<a name="GRpcClient.ForgeState"></a>

### GRpcClient.ForgeState : <code>object</code>

Structure of GRpcClient.ForgeState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                                             |
| ------------ | ---------------------------------------------------------------- |
| address      | <code>string</code>                                              |
| consensus    | [<code>ConsensusParams</code>](#GRpcClient.ConsensusParams)      |
| tasks        | [<code>UpgradeTasks</code>](#GRpcClient.UpgradeTasks)            |
| stakeSummary | [<code>StakeSummary</code>](#GRpcClient.StakeSummary)            |
| version      | <code>string</code>                                              |
| forgeAppHash | <code>Uint8Array</code>                                          |
| token        | [<code>ForgeToken</code>](#GRpcClient.ForgeToken)                |
| txConfig     | [<code>TransactionConfig</code>](#GRpcClient.TransactionConfig)  |
| stakeConfig  | [<code>StakeConfig</code>](#GRpcClient.StakeConfig)              |
| pokeConfig   | [<code>PokeConfig</code>](#GRpcClient.PokeConfig)                |
| protocols    | [<code>Array.&lt;CoreProtocol></code>](#GRpcClient.CoreProtocol) |
| gas          | <code>number</code>                                              |
| upgradeInfo  | [<code>UpgradeInfo</code>](#GRpcClient.UpgradeInfo)              |
| data         | [<code>Any</code>](#GRpcClient.Any)                              |

<a name="GRpcClient.RootState"></a>

### GRpcClient.RootState : <code>object</code>

Structure of GRpcClient.RootState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                    |
| ---------- | ----------------------- |
| address    | <code>string</code>     |
| account    | <code>Uint8Array</code> |
| asset      | <code>Uint8Array</code> |
| receipt    | <code>Uint8Array</code> |
| protocol   | <code>Uint8Array</code> |
| governance | <code>Uint8Array</code> |
| custom     | <code>Uint8Array</code> |

<a name="GRpcClient.StakeState"></a>

### GRpcClient.StakeState : <code>object</code>

Structure of GRpcClient.StakeState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                                  |
| ------- | ----------------------------------------------------- |
| address | <code>string</code>                                   |
| from    | <code>string</code>                                   |
| to      | <code>string</code>                                   |
| balance | [<code>BigUint</code>](#GRpcClient.BigUint)           |
| message | <code>string</code>                                   |
| context | [<code>StateContext</code>](#GRpcClient.StateContext) |
| data    | [<code>Any</code>](#GRpcClient.Any)                   |

<a name="GRpcClient.StatisticsState"></a>

### GRpcClient.StatisticsState : <code>object</code>

Structure of GRpcClient.StatisticsState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                  |
| ------------- | ----------------------------------------------------- |
| address       | <code>string</code>                                   |
| numBlocks     | <code>number</code>                                   |
| numTxs        | <code>number</code>                                   |
| numStakes     | [<code>BigUint</code>](#GRpcClient.BigUint)           |
| numValidators | <code>number</code>                                   |
| txStatistics  | [<code>TxStatistics</code>](#GRpcClient.TxStatistics) |

<a name="GRpcClient.BlacklistState"></a>

### GRpcClient.BlacklistState : <code>object</code>

Structure of GRpcClient.BlacklistState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                           |
| ------- | ------------------------------ |
| address | <code>Array.&lt;string></code> |

<a name="GRpcClient.ProtocolState"></a>

### GRpcClient.ProtocolState : <code>object</code>

Structure of GRpcClient.ProtocolState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name         | Type                                                          |
| ------------ | ------------------------------------------------------------- |
| address      | <code>string</code>                                           |
| itx          | [<code>DeployProtocolTx</code>](#GRpcClient.DeployProtocolTx) |
| rootHash     | <code>Uint8Array</code>                                       |
| status       | <code>GRpcClient.ProtocolStatus</code>                        |
| migratedTo   | <code>Array.&lt;string></code>                                |
| migratedFrom | <code>Array.&lt;string></code>                                |
| context      | [<code>StateContext</code>](#GRpcClient.StateContext)         |
| data         | [<code>Any</code>](#GRpcClient.Any)                           |

<a name="GRpcClient.TetherState"></a>

### GRpcClient.TetherState : <code>object</code>

Structure of GRpcClient.TetherState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| hash       | <code>string</code>                             |
| available  | <code>boolean</code>                            |
| custodian  | <code>string</code>                             |
| depositor  | <code>string</code>                             |
| withdrawer | <code>string</code>                             |
| value      | [<code>BigUint</code>](#GRpcClient.BigUint)     |
| commission | [<code>BigUint</code>](#GRpcClient.BigUint)     |
| charge     | [<code>BigUint</code>](#GRpcClient.BigUint)     |
| target     | <code>string</code>                             |
| locktime   | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| address    | <code>string</code>                             |

<a name="GRpcClient.TetherInfo"></a>

### GRpcClient.TetherInfo : <code>object</code>

Structure of GRpcClient.TetherInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                 |
| --------- | -------------------- |
| available | <code>boolean</code> |
| hash      | <code>string</code>  |

<a name="GRpcClient.SwapState"></a>

### GRpcClient.SwapState : <code>object</code>

Structure of GRpcClient.SwapState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                                                  |
| -------- | ----------------------------------------------------- |
| hash     | <code>string</code>                                   |
| address  | <code>string</code>                                   |
| hashkey  | <code>Uint8Array</code>                               |
| sender   | <code>string</code>                                   |
| receiver | <code>string</code>                                   |
| value    | [<code>BigUint</code>](#GRpcClient.BigUint)           |
| assets   | <code>Array.&lt;string></code>                        |
| locktime | <code>number</code>                                   |
| hashlock | <code>Uint8Array</code>                               |
| context  | [<code>StateContext</code>](#GRpcClient.StateContext) |

<a name="GRpcClient.CodeInfo"></a>

### GRpcClient.CodeInfo : <code>object</code>

Structure of GRpcClient.CodeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                    |
| -------- | ----------------------- |
| checksum | <code>Uint8Array</code> |
| binary   | <code>Uint8Array</code> |

<a name="GRpcClient.TypeUrls"></a>

### GRpcClient.TypeUrls : <code>object</code>

Structure of GRpcClient.TypeUrls

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| url    | <code>string</code> |
| module | <code>string</code> |

<a name="GRpcClient.DeployProtocolTx"></a>

### GRpcClient.DeployProtocolTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name        | Type                                                     |
| ----------- | -------------------------------------------------------- |
| address     | <code>string</code>                                      |
| name        | <code>string</code>                                      |
| version     | <code>number</code>                                      |
| namespace   | <code>string</code>                                      |
| description | <code>string</code>                                      |
| typeUrls    | [<code>Array.&lt;TypeUrls></code>](#GRpcClient.TypeUrls) |
| proto       | <code>string</code>                                      |
| pipeline    | <code>string</code>                                      |
| sources     | <code>Array.&lt;string></code>                           |
| code        | [<code>Array.&lt;CodeInfo></code>](#GRpcClient.CodeInfo) |
| tags        | <code>Array.&lt;string></code>                           |
| data        | [<code>Any</code>](#GRpcClient.Any)                      |

<a name="GRpcClient.ConsensusUpgradeTx"></a>

### GRpcClient.ConsensusUpgradeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| validators    | [<code>Array.&lt;Validator></code>](#GRpcClient.Validator) |
| maxBytes      | <code>number</code>                                        |
| maxGas        | <code>number</code>                                        |
| maxValidators | <code>number</code>                                        |
| maxCandidates | <code>number</code>                                        |
| data          | [<code>Any</code>](#GRpcClient.Any)                        |

<a name="GRpcClient.SysUpgradeTx"></a>

### GRpcClient.SysUpgradeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name        | Type                                                |
| ----------- | --------------------------------------------------- |
| task        | [<code>UpgradeTask</code>](#GRpcClient.UpgradeTask) |
| gracePeriod | <code>number</code>                                 |
| data        | [<code>Any</code>](#GRpcClient.Any)                 |

<a name="GRpcClient.PageOrder"></a>

### GRpcClient.PageOrder : <code>object</code>

Structure of GRpcClient.PageOrder

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| field | <code>string</code> |
| type  | <code>string</code> |

<a name="GRpcClient.PageInput"></a>

### GRpcClient.PageInput : <code>object</code>

Structure of GRpcClient.PageInput

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                                       |
| ------ | ---------------------------------------------------------- |
| cursor | <code>string</code>                                        |
| size   | <code>number</code>                                        |
| order  | [<code>Array.&lt;PageOrder></code>](#GRpcClient.PageOrder) |

<a name="GRpcClient.TypeFilter"></a>

### GRpcClient.TypeFilter : <code>object</code>

Structure of GRpcClient.TypeFilter

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                           |
| ----- | ------------------------------ |
| types | <code>Array.&lt;string></code> |

<a name="GRpcClient.TimeFilter"></a>

### GRpcClient.TimeFilter : <code>object</code>

Structure of GRpcClient.TimeFilter

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| startDateTime | <code>string</code> |
| endDateTime   | <code>string</code> |

<a name="GRpcClient.AddressFilter"></a>

### GRpcClient.AddressFilter : <code>object</code>

Structure of GRpcClient.AddressFilter

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                              |
| --------- | --------------------------------- |
| sender    | <code>string</code>               |
| receiver  | <code>string</code>               |
| direction | <code>GRpcClient.Direction</code> |

<a name="GRpcClient.PageInfo"></a>

### GRpcClient.PageInfo : <code>object</code>

Structure of GRpcClient.PageInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                 |
| ------ | -------------------- |
| cursor | <code>string</code>  |
| next   | <code>boolean</code> |
| total  | <code>number</code>  |

<a name="GRpcClient.IndexedTransaction"></a>

### GRpcClient.IndexedTransaction : <code>object</code>

Structure of GRpcClient.IndexedTransaction

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                                                |
| -------- | --------------------------------------------------- |
| hash     | <code>string</code>                                 |
| sender   | <code>string</code>                                 |
| receiver | <code>string</code>                                 |
| time     | <code>string</code>                                 |
| type     | <code>string</code>                                 |
| tx       | [<code>Transaction</code>](#GRpcClient.Transaction) |
| valid    | <code>boolean</code>                                |
| code     | <code>GRpcClient.StatusCode</code>                  |

<a name="GRpcClient.IndexedAccountState"></a>

### GRpcClient.IndexedAccountState : <code>object</code>

Structure of GRpcClient.IndexedAccountState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                | Type                                        |
| ------------------- | ------------------------------------------- |
| address             | <code>string</code>                         |
| balance             | [<code>BigUint</code>](#GRpcClient.BigUint) |
| numAssets           | <code>number</code>                         |
| numTxs              | <code>number</code>                         |
| nonce               | <code>number</code>                         |
| genesisTime         | <code>string</code>                         |
| renaissanceTime     | <code>string</code>                         |
| moniker             | <code>string</code>                         |
| migratedFrom        | <code>string</code>                         |
| migratedTo          | <code>string</code>                         |
| totalReceivedStakes | [<code>BigUint</code>](#GRpcClient.BigUint) |
| totalStakes         | [<code>BigUint</code>](#GRpcClient.BigUint) |
| totalUnstakes       | [<code>BigUint</code>](#GRpcClient.BigUint) |
| recentNumTxs        | <code>Array.&lt;number></code>              |

<a name="GRpcClient.IndexedAssetState"></a>

### GRpcClient.IndexedAssetState : <code>object</code>

Structure of GRpcClient.IndexedAssetState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                 |
| --------------- | -------------------- |
| address         | <code>string</code>  |
| owner           | <code>string</code>  |
| genesisTime     | <code>string</code>  |
| renaissanceTime | <code>string</code>  |
| moniker         | <code>string</code>  |
| readonly        | <code>boolean</code> |

<a name="GRpcClient.IndexedStakeState"></a>

### GRpcClient.IndexedStakeState : <code>object</code>

Structure of GRpcClient.IndexedStakeState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                        |
| --------------- | ------------------------------------------- |
| address         | <code>string</code>                         |
| balance         | [<code>BigUint</code>](#GRpcClient.BigUint) |
| sender          | <code>string</code>                         |
| receiver        | <code>string</code>                         |
| genesisTime     | <code>string</code>                         |
| renaissanceTime | <code>string</code>                         |
| message         | <code>string</code>                         |
| type            | <code>number</code>                         |

<a name="GRpcClient.IndexedBlock"></a>

### GRpcClient.IndexedBlock : <code>object</code>

Structure of GRpcClient.IndexedBlock

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| height        | <code>number</code> |
| time          | <code>string</code> |
| proposer      | <code>string</code> |
| numTxs        | <code>number</code> |
| numInvalidTxs | <code>number</code> |

<a name="GRpcClient.HealthStatus"></a>

### GRpcClient.HealthStatus : <code>object</code>

Structure of GRpcClient.HealthStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                        |
| --------- | ----------------------------------------------------------- |
| consensus | [<code>ConsensusStatus</code>](#GRpcClient.ConsensusStatus) |
| network   | [<code>NetworkStatus</code>](#GRpcClient.NetworkStatus)     |
| storage   | [<code>StorageStatus</code>](#GRpcClient.StorageStatus)     |
| forge     | [<code>ForgeStatus</code>](#GRpcClient.ForgeStatus)         |

<a name="GRpcClient.ConsensusStatus"></a>

### GRpcClient.ConsensusStatus : <code>object</code>

Structure of GRpcClient.ConsensusStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name        | Type                 |
| ----------- | -------------------- |
| health      | <code>boolean</code> |
| synced      | <code>boolean</code> |
| blockHeight | <code>number</code>  |

<a name="GRpcClient.NetworkStatus"></a>

### GRpcClient.NetworkStatus : <code>object</code>

Structure of GRpcClient.NetworkStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                 |
| -------- | -------------------- |
| health   | <code>boolean</code> |
| numPeers | <code>number</code>  |

<a name="GRpcClient.StorageStatus"></a>

### GRpcClient.StorageStatus : <code>object</code>

Structure of GRpcClient.StorageStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| health        | <code>boolean</code>                                        |
| indexerServer | <code>string</code>                                         |
| stateDb       | <code>string</code>                                         |
| diskSpace     | [<code>DiskSpaceStatus</code>](#GRpcClient.DiskSpaceStatus) |

<a name="GRpcClient.DiskSpaceStatus"></a>

### GRpcClient.DiskSpaceStatus : <code>object</code>

Structure of GRpcClient.DiskSpaceStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                |
| ---------- | ------------------- |
| forgeUsage | <code>string</code> |
| total      | <code>string</code> |

<a name="GRpcClient.ForgeStatus"></a>

### GRpcClient.ForgeStatus : <code>object</code>

Structure of GRpcClient.ForgeStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| health     | <code>boolean</code>                                          |
| abiServer  | <code>string</code>                                           |
| forgeWeb   | <code>string</code>                                           |
| abciServer | [<code>AbciServerStatus</code>](#GRpcClient.AbciServerStatus) |

<a name="GRpcClient.AbciServerStatus"></a>

### GRpcClient.AbciServerStatus : <code>object</code>

Structure of GRpcClient.AbciServerStatus

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| abciConsensus | <code>string</code> |
| abciInfo      | <code>string</code> |

<a name="GRpcClient.ValidityFilter"></a>

### GRpcClient.ValidityFilter : <code>object</code>

Structure of GRpcClient.ValidityFilter

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                             |
| -------- | -------------------------------- |
| validity | <code>GRpcClient.Validity</code> |

<a name="GRpcClient.RangeFilter"></a>

### GRpcClient.RangeFilter : <code>object</code>

Structure of GRpcClient.RangeFilter

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| from | <code>number</code> |
| to   | <code>number</code> |

<a name="GRpcClient.AccountMigrateTx"></a>

### GRpcClient.AccountMigrateTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                              |
| ------- | ------------------------------------------------- |
| pk      | <code>Uint8Array</code>                           |
| type    | [<code>WalletType</code>](#GRpcClient.WalletType) |
| address | <code>string</code>                               |
| data    | [<code>Any</code>](#GRpcClient.Any)               |

<a name="GRpcClient.AssetSpec"></a>

### GRpcClient.AssetSpec : <code>object</code>

Structure of GRpcClient.AssetSpec

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| address | <code>string</code> |
| data    | <code>string</code> |

<a name="GRpcClient.AcquireAssetTx"></a>

### GRpcClient.AcquireAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                                       |
| ----- | ---------------------------------------------------------- |
| to    | <code>string</code>                                        |
| specs | [<code>Array.&lt;AssetSpec></code>](#GRpcClient.AssetSpec) |
| data  | [<code>Any</code>](#GRpcClient.Any)                        |

<a name="GRpcClient.ApproveTetherTx"></a>

### GRpcClient.ApproveTetherTx : <code>object</code>

Structure of GRpcClient.ApproveTetherTx 

```javascript
{
  "withdraw": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                                |
| -------- | ----------------------------------- |
| withdraw | <code>string</code>                 |
| data     | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.ConsumeAssetTx"></a>

### GRpcClient.ConsumeAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                |
| ------- | ----------------------------------- |
| issuer  | <code>string</code>                 |
| address | <code>string</code>                 |
| data    | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.CreateAssetTx"></a>

### GRpcClient.CreateAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                                |
| ------------- | ----------------------------------- |
| moniker       | <code>string</code>                 |
| data          | [<code>Any</code>](#GRpcClient.Any) |
| readonly      | <code>boolean</code>                |
| transferrable | <code>boolean</code>                |
| ttl           | <code>number</code>                 |
| parent        | <code>string</code>                 |
| address       | <code>string</code>                 |

<a name="GRpcClient.AssetAttributes"></a>

### GRpcClient.AssetAttributes : <code>object</code>

Structure of GRpcClient.AssetAttributes

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name          | Type                 |
| ------------- | -------------------- |
| transferrable | <code>boolean</code> |
| ttl           | <code>number</code>  |

<a name="GRpcClient.AssetFactory"></a>

### GRpcClient.AssetFactory : <code>object</code>

Structure of GRpcClient.AssetFactory

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                                        |
| --------------- | ----------------------------------------------------------- |
| description     | <code>string</code>                                         |
| limit           | <code>number</code>                                         |
| price           | [<code>BigUint</code>](#GRpcClient.BigUint)                 |
| template        | <code>string</code>                                         |
| allowedSpecArgs | <code>Array.&lt;string></code>                              |
| assetName       | <code>string</code>                                         |
| attributes      | [<code>AssetAttributes</code>](#GRpcClient.AssetAttributes) |
| data            | [<code>Any</code>](#GRpcClient.Any)                         |

<a name="GRpcClient.AssetFactoryState"></a>

### GRpcClient.AssetFactoryState : <code>object</code>

Structure of GRpcClient.AssetFactoryState

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                                        |
| --------------- | ----------------------------------------------------------- |
| description     | <code>string</code>                                         |
| limit           | <code>number</code>                                         |
| price           | [<code>BigUint</code>](#GRpcClient.BigUint)                 |
| template        | <code>string</code>                                         |
| allowedSpecArgs | <code>Array.&lt;string></code>                              |
| assetName       | <code>string</code>                                         |
| attributes      | [<code>AssetAttributes</code>](#GRpcClient.AssetAttributes) |
| numCreated      | <code>number</code>                                         |
| data            | [<code>Any</code>](#GRpcClient.Any)                         |

<a name="GRpcClient.DeclareTx"></a>

### GRpcClient.DeclareTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                |
| ------- | ----------------------------------- |
| moniker | <code>string</code>                 |
| issuer  | <code>string</code>                 |
| data    | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.DepositTetherTx"></a>

### GRpcClient.DepositTetherTx : <code>object</code>

Structure of GRpcClient.DepositTetherTx 

```javascript
{
  "target": "arcblock",
  "withdrawer": "arcblock",
  "locktime": "2019-07-08T09:59:22.220Z"
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                            |
| ---------- | ----------------------------------------------- |
| value      | [<code>BigUint</code>](#GRpcClient.BigUint)     |
| commission | [<code>BigUint</code>](#GRpcClient.BigUint)     |
| charge     | [<code>BigUint</code>](#GRpcClient.BigUint)     |
| target     | <code>string</code>                             |
| withdrawer | <code>string</code>                             |
| locktime   | [<code>Timestamp</code>](#GRpcClient.Timestamp) |

<a name="GRpcClient.ExchangeInfo"></a>

### GRpcClient.ExchangeInfo : <code>object</code>

Structure of GRpcClient.ExchangeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| value  | [<code>BigUint</code>](#GRpcClient.BigUint) |
| assets | <code>Array.&lt;string></code>              |

<a name="GRpcClient.ExchangeTx"></a>

### GRpcClient.ExchangeTx : <code>object</code>

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
  "expiredAt": "2019-07-08T09:59:22.220Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                  |
| --------- | ----------------------------------------------------- |
| to        | <code>string</code>                                   |
| sender    | [<code>ExchangeInfo</code>](#GRpcClient.ExchangeInfo) |
| receiver  | [<code>ExchangeInfo</code>](#GRpcClient.ExchangeInfo) |
| expiredAt | [<code>Timestamp</code>](#GRpcClient.Timestamp)       |
| data      | [<code>Any</code>](#GRpcClient.Any)                   |

<a name="GRpcClient.TetherExchangeInfo"></a>

### GRpcClient.TetherExchangeInfo : <code>object</code>

Structure of GRpcClient.TetherExchangeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                                |
| ------- | --------------------------------------------------- |
| value   | [<code>BigUint</code>](#GRpcClient.BigUint)         |
| assets  | <code>Array.&lt;string></code>                      |
| deposit | [<code>Transaction</code>](#GRpcClient.Transaction) |

<a name="GRpcClient.ExchangeTetherTx"></a>

### GRpcClient.ExchangeTetherTx : <code>object</code>

Structure of GRpcClient.ExchangeTetherTx 

```javascript
{
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
    ],
    "deposit": {
      "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "nonce": 5,
      "chainId": "arcblock",
      "pk": {},
      "gas": 2,
      "signature": {},
      "signatures": [
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
          "data": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
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
  },
  "expiredAt": "2019-07-08T09:59:22.220Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| sender    | [<code>ExchangeInfo</code>](#GRpcClient.ExchangeInfo)             |
| receiver  | [<code>TetherExchangeInfo</code>](#GRpcClient.TetherExchangeInfo) |
| expiredAt | [<code>Timestamp</code>](#GRpcClient.Timestamp)                   |
| data      | [<code>Any</code>](#GRpcClient.Any)                               |

<a name="GRpcClient.PokeTx"></a>

### GRpcClient.PokeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                |
| ------- | ----------------------------------- |
| date    | <code>string</code>                 |
| address | <code>string</code>                 |
| data    | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.RetrieveSwapTx"></a>

### GRpcClient.RetrieveSwapTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                |
| ------- | ----------------------------------- |
| address | <code>string</code>                 |
| hashkey | <code>Uint8Array</code>             |
| data    | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.RevokeSwapTx"></a>

### GRpcClient.RevokeSwapTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                |
| ------- | ----------------------------------- |
| address | <code>string</code>                 |
| data    | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.RevokeTetherTx"></a>

### GRpcClient.RevokeTetherTx : <code>object</code>

Structure of GRpcClient.RevokeTetherTx 

```javascript
{
  "tether": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                |
| ------ | ----------------------------------- |
| tether | <code>string</code>                 |
| data   | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.SetupSwapTx"></a>

### GRpcClient.SetupSwapTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| value    | [<code>BigUint</code>](#GRpcClient.BigUint) |
| assets   | <code>Array.&lt;string></code>              |
| receiver | <code>string</code>                         |
| hashlock | <code>Uint8Array</code>                     |
| locktime | <code>number</code>                         |
| data     | [<code>Any</code>](#GRpcClient.Any)         |

<a name="GRpcClient.stakeForAsset"></a>

### GRpcClient.stakeForAsset : <code>object</code>

Structure of GRpcClient.stakeForAsset

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.stakeForChain"></a>

### GRpcClient.stakeForChain : <code>object</code>

Structure of GRpcClient.stakeForChain

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.StakeForNode"></a>

### GRpcClient.StakeForNode : <code>object</code>

Structure of GRpcClient.StakeForNode

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.stakeForUser"></a>

### GRpcClient.stakeForUser : <code>object</code>

Structure of GRpcClient.stakeForUser

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
<a name="GRpcClient.StakeTx"></a>

### GRpcClient.StakeTx : <code>object</code>

Structure of GRpcClient.StakeTx 

```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "message": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                        |
| ------- | ------------------------------------------- |
| to      | <code>string</code>                         |
| value   | [<code>BigSint</code>](#GRpcClient.BigSint) |
| message | <code>string</code>                         |
| address | <code>string</code>                         |
| data    | [<code>Any</code>](#GRpcClient.Any)         |

<a name="GRpcClient.TransferTx"></a>

### GRpcClient.TransferTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| to     | <code>string</code>                         |
| value  | [<code>BigUint</code>](#GRpcClient.BigUint) |
| assets | <code>Array.&lt;string></code>              |
| data   | [<code>Any</code>](#GRpcClient.Any)         |

<a name="GRpcClient.UpdateAssetTx"></a>

### GRpcClient.UpdateAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                                |
| ------- | ----------------------------------- |
| address | <code>string</code>                 |
| moniker | <code>string</code>                 |
| data    | [<code>Any</code>](#GRpcClient.Any) |

<a name="GRpcClient.UpgradeNodeTx"></a>

### GRpcClient.UpgradeNodeTx : <code>object</code>

Structure of GRpcClient.UpgradeNodeTx 

```javascript
{
  "height": 5,
  "version": "arcblock",
  "override": true
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                 |
| -------- | -------------------- |
| height   | <code>number</code>  |
| version  | <code>string</code>  |
| override | <code>boolean</code> |

<a name="GRpcClient.TetherTradeInfo"></a>

### GRpcClient.TetherTradeInfo : <code>object</code>

Structure of GRpcClient.TetherTradeInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                        |
| ------ | ------------------------------------------- |
| value  | [<code>BigUint</code>](#GRpcClient.BigUint) |
| assets | <code>Array.&lt;string></code>              |
| tether | <code>string</code>                         |

<a name="GRpcClient.WithdrawTetherTx"></a>

### GRpcClient.WithdrawTetherTx : <code>object</code>

Structure of GRpcClient.WithdrawTetherTx 

```javascript
{
  "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "nonce": 5,
  "chainId": "arcblock",
  "pk": {},
  "signature": {},
  "signatures": [
    {
      "signer": "arcblock",
      "pk": {},
      "signature": {},
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    },
    {
      "signer": "arcblock",
      "pk": {},
      "signature": {},
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    }
  ],
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
    ],
    "tether": "arcblock"
  },
  "expiredAt": "2019-07-08T09:59:22.220Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name       | Type                                                        |
| ---------- | ----------------------------------------------------------- |
| from       | <code>string</code>                                         |
| nonce      | <code>number</code>                                         |
| chainId    | <code>string</code>                                         |
| pk         | <code>Uint8Array</code>                                     |
| signature  | <code>Uint8Array</code>                                     |
| signatures | [<code>Array.&lt;Multisig></code>](#GRpcClient.Multisig)    |
| sender     | [<code>ExchangeInfo</code>](#GRpcClient.ExchangeInfo)       |
| receiver   | [<code>TetherTradeInfo</code>](#GRpcClient.TetherTradeInfo) |
| expiredAt  | [<code>Timestamp</code>](#GRpcClient.Timestamp)             |
| data       | [<code>Any</code>](#GRpcClient.Any)                         |

<a name="GRpcClient.Any"></a>

### GRpcClient.Any : <code>object</code>

Structure of GRpcClient.Any

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                    |
| -------- | ----------------------- |
| type_url | <code>string</code>     |
| value    | <code>Uint8Array</code> |

<a name="GRpcClient.Timestamp"></a>

### GRpcClient.Timestamp : <code>object</code>

Structure of GRpcClient.Timestamp

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| seconds | <code>number</code> |
| nanos   | <code>number</code> |

<a name="GRpcClient.KVPair"></a>

### GRpcClient.KVPair : <code>object</code>

Structure of GRpcClient.KVPair

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                    |
| ----- | ----------------------- |
| key   | <code>Uint8Array</code> |
| value | <code>Uint8Array</code> |

<a name="GRpcClient.BlockParams"></a>

### GRpcClient.BlockParams : <code>object</code>

Structure of GRpcClient.BlockParams

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name     | Type                |
| -------- | ------------------- |
| maxBytes | <code>number</code> |
| maxGas   | <code>number</code> |

<a name="GRpcClient.EvidenceParams"></a>

### GRpcClient.EvidenceParams : <code>object</code>

Structure of GRpcClient.EvidenceParams

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| maxAge | <code>number</code> |

<a name="GRpcClient.ValidatorParams"></a>

### GRpcClient.ValidatorParams : <code>object</code>

Structure of GRpcClient.ValidatorParams

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name        | Type                           |
| ----------- | ------------------------------ |
| pubKeyTypes | <code>Array.&lt;string></code> |

<a name="GRpcClient.ConsensusParams"></a>

### GRpcClient.ConsensusParams : <code>object</code>

Structure of GRpcClient.ConsensusParams

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                        |
| --------- | ----------------------------------------------------------- |
| block     | [<code>BlockParams</code>](#GRpcClient.BlockParams)         |
| evidence  | [<code>EvidenceParams</code>](#GRpcClient.EvidenceParams)   |
| validator | [<code>ValidatorParams</code>](#GRpcClient.ValidatorParams) |

<a name="GRpcClient.LastCommitInfo"></a>

### GRpcClient.LastCommitInfo : <code>object</code>

Structure of GRpcClient.LastCommitInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                                                     |
| ----- | -------------------------------------------------------- |
| round | <code>number</code>                                      |
| votes | [<code>Array.&lt;VoteInfo></code>](#GRpcClient.VoteInfo) |

<a name="GRpcClient.Version"></a>

### GRpcClient.Version : <code>object</code>

Structure of GRpcClient.Version

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| Block | <code>number</code> |
| App   | <code>number</code> |

<a name="GRpcClient.BlockID"></a>

### GRpcClient.BlockID : <code>object</code>

Structure of GRpcClient.BlockID

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name        | Type                                                    |
| ----------- | ------------------------------------------------------- |
| hash        | <code>Uint8Array</code>                                 |
| partsHeader | [<code>PartSetHeader</code>](#GRpcClient.PartSetHeader) |

<a name="GRpcClient.PartSetHeader"></a>

### GRpcClient.PartSetHeader : <code>object</code>

Structure of GRpcClient.PartSetHeader

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name  | Type                    |
| ----- | ----------------------- |
| total | <code>number</code>     |
| hash  | <code>Uint8Array</code> |

<a name="GRpcClient.Validator"></a>

### GRpcClient.Validator : <code>object</code>

Structure of GRpcClient.Validator

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name    | Type                    |
| ------- | ----------------------- |
| address | <code>Uint8Array</code> |
| power   | <code>number</code>     |

<a name="GRpcClient.ValidatorUpdate"></a>

### GRpcClient.ValidatorUpdate : <code>object</code>

Structure of GRpcClient.ValidatorUpdate

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                                      |
| ------ | ----------------------------------------- |
| pubKey | [<code>PubKey</code>](#GRpcClient.PubKey) |
| power  | <code>number</code>                       |

<a name="GRpcClient.VoteInfo"></a>

### GRpcClient.VoteInfo : <code>object</code>

Structure of GRpcClient.VoteInfo

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name            | Type                                            |
| --------------- | ----------------------------------------------- |
| validator       | [<code>Validator</code>](#GRpcClient.Validator) |
| signedLastBlock | <code>boolean</code>                            |

<a name="GRpcClient.PubKey"></a>

### GRpcClient.PubKey : <code>object</code>

Structure of GRpcClient.PubKey

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| type | <code>string</code>     |
| data | <code>Uint8Array</code> |

<a name="GRpcClient.Evidence"></a>

### GRpcClient.Evidence : <code>object</code>

Structure of GRpcClient.Evidence

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name             | Type                                            |
| ---------------- | ----------------------------------------------- |
| type             | <code>string</code>                             |
| validator        | [<code>Validator</code>](#GRpcClient.Validator) |
| height           | <code>number</code>                             |
| time             | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| totalVotingPower | <code>number</code>                             |

<a name="GRpcClient.Header"></a>

### GRpcClient.Header : <code>object</code>

Structure of GRpcClient.Header

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name               | Type                                            |
| ------------------ | ----------------------------------------------- |
| version            | [<code>Version</code>](#GRpcClient.Version)     |
| chainId            | <code>string</code>                             |
| height             | <code>number</code>                             |
| time               | [<code>Timestamp</code>](#GRpcClient.Timestamp) |
| numTxs             | <code>number</code>                             |
| totalTxs           | <code>number</code>                             |
| lastBlockId        | [<code>BlockID</code>](#GRpcClient.BlockID)     |
| lastCommitHash     | <code>Uint8Array</code>                         |
| dataHash           | <code>Uint8Array</code>                         |
| validatorsHash     | <code>Uint8Array</code>                         |
| nextValidatorsHash | <code>Uint8Array</code>                         |
| consensusHash      | <code>Uint8Array</code>                         |
| appHash            | <code>Uint8Array</code>                         |
| lastResultsHash    | <code>Uint8Array</code>                         |
| evidenceHash       | <code>Uint8Array</code>                         |
| proposerAddress    | <code>Uint8Array</code>                         |

<a name="GRpcClient.RequestBeginBlock"></a>

### GRpcClient.RequestBeginBlock : <code>object</code>

Structure of GRpcClient.RequestBeginBlock

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                | Type                                                      |
| ------------------- | --------------------------------------------------------- |
| hash                | <code>Uint8Array</code>                                   |
| header              | [<code>Header</code>](#GRpcClient.Header)                 |
| lastCommitInfo      | [<code>LastCommitInfo</code>](#GRpcClient.LastCommitInfo) |
| byzantineValidators | [<code>Array.&lt;Evidence></code>](#GRpcClient.Evidence)  |

<a name="GRpcClient.RequestEndBlock"></a>

### GRpcClient.RequestEndBlock : <code>object</code>

Structure of GRpcClient.RequestEndBlock

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| height | <code>number</code> |

<a name="GRpcClient.ResponseBeginBlock"></a>

### GRpcClient.ResponseBeginBlock : <code>object</code>

Structure of GRpcClient.ResponseBeginBlock

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name | Type                                                 |
| ---- | ---------------------------------------------------- |
| tags | [<code>Array.&lt;KVPair></code>](#GRpcClient.KVPair) |

<a name="GRpcClient.ResponseEndBlock"></a>

### GRpcClient.ResponseEndBlock : <code>object</code>

Structure of GRpcClient.ResponseEndBlock

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                                   |
| --------------------- | ---------------------------------------------------------------------- |
| validatorUpdates      | [<code>Array.&lt;ValidatorUpdate></code>](#GRpcClient.ValidatorUpdate) |
| consensusParamUpdates | [<code>ConsensusParams</code>](#GRpcClient.ConsensusParams)            |
| tags                  | [<code>Array.&lt;KVPair></code>](#GRpcClient.KVPair)                   |

<a name="GRpcClient.ResponseCheckTx"></a>

### GRpcClient.ResponseCheckTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                 |
| --------- | ---------------------------------------------------- |
| code      | <code>number</code>                                  |
| data      | <code>Uint8Array</code>                              |
| log       | <code>string</code>                                  |
| info      | <code>string</code>                                  |
| gasWanted | <code>number</code>                                  |
| gasUsed   | <code>number</code>                                  |
| tags      | [<code>Array.&lt;KVPair></code>](#GRpcClient.KVPair) |
| codespace | <code>string</code>                                  |

<a name="GRpcClient.ResponseDeliverTx"></a>

### GRpcClient.ResponseDeliverTx : <code>object</code>

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

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name      | Type                                                 |
| --------- | ---------------------------------------------------- |
| code      | <code>number</code>                                  |
| data      | <code>Uint8Array</code>                              |
| log       | <code>string</code>                                  |
| info      | <code>string</code>                                  |
| gasWanted | <code>number</code>                                  |
| gasUsed   | <code>number</code>                                  |
| tags      | [<code>Array.&lt;KVPair></code>](#GRpcClient.KVPair) |
| codespace | <code>string</code>                                  |

<a name="GRpcClient.ConsensusUpgradeTxInput"></a>

### GRpcClient.ConsensusUpgradeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                              | Description                                                                                   |
| --------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                               |                                                                                               |
| input.tx              | <code>object</code>                                               | data of the transaction                                                                       |
| input.tx.itx          | [<code>ConsensusUpgradeTx</code>](#GRpcClient.ConsensusUpgradeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                               | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                               | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                               | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DeployProtocolTxInput"></a>

### GRpcClient.DeployProtocolTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                          | Description                                                                                   |
| --------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                           |                                                                                               |
| input.tx              | <code>object</code>                                           | data of the transaction                                                                       |
| input.tx.itx          | [<code>DeployProtocolTx</code>](#GRpcClient.DeployProtocolTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                           | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                           | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                           | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.SysUpgradeTxInput"></a>

### GRpcClient.SysUpgradeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                  | Description                                                                                   |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                   |                                                                                               |
| input.tx              | <code>object</code>                                   | data of the transaction                                                                       |
| input.tx.itx          | [<code>SysUpgradeTx</code>](#GRpcClient.SysUpgradeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                   | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                   | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                   | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.AccountMigrateTxInput"></a>

### GRpcClient.AccountMigrateTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                          | Description                                                                                   |
| --------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                           |                                                                                               |
| input.tx              | <code>object</code>                                           | data of the transaction                                                                       |
| input.tx.itx          | [<code>AccountMigrateTx</code>](#GRpcClient.AccountMigrateTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                           | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                           | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                           | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.AcquireAssetTxInput"></a>

### GRpcClient.AcquireAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                      | Description                                                                                   |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                       |                                                                                               |
| input.tx              | <code>object</code>                                       | data of the transaction                                                                       |
| input.tx.itx          | [<code>AcquireAssetTx</code>](#GRpcClient.AcquireAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                       | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                       | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                       | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ApproveTetherTxInput"></a>

### GRpcClient.ApproveTetherTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                        | Description                                                                                   |
| --------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                         |                                                                                               |
| input.tx              | <code>object</code>                                         | data of the transaction                                                                       |
| input.tx.itx          | [<code>ApproveTetherTx</code>](#GRpcClient.ApproveTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                         | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                         | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                         | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ConsumeAssetTxInput"></a>

### GRpcClient.ConsumeAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                      | Description                                                                                   |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                       |                                                                                               |
| input.tx              | <code>object</code>                                       | data of the transaction                                                                       |
| input.tx.itx          | [<code>ConsumeAssetTx</code>](#GRpcClient.ConsumeAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                       | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                       | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                       | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.CreateAssetTxInput"></a>

### GRpcClient.CreateAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                    | Description                                                                                   |
| --------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                     |                                                                                               |
| input.tx              | <code>object</code>                                     | data of the transaction                                                                       |
| input.tx.itx          | [<code>CreateAssetTx</code>](#GRpcClient.CreateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                     | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                     | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                     | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DeclareTxInput"></a>

### GRpcClient.DeclareTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                            | Description                                                                                   |
| --------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                             |                                                                                               |
| input.tx              | <code>object</code>                             | data of the transaction                                                                       |
| input.tx.itx          | [<code>DeclareTx</code>](#GRpcClient.DeclareTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                             | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                             | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                             | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                             | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                             | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                              | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                             | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                             | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DepositTetherTxInput"></a>

### GRpcClient.DepositTetherTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                        | Description                                                                                   |
| --------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                         |                                                                                               |
| input.tx              | <code>object</code>                                         | data of the transaction                                                                       |
| input.tx.itx          | [<code>DepositTetherTx</code>](#GRpcClient.DepositTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                         | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                         | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                         | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ExchangeTetherTxInput"></a>

### GRpcClient.ExchangeTetherTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                          | Description                                                                                   |
| --------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                           |                                                                                               |
| input.tx              | <code>object</code>                                           | data of the transaction                                                                       |
| input.tx.itx          | [<code>ExchangeTetherTx</code>](#GRpcClient.ExchangeTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                           | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                           | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                           | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ExchangeTxInput"></a>

### GRpcClient.ExchangeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                              | Description                                                                                   |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                               |                                                                                               |
| input.tx              | <code>object</code>                               | data of the transaction                                                                       |
| input.tx.itx          | [<code>ExchangeTx</code>](#GRpcClient.ExchangeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                               | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                               | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                               | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.PokeTxInput"></a>

### GRpcClient.PokeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                      | Description                                                                                   |
| --------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                       |                                                                                               |
| input.tx              | <code>object</code>                       | data of the transaction                                                                       |
| input.tx.itx          | [<code>PokeTx</code>](#GRpcClient.PokeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                       | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                       | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                       | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.PokeTxInput"></a>

### GRpcClient.PokeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                      | Description                                                                                   |
| --------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                       |                                                                                               |
| input.tx              | <code>object</code>                       | data of the transaction                                                                       |
| input.tx.itx          | [<code>PokeTx</code>](#GRpcClient.PokeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                       | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                       | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                       | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RetrieveSwapTxInput"></a>

### GRpcClient.RetrieveSwapTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                      | Description                                                                                   |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                       |                                                                                               |
| input.tx              | <code>object</code>                                       | data of the transaction                                                                       |
| input.tx.itx          | [<code>RetrieveSwapTx</code>](#GRpcClient.RetrieveSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                       | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                       | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                       | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RevokeSwapTxInput"></a>

### GRpcClient.RevokeSwapTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                  | Description                                                                                   |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                   |                                                                                               |
| input.tx              | <code>object</code>                                   | data of the transaction                                                                       |
| input.tx.itx          | [<code>RevokeSwapTx</code>](#GRpcClient.RevokeSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                   | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                   | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                   | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RevokeTetherTxInput"></a>

### GRpcClient.RevokeTetherTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                      | Description                                                                                   |
| --------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                       |                                                                                               |
| input.tx              | <code>object</code>                                       | data of the transaction                                                                       |
| input.tx.itx          | [<code>RevokeTetherTx</code>](#GRpcClient.RevokeTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                       | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                       | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                       | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.SetupSwapTxInput"></a>

### GRpcClient.SetupSwapTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                | Description                                                                                   |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                 |                                                                                               |
| input.tx              | <code>object</code>                                 | data of the transaction                                                                       |
| input.tx.itx          | [<code>SetupSwapTx</code>](#GRpcClient.SetupSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                 | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                 | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                 | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                 | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                 | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                  | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                 | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                 | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.StakeTxInput"></a>

### GRpcClient.StakeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                        | Description                                                                                   |
| --------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                         |                                                                                               |
| input.tx              | <code>object</code>                         | data of the transaction                                                                       |
| input.tx.itx          | [<code>StakeTx</code>](#GRpcClient.StakeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                         | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                         | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                         | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.TransferTxInput"></a>

### GRpcClient.TransferTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                              | Description                                                                                   |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                               |                                                                                               |
| input.tx              | <code>object</code>                               | data of the transaction                                                                       |
| input.tx.itx          | [<code>TransferTx</code>](#GRpcClient.TransferTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                               | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                               | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                               | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.UpdateAssetTxInput"></a>

### GRpcClient.UpdateAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                    | Description                                                                                   |
| --------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                     |                                                                                               |
| input.tx              | <code>object</code>                                     | data of the transaction                                                                       |
| input.tx.itx          | [<code>UpdateAssetTx</code>](#GRpcClient.UpdateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                     | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                     | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                     | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.UpgradeNodeTxInput"></a>

### GRpcClient.UpgradeNodeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                    | Description                                                                                   |
| --------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                     |                                                                                               |
| input.tx              | <code>object</code>                                     | data of the transaction                                                                       |
| input.tx.itx          | [<code>UpgradeNodeTx</code>](#GRpcClient.UpgradeNodeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                     | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                     | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                     | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.WithdrawTetherTxInput"></a>

### GRpcClient.WithdrawTetherTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GRpcClient</code>](#GRpcClient)  
**Properties**

| Name                  | Type                                                          | Description                                                                                   |
| --------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                           |                                                                                               |
| input.tx              | <code>object</code>                                           | data of the transaction                                                                       |
| input.tx.itx          | [<code>WithdrawTetherTx</code>](#GRpcClient.WithdrawTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                           | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                           | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                           | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |
