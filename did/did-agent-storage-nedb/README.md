# [**@arcblock/did-agent-storage-nedb**](https://github.com/arcblock/forge-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses mongo to store data, implements interfaces defined in `@arcblock/did-auth-storage`.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)


## Install

```sh
npm install @arcblock/did-agent-storage-nedb
// or
yarn add @arcblock/did-agent-storage-nedb
```


## Usage

```js
const MongoStorage = require('@arcblock/did-agent-storage-nedb');

const storage = new MongoStorage({
  url: 'mongodb://localhost/forge-web-starter',
  collection: 'app-agent-authorizations',
});

(async () => {
  const agent = fromRandom(type);
  const authorizer = fromRandom(type);
  const authorizeId = authorizer.toAddress();

  const authorization = Jwt.sign(authorizeId, authorizer.secretKey, {
    sub: agent.toAddress(),
    ops: {
      profile: ['fullName', 'mobilePhone', 'mailingAddress'],
    },
  });

  const [, content, sig] = authorization.split('.');
  const item = await storage.create(authorizeId, {
    ownerDid: user.toAddress(),
    agentDid: agent.toAddress(),
    appDid: authorizeId,
    appPk: authorizer.publicKey,
    appName: 'ABT Wallet Demo',
    appDescription: 'Demo application to show the potential of ABT Wallet',
    appIcon: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/wallet-round.png',
    certificateContent: content,
    certificateSignature: sig,
  });
})();
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
