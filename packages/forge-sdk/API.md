# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [TopicType](#topictype)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [UpgradeType](#upgradetype)
  * [UpgradeAction](#upgradeaction)
  * [StateType](#statetype)
  * [StakeType](#staketype)
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
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listWallet](#listwallet)
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
  * [unsubscribe](#unsubscribe)


## Enums

### StatusCode

```js
{
  OK: 0,
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
  INVALID_TX_SIZE: 36,
  FORBIDDEN: 403,
  INTERNAL: 500
}
```

### TopicType

```js
{
  TRANSFER: 0,
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
  STAKE_STATE: 133
}
```

### KeyType

```js
{
  ED25519: 0,
  SECP256K1: 1
}
```

### HashType

```js
{
  KECCAK: 0,
  SHA3: 1,
  SHA2: 2,
  KECCAK_384: 6,
  SHA3_384: 7,
  SHA2_384: 9,
  KECCAK_512: 13,
  SHA3_512: 14,
  SHA2_512: 15
}
```

### EncodingType

```js
{
  BASE16: 0,
  BASE58: 1
}
```

### UpgradeType

```js
{
  CONFIG_APP: 0,
  CONFIG_FORGE: 1,
  CONFIG_DFS: 2,
  CONFIG_CONSENSUS: 3,
  CONFIG_P2P: 4,
  EXE_APP: 10,
  EXE_FORGE: 11,
  EXE_DFS: 12,
  EXE_CONSENSUS: 13,
  EXE_P2P: 14
}
```

### UpgradeAction

```js
{
  VERIFY: 0,
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
  DROP_ADDRESS_BOOK: 50
}
```

### StateType

```js
{
  STATE_ACCOUNT: 0,
  STATE_ASSET: 1,
  STATE_CHANNEL: 2,
  STATE_FORGE: 3,
  STATE_STAKE: 4
}
```

### StakeType

```js
{
  STAKE_NODE: 0,
  STAKE_USER: 1,
  STAKE_ASSET: 2,
  STAKE_CHAIN: 3
}
```

### SupportedTxs

```js
[
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
  'UpdateAssetTx'
]
```

### SupportedStakes

```js
[
  'StakeForNode',
  'stakeForAsset',
  'stakeForChain',
  'stakeForUser'
]
```


## RPC Methods

> RPC response contains an `code` field, when `code=0` means success
> Binary data in RPC response are `UInt8Array` instance and can be safely encoded to base64 string

### createTx

```js
const result = await client.createTx({
  itx: {
    type: 'WalletType',
    value: {
      pk: 0,
      hash: 14,
      address: 0
    }
  },
  from: '5715990c46bdf77451e78a8aa43d9f0932bd64d9',
  nonce: 90831,
  wallet: {
    type: {
      pk: 1,
      hash: 15,
      address: 1
    },
    sk: Uint8Array [
      85
    ],
    pk: Uint8Array [
      220
    ],
    address: '2cf92a8fbf398f1207a18e3b789647acd1409e69'
  },
  token: 'Avon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  tx: {
    from: 'dda6d617d697b8e9047376041c44f2515b3e02a0',
    nonce: 19789,
    signature: Uint8Array [
      55
    ],
    chainId: 92814,
    signatures: [
      {
        key: Uint8Array [
          127
        ],
        value: Uint8Array [
          228
        ]
      },
      {
        key: Uint8Array [
          30
        ],
        value: Uint8Array [
          191
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 15,
        address: 1
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'partnerships',
  type: {
    pk: 0,
    hash: 7,
    address: 1
  },
  moniker: 'JBOD'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 29,
  token: 'matrix',
  wallet: {
    type: {
      pk: 0,
      hash: 15,
      address: 1
    },
    sk: Uint8Array [
      133
    ],
    pk: Uint8Array [
      232
    ],
    address: '11054150a7b973cc7c225ba168983f1b2ae23bb1'
  }
}
});
```

### declareNode

```js
const result = await client.declareNode({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 0
    },
    sk: Uint8Array [
      238
    ],
    pk: Uint8Array [
      17
    ],
    address: 'c76f7170ade710c1542f0f62ef011206bbe898fc'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '02113b90158d8dba6f3248b668807ed92148e9fe',
  keys: [
    'optimize',
    'Personal Loan Account'
  ],
  appHash: 'fb3e4f59f16bf9ec64eeb3af4d05c631a03841d4'
});

// output
{
  code: 0,
  state: {
    balance: '21159',
    nonce: 80803,
    numTxs: 74967,
    address: '2ed83d5dfecd79f4b1ca5951416796975e1ca52e',
    pk: Uint8Array [
      41
    ],
    type: {
      pk: 0,
      hash: 13,
      address: 0
    },
    moniker: 'Director',
    context: {
      genesisTx: 'deploy',
      renaissanceTx: 'Wallis and Futuna',
      genesisTime: '2019-01-29T23:36:50.151Z',
      renaissanceTime: '2019-01-29T23:36:50.151Z'
    },
    migratedTo: [
      'deposit',
      'systems'
    ],
    migratedFrom: [
      'Engineer',
      'Cambridgeshire'
    ],
    numAssets: 86829,
    stake: {
      totalStakes: '24887',
      totalUnstakes: '92248',
      totalReceivedStakes: '53503',
      recentStakes: {
        items: [
          {
            type_url: 'microchip',
            value: Uint8Array [
              182
            ]
          },
          {
            type_url: 'hub',
            value: Uint8Array [
              255
            ]
          }
        ],
        typeUrl: 'Seychelles Rupee',
        maxItems: 36156,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          {
            type_url: 'pricing structure',
            value: Uint8Array [
              39
            ]
          },
          {
            type_url: 'teal',
            value: Uint8Array [
              161
            ]
          }
        ],
        typeUrl: 'bus',
        maxItems: 49265,
        circular: undefined,
        fifo: undefined
      }
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 15,
        address: 0
      }
    }
  }
}
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '6aa4b78a45d3fad896902ac0bdb404c5962fe7ca',
  keys: [
    'transform',
    'Summit'
  ],
  appHash: 'e7c907149194228537ad20a34f318e76fb3cfd7f'
});

// output
{
  code: 35,
  state: {
    address: '29253fa100d31a9ae8f2b363f17218980fc7f65c',
    owner: 'Sri Lanka',
    moniker: 'capability',
    readonly: undefined,
    stake: {
      totalStakes: '3298',
      totalUnstakes: '11710',
      totalReceivedStakes: '63843',
      recentStakes: {
        items: [
          {
            type_url: 'Program',
            value: Uint8Array [
              245
            ]
          },
          {
            type_url: 'Ethiopian Birr',
            value: Uint8Array [
              6
            ]
          }
        ],
        typeUrl: 'Incredible Rubber Pizza',
        maxItems: 68505,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          {
            type_url: 'optimal',
            value: Uint8Array [
              26
            ]
          },
          {
            type_url: 'haptic',
            value: Uint8Array [
              235
            ]
          }
        ],
        typeUrl: 'Automotive',
        maxItems: 96037,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Granite',
      renaissanceTx: 'Bahraini Dinar',
      genesisTime: '2019-01-29T23:36:50.152Z',
      renaissanceTime: '2019-01-29T23:36:50.152Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 1
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 25396
});

// output
{
  code: 23,
  block: {
    height: 29616,
    numTxs: 27935,
    time: '2019-01-29T23:36:50.152Z',
    appHash: '6ba8cf2a9aacd0d82d3bff8287607d925da3ac97',
    proposer: 'd93aaf2b967118609d2a2cfc0e1205228743b222',
    txs: [
      {
        from: '1dda6b763a47d47b35f2f12fa74c4296688fa72d',
        nonce: 4586,
        signature: Uint8Array [
          80
        ],
        chainId: 61817,
        signatures: [
          {
            key: Uint8Array [
              48
            ],
            value: Uint8Array [
              97
            ]
          },
          {
            key: Uint8Array [
              31
            ],
            value: Uint8Array [
              185
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0
          }
        }
      },
      {
        from: '1234bdceef6b136dd8bdeb0360ac238daef0c3de',
        nonce: 17262,
        signature: Uint8Array [
          239
        ],
        chainId: 28197,
        signatures: [
          {
            key: Uint8Array [
              84
            ],
            value: Uint8Array [
              6
            ]
          },
          {
            key: Uint8Array [
              18
            ],
            value: Uint8Array [
              53
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0
          }
        }
      }
    ],
    totalTxs: 15009
  }
}
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  info: {
    id: 'circuit',
    network: 'back-end',
    moniker: 'Re-engineered',
    consensusVersion: 'scalable',
    synced: undefined,
    appHash: 'cbdd0a7d3c8429a16c7d1a5c480ec8ff2c1d81bc',
    blockHash: Uint8Array [
      98
    ],
    blockHeight: 68172,
    blockTime: '2019-01-29T23:36:50.153Z',
    address: '165fb28b98db485476efe6d18d8327a4a0ca4ae4',
    votingPower: 62311,
    totalTxs: 58392,
    version: 'AI',
    dataVersion: 'Unbranded Granite Bike',
    forgeAppsVersion: 'Program',
    supportedTxs: [
      'grid-enabled',
      'Guyana'
    ]
  }
}
});
```

### getChannelState

```js
const stream = client.getChannelState({
  address: 'ad9da7f0a48343480efbd5b3f17f769b37a5b6e0',
  keys: [
    'Buckinghamshire',
    'Computer'
  ],
  appHash: '957895ed6db9af160ddc0ce050b644b4df1284ab'
});

// output
{
  code: 35,
  state: {
    address: 'b891c13546af91ab9a9ea807b489550dd624b3a4',
    totalConfirmed: 58140,
    maxWaiting: 12369,
    maxConfirmed: 5396,
    waiting: {
      items: [
        {
          type_url: 'Buckinghamshire',
          value: Uint8Array [
            190
          ]
        },
        {
          type_url: 'JBOD',
          value: Uint8Array [
            3
          ]
        }
      ],
      typeUrl: 'Metrics',
      maxItems: 89048,
      circular: undefined,
      fifo: undefined
    },
    confirmed: {
      items: [
        {
          type_url: 'override',
          value: Uint8Array [
            148
          ]
        },
        {
          type_url: 'Guam',
          value: Uint8Array [
            30
          ]
        }
      ],
      typeUrl: 'system',
      maxItems: 27967,
      circular: undefined,
      fifo: undefined
    },
    context: {
      genesisTx: 'Colombian Peso Unidad de Valor Real',
      renaissanceTx: 'models',
      genesisTime: '2019-01-29T23:36:50.154Z',
      renaissanceTime: '2019-01-29T23:36:50.154Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0
      }
    }
  }
}
```

### getConfig

```js
const result = await client.getConfig({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  config: 'transitional'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Mozambique',
    'withdrawal'
  ],
  appHash: '3aca25243abda344273c6d4e270f3b0accf5905b'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30,
  state: {
    consensus: {
      maxBytes: 39645,
      maxGas: 45409,
      maxValidators: 86330,
      maxCandidates: 39231,
      pubKeyTypes: [
        'Tools',
        'port'
      ],
      validators: [
        {
          address: 'e6586d8467f4293f48492331040c675ce404ccd5',
          power: 67467
        },
        {
          address: '55fb880af124e8ec1cc179dc1512feac3acceb0f',
          power: 62810
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      item: [
        {
          type: 0,
          dataHash: 'Granite',
          actions: [
            undefined,
            undefined
          ]
        },
        {
          type: 13,
          dataHash: 'Cordoba Oro',
          actions: [
            undefined,
            undefined
          ]
        }
      ]
    },
    stakeSummary: {
      totalStakes: '3357',
      totalUnstakes: '21688',
      context: {
        genesisTx: 'quantify',
        renaissanceTx: 'olive',
        genesisTime: '2019-01-29T23:36:50.154Z',
        renaissanceTime: '2019-01-29T23:36:50.154Z'
      }
    },
    version: 'Investment Account',
    dataVersion: 'Licensed Fresh Chicken',
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 1
      }
    }
  }
}
});
```

### getNetInfo

```js
const result = await client.getNetInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  netInfo: {
    listening: undefined,
    listeners: [
      'card',
      'Associate'
    ],
    nPeers: 74978,
    peers: [
      {
        nodeInfo: {
          id: 'bandwidth',
          network: 'Licensed Concrete Pizza',
          version: 'Adaptive',
          moniker: 'calculate',
          ip: 'Producer',
          geoInfo: {
            city: 'analyzing',
            country: 'green',
            latitude: 47404.52,
            longitude: 22843.72
          }
        }
      },
      {
        nodeInfo: {
          id: 'Ergonomic',
          network: 'Handcrafted',
          version: 'payment',
          moniker: 'Kroon',
          ip: 'Avon',
          geoInfo: {
            city: 'Home',
            country: 'Avon',
            latitude: 97098.04,
            longitude: 15751.77
          }
        }
      }
    ]
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '9e65d61d1d753f31d8fd6b05e7bf753adfa4fdcc',
  keys: [
    'solid state',
    'Jordanian Dinar'
  ],
  appHash: '00ec1ba67950ddd258c7eb263d523fb384557d7c'
});

// output
{
  code: 30,
  state: {
    address: 'b2b389cff9092daab60c76c7e3db8afdb6503e48',
    from: 'b16fe6bd0ff45825ba8ebd9191b8b920f797dbd9',
    to: '4bddebb3f3448a99cb4de1387044ffbb65dd7da6',
    balance: '50025',
    message: 'software',
    context: {
      genesisTx: 'Refined Cotton Shoes',
      renaissanceTx: 'green',
      genesisTime: '2019-01-29T23:36:50.155Z',
      renaissanceTime: '2019-01-29T23:36:50.155Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 15,
        address: 1
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: '4801555f6ac5688616c44bc33fedd0339240f119'
});

// output
{
  code: 9,
  info: {
    tx: {
      from: '3157bd8501a8508e2fc111a430bcad484d4b1316',
      nonce: 76257,
      signature: Uint8Array [
        111
      ],
      chainId: 48298,
      signatures: [
        {
          key: Uint8Array [
            142
          ],
          value: Uint8Array [
            215
          ]
        },
        {
          key: Uint8Array [
            49
          ],
          value: Uint8Array [
            59
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 2,
          address: 1
        }
      }
    },
    height: 51571,
    index: 3319,
    hash: '4224b125a7948446ec944cb2fe010a49df0c57fa',
    tags: [
      {
        key: Uint8Array [
          83
        ],
        value: Uint8Array [
          68
        ]
      },
      {
        key: Uint8Array [
          90
        ],
        value: Uint8Array [
          93
        ]
      }
    ]
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 71209
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 19,
  unconfirmedTxs: {
    nTxs: 88336,
    txs: [
      {
        from: 'c5f291c228282757a99420062ee797e331133f5b',
        nonce: 96505,
        signature: Uint8Array [
          169
        ],
        chainId: 43692,
        signatures: [
          {
            key: Uint8Array [
              61
            ],
            value: Uint8Array [
              138
            ]
          },
          {
            key: Uint8Array [
              27
            ],
            value: Uint8Array [
              153
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1
          }
        }
      },
      {
        from: 'ba109791a850bac4d1380810c010a211b12d19e2',
        nonce: 83160,
        signature: Uint8Array [
          76
        ],
        chainId: 65395,
        signatures: [
          {
            key: Uint8Array [
              9
            ],
            value: Uint8Array [
              203
            ]
          },
          {
            key: Uint8Array [
              203
            ],
            value: Uint8Array [
              205
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 2,
            address: 0
          }
        }
      }
    ]
  }
}
});
```

### getValidatorsInfo

```js
const result = await client.getValidatorsInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  validatorsInfo: {
    blockHeight: 96650,
    validators: [
      {
        address: '5aa53a8904083a1e4462eb9639726f7e1996724c',
        pubKey: {
          type: 'neural',
          data: Uint8Array [
            123
          ]
        },
        votingPower: 24957,
        proposerPriority: 'motivating',
        name: 'HTTP'
      },
      {
        address: 'e6ab9f2104eb9386440f2f96cdff6acef444abd9',
        pubKey: {
          type: 'monitor',
          data: Uint8Array [
            69
          ]
        },
        votingPower: 84723,
        proposerPriority: 'markets',
        name: 'navigating'
      }
    ]
  }
}
});
```

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 24,
  address: '436f391180b271fcf2e8afc57cbc3a0f5c2b67fc'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '771dc2f9709a12bd878d55a7375f09ddc93965af'
});

// output
{
  code: 27,
  chunk: Uint8Array [
    211
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '49c1f7673c9963e4768c2af8df550ad05004bdba',
  passphrase: 'invoice'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 28,
  token: 'Green'
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '464ad99907cf7a4082581c6e862de0d9d1565c9e',
      nonce: 15836,
      signature: Uint8Array [
        192
      ],
      chainId: 62730,
      signatures: [
        {
          key: Uint8Array [
            127
          ],
          value: Uint8Array [
            255
          ]
        },
        {
          key: Uint8Array [
            115
          ],
          value: Uint8Array [
            143
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 0,
          address: 0
        }
      }
    },
    sender: {
      balance: '17606',
      nonce: 3775,
      numTxs: 5533,
      address: '33a04e96c47a58c9409217ba6f15dd0e58206f94',
      pk: Uint8Array [
        236
      ],
      type: {
        pk: 1,
        hash: 9,
        address: 1
      },
      moniker: 'GB',
      context: {
        genesisTx: 'Small Soft Hat',
        renaissanceTx: '24/365',
        genesisTime: '2019-01-29T23:36:50.157Z',
        renaissanceTime: '2019-01-29T23:36:50.157Z'
      },
      migratedTo: [
        'Cambodia',
        'Tasty'
      ],
      migratedFrom: [
        'Books',
        'Granite'
      ],
      numAssets: 94001,
      stake: {
        totalStakes: '47398',
        totalUnstakes: '75787',
        totalReceivedStakes: '8973',
        recentStakes: {
          items: [
            {
              type_url: 'generating',
              value: Uint8Array [
                214
              ]
            },
            {
              type_url: 'West Virginia',
              value: Uint8Array [
                181
              ]
            }
          ],
          typeUrl: 'Granite',
          maxItems: 72762,
          circular: undefined,
          fifo: undefined
        },
        recentReceivedStakes: {
          items: [
            {
              type_url: 'grid-enabled',
              value: Uint8Array [
                77
              ]
            },
            {
              type_url: 'Senior',
              value: Uint8Array [
                122
              ]
            }
          ],
          typeUrl: 'Officer',
          maxItems: 69979,
          circular: undefined,
          fifo: undefined
        }
      },
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 2,
          address: 1
        }
      }
    },
    states: [
      {
        balance: '31084',
        nonce: 15773,
        numTxs: 78725,
        address: '65d01b47f6d469461dd886720527c19a24475d4f',
        pk: Uint8Array [
          226
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1
        },
        moniker: 'Kwanza',
        context: {
          genesisTx: 'wireless',
          renaissanceTx: 'indexing',
          genesisTime: '2019-01-29T23:36:50.158Z',
          renaissanceTime: '2019-01-29T23:36:50.158Z'
        },
        migratedTo: [
          'matrix',
          'leverage'
        ],
        migratedFrom: [
          'Samoa',
          'Customer'
        ],
        numAssets: 86277,
        stake: {
          totalStakes: '57090',
          totalUnstakes: '47252',
          totalReceivedStakes: '65584',
          recentStakes: {
            items: [
              {
                type_url: 'redundant',
                value: Uint8Array [
                  128
                ]
              },
              {
                type_url: 'Buckinghamshire',
                value: Uint8Array [
                  207
                ]
              }
            ],
            typeUrl: 'Tasty',
            maxItems: 5976,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'compressing',
                value: Uint8Array [
                  179
                ]
              },
              {
                type_url: 'program',
                value: Uint8Array [
                  153
                ]
              }
            ],
            typeUrl: 'HDD',
            maxItems: 23548,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 15,
            address: 1
          }
        }
      },
      {
        balance: '73525',
        nonce: 58185,
        numTxs: 62999,
        address: '38967edf20843dc71aa74b58c453b3c6dd42bd7a',
        pk: Uint8Array [
          214
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 1
        },
        moniker: 'New Jersey',
        context: {
          genesisTx: 'Tasty',
          renaissanceTx: 'Fresh',
          genesisTime: '2019-01-29T23:36:50.159Z',
          renaissanceTime: '2019-01-29T23:36:50.159Z'
        },
        migratedTo: [
          'Guinea',
          'Gorgeous Plastic Bacon'
        ],
        migratedFrom: [
          'alarm',
          'Plastic'
        ],
        numAssets: 49866,
        stake: {
          totalStakes: '69098',
          totalUnstakes: '16092',
          totalReceivedStakes: '64138',
          recentStakes: {
            items: [
              {
                type_url: 'Cliff',
                value: Uint8Array [
                  144
                ]
              },
              {
                type_url: 'Legacy',
                value: Uint8Array [
                  20
                ]
              }
            ],
            typeUrl: 'Buckinghamshire',
            maxItems: 98443,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Lithuania',
                value: Uint8Array [
                  89
                ]
              },
              {
                type_url: 'Soft',
                value: Uint8Array [
                  63
                ]
              }
            ],
            typeUrl: 'redundant',
            maxItems: 55898,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1
          }
        }
      }
    ]
  }
});

// output
{
  verifyTx: {
    code: 18
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'c809ff1d4d2a35d0ce4a358e8b87c9404f8593e9',
      nonce: 43775,
      signature: Uint8Array [
        150
      ],
      chainId: 3792,
      signatures: [
        {
          key: Uint8Array [
            35
          ],
          value: Uint8Array [
            54
          ]
        },
        {
          key: Uint8Array [
            176
          ],
          value: Uint8Array [
            248
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 1,
          address: 1
        }
      }
    },
    sender: {
      balance: '29910',
      nonce: 14441,
      numTxs: 75043,
      address: '0a24e9f31dd701073c294e08b1053f9923dc88f5',
      pk: Uint8Array [
        106
      ],
      type: {
        pk: 0,
        hash: 7,
        address: 0
      },
      moniker: 'backing up',
      context: {
        genesisTx: 'interface',
        renaissanceTx: 'array',
        genesisTime: '2019-01-29T23:36:50.160Z',
        renaissanceTime: '2019-01-29T23:36:50.160Z'
      },
      migratedTo: [
        'copy',
        'Angola'
      ],
      migratedFrom: [
        'enterprise',
        'background'
      ],
      numAssets: 80084,
      stake: {
        totalStakes: '41201',
        totalUnstakes: '76741',
        totalReceivedStakes: '24372',
        recentStakes: {
          items: [
            {
              type_url: 'Awesome',
              value: Uint8Array [
                186
              ]
            },
            {
              type_url: 'Quality',
              value: Uint8Array [
                234
              ]
            }
          ],
          typeUrl: 'Avon',
          maxItems: 32772,
          circular: undefined,
          fifo: undefined
        },
        recentReceivedStakes: {
          items: [
            {
              type_url: 'Frozen',
              value: Uint8Array [
                54
              ]
            },
            {
              type_url: 'front-end',
              value: Uint8Array [
                136
              ]
            }
          ],
          typeUrl: 'RSS',
          maxItems: 4023,
          circular: undefined,
          fifo: undefined
        }
      },
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 15,
          address: 1
        }
      }
    },
    states: [
      {
        balance: '3508',
        nonce: 38799,
        numTxs: 6605,
        address: 'f7384664a9dad027be7075be1e92cca41f932537',
        pk: Uint8Array [
          184
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1
        },
        moniker: 'Steel',
        context: {
          genesisTx: 'Lodge',
          renaissanceTx: 'vertical',
          genesisTime: '2019-01-29T23:36:50.160Z',
          renaissanceTime: '2019-01-29T23:36:50.160Z'
        },
        migratedTo: [
          'Usability',
          'reboot'
        ],
        migratedFrom: [
          'Gorgeous Plastic Ball',
          'CFP Franc'
        ],
        numAssets: 4960,
        stake: {
          totalStakes: '74570',
          totalUnstakes: '56084',
          totalReceivedStakes: '26142',
          recentStakes: {
            items: [
              {
                type_url: 'mint green',
                value: Uint8Array [
                  55
                ]
              },
              {
                type_url: 'Graphical User Interface',
                value: Uint8Array [
                  209
                ]
              }
            ],
            typeUrl: 'Bike',
            maxItems: 72296,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'transmitter',
                value: Uint8Array [
                  208
                ]
              },
              {
                type_url: 'Inverse',
                value: Uint8Array [
                  211
                ]
              }
            ],
            typeUrl: 'quantify',
            maxItems: 90571,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1
          }
        }
      },
      {
        balance: '20032',
        nonce: 79860,
        numTxs: 10361,
        address: 'ac6ea1dd7b5689256df840607b595014137783c6',
        pk: Uint8Array [
          158
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 0
        },
        moniker: 'Hong Kong',
        context: {
          genesisTx: 'Implemented',
          renaissanceTx: 'payment',
          genesisTime: '2019-01-29T23:36:50.160Z',
          renaissanceTime: '2019-01-29T23:36:50.160Z'
        },
        migratedTo: [
          'enterprise',
          'invoice'
        ],
        migratedFrom: [
          'Investment Account',
          'SMS'
        ],
        numAssets: 52144,
        stake: {
          totalStakes: '84311',
          totalUnstakes: '63993',
          totalReceivedStakes: '63585',
          recentStakes: {
            items: [
              {
                type_url: 'Massachusetts',
                value: Uint8Array [
                  100
                ]
              },
              {
                type_url: 'toolset',
                value: Uint8Array [
                  97
                ]
              }
            ],
            typeUrl: 'monitor',
            maxItems: 9826,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Rapids',
                value: Uint8Array [
                  6
                ]
              },
              {
                type_url: 'Ameliorated',
                value: Uint8Array [
                  193
                ]
              }
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 14902,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 1
          }
        }
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  verifyTx: {
    code: 21
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    73
  ],
  type: {
    pk: 0,
    hash: 15,
    address: 0
  },
  passphrase: 'scalable',
  moniker: 'Berkshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'web services',
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1
    },
    sk: Uint8Array [
      245
    ],
    pk: Uint8Array [
      144
    ],
    address: '7671d160a473bc322b02ec1d2bc2dd6babbf70c0'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'f451d26e8c8f82c542af840d139c5f64217f39a4'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33
}
});
```

### search

```js
const result = await client.search({
  key: 'parallelism',
  value: 'Avon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  txs: [
    {
      tx: {
        from: 'a2bac9b0ab39fab10f882bdff595599f1538a965',
        nonce: 24821,
        signature: Uint8Array [
          70
        ],
        chainId: 61781,
        signatures: [
          {
            key: Uint8Array [
              138
            ],
            value: Uint8Array [
              130
            ]
          },
          {
            key: Uint8Array [
              238
            ],
            value: Uint8Array [
              149
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 2,
            address: 0
          }
        }
      },
      height: 21949,
      index: 29744,
      hash: '03aecd3848a2d1e3d2959c681196d294d41ef695',
      tags: [
        {
          key: Uint8Array [
            191
          ],
          value: Uint8Array [
            16
          ]
        },
        {
          key: Uint8Array [
            96
          ],
          value: Uint8Array [
            192
          ]
        }
      ]
    },
    {
      tx: {
        from: 'bd1be8279acd3cef6770e627f3bdbb2f0d178113',
        nonce: 67227,
        signature: Uint8Array [
          141
        ],
        chainId: 88854,
        signatures: [
          {
            key: Uint8Array [
              58
            ],
            value: Uint8Array [
              166
            ]
          },
          {
            key: Uint8Array [
              131
            ],
            value: Uint8Array [
              228
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0
          }
        }
      },
      height: 6642,
      index: 84836,
      hash: 'a25277852a67e0378adf359c97f77c1bc07064dd',
      tags: [
        {
          key: Uint8Array [
            130
          ],
          value: Uint8Array [
            51
          ]
        },
        {
          key: Uint8Array [
            247
          ],
          value: Uint8Array [
            112
          ]
        }
      ]
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '27fcab51febf36ef65470ffbfe685f2b14329743',
    nonce: 85906,
    signature: Uint8Array [
      158
    ],
    chainId: 10479,
    signatures: [
      {
        key: Uint8Array [
          160
        ],
        value: Uint8Array [
          223
        ]
      },
      {
        key: Uint8Array [
          111
        ],
        value: Uint8Array [
          217
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 0
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 15,
      address: 0
    },
    sk: Uint8Array [
      129
    ],
    pk: Uint8Array [
      193
    ],
    address: '4655d8afc2ef0618a8592b616fa9f9220675d531'
  },
  token: 'Directives',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  hash: '1401d60db03875cc80a0c55f335496e366092368'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    84
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  hash: '24c1e98ba2738f20ab2176bb9ec318c7e47a88d7'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 22,
  filter: 'Function-based'
});

// output
{
  topic: 'Granite'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Avon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
