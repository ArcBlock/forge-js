![swap-retriever](https://www.arcblock.io/.netlify/functions/badge/?text=swap-retriever)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Utility to parse forge config


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/swap-retriever
// or
yarn add @arcblock/swap-retriever
```


## Usage

```js
const { createRetriever } = require('@arcblock/swap-retriever');

const retriever = createRetriever({
  traceId,
  offerAddress: address,
  demandAddress: '',
  offerChainHost,
  offerChainId,
  demandChainHost,
  demandChainId,
  retrieveWallet,
  checkInterval: 2000,
  autoStart: true,
  maxRetry: 60,
});

retriever.on('error', args => {
  console.error('swap.retrieve.error', args);
});

retriever.on('retrieved.user', ({ traceId, hash }) => {
  console.log('user retrieved', { traceId, hash });
});

retriever.on('retrieved.both', ({ traceId, hash }) => {
  console.log('both retrieved', { traceId, hash });
});
```


## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
