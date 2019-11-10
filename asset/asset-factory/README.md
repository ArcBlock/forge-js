![asset-factory](https://www.arcblock.io/.netlify/functions/badge/?text=asset-factory)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Utility to create standard assets that can be rendered in [ABT Wallet](https://www.abtwallet.io)


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)


## Install

```sh
npm install @arcblock/asset-factory
// or
yarn add @arcblock/asset-factory
```


## Usage

```js
const ForgeSDK = require('@arcblock/forge-sdk');
const { AssetFactory, AssetIssuer } = require('@arcblock/asset-factory');

const wallet = ForgeSDK.Wallet.fromRandom();
const factory = new AssetFactory({
  chainId: 'zinc-2019-05-17',
  chainHost: 'https://zinc.abtnetwork.io/api',
  wallet,
  issuer: {
    name: 'test case',
    url: 'https://www.arcblock.io',
    logo: 'https://www.arcblock.io/favicon.ico',
  },
});

const [asset, hash] = await factory.createTicket({
  backgroundUrl: 'https://www.arcblock.io',
  data: {
    name: '复仇者联盟4的电影票',
    description: '单场次单人座',
    location: '北京市朝阳区青年路朝阳大悦城万达影院',
    startTime: Date.now(),
    endTime: Date.now() + 24 * 60 * 60 * 1000,
    host: new AssetIssuer({
      wallet,
      name: '万达影城',
      logo: 'https://www.baidu.com',
      url: 'https://www.baidu.com',
    }),
  },
});
```


## Documentation

For full documentation, checkout [README.md](./docs/README.md).
