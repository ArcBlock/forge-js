---
title: '@arcblock/did-agent-storage'
description: 'Storage interface for delegated did-auth between application and wallet'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---


## Classes

<dl>
<dt><a href="#DidAgentStorage">DidAgentStorage</a> ⇐ `EventEmitter`</dt>
<dd></dd>
<dt><a href="#DidAgentStorage">DidAgentStorage</a></dt>
<dd></dd>
</dl>


## DidAgentStorage ⇐ `EventEmitter`

**Kind**: global class  
**Extends**: `EventEmitter`  
**See**

* [**@arcblock/did-agent-storage-memory**](https://github.com/arcblock/did-agent-storage-memory)
* [**@arcblock/did-agent-storage-mongo**](https://github.com/arcblock/did-agent-storage-mongo)


* [DidAgentStorage](#DidAgentStorage) ⇐ `EventEmitter`
  * [new DidAgentStorage()](#new_DidAgentStorage_new)
  * [new DidAgentStorage(options)](#new_DidAgentStorage_new)

### new DidAgentStorage()

Defines the interface of authorized did auth storage
Which is used when building an centralized service that do did-auth on behalf of many applications
The service can implement a version of itself

### new DidAgentStorage(options)

Creates an instance of DidAgentStorage.

| Param   | Type     |
| ------- | -------- |
| options | `object` |


## DidAgentStorage

**Kind**: global class  

* [DidAgentStorage](#DidAgentStorage)
  * [new DidAgentStorage()](#new_DidAgentStorage_new)
  * [new DidAgentStorage(options)](#new_DidAgentStorage_new)

### new DidAgentStorage()

Defines the interface of authorized did auth storage
Which is used when building an centralized service that do did-auth on behalf of many applications
The service can implement a version of itself

### new DidAgentStorage(options)

Creates an instance of DidAgentStorage.

| Param   | Type     |
| ------- | -------- |
| options | `object` |


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |

  