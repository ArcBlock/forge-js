# Forge Web

> Web UI to interact with ABT Node (which is typically a running forge instance)

## Getting Started

Because forge-web is a subpackage in forge-js, follow its guide to setup local env.

```shell
git clone git@github.com:ArcBlock/forge-js.git
cd forge-js
npm install -g lerna yarn js2dts
lerna bootstrap
lerna link
```

## Local testing

```shell
cd apps/forge-web
yarn start:chain-node         # start forge-web shipped within forge
yarn start:explorer           # start universal block explorer, connect to argon/bromine/titanium
yarn start:explorer-beta      # start universal block explorer, connect to test
```

## How to publish new version when forge graphql schema changed?

First, make sure you have a local forge graphql endpoint running at: `http://localhost:8210`, then do run following command in `forge-js` root directory

> If your local forge is not running at 8210, graphql schema cannot be fetched, or you can change at: [update-graphql-schema.js](../../packages/graphl-client/tools/update-graphql-schema.js).

```shell
git pull origin master
lerna bootstrap
lerna link
git checkout -b chore/upgrade-forge-web
make upgrade-graphql-client
make build
make create-pr
```

This will create a new pr on [forge-js](https://github.com/ArcBlock/forge-js/pulls), wait for the ci pass, merge the pr, grab a coffee.
Then new versions will be automatically published to npm.

If you do not want to publish new packages before local testing passes, you can:

```shell
cd apps/forge-web
yarn build:chain-node
```

Then move the `build` folder to where [forge-web](https://github.com/ArcBlock/forge-web) require it to be.
