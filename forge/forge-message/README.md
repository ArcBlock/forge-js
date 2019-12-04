![forge-message](https://www.arcblock.io/.netlify/functions/badge/?text=forge-message)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Utility function to encode and format message that can be sent to or received from forge framework.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)
* [Contributors](#contributors)


## Install

```sh
npm i @arcblock/forge-message
// OR
yarn add @arcblock/forge-message
```


## Usage

```js
const { createMessage, formatMessage } = require('@arcblock/forge-message');

const message = createMessage('Transaction', {
  from: '',
  nonce: 0,
  signature: 'abc',
  itx: {
    type: 'PokeTx',
    value: {
      date: '2019-04-25',
      address: 'zzzzzzzzzzzzzzzzzzzzz',
    },
  },
});

const buffer = message.serializeBinary();
// Then: send the buffer over the wire
```


## Documentation

For full documentation, checkout [https://forge-js.netlify.com](https://forge-js.netlify.com/)


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
