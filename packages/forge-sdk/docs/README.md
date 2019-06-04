<a name="module_@arcblock/forge-sdk"></a>


## [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)

Contains basic helper methods to encode/format/mock a protobuf message

**Requires**: <code>module:[**@arcblock/forge-util**](https://github.com/arcblock/forge-util)</code>, <code>module:[**@arcblock/forge-message**](https://github.com/arcblock/forge-message)</code>, <code>module:[**@arcblock/forge-wallet**](https://github.com/arcblock/forge-wallet)</code>, <code>module:[**@arcblock/grpc-client**](https://github.com/arcblock/grpc-client)</code>, <code>module:[**@arcblock/graphql-client**](https://github.com/arcblock/graphql-client)</code>, <code>module:[**@arcblock/did-util**](https://github.com/arcblock/did-util)</code>
**Example**

```js
yarn add @arcblock/forge-sdk

const ForgeSDK = require('@arcblock/forge-sdk');
ForgeSDK.connect('tcp://127.0.0.1:28211', { default: true });
ForgeSDK.getChainInfo().then(console.log);
```
