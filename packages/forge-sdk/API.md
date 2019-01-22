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
  * [SupportedTxs](#supportedtxs)
  * [SupportedStakes](#supportedstakes)
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
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
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
  INVALID_STAKE_STATE: 32,
  EXPIRED_WALLET_TOKEN: 33,
  BANNED_UNSTAKE: 34,
  INVALID_ASSET: 35,
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
  UPDATE_ASSET: 20,
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

### SupportedTxs

```js
[ 'RequestVerifyTx',
  'ResponseVerifyTx',
  'RequestCreateTx',
  'RequestGetTx',
  'RequestSendTx',
  'ResponseCreateTx',
  'ResponseGetTx',
  'ResponseSendTx',
  'AccountMigrateTx',
  'ConfirmTx',
  'ConsensusUpgradeTx',
  'CreateAssetTx',
  'DeclareFileTx',
  'DeclareTx',
  'ExchangeTx',
  'RevokeTx',
  'StakeTx',
  'SysUpgradeTx',
  'TransferTx',
  'UpdateAssetTx' ]
```

### SupportedStakes

```js
[ 'StakeForNode',
  'stakeForAsset',
  'stakeForChain',
  'stakeForUser' ]
```


## RPC Methods

> RPC response contains an `code` field, when `code=0` means success
> Binary data in RPC response are `UInt8Array` instance and can be safely encoded to base64 string

### createTx

```js
const result = await client.createTx({ itx:
   { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } },
  from: 'c88c473ec958db0ab1ca4bd17ca95412d0ecd41a',
  nonce: 10633,
  wallet:
   { type: { pk: 0, hash: 2, address: 1 },
     sk: Uint8Array [ 95 ],
     pk: Uint8Array [ 64 ],
     address: '8194709a99efe55655b1b309ea1d0f25f38684f1' },
  token: 'cross-platform' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 28,
  tx:
   { from: 'bffdf0c23c342d9378795ebe223e25d7b32982b0',
     nonce: 92763,
     signature: Uint8Array [ 227 ],
     chainId: 90604,
     signatures:
      [ { key: Uint8Array [ 208 ], value: Uint8Array [ 47 ] },
        { key: Uint8Array [ 215 ], value: Uint8Array [ 244 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } } }
});
```

### createWallet

```js
const result = await client.createWallet({ passphrase: 'Representative',
  type: { pk: 0, hash: 13, address: 1 },
  moniker: 'West Virginia' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 1,
  token: 'synthesize',
  wallet:
   { type: { pk: 0, hash: 0, address: 0 },
     sk: Uint8Array [ 45 ],
     pk: Uint8Array [ 18 ],
     address: 'ae0b0b9a1f81a92a6b44447365e02674563d56ed' } }
});
```

### declareNode

```js
const result = await client.declareNode({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 16,
  wallet:
   { type: { pk: 1, hash: 0, address: 0 },
     sk: Uint8Array [ 167 ],
     pk: Uint8Array [ 45 ],
     address: '3a24dcf49f60959bf60d2a6ef02bacf73ac079c7' } }
});
```

### getAccountState

```js
const stream = client.getAccountState({ address: '6ed2dd46290c0d26c49d20799ed3829c43eb799b',
  key: 'Avon',
  appHash: 'e72cd4d3074317c93f46e0a1ea8e2da1efc666e6' });

// output
{ code: 22,
  state:
   { balance: '56636',
     nonce: 83118,
     numTxs: 37169,
     address: '5e843daf0e4b30c10a095f8e30a01addb3c59d89',
     pk: Uint8Array [ 157 ],
     type: { pk: 0, hash: 15, address: 0 },
     moniker: 'Fantastic Concrete Shirt',
     context:
      { genesisTx: 'Wooden',
        renaissanceTx: 'array',
        genesisTime: '2019-01-22T03:29:17.486Z',
        renaissanceTime: '2019-01-22T03:29:17.486Z' },
     migratedTo: 'Cambridgeshire',
     migratedFrom: [ 'Auto Loan Account', 'reboot' ],
     numAssets: 27709,
     stake:
      { totalStakes: '69179',
        totalUnstakes: '67790',
        totalReceivedStakes: '38826',
        recentStakes:
         { items:
            [ { type_url: 'Synergistic', value: Uint8Array [ 168 ] },
              { type_url: 'empowering', value: Uint8Array [ 31 ] } ],
           typeUrl: 'Electronics',
           maxItems: 11368,
           circular: undefined,
           fifo: undefined },
        recentReceivedStakes:
         { items:
            [ { type_url: 'Accounts', value: Uint8Array [ 54 ] },
              { type_url: 'Fresh', value: Uint8Array [ 136 ] } ],
           typeUrl: 'Hat',
           maxItems: 29178,
           circular: undefined,
           fifo: undefined } },
     data:
      { type: 'WalletType', value: { pk: 0, hash: 15, address: 0 } } } }
```

### getAssetState

```js
const stream = client.getAssetState({ address: 'd51fa43fbee20e9aed9d9a51d23712ab67582c2a',
  key: 'Customer',
  appHash: '03f903aa547eadd28be88369e580821123b46466' });

// output
{ code: 2,
  state:
   { address: '4358b7e03277b315ae46083025c5ba209cbb58bb',
     owner: 'Baby',
     moniker: 'transmit',
     readonly: undefined,
     stake:
      { totalStakes: '99323',
        totalUnstakes: '57166',
        totalReceivedStakes: '37476',
        recentStakes:
         { items:
            [ { type_url: 'sexy', value: Uint8Array [ 82 ] },
              { type_url: 'Rustic Fresh Sausages', value: Uint8Array [ 143 ] } ],
           typeUrl: 'IB',
           maxItems: 87403,
           circular: undefined,
           fifo: undefined },
        recentReceivedStakes:
         { items:
            [ { type_url: 'Handcrafted', value: Uint8Array [ 243 ] },
              { type_url: 'compress', value: Uint8Array [ 179 ] } ],
           typeUrl: 'Plain',
           maxItems: 87866,
           circular: undefined,
           fifo: undefined } },
     context:
      { genesisTx: 'optical',
        renaissanceTx: 'Fish',
        genesisTime: '2019-01-22T03:29:17.487Z',
        renaissanceTime: '2019-01-22T03:29:17.487Z' },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } } }
```

### getBlock

```js
const stream = client.getBlock({ height: 83092 });

// output
{ code: 29,
  block:
   { height: 65974,
     numTxs: 21879,
     time: '2019-01-22T03:29:17.487Z',
     appHash: '073d994f2f77bbb7e2dda3b5541daf93d2575520',
     proposer: 'e3a77b3c6b390897cdcd3058572f6973821b4693',
     txs:
      [ { from: 'cdf86de176db40cb7bfee3c28ee56485a53d83c9',
          nonce: 72260,
          signature: Uint8Array [ 216 ],
          chainId: 67458,
          signatures:
           [ { key: Uint8Array [ 66 ], value: Uint8Array [ 202 ] },
             { key: Uint8Array [ 52 ], value: Uint8Array [ 95 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 7, address: 1 } } },
        { from: '547305da1f016d27dfa7604140baa0b61c690c54',
          nonce: 134,
          signature: Uint8Array [ 179 ],
          chainId: 58667,
          signatures:
           [ { key: Uint8Array [ 221 ], value: Uint8Array [ 152 ] },
             { key: Uint8Array [ 159 ], value: Uint8Array [ 48 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 14, address: 0 } } } ],
     totalTxs: 80240 } }
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 7,
  info:
   { id: 'Home',
     network: 'withdrawal',
     moniker: 'Cook Islands',
     version: 'digital',
     synced: undefined,
     appHash: '578cbbb74ca90f13cc889e57e2e716710ad95b5a',
     blockHash: Uint8Array [ 35 ],
     blockHeight: 28128,
     blockTime: '2019-01-22T03:29:17.488Z',
     address: '5d26a3106780666834464302a73cec7a3c6f6604',
     votingPower: 92308,
     totalTxs: 71508 } }
});
```

### getChannelState

```js
const stream = client.getChannelState({ address: '66f69b1b5bb30bf82f34e222dece5081e796e74f',
  key: 'programming',
  appHash: '5929d1cd362c8de0b024f3f3dc84150992b3e7bc' });

// output
{ code: 20,
  state:
   { address: '7242e06ef93b3fee71644a5bb3dfb7aaca6d5340',
     totalConfirmed: 88369,
     maxWaiting: 40494,
     maxConfirmed: 49943,
     waiting:
      { items:
         [ { type_url: 'concept', value: Uint8Array [ 213 ] },
           { type_url: 'copy', value: Uint8Array [ 17 ] } ],
        typeUrl: 'turquoise',
        maxItems: 37117,
        circular: undefined,
        fifo: undefined },
     confirmed:
      { items:
         [ { type_url: 'Isle of Man', value: Uint8Array [ 238 ] },
           { type_url: 'New Hampshire', value: Uint8Array [ 255 ] } ],
        typeUrl: 'hacking',
        maxItems: 7999,
        circular: undefined,
        fifo: undefined },
     context:
      { genesisTx: 'Circle',
        renaissanceTx: 'Customizable',
        genesisTime: '2019-01-22T03:29:17.488Z',
        renaissanceTime: '2019-01-22T03:29:17.488Z' },
     data:
      { type: 'WalletType', value: { pk: 0, hash: 0, address: 1 } } } }
```

### getForgeState

```js
const result = await client.getForgeState({ key: 'iterate',
  appHash: '85cc59aa2a2c5f6c84e447ffe467dbb2c1f00a2f' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 25,
  state:
   { consensus:
      { maxBytes: 33135,
        maxGas: 71075,
        maxValidators: 99705,
        maxCandidates: 51851,
        pubKeyTypes: [ 'transmitting', 'Peru' ],
        validators:
         [ { address: '241745f5c23dabe843960f8d3ed2640acafff304',
             power: 67393 },
           { address: 'd6617eeb71afdcb5f4525d6db034586d01ab4120',
             power: 88195 } ],
        validatorChanged: undefined,
        paramChanged: undefined },
     tasks:
      { item:
         [ { type: 2,
             dataHash: 'Applications',
             actions: [ undefined, undefined ] },
           { type: 13,
             dataHash: 'Multi-tiered',
             actions: [ undefined, undefined ] } ] },
     stakeSummary:
      { totalStakes: '17472',
        totalUnstakes: '39969',
        context:
         { genesisTx: 'Borders',
           renaissanceTx: 'backing up',
           genesisTime: '2019-01-22T03:29:17.488Z',
           renaissanceTime: '2019-01-22T03:29:17.488Z' } },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 14, address: 1 } } } }
});
```

### getNetInfo

```js
const result = await client.getNetInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 7,
  netInfo:
   { listening: undefined,
     listeners: [ 'Administrator', 'port' ],
     nPeers: 80330,
     peers:
      [ { nodeInfo:
           { id: 'solid state',
             network: 'Tactics',
             version: 'red',
             moniker: 'payment',
             ip: 'Investor',
             geoInfo:
              { city: 'Marketing',
                country: 'Creative',
                latitude: 18267.44,
                longitude: 23894.42 } } },
        { nodeInfo:
           { id: 'Interactions',
             network: 'Berkshire',
             version: 'Auto Loan Account',
             moniker: 'Personal Loan Account',
             ip: 'invoice',
             geoInfo:
              { city: 'JBOD',
                country: 'radical',
                latitude: 82502.09,
                longitude: 53678.89 } } } ] } }
});
```

### getStakeState

```js
const stream = client.getStakeState({ address: 'ca0dbbc0c4cc58a933ef461400d5842f6def9402',
  key: 'connecting',
  appHash: '8b930100ebda39882d149a5bc1af21cf5e930e7a' });

// output
{ code: 30,
  state:
   { address: '13cc86b0ec0c5f6eec1d1e79f7eff7a2420d4fa4',
     from: '2a289b00fbc031377176a2629b1b7168935251df',
     to: 'b37b6922b75a64cde6bb618b19377385d62b4861',
     balance: '84848',
     message: 'invoice',
     context:
      { genesisTx: 'Fresh',
        renaissanceTx: 'Multi-layered',
        genesisTime: '2019-01-22T03:29:17.489Z',
        renaissanceTime: '2019-01-22T03:29:17.489Z' },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 6, address: 0 } } } }
```

### getTx

```js
const stream = client.getTx({ hash: '0b0cf13f871ec1975549aad244277fce00173a2c' });

// output
{ code: 34,
  info:
   { tx:
      { from: 'eadcd61a2ae4dec587de8b2bffc2bf7e3452fd7f',
        nonce: 56273,
        signature: Uint8Array [ 240 ],
        chainId: 82343,
        signatures:
         [ { key: Uint8Array [ 146 ], value: Uint8Array [ 80 ] },
           { key: Uint8Array [ 17 ], value: Uint8Array [ 238 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 2, address: 0 } } },
     height: 24083,
     index: 17048,
     hash: '1025f2d750cdc84c195e93dc6093ca3fce569773',
     tags:
      [ { key: Uint8Array [ 104 ], value: Uint8Array [ 155 ] },
        { key: Uint8Array [ 166 ], value: Uint8Array [ 96 ] } ] } }
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({ limit: 49321 });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 4,
  unconfirmedTxs:
   { nTxs: 54969,
     txs:
      [ { from: 'dfbf849ca1077168e86cfe8d61b7b7ec97c88320',
          nonce: 44835,
          signature: Uint8Array [ 31 ],
          chainId: 69586,
          signatures:
           [ { key: Uint8Array [ 74 ], value: Uint8Array [ 30 ] },
             { key: Uint8Array [ 20 ], value: Uint8Array [ 28 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 15, address: 1 } } },
        { from: '0979350cba4a458cefcaddee43141f972f85fbbb',
          nonce: 62036,
          signature: Uint8Array [ 232 ],
          chainId: 25537,
          signatures:
           [ { key: Uint8Array [ 76 ], value: Uint8Array [ 124 ] },
             { key: Uint8Array [ 217 ], value: Uint8Array [ 222 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 0, address: 0 } } } ] } }
});
```

### getValidatorsInfo

```js
const result = await client.getValidatorsInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 6,
  validatorsInfo:
   { blockHeight: 90238,
     validators:
      [ { address: '6350cf6a27f548abf0e9ed8cfc6aedbb00cddff8',
          votingPower: 60553,
          proposerPriority: 'Bouvet Island (Bouvetoya)' },
        { address: '66be28946d6ff19d99a137fcf1a621143cba4cd0',
          votingPower: 35739,
          proposerPriority: 'function' } ] } }
});
```

### listWallets

```js
const stream = client.listWallets({});

// output
{ code: 16,
  address: '15e9b843dc6186846f0cab5ba3d845993e1c738b' }
```

### loadFile

```js
const stream = client.loadFile({ hash: 'fcfcd21b15c053e630ad344bd4b8a5db242f9b30' });

// output
{ code: 8, chunk: Uint8Array [ 94 ] }
```

### loadWallet

```js
const result = await client.loadWallet({ address: 'f844907f2b46f8ca1fd46b111447bff634e890b7',
  passphrase: 'Berkshire' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 19, token: 'transmitting' }
});
```

### process

```js
const stream = client.process({ verifyTx:
   { tx:
      { from: '80ecb690978f14857c111ff8721de970e97f770e',
        nonce: 2991,
        signature: Uint8Array [ 14 ],
        chainId: 56441,
        signatures:
         [ { key: Uint8Array [ 249 ], value: Uint8Array [ 86 ] },
           { key: Uint8Array [ 20 ], value: Uint8Array [ 193 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 9, address: 1 } } },
     sender:
      { balance: '408',
        nonce: 42212,
        numTxs: 65939,
        address: 'ff6a89f534c57fb20ed9278980256de7fcb9f78a',
        pk: Uint8Array [ 250 ],
        type: { pk: 1, hash: 15, address: 1 },
        moniker: 'Belize Dollar',
        context:
         { genesisTx: 'Cotton',
           renaissanceTx: 'parse',
           genesisTime: '2019-01-22T03:29:17.491Z',
           renaissanceTime: '2019-01-22T03:29:17.491Z' },
        migratedTo: 'generate',
        migratedFrom: [ 'Customer', 'Organic' ],
        numAssets: 70408,
        stake:
         { totalStakes: '88541',
           totalUnstakes: '72715',
           totalReceivedStakes: '97286',
           recentStakes:
            { items:
               [ { type_url: 'reintermediate', value: Uint8Array [ 203 ] },
                 { type_url: 'Table', value: Uint8Array [ 178 ] } ],
              typeUrl: 'Books',
              maxItems: 65622,
              circular: undefined,
              fifo: undefined },
           recentReceivedStakes:
            { items:
               [ { type_url: 'New Mexico', value: Uint8Array [ 237 ] },
                 { type_url: 'Synergized', value: Uint8Array [ 254 ] } ],
              typeUrl: 'ADP',
              maxItems: 12236,
              circular: undefined,
              fifo: undefined } },
        data:
         { type: 'WalletType', value: { pk: 1, hash: 2, address: 0 } } },
     states:
      [ { balance: '1162',
          nonce: 46607,
          numTxs: 28248,
          address: 'e13a47640467776fb9863aac9fe93e1b5539fc24',
          pk: Uint8Array [ 19 ],
          type: { pk: 0, hash: 1, address: 0 },
          moniker: 'mint green',
          context:
           { genesisTx: 'invoice',
             renaissanceTx: 'Guinea Franc',
             genesisTime: '2019-01-22T03:29:17.491Z',
             renaissanceTime: '2019-01-22T03:29:17.491Z' },
          migratedTo: 'turquoise',
          migratedFrom: [ 'Rustic', 'red' ],
          numAssets: 47896,
          stake:
           { totalStakes: '10697',
             totalUnstakes: '87347',
             totalReceivedStakes: '51985',
             recentStakes:
              { items:
                 [ { type_url: 'Ergonomic Plastic Chair',
                     value: Uint8Array [ 130 ] },
                   { type_url: 'engineer', value: Uint8Array [ 199 ] } ],
                typeUrl: 'index',
                maxItems: 53040,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'Dominica', value: Uint8Array [ 232 ] },
                   { type_url: 'Inlet', value: Uint8Array [ 21 ] } ],
                typeUrl: 'Salad',
                maxItems: 35167,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 1, hash: 7, address: 1 } } },
        { balance: '39919',
          nonce: 43828,
          numTxs: 57984,
          address: 'c4bbd1ebc510a2a36deead3681a76905a190f631',
          pk: Uint8Array [ 30 ],
          type: { pk: 1, hash: 14, address: 0 },
          moniker: 'Assurance',
          context:
           { genesisTx: 'circuit',
             renaissanceTx: 'Security',
             genesisTime: '2019-01-22T03:29:17.492Z',
             renaissanceTime: '2019-01-22T03:29:17.492Z' },
          migratedTo: 'Auto Loan Account',
          migratedFrom: [ 'Communications', 'Fresh' ],
          numAssets: 65449,
          stake:
           { totalStakes: '8673',
             totalUnstakes: '40245',
             totalReceivedStakes: '97463',
             recentStakes:
              { items:
                 [ { type_url: 'Wooden', value: Uint8Array [ 12 ] },
                   { type_url: 'Implementation', value: Uint8Array [ 219 ] } ],
                typeUrl: 'zero defect',
                maxItems: 13022,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'Sleek Wooden Mouse', value: Uint8Array [ 87 ] },
                   { type_url: 'algorithm', value: Uint8Array [ 199 ] } ],
                typeUrl: 'moderator',
                maxItems: 77707,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 0, hash: 15, address: 0 } } } ] } });

// output
{ verifyTx: { code: 31 } }
```

### processOne

```js
const result = await client.processOne({ verifyTx:
   { tx:
      { from: '3c0bca5334296cc57ece8840bb315ce5cea796d1',
        nonce: 86544,
        signature: Uint8Array [ 209 ],
        chainId: 3993,
        signatures:
         [ { key: Uint8Array [ 8 ], value: Uint8Array [ 102 ] },
           { key: Uint8Array [ 107 ], value: Uint8Array [ 226 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 1, hash: 13, address: 1 } } },
     sender:
      { balance: '80185',
        nonce: 10793,
        numTxs: 3339,
        address: '7bb17ddb63b8b90480e843e133345a4a31b93619',
        pk: Uint8Array [ 133 ],
        type: { pk: 1, hash: 14, address: 0 },
        moniker: 'Fully-configurable',
        context:
         { genesisTx: 'reboot',
           renaissanceTx: 'red',
           genesisTime: '2019-01-22T03:29:17.492Z',
           renaissanceTime: '2019-01-22T03:29:17.492Z' },
        migratedTo: 'Palestinian Territory',
        migratedFrom: [ 'Reverse-engineered', 'Cambridgeshire' ],
        numAssets: 99455,
        stake:
         { totalStakes: '74843',
           totalUnstakes: '35561',
           totalReceivedStakes: '53775',
           recentStakes:
            { items:
               [ { type_url: 'withdrawal', value: Uint8Array [ 62 ] },
                 { type_url: 'withdrawal', value: Uint8Array [ 239 ] } ],
              typeUrl: 'compress',
              maxItems: 27539,
              circular: undefined,
              fifo: undefined },
           recentReceivedStakes:
            { items:
               [ { type_url: 'microchip', value: Uint8Array [ 184 ] },
                 { type_url: 'world-class', value: Uint8Array [ 173 ] } ],
              typeUrl: 'Practical Plastic Towels',
              maxItems: 80114,
              circular: undefined,
              fifo: undefined } },
        data:
         { type: 'WalletType', value: { pk: 1, hash: 9, address: 0 } } },
     states:
      [ { balance: '89933',
          nonce: 94218,
          numTxs: 25628,
          address: 'c3195e4bac214122fc2757aaa385c6450e1762c9',
          pk: Uint8Array [ 250 ],
          type: { pk: 0, hash: 1, address: 1 },
          moniker: 'Refined',
          context:
           { genesisTx: 'bypassing',
             renaissanceTx: 'deposit',
             genesisTime: '2019-01-22T03:29:17.493Z',
             renaissanceTime: '2019-01-22T03:29:17.493Z' },
          migratedTo: 'Grocery',
          migratedFrom: [ 'Salad', 'challenge' ],
          numAssets: 10398,
          stake:
           { totalStakes: '18825',
             totalUnstakes: '25224',
             totalReceivedStakes: '36470',
             recentStakes:
              { items:
                 [ { type_url: 'hack', value: Uint8Array [ 40 ] },
                   { type_url: 'navigating', value: Uint8Array [ 94 ] } ],
                typeUrl: 'Granite',
                maxItems: 66628,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'red', value: Uint8Array [ 103 ] },
                   { type_url: 'transmit', value: Uint8Array [ 62 ] } ],
                typeUrl: 'card',
                maxItems: 33993,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 1, hash: 0, address: 1 } } },
        { balance: '94357',
          nonce: 11721,
          numTxs: 48777,
          address: '45f98c74260b4779a52b307072b616a255f38877',
          pk: Uint8Array [ 116 ],
          type: { pk: 1, hash: 6, address: 0 },
          moniker: 'SCSI',
          context:
           { genesisTx: 'multi-byte',
             renaissanceTx: 'Metical',
             genesisTime: '2019-01-22T03:29:17.493Z',
             renaissanceTime: '2019-01-22T03:29:17.493Z' },
          migratedTo: 'Cambridgeshire',
          migratedFrom: [ 'Industrial', 'Unbranded' ],
          numAssets: 74380,
          stake:
           { totalStakes: '72980',
             totalUnstakes: '46338',
             totalReceivedStakes: '89589',
             recentStakes:
              { items:
                 [ { type_url: 'compressing', value: Uint8Array [ 11 ] },
                   { type_url: 'payment', value: Uint8Array [ 235 ] } ],
                typeUrl: 'Bedfordshire',
                maxItems: 36952,
                circular: undefined,
                fifo: undefined },
             recentReceivedStakes:
              { items:
                 [ { type_url: 'Philippines', value: Uint8Array [ 122 ] },
                   { type_url: 'Rapids', value: Uint8Array [ 82 ] } ],
                typeUrl: 'Credit Card Account',
                maxItems: 22394,
                circular: undefined,
                fifo: undefined } },
          data:
           { type: 'WalletType', value: { pk: 1, hash: 13, address: 0 } } } ] } });

// response is a stream
result.on('data', data => {
  // response data format
  { verifyTx: { code: 26 } }
});
```

### recoverWallet

```js
const result = await client.recoverWallet({ data: Uint8Array [ 207 ],
  type: { pk: 1, hash: 9, address: 0 },
  passphrase: 'Practical',
  moniker: 'Executive' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 30,
  token: 'navigate',
  wallet:
   { type: { pk: 0, hash: 2, address: 0 },
     sk: Uint8Array [ 58 ],
     pk: Uint8Array [ 90 ],
     address: '2f20b8b83815f28c70791c5a7204e5116b9e535f' } }
});
```

### removeWallet

```js
const result = await client.removeWallet({ address: '15a55d1737ff8fdd1fde409579878cd65b6c12fb' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 0 }
});
```

### search

```js
const result = await client.search({ key: 'deposit', value: 'utilize' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 21,
  txs:
   [ { tx:
        { from: 'b53ab3d0d0bbd367aba4a3bbd4a2ce2f71a9396b',
          nonce: 29907,
          signature: Uint8Array [ 101 ],
          chainId: 65265,
          signatures:
           [ { key: Uint8Array [ 150 ], value: Uint8Array [ 143 ] },
             { key: Uint8Array [ 208 ], value: Uint8Array [ 137 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 2, address: 1 } } },
       height: 55715,
       index: 52570,
       hash: 'cd6532f075ef87bcccd737b093a8a091f7067e3a',
       tags:
        [ { key: Uint8Array [ 44 ], value: Uint8Array [ 102 ] },
          { key: Uint8Array [ 209 ], value: Uint8Array [ 9 ] } ] },
     { tx:
        { from: '5bd2b69820c1af9e073515aa8d9c93199eee85b9',
          nonce: 28441,
          signature: Uint8Array [ 241 ],
          chainId: 9231,
          signatures:
           [ { key: Uint8Array [ 183 ], value: Uint8Array [ 131 ] },
             { key: Uint8Array [ 79 ], value: Uint8Array [ 1 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 7, address: 1 } } },
       height: 46161,
       index: 57987,
       hash: 'ae822eff9ec9e866f6b8625ea4d89bc59763cea7',
       tags:
        [ { key: Uint8Array [ 232 ], value: Uint8Array [ 61 ] },
          { key: Uint8Array [ 221 ], value: Uint8Array [ 135 ] } ] } ] }
});
```

### sendTx

```js
const result = await client.sendTx({ tx:
   { from: 'c1562ba7dba86fbf9450bf0260c688d7423d0a60',
     nonce: 13074,
     signature: Uint8Array [ 129 ],
     chainId: 6278,
     signatures:
      [ { key: Uint8Array [ 98 ], value: Uint8Array [ 122 ] },
        { key: Uint8Array [ 102 ], value: Uint8Array [ 249 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 13, address: 0 } } },
  wallet:
   { type: { pk: 1, hash: 6, address: 0 },
     sk: Uint8Array [ 25 ],
     pk: Uint8Array [ 146 ],
     address: '31c0057fab6d816b31f822aa48ea9f0ce36b3cb4' },
  token: 'deposit',
  commit: undefined });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 20, hash: 'e12019f0cca8348c78e5279fa0f4800d93dd444c' }
});
```

### storeFile

```js
const result = await client.storeFile({ chunk: Uint8Array [ 134 ] });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 500, hash: '9fc74cb79d71274b4c94838672464511ec1abd5b' }
});
```

### subscribe

```js
const stream = client.subscribe({ type: 24, filter: 'silver' });

// output
{ topic: 'Fantastic Fresh Towels' }
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
