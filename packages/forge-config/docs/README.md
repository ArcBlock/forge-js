<a name="module_@arcblock/forge-config"></a>


## [**@arcblock/forge-config**](https://github.com/arcblock/forge-config)

Contains helper methods to parse forge config file

<a name="module_@arcblock/forge-config.parse"></a>

### [**@arcblock/forge-config**](https://github.com/arcblock/forge-config).parse(configPath) ⇒

Parse config from a file

**Kind**: static method of [<code>@arcblock/forge-config</code>](#module_@arcblock/forge-config)  
**Returns**: object  
**Throws**:

* Error when file not found

**Access**: public  

| Param      | Type                |
| ---------- | ------------------- |
| configPath | <code>string</code> |

**Example**  

```js
const { parseConfig } = require('@arcblock/forge-config');
const config = parseConfig('./forge.toml');
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
