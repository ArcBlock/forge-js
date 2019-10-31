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


## createVerifier(params) ⇒ `EventEmitter`

Generate a transaction verifier by tx hash
Emit events on transaction included in a block

* `error`: when there is something wrong when verify the transaction
* `done`: when the transaction is successfully verified

**Kind**: global function  
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

  