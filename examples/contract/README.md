# `protocol`

This folder contains examples on how to compile/deploy/use custom transaction protocols to forge powered blockchain.

```shell
yarn
```

Basic steps:

- Write a protocol in protocols sub folder
- Export `FORGE_MODERATOR_SK` variable, that is used to deploy protocol to ABT Node
- Set `forge.moderator.address` in the config file of your ABT Node, run `node dump_moderator.js` to checkout the address
- Make sure your moderator wallet is declared on the target chain, if not, run `node declare_moderator.js` to register the moderator
- Run `forge protocol:compile ./protocol` to compile the protocol
- Run `forge protocol:deploy .compiled/create_product/elixir/create_product/create_product.itx.json` to deploy the protocol
- Run `node asset_factory.js` to test with the example
