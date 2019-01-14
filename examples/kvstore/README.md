# KV Store App

> This is an example app powered by forge and forge-node-sdk, it's purpose is very simple, accept `KVPair` transactions and store them in AccountState.data.

## Files

- [`forge.toml`](./forge.toml), configuration for forge-core and the app
- [`server.js`](./server.js), Create an forge-app server, and process `KVPair` transaction `verify` and `update` requests from forge
- [`client.js`](./client.js), Send `KVPair` transaction to the app
- [`kv.proto`](./kv.proto), protobuf definition for the KVStore app

## Getting Started

### 0. get forge installed [required]

https://github.com/ArcBlock/forge/releases

### 1. update `Makefile` to use your forge binary

```makefile
FORGE_BIN_PATH=/YOUR_FORGE_RELEASE_DIR/forge/bin/forge
```

### 2. start forge and forge-app

> forge-app is managed by forge process manager

```shell
make init     # install dependency
make run      # start forge app
```

```shell
tail -f logs/app.log
```

### 3. send requests to forge

This script will create wallet and send `KvTx` to forge-app, you can run it multiple times to see the `AccountState.data` changes.

```shell
DEBUG=@arcblock/* node client.js
```
