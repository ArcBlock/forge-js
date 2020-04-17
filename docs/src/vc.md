---
title: '@arcblock/vc'
description: 'Javascript lib to work with ArcBlock Verifiable Credentials'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---


## [**@arcblock/vc**](https://github.com/arcblock/vc)

Utility functions to create/verify vc

**Requires**: `module:@arcblock/did`, `module:@arcblock/forge-util`  

* [~create(params)](#.create) ⇒ `object`
* [~verify(vc, ownerDid, trustedIssuers)](#.verify) ⇒ `boolean`
* [~verifyPresentation(presentation, trustedIssuers, challenge)](#.verifyPresentation) ⇒ `boolean`

### [**@arcblock/vc**](https://github.com/arcblock/vc)~create(params) ⇒ `object`

Create a valid verifiable credential

**Kind**: inner method   

| Param                 | Type     | Description                |
| --------------------- | -------- | -------------------------- |
| params                | `object` |                            |
| params.type           | `string` | The type of credential     |
| params.subject        | `object` | The content of credential  |
| params.issuer         | `object` | The issuer name and wallet |
| params.issuanceDate   | `Date`   |                            |
| params.expirationDate | `Date`   |                            |

### [**@arcblock/vc**](https://github.com/arcblock/vc)~verify(vc, ownerDid, trustedIssuers) ⇒ `boolean`

Verify that the verifiable credential is valid

* It is signed by a whitelist of issuers
* It is owned by the vc.subject.id
* It has valid signature by the issuer
* It is not expired

**Kind**: inner method  
**Throws**:

* `Error` 

| Param          | Type     | Description                      |
| -------------- | -------- | -------------------------------- |
| vc             | `object` | the verifiable credential object |
| ownerDid       | `string` | vc holder/owner did              |
| trustedIssuers | `Array`  | list of issuer did               |

### [**@arcblock/vc**](https://github.com/arcblock/vc)~verifyPresentation(presentation, trustedIssuers, challenge) ⇒ `boolean`

Verify that the Presentation is valid

* It is signed by VC's owner
* It contain chanllege
* It has valid signature by the issuer
* It is not expired

**Kind**: inner method  
**Throws**:

* `Error` 

| Param          | Type     | Description             |
| -------------- | -------- | ----------------------- |
| presentation   | `object` | the presentation object |
| trustedIssuers | `Array`  | list of issuer did      |
| challenge      | `String` | Random byte you want    |

  