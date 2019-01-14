# Simple Forge App

> This is an simple app powered by forge and forge-node-sdk, it just uses forge-core and send standard transactions supported by forge core.

## Files

- [`forge.toml`](./forge.toml), configuration for forge-core and the app
- [`client.js`](./client.js), Send transactions to the app

## Getting Started

### 0. get forge installed [required]

https://github.com/ArcBlock/forge/releases

### 1. update `Makefile` to use your forge binary

```makefile
FORGE_BIN_PATH=/YOUR_FORGE_RELEASE_DIR/forge/bin/forge
```

### 2. start forge and forge-app

> forge-app is the dummy server in forge-core

```shell
make init     # install dependency
make run      # start forge app
```

```shell
tail -f logs/app.log
```

### 3. send requests to forge

```shell
DEBUG=@arcblock/* node client.js
```

## TODO

- [ ] add example for subscribe
- [ ] list all supported rpc methods
