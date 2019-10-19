
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
