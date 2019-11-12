
## Functions

<dl>
<dt><a href="#createExtensionMethods">createExtensionMethods(client, [{ encodeTxAsBase64])</a></dt>
<dd><p>Generate extension methods on the fly</p>
</dd>
<dt><a href="#getTxMultiSignMethods">getTxMultiSignMethods()</a> ⇒ `Array.<string>`</dt>
<dd><p>List all transaction multi sign methods, each method can be used to do multi sign a transaction</p>
</dd>
<dt><a href="#getType">getType(x)</a> ⇒ `class` | `null`</dt>
<dd><p>Get protobuf message class by name, only supports forge-built-in types</p>
</dd>
<dt><a href="#decodeTx">decodeTx(input)</a> ⇒ `object`</dt>
<dd><p>Decode transaction buffer/base64/base58 to an object</p>
</dd>
<dt><a href="#declare">declare(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Declare an DID and it&#39;s public key on chain</p>
</dd>
<dt><a href="#migrateAccount">migrateAccount(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Migrate current account to a new account</p>
</dd>
<dt><a href="#delegate">delegate(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Delegate some privileges to another account
So that that account can send transactions on behalf of the delegator</p>
</dd>
<dt><a href="#revokeDelegate">revokeDelegate(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Revoke a previous delegation</p>
</dd>
<dt><a href="#createAsset">createAsset(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Create an new asset (non-fungible-token)</p>
</dd>
<dt><a href="#updateAsset">updateAsset(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Update an existing asset (non-fungible-token)</p>
</dd>
<dt><a href="#prepareConsumeAsset">prepareConsumeAsset(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Prepare a transaction that consumes an asset (non-fungible-token)</p>
</dd>
<dt><a href="#finalizeConsumeAsset">finalizeConsumeAsset(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Prepare a transaction that consumes an asset (non-fungible-token)</p>
</dd>
<dt><a href="#consumeAsset">consumeAsset(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Send a transaction that consumes an asset (non-fungible-token)</p>
</dd>
<dt><a href="#createAssetFactory">createAssetFactory(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Create an asset factory that can be used to produce multiple assets in a transaction</p>
</dd>
<dt><a href="#acquireAsset">acquireAsset(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Acquire an asset from factory</p>
</dd>
<dt><a href="#upgradeNode">upgradeNode(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Do an on-chain upgrade, should be used with forge-cli</p>
</dd>
<dt><a href="#deployContract">deployContract(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Deploy a contract to a running chain node, requires moderator privilege</p>
</dd>
<dt><a href="#activateContract">activateContract(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Activate an previously paused/disabled contract</p>
</dd>
<dt><a href="#deactivateContract">deactivateContract(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Deactivate an previously running/enabled contract</p>
</dd>
<dt><a href="#setupSwap">setupSwap(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Setup a swap that&#39;s used to accomplish cross-chain operations</p>
</dd>
<dt><a href="#retrieveSwap">retrieveSwap(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Retrieve a swap during an atomic-swap process</p>
</dd>
<dt><a href="#revokeSwap">revokeSwap(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Revoke a swap during an atomic-swap process</p>
</dd>
<dt><a href="#transfer">transfer(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Transfer token or assets to another account</p>
</dd>
<dt><a href="#prepareExchange">prepareExchange(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Prepare an exchange transaction between multiple accounts</p>
</dd>
<dt><a href="#finalizeExchange">finalizeExchange(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Finalize an exchange transaction between multiple accounts</p>
</dd>
<dt><a href="#exchange">exchange(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Send an exchange transaction</p>
</dd>
<dt><a href="#checkin">checkin(params, extra)</a> ⇒ `Promise`</dt>
<dd><p>Send an poke transaction to get some token for free</p>
</dd>
</dl>


## createExtensionMethods(client, [{ encodeTxAsBase64])

Generate extension methods on the fly

**Kind**: global function  
**Access**: public  

| Param                | Type     | Default           |
| -------------------- | -------- | ----------------- |
| client               | `object` |                   |
| [{ encodeTxAsBase64] | `object` | `false }&#x3D;{}` |


## getTxMultiSignMethods() ⇒ `Array.<string>`

List all transaction multi sign methods, each method can be used to do multi sign a transaction

**Kind**: global function  
**Returns**: `Array.<string>` - method name list  
**Access**: public  


## getType(x) ⇒ `class` \| `null`

Get protobuf message class by name, only supports forge-built-in types

**Kind**: global function  
**Returns**: `class` \| `null` - message type  
**Access**: public  

| Param | Type     |
| ----- | -------- |
| x     | `string` |


## decodeTx(input) ⇒ `object`

Decode transaction buffer/base64/base58 to an object

**Kind**: global function  
**Returns**: `object` - transaction object  
**Access**: public  

| Param | Type                                      |
| ----- | ----------------------------------------- |
| input | `buffer` \| `hex` \| `base48` \| `base64` |


## declare(params, extra) ⇒ `Promise`

Declare an DID and it's public key on chain

**Kind**: global function  
**Returns**: `Promise` - the transaction hash once resolved  
**Access**: public  

| Param           | Type           | Default                      | Description                                     |
| --------------- | -------------- | ---------------------------- | ----------------------------------------------- |
| params          | `object`       |                              |                                                 |
| params.moniker  | `string`       |                              | user nickname                                   |
| [params.issuer] | `string`       | `&quot;\&quot;\&quot;&quot;` | who issued the account                          |
| [params.data]   | `object`       |                              | who issued the account                          |
| params.wallet   | `WalletObject` |                              | wallet to sign the tx                           |
| extra           | `object`       |                              | other param to underlying client implementation |


## migrateAccount(params, extra) ⇒ `Promise`

Migrate current account to a new account

**Kind**: global function  
**Returns**: `Promise` - the transaction hash once resolved  
**Access**: public  

| Param       | Type           | Description                                     |
| ----------- | -------------- | ----------------------------------------------- |
| params      | `object`       |                                                 |
| params.from | `WalletObject` | which account to migrate from                   |
| params.to   | `WalletObject` | which account to migrate to                     |
| extra       | `object`       | other param to underlying client implementation |


## delegate(params, extra) ⇒ `Promise`

Delegate some privileges to another account
So that that account can send transactions on behalf of the delegator

**Kind**: global function  
**Returns**: `Promise` - the `[transactionHash, delegateAddress]` once resolved  
**Access**: public  

| Param             | Type           | Description                                           |
| ----------------- | -------------- | ----------------------------------------------------- |
| params            | `object`       |                                                       |
| params.from       | `WalletObject` | the delegator, who grants the privilege to others     |
| params.to         | `WalletObject` | the delegatee, who is authorized to send transactions |
| params.privileges | `Array`        | the privilege settings                                |
| extra             | `object`       | other param to underlying client implementation       |


## revokeDelegate(params, extra) ⇒ `Promise`

Revoke a previous delegation

**Kind**: global function  
**Returns**: `Promise` - the transaction hash once resolved  
**Access**: public  

| Param             | Type           | Description                                           |
| ----------------- | -------------- | ----------------------------------------------------- |
| params            | `object`       |                                                       |
| params.from       | `WalletObject` | the delegator, who grants the privilege to others     |
| params.to         | `WalletObject` | the delegatee, who is authorized to send transactions |
| params.privileges | `Array`        | the privilege settings                                |
| extra             | `object`       | other param to underlying client implementation       |


## createAsset(params, extra) ⇒ `Promise`

Create an new asset (non-fungible-token)

**Kind**: global function  
**Returns**: `Promise` - the `[transactionHash, assetAddress]` once resolved  
**Access**: public  

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


## updateAsset(params, extra) ⇒ `Promise`

Update an existing asset (non-fungible-token)

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | asset address                                   |
| params.moniker   | `string`       | asset name                                      |
| params.data      | `object`       | asset data payload                              |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |


## prepareConsumeAsset(params, extra) ⇒ `Promise`

Prepare a transaction that consumes an asset (non-fungible-token)

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.issuer    | `string`       | issuer address                                  |
| params.address   | `string`       | parent address                                  |
| params.data      | `object`       | extra data payload                              |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |


## finalizeConsumeAsset(params, extra) ⇒ `Promise`

Prepare a transaction that consumes an asset (non-fungible-token)

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                                          |
| ---------------- | -------------- | -------------------------------------------------------------------- |
| params           | `object`       |                                                                      |
| params.tx        | `object`       | transaction to finalize, should be result from `prepareConsumeAsset` |
| params.address   | `string`       | asset address to be consumed                                         |
| params.delegator | `string`       | who authorized this transaction                                      |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                                   |
| extra            | `object`       | other param to underlying client implementation                      |


## consumeAsset(params, extra) ⇒ `Promise`

Send a transaction that consumes an asset (non-fungible-token)

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param         | Type           | Description                                                       |
| ------------- | -------------- | ----------------------------------------------------------------- |
| params        | `object`       |                                                                   |
| params.tx     | `object`       | transaction to send, should be result from `finalizeConsumeAsset` |
| params.wallet | `WalletObject` | the wallet to sign the transaction                                |
| extra         | `object`       | other param to underlying client implementation                   |


## createAssetFactory(params, extra) ⇒ `Promise`

Create an asset factory that can be used to produce multiple assets in a transaction

**Kind**: global function  
**Returns**: `Promise` - the `[transactionHash, factoryAddress]` once resolved  
**Access**: public  

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


## acquireAsset(params, extra) ⇒ `Promise`

Acquire an asset from factory

**Kind**: global function  
**Returns**: `Promise` - the `[transactionHash, [assetAddress]]` once resolved  
**Access**: public  

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


## upgradeNode(params, extra) ⇒ `Promise`

Do an on-chain upgrade, should be used with forge-cli

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                                  |
| ---------------- | -------------- | ------------------------------------------------------------ |
| params           | `object`       |                                                              |
| params.height    | `number`       | at which height should the chain stop to perform the upgrade |
| params.version   | `string`       | to which version should upgrade to                           |
| params.delegator | `string`       | who authorized this transaction                              |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                           |
| extra            | `object`       | other param to underlying client implementation              |


## deployContract(params, extra) ⇒ `Promise`

Deploy a contract to a running chain node, requires moderator privilege

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                                 |
| ---------------- | -------------- | ----------------------------------------------------------- |
| params           | `object`       |                                                             |
| params.payload   | `object`       | the contract payload, usually from `forge contract:compile` |
| params.delegator | `string`       | who authorized this transaction                             |
| params.wallet    | `WalletObject` | the wallet to sign the transaction                          |
| extra            | `object`       | other param to underlying client implementation             |


## activateContract(params, extra) ⇒ `Promise`

Activate an previously paused/disabled contract

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the contract address to activate                |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |


## deactivateContract(params, extra) ⇒ `Promise`

Deactivate an previously running/enabled contract

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the contract address to deactivate              |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |


## setupSwap(params, extra) ⇒ `Promise`

Setup a swap that's used to accomplish cross-chain operations

**Kind**: global function  
**Returns**: `Promise` - the `[transactionHash, swapAddress]` once resolved  
**Access**: public  

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


## retrieveSwap(params, extra) ⇒ `Promise`

Retrieve a swap during an atomic-swap process

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the swap address to retrieve                    |
| params.hashkey   | `string`       | the hashkey to unlock the swap                  |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |


## revokeSwap(params, extra) ⇒ `Promise`

Revoke a swap during an atomic-swap process

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.address   | `string`       | the swap address to revoke                      |
| params.delegator | `string`       | who authorized this transaction                 |
| params.wallet    | `WalletObject` | the wallet to sign the transaction              |
| extra            | `object`       | other param to underlying client implementation |


## transfer(params, extra) ⇒ `Promise`

Transfer token or assets to another account

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

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


## prepareExchange(params, extra) ⇒ `Promise`

Prepare an exchange transaction between multiple accounts

**Kind**: global function  
**Returns**: `Promise` - the `transaction` object once resolved  
**Access**: public  

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


## finalizeExchange(params, extra) ⇒ `Promise`

Finalize an exchange transaction between multiple accounts

**Kind**: global function  
**Returns**: `Promise` - the `transaction` object once resolved  
**Access**: public  

| Param            | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| params           | `object`       |                                                 |
| params.tx        | `object`       | the transaction object from `prepareExchange`   |
| params.delegator | `string`       | who authorized this transaction                 |
| params.data      | `object`       | extra data in the multi sig                     |
| params.wallet    | `WalletObject` | the wallet who is the demander                  |
| extra            | `object`       | other param to underlying client implementation |


## exchange(params, extra) ⇒ `Promise`

Send an exchange transaction

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param         | Type           | Description                                     |
| ------------- | -------------- | ----------------------------------------------- |
| params        | `object`       |                                                 |
| params.tx     | `object`       | the transaction object from `finalizeExchange`  |
| params.wallet | `WalletObject` | the wallet to sign the transaction              |
| extra         | `object`       | other param to underlying client implementation |


## checkin(params, extra) ⇒ `Promise`

Send an poke transaction to get some token for free

**Kind**: global function  
**Returns**: `Promise` - the `transactionHash` once resolved  
**Access**: public  

| Param         | Type           | Description                                                     |
| ------------- | -------------- | --------------------------------------------------------------- |
| params        | `object`       |                                                                 |
| params.wallet | `WalletObject` | the wallet to sign the transaction, also who will get the token |
| extra         | `object`       | other param to underlying client implementation                 |
