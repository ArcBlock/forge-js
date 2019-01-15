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
      { from: '42d47d2aac48e25685e102f6c5da7350e6072b43',
        nonce: 19603,
        signature: Uint8Array [ 68 ],
        chainId: 2761,
        signatures:
         [ { key: Uint8Array [ 55 ], value: Uint8Array [ 85 ] },
           { key: Uint8Array [ 184 ], value: Uint8Array [ 253 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 1, hash: 2, address: 1 } } },
     sender:
      { balance: '6795',
        nonce: 84991,
        numTxs: 14575,
        address: '144d8bb9ee33fa488fa9581a6bf9f372787eae90',
        pk: Uint8Array [ 130 ],
        type: { pk: 1, hash: 14, address: 0 },
        moniker: 'invoice',
        role: 1,
        genesisTx: 'yellow',
        renaissanceTx: 'zero administration Books Home Loan Account',
        genesisTime: '2019-01-15T03:34:05.227Z',
        renaissanceTime: '2019-01-15T03:34:05.227Z',
        migratedTo: 'Cotton',
        migratedFrom:
         [ 'Checking Account Indian Rupee Ngultrum hack',
           'virtual deposit' ],
        power: 91253,
        numAssets: 61678,
        data:
         { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } } },
     states:
      [ { balance: '26335',
          nonce: 22604,
          numTxs: 50588,
          address: '1a28e8b865a6dc02f45e2b712ec327c1ab741836',
          pk: Uint8Array [ 133 ],
          type: { pk: 0, hash: 0, address: 1 },
          moniker: 'matrix Personal Loan Account calculating',
          role: 1,
          genesisTx: 'Bedfordshire Nevada monitor',
          renaissanceTx: 'client-server yellow neural',
          genesisTime: '2019-01-15T03:34:05.227Z',
          renaissanceTime: '2019-01-15T03:34:05.227Z',
          migratedTo: 'compress Buckinghamshire',
          migratedFrom: [ 'Rial Omani', 'Avon multi-state matrix' ],
          power: 41399,
          numAssets: 90864,
          data:
           { type: 'WalletType', value: { pk: 0, hash: 1, address: 1 } } },
        { balance: '95207',
          nonce: 29459,
          numTxs: 42471,
          address: '2401f05d54681cbf7d1ab73d73d5b188a167cd63',
          pk: Uint8Array [ 237 ],
          type: { pk: 0, hash: 2, address: 1 },
          moniker: 'bypass copying Personal Loan Account',
          role: 0,
          genesisTx: 'vertical SMTP Human',
          renaissanceTx: 'virtual Re-engineered',
          genesisTime: '2019-01-15T03:34:05.227Z',
          renaissanceTime: '2019-01-15T03:34:05.227Z',
          migratedTo: 'Distributed',
          migratedFrom: [ 'Implementation Lek', 'primary lime Small Plastic Hat' ],
          power: 68013,
          numAssets: 56500,
          data:
           { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } } ] } });

// response is a stream
result.on('data', data => {
  // response data format
  { verifyTx: { code: 20 } }
});
```

### process

```js
const stream = client.process({ verifyTx:
   { tx:
      { from: 'fa60b4d06ada9c259798a715643ebc9390181b1b',
        nonce: 15221,
        signature: Uint8Array [ 225 ],
        chainId: 82459,
        signatures:
         [ { key: Uint8Array [ 109 ], value: Uint8Array [ 52 ] },
           { key: Uint8Array [ 41 ], value: Uint8Array [ 182 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 2, address: 1 } } },
     sender:
      { balance: '32926',
        nonce: 65678,
        numTxs: 88993,
        address: 'a09b52f37d58a26998fb75e8d6d08c266919ad4e',
        pk: Uint8Array [ 3 ],
        type: { pk: 0, hash: 7, address: 1 },
        moniker: 'Sleek Buckinghamshire Massachusetts',
        role: 0,
        genesisTx: 'Refined Soft Towels program',
        renaissanceTx: 'Hat',
        genesisTime: '2019-01-15T03:34:05.228Z',
        renaissanceTime: '2019-01-15T03:34:05.228Z',
        migratedTo: 'Cambridgeshire Fresh bypass',
        migratedFrom:
         [ 'communities Rubber Utah',
           'Sausages clicks-and-mortar Rustic' ],
        power: 84979,
        numAssets: 44462,
        data:
         { type: 'WalletType', value: { pk: 0, hash: 9, address: 0 } } },
     states:
      [ { balance: '13724',
          nonce: 33514,
          numTxs: 94754,
          address: '6ee035ffddf806c9102704757e91643ef339d6e4',
          pk: Uint8Array [ 83 ],
          type: { pk: 0, hash: 1, address: 0 },
          moniker: 'withdrawal Avon',
          role: 1,
          genesisTx: 'Manat South Dakota',
          renaissanceTx: 'payment',
          genesisTime: '2019-01-15T03:34:05.229Z',
          renaissanceTime: '2019-01-15T03:34:05.229Z',
          migratedTo: 'SDD systemic',
          migratedFrom:
           [ 'panel Turkish Lira Belgium',
             'lime Tenge Unbranded Cotton Chips' ],
          power: 7515,
          numAssets: 8189,
          data:
           { type: 'WalletType', value: { pk: 0, hash: 0, address: 1 } } },
        { balance: '56684',
          nonce: 89388,
          numTxs: 38408,
          address: '91d694e8b8c5a12ebc5474f1a81aa9d8ecb3f9da',
          pk: Uint8Array [ 34 ],
          type: { pk: 1, hash: 14, address: 1 },
          moniker: 'B2B Home',
          role: 0,
          genesisTx: 'Egypt',
          renaissanceTx: 'markets cross-platform Berkshire',
          genesisTime: '2019-01-15T03:34:05.229Z',
          renaissanceTime: '2019-01-15T03:34:05.229Z',
          migratedTo: 'Grass-roots Ball Cheese',
          migratedFrom: [ 'Infrastructure', 'grid-enabled quantifying' ],
          power: 93721,
          numAssets: 50176,
          data:
           { type: 'WalletType', value: { pk: 1, hash: 1, address: 1 } } } ] } });

// output
{ verifyTx: { code: 21 } }
```

### subscribe

```js
const stream = client.subscribe({ type: 22, filter: 'Metal' });

// output
{ topic: 'Generic Passage' }
```

### createTx

```js
const result = await client.createTx({ itx:
   { type: 'WalletType', value: { pk: 0, hash: 2, address: 0 } },
  from: '0a5bde34a38236a4ad31e08a1b02d54ebf28b0da',
  nonce: 51946,
  wallet:
   { type: { pk: 0, hash: 0, address: 0 },
     sk: Uint8Array [ 149 ],
     pk: Uint8Array [ 175 ],
     address: '628b61217036f432043a1bef2faec236b39072f7' },
  token: 'monitor Ohio' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 1,
  tx:
   { from: 'c1d5379b54677ce25a9eb1a33d27711255ea77b5',
     nonce: 82516,
     signature: Uint8Array [ 54 ],
     chainId: 11654,
     signatures:
      [ { key: Uint8Array [ 104 ], value: Uint8Array [ 249 ] },
        { key: Uint8Array [ 255 ], value: Uint8Array [ 101 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 14, address: 0 } } } }
});
```

### sendTx

```js
const result = await client.sendTx({ tx:
   { from: '5374d5934478e666618c64e979f8f2724be59845',
     nonce: 31176,
     signature: Uint8Array [ 36 ],
     chainId: 35951,
     signatures:
      [ { key: Uint8Array [ 112 ], value: Uint8Array [ 119 ] },
        { key: Uint8Array [ 199 ], value: Uint8Array [ 161 ] } ],
     itx:
      { type: 'WalletType', value: { pk: 1, hash: 9, address: 1 } } },
  wallet:
   { type: { pk: 1, hash: 7, address: 0 },
     sk: Uint8Array [ 58 ],
     pk: Uint8Array [ 163 ],
     address: '1de34b04db0eff4b173ec10deffaeec91d9903ec' },
  token: 'Money Market Account Sports',
  commit: undefined });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 20, hash: '0f11ba64b2d1ec2b1300dea17de04f7e95a50fc3' }
});
```

### getTx

```js
const stream = client.getTx({ hash: '25bef61f779f660629a02d91c984f9e1f96c6fe1' });

// output
{ code: 7,
  info:
   { tx:
      { from: 'ee434fabe063b1c3d669e8e947b20b7beca0c71b',
        nonce: 76285,
        signature: Uint8Array [ 126 ],
        chainId: 93051,
        signatures:
         [ { key: Uint8Array [ 248 ], value: Uint8Array [ 197 ] },
           { key: Uint8Array [ 137 ], value: Uint8Array [ 28 ] } ],
        itx:
         { type: 'WalletType', value: { pk: 0, hash: 6, address: 0 } } },
     height: 80831,
     index: 3412,
     hash: 'a464995ace344fbd5811e8f91af801addd3e20a0',
     tags:
      [ { key: Uint8Array [ 106 ], value: Uint8Array [ 151 ] },
        { key: Uint8Array [ 153 ], value: Uint8Array [ 27 ] } ] } }
```

### getBlock

```js
const stream = client.getBlock({ height: 30705 });

// output
{ code: 23,
  block:
   { height: 1861,
     numTxs: 67384,
     time: '2019-01-15T03:34:05.230Z',
     appHash: 'bea6d7e826a65dd6b1f647e8dd2ef3f9ea1fe98c',
     proposer: '70c020df4641b66b334f0e38291f282da50aabf1',
     txs:
      [ { from: 'bbaf91990eda92230d4c3c1849c308596435e4c2',
          nonce: 23902,
          signature: Uint8Array [ 73 ],
          chainId: 25442,
          signatures:
           [ { key: Uint8Array [ 27 ], value: Uint8Array [ 165 ] },
             { key: Uint8Array [ 190 ], value: Uint8Array [ 243 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 0, address: 0 } } },
        { from: '1b5164cf4a2131bc51c4330ee0be7d0837eaaa9f',
          nonce: 62688,
          signature: Uint8Array [ 113 ],
          chainId: 49207,
          signatures:
           [ { key: Uint8Array [ 202 ], value: Uint8Array [ 226 ] },
             { key: Uint8Array [ 246 ], value: Uint8Array [ 210 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 9, address: 0 } } } ] } }
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  { code: 23,
  info:
   { id: 'Aruban Guilder Representative Soft',
     network: 'JBOD',
     moniker: 'Fantastic EXE',
     version: 'Practical Plastic Table Baby Guadeloupe',
     synced: undefined,
     appHash: '203a99e728f015e63284365c65e3c5a815571d68',
     blockHash: Uint8Array [ 30 ],
     blockHeight: 40975,
     blockTime: '2019-01-15T03:34:05.233Z',
     address: '286efed39627e659ab0a26c2c7817e9f52e43d88',
     votingPower: 11272 } }
});
```

### search

```js
const result = await client.search({ key: 'grey hacking Fresh',
  value: 'Bulgaria Director bluetooth' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 22,
  txs:
   [ { tx:
        { from: '483db6bfdfd6495b1d385547ec499b51b457482e',
          nonce: 85707,
          signature: Uint8Array [ 79 ],
          chainId: 10081,
          signatures:
           [ { key: Uint8Array [ 142 ], value: Uint8Array [ 218 ] },
             { key: Uint8Array [ 151 ], value: Uint8Array [ 95 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 1, hash: 13, address: 0 } } },
       height: 52209,
       index: 32989,
       hash: 'e611f90dda6e53ab3093a435093654fdb7870e52',
       tags:
        [ { key: Uint8Array [ 84 ], value: Uint8Array [ 227 ] },
          { key: Uint8Array [ 144 ], value: Uint8Array [ 1 ] } ] },
     { tx:
        { from: 'f8caea5395a6a684bb78ae7bdab59ee1658211c3',
          nonce: 67488,
          signature: Uint8Array [ 215 ],
          chainId: 55550,
          signatures:
           [ { key: Uint8Array [ 130 ], value: Uint8Array [ 92 ] },
             { key: Uint8Array [ 187 ], value: Uint8Array [ 213 ] } ],
          itx:
           { type: 'WalletType', value: { pk: 0, hash: 15, address: 1 } } },
       height: 74484,
       index: 64599,
       hash: 'a477db370ca7faeca72a86089e9318de8c6b713a',
       tags:
        [ { key: Uint8Array [ 60 ], value: Uint8Array [ 249 ] },
          { key: Uint8Array [ 80 ], value: Uint8Array [ 42 ] } ] } ] }
});
```

### createWallet

```js
const result = await client.createWallet({ passphrase: 'Forward Incredible',
  type: { pk: 1, hash: 1, address: 0 },
  moniker: 'Cheese incubate Money Market Account' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 5,
  token: 'compress',
  wallet:
   { type: { pk: 1, hash: 2, address: 0 },
     sk: Uint8Array [ 224 ],
     pk: Uint8Array [ 58 ],
     address: '29124dee7e82c29725a0d0be5bdfb6d637348504' } }
});
```

### loadWallet

```js
const result = await client.loadWallet({ address: '5a1d84b0a0dadeca930e55be9482d13c83668bad',
  passphrase: 'Interactions' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 18, token: 'Antigua and Barbuda' }
});
```

### recoverWallet

```js
const result = await client.recoverWallet({ data: Uint8Array [ 152 ],
  type: { pk: 1, hash: 13, address: 1 },
  passphrase: 'e-commerce Rubber',
  moniker: 'lavender' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 16,
  token: 'Field product budgetary management',
  wallet:
   { type: { pk: 1, hash: 6, address: 0 },
     sk: Uint8Array [ 25 ],
     pk: Uint8Array [ 253 ],
     address: '8a735044e9fa31c0525f4235ad6b61f3ae1eccc0' } }
});
```

### listWallets

```js
const stream = client.listWallets({});

// output
{ code: 2, address: '50784782cfbf3addbbaafd286d7d57b99c36d236' }
```

### removeWallet

```js
const result = await client.removeWallet({ address: 'b32607b7a6c86368b67f27554de6b33dbcb2f0d5' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 8 }
});
```

### getAccountState

```js
const stream = client.getAccountState({ address: '79aceac565873c83e4e1babcc38c34d70b375eda',
  key: 'Rwanda Franc',
  appHash: '129748ed360295f87b1752906cf29305864a1759' });

// output
{ code: 24,
  state:
   { balance: '33321',
     nonce: 23862,
     numTxs: 99503,
     address: '26fadea2d6c823921343bde9177d38b55f318310',
     pk: Uint8Array [ 226 ],
     type: { pk: 1, hash: 6, address: 0 },
     moniker: 'Liaison orchid deposit',
     role: 1,
     genesisTx: 'Tasty digital Executive',
     renaissanceTx: 'withdrawal',
     genesisTime: '2019-01-15T03:34:05.235Z',
     renaissanceTime: '2019-01-15T03:34:05.235Z',
     migratedTo: 'conglomeration FTP override',
     migratedFrom: [ 'Monitored', 'XSS' ],
     power: 93556,
     numAssets: 84489,
     data:
      { type: 'WalletType', value: { pk: 0, hash: 7, address: 1 } } } }
```

### getAssetState

```js
const stream = client.getAssetState({ address: '0d9f2a29eb35d3d69e58766b89d1d69dd582f68f',
  key: 'Shoes',
  appHash: 'e077d59e96fda27c577fb7c6acf9a2c0bea2fd8a' });

// output
{ code: 17,
  state:
   { address: '90accea70953e6f408b854952516e299dde99d2f',
     owner: 'Borders Sri Lanka',
     moniker: 'Grass-roots open system',
     genesisTx: 'Analyst',
     renaissanceTx: 'Generic Chair Planner',
     genesisTime: '2019-01-15T03:34:05.235Z',
     renaissanceTime: '2019-01-15T03:34:05.235Z',
     data:
      { type: 'WalletType', value: { pk: 1, hash: 7, address: 0 } } } }
```

### getChannelState

```js
const stream = client.getChannelState({ address: '5657b890d072bdd0405480153f2398bc43a3fd5e',
  key: 'networks',
  appHash: '74809c8111b66d0615447fcced96cbb439a2e53b' });

// output
{ code: 26,
  state:
   { address: 'a731de266eaa29547baf83119b5ca273860095c0',
     totalConfirmed: 19119,
     maxWaiting: 5472,
     maxConfirmed: 90513,
     waiting:
      [ { tx:
           { from: '7c12cd025e6dc2338e8026e73b453193a19e51a5',
             nonce: 60018,
             signature: Uint8Array [ 66 ],
             chainId: 58666,
             signatures:
              [ { key: Uint8Array [ 37 ], value: Uint8Array [ 132 ] },
                { key: Uint8Array [ 201 ], value: Uint8Array [ 141 ] } ],
             itx:
              { type: 'WalletType', value: { pk: 0, hash: 15, address: 1 } } },
          height: 5459,
          index: 40704,
          hash: '8a14f73cd6783edd8584e04158b8cf81b72a926d',
          tags:
           [ { key: Uint8Array [ 228 ], value: Uint8Array [ 191 ] },
             { key: Uint8Array [ 81 ], value: Uint8Array [ 242 ] } ] },
        { tx:
           { from: '8255a63cd78048ecc9625624cf5099731e85257d',
             nonce: 96883,
             signature: Uint8Array [ 91 ],
             chainId: 7384,
             signatures:
              [ { key: Uint8Array [ 148 ], value: Uint8Array [ 206 ] },
                { key: Uint8Array [ 24 ], value: Uint8Array [ 229 ] } ],
             itx:
              { type: 'WalletType', value: { pk: 0, hash: 7, address: 0 } } },
          height: 38306,
          index: 82268,
          hash: '965f0eb5d771d7ea12d430435d50f3186e1bc700',
          tags:
           [ { key: Uint8Array [ 128 ], value: Uint8Array [ 98 ] },
             { key: Uint8Array [ 159 ], value: Uint8Array [ 125 ] } ] } ],
     confirmed:
      [ { code: 4, hash: '6afc3b9126024d9479bd7293862b516a44acfdf8' },
        { code: 9, hash: '820789f691a78666537ad91c9fc1d8753681e4bb' } ],
     genesisTx: 'withdrawal',
     renaissanceTx: 'Hawaii North Dakota',
     genesisTime: '2019-01-15T03:34:05.236Z',
     renaissanceTime: '2019-01-15T03:34:05.236Z',
     data:
      { type: 'WalletType', value: { pk: 1, hash: 13, address: 0 } } } }
```

### getForgeState

```js
const result = await client.getForgeState({ key: 'Auto Loan Account Netherlands',
  appHash: 'b4453a6ccbcdd17d6d1f87e9e6969bc4f72c2773' });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 21,
  state:
   { latestBlock: 7702,
     latestAppHash: Uint8Array [ 188 ],
     consensusEngine: 'parsing solid state Chips',
     storageEngine: 'orchid Manat',
     tasks:
      { item:
         [ { type: 12,
             dataHash: 'Jamaican Dollar',
             actions: [ undefined, undefined ] },
           { type: 13,
             dataHash: 'info-mediaries',
             actions: [ undefined, undefined ] } ] },
     data:
      { type: 'WalletType', value: { pk: 1, hash: 2, address: 1 } } } }
});
```

### storeFile

```js
const result = await client.storeFile({ chunk: Uint8Array [ 56 ] });

// response is a stream
result.on('data', data => {
  // response data format
  { code: 0, hash: '7a48c4dee9a3be01ac744500be598b439c108fa3' }
});
```

### loadFile

```js
const stream = client.loadFile({ hash: '92461887a9e05170e7bbe64f096ba086416f6329' });

// output
{ code: 6, chunk: Uint8Array [ 3 ] }
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
