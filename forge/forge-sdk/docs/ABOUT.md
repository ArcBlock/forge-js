# ES6 Proxy Implementation

```javascript
/**
 * Implementation using Proxy: delegate to util/wallet/clients
 *
 * @private
 * @param {object} target
 * @param {string} propKey
 */
const sdkProxy = (target, propKey) => {
  if (propKey === 'Util') {
    return sdk.Util;
  }

  if (propKey === 'Wallet') {
    return sdk.Wallet;
  }

  // Proxy any further method call to the current connection object
  return function proxyMethod(...args) {
    debug('proxy call', propKey);
    if (propKey === 'connect') {
      return sdk.connect.apply(null, args);
    }

    // Delegate to GRpcClient or GraphQLClient
    const [, options = {}] = args;
    const client = getClient(options.conn);
    const method = client[propKey];
    if (typeof method === 'function') {
      return method.apply(client, args);
    }

    throw new Error(`ForgeSDK.${propKey} is not supported in current connection`);
  };
};

// eslint-disable-next-line new-cap
// return new proxy(sdk, { get: sdkProxy });
```
