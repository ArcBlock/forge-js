# [**@arcblock/did-auth-storage-firebase**](https://github.com/arcblock/abt-did-js)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Storage engine that uses firebase to store data, implements interfaces defined in `@arcblock/did-auth-storage`.

## Table of Contents

- [**@arcblock/did-auth-storage-firebase**](#arcblockdid-auth-storage-firebase)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)

## Install

```sh
npm install @arcblock/did-auth-storage-firebase firebase-admin
// or
yarn add @arcblock/did-auth-storage-firebase firebase-admin
```

## Usage

```js
const { Handlers, Authenticator } = require('@arcblock/did-auth');
const FirebaseStorage = require('@arcblock/did-auth-storage-firebase');
const firebase = require('firebase-admin');

const connection = firebase.initializeApp({
  credential: firebase.credential.cert('path/to/serviceAccountCredentials.json'),
  databaseURL: 'https://databaseName.firebaseio.com',
});

const storage = new FirebaseStorage({
  database: connection.database(),
  tokens: 'did_auth_tokens',
})

(async () => {
  const token = '123456';
  const item = await storage.create(token);
})();
```
