<a name="module_@arcblock/did-util"></a>


## [**@arcblock/did-util**](https://github.com/arcblock/did-util)

Utility functions to calculate various kinds of did, such as asset address

**Requires**: <code>module:[**@arcblock/mcrypto**](https://github.com/arcblock/mcrypto)</code>, <code>module:[**@arcblock/did**](https://github.com/arcblock/did)</code>, <code>module:[**@arcblock/forge-util**](https://github.com/arcblock/forge-util)</code>, <code>module:[**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)</code>, <code>module:[**@arcblock/forge-message**](https://github.com/arcblock/forge-message)</code>  

* [@arcblock/did-util](#module_@arcblock/did-util)
  * [.toAssetAddress(itx)](#module_@arcblock/did-util.toAssetAddress) ⇒ <code>string</code>
  * [.toAssetDid(itx)](#module_@arcblock/did-util.toAssetDid) ⇒ <code>string</code>
  * [.toItxAddress(itx, type, \[role\])](#module_@arcblock/did-util.toItxAddress) ⇒ <code>string</code>
  * [.toItxDid(itx)](#module_@arcblock/did-util.toItxDid) ⇒ <code>string</code>
  * [.toStakeAddress(sender, receiver)](#module_@arcblock/did-util.toStakeAddress) ⇒ <code>string</code>
  * [.toDelegateAddress(addr1, addr2)](#module_@arcblock/did-util.toDelegateAddress) ⇒ <code>string</code>
  * [.toTetherAddress(hash)](#module_@arcblock/did-util.toTetherAddress) ⇒ <code>string</code>
  * [.toStakeDid(sender, receiver)](#module_@arcblock/did-util.toStakeDid) ⇒ <code>string</code>

<a name="module_@arcblock/did-util.toAssetAddress"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toAssetAddress(itx) ⇒ <code>string</code>

Create an asset address

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - asset address without `did:abt:` prefix  
**Access**: public  

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| itx   | <code>object</code> | an object of `CreateAssetTx` |

<a name="module_@arcblock/did-util.toAssetDid"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toAssetDid(itx) ⇒ <code>string</code>

Create an asset did

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - asset address without `did:abt:` prefix  
**Access**: public  

| Param | Type                | Description                  |
| ----- | ------------------- | ---------------------------- |
| itx   | <code>object</code> | an object of `CreateAssetTx` |

<a name="module_@arcblock/did-util.toItxAddress"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toItxAddress(itx, type, [role]) ⇒ <code>string</code>

Create an itx address

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - itx address without `did:abt:` prefix  
**Access**: public  

| Param  | Type                | Default                             | Description                      |
| ------ | ------------------- | ----------------------------------- | -------------------------------- |
| itx    | <code>object</code> |                                     | an object of forge supported itx |
| type   | <code>string</code> |                                     | itx type string                  |
| [role] | <code>enum</code>   | <code>types.RoleType.ROLE_TX</code> | role type                        |

<a name="module_@arcblock/did-util.toItxDid"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toItxDid(itx) ⇒ <code>string</code>

Create an itx did

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - itx address without `did:abt:` prefix  
**Access**: public  

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| itx   | <code>object</code> | an object of forge supported itx |

<a name="module_@arcblock/did-util.toStakeAddress"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toStakeAddress(sender, receiver) ⇒ <code>string</code>

Generate an stake address, eg: the did of the stake

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - stake address without `did:abt:` prefix  
**Access**: public  

| Param    | Type                | Description      |
| -------- | ------------------- | ---------------- |
| sender   | <code>string</code> | sender address   |
| receiver | <code>string</code> | receiver address |

<a name="module_@arcblock/did-util.toDelegateAddress"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toDelegateAddress(addr1, addr2) ⇒ <code>string</code>

Generate an delegate address, eg: the did of the delegation

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - delegation address that can be used to retrieve delegation state  
**Access**: public  

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| addr1 | <code>string</code> | delegator address |
| addr2 | <code>string</code> | delegatee address |

<a name="module_@arcblock/did-util.toTetherAddress"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toTetherAddress(hash) ⇒ <code>string</code>

Generate a tether address from the deposit tether tx hash

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - stake address without `did:abt:` prefix  
**Access**: public  

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| hash  | <code>string</code> | DepositTetherTx hash |

<a name="module_@arcblock/did-util.toStakeDid"></a>

### [**@arcblock/did-util**](https://github.com/arcblock/did-util).toStakeDid(sender, receiver) ⇒ <code>string</code>

Generate an stake address, eg: the did of the stake

**Kind**: static method of [<code>@arcblock/did-util</code>](#module_@arcblock/did-util)  
**Returns**: <code>string</code> - stake address without `did:abt:` prefix  
**Access**: public  

| Param    | Type                | Description      |
| -------- | ------------------- | ---------------- |
| sender   | <code>string</code> | sender address   |
| receiver | <code>string</code> | receiver address |


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
