![event-server](https://www.arcblock.io/.netlify/functions/badge/?text=event-server)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Use this package to attach enhance the did-auth process with a websocket server, which accepts sockets connections from browsers and dispatch topic messages to those clients.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [Init Authenticator and Handlers](#init-authenticator-and-handlers)
  * [Configure Express Server](#configure-express-server)
  * [Then on the client](#then-on-the-client)


## Install

```sh
npm install @arcblock/event-server
// or
yarn add @arcblock/event-server
```


## Usage

### Init Authenticator and Handlers

```javascript
const ForgeSDK = require('@arcblock/forge-sdk');
const { WalletAuthenticator, WalletHandlers } = require('@arcblock/did-connect-js');

// First setup authenticator and handler factory
const wallet = ForgeSDK.Wallet.fromRandom().toJSON();
const authenticator = new WalletAuthenticator({
  wallet,
  baseUrl: 'http://wangshijun.natapp1.cc',
  appInfo: {
    description: 'Starter projects to develop web application on forge',
    icon: '/images/logo@2x.png',
    name: 'Forge Web Starter',
  },
  chainInfo: {
    host: 'http://did-workshop.arcblock.co:8210/api',
    id: 'forge',
  },
});

const handlers = new WalletHandlers({
  authenticator,
  tokenStorage: new MongoStorage({ url: process.env.MONGO_URI }),
});

module.exports = {
  authenticator,
  handlers,
};
```

### Configure Express Server

```javascript
// Then attach handler to express server
const http = require('http');
const express = require('express');
const EventServer = require('@arcblock/event-server');
const app = express();

const server = http.createServer(app);
const eventServer = new EventServer(server, ['auth']);

handlers.on('scanned', data => eventServer.dispatch('auth', data));
handlers.on('succeed', data => eventServer.dispatch('auth', data));
handlers.on('failed', data => eventServer.dispatch('auth', data));

handlers.attach({
  action: 'login',
  claims: {
    profile: () => ({
      fields: ['fullName', 'email'],
      description: 'Please provide your name and email to continue',
    }),
  },
  onAuth: async ({ claims, userDid }) => {
    try {
      const profile = claims.find(x => x.type === 'profile');
      console.info('login.success', { userDid, profile });
    } catch (err) {
      console.error('login.error', err);
    }
  },
});

server.listen(() => {
  console.log('server started');
});
```

### Then on the client

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
