
## [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)

Contains basic helper methods to encode/format/mock a protobuf message

**Requires**: `module:@arcblock/forge-util`, `module:@arcblock/forge-message`, `module:@arcblock/forge-wallet`, `module:@arcblock/grpc-client`, `module:@arcblock/graphql-client`, `module:@arcblock/did-util`  
**Example**  

```js
yarn add @arcblock/forge-sdk

const ForgeSDK = require('@arcblock/forge-sdk');
ForgeSDK.connect('tcp://127.0.0.1:28211', { default: true });
ForgeSDK.getChainInfo().then(console.log);
```

* [~ensureContext(\[conn\])](#.ensureContext) ⇒ `object`
* [~wrapMethods(source, target)](#.wrapMethods)

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~ensureContext([conn]) ⇒ `object`

Ensure a connection is bootstrapped with some meta info fetched from chain node

**Kind**: inner method   

| Param  | Type     |
| ------ | -------- |
| [conn] | `string` |

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~wrapMethods(source, target)

Wrap all methods from `source` object and attach them to target object
We can have a much cleaner implementation with ES6 proxy here
But because it's not well supported by js runtime environments yet

**Kind**: inner method   

| Param  | Type |
| ------ | ---- |
| source | `\*` |
| target | `\*` |
