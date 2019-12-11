![event-client](https://www.arcblock.io/.netlify/functions/badge/?text=event-client)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## Table of Contents

* [Install](#install)
* [Usage](#usage)


## Install

```sh
npm install @arcblock/event-client
// or
yarn add @arcblock/event-client
```


## Usage

```javascript
const EventClient = require('@arcblock/event-client');

const endpoint = 'ws://192.168.43.94:3030';

(async () => {
  const hub = new EventClient(endpoint);
  const subscription = await hub.subscribe('auth', '2c6e68c5');
  const subscription = await hub.subscribe('swap', 'abcd1234');
  subscription.on('data', data => console.log('token.update', data));
})();
```
