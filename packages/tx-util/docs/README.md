<a name="createVerifier"></a>

## createVerifier(params) ⇒ <code>EventEmitter</code>
Generate a transaction verifier by tx hash
Emit events on transaction included in a block

**Kind**: global function  
**Returns**: <code>EventEmitter</code> - verifier object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> |  |
| params.hash | <code>string</code> | tx hash to check |
| params.chainHost | <code>string</code> | on which chain to check the tx |
| params.chainId | <code>string</code> | on which chain to check the tx |
| params.checkInterval | <code>number</code> | tx query interval to see the tx |
| params.autoStart | <code>boolean</code> | should the verifier start on create |
| params.maxRetry | <code>number</code> | max number of checks before mark the tx as expired |

