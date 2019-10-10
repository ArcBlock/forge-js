
## [**@arcblock/did-util**](https://github.com/arcblock/did-util)

Utility functions to calculate various kinds of did, such as asset address

**Requires**: [@arcblock/mcrypto](/packages/mcrypto/), [@arcblock/did](/packages/did/), [@arcblock/forge-util](/packages/forge-util/), [@arcblock/forge-wallet](/packages/forge-wallet/), [@arcblock/forge-message](/packages/forge-message/)  

* [toAssetAddress(itx)](#toAssetAddress) ⇒ `string`
* [toAssetDid(itx)](#toAssetDid) ⇒ `string`
* [toItxAddress(itx, type, \[role\])](#toItxAddress) ⇒ `string`
* [toItxDid(itx)](#toItxDid) ⇒ `string`
* [toStakeAddress(sender, receiver)](#toStakeAddress) ⇒ `string`
* [toDelegateAddress(addr1, addr2)](#toDelegateAddress) ⇒ `string`
* [toTetherAddress(hash)](#toTetherAddress) ⇒ `string`
* [toSwapAddress(hash)](#toSwapAddress) ⇒ `string`
* [toStakeDid(sender, receiver)](#toStakeDid) ⇒ `string`

### toAssetAddress(itx) ⇒ `string`

Create an asset address

**Kind**: static method  
**Returns**: `string` - asset address without `did:abt:` prefix  
**Access**: public  

| Param | Type     | Description                  |
| ----- | -------- | ---------------------------- |
| itx   | `object` | an object of `CreateAssetTx` |

### toAssetDid(itx) ⇒ `string`

Create an asset did

**Kind**: static method  
**Returns**: `string` - asset address without `did:abt:` prefix  
**Access**: public  

| Param | Type     | Description                  |
| ----- | -------- | ---------------------------- |
| itx   | `object` | an object of `CreateAssetTx` |

### toItxAddress(itx, type, [role]) ⇒ `string`

Create an itx address

**Kind**: static method  
**Returns**: `string` - itx address without `did:abt:` prefix  
**Access**: public  

| Param  | Type     | Default                  | Description                      |
| ------ | -------- | ------------------------ | -------------------------------- |
| itx    | `object` |                          | an object of forge supported itx |
| type   | `string` |                          | itx type string                  |
| [role] | `enum`   | `types.RoleType.ROLE_TX` | role type                        |

### toItxDid(itx) ⇒ `string`

Create an itx did

**Kind**: static method  
**Returns**: `string` - itx address without `did:abt:` prefix  
**Access**: public  

| Param | Type     | Description                      |
| ----- | -------- | -------------------------------- |
| itx   | `object` | an object of forge supported itx |

### toStakeAddress(sender, receiver) ⇒ `string`

Generate an stake address, eg: the did of the stake

**Kind**: static method  
**Returns**: `string` - stake address without `did:abt:` prefix  
**Access**: public  

| Param    | Type     | Description      |
| -------- | -------- | ---------------- |
| sender   | `string` | sender address   |
| receiver | `string` | receiver address |

### toDelegateAddress(addr1, addr2) ⇒ `string`

Generate an delegate address, eg: the did of the delegation

**Kind**: static method  
**Returns**: `string` - delegation address that can be used to retrieve delegation state  
**Access**: public  

| Param | Type     | Description       |
| ----- | -------- | ----------------- |
| addr1 | `string` | delegator address |
| addr2 | `string` | delegatee address |

### toTetherAddress(hash) ⇒ `string`

Generate a tether address from the deposit tether tx hash

**Kind**: static method  
**Returns**: `string` - stake address without `did:abt:` prefix  
**Access**: public  

| Param | Type     | Description          |
| ----- | -------- | -------------------- |
| hash  | `string` | DepositTetherTx hash |

### toSwapAddress(hash) ⇒ `string`

Generate a swap address from the setup swap tx hash

**Kind**: static method  
**Returns**: `string` - swap address without `did:abt:` prefix  
**Access**: public  

| Param | Type     | Description      |
| ----- | -------- | ---------------- |
| hash  | `string` | SetupSwapTx hash |

### toStakeDid(sender, receiver) ⇒ `string`

Generate an stake address, eg: the did of the stake

**Kind**: static method  
**Returns**: `string` - stake address without `did:abt:` prefix  
**Access**: public  

| Param    | Type     | Description      |
| -------- | -------- | ---------------- |
| sender   | `string` | sender address   |
| receiver | `string` | receiver address |


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
