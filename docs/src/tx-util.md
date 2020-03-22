---
title: '@arcblock/tx-util'
description: 'Utility to work with forge transactions'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---


## Constants

<dl>
<dt><a href="#txVerifierParams">txVerifierParams</a> ⇒ `EventEmitter`</dt>
<dd><p>Generate a transaction verifier by tx hash
Emit events on transaction included in a block</p>
<ul>
<li>`error`: when there is something wrong when verify the transaction</li>
<li>`done`: when the transaction is successfully verified</li>
</ul>
</dd>
<dt><a href="#accountVerifierParams">accountVerifierParams</a> ⇒ `EventEmitter`</dt>
<dd><p>Generate a account verifier by address
Emit events on account declared in a block</p>
<ul>
<li>`error`: when there is something wrong when verify the transaction</li>
<li>`done`: when the transaction is successfully verified</li>
</ul>
</dd>
<dt><a href="#assetVerifierParams">assetVerifierParams</a> ⇒ `EventEmitter`</dt>
<dd><p>Generate a asset verifier by address
Emit events on asset can be found on chain</p>
<ul>
<li>`error`: when there is something wrong when verify the asset</li>
<li>`done`: when the asset is found</li>
</ul>
</dd>
</dl>


## txVerifierParams ⇒ `EventEmitter`

Generate a transaction verifier by tx hash
Emit events on transaction included in a block

* `error`: when there is something wrong when verify the transaction
* `done`: when the transaction is successfully verified

**Kind**: global constant  
**Returns**: `EventEmitter` - verifier object  

| Param                | Type      | Description                                        |
| -------------------- | --------- | -------------------------------------------------- |
| params               | `object`  |                                                    |
| params.hash          | `string`  | tx hash to check                                   |
| params.chainHost     | `string`  | on which chain to check the tx                     |
| params.chainId       | `string`  | on which chain to check the tx                     |
| params.checkInterval | `number`  | tx query interval to see the tx                    |
| params.autoStart     | `boolean` | should the verifier start on create                |
| params.maxRetry      | `number`  | max number of checks before mark the tx as expired |


## accountVerifierParams ⇒ `EventEmitter`

Generate a account verifier by address
Emit events on account declared in a block

* `error`: when there is something wrong when verify the transaction
* `done`: when the transaction is successfully verified

**Kind**: global constant  
**Returns**: `EventEmitter` - verifier object  

| Param                | Type      | Description                                           |
| -------------------- | --------- | ----------------------------------------------------- |
| params               | `object`  |                                                       |
| params.address       | `string`  | account address to check                              |
| params.chainHost     | `string`  | on which chain to check the account                   |
| params.chainId       | `string`  | on which chain to check the account                   |
| params.checkInterval | `number`  | query interval to see the account                     |
| params.autoStart     | `boolean` | should the verifier start on create                   |
| params.maxRetry      | `number`  | max number of checks before mark the check as expired |


## assetVerifierParams ⇒ `EventEmitter`

Generate a asset verifier by address
Emit events on asset can be found on chain

* `error`: when there is something wrong when verify the asset
* `done`: when the asset is found

**Kind**: global constant  
**Returns**: `EventEmitter` - verifier object  

| Param                | Type      | Description                                           |
| -------------------- | --------- | ----------------------------------------------------- |
| params               | `object`  |                                                       |
| params.address       | `string`  | asset address to check                                |
| params.chainHost     | `string`  | on which chain to check the asset                     |
| params.chainId       | `string`  | on which chain to check the asset                     |
| params.checkInterval | `number`  | query interval to see the asset                       |
| params.autoStart     | `boolean` | should the verifier start on create                   |
| params.maxRetry      | `number`  | max number of checks before mark the check as expired |

  