# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [UpgradeType](#upgradetype)
  * [UpgradeAction](#upgradeaction)
  * [StateType](#statetype)
  * [StakeType](#staketype)
  * [TopicType](#topictype)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declareNode](#declarenode)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getChainInfo](#getchaininfo)
  * [getChannelState](#getchannelstate)
  * [getForgeState](#getforgestate)
  * [getStakeState](#getstakestate)
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
  UNSUPPORTED_STAKE: 30,
  INSUFFICIENT_STAKE: 31,
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
{ STATE_ACCOUNT: 0,
  STATE_ASSET: 1,
  STATE_CHANNEL: 2,
  STATE_FORGE: 3,
  STATE_STAKE: 4 }
```

### StakeType

```js
{ STAKE_NODE: 0, STAKE_USER: 1, STAKE_ASSET: 2, STAKE_CHAIN: 3 }
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
  STAKE: 24,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  CHANNEL_STATE: 131,
  FORGE_STATE: 132,
  STAKE_STATE: 133 }
```


## RPC Methods

> RPC response contains an `code` field, when `code=0` means success
> Binary data in RPC response are `UInt8Array` instance and can be safely encoded to base64 string

### createTx

```js
const result = await client.createTx({ itx:
   { type: 'WalletType', value: { pk: 0, hash: 1, address: 1 } },
  from: '22b85d3db5c6579c905604ee03da5b4c33697c26',
  nonce: 38868,
  wallet:
   { type: { pk: 1, hash: 13, address: 0 },
     sk: Uint8Array [ 68 ],
     pk: Uint8Array [ 79 ],
     address: 'bc4adb1489739a638fc81d70681bb64e9adca196' },
  token: 'Savings Account' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 2,
  tx:
   { from: 'e310f4465b5f06a3054024b1999830cf0c0d4b67',
     nonce: 42457,
     signature: Uint8Array [ 56 ],
     chainId: 25341,
     signatures:
      [ { key: Uint8Array [ 189 ], value: Uint8Array [ 196 ] },
        { key: Uint8Array [ 193 ], value: Uint8Array [ 207 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } } }
});
```

### createWallet

```js
const result = await client.createWallet({ passphrase: 'Manager',
  type: { pk: 0, hash: 13, address: 1 },
  moniker: 'Luxembourg' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 4,
  token: 'Personal Loan Account',
  wallet:
   { type: { pk: 1, hash: 9, address: 0 },
     sk: Uint8Array [ 110 ],
     pk: Uint8Array [ 226 ],
     address: '35efdd7061d5e04f380d011af75ac2cda6c650b5' } }
});
```

### declareNode

```js
const result = await client.declareNode({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 8,
  wallet:
   { type: { pk: 1, hash: 14, address: 1 },
     sk: Uint8Array [ 25 ],
     pk: Uint8Array [ 116 ],
     address: '850c55ab5d42a1a255f7e0bf2e342fbd4dc5fb21' } }
});
```

### getAccountState

```js
const stream = client.getAccountState({ address: '21e1753fa9f9d3ed87fa31ea2d7948f5c851db58',
  key: 'invoice',
  appHash: '8ce4de3221bdc30c762cfd56c161b1d47fc9bf5d' });

// output
{ code: 17,
  state:
   { balance: '53216',
     nonce: 1073,
     numTxs: 53812,
     address: '449f301e5ffe13b16a0c198228a97c4e2a0f60c2',
     pk: Uint8Array [ 243 ],
     type: { pk: 1, hash: 14, address: 1 },
     moniker: 'connecting',
     context:
      { genesisTx: 'payment',
        renaissanceTx: 'Distributed',
        genesisTime: '2019-01-17T07:22:10.745Z',
        renaissanceTime: '2019-01-17T07:22:10.745Z' },
     migratedTo: 'forecast',
     migratedFrom: [ 'leading edge', 'relationships' ],
     numAssets: 2875,
     stake:
      { totalStakes: '34002',
        totalReceivedStakes: '92450',
        recentStakes:
         { items:
            [ { type_url: 'digital', value: Uint8Array [ 107 ] },
              { type_url: 'compressing', value: Uint8Array [ 183 ] } ],
           typeUrl: 'e-commerce',
           maxItems: 40825,
           circular: undefined,
           fifo: undefined },
        recentReceivedStakes:
         { items:
            [ { type_url: 'Frozen', value: Uint8Array [ 131 ] },
              { type_url: 'ROI', value: Uint8Array [ 83 ] } ],
           typeUrl: 'Clothing',
           maxItems: 9145,
           circular: undefined,
           fifo: undefined } },
     data:
      { type: 'WalletType', value: { pk: 0, hash: 7, address: 0 } } } }
```

### getAssetState

```js
const stream = client.getAssetState({ address: '1a7a9416cabac25240851f82ce4f4d6b5401527b',
  key: 'context-sensitive',
  appHash: '5039af1d7750e384430187e757f3e303de4cd839' });

// output
{ code: 23,
  state:
   { address: 'c1791557d7409e65a54073aa511a43f3a3e0c258',
     owner: 'AGP',
     moniker: 'Hills',
     stake:
      { totalStakes: '37753',
        totalReceivedStakes: '87942',
        recentStakes:
         { items:
            [ { type_url: 'Steel', value: Uint8Array [ 75 ] },
              { type_url: 'Directives', value: Uint8Array [ 208 ] } ],
           typeUrl: 'Table',
           maxItems: 38374,
           circular: undefined,
           fifo: undefined },
        recentReceivedStakes:
         { items:
            [ { type_url: 'invoice', value: Uint8Array [ 198 ] },
              { type_url: 'Extensions', value: Uint8Array [ 39 ] } ],
           typeUrl: 'monitor',
           maxItems: 41184,
           circular: undefined,
           fifo: undefined } },
     context:
      { genesisTx: 'Pine',
        renaissanceTx: 'info-mediaries',
        genesisTime: '2019-01-17T07:22:10.746Z',
        renaissanceTime: '2019-01-17T07:22:10.746Z' },
     data:
      { type: 'WalletType', value: { pk: 0, hash: 9, address: 0 } } } }
```

### getBlock

```js
const stream = client.getBlock({ height: 135 });

// output
{ code: 22,
  block:
   { height: 19047,
     numTxs: 23354,
     time: '2019-01-17T07:22:10.746Z',
     appHash: '41f4a8f82ab343da72701935f965d3d5e99e39fd',
     proposer: '8ee5e6e0616701f7b033f798332a5d8f1c999a44',
     txs:
      [ { from: 'de1c12d064a4471d447f2b8b630774d668cd6768',
          nonce: 80268,
          signature: Uint8Array [ 96 ],
          chainId: 5943,
          signatures:
           [ { key: Uint8Array [ 108 ], value: Uint8Array [ 150 ] },
             { key: Uint8Array [ 71 ], value: Uint8Array [ 150 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 2, address: 0 } } },
        { from: 'cface04b626e2c2687b4fe18b3970467630ae466',
          nonce: 90014,
          signature: Uint8Array [ 99 ],
          chainId: 26564,
          signatures:
           [ { key: Uint8Array [ 51 ], value: Uint8Array [ 42 ] },
             { key: Uint8Array [ 129 ], value: Uint8Array [ 231 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 15, address: 0 } } } ],
     totalTxs: 41298 } }
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 28,
  info:
   { id: 'customer loyalty',
     network: 'aggregate',
     moniker: 'Senior',
     version: 'bypassing',
     synced: undefined,
     appHash: '887dffd6eace561e7f405b43257effb00f9872bf',
     blockHash: Uint8Array [ 151 ],
     blockHeight: 3942,
     blockTime: '2019-01-17T07:22:10.746Z',
     address: '26b3306fa793a6331a2127ed437bcfca3d546a44',
     votingPower: 58459,
     totalTxs: 43753 } }
});
```

### getChannelState

```js
const stream = client.getChannelState({ address: '9e8b91d774a934d5a5fbb2eb5455c564231ae4bc',
  key: 'cultivate',
  appHash: '06878e7f906204d7a22196c7d7bf8442a545f602' });

// output
{ code: 17,
  state:
   { address: '64abce8a41790a52bc0d0548a9a4ca23da356837',
     totalConfirmed: 42132,
     maxWaiting: 67939,
     maxConfirmed: 11901,
     waiting:
      { items:
         [ { type_url: 'human-resource', value: Uint8Array [ 65 ] },
           { type_url: 'cross-platform', value: Uint8Array [ 34 ] } ],
        typeUrl: 'Configuration',
        maxItems: 17860,
        circular: undefined,
        fifo: undefined },
     confirmed:
      { items:
         [ { type_url: 'Handcrafted', value: Uint8Array [ 48 ] },
           { type_url: 'payment', value: Uint8Array [ 134 ] } ],
        typeUrl: 'Factors',
        maxItems: 4484,
        circular: undefined,
        fifo: undefined },
     context:
      { genesisTx: 'Auto Loan Account',
        renaissanceTx: 'Towels',
        genesisTime: '2019-01-17T07:22:10.747Z',
        renaissanceTime: '2019-01-17T07:22:10.747Z' },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 0, address: 0 } } } }
```

### getForgeState

```js
const result = await client.getForgeState({ key: 'Concrete',
  appHash: '7b7de6950a664d36c355e8dca7edf89f28035e92' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 8,
  state:
   { consensus:
      { maxBytes: 19770,
        maxGas: 29428,
        maxValidators: 59772,
        maxCandidates: 85888,
        pubKeyTypes: [ 'Gloves', 'Analyst' ],
        validators:
         [ { address: 'ee2a2478ccbd5500f7d3e5dab0ce7d434156deca',
             power: 86474 },
           { address: '265344e0b27029e965fe7680f00c9173c8115ec2',
             power: 14454 } ],
        validatorChanged: undefined,
        paramChanged: undefined },
     tasks:
      { item:
         [ { type: 10,
             dataHash: 'application',
             actions: [ undefined, undefined ] },
           { type: 10,
             dataHash: 'reboot',
             actions: [ undefined, undefined ] } ] },
     stakeSummary:
      { totalStakes: '83241',
        totalUnstakes: '82041',
        context:
         { genesisTx: 'Indian Rupee Ngultrum',
           renaissanceTx: 'Assistant',
           genesisTime: '2019-01-17T07:22:10.747Z',
           renaissanceTime: '2019-01-17T07:22:10.747Z' } },
     data:
      { type: 'WalletType', value: { pk: 0, hash: 1, address: 0 } } } }
});
```

### getStakeState

```js
const stream = client.getStakeState({ address: 'ffbad19b1591409f561c6aa6e8e26ae063ce7de0',
  key: 'Cloned',
  appHash: '2589813990bb4f6ea9ae34aefc3f6d98ccf42b37' });

// output
{ code: 1,
  state:
   { address: '74fb945dd6512beafbf9717ae8fb733b21e65d57',
     to: '6e210ae9250916b204a0c6f933106ef44083bc2b',
     value: '66175',
     message: 'interfaces',
     context:
      { genesisTx: 'Metal',
        renaissanceTx: 'South Dakota',
        genesisTime: '2019-01-17T07:22:10.748Z',
        renaissanceTime: '2019-01-17T07:22:10.748Z' },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 1, address: 1 } } } }
```

### getTx

```js
const stream = client.getTx({ hash: '94d6059a5b7ff1850b0a9f005c23fccedf835443' });

// output
{ code: 16,
  info:
   { tx:
      { from: 'badd1416b7750a4fe9a30e94f729eaa85ab4fd53',
        nonce: 7548,
        signature: Uint8Array [ 193 ],
        chainId: 25281,
        signatures:
         [ { key: Uint8Array [ 21 ], value: Uint8Array [ 78 ] },
           { key: Uint8Array [ 160 ], value: Uint8Array [ 93 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 0, address: 0 } } },
     height: 31250,
     index: 63788,
     hash: '175ad9ef6e11d7b75a3662b2d6316b896594a0b6',
     tags:
      [ { key: Uint8Array [ 180 ], value: Uint8Array [ 14 ] },
        { key: Uint8Array [ 195 ], value: Uint8Array [ 254 ] } ] } }
```

### listWallets

```js
const stream = client.listWallets({});

// output
{ code: 5, address: 'fbd47f0b2d308a1ee82ed642f794946254698906' }
```

### loadFile

```js
const stream = client.loadFile({ hash: '0af8303a3a2d3eeea7ff6be4350e36fc80c07279' });

// output
{ code: 26, chunk: Uint8Array [ 147 ] }
```

### loadWallet

```js
const result = await client.loadWallet({ address: 'f2802b23b83cabbdca56b09ec673c479399f3524',
  passphrase: 'digital' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 5, token: 'Strategist' }
});
```

### process

```js
const stream = client.process({ verifyTx:
   { tx:
      { from: '01ef49aa2210edab97220c88f402d3681d109287',
        nonce: 32205,
        signature: Uint8Array [ 96 ],
        chainId: 70561,
        signatures:
         [ { key: Uint8Array [ 34 ], value: Uint8Array [ 208 ] },
           { key: Uint8Array [ 44 ], value: Uint8Array [ 2 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 14, address: 0 } } },
     sender:
      { balance: '92214',
        nonce: 50365,
        numTxs: 68832,
        address: '4d88778838108abeda86f81120474eb08d95652e',
        pk: Uint8Array [ 246 ],
        type: { pk: 0, hash: 7, address: 0 },
        moniker: 'supply-chains',
        context:
         { genesisTx: 'Armenian Dram',
           renaissanceTx: 'override',
           genesisTime: '2019-01-17T07:22:10.749Z',
           renaissanceTime: '2019-01-17T07:22:10.749Z' },
        migratedTo: 'JBOD',
        migratedFrom: [ 'channels', 'Martinique' ],
        numAssets: 39090,
        stake:
         { totalStakes: '30032',
           totalReceivedStakes: '35519',
           recentStakes:
            { items:
               [ { type_url: 'Health', value: Uint8Array [ 186 ] },
                 { type_url: 'Buckinghamshire', value: Uint8Array [ 115 ] } ],
              typeUrl: 'leading-edge',
              maxItems: 16000,
              circular: undefined,
              fifo: undefined },
           recentReceivedStakes:
            { items:
               [ { type_url: 'Shoes', value: Uint8Array [ 131 ] },
                 { type_url: 'Cedi', value: Uint8Array [ 70 ] } ],
              typeUrl: 'payment',
              maxItems: 72517,
              circular: undefined,
              fifo: undefined } },
        data:
         { type: 'WalletType', value: { pk: 1, hash: 0, address: 1 } } },
     states:
      [ { balance: '79550',
          nonce: 64796,
          numTxs: 73092,
          address: 'c0bb7ddd70a8156f39c20d98f628c668536346a6',
          pk: Uint8Array [ 34 ],
          type: { pk: 0, hash: 2, address: 1 },
          moniker: 'quantify',
          context:
           { genesisTx: 'bluetooth',
             renaissanceTx: 'indexing',
             genesisTime: '2019-01-17T07:22:10.749Z',
             renaissanceTime: '2019-01-17T07:22:10.749Z' },
          migratedTo: 'Metal',
          migratedFrom: [ 'Avenue', 'Intelligent Steel Chair' ],
          numAssets: 38618,
          stake:
           { totalStakes: '45176',
             totalReceivedStakes: '51232',
             recentStakes:
              { items:
                 [ { type_url: 'Ergonomic', value: Uint8Array [ 185 ] },
                   { type_url: 'Executive', value: Uint8Array [ 37 ] } ],
                typeUrl: 'Minnesota',
                maxItems: 1130,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'discrete', value: Uint8Array [ 255 ] },
                   { type_url: 'Factors', value: Uint8Array [ 229 ] } ],
                typeUrl: 'Program',
                maxItems: 64658,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } },
        { balance: '53302',
          nonce: 96987,
          numTxs: 15922,
          address: 'c598756e1c5702293bf231d825c1dc95dfc6bdfc',
          pk: Uint8Array [ 69 ],
          type: { pk: 0, hash: 6, address: 1 },
          moniker: 'responsive',
          context:
           { genesisTx: 'Licensed',
             renaissanceTx: 'Checking Account',
             genesisTime: '2019-01-17T07:22:10.749Z',
             renaissanceTime: '2019-01-17T07:22:10.749Z' },
          migratedTo: 'Generic Fresh Pants',
          migratedFrom: [ 'attitude', 'Awesome' ],
          numAssets: 82052,
          stake:
           { totalStakes: '46406',
             totalReceivedStakes: '32050',
             recentStakes:
              { items:
                 [ { type_url: 'Auto Loan Account', value: Uint8Array [ 166 ] },
                   { type_url: 'Soap', value: Uint8Array [ 93 ] } ],
                typeUrl: 'Rest',
                maxItems: 71131,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'compress', value: Uint8Array [ 33 ] },
                   { type_url: 'deploy', value: Uint8Array [ 58 ] } ],
                typeUrl: 'Direct',
                maxItems: 73562,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 0, hash: 15, address: 1 } } } ] } });

// output
{ verifyTx: { code: 28 } }
```

### processOne

```js
const result = await client.processOne({ verifyTx:
   { tx:
      { from: '8c39fdb22cff571410702f3ef1254c0048dcd598',
        nonce: 60829,
        signature: Uint8Array [ 12 ],
        chainId: 98958,
        signatures:
         [ { key: Uint8Array [ 84 ], value: Uint8Array [ 17 ] },
           { key: Uint8Array [ 19 ], value: Uint8Array [ 108 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 1, hash: 14, address: 0 } } },
     sender:
      { balance: '81462',
        nonce: 28176,
        numTxs: 93747,
        address: 'e1e8ea19313a8b825a1f19f6834e680466015ae8',
        pk: Uint8Array [ 89 ],
        type: { pk: 0, hash: 2, address: 0 },
        moniker: 'Arkansas',
        context:
         { genesisTx: 'Flat',
           renaissanceTx: 'Research',
           genesisTime: '2019-01-17T07:22:10.750Z',
           renaissanceTime: '2019-01-17T07:22:10.750Z' },
        migratedTo: 'Granite',
        migratedFrom: [ 'Zambian Kwacha', 'Personal Loan Account' ],
        numAssets: 44434,
        stake:
         { totalStakes: '49711',
           totalReceivedStakes: '90704',
           recentStakes:
            { items:
               [ { type_url: 'panel', value: Uint8Array [ 175 ] },
                 { type_url: 'Highway', value: Uint8Array [ 248 ] } ],
              typeUrl: 'Russian Ruble',
              maxItems: 75271,
              circular: undefined,
              fifo: undefined },
           recentReceivedStakes:
            { items:
               [ { type_url: 'Massachusetts', value: Uint8Array [ 116 ] },
                 { type_url: 'Incredible', value: Uint8Array [ 109 ] } ],
              typeUrl: 'Wooden',
              maxItems: 50920,
              circular: undefined,
              fifo: undefined } },
        data:
         { type: 'WalletType', value: { pk: 0, hash: 9, address: 0 } } },
     states:
      [ { balance: '10931',
          nonce: 46229,
          numTxs: 57105,
          address: '59f3b189aa090fb326bbc3049c7e7c5821846f2f',
          pk: Uint8Array [ 159 ],
          type: { pk: 1, hash: 14, address: 1 },
          moniker: 'Macao',
          context:
           { genesisTx: 'Cotton',
             renaissanceTx: 'Mountains',
             genesisTime: '2019-01-17T07:22:10.750Z',
             renaissanceTime: '2019-01-17T07:22:10.750Z' },
          migratedTo: 'orange',
          migratedFrom: [ 'alarm', 'Wisconsin' ],
          numAssets: 69977,
          stake:
           { totalStakes: '24828',
             totalReceivedStakes: '91874',
             recentStakes:
              { items:
                 [ { type_url: 'Beauty', value: Uint8Array [ 243 ] },
                   { type_url: 'Shoes', value: Uint8Array [ 187 ] } ],
                typeUrl: 'Hat',
                maxItems: 4769,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'Saint Vincent and the Grenadines',
                     value: Uint8Array [ 234 ] },
                   { type_url: 'demand-driven', value: Uint8Array [ 32 ] } ],
                typeUrl: 'Borders',
                maxItems: 30525,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 0, hash: 9, address: 1 } } },
        { balance: '88270',
          nonce: 84105,
          numTxs: 10496,
          address: '3a0e0916e507d14e8972312d7b57fcd58e0a3303',
          pk: Uint8Array [ 247 ],
          type: { pk: 1, hash: 7, address: 0 },
          moniker: 'AI',
          context:
           { genesisTx: 'one-to-one',
             renaissanceTx: 'Australia',
             genesisTime: '2019-01-17T07:22:10.751Z',
             renaissanceTime: '2019-01-17T07:22:10.751Z' },
          migratedTo: 'systemic',
          migratedFrom: [ 'Multi-tiered', 'zero administration' ],
          numAssets: 92410,
          stake:
           { totalStakes: '33595',
             totalReceivedStakes: '7598',
             recentStakes:
              { items:
                 [ { type_url: 'Euro', value: Uint8Array [ 0 ] },
                   { type_url: 'Wyoming', value: Uint8Array [ 253 ] } ],
                typeUrl: 'Cotton',
                maxItems: 81631,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'Markets', value: Uint8Array [ 197 ] },
                   { type_url: 'Security', value: Uint8Array [ 128 ] } ],
                typeUrl: 'Outdoors',
                maxItems: 97859,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } } } ] } });

// response is a stream
result.on('data', data => {
  // response data format
  { verifyTx: { code: 9 } }
});
```

### recoverWallet

```js
const result = await client.recoverWallet({ data: Uint8Array [ 116 ],
  type: { pk: 1, hash: 6, address: 0 },
  passphrase: 'Enterprise-wide',
  moniker: 'Tools' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 22,
  token: 'Soft',
  wallet:
   { type: { pk: 1, hash: 15, address: 1 },
     sk: Uint8Array [ 138 ],
     pk: Uint8Array [ 34 ],
     address: 'fbff544db976c1ae4026b0021b8bb160341dc7b2' } }
});
```

### removeWallet

```js
const result = await client.removeWallet({ address: 'a9370018793b082611d4c35b8ca2418fe5df41b1' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 16 }
});
```

### search

```js
const result = await client.search({ key: 'Avon', value: 'payment' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 18,
  txs:
   [ { tx:
        { from: '86fc617981ca564b298804d414f88ab82fe0e4de',
          nonce: 42341,
          signature: Uint8Array [ 215 ],
          chainId: 80487,
          signatures:
           [ { key: Uint8Array [ 78 ], value: Uint8Array [ 158 ] },
             { key: Uint8Array [ 67 ], value: Uint8Array [ 215 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 1, address: 1 } } },
       height: 9414,
       index: 97039,
       hash: '17de5c06e2d223cdb37c2c6ed5021b1856ace063',
       tags:
        [ { key: Uint8Array [ 214 ], value: Uint8Array [ 168 ] },
          { key: Uint8Array [ 165 ], value: Uint8Array [ 230 ] } ] },
     { tx:
        { from: '867d1919482bf3781614abe6fcf5f88f651bceb2',
          nonce: 28817,
          signature: Uint8Array [ 184 ],
          chainId: 57737,
          signatures:
           [ { key: Uint8Array [ 57 ], value: Uint8Array [ 185 ] },
             { key: Uint8Array [ 34 ], value: Uint8Array [ 244 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } } },
       height: 31884,
       index: 85252,
       hash: '3fea56b3f0a47a15c588a8dafbd8a7605b455b8d',
       tags:
        [ { key: Uint8Array [ 110 ], value: Uint8Array [ 221 ] },
          { key: Uint8Array [ 36 ], value: Uint8Array [ 248 ] } ] } ] }
});
```

### sendTx

```js
const result = await client.sendTx({ tx:
   { from: '204506d5c73980c8c36bcd4856b74114ff11570a',
     nonce: 46540,
     signature: Uint8Array [ 121 ],
     chainId: 85845,
     signatures:
      [ { key: Uint8Array [ 121 ], value: Uint8Array [ 171 ] },
        { key: Uint8Array [ 14 ], value: Uint8Array [ 194 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 0, hash: 9, address: 0 } } },
  wallet:
   { type: { pk: 1, hash: 13, address: 1 },
     sk: Uint8Array [ 27 ],
     pk: Uint8Array [ 183 ],
     address: '09b3bb09f181ad789b9e29ea42b13587ba19fc7f' },
  token: 'Money Market Account',
  commit: undefined });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 7, hash: '6f4afc102be2ed5f35601e6259f6f099bab9b068' }
});
```

### storeFile

```js
const result = await client.storeFile({ chunk: Uint8Array [ 240 ] });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 24, hash: '61f1becd2c45e3e486516c3517834670355471dc' }
});
```

### subscribe

```js
const stream = client.subscribe({ type: 132, filter: 'whiteboard' });

// output
{ topic: 'EXE' }
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
