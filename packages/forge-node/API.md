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
  * [processOne](#processone)
  * [process](#process)
  * [subscribe](#subscribe)
  * [createTx](#createtx)
  * [sendTx](#sendtx)
  * [getTx](#gettx)
  * [getBlock](#getblock)
  * [getChainInfo](#getchaininfo)
  * [search](#search)
  * [createWallet](#createwallet)
  * [loadWallet](#loadwallet)
  * [recoverWallet](#recoverwallet)
  * [listWallets](#listwallets)
  * [removeWallet](#removewallet)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getChannelState](#getchannelstate)
  * [getForgeState](#getforgestate)
  * [storeFile](#storefile)
  * [loadFile](#loadfile)


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

### processOne

```js
const result = await client.processOne({ verifyTx:
   { tx:
      { from: 'c346ea4a5464e84d02e79b3e47133dc7f226407c',
        nonce: 59840,
        signature: Uint8Array [ 254 ],
        chainId: 71021,
        signatures:
         [ { key: Uint8Array [ 182 ], value: Uint8Array [ 125 ] },
           { key: Uint8Array [ 135 ], value: Uint8Array [ 167 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 1, hash: 1, address: 1 } } },
     sender:
      { balance: '67551',
        nonce: 9406,
        numTxs: 64127,
        address: '7cd07b4aa9ac4be95dfb89ffb62324a92ae386e2',
        pk: Uint8Array [ 210 ],
        type: { pk: 1, hash: 14, address: 0 },
        moniker: 'Handmade Fresh Shirt',
        role: 1,
        genesisTx: 'Tennessee',
        renaissanceTx: 'Unbranded Frozen Bacon',
        genesisTime: '2019-01-15T03:38:21.046Z',
        renaissanceTime: '2019-01-15T03:38:21.046Z',
        migratedTo: 'Plaza',
        migratedFrom: [ 'groupware', 'Belgium' ],
        power: 41387,
        numAssets: 61162,
        data:
         { type: 'WalletType', value: { pk: 0, hash: 6, address: 1 } } },
     states:
      [ { balance: '1855',
          nonce: 81329,
          numTxs: 89080,
          address: 'e3020e62f5fb68a30ce5d8ee286540d2d985f254',
          pk: Uint8Array [ 63 ],
          type: { pk: 0, hash: 15, address: 0 },
          moniker: 'Quality',
          role: 0,
          genesisTx: 'hack',
          renaissanceTx: 'Singapore Dollar',
          genesisTime: '2019-01-15T03:38:21.046Z',
          renaissanceTime: '2019-01-15T03:38:21.046Z',
          migratedTo: 'e-markets',
          migratedFrom: [ 'deposit', 'extend' ],
          power: 58977,
          numAssets: 19246,
          data:
           { type: 'WalletType', value: { pk: 0, hash: 1, address: 1 } } },
        { balance: '88738',
          nonce: 39251,
          numTxs: 84358,
          address: '76be6d4d50653953d26e839a59bde3af403a3d72',
          pk: Uint8Array [ 228 ],
          type: { pk: 0, hash: 14, address: 0 },
          moniker: 'hard drive',
          role: 1,
          genesisTx: 'motivating',
          renaissanceTx: 'Fish',
          genesisTime: '2019-01-15T03:38:21.046Z',
          renaissanceTime: '2019-01-15T03:38:21.046Z',
          migratedTo: 'overriding',
          migratedFrom: [ 'generating', 'Interactions' ],
          power: 25366,
          numAssets: 60114,
          data:
           { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } } } ] } });

// response is a stream
result.on('data', data => {
  // response data format
  { verifyTx: { code: 28 } }
});
```

### process

```js
const stream = client.process({ verifyTx:
   { tx:
      { from: '8f80c384fa2b849c69c6f31aa6a8e0d4e8b1f123',
        nonce: 3175,
        signature: Uint8Array [ 119 ],
        chainId: 9513,
        signatures:
         [ { key: Uint8Array [ 141 ], value: Uint8Array [ 92 ] },
           { key: Uint8Array [ 102 ], value: Uint8Array [ 146 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 0, address: 0 } } },
     sender:
      { balance: '74382',
        nonce: 24400,
        numTxs: 87334,
        address: '9db9af4caac0c883250d824c3919b596aaa24248',
        pk: Uint8Array [ 122 ],
        type: { pk: 0, hash: 2, address: 1 },
        moniker: 'green',
        role: 1,
        genesisTx: 'hacking',
        renaissanceTx: 'port',
        genesisTime: '2019-01-15T03:38:21.047Z',
        renaissanceTime: '2019-01-15T03:38:21.047Z',
        migratedTo: 'expedite',
        migratedFrom: [ 'UIC-Franc', 'deliverables' ],
        power: 77516,
        numAssets: 65888,
        data:
         { type: 'WalletType', value: { pk: 0, hash: 7, address: 1 } } },
     states:
      [ { balance: '16278',
          nonce: 61740,
          numTxs: 14678,
          address: 'e5ffeac39738a9eee4928d503119cdea58df2a72',
          pk: Uint8Array [ 216 ],
          type: { pk: 1, hash: 9, address: 1 },
          moniker: 'impactful',
          role: 0,
          genesisTx: 'Fresh',
          renaissanceTx: 'withdrawal',
          genesisTime: '2019-01-15T03:38:21.048Z',
          renaissanceTime: '2019-01-15T03:38:21.048Z',
          migratedTo: 'Officer',
          migratedFrom: [ 'Pitcairn Islands', 'PNG' ],
          power: 28494,
          numAssets: 51256,
          data:
           { type: 'WalletType', value: { pk: 0, hash: 7, address: 1 } } },
        { balance: '99290',
          nonce: 96464,
          numTxs: 4083,
          address: 'e03e083f479667e158cea0fc2d9d5a272dad9592',
          pk: Uint8Array [ 41 ],
          type: { pk: 1, hash: 15, address: 0 },
          moniker: 'communities',
          role: 1,
          genesisTx: 'Accountability',
          renaissanceTx: 'metrics',
          genesisTime: '2019-01-15T03:38:21.048Z',
          renaissanceTime: '2019-01-15T03:38:21.048Z',
          migratedTo: 'Re-engineered',
          migratedFrom: [ 'Granite', 'North Dakota' ],
          power: 80952,
          numAssets: 5959,
          data:
           { type: 'WalletType', value: { pk: 1, hash: 0, address: 0 } } } ] } });

// output
{ verifyTx: { code: 16 } }
```

### subscribe

```js
const stream = client.subscribe({ type: 129, filter: 'Refined Concrete Bike' });

// output
{ topic: 'bypassing' }
```

### createTx

```js
const result = await client.createTx({ itx:
   { type: 'WalletType', value: { pk: 0, hash: 0, address: 1 } },
  from: '95970529e6118f66972a8be3cb068bd35a7e2b53',
  nonce: 9407,
  wallet:
   { type: { pk: 1, hash: 2, address: 0 },
     sk: Uint8Array [ 191 ],
     pk: Uint8Array [ 247 ],
     address: '20d2cac4ffba5d205f4802623fdf91860c87d01b' },
  token: 'cultivate' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 27,
  tx:
   { from: '713167ff1ff1d34af9b9f125999013bc633b29f2',
     nonce: 74575,
     signature: Uint8Array [ 185 ],
     chainId: 39558,
     signatures:
      [ { key: Uint8Array [ 26 ], value: Uint8Array [ 53 ] },
        { key: Uint8Array [ 36 ], value: Uint8Array [ 133 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 7, address: 1 } } } }
});
```

### sendTx

```js
const result = await client.sendTx({ tx:
   { from: 'eb1a910db766f35c0793ea6a3d28dc30aa29f900',
     nonce: 61988,
     signature: Uint8Array [ 100 ],
     chainId: 43615,
     signatures:
      [ { key: Uint8Array [ 0 ], value: Uint8Array [ 9 ] },
        { key: Uint8Array [ 156 ], value: Uint8Array [ 85 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 0, hash: 9, address: 0 } } },
  wallet:
   { type: { pk: 1, hash: 13, address: 1 },
     sk: Uint8Array [ 119 ],
     pk: Uint8Array [ 76 ],
     address: '7ab39407ab616844bc8d13dea9bc878c283a9c6f' },
  token: 'Engineer',
  commit: undefined });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 2, hash: 'f1d1a82199d75c0f4ca9cc89746553fade8145e1' }
});
```

### getTx

```js
const stream = client.getTx({ hash: 'ae5df0974e2e5cfc974339e0e9db7e8a99727db5' });

// output
{ code: 28,
  info:
   { tx:
      { from: '5014c951fe3599c986ac9c11d3586dbfec6f4886',
        nonce: 85133,
        signature: Uint8Array [ 255 ],
        chainId: 73135,
        signatures:
         [ { key: Uint8Array [ 148 ], value: Uint8Array [ 178 ] },
           { key: Uint8Array [ 162 ], value: Uint8Array [ 206 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 1, address: 1 } } },
     height: 13279,
     index: 55299,
     hash: '9e5365e39aa707bb6e52c86788ffb0906b3fce5e',
     tags:
      [ { key: Uint8Array [ 198 ], value: Uint8Array [ 210 ] },
        { key: Uint8Array [ 225 ], value: Uint8Array [ 189 ] } ] } }
```

### getBlock

```js
const stream = client.getBlock({ height: 19823 });

// output
{ code: 22,
  block:
   { height: 94232,
     numTxs: 92125,
     time: '2019-01-15T03:38:21.049Z',
     appHash: '986db5958cf18a43671f6248527d9f1ea5a3e027',
     proposer: 'b5ea6f061107f17e980bff2e9b2fea314aa0bcdc',
     txs:
      [ { from: '1ce870b82b12286fe3fa511335e681eee29d55d5',
          nonce: 76624,
          signature: Uint8Array [ 59 ],
          chainId: 58211,
          signatures:
           [ { key: Uint8Array [ 1 ], value: Uint8Array [ 180 ] },
             { key: Uint8Array [ 62 ], value: Uint8Array [ 175 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 14, address: 1 } } },
        { from: '289e60beb1bfde030aca9e9d64bbf4c1fe349acb',
          nonce: 30609,
          signature: Uint8Array [ 55 ],
          chainId: 9507,
          signatures:
           [ { key: Uint8Array [ 244 ], value: Uint8Array [ 230 ] },
             { key: Uint8Array [ 223 ], value: Uint8Array [ 42 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 0, address: 0 } } } ] } }
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 5,
  info:
   { id: 'COM',
     network: 'Computers',
     moniker: 'Czech Koruna',
     version: 'extranet',
     synced: undefined,
     appHash: 'cd4f852fd5e0a37a781f50aea7e5cc8aa787452d',
     blockHash: Uint8Array [ 83 ],
     blockHeight: 71283,
     blockTime: '2019-01-15T03:38:21.049Z',
     address: '93c302c8ec92b3be85619974c104173f04b03c01',
     votingPower: 74314 } }
});
```

### search

```js
const result = await client.search({ key: 'Cheese', value: 'Industrial' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 26,
  txs:
   [ { tx:
        { from: '22f7432351128ba3ffc8843ef1da8d3e06ae3d73',
          nonce: 38454,
          signature: Uint8Array [ 170 ],
          chainId: 74367,
          signatures:
           [ { key: Uint8Array [ 132 ], value: Uint8Array [ 34 ] },
             { key: Uint8Array [ 5 ], value: Uint8Array [ 15 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 6, address: 1 } } },
       height: 57787,
       index: 38555,
       hash: '5dd489590b3102f871713f7607b6e717472fe1e0',
       tags:
        [ { key: Uint8Array [ 243 ], value: Uint8Array [ 44 ] },
          { key: Uint8Array [ 13 ], value: Uint8Array [ 142 ] } ] },
     { tx:
        { from: '8d7f746830b548d76db9aea741b79664909c160c',
          nonce: 2834,
          signature: Uint8Array [ 3 ],
          chainId: 88848,
          signatures:
           [ { key: Uint8Array [ 163 ], value: Uint8Array [ 156 ] },
             { key: Uint8Array [ 25 ], value: Uint8Array [ 180 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } },
       height: 95328,
       index: 78016,
       hash: '55c872d47432833f1f7b5be975ef6f88859055ed',
       tags:
        [ { key: Uint8Array [ 110 ], value: Uint8Array [ 87 ] },
          { key: Uint8Array [ 138 ], value: Uint8Array [ 16 ] } ] } ] }
});
```

### createWallet

```js
const result = await client.createWallet({ passphrase: 'Frozen',
  type: { pk: 1, hash: 7, address: 0 },
  moniker: 'clear-thinking' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 8,
  token: 'distributed',
  wallet:
   { type: { pk: 0, hash: 0, address: 1 },
     sk: Uint8Array [ 77 ],
     pk: Uint8Array [ 83 ],
     address: '83707114981a2350ba5d9e0e0b12be43ae1c492a' } }
});
```

### loadWallet

```js
const result = await client.loadWallet({ address: '4033275da53095a59957e800b8deb7e0e7949da6',
  passphrase: 'Forint' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 8, token: 'Money Market Account' }
});
```

### recoverWallet

```js
const result = await client.recoverWallet({ data: Uint8Array [ 225 ],
  type: { pk: 1, hash: 0, address: 1 },
  passphrase: 'functionalities',
  moniker: 'data-warehouse' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 0,
  token: 'Refined',
  wallet:
   { type: { pk: 1, hash: 9, address: 1 },
     sk: Uint8Array [ 121 ],
     pk: Uint8Array [ 58 ],
     address: '3c3e7aee8d24677744caa9e04224aeb824144529' } }
});
```

### listWallets

```js
const stream = client.listWallets({});

// output
{ code: 5, address: 'cd6c22d46a10b08037267ee43b631a143b5fb87b' }
```

### removeWallet

```js
const result = await client.removeWallet({ address: '09b8ec886ae16f2b1fd5d8cdb75e6caf15eb2664' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 2 }
});
```

### getAccountState

```js
const stream = client.getAccountState({ address: 'fa13f0372e9af46f9b9454dd042d30e9696b5761',
  key: 'payment',
  appHash: 'dac340019160595eed54464bd7b5f8f4254680fe' });

// output
{ code: 16,
  state:
   { balance: '30711',
     nonce: 96164,
     numTxs: 80849,
     address: '30e8a2ffe2c20ccddc3e584da29a3edf7226fb9a',
     pk: Uint8Array [ 47 ],
     type: { pk: 1, hash: 14, address: 0 },
     moniker: 'Human',
     role: 1,
     genesisTx: 'Indiana',
     renaissanceTx: 'Sleek',
     genesisTime: '2019-01-15T03:38:21.051Z',
     renaissanceTime: '2019-01-15T03:38:21.051Z',
     migratedTo: 'Agent',
     migratedFrom: [ 'deliverables', 'generate' ],
     power: 81722,
     numAssets: 481,
     data:
      { type: 'WalletType', value: { pk: 0, hash: 9, address: 0 } } } }
```

### getAssetState

```js
const stream = client.getAssetState({ address: '8781d0c9558b391f49adc7d9e4aced6b41a6e992',
  key: 'transform',
  appHash: '10ae492405249ee91d739b5b1fd28d40a8026af7' });

// output
{ code: 17,
  state:
   { address: '410229116ef3317fd11293c44f0c9fe91c21472c',
     owner: 'Afghani',
     moniker: 'Brand',
     genesisTx: 'solutions',
     renaissanceTx: 'withdrawal',
     genesisTime: '2019-01-15T03:38:21.051Z',
     renaissanceTime: '2019-01-15T03:38:21.051Z',
     data:
      { type: 'WalletType', value: { pk: 0, hash: 6, address: 0 } } } }
```

### getChannelState

```js
const stream = client.getChannelState({ address: '70e985701cf6166e9fe6de796ad0e58532c00d8e',
  key: 'Chair',
  appHash: '7462b388d1b491cf298ff120709ea1c152ea88bd' });

// output
{ code: 29,
  state:
   { address: 'a8c1bed280ee9798068b2bce71150fbbdb9bfa31',
     totalConfirmed: 40054,
     maxWaiting: 26123,
     maxConfirmed: 80183,
     waiting:
      [ { tx:
           { from: '19f6257deeb36f65ff00f2040da86acf6c1dc757',
             nonce: 53450,
             signature: Uint8Array [ 31 ],
             chainId: 20065,
             signatures:
              [ { key: Uint8Array [ 245 ], value: Uint8Array [ 73 ] },
                { key: Uint8Array [ 120 ], value: Uint8Array [ 111 ] } ],
             itx:
              { type: 'WalletType', value: { pk: 0, hash: 7, address: 0 } } },
          height: 2197,
          index: 76836,
          hash: '4cbf5b46bce32d7345a03b2d51778c071c31ad74',
          tags:
           [ { key: Uint8Array [ 138 ], value: Uint8Array [ 57 ] },
             { key: Uint8Array [ 77 ], value: Uint8Array [ 255 ] } ] },
        { tx:
           { from: 'cdb1b728708785cf1bcf32706d027dcca3cdcc16',
             nonce: 54978,
             signature: Uint8Array [ 12 ],
             chainId: 85268,
             signatures:
              [ { key: Uint8Array [ 4 ], value: Uint8Array [ 87 ] },
                { key: Uint8Array [ 66 ], value: Uint8Array [ 130 ] } ],
             itx:
              { type: 'WalletType', value: { pk: 0, hash: 14, address: 0 } } },
          height: 56235,
          index: 25611,
          hash: '64fb0bc2dda7da26ca1b285f75e8902e0b530a3b',
          tags:
           [ { key: Uint8Array [ 215 ], value: Uint8Array [ 216 ] },
             { key: Uint8Array [ 215 ], value: Uint8Array [ 228 ] } ] } ],
     confirmed:
      [ { code: 6, hash: '588bb0b6d815bfe93b3d9e1fe080cb8329558c78' },
        { code: 5, hash: '90f627ca8524ea6ed6a0765a6954d032487c971f' } ],
     genesisTx: 'Brand',
     renaissanceTx: 'Morocco',
     genesisTime: '2019-01-15T03:38:21.052Z',
     renaissanceTime: '2019-01-15T03:38:21.052Z',
     data:
      { type: 'WalletType', value: { pk: 0, hash: 0, address: 1 } } } }
```

### getForgeState

```js
const result = await client.getForgeState({ key: 'Lead',
  appHash: '38dc20e6a1affc4772bad8d5e56d6e2673f40d20' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 9,
  state:
   { latestBlock: 66323,
     latestAppHash: Uint8Array [ 28 ],
     consensusEngine: 'Islands',
     storageEngine: 'hacking',
     tasks:
      { item:
         [ { type: 11,
             dataHash: 'aggregate',
             actions: [ undefined, undefined ] },
           { type: 1,
             dataHash: 'Generic Fresh Shirt',
             actions: [ undefined, undefined ] } ] },
     data:
      { type: 'WalletType', value: { pk: 0, hash: 15, address: 1 } } } }
});
```

### storeFile

```js
const result = await client.storeFile({ chunk: Uint8Array [ 146 ] });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 26, hash: 'f35449b71036ab8d096d259bda484ae3c0dc40e7' }
});
```

### loadFile

```js
const stream = client.loadFile({ hash: '37ef3a2ab610a0f8b1ae368ae3d1e4827d73f21c' });

// output
{ code: 24, chunk: Uint8Array [ 129 ] }
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
