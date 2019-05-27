# `protocol`

This folder contains examples on how to deploy custom transaction protocols to forge powered blockchain.

Basic steps:

- Write a protocol in protocols sub folder
- Run `forge protocol:compile ./protocol` to compile the protocol
- Run `forge protocol:deploy .compiled/create_product/elixir/create_product/create_product.itx.json` to deploy the protocol
- Run `node asset_factory.js` to test with the example
