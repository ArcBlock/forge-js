---
title: '@arcblock/graphql-client'
description: 'graphql client to read/write data on forge powered blockchain'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---


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
      * [getTxSendMethods()](#GraphQLClient+getTxSendMethods) ⇒ `Array.&lt;string&gt;`
      * [getTxEncodeMethods()](#GraphQLClient+getTxEncodeMethods) ⇒ `Array.&lt;string&gt;`
      * [getTxSignMethods()](#GraphQLClient+getTxSignMethods) ⇒ `Array.&lt;string&gt;`
      * [getTxMultiSignMethods()](#GraphQLClient+getTxMultiSignMethods) ⇒ `Array.&lt;string&gt;`
      * [getType(x)](#GraphQLClient+getType) ⇒ `class` \| `null`
      * [decodeTx(buffer)](#GraphQLClient+decodeTx) ⇒ `object`
      * [getQueries()](#GraphQLClient+getQueries) ⇒ `Array.&lt;string&gt;`
      * [getMutations()](#GraphQLClient+getMutations) ⇒ `Array.&lt;string&gt;`
      * [getSubscription()](#GraphQLClient+getSubscription) ⇒ `Array.&lt;string&gt;`
      * [doRawQuery(query)](#GraphQLClient+doRawQuery) ⇒ `Promise`
      * [doRawSubscription(query)](#GraphQLClient+doRawSubscription) ⇒ `Promise`
      * [sendRevokeSwapTx(params)](#GraphQLClient+sendRevokeSwapTx) ⇒ `Promise.&lt;string&gt;`
      * [sendWithdrawTokenTx(params)](#GraphQLClient+sendWithdrawTokenTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDeactivateProtocolTx(params)](#GraphQLClient+sendDeactivateProtocolTx) ⇒ `Promise.&lt;string&gt;`
      * [sendAccountMigrateTx(params)](#GraphQLClient+sendAccountMigrateTx) ⇒ `Promise.&lt;string&gt;`
      * [sendSetupSwapTx(params)](#GraphQLClient+sendSetupSwapTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDepositTetherTx(params)](#GraphQLClient+sendDepositTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendStakeTx(params)](#GraphQLClient+sendStakeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDeployProtocolTx(params)](#GraphQLClient+sendDeployProtocolTx) ⇒ `Promise.&lt;string&gt;`
      * [sendCreateAssetTx(params)](#GraphQLClient+sendCreateAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendExchangeTx(params)](#GraphQLClient+sendExchangeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendConsumeAssetTx(params)](#GraphQLClient+sendConsumeAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRetrieveSwapTx(params)](#GraphQLClient+sendRetrieveSwapTx) ⇒ `Promise.&lt;string&gt;`
      * [sendTransferTx(params)](#GraphQLClient+sendTransferTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRevokeTetherTx(params)](#GraphQLClient+sendRevokeTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendApproveWithdrawTx(params)](#GraphQLClient+sendApproveWithdrawTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDelegateTx(params)](#GraphQLClient+sendDelegateTx) ⇒ `Promise.&lt;string&gt;`
      * [sendApproveTetherTx(params)](#GraphQLClient+sendApproveTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDepositTokenTx(params)](#GraphQLClient+sendDepositTokenTx) ⇒ `Promise.&lt;string&gt;`
      * [sendPokeTx(params)](#GraphQLClient+sendPokeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendExchangeTetherTx(params)](#GraphQLClient+sendExchangeTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendWithdrawTetherTx(params)](#GraphQLClient+sendWithdrawTetherTx) ⇒ `Promise.&lt;string&gt;`
      * [sendActivateProtocolTx(params)](#GraphQLClient+sendActivateProtocolTx) ⇒ `Promise.&lt;string&gt;`
      * [sendUpgradeNodeTx(params)](#GraphQLClient+sendUpgradeNodeTx) ⇒ `Promise.&lt;string&gt;`
      * [sendUpdateAssetTx(params)](#GraphQLClient+sendUpdateAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendAcquireAssetTx(params)](#GraphQLClient+sendAcquireAssetTx) ⇒ `Promise.&lt;string&gt;`
      * [sendDeclareTx(params)](#GraphQLClient+sendDeclareTx) ⇒ `Promise.&lt;string&gt;`
      * [sendRevokeWithdrawTx(params)](#GraphQLClient+sendRevokeWithdrawTx) ⇒ `Promise.&lt;string&gt;`
      * [encodeRevokeSwapTx(params)](#GraphQLClient+encodeRevokeSwapTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeWithdrawTokenTx(params)](#GraphQLClient+encodeWithdrawTokenTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeDeactivateProtocolTx(params)](#GraphQLClient+encodeDeactivateProtocolTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeAccountMigrateTx(params)](#GraphQLClient+encodeAccountMigrateTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeSetupSwapTx(params)](#GraphQLClient+encodeSetupSwapTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeDepositTetherTx(params)](#GraphQLClient+encodeDepositTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeStakeTx(params)](#GraphQLClient+encodeStakeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeDeployProtocolTx(params)](#GraphQLClient+encodeDeployProtocolTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeCreateAssetTx(params)](#GraphQLClient+encodeCreateAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeExchangeTx(params)](#GraphQLClient+encodeExchangeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeConsumeAssetTx(params)](#GraphQLClient+encodeConsumeAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeRetrieveSwapTx(params)](#GraphQLClient+encodeRetrieveSwapTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeTransferTx(params)](#GraphQLClient+encodeTransferTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeRevokeTetherTx(params)](#GraphQLClient+encodeRevokeTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeApproveWithdrawTx(params)](#GraphQLClient+encodeApproveWithdrawTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeDelegateTx(params)](#GraphQLClient+encodeDelegateTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeApproveTetherTx(params)](#GraphQLClient+encodeApproveTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeDepositTokenTx(params)](#GraphQLClient+encodeDepositTokenTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodePokeTx(params)](#GraphQLClient+encodePokeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeExchangeTetherTx(params)](#GraphQLClient+encodeExchangeTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeWithdrawTetherTx(params)](#GraphQLClient+encodeWithdrawTetherTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeActivateProtocolTx(params)](#GraphQLClient+encodeActivateProtocolTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeUpgradeNodeTx(params)](#GraphQLClient+encodeUpgradeNodeTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeUpdateAssetTx(params)](#GraphQLClient+encodeUpdateAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeAcquireAssetTx(params)](#GraphQLClient+encodeAcquireAssetTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeDeclareTx(params)](#GraphQLClient+encodeDeclareTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [encodeRevokeWithdrawTx(params)](#GraphQLClient+encodeRevokeWithdrawTx) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)
      * [getAccountState(params)](#GraphQLClient+getAccountState) ⇒ [`Promise.&lt;ResponseGetAccountState&gt;`](#GraphQLClient.ResponseGetAccountState)
      * [getAssetState(params)](#GraphQLClient+getAssetState) ⇒ [`Promise.&lt;ResponseGetAssetState&gt;`](#GraphQLClient.ResponseGetAssetState)
      * [getBlock(params)](#GraphQLClient+getBlock) ⇒ [`Promise.&lt;ResponseGetBlock&gt;`](#GraphQLClient.ResponseGetBlock)
      * [getBlocks(params)](#GraphQLClient+getBlocks) ⇒ [`Promise.&lt;ResponseGetBlocks&gt;`](#GraphQLClient.ResponseGetBlocks)
      * [getChainInfo()](#GraphQLClient+getChainInfo) ⇒ [`Promise.&lt;ResponseGetChainInfo&gt;`](#GraphQLClient.ResponseGetChainInfo)
      * [getConfig(params)](#GraphQLClient+getConfig) ⇒ [`Promise.&lt;ResponseGetConfig&gt;`](#GraphQLClient.ResponseGetConfig)
      * [getDelegateState(params)](#GraphQLClient+getDelegateState) ⇒ [`Promise.&lt;ResponseGetDelegateState&gt;`](#GraphQLClient.ResponseGetDelegateState)
      * [getForgeState(params)](#GraphQLClient+getForgeState) ⇒ [`Promise.&lt;ResponseGetForgeState&gt;`](#GraphQLClient.ResponseGetForgeState)
      * [getForgeStats()](#GraphQLClient+getForgeStats) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats)
      * [getForgeStatsByDay(params)](#GraphQLClient+getForgeStatsByDay) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats)
      * [getForgeStatsByHour(params)](#GraphQLClient+getForgeStatsByHour) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats)
      * [getHealthStatus()](#GraphQLClient+getHealthStatus) ⇒ [`Promise.&lt;ResponseGetHealthStatus&gt;`](#GraphQLClient.ResponseGetHealthStatus)
      * [getNetInfo()](#GraphQLClient+getNetInfo) ⇒ [`Promise.&lt;ResponseGetNetInfo&gt;`](#GraphQLClient.ResponseGetNetInfo)
      * [getNodeInfo()](#GraphQLClient+getNodeInfo) ⇒ [`Promise.&lt;ResponseGetNodeInfo&gt;`](#GraphQLClient.ResponseGetNodeInfo)
      * [getProtocolState(params)](#GraphQLClient+getProtocolState) ⇒ [`Promise.&lt;ResponseGetProtocolState&gt;`](#GraphQLClient.ResponseGetProtocolState)
      * [getProtocols(params)](#GraphQLClient+getProtocols) ⇒ [`Promise.&lt;ResponseGetProtocols&gt;`](#GraphQLClient.ResponseGetProtocols)
      * [getSimulatorStatus()](#GraphQLClient+getSimulatorStatus) ⇒ [`Promise.&lt;ResponseGetSimulatorStatus&gt;`](#GraphQLClient.ResponseGetSimulatorStatus)
      * [getStakeState(params)](#GraphQLClient+getStakeState) ⇒ [`Promise.&lt;ResponseGetStakeState&gt;`](#GraphQLClient.ResponseGetStakeState)
      * [getSwapState(params)](#GraphQLClient+getSwapState) ⇒ [`Promise.&lt;ResponseGetSwapState&gt;`](#GraphQLClient.ResponseGetSwapState)
      * [getTetherState(params)](#GraphQLClient+getTetherState) ⇒ [`Promise.&lt;ResponseGetTetherState&gt;`](#GraphQLClient.ResponseGetTetherState)
      * [getTx(params)](#GraphQLClient+getTx) ⇒ [`Promise.&lt;ResponseGetTx&gt;`](#GraphQLClient.ResponseGetTx)
      * [getUnconfirmedTxs(params)](#GraphQLClient+getUnconfirmedTxs) ⇒ [`Promise.&lt;ResponseGetUnconfirmedTxs&gt;`](#GraphQLClient.ResponseGetUnconfirmedTxs)
      * [getValidatorsInfo()](#GraphQLClient+getValidatorsInfo) ⇒ [`Promise.&lt;ResponseGetValidatorsInfo&gt;`](#GraphQLClient.ResponseGetValidatorsInfo)
      * [listAssetTransactions(params)](#GraphQLClient+listAssetTransactions) ⇒ [`Promise.&lt;ResponseListAssetTransactions&gt;`](#GraphQLClient.ResponseListAssetTransactions)
      * [listAssets(params)](#GraphQLClient+listAssets) ⇒ [`Promise.&lt;ResponseListAssets&gt;`](#GraphQLClient.ResponseListAssets)
      * [listBlocks(params)](#GraphQLClient+listBlocks) ⇒ [`Promise.&lt;ResponseListBlocks&gt;`](#GraphQLClient.ResponseListBlocks)
      * [listStakes(params)](#GraphQLClient+listStakes) ⇒ [`Promise.&lt;ResponseListStakes&gt;`](#GraphQLClient.ResponseListStakes)
      * [listSwap(params)](#GraphQLClient+listSwap) ⇒ [`Promise.&lt;ResponseListSwap&gt;`](#GraphQLClient.ResponseListSwap)
      * [listTethers(params)](#GraphQLClient+listTethers) ⇒ [`Promise.&lt;ResponseListTethers&gt;`](#GraphQLClient.ResponseListTethers)
      * [listTopAccounts(params)](#GraphQLClient+listTopAccounts) ⇒ [`Promise.&lt;ResponseListTopAccounts&gt;`](#GraphQLClient.ResponseListTopAccounts)
      * [listTransactions(params)](#GraphQLClient+listTransactions) ⇒ [`Promise.&lt;ResponseListTransactions&gt;`](#GraphQLClient.ResponseListTransactions)
      * [sendTx(params)](#GraphQLClient+sendTx) ⇒ [`Promise.&lt;ResponseSendTx&gt;`](#GraphQLClient.ResponseSendTx)
      * [startSimulator()](#GraphQLClient+startSimulator) ⇒ [`Promise.&lt;ResponseStartSimulator&gt;`](#GraphQLClient.ResponseStartSimulator)
      * [stopSimulator()](#GraphQLClient+stopSimulator) ⇒ [`Promise.&lt;ResponseStopSimulator&gt;`](#GraphQLClient.ResponseStopSimulator)
      * [unsubscribe(params)](#GraphQLClient+unsubscribe) ⇒ [`Promise.&lt;ResponseUnsubscribe&gt;`](#GraphQLClient.ResponseUnsubscribe)
      * [subscribe(params)](#GraphQLClient+subscribe) ⇒ [`Promise.&lt;ResponseSubscribe&gt;`](#GraphQLClient.ResponseSubscribe)
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
      * [ApproveTetherTx](#GraphQLClient.ApproveTetherTx) : `object`
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
      * [ConsensusUpgradeTx](#GraphQLClient.ConsensusUpgradeTx) : `object`
      * [ConsumeAssetTx](#GraphQLClient.ConsumeAssetTx) : `object`
      * [CoreProtocol](#GraphQLClient.CoreProtocol) : `object`
      * [CreateAssetTx](#GraphQLClient.CreateAssetTx) : `object`
      * [DeclareConfig](#GraphQLClient.DeclareConfig) : `object`
      * [DeclareFileTx](#GraphQLClient.DeclareFileTx) : `object`
      * [DeclareTx](#GraphQLClient.DeclareTx) : `object`
      * [DelegateConfig](#GraphQLClient.DelegateConfig) : `object`
      * [DelegateOpState](#GraphQLClient.DelegateOpState) : `object`
      * [DelegateState](#GraphQLClient.DelegateState) : `object`
      * [DeployProtocolTx](#GraphQLClient.DeployProtocolTx) : `object`
      * [DepositTetherTx](#GraphQLClient.DepositTetherTx) : `object`
      * [DiskSpaceStatus](#GraphQLClient.DiskSpaceStatus) : `object`
      * [Evidence](#GraphQLClient.Evidence) : `object`
      * [ExchangeInfo](#GraphQLClient.ExchangeInfo) : `object`
      * [ExchangeTetherTx](#GraphQLClient.ExchangeTetherTx) : `object`
      * [ExchangeTx](#GraphQLClient.ExchangeTx) : `object`
      * [ExtraAccountMigrate](#GraphQLClient.ExtraAccountMigrate) : `object`
      * [ExtraCreateAsset](#GraphQLClient.ExtraCreateAsset) : `object`
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
      * [Protocol](#GraphQLClient.Protocol) : `object`
      * [ProtocolState](#GraphQLClient.ProtocolState) : `object`
      * [PubKey](#GraphQLClient.PubKey) : `object`
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
      * [ResponseGetProtocolState](#GraphQLClient.ResponseGetProtocolState) : `object`
      * [ResponseGetProtocols](#GraphQLClient.ResponseGetProtocols) : `object`
      * [ResponseGetSimulatorStatus](#GraphQLClient.ResponseGetSimulatorStatus) : `object`
      * [ResponseGetStakeState](#GraphQLClient.ResponseGetStakeState) : `object`
      * [ResponseGetSwapState](#GraphQLClient.ResponseGetSwapState) : `object`
      * [ResponseGetTetherState](#GraphQLClient.ResponseGetTetherState) : `object`
      * [ResponseGetTx](#GraphQLClient.ResponseGetTx) : `object`
      * [ResponseGetUnconfirmedTxs](#GraphQLClient.ResponseGetUnconfirmedTxs) : `object`
      * [ResponseGetValidatorsInfo](#GraphQLClient.ResponseGetValidatorsInfo) : `object`
      * [ResponseListAssetTransactions](#GraphQLClient.ResponseListAssetTransactions) : `object`
      * [ResponseListAssets](#GraphQLClient.ResponseListAssets) : `object`
      * [ResponseListBlocks](#GraphQLClient.ResponseListBlocks) : `object`
      * [ResponseListStakes](#GraphQLClient.ResponseListStakes) : `object`
      * [ResponseListSwap](#GraphQLClient.ResponseListSwap) : `object`
      * [ResponseListTethers](#GraphQLClient.ResponseListTethers) : `object`
      * [ResponseListTopAccounts](#GraphQLClient.ResponseListTopAccounts) : `object`
      * [ResponseListTransactions](#GraphQLClient.ResponseListTransactions) : `object`
      * [ResponseSendTx](#GraphQLClient.ResponseSendTx) : `object`
      * [ResponseStartSimulator](#GraphQLClient.ResponseStartSimulator) : `object`
      * [ResponseStopSimulator](#GraphQLClient.ResponseStopSimulator) : `object`
      * [ResponseSubscribe](#GraphQLClient.ResponseSubscribe) : `object`
      * [ResponseUnsubscribe](#GraphQLClient.ResponseUnsubscribe) : `object`
      * [RetrieveSwapTx](#GraphQLClient.RetrieveSwapTx) : `object`
      * [RevokeSwapTx](#GraphQLClient.RevokeSwapTx) : `object`
      * [RevokeTetherTx](#GraphQLClient.RevokeTetherTx) : `object`
      * [SetupSwapTx](#GraphQLClient.SetupSwapTx) : `object`
      * [StakeConfig](#GraphQLClient.StakeConfig) : `object`
      * [StakeContext](#GraphQLClient.StakeContext) : `object`
      * [StakeDataType](#GraphQLClient.StakeDataType) : `object`
      * [StakeState](#GraphQLClient.StakeState) : `object`
      * [StakeSummary](#GraphQLClient.StakeSummary) : `object`
      * [StakeSummaryEntry](#GraphQLClient.StakeSummaryEntry) : `object`
      * [StakeTx](#GraphQLClient.StakeTx) : `object`
      * [StateContext](#GraphQLClient.StateContext) : `object`
      * [StorageStatus](#GraphQLClient.StorageStatus) : `object`
      * [SwapState](#GraphQLClient.SwapState) : `object`
      * [SysUpgradeTx](#GraphQLClient.SysUpgradeTx) : `object`
      * [TasksEntry](#GraphQLClient.TasksEntry) : `object`
      * [TetherExchangeInfo](#GraphQLClient.TetherExchangeInfo) : `object`
      * [TetherState](#GraphQLClient.TetherState) : `object`
      * [TetherTradeInfo](#GraphQLClient.TetherTradeInfo) : `object`
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
      * [WithdrawTetherTx](#GraphQLClient.WithdrawTetherTx) : `object`
      * [GetAccountStateParams](#GraphQLClient.GetAccountStateParams) : `object`
      * [GetAssetStateParams](#GraphQLClient.GetAssetStateParams) : `object`
      * [GetBlockParams](#GraphQLClient.GetBlockParams) : `object`
      * [GetBlocksParams](#GraphQLClient.GetBlocksParams) : `object`
      * [GetConfigParams](#GraphQLClient.GetConfigParams) : `object`
      * [GetDelegateStateParams](#GraphQLClient.GetDelegateStateParams) : `object`
      * [GetForgeStateParams](#GraphQLClient.GetForgeStateParams) : `object`
      * [GetForgeStatsByDayParams](#GraphQLClient.GetForgeStatsByDayParams) : `object`
      * [GetForgeStatsByHourParams](#GraphQLClient.GetForgeStatsByHourParams) : `object`
      * [GetProtocolStateParams](#GraphQLClient.GetProtocolStateParams) : `object`
      * [GetProtocolsParams](#GraphQLClient.GetProtocolsParams) : `object`
      * [GetStakeStateParams](#GraphQLClient.GetStakeStateParams) : `object`
      * [GetSwapStateParams](#GraphQLClient.GetSwapStateParams) : `object`
      * [GetTetherStateParams](#GraphQLClient.GetTetherStateParams) : `object`
      * [GetTxParams](#GraphQLClient.GetTxParams) : `object`
      * [GetUnconfirmedTxsParams](#GraphQLClient.GetUnconfirmedTxsParams) : `object`
      * [ListAssetTransactionsParams](#GraphQLClient.ListAssetTransactionsParams) : `object`
      * [ListAssetsParams](#GraphQLClient.ListAssetsParams) : `object`
      * [ListBlocksParams](#GraphQLClient.ListBlocksParams) : `object`
      * [ListStakesParams](#GraphQLClient.ListStakesParams) : `object`
      * [ListSwapParams](#GraphQLClient.ListSwapParams) : `object`
      * [ListTethersParams](#GraphQLClient.ListTethersParams) : `object`
      * [ListTopAccountsParams](#GraphQLClient.ListTopAccountsParams) : `object`
      * [ListTransactionsParams](#GraphQLClient.ListTransactionsParams) : `object`
      * [SendTxParams](#GraphQLClient.SendTxParams) : `object`
      * [UnsubscribeParams](#GraphQLClient.UnsubscribeParams) : `object`
      * [SubscribeParams](#GraphQLClient.SubscribeParams) : `object`
      * [RevokeSwapTxInput](#GraphQLClient.RevokeSwapTxInput) : `Object`
      * [WithdrawTokenTxInput](#GraphQLClient.WithdrawTokenTxInput) : `Object`
      * [DeactivateProtocolTxInput](#GraphQLClient.DeactivateProtocolTxInput) : `Object`
      * [AccountMigrateTxInput](#GraphQLClient.AccountMigrateTxInput) : `Object`
      * [SetupSwapTxInput](#GraphQLClient.SetupSwapTxInput) : `Object`
      * [DepositTetherTxInput](#GraphQLClient.DepositTetherTxInput) : `Object`
      * [StakeTxInput](#GraphQLClient.StakeTxInput) : `Object`
      * [DeployProtocolTxInput](#GraphQLClient.DeployProtocolTxInput) : `Object`
      * [CreateAssetTxInput](#GraphQLClient.CreateAssetTxInput) : `Object`
      * [ExchangeTxInput](#GraphQLClient.ExchangeTxInput) : `Object`
      * [ConsumeAssetTxInput](#GraphQLClient.ConsumeAssetTxInput) : `Object`
      * [RetrieveSwapTxInput](#GraphQLClient.RetrieveSwapTxInput) : `Object`
      * [TransferTxInput](#GraphQLClient.TransferTxInput) : `Object`
      * [RevokeTetherTxInput](#GraphQLClient.RevokeTetherTxInput) : `Object`
      * [ApproveWithdrawTxInput](#GraphQLClient.ApproveWithdrawTxInput) : `Object`
      * [DelegateTxInput](#GraphQLClient.DelegateTxInput) : `Object`
      * [ApproveTetherTxInput](#GraphQLClient.ApproveTetherTxInput) : `Object`
      * [DepositTokenTxInput](#GraphQLClient.DepositTokenTxInput) : `Object`
      * [PokeTxInput](#GraphQLClient.PokeTxInput) : `Object`
      * [ExchangeTetherTxInput](#GraphQLClient.ExchangeTetherTxInput) : `Object`
      * [WithdrawTetherTxInput](#GraphQLClient.WithdrawTetherTxInput) : `Object`
      * [ActivateProtocolTxInput](#GraphQLClient.ActivateProtocolTxInput) : `Object`
      * [UpgradeNodeTxInput](#GraphQLClient.UpgradeNodeTxInput) : `Object`
      * [UpdateAssetTxInput](#GraphQLClient.UpdateAssetTxInput) : `Object`
      * [AcquireAssetTxInput](#GraphQLClient.AcquireAssetTxInput) : `Object`
      * [DeclareTxInput](#GraphQLClient.DeclareTxInput) : `Object`
      * [RevokeWithdrawTxInput](#GraphQLClient.RevokeWithdrawTxInput) : `Object`

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

### graphQLClient.getTxSendMethods() ⇒ `Array.&lt;string&gt;`

List all transaction send methods
Each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  

### graphQLClient.getTxEncodeMethods() ⇒ `Array.&lt;string&gt;`

List all transaction encode methods, each method can be used to encode transaction to buffer and object

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  

### graphQLClient.getTxSignMethods() ⇒ `Array.&lt;string&gt;`

List all transaction sign methods, each method can be used to sign transaction to an object

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  

### graphQLClient.getTxMultiSignMethods() ⇒ `Array.&lt;string&gt;`

List all transaction multi sign methods, each method can be used to do multi sign a transaction

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  

### graphQLClient.getType(x) ⇒ `class` \| `null`

Get protobuf message class by name, only supports forge-built-in types

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `class` \| `null` - message type  

| Param | Type     |
| ----- | -------- |
| x     | `string` |

### graphQLClient.decodeTx(buffer) ⇒ `object`

Decode transaction buffer to an object

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `object` - transaction object  

| Param  | Type     |
| ------ | -------- |
| buffer | `buffer` |

### graphQLClient.getQueries() ⇒ `Array.&lt;string&gt;`

List all query method names

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  
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
//   getProtocolState,
//   getProtocols,
//   getSimulatorStatus,
//   getStakeState,
//   getSwapState,
//   getTetherState,
//   getTx,
//   getUnconfirmedTxs,
//   getValidatorsInfo,
//   listAssetTransactions,
//   listAssets,
//   listBlocks,
//   listStakes,
//   listSwap,
//   listTethers,
//   listTopAccounts,
//   listTransactions,
// ]
```

### graphQLClient.getMutations() ⇒ `Array.&lt;string&gt;`

List all mutation method names

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  
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

### graphQLClient.getSubscription() ⇒ `Array.&lt;string&gt;`

List all subscription method names

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Array.&lt;string&gt;` - method name list  
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

### graphQLClient.sendRevokeSwapTx(params) ⇒ `Promise.&lt;string&gt;`

Send RevokeSwapTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`RevokeSwapTxInput`](#GraphQLClient.RevokeSwapTxInput) |

### graphQLClient.sendWithdrawTokenTx(params) ⇒ `Promise.&lt;string&gt;`

Send WithdrawTokenTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`WithdrawTokenTxInput`](#GraphQLClient.WithdrawTokenTxInput) |

### graphQLClient.sendDeactivateProtocolTx(params) ⇒ `Promise.&lt;string&gt;`

Send DeactivateProtocolTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [`DeactivateProtocolTxInput`](#GraphQLClient.DeactivateProtocolTxInput) |

### graphQLClient.sendAccountMigrateTx(params) ⇒ `Promise.&lt;string&gt;`

Send AccountMigrateTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`AccountMigrateTxInput`](#GraphQLClient.AccountMigrateTxInput) |

### graphQLClient.sendSetupSwapTx(params) ⇒ `Promise.&lt;string&gt;`

Send SetupSwapTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`SetupSwapTxInput`](#GraphQLClient.SetupSwapTxInput) |

### graphQLClient.sendDepositTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send DepositTetherTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`DepositTetherTxInput`](#GraphQLClient.DepositTetherTxInput) |

### graphQLClient.sendStakeTx(params) ⇒ `Promise.&lt;string&gt;`

Send StakeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                          |
| ------ | --------------------------------------------- |
| params | [`StakeTxInput`](#GraphQLClient.StakeTxInput) |

### graphQLClient.sendDeployProtocolTx(params) ⇒ `Promise.&lt;string&gt;`

Send DeployProtocolTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`DeployProtocolTxInput`](#GraphQLClient.DeployProtocolTxInput) |

### graphQLClient.sendCreateAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send CreateAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`CreateAssetTxInput`](#GraphQLClient.CreateAssetTxInput) |

### graphQLClient.sendExchangeTx(params) ⇒ `Promise.&lt;string&gt;`

Send ExchangeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`ExchangeTxInput`](#GraphQLClient.ExchangeTxInput) |

### graphQLClient.sendConsumeAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send ConsumeAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`ConsumeAssetTxInput`](#GraphQLClient.ConsumeAssetTxInput) |

### graphQLClient.sendRetrieveSwapTx(params) ⇒ `Promise.&lt;string&gt;`

Send RetrieveSwapTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`RetrieveSwapTxInput`](#GraphQLClient.RetrieveSwapTxInput) |

### graphQLClient.sendTransferTx(params) ⇒ `Promise.&lt;string&gt;`

Send TransferTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`TransferTxInput`](#GraphQLClient.TransferTxInput) |

### graphQLClient.sendRevokeTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send RevokeTetherTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`RevokeTetherTxInput`](#GraphQLClient.RevokeTetherTxInput) |

### graphQLClient.sendApproveWithdrawTx(params) ⇒ `Promise.&lt;string&gt;`

Send ApproveWithdrawTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`ApproveWithdrawTxInput`](#GraphQLClient.ApproveWithdrawTxInput) |

### graphQLClient.sendDelegateTx(params) ⇒ `Promise.&lt;string&gt;`

Send DelegateTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`DelegateTxInput`](#GraphQLClient.DelegateTxInput) |

### graphQLClient.sendApproveTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send ApproveTetherTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`ApproveTetherTxInput`](#GraphQLClient.ApproveTetherTxInput) |

### graphQLClient.sendDepositTokenTx(params) ⇒ `Promise.&lt;string&gt;`

Send DepositTokenTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`DepositTokenTxInput`](#GraphQLClient.DepositTokenTxInput) |

### graphQLClient.sendPokeTx(params) ⇒ `Promise.&lt;string&gt;`

Send PokeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                        |
| ------ | ------------------------------------------- |
| params | [`PokeTxInput`](#GraphQLClient.PokeTxInput) |

### graphQLClient.sendExchangeTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send ExchangeTetherTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`ExchangeTetherTxInput`](#GraphQLClient.ExchangeTetherTxInput) |

### graphQLClient.sendWithdrawTetherTx(params) ⇒ `Promise.&lt;string&gt;`

Send WithdrawTetherTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`WithdrawTetherTxInput`](#GraphQLClient.WithdrawTetherTxInput) |

### graphQLClient.sendActivateProtocolTx(params) ⇒ `Promise.&lt;string&gt;`

Send ActivateProtocolTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [`ActivateProtocolTxInput`](#GraphQLClient.ActivateProtocolTxInput) |

### graphQLClient.sendUpgradeNodeTx(params) ⇒ `Promise.&lt;string&gt;`

Send UpgradeNodeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpgradeNodeTxInput`](#GraphQLClient.UpgradeNodeTxInput) |

### graphQLClient.sendUpdateAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send UpdateAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpdateAssetTxInput`](#GraphQLClient.UpdateAssetTxInput) |

### graphQLClient.sendAcquireAssetTx(params) ⇒ `Promise.&lt;string&gt;`

Send AcquireAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`AcquireAssetTxInput`](#GraphQLClient.AcquireAssetTxInput) |

### graphQLClient.sendDeclareTx(params) ⇒ `Promise.&lt;string&gt;`

Send DeclareTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`DeclareTxInput`](#GraphQLClient.DeclareTxInput) |

### graphQLClient.sendRevokeWithdrawTx(params) ⇒ `Promise.&lt;string&gt;`

Send RevokeWithdrawTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: `Promise.&lt;string&gt;` - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`RevokeWithdrawTxInput`](#GraphQLClient.RevokeWithdrawTxInput) |

### graphQLClient.encodeRevokeSwapTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a RevokeSwapTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`RevokeSwapTxInput`](#GraphQLClient.RevokeSwapTxInput) |

### graphQLClient.encodeWithdrawTokenTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a WithdrawTokenTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`WithdrawTokenTxInput`](#GraphQLClient.WithdrawTokenTxInput) |

### graphQLClient.encodeDeactivateProtocolTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a DeactivateProtocolTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [`DeactivateProtocolTxInput`](#GraphQLClient.DeactivateProtocolTxInput) |

### graphQLClient.encodeAccountMigrateTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a AccountMigrateTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`AccountMigrateTxInput`](#GraphQLClient.AccountMigrateTxInput) |

### graphQLClient.encodeSetupSwapTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a SetupSwapTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`SetupSwapTxInput`](#GraphQLClient.SetupSwapTxInput) |

### graphQLClient.encodeDepositTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a DepositTetherTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`DepositTetherTxInput`](#GraphQLClient.DepositTetherTxInput) |

### graphQLClient.encodeStakeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a StakeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                          |
| ------ | --------------------------------------------- |
| params | [`StakeTxInput`](#GraphQLClient.StakeTxInput) |

### graphQLClient.encodeDeployProtocolTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a DeployProtocolTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`DeployProtocolTxInput`](#GraphQLClient.DeployProtocolTxInput) |

### graphQLClient.encodeCreateAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a CreateAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`CreateAssetTxInput`](#GraphQLClient.CreateAssetTxInput) |

### graphQLClient.encodeExchangeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a ExchangeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`ExchangeTxInput`](#GraphQLClient.ExchangeTxInput) |

### graphQLClient.encodeConsumeAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a ConsumeAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`ConsumeAssetTxInput`](#GraphQLClient.ConsumeAssetTxInput) |

### graphQLClient.encodeRetrieveSwapTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a RetrieveSwapTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`RetrieveSwapTxInput`](#GraphQLClient.RetrieveSwapTxInput) |

### graphQLClient.encodeTransferTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a TransferTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`TransferTxInput`](#GraphQLClient.TransferTxInput) |

### graphQLClient.encodeRevokeTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a RevokeTetherTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`RevokeTetherTxInput`](#GraphQLClient.RevokeTetherTxInput) |

### graphQLClient.encodeApproveWithdrawTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a ApproveWithdrawTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`ApproveWithdrawTxInput`](#GraphQLClient.ApproveWithdrawTxInput) |

### graphQLClient.encodeDelegateTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a DelegateTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`DelegateTxInput`](#GraphQLClient.DelegateTxInput) |

### graphQLClient.encodeApproveTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a ApproveTetherTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`ApproveTetherTxInput`](#GraphQLClient.ApproveTetherTxInput) |

### graphQLClient.encodeDepositTokenTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a DepositTokenTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`DepositTokenTxInput`](#GraphQLClient.DepositTokenTxInput) |

### graphQLClient.encodePokeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a PokeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                        |
| ------ | ------------------------------------------- |
| params | [`PokeTxInput`](#GraphQLClient.PokeTxInput) |

### graphQLClient.encodeExchangeTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a ExchangeTetherTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`ExchangeTetherTxInput`](#GraphQLClient.ExchangeTetherTxInput) |

### graphQLClient.encodeWithdrawTetherTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a WithdrawTetherTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`WithdrawTetherTxInput`](#GraphQLClient.WithdrawTetherTxInput) |

### graphQLClient.encodeActivateProtocolTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a ActivateProtocolTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [`ActivateProtocolTxInput`](#GraphQLClient.ActivateProtocolTxInput) |

### graphQLClient.encodeUpgradeNodeTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a UpgradeNodeTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpgradeNodeTxInput`](#GraphQLClient.UpgradeNodeTxInput) |

### graphQLClient.encodeUpdateAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a UpdateAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`UpdateAssetTxInput`](#GraphQLClient.UpdateAssetTxInput) |

### graphQLClient.encodeAcquireAssetTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a AcquireAssetTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`AcquireAssetTxInput`](#GraphQLClient.AcquireAssetTxInput) |

### graphQLClient.encodeDeclareTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a DeclareTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`DeclareTxInput`](#GraphQLClient.DeclareTxInput) |

### graphQLClient.encodeRevokeWithdrawTx(params) ⇒ [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput)

Encode a RevokeWithdrawTx transaction for later use

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;TxEncodeOutput&gt;`](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`RevokeWithdrawTxInput`](#GraphQLClient.RevokeWithdrawTxInput) |

### graphQLClient.getAccountState(params) ⇒ [`Promise.&lt;ResponseGetAccountState&gt;`](#GraphQLClient.ResponseGetAccountState)

getAccountState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetAccountState&gt;`](#GraphQLClient.ResponseGetAccountState) - Checkout [ResponseGetAccountState](#GraphQLClient.ResponseGetAccountState) for resolved data format  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`GetAccountStateParams`](#GraphQLClient.GetAccountStateParams) |

### graphQLClient.getAssetState(params) ⇒ [`Promise.&lt;ResponseGetAssetState&gt;`](#GraphQLClient.ResponseGetAssetState)

getAssetState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetAssetState&gt;`](#GraphQLClient.ResponseGetAssetState) - Checkout [ResponseGetAssetState](#GraphQLClient.ResponseGetAssetState) for resolved data format  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`GetAssetStateParams`](#GraphQLClient.GetAssetStateParams) |

### graphQLClient.getBlock(params) ⇒ [`Promise.&lt;ResponseGetBlock&gt;`](#GraphQLClient.ResponseGetBlock)

getBlock

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetBlock&gt;`](#GraphQLClient.ResponseGetBlock) - Checkout [ResponseGetBlock](#GraphQLClient.ResponseGetBlock) for resolved data format  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`GetBlockParams`](#GraphQLClient.GetBlockParams) |

### graphQLClient.getBlocks(params) ⇒ [`Promise.&lt;ResponseGetBlocks&gt;`](#GraphQLClient.ResponseGetBlocks)

getBlocks

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetBlocks&gt;`](#GraphQLClient.ResponseGetBlocks) - Checkout [ResponseGetBlocks](#GraphQLClient.ResponseGetBlocks) for resolved data format  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`GetBlocksParams`](#GraphQLClient.GetBlocksParams) |

### graphQLClient.getChainInfo() ⇒ [`Promise.&lt;ResponseGetChainInfo&gt;`](#GraphQLClient.ResponseGetChainInfo)

getChainInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetChainInfo&gt;`](#GraphQLClient.ResponseGetChainInfo) - Checkout [ResponseGetChainInfo](#GraphQLClient.ResponseGetChainInfo) for resolved data format  

### graphQLClient.getConfig(params) ⇒ [`Promise.&lt;ResponseGetConfig&gt;`](#GraphQLClient.ResponseGetConfig)

getConfig

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetConfig&gt;`](#GraphQLClient.ResponseGetConfig) - Checkout [ResponseGetConfig](#GraphQLClient.ResponseGetConfig) for resolved data format  

| Param  | Type                                                |
| ------ | --------------------------------------------------- |
| params | [`GetConfigParams`](#GraphQLClient.GetConfigParams) |

### graphQLClient.getDelegateState(params) ⇒ [`Promise.&lt;ResponseGetDelegateState&gt;`](#GraphQLClient.ResponseGetDelegateState)

getDelegateState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetDelegateState&gt;`](#GraphQLClient.ResponseGetDelegateState) - Checkout [ResponseGetDelegateState](#GraphQLClient.ResponseGetDelegateState) for resolved data format  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`GetDelegateStateParams`](#GraphQLClient.GetDelegateStateParams) |

### graphQLClient.getForgeState(params) ⇒ [`Promise.&lt;ResponseGetForgeState&gt;`](#GraphQLClient.ResponseGetForgeState)

getForgeState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetForgeState&gt;`](#GraphQLClient.ResponseGetForgeState) - Checkout [ResponseGetForgeState](#GraphQLClient.ResponseGetForgeState) for resolved data format  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`GetForgeStateParams`](#GraphQLClient.GetForgeStateParams) |

### graphQLClient.getForgeStats() ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats)

getForgeStats

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

### graphQLClient.getForgeStatsByDay(params) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats)

getForgeStatsByDay

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

| Param  | Type                                                                  |
| ------ | --------------------------------------------------------------------- |
| params | [`GetForgeStatsByDayParams`](#GraphQLClient.GetForgeStatsByDayParams) |

### graphQLClient.getForgeStatsByHour(params) ⇒ [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats)

getForgeStatsByHour

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetForgeStats&gt;`](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

| Param  | Type                                                                    |
| ------ | ----------------------------------------------------------------------- |
| params | [`GetForgeStatsByHourParams`](#GraphQLClient.GetForgeStatsByHourParams) |

### graphQLClient.getHealthStatus() ⇒ [`Promise.&lt;ResponseGetHealthStatus&gt;`](#GraphQLClient.ResponseGetHealthStatus)

getHealthStatus

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetHealthStatus&gt;`](#GraphQLClient.ResponseGetHealthStatus) - Checkout [ResponseGetHealthStatus](#GraphQLClient.ResponseGetHealthStatus) for resolved data format  

### graphQLClient.getNetInfo() ⇒ [`Promise.&lt;ResponseGetNetInfo&gt;`](#GraphQLClient.ResponseGetNetInfo)

getNetInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetNetInfo&gt;`](#GraphQLClient.ResponseGetNetInfo) - Checkout [ResponseGetNetInfo](#GraphQLClient.ResponseGetNetInfo) for resolved data format  

### graphQLClient.getNodeInfo() ⇒ [`Promise.&lt;ResponseGetNodeInfo&gt;`](#GraphQLClient.ResponseGetNodeInfo)

getNodeInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetNodeInfo&gt;`](#GraphQLClient.ResponseGetNodeInfo) - Checkout [ResponseGetNodeInfo](#GraphQLClient.ResponseGetNodeInfo) for resolved data format  

### graphQLClient.getProtocolState(params) ⇒ [`Promise.&lt;ResponseGetProtocolState&gt;`](#GraphQLClient.ResponseGetProtocolState)

getProtocolState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetProtocolState&gt;`](#GraphQLClient.ResponseGetProtocolState) - Checkout [ResponseGetProtocolState](#GraphQLClient.ResponseGetProtocolState) for resolved data format  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`GetProtocolStateParams`](#GraphQLClient.GetProtocolStateParams) |

### graphQLClient.getProtocols(params) ⇒ [`Promise.&lt;ResponseGetProtocols&gt;`](#GraphQLClient.ResponseGetProtocols)

getProtocols

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetProtocols&gt;`](#GraphQLClient.ResponseGetProtocols) - Checkout [ResponseGetProtocols](#GraphQLClient.ResponseGetProtocols) for resolved data format  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`GetProtocolsParams`](#GraphQLClient.GetProtocolsParams) |

### graphQLClient.getSimulatorStatus() ⇒ [`Promise.&lt;ResponseGetSimulatorStatus&gt;`](#GraphQLClient.ResponseGetSimulatorStatus)

getSimulatorStatus

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetSimulatorStatus&gt;`](#GraphQLClient.ResponseGetSimulatorStatus) - Checkout [ResponseGetSimulatorStatus](#GraphQLClient.ResponseGetSimulatorStatus) for resolved data format  

### graphQLClient.getStakeState(params) ⇒ [`Promise.&lt;ResponseGetStakeState&gt;`](#GraphQLClient.ResponseGetStakeState)

getStakeState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetStakeState&gt;`](#GraphQLClient.ResponseGetStakeState) - Checkout [ResponseGetStakeState](#GraphQLClient.ResponseGetStakeState) for resolved data format  

| Param  | Type                                                        |
| ------ | ----------------------------------------------------------- |
| params | [`GetStakeStateParams`](#GraphQLClient.GetStakeStateParams) |

### graphQLClient.getSwapState(params) ⇒ [`Promise.&lt;ResponseGetSwapState&gt;`](#GraphQLClient.ResponseGetSwapState)

getSwapState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetSwapState&gt;`](#GraphQLClient.ResponseGetSwapState) - Checkout [ResponseGetSwapState](#GraphQLClient.ResponseGetSwapState) for resolved data format  

| Param  | Type                                                      |
| ------ | --------------------------------------------------------- |
| params | [`GetSwapStateParams`](#GraphQLClient.GetSwapStateParams) |

### graphQLClient.getTetherState(params) ⇒ [`Promise.&lt;ResponseGetTetherState&gt;`](#GraphQLClient.ResponseGetTetherState)

getTetherState

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetTetherState&gt;`](#GraphQLClient.ResponseGetTetherState) - Checkout [ResponseGetTetherState](#GraphQLClient.ResponseGetTetherState) for resolved data format  

| Param  | Type                                                          |
| ------ | ------------------------------------------------------------- |
| params | [`GetTetherStateParams`](#GraphQLClient.GetTetherStateParams) |

### graphQLClient.getTx(params) ⇒ [`Promise.&lt;ResponseGetTx&gt;`](#GraphQLClient.ResponseGetTx)

getTx

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetTx&gt;`](#GraphQLClient.ResponseGetTx) - Checkout [ResponseGetTx](#GraphQLClient.ResponseGetTx) for resolved data format  

| Param  | Type                                        |
| ------ | ------------------------------------------- |
| params | [`GetTxParams`](#GraphQLClient.GetTxParams) |

### graphQLClient.getUnconfirmedTxs(params) ⇒ [`Promise.&lt;ResponseGetUnconfirmedTxs&gt;`](#GraphQLClient.ResponseGetUnconfirmedTxs)

getUnconfirmedTxs

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetUnconfirmedTxs&gt;`](#GraphQLClient.ResponseGetUnconfirmedTxs) - Checkout [ResponseGetUnconfirmedTxs](#GraphQLClient.ResponseGetUnconfirmedTxs) for resolved data format  

| Param  | Type                                                                |
| ------ | ------------------------------------------------------------------- |
| params | [`GetUnconfirmedTxsParams`](#GraphQLClient.GetUnconfirmedTxsParams) |

### graphQLClient.getValidatorsInfo() ⇒ [`Promise.&lt;ResponseGetValidatorsInfo&gt;`](#GraphQLClient.ResponseGetValidatorsInfo)

getValidatorsInfo

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseGetValidatorsInfo&gt;`](#GraphQLClient.ResponseGetValidatorsInfo) - Checkout [ResponseGetValidatorsInfo](#GraphQLClient.ResponseGetValidatorsInfo) for resolved data format  

### graphQLClient.listAssetTransactions(params) ⇒ [`Promise.&lt;ResponseListAssetTransactions&gt;`](#GraphQLClient.ResponseListAssetTransactions)

listAssetTransactions

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListAssetTransactions&gt;`](#GraphQLClient.ResponseListAssetTransactions) - Checkout [ResponseListAssetTransactions](#GraphQLClient.ResponseListAssetTransactions) for resolved data format  

| Param  | Type                                                                        |
| ------ | --------------------------------------------------------------------------- |
| params | [`ListAssetTransactionsParams`](#GraphQLClient.ListAssetTransactionsParams) |

### graphQLClient.listAssets(params) ⇒ [`Promise.&lt;ResponseListAssets&gt;`](#GraphQLClient.ResponseListAssets)

listAssets

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListAssets&gt;`](#GraphQLClient.ResponseListAssets) - Checkout [ResponseListAssets](#GraphQLClient.ResponseListAssets) for resolved data format  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`ListAssetsParams`](#GraphQLClient.ListAssetsParams) |

### graphQLClient.listBlocks(params) ⇒ [`Promise.&lt;ResponseListBlocks&gt;`](#GraphQLClient.ResponseListBlocks)

listBlocks

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListBlocks&gt;`](#GraphQLClient.ResponseListBlocks) - Checkout [ResponseListBlocks](#GraphQLClient.ResponseListBlocks) for resolved data format  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`ListBlocksParams`](#GraphQLClient.ListBlocksParams) |

### graphQLClient.listStakes(params) ⇒ [`Promise.&lt;ResponseListStakes&gt;`](#GraphQLClient.ResponseListStakes)

listStakes

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListStakes&gt;`](#GraphQLClient.ResponseListStakes) - Checkout [ResponseListStakes](#GraphQLClient.ResponseListStakes) for resolved data format  

| Param  | Type                                                  |
| ------ | ----------------------------------------------------- |
| params | [`ListStakesParams`](#GraphQLClient.ListStakesParams) |

### graphQLClient.listSwap(params) ⇒ [`Promise.&lt;ResponseListSwap&gt;`](#GraphQLClient.ResponseListSwap)

listSwap

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListSwap&gt;`](#GraphQLClient.ResponseListSwap) - Checkout [ResponseListSwap](#GraphQLClient.ResponseListSwap) for resolved data format  

| Param  | Type                                              |
| ------ | ------------------------------------------------- |
| params | [`ListSwapParams`](#GraphQLClient.ListSwapParams) |

### graphQLClient.listTethers(params) ⇒ [`Promise.&lt;ResponseListTethers&gt;`](#GraphQLClient.ResponseListTethers)

listTethers

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListTethers&gt;`](#GraphQLClient.ResponseListTethers) - Checkout [ResponseListTethers](#GraphQLClient.ResponseListTethers) for resolved data format  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`ListTethersParams`](#GraphQLClient.ListTethersParams) |

### graphQLClient.listTopAccounts(params) ⇒ [`Promise.&lt;ResponseListTopAccounts&gt;`](#GraphQLClient.ResponseListTopAccounts)

listTopAccounts

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListTopAccounts&gt;`](#GraphQLClient.ResponseListTopAccounts) - Checkout [ResponseListTopAccounts](#GraphQLClient.ResponseListTopAccounts) for resolved data format  

| Param  | Type                                                            |
| ------ | --------------------------------------------------------------- |
| params | [`ListTopAccountsParams`](#GraphQLClient.ListTopAccountsParams) |

### graphQLClient.listTransactions(params) ⇒ [`Promise.&lt;ResponseListTransactions&gt;`](#GraphQLClient.ResponseListTransactions)

listTransactions

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseListTransactions&gt;`](#GraphQLClient.ResponseListTransactions) - Checkout [ResponseListTransactions](#GraphQLClient.ResponseListTransactions) for resolved data format  

| Param  | Type                                                              |
| ------ | ----------------------------------------------------------------- |
| params | [`ListTransactionsParams`](#GraphQLClient.ListTransactionsParams) |

### graphQLClient.sendTx(params) ⇒ [`Promise.&lt;ResponseSendTx&gt;`](#GraphQLClient.ResponseSendTx)

sendTx

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseSendTx&gt;`](#GraphQLClient.ResponseSendTx) - Checkout [ResponseSendTx](#GraphQLClient.ResponseSendTx) for resolved data format  

| Param  | Type                                          |
| ------ | --------------------------------------------- |
| params | [`SendTxParams`](#GraphQLClient.SendTxParams) |

### graphQLClient.startSimulator() ⇒ [`Promise.&lt;ResponseStartSimulator&gt;`](#GraphQLClient.ResponseStartSimulator)

startSimulator

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseStartSimulator&gt;`](#GraphQLClient.ResponseStartSimulator) - Checkout [ResponseStartSimulator](#GraphQLClient.ResponseStartSimulator) for resolved data format  

### graphQLClient.stopSimulator() ⇒ [`Promise.&lt;ResponseStopSimulator&gt;`](#GraphQLClient.ResponseStopSimulator)

stopSimulator

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseStopSimulator&gt;`](#GraphQLClient.ResponseStopSimulator) - Checkout [ResponseStopSimulator](#GraphQLClient.ResponseStopSimulator) for resolved data format  

### graphQLClient.unsubscribe(params) ⇒ [`Promise.&lt;ResponseUnsubscribe&gt;`](#GraphQLClient.ResponseUnsubscribe)

unsubscribe

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseUnsubscribe&gt;`](#GraphQLClient.ResponseUnsubscribe) - Checkout [ResponseUnsubscribe](#GraphQLClient.ResponseUnsubscribe) for resolved data format  

| Param  | Type                                                    |
| ------ | ------------------------------------------------------- |
| params | [`UnsubscribeParams`](#GraphQLClient.UnsubscribeParams) |

### graphQLClient.subscribe(params) ⇒ [`Promise.&lt;ResponseSubscribe&gt;`](#GraphQLClient.ResponseSubscribe)

subscribe

**Kind**: instance method of [`GraphQLClient`](#GraphQLClient)  
**Returns**: [`Promise.&lt;ResponseSubscribe&gt;`](#GraphQLClient.ResponseSubscribe) - Checkout [ResponseSubscribe](#GraphQLClient.ResponseSubscribe) for resolved data format  

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

| Name   | Type                                       |
| ------ | ------------------------------------------ |
| cursor | `string`                                   |
| order  | `Array.&lt;...GraphQLClient.PageOrder&gt;` |
| size   | `number`                                   |

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

| Name  | Type                                    |
| ----- | --------------------------------------- |
| types | `Array.&lt;...GraphQLClient.string&gt;` |

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

| Name         | Type                                          |
| ------------ | --------------------------------------------- |
| address      | `string`                                      |
| balance      | `string`                                      |
| ...context   | [`StateContext`](#GraphQLClient.StateContext) |
| ...data      | [`Any`](#GraphQLClient.Any)                   |
| issuer       | `string`                                      |
| migratedFrom | `Array.&lt;...GraphQLClient.string&gt;`       |
| migratedTo   | `Array.&lt;...GraphQLClient.string&gt;`       |
| moniker      | `string`                                      |
| nonce        | `string`                                      |
| numAssets    | `string`                                      |
| numTxs       | `string`                                      |
| pk           | `string`                                      |
| ...poke      | [`PokeInfo`](#GraphQLClient.PokeInfo)         |
| ...stake     | [`StakeContext`](#GraphQLClient.StakeContext) |
| ...type      | [`WalletType`](#GraphQLClient.WalletType)     |

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

| Name    | Type                                       |
| ------- | ------------------------------------------ |
| ...data | [`Any`](#GraphQLClient.Any)                |
| specs   | `Array.&lt;...GraphQLClient.AssetSpec&gt;` |
| to      | `string`                                   |

### GraphQLClient.Any : `object`

Structure of GraphQLClient.Any

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| typeUrl | `string` |
| value   | `string` |

### GraphQLClient.ApproveTetherTx : `object`

Structure of GraphQLClient.ApproveTetherTx

Checkout the following snippet for the format of ApproveTetherTx:

```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "withdraw": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                        |
| -------- | --------------------------- |
| ...data  | [`Any`](#GraphQLClient.Any) |
| withdraw | `string`                    |

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

| Name               | Type                                             |
| ------------------ | ------------------------------------------------ |
| appHash            | `string`                                         |
| consensusHash      | `string`                                         |
| dataHash           | `string`                                         |
| evidenceHash       | `string`                                         |
| height             | `string`                                         |
| invalidTxs         | `Array.&lt;...GraphQLClient.TransactionInfo&gt;` |
| invalidTxsHashes   | `Array.&lt;...GraphQLClient.string&gt;`          |
| ...lastBlockId     | [`BlockId`](#GraphQLClient.BlockId)              |
| lastCommitHash     | `string`                                         |
| lastResultsHash    | `string`                                         |
| nextValidatorsHash | `string`                                         |
| numTxs             | `number`                                         |
| proposer           | `string`                                         |
| time               | `string`                                         |
| totalTxs           | `string`                                         |
| txs                | `Array.&lt;...GraphQLClient.TransactionInfo&gt;` |
| txsHashes          | `Array.&lt;...GraphQLClient.string&gt;`          |
| validatorsHash     | `string`                                         |
| ...version         | [`Version`](#GraphQLClient.Version)              |

### GraphQLClient.BlockInfoSimple : `object`

Structure of GraphQLClient.BlockInfoSimple

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name               | Type                                    |
| ------------------ | --------------------------------------- |
| appHash            | `string`                                |
| consensusHash      | `string`                                |
| dataHash           | `string`                                |
| evidenceHash       | `string`                                |
| height             | `string`                                |
| invalidTxsHashes   | `Array.&lt;...GraphQLClient.string&gt;` |
| ...lastBlockId     | [`BlockId`](#GraphQLClient.BlockId)     |
| lastCommitHash     | `string`                                |
| lastResultsHash    | `string`                                |
| nextValidatorsHash | `string`                                |
| numTxs             | `number`                                |
| proposer           | `string`                                |
| time               | `string`                                |
| totalTxs           | `string`                                |
| txsHashes          | `Array.&lt;...GraphQLClient.string&gt;` |
| validatorsHash     | `string`                                |
| ...version         | [`Version`](#GraphQLClient.Version)     |

### GraphQLClient.ChainInfo : `object`

Structure of GraphQLClient.ChainInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name             | Type                                                   |
| ---------------- | ------------------------------------------------------ |
| address          | `string`                                               |
| appHash          | `string`                                               |
| blockHash        | `string`                                               |
| blockHeight      | `string`                                               |
| blockTime        | `string`                                               |
| consensusVersion | `string`                                               |
| forgeAppsVersion | `Array.&lt;...GraphQLClient.ForgeAppsVersionEntry&gt;` |
| id               | `string`                                               |
| moniker          | `string`                                               |
| network          | `string`                                               |
| supportedTxs     | `Array.&lt;...GraphQLClient.string&gt;`                |
| synced           | `boolean`                                              |
| totalTxs         | `string`                                               |
| version          | `string`                                               |
| votingPower      | `string`                                               |

### GraphQLClient.CircularQueue : `object`

Structure of GraphQLClient.CircularQueue

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                    |
| -------- | --------------------------------------- |
| circular | `boolean`                               |
| fifo     | `boolean`                               |
| items    | `Array.&lt;...GraphQLClient.string&gt;` |
| maxItems | `number`                                |
| typeUrl  | `string`                                |

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

| Name             | Type                                       |
| ---------------- | ------------------------------------------ |
| maxBytes         | `string`                                   |
| maxCandidates    | `number`                                   |
| maxGas           | `string`                                   |
| maxValidators    | `number`                                   |
| paramChanged     | `boolean`                                  |
| pubKeyTypes      | `Array.&lt;...GraphQLClient.string&gt;`    |
| validatorChanged | `boolean`                                  |
| validators       | `Array.&lt;...GraphQLClient.Validator&gt;` |

### GraphQLClient.ConsensusStatus : `object`

Structure of GraphQLClient.ConsensusStatus

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type      |
| ----------- | --------- |
| blockHeight | `string`  |
| health      | `boolean` |
| synced      | `boolean` |

### GraphQLClient.ConsensusUpgradeTx : `object`

Structure of GraphQLClient.ConsensusUpgradeTx

Checkout the following snippet for the format of ConsensusUpgradeTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name          | Type                                       |
| ------------- | ------------------------------------------ |
| ...data       | [`Any`](#GraphQLClient.Any)                |
| maxBytes      | `string`                                   |
| maxCandidates | `number`                                   |
| maxGas        | `string`                                   |
| maxValidators | `number`                                   |
| validators    | `Array.&lt;...GraphQLClient.Validator&gt;` |

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
| hierarchy  | `number`  |
| restricted | `boolean` |

### GraphQLClient.DeclareFileTx : `object`

Structure of GraphQLClient.DeclareFileTx

Checkout the following snippet for the format of DeclareFileTx:

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

| Name          | Type                                    |
| ------------- | --------------------------------------- |
| deltaInterval | `number`                                |
| typeUrls      | `Array.&lt;...GraphQLClient.string&gt;` |

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
| ops        | `Array.&lt;...GraphQLClient.OpsEntry&gt;`     |

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

| Name        | Type                                      |
| ----------- | ----------------------------------------- |
| address     | `string`                                  |
| code        | `Array.&lt;...GraphQLClient.CodeInfo&gt;` |
| ...data     | [`Any`](#GraphQLClient.Any)               |
| description | `string`                                  |
| name        | `string`                                  |
| namespace   | `string`                                  |
| pipeline    | `string`                                  |
| proto       | `string`                                  |
| sources     | `Array.&lt;...GraphQLClient.string&gt;`   |
| tags        | `Array.&lt;...GraphQLClient.string&gt;`   |
| typeUrls    | `Array.&lt;...GraphQLClient.TypeUrls&gt;` |
| version     | `number`                                  |

### GraphQLClient.DepositTetherTx : `object`

Structure of GraphQLClient.DepositTetherTx

Checkout the following snippet for the format of DepositTetherTx:

```json
{
  "charge": "abc",
  "commission": "abc",
  "locktime": "2019-04-29T00:00:00.000Z",
  "target": "abc",
  "value": "abc",
  "withdrawer": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type     |
| ---------- | -------- |
| charge     | `string` |
| commission | `string` |
| locktime   | `string` |
| target     | `string` |
| value      | `string` |
| withdrawer | `string` |

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

| Name   | Type                                    |
| ------ | --------------------------------------- |
| assets | `Array.&lt;...GraphQLClient.string&gt;` |
| value  | `string`                                |

### GraphQLClient.ExchangeTetherTx : `object`

Structure of GraphQLClient.ExchangeTetherTx

Checkout the following snippet for the format of ExchangeTetherTx:

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
    "deposit": {
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
          "delegator": "abc",
          "pk": "abc",
          "signature": "abc",
          "signer": "abc"
        }
      ]
    },
    "value": "abc"
  },
  "sender": {
    "assets": [
      "abc"
    ],
    "value": "abc"
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                                      |
| ----------- | --------------------------------------------------------- |
| ...data     | [`Any`](#GraphQLClient.Any)                               |
| expiredAt   | `string`                                                  |
| ...receiver | [`TetherExchangeInfo`](#GraphQLClient.TetherExchangeInfo) |
| ...sender   | [`ExchangeInfo`](#GraphQLClient.ExchangeInfo)             |

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

### GraphQLClient.ExtraAccountMigrate : `object`

Structure of GraphQLClient.ExtraAccountMigrate

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type     |
| ------- | -------- |
| address | `string` |

### GraphQLClient.ExtraCreateAsset : `object`

Structure of GraphQLClient.ExtraCreateAsset

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name  | Type     |
| ----- | -------- |
| asset | `string` |

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
| accountConfig      | `Array.&lt;...GraphQLClient.AccountConfigEntry&gt;`     |
| address            | `string`                                                |
| ...consensus       | [`ConsensusParams`](#GraphQLClient.ConsensusParams)     |
| ...data            | [`Any`](#GraphQLClient.Any)                             |
| gas                | `Array.&lt;...GraphQLClient.GasEntry&gt;`               |
| protocols          | `Array.&lt;...GraphQLClient.CoreProtocol&gt;`           |
| stakeSummary       | `Array.&lt;...GraphQLClient.StakeSummaryEntry&gt;`      |
| tasks              | `Array.&lt;...GraphQLClient.TasksEntry&gt;`             |
| ...token           | [`ForgeToken`](#GraphQLClient.ForgeToken)               |
| ...tokenSwapConfig | [`TokenSwapConfig`](#GraphQLClient.TokenSwapConfig)     |
| ...txConfig        | [`TransactionConfig`](#GraphQLClient.TransactionConfig) |
| ...upgradeInfo     | [`UpgradeInfo`](#GraphQLClient.UpgradeInfo)             |
| version            | `string`                                                |

### GraphQLClient.ForgeStats : `object`

Structure of GraphQLClient.ForgeStats

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                   | Type                                    |
| ---------------------- | --------------------------------------- |
| avgBlockTime           | `number`                                |
| avgTps                 | `number`                                |
| maxTps                 | `number`                                |
| numAccountMigrateTxs   | `Array.&lt;...GraphQLClient.string&gt;` |
| numBlocks              | `Array.&lt;...GraphQLClient.string&gt;` |
| numConsensusUpgradeTxs | `Array.&lt;...GraphQLClient.number&gt;` |
| numConsumeAssetTxs     | `Array.&lt;...GraphQLClient.string&gt;` |
| numCreateAssetTxs      | `Array.&lt;...GraphQLClient.string&gt;` |
| numDeclareFileTxs      | `Array.&lt;...GraphQLClient.string&gt;` |
| numDeclareTxs          | `Array.&lt;...GraphQLClient.string&gt;` |
| numExchangeTxs         | `Array.&lt;...GraphQLClient.string&gt;` |
| numPokeTxs             | `Array.&lt;...GraphQLClient.string&gt;` |
| numStakeTxs            | `Array.&lt;...GraphQLClient.string&gt;` |
| numStakes              | `Array.&lt;...GraphQLClient.string&gt;` |
| numSysUpgradeTxs       | `Array.&lt;...GraphQLClient.number&gt;` |
| numTransferTxs         | `Array.&lt;...GraphQLClient.string&gt;` |
| numTxs                 | `Array.&lt;...GraphQLClient.string&gt;` |
| numUpdateAssetTxs      | `Array.&lt;...GraphQLClient.string&gt;` |
| numValidators          | `Array.&lt;...GraphQLClient.number&gt;` |
| tps                    | `Array.&lt;...GraphQLClient.number&gt;` |

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

| Name                | Type                                    |
| ------------------- | --------------------------------------- |
| address             | `string`                                |
| balance             | `string`                                |
| genesisTime         | `string`                                |
| migratedFrom        | `string`                                |
| migratedTo          | `string`                                |
| moniker             | `string`                                |
| nonce               | `string`                                |
| numAssets           | `string`                                |
| numTxs              | `string`                                |
| recentNumTxs        | `Array.&lt;...GraphQLClient.string&gt;` |
| renaissanceTime     | `string`                                |
| totalReceivedStakes | `string`                                |
| totalStakes         | `string`                                |
| totalUnstakes       | `string`                                |

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

| Name  | Type                                      |
| ----- | ----------------------------------------- |
| round | `number`                                  |
| votes | `Array.&lt;...GraphQLClient.VoteInfo&gt;` |

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

| Name      | Type                                      |
| --------- | ----------------------------------------- |
| listeners | `Array.&lt;...GraphQLClient.string&gt;`   |
| listening | `boolean`                                 |
| nPeers    | `number`                                  |
| peers     | `Array.&lt;...GraphQLClient.PeerInfo&gt;` |

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

| Name             | Type                                                   |
| ---------------- | ------------------------------------------------------ |
| address          | `string`                                               |
| appHash          | `string`                                               |
| blockHash        | `string`                                               |
| blockHeight      | `string`                                               |
| blockTime        | `string`                                               |
| consensusVersion | `string`                                               |
| forgeAppsVersion | `Array.&lt;...GraphQLClient.ForgeAppsVersionEntry&gt;` |
| ...geoInfo       | [`GeoInfo`](#GraphQLClient.GeoInfo)                    |
| id               | `string`                                               |
| ip               | `string`                                               |
| moniker          | `string`                                               |
| network          | `string`                                               |
| p2pAddress       | `string`                                               |
| supportedTxs     | `Array.&lt;...GraphQLClient.string&gt;`                |
| synced           | `boolean`                                              |
| totalTxs         | `string`                                               |
| version          | `string`                                               |
| votingPower      | `string`                                               |

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

### GraphQLClient.Protocol : `object`

Structure of GraphQLClient.Protocol

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                      |
| ----------- | ----------------------------------------- |
| address     | `string`                                  |
| code        | `Array.&lt;...GraphQLClient.CodeInfo&gt;` |
| ...data     | [`Any`](#GraphQLClient.Any)               |
| description | `string`                                  |
| group       | `string`                                  |
| installedAt | `string`                                  |
| name        | `string`                                  |
| namespace   | `string`                                  |
| pipeline    | `string`                                  |
| proto       | `string`                                  |
| sources     | `Array.&lt;...GraphQLClient.string&gt;`   |
| typeUrls    | `Array.&lt;...GraphQLClient.TypeUrls&gt;` |
| version     | `number`                                  |

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
| migratedFrom | `Array.&lt;...GraphQLClient.string&gt;`               |
| migratedTo   | `Array.&lt;...GraphQLClient.string&gt;`               |
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
| byzantineValidators | `Array.&lt;...GraphQLClient.Evidence&gt;`         |
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
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "consumedTime": "2019-04-29T00:00:00.000Z",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING"
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
  "code": "PROTOCOL_NOT_RUNNING",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                             |
| ------- | ------------------------------------------------ |
| blocks  | `Array.&lt;...GraphQLClient.BlockInfoSimple&gt;` |
| ...code | `GraphQLClient.StatusCode`                       |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)            |

### GraphQLClient.ResponseGetChainInfo : `object`

Structure of GraphQLClient.ResponseGetChainInfo

Checkout the following snippet for the format of ResponseGetChainInfo:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
              "accountMigrate": {
                "address": "abc"
              },
              "code": "PROTOCOL_NOT_RUNNING",
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
              "accountMigrate": {
                "address": "abc"
              },
              "code": "PROTOCOL_NOT_RUNNING",
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
      "commission": "abc",
      "commissionHolderAddress": "abc",
      "commissionRate": 123,
      "revokeCommission": 123,
      "withdrawInterval": 123
    },
    "txConfig": {
      "declare": {
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
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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

### GraphQLClient.ResponseGetProtocolState : `object`

Structure of GraphQLClient.ResponseGetProtocolState

Checkout the following snippet for the format of ResponseGetProtocolState:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                            |
| -------- | ----------------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                      |
| ...state | [`ProtocolState`](#GraphQLClient.ProtocolState) |

### GraphQLClient.ResponseGetProtocols : `object`

Structure of GraphQLClient.ResponseGetProtocols

Checkout the following snippet for the format of ResponseGetProtocols:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "protocols": [
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
      "group": "abc",
      "installedAt": "2019-04-29T00:00:00.000Z",
      "name": "abc",
      "namespace": "abc",
      "pipeline": "abc",
      "proto": "abc",
      "sources": [
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
  ]
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name      | Type                                      |
| --------- | ----------------------------------------- |
| ...code   | `GraphQLClient.StatusCode`                |
| protocols | `Array.&lt;...GraphQLClient.Protocol&gt;` |

### GraphQLClient.ResponseGetSimulatorStatus : `object`

Structure of GraphQLClient.ResponseGetSimulatorStatus

Checkout the following snippet for the format of ResponseGetSimulatorStatus:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "result": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                       |
| ------- | -------------------------- |
| ...code | `GraphQLClient.StatusCode` |
| result  | `string`                   |

### GraphQLClient.ResponseGetStakeState : `object`

Structure of GraphQLClient.ResponseGetStakeState

Checkout the following snippet for the format of ResponseGetStakeState:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "balance": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                      |
| -------- | ----------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                |
| ...state | [`StakeState`](#GraphQLClient.StakeState) |

### GraphQLClient.ResponseGetSwapState : `object`

Structure of GraphQLClient.ResponseGetSwapState

Checkout the following snippet for the format of ResponseGetSwapState:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "assets": [
      "abc"
    ],
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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

### GraphQLClient.ResponseGetTetherState : `object`

Structure of GraphQLClient.ResponseGetTetherState

Checkout the following snippet for the format of ResponseGetTetherState:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "state": {
    "address": "abc",
    "available": true,
    "charge": "abc",
    "commission": "abc",
    "custodian": "abc",
    "depositor": "abc",
    "hash": "abc",
    "locktime": "2019-04-29T00:00:00.000Z",
    "target": "abc",
    "value": "abc",
    "withdrawer": "abc"
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                        |
| -------- | ------------------------------------------- |
| ...code  | `GraphQLClient.StatusCode`                  |
| ...state | [`TetherState`](#GraphQLClient.TetherState) |

### GraphQLClient.ResponseGetTx : `object`

Structure of GraphQLClient.ResponseGetTx

Checkout the following snippet for the format of ResponseGetTx:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "info": {
    "accountMigrate": {
      "address": "abc"
    },
    "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "transactions": [
    {
      "code": "PROTOCOL_NOT_RUNNING",
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

| Name         | Type                                                |
| ------------ | --------------------------------------------------- |
| ...code      | `GraphQLClient.StatusCode`                          |
| ...page      | [`PageInfo`](#GraphQLClient.PageInfo)               |
| transactions | `Array.&lt;...GraphQLClient.IndexedTransaction&gt;` |

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
  "code": "PROTOCOL_NOT_RUNNING",
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
| assets     | `Array.&lt;...GraphQLClient.IndexedAssetState&gt;`          |
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
  "code": "PROTOCOL_NOT_RUNNING",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                          |
| ------- | --------------------------------------------- |
| blocks  | `Array.&lt;...GraphQLClient.IndexedBlock&gt;` |
| ...code | `GraphQLClient.StatusCode`                    |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)         |

### GraphQLClient.ResponseListStakes : `object`

Structure of GraphQLClient.ResponseListStakes

Checkout the following snippet for the format of ResponseListStakes:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
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

| Name    | Type                                               |
| ------- | -------------------------------------------------- |
| ...code | `GraphQLClient.StatusCode`                         |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)              |
| stakes  | `Array.&lt;...GraphQLClient.IndexedStakeState&gt;` |

### GraphQLClient.ResponseListSwap : `object`

Structure of GraphQLClient.ResponseListSwap

Checkout the following snippet for the format of ResponseListSwap:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
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
          "accountMigrate": {
            "address": "abc"
          },
          "code": "PROTOCOL_NOT_RUNNING",
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
          "accountMigrate": {
            "address": "abc"
          },
          "code": "PROTOCOL_NOT_RUNNING",
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

| Name    | Type                                       |
| ------- | ------------------------------------------ |
| ...code | `GraphQLClient.StatusCode`                 |
| ...page | [`PageInfo`](#GraphQLClient.PageInfo)      |
| swap    | `Array.&lt;...GraphQLClient.SwapState&gt;` |

### GraphQLClient.ResponseListTethers : `object`

Structure of GraphQLClient.ResponseListTethers

Checkout the following snippet for the format of ResponseListTethers:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "tethers": [
    {
      "address": "abc",
      "available": true,
      "charge": "abc",
      "commission": "abc",
      "custodian": "abc",
      "depositor": "abc",
      "hash": "abc",
      "locktime": "2019-04-29T00:00:00.000Z",
      "target": "abc",
      "value": "abc",
      "withdrawer": "abc"
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
| tethers | `Array.&lt;...GraphQLClient.TetherState&gt;` |

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
  "code": "PROTOCOL_NOT_RUNNING",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                                 |
| -------- | ---------------------------------------------------- |
| accounts | `Array.&lt;...GraphQLClient.IndexedAccountState&gt;` |
| ...code  | `GraphQLClient.StatusCode`                           |
| ...page  | [`PageInfo`](#GraphQLClient.PageInfo)                |

### GraphQLClient.ResponseListTransactions : `object`

Structure of GraphQLClient.ResponseListTransactions

Checkout the following snippet for the format of ResponseListTransactions:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  },
  "transactions": [
    {
      "code": "PROTOCOL_NOT_RUNNING",
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

| Name         | Type                                                |
| ------------ | --------------------------------------------------- |
| ...code      | `GraphQLClient.StatusCode`                          |
| ...page      | [`PageInfo`](#GraphQLClient.PageInfo)               |
| transactions | `Array.&lt;...GraphQLClient.IndexedTransaction&gt;` |

### GraphQLClient.ResponseSendTx : `object`

Structure of GraphQLClient.ResponseSendTx

Checkout the following snippet for the format of ResponseSendTx:

```json
{
  "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING"
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
  "code": "PROTOCOL_NOT_RUNNING"
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  "activateProtocol": {
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "approveWithdraw": {
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
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
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  "code": "PROTOCOL_NOT_RUNNING",
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
        "delegator": "abc",
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
        "delegator": "abc",
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "deactivateProtocol": {
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
        "delegator": "abc",
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
        "delegator": "abc",
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "delegate": {
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
  "depositToken": {
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
        "delegator": "abc",
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
              "accountMigrate": {
                "address": "abc"
              },
              "code": "PROTOCOL_NOT_RUNNING",
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
              "accountMigrate": {
                "address": "abc"
              },
              "code": "PROTOCOL_NOT_RUNNING",
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
      "commission": "abc",
      "commissionHolderAddress": "abc",
      "commissionRate": 123,
      "revokeCommission": 123,
      "withdrawInterval": 123
    },
    "txConfig": {
      "declare": {
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
  "protocolState": {
    "address": "abc",
    "context": {
      "genesisTime": "2019-04-29T00:00:00.000Z",
      "genesisTx": {
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "revokeDelegate": {
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "revokeWithdraw": {
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
        "delegator": "abc",
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
        "delegator": "abc",
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
        "code": "PROTOCOL_NOT_RUNNING",
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
        "accountMigrate": {
          "address": "abc"
        },
        "code": "PROTOCOL_NOT_RUNNING",
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
        "delegator": "abc",
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
        "delegator": "abc",
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
        "delegator": "abc",
        "pk": "abc",
        "signature": "abc",
        "signer": "abc"
      }
    ]
  },
  "withdrawToken": {
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

| Name                  | Type                                                    |
| --------------------- | ------------------------------------------------------- |
| ...accountMigrate     | [`Transaction`](#GraphQLClient.Transaction)             |
| ...accountState       | [`AccountState`](#GraphQLClient.AccountState)           |
| ...activateProtocol   | [`Transaction`](#GraphQLClient.Transaction)             |
| ...approveWithdraw    | [`Transaction`](#GraphQLClient.Transaction)             |
| ...assetState         | [`AssetState`](#GraphQLClient.AssetState)               |
| ...beginBlock         | [`RequestBeginBlock`](#GraphQLClient.RequestBeginBlock) |
| ...code               | `GraphQLClient.StatusCode`                              |
| ...confirm            | [`Transaction`](#GraphQLClient.Transaction)             |
| ...consensusUpgrade   | [`Transaction`](#GraphQLClient.Transaction)             |
| ...createAsset        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...deactivateProtocol | [`Transaction`](#GraphQLClient.Transaction)             |
| ...declare            | [`Transaction`](#GraphQLClient.Transaction)             |
| ...declareFile        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...delegate           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...delegateState      | [`DelegateState`](#GraphQLClient.DelegateState)         |
| ...depositToken       | [`Transaction`](#GraphQLClient.Transaction)             |
| ...endBlock           | [`RequestEndBlock`](#GraphQLClient.RequestEndBlock)     |
| ...exchange           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...forgeState         | [`ForgeState`](#GraphQLClient.ForgeState)               |
| ...protocolState      | [`ProtocolState`](#GraphQLClient.ProtocolState)         |
| ...revoke             | [`Transaction`](#GraphQLClient.Transaction)             |
| ...revokeDelegate     | [`Transaction`](#GraphQLClient.Transaction)             |
| ...revokeWithdraw     | [`Transaction`](#GraphQLClient.Transaction)             |
| ...stake              | [`Transaction`](#GraphQLClient.Transaction)             |
| ...stakeState         | [`StakeState`](#GraphQLClient.StakeState)               |
| ...sysUpgrade         | [`Transaction`](#GraphQLClient.Transaction)             |
| topic                 | `string`                                                |
| ...transfer           | [`Transaction`](#GraphQLClient.Transaction)             |
| ...updateAsset        | [`Transaction`](#GraphQLClient.Transaction)             |
| ...withdrawToken      | [`Transaction`](#GraphQLClient.Transaction)             |

### GraphQLClient.ResponseUnsubscribe : `object`

Structure of GraphQLClient.ResponseUnsubscribe

Checkout the following snippet for the format of ResponseUnsubscribe:

```json
{
  "code": "PROTOCOL_NOT_RUNNING"
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

### GraphQLClient.RevokeTetherTx : `object`

Structure of GraphQLClient.RevokeTetherTx

Checkout the following snippet for the format of RevokeTetherTx:

```json
{
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "tether": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                        |
| ------- | --------------------------- |
| ...data | [`Any`](#GraphQLClient.Any) |
| tether  | `string`                    |

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

| Name     | Type                                    |
| -------- | --------------------------------------- |
| assets   | `Array.&lt;...GraphQLClient.string&gt;` |
| ...data  | [`Any`](#GraphQLClient.Any)             |
| hashlock | `string`                                |
| locktime | `number`                                |
| receiver | `string`                                |
| value    | `string`                                |

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

### GraphQLClient.StakeDataType : `object`

Structure of GraphQLClient.StakeDataType

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type     |
| ---- | -------- |
| type | `string` |

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

### GraphQLClient.StakeTx : `object`

Structure of GraphQLClient.StakeTx

Checkout the following snippet for the format of StakeTx:

```json
{
  "data": {
    "type": "abc"
  },
  "message": "abc",
  "to": "abc",
  "value": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| ...data | [`StakeDataType`](#GraphQLClient.StakeDataType) |
| message | `string`                                        |
| to      | `string`                                        |
| value   | `string`                                        |

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
| assets     | `Array.&lt;...GraphQLClient.string&gt;`       |
| ...context | [`StateContext`](#GraphQLClient.StateContext) |
| hash       | `string`                                      |
| hashkey    | `string`                                      |
| hashlock   | `string`                                      |
| locktime   | `number`                                      |
| receiver   | `string`                                      |
| sender     | `string`                                      |
| value      | `string`                                      |

### GraphQLClient.SysUpgradeTx : `object`

Structure of GraphQLClient.SysUpgradeTx

Checkout the following snippet for the format of SysUpgradeTx:

```json
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                        |
| ----------- | ------------------------------------------- |
| ...data     | [`Any`](#GraphQLClient.Any)                 |
| gracePeriod | `string`                                    |
| ...task     | [`UpgradeTask`](#GraphQLClient.UpgradeTask) |

### GraphQLClient.TasksEntry : `object`

Structure of GraphQLClient.TasksEntry

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name     | Type                                          |
| -------- | --------------------------------------------- |
| key      | `string`                                      |
| ...value | [`UpgradeTasks`](#GraphQLClient.UpgradeTasks) |

### GraphQLClient.TetherExchangeInfo : `object`

Structure of GraphQLClient.TetherExchangeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                        |
| ---------- | ------------------------------------------- |
| assets     | `Array.&lt;...GraphQLClient.string&gt;`     |
| ...deposit | [`Transaction`](#GraphQLClient.Transaction) |
| value      | `string`                                    |

### GraphQLClient.TetherState : `object`

Structure of GraphQLClient.TetherState

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| address    | `string`  |
| available  | `boolean` |
| charge     | `string`  |
| commission | `string`  |
| custodian  | `string`  |
| depositor  | `string`  |
| hash       | `string`  |
| locktime   | `string`  |
| target     | `string`  |
| value      | `string`  |
| withdrawer | `string`  |

### GraphQLClient.TetherTradeInfo : `object`

Structure of GraphQLClient.TetherTradeInfo

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name   | Type                                    |
| ------ | --------------------------------------- |
| assets | `Array.&lt;...GraphQLClient.string&gt;` |
| tether | `string`                                |
| value  | `string`                                |

### GraphQLClient.TokenSwapConfig : `object`

Structure of GraphQLClient.TokenSwapConfig

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                    | Type     |
| ----------------------- | -------- |
| commission              | `string` |
| commissionHolderAddress | `string` |
| commissionRate          | `number` |
| revokeCommission        | `number` |
| withdrawInterval        | `number` |

### GraphQLClient.Transaction : `object`

Structure of GraphQLClient.Transaction

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type                                      |
| ---------- | ----------------------------------------- |
| chainId    | `string`                                  |
| from       | `string`                                  |
| ...itx     | `Itx`                                     |
| itxJson    | `undefined`                               |
| nonce      | `string`                                  |
| pk         | `string`                                  |
| signature  | `string`                                  |
| signatures | `Array.&lt;...GraphQLClient.Multisig&gt;` |

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

| Name              | Type                                                        |
| ----------------- | ----------------------------------------------------------- |
| ...accountMigrate | [`ExtraAccountMigrate`](#GraphQLClient.ExtraAccountMigrate) |
| ...code           | `GraphQLClient.StatusCode`                                  |
| ...createAsset    | [`ExtraCreateAsset`](#GraphQLClient.ExtraCreateAsset)       |
| hash              | `string`                                                    |
| height            | `string`                                                    |
| index             | `number`                                                    |
| tags              | `Array.&lt;...GraphQLClient.KvPair&gt;`                     |
| time              | `string`                                                    |
| ...tx             | [`Transaction`](#GraphQLClient.Transaction)                 |

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| assets  | `Array.&lt;...GraphQLClient.string&gt;` |
| ...data | [`Any`](#GraphQLClient.Any)             |
| to      | `string`                                |
| value   | `string`                                |

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

| Name | Type                                         |
| ---- | -------------------------------------------- |
| nTxs | `number`                                     |
| txs  | `Array.&lt;...GraphQLClient.Transaction&gt;` |

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

| Name     | Type                                           |
| -------- | ---------------------------------------------- |
| actions  | `Array.&lt;...GraphQLClient.UpgradeAction&gt;` |
| dataHash | `string`                                       |
| ...type  | `GraphQLClient.UpgradeType`                    |

### GraphQLClient.UpgradeTasks : `object`

Structure of GraphQLClient.UpgradeTasks

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name | Type                                         |
| ---- | -------------------------------------------- |
| item | `Array.&lt;...GraphQLClient.UpgradeTask&gt;` |

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

| Name        | Type                                           |
| ----------- | ---------------------------------------------- |
| blockHeight | `string`                                       |
| validators  | `Array.&lt;...GraphQLClient.ValidatorInfo&gt;` |

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

### GraphQLClient.WithdrawTetherTx : `object`

Structure of GraphQLClient.WithdrawTetherTx

Checkout the following snippet for the format of WithdrawTetherTx:

```json
{
  "chainId": "abc",
  "data": {
    "typeUrl": "abc",
    "value": "abc"
  },
  "expiredAt": "2019-04-29T00:00:00.000Z",
  "from": "abc",
  "nonce": "abc",
  "pk": "abc",
  "receiver": {
    "assets": [
      "abc"
    ],
    "tether": "abc",
    "value": "abc"
  },
  "sender": {
    "assets": [
      "abc"
    ],
    "value": "abc"
  },
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
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name        | Type                                                |
| ----------- | --------------------------------------------------- |
| chainId     | `string`                                            |
| ...data     | [`Any`](#GraphQLClient.Any)                         |
| expiredAt   | `string`                                            |
| from        | `string`                                            |
| nonce       | `string`                                            |
| pk          | `string`                                            |
| ...receiver | [`TetherTradeInfo`](#GraphQLClient.TetherTradeInfo) |
| ...sender   | [`ExchangeInfo`](#GraphQLClient.ExchangeInfo)       |
| signature   | `string`                                            |
| signatures  | `Array.&lt;...GraphQLClient.Multisig&gt;`           |

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

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

| Name   | Type                                    |
| ------ | --------------------------------------- |
| height | `string`                                |
| keys   | `Array.&lt;...GraphQLClient.string&gt;` |

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

### GraphQLClient.GetProtocolStateParams : `object`

Structure of GraphQLClient.GetProtocolStateParams

Checkout the following snippet for the format of GetProtocolStateParams:

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

### GraphQLClient.GetProtocolsParams : `object`

Structure of GraphQLClient.GetProtocolsParams

Checkout the following snippet for the format of GetProtocolsParams:

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

### GraphQLClient.GetStakeStateParams : `object`

Structure of GraphQLClient.GetStakeStateParams

Checkout the following snippet for the format of GetStakeStateParams:

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

### GraphQLClient.GetTetherStateParams : `object`

Structure of GraphQLClient.GetTetherStateParams

Checkout the following snippet for the format of GetTetherStateParams:

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

| Name    | Type                                    |
| ------- | --------------------------------------- |
| address | `string`                                |
| height  | `string`                                |
| keys    | `Array.&lt;...GraphQLClient.string&gt;` |

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

### GraphQLClient.ListTethersParams : `object`

Structure of GraphQLClient.ListTethersParams

Checkout the following snippet for the format of ListTethersParams:

```json
{
  "available": true,
  "custodian": "abc",
  "depositor": "abc",
  "paging": "abc",
  "withdrawer": "abc"
}
```

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name       | Type      |
| ---------- | --------- |
| available  | `boolean` |
| custodian  | `string`  |
| depositor  | `string`  |
| paging     | `string`  |
| withdrawer | `string`  |

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

### GraphQLClient.DeactivateProtocolTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                 | Description                                                                                   |
| --------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | `object`                             |                                                                                               |
| input.tx              | `object`                             | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.DeactivateProtocolTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                             | the sender pk                                                                                 |
| [input.tx.from]       | `string`                             | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                             | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                             | the chainId                                                                                   |
| [input.tx.signature]  | `string`                             | transaction signature                                                                         |
| [input.tx.signatures] | `array`                              | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                             | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                             | the signature of the tx, if this parameter exist, we will not sign the transaction            |

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

### GraphQLClient.DepositTetherTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                                | Description                                                                                   |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                            |                                                                                               |
| input.tx              | `object`                                            | data of the transaction                                                                       |
| input.tx.itx          | [`DepositTetherTx`](#GraphQLClient.DepositTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                            | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                            | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                            | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                            | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                            | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                             | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                            | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                            | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.StakeTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                | Description                                                                                   |
| --------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                            |                                                                                               |
| input.tx              | `object`                            | data of the transaction                                                                       |
| input.tx.itx          | [`StakeTx`](#GraphQLClient.StakeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                            | the sender pk                                                                                 |
| [input.tx.from]       | `string`                            | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                            | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                            | the chainId                                                                                   |
| [input.tx.signature]  | `string`                            | transaction signature                                                                         |
| [input.tx.signatures] | `array`                             | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                            | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                            | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.DeployProtocolTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                                  | Description                                                                                   |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                              |                                                                                               |
| input.tx              | `object`                                              | data of the transaction                                                                       |
| input.tx.itx          | [`DeployProtocolTx`](#GraphQLClient.DeployProtocolTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                              | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                              | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                              | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                              | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                              | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                               | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                              | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                              | the signature of the tx, if this parameter exist, we will not sign the transaction            |

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

### GraphQLClient.RevokeTetherTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                              | Description                                                                                   |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                          |                                                                                               |
| input.tx              | `object`                                          | data of the transaction                                                                       |
| input.tx.itx          | [`RevokeTetherTx`](#GraphQLClient.RevokeTetherTx) | the actual transaction object                                                                 |
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

### GraphQLClient.ApproveTetherTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                                | Description                                                                                   |
| --------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                            |                                                                                               |
| input.tx              | `object`                                            | data of the transaction                                                                       |
| input.tx.itx          | [`ApproveTetherTx`](#GraphQLClient.ApproveTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                            | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                            | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                            | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                            | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                            | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                             | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                            | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                            | the signature of the tx, if this parameter exist, we will not sign the transaction            |

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

### GraphQLClient.ExchangeTetherTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                                  | Description                                                                                   |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                              |                                                                                               |
| input.tx              | `object`                                              | data of the transaction                                                                       |
| input.tx.itx          | [`ExchangeTetherTx`](#GraphQLClient.ExchangeTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                              | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                              | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                              | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                              | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                              | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                               | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                              | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                              | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.WithdrawTetherTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                                                  | Description                                                                                   |
| --------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                                              |                                                                                               |
| input.tx              | `object`                                              | data of the transaction                                                                       |
| input.tx.itx          | [`WithdrawTetherTx`](#GraphQLClient.WithdrawTetherTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                                              | the sender pk                                                                                 |
| [input.tx.from]       | `string`                                              | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                                              | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                                              | the chainId                                                                                   |
| [input.tx.signature]  | `string`                                              | transaction signature                                                                         |
| [input.tx.signatures] | `array`                                               | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                                              | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                                              | the signature of the tx, if this parameter exist, we will not sign the transaction            |

### GraphQLClient.ActivateProtocolTxInput : `Object`

**Kind**: static typedef of [`GraphQLClient`](#GraphQLClient)  
**Properties**

| Name                  | Type                               | Description                                                                                   |
| --------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | `object`                           |                                                                                               |
| input.tx              | `object`                           | data of the transaction                                                                       |
| input.tx.itx          | `GraphQLClient.ActivateProtocolTx` | the actual transaction object                                                                 |
| [input.tx.pk]         | `string`                           | the sender pk                                                                                 |
| [input.tx.from]       | `string`                           | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | `number`                           | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | `string`                           | the chainId                                                                                   |
| [input.tx.signature]  | `string`                           | transaction signature                                                                         |
| [input.tx.signatures] | `array`                            | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | `object`                           | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | `string`                           | the signature of the tx, if this parameter exist, we will not sign the transaction            |

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

  