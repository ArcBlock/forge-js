---
title: '@arcblock/forge-sdk'
description: 'Forge javascript SDK packages all-in-one'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---

<a name="module_@arcblock/forge-sdk"></a>


## [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)

Contains basic helper methods to encode/format/mock a protobuf message

**Requires**: [@arcblock/forge-util](./forge-util/), [@arcblock/forge-message](./forge-message/), [@arcblock/forge-wallet](./forge-wallet/), [@arcblock/grpc-client](./grpc-client/), [@arcblock/graphql-client](./graphql-client/), [@arcblock/did-util](./did-util/)  
**Example**  

```js
yarn add @arcblock/forge-sdk

const ForgeSDK = require('@arcblock/forge-sdk');
ForgeSDK.connect('tcp://127.0.0.1:28211', { default: true });
ForgeSDK.getChainInfo().then(console.log);
```

<a name=".wrapMethods"></a>

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~wrapMethods(source, target)

Wrap all methods from `source` object and attach them to target object
We can have a much cleaner implementation with ES6 proxy here
But because it's not well supported by js runtime environments yet

**Kind**: inner method   

| Param  | Type |
| ------ | ---- |
| source | `\*` |
| target | `\*` |

  