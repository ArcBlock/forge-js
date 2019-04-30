<a name="GraphQLClient"></a>


## GraphQLClient

An http client that can read/write data to a forge powered blockchain node, can be used in both node.js and browser.

Please note that, due to internal implementation of google-protobuf, all `repeated fields` names are suffixed with `List`

**Kind**: global class  

* [GraphQLClient](#GraphQLClient)
  * [new GraphQLClient(config)](#new_GraphQLClient_new)
  * _instance_
    * [.getTxSendMethods()](#GraphQLClient+getTxSendMethods) ⇒ <code>Array.&lt;string></code>
    * [.getTxEncodeMethods()](#GraphQLClient+getTxEncodeMethods) ⇒ <code>Array.&lt;string></code>
    * [.decodeTx(buffer)](#GraphQLClient+decodeTx) ⇒ <code>object</code>
    * [.getQueries()](#GraphQLClient+getQueries) ⇒ <code>Array.&lt;string></code>
    * [.getMutations()](#GraphQLClient+getMutations) ⇒ <code>Array.&lt;string></code>
    * [.getSubscription()](#GraphQLClient+getSubscription) ⇒ <code>Array.&lt;string></code>
    * [.doRawQuery(query)](#GraphQLClient+doRawQuery) ⇒ <code>Promise</code>
    * [.doRawSubscription(query)](#GraphQLClient+doRawSubscription) ⇒ <code>Promise</code>
    * [.sendCreateAssetTx(params)](#GraphQLClient+sendCreateAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendTransferTx(params)](#GraphQLClient+sendTransferTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendPokeTx(params)](#GraphQLClient+sendPokeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendDeployProtocolTx(params)](#GraphQLClient+sendDeployProtocolTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendUpgradeNodeTx(params)](#GraphQLClient+sendUpgradeNodeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendUpdateAssetTx(params)](#GraphQLClient+sendUpdateAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendAccountMigrateTx(params)](#GraphQLClient+sendAccountMigrateTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendConsumeAssetTx(params)](#GraphQLClient+sendConsumeAssetTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendDeclareTx(params)](#GraphQLClient+sendDeclareTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendExchangeTx(params)](#GraphQLClient+sendExchangeTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendDeclareFileTx(params)](#GraphQLClient+sendDeclareFileTx) ⇒ <code>Promise.&lt;string></code>
    * [.sendStakeTx(params)](#GraphQLClient+sendStakeTx) ⇒ <code>Promise.&lt;string></code>
    * [.encodeCreateAssetTx(params)](#GraphQLClient+encodeCreateAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeTransferTx(params)](#GraphQLClient+encodeTransferTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodePokeTx(params)](#GraphQLClient+encodePokeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeDeployProtocolTx(params)](#GraphQLClient+encodeDeployProtocolTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeUpgradeNodeTx(params)](#GraphQLClient+encodeUpgradeNodeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeUpdateAssetTx(params)](#GraphQLClient+encodeUpdateAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeAccountMigrateTx(params)](#GraphQLClient+encodeAccountMigrateTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeConsumeAssetTx(params)](#GraphQLClient+encodeConsumeAssetTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeDeclareTx(params)](#GraphQLClient+encodeDeclareTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeExchangeTx(params)](#GraphQLClient+encodeExchangeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeDeclareFileTx(params)](#GraphQLClient+encodeDeclareFileTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.encodeStakeTx(params)](#GraphQLClient+encodeStakeTx) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)
    * [.getAccountState(params)](#GraphQLClient+getAccountState) ⇒ [<code>Promise.&lt;ResponseGetAccountState></code>](#GraphQLClient.ResponseGetAccountState)
    * [.getAssetState(params)](#GraphQLClient+getAssetState) ⇒ [<code>Promise.&lt;ResponseGetAssetState></code>](#GraphQLClient.ResponseGetAssetState)
    * [.getBlock(params)](#GraphQLClient+getBlock) ⇒ [<code>Promise.&lt;ResponseGetBlock></code>](#GraphQLClient.ResponseGetBlock)
    * [.getBlocks(params)](#GraphQLClient+getBlocks) ⇒ [<code>Promise.&lt;ResponseGetBlocks></code>](#GraphQLClient.ResponseGetBlocks)
    * [.getChainInfo()](#GraphQLClient+getChainInfo) ⇒ [<code>Promise.&lt;ResponseGetChainInfo></code>](#GraphQLClient.ResponseGetChainInfo)
    * [.getConfig()](#GraphQLClient+getConfig) ⇒ [<code>Promise.&lt;ResponseGetConfig></code>](#GraphQLClient.ResponseGetConfig)
    * [.getForgeState(params)](#GraphQLClient+getForgeState) ⇒ [<code>Promise.&lt;ResponseGetForgeState></code>](#GraphQLClient.ResponseGetForgeState)
    * [.getForgeStats()](#GraphQLClient+getForgeStats) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats)
    * [.getForgeStatsByDay(params)](#GraphQLClient+getForgeStatsByDay) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats)
    * [.getForgeStatsByHour(params)](#GraphQLClient+getForgeStatsByHour) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats)
    * [.getHealthStatus()](#GraphQLClient+getHealthStatus) ⇒ [<code>Promise.&lt;ResponseGetHealthStatus></code>](#GraphQLClient.ResponseGetHealthStatus)
    * [.getNetInfo()](#GraphQLClient+getNetInfo) ⇒ [<code>Promise.&lt;ResponseGetNetInfo></code>](#GraphQLClient.ResponseGetNetInfo)
    * [.getNodeInfo()](#GraphQLClient+getNodeInfo) ⇒ [<code>Promise.&lt;ResponseGetNodeInfo></code>](#GraphQLClient.ResponseGetNodeInfo)
    * [.getProtocolState(params)](#GraphQLClient+getProtocolState) ⇒ [<code>Promise.&lt;ResponseGetProtocolState></code>](#GraphQLClient.ResponseGetProtocolState)
    * [.getSimulatorStatus()](#GraphQLClient+getSimulatorStatus) ⇒ [<code>Promise.&lt;ResponseGetSimulatorStatus></code>](#GraphQLClient.ResponseGetSimulatorStatus)
    * [.getStakeState(params)](#GraphQLClient+getStakeState) ⇒ [<code>Promise.&lt;ResponseGetStakeState></code>](#GraphQLClient.ResponseGetStakeState)
    * [.getTx(params)](#GraphQLClient+getTx) ⇒ [<code>Promise.&lt;ResponseGetTx></code>](#GraphQLClient.ResponseGetTx)
    * [.getUnconfirmedTxs(params)](#GraphQLClient+getUnconfirmedTxs) ⇒ [<code>Promise.&lt;ResponseGetUnconfirmedTxs></code>](#GraphQLClient.ResponseGetUnconfirmedTxs)
    * [.getValidatorsInfo()](#GraphQLClient+getValidatorsInfo) ⇒ [<code>Promise.&lt;ResponseGetValidatorsInfo></code>](#GraphQLClient.ResponseGetValidatorsInfo)
    * [.listAssetTransactions(params)](#GraphQLClient+listAssetTransactions) ⇒ [<code>Promise.&lt;ResponseListAssetTransactions></code>](#GraphQLClient.ResponseListAssetTransactions)
    * [.listAssets(params)](#GraphQLClient+listAssets) ⇒ [<code>Promise.&lt;ResponseListAssets></code>](#GraphQLClient.ResponseListAssets)
    * [.listBlocks(params)](#GraphQLClient+listBlocks) ⇒ [<code>Promise.&lt;ResponseListBlocks></code>](#GraphQLClient.ResponseListBlocks)
    * [.listStakes(params)](#GraphQLClient+listStakes) ⇒ [<code>Promise.&lt;ResponseListStakes></code>](#GraphQLClient.ResponseListStakes)
    * [.listTopAccounts(params)](#GraphQLClient+listTopAccounts) ⇒ [<code>Promise.&lt;ResponseListTopAccounts></code>](#GraphQLClient.ResponseListTopAccounts)
    * [.listTransactions(params)](#GraphQLClient+listTransactions) ⇒ [<code>Promise.&lt;ResponseListTransactions></code>](#GraphQLClient.ResponseListTransactions)
    * [.sendTx(params)](#GraphQLClient+sendTx) ⇒ [<code>Promise.&lt;ResponseSendTx></code>](#GraphQLClient.ResponseSendTx)
    * [.startSimulator()](#GraphQLClient+startSimulator) ⇒ [<code>Promise.&lt;ResponseStartSimulator></code>](#GraphQLClient.ResponseStartSimulator)
    * [.stopSimulator()](#GraphQLClient+stopSimulator) ⇒ [<code>Promise.&lt;ResponseStopSimulator></code>](#GraphQLClient.ResponseStopSimulator)
    * [.unsubscribe(params)](#GraphQLClient+unsubscribe) ⇒ [<code>Promise.&lt;ResponseUnsubscribe></code>](#GraphQLClient.ResponseUnsubscribe)
    * [.subscribe(params)](#GraphQLClient+subscribe) ⇒ [<code>Promise.&lt;ResponseSubscribe></code>](#GraphQLClient.ResponseSubscribe)
  * _static_
    * [.WalletObject](#GraphQLClient.WalletObject) : <code>Object</code>
    * [.WalletTypeObject](#GraphQLClient.WalletTypeObject) : <code>Object</code>
    * [.TxEncodeOutput](#GraphQLClient.TxEncodeOutput) : <code>object</code>
    * [.AddressFilter](#GraphQLClient.AddressFilter) : <code>object</code>
    * [.PageInput](#GraphQLClient.PageInput) : <code>object</code>
    * [.PageOrder](#GraphQLClient.PageOrder) : <code>object</code>
    * [.RangeFilter](#GraphQLClient.RangeFilter) : <code>object</code>
    * [.TimeFilter](#GraphQLClient.TimeFilter) : <code>object</code>
    * [.TypeFilter](#GraphQLClient.TypeFilter) : <code>object</code>
    * [.ValidityFilter](#GraphQLClient.ValidityFilter) : <code>object</code>
    * [.AbciServerStatus](#GraphQLClient.AbciServerStatus) : <code>object</code>
    * [.AccountMigrateTx](#GraphQLClient.AccountMigrateTx) : <code>object</code>
    * [.AccountState](#GraphQLClient.AccountState) : <code>object</code>
    * [.Any](#GraphQLClient.Any) : <code>object</code>
    * [.AssetState](#GraphQLClient.AssetState) : <code>object</code>
    * [.BlockId](#GraphQLClient.BlockId) : <code>object</code>
    * [.BlockInfo](#GraphQLClient.BlockInfo) : <code>object</code>
    * [.BlockInfoSimple](#GraphQLClient.BlockInfoSimple) : <code>object</code>
    * [.ChainInfo](#GraphQLClient.ChainInfo) : <code>object</code>
    * [.CircularQueue](#GraphQLClient.CircularQueue) : <code>object</code>
    * [.ConsensusParams](#GraphQLClient.ConsensusParams) : <code>object</code>
    * [.ConsensusStatus](#GraphQLClient.ConsensusStatus) : <code>object</code>
    * [.ConsensusUpgradeTx](#GraphQLClient.ConsensusUpgradeTx) : <code>object</code>
    * [.ConsumeAssetTx](#GraphQLClient.ConsumeAssetTx) : <code>object</code>
    * [.CoreProtocol](#GraphQLClient.CoreProtocol) : <code>object</code>
    * [.CreateAssetTx](#GraphQLClient.CreateAssetTx) : <code>object</code>
    * [.DeclareFileTx](#GraphQLClient.DeclareFileTx) : <code>object</code>
    * [.DeclareTx](#GraphQLClient.DeclareTx) : <code>object</code>
    * [.DiskSpaceStatus](#GraphQLClient.DiskSpaceStatus) : <code>object</code>
    * [.Evidence](#GraphQLClient.Evidence) : <code>object</code>
    * [.ExchangeInfo](#GraphQLClient.ExchangeInfo) : <code>object</code>
    * [.ExchangeTx](#GraphQLClient.ExchangeTx) : <code>object</code>
    * [.ExtraAccountMigrate](#GraphQLClient.ExtraAccountMigrate) : <code>object</code>
    * [.ExtraCreateAsset](#GraphQLClient.ExtraCreateAsset) : <code>object</code>
    * [.ForgeAppsVersionEntry](#GraphQLClient.ForgeAppsVersionEntry) : <code>object</code>
    * [.ForgeState](#GraphQLClient.ForgeState) : <code>object</code>
    * [.ForgeStats](#GraphQLClient.ForgeStats) : <code>object</code>
    * [.ForgeStatus](#GraphQLClient.ForgeStatus) : <code>object</code>
    * [.ForgeToken](#GraphQLClient.ForgeToken) : <code>object</code>
    * [.GeoInfo](#GraphQLClient.GeoInfo) : <code>object</code>
    * [.Header](#GraphQLClient.Header) : <code>object</code>
    * [.HealthStatus](#GraphQLClient.HealthStatus) : <code>object</code>
    * [.IndexedAccountState](#GraphQLClient.IndexedAccountState) : <code>object</code>
    * [.IndexedAssetState](#GraphQLClient.IndexedAssetState) : <code>object</code>
    * [.IndexedBlock](#GraphQLClient.IndexedBlock) : <code>object</code>
    * [.IndexedStakeState](#GraphQLClient.IndexedStakeState) : <code>object</code>
    * [.IndexedTransaction](#GraphQLClient.IndexedTransaction) : <code>object</code>
    * [.KvPair](#GraphQLClient.KvPair) : <code>object</code>
    * [.LastCommitInfo](#GraphQLClient.LastCommitInfo) : <code>object</code>
    * [.Multisig](#GraphQLClient.Multisig) : <code>object</code>
    * [.NetInfo](#GraphQLClient.NetInfo) : <code>object</code>
    * [.NetworkStatus](#GraphQLClient.NetworkStatus) : <code>object</code>
    * [.NodeInfo](#GraphQLClient.NodeInfo) : <code>object</code>
    * [.PageInfo](#GraphQLClient.PageInfo) : <code>object</code>
    * [.PartSetHeader](#GraphQLClient.PartSetHeader) : <code>object</code>
    * [.PeerInfo](#GraphQLClient.PeerInfo) : <code>object</code>
    * [.PokeConfig](#GraphQLClient.PokeConfig) : <code>object</code>
    * [.PokeInfo](#GraphQLClient.PokeInfo) : <code>object</code>
    * [.PokeTx](#GraphQLClient.PokeTx) : <code>object</code>
    * [.ProtocolState](#GraphQLClient.ProtocolState) : <code>object</code>
    * [.PubKey](#GraphQLClient.PubKey) : <code>object</code>
    * [.RequestBeginBlock](#GraphQLClient.RequestBeginBlock) : <code>object</code>
    * [.RequestEndBlock](#GraphQLClient.RequestEndBlock) : <code>object</code>
    * [.ResponseGetAccountState](#GraphQLClient.ResponseGetAccountState) : <code>object</code>
    * [.ResponseGetAssetState](#GraphQLClient.ResponseGetAssetState) : <code>object</code>
    * [.ResponseGetBlock](#GraphQLClient.ResponseGetBlock) : <code>object</code>
    * [.ResponseGetBlocks](#GraphQLClient.ResponseGetBlocks) : <code>object</code>
    * [.ResponseGetChainInfo](#GraphQLClient.ResponseGetChainInfo) : <code>object</code>
    * [.ResponseGetConfig](#GraphQLClient.ResponseGetConfig) : <code>object</code>
    * [.ResponseGetForgeState](#GraphQLClient.ResponseGetForgeState) : <code>object</code>
    * [.ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) : <code>object</code>
    * [.ResponseGetHealthStatus](#GraphQLClient.ResponseGetHealthStatus) : <code>object</code>
    * [.ResponseGetNetInfo](#GraphQLClient.ResponseGetNetInfo) : <code>object</code>
    * [.ResponseGetNodeInfo](#GraphQLClient.ResponseGetNodeInfo) : <code>object</code>
    * [.ResponseGetProtocolState](#GraphQLClient.ResponseGetProtocolState) : <code>object</code>
    * [.ResponseGetSimulatorStatus](#GraphQLClient.ResponseGetSimulatorStatus) : <code>object</code>
    * [.ResponseGetStakeState](#GraphQLClient.ResponseGetStakeState) : <code>object</code>
    * [.ResponseGetTx](#GraphQLClient.ResponseGetTx) : <code>object</code>
    * [.ResponseGetUnconfirmedTxs](#GraphQLClient.ResponseGetUnconfirmedTxs) : <code>object</code>
    * [.ResponseGetValidatorsInfo](#GraphQLClient.ResponseGetValidatorsInfo) : <code>object</code>
    * [.ResponseListAssetTransactions](#GraphQLClient.ResponseListAssetTransactions) : <code>object</code>
    * [.ResponseListAssets](#GraphQLClient.ResponseListAssets) : <code>object</code>
    * [.ResponseListBlocks](#GraphQLClient.ResponseListBlocks) : <code>object</code>
    * [.ResponseListStakes](#GraphQLClient.ResponseListStakes) : <code>object</code>
    * [.ResponseListTopAccounts](#GraphQLClient.ResponseListTopAccounts) : <code>object</code>
    * [.ResponseListTransactions](#GraphQLClient.ResponseListTransactions) : <code>object</code>
    * [.ResponseSendTx](#GraphQLClient.ResponseSendTx) : <code>object</code>
    * [.ResponseStartSimulator](#GraphQLClient.ResponseStartSimulator) : <code>object</code>
    * [.ResponseStopSimulator](#GraphQLClient.ResponseStopSimulator) : <code>object</code>
    * [.ResponseSubscribe](#GraphQLClient.ResponseSubscribe) : <code>object</code>
    * [.ResponseUnsubscribe](#GraphQLClient.ResponseUnsubscribe) : <code>object</code>
    * [.StakeConfig](#GraphQLClient.StakeConfig) : <code>object</code>
    * [.StakeContext](#GraphQLClient.StakeContext) : <code>object</code>
    * [.StakeDataType](#GraphQLClient.StakeDataType) : <code>object</code>
    * [.StakeState](#GraphQLClient.StakeState) : <code>object</code>
    * [.StakeSummary](#GraphQLClient.StakeSummary) : <code>object</code>
    * [.StakeSummaryEntry](#GraphQLClient.StakeSummaryEntry) : <code>object</code>
    * [.StakeTx](#GraphQLClient.StakeTx) : <code>object</code>
    * [.StateContext](#GraphQLClient.StateContext) : <code>object</code>
    * [.StorageStatus](#GraphQLClient.StorageStatus) : <code>object</code>
    * [.SysUpgradeTx](#GraphQLClient.SysUpgradeTx) : <code>object</code>
    * [.TasksEntry](#GraphQLClient.TasksEntry) : <code>object</code>
    * [.Transaction](#GraphQLClient.Transaction) : <code>object</code>
    * [.TransactionConfig](#GraphQLClient.TransactionConfig) : <code>object</code>
    * [.TransactionInfo](#GraphQLClient.TransactionInfo) : <code>object</code>
    * [.TransferTx](#GraphQLClient.TransferTx) : <code>object</code>
    * [.UnconfirmedTxs](#GraphQLClient.UnconfirmedTxs) : <code>object</code>
    * [.UpdateAssetTx](#GraphQLClient.UpdateAssetTx) : <code>object</code>
    * [.UpgradeInfo](#GraphQLClient.UpgradeInfo) : <code>object</code>
    * [.UpgradeTask](#GraphQLClient.UpgradeTask) : <code>object</code>
    * [.UpgradeTasks](#GraphQLClient.UpgradeTasks) : <code>object</code>
    * [.Validator](#GraphQLClient.Validator) : <code>object</code>
    * [.ValidatorInfo](#GraphQLClient.ValidatorInfo) : <code>object</code>
    * [.ValidatorsInfo](#GraphQLClient.ValidatorsInfo) : <code>object</code>
    * [.Version](#GraphQLClient.Version) : <code>object</code>
    * [.VoteInfo](#GraphQLClient.VoteInfo) : <code>object</code>
    * [.WalletType](#GraphQLClient.WalletType) : <code>object</code>
    * [.GetAccountStateParams](#GraphQLClient.GetAccountStateParams) : <code>object</code>
    * [.GetAssetStateParams](#GraphQLClient.GetAssetStateParams) : <code>object</code>
    * [.GetBlockParams](#GraphQLClient.GetBlockParams) : <code>object</code>
    * [.GetBlocksParams](#GraphQLClient.GetBlocksParams) : <code>object</code>
    * [.GetForgeStateParams](#GraphQLClient.GetForgeStateParams) : <code>object</code>
    * [.GetForgeStatsByDayParams](#GraphQLClient.GetForgeStatsByDayParams) : <code>object</code>
    * [.GetForgeStatsByHourParams](#GraphQLClient.GetForgeStatsByHourParams) : <code>object</code>
    * [.GetProtocolStateParams](#GraphQLClient.GetProtocolStateParams) : <code>object</code>
    * [.GetStakeStateParams](#GraphQLClient.GetStakeStateParams) : <code>object</code>
    * [.GetTxParams](#GraphQLClient.GetTxParams) : <code>object</code>
    * [.GetUnconfirmedTxsParams](#GraphQLClient.GetUnconfirmedTxsParams) : <code>object</code>
    * [.ListAssetTransactionsParams](#GraphQLClient.ListAssetTransactionsParams) : <code>object</code>
    * [.ListAssetsParams](#GraphQLClient.ListAssetsParams) : <code>object</code>
    * [.ListBlocksParams](#GraphQLClient.ListBlocksParams) : <code>object</code>
    * [.ListStakesParams](#GraphQLClient.ListStakesParams) : <code>object</code>
    * [.ListTopAccountsParams](#GraphQLClient.ListTopAccountsParams) : <code>object</code>
    * [.ListTransactionsParams](#GraphQLClient.ListTransactionsParams) : <code>object</code>
    * [.SendTxParams](#GraphQLClient.SendTxParams) : <code>object</code>
    * [.UnsubscribeParams](#GraphQLClient.UnsubscribeParams) : <code>object</code>
    * [.SubscribeParams](#GraphQLClient.SubscribeParams) : <code>object</code>
    * [.CreateAssetTxInput](#GraphQLClient.CreateAssetTxInput) : <code>Object</code>
    * [.TransferTxInput](#GraphQLClient.TransferTxInput) : <code>Object</code>
    * [.PokeTxInput](#GraphQLClient.PokeTxInput) : <code>Object</code>
    * [.DeployProtocolTxInput](#GraphQLClient.DeployProtocolTxInput) : <code>Object</code>
    * [.UpgradeNodeTxInput](#GraphQLClient.UpgradeNodeTxInput) : <code>Object</code>
    * [.UpdateAssetTxInput](#GraphQLClient.UpdateAssetTxInput) : <code>Object</code>
    * [.AccountMigrateTxInput](#GraphQLClient.AccountMigrateTxInput) : <code>Object</code>
    * [.ConsumeAssetTxInput](#GraphQLClient.ConsumeAssetTxInput) : <code>Object</code>
    * [.DeclareTxInput](#GraphQLClient.DeclareTxInput) : <code>Object</code>
    * [.ExchangeTxInput](#GraphQLClient.ExchangeTxInput) : <code>Object</code>
    * [.DeclareFileTxInput](#GraphQLClient.DeclareFileTxInput) : <code>Object</code>
    * [.StakeTxInput](#GraphQLClient.StakeTxInput) : <code>Object</code>

<a name="new_GraphQLClient_new"></a>

### new GraphQLClient(config)

Create an instance of GraphQLClient

| Param             | Type                                       | Default                                                                                     | Description                                                     |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| config            | <code>object</code> \| <code>string</code> | <code><http://localhost:8210/api></code>                                                    | config object, if a string passed, will be used as the endpoint |
| [config.endpoint] | <code>string</code>                        | <code>"&amp;#x27;[http://localhost:8210/api&amp;#x27;"](http://localhost:8210/api'")</code> | the graphql endpoint                                            |
| [config.chainId]  | <code>string</code>                        | <code>"&amp;#x27;&amp;#x27;"</code>                                                         | the chainId of the network                                      |

**Example**  

```js
const GraphQLClient = require('@arcblock/graphql-client');

const client = new GraphQLClient('https://argon.abtnetwork.io/api');
// const client = new GraphQLClient({ endpoint: 'https://argon.abtnetwork.io/api' });

const res = await client.getChainInfo();
```

<a name="GraphQLClient+getTxSendMethods"></a>

### graphQLClient.getTxSendMethods() ⇒ <code>Array.&lt;string></code>

List all transaction send methods, each method can send one kind of transactions supported by forge core, such as `DeclareTx`, `PokeTx`

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Array.&lt;string></code> - method name list  
<a name="GraphQLClient+getTxEncodeMethods"></a>

### graphQLClient.getTxEncodeMethods() ⇒ <code>Array.&lt;string></code>

List all transaction encode methods, each method can be used to encode transaction to buffer and object

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Array.&lt;string></code> - method name list  
<a name="GraphQLClient+decodeTx"></a>

### graphQLClient.decodeTx(buffer) ⇒ <code>object</code>

Decode transaction buffer to an object

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>object</code> - transaction object  

| Param  | Type                |
| ------ | ------------------- |
| buffer | <code>buffer</code> |

<a name="GraphQLClient+getQueries"></a>

### graphQLClient.getQueries() ⇒ <code>Array.&lt;string></code>

List all query method names

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Array.&lt;string></code> - method name list  
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
//   getForgeState,
//   getForgeStats,
//   getForgeStatsByDay,
//   getForgeStatsByHour,
//   getHealthStatus,
//   getNetInfo,
//   getNodeInfo,
//   getProtocolState,
//   getSimulatorStatus,
//   getStakeState,
//   getTx,
//   getUnconfirmedTxs,
//   getValidatorsInfo,
//   listAssetTransactions,
//   listAssets,
//   listBlocks,
//   listStakes,
//   listTopAccounts,
//   listTransactions,
// ]
```

<a name="GraphQLClient+getMutations"></a>

### graphQLClient.getMutations() ⇒ <code>Array.&lt;string></code>

List all mutation method names

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Array.&lt;string></code> - method name list  
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

<a name="GraphQLClient+getSubscription"></a>

### graphQLClient.getSubscription() ⇒ <code>Array.&lt;string></code>

List all subscription method names

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Array.&lt;string></code> - method name list  
**Example**  

```js
const methods = client.getSubscriptions();
// list of subscription methods
// [
//   subscribe,
// ]
```

<a name="GraphQLClient+doRawQuery"></a>

### graphQLClient.doRawQuery(query) ⇒ <code>Promise</code>

Send raw graphql query to forge graphql endpoint

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise</code> - usually axios response data  

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| query | <code>string</code> | graphql query string |

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

<a name="GraphQLClient+doRawSubscription"></a>

### graphQLClient.doRawSubscription(query) ⇒ <code>Promise</code>

Send raw graphql subscription to forge graphql endpoint

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise</code> - usually axios response data  

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| query | <code>string</code> | graphql query string |

<a name="GraphQLClient+sendCreateAssetTx"></a>

### graphQLClient.sendCreateAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send CreateAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>CreateAssetTxInput</code>](#GraphQLClient.CreateAssetTxInput) |

<a name="GraphQLClient+sendTransferTx"></a>

### graphQLClient.sendTransferTx(params) ⇒ <code>Promise.&lt;string></code>

Send TransferTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [<code>TransferTxInput</code>](#GraphQLClient.TransferTxInput) |

<a name="GraphQLClient+sendPokeTx"></a>

### graphQLClient.sendPokeTx(params) ⇒ <code>Promise.&lt;string></code>

Send PokeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [<code>PokeTxInput</code>](#GraphQLClient.PokeTxInput) |

<a name="GraphQLClient+sendDeployProtocolTx"></a>

### graphQLClient.sendDeployProtocolTx(params) ⇒ <code>Promise.&lt;string></code>

Send DeployProtocolTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [<code>DeployProtocolTxInput</code>](#GraphQLClient.DeployProtocolTxInput) |

<a name="GraphQLClient+sendUpgradeNodeTx"></a>

### graphQLClient.sendUpgradeNodeTx(params) ⇒ <code>Promise.&lt;string></code>

Send UpgradeNodeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>UpgradeNodeTxInput</code>](#GraphQLClient.UpgradeNodeTxInput) |

<a name="GraphQLClient+sendUpdateAssetTx"></a>

### graphQLClient.sendUpdateAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send UpdateAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>UpdateAssetTxInput</code>](#GraphQLClient.UpdateAssetTxInput) |

<a name="GraphQLClient+sendAccountMigrateTx"></a>

### graphQLClient.sendAccountMigrateTx(params) ⇒ <code>Promise.&lt;string></code>

Send AccountMigrateTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [<code>AccountMigrateTxInput</code>](#GraphQLClient.AccountMigrateTxInput) |

<a name="GraphQLClient+sendConsumeAssetTx"></a>

### graphQLClient.sendConsumeAssetTx(params) ⇒ <code>Promise.&lt;string></code>

Send ConsumeAssetTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [<code>ConsumeAssetTxInput</code>](#GraphQLClient.ConsumeAssetTxInput) |

<a name="GraphQLClient+sendDeclareTx"></a>

### graphQLClient.sendDeclareTx(params) ⇒ <code>Promise.&lt;string></code>

Send DeclareTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [<code>DeclareTxInput</code>](#GraphQLClient.DeclareTxInput) |

<a name="GraphQLClient+sendExchangeTx"></a>

### graphQLClient.sendExchangeTx(params) ⇒ <code>Promise.&lt;string></code>

Send ExchangeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [<code>ExchangeTxInput</code>](#GraphQLClient.ExchangeTxInput) |

<a name="GraphQLClient+sendDeclareFileTx"></a>

### graphQLClient.sendDeclareFileTx(params) ⇒ <code>Promise.&lt;string></code>

Send DeclareFileTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>DeclareFileTxInput</code>](#GraphQLClient.DeclareFileTxInput) |

<a name="GraphQLClient+sendStakeTx"></a>

### graphQLClient.sendStakeTx(params) ⇒ <code>Promise.&lt;string></code>

Send StakeTx transaction and get the hash, use [getTx](#GraphQLClient+getTx) to get transaction detail

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: <code>Promise.&lt;string></code> - returns transaction hash if success, otherwise error was thrown  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [<code>StakeTxInput</code>](#GraphQLClient.StakeTxInput) |

<a name="GraphQLClient+encodeCreateAssetTx"></a>

### graphQLClient.encodeCreateAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a CreateAssetTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>CreateAssetTxInput</code>](#GraphQLClient.CreateAssetTxInput) |

<a name="GraphQLClient+encodeTransferTx"></a>

### graphQLClient.encodeTransferTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a TransferTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [<code>TransferTxInput</code>](#GraphQLClient.TransferTxInput) |

<a name="GraphQLClient+encodePokeTx"></a>

### graphQLClient.encodePokeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a PokeTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [<code>PokeTxInput</code>](#GraphQLClient.PokeTxInput) |

<a name="GraphQLClient+encodeDeployProtocolTx"></a>

### graphQLClient.encodeDeployProtocolTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a DeployProtocolTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [<code>DeployProtocolTxInput</code>](#GraphQLClient.DeployProtocolTxInput) |

<a name="GraphQLClient+encodeUpgradeNodeTx"></a>

### graphQLClient.encodeUpgradeNodeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a UpgradeNodeTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>UpgradeNodeTxInput</code>](#GraphQLClient.UpgradeNodeTxInput) |

<a name="GraphQLClient+encodeUpdateAssetTx"></a>

### graphQLClient.encodeUpdateAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a UpdateAssetTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>UpdateAssetTxInput</code>](#GraphQLClient.UpdateAssetTxInput) |

<a name="GraphQLClient+encodeAccountMigrateTx"></a>

### graphQLClient.encodeAccountMigrateTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a AccountMigrateTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [<code>AccountMigrateTxInput</code>](#GraphQLClient.AccountMigrateTxInput) |

<a name="GraphQLClient+encodeConsumeAssetTx"></a>

### graphQLClient.encodeConsumeAssetTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a ConsumeAssetTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [<code>ConsumeAssetTxInput</code>](#GraphQLClient.ConsumeAssetTxInput) |

<a name="GraphQLClient+encodeDeclareTx"></a>

### graphQLClient.encodeDeclareTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a DeclareTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [<code>DeclareTxInput</code>](#GraphQLClient.DeclareTxInput) |

<a name="GraphQLClient+encodeExchangeTx"></a>

### graphQLClient.encodeExchangeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a ExchangeTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [<code>ExchangeTxInput</code>](#GraphQLClient.ExchangeTxInput) |

<a name="GraphQLClient+encodeDeclareFileTx"></a>

### graphQLClient.encodeDeclareFileTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a DeclareFileTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                                 |
| ------ | -------------------------------------------------------------------- |
| params | [<code>DeclareFileTxInput</code>](#GraphQLClient.DeclareFileTxInput) |

<a name="GraphQLClient+encodeStakeTx"></a>

### graphQLClient.encodeStakeTx(params) ⇒ [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput)

Encode a StakeTx transaction for later use

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;TxEncodeOutput></code>](#GraphQLClient.TxEncodeOutput) - result - we provide two formats of the encoding result, binary presentation and human readable object  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [<code>StakeTxInput</code>](#GraphQLClient.StakeTxInput) |

<a name="GraphQLClient+getAccountState"></a>

### graphQLClient.getAccountState(params) ⇒ [<code>Promise.&lt;ResponseGetAccountState></code>](#GraphQLClient.ResponseGetAccountState)

getAccountState

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetAccountState></code>](#GraphQLClient.ResponseGetAccountState) - Checkout [ResponseGetAccountState](#GraphQLClient.ResponseGetAccountState) for resolved data format  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [<code>GetAccountStateParams</code>](#GraphQLClient.GetAccountStateParams) |

<a name="GraphQLClient+getAssetState"></a>

### graphQLClient.getAssetState(params) ⇒ [<code>Promise.&lt;ResponseGetAssetState></code>](#GraphQLClient.ResponseGetAssetState)

getAssetState

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetAssetState></code>](#GraphQLClient.ResponseGetAssetState) - Checkout [ResponseGetAssetState](#GraphQLClient.ResponseGetAssetState) for resolved data format  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [<code>GetAssetStateParams</code>](#GraphQLClient.GetAssetStateParams) |

<a name="GraphQLClient+getBlock"></a>

### graphQLClient.getBlock(params) ⇒ [<code>Promise.&lt;ResponseGetBlock></code>](#GraphQLClient.ResponseGetBlock)

getBlock

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetBlock></code>](#GraphQLClient.ResponseGetBlock) - Checkout [ResponseGetBlock](#GraphQLClient.ResponseGetBlock) for resolved data format  

| Param  | Type                                                         |
| ------ | ------------------------------------------------------------ |
| params | [<code>GetBlockParams</code>](#GraphQLClient.GetBlockParams) |

<a name="GraphQLClient+getBlocks"></a>

### graphQLClient.getBlocks(params) ⇒ [<code>Promise.&lt;ResponseGetBlocks></code>](#GraphQLClient.ResponseGetBlocks)

getBlocks

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetBlocks></code>](#GraphQLClient.ResponseGetBlocks) - Checkout [ResponseGetBlocks](#GraphQLClient.ResponseGetBlocks) for resolved data format  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [<code>GetBlocksParams</code>](#GraphQLClient.GetBlocksParams) |

<a name="GraphQLClient+getChainInfo"></a>

### graphQLClient.getChainInfo() ⇒ [<code>Promise.&lt;ResponseGetChainInfo></code>](#GraphQLClient.ResponseGetChainInfo)

getChainInfo

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetChainInfo></code>](#GraphQLClient.ResponseGetChainInfo) - Checkout [ResponseGetChainInfo](#GraphQLClient.ResponseGetChainInfo) for resolved data format  
<a name="GraphQLClient+getConfig"></a>

### graphQLClient.getConfig() ⇒ [<code>Promise.&lt;ResponseGetConfig></code>](#GraphQLClient.ResponseGetConfig)

getConfig

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetConfig></code>](#GraphQLClient.ResponseGetConfig) - Checkout [ResponseGetConfig](#GraphQLClient.ResponseGetConfig) for resolved data format  
<a name="GraphQLClient+getForgeState"></a>

### graphQLClient.getForgeState(params) ⇒ [<code>Promise.&lt;ResponseGetForgeState></code>](#GraphQLClient.ResponseGetForgeState)

getForgeState

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetForgeState></code>](#GraphQLClient.ResponseGetForgeState) - Checkout [ResponseGetForgeState](#GraphQLClient.ResponseGetForgeState) for resolved data format  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [<code>GetForgeStateParams</code>](#GraphQLClient.GetForgeStateParams) |

<a name="GraphQLClient+getForgeStats"></a>

### graphQLClient.getForgeStats() ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats)

getForgeStats

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  
<a name="GraphQLClient+getForgeStatsByDay"></a>

### graphQLClient.getForgeStatsByDay(params) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats)

getForgeStatsByDay

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

| Param  | Type                                                                             |
| ------ | -------------------------------------------------------------------------------- |
| params | [<code>GetForgeStatsByDayParams</code>](#GraphQLClient.GetForgeStatsByDayParams) |

<a name="GraphQLClient+getForgeStatsByHour"></a>

### graphQLClient.getForgeStatsByHour(params) ⇒ [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats)

getForgeStatsByHour

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetForgeStats></code>](#GraphQLClient.ResponseGetForgeStats) - Checkout [ResponseGetForgeStats](#GraphQLClient.ResponseGetForgeStats) for resolved data format  

| Param  | Type                                                                               |
| ------ | ---------------------------------------------------------------------------------- |
| params | [<code>GetForgeStatsByHourParams</code>](#GraphQLClient.GetForgeStatsByHourParams) |

<a name="GraphQLClient+getHealthStatus"></a>

### graphQLClient.getHealthStatus() ⇒ [<code>Promise.&lt;ResponseGetHealthStatus></code>](#GraphQLClient.ResponseGetHealthStatus)

getHealthStatus

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetHealthStatus></code>](#GraphQLClient.ResponseGetHealthStatus) - Checkout [ResponseGetHealthStatus](#GraphQLClient.ResponseGetHealthStatus) for resolved data format  
<a name="GraphQLClient+getNetInfo"></a>

### graphQLClient.getNetInfo() ⇒ [<code>Promise.&lt;ResponseGetNetInfo></code>](#GraphQLClient.ResponseGetNetInfo)

getNetInfo

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetNetInfo></code>](#GraphQLClient.ResponseGetNetInfo) - Checkout [ResponseGetNetInfo](#GraphQLClient.ResponseGetNetInfo) for resolved data format  
<a name="GraphQLClient+getNodeInfo"></a>

### graphQLClient.getNodeInfo() ⇒ [<code>Promise.&lt;ResponseGetNodeInfo></code>](#GraphQLClient.ResponseGetNodeInfo)

getNodeInfo

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetNodeInfo></code>](#GraphQLClient.ResponseGetNodeInfo) - Checkout [ResponseGetNodeInfo](#GraphQLClient.ResponseGetNodeInfo) for resolved data format  
<a name="GraphQLClient+getProtocolState"></a>

### graphQLClient.getProtocolState(params) ⇒ [<code>Promise.&lt;ResponseGetProtocolState></code>](#GraphQLClient.ResponseGetProtocolState)

getProtocolState

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetProtocolState></code>](#GraphQLClient.ResponseGetProtocolState) - Checkout [ResponseGetProtocolState](#GraphQLClient.ResponseGetProtocolState) for resolved data format  

| Param  | Type                                                                         |
| ------ | ---------------------------------------------------------------------------- |
| params | [<code>GetProtocolStateParams</code>](#GraphQLClient.GetProtocolStateParams) |

<a name="GraphQLClient+getSimulatorStatus"></a>

### graphQLClient.getSimulatorStatus() ⇒ [<code>Promise.&lt;ResponseGetSimulatorStatus></code>](#GraphQLClient.ResponseGetSimulatorStatus)

getSimulatorStatus

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetSimulatorStatus></code>](#GraphQLClient.ResponseGetSimulatorStatus) - Checkout [ResponseGetSimulatorStatus](#GraphQLClient.ResponseGetSimulatorStatus) for resolved data format  
<a name="GraphQLClient+getStakeState"></a>

### graphQLClient.getStakeState(params) ⇒ [<code>Promise.&lt;ResponseGetStakeState></code>](#GraphQLClient.ResponseGetStakeState)

getStakeState

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetStakeState></code>](#GraphQLClient.ResponseGetStakeState) - Checkout [ResponseGetStakeState](#GraphQLClient.ResponseGetStakeState) for resolved data format  

| Param  | Type                                                                   |
| ------ | ---------------------------------------------------------------------- |
| params | [<code>GetStakeStateParams</code>](#GraphQLClient.GetStakeStateParams) |

<a name="GraphQLClient+getTx"></a>

### graphQLClient.getTx(params) ⇒ [<code>Promise.&lt;ResponseGetTx></code>](#GraphQLClient.ResponseGetTx)

getTx

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetTx></code>](#GraphQLClient.ResponseGetTx) - Checkout [ResponseGetTx](#GraphQLClient.ResponseGetTx) for resolved data format  

| Param  | Type                                                   |
| ------ | ------------------------------------------------------ |
| params | [<code>GetTxParams</code>](#GraphQLClient.GetTxParams) |

<a name="GraphQLClient+getUnconfirmedTxs"></a>

### graphQLClient.getUnconfirmedTxs(params) ⇒ [<code>Promise.&lt;ResponseGetUnconfirmedTxs></code>](#GraphQLClient.ResponseGetUnconfirmedTxs)

getUnconfirmedTxs

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetUnconfirmedTxs></code>](#GraphQLClient.ResponseGetUnconfirmedTxs) - Checkout [ResponseGetUnconfirmedTxs](#GraphQLClient.ResponseGetUnconfirmedTxs) for resolved data format  

| Param  | Type                                                                           |
| ------ | ------------------------------------------------------------------------------ |
| params | [<code>GetUnconfirmedTxsParams</code>](#GraphQLClient.GetUnconfirmedTxsParams) |

<a name="GraphQLClient+getValidatorsInfo"></a>

### graphQLClient.getValidatorsInfo() ⇒ [<code>Promise.&lt;ResponseGetValidatorsInfo></code>](#GraphQLClient.ResponseGetValidatorsInfo)

getValidatorsInfo

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseGetValidatorsInfo></code>](#GraphQLClient.ResponseGetValidatorsInfo) - Checkout [ResponseGetValidatorsInfo](#GraphQLClient.ResponseGetValidatorsInfo) for resolved data format  
<a name="GraphQLClient+listAssetTransactions"></a>

### graphQLClient.listAssetTransactions(params) ⇒ [<code>Promise.&lt;ResponseListAssetTransactions></code>](#GraphQLClient.ResponseListAssetTransactions)

listAssetTransactions

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseListAssetTransactions></code>](#GraphQLClient.ResponseListAssetTransactions) - Checkout [ResponseListAssetTransactions](#GraphQLClient.ResponseListAssetTransactions) for resolved data format  

| Param  | Type                                                                                   |
| ------ | -------------------------------------------------------------------------------------- |
| params | [<code>ListAssetTransactionsParams</code>](#GraphQLClient.ListAssetTransactionsParams) |

<a name="GraphQLClient+listAssets"></a>

### graphQLClient.listAssets(params) ⇒ [<code>Promise.&lt;ResponseListAssets></code>](#GraphQLClient.ResponseListAssets)

listAssets

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseListAssets></code>](#GraphQLClient.ResponseListAssets) - Checkout [ResponseListAssets](#GraphQLClient.ResponseListAssets) for resolved data format  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [<code>ListAssetsParams</code>](#GraphQLClient.ListAssetsParams) |

<a name="GraphQLClient+listBlocks"></a>

### graphQLClient.listBlocks(params) ⇒ [<code>Promise.&lt;ResponseListBlocks></code>](#GraphQLClient.ResponseListBlocks)

listBlocks

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseListBlocks></code>](#GraphQLClient.ResponseListBlocks) - Checkout [ResponseListBlocks](#GraphQLClient.ResponseListBlocks) for resolved data format  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [<code>ListBlocksParams</code>](#GraphQLClient.ListBlocksParams) |

<a name="GraphQLClient+listStakes"></a>

### graphQLClient.listStakes(params) ⇒ [<code>Promise.&lt;ResponseListStakes></code>](#GraphQLClient.ResponseListStakes)

listStakes

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseListStakes></code>](#GraphQLClient.ResponseListStakes) - Checkout [ResponseListStakes](#GraphQLClient.ResponseListStakes) for resolved data format  

| Param  | Type                                                             |
| ------ | ---------------------------------------------------------------- |
| params | [<code>ListStakesParams</code>](#GraphQLClient.ListStakesParams) |

<a name="GraphQLClient+listTopAccounts"></a>

### graphQLClient.listTopAccounts(params) ⇒ [<code>Promise.&lt;ResponseListTopAccounts></code>](#GraphQLClient.ResponseListTopAccounts)

listTopAccounts

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseListTopAccounts></code>](#GraphQLClient.ResponseListTopAccounts) - Checkout [ResponseListTopAccounts](#GraphQLClient.ResponseListTopAccounts) for resolved data format  

| Param  | Type                                                                       |
| ------ | -------------------------------------------------------------------------- |
| params | [<code>ListTopAccountsParams</code>](#GraphQLClient.ListTopAccountsParams) |

<a name="GraphQLClient+listTransactions"></a>

### graphQLClient.listTransactions(params) ⇒ [<code>Promise.&lt;ResponseListTransactions></code>](#GraphQLClient.ResponseListTransactions)

listTransactions

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseListTransactions></code>](#GraphQLClient.ResponseListTransactions) - Checkout [ResponseListTransactions](#GraphQLClient.ResponseListTransactions) for resolved data format  

| Param  | Type                                                                         |
| ------ | ---------------------------------------------------------------------------- |
| params | [<code>ListTransactionsParams</code>](#GraphQLClient.ListTransactionsParams) |

<a name="GraphQLClient+sendTx"></a>

### graphQLClient.sendTx(params) ⇒ [<code>Promise.&lt;ResponseSendTx></code>](#GraphQLClient.ResponseSendTx)

sendTx

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseSendTx></code>](#GraphQLClient.ResponseSendTx) - Checkout [ResponseSendTx](#GraphQLClient.ResponseSendTx) for resolved data format  

| Param  | Type                                                     |
| ------ | -------------------------------------------------------- |
| params | [<code>SendTxParams</code>](#GraphQLClient.SendTxParams) |

<a name="GraphQLClient+startSimulator"></a>

### graphQLClient.startSimulator() ⇒ [<code>Promise.&lt;ResponseStartSimulator></code>](#GraphQLClient.ResponseStartSimulator)

startSimulator

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseStartSimulator></code>](#GraphQLClient.ResponseStartSimulator) - Checkout [ResponseStartSimulator](#GraphQLClient.ResponseStartSimulator) for resolved data format  
<a name="GraphQLClient+stopSimulator"></a>

### graphQLClient.stopSimulator() ⇒ [<code>Promise.&lt;ResponseStopSimulator></code>](#GraphQLClient.ResponseStopSimulator)

stopSimulator

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseStopSimulator></code>](#GraphQLClient.ResponseStopSimulator) - Checkout [ResponseStopSimulator](#GraphQLClient.ResponseStopSimulator) for resolved data format  
<a name="GraphQLClient+unsubscribe"></a>

### graphQLClient.unsubscribe(params) ⇒ [<code>Promise.&lt;ResponseUnsubscribe></code>](#GraphQLClient.ResponseUnsubscribe)

unsubscribe

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseUnsubscribe></code>](#GraphQLClient.ResponseUnsubscribe) - Checkout [ResponseUnsubscribe](#GraphQLClient.ResponseUnsubscribe) for resolved data format  

| Param  | Type                                                               |
| ------ | ------------------------------------------------------------------ |
| params | [<code>UnsubscribeParams</code>](#GraphQLClient.UnsubscribeParams) |

<a name="GraphQLClient+subscribe"></a>

### graphQLClient.subscribe(params) ⇒ [<code>Promise.&lt;ResponseSubscribe></code>](#GraphQLClient.ResponseSubscribe)

subscribe

**Kind**: instance method of [<code>GraphQLClient</code>](#GraphQLClient)  
**Returns**: [<code>Promise.&lt;ResponseSubscribe></code>](#GraphQLClient.ResponseSubscribe) - Checkout [ResponseSubscribe](#GraphQLClient.ResponseSubscribe) for resolved data format  

| Param  | Type                                                           |
| ------ | -------------------------------------------------------------- |
| params | [<code>SubscribeParams</code>](#GraphQLClient.SubscribeParams) |

<a name="GraphQLClient.WalletObject"></a>

### GraphQLClient.WalletObject : <code>Object</code>

Structure of GraphQLClient.WalletObject

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                                        |
| --------- | ------------------------------------------- |
| publicKey | <code>string</code>                         |
| secretKey | <code>string</code>                         |
| type      | <code>GraphQLClient~WalletTypeObject</code> |

<a name="GraphQLClient.WalletTypeObject"></a>

### GraphQLClient.WalletTypeObject : <code>Object</code>

Structure of GraphQLClient.WalletTypeObject

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                | Description           |
| ------- | ------------------- | --------------------- |
| pk      | <code>number</code> |                       |
| role    | <code>number</code> |                       |
| hash    | <code>number</code> |                       |
| address | <code>number</code> | defaults to base58btc |

<a name="GraphQLClient.TxEncodeOutput"></a>

### GraphQLClient.TxEncodeOutput : <code>object</code>

Structure of GraphQLClient.TxEncodeOutput

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                | Description                                                                            |
| ------ | ------------------- | -------------------------------------------------------------------------------------- |
| object | <code>object</code> | the transaction object, human readable                                                 |
| buffer | <code>buffer</code> | the transaction binary presentation, can be used to signing, encoding to other formats |

<a name="GraphQLClient.AddressFilter"></a>

### GraphQLClient.AddressFilter : <code>object</code>

Structure of GraphQLClient.AddressFilter

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                 |
| ------------ | ------------------------------------ |
| ...direction | <code>GraphQLClient.Direction</code> |
| receiver     | <code>string</code>                  |
| sender       | <code>string</code>                  |

<a name="GraphQLClient.PageInput"></a>

### GraphQLClient.PageInput : <code>object</code>

Structure of GraphQLClient.PageInput

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                                               |
| ------ | -------------------------------------------------- |
| cursor | <code>string</code>                                |
| order  | <code>Array.&lt;...GraphQLClient.PageOrder></code> |
| size   | <code>number</code>                                |

<a name="GraphQLClient.PageOrder"></a>

### GraphQLClient.PageOrder : <code>object</code>

Structure of GraphQLClient.PageOrder

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| field | <code>string</code> |
| type  | <code>string</code> |

<a name="GraphQLClient.RangeFilter"></a>

### GraphQLClient.RangeFilter : <code>object</code>

Structure of GraphQLClient.RangeFilter

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| from | <code>string</code> |
| to   | <code>string</code> |

<a name="GraphQLClient.TimeFilter"></a>

### GraphQLClient.TimeFilter : <code>object</code>

Structure of GraphQLClient.TimeFilter

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| endDateTime   | <code>string</code> |
| startDateTime | <code>string</code> |

<a name="GraphQLClient.TypeFilter"></a>

### GraphQLClient.TypeFilter : <code>object</code>

Structure of GraphQLClient.TypeFilter

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                                            |
| ----- | ----------------------------------------------- |
| types | <code>Array.&lt;...GraphQLClient.string></code> |

<a name="GraphQLClient.ValidityFilter"></a>

### GraphQLClient.ValidityFilter : <code>object</code>

Structure of GraphQLClient.ValidityFilter

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name        | Type                                |
| ----------- | ----------------------------------- |
| ...validity | <code>GraphQLClient.Validity</code> |

<a name="GraphQLClient.AbciServerStatus"></a>

### GraphQLClient.AbciServerStatus : <code>object</code>

Structure of GraphQLClient.AbciServerStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| abciConsensus | <code>string</code> |
| abciInfo      | <code>string</code> |

<a name="GraphQLClient.AccountMigrateTx"></a>

### GraphQLClient.AccountMigrateTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                                 |
| ------- | ---------------------------------------------------- |
| address | <code>string</code>                                  |
| ...data | [<code>Any</code>](#GraphQLClient.Any)               |
| pk      | <code>string</code>                                  |
| ...type | [<code>WalletType</code>](#GraphQLClient.WalletType) |

<a name="GraphQLClient.AccountState"></a>

### GraphQLClient.AccountState : <code>object</code>

Structure of GraphQLClient.AccountState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                                     |
| ------------ | -------------------------------------------------------- |
| address      | <code>string</code>                                      |
| balance      | <code>string</code>                                      |
| ...context   | [<code>StateContext</code>](#GraphQLClient.StateContext) |
| ...data      | [<code>Any</code>](#GraphQLClient.Any)                   |
| issuer       | <code>string</code>                                      |
| migratedFrom | <code>Array.&lt;...GraphQLClient.string></code>          |
| migratedTo   | <code>Array.&lt;...GraphQLClient.string></code>          |
| moniker      | <code>string</code>                                      |
| nonce        | <code>string</code>                                      |
| numAssets    | <code>string</code>                                      |
| numTxs       | <code>string</code>                                      |
| pk           | <code>string</code>                                      |
| ...poke      | [<code>PokeInfo</code>](#GraphQLClient.PokeInfo)         |
| ...stake     | [<code>StakeContext</code>](#GraphQLClient.StakeContext) |
| ...type      | [<code>WalletType</code>](#GraphQLClient.WalletType)     |

<a name="GraphQLClient.Any"></a>

### GraphQLClient.Any : <code>object</code>

Structure of GraphQLClient.Any

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| typeUrl | <code>string</code> |
| value   | <code>string</code> |

<a name="GraphQLClient.AssetState"></a>

### GraphQLClient.AssetState : <code>object</code>

Structure of GraphQLClient.AssetState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                                     |
| ------------- | -------------------------------------------------------- |
| address       | <code>string</code>                                      |
| consumedTime  | <code>string</code>                                      |
| ...context    | [<code>StateContext</code>](#GraphQLClient.StateContext) |
| ...data       | [<code>Any</code>](#GraphQLClient.Any)                   |
| issuer        | <code>string</code>                                      |
| moniker       | <code>string</code>                                      |
| owner         | <code>string</code>                                      |
| readonly      | <code>boolean</code>                                     |
| ...stake      | [<code>StakeContext</code>](#GraphQLClient.StakeContext) |
| transferrable | <code>boolean</code>                                     |
| ttl           | <code>number</code>                                      |

<a name="GraphQLClient.BlockId"></a>

### GraphQLClient.BlockId : <code>object</code>

Structure of GraphQLClient.BlockId

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name           | Type                                                       |
| -------------- | ---------------------------------------------------------- |
| hash           | <code>string</code>                                        |
| ...partsHeader | [<code>PartSetHeader</code>](#GraphQLClient.PartSetHeader) |

<a name="GraphQLClient.BlockInfo"></a>

### GraphQLClient.BlockInfo : <code>object</code>

Structure of GraphQLClient.BlockInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name               | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| appHash            | <code>string</code>                                      |
| consensusHash      | <code>string</code>                                      |
| dataHash           | <code>string</code>                                      |
| evidenceHash       | <code>string</code>                                      |
| height             | <code>string</code>                                      |
| invalidTxs         | <code>Array.&lt;...GraphQLClient.TransactionInfo></code> |
| invalidTxsHashes   | <code>Array.&lt;...GraphQLClient.string></code>          |
| ...lastBlockId     | [<code>BlockId</code>](#GraphQLClient.BlockId)           |
| lastCommitHash     | <code>string</code>                                      |
| lastResultsHash    | <code>string</code>                                      |
| nextValidatorsHash | <code>string</code>                                      |
| numTxs             | <code>number</code>                                      |
| proposer           | <code>string</code>                                      |
| time               | <code>string</code>                                      |
| totalTxs           | <code>string</code>                                      |
| txs                | <code>Array.&lt;...GraphQLClient.TransactionInfo></code> |
| txsHashes          | <code>Array.&lt;...GraphQLClient.string></code>          |
| validatorsHash     | <code>string</code>                                      |
| ...version         | [<code>Version</code>](#GraphQLClient.Version)           |

<a name="GraphQLClient.BlockInfoSimple"></a>

### GraphQLClient.BlockInfoSimple : <code>object</code>

Structure of GraphQLClient.BlockInfoSimple

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name               | Type                                            |
| ------------------ | ----------------------------------------------- |
| appHash            | <code>string</code>                             |
| consensusHash      | <code>string</code>                             |
| dataHash           | <code>string</code>                             |
| evidenceHash       | <code>string</code>                             |
| height             | <code>string</code>                             |
| invalidTxsHashes   | <code>Array.&lt;...GraphQLClient.string></code> |
| ...lastBlockId     | [<code>BlockId</code>](#GraphQLClient.BlockId)  |
| lastCommitHash     | <code>string</code>                             |
| lastResultsHash    | <code>string</code>                             |
| nextValidatorsHash | <code>string</code>                             |
| numTxs             | <code>number</code>                             |
| proposer           | <code>string</code>                             |
| time               | <code>string</code>                             |
| totalTxs           | <code>string</code>                             |
| txsHashes          | <code>Array.&lt;...GraphQLClient.string></code> |
| validatorsHash     | <code>string</code>                             |
| ...version         | [<code>Version</code>](#GraphQLClient.Version)  |

<a name="GraphQLClient.ChainInfo"></a>

### GraphQLClient.ChainInfo : <code>object</code>

Structure of GraphQLClient.ChainInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                                           |
| ---------------- | -------------------------------------------------------------- |
| address          | <code>string</code>                                            |
| appHash          | <code>string</code>                                            |
| blockHash        | <code>string</code>                                            |
| blockHeight      | <code>string</code>                                            |
| blockTime        | <code>string</code>                                            |
| consensusVersion | <code>string</code>                                            |
| forgeAppsVersion | <code>Array.&lt;...GraphQLClient.ForgeAppsVersionEntry></code> |
| id               | <code>string</code>                                            |
| moniker          | <code>string</code>                                            |
| network          | <code>string</code>                                            |
| supportedTxs     | <code>Array.&lt;...GraphQLClient.string></code>                |
| synced           | <code>boolean</code>                                           |
| totalTxs         | <code>string</code>                                            |
| version          | <code>string</code>                                            |
| votingPower      | <code>string</code>                                            |

<a name="GraphQLClient.CircularQueue"></a>

### GraphQLClient.CircularQueue : <code>object</code>

Structure of GraphQLClient.CircularQueue

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                            |
| -------- | ----------------------------------------------- |
| circular | <code>boolean</code>                            |
| fifo     | <code>boolean</code>                            |
| items    | <code>Array.&lt;...GraphQLClient.string></code> |
| maxItems | <code>number</code>                             |
| typeUrl  | <code>string</code>                             |

<a name="GraphQLClient.ConsensusParams"></a>

### GraphQLClient.ConsensusParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                               |
| ---------------- | -------------------------------------------------- |
| maxBytes         | <code>string</code>                                |
| maxCandidates    | <code>number</code>                                |
| maxGas           | <code>string</code>                                |
| maxValidators    | <code>number</code>                                |
| paramChanged     | <code>boolean</code>                               |
| pubKeyTypes      | <code>Array.&lt;...GraphQLClient.string></code>    |
| validatorChanged | <code>boolean</code>                               |
| validators       | <code>Array.&lt;...GraphQLClient.Validator></code> |

<a name="GraphQLClient.ConsensusStatus"></a>

### GraphQLClient.ConsensusStatus : <code>object</code>

Structure of GraphQLClient.ConsensusStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name        | Type                 |
| ----------- | -------------------- |
| blockHeight | <code>string</code>  |
| health      | <code>boolean</code> |
| synced      | <code>boolean</code> |

<a name="GraphQLClient.ConsensusUpgradeTx"></a>

### GraphQLClient.ConsensusUpgradeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                               |
| ------------- | -------------------------------------------------- |
| ...data       | [<code>Any</code>](#GraphQLClient.Any)             |
| maxBytes      | <code>string</code>                                |
| maxCandidates | <code>number</code>                                |
| maxGas        | <code>string</code>                                |
| maxValidators | <code>number</code>                                |
| validators    | <code>Array.&lt;...GraphQLClient.Validator></code> |

<a name="GraphQLClient.ConsumeAssetTx"></a>

### GraphQLClient.ConsumeAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                   |
| ------- | -------------------------------------- |
| address | <code>string</code>                    |
| ...data | [<code>Any</code>](#GraphQLClient.Any) |
| issuer  | <code>string</code>                    |

<a name="GraphQLClient.CoreProtocol"></a>

### GraphQLClient.CoreProtocol : <code>object</code>

Structure of GraphQLClient.CoreProtocol

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| address | <code>string</code> |
| name    | <code>string</code> |

<a name="GraphQLClient.CreateAssetTx"></a>

### GraphQLClient.CreateAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                   |
| ------------- | -------------------------------------- |
| address       | <code>string</code>                    |
| ...data       | [<code>Any</code>](#GraphQLClient.Any) |
| moniker       | <code>string</code>                    |
| parent        | <code>string</code>                    |
| readonly      | <code>boolean</code>                   |
| transferrable | <code>boolean</code>                   |
| ttl           | <code>number</code>                    |

<a name="GraphQLClient.DeclareFileTx"></a>

### GraphQLClient.DeclareFileTx : <code>object</code>

Structure of GraphQLClient.DeclareFileTx 

Checkout the following snippet for the format of DeclareFileTx:

```json
{
  "hash": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| hash | <code>string</code> |

<a name="GraphQLClient.DeclareTx"></a>

### GraphQLClient.DeclareTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                   |
| ------- | -------------------------------------- |
| ...data | [<code>Any</code>](#GraphQLClient.Any) |
| issuer  | <code>string</code>                    |
| moniker | <code>string</code>                    |

<a name="GraphQLClient.DiskSpaceStatus"></a>

### GraphQLClient.DiskSpaceStatus : <code>object</code>

Structure of GraphQLClient.DiskSpaceStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                |
| ---------- | ------------------- |
| forgeUsage | <code>string</code> |
| total      | <code>string</code> |

<a name="GraphQLClient.Evidence"></a>

### GraphQLClient.Evidence : <code>object</code>

Structure of GraphQLClient.Evidence

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                               |
| ---------------- | -------------------------------------------------- |
| height           | <code>string</code>                                |
| time             | <code>string</code>                                |
| totalVotingPower | <code>string</code>                                |
| type             | <code>string</code>                                |
| ...validator     | [<code>Validator</code>](#GraphQLClient.Validator) |

<a name="GraphQLClient.ExchangeInfo"></a>

### GraphQLClient.ExchangeInfo : <code>object</code>

Structure of GraphQLClient.ExchangeInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                                            |
| ------ | ----------------------------------------------- |
| assets | <code>Array.&lt;...GraphQLClient.string></code> |
| value  | <code>string</code>                             |

<a name="GraphQLClient.ExchangeTx"></a>

### GraphQLClient.ExchangeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name        | Type                                                     |
| ----------- | -------------------------------------------------------- |
| ...data     | [<code>Any</code>](#GraphQLClient.Any)                   |
| expiredAt   | <code>string</code>                                      |
| ...receiver | [<code>ExchangeInfo</code>](#GraphQLClient.ExchangeInfo) |
| ...sender   | [<code>ExchangeInfo</code>](#GraphQLClient.ExchangeInfo) |
| to          | <code>string</code>                                      |

<a name="GraphQLClient.ExtraAccountMigrate"></a>

### GraphQLClient.ExtraAccountMigrate : <code>object</code>

Structure of GraphQLClient.ExtraAccountMigrate

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| address | <code>string</code> |

<a name="GraphQLClient.ExtraCreateAsset"></a>

### GraphQLClient.ExtraCreateAsset : <code>object</code>

Structure of GraphQLClient.ExtraCreateAsset

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| asset | <code>string</code> |

<a name="GraphQLClient.ForgeAppsVersionEntry"></a>

### GraphQLClient.ForgeAppsVersionEntry : <code>object</code>

Structure of GraphQLClient.ForgeAppsVersionEntry

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |
| value | <code>string</code> |

<a name="GraphQLClient.ForgeState"></a>

### GraphQLClient.ForgeState : <code>object</code>

Structure of GraphQLClient.ForgeState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name           | Type                                                               |
| -------------- | ------------------------------------------------------------------ |
| address        | <code>string</code>                                                |
| ...consensus   | [<code>ConsensusParams</code>](#GraphQLClient.ConsensusParams)     |
| ...data        | [<code>Any</code>](#GraphQLClient.Any)                             |
| forgeAppHash   | <code>string</code>                                                |
| ...pokeConfig  | [<code>PokeConfig</code>](#GraphQLClient.PokeConfig)               |
| protocols      | <code>Array.&lt;...GraphQLClient.CoreProtocol></code>              |
| ...stakeConfig | [<code>StakeConfig</code>](#GraphQLClient.StakeConfig)             |
| stakeSummary   | <code>Array.&lt;...GraphQLClient.StakeSummaryEntry></code>         |
| tasks          | <code>Array.&lt;...GraphQLClient.TasksEntry></code>                |
| ...token       | [<code>ForgeToken</code>](#GraphQLClient.ForgeToken)               |
| ...txConfig    | [<code>TransactionConfig</code>](#GraphQLClient.TransactionConfig) |
| ...upgradeInfo | [<code>UpgradeInfo</code>](#GraphQLClient.UpgradeInfo)             |
| version        | <code>string</code>                                                |

<a name="GraphQLClient.ForgeStats"></a>

### GraphQLClient.ForgeStats : <code>object</code>

Structure of GraphQLClient.ForgeStats

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                   | Type                                            |
| ---------------------- | ----------------------------------------------- |
| avgBlockTime           | <code>number</code>                             |
| avgTps                 | <code>number</code>                             |
| maxTps                 | <code>number</code>                             |
| numAccountMigrateTxs   | <code>Array.&lt;...GraphQLClient.string></code> |
| numBlocks              | <code>Array.&lt;...GraphQLClient.string></code> |
| numConsensusUpgradeTxs | <code>Array.&lt;...GraphQLClient.number></code> |
| numConsumeAssetTxs     | <code>Array.&lt;...GraphQLClient.string></code> |
| numCreateAssetTxs      | <code>Array.&lt;...GraphQLClient.string></code> |
| numDeclareFileTxs      | <code>Array.&lt;...GraphQLClient.string></code> |
| numDeclareTxs          | <code>Array.&lt;...GraphQLClient.string></code> |
| numExchangeTxs         | <code>Array.&lt;...GraphQLClient.string></code> |
| numPokeTxs             | <code>Array.&lt;...GraphQLClient.string></code> |
| numStakeTxs            | <code>Array.&lt;...GraphQLClient.string></code> |
| numStakes              | <code>Array.&lt;...GraphQLClient.string></code> |
| numSysUpgradeTxs       | <code>Array.&lt;...GraphQLClient.number></code> |
| numTransferTxs         | <code>Array.&lt;...GraphQLClient.string></code> |
| numTxs                 | <code>Array.&lt;...GraphQLClient.string></code> |
| numUpdateAssetTxs      | <code>Array.&lt;...GraphQLClient.string></code> |
| numValidators          | <code>Array.&lt;...GraphQLClient.number></code> |
| tps                    | <code>Array.&lt;...GraphQLClient.number></code> |

<a name="GraphQLClient.ForgeStatus"></a>

### GraphQLClient.ForgeStatus : <code>object</code>

Structure of GraphQLClient.ForgeStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| ...abciServer | [<code>AbciServerStatus</code>](#GraphQLClient.AbciServerStatus) |
| abiServer     | <code>string</code>                                              |
| forgeWeb      | <code>string</code>                                              |
| health        | <code>boolean</code>                                             |

<a name="GraphQLClient.ForgeToken"></a>

### GraphQLClient.ForgeToken : <code>object</code>

Structure of GraphQLClient.ForgeToken

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| decimal       | <code>number</code> |
| description   | <code>string</code> |
| icon          | <code>string</code> |
| inflationRate | <code>number</code> |
| initialSupply | <code>string</code> |
| name          | <code>string</code> |
| symbol        | <code>string</code> |
| totalSupply   | <code>string</code> |
| unit          | <code>string</code> |

<a name="GraphQLClient.GeoInfo"></a>

### GraphQLClient.GeoInfo : <code>object</code>

Structure of GraphQLClient.GeoInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                |
| --------- | ------------------- |
| city      | <code>string</code> |
| country   | <code>string</code> |
| latitude  | <code>number</code> |
| longitude | <code>number</code> |

<a name="GraphQLClient.Header"></a>

### GraphQLClient.Header : <code>object</code>

Structure of GraphQLClient.Header

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name               | Type                                           |
| ------------------ | ---------------------------------------------- |
| appHash            | <code>string</code>                            |
| chainId            | <code>string</code>                            |
| consensusHash      | <code>string</code>                            |
| dataHash           | <code>string</code>                            |
| evidenceHash       | <code>string</code>                            |
| height             | <code>string</code>                            |
| ...lastBlockId     | [<code>BlockId</code>](#GraphQLClient.BlockId) |
| lastCommitHash     | <code>string</code>                            |
| lastResultsHash    | <code>string</code>                            |
| nextValidatorsHash | <code>string</code>                            |
| numTxs             | <code>string</code>                            |
| proposerAddress    | <code>string</code>                            |
| time               | <code>string</code>                            |
| totalTxs           | <code>string</code>                            |
| validatorsHash     | <code>string</code>                            |
| ...version         | [<code>Version</code>](#GraphQLClient.Version) |

<a name="GraphQLClient.HealthStatus"></a>

### GraphQLClient.HealthStatus : <code>object</code>

Structure of GraphQLClient.HealthStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                                           |
| ------------ | -------------------------------------------------------------- |
| ...consensus | [<code>ConsensusStatus</code>](#GraphQLClient.ConsensusStatus) |
| ...forge     | [<code>ForgeStatus</code>](#GraphQLClient.ForgeStatus)         |
| ...network   | [<code>NetworkStatus</code>](#GraphQLClient.NetworkStatus)     |
| ...storage   | [<code>StorageStatus</code>](#GraphQLClient.StorageStatus)     |

<a name="GraphQLClient.IndexedAccountState"></a>

### GraphQLClient.IndexedAccountState : <code>object</code>

Structure of GraphQLClient.IndexedAccountState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                | Type                                            |
| ------------------- | ----------------------------------------------- |
| address             | <code>string</code>                             |
| balance             | <code>string</code>                             |
| genesisTime         | <code>string</code>                             |
| migratedFrom        | <code>string</code>                             |
| migratedTo          | <code>string</code>                             |
| moniker             | <code>string</code>                             |
| nonce               | <code>string</code>                             |
| numAssets           | <code>string</code>                             |
| numTxs              | <code>string</code>                             |
| recentNumTxs        | <code>Array.&lt;...GraphQLClient.string></code> |
| renaissanceTime     | <code>string</code>                             |
| totalReceivedStakes | <code>string</code>                             |
| totalStakes         | <code>string</code>                             |
| totalUnstakes       | <code>string</code>                             |

<a name="GraphQLClient.IndexedAssetState"></a>

### GraphQLClient.IndexedAssetState : <code>object</code>

Structure of GraphQLClient.IndexedAssetState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name            | Type                 |
| --------------- | -------------------- |
| address         | <code>string</code>  |
| genesisTime     | <code>string</code>  |
| moniker         | <code>string</code>  |
| owner           | <code>string</code>  |
| readonly        | <code>boolean</code> |
| renaissanceTime | <code>string</code>  |

<a name="GraphQLClient.IndexedBlock"></a>

### GraphQLClient.IndexedBlock : <code>object</code>

Structure of GraphQLClient.IndexedBlock

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| height        | <code>string</code> |
| numInvalidTxs | <code>string</code> |
| numTxs        | <code>string</code> |
| proposer      | <code>string</code> |
| time          | <code>string</code> |

<a name="GraphQLClient.IndexedStakeState"></a>

### GraphQLClient.IndexedStakeState : <code>object</code>

Structure of GraphQLClient.IndexedStakeState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name            | Type                |
| --------------- | ------------------- |
| address         | <code>string</code> |
| balance         | <code>string</code> |
| genesisTime     | <code>string</code> |
| message         | <code>string</code> |
| receiver        | <code>string</code> |
| renaissanceTime | <code>string</code> |
| sender          | <code>string</code> |
| type            | <code>number</code> |

<a name="GraphQLClient.IndexedTransaction"></a>

### GraphQLClient.IndexedTransaction : <code>object</code>

Structure of GraphQLClient.IndexedTransaction

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                   |
| -------- | ------------------------------------------------------ |
| ...code  | <code>GraphQLClient.StatusCode</code>                  |
| hash     | <code>string</code>                                    |
| receiver | <code>string</code>                                    |
| sender   | <code>string</code>                                    |
| time     | <code>string</code>                                    |
| ...tx    | [<code>Transaction</code>](#GraphQLClient.Transaction) |
| type     | <code>string</code>                                    |
| valid    | <code>boolean</code>                                   |

<a name="GraphQLClient.KvPair"></a>

### GraphQLClient.KvPair : <code>object</code>

Structure of GraphQLClient.KvPair

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| key   | <code>string</code> |
| value | <code>string</code> |

<a name="GraphQLClient.LastCommitInfo"></a>

### GraphQLClient.LastCommitInfo : <code>object</code>

Structure of GraphQLClient.LastCommitInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                                              |
| ----- | ------------------------------------------------- |
| round | <code>number</code>                               |
| votes | <code>Array.&lt;...GraphQLClient.VoteInfo></code> |

<a name="GraphQLClient.Multisig"></a>

### GraphQLClient.Multisig : <code>object</code>

Structure of GraphQLClient.Multisig

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                                   |
| --------- | -------------------------------------- |
| ...data   | [<code>Any</code>](#GraphQLClient.Any) |
| pk        | <code>string</code>                    |
| signature | <code>string</code>                    |
| signer    | <code>string</code>                    |

<a name="GraphQLClient.NetInfo"></a>

### GraphQLClient.NetInfo : <code>object</code>

Structure of GraphQLClient.NetInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                                              |
| --------- | ------------------------------------------------- |
| listeners | <code>Array.&lt;...GraphQLClient.string></code>   |
| listening | <code>boolean</code>                              |
| nPeers    | <code>number</code>                               |
| peers     | <code>Array.&lt;...GraphQLClient.PeerInfo></code> |

<a name="GraphQLClient.NetworkStatus"></a>

### GraphQLClient.NetworkStatus : <code>object</code>

Structure of GraphQLClient.NetworkStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                 |
| -------- | -------------------- |
| health   | <code>boolean</code> |
| numPeers | <code>number</code>  |

<a name="GraphQLClient.NodeInfo"></a>

### GraphQLClient.NodeInfo : <code>object</code>

Structure of GraphQLClient.NodeInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                                           |
| ---------------- | -------------------------------------------------------------- |
| address          | <code>string</code>                                            |
| appHash          | <code>string</code>                                            |
| blockHash        | <code>string</code>                                            |
| blockHeight      | <code>string</code>                                            |
| blockTime        | <code>string</code>                                            |
| consensusVersion | <code>string</code>                                            |
| forgeAppsVersion | <code>Array.&lt;...GraphQLClient.ForgeAppsVersionEntry></code> |
| ...geoInfo       | [<code>GeoInfo</code>](#GraphQLClient.GeoInfo)                 |
| id               | <code>string</code>                                            |
| ip               | <code>string</code>                                            |
| moniker          | <code>string</code>                                            |
| network          | <code>string</code>                                            |
| p2pAddress       | <code>string</code>                                            |
| supportedTxs     | <code>Array.&lt;...GraphQLClient.string></code>                |
| synced           | <code>boolean</code>                                           |
| totalTxs         | <code>string</code>                                            |
| version          | <code>string</code>                                            |
| votingPower      | <code>string</code>                                            |

<a name="GraphQLClient.PageInfo"></a>

### GraphQLClient.PageInfo : <code>object</code>

Structure of GraphQLClient.PageInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                 |
| ------ | -------------------- |
| cursor | <code>string</code>  |
| next   | <code>boolean</code> |
| total  | <code>number</code>  |

<a name="GraphQLClient.PartSetHeader"></a>

### GraphQLClient.PartSetHeader : <code>object</code>

Structure of GraphQLClient.PartSetHeader

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| hash  | <code>string</code> |
| total | <code>number</code> |

<a name="GraphQLClient.PeerInfo"></a>

### GraphQLClient.PeerInfo : <code>object</code>

Structure of GraphQLClient.PeerInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                           |
| ---------------- | ---------------------------------------------- |
| consensusVersion | <code>string</code>                            |
| ...geoInfo       | [<code>GeoInfo</code>](#GraphQLClient.GeoInfo) |
| id               | <code>string</code>                            |
| ip               | <code>string</code>                            |
| moniker          | <code>string</code>                            |
| network          | <code>string</code>                            |

<a name="GraphQLClient.PokeConfig"></a>

### GraphQLClient.PokeConfig : <code>object</code>

Structure of GraphQLClient.PokeConfig

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                |
| ---------- | ------------------- |
| address    | <code>string</code> |
| amount     | <code>string</code> |
| balance    | <code>string</code> |
| dailyLimit | <code>string</code> |

<a name="GraphQLClient.PokeInfo"></a>

### GraphQLClient.PokeInfo : <code>object</code>

Structure of GraphQLClient.PokeInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                |
| ---------- | ------------------- |
| amount     | <code>string</code> |
| dailyLimit | <code>string</code> |
| leftover   | <code>string</code> |

<a name="GraphQLClient.PokeTx"></a>

### GraphQLClient.PokeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                   |
| ------- | -------------------------------------- |
| address | <code>string</code>                    |
| ...data | [<code>Any</code>](#GraphQLClient.Any) |
| date    | <code>string</code>                    |

<a name="GraphQLClient.ProtocolState"></a>

### GraphQLClient.ProtocolState : <code>object</code>

Structure of GraphQLClient.ProtocolState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                                     |
| ------------ | -------------------------------------------------------- |
| address      | <code>string</code>                                      |
| ...context   | [<code>StateContext</code>](#GraphQLClient.StateContext) |
| ...data      | [<code>Any</code>](#GraphQLClient.Any)                   |
| description  | <code>string</code>                                      |
| migratedFrom | <code>Array.&lt;...GraphQLClient.string></code>          |
| migratedTo   | <code>Array.&lt;...GraphQLClient.string></code>          |
| name         | <code>string</code>                                      |
| rootHash     | <code>string</code>                                      |
| ...status    | <code>GraphQLClient.ProtocolStatus</code>                |
| txHash       | <code>string</code>                                      |
| version      | <code>number</code>                                      |

<a name="GraphQLClient.PubKey"></a>

### GraphQLClient.PubKey : <code>object</code>

Structure of GraphQLClient.PubKey

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| data | <code>string</code> |
| type | <code>string</code> |

<a name="GraphQLClient.RequestBeginBlock"></a>

### GraphQLClient.RequestBeginBlock : <code>object</code>

Structure of GraphQLClient.RequestBeginBlock 

Checkout the following snippet for the format of RequestBeginBlock:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                | Type                                                         |
| ------------------- | ------------------------------------------------------------ |
| byzantineValidators | <code>Array.&lt;...GraphQLClient.Evidence></code>            |
| hash                | <code>string</code>                                          |
| ...header           | [<code>Header</code>](#GraphQLClient.Header)                 |
| ...lastCommitInfo   | [<code>LastCommitInfo</code>](#GraphQLClient.LastCommitInfo) |

<a name="GraphQLClient.RequestEndBlock"></a>

### GraphQLClient.RequestEndBlock : <code>object</code>

Structure of GraphQLClient.RequestEndBlock 

Checkout the following snippet for the format of RequestEndBlock:

```json
{
  "height": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| height | <code>string</code> |

<a name="GraphQLClient.ResponseGetAccountState"></a>

### GraphQLClient.ResponseGetAccountState : <code>object</code>

Structure of GraphQLClient.ResponseGetAccountState 

Checkout the following snippet for the format of ResponseGetAccountState:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                     |
| -------- | -------------------------------------------------------- |
| ...code  | <code>GraphQLClient.StatusCode</code>                    |
| ...state | [<code>AccountState</code>](#GraphQLClient.AccountState) |

<a name="GraphQLClient.ResponseGetAssetState"></a>

### GraphQLClient.ResponseGetAssetState : <code>object</code>

Structure of GraphQLClient.ResponseGetAssetState 

Checkout the following snippet for the format of ResponseGetAssetState:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                 |
| -------- | ---------------------------------------------------- |
| ...code  | <code>GraphQLClient.StatusCode</code>                |
| ...state | [<code>AssetState</code>](#GraphQLClient.AssetState) |

<a name="GraphQLClient.ResponseGetBlock"></a>

### GraphQLClient.ResponseGetBlock : <code>object</code>

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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                               |
| -------- | -------------------------------------------------- |
| ...block | [<code>BlockInfo</code>](#GraphQLClient.BlockInfo) |
| ...code  | <code>GraphQLClient.StatusCode</code>              |

<a name="GraphQLClient.ResponseGetBlocks"></a>

### GraphQLClient.ResponseGetBlocks : <code>object</code>

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
  "code": "OK",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                                     |
| ------- | -------------------------------------------------------- |
| blocks  | <code>Array.&lt;...GraphQLClient.BlockInfoSimple></code> |
| ...code | <code>GraphQLClient.StatusCode</code>                    |
| ...page | [<code>PageInfo</code>](#GraphQLClient.PageInfo)         |

<a name="GraphQLClient.ResponseGetChainInfo"></a>

### GraphQLClient.ResponseGetChainInfo : <code>object</code>

Structure of GraphQLClient.ResponseGetChainInfo 

Checkout the following snippet for the format of ResponseGetChainInfo:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                               |
| ------- | -------------------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code>              |
| ...info | [<code>ChainInfo</code>](#GraphQLClient.ChainInfo) |

<a name="GraphQLClient.ResponseGetConfig"></a>

### GraphQLClient.ResponseGetConfig : <code>object</code>

Structure of GraphQLClient.ResponseGetConfig 

Checkout the following snippet for the format of ResponseGetConfig:

```json
{
  "code": "OK",
  "config": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code> |
| config  | <code>string</code>                   |

<a name="GraphQLClient.ResponseGetForgeState"></a>

### GraphQLClient.ResponseGetForgeState : <code>object</code>

Structure of GraphQLClient.ResponseGetForgeState 

Checkout the following snippet for the format of ResponseGetForgeState:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                 |
| -------- | ---------------------------------------------------- |
| ...code  | <code>GraphQLClient.StatusCode</code>                |
| ...state | [<code>ForgeState</code>](#GraphQLClient.ForgeState) |

<a name="GraphQLClient.ResponseGetForgeStats"></a>

### GraphQLClient.ResponseGetForgeStats : <code>object</code>

Structure of GraphQLClient.ResponseGetForgeStats 

Checkout the following snippet for the format of ResponseGetForgeStats:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                                 |
| ------------- | ---------------------------------------------------- |
| ...code       | <code>GraphQLClient.StatusCode</code>                |
| ...forgeStats | [<code>ForgeStats</code>](#GraphQLClient.ForgeStats) |

<a name="GraphQLClient.ResponseGetHealthStatus"></a>

### GraphQLClient.ResponseGetHealthStatus : <code>object</code>

Structure of GraphQLClient.ResponseGetHealthStatus 

Checkout the following snippet for the format of ResponseGetHealthStatus:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name            | Type                                                     |
| --------------- | -------------------------------------------------------- |
| ...code         | <code>GraphQLClient.StatusCode</code>                    |
| ...healthStatus | [<code>HealthStatus</code>](#GraphQLClient.HealthStatus) |

<a name="GraphQLClient.ResponseGetNetInfo"></a>

### GraphQLClient.ResponseGetNetInfo : <code>object</code>

Structure of GraphQLClient.ResponseGetNetInfo 

Checkout the following snippet for the format of ResponseGetNetInfo:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                                           |
| ---------- | ---------------------------------------------- |
| ...code    | <code>GraphQLClient.StatusCode</code>          |
| ...netInfo | [<code>NetInfo</code>](#GraphQLClient.NetInfo) |

<a name="GraphQLClient.ResponseGetNodeInfo"></a>

### GraphQLClient.ResponseGetNodeInfo : <code>object</code>

Structure of GraphQLClient.ResponseGetNodeInfo 

Checkout the following snippet for the format of ResponseGetNodeInfo:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                             |
| ------- | ------------------------------------------------ |
| ...code | <code>GraphQLClient.StatusCode</code>            |
| ...info | [<code>NodeInfo</code>](#GraphQLClient.NodeInfo) |

<a name="GraphQLClient.ResponseGetProtocolState"></a>

### GraphQLClient.ResponseGetProtocolState : <code>object</code>

Structure of GraphQLClient.ResponseGetProtocolState 

Checkout the following snippet for the format of ResponseGetProtocolState:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                       |
| -------- | ---------------------------------------------------------- |
| ...code  | <code>GraphQLClient.StatusCode</code>                      |
| ...state | [<code>ProtocolState</code>](#GraphQLClient.ProtocolState) |

<a name="GraphQLClient.ResponseGetSimulatorStatus"></a>

### GraphQLClient.ResponseGetSimulatorStatus : <code>object</code>

Structure of GraphQLClient.ResponseGetSimulatorStatus 

Checkout the following snippet for the format of ResponseGetSimulatorStatus:

```json
{
  "code": "OK",
  "result": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code> |
| result  | <code>string</code>                   |

<a name="GraphQLClient.ResponseGetStakeState"></a>

### GraphQLClient.ResponseGetStakeState : <code>object</code>

Structure of GraphQLClient.ResponseGetStakeState 

Checkout the following snippet for the format of ResponseGetStakeState:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                 |
| -------- | ---------------------------------------------------- |
| ...code  | <code>GraphQLClient.StatusCode</code>                |
| ...state | [<code>StakeState</code>](#GraphQLClient.StakeState) |

<a name="GraphQLClient.ResponseGetTx"></a>

### GraphQLClient.ResponseGetTx : <code>object</code>

Structure of GraphQLClient.ResponseGetTx 

Checkout the following snippet for the format of ResponseGetTx:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                                           |
| ------- | -------------------------------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code>                          |
| ...info | [<code>TransactionInfo</code>](#GraphQLClient.TransactionInfo) |

<a name="GraphQLClient.ResponseGetUnconfirmedTxs"></a>

### GraphQLClient.ResponseGetUnconfirmedTxs : <code>object</code>

Structure of GraphQLClient.ResponseGetUnconfirmedTxs 

Checkout the following snippet for the format of ResponseGetUnconfirmedTxs:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name              | Type                                                         |
| ----------------- | ------------------------------------------------------------ |
| ...code           | <code>GraphQLClient.StatusCode</code>                        |
| ...page           | [<code>PageInfo</code>](#GraphQLClient.PageInfo)             |
| ...unconfirmedTxs | [<code>UnconfirmedTxs</code>](#GraphQLClient.UnconfirmedTxs) |

<a name="GraphQLClient.ResponseGetValidatorsInfo"></a>

### GraphQLClient.ResponseGetValidatorsInfo : <code>object</code>

Structure of GraphQLClient.ResponseGetValidatorsInfo 

Checkout the following snippet for the format of ResponseGetValidatorsInfo:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name              | Type                                                         |
| ----------------- | ------------------------------------------------------------ |
| ...code           | <code>GraphQLClient.StatusCode</code>                        |
| ...validatorsInfo | [<code>ValidatorsInfo</code>](#GraphQLClient.ValidatorsInfo) |

<a name="GraphQLClient.ResponseListAssetTransactions"></a>

### GraphQLClient.ResponseListAssetTransactions : <code>object</code>

Structure of GraphQLClient.ResponseListAssetTransactions 

Checkout the following snippet for the format of ResponseListAssetTransactions:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| ...code      | <code>GraphQLClient.StatusCode</code>                       |
| ...page      | [<code>PageInfo</code>](#GraphQLClient.PageInfo)            |
| transactions | <code>Array.&lt;...GraphQLClient.IndexedTransaction></code> |

<a name="GraphQLClient.ResponseListAssets"></a>

### GraphQLClient.ResponseListAssets : <code>object</code>

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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                                                                   |
| ---------- | ---------------------------------------------------------------------- |
| ...account | [<code>IndexedAccountState</code>](#GraphQLClient.IndexedAccountState) |
| assets     | <code>Array.&lt;...GraphQLClient.IndexedAssetState></code>             |
| ...code    | <code>GraphQLClient.StatusCode</code>                                  |
| ...page    | [<code>PageInfo</code>](#GraphQLClient.PageInfo)                       |

<a name="GraphQLClient.ResponseListBlocks"></a>

### GraphQLClient.ResponseListBlocks : <code>object</code>

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
  "code": "OK",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                                  |
| ------- | ----------------------------------------------------- |
| blocks  | <code>Array.&lt;...GraphQLClient.IndexedBlock></code> |
| ...code | <code>GraphQLClient.StatusCode</code>                 |
| ...page | [<code>PageInfo</code>](#GraphQLClient.PageInfo)      |

<a name="GraphQLClient.ResponseListStakes"></a>

### GraphQLClient.ResponseListStakes : <code>object</code>

Structure of GraphQLClient.ResponseListStakes 

Checkout the following snippet for the format of ResponseListStakes:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                                       |
| ------- | ---------------------------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code>                      |
| ...page | [<code>PageInfo</code>](#GraphQLClient.PageInfo)           |
| stakes  | <code>Array.&lt;...GraphQLClient.IndexedStakeState></code> |

<a name="GraphQLClient.ResponseListTopAccounts"></a>

### GraphQLClient.ResponseListTopAccounts : <code>object</code>

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
  "code": "OK",
  "page": {
    "cursor": "abc",
    "next": true,
    "total": 123
  }
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                         |
| -------- | ------------------------------------------------------------ |
| accounts | <code>Array.&lt;...GraphQLClient.IndexedAccountState></code> |
| ...code  | <code>GraphQLClient.StatusCode</code>                        |
| ...page  | [<code>PageInfo</code>](#GraphQLClient.PageInfo)             |

<a name="GraphQLClient.ResponseListTransactions"></a>

### GraphQLClient.ResponseListTransactions : <code>object</code>

Structure of GraphQLClient.ResponseListTransactions 

Checkout the following snippet for the format of ResponseListTransactions:

```json
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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                                        |
| ------------ | ----------------------------------------------------------- |
| ...code      | <code>GraphQLClient.StatusCode</code>                       |
| ...page      | [<code>PageInfo</code>](#GraphQLClient.PageInfo)            |
| transactions | <code>Array.&lt;...GraphQLClient.IndexedTransaction></code> |

<a name="GraphQLClient.ResponseSendTx"></a>

### GraphQLClient.ResponseSendTx : <code>object</code>

Structure of GraphQLClient.ResponseSendTx 

Checkout the following snippet for the format of ResponseSendTx:

```json
{
  "code": "OK",
  "hash": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code> |
| hash    | <code>string</code>                   |

<a name="GraphQLClient.ResponseStartSimulator"></a>

### GraphQLClient.ResponseStartSimulator : <code>object</code>

Structure of GraphQLClient.ResponseStartSimulator 

Checkout the following snippet for the format of ResponseStartSimulator:

```json
{
  "code": "OK"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code> |

<a name="GraphQLClient.ResponseStopSimulator"></a>

### GraphQLClient.ResponseStopSimulator : <code>object</code>

Structure of GraphQLClient.ResponseStopSimulator 

Checkout the following snippet for the format of ResponseStopSimulator:

```json
{
  "code": "OK"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code> |

<a name="GraphQLClient.ResponseSubscribe"></a>

### GraphQLClient.ResponseSubscribe : <code>object</code>

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
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                | Type                                                               |
| ------------------- | ------------------------------------------------------------------ |
| ...accountMigrate   | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...accountState     | [<code>AccountState</code>](#GraphQLClient.AccountState)           |
| ...assetState       | [<code>AssetState</code>](#GraphQLClient.AssetState)               |
| ...beginBlock       | [<code>RequestBeginBlock</code>](#GraphQLClient.RequestBeginBlock) |
| ...code             | <code>GraphQLClient.StatusCode</code>                              |
| ...confirm          | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...consensusUpgrade | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...createAsset      | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...declare          | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...declareFile      | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...endBlock         | [<code>RequestEndBlock</code>](#GraphQLClient.RequestEndBlock)     |
| ...exchange         | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...forgeState       | [<code>ForgeState</code>](#GraphQLClient.ForgeState)               |
| ...protocolState    | [<code>ProtocolState</code>](#GraphQLClient.ProtocolState)         |
| ...revoke           | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...stake            | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...stakeState       | [<code>StakeState</code>](#GraphQLClient.StakeState)               |
| ...sysUpgrade       | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| topic               | <code>string</code>                                                |
| ...transfer         | [<code>Transaction</code>](#GraphQLClient.Transaction)             |
| ...updateAsset      | [<code>Transaction</code>](#GraphQLClient.Transaction)             |

<a name="GraphQLClient.ResponseUnsubscribe"></a>

### GraphQLClient.ResponseUnsubscribe : <code>object</code>

Structure of GraphQLClient.ResponseUnsubscribe 

Checkout the following snippet for the format of ResponseUnsubscribe:

```json
{
  "code": "OK"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                  |
| ------- | ------------------------------------- |
| ...code | <code>GraphQLClient.StatusCode</code> |

<a name="GraphQLClient.StakeConfig"></a>

### GraphQLClient.StakeConfig : <code>object</code>

Structure of GraphQLClient.StakeConfig

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                | Type                |
| ------------------- | ------------------- |
| timeoutGeneral      | <code>number</code> |
| timeoutStakeForNode | <code>number</code> |

<a name="GraphQLClient.StakeContext"></a>

### GraphQLClient.StakeContext : <code>object</code>

Structure of GraphQLClient.StakeContext

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                    | Type                                                       |
| ----------------------- | ---------------------------------------------------------- |
| ...recentReceivedStakes | [<code>CircularQueue</code>](#GraphQLClient.CircularQueue) |
| ...recentStakes         | [<code>CircularQueue</code>](#GraphQLClient.CircularQueue) |
| totalReceivedStakes     | <code>string</code>                                        |
| totalStakes             | <code>string</code>                                        |
| totalUnstakes           | <code>string</code>                                        |

<a name="GraphQLClient.StakeDataType"></a>

### GraphQLClient.StakeDataType : <code>object</code>

Structure of GraphQLClient.StakeDataType

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| type | <code>string</code> |

<a name="GraphQLClient.StakeState"></a>

### GraphQLClient.StakeState : <code>object</code>

Structure of GraphQLClient.StakeState

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                                                     |
| ---------- | -------------------------------------------------------- |
| address    | <code>string</code>                                      |
| balance    | <code>string</code>                                      |
| ...context | [<code>StateContext</code>](#GraphQLClient.StateContext) |
| ...data    | [<code>Any</code>](#GraphQLClient.Any)                   |
| from       | <code>string</code>                                      |
| message    | <code>string</code>                                      |
| to         | <code>string</code>                                      |

<a name="GraphQLClient.StakeSummary"></a>

### GraphQLClient.StakeSummary : <code>object</code>

Structure of GraphQLClient.StakeSummary

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                                     |
| ------------- | -------------------------------------------------------- |
| ...context    | [<code>StateContext</code>](#GraphQLClient.StateContext) |
| totalStakes   | <code>string</code>                                      |
| totalUnstakes | <code>string</code>                                      |

<a name="GraphQLClient.StakeSummaryEntry"></a>

### GraphQLClient.StakeSummaryEntry : <code>object</code>

Structure of GraphQLClient.StakeSummaryEntry

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                     |
| -------- | -------------------------------------------------------- |
| key      | <code>number</code>                                      |
| ...value | [<code>StakeSummary</code>](#GraphQLClient.StakeSummary) |

<a name="GraphQLClient.StakeTx"></a>

### GraphQLClient.StakeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                                       |
| ------- | ---------------------------------------------------------- |
| ...data | [<code>StakeDataType</code>](#GraphQLClient.StakeDataType) |
| message | <code>string</code>                                        |
| to      | <code>string</code>                                        |
| value   | <code>string</code>                                        |

<a name="GraphQLClient.StateContext"></a>

### GraphQLClient.StateContext : <code>object</code>

Structure of GraphQLClient.StateContext

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                                           |
| ---------------- | -------------------------------------------------------------- |
| genesisTime      | <code>string</code>                                            |
| ...genesisTx     | [<code>TransactionInfo</code>](#GraphQLClient.TransactionInfo) |
| renaissanceTime  | <code>string</code>                                            |
| ...renaissanceTx | [<code>TransactionInfo</code>](#GraphQLClient.TransactionInfo) |

<a name="GraphQLClient.StorageStatus"></a>

### GraphQLClient.StorageStatus : <code>object</code>

Structure of GraphQLClient.StorageStatus

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name          | Type                                                           |
| ------------- | -------------------------------------------------------------- |
| ...diskSpace  | [<code>DiskSpaceStatus</code>](#GraphQLClient.DiskSpaceStatus) |
| health        | <code>boolean</code>                                           |
| indexerServer | <code>string</code>                                            |
| stateDb       | <code>string</code>                                            |

<a name="GraphQLClient.SysUpgradeTx"></a>

### GraphQLClient.SysUpgradeTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name        | Type                                                   |
| ----------- | ------------------------------------------------------ |
| ...data     | [<code>Any</code>](#GraphQLClient.Any)                 |
| gracePeriod | <code>string</code>                                    |
| ...task     | [<code>UpgradeTask</code>](#GraphQLClient.UpgradeTask) |

<a name="GraphQLClient.TasksEntry"></a>

### GraphQLClient.TasksEntry : <code>object</code>

Structure of GraphQLClient.TasksEntry

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                     |
| -------- | -------------------------------------------------------- |
| key      | <code>string</code>                                      |
| ...value | [<code>UpgradeTasks</code>](#GraphQLClient.UpgradeTasks) |

<a name="GraphQLClient.Transaction"></a>

### GraphQLClient.Transaction : <code>object</code>

Structure of GraphQLClient.Transaction

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                                              |
| ---------- | ------------------------------------------------- |
| chainId    | <code>string</code>                               |
| from       | <code>string</code>                               |
| ...itx     | <code>Itx</code>                                  |
| nonce      | <code>string</code>                               |
| pk         | <code>string</code>                               |
| signature  | <code>string</code>                               |
| signatures | <code>Array.&lt;...GraphQLClient.Multisig></code> |

<a name="GraphQLClient.TransactionConfig"></a>

### GraphQLClient.TransactionConfig : <code>object</code>

Structure of GraphQLClient.TransactionConfig

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                |
| ------------ | ------------------- |
| maxAssetSize | <code>number</code> |
| maxListSize  | <code>number</code> |
| maxMultisig  | <code>number</code> |
| minimumStake | <code>string</code> |

<a name="GraphQLClient.TransactionInfo"></a>

### GraphQLClient.TransactionInfo : <code>object</code>

Structure of GraphQLClient.TransactionInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name              | Type                                                                   |
| ----------------- | ---------------------------------------------------------------------- |
| ...accountMigrate | [<code>ExtraAccountMigrate</code>](#GraphQLClient.ExtraAccountMigrate) |
| ...code           | <code>GraphQLClient.StatusCode</code>                                  |
| ...createAsset    | [<code>ExtraCreateAsset</code>](#GraphQLClient.ExtraCreateAsset)       |
| hash              | <code>string</code>                                                    |
| height            | <code>string</code>                                                    |
| index             | <code>number</code>                                                    |
| tags              | <code>Array.&lt;...GraphQLClient.KvPair></code>                        |
| time              | <code>string</code>                                                    |
| ...tx             | [<code>Transaction</code>](#GraphQLClient.Transaction)                 |

<a name="GraphQLClient.TransferTx"></a>

### GraphQLClient.TransferTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| assets  | <code>Array.&lt;...GraphQLClient.string></code> |
| ...data | [<code>Any</code>](#GraphQLClient.Any)          |
| to      | <code>string</code>                             |
| value   | <code>string</code>                             |

<a name="GraphQLClient.UnconfirmedTxs"></a>

### GraphQLClient.UnconfirmedTxs : <code>object</code>

Structure of GraphQLClient.UnconfirmedTxs

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                                                 |
| ---- | ---------------------------------------------------- |
| nTxs | <code>number</code>                                  |
| txs  | <code>Array.&lt;...GraphQLClient.Transaction></code> |

<a name="GraphQLClient.UpdateAssetTx"></a>

### GraphQLClient.UpdateAssetTx : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                   |
| ------- | -------------------------------------- |
| address | <code>string</code>                    |
| ...data | [<code>Any</code>](#GraphQLClient.Any) |
| moniker | <code>string</code>                    |

<a name="GraphQLClient.UpgradeInfo"></a>

### GraphQLClient.UpgradeInfo : <code>object</code>

Structure of GraphQLClient.UpgradeInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| height  | <code>string</code> |
| version | <code>string</code> |

<a name="GraphQLClient.UpgradeTask"></a>

### GraphQLClient.UpgradeTask : <code>object</code>

Structure of GraphQLClient.UpgradeTask

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name     | Type                                                   |
| -------- | ------------------------------------------------------ |
| actions  | <code>Array.&lt;...GraphQLClient.UpgradeAction></code> |
| dataHash | <code>string</code>                                    |
| ...type  | <code>GraphQLClient.UpgradeType</code>                 |

<a name="GraphQLClient.UpgradeTasks"></a>

### GraphQLClient.UpgradeTasks : <code>object</code>

Structure of GraphQLClient.UpgradeTasks

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                                                 |
| ---- | ---------------------------------------------------- |
| item | <code>Array.&lt;...GraphQLClient.UpgradeTask></code> |

<a name="GraphQLClient.Validator"></a>

### GraphQLClient.Validator : <code>object</code>

Structure of GraphQLClient.Validator

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| address | <code>string</code> |
| power   | <code>string</code> |

<a name="GraphQLClient.ValidatorInfo"></a>

### GraphQLClient.ValidatorInfo : <code>object</code>

Structure of GraphQLClient.ValidatorInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                           |
| ---------------- | ---------------------------------------------- |
| address          | <code>string</code>                            |
| ...geoInfo       | [<code>GeoInfo</code>](#GraphQLClient.GeoInfo) |
| name             | <code>string</code>                            |
| proposerPriority | <code>string</code>                            |
| ...pubKey        | [<code>PubKey</code>](#GraphQLClient.PubKey)   |
| votingPower      | <code>string</code>                            |

<a name="GraphQLClient.ValidatorsInfo"></a>

### GraphQLClient.ValidatorsInfo : <code>object</code>

Structure of GraphQLClient.ValidatorsInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name        | Type                                                   |
| ----------- | ------------------------------------------------------ |
| blockHeight | <code>string</code>                                    |
| validators  | <code>Array.&lt;...GraphQLClient.ValidatorInfo></code> |

<a name="GraphQLClient.Version"></a>

### GraphQLClient.Version : <code>object</code>

Structure of GraphQLClient.Version

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| app   | <code>string</code> |
| block | <code>string</code> |

<a name="GraphQLClient.VoteInfo"></a>

### GraphQLClient.VoteInfo : <code>object</code>

Structure of GraphQLClient.VoteInfo

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name            | Type                                               |
| --------------- | -------------------------------------------------- |
| signedLastBlock | <code>boolean</code>                               |
| ...validator    | [<code>Validator</code>](#GraphQLClient.Validator) |

<a name="GraphQLClient.WalletType"></a>

### GraphQLClient.WalletType : <code>object</code>

Structure of GraphQLClient.WalletType

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name       | Type                                    |
| ---------- | --------------------------------------- |
| ...address | <code>GraphQLClient.EncodingType</code> |
| ...hash    | <code>GraphQLClient.HashType</code>     |
| ...pk      | <code>GraphQLClient.KeyType</code>      |
| ...role    | <code>GraphQLClient.RoleType</code>     |

<a name="GraphQLClient.GetAccountStateParams"></a>

### GraphQLClient.GetAccountStateParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| address | <code>string</code>                             |
| height  | <code>string</code>                             |
| keys    | <code>Array.&lt;...GraphQLClient.string></code> |

<a name="GraphQLClient.GetAssetStateParams"></a>

### GraphQLClient.GetAssetStateParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| address | <code>string</code>                             |
| height  | <code>string</code>                             |
| keys    | <code>Array.&lt;...GraphQLClient.string></code> |

<a name="GraphQLClient.GetBlockParams"></a>

### GraphQLClient.GetBlockParams : <code>object</code>

Structure of GraphQLClient.GetBlockParams 

Checkout the following snippet for the format of GetBlockParams:

```json
{
  "height": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| height | <code>string</code> |

<a name="GraphQLClient.GetBlocksParams"></a>

### GraphQLClient.GetBlocksParams : <code>object</code>

Structure of GraphQLClient.GetBlocksParams 

Checkout the following snippet for the format of GetBlocksParams:

```json
{
  "emptyExcluded": true
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name            | Type                                                   |
| --------------- | ------------------------------------------------------ |
| emptyExcluded   | <code>boolean</code>                                   |
| ...heightFilter | [<code>RangeFilter</code>](#GraphQLClient.RangeFilter) |
| ...paging       | [<code>PageInput</code>](#GraphQLClient.PageInput)     |

<a name="GraphQLClient.GetForgeStateParams"></a>

### GraphQLClient.GetForgeStateParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                                            |
| ------ | ----------------------------------------------- |
| height | <code>string</code>                             |
| keys   | <code>Array.&lt;...GraphQLClient.string></code> |

<a name="GraphQLClient.GetForgeStatsByDayParams"></a>

### GraphQLClient.GetForgeStatsByDayParams : <code>object</code>

Structure of GraphQLClient.GetForgeStatsByDayParams 

Checkout the following snippet for the format of GetForgeStatsByDayParams:

```json
{
  "endDate": "abc",
  "startDate": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                |
| --------- | ------------------- |
| endDate   | <code>string</code> |
| startDate | <code>string</code> |

<a name="GraphQLClient.GetForgeStatsByHourParams"></a>

### GraphQLClient.GetForgeStatsByHourParams : <code>object</code>

Structure of GraphQLClient.GetForgeStatsByHourParams 

Checkout the following snippet for the format of GetForgeStatsByHourParams:

```json
{
  "date": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| date | <code>string</code> |

<a name="GraphQLClient.GetProtocolStateParams"></a>

### GraphQLClient.GetProtocolStateParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| address | <code>string</code>                             |
| height  | <code>string</code>                             |
| keys    | <code>Array.&lt;...GraphQLClient.string></code> |

<a name="GraphQLClient.GetStakeStateParams"></a>

### GraphQLClient.GetStakeStateParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name    | Type                                            |
| ------- | ----------------------------------------------- |
| address | <code>string</code>                             |
| height  | <code>string</code>                             |
| keys    | <code>Array.&lt;...GraphQLClient.string></code> |

<a name="GraphQLClient.GetTxParams"></a>

### GraphQLClient.GetTxParams : <code>object</code>

Structure of GraphQLClient.GetTxParams 

Checkout the following snippet for the format of GetTxParams:

```json
{
  "hash": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name | Type                |
| ---- | ------------------- |
| hash | <code>string</code> |

<a name="GraphQLClient.GetUnconfirmedTxsParams"></a>

### GraphQLClient.GetUnconfirmedTxsParams : <code>object</code>

Structure of GraphQLClient.GetUnconfirmedTxsParams 

Checkout the following snippet for the format of GetUnconfirmedTxsParams:

```json
{}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                                               |
| --------- | -------------------------------------------------- |
| ...paging | [<code>PageInput</code>](#GraphQLClient.PageInput) |

<a name="GraphQLClient.ListAssetTransactionsParams"></a>

### GraphQLClient.ListAssetTransactionsParams : <code>object</code>

Structure of GraphQLClient.ListAssetTransactionsParams 

Checkout the following snippet for the format of ListAssetTransactionsParams:

```json
{
  "address": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                                               |
| --------- | -------------------------------------------------- |
| address   | <code>string</code>                                |
| ...paging | [<code>PageInput</code>](#GraphQLClient.PageInput) |

<a name="GraphQLClient.ListAssetsParams"></a>

### GraphQLClient.ListAssetsParams : <code>object</code>

Structure of GraphQLClient.ListAssetsParams 

Checkout the following snippet for the format of ListAssetsParams:

```json
{
  "ownerAddress": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name         | Type                                               |
| ------------ | -------------------------------------------------- |
| ownerAddress | <code>string</code>                                |
| ...paging    | [<code>PageInput</code>](#GraphQLClient.PageInput) |

<a name="GraphQLClient.ListBlocksParams"></a>

### GraphQLClient.ListBlocksParams : <code>object</code>

Structure of GraphQLClient.ListBlocksParams 

Checkout the following snippet for the format of ListBlocksParams:

```json
{
  "proposer": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                   | Type                                                   |
| ---------------------- | ------------------------------------------------------ |
| ...heightFilter        | [<code>RangeFilter</code>](#GraphQLClient.RangeFilter) |
| ...numInvalidTxsFilter | [<code>RangeFilter</code>](#GraphQLClient.RangeFilter) |
| ...numTxsFilter        | [<code>RangeFilter</code>](#GraphQLClient.RangeFilter) |
| ...paging              | [<code>PageInput</code>](#GraphQLClient.PageInput)     |
| proposer               | <code>string</code>                                    |
| ...timeFilter          | [<code>TimeFilter</code>](#GraphQLClient.TimeFilter)   |

<a name="GraphQLClient.ListStakesParams"></a>

### GraphQLClient.ListStakesParams : <code>object</code>

Structure of GraphQLClient.ListStakesParams 

Checkout the following snippet for the format of ListStakesParams:

```json
{}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name             | Type                                                       |
| ---------------- | ---------------------------------------------------------- |
| ...addressFilter | [<code>AddressFilter</code>](#GraphQLClient.AddressFilter) |
| ...paging        | [<code>PageInput</code>](#GraphQLClient.PageInput)         |

<a name="GraphQLClient.ListTopAccountsParams"></a>

### GraphQLClient.ListTopAccountsParams : <code>object</code>

Structure of GraphQLClient.ListTopAccountsParams 

Checkout the following snippet for the format of ListTopAccountsParams:

```json
{}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name      | Type                                               |
| --------- | -------------------------------------------------- |
| ...paging | [<code>PageInput</code>](#GraphQLClient.PageInput) |

<a name="GraphQLClient.ListTransactionsParams"></a>

### GraphQLClient.ListTransactionsParams : <code>object</code>

Structure of GraphQLClient.ListTransactionsParams 

Checkout the following snippet for the format of ListTransactionsParams:

```json
{}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name              | Type                                                         |
| ----------------- | ------------------------------------------------------------ |
| ...addressFilter  | [<code>AddressFilter</code>](#GraphQLClient.AddressFilter)   |
| ...paging         | [<code>PageInput</code>](#GraphQLClient.PageInput)           |
| ...timeFilter     | [<code>TimeFilter</code>](#GraphQLClient.TimeFilter)         |
| ...typeFilter     | [<code>TypeFilter</code>](#GraphQLClient.TypeFilter)         |
| ...validityFilter | [<code>ValidityFilter</code>](#GraphQLClient.ValidityFilter) |

<a name="GraphQLClient.SendTxParams"></a>

### GraphQLClient.SendTxParams : <code>object</code>

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

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                 |
| ------ | -------------------- |
| commit | <code>boolean</code> |
| token  | <code>string</code>  |
| tx     | <code>string</code>  |
| wallet | <code>string</code>  |

<a name="GraphQLClient.UnsubscribeParams"></a>

### GraphQLClient.UnsubscribeParams : <code>object</code>

Structure of GraphQLClient.UnsubscribeParams 

Checkout the following snippet for the format of UnsubscribeParams:

```json
{
  "topic": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name  | Type                |
| ----- | ------------------- |
| topic | <code>string</code> |

<a name="GraphQLClient.SubscribeParams"></a>

### GraphQLClient.SubscribeParams : <code>object</code>

Structure of GraphQLClient.SubscribeParams 

Checkout the following snippet for the format of SubscribeParams:

```json
{
  "filter": "abc",
  "topic": "abc"
}
```

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name   | Type                |
| ------ | ------------------- |
| filter | <code>string</code> |
| topic  | <code>string</code> |

<a name="GraphQLClient.CreateAssetTxInput"></a>

### GraphQLClient.CreateAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                       | Description                                                                                   |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                        |                                                                                               |
| input.tx              | <code>object</code>                                        | data of the transaction                                                                       |
| input.tx.itx          | [<code>CreateAssetTx</code>](#GraphQLClient.CreateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                        | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                        | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                        | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.TransferTxInput"></a>

### GraphQLClient.TransferTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                 | Description                                                                                   |
| --------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                  |                                                                                               |
| input.tx              | <code>object</code>                                  | data of the transaction                                                                       |
| input.tx.itx          | [<code>TransferTx</code>](#GraphQLClient.TransferTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                  | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                  | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                  | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                  | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                  | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                   | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                  | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                  | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.PokeTxInput"></a>

### GraphQLClient.PokeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                         | Description                                                                                   |
| --------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                          |                                                                                               |
| input.tx              | <code>object</code>                          | data of the transaction                                                                       |
| input.tx.itx          | [<code>PokeTx</code>](#GraphQLClient.PokeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                          | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                          | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                          | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.DeployProtocolTxInput"></a>

### GraphQLClient.DeployProtocolTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                        | Description                                                                                   |
| --------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                         |                                                                                               |
| input.tx              | <code>object</code>                         | data of the transaction                                                                       |
| input.tx.itx          | <code>GraphQLClient.DeployProtocolTx</code> | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                         | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                         | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                         | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                         | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                         | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                          | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                         | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                         | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.UpgradeNodeTxInput"></a>

### GraphQLClient.UpgradeNodeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                     | Description                                                                                   |
| --------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                      |                                                                                               |
| input.tx              | <code>object</code>                      | data of the transaction                                                                       |
| input.tx.itx          | <code>GraphQLClient.UpgradeNodeTx</code> | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                      | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                      | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                      | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                      | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                      | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                       | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                      | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                      | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.UpdateAssetTxInput"></a>

### GraphQLClient.UpdateAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                       | Description                                                                                   |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                        |                                                                                               |
| input.tx              | <code>object</code>                                        | data of the transaction                                                                       |
| input.tx.itx          | [<code>UpdateAssetTx</code>](#GraphQLClient.UpdateAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                        | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                        | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                        | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.AccountMigrateTxInput"></a>

### GraphQLClient.AccountMigrateTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                             | Description                                                                                   |
| --------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                              |                                                                                               |
| input.tx              | <code>object</code>                                              | data of the transaction                                                                       |
| input.tx.itx          | [<code>AccountMigrateTx</code>](#GraphQLClient.AccountMigrateTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                              | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                              | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                              | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                              | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                              | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                               | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                              | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                              | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.ConsumeAssetTxInput"></a>

### GraphQLClient.ConsumeAssetTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                         | Description                                                                                   |
| --------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                          |                                                                                               |
| input.tx              | <code>object</code>                                          | data of the transaction                                                                       |
| input.tx.itx          | [<code>ConsumeAssetTx</code>](#GraphQLClient.ConsumeAssetTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                          | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                          | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                          | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                          | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                          | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                           | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                          | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                          | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.DeclareTxInput"></a>

### GraphQLClient.DeclareTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                               | Description                                                                                   |
| --------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                |                                                                                               |
| input.tx              | <code>object</code>                                | data of the transaction                                                                       |
| input.tx.itx          | [<code>DeclareTx</code>](#GraphQLClient.DeclareTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                 | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.ExchangeTxInput"></a>

### GraphQLClient.ExchangeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                 | Description                                                                                   |
| --------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                  |                                                                                               |
| input.tx              | <code>object</code>                                  | data of the transaction                                                                       |
| input.tx.itx          | [<code>ExchangeTx</code>](#GraphQLClient.ExchangeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                  | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                  | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                  | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                  | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                  | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                   | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                  | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                  | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.DeclareFileTxInput"></a>

### GraphQLClient.DeclareFileTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                                       | Description                                                                                   |
| --------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                                        |                                                                                               |
| input.tx              | <code>object</code>                                        | data of the transaction                                                                       |
| input.tx.itx          | [<code>DeclareFileTx</code>](#GraphQLClient.DeclareFileTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                                        | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                                        | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                                        | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                                        | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                                        | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                                         | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                                        | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                                        | the signature of the tx, if this parameter exist, we will not sign the transaction            |

<a name="GraphQLClient.StakeTxInput"></a>

### GraphQLClient.StakeTxInput : <code>Object</code>

**Kind**: static typedef of [<code>GraphQLClient</code>](#GraphQLClient)  
**Properties**

| Name                  | Type                                           | Description                                                                                   |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| input                 | <code>object</code>                            |                                                                                               |
| input.tx              | <code>object</code>                            | data of the transaction                                                                       |
| input.tx.itx          | [<code>StakeTx</code>](#GraphQLClient.StakeTx) | the actual transaction object                                                                 |
| [input.tx.pk]         | <code>string</code>                            | the sender pk                                                                                 |
| [input.tx.from]       | <code>string</code>                            | the sender address, can be derived from wallet                                                |
| [input.tx.nonce]      | <code>number</code>                            | the tx nonce, defaults to Date.now if not set                                                 |
| [input.tx.chainId]    | <code>string</code>                            | the chainId                                                                                   |
| [input.tx.signature]  | <code>string</code>                            | transaction signature                                                                         |
| [input.tx.signatures] | <code>array</code>                             | transaction signatures, should be set when it's a multisig transaction                        |
| input.wallet          | <code>object</code>                            | the wallet used to sign the transaction, either a forge managed wallet or user managed wallet |
| [input.signature]     | <code>string</code>                            | the signature of the tx, if this parameter exist, we will not sign the transaction            |
