# KV Store App

> This is an example app powered by forge and forge-node-sdk, it's purpose is very simple, accept `KVPair` transactions and store them in AccountState.data.

## Files

- `kv.toml`, configuration for forge-core and the app
- `app.js`, Create an forge-app server, and process `KVPair` transaction `verify` and `update` requests from forge
- `rpc.js`, Send `KVPair` transaction to the app
- `kv.proto`, protobuf definition for the KVStore app

## Getting Started

### 0. get forge installed [required]

https://github.com/ArcBlock/forge/releases

### 1. start forge and forge-app

> forge-app is managed by forge process manager

```shell
make init     # install dependency
make prepare  # setup tendermint and ipfs
make run      # start forge app
```

```shell
tail -f logs/app.log
```

### 2. send requests to forge

```shell
DEBUG=@arcblock/* node rpc.js
```
