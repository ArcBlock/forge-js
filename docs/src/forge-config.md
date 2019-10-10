---
title: '@arcblock/forge-config'
description: 'Utility to parse/stringify forge config'
keywords: 'forge, sdk, javascript'
author: 'wangshijun'
category: 'packages'
layout: 'documentation'
tags:
  - 'forge'
---

<a name="module_@arcblock/forge-config"></a>


## [**@arcblock/forge-config**](https://github.com/arcblock/forge-config)

Contains helper methods to parse forge config file

<a name="parse"></a>

### parse(configPath) ⇒

Parse config from a file

**Kind**: static method  
**Returns**: object  
**Throws**:

* Error when file not found

**Access**: public  

| Param      | Type     |
| ---------- | -------- |
| configPath | `string` |

**Example**  

```js
const { parseConfig } = require('@arcblock/forge-config');
const config = parseConfig('./forge.toml');
```

  