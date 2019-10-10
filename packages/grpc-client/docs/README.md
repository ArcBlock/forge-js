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
      * [getType(x)](#GRpcClient+getType) ⇒ `class` \| `null`
      * [decodeTx(buffer)](#GRpcClient+decodeTx) ⇒ `object`
      * [getRpcMethods()](#GRpcClient+getRpcMethods) ⇒ `object`
      * [getTxSendMethods()](#GRpcClient+getTxSendMethods) ⇒ `object`
      * [getTxEncodeMethods()](#GRpcClient+getTxEncodeMethods) ⇒ `object`
      * [getTxSignMethods()](#GRpcClient+getTxSignMethods) ⇒ `object`
      * [getTxMultiSignMethods()](#GRpcClient+getTxMultiSignMethods) ⇒ `object`
      * [createTx(params)](#GRpcClient+createTx) ⇒ [`Promise.&lt;ResponseCreateTx&gt;`](#GRpcClient.ResponseCreateTx)
      * [multisig(params)](#GRpcClient+multisig) ⇒ [`Promise.&lt;ResponseMultisig&gt;`](#GRpcClient.ResponseMultisig)
      * [sendTx(params)](#GRpcClient+sendTx) ⇒ [`Promise.&lt;ResponseSendTx&gt;`](#GRpcClient.ResponseSendTx)
      * [getTx(params)](#GRpcClient+getTx) ⇒ `EventEmitter`
      * [getBlock(params)](#GRpcClient+getBlock) ⇒ `EventEmitter`
      * [getBlocks(params)](#GRpcClient+getBlocks) ⇒ [`Promise.&lt;ResponseGetBlocks&gt;`](#GRpcClient.ResponseGetBlocks)
      * [getUnconfirmedTxs(params)](#GRpcClient+getUnconfirmedTxs) ⇒ [`Promise.&lt;ResponseGetUnconfirmedTxs&gt;`](#GRpcClient.ResponseGetUnconfirmedTxs)
      * [getChainInfo(params)](#GRpcClient+getChainInfo) ⇒ [`Promise.&lt;ResponseGetChainInfo&gt;`](#GRpcClient.ResponseGetChainInfo)
      * [getNodeInfo(params)](#GRpcClient+getNodeInfo) ⇒ [`Promise.&lt;ResponseGetNodeInfo&gt;`](#GRpcClient.ResponseGetNodeInfo)
      * [search(params)](#GRpcClient+search) ⇒ [`Promise.&lt;ResponseSearch&gt;`](#GRpcClient.ResponseSearch)
      * [getNetInfo(params)](#GRpcClient+getNetInfo) ⇒ [`Promise.&lt;ResponseGetNetInfo&gt;`](#GRpcClient.ResponseGetNetInfo)
      * [getValidatorsInfo(params)](#GRpcClient+getValidatorsInfo) ⇒ [`Promise.&lt;ResponseGetValidatorsInfo&gt;`](#GRpcClient.ResponseGetValidatorsInfo)
      * [getConfig(params)](#GRpcClient+getConfig) ⇒ [`Promise.&lt;ResponseGetConfig&gt;`](#GRpcClient.ResponseGetConfig)
      * [subscribe(params)](#GRpcClient+subscribe) ⇒ `EventEmitter`
      * [unsubscribe(params)](#GRpcClient+unsubscribe) ⇒ [`Promise.&lt;ResponseUnsubscribe&gt;`](#GRpcClient.ResponseUnsubscribe)
      * [storeFile(params)](#GRpcClient+storeFile) ⇒ [`Promise.&lt;ResponseStoreFile&gt;`](#GRpcClient.ResponseStoreFile)
      * [loadFile(params)](#GRpcClient+loadFile) ⇒ `EventEmitter`
      * [pinFile(params)](#GRpcClient+pinFile) ⇒ [`Promise.&lt;ResponsePinFile&gt;`](#GRpcClient.ResponsePinFile)
      * [getAccountState(params)](#GRpcClient+getAccountState) ⇒ `EventEmitter`
      * [getAssetState(params)](#GRpcClient+getAssetState) ⇒ `EventEmitter`
      * [getForgeState(params)](#GRpcClient+getForgeState) ⇒ [`Promise.&lt;ResponseGetForgeState&gt;`](#GRpcClient.ResponseGetForgeState)
      * [getProtocolState(params)](#GRpcClient+getProtocolState) ⇒ `EventEmitter`
      * [getStakeState(params)](#GRpcClient+getStakeState) ⇒ `EventEmitter`
      * [getTetherState(params)](#GRpcClient+getTetherState) ⇒ `EventEmitter`
      * [getSwapState(params)](#GRpcClient+getSwapState) ⇒ `EventEmitter`
      * [getDelegateState(params)](#GRpcClient+getDelegateState) ⇒ `EventEmitter`
      * [createWallet(params)](#GRpcClient+createWallet) ⇒ [`Promise.&lt;ResponseCreateWallet&gt;`](#GRpcClient.ResponseCreateWallet)
      * [loadWallet(params)](#GRpcClient+loadWallet) ⇒ [`Promise.&lt;ResponseLoadWallet&gt;`](#GRpcClient.ResponseLoadWallet)
      * [recoverWallet(params)](#GRpcClient+recoverWallet) ⇒ [`Promise.&lt;ResponseRecoverWallet&gt;`](#GRpcClient.ResponseRecoverWallet)
      * [listWallet(params)](#GRpcClient+listWallet) ⇒ `EventEmitter`
      * [removeWallet(params)](#GRpcClient+removeWallet) ⇒ [`Promise.&lt;ResponseRemoveWallet&gt;`](#GRpcClient.ResponseRemoveWallet)
      * [declareNode(params)](#GRpcClient+declareNode) ⇒ [`Promise.&lt;ResponseDeclareNode&gt;`](#GRpcClient.ResponseDeclareNode)
      * [getForgeStats(params)](#GRpcClient+getForgeStats) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GRpcClient.ResponseGetForgeStats)
      * [listTransactions(params)](#GRpcClient+listTransactions) ⇒ [`Promise.&lt;ResponseListTransactions&gt;`](#GRpcClient.ResponseListTransactions)
      * [listAssets(params)](#GRpcClient+listAssets) ⇒ [`Promise.&lt;ResponseListAssets&gt;`](#GRpcClient.ResponseListAssets)
      * [listStakes(params)](#GRpcClient+listStakes) ⇒ [`Promise.&lt;ResponseListStakes&gt;`](#GRpcClient.ResponseListStakes)
      * [listAccount(params)](#GRpcClient+listAccount) ⇒ [`Promise.&lt;ResponseListAccount&gt;`](#GRpcClient.ResponseListAccount)
      * [listTopAccounts(params)](#GRpcClient+listTopAccounts) ⇒ [`Promise.&lt;ResponseListTopAccounts&gt;`](#GRpcClient.ResponseListTopAccounts)
      * [listAssetTransactions(params)](#GRpcClient+listAssetTransactions) ⇒ [`Promise.&lt;ResponseListAssetTransactions&gt;`](#GRpcClient.ResponseListAssetTransactions)
      * [listBlocks(params)](#GRpcClient+listBlocks) ⇒ [`Promise.&lt;ResponseListBlocks&gt;`](#GRpcClient.ResponseListBlocks)
      * [getHealthStatus(params)](#GRpcClient+getHealthStatus) ⇒ [`Promise.&lt;ResponseGetHealthStatus&gt;`](#GRpcClient.ResponseGetHealthStatus)
      * [listTethers(params)](#GRpcClient+listTethers) ⇒ [`Promise.&lt;ResponseListTethers&gt;`](#GRpcClient.ResponseListTethers)
      * [listSwap(params)](#GRpcClient+listSwap) ⇒ [`Promise.&lt;ResponseListSwap&gt;`](#GRpcClient.ResponseListSwap)
      * [sendConsensusUpgradeTx(params)](#GRpcClient+sendConsensusUpgradeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDeployProtocolTx(params)](#GRpcClient+sendDeployProtocolTx) ⇒ `Promise.&lt;string&gt;`
      * [sendSysUpgradeTx(params)](#GRpcClient+sendSysUpgradeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRevokeWithdrawTx(params)](#GRpcClient+sendRevokeWithdrawTx) ⇒ `Promise.&lt;string&gt;`
      * [sendWithdrawTokenTx(params)](#GRpcClient+sendWithdrawTokenTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDelegateTx(params)](#GRpcClient+sendDelegateTx) ⇒ `Promise.&lt;string&gt;`
      * [sendAccountMigrateTx(params)](#GRpcClient+sendAccountMigrateTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDeclareTx(params)](#GRpcClient+sendDeclareTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRetrieveSwapTx(params)](#GRpcClient+sendRetrieveSwapTx) ⇒ `Promise.&lt;string&gt;`
      * [sendTransferTx(params)](#GRpcClient+sendTransferTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRevokeTetherTx(params)](#GRpcClient+sendRevokeTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDeactivateProtocolTx(params)](#GRpcClient+sendDeactivateProtocolTx) ⇒ `Promise.&lt;string&gt;`
      * [sendPokeTx(params)](#GRpcClient+sendPokeTx) ⇒ `Promise.&lt;string&gt;`
      * [checkin(params)](#GRpcClient+checkin) ⇒ `Promise.&lt;string&gt;`
      * [sendCreateAssetTx(params)](#GRpcClient+sendCreateAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDepositTetherTx(params)](#GRpcClient+sendDepositTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendExchangeTetherTx(params)](#GRpcClient+sendExchangeTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendConsumeAssetTx(params)](#GRpcClient+sendConsumeAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendSetupSwapTx(params)](#GRpcClient+sendSetupSwapTx) ⇒ `Promise.&lt;string&gt;`
      * [sendApproveWithdrawTx(params)](#GRpcClient+sendApproveWithdrawTx) ⇒ `Promise.&lt;string&gt;`
      * [sendUpdateAssetTx(params)](#GRpcClient+sendUpdateAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRevokeSwapTx(params)](#GRpcClient+sendRevokeSwapTx) ⇒ `Promise.&lt;string&gt;`
      * [sendExchangeTx(params)](#GRpcClient+sendExchangeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendWithdrawTetherTx(params)](#GRpcClient+sendWithdrawTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendActivateProtocolTx(params)](#GRpcClient+sendActivateProtocolTx) ⇒ `Promise.&lt;string&gt;`
      * [sendApproveTetherTx(params)](#GRpcClient+sendApproveTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendUpgradeNodeTx(params)](#GRpcClient+sendUpgradeNodeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDepositTokenTx(params)](#GRpcClient+sendDepositTokenTx) ⇒ `Promise.&lt;string&gt;`
      * [sendAcquireAssetTx(params)](#GRpcClient+sendAcquireAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendStakeTx(params)](#GRpcClient+sendStakeTx) ⇒ `Promise.&lt;string&gt;`
      * [encodeConsensusUpgradeTx(params)](#GRpcClient+encodeConsensusUpgradeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeDeployProtocolTx(params)](#GRpcClient+encodeDeployProtocolTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeSysUpgradeTx(params)](#GRpcClient+encodeSysUpgradeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeRevokeWithdrawTx(params)](#GRpcClient+encodeRevokeWithdrawTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeWithdrawTokenTx(params)](#GRpcClient+encodeWithdrawTokenTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeDelegateTx(params)](#GRpcClient+encodeDelegateTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeAccountMigrateTx(params)](#GRpcClient+encodeAccountMigrateTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeDeclareTx(params)](#GRpcClient+encodeDeclareTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeRetrieveSwapTx(params)](#GRpcClient+encodeRetrieveSwapTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeTransferTx(params)](#GRpcClient+encodeTransferTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeRevokeTetherTx(params)](#GRpcClient+encodeRevokeTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeDeactivateProtocolTx(params)](#GRpcClient+encodeDeactivateProtocolTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodePokeTx(params)](#GRpcClient+encodePokeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeCreateAssetTx(params)](#GRpcClient+encodeCreateAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeDepositTetherTx(params)](#GRpcClient+encodeDepositTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeExchangeTetherTx(params)](#GRpcClient+encodeExchangeTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeConsumeAssetTx(params)](#GRpcClient+encodeConsumeAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeSetupSwapTx(params)](#GRpcClient+encodeSetupSwapTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeApproveWithdrawTx(params)](#GRpcClient+encodeApproveWithdrawTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeUpdateAssetTx(params)](#GRpcClient+encodeUpdateAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeRevokeSwapTx(params)](#GRpcClient+encodeRevokeSwapTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeExchangeTx(params)](#GRpcClient+encodeExchangeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeWithdrawTetherTx(params)](#GRpcClient+encodeWithdrawTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeActivateProtocolTx(params)](#GRpcClient+encodeActivateProtocolTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeApproveTetherTx(params)](#GRpcClient+encodeApproveTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeUpgradeNodeTx(params)](#GRpcClient+encodeUpgradeNodeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeDepositTokenTx(params)](#GRpcClient+encodeDepositTokenTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeAcquireAssetTx(params)](#GRpcClient+encodeAcquireAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
      * [encodeStakeTx(params)](#GRpcClient+encodeStakeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)
    * _static_
      * [TxEncodeOutput](#GRpcClient.TxEncodeOutput) : `object`
      * [RequestCreateTx](#GRpcClient.RequestCreateTx) : `object`
      * [ResponseCreateTx](#GRpcClient.ResponseCreateTx) : `object`
      * [RequestMultisig](#GRpcClient.RequestMultisig) : `object`
      * [ResponseMultisig](#GRpcClient.ResponseMultisig) : `object`
      * [RequestSendTx](#GRpcClient.RequestSendTx) : `object`
      * [ResponseSendTx](#GRpcClient.ResponseSendTx) : `object`
      * [RequestGetTx](#GRpcClient.RequestGetTx) : `object`
      * [ResponseGetTx](#GRpcClient.ResponseGetTx) : `object`
      * [RequestGetBlock](#GRpcClient.RequestGetBlock) : `object`
      * [ResponseGetBlock](#GRpcClient.ResponseGetBlock) : `object`
      * [RequestGetBlocks](#GRpcClient.RequestGetBlocks) : `object`
      * [ResponseGetBlocks](#GRpcClient.ResponseGetBlocks) : `object`
      * [RequestCreateWallet](#GRpcClient.RequestCreateWallet) : `object`
      * [ResponseCreateWallet](#GRpcClient.ResponseCreateWallet) : `object`
      * [RequestLoadWallet](#GRpcClient.RequestLoadWallet) : `object`
      * [ResponseLoadWallet](#GRpcClient.ResponseLoadWallet) : `object`
      * [RequestRecoverWallet](#GRpcClient.RequestRecoverWallet) : `object`
      * [ResponseRecoverWallet](#GRpcClient.ResponseRecoverWallet) : `object`
      * [RequestListWallet](#GRpcClient.RequestListWallet) : `object`
      * [ResponseListWallet](#GRpcClient.ResponseListWallet) : `object`
      * [RequestRemoveWallet](#GRpcClient.RequestRemoveWallet) : `object`
      * [ResponseRemoveWallet](#GRpcClient.ResponseRemoveWallet) : `object`
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
      * [RequestGetTetherState](#GRpcClient.RequestGetTetherState) : `object`
      * [ResponseGetTetherState](#GRpcClient.ResponseGetTetherState) : `object`
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
      * [RequestListTethers](#GRpcClient.RequestListTethers) : `object`
      * [ResponseListTethers](#GRpcClient.ResponseListTethers) : `object`
      * [RequestListSwap](#GRpcClient.RequestListSwap) : `object`
      * [ResponseListSwap](#GRpcClient.ResponseListSwap) : `object`
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
      * [TetherState](#GRpcClient.TetherState) : `object`
      * [TetherInfo](#GRpcClient.TetherInfo) : `object`
      * [SwapState](#GRpcClient.SwapState) : `object`
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
      * [ApproveTetherTx](#GRpcClient.ApproveTetherTx) : `object`
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
      * [DepositTetherTx](#GRpcClient.DepositTetherTx) : `object`
      * [DepositTokenTx](#GRpcClient.DepositTokenTx) : `object`
      * [ExchangeInfo](#GRpcClient.ExchangeInfo) : `object`
      * [ExchangeTx](#GRpcClient.ExchangeTx) : `object`
      * [TetherExchangeInfo](#GRpcClient.TetherExchangeInfo) : `object`
      * [ExchangeTetherTx](#GRpcClient.ExchangeTetherTx) : `object`
      * [PokeTx](#GRpcClient.PokeTx) : `object`
      * [RetrieveSwapTx](#GRpcClient.RetrieveSwapTx) : `object`
      * [RevokeSwapTx](#GRpcClient.RevokeSwapTx) : `object`
      * [RevokeTetherTx](#GRpcClient.RevokeTetherTx) : `object`
      * [RevokeWithdrawTx](#GRpcClient.RevokeWithdrawTx) : `object`
      * [SetupSwapTx](#GRpcClient.SetupSwapTx) : `object`
      * [stakeForAsset](#GRpcClient.stakeForAsset) : `object`
      * [stakeForChain](#GRpcClient.stakeForChain) : `object`
      * [StakeForNode](#GRpcClient.StakeForNode) : `object`
      * [stakeForUser](#GRpcClient.stakeForUser) : `object`
      * [StakeTx](#GRpcClient.StakeTx) : `object`
      * [TransferTx](#GRpcClient.TransferTx) : `object`
      * [UpdateAssetTx](#GRpcClient.UpdateAssetTx) : `object`
      * [UpgradeNodeTx](#GRpcClient.UpgradeNodeTx) : `object`
      * [TetherTradeInfo](#GRpcClient.TetherTradeInfo) : `object`
      * [WithdrawTetherTx](#GRpcClient.WithdrawTetherTx) : `object`
      * [WithdrawTokenTx](#GRpcClient.WithdrawTokenTx) : `object`
      * [Any](#GRpcClient.Any) : `object`
      * [Timestamp](#GRpcClient.Timestamp) : `object`
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
      * [ConsensusUpgradeTxInput](#GRpcClient.ConsensusUpgradeTxInput) : `Object`
      * [DeployProtocolTxInput](#GRpcClient.DeployProtocolTxInput) : `Object`
      * [SysUpgradeTxInput](#GRpcClient.SysUpgradeTxInput) : `Object`
      * [RevokeWithdrawTxInput](#GRpcClient.RevokeWithdrawTxInput) : `Object`
      * [WithdrawTokenTxInput](#GRpcClient.WithdrawTokenTxInput) : `Object`
      * [DelegateTxInput](#GRpcClient.DelegateTxInput) : `Object`
      * [AccountMigrateTxInput](#GRpcClient.AccountMigrateTxInput) : `Object`
      * [DeclareTxInput](#GRpcClient.DeclareTxInput) : `Object`
      * [RetrieveSwapTxInput](#GRpcClient.RetrieveSwapTxInput) : `Object`
      * [TransferTxInput](#GRpcClient.TransferTxInput) : `Object`
      * [RevokeTetherTxInput](#GRpcClient.RevokeTetherTxInput) : `Object`
      * [DeactivateProtocolTxInput](#GRpcClient.DeactivateProtocolTxInput) : `Object`
      * [PokeTxInput](#GRpcClient.PokeTxInput) : `Object`
      * [PokeTxInput](#GRpcClient.PokeTxInput) : `Object`
      * [CreateAssetTxInput](#GRpcClient.CreateAssetTxInput) : `Object`
      * [DepositTetherTxInput](#GRpcClient.DepositTetherTxInput) : `Object`
      * [ExchangeTetherTxInput](#GRpcClient.ExchangeTetherTxInput) : `Object`
      * [ConsumeAssetTxInput](#GRpcClient.ConsumeAssetTxInput) : `Object`
      * [SetupSwapTxInput](#GRpcClient.SetupSwapTxInput) : `Object`
      * [ApproveWithdrawTxInput](#GRpcClient.ApproveWithdrawTxInput) : `Object`
      * [UpdateAssetTxInput](#GRpcClient.UpdateAssetTxInput) : `Object`
      * [RevokeSwapTxInput](#GRpcClient.RevokeSwapTxInput) : `Object`
      * [ExchangeTxInput](#GRpcClient.ExchangeTxInput) : `Object`
      * [WithdrawTetherTxInput](#GRpcClient.WithdrawTetherTxInput) : `Object`
      * [ActivateProtocolTxInput](#GRpcClient.ActivateProtocolTxInput) : `Object`
      * [ApproveTetherTxInput](#GRpcClient.ApproveTetherTxInput) : `Object`
      * [UpgradeNodeTxInput](#GRpcClient.UpgradeNodeTxInput) : `Object`
      * [DepositTokenTxInput](#GRpcClient.DepositTokenTxInput) : `Object`
      * [AcquireAssetTxInput](#GRpcClient.AcquireAssetTxInput) : `Object`
      * [StakeTxInput](#GRpcClient.StakeTxInput) : `Object`

<a name="new_GRpcClient_new"></a>

### new GRpcClient(config)

Creates an instance of GRpcClient, and generate transaction sending and receiving methods

| Param             | Type                 | Default                                           | Description                                                     |
| ----------------- | -------------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| config            | `object` \| `string` | `tcp://127.0.0.1:28210`                           | config object, if a string passed, will be used as the endpoint |
| [config.endpoint] | `string`             | `&quot;\&quot;tcp://127.0.0.1:28210\&quot;&quot;` | grpc endpoint the client can connect to                         |
| [config.chainId]  | `string`             | `&quot;\&quot;\&quot;&quot;`                      | chainId used to construct transaction                           |

<a name="GRpcClient+getType"></a>

### gRpcClient.getType(x) ⇒ `class` \| `null`

Get protobuf message class by name, only supports forge-built-in types

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `class` \| `null` - message type  

| Param | Type     |
| ----- | -------- |
| x     | `string` |

<a name="GRpcClient+decodeTx"></a>

### gRpcClient.decodeTx(buffer) ⇒ `object`

Decode transaction buffer to an object

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `object` - transaction object  

| Param  | Type     |
| ------ | -------- |
| buffer | `buffer` |

<a name="GRpcClient+getRpcMethods"></a>

### gRpcClient.getRpcMethods() ⇒ `object`

List standard rpc methods

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient+getTxSendMethods"></a>

### gRpcClient.getTxSendMethods() ⇒ `object`

List generated transaction send methods

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient+getTxEncodeMethods"></a>

### gRpcClient.getTxEncodeMethods() ⇒ `object`

List generated transaction send methods

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient+getTxSignMethods"></a>

### gRpcClient.getTxSignMethods() ⇒ `object`

List generated transaction sign methods

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient+getTxMultiSignMethods"></a>

### gRpcClient.getTxMultiSignMethods() ⇒ `object`

List generated transaction multi sign methods

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient+createTx"></a>

### gRpcClient.createTx(params) ⇒ [`Promise.&lt;ResponseCreateTx&gt;`](#GRpcClient.ResponseCreateTx)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestCreateTx`](#GRpcClient.RequestCreateTx) |

<a name="GRpcClient+multisig"></a>

### gRpcClient.multisig(params) ⇒ [`Promise.&lt;ResponseMultisig&gt;`](#GRpcClient.ResponseMultisig)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestMultisig`](#GRpcClient.RequestMultisig) |

<a name="GRpcClient+sendTx"></a>

### gRpcClient.sendTx(params) ⇒ [`Promise.&lt;ResponseSendTx&gt;`](#GRpcClient.ResponseSendTx)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                         |
| ------ | -------------------------------------------- |
| params | [`RequestSendTx`](#GRpcClient.RequestSendTx) |

<a name="GRpcClient+getTx"></a>

### gRpcClient.getTx(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetTx](#GRpcClient.ResponseGetTx) for payload format.  

| Param  | Type                                       |
| ------ | ------------------------------------------ |
| params | [`RequestGetTx`](#GRpcClient.RequestGetTx) |

<a name="GRpcClient+getBlock"></a>

### gRpcClient.getBlock(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetBlock](#GRpcClient.ResponseGetBlock) for payload format.  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestGetBlock`](#GRpcClient.RequestGetBlock) |

<a name="GRpcClient+getBlocks"></a>

### gRpcClient.getBlocks(params) ⇒ [`Promise.&lt;ResponseGetBlocks&gt;`](#GRpcClient.ResponseGetBlocks)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestGetBlocks`](#GRpcClient.RequestGetBlocks) |

<a name="GRpcClient+getUnconfirmedTxs"></a>

### gRpcClient.getUnconfirmedTxs(params) ⇒ [`Promise.&lt;ResponseGetUnconfirmedTxs&gt;`](#GRpcClient.ResponseGetUnconfirmedTxs)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [`RequestGetUnconfirmedTxs`](#GRpcClient.RequestGetUnconfirmedTxs) |

<a name="GRpcClient+getChainInfo"></a>

### gRpcClient.getChainInfo(params) ⇒ [`Promise.&lt;ResponseGetChainInfo&gt;`](#GRpcClient.ResponseGetChainInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RequestGetChainInfo`](#GRpcClient.RequestGetChainInfo) |

<a name="GRpcClient+getNodeInfo"></a>

### gRpcClient.getNodeInfo(params) ⇒ [`Promise.&lt;ResponseGetNodeInfo&gt;`](#GRpcClient.ResponseGetNodeInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestGetNodeInfo`](#GRpcClient.RequestGetNodeInfo) |

<a name="GRpcClient+search"></a>

### gRpcClient.search(params) ⇒ [`Promise.&lt;ResponseSearch&gt;`](#GRpcClient.ResponseSearch)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                         |
| ------ | -------------------------------------------- |
| params | [`RequestSearch`](#GRpcClient.RequestSearch) |

<a name="GRpcClient+getNetInfo"></a>

### gRpcClient.getNetInfo(params) ⇒ [`Promise.&lt;ResponseGetNetInfo&gt;`](#GRpcClient.ResponseGetNetInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestGetNetInfo`](#GRpcClient.RequestGetNetInfo) |

<a name="GRpcClient+getValidatorsInfo"></a>

### gRpcClient.getValidatorsInfo(params) ⇒ [`Promise.&lt;ResponseGetValidatorsInfo&gt;`](#GRpcClient.ResponseGetValidatorsInfo)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [`RequestGetValidatorsInfo`](#GRpcClient.RequestGetValidatorsInfo) |

<a name="GRpcClient+getConfig"></a>

### gRpcClient.getConfig(params) ⇒ [`Promise.&lt;ResponseGetConfig&gt;`](#GRpcClient.ResponseGetConfig)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestGetConfig`](#GRpcClient.RequestGetConfig) |

<a name="GRpcClient+subscribe"></a>

### gRpcClient.subscribe(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseSubscribe](#GRpcClient.ResponseSubscribe) for payload format.  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestSubscribe`](#GRpcClient.RequestSubscribe) |

<a name="GRpcClient+unsubscribe"></a>

### gRpcClient.unsubscribe(params) ⇒ [`Promise.&lt;ResponseUnsubscribe&gt;`](#GRpcClient.ResponseUnsubscribe)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestUnsubscribe`](#GRpcClient.RequestUnsubscribe) |

<a name="GRpcClient+storeFile"></a>

### gRpcClient.storeFile(params) ⇒ [`Promise.&lt;ResponseStoreFile&gt;`](#GRpcClient.ResponseStoreFile)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`RequestStoreFile`](#GRpcClient.RequestStoreFile) |

<a name="GRpcClient+loadFile"></a>

### gRpcClient.loadFile(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseLoadFile](#GRpcClient.ResponseLoadFile) for payload format.  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestLoadFile`](#GRpcClient.RequestLoadFile) |

<a name="GRpcClient+pinFile"></a>

### gRpcClient.pinFile(params) ⇒ [`Promise.&lt;ResponsePinFile&gt;`](#GRpcClient.ResponsePinFile)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                           |
| ------ | ---------------------------------------------- |
| params | [`RequestPinFile`](#GRpcClient.RequestPinFile) |

<a name="GRpcClient+getAccountState"></a>

### gRpcClient.getAccountState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetAccountState](#GRpcClient.ResponseGetAccountState) for payload format.  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`RequestGetAccountState`](#GRpcClient.RequestGetAccountState) |

<a name="GRpcClient+getAssetState"></a>

### gRpcClient.getAssetState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetAssetState](#GRpcClient.ResponseGetAssetState) for payload format.  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetAssetState`](#GRpcClient.RequestGetAssetState) |

<a name="GRpcClient+getForgeState"></a>

### gRpcClient.getForgeState(params) ⇒ [`Promise.&lt;ResponseGetForgeState&gt;`](#GRpcClient.ResponseGetForgeState)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetForgeState`](#GRpcClient.RequestGetForgeState) |

<a name="GRpcClient+getProtocolState"></a>

### gRpcClient.getProtocolState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetProtocolState](#GRpcClient.ResponseGetProtocolState) for payload format.  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`RequestGetProtocolState`](#GRpcClient.RequestGetProtocolState) |

<a name="GRpcClient+getStakeState"></a>

### gRpcClient.getStakeState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetStakeState](#GRpcClient.ResponseGetStakeState) for payload format.  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetStakeState`](#GRpcClient.RequestGetStakeState) |

<a name="GRpcClient+getTetherState"></a>

### gRpcClient.getTetherState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetTetherState](#GRpcClient.ResponseGetTetherState) for payload format.  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`RequestGetTetherState`](#GRpcClient.RequestGetTetherState) |

<a name="GRpcClient+getSwapState"></a>

### gRpcClient.getSwapState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetSwapState](#GRpcClient.ResponseGetSwapState) for payload format.  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RequestGetSwapState`](#GRpcClient.RequestGetSwapState) |

<a name="GRpcClient+getDelegateState"></a>

### gRpcClient.getDelegateState(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseGetDelegateState](#GRpcClient.ResponseGetDelegateState) for payload format.  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`RequestGetDelegateState`](#GRpcClient.RequestGetDelegateState) |

<a name="GRpcClient+createWallet"></a>

### gRpcClient.createWallet(params) ⇒ [`Promise.&lt;ResponseCreateWallet&gt;`](#GRpcClient.ResponseCreateWallet)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RequestCreateWallet`](#GRpcClient.RequestCreateWallet) |

<a name="GRpcClient+loadWallet"></a>

### gRpcClient.loadWallet(params) ⇒ [`Promise.&lt;ResponseLoadWallet&gt;`](#GRpcClient.ResponseLoadWallet)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestLoadWallet`](#GRpcClient.RequestLoadWallet) |

<a name="GRpcClient+recoverWallet"></a>

### gRpcClient.recoverWallet(params) ⇒ [`Promise.&lt;ResponseRecoverWallet&gt;`](#GRpcClient.ResponseRecoverWallet)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestRecoverWallet`](#GRpcClient.RequestRecoverWallet) |

<a name="GRpcClient+listWallet"></a>

### gRpcClient.listWallet(params) ⇒ `EventEmitter`

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `EventEmitter` - EventEmitter that emits `data` event when new data received, checkout [ResponseListWallet](#GRpcClient.ResponseListWallet) for payload format.  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListWallet`](#GRpcClient.RequestListWallet) |

<a name="GRpcClient+removeWallet"></a>

### gRpcClient.removeWallet(params) ⇒ [`Promise.&lt;ResponseRemoveWallet&gt;`](#GRpcClient.ResponseRemoveWallet)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RequestRemoveWallet`](#GRpcClient.RequestRemoveWallet) |

<a name="GRpcClient+declareNode"></a>

### gRpcClient.declareNode(params) ⇒ [`Promise.&lt;ResponseDeclareNode&gt;`](#GRpcClient.ResponseDeclareNode)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestDeclareNode`](#GRpcClient.RequestDeclareNode) |

<a name="GRpcClient+getForgeStats"></a>

### gRpcClient.getForgeStats(params) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GRpcClient.ResponseGetForgeStats)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`RequestGetForgeStats`](#GRpcClient.RequestGetForgeStats) |

<a name="GRpcClient+listTransactions"></a>

### gRpcClient.listTransactions(params) ⇒ [`Promise.&lt;ResponseListTransactions&gt;`](#GRpcClient.ResponseListTransactions)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`RequestListTransactions`](#GRpcClient.RequestListTransactions) |

<a name="GRpcClient+listAssets"></a>

### gRpcClient.listAssets(params) ⇒ [`Promise.&lt;ResponseListAssets&gt;`](#GRpcClient.ResponseListAssets)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListAssets`](#GRpcClient.RequestListAssets) |

<a name="GRpcClient+listStakes"></a>

### gRpcClient.listStakes(params) ⇒ [`Promise.&lt;ResponseListStakes&gt;`](#GRpcClient.ResponseListStakes)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListStakes`](#GRpcClient.RequestListStakes) |

<a name="GRpcClient+listAccount"></a>

### gRpcClient.listAccount(params) ⇒ [`Promise.&lt;ResponseListAccount&gt;`](#GRpcClient.ResponseListAccount)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestListAccount`](#GRpcClient.RequestListAccount) |

<a name="GRpcClient+listTopAccounts"></a>

### gRpcClient.listTopAccounts(params) ⇒ [`Promise.&lt;ResponseListTopAccounts&gt;`](#GRpcClient.ResponseListTopAccounts)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`RequestListTopAccounts`](#GRpcClient.RequestListTopAccounts) |

<a name="GRpcClient+listAssetTransactions"></a>

### gRpcClient.listAssetTransactions(params) ⇒ [`Promise.&lt;ResponseListAssetTransactions&gt;`](#GRpcClient.ResponseListAssetTransactions)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [`RequestListAssetTransactions`](#GRpcClient.RequestListAssetTransactions) |

<a name="GRpcClient+listBlocks"></a>

### gRpcClient.listBlocks(params) ⇒ [`Promise.&lt;ResponseListBlocks&gt;`](#GRpcClient.ResponseListBlocks)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RequestListBlocks`](#GRpcClient.RequestListBlocks) |

<a name="GRpcClient+getHealthStatus"></a>

### gRpcClient.getHealthStatus(params) ⇒ [`Promise.&lt;ResponseGetHealthStatus&gt;`](#GRpcClient.ResponseGetHealthStatus)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`RequestGetHealthStatus`](#GRpcClient.RequestGetHealthStatus) |

<a name="GRpcClient+listTethers"></a>

### gRpcClient.listTethers(params) ⇒ [`Promise.&lt;ResponseListTethers&gt;`](#GRpcClient.ResponseListTethers)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`RequestListTethers`](#GRpcClient.RequestListTethers) |

<a name="GRpcClient+listSwap"></a>

### gRpcClient.listSwap(params) ⇒ [`Promise.&lt;ResponseListSwap&gt;`](#GRpcClient.ResponseListSwap)

Send gRPC call and return the result

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`RequestListSwap`](#GRpcClient.RequestListSwap) |

<a name="GRpcClient+sendConsensusUpgradeTx"></a>

### gRpcClient.sendConsensusUpgradeTx(params) ⇒ `Promise.&lt;string&gt;`

Send ConsensusUpgradeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`ConsensusUpgradeTxInput`](#GRpcClient.ConsensusUpgradeTxInput) |

<a name="GRpcClient+sendDeployProtocolTx"></a>

### gRpcClient.sendDeployProtocolTx(params) ⇒ `Promise.&lt;string&gt;`

Send DeployProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`DeployProtocolTxInput`](#GRpcClient.DeployProtocolTxInput) |

<a name="GRpcClient+sendSysUpgradeTx"></a>

### gRpcClient.sendSysUpgradeTx(params) ⇒ `Promise.&lt;string&gt;`

Send SysUpgradeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`SysUpgradeTxInput`](#GRpcClient.SysUpgradeTxInput) |

<a name="GRpcClient+sendRevokeWithdrawTx"></a>

### gRpcClient.sendRevokeWithdrawTx(params) ⇒ `Promise.&lt;string&gt;`

Send RevokeWithdrawTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`RevokeWithdrawTxInput`](#GRpcClient.RevokeWithdrawTxInput) |

<a name="GRpcClient+sendWithdrawTokenTx"></a>

### gRpcClient.sendWithdrawTokenTx(params) ⇒ `Promise.&lt;string&gt;`

Send WithdrawTokenTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`WithdrawTokenTxInput`](#GRpcClient.WithdrawTokenTxInput) |

<a name="GRpcClient+sendDelegateTx"></a>

### gRpcClient.sendDelegateTx(params) ⇒ `Promise.&lt;string&gt;`

Send DelegateTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`DelegateTxInput`](#GRpcClient.DelegateTxInput) |

<a name="GRpcClient+sendAccountMigrateTx"></a>

### gRpcClient.sendAccountMigrateTx(params) ⇒ `Promise.&lt;string&gt;`

Send AccountMigrateTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`AccountMigrateTxInput`](#GRpcClient.AccountMigrateTxInput) |

<a name="GRpcClient+sendDeclareTx"></a>

### gRpcClient.sendDeclareTx(params) ⇒ `Promise.&lt;string&gt;`

Send DeclareTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                           |
| ------ | ---------------------------------------------- |
| params | [`DeclareTxInput`](#GRpcClient.DeclareTxInput) |

<a name="GRpcClient+sendRetrieveSwapTx"></a>

### gRpcClient.sendRetrieveSwapTx(params) ⇒ `Promise.&lt;string&gt;`

Send RetrieveSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RetrieveSwapTxInput`](#GRpcClient.RetrieveSwapTxInput) |

<a name="GRpcClient+sendTransferTx"></a>

### gRpcClient.sendTransferTx(params) ⇒ `Promise.&lt;string&gt;`

Send TransferTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`TransferTxInput`](#GRpcClient.TransferTxInput) |

<a name="GRpcClient+sendRevokeTetherTx"></a>

### gRpcClient.sendRevokeTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send RevokeTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RevokeTetherTxInput`](#GRpcClient.RevokeTetherTxInput) |

<a name="GRpcClient+sendDeactivateProtocolTx"></a>

### gRpcClient.sendDeactivateProtocolTx(params) ⇒ `Promise.&lt;string&gt;`

Send DeactivateProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [`DeactivateProtocolTxInput`](#GRpcClient.DeactivateProtocolTxInput) |

<a name="GRpcClient+sendPokeTx"></a>

### gRpcClient.sendPokeTx(params) ⇒ `Promise.&lt;string&gt;`

Send PokeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | [`PokeTxInput`](#GRpcClient.PokeTxInput) |

<a name="GRpcClient+checkin"></a>

### gRpcClient.checkin(params) ⇒ `Promise.&lt;string&gt;`

Send PokeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | [`PokeTxInput`](#GRpcClient.PokeTxInput) |

<a name="GRpcClient+sendCreateAssetTx"></a>

### gRpcClient.sendCreateAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send CreateAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`CreateAssetTxInput`](#GRpcClient.CreateAssetTxInput) |

<a name="GRpcClient+sendDepositTetherTx"></a>

### gRpcClient.sendDepositTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send DepositTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`DepositTetherTxInput`](#GRpcClient.DepositTetherTxInput) |

<a name="GRpcClient+sendExchangeTetherTx"></a>

### gRpcClient.sendExchangeTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send ExchangeTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`ExchangeTetherTxInput`](#GRpcClient.ExchangeTetherTxInput) |

<a name="GRpcClient+sendConsumeAssetTx"></a>

### gRpcClient.sendConsumeAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send ConsumeAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`ConsumeAssetTxInput`](#GRpcClient.ConsumeAssetTxInput) |

<a name="GRpcClient+sendSetupSwapTx"></a>

### gRpcClient.sendSetupSwapTx(params) ⇒ `Promise.&lt;string&gt;`

Send SetupSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`SetupSwapTxInput`](#GRpcClient.SetupSwapTxInput) |

<a name="GRpcClient+sendApproveWithdrawTx"></a>

### gRpcClient.sendApproveWithdrawTx(params) ⇒ `Promise.&lt;string&gt;`

Send ApproveWithdrawTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`ApproveWithdrawTxInput`](#GRpcClient.ApproveWithdrawTxInput) |

<a name="GRpcClient+sendUpdateAssetTx"></a>

### gRpcClient.sendUpdateAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send UpdateAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`UpdateAssetTxInput`](#GRpcClient.UpdateAssetTxInput) |

<a name="GRpcClient+sendRevokeSwapTx"></a>

### gRpcClient.sendRevokeSwapTx(params) ⇒ `Promise.&lt;string&gt;`

Send RevokeSwapTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RevokeSwapTxInput`](#GRpcClient.RevokeSwapTxInput) |

<a name="GRpcClient+sendExchangeTx"></a>

### gRpcClient.sendExchangeTx(params) ⇒ `Promise.&lt;string&gt;`

Send ExchangeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`ExchangeTxInput`](#GRpcClient.ExchangeTxInput) |

<a name="GRpcClient+sendWithdrawTetherTx"></a>

### gRpcClient.sendWithdrawTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send WithdrawTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`WithdrawTetherTxInput`](#GRpcClient.WithdrawTetherTxInput) |

<a name="GRpcClient+sendActivateProtocolTx"></a>

### gRpcClient.sendActivateProtocolTx(params) ⇒ `Promise.&lt;string&gt;`

Send ActivateProtocolTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`ActivateProtocolTxInput`](#GRpcClient.ActivateProtocolTxInput) |

<a name="GRpcClient+sendApproveTetherTx"></a>

### gRpcClient.sendApproveTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send ApproveTetherTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`ApproveTetherTxInput`](#GRpcClient.ApproveTetherTxInput) |

<a name="GRpcClient+sendUpgradeNodeTx"></a>

### gRpcClient.sendUpgradeNodeTx(params) ⇒ `Promise.&lt;string&gt;`

Send UpgradeNodeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`UpgradeNodeTxInput`](#GRpcClient.UpgradeNodeTxInput) |

<a name="GRpcClient+sendDepositTokenTx"></a>

### gRpcClient.sendDepositTokenTx(params) ⇒ `Promise.&lt;string&gt;`

Send DepositTokenTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`DepositTokenTxInput`](#GRpcClient.DepositTokenTxInput) |

<a name="GRpcClient+sendAcquireAssetTx"></a>

### gRpcClient.sendAcquireAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send AcquireAssetTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`AcquireAssetTxInput`](#GRpcClient.AcquireAssetTxInput) |

<a name="GRpcClient+sendStakeTx"></a>

### gRpcClient.sendStakeTx(params) ⇒ `Promise.&lt;string&gt;`

Send StakeTx transaction and get the hash, use [getTx](#GRpcClient+getTx) to get transaction detail

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                       |
| ------ | ------------------------------------------ |
| params | [`StakeTxInput`](#GRpcClient.StakeTxInput) |

<a name="GRpcClient+encodeConsensusUpgradeTx"></a>

### gRpcClient.encodeConsensusUpgradeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ConsensusUpgradeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`ConsensusUpgradeTxInput`](#GRpcClient.ConsensusUpgradeTxInput) |

<a name="GRpcClient+encodeDeployProtocolTx"></a>

### gRpcClient.encodeDeployProtocolTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a DeployProtocolTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`DeployProtocolTxInput`](#GRpcClient.DeployProtocolTxInput) |

<a name="GRpcClient+encodeSysUpgradeTx"></a>

### gRpcClient.encodeSysUpgradeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a SysUpgradeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`SysUpgradeTxInput`](#GRpcClient.SysUpgradeTxInput) |

<a name="GRpcClient+encodeRevokeWithdrawTx"></a>

### gRpcClient.encodeRevokeWithdrawTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a RevokeWithdrawTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`RevokeWithdrawTxInput`](#GRpcClient.RevokeWithdrawTxInput) |

<a name="GRpcClient+encodeWithdrawTokenTx"></a>

### gRpcClient.encodeWithdrawTokenTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a WithdrawTokenTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`WithdrawTokenTxInput`](#GRpcClient.WithdrawTokenTxInput) |

<a name="GRpcClient+encodeDelegateTx"></a>

### gRpcClient.encodeDelegateTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a DelegateTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`DelegateTxInput`](#GRpcClient.DelegateTxInput) |

<a name="GRpcClient+encodeAccountMigrateTx"></a>

### gRpcClient.encodeAccountMigrateTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a AccountMigrateTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`AccountMigrateTxInput`](#GRpcClient.AccountMigrateTxInput) |

<a name="GRpcClient+encodeDeclareTx"></a>

### gRpcClient.encodeDeclareTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a DeclareTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                           |
| ------ | ---------------------------------------------- |
| params | [`DeclareTxInput`](#GRpcClient.DeclareTxInput) |

<a name="GRpcClient+encodeRetrieveSwapTx"></a>

### gRpcClient.encodeRetrieveSwapTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a RetrieveSwapTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RetrieveSwapTxInput`](#GRpcClient.RetrieveSwapTxInput) |

<a name="GRpcClient+encodeTransferTx"></a>

### gRpcClient.encodeTransferTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a TransferTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`TransferTxInput`](#GRpcClient.TransferTxInput) |

<a name="GRpcClient+encodeRevokeTetherTx"></a>

### gRpcClient.encodeRevokeTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a RevokeTetherTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`RevokeTetherTxInput`](#GRpcClient.RevokeTetherTxInput) |

<a name="GRpcClient+encodeDeactivateProtocolTx"></a>

### gRpcClient.encodeDeactivateProtocolTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a DeactivateProtocolTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [`DeactivateProtocolTxInput`](#GRpcClient.DeactivateProtocolTxInput) |

<a name="GRpcClient+encodePokeTx"></a>

### gRpcClient.encodePokeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a PokeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                     |
| ------ | ---------------------------------------- |
| params | [`PokeTxInput`](#GRpcClient.PokeTxInput) |

<a name="GRpcClient+encodeCreateAssetTx"></a>

### gRpcClient.encodeCreateAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a CreateAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`CreateAssetTxInput`](#GRpcClient.CreateAssetTxInput) |

<a name="GRpcClient+encodeDepositTetherTx"></a>

### gRpcClient.encodeDepositTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a DepositTetherTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`DepositTetherTxInput`](#GRpcClient.DepositTetherTxInput) |

<a name="GRpcClient+encodeExchangeTetherTx"></a>

### gRpcClient.encodeExchangeTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ExchangeTetherTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`ExchangeTetherTxInput`](#GRpcClient.ExchangeTetherTxInput) |

<a name="GRpcClient+encodeConsumeAssetTx"></a>

### gRpcClient.encodeConsumeAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ConsumeAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`ConsumeAssetTxInput`](#GRpcClient.ConsumeAssetTxInput) |

<a name="GRpcClient+encodeSetupSwapTx"></a>

### gRpcClient.encodeSetupSwapTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a SetupSwapTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                               |
| ------ | -------------------------------------------------- |
| params | [`SetupSwapTxInput`](#GRpcClient.SetupSwapTxInput) |

<a name="GRpcClient+encodeApproveWithdrawTx"></a>

### gRpcClient.encodeApproveWithdrawTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ApproveWithdrawTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [`ApproveWithdrawTxInput`](#GRpcClient.ApproveWithdrawTxInput) |

<a name="GRpcClient+encodeUpdateAssetTx"></a>

### gRpcClient.encodeUpdateAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a UpdateAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`UpdateAssetTxInput`](#GRpcClient.UpdateAssetTxInput) |

<a name="GRpcClient+encodeRevokeSwapTx"></a>

### gRpcClient.encodeRevokeSwapTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a RevokeSwapTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                 |
| ------ | ---------------------------------------------------- |
| params | [`RevokeSwapTxInput`](#GRpcClient.RevokeSwapTxInput) |

<a name="GRpcClient+encodeExchangeTx"></a>

### gRpcClient.encodeExchangeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ExchangeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                             |
| ------ | ------------------------------------------------ |
| params | [`ExchangeTxInput`](#GRpcClient.ExchangeTxInput) |

<a name="GRpcClient+encodeWithdrawTetherTx"></a>

### gRpcClient.encodeWithdrawTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a WithdrawTetherTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [`WithdrawTetherTxInput`](#GRpcClient.WithdrawTetherTxInput) |

<a name="GRpcClient+encodeActivateProtocolTx"></a>

### gRpcClient.encodeActivateProtocolTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ActivateProtocolTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [`ActivateProtocolTxInput`](#GRpcClient.ActivateProtocolTxInput) |

<a name="GRpcClient+encodeApproveTetherTx"></a>

### gRpcClient.encodeApproveTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a ApproveTetherTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                       |
| ------ | ---------------------------------------------------------- |
| params | [`ApproveTetherTxInput`](#GRpcClient.ApproveTetherTxInput) |

<a name="GRpcClient+encodeUpgradeNodeTx"></a>

### gRpcClient.encodeUpgradeNodeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a UpgradeNodeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [`UpgradeNodeTxInput`](#GRpcClient.UpgradeNodeTxInput) |

<a name="GRpcClient+encodeDepositTokenTx"></a>

### gRpcClient.encodeDepositTokenTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a DepositTokenTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`DepositTokenTxInput`](#GRpcClient.DepositTokenTxInput) |

<a name="GRpcClient+encodeAcquireAssetTx"></a>

### gRpcClient.encodeAcquireAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a AcquireAssetTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [`AcquireAssetTxInput`](#GRpcClient.AcquireAssetTxInput) |

<a name="GRpcClient+encodeStakeTx"></a>

### gRpcClient.encodeStakeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput)

Encode a StakeTx transaction for later use

**Kind**: instance method of [`GRpcClient`](#GRpcClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GRpcClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                       |
| ------ | ------------------------------------------ |
| params | [`StakeTxInput`](#GRpcClient.StakeTxInput) |

<a name="GRpcClient.TxEncodeOutput"></a>

### GRpcClient.TxEncodeOutput : `object`

Structure of GRpcClient.TxEncodeOutput

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     | Description                                                                            |
| ------ | -------- | -------------------------------------------------------------------------------------- |
| object | `object` | the transaction object, human readable                                                 |
| buffer | `buffer` | the transaction binary presentation, can be used to signing, encoding to other formats |

<a name="GRpcClient.RequestCreateTx"></a>

### GRpcClient.RequestCreateTx : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| itx    | [`Any`](#GRpcClient.Any)               |
| from   | `string`                               |
| nonce  | `number`                               |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo) |
| token  | `string`                               |

<a name="GRpcClient.ResponseCreateTx"></a>

### GRpcClient.ResponseCreateTx : `object`

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

| Name | Type                                     |
| ---- | ---------------------------------------- |
| code | `GRpcClient.StatusCode`                  |
| tx   | [`Transaction`](#GRpcClient.Transaction) |

<a name="GRpcClient.RequestMultisig"></a>

### GRpcClient.RequestMultisig : `object`

Structure of GRpcClient.RequestMultisig

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
  "token": "arcblock",
  "delegatee": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                     |
| --------- | ---------------------------------------- |
| tx        | [`Transaction`](#GRpcClient.Transaction) |
| data      | [`Any`](#GRpcClient.Any)                 |
| wallet    | [`WalletInfo`](#GRpcClient.WalletInfo)   |
| token     | `string`                                 |
| delegatee | `string`                                 |

<a name="GRpcClient.ResponseMultisig"></a>

### GRpcClient.ResponseMultisig : `object`

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

| Name | Type                                     |
| ---- | ---------------------------------------- |
| code | `GRpcClient.StatusCode`                  |
| tx   | [`Transaction`](#GRpcClient.Transaction) |

<a name="GRpcClient.RequestSendTx"></a>

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

<a name="GRpcClient.ResponseSendTx"></a>

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

<a name="GRpcClient.RequestGetTx"></a>

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

<a name="GRpcClient.ResponseGetTx"></a>

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
    "time": "2019-10-10T00:35:13.217Z"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                             |
| ---- | ------------------------------------------------ |
| code | `GRpcClient.StatusCode`                          |
| info | [`TransactionInfo`](#GRpcClient.TransactionInfo) |

<a name="GRpcClient.RequestGetBlock"></a>

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

<a name="GRpcClient.ResponseGetBlock"></a>

### GRpcClient.ResponseGetBlock : `object`

Structure of GRpcClient.ResponseGetBlock

```javascript
{
  "code": 0,
  "block": {
    "height": 5,
    "numTxs": 2,
    "time": "2019-10-10T00:35:13.210Z",
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
        "time": "2019-10-10T00:35:13.210Z"
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
        "time": "2019-10-10T00:35:13.210Z"
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
        "time": "2019-10-10T00:35:13.210Z"
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
        "time": "2019-10-10T00:35:13.211Z"
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

<a name="GRpcClient.RequestGetBlocks"></a>

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

<a name="GRpcClient.ResponseGetBlocks"></a>

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
      "time": "2019-10-10T00:35:13.211Z",
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
      "time": "2019-10-10T00:35:13.211Z",
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

| Name   | Type                                                           |
| ------ | -------------------------------------------------------------- |
| code   | `GRpcClient.StatusCode`                                        |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                             |
| blocks | [`Array.&lt;BlockInfoSimple&gt;`](#GRpcClient.BlockInfoSimple) |

<a name="GRpcClient.RequestCreateWallet"></a>

### GRpcClient.RequestCreateWallet : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                   |
| ---------- | -------------------------------------- |
| passphrase | `string`                               |
| type       | [`WalletType`](#GRpcClient.WalletType) |
| moniker    | `string`                               |

<a name="GRpcClient.ResponseCreateWallet"></a>

### GRpcClient.ResponseCreateWallet : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| code   | `GRpcClient.StatusCode`                |
| token  | `string`                               |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestLoadWallet"></a>

### GRpcClient.RequestLoadWallet : `object`

Structure of GRpcClient.RequestLoadWallet

```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "passphrase": "arcblock"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type     |
| ---------- | -------- |
| address    | `string` |
| passphrase | `string` |

<a name="GRpcClient.ResponseLoadWallet"></a>

### GRpcClient.ResponseLoadWallet : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| code   | `GRpcClient.StatusCode`                |
| token  | `string`                               |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestRecoverWallet"></a>

### GRpcClient.RequestRecoverWallet : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                   |
| ---------- | -------------------------------------- |
| data       | `Uint8Array`                           |
| type       | [`WalletType`](#GRpcClient.WalletType) |
| passphrase | `string`                               |
| moniker    | `string`                               |

<a name="GRpcClient.ResponseRecoverWallet"></a>

### GRpcClient.ResponseRecoverWallet : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| code   | `GRpcClient.StatusCode`                |
| token  | `string`                               |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestListWallet"></a>

### GRpcClient.RequestListWallet : `object`

Structure of GRpcClient.RequestListWallet

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.ResponseListWallet"></a>

### GRpcClient.ResponseListWallet : `object`

Structure of GRpcClient.ResponseListWallet

```javascript
{
  "code": 0,
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                    |
| ------- | ----------------------- |
| code    | `GRpcClient.StatusCode` |
| address | `string`                |

<a name="GRpcClient.RequestRemoveWallet"></a>

### GRpcClient.RequestRemoveWallet : `object`

Structure of GRpcClient.RequestRemoveWallet

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

<a name="GRpcClient.ResponseRemoveWallet"></a>

### GRpcClient.ResponseRemoveWallet : `object`

Structure of GRpcClient.ResponseRemoveWallet

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

<a name="GRpcClient.RequestDeclareNode"></a>

### GRpcClient.RequestDeclareNode : `object`

Structure of GRpcClient.RequestDeclareNode

```javascript
{
  "validator": true
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type      |
| --------- | --------- |
| validator | `boolean` |

<a name="GRpcClient.ResponseDeclareNode"></a>

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
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                   |
| ------ | -------------------------------------- |
| code   | `GRpcClient.StatusCode`                |
| wallet | [`WalletInfo`](#GRpcClient.WalletInfo) |

<a name="GRpcClient.RequestGetAccountState"></a>

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

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetAccountState"></a>

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
      "genesisTime": "2019-10-10T00:35:13.213Z",
      "renaissanceTime": "2019-10-10T00:35:13.213Z"
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

<a name="GRpcClient.RequestGetAssetState"></a>

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

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetAssetState"></a>

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
    "consumedTime": "2019-10-10T00:35:13.213Z",
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
      "genesisTime": "2019-10-10T00:35:13.213Z",
      "renaissanceTime": "2019-10-10T00:35:13.213Z"
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

<a name="GRpcClient.RequestGetProtocolState"></a>

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

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetProtocolState"></a>

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
      "genesisTime": "2019-10-10T00:35:13.214Z",
      "renaissanceTime": "2019-10-10T00:35:13.214Z"
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

<a name="GRpcClient.RequestGetStakeState"></a>

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

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetStakeState"></a>

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
      "genesisTime": "2019-10-10T00:35:13.214Z",
      "renaissanceTime": "2019-10-10T00:35:13.214Z"
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

<a name="GRpcClient.RequestGetForgeState"></a>

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

| Name   | Type                   |
| ------ | ---------------------- |
| keys   | `Array.&lt;string&gt;` |
| height | `number`               |

<a name="GRpcClient.ResponseGetForgeState"></a>

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
          "genesisTime": "2019-10-10T00:35:13.213Z",
          "renaissanceTime": "2019-10-10T00:35:13.213Z"
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

<a name="GRpcClient.RequestGetTetherState"></a>

### GRpcClient.RequestGetTetherState : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetTetherState"></a>

### GRpcClient.ResponseGetTetherState : `object`

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
    "locktime": "2019-10-10T00:35:13.214Z",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                     |
| ----- | ---------------------------------------- |
| code  | `GRpcClient.StatusCode`                  |
| state | [`TetherState`](#GRpcClient.TetherState) |

<a name="GRpcClient.RequestGetSwapState"></a>

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

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetSwapState"></a>

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
      "genesisTime": "2019-10-10T00:35:13.214Z",
      "renaissanceTime": "2019-10-10T00:35:13.214Z"
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

<a name="GRpcClient.RequestGetDelegateState"></a>

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

| Name    | Type                   |
| ------- | ---------------------- |
| address | `string`               |
| keys    | `Array.&lt;string&gt;` |
| height  | `number`               |

<a name="GRpcClient.ResponseGetDelegateState"></a>

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
      "genesisTime": "2019-10-10T00:35:13.214Z",
      "renaissanceTime": "2019-10-10T00:35:13.214Z"
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

<a name="GRpcClient.RequestStoreFile"></a>

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

<a name="GRpcClient.ResponseStoreFile"></a>

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

<a name="GRpcClient.RequestLoadFile"></a>

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

<a name="GRpcClient.ResponseLoadFile"></a>

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

<a name="GRpcClient.RequestPinFile"></a>

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

<a name="GRpcClient.ResponsePinFile"></a>

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

<a name="GRpcClient.RequestGetChainInfo"></a>

### GRpcClient.RequestGetChainInfo : `object`

Structure of GRpcClient.RequestGetChainInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.ResponseGetChainInfo"></a>

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
    "blockTime": "2019-10-10T00:35:13.212Z",
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

<a name="GRpcClient.RequestGetNodeInfo"></a>

### GRpcClient.RequestGetNodeInfo : `object`

Structure of GRpcClient.RequestGetNodeInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.ResponseGetNodeInfo"></a>

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
    "blockTime": "2019-10-10T00:35:13.212Z",
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

<a name="GRpcClient.RequestSearch"></a>

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

<a name="GRpcClient.ResponseSearch"></a>

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
      "time": "2019-10-10T00:35:13.212Z"
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
      "time": "2019-10-10T00:35:13.212Z"
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                                           |
| ---- | -------------------------------------------------------------- |
| code | `GRpcClient.StatusCode`                                        |
| txs  | [`Array.&lt;TransactionInfo&gt;`](#GRpcClient.TransactionInfo) |

<a name="GRpcClient.RequestGetUnconfirmedTxs"></a>

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

<a name="GRpcClient.ResponseGetUnconfirmedTxs"></a>

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

<a name="GRpcClient.RequestGetNetInfo"></a>

### GRpcClient.RequestGetNetInfo : `object`

Structure of GRpcClient.RequestGetNetInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.ResponseGetNetInfo"></a>

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

<a name="GRpcClient.RequestGetValidatorsInfo"></a>

### GRpcClient.RequestGetValidatorsInfo : `object`

Structure of GRpcClient.RequestGetValidatorsInfo

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.ResponseGetValidatorsInfo"></a>

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

<a name="GRpcClient.RequestSubscribe"></a>

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

<a name="GRpcClient.ResponseSubscribe"></a>

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
| accountState       | [`AccountState`](#GRpcClient.AccountState)           |
| assetState         | [`AssetState`](#GRpcClient.AssetState)               |
| forgeState         | [`ForgeState`](#GRpcClient.ForgeState)               |
| stakeState         | [`StakeState`](#GRpcClient.StakeState)               |
| protocolState      | [`ProtocolState`](#GRpcClient.ProtocolState)         |
| delegateState      | [`DelegateState`](#GRpcClient.DelegateState)         |

<a name="GRpcClient.RequestUnsubscribe"></a>

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

<a name="GRpcClient.ResponseUnsubscribe"></a>

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

<a name="GRpcClient.RequestGetConfig"></a>

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

<a name="GRpcClient.ResponseGetConfig"></a>

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

<a name="GRpcClient.ByDay"></a>

### GRpcClient.ByDay : `object`

Structure of GRpcClient.ByDay

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type     |
| --------- | -------- |
| startDate | `string` |
| endDate   | `string` |

<a name="GRpcClient.ByHour"></a>

### GRpcClient.ByHour : `object`

Structure of GRpcClient.ByHour

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| date | `string` |

<a name="GRpcClient.RequestGetForgeStats"></a>

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

<a name="GRpcClient.ResponseGetForgeStats"></a>

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

<a name="GRpcClient.RequestListTransactions"></a>

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

<a name="GRpcClient.ResponseListTransactions"></a>

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

| Name         | Type                                                                 |
| ------------ | -------------------------------------------------------------------- |
| code         | `GRpcClient.StatusCode`                                              |
| page         | [`PageInfo`](#GRpcClient.PageInfo)                                   |
| transactions | [`Array.&lt;IndexedTransaction&gt;`](#GRpcClient.IndexedTransaction) |

<a name="GRpcClient.RequestListAssets"></a>

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

<a name="GRpcClient.ResponseListAssets"></a>

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

| Name   | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| code   | `GRpcClient.StatusCode`                                            |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                                 |
| assets | [`Array.&lt;IndexedAssetState&gt;`](#GRpcClient.IndexedAssetState) |

<a name="GRpcClient.RequestListStakes"></a>

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

<a name="GRpcClient.ResponseListStakes"></a>

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

| Name   | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| code   | `GRpcClient.StatusCode`                                            |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                                 |
| stakes | [`Array.&lt;IndexedStakeState&gt;`](#GRpcClient.IndexedStakeState) |

<a name="GRpcClient.RequestListAccount"></a>

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

<a name="GRpcClient.ResponseListAccount"></a>

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

<a name="GRpcClient.RequestListTopAccounts"></a>

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

<a name="GRpcClient.ResponseListTopAccounts"></a>

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

| Name     | Type                                                                   |
| -------- | ---------------------------------------------------------------------- |
| code     | `GRpcClient.StatusCode`                                                |
| page     | [`PageInfo`](#GRpcClient.PageInfo)                                     |
| accounts | [`Array.&lt;IndexedAccountState&gt;`](#GRpcClient.IndexedAccountState) |

<a name="GRpcClient.RequestListAssetTransactions"></a>

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

<a name="GRpcClient.ResponseListAssetTransactions"></a>

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

| Name         | Type                                                                 |
| ------------ | -------------------------------------------------------------------- |
| code         | `GRpcClient.StatusCode`                                              |
| page         | [`PageInfo`](#GRpcClient.PageInfo)                                   |
| transactions | [`Array.&lt;IndexedTransaction&gt;`](#GRpcClient.IndexedTransaction) |

<a name="GRpcClient.RequestListBlocks"></a>

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

<a name="GRpcClient.ResponseListBlocks"></a>

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

| Name   | Type                                                     |
| ------ | -------------------------------------------------------- |
| code   | `GRpcClient.StatusCode`                                  |
| page   | [`PageInfo`](#GRpcClient.PageInfo)                       |
| blocks | [`Array.&lt;IndexedBlock&gt;`](#GRpcClient.IndexedBlock) |

<a name="GRpcClient.RequestListTethers"></a>

### GRpcClient.RequestListTethers : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                 |
| ---------- | ------------------------------------ |
| paging     | [`PageInput`](#GRpcClient.PageInput) |
| depositor  | `string`                             |
| withdrawer | `string`                             |
| custodian  | `string`                             |
| available  | `boolean`                            |

<a name="GRpcClient.ResponseListTethers"></a>

### GRpcClient.ResponseListTethers : `object`

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
      "locktime": "2019-10-10T00:35:13.216Z",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "available": true,
      "custodian": "arcblock",
      "depositor": "arcblock",
      "withdrawer": "arcblock",
      "target": "arcblock",
      "locktime": "2019-10-10T00:35:13.216Z",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                                   |
| ------- | ------------------------------------------------------ |
| code    | `GRpcClient.StatusCode`                                |
| page    | [`PageInfo`](#GRpcClient.PageInfo)                     |
| tethers | [`Array.&lt;TetherState&gt;`](#GRpcClient.TetherState) |

<a name="GRpcClient.RequestListSwap"></a>

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

<a name="GRpcClient.ResponseListSwap"></a>

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
        "genesisTime": "2019-10-10T00:35:13.216Z",
        "renaissanceTime": "2019-10-10T00:35:13.216Z"
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
        "genesisTime": "2019-10-10T00:35:13.216Z",
        "renaissanceTime": "2019-10-10T00:35:13.216Z"
      }
    }
  ]
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                               |
| ---- | -------------------------------------------------- |
| code | `GRpcClient.StatusCode`                            |
| page | [`PageInfo`](#GRpcClient.PageInfo)                 |
| swap | [`Array.&lt;SwapState&gt;`](#GRpcClient.SwapState) |

<a name="GRpcClient.RequestGetHealthStatus"></a>

### GRpcClient.RequestGetHealthStatus : `object`

Structure of GRpcClient.RequestGetHealthStatus

```javascript
{}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.ResponseGetHealthStatus"></a>

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

<a name="GRpcClient.BigUint"></a>

### GRpcClient.BigUint : `object`

Structure of GRpcClient.BigUint

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| value | `Uint8Array` |

<a name="GRpcClient.BigSint"></a>

### GRpcClient.BigSint : `object`

Structure of GRpcClient.BigSint

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| value | `Uint8Array` |
| minus | `boolean`    |

<a name="GRpcClient.WalletType"></a>

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

<a name="GRpcClient.WalletInfo"></a>

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

<a name="GRpcClient.ChainInfo"></a>

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
| supportedTxs     | `Array.&lt;string&gt;`               |

<a name="GRpcClient.NodeInfo"></a>

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
| supportedTxs     | `Array.&lt;string&gt;`               |
| ip               | `string`                             |
| geoInfo          | [`GeoInfo`](#GRpcClient.GeoInfo)     |
| p2pAddress       | `string`                             |

<a name="GRpcClient.Validator"></a>

### GRpcClient.Validator : `object`

Structure of GRpcClient.Validator

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| power   | `number` |

<a name="GRpcClient.ConsensusParams"></a>

### GRpcClient.ConsensusParams : `object`

Structure of GRpcClient.ConsensusParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name             | Type                                               |
| ---------------- | -------------------------------------------------- |
| maxBytes         | `number`                                           |
| maxGas           | `number`                                           |
| maxValidators    | `number`                                           |
| maxCandidates    | `number`                                           |
| pubKeyTypes      | `Array.&lt;string&gt;`                             |
| validators       | [`Array.&lt;Validator&gt;`](#GRpcClient.Validator) |
| validatorChanged | `boolean`                                          |
| paramChanged     | `boolean`                                          |

<a name="GRpcClient.UpgradeTask"></a>

### GRpcClient.UpgradeTask : `object`

Structure of GRpcClient.UpgradeTask

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                                     |
| -------- | ---------------------------------------- |
| type     | `GRpcClient.UpgradeType`                 |
| dataHash | `string`                                 |
| actions  | `Array.&lt;GRpcClient.UpgradeAction&gt;` |

<a name="GRpcClient.UpgradeTasks"></a>

### GRpcClient.UpgradeTasks : `object`

Structure of GRpcClient.UpgradeTasks

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                                   |
| ---- | ------------------------------------------------------ |
| item | [`Array.&lt;UpgradeTask&gt;`](#GRpcClient.UpgradeTask) |

<a name="GRpcClient.AbciContext"></a>

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

<a name="GRpcClient.Multisig"></a>

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

<a name="GRpcClient.Transaction"></a>

### GRpcClient.Transaction : `object`

Structure of GRpcClient.Transaction

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                             |
| ---------- | ------------------------------------------------ |
| from       | `string`                                         |
| nonce      | `number`                                         |
| chainId    | `string`                                         |
| pk         | `Uint8Array`                                     |
| gas        | `number`                                         |
| delegator  | `string`                                         |
| signature  | `Uint8Array`                                     |
| signatures | [`Array.&lt;Multisig&gt;`](#GRpcClient.Multisig) |
| itx        | [`Any`](#GRpcClient.Any)                         |

<a name="GRpcClient.TransactionInfo"></a>

### GRpcClient.TransactionInfo : `object`

Structure of GRpcClient.TransactionInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                         |
| ------ | -------------------------------------------- |
| tx     | [`Transaction`](#GRpcClient.Transaction)     |
| height | `number`                                     |
| index  | `number`                                     |
| hash   | `string`                                     |
| tags   | [`Array.&lt;KVPair&gt;`](#GRpcClient.KVPair) |
| code   | `GRpcClient.StatusCode`                      |
| time   | [`Timestamp`](#GRpcClient.Timestamp)         |

<a name="GRpcClient.DeclareConfig"></a>

### GRpcClient.DeclareConfig : `object`

Structure of GRpcClient.DeclareConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| restricted | `boolean` |
| hierarchy  | `number`  |

<a name="GRpcClient.DelegateConfig"></a>

### GRpcClient.DelegateConfig : `object`

Structure of GRpcClient.DelegateConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                   |
| ------------- | ---------------------- |
| deltaInterval | `number`               |
| typeUrls      | `Array.&lt;string&gt;` |

<a name="GRpcClient.TransactionConfig"></a>

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

<a name="GRpcClient.BlockInfo"></a>

### GRpcClient.BlockInfo : `object`

Structure of GRpcClient.BlockInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name               | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| height             | `number`                                                       |
| numTxs             | `number`                                                       |
| time               | [`Timestamp`](#GRpcClient.Timestamp)                           |
| appHash            | `Uint8Array`                                                   |
| proposer           | `Uint8Array`                                                   |
| txs                | [`Array.&lt;TransactionInfo&gt;`](#GRpcClient.TransactionInfo) |
| totalTxs           | `number`                                                       |
| invalidTxs         | [`Array.&lt;TransactionInfo&gt;`](#GRpcClient.TransactionInfo) |
| txsHashes          | `Array.&lt;string&gt;`                                         |
| invalidTxsHashes   | `Array.&lt;string&gt;`                                         |
| consensusHash      | `Uint8Array`                                                   |
| dataHash           | `Uint8Array`                                                   |
| evidenceHash       | `Uint8Array`                                                   |
| lastCommitHash     | `Uint8Array`                                                   |
| lastResultsHash    | `Uint8Array`                                                   |
| nextValidatorsHash | `Uint8Array`                                                   |
| validatorsHash     | `Uint8Array`                                                   |
| version            | [`Version`](#GRpcClient.Version)                               |
| lastBlockId        | [`BlockID`](#GRpcClient.BlockID)                               |

<a name="GRpcClient.BlockInfoSimple"></a>

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
| txsHashes          | `Array.&lt;string&gt;`               |
| invalidTxsHashes   | `Array.&lt;string&gt;`               |
| consensusHash      | `Uint8Array`                         |
| dataHash           | `Uint8Array`                         |
| evidenceHash       | `Uint8Array`                         |
| lastCommitHash     | `Uint8Array`                         |
| lastResultsHash    | `Uint8Array`                         |
| nextValidatorsHash | `Uint8Array`                         |
| validatorsHash     | `Uint8Array`                         |
| version            | [`Version`](#GRpcClient.Version)     |
| lastBlockId        | [`BlockID`](#GRpcClient.BlockID)     |

<a name="GRpcClient.TxStatus"></a>

### GRpcClient.TxStatus : `object`

Structure of GRpcClient.TxStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                    |
| ---- | ----------------------- |
| code | `GRpcClient.StatusCode` |
| hash | `string`                |

<a name="GRpcClient.CircularQueue"></a>

### GRpcClient.CircularQueue : `object`

Structure of GRpcClient.CircularQueue

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                       |
| -------- | -------------------------- |
| items    | `Array.&lt;Uint8Array&gt;` |
| typeUrl  | `string`                   |
| maxItems | `number`                   |
| circular | `boolean`                  |
| fifo     | `boolean`                  |

<a name="GRpcClient.StateContext"></a>

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

<a name="GRpcClient.StakeContext"></a>

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

<a name="GRpcClient.StakeSummary"></a>

### GRpcClient.StakeSummary : `object`

Structure of GRpcClient.StakeSummary

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type                                       |
| ------------- | ------------------------------------------ |
| totalStakes   | [`BigUint`](#GRpcClient.BigUint)           |
| totalUnstakes | [`BigUint`](#GRpcClient.BigUint)           |
| context       | [`StateContext`](#GRpcClient.StateContext) |

<a name="GRpcClient.StakeConfig"></a>

### GRpcClient.StakeConfig : `object`

Structure of GRpcClient.StakeConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                | Type     |
| ------------------- | -------- |
| timeoutGeneral      | `number` |
| timeoutStakeForNode | `number` |

<a name="GRpcClient.UnconfirmedTxs"></a>

### GRpcClient.UnconfirmedTxs : `object`

Structure of GRpcClient.UnconfirmedTxs

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                                   |
| ---- | ------------------------------------------------------ |
| nTxs | `number`                                               |
| txs  | [`Array.&lt;Transaction&gt;`](#GRpcClient.Transaction) |

<a name="GRpcClient.NetInfo"></a>

### GRpcClient.NetInfo : `object`

Structure of GRpcClient.NetInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                             |
| --------- | ------------------------------------------------ |
| listening | `boolean`                                        |
| listeners | `Array.&lt;string&gt;`                           |
| nPeers    | `number`                                         |
| peers     | [`Array.&lt;PeerInfo&gt;`](#GRpcClient.PeerInfo) |

<a name="GRpcClient.GeoInfo"></a>

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

<a name="GRpcClient.PeerInfo"></a>

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

<a name="GRpcClient.ValidatorsInfo"></a>

### GRpcClient.ValidatorsInfo : `object`

Structure of GRpcClient.ValidatorsInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                                                       |
| ----------- | ---------------------------------------------------------- |
| blockHeight | `number`                                                   |
| validators  | [`Array.&lt;ValidatorInfo&gt;`](#GRpcClient.ValidatorInfo) |

<a name="GRpcClient.ValidatorInfo"></a>

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

<a name="GRpcClient.GenesisInfo"></a>

### GRpcClient.GenesisInfo : `object`

Structure of GRpcClient.GenesisInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                                       |
| --------------- | ---------------------------------------------------------- |
| genesisTime     | `string`                                                   |
| chainId         | `string`                                                   |
| consensusParams | [`ConsensusParams`](#GRpcClient.ConsensusParams)           |
| validators      | [`Array.&lt;ValidatorInfo&gt;`](#GRpcClient.ValidatorInfo) |
| appHash         | `string`                                                   |

<a name="GRpcClient.ForgeStats"></a>

### GRpcClient.ForgeStats : `object`

Structure of GRpcClient.ForgeStats

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                   | Type                                           |
| ---------------------- | ---------------------------------------------- |
| numBlocks              | `Array.&lt;number&gt;`                         |
| numTxs                 | `Array.&lt;number&gt;`                         |
| numStakes              | [`Array.&lt;BigUint&gt;`](#GRpcClient.BigUint) |
| numValidators          | `Array.&lt;number&gt;`                         |
| numAccountMigrateTxs   | `Array.&lt;number&gt;`                         |
| numCreateAssetTxs      | `Array.&lt;number&gt;`                         |
| numConsensusUpgradeTxs | `Array.&lt;number&gt;`                         |
| numDeclareTxs          | `Array.&lt;number&gt;`                         |
| numDeclareFileTxs      | `Array.&lt;number&gt;`                         |
| numExchangeTxs         | `Array.&lt;number&gt;`                         |
| numStakeTxs            | `Array.&lt;number&gt;`                         |
| numSysUpgradeTxs       | `Array.&lt;number&gt;`                         |
| numTransferTxs         | `Array.&lt;number&gt;`                         |
| numUpdateAssetTxs      | `Array.&lt;number&gt;`                         |
| numConsumeAssetTxs     | `Array.&lt;number&gt;`                         |
| numPokeTxs             | `Array.&lt;number&gt;`                         |
| tps                    | `Array.&lt;number&gt;`                         |
| maxTps                 | `number`                                       |
| avgTps                 | `number`                                       |
| avgBlockTime           | `number`                                       |

<a name="GRpcClient.TxStatistics"></a>

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

<a name="GRpcClient.ForgeToken"></a>

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

<a name="GRpcClient.PokeInfo"></a>

### GRpcClient.PokeInfo : `object`

Structure of GRpcClient.PokeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                             |
| ---------- | -------------------------------- |
| dailyLimit | [`BigUint`](#GRpcClient.BigUint) |
| leftover   | [`BigUint`](#GRpcClient.BigUint) |
| amount     | [`BigUint`](#GRpcClient.BigUint) |

<a name="GRpcClient.PokeConfig"></a>

### GRpcClient.PokeConfig : `object`

Structure of GRpcClient.PokeConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| dailyLimit | `number`  |
| amount     | `number`  |
| enabled    | `boolean` |

<a name="GRpcClient.UpgradeInfo"></a>

### GRpcClient.UpgradeInfo : `object`

Structure of GRpcClient.UpgradeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| height  | `number` |
| version | `string` |

<a name="GRpcClient.WithdrawItem"></a>

### GRpcClient.WithdrawItem : `object`

Structure of GRpcClient.WithdrawItem

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                             |
| ----- | -------------------------------- |
| hash  | `string`                         |
| value | [`BigUint`](#GRpcClient.BigUint) |

<a name="GRpcClient.AccountConfig"></a>

### GRpcClient.AccountConfig : `object`

Structure of GRpcClient.AccountConfig

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                             |
| ------- | -------------------------------- |
| address | `string`                         |
| pk      | `Uint8Array`                     |
| balance | [`BigUint`](#GRpcClient.BigUint) |

<a name="GRpcClient.TokenSwapConfig"></a>

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

<a name="GRpcClient.Evidence"></a>

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

<a name="GRpcClient.AccountState"></a>

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
| migratedTo      | `Array.&lt;string&gt;`                       |
| migratedFrom    | `Array.&lt;string&gt;`                       |
| numAssets       | `number`                                     |
| stake           | [`StakeContext`](#GRpcClient.StakeContext)   |
| pinnedFiles     | [`CircularQueue`](#GRpcClient.CircularQueue) |
| poke            | [`PokeInfo`](#GRpcClient.PokeInfo)           |
| depositReceived | [`BigUint`](#GRpcClient.BigUint)             |
| withdrawItems   | [`CircularQueue`](#GRpcClient.CircularQueue) |
| data            | [`Any`](#GRpcClient.Any)                     |

<a name="GRpcClient.AssetState"></a>

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

<a name="GRpcClient.CoreProtocol"></a>

### GRpcClient.CoreProtocol : `object`

Structure of GRpcClient.CoreProtocol

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| name    | `string` |
| address | `string` |

<a name="GRpcClient.ForgeState"></a>

### GRpcClient.ForgeState : `object`

Structure of GRpcClient.ForgeState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                                     |
| --------------- | -------------------------------------------------------- |
| address         | `string`                                                 |
| consensus       | [`ConsensusParams`](#GRpcClient.ConsensusParams)         |
| tasks           | [`UpgradeTasks`](#GRpcClient.UpgradeTasks)               |
| stakeSummary    | [`StakeSummary`](#GRpcClient.StakeSummary)               |
| version         | `string`                                                 |
| token           | [`ForgeToken`](#GRpcClient.ForgeToken)                   |
| txConfig        | [`TransactionConfig`](#GRpcClient.TransactionConfig)     |
| protocols       | [`Array.&lt;CoreProtocol&gt;`](#GRpcClient.CoreProtocol) |
| gas             | `number`                                                 |
| upgradeInfo     | [`UpgradeInfo`](#GRpcClient.UpgradeInfo)                 |
| accountConfig   | [`AccountConfig`](#GRpcClient.AccountConfig)             |
| tokenSwapConfig | [`TokenSwapConfig`](#GRpcClient.TokenSwapConfig)         |
| data            | [`Any`](#GRpcClient.Any)                                 |

<a name="GRpcClient.RootState"></a>

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

<a name="GRpcClient.StakeState"></a>

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

<a name="GRpcClient.StatisticsState"></a>

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

<a name="GRpcClient.BlacklistState"></a>

### GRpcClient.BlacklistState : `object`

Structure of GRpcClient.BlacklistState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                   |
| ------- | ---------------------- |
| address | `Array.&lt;string&gt;` |

<a name="GRpcClient.ProtocolState"></a>

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
| migratedTo   | `Array.&lt;string&gt;`                             |
| migratedFrom | `Array.&lt;string&gt;`                             |
| context      | [`StateContext`](#GRpcClient.StateContext)         |
| data         | [`Any`](#GRpcClient.Any)                           |

<a name="GRpcClient.TetherState"></a>

### GRpcClient.TetherState : `object`

Structure of GRpcClient.TetherState

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                 |
| ---------- | ------------------------------------ |
| hash       | `string`                             |
| available  | `boolean`                            |
| custodian  | `string`                             |
| depositor  | `string`                             |
| withdrawer | `string`                             |
| value      | [`BigUint`](#GRpcClient.BigUint)     |
| commission | [`BigUint`](#GRpcClient.BigUint)     |
| charge     | [`BigUint`](#GRpcClient.BigUint)     |
| target     | `string`                             |
| locktime   | [`Timestamp`](#GRpcClient.Timestamp) |
| address    | `string`                             |

<a name="GRpcClient.TetherInfo"></a>

### GRpcClient.TetherInfo : `object`

Structure of GRpcClient.TetherInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type      |
| --------- | --------- |
| available | `boolean` |
| hash      | `string`  |

<a name="GRpcClient.SwapState"></a>

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
| assets   | `Array.&lt;string&gt;`                     |
| locktime | `number`                                   |
| hashlock | `Uint8Array`                               |
| context  | [`StateContext`](#GRpcClient.StateContext) |

<a name="GRpcClient.DelegateOpState"></a>

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

<a name="GRpcClient.DelegateState"></a>

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

<a name="GRpcClient.CodeInfo"></a>

### GRpcClient.CodeInfo : `object`

Structure of GRpcClient.CodeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type         |
| -------- | ------------ |
| checksum | `Uint8Array` |
| binary   | `Uint8Array` |

<a name="GRpcClient.TypeUrls"></a>

### GRpcClient.TypeUrls : `object`

Structure of GRpcClient.TypeUrls

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| url    | `string` |
| module | `string` |

<a name="GRpcClient.DeployProtocolTx"></a>

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

| Name        | Type                                             |
| ----------- | ------------------------------------------------ |
| address     | `string`                                         |
| name        | `string`                                         |
| version     | `number`                                         |
| namespace   | `string`                                         |
| description | `string`                                         |
| typeUrls    | [`Array.&lt;TypeUrls&gt;`](#GRpcClient.TypeUrls) |
| proto       | `string`                                         |
| pipeline    | `string`                                         |
| sources     | `Array.&lt;string&gt;`                           |
| code        | [`Array.&lt;CodeInfo&gt;`](#GRpcClient.CodeInfo) |
| tags        | `Array.&lt;string&gt;`                           |
| data        | [`Any`](#GRpcClient.Any)                         |

<a name="GRpcClient.ConsensusUpgradeTx"></a>

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

| Name          | Type                                               |
| ------------- | -------------------------------------------------- |
| validators    | [`Array.&lt;Validator&gt;`](#GRpcClient.Validator) |
| maxBytes      | `number`                                           |
| maxGas        | `number`                                           |
| maxValidators | `number`                                           |
| maxCandidates | `number`                                           |
| data          | [`Any`](#GRpcClient.Any)                           |

<a name="GRpcClient.SysUpgradeTx"></a>

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

<a name="GRpcClient.PageOrder"></a>

### GRpcClient.PageOrder : `object`

Structure of GRpcClient.PageOrder

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| field | `string` |
| type  | `string` |

<a name="GRpcClient.PageInput"></a>

### GRpcClient.PageInput : `object`

Structure of GRpcClient.PageInput

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                                               |
| ------ | -------------------------------------------------- |
| cursor | `string`                                           |
| size   | `number`                                           |
| order  | [`Array.&lt;PageOrder&gt;`](#GRpcClient.PageOrder) |

<a name="GRpcClient.TypeFilter"></a>

### GRpcClient.TypeFilter : `object`

Structure of GRpcClient.TypeFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                   |
| ----- | ---------------------- |
| types | `Array.&lt;string&gt;` |

<a name="GRpcClient.TimeFilter"></a>

### GRpcClient.TimeFilter : `object`

Structure of GRpcClient.TimeFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| startDateTime | `string` |
| endDateTime   | `string` |

<a name="GRpcClient.AddressFilter"></a>

### GRpcClient.AddressFilter : `object`

Structure of GRpcClient.AddressFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                   |
| --------- | ---------------------- |
| sender    | `string`               |
| receiver  | `string`               |
| direction | `GRpcClient.Direction` |

<a name="GRpcClient.PageInfo"></a>

### GRpcClient.PageInfo : `object`

Structure of GRpcClient.PageInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type      |
| ------ | --------- |
| cursor | `string`  |
| next   | `boolean` |
| total  | `number`  |

<a name="GRpcClient.IndexedTransaction"></a>

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

<a name="GRpcClient.IndexedAccountState"></a>

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
| recentNumTxs        | `Array.&lt;number&gt;`           |

<a name="GRpcClient.IndexedAssetState"></a>

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

<a name="GRpcClient.IndexedStakeState"></a>

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

<a name="GRpcClient.IndexedBlock"></a>

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

<a name="GRpcClient.HealthStatus"></a>

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

<a name="GRpcClient.ConsensusStatus"></a>

### GRpcClient.ConsensusStatus : `object`

Structure of GRpcClient.ConsensusStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type      |
| ----------- | --------- |
| health      | `boolean` |
| synced      | `boolean` |
| blockHeight | `number`  |

<a name="GRpcClient.NetworkStatus"></a>

### GRpcClient.NetworkStatus : `object`

Structure of GRpcClient.NetworkStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type      |
| -------- | --------- |
| health   | `boolean` |
| numPeers | `number`  |

<a name="GRpcClient.StorageStatus"></a>

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

<a name="GRpcClient.DiskSpaceStatus"></a>

### GRpcClient.DiskSpaceStatus : `object`

Structure of GRpcClient.DiskSpaceStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type     |
| ---------- | -------- |
| forgeUsage | `string` |
| total      | `string` |

<a name="GRpcClient.ForgeStatus"></a>

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

<a name="GRpcClient.AbciServerStatus"></a>

### GRpcClient.AbciServerStatus : `object`

Structure of GRpcClient.AbciServerStatus

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type     |
| ------------- | -------- |
| abciConsensus | `string` |
| abciInfo      | `string` |

<a name="GRpcClient.ValidityFilter"></a>

### GRpcClient.ValidityFilter : `object`

Structure of GRpcClient.ValidityFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                  |
| -------- | --------------------- |
| validity | `GRpcClient.Validity` |

<a name="GRpcClient.RangeFilter"></a>

### GRpcClient.RangeFilter : `object`

Structure of GRpcClient.RangeFilter

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| from | `number` |
| to   | `number` |

<a name="GRpcClient.AccountMigrateTx"></a>

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

<a name="GRpcClient.AssetSpec"></a>

### GRpcClient.AssetSpec : `object`

Structure of GRpcClient.AssetSpec

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |
| data    | `string` |

<a name="GRpcClient.AcquireAssetTx"></a>

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

| Name  | Type                                               |
| ----- | -------------------------------------------------- |
| to    | `string`                                           |
| specs | [`Array.&lt;AssetSpec&gt;`](#GRpcClient.AssetSpec) |
| data  | [`Any`](#GRpcClient.Any)                           |

<a name="GRpcClient.ActivateProtocolTx"></a>

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

<a name="GRpcClient.ApproveTetherTx"></a>

### GRpcClient.ApproveTetherTx : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type                     |
| -------- | ------------------------ |
| withdraw | `string`                 |
| data     | [`Any`](#GRpcClient.Any) |

<a name="GRpcClient.ApproveWithdrawTx"></a>

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

<a name="GRpcClient.ConsumeAssetTx"></a>

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

<a name="GRpcClient.CreateAssetTx"></a>

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

<a name="GRpcClient.AssetAttributes"></a>

### GRpcClient.AssetAttributes : `object`

Structure of GRpcClient.AssetAttributes

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name          | Type      |
| ------------- | --------- |
| transferrable | `boolean` |
| ttl           | `number`  |

<a name="GRpcClient.AssetFactory"></a>

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
| allowedSpecArgs | `Array.&lt;string&gt;`                           |
| assetName       | `string`                                         |
| attributes      | [`AssetAttributes`](#GRpcClient.AssetAttributes) |
| data            | [`Any`](#GRpcClient.Any)                         |

<a name="GRpcClient.AssetFactoryState"></a>

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
| allowedSpecArgs | `Array.&lt;string&gt;`                           |
| assetName       | `string`                                         |
| attributes      | [`AssetAttributes`](#GRpcClient.AssetAttributes) |
| numCreated      | `number`                                         |
| data            | [`Any`](#GRpcClient.Any)                         |

<a name="GRpcClient.DeactivateProtocolTx"></a>

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

<a name="GRpcClient.DeclareTx"></a>

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

<a name="GRpcClient.DelegateTx"></a>

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

| Name    | Type                                                 |
| ------- | ---------------------------------------------------- |
| address | `string`                                             |
| to      | `string`                                             |
| ops     | [`Array.&lt;DelegateOp&gt;`](#GRpcClient.DelegateOp) |
| data    | [`Any`](#GRpcClient.Any)                             |

<a name="GRpcClient.DelegateOp"></a>

### GRpcClient.DelegateOp : `object`

Structure of GRpcClient.DelegateOp

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                   |
| ------- | ---------------------- |
| typeUrl | `string`               |
| rules   | `Array.&lt;string&gt;` |

<a name="GRpcClient.DepositTetherTx"></a>

### GRpcClient.DepositTetherTx : `object`

Structure of GRpcClient.DepositTetherTx

```javascript
{
  "target": "arcblock",
  "withdrawer": "arcblock",
  "locktime": "2019-10-10T00:35:13.220Z"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                 |
| ---------- | ------------------------------------ |
| value      | [`BigUint`](#GRpcClient.BigUint)     |
| commission | [`BigUint`](#GRpcClient.BigUint)     |
| charge     | [`BigUint`](#GRpcClient.BigUint)     |
| target     | `string`                             |
| withdrawer | `string`                             |
| locktime   | [`Timestamp`](#GRpcClient.Timestamp) |

<a name="GRpcClient.DepositTokenTx"></a>

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

<a name="GRpcClient.ExchangeInfo"></a>

### GRpcClient.ExchangeInfo : `object`

Structure of GRpcClient.ExchangeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                             |
| ------ | -------------------------------- |
| value  | [`BigUint`](#GRpcClient.BigUint) |
| assets | `Array.&lt;string&gt;`           |

<a name="GRpcClient.ExchangeTx"></a>

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
  "expiredAt": "2019-10-10T00:35:13.220Z",
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

<a name="GRpcClient.TetherExchangeInfo"></a>

### GRpcClient.TetherExchangeInfo : `object`

Structure of GRpcClient.TetherExchangeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                                     |
| ------- | ---------------------------------------- |
| value   | [`BigUint`](#GRpcClient.BigUint)         |
| assets  | `Array.&lt;string&gt;`                   |
| deposit | [`Transaction`](#GRpcClient.Transaction) |

<a name="GRpcClient.ExchangeTetherTx"></a>

### GRpcClient.ExchangeTetherTx : `object`

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
  },
  "expiredAt": "2019-10-10T00:35:13.220Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                                   |
| --------- | ------------------------------------------------------ |
| sender    | [`ExchangeInfo`](#GRpcClient.ExchangeInfo)             |
| receiver  | [`TetherExchangeInfo`](#GRpcClient.TetherExchangeInfo) |
| expiredAt | [`Timestamp`](#GRpcClient.Timestamp)                   |
| data      | [`Any`](#GRpcClient.Any)                               |

<a name="GRpcClient.PokeTx"></a>

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

<a name="GRpcClient.RetrieveSwapTx"></a>

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

<a name="GRpcClient.RevokeSwapTx"></a>

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

<a name="GRpcClient.RevokeTetherTx"></a>

### GRpcClient.RevokeTetherTx : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                     |
| ------ | ------------------------ |
| tether | `string`                 |
| data   | [`Any`](#GRpcClient.Any) |

<a name="GRpcClient.RevokeWithdrawTx"></a>

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

<a name="GRpcClient.SetupSwapTx"></a>

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
| assets   | `Array.&lt;string&gt;`           |
| receiver | `string`                         |
| hashlock | `Uint8Array`                     |
| locktime | `number`                         |
| data     | [`Any`](#GRpcClient.Any)         |

<a name="GRpcClient.stakeForAsset"></a>

### GRpcClient.stakeForAsset : `object`

Structure of GRpcClient.stakeForAsset

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.stakeForChain"></a>

### GRpcClient.stakeForChain : `object`

Structure of GRpcClient.stakeForChain

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.StakeForNode"></a>

### GRpcClient.StakeForNode : `object`

Structure of GRpcClient.StakeForNode

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.stakeForUser"></a>

### GRpcClient.stakeForUser : `object`

Structure of GRpcClient.stakeForUser

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
<a name="GRpcClient.StakeTx"></a>

### GRpcClient.StakeTx : `object`

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

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type                             |
| ------- | -------------------------------- |
| to      | `string`                         |
| value   | [`BigSint`](#GRpcClient.BigSint) |
| message | `string`                         |
| address | `string`                         |
| data    | [`Any`](#GRpcClient.Any)         |

<a name="GRpcClient.TransferTx"></a>

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
| assets | `Array.&lt;string&gt;`           |
| data   | [`Any`](#GRpcClient.Any)         |

<a name="GRpcClient.UpdateAssetTx"></a>

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

<a name="GRpcClient.UpgradeNodeTx"></a>

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

<a name="GRpcClient.TetherTradeInfo"></a>

### GRpcClient.TetherTradeInfo : `object`

Structure of GRpcClient.TetherTradeInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                             |
| ------ | -------------------------------- |
| value  | [`BigUint`](#GRpcClient.BigUint) |
| assets | `Array.&lt;string&gt;`           |
| tether | `string`                         |

<a name="GRpcClient.WithdrawTetherTx"></a>

### GRpcClient.WithdrawTetherTx : `object`

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
  "expiredAt": "2019-10-10T00:35:13.220Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name       | Type                                             |
| ---------- | ------------------------------------------------ |
| from       | `string`                                         |
| nonce      | `number`                                         |
| chainId    | `string`                                         |
| pk         | `Uint8Array`                                     |
| signature  | `Uint8Array`                                     |
| signatures | [`Array.&lt;Multisig&gt;`](#GRpcClient.Multisig) |
| sender     | [`ExchangeInfo`](#GRpcClient.ExchangeInfo)       |
| receiver   | [`TetherTradeInfo`](#GRpcClient.TetherTradeInfo) |
| expiredAt  | [`Timestamp`](#GRpcClient.Timestamp)             |
| data       | [`Any`](#GRpcClient.Any)                         |

<a name="GRpcClient.WithdrawTokenTx"></a>

### GRpcClient.WithdrawTokenTx : `object`

Structure of GRpcClient.WithdrawTokenTx

```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "chainType": "arcblock",
  "chainId": "arcblock",
  "ttl": "2019-10-10T00:35:13.220Z"
}
```

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                 |
| --------- | ------------------------------------ |
| value     | [`BigUint`](#GRpcClient.BigUint)     |
| to        | `string`                             |
| chainType | `string`                             |
| chainId   | `string`                             |
| ttl       | [`Timestamp`](#GRpcClient.Timestamp) |

<a name="GRpcClient.Any"></a>

### GRpcClient.Any : `object`

Structure of GRpcClient.Any

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type         |
| -------- | ------------ |
| type_url | `string`     |
| value    | `Uint8Array` |

<a name="GRpcClient.Timestamp"></a>

### GRpcClient.Timestamp : `object`

Structure of GRpcClient.Timestamp

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| seconds | `number` |
| nanos   | `number` |

<a name="GRpcClient.KVPair"></a>

### GRpcClient.KVPair : `object`

Structure of GRpcClient.KVPair

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| key   | `Uint8Array` |
| value | `Uint8Array` |

<a name="GRpcClient.BlockParams"></a>

### GRpcClient.BlockParams : `object`

Structure of GRpcClient.BlockParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name     | Type     |
| -------- | -------- |
| maxBytes | `number` |
| maxGas   | `number` |

<a name="GRpcClient.EvidenceParams"></a>

### GRpcClient.EvidenceParams : `object`

Structure of GRpcClient.EvidenceParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| maxAge | `number` |

<a name="GRpcClient.ValidatorParams"></a>

### GRpcClient.ValidatorParams : `object`

Structure of GRpcClient.ValidatorParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                   |
| ----------- | ---------------------- |
| pubKeyTypes | `Array.&lt;string&gt;` |

<a name="GRpcClient.ConsensusParams"></a>

### GRpcClient.ConsensusParams : `object`

Structure of GRpcClient.ConsensusParams

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name      | Type                                             |
| --------- | ------------------------------------------------ |
| block     | [`BlockParams`](#GRpcClient.BlockParams)         |
| evidence  | [`EvidenceParams`](#GRpcClient.EvidenceParams)   |
| validator | [`ValidatorParams`](#GRpcClient.ValidatorParams) |

<a name="GRpcClient.LastCommitInfo"></a>

### GRpcClient.LastCommitInfo : `object`

Structure of GRpcClient.LastCommitInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type                                             |
| ----- | ------------------------------------------------ |
| round | `number`                                         |
| votes | [`Array.&lt;VoteInfo&gt;`](#GRpcClient.VoteInfo) |

<a name="GRpcClient.Version"></a>

### GRpcClient.Version : `object`

Structure of GRpcClient.Version

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| Block | `number` |
| App   | `number` |

<a name="GRpcClient.BlockID"></a>

### GRpcClient.BlockID : `object`

Structure of GRpcClient.BlockID

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name        | Type                                         |
| ----------- | -------------------------------------------- |
| hash        | `Uint8Array`                                 |
| partsHeader | [`PartSetHeader`](#GRpcClient.PartSetHeader) |

<a name="GRpcClient.PartSetHeader"></a>

### GRpcClient.PartSetHeader : `object`

Structure of GRpcClient.PartSetHeader

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name  | Type         |
| ----- | ------------ |
| total | `number`     |
| hash  | `Uint8Array` |

<a name="GRpcClient.Validator"></a>

### GRpcClient.Validator : `object`

Structure of GRpcClient.Validator

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name    | Type         |
| ------- | ------------ |
| address | `Uint8Array` |
| power   | `number`     |

<a name="GRpcClient.ValidatorUpdate"></a>

### GRpcClient.ValidatorUpdate : `object`

Structure of GRpcClient.ValidatorUpdate

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type                           |
| ------ | ------------------------------ |
| pubKey | [`PubKey`](#GRpcClient.PubKey) |
| power  | `number`                       |

<a name="GRpcClient.VoteInfo"></a>

### GRpcClient.VoteInfo : `object`

Structure of GRpcClient.VoteInfo

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name            | Type                                 |
| --------------- | ------------------------------------ |
| validator       | [`Validator`](#GRpcClient.Validator) |
| signedLastBlock | `boolean`                            |

<a name="GRpcClient.PubKey"></a>

### GRpcClient.PubKey : `object`

Structure of GRpcClient.PubKey

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type         |
| ---- | ------------ |
| type | `string`     |
| data | `Uint8Array` |

<a name="GRpcClient.Evidence"></a>

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

<a name="GRpcClient.Header"></a>

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

<a name="GRpcClient.RequestBeginBlock"></a>

### GRpcClient.RequestBeginBlock : `object`

Structure of GRpcClient.RequestBeginBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                | Type                                             |
| ------------------- | ------------------------------------------------ |
| hash                | `Uint8Array`                                     |
| header              | [`Header`](#GRpcClient.Header)                   |
| lastCommitInfo      | [`LastCommitInfo`](#GRpcClient.LastCommitInfo)   |
| byzantineValidators | [`Array.&lt;Evidence&gt;`](#GRpcClient.Evidence) |

<a name="GRpcClient.RequestEndBlock"></a>

### GRpcClient.RequestEndBlock : `object`

Structure of GRpcClient.RequestEndBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name   | Type     |
| ------ | -------- |
| height | `number` |

<a name="GRpcClient.ResponseBeginBlock"></a>

### GRpcClient.ResponseBeginBlock : `object`

Structure of GRpcClient.ResponseBeginBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name | Type                                         |
| ---- | -------------------------------------------- |
| tags | [`Array.&lt;KVPair&gt;`](#GRpcClient.KVPair) |

<a name="GRpcClient.ResponseEndBlock"></a>

### GRpcClient.ResponseEndBlock : `object`

Structure of GRpcClient.ResponseEndBlock

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                                           |
| --------------------- | -------------------------------------------------------------- |
| validatorUpdates      | [`Array.&lt;ValidatorUpdate&gt;`](#GRpcClient.ValidatorUpdate) |
| consensusParamUpdates | [`ConsensusParams`](#GRpcClient.ConsensusParams)               |
| tags                  | [`Array.&lt;KVPair&gt;`](#GRpcClient.KVPair)                   |

<a name="GRpcClient.ResponseCheckTx"></a>

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

| Name      | Type                                         |
| --------- | -------------------------------------------- |
| code      | `number`                                     |
| data      | `Uint8Array`                                 |
| log       | `string`                                     |
| info      | `string`                                     |
| gasWanted | `number`                                     |
| gasUsed   | `number`                                     |
| tags      | [`Array.&lt;KVPair&gt;`](#GRpcClient.KVPair) |
| codespace | `string`                                     |

<a name="GRpcClient.ResponseDeliverTx"></a>

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

| Name      | Type                                         |
| --------- | -------------------------------------------- |
| code      | `number`                                     |
| data      | `Uint8Array`                                 |
| log       | `string`                                     |
| info      | `string`                                     |
| gasWanted | `number`                                     |
| gasUsed   | `number`                                     |
| tags      | [`Array.&lt;KVPair&gt;`](#GRpcClient.KVPair) |
| codespace | `string`                                     |

<a name="GRpcClient.ConsensusUpgradeTxInput"></a>

### GRpcClient.ConsensusUpgradeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                                   | Description                                                                                   |
| --------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                               |                                                                                               |
| input.tx              | `object`                                               | data of the transaction                                                                       |
| input.tx.itx          | [`ConsensusUpgradeTx`](#GRpcClient.ConsensusUpgradeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                               | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                               | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                               | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DeployProtocolTxInput"></a>

### GRpcClient.DeployProtocolTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                               | Description                                                                                   |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                           |                                                                                               |
| input.tx              | `object`                                           | data of the transaction                                                                       |
| input.tx.itx          | [`DeployProtocolTx`](#GRpcClient.DeployProtocolTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.SysUpgradeTxInput"></a>

### GRpcClient.SysUpgradeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                       | Description                                                                                   |
| --------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                   |                                                                                               |
| input.tx              | `object`                                   | data of the transaction                                                                       |
| input.tx.itx          | [`SysUpgradeTx`](#GRpcClient.SysUpgradeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                   | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                   | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                   | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RevokeWithdrawTxInput"></a>

### GRpcClient.RevokeWithdrawTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                               | Description                                                                                   |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                           |                                                                                               |
| input.tx              | `object`                                           | data of the transaction                                                                       |
| input.tx.itx          | [`RevokeWithdrawTx`](#GRpcClient.RevokeWithdrawTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.WithdrawTokenTxInput"></a>

### GRpcClient.WithdrawTokenTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                             | Description                                                                                   |
| --------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                         |                                                                                               |
| input.tx              | `object`                                         | data of the transaction                                                                       |
| input.tx.itx          | [`WithdrawTokenTx`](#GRpcClient.WithdrawTokenTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DelegateTxInput"></a>

### GRpcClient.DelegateTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                   | Description                                                                                   |
| --------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                               |                                                                                               |
| input.tx              | `object`                               | data of the transaction                                                                       |
| input.tx.itx          | [`DelegateTx`](#GRpcClient.DelegateTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                               | the sender pk                                                                                 |
| [input.tx.from]       | `string`                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                               | the chainId                                                                                   |
| [input.tx.signature]  | `string`                               | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.AccountMigrateTxInput"></a>

### GRpcClient.AccountMigrateTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                               | Description                                                                                   |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                           |                                                                                               |
| input.tx              | `object`                                           | data of the transaction                                                                       |
| input.tx.itx          | [`AccountMigrateTx`](#GRpcClient.AccountMigrateTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DeclareTxInput"></a>

### GRpcClient.DeclareTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                 | Description                                                                                   |
| --------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                             |                                                                                               |
| input.tx              | `object`                             | data of the transaction                                                                       |
| input.tx.itx          | [`DeclareTx`](#GRpcClient.DeclareTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                             | the sender pk                                                                                 |
| [input.tx.from]       | `string`                             | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                             | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                             | the chainId                                                                                   |
| [input.tx.signature]  | `string`                             | transaction signature                                                                         |
| [input.tx.signatures] | `array`                              | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                             | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                             | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RetrieveSwapTxInput"></a>

### GRpcClient.RetrieveSwapTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                           | Description                                                                                   |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                       |                                                                                               |
| input.tx              | `object`                                       | data of the transaction                                                                       |
| input.tx.itx          | [`RetrieveSwapTx`](#GRpcClient.RetrieveSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.TransferTxInput"></a>

### GRpcClient.TransferTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                   | Description                                                                                   |
| --------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                               |                                                                                               |
| input.tx              | `object`                               | data of the transaction                                                                       |
| input.tx.itx          | [`TransferTx`](#GRpcClient.TransferTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                               | the sender pk                                                                                 |
| [input.tx.from]       | `string`                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                               | the chainId                                                                                   |
| [input.tx.signature]  | `string`                               | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RevokeTetherTxInput"></a>

### GRpcClient.RevokeTetherTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                           | Description                                                                                   |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                       |                                                                                               |
| input.tx              | `object`                                       | data of the transaction                                                                       |
| input.tx.itx          | [`RevokeTetherTx`](#GRpcClient.RevokeTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DeactivateProtocolTxInput"></a>

### GRpcClient.DeactivateProtocolTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                                       | Description                                                                                   |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                                   |                                                                                               |
| input.tx              | `object`                                                   | data of the transaction                                                                       |
| input.tx.itx          | [`DeactivateProtocolTx`](#GRpcClient.DeactivateProtocolTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                                   | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                                   | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                                   | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.PokeTxInput"></a>

### GRpcClient.PokeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                           | Description                                                                                   |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                       |                                                                                               |
| input.tx              | `object`                       | data of the transaction                                                                       |
| input.tx.itx          | [`PokeTx`](#GRpcClient.PokeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.PokeTxInput"></a>

### GRpcClient.PokeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                           | Description                                                                                   |
| --------------------- | ------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                       |                                                                                               |
| input.tx              | `object`                       | data of the transaction                                                                       |
| input.tx.itx          | [`PokeTx`](#GRpcClient.PokeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.CreateAssetTxInput"></a>

### GRpcClient.CreateAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                         | Description                                                                                   |
| --------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                     |                                                                                               |
| input.tx              | `object`                                     | data of the transaction                                                                       |
| input.tx.itx          | [`CreateAssetTx`](#GRpcClient.CreateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                     | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                     | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                     | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DepositTetherTxInput"></a>

### GRpcClient.DepositTetherTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                             | Description                                                                                   |
| --------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                         |                                                                                               |
| input.tx              | `object`                                         | data of the transaction                                                                       |
| input.tx.itx          | [`DepositTetherTx`](#GRpcClient.DepositTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ExchangeTetherTxInput"></a>

### GRpcClient.ExchangeTetherTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                               | Description                                                                                   |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                           |                                                                                               |
| input.tx              | `object`                                           | data of the transaction                                                                       |
| input.tx.itx          | [`ExchangeTetherTx`](#GRpcClient.ExchangeTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ConsumeAssetTxInput"></a>

### GRpcClient.ConsumeAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                           | Description                                                                                   |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                       |                                                                                               |
| input.tx              | `object`                                       | data of the transaction                                                                       |
| input.tx.itx          | [`ConsumeAssetTx`](#GRpcClient.ConsumeAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.SetupSwapTxInput"></a>

### GRpcClient.SetupSwapTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                     | Description                                                                                   |
| --------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                 |                                                                                               |
| input.tx              | `object`                                 | data of the transaction                                                                       |
| input.tx.itx          | [`SetupSwapTx`](#GRpcClient.SetupSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                 | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                 | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                 | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                 | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                 | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                  | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                 | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                 | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ApproveWithdrawTxInput"></a>

### GRpcClient.ApproveWithdrawTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                                 | Description                                                                                   |
| --------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                             |                                                                                               |
| input.tx              | `object`                                             | data of the transaction                                                                       |
| input.tx.itx          | [`ApproveWithdrawTx`](#GRpcClient.ApproveWithdrawTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                             | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                             | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                             | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                             | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                             | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                              | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                             | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                             | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.UpdateAssetTxInput"></a>

### GRpcClient.UpdateAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                         | Description                                                                                   |
| --------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                     |                                                                                               |
| input.tx              | `object`                                     | data of the transaction                                                                       |
| input.tx.itx          | [`UpdateAssetTx`](#GRpcClient.UpdateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                     | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                     | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                     | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.RevokeSwapTxInput"></a>

### GRpcClient.RevokeSwapTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                       | Description                                                                                   |
| --------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                   |                                                                                               |
| input.tx              | `object`                                   | data of the transaction                                                                       |
| input.tx.itx          | [`RevokeSwapTx`](#GRpcClient.RevokeSwapTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                   | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                   | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                   | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                   | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                   | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                    | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                   | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                   | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ExchangeTxInput"></a>

### GRpcClient.ExchangeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                   | Description                                                                                   |
| --------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                               |                                                                                               |
| input.tx              | `object`                               | data of the transaction                                                                       |
| input.tx.itx          | [`ExchangeTx`](#GRpcClient.ExchangeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                               | the sender pk                                                                                 |
| [input.tx.from]       | `string`                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                               | the chainId                                                                                   |
| [input.tx.signature]  | `string`                               | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.WithdrawTetherTxInput"></a>

### GRpcClient.WithdrawTetherTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                               | Description                                                                                   |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                           |                                                                                               |
| input.tx              | `object`                                           | data of the transaction                                                                       |
| input.tx.itx          | [`WithdrawTetherTx`](#GRpcClient.WithdrawTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ActivateProtocolTxInput"></a>

### GRpcClient.ActivateProtocolTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                                   | Description                                                                                   |
| --------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                               |                                                                                               |
| input.tx              | `object`                                               | data of the transaction                                                                       |
| input.tx.itx          | [`ActivateProtocolTx`](#GRpcClient.ActivateProtocolTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                               | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                               | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                               | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                               | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                               | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                                | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                               | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                               | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.ApproveTetherTxInput"></a>

### GRpcClient.ApproveTetherTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                             | Description                                                                                   |
| --------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                         |                                                                                               |
| input.tx              | `object`                                         | data of the transaction                                                                       |
| input.tx.itx          | [`ApproveTetherTx`](#GRpcClient.ApproveTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.UpgradeNodeTxInput"></a>

### GRpcClient.UpgradeNodeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                         | Description                                                                                   |
| --------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                     |                                                                                               |
| input.tx              | `object`                                     | data of the transaction                                                                       |
| input.tx.itx          | [`UpgradeNodeTx`](#GRpcClient.UpgradeNodeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                     | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                     | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                     | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                     | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                     | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                      | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                     | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                     | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.DepositTokenTxInput"></a>

### GRpcClient.DepositTokenTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                           | Description                                                                                   |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                       |                                                                                               |
| input.tx              | `object`                                       | data of the transaction                                                                       |
| input.tx.itx          | [`DepositTokenTx`](#GRpcClient.DepositTokenTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.AcquireAssetTxInput"></a>

### GRpcClient.AcquireAssetTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                                           | Description                                                                                   |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                       |                                                                                               |
| input.tx              | `object`                                       | data of the transaction                                                                       |
| input.tx.itx          | [`AcquireAssetTx`](#GRpcClient.AcquireAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                       | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                       | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                       | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                       | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                       | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                        | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                       | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                       | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GRpcClient.StakeTxInput"></a>

### GRpcClient.StakeTxInput : `Object`

**Kind**: static typedef of [`GRpcClient`](#GRpcClient)  
**Properties**

| Name                  | Type                             | Description                                                                                   |
| --------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                         |                                                                                               |
| input.tx              | `object`                         | data of the transaction                                                                       |
| input.tx.itx          | [`StakeTx`](#GRpcClient.StakeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                         | the sender pk                                                                                 |
| [input.tx.from]       | `string`                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                         | the chainId                                                                                   |
| [input.tx.signature]  | `string`                         | transaction signature                                                                         |
| [input.tx.signatures] | `array`                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |
