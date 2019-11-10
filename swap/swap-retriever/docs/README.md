
## Functions

<dl>
<dt><a href="#createRetriever">createRetriever(params)</a> ⇒ `EventEmitter`</dt>
<dd><p>Generate a atomic swap retriever
Please make sure ForgeSDK is connected to the chains</p>
<p>Will emit following events during retrieving</p>
<ul>
<li>error: any error occurs</li>
<li>retrieved.user: user have retrieved</li>
<li>retrieved.both: both have retrieved</li>
</ul>
</dd>
<dt><a href="#verifyUserSwap">verifyUserSwap(swapState, swapStore)</a> ⇒ `boolean`</dt>
<dd><p>Verify if a user swap is properly setup</p>
</dd>
</dl>


## createRetriever(params) ⇒ `EventEmitter`

Generate a atomic swap retriever
Please make sure ForgeSDK is connected to the chains

Will emit following events during retrieving

* error: any error occurs
* retrieved.user: user have retrieved
* retrieved.both: both have retrieved

**Kind**: global function  
**Returns**: `EventEmitter` - verifier object  

| Param                    | Type      | Description                                                                  |
| ------------------------ | --------- | ---------------------------------------------------------------------------- |
| params                   | `object`  | params to setup the retriever                                                |
| params.traceId           | `string`  | which traceId address to check                                               |
| params.offerUserAddress  | `string`  | who setup the offer                                                          |
| params.offerSwapAddress  | `string`  | which swap address to check                                                  |
| params.demandUserAddress | `string`  | which setup the token                                                        |
| params.demandSwapAddress | `string`  | which swap address to retrieve                                               |
| params.offerChainId      | `string`  | which chain to check the swap, make sure you have connected to this chain    |
| params.offerChainHost    | `string`  | which chain to check the swap, make sure you have connected to this chain    |
| params.demandChainId     | `string`  | which chain to retrieve the swap, make sure you have connected to this chain |
| params.demandChainHost   | `string`  | which chain to retrieve the swap, make sure you have connected to this chain |
| params.checkInterval     | `number`  | query interval to check the swap                                             |
| params.autoStart         | `boolean` | should the verifier start on create                                          |
| params.maxRetry          | `number`  | max number of checks before mark the tx as expired                           |


## verifyUserSwap(swapState, swapStore) ⇒ `boolean`

Verify if a user swap is properly setup

**Kind**: global function  
**Returns**: `boolean` - - true on success  
**Throws**:

* `Error` 

| Param     | Type     | Description              |
| --------- | -------- | ------------------------ |
| swapState | `object` | swap state from on chain |
| swapStore | `object` | swap storage record      |
