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


## [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)

Contains basic helper methods to encode/format/mock a protobuf message

**Requires**: [@arcblock/forge-util](/packages/forge-util/), [@arcblock/forge-message](/packages/forge-message/), [@arcblock/forge-wallet](/packages/forge-wallet/), [@arcblock/grpc-client](/packages/grpc-client/), [@arcblock/graphql-client](/packages/graphql-client/), [@arcblock/did-util](/packages/did-util/)  
**Example**  

```js
yarn add @arcblock/forge-sdk

const ForgeSDK = require('@arcblock/forge-sdk');
ForgeSDK.connect('tcp://127.0.0.1:28211', { default: true });
ForgeSDK.getChainInfo().then(console.log);
```

### [**@arcblock/forge-sdk**](https://github.com/arcblock/forge-sdk)~wrapMethods(source, target)

Wrap all methods from `source` object and attach them to target object
We can have a much cleaner implementation with ES6 proxy here
But because it's not well supported by js runtime environments yet

**Kind**: inner method   

| Param  | Type |
| ------ | ---- |
| source | `\*` |
| target | `\*` |

  