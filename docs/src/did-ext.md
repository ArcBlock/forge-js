---
title: '@arcblock/did-ext'
description: 'Extension to work with ArcBlock DID'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---


## fromAppDid(appDid, rootSk, [type], [index]) ⇒ `object`

Gen user DID from app did and rootSk

Spec: <https://github.com/ArcBlock/ABT-DID-Protocol#request-did-authentication>

**Kind**: global function  
**Returns**: `object` - ForgeWallet instance  
**Access**: public  

| Param   | Type     | Default |
| ------- | -------- | ------- |
| appDid  | `string` |         |
| rootSk  | `string` |         |
| [type]  | `object` | `{}`    |
| [index] | `number` | `0`     |

  