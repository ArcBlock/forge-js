<a name="createVerifier"></a>


## createVerifier(params) ⇒ `EventEmitter`

Generate a transaction verifier by tx hash
Emit events on transaction included in a block

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
