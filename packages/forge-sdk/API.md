# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [AccountRole](#accountrole)
  * [UpgradeType](#upgradetype)
  * [UpgradeAction](#upgradeaction)
  * [StateType](#statetype)
  * [TopicType](#topictype)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getChainInfo](#getchaininfo)
  * [getChannelState](#getchannelstate)
  * [getForgeState](#getforgestate)
  * [getTx](#gettx)
  * [listWallets](#listwallets)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [process](#process)
  * [processOne](#processone)
  * [recoverWallet](#recoverwallet)
  * [removeWallet](#removewallet)
  * [search](#search)
  * [sendTx](#sendtx)
  * [storeFile](#storefile)
  * [subscribe](#subscribe)


## Enums

### StatusCode

```js
{ OK: 0,
  INVALID_NONCE: 1,
  INVALID_SIGNATURE: 2,
  INVALID_SENDER_STATE: 3,
  INVALID_RECEIVER_STATE: 4,
  INSUFFICIENT_DATA: 5,
  INSUFFICIENT_FUND: 6,
  INVALID_OWNER: 7,
  INVALID_TX: 8,
  UNSUPPORTED_TX: 9,
  INVALID_MONIKER: 16,
  INVALID_PASSPHRASE: 17,
  INVALID_CHANNEL: 18,
  INVALID_CHANNEL_WAITING_DATA: 19,
  INVALID_MULTISIG: 20,
  INVALID_WALLET: 21,
  INVALID_CHAIN_ID: 22,
  NEED_CONFIRMATION: 23,
  CONSENSUS_RPC_ERROR: 24,
  STORAGE_RPC_ERROR: 25,
  NOENT: 26,
  ACCOUNT_MIGRATED: 27,
  CHANNEL_IS_FULL: 28,
  REVOKED_TX: 29,
  INTERNAL: 500 }
```

### KeyType

```js
{ ED25519: 0, SECP256K1: 1 }
```

### HashType

```js
{ KECCAK: 0,
  SHA3: 1,
  SHA2: 2,
  KECCAK_384: 6,
  SHA3_384: 7,
  SHA2_384: 9,
  KECCAK_512: 13,
  SHA3_512: 14,
  SHA2_512: 15 }
```

### EncodingType

```js
{ BASE16: 0, BASE58: 1 }
```

### AccountRole

```js
{ NORMAL: 0, ADMIN: 1 }
```

### UpgradeType

```js
{ CONFIG_APP: 0,
  CONFIG_FORGE: 1,
  CONFIG_DFS: 2,
  CONFIG_CONSENSUS: 3,
  CONFIG_P2P: 4,
  EXE_APP: 10,
  EXE_FORGE: 11,
  EXE_DFS: 12,
  EXE_CONSENSUS: 13,
  EXE_P2P: 14 }
```

### UpgradeAction

```js
{ VERIFY: 0,
  BACKUP: 1,
  REPLACE: 2,
  RESTART_APP: 10,
  RESTART_DFS: 11,
  RESTART_CONSENSUS: 12,
  RESTART_P2P: 13,
  RESTART_FORGE: 14,
  ROLLBACK_IF_FAIL: 30,
  RESTART_ALL_IF_FAIL: 31,
  CRASH_IF_FAIL: 33,
  DROP_ADDRESS_BOOK: 50 }
```

### StateType

```js
{ ACCOUNT: 0, ASSET: 1, CHANNEL: 2, FORGE: 3 }
```

### TopicType

```js
{ TRANSFER: 0,
  ACCOUNT_MIGRATE: 1,
  CONFIRM: 2,
  CREATE_ASSET: 3,
  EXCHANGE: 4,
  REVOKE: 5,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  DECLARE: 19,
  ACCOUNT_UPGRADE: 20,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  CHANNEL_STATE: 131,
  FORGE_STATE: 132 }
```


## RPC Methods

> RPC response contains an `code` field, when `code=0` means success
> Binary data in RPC response are `UInt8Array` instance and can be safely encoded to base64 string

### createTx

```js
const result = await client.createTx({ itx:
   { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } },
  from: '5b344b7e301034cc28750c4d8c47c04467007103',
  nonce: 80674,
  wallet:
   { type: { pk: 0, hash: 0, address: 1 },
     sk: Uint8Array [ 246 ],
     pk: Uint8Array [ 0 ],
     address: '3b9ad3b45716086edb8c219feaa09c27433eb2d5' },
  token: 'Pants' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 22,
  tx:
   { from: 'edcb46fe1475617fd0a3cc6abe7f253f958e25e7',
     nonce: 58870,
     signature: Uint8Array [ 166 ],
     chainId: 6823,
     signatures:
      [ { key: Uint8Array [ 44 ], value: Uint8Array [ 1 ] },
        { key: Uint8Array [ 230 ], value: Uint8Array [ 29 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 0, hash: 1, address: 1 } } } }
});
```

### createWallet

```js
const result = await client.createWallet({ passphrase: 'Ergonomic Fresh Towels',
  type: { pk: 0, hash: 0, address: 1 },
  moniker: 'solution' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 21,
  token: 'rich',
  wallet:
   { type: { pk: 0, hash: 14, address: 0 },
     sk: Uint8Array [ 114 ],
     pk: Uint8Array [ 76 ],
     address: '8c32cb325489dfe3a2509d96299723f1f0b58ef5' } }
});
```

### getAccountState

```js
const stream = client.getAccountState({ address: 'ab5cde531513e7c494f4c44c8b67ba30befb785b',
  key: 'Mouse',
  appHash: '699e2b336d16cea9ec98defee4c7706bb35071df' });

// output
{ code: 17,
  state:
   { balance: '37350',
     nonce: 4933,
     numTxs: 82132,
     address: 'e09079108f5ef41319408b1db0265a54fe4667ea',
     pk: Uint8Array [ 235 ],
     type: { pk: 0, hash: 1, address: 0 },
     moniker: 'vortals',
     role: 0,
     genesisTx: 'Auto Loan Account',
     renaissanceTx: 'Orchestrator',
     genesisTime: '2019-01-15T07:53:16.783Z',
     renaissanceTime: '2019-01-15T07:53:16.783Z',
     migratedTo: 'El Salvador',
     migratedFrom: [ 'ivory', 'multi-byte' ],
     power: 33796,
     numAssets: 12705,
     data:
      { type: 'WalletType', value: { pk: 0, hash: 0, address: 0 } } } }
```

### getAssetState

```js
const stream = client.getAssetState({ address: '4c6839367e4abf39c4462ad0d1721990d05c3ab8',
  key: 'Computers',
  appHash: 'adecd06e37c7f059fc75c0e067091075c3f68712' });

// output
{ code: 8,
  state:
   { address: '13a7be7238f99a69048f07b38419898e2455fb16',
     owner: 'optical',
     moniker: 'Streamlined',
     genesisTx: 'multimedia',
     renaissanceTx: 'Unbranded',
     genesisTime: '2019-01-15T07:53:16.784Z',
     renaissanceTime: '2019-01-15T07:53:16.784Z',
     data:
      { type: 'WalletType', value: { pk: 0, hash: 7, address: 1 } } } }
```

### getBlock

```js
const stream = client.getBlock({ height: 61824 });

// output
{ code: 28,
  block:
   { height: 7730,
     numTxs: 26661,
     time: '2019-01-15T07:53:16.784Z',
     appHash: '6037b40a5bb4364a83121891a4286e10fd1937b7',
     proposer: '2e1e794ffa158c5f32362c6998cbee806f7d4b68',
     txs:
      [ { from: 'cdb07a10cc0454efcd885a5a672afb3dfd9dfdca',
          nonce: 50898,
          signature: Uint8Array [ 76 ],
          chainId: 343,
          signatures:
           [ { key: Uint8Array [ 129 ], value: Uint8Array [ 64 ] },
             { key: Uint8Array [ 85 ], value: Uint8Array [ 47 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 0, address: 0 } } },
        { from: '600c60951d8de9f17d243d55457d3314f06a9266',
          nonce: 95578,
          signature: Uint8Array [ 163 ],
          chainId: 10939,
          signatures:
           [ { key: Uint8Array [ 56 ], value: Uint8Array [ 2 ] },
             { key: Uint8Array [ 92 ], value: Uint8Array [ 151 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 7, address: 1 } } } ] } }
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 28,
  info:
   { id: 'Georgia',
     network: 'Small',
     moniker: 'Cheese',
     version: 'parsing',
     synced: undefined,
     appHash: '3aaa9ca9ed132f9ea8b247672c1a365b1d4bbebc',
     blockHash: Uint8Array [ 231 ],
     blockHeight: 9194,
     blockTime: '2019-01-15T07:53:16.784Z',
     address: '7606685d7fbbc524a270f766f74d6684f0cb0610',
     votingPower: 90636 } }
});
```

### getChannelState

```js
const stream = client.getChannelState({ address: '2bbd420579b1776ce09a1931a0063f5dcd965eb1',
  key: 'sky blue',
  appHash: '4f5cafbf9c502efc9b5b4346100a51a846190751' });

// output
{ code: 3,
  state:
   { address: '5a7f0cd0da839d64593e92a3b30546e1c7bb89c1',
     totalConfirmed: 93795,
     maxWaiting: 57220,
     maxConfirmed: 90359,
     waiting:
      [ { tx:
           { from: '7a8e1cf22223f30f4eeeef9b350e923e1708bfcf',
             nonce: 4166,
             signature: Uint8Array [ 205 ],
             chainId: 65887,
             signatures:
              [ { key: Uint8Array [ 75 ], value: Uint8Array [ 84 ] },
                { key: Uint8Array [ 207 ], value: Uint8Array [ 3 ] } ],
             itx:
              { type: 'WalletType', value: { pk: 1, hash: 6, address: 1 } } },
          height: 22202,
          index: 32250,
          hash: 'ba515d6532e91b61b50447971fac802ef657dae2',
          tags:
           [ { key: Uint8Array [ 140 ], value: Uint8Array [ 7 ] },
             { key: Uint8Array [ 4 ], value: Uint8Array [ 162 ] } ] },
        { tx:
           { from: '6097bbccac56a1301e930db81231f0651b7e4cfb',
             nonce: 17814,
             signature: Uint8Array [ 55 ],
             chainId: 29046,
             signatures:
              [ { key: Uint8Array [ 51 ], value: Uint8Array [ 212 ] },
                { key: Uint8Array [ 110 ], value: Uint8Array [ 62 ] } ],
             itx:
              { type: 'WalletType', value: { pk: 1, hash: 6, address: 0 } } },
          height: 69434,
          index: 74364,
          hash: '9a64ee26ce899523e7ce8ada06963dfdddc21536',
          tags:
           [ { key: Uint8Array [ 185 ], value: Uint8Array [ 168 ] },
             { key: Uint8Array [ 61 ], value: Uint8Array [ 128 ] } ] } ],
     confirmed:
      [ { code: 28, hash: 'bd85ea3f5b2b5a52bb13a2ee82092dbcf292f478' },
        { code: 500, hash: '4781601051f5f6f0bb478475a50fbddb564b9ce1' } ],
     genesisTx: 'Intelligent',
     renaissanceTx: 'payment',
     genesisTime: '2019-01-15T07:53:16.785Z',
     renaissanceTime: '2019-01-15T07:53:16.785Z',
     data:
      { type: 'WalletType', value: { pk: 1, hash: 6, address: 1 } } } }
```

### getForgeState

```js
const result = await client.getForgeState({ key: 'Grocery',
  appHash: 'c0a6ad123332ab7b4ee416a4549d22351a221534' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 17,
  state:
   { latestBlock: 15558,
     latestAppHash: Uint8Array [ 133 ],
     consensusEngine: 'Turkey',
     storageEngine: 'programming',
     tasks:
      { item:
         [ { type: 0,
             dataHash: 'invoice',
             actions: [ undefined, undefined ] },
           { type: 2,
             dataHash: 'invoice',
             actions: [ undefined, undefined ] } ] },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 13, address: 0 } } } }
});
```

### getTx

```js
const stream = client.getTx({ hash: '804c97a38d5a600a186286382f3b18cff1c2a86a' });

// output
{ code: 8,
  info:
   { tx:
      { from: '6eec5c932c7c64d24df9d5da529e05e14939d04f',
        nonce: 74245,
        signature: Uint8Array [ 81 ],
        chainId: 74306,
        signatures:
         [ { key: Uint8Array [ 18 ], value: Uint8Array [ 195 ] },
           { key: Uint8Array [ 9 ], value: Uint8Array [ 8 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 2, address: 0 } } },
     height: 14895,
     index: 65502,
     hash: 'f84e29d0710a7c0a53ba9d1918acceaa887f922e',
     tags:
      [ { key: Uint8Array [ 221 ], value: Uint8Array [ 222 ] },
        { key: Uint8Array [ 138 ], value: Uint8Array [ 158 ] } ] } }
```

### listWallets

```js
const stream = client.listWallets({});

// output
{ code: 2, address: 'dd0d696a3066b34558d57dd6b3c5aa9c19f2d62e' }
```

### loadFile

```js
const stream = client.loadFile({ hash: 'c2227d32a96948cf1202435e92ca543f9c8fc74b' });

// output
{ code: 26, chunk: Uint8Array [ 10 ] }
```

### loadWallet

```js
const result = await client.loadWallet({ address: 'c21fd169020b34775e95f53d3d6284d5fe17ba3d',
  passphrase: 'pricing structure' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 16, token: 'Practical Concrete Pizza' }
});
```

### process

```js
const stream = client.process({ verifyTx:
   { tx:
      { from: 'a6326102d59743b3aa38c053f0ffc28580729db7',
        nonce: 66746,
        signature: Uint8Array [ 84 ],
        chainId: 54949,
        signatures:
         [ { key: Uint8Array [ 230 ], value: Uint8Array [ 235 ] },
           { key: Uint8Array [ 166 ], value: Uint8Array [ 88 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 13, address: 1 } } },
     sender:
      { balance: '81335',
        nonce: 97739,
        numTxs: 78702,
        address: '02fe188b7b93c389831c3067d582c0f2681ea17e',
        pk: Uint8Array [ 200 ],
        type: { pk: 0, hash: 7, address: 0 },
        moniker: 'Infrastructure',
        role: 1,
        genesisTx: 'adapter',
        renaissanceTx: 'Wyoming',
        genesisTime: '2019-01-15T07:53:16.786Z',
        renaissanceTime: '2019-01-15T07:53:16.786Z',
        migratedTo: 'Investment Account',
        migratedFrom: [ 'Auto Loan Account', 'backing up' ],
        power: 96269,
        numAssets: 28432,
        data:
         { type: 'WalletType', value: { pk: 0, hash: 13, address: 0 } } },
     states:
      [ { balance: '99483',
          nonce: 73348,
          numTxs: 71012,
          address: 'd9af772e7b9ae3ef17245adc3d64db956581ae40',
          pk: Uint8Array [ 52 ],
          type: { pk: 1, hash: 1, address: 0 },
          moniker: 'Steel',
          role: 1,
          genesisTx: 'bi-directional',
          renaissanceTx: 'robust',
          genesisTime: '2019-01-15T07:53:16.786Z',
          renaissanceTime: '2019-01-15T07:53:16.786Z',
          migratedTo: 'Human',
          migratedFrom: [ 'purple', 'Intuitive' ],
          power: 72697,
          numAssets: 37883,
          data:
           { type: 'WalletType', value: { pk: 1, hash: 15, address: 1 } } },
        { balance: '36742',
          nonce: 56570,
          numTxs: 87896,
          address: '77399aee8b6a795fdae29e98355406f3b5fc096d',
          pk: Uint8Array [ 24 ],
          type: { pk: 0, hash: 14, address: 1 },
          moniker: 'Group',
          role: 0,
          genesisTx: 'Ecuador',
          renaissanceTx: 'Lights',
          genesisTime: '2019-01-15T07:53:16.787Z',
          renaissanceTime: '2019-01-15T07:53:16.787Z',
          migratedTo: 'bandwidth',
          migratedFrom: [ 'back up', 'PCI' ],
          power: 68972,
          numAssets: 28899,
          data:
           { type: 'WalletType', value: { pk: 0, hash: 9, address: 1 } } } ] } });

// output
{ verifyTx: { code: 19 } }
```

### processOne

```js
const result = await client.processOne({ verifyTx:
   { tx:
      { from: '6ffcb86342877f853080ed65ca43c0e6535729ca',
        nonce: 385,
        signature: Uint8Array [ 187 ],
        chainId: 7925,
        signatures:
         [ { key: Uint8Array [ 218 ], value: Uint8Array [ 220 ] },
           { key: Uint8Array [ 178 ], value: Uint8Array [ 239 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 1, hash: 0, address: 1 } } },
     sender:
      { balance: '9354',
        nonce: 78818,
        numTxs: 56170,
        address: '767f12d03d5ef82efe71aa7be19fc93879822f5c',
        pk: Uint8Array [ 168 ],
        type: { pk: 0, hash: 0, address: 1 },
        moniker: 'Gorgeous Soft Table',
        role: 1,
        genesisTx: 'Saint Helena Pound',
        renaissanceTx: 'Representative',
        genesisTime: '2019-01-15T07:53:16.787Z',
        renaissanceTime: '2019-01-15T07:53:16.787Z',
        migratedTo: 'deposit',
        migratedFrom: [ 'Credit Card Account', 'Cambridgeshire' ],
        power: 69306,
        numAssets: 62750,
        data:
         { type: 'WalletType', value: { pk: 0, hash: 1, address: 0 } } },
     states:
      [ { balance: '88625',
          nonce: 99273,
          numTxs: 18490,
          address: 'ed0c7f9d8e2713ad6a2923d9caae3e400ceaebd5',
          pk: Uint8Array [ 169 ],
          type: { pk: 0, hash: 6, address: 1 },
          moniker: 'backing up',
          role: 1,
          genesisTx: 'invoice',
          renaissanceTx: 'Jordanian Dinar',
          genesisTime: '2019-01-15T07:53:16.787Z',
          renaissanceTime: '2019-01-15T07:53:16.787Z',
          migratedTo: 'payment',
          migratedFrom: [ 'compress', 'Home Loan Account' ],
          power: 86746,
          numAssets: 67165,
          data:
           { type: 'WalletType', value: { pk: 0, hash: 15, address: 0 } } },
        { balance: '26153',
          nonce: 45924,
          numTxs: 84750,
          address: 'b915e0d4e74d1dd3d079c612011c9b1c82921c4f',
          pk: Uint8Array [ 190 ],
          type: { pk: 1, hash: 7, address: 1 },
          moniker: 'back up',
          role: 1,
          genesisTx: 'grid-enabled',
          renaissanceTx: 'deposit',
          genesisTime: '2019-01-15T07:53:16.787Z',
          renaissanceTime: '2019-01-15T07:53:16.787Z',
          migratedTo: 'Gloves',
          migratedFrom: [ 'Interactions', 'indexing' ],
          power: 86579,
          numAssets: 2740,
          data:
           { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } } ] } });

// response is a stream
result.on('data', data => {
  // response data format
  { verifyTx: { code: 4 } }
});
```

### recoverWallet

```js
const result = await client.recoverWallet({ data: Uint8Array [ 160 ],
  type: { pk: 1, hash: 13, address: 0 },
  passphrase: 'mint green',
  moniker: 'Fresh' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 500,
  token: 'regional',
  wallet:
   { type: { pk: 0, hash: 0, address: 1 },
     sk: Uint8Array [ 229 ],
     pk: Uint8Array [ 159 ],
     address: '5dfefb02187c2affecd3d4dd3dc27961036700fb' } }
});
```

### removeWallet

```js
const result = await client.removeWallet({ address: '7c948b2173c8e3f37fe234e1377d14266d3f7c8a' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 20 }
});
```

### search

```js
const result = await client.search({ key: 'orchid', value: 'pixel' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 20,
  txs:
   [ { tx:
        { from: '57a255bfa0891e509b9d3e04107a2c5f7cf3afd8',
          nonce: 85345,
          signature: Uint8Array [ 248 ],
          chainId: 94443,
          signatures:
           [ { key: Uint8Array [ 131 ], value: Uint8Array [ 174 ] },
             { key: Uint8Array [ 13 ], value: Uint8Array [ 197 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 9, address: 1 } } },
       height: 81227,
       index: 47159,
       hash: '36d4db0b5281fc0e89bfc53136f1aa61de486fbb',
       tags:
        [ { key: Uint8Array [ 98 ], value: Uint8Array [ 20 ] },
          { key: Uint8Array [ 82 ], value: Uint8Array [ 200 ] } ] },
     { tx:
        { from: '956741ddcbb3b49165f818f822ef6c963579cf5b',
          nonce: 28796,
          signature: Uint8Array [ 49 ],
          chainId: 87099,
          signatures:
           [ { key: Uint8Array [ 121 ], value: Uint8Array [ 19 ] },
             { key: Uint8Array [ 193 ], value: Uint8Array [ 57 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 15, address: 0 } } },
       height: 35801,
       index: 79455,
       hash: '87637c643a61be74c5c7e4fed766445f8b21bf2a',
       tags:
        [ { key: Uint8Array [ 25 ], value: Uint8Array [ 148 ] },
          { key: Uint8Array [ 219 ], value: Uint8Array [ 136 ] } ] } ] }
});
```

### sendTx

```js
const result = await client.sendTx({ tx:
   { from: '3c5962130d7ff6a0a9dc9533d0ed0fb19d1c699a',
     nonce: 42928,
     signature: Uint8Array [ 11 ],
     chainId: 62941,
     signatures:
      [ { key: Uint8Array [ 197 ], value: Uint8Array [ 160 ] },
        { key: Uint8Array [ 66 ], value: Uint8Array [ 70 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } } },
  wallet:
   { type: { pk: 1, hash: 1, address: 1 },
     sk: Uint8Array [ 243 ],
     pk: Uint8Array [ 139 ],
     address: '5270e5e0c3e25b83c74128b4a9fe612f404f5aa9' },
  token: 'Vermont',
  commit: undefined });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 2, hash: '279262f456a982da16107594b4a7b42c5be0cb6e' }
});
```

### storeFile

```js
const result = await client.storeFile({ chunk: Uint8Array [ 6 ] });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 9, hash: '9575eb6fa31bc43ed059961f1cde56a7a2e59822' }
});
```

### subscribe

```js
const stream = client.subscribe({ type: 23, filter: 'systematic' });

// output
{ topic: 'auxiliary' }
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
