# Forge Web

> Web UI to interact with ABT Node (which is typically a running forge instance)

## Getting Started

Because forge-web is a subpackage in forge-js, follow its guide to setup local env.

```terminal
git clone git@github.com:ArcBlock/forge-js.git
cd forge-js
npm install -g lerna yarn js2dts
lerna bootstrap
lerna link
```

## Local testing

```terminal
cd apps/forge-web
yarn start:chain-node         # start forge-web shipped within forge
yarn start:explorer           # start universal block explorer, connect to argon/bromine/titanium
yarn start:explorer-beta      # start universal block explorer, connect to test
```

## How to publish new version when forge graphql schema changed?

First, make sure you have a local forge graphql endpoint running at: `http://localhost:8210`, then do run following command in `forge-js` root directory

```terminal
git pull origin master
lerna bootstrap
lerna link
make upgrade-graphql-client
make build
make create-pr
```

This will create a new pr on [forge-js](https://github.com/ArcBlock/forge-js/pulls), wait for the ci pass, merge the pr, grab a coffee.
Then new versions will be automatically published to npm.
