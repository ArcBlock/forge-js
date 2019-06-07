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

* [@arcblock/forge-sdk](#module_@arcblock/forge-sdk)
  * [~Util](#module_@arcblock/forge-sdk..Util)
  * [~Wallet](#module_@arcblock/forge-sdk..Wallet)
  * [~wrapMethods(source, target)](#module_@arcblock/forge-sdk..wrapMethods)
  * [~connect(endpoint, options)](#module_@arcblock/forge-sdk..connect)

<a name="module_@arcblock/forge-sdk..Util"></a>

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~Util

Helper functions to do data encoding/decoding and did address generating

**Kind**: inner property of [<code>@arcblock/forge-sdk</code>](#module_@arcblock/forge-sdk)  
**Access**: public  
**See**

* [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)
* [**@arcblock/did-util**](https://github.com/arcblock/did-util)

<a name="module_@arcblock/forge-sdk..Wallet"></a>

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~Wallet

Helper functions to manipulate wallets

**Kind**: inner property of [<code>@arcblock/forge-sdk</code>](#module_@arcblock/forge-sdk)  
**Access**: public  
**See**

* [**@arcblock/forge-util**](https://github.com/arcblock/forge-util)
* [**@arcblock/did-util**](https://github.com/arcblock/did-util)

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

<a name="module_@arcblock/forge-sdk..connect"></a>

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~connect(endpoint, options)

Connect to a forge grpc/graphql endpoint
Then switch the current connection of ForgeSDK to that connection

**Kind**: inner method of [<code>@arcblock/forge-sdk</code>](#module_@arcblock/forge-sdk)  
**Access**: public  
**See**

* GraphQLClient for methods available when connected to graphql endpoint
* GRpcClient for methods available when connected to grpc endpoint

| Param           | Type                | Description                     |
| --------------- | ------------------- | ------------------------------- |
| endpoint        | <code>string</code> | endpoint url string             |
| options         | <code>object</code> | connection config               |
| options.name    | <code>string</code> | connection name                 |
| options.default | <code>string</code> | set this connection as default? |
