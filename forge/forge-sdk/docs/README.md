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

<a name="module_@arcblock/forge-sdk..wrapMethods"></a>

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~wrapMethods(source, target)

Wrap all methods from `source` object and attach them to target object
We can have a much cleaner implementation with ES6 proxy here
But because it's not well supported by js runtime environments yet

**Kind**: inner method of [<code>@arcblock/forge-sdk</code>](#module_@arcblock/forge-sdk)  

| Param  | Type            |
| ------ | --------------- |
| source | <code>\*</code> |
| target | <code>\*</code> |
