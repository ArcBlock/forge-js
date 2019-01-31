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
  EXPIRED_TX: 37,
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
      pk: 1,
      hash: 7,
      address: 0
    }
  },
  from: 'e14b7684b8b3dc2e15239a18af4b8ac27584d97c',
  nonce: 16084,
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0
    },
    sk: Uint8Array [
      34
    ],
    pk: Uint8Array [
      161
    ],
    address: '054fc16b3f538044857216fb6e83508c3fc2dd45'
  },
  token: 'Berkshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  tx: {
    from: 'cb269605cac6665153a1e770a7ebdbcc7b3ce6e0',
    nonce: 92768,
    signature: Uint8Array [
      55
    ],
    chainId: 'Solutions',
    signatures: [
      {
        key: Uint8Array [
          107
        ],
        value: Uint8Array [
          12
        ]
      },
      {
        key: Uint8Array [
          6
        ],
        value: Uint8Array [
          62
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 15,
        address: 0
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Future',
  type: {
    pk: 0,
    hash: 14,
    address: 1
  },
  moniker: 'Health'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  token: 'Berkshire',
  wallet: {
    type: {
      pk: 0,
      hash: 2,
      address: 0
    },
    sk: Uint8Array [
      164
    ],
    pk: Uint8Array [
      102
    ],
    address: 'c11e1129a39d7967bfd33e451ef47d8ca1d895c2'
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
  code: 7,
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0
    },
    sk: Uint8Array [
      140
    ],
    pk: Uint8Array [
      149
    ],
    address: '040e701708bd928d49c5c77850a427b04767bd78'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '8e14b5c07616c8bc01d70cba62cc4528f1a4b485',
  keys: [
    'Metrics',
    'Brazilian Real'
  ],
  appHash: '17ea0a5bb2505d6b34fd107265d7ae32bfa97b98'
});

// output
{
  code: 3,
  state: {
    balance: '53909',
    nonce: 48210,
    numTxs: 69855,
    address: 'e314365c8bd6fe261abbfd447e3a86ae07156ffd',
    pk: Uint8Array [
      6
    ],
    type: {
      pk: 1,
      hash: 13,
      address: 1
    },
    moniker: 'Representative',
    context: {
      genesisTx: 'Personal Loan Account',
      renaissanceTx: 'Moldova',
      genesisTime: '2019-01-30T23:59:32.594Z',
      renaissanceTime: '2019-01-30T23:59:32.594Z'
    },
    migratedTo: [
      'Handmade Soft Gloves',
      'Concrete'
    ],
    migratedFrom: [
      'AGP',
      'deposit'
    ],
    numAssets: 26973,
    stake: {
      totalStakes: '11892',
      totalUnstakes: '15214',
      totalReceivedStakes: '46578',
      recentStakes: {
        items: [
          {
            type_url: 'Liaison',
            value: Uint8Array [
              196
            ]
          },
          {
            type_url: 'Iceland Krona',
            value: Uint8Array [
              123
            ]
          }
        ],
        typeUrl: 'eco-centric',
        maxItems: 28700,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          {
            type_url: 'Investment Account',
            value: Uint8Array [
              43
            ]
          },
          {
            type_url: 'Guinea',
            value: Uint8Array [
              2
            ]
          }
        ],
        typeUrl: 'Maine',
        maxItems: 49762,
        circular: undefined,
        fifo: undefined
      }
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 1
      }
    }
  }
}
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '9883080df1ad91ed086d88e8cd17b04e47f0ef6d',
  keys: [
    'Research',
    'primary'
  ],
  appHash: '687b48add5499db5a1aa79d9773ed06e4de5c91b'
});

// output
{
  code: 26,
  state: {
    address: 'e61259c5a7cc7f2153ba8e37b26a1cf421d4dcd7',
    owner: 'bottom-line',
    moniker: 'Movies',
    readonly: undefined,
    stake: {
      totalStakes: '87116',
      totalUnstakes: '44873',
      totalReceivedStakes: '85663',
      recentStakes: {
        items: [
          {
            type_url: 'Borders',
            value: Uint8Array [
              37
            ]
          },
          {
            type_url: 'Corporate',
            value: Uint8Array [
              83
            ]
          }
        ],
        typeUrl: 'Open-architected',
        maxItems: 22491,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          {
            type_url: 'Frozen',
            value: Uint8Array [
              159
            ]
          },
          {
            type_url: 'RAM',
            value: Uint8Array [
              246
            ]
          }
        ],
        typeUrl: 'Falkland Islands Pound',
        maxItems: 23223,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Practical Steel Gloves',
      renaissanceTx: 'wireless',
      genesisTime: '2019-01-30T23:59:32.595Z',
      renaissanceTime: '2019-01-30T23:59:32.595Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 1
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 65073
});

// output
{
  code: 28,
  block: {
    height: 52925,
    numTxs: 44971,
    time: '2019-01-30T23:59:32.595Z',
    appHash: 'f5933542fdeb19aeb19208818d394ab0bee2ce48',
    proposer: '5cd7bda1e8de6bf43a8ee54779e1a4e16f032284',
    txs: [
      {
        from: '52056b0bdbc051721ff09ac0f968a2babbf80a00',
        nonce: 67944,
        signature: Uint8Array [
          69
        ],
        chainId: 'Metal',
        signatures: [
          {
            key: Uint8Array [
              134
            ],
            value: Uint8Array [
              74
            ]
          },
          {
            key: Uint8Array [
              55
            ],
            value: Uint8Array [
              161
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 2,
            address: 0
          }
        }
      },
      {
        from: 'cb86aef8773f4dc6d961b746f20481cb75ac8370',
        nonce: 86547,
        signature: Uint8Array [
          90
        ],
        chainId: 'payment',
        signatures: [
          {
            key: Uint8Array [
              217
            ],
            value: Uint8Array [
              193
            ]
          },
          {
            key: Uint8Array [
              238
            ],
            value: Uint8Array [
              231
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 2,
            address: 0
          }
        }
      }
    ],
    totalTxs: 88222
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
  code: 403,
  info: {
    id: 'Gorgeous Wooden Gloves',
    network: 'Accounts',
    moniker: 'California',
    consensusVersion: 'Sleek',
    synced: undefined,
    appHash: '32184daa5bd89eaef679c5d6e54b72f79a772f41',
    blockHash: Uint8Array [
      44
    ],
    blockHeight: 18162,
    blockTime: '2019-01-30T23:59:32.596Z',
    address: '65e16d200976c4b06642599222620799c8ea5b74',
    votingPower: 2749,
    totalTxs: 58784,
    version: 'Small Frozen Sausages',
    dataVersion: 'bricks-and-clicks',
    forgeAppsVersion: 'Concrete',
    supportedTxs: [
      'invoice',
      'Intranet'
    ]
  }
}
});
```

### getChannelState

```js
const stream = client.getChannelState({
  address: '06fa6dfdf4aa13ad0d373f410b5dde76309cdb2b',
  keys: [
    'Unbranded',
    'infomediaries'
  ],
  appHash: 'ae5c1412a33e97b1eda887d489449d309e11c02f'
});

// output
{
  code: 9,
  state: {
    address: '1479ab1e1d372f3aadc8a841c455030e54097cb9',
    totalConfirmed: 82203,
    maxWaiting: 39106,
    maxConfirmed: 52075,
    waiting: {
      items: [
        {
          type_url: 'Handmade Steel Bacon',
          value: Uint8Array [
            252
          ]
        },
        {
          type_url: 'Orchestrator',
          value: Uint8Array [
            7
          ]
        }
      ],
      typeUrl: 'radical',
      maxItems: 51345,
      circular: undefined,
      fifo: undefined
    },
    confirmed: {
      items: [
        {
          type_url: 'Awesome',
          value: Uint8Array [
            173
          ]
        },
        {
          type_url: 'Music',
          value: Uint8Array [
            169
          ]
        }
      ],
      typeUrl: 'Integration',
      maxItems: 24067,
      circular: undefined,
      fifo: undefined
    },
    context: {
      genesisTx: 'indexing',
      renaissanceTx: 'client-driven',
      genesisTime: '2019-01-30T23:59:32.597Z',
      renaissanceTime: '2019-01-30T23:59:32.597Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
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
  code: 0,
  config: 'Neck'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'invoice',
    'homogeneous'
  ],
  appHash: '4ebb616dbfafa2dcc129701936d5d2f6e715e50d'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  state: {
    consensus: {
      maxBytes: 91536,
      maxGas: 20987,
      maxValidators: 92636,
      maxCandidates: 64680,
      pubKeyTypes: [
        'connect',
        'Awesome Steel Salad'
      ],
      validators: [
        {
          address: '780a94b4ddd2e77c0dfb28b74bb5c1635eb58df0',
          power: 10036
        },
        {
          address: '312910dd4e4c1ef64e926abec555e1874d877b41',
          power: 80916
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      item: [
        {
          type: 14,
          dataHash: 'hacking',
          actions: [
            undefined,
            undefined
          ]
        },
        {
          type: 12,
          dataHash: 'Unbranded',
          actions: [
            undefined,
            undefined
          ]
        }
      ]
    },
    stakeSummary: {
      totalStakes: '51819',
      totalUnstakes: '43327',
      context: {
        genesisTx: 'Avon',
        renaissanceTx: 'transmitting',
        genesisTime: '2019-01-30T23:59:32.597Z',
        renaissanceTime: '2019-01-30T23:59:32.597Z'
      }
    },
    version: 'Secured',
    dataVersion: 'bricks-and-clicks',
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 15,
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
  code: 20,
  netInfo: {
    listening: undefined,
    listeners: [
      'Gibraltar Pound',
      'application'
    ],
    nPeers: 75883,
    peers: [
      {
        nodeInfo: {
          id: 'withdrawal',
          network: 'Assurance',
          version: 'indexing',
          moniker: 'regional',
          ip: 'disintermediate',
          geoInfo: {
            city: 'compressing',
            country: 'feed',
            latitude: 25103.81,
            longitude: 1330.71
          }
        }
      },
      {
        nodeInfo: {
          id: 'Data',
          network: 'whiteboard',
          version: 'Avon',
          moniker: 'fuchsia',
          ip: 'Utah',
          geoInfo: {
            city: 'Ameliorated',
            country: 'copying',
            latitude: 1514.8,
            longitude: 39624.68
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
  address: '052679e3ffde3812a1c5c30647dbfd685254b0d5',
  keys: [
    'non-volatile',
    'withdrawal'
  ],
  appHash: 'fe8aff6d50ed3638f2fc9f8737c55a06ede6cd60'
});

// output
{
  code: 21,
  state: {
    address: 'e66891dd61b691cccbe8b51596238d424cd9e97f',
    from: '511de79f8b140bd203560badb1c40bfe52dcbcfa',
    to: 'ded3ac59d88e0f66cc4ebf7a38e96b0f33bd2f5d',
    balance: '1434',
    message: 'AI',
    context: {
      genesisTx: 'Avon',
      renaissanceTx: 'Automotive',
      genesisTime: '2019-01-30T23:59:32.598Z',
      renaissanceTime: '2019-01-30T23:59:32.598Z'
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

### getTx

```js
const stream = client.getTx({
  hash: '8230a327e3311897db92a90fa8777aff02b8990e'
});

// output
{
  code: 2,
  info: {
    tx: {
      from: '6bca87ae9ba61e2cad82956ddf525d6c53dc57c9',
      nonce: 58902,
      signature: Uint8Array [
        125
      ],
      chainId: 'bypass',
      signatures: [
        {
          key: Uint8Array [
            184
          ],
          value: Uint8Array [
            64
          ]
        },
        {
          key: Uint8Array [
            223
          ],
          value: Uint8Array [
            139
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 9,
          address: 0
        }
      }
    },
    height: 47999,
    index: 94641,
    hash: 'ee43e04a2fe3222f91e1d43471e664856f0c0e60',
    tags: [
      {
        key: Uint8Array [
          234
        ],
        value: Uint8Array [
          22
        ]
      },
      {
        key: Uint8Array [
          65
        ],
        value: Uint8Array [
          168
        ]
      }
    ]
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 41182
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  unconfirmedTxs: {
    nTxs: 748,
    txs: [
      {
        from: 'd320df6fff4941a84cf777c77306089ecb1c4b98',
        nonce: 78948,
        signature: Uint8Array [
          65
        ],
        chainId: 'responsive',
        signatures: [
          {
            key: Uint8Array [
              40
            ],
            value: Uint8Array [
              145
            ]
          },
          {
            key: Uint8Array [
              161
            ],
            value: Uint8Array [
              46
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
      {
        from: 'b1d06e1fccbebade83a67a0c4653a3851468492d',
        nonce: 66743,
        signature: Uint8Array [
          154
        ],
        chainId: 'Cotton',
        signatures: [
          {
            key: Uint8Array [
              233
            ],
            value: Uint8Array [
              237
            ]
          },
          {
            key: Uint8Array [
              146
            ],
            value: Uint8Array [
              204
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1
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
  code: 32,
  validatorsInfo: {
    blockHeight: 82106,
    validators: [
      {
        address: '7c1599ea88dae8f2ee67b41bb50ea2527c5cfa78',
        pubKey: {
          type: 'payment',
          data: Uint8Array [
            13
          ]
        },
        votingPower: 10426,
        proposerPriority: 'Liaison',
        name: 'Proactive'
      },
      {
        address: '6620ef5c3e2f5c0edf26bd5d8b5d4a9805e73eab',
        pubKey: {
          type: 'Kazakhstan',
          data: Uint8Array [
            9
          ]
        },
        votingPower: 32584,
        proposerPriority: 'Palestinian Territory',
        name: 'Minnesota'
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
  code: 17,
  address: '3ba3da96db7b5043e5028141ae2ed2f92c04acf4'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '30376047c30d08a16a514d34d81c452857ce3d43'
});

// output
{
  code: 403,
  chunk: Uint8Array [
    157
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'b56a9facc7ed28133d4d4079f045c265d7fabe54',
  passphrase: 'Incredible'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 28,
  token: 'Borders',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0
    },
    sk: Uint8Array [
      195
    ],
    pk: Uint8Array [
      18
    ],
    address: '51efc2e80fdbd537d5da24871b38c50708e5c6d8'
  }
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '3ea6cdb91893512659562a13ff3cdad8c1e266f8',
      nonce: 24451,
      signature: Uint8Array [
        8
      ],
      chainId: 'solution-oriented',
      signatures: [
        {
          key: Uint8Array [
            2
          ],
          value: Uint8Array [
            165
          ]
        },
        {
          key: Uint8Array [
            35
          ],
          value: Uint8Array [
            176
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 6,
          address: 1
        }
      }
    },
    states: [
      {
        balance: '81078',
        nonce: 97433,
        numTxs: 53986,
        address: '243c27885502b2e61d5ea315dbf1886d1b0895f3',
        pk: Uint8Array [
          211
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 1
        },
        moniker: 'Steel',
        context: {
          genesisTx: 'Licensed Steel Pizza',
          renaissanceTx: 'users',
          genesisTime: '2019-01-30T23:59:32.599Z',
          renaissanceTime: '2019-01-30T23:59:32.599Z'
        },
        migratedTo: [
          'Integration',
          'Factors'
        ],
        migratedFrom: [
          'Tokelau',
          'architect'
        ],
        numAssets: 62916,
        stake: {
          totalStakes: '11149',
          totalUnstakes: '64156',
          totalReceivedStakes: '31551',
          recentStakes: {
            items: [
              {
                type_url: 'Integration',
                value: Uint8Array [
                  123
                ]
              },
              {
                type_url: 'Personal Loan Account',
                value: Uint8Array [
                  206
                ]
              }
            ],
            typeUrl: 'national',
            maxItems: 92669,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Crossroad',
                value: Uint8Array [
                  187
                ]
              },
              {
                type_url: 'Forward',
                value: Uint8Array [
                  118
                ]
              }
            ],
            typeUrl: 'IB',
            maxItems: 63024,
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
      {
        balance: '31625',
        nonce: 58718,
        numTxs: 24989,
        address: '6a72265c4ee5c8482b56463ed852972abf8d77da',
        pk: Uint8Array [
          52
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 1
        },
        moniker: 'Michigan',
        context: {
          genesisTx: 'Lane',
          renaissanceTx: 'Officer',
          genesisTime: '2019-01-30T23:59:32.600Z',
          renaissanceTime: '2019-01-30T23:59:32.600Z'
        },
        migratedTo: [
          'SMTP',
          'robust'
        ],
        migratedFrom: [
          'Awesome Plastic Towels',
          'Optimization'
        ],
        numAssets: 97197,
        stake: {
          totalStakes: '54863',
          totalUnstakes: '15996',
          totalReceivedStakes: '66769',
          recentStakes: {
            items: [
              {
                type_url: 'Handmade',
                value: Uint8Array [
                  173
                ]
              },
              {
                type_url: 'Qatar',
                value: Uint8Array [
                  57
                ]
              }
            ],
            typeUrl: 'JBOD',
            maxItems: 18449,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Mozambique',
                value: Uint8Array [
                  64
                ]
              },
              {
                type_url: 'haptic',
                value: Uint8Array [
                  247
                ]
              }
            ],
            typeUrl: 'San Marino',
            maxItems: 31611,
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
    ],
    channels: [
      {
        address: 'cfd884c129666eab716ec0e2130809a907e9bf08',
        totalConfirmed: 26355,
        maxWaiting: 18635,
        maxConfirmed: 98273,
        waiting: {
          items: [
            {
              type_url: 'program',
              value: Uint8Array [
                28
              ]
            },
            {
              type_url: 'EXE',
              value: Uint8Array [
                17
              ]
            }
          ],
          typeUrl: 'Virgin Islands, U.S.',
          maxItems: 66725,
          circular: undefined,
          fifo: undefined
        },
        confirmed: {
          items: [
            {
              type_url: 'Bedfordshire',
              value: Uint8Array [
                70
              ]
            },
            {
              type_url: 'Borders',
              value: Uint8Array [
                106
              ]
            }
          ],
          typeUrl: 'Minnesota',
          maxItems: 25853,
          circular: undefined,
          fifo: undefined
        },
        context: {
          genesisTx: 'JSON',
          renaissanceTx: 'deposit',
          genesisTime: '2019-01-30T23:59:32.600Z',
          renaissanceTime: '2019-01-30T23:59:32.600Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1
          }
        }
      },
      {
        address: '30e9e1e49b0e608586935ea20660992fa230d68a',
        totalConfirmed: 9883,
        maxWaiting: 29585,
        maxConfirmed: 40907,
        waiting: {
          items: [
            {
              type_url: 'tan',
              value: Uint8Array [
                139
              ]
            },
            {
              type_url: 'Sleek',
              value: Uint8Array [
                80
              ]
            }
          ],
          typeUrl: 'Credit Card Account',
          maxItems: 2842,
          circular: undefined,
          fifo: undefined
        },
        confirmed: {
          items: [
            {
              type_url: 'Connecticut',
              value: Uint8Array [
                44
              ]
            },
            {
              type_url: 'Open-source',
              value: Uint8Array [
                47
              ]
            }
          ],
          typeUrl: 'South Georgia and the South Sandwich Islands',
          maxItems: 83018,
          circular: undefined,
          fifo: undefined
        },
        context: {
          genesisTx: 'vortals',
          renaissanceTx: 'programming',
          genesisTime: '2019-01-30T23:59:32.601Z',
          renaissanceTime: '2019-01-30T23:59:32.601Z'
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
    ],
    assets: [
      {
        address: '8207b29c566cd15d11ebbf7ba2a78bf4aaf5401f',
        owner: 'Metal',
        moniker: 'payment',
        readonly: undefined,
        stake: {
          totalStakes: '21740',
          totalUnstakes: '6675',
          totalReceivedStakes: '31696',
          recentStakes: {
            items: [
              {
                type_url: 'driver',
                value: Uint8Array [
                  163
                ]
              },
              {
                type_url: 'hard drive',
                value: Uint8Array [
                  118
                ]
              }
            ],
            typeUrl: 'plug-and-play',
            maxItems: 37169,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Technician',
                value: Uint8Array [
                  225
                ]
              },
              {
                type_url: 'budgetary management',
                value: Uint8Array [
                  83
                ]
              }
            ],
            typeUrl: 'Customer',
            maxItems: 37024,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'brand',
          renaissanceTx: 'payment',
          genesisTime: '2019-01-30T23:59:32.601Z',
          renaissanceTime: '2019-01-30T23:59:32.601Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0
          }
        }
      },
      {
        address: '4e24d75b5e19bc94169459a746688007a0de4bdf',
        owner: 'deploy',
        moniker: 'Chief',
        readonly: undefined,
        stake: {
          totalStakes: '45853',
          totalUnstakes: '55676',
          totalReceivedStakes: '23929',
          recentStakes: {
            items: [
              {
                type_url: 'Engineer',
                value: Uint8Array [
                  164
                ]
              },
              {
                type_url: 'Singapore',
                value: Uint8Array [
                  64
                ]
              }
            ],
            typeUrl: 'Human',
            maxItems: 3055,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'viral',
                value: Uint8Array [
                  132
                ]
              },
              {
                type_url: 'SQL',
                value: Uint8Array [
                  25
                ]
              }
            ],
            typeUrl: 'sky blue',
            maxItems: 43115,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Investment Account',
          renaissanceTx: 'Mount',
          genesisTime: '2019-01-30T23:59:32.601Z',
          renaissanceTime: '2019-01-30T23:59:32.601Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0
          }
        }
      }
    ],
    stakes: [
      {
        address: 'e00f04753811e1855a05d389c9634b0d3a57d63f',
        from: '0602f532e198a2d1ec9617d9f906e4d1920d1196',
        to: '5575bb368d36e660ea69016564359a5d2da1c3a1',
        balance: '80527',
        message: 'United States Minor Outlying Islands',
        context: {
          genesisTx: 'Small',
          renaissanceTx: 'generate',
          genesisTime: '2019-01-30T23:59:32.601Z',
          renaissanceTime: '2019-01-30T23:59:32.601Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1
          }
        }
      },
      {
        address: '6fa2e18fe64b3a6f76030ed079dba0a3f1f6e0a6',
        from: 'b8405178a75a34b548db2b04b9071ad69b586e6a',
        to: '2a057ea5f09d82ca1f784f2dfced6ac56a720cf1',
        balance: '20740',
        message: 'parsing',
        context: {
          genesisTx: 'Uzbekistan',
          renaissanceTx: 'Mall',
          genesisTime: '2019-01-30T23:59:32.601Z',
          renaissanceTime: '2019-01-30T23:59:32.601Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 0
          }
        }
      }
    ],
    appState: {
      consensus: {
        maxBytes: 97887,
        maxGas: 73524,
        maxValidators: 5886,
        maxCandidates: 21759,
        pubKeyTypes: [
          'Bedfordshire',
          'compressing'
        ],
        validators: [
          {
            address: '43cc70f3f1dd7b35d19228fa34e082a448bf4db3',
            power: 13627
          },
          {
            address: 'fa4983b28a546b4508da914a1fe2aad5f6929ba5',
            power: 84781
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        item: [
          {
            type: 1,
            dataHash: 'California',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 2,
            dataHash: 'Florida',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      },
      stakeSummary: {
        totalStakes: '88319',
        totalUnstakes: '9620',
        context: {
          genesisTx: 'Frozen',
          renaissanceTx: 'Investment Account',
          genesisTime: '2019-01-30T23:59:32.602Z',
          renaissanceTime: '2019-01-30T23:59:32.602Z'
        }
      },
      version: 'hack',
      dataVersion: 'Saint Pierre and Miquelon',
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 13,
          address: 0
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 22
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'db46c096c93e4e0d45a8705a0db2b8b93f89effc',
      nonce: 45157,
      signature: Uint8Array [
        69
      ],
      chainId: 'Regional',
      signatures: [
        {
          key: Uint8Array [
            234
          ],
          value: Uint8Array [
            64
          ]
        },
        {
          key: Uint8Array [
            118
          ],
          value: Uint8Array [
            137
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 6,
          address: 1
        }
      }
    },
    states: [
      {
        balance: '27183',
        nonce: 18693,
        numTxs: 88096,
        address: '4a63bfb98d5fcd26065dbd9bec6e3113089ef3f7',
        pk: Uint8Array [
          233
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 1
        },
        moniker: 'port',
        context: {
          genesisTx: 'calculate',
          renaissanceTx: 'capacitor',
          genesisTime: '2019-01-30T23:59:32.603Z',
          renaissanceTime: '2019-01-30T23:59:32.603Z'
        },
        migratedTo: [
          'Mouse',
          'RSS'
        ],
        migratedFrom: [
          'paradigms',
          'Devolved'
        ],
        numAssets: 16535,
        stake: {
          totalStakes: '19254',
          totalUnstakes: '69796',
          totalReceivedStakes: '32645',
          recentStakes: {
            items: [
              {
                type_url: 'South Carolina',
                value: Uint8Array [
                  212
                ]
              },
              {
                type_url: 'salmon',
                value: Uint8Array [
                  248
                ]
              }
            ],
            typeUrl: 'neutral',
            maxItems: 78043,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Pakistan Rupee',
                value: Uint8Array [
                  216
                ]
              },
              {
                type_url: 'programming',
                value: Uint8Array [
                  51
                ]
              }
            ],
            typeUrl: 'Grocery',
            maxItems: 11146,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0
          }
        }
      },
      {
        balance: '19961',
        nonce: 92370,
        numTxs: 49236,
        address: 'c3823691d30a7779400f5275c31131d25ba38fd4',
        pk: Uint8Array [
          235
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 1
        },
        moniker: 'interface',
        context: {
          genesisTx: 'Architect',
          renaissanceTx: 'payment',
          genesisTime: '2019-01-30T23:59:32.603Z',
          renaissanceTime: '2019-01-30T23:59:32.603Z'
        },
        migratedTo: [
          'withdrawal',
          'Argentina'
        ],
        migratedFrom: [
          'Baby',
          'indigo'
        ],
        numAssets: 43366,
        stake: {
          totalStakes: '17784',
          totalUnstakes: '96005',
          totalReceivedStakes: '84290',
          recentStakes: {
            items: [
              {
                type_url: 'platforms',
                value: Uint8Array [
                  182
                ]
              },
              {
                type_url: 'RAM',
                value: Uint8Array [
                  79
                ]
              }
            ],
            typeUrl: 'multi-byte',
            maxItems: 90700,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'Unbranded',
                value: Uint8Array [
                  145
                ]
              },
              {
                type_url: 'zero defect',
                value: Uint8Array [
                  76
                ]
              }
            ],
            typeUrl: 'upward-trending',
            maxItems: 32387,
            circular: undefined,
            fifo: undefined
          }
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1
          }
        }
      }
    ],
    channels: [
      {
        address: '31c46ab7e9f97f80d32162617ae3c451ebac8b06',
        totalConfirmed: 74635,
        maxWaiting: 56825,
        maxConfirmed: 68958,
        waiting: {
          items: [
            {
              type_url: 'Rhode Island',
              value: Uint8Array [
                110
              ]
            },
            {
              type_url: 'Steel',
              value: Uint8Array [
                97
              ]
            }
          ],
          typeUrl: 'Buckinghamshire',
          maxItems: 88497,
          circular: undefined,
          fifo: undefined
        },
        confirmed: {
          items: [
            {
              type_url: 'infrastructures',
              value: Uint8Array [
                40
              ]
            },
            {
              type_url: 'ivory',
              value: Uint8Array [
                235
              ]
            }
          ],
          typeUrl: 'COM',
          maxItems: 58954,
          circular: undefined,
          fifo: undefined
        },
        context: {
          genesisTx: 'Algerian Dinar',
          renaissanceTx: 'Industrial',
          genesisTime: '2019-01-30T23:59:32.603Z',
          renaissanceTime: '2019-01-30T23:59:32.603Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 2,
            address: 0
          }
        }
      },
      {
        address: 'c4438f1037b4caf69e49296e1b3dff3fe487163b',
        totalConfirmed: 19045,
        maxWaiting: 81549,
        maxConfirmed: 50319,
        waiting: {
          items: [
            {
              type_url: 'connecting',
              value: Uint8Array [
                234
              ]
            },
            {
              type_url: 'e-tailers',
              value: Uint8Array [
                111
              ]
            }
          ],
          typeUrl: 'turn-key',
          maxItems: 7652,
          circular: undefined,
          fifo: undefined
        },
        confirmed: {
          items: [
            {
              type_url: 'IB',
              value: Uint8Array [
                69
              ]
            },
            {
              type_url: 'attitude',
              value: Uint8Array [
                174
              ]
            }
          ],
          typeUrl: 'Oregon',
          maxItems: 66114,
          circular: undefined,
          fifo: undefined
        },
        context: {
          genesisTx: 'auxiliary',
          renaissanceTx: 'Jewelery',
          genesisTime: '2019-01-30T23:59:32.603Z',
          renaissanceTime: '2019-01-30T23:59:32.603Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0
          }
        }
      }
    ],
    assets: [
      {
        address: '9773260ae54abfe263a6d9d09d632a2906adedcb',
        owner: 'Plastic',
        moniker: 'New York',
        readonly: undefined,
        stake: {
          totalStakes: '90841',
          totalUnstakes: '66162',
          totalReceivedStakes: '9354',
          recentStakes: {
            items: [
              {
                type_url: 'relationships',
                value: Uint8Array [
                  157
                ]
              },
              {
                type_url: 'purple',
                value: Uint8Array [
                  235
                ]
              }
            ],
            typeUrl: 'Taka',
            maxItems: 27875,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'deploy',
                value: Uint8Array [
                  221
                ]
              },
              {
                type_url: 'Zloty',
                value: Uint8Array [
                  43
                ]
              }
            ],
            typeUrl: 'Cambridgeshire',
            maxItems: 59555,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'middleware',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-01-30T23:59:32.603Z',
          renaissanceTime: '2019-01-30T23:59:32.603Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1
          }
        }
      },
      {
        address: '2d72cdf4a8917cb214a1e202b9c0636443ff102a',
        owner: 'Garden',
        moniker: 'mindshare',
        readonly: undefined,
        stake: {
          totalStakes: '35446',
          totalUnstakes: '20458',
          totalReceivedStakes: '60411',
          recentStakes: {
            items: [
              {
                type_url: 'Mews',
                value: Uint8Array [
                  66
                ]
              },
              {
                type_url: 'navigate',
                value: Uint8Array [
                  19
                ]
              }
            ],
            typeUrl: 'Balanced',
            maxItems: 61987,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              {
                type_url: 'homogeneous',
                value: Uint8Array [
                  217
                ]
              },
              {
                type_url: 'Incredible',
                value: Uint8Array [
                  55
                ]
              }
            ],
            typeUrl: 'Club',
            maxItems: 23601,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Florida',
          renaissanceTx: 'full-range',
          genesisTime: '2019-01-30T23:59:32.604Z',
          renaissanceTime: '2019-01-30T23:59:32.604Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 2,
            address: 1
          }
        }
      }
    ],
    stakes: [
      {
        address: '5ae1eba60fd76bc8d07bbeabac9ae4b26115677d',
        from: 'b81a62c5e6e8fc539b5e1e53922f8ea425aa9395',
        to: 'fa8b23ce51d3576be1d95aafa27da6b03bf05701',
        balance: '36836',
        message: 'Small',
        context: {
          genesisTx: 'California',
          renaissanceTx: 'Checking Account',
          genesisTime: '2019-01-30T23:59:32.604Z',
          renaissanceTime: '2019-01-30T23:59:32.604Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0
          }
        }
      },
      {
        address: '5c4e1bb87554329df1e78a80937b6187bbcc0fa8',
        from: '101b8219ac1072b5fa0bff072b078a6f93b23084',
        to: 'a0ddc460b8d278b209d8ce29413fbdca09196a95',
        balance: '10694',
        message: 'time-frame',
        context: {
          genesisTx: 'stable',
          renaissanceTx: 'Intelligent',
          genesisTime: '2019-01-30T23:59:32.604Z',
          renaissanceTime: '2019-01-30T23:59:32.604Z'
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
    ],
    appState: {
      consensus: {
        maxBytes: 75739,
        maxGas: 26472,
        maxValidators: 45801,
        maxCandidates: 27458,
        pubKeyTypes: [
          'multi-byte',
          'engineer'
        ],
        validators: [
          {
            address: 'f3018b022ea97133b0a8c60e160608fc3776add0',
            power: 27571
          },
          {
            address: '65aaa7e2dedb969de091752ec34b5bf108f587f3',
            power: 90285
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        item: [
          {
            type: 2,
            dataHash: 'Total',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 12,
            dataHash: 'Money Market Account',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      },
      stakeSummary: {
        totalStakes: '84863',
        totalUnstakes: '9768',
        context: {
          genesisTx: 'Greens',
          renaissanceTx: 'Berkshire',
          genesisTime: '2019-01-30T23:59:32.604Z',
          renaissanceTime: '2019-01-30T23:59:32.604Z'
        }
      },
      version: 'Metal',
      dataVersion: 'Serbian Dinar',
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 9,
          address: 1
        }
      }
    }
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  verifyTx: {
    code: 5
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    102
  ],
  type: {
    pk: 1,
    hash: 13,
    address: 0
  },
  passphrase: 'deposit',
  moniker: 'back-end'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'Greens',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1
    },
    sk: Uint8Array [
      148
    ],
    pk: Uint8Array [
      160
    ],
    address: 'af2aba8359647dc70b04bb789a6257d4e915ae0f'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '6897500a90eac86650e37d2f022f342c17372cbc'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17
}
});
```

### search

```js
const result = await client.search({
  key: 'experiences',
  value: 'schemas'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  txs: [
    {
      tx: {
        from: '4210d5bf23f897f19053aafde70c7e48a501d8dc',
        nonce: 38129,
        signature: Uint8Array [
          183
        ],
        chainId: 'Chad',
        signatures: [
          {
            key: Uint8Array [
              1
            ],
            value: Uint8Array [
              41
            ]
          },
          {
            key: Uint8Array [
              15
            ],
            value: Uint8Array [
              251
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 9,
            address: 0
          }
        }
      },
      height: 59639,
      index: 63312,
      hash: '485f19a57e3884e4761314cd9f0898dfbbc848a3',
      tags: [
        {
          key: Uint8Array [
            76
          ],
          value: Uint8Array [
            165
          ]
        },
        {
          key: Uint8Array [
            181
          ],
          value: Uint8Array [
            102
          ]
        }
      ]
    },
    {
      tx: {
        from: '23d22be3d6a4430326b77f9d09325b8fdb874263',
        nonce: 12826,
        signature: Uint8Array [
          198
        ],
        chainId: 'Centers',
        signatures: [
          {
            key: Uint8Array [
              78
            ],
            value: Uint8Array [
              35
            ]
          },
          {
            key: Uint8Array [
              220
            ],
            value: Uint8Array [
              201
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1
          }
        }
      },
      height: 79036,
      index: 31179,
      hash: '57d75f369e5596318a1cddb3b3814675d5f4602d',
      tags: [
        {
          key: Uint8Array [
            238
          ],
          value: Uint8Array [
            126
          ]
        },
        {
          key: Uint8Array [
            255
          ],
          value: Uint8Array [
            163
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
    from: '63e3a6e4f890c9039aeecb1128fbc4601adfbd82',
    nonce: 86673,
    signature: Uint8Array [
      240
    ],
    chainId: 'Architect',
    signatures: [
      {
        key: Uint8Array [
          227
        ],
        value: Uint8Array [
          88
        ]
      },
      {
        key: Uint8Array [
          187
        ],
        value: Uint8Array [
          224
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 15,
        address: 0
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 2,
      address: 0
    },
    sk: Uint8Array [
      202
    ],
    pk: Uint8Array [
      42
    ],
    address: '02af3aac86c481d9822ff8abf7eeb82421168f8c'
  },
  token: 'mobile',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  hash: '805f7a2c467c472069325144f155cdc7ff080d90'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    126
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  hash: '6999184c5ba074d1f843577e373d688423fa0671'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 131,
  filter: 'unleash'
});

// output
{
  topic: 'Moldovan Leu'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'overriding'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
