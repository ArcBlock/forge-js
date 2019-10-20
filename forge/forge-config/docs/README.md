
## [**@arcblock/forge-config**](https://github.com/arcblock/forge-config)

Contains helper methods to parse forge config file

### parse(configPath) ⇒ `object`

Parse config from a file

**Kind**: static method  
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
