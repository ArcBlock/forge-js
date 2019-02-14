# API Documentation


## Table of Contents

* [Enums](#enums)
  * [StatusCode](#statuscode)
  * [TopicType](#topictype)
  * [KeyType](#keytype)
  * [HashType](#hashtype)
  * [EncodingType](#encodingtype)
  * [RoleType](#roletype)
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
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listWallet](#listwallet)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [multisig](#multisig)
  * [pinFile](#pinfile)
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
  EXPIRED_TX: 10,
  INVALID_MONIKER: 16,
  INVALID_PASSPHRASE: 17,
  INVALID_MULTISIG: 20,
  INVALID_WALLET: 21,
  INVALID_CHAIN_ID: 22,
  CONSENSUS_RPC_ERROR: 24,
  STORAGE_RPC_ERROR: 25,
  NOENT: 26,
  ACCOUNT_MIGRATED: 27,
  UNSUPPORTED_STAKE: 30,
  INSUFFICIENT_STAKE: 31,
  INVALID_STAKE_STATE: 32,
  EXPIRED_WALLET_TOKEN: 33,
  BANNED_UNSTAKE: 34,
  INVALID_ASSET: 35,
  INVALID_TX_SIZE: 36,
  INVALID_SIGNER_STATE: 37,
  INVALID_FORGE_STATE: 38,
  FORBIDDEN: 403,
  INTERNAL: 500
}
```

### TopicType

```js
{
  TRANSFER: 0,
  EXCHANGE: 1,
  DECLARE: 2,
  CREATE_ASSET: 3,
  UPDATE_ASSET: 4,
  STAKE: 5,
  ACCOUNT_MIGRATE: 6,
  BEGIN_BLOCK: 16,
  END_BLOCK: 17,
  CONSENSUS_UPGRADE: 21,
  DECLARE_FILE: 22,
  SYS_UPGRADE: 23,
  ACCOUNT_STATE: 129,
  ASSET_STATE: 130,
  FORGE_STATE: 131,
  STAKE_STATE: 132
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
  KECCAK_384: 6,
  SHA3_384: 7,
  KECCAK_512: 13,
  SHA3_512: 14
}
```

### EncodingType

```js
{
  BASE16: 0,
  BASE58: 1
}
```

### RoleType

```js
{
  ROLE_ACCOUNT: 0,
  ROLE_NODE: 1,
  ROLE_DEVICE: 2,
  ROLE_APPLICATION: 3,
  ROLE_SMART_CONTRACT: 4,
  ROLE_BOT: 5,
  ROLE_ASSET: 6,
  ROLE_STAKE: 7,
  ROLE_VALIDATOR: 8
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
  'ConsensusUpgradeTx',
  'CreateAssetTx',
  'DeclareFileTx',
  'DeclareTx',
  'ExchangeTx',
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
      hash: 1,
      address: 0,
      role: 7
    }
  },
  from: '9d5957fd4441d781b2507d84c3018707b8fe00ae',
  nonce: 75802,
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      235
    ],
    pk: Uint8Array [
      99
    ],
    address: '9d9377d3788d76ead965b16f2d2e786d834439ae'
  },
  token: 'zero tolerance'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  tx: {
    from: 'ea11f51010db4fa89ca6d5ed30a763ae4a5ee237',
    nonce: 87581,
    signature: Uint8Array [
      23
    ],
    chainId: 'invoice',
    signatures: [
      {
        key: Uint8Array [
          254
        ],
        value: Uint8Array [
          184
        ]
      },
      {
        key: Uint8Array [
          148
        ],
        value: Uint8Array [
          168
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 1,
        role: 0
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Robust',
  type: {
    pk: 1,
    hash: 7,
    address: 1,
    role: 8
  },
  moniker: 'Interactions'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  token: 'Handmade Steel Tuna',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      239
    ],
    pk: Uint8Array [
      50
    ],
    address: 'ca8d590f6c9e936d9bae25603a5512ec9837de57'
  }
}
});
```

### declareNode

```js
const result = await client.declareNode({
  validator: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      160
    ],
    pk: Uint8Array [
      23
    ],
    address: 'f01c78850bd5af3446b8031d41bc0b69e3dd28b6'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '7f369ff5d990cf42dca9d52dd84db52c6c70e48a',
  keys: [
    'functionalities',
    'CSS'
  ],
  appHash: '47890f4300602c96ec2f47f8c3ec5852e449a4ad'
});

// output
{
  code: 30,
  state: {
    balance: '23114',
    nonce: 3408,
    numTxs: 17257,
    address: '8cf0f134bde0f319b507e0bb6b8d32cb4d3551c1',
    pk: Uint8Array [
      220
    ],
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 5
    },
    moniker: 'Robust',
    context: {
      genesisTx: 'override',
      renaissanceTx: 'open-source',
      genesisTime: '2019-02-12T00:12:45.821Z',
      renaissanceTime: '2019-02-12T00:12:45.821Z'
    },
    migratedTo: [
      'Up-sized',
      'explicit'
    ],
    migratedFrom: [
      'Frozen',
      'target'
    ],
    numAssets: 85079,
    stake: {
      totalStakes: '53646',
      totalUnstakes: '18342',
      totalReceivedStakes: '44688',
      recentStakes: {
        items: [
          Uint8Array [
            230
          ],
          Uint8Array [
            58
          ]
        ],
        typeUrl: 'Small Wooden Towels',
        maxItems: 40480,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            67
          ],
          Uint8Array [
            118
          ]
        ],
        typeUrl: 'Orchard',
        maxItems: 33564,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          148
        ],
        Uint8Array [
          240
        ]
      ],
      typeUrl: 'deploy',
      maxItems: 60222,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 1,
        role: 8
      }
    }
  }
}
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '215a5c98cde10ac184eecd72c6f4a028c28b2d0e',
  keys: [
    'transmitting',
    'wireless'
  ],
  appHash: 'fe41c91a1e77e3b196a2d9cfcd9bd5e2c0086da2'
});

// output
{
  code: 3,
  state: {
    address: 'b17baecdd56b1b4e9da63c7087ce9f37971fc96f',
    owner: 'Ramp',
    moniker: 'transform',
    readonly: undefined,
    stake: {
      totalStakes: '37580',
      totalUnstakes: '76375',
      totalReceivedStakes: '12917',
      recentStakes: {
        items: [
          Uint8Array [
            39
          ],
          Uint8Array [
            86
          ]
        ],
        typeUrl: 'Human',
        maxItems: 93111,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            137
          ],
          Uint8Array [
            202
          ]
        ],
        typeUrl: 'Oklahoma',
        maxItems: 82683,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Vietnam',
      renaissanceTx: 'action-items',
      genesisTime: '2019-02-12T00:12:45.821Z',
      renaissanceTime: '2019-02-12T00:12:45.821Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 1,
        role: 7
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 15895
});

// output
{
  code: 21,
  block: {
    height: 75603,
    numTxs: 58248,
    time: '2019-02-12T00:12:45.821Z',
    appHash: 'a14210e4340c909849a8e58d675a0faef7023dce',
    proposer: '57cab4966b804959328a8d2100ae1db04d408251',
    txs: [
      {
        from: '87a08744d42fe683e076038f4a2a43d46ec7fc13',
        nonce: 61062,
        signature: Uint8Array [
          213
        ],
        chainId: 'Savings Account',
        signatures: [
          {
            key: Uint8Array [
              241
            ],
            value: Uint8Array [
              176
            ]
          },
          {
            key: Uint8Array [
              102
            ],
            value: Uint8Array [
              134
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 8
          }
        }
      },
      {
        from: '2ddab225139158b7d444ffd17f7d355635347cfa',
        nonce: 387,
        signature: Uint8Array [
          240
        ],
        chainId: 'Planner',
        signatures: [
          {
            key: Uint8Array [
              64
            ],
            value: Uint8Array [
              233
            ]
          },
          {
            key: Uint8Array [
              22
            ],
            value: Uint8Array [
              55
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 8
          }
        }
      }
    ],
    totalTxs: 80838
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  minHeight: 34621,
  maxHeight: 91258
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  blocks: [
    {
      height: 52815,
      numTxs: 46049,
      time: '2019-02-12T00:12:45.822Z',
      appHash: '2f91af64e61aa1a7989ba7495347f628ee62bd4b',
      proposer: 'e1b55ae718bc517a304536df4376233fc1ce6d30',
      txs: [
        {
          from: '59335abc3fcb4e40d9b839730e1a70837e91af0b',
          nonce: 33055,
          signature: Uint8Array [
            138
          ],
          chainId: 'grid-enabled',
          signatures: [
            {
              key: Uint8Array [
                121
              ],
              value: Uint8Array [
                48
              ]
            },
            {
              key: Uint8Array [
                57
              ],
              value: Uint8Array [
                200
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 13,
              address: 0,
              role: 7
            }
          }
        },
        {
          from: '560702fe13edb10d9d476f92911012d964777314',
          nonce: 81949,
          signature: Uint8Array [
            135
          ],
          chainId: 'redundant',
          signatures: [
            {
              key: Uint8Array [
                46
              ],
              value: Uint8Array [
                33
              ]
            },
            {
              key: Uint8Array [
                109
              ],
              value: Uint8Array [
                115
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 0,
              address: 0,
              role: 6
            }
          }
        }
      ],
      totalTxs: 28329
    },
    {
      height: 44580,
      numTxs: 90807,
      time: '2019-02-12T00:12:45.822Z',
      appHash: 'dd4955bf2a3054b2d36fc9b16f3aa4dd2fe096a4',
      proposer: '53773f22838d0acb2617a8ac6dc736f9590a3ff0',
      txs: [
        {
          from: '4bbfd6aa7959f9bc1eb927ed0cdd513f4abc3297',
          nonce: 63192,
          signature: Uint8Array [
            139
          ],
          chainId: 'Indiana',
          signatures: [
            {
              key: Uint8Array [
                115
              ],
              value: Uint8Array [
                76
              ]
            },
            {
              key: Uint8Array [
                196
              ],
              value: Uint8Array [
                252
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 1,
              address: 1,
              role: 5
            }
          }
        },
        {
          from: '4b77ad9fac6eb291acaae18d29af7037f93a59d7',
          nonce: 82903,
          signature: Uint8Array [
            154
          ],
          chainId: 'Chair',
          signatures: [
            {
              key: Uint8Array [
                118
              ],
              value: Uint8Array [
                246
              ]
            },
            {
              key: Uint8Array [
                52
              ],
              value: Uint8Array [
                219
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 7,
              address: 1,
              role: 0
            }
          }
        }
      ],
      totalTxs: 92985
    }
  ]
}
});
```

### getChainInfo

```js
const result = await client.getChainInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  info: {
    id: 'Cheese',
    network: 'Buckinghamshire',
    moniker: 'target',
    consensusVersion: 'solutions',
    synced: undefined,
    appHash: '409bf644fa268e860943615fcc2df35d06987c43',
    blockHash: Uint8Array [
      100
    ],
    blockHeight: 30303,
    blockTime: '2019-02-12T00:12:45.823Z',
    address: '9dd69f84919f47c7f2a4cff7a7077d352dc6478e',
    votingPower: 34225,
    totalTxs: 92379,
    version: 'Chair',
    dataVersion: 'Rubber',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'payment'
    },
    supportedTxs: [
      'Rufiyaa',
      'circuit'
    ]
  }
}
});
```

### getConfig

```js
const result = await client.getConfig({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  config: 'Credit Card Account'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Personal Loan Account',
    'rich'
  ],
  appHash: '113924706a39ba6d79ea40dd5f36e4134dec2601'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  state: {
    address: 'c3083f376d1e2b32ee5184fec98014b36cda0769',
    consensus: {
      maxBytes: 57139,
      maxGas: 37785,
      maxValidators: 9273,
      maxCandidates: 48440,
      pubKeyTypes: [
        'back up',
        'Mobility'
      ],
      validators: [
        {
          address: 'db9803dbb139a7f9e4a472fc6d102bf6424f2b0d',
          power: 51955
        },
        {
          address: '642f8b7aa06d2f957f3764ee3f73a661de9e812b',
          power: 1006
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 1,
            dataHash: 'generate',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 1,
            dataHash: 'Bulgarian Lev',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        totalStakes: '59083',
        totalUnstakes: '78410',
        context: {
          genesisTx: 'AGP',
          renaissanceTx: 'Creek',
          genesisTime: '2019-02-12T00:12:45.826Z',
          renaissanceTime: '2019-02-12T00:12:45.826Z'
        }
      }
    },
    version: 'Chair',
    dataVersion: 'Dynamic',
    forgeAppHash: Uint8Array [
      138
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 1,
        role: 3
      }
    }
  }
}
});
```

### getForgeStatistics

```js
const result = await client.getForgeStatistics({
  dayInfo: {
    startDate: 'AGP',
    endDate: 'Rustic'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  forgeStatistics: {
    numBlocks: [
      18400,
      60210
    ],
    numTxs: [
      21397,
      70896
    ],
    numAccounts: [
      84213,
      31260
    ],
    numAssets: [
      86165,
      72669
    ],
    numStakes: [
      '25296',
      '54108'
    ],
    numValidators: [
      49397,
      5045
    ]
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
  code: 32,
  netInfo: {
    listening: undefined,
    listeners: [
      'turn-key',
      'parsing'
    ],
    nPeers: 65005,
    peers: [
      {
        nodeInfo: {
          id: 'Gorgeous Metal Keyboard',
          network: 'Mountains',
          version: 'calculate',
          moniker: 'Implementation',
          ip: 'impactful',
          geoInfo: {
            city: 'Quality-focused',
            country: 'scale',
            latitude: 96042.88,
            longitude: 52945.99
          }
        }
      },
      {
        nodeInfo: {
          id: 'Investment Account',
          network: 'SQL',
          version: 'toolset',
          moniker: 'Coordinator',
          ip: 'Gorgeous',
          geoInfo: {
            city: 'open-source',
            country: 'Plastic',
            latitude: 21352.35,
            longitude: 5394.65
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
  address: '1ba7763478a277a657b7978b12c616b9c711b6b7',
  keys: [
    'Practical Cotton Mouse',
    'drive'
  ],
  appHash: '5b8996f00584f4961f6fcf45de3e0016230e73b3'
});

// output
{
  code: 33,
  state: {
    address: '6beb7ad014399602b34308a1bdf4a58a38cf3293',
    from: '96392ef06bee8870358080abeae5350933f2fbeb',
    to: 'dc86bf9185fde571013a6354c812e3c0576a45ff',
    balance: '86906',
    message: 'Unbranded',
    context: {
      genesisTx: 'SMTP',
      renaissanceTx: 'Kwacha',
      genesisTime: '2019-02-12T00:12:45.827Z',
      renaissanceTime: '2019-02-12T00:12:45.827Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 1,
        role: 5
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: '2129719107dee7b0c691db7f43ca776843a73281'
});

// output
{
  code: 26,
  info: {
    tx: {
      from: '355345ad05580bb8cb8098a9fac8c67e8b453d92',
      nonce: 55300,
      signature: Uint8Array [
        239
      ],
      chainId: 'transmitter',
      signatures: [
        {
          key: Uint8Array [
            218
          ],
          value: Uint8Array [
            147
          ]
        },
        {
          key: Uint8Array [
            90
          ],
          value: Uint8Array [
            26
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 3
        }
      }
    },
    height: 65974,
    index: 32670,
    hash: 'fe1893316b76f46ba8e887ee52abca647d7ff7b3',
    tags: [
      {
        key: Uint8Array [
          216
        ],
        value: Uint8Array [
          119
        ]
      },
      {
        key: Uint8Array [
          199
        ],
        value: Uint8Array [
          83
        ]
      }
    ]
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 51684
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  unconfirmedTxs: {
    nTxs: 81509,
    txs: [
      {
        from: '707a58f8c91e7d11bdcd319685813c6183e1fbc8',
        nonce: 13192,
        signature: Uint8Array [
          196
        ],
        chainId: 'Computer',
        signatures: [
          {
            key: Uint8Array [
              179
            ],
            value: Uint8Array [
              198
            ]
          },
          {
            key: Uint8Array [
              117
            ],
            value: Uint8Array [
              66
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 6
          }
        }
      },
      {
        from: 'fccb21977d8970cce71ee202a6b1b01890f51765',
        nonce: 78794,
        signature: Uint8Array [
          150
        ],
        chainId: 'technologies',
        signatures: [
          {
            key: Uint8Array [
              250
            ],
            value: Uint8Array [
              28
            ]
          },
          {
            key: Uint8Array [
              193
            ],
            value: Uint8Array [
              203
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 5
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
  code: 38,
  validatorsInfo: {
    blockHeight: 37508,
    validators: [
      {
        address: '6489a4b6e31d374149640df711f3bfbfc4351aad',
        pubKey: {
          type: 'connecting',
          data: Uint8Array [
            77
          ]
        },
        votingPower: 64091,
        proposerPriority: 'Qatar',
        name: 'program'
      },
      {
        address: 'b5e868c2603005a93b4b55d8ce57d7b891142617',
        pubKey: {
          type: 'platforms',
          data: Uint8Array [
            6
          ]
        },
        votingPower: 83580,
        proposerPriority: 'front-end',
        name: 'Grove'
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
  code: 0,
  address: '9ae78a2fcc64e7170b3298f9ba4b26077f626f9e'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '45cf44b26163773c4efb2a329ce9b6d0fcd13b10'
});

// output
{
  code: 5,
  chunk: Uint8Array [
    125
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '6da88343cc5f6ab681ff4c743b65198fdc4462bf',
  passphrase: 'Island'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'Rustic Concrete Salad',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      182
    ],
    pk: Uint8Array [
      156
    ],
    address: 'a13cd46a9652b2e6c36defd071e777ca94d25724'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'bfb1578422a0efbbc9bb1489d9ef7c7e4a4c13aa',
    nonce: 56447,
    signature: Uint8Array [
      92
    ],
    chainId: 'Soft',
    signatures: [
      {
        key: Uint8Array [
          221
        ],
        value: Uint8Array [
          154
        ]
      },
      {
        key: Uint8Array [
          162
        ],
        value: Uint8Array [
          119
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 1,
        address: 0,
        role: 8
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      243
    ],
    pk: Uint8Array [
      164
    ],
    address: 'f75dc36f5183a4c2d617ad7affe92d0645b9798e'
  },
  token: 'Massachusetts'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  tx: {
    from: '32e21ad9d52803b4c5be4711d4311e4920afdf1b',
    nonce: 42263,
    signature: Uint8Array [
      33
    ],
    chainId: 'Dynamic',
    signatures: [
      {
        key: Uint8Array [
          131
        ],
        value: Uint8Array [
          56
        ]
      },
      {
        key: Uint8Array [
          125
        ],
        value: Uint8Array [
          75
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 1,
        role: 3
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'd6360161e10f5d89f13c6a05be13a8d0d34dd3ec'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'a054f753e180f84ad7a8b5ef6b834301f2a90ecc',
      nonce: 85003,
      signature: Uint8Array [
        175
      ],
      chainId: 'index',
      signatures: [
        {
          key: Uint8Array [
            135
          ],
          value: Uint8Array [
            145
          ]
        },
        {
          key: Uint8Array [
            159
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
          hash: 14,
          address: 1,
          role: 2
        }
      }
    },
    states: [
      {
        balance: '23441',
        nonce: 16687,
        numTxs: 44287,
        address: 'a12e403db9d68c41c48ee30facf0c808670cafbc',
        pk: Uint8Array [
          50
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 3
        },
        moniker: 'indexing',
        context: {
          genesisTx: 'directional',
          renaissanceTx: 'Refined',
          genesisTime: '2019-02-12T00:12:45.829Z',
          renaissanceTime: '2019-02-12T00:12:45.829Z'
        },
        migratedTo: [
          'Bahraini Dinar',
          'Rustic'
        ],
        migratedFrom: [
          'haptic',
          'Paradigm'
        ],
        numAssets: 31725,
        stake: {
          totalStakes: '45311',
          totalUnstakes: '40631',
          totalReceivedStakes: '3737',
          recentStakes: {
            items: [
              Uint8Array [
                122
              ],
              Uint8Array [
                30
              ]
            ],
            typeUrl: 'Human',
            maxItems: 29151,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                210
              ],
              Uint8Array [
                195
              ]
            ],
            typeUrl: 'bottom-line',
            maxItems: 65954,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              144
            ],
            Uint8Array [
              248
            ]
          ],
          typeUrl: 'index',
          maxItems: 79992,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 6
          }
        }
      },
      {
        balance: '3554',
        nonce: 36027,
        numTxs: 30627,
        address: '2bf432cb12c6beaf9fc1736394ac009bc1c25cad',
        pk: Uint8Array [
          187
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 3
        },
        moniker: 'Road',
        context: {
          genesisTx: 'Seamless',
          renaissanceTx: 'extensible',
          genesisTime: '2019-02-12T00:12:45.830Z',
          renaissanceTime: '2019-02-12T00:12:45.830Z'
        },
        migratedTo: [
          'Credit Card Account',
          'index'
        ],
        migratedFrom: [
          'Fully-configurable',
          'Grocery'
        ],
        numAssets: 38555,
        stake: {
          totalStakes: '88791',
          totalUnstakes: '37968',
          totalReceivedStakes: '41798',
          recentStakes: {
            items: [
              Uint8Array [
                119
              ],
              Uint8Array [
                218
              ]
            ],
            typeUrl: 'Afghanistan',
            maxItems: 34660,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                153
              ],
              Uint8Array [
                191
              ]
            ],
            typeUrl: 'discrete',
            maxItems: 14114,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              211
            ],
            Uint8Array [
              75
            ]
          ],
          typeUrl: 'redefine',
          maxItems: 1303,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 4
          }
        }
      }
    ],
    assets: [
      {
        address: '06d533429dcab740f76f78bc6a86d63741dde025',
        owner: 'Director',
        moniker: 'Senior',
        readonly: undefined,
        stake: {
          totalStakes: '34104',
          totalUnstakes: '42295',
          totalReceivedStakes: '86675',
          recentStakes: {
            items: [
              Uint8Array [
                0
              ],
              Uint8Array [
                63
              ]
            ],
            typeUrl: 'Security',
            maxItems: 32072,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                25
              ],
              Uint8Array [
                142
              ]
            ],
            typeUrl: 'Gorgeous',
            maxItems: 48726,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'Directives',
          genesisTime: '2019-02-12T00:12:45.830Z',
          renaissanceTime: '2019-02-12T00:12:45.830Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 0
          }
        }
      },
      {
        address: 'b2eedac47b9e02a8c07aea6052bce19615e978e9',
        owner: 'Utah',
        moniker: 'Bedfordshire',
        readonly: undefined,
        stake: {
          totalStakes: '10689',
          totalUnstakes: '49528',
          totalReceivedStakes: '27332',
          recentStakes: {
            items: [
              Uint8Array [
                158
              ],
              Uint8Array [
                184
              ]
            ],
            typeUrl: 'Shoes',
            maxItems: 13752,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                207
              ],
              Uint8Array [
                14
              ]
            ],
            typeUrl: 'Rubber',
            maxItems: 49778,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'holistic',
          renaissanceTx: 'salmon',
          genesisTime: '2019-02-12T00:12:45.830Z',
          renaissanceTime: '2019-02-12T00:12:45.830Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 6
          }
        }
      }
    ],
    stakes: [
      {
        address: 'a87dc4f11ca624ac1dad0d1e685bf446af28ccc6',
        from: 'c8e7cb2197cb4c51fb08644b8c46995f09aaf3e6',
        to: '73ded5871b363cf1cc40eae684528defc7ab656a',
        balance: '71445',
        message: 'override',
        context: {
          genesisTx: 'Sausages',
          renaissanceTx: 'Cambridgeshire',
          genesisTime: '2019-02-12T00:12:45.830Z',
          renaissanceTime: '2019-02-12T00:12:45.830Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 5
          }
        }
      },
      {
        address: 'edc3649257917438e83e2e079a59a68fcee5ea9c',
        from: 'a19204bd9d03a99f1212d07fb8a7adb9a0cdf2df',
        to: '4d3421029cf927814ddcdc440076ffed5e22ea59',
        balance: '42907',
        message: 'Communications',
        context: {
          genesisTx: 'District',
          renaissanceTx: 'Lead',
          genesisTime: '2019-02-12T00:12:45.831Z',
          renaissanceTime: '2019-02-12T00:12:45.831Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 4
          }
        }
      }
    ],
    context: {
      txHash: 'eb25d36e48f689c60c66edd4fd8711d583adc8f1',
      blockHeight: 15985,
      blockTime: '2019-02-12T00:12:45.831Z',
      totalTxs: 75897
    },
    appState: {
      address: 'cf40ad1e6432587dc1efdbbbb78be74e21a8de99',
      consensus: {
        maxBytes: 78931,
        maxGas: 18817,
        maxValidators: 18252,
        maxCandidates: 15498,
        pubKeyTypes: [
          'ivory',
          'Global'
        ],
        validators: [
          {
            address: '52305e35227f2a9369b143697e3e867d545093f1',
            power: 67606
          },
          {
            address: 'ffd53371ba1d72254f6067fb9bd236738c634708',
            power: 41939
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 3,
              dataHash: 'RAM',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 12,
              dataHash: 'connect',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          totalStakes: '5971',
          totalUnstakes: '73365',
          context: {
            genesisTx: '1080p',
            renaissanceTx: 'Refined',
            genesisTime: '2019-02-12T00:12:45.831Z',
            renaissanceTime: '2019-02-12T00:12:45.831Z'
          }
        }
      },
      version: 'Plastic',
      dataVersion: 'Mobility',
      forgeAppHash: Uint8Array [
        6
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 1,
          address: 1,
          role: 8
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 5
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '876a6bf9e43768a73a657b0487f9941a371da1ea',
      nonce: 99118,
      signature: Uint8Array [
        83
      ],
      chainId: 'bypass',
      signatures: [
        {
          key: Uint8Array [
            70
          ],
          value: Uint8Array [
            166
          ]
        },
        {
          key: Uint8Array [
            39
          ],
          value: Uint8Array [
            170
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 13,
          address: 1,
          role: 3
        }
      }
    },
    states: [
      {
        balance: '27235',
        nonce: 42799,
        numTxs: 2236,
        address: 'e56176120a0f375c9be968e7ad1c28ccb7b6f3f8',
        pk: Uint8Array [
          76
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 1
        },
        moniker: 'wireless',
        context: {
          genesisTx: 'Soap',
          renaissanceTx: 'gold',
          genesisTime: '2019-02-12T00:12:45.831Z',
          renaissanceTime: '2019-02-12T00:12:45.831Z'
        },
        migratedTo: [
          'cohesive',
          'cohesive'
        ],
        migratedFrom: [
          'Shoes',
          'Soft'
        ],
        numAssets: 42439,
        stake: {
          totalStakes: '43760',
          totalUnstakes: '81433',
          totalReceivedStakes: '59838',
          recentStakes: {
            items: [
              Uint8Array [
                187
              ],
              Uint8Array [
                251
              ]
            ],
            typeUrl: 'integrated',
            maxItems: 13132,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                175
              ],
              Uint8Array [
                28
              ]
            ],
            typeUrl: 'Clothing',
            maxItems: 3488,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              29
            ],
            Uint8Array [
              19
            ]
          ],
          typeUrl: 'solid state',
          maxItems: 5006,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 2
          }
        }
      },
      {
        balance: '89938',
        nonce: 51960,
        numTxs: 50220,
        address: 'c4d7a3519d8a9b9080026f3feccf145e280bd983',
        pk: Uint8Array [
          96
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 5
        },
        moniker: 'Home Loan Account',
        context: {
          genesisTx: 'Cotton',
          renaissanceTx: 'full-range',
          genesisTime: '2019-02-12T00:12:45.832Z',
          renaissanceTime: '2019-02-12T00:12:45.832Z'
        },
        migratedTo: [
          'transparent',
          'e-commerce'
        ],
        migratedFrom: [
          'payment',
          'Monitored'
        ],
        numAssets: 81573,
        stake: {
          totalStakes: '46850',
          totalUnstakes: '84369',
          totalReceivedStakes: '90283',
          recentStakes: {
            items: [
              Uint8Array [
                106
              ],
              Uint8Array [
                246
              ]
            ],
            typeUrl: 'Hat',
            maxItems: 51094,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                225
              ],
              Uint8Array [
                131
              ]
            ],
            typeUrl: 'Table',
            maxItems: 83746,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              218
            ],
            Uint8Array [
              114
            ]
          ],
          typeUrl: 'Strategist',
          maxItems: 47585,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 7
          }
        }
      }
    ],
    assets: [
      {
        address: '4077770902abe07f01734f36aea0cb13234f18ad',
        owner: 'Dalasi',
        moniker: 'Avon',
        readonly: undefined,
        stake: {
          totalStakes: '51909',
          totalUnstakes: '65829',
          totalReceivedStakes: '86259',
          recentStakes: {
            items: [
              Uint8Array [
                165
              ],
              Uint8Array [
                8
              ]
            ],
            typeUrl: 'teal',
            maxItems: 54386,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                121
              ],
              Uint8Array [
                250
              ]
            ],
            typeUrl: 'orchid',
            maxItems: 51955,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Frozen',
          renaissanceTx: 'Granite',
          genesisTime: '2019-02-12T00:12:45.832Z',
          renaissanceTime: '2019-02-12T00:12:45.832Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 1,
            role: 6
          }
        }
      },
      {
        address: '4d7ec8445210f1604ee5eac2d2cde66c17afd431',
        owner: 'Sri Lanka',
        moniker: 'capacitor',
        readonly: undefined,
        stake: {
          totalStakes: '48596',
          totalUnstakes: '7131',
          totalReceivedStakes: '16019',
          recentStakes: {
            items: [
              Uint8Array [
                214
              ],
              Uint8Array [
                229
              ]
            ],
            typeUrl: 'Bike',
            maxItems: 13498,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                103
              ],
              Uint8Array [
                124
              ]
            ],
            typeUrl: 'Fresh',
            maxItems: 11625,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Overpass',
          renaissanceTx: 'Codes specifically reserved for testing purposes',
          genesisTime: '2019-02-12T00:12:45.832Z',
          renaissanceTime: '2019-02-12T00:12:45.832Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 2
          }
        }
      }
    ],
    stakes: [
      {
        address: '77d99bf2e3250093f6ad5bb44b1c0127e8b28b01',
        from: 'b250bd92c3781c34e0d6bca247989d5139a11035',
        to: '7e9e928ed330f1347e1a1349d23e65bdf53613ff',
        balance: '9123',
        message: 'gold',
        context: {
          genesisTx: 'Specialist',
          renaissanceTx: 'Auto Loan Account',
          genesisTime: '2019-02-12T00:12:45.832Z',
          renaissanceTime: '2019-02-12T00:12:45.832Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 5
          }
        }
      },
      {
        address: '1c0f37efba3351fa7f8e249ddda9f86b6ea2f8d1',
        from: '25fcc44c4e9d592d7ec95b97d1bc988e35bf9b13',
        to: '9c89db2c0e91542f0b4fd54a0580cf0a5a0ce5b3',
        balance: '24201',
        message: 'Kentucky',
        context: {
          genesisTx: 'Movies',
          renaissanceTx: 'Interactions',
          genesisTime: '2019-02-12T00:12:45.833Z',
          renaissanceTime: '2019-02-12T00:12:45.833Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 4
          }
        }
      }
    ],
    context: {
      txHash: '71b03f3c1ed6a4ca3e58bbbd4d8ce6793706afcb',
      blockHeight: 21209,
      blockTime: '2019-02-12T00:12:45.833Z',
      totalTxs: 87663
    },
    appState: {
      address: 'b02d5555bb4fa228a5a98cdcb4e6152d2327d84c',
      consensus: {
        maxBytes: 35324,
        maxGas: 82003,
        maxValidators: 54119,
        maxCandidates: 90644,
        pubKeyTypes: [
          'connect',
          'Bedfordshire'
        ],
        validators: [
          {
            address: '967be15bacb92918c5879d661ea43bdcd7b8ad26',
            power: 54316
          },
          {
            address: '4ca68aef5e4a5ffb31d216606fe680226fb5fdc1',
            power: 83391
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 13,
              dataHash: 'backing up',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'haptic',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          totalStakes: '77680',
          totalUnstakes: '23807',
          context: {
            genesisTx: 'withdrawal',
            renaissanceTx: 'circuit',
            genesisTime: '2019-02-12T00:12:45.833Z',
            renaissanceTime: '2019-02-12T00:12:45.833Z'
          }
        }
      },
      version: 'Money Market Account',
      dataVersion: 'scalable',
      forgeAppHash: Uint8Array [
        208
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 0
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
    code: 31
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    128
  ],
  type: {
    pk: 0,
    hash: 14,
    address: 0,
    role: 6
  },
  passphrase: 'matrix',
  moniker: 'markets'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  token: 'Mouse',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      73
    ],
    pk: Uint8Array [
      160
    ],
    address: '1e0004bca551ad7b168120859236db7958210f56'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '7d20ef13ac587fffd6adac0cb5d50e5ae9d4b405'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20
}
});
```

### search

```js
const result = await client.search({
  key: 'Sleek Rubber Cheese',
  value: 'maroon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  txs: [
    {
      tx: {
        from: '4949ea07365d56c2ffb1a5f82bd810186dea6640',
        nonce: 46378,
        signature: Uint8Array [
          211
        ],
        chainId: 'Coordinator',
        signatures: [
          {
            key: Uint8Array [
              179
            ],
            value: Uint8Array [
              118
            ]
          },
          {
            key: Uint8Array [
              235
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
            hash: 6,
            address: 0,
            role: 4
          }
        }
      },
      height: 50473,
      index: 7211,
      hash: '0d3053d8250f23e696ea123859650a1f7177ef08',
      tags: [
        {
          key: Uint8Array [
            135
          ],
          value: Uint8Array [
            133
          ]
        },
        {
          key: Uint8Array [
            168
          ],
          value: Uint8Array [
            98
          ]
        }
      ]
    },
    {
      tx: {
        from: '096aa1db4d2f2121af65a6d346dc49fdedcfd120',
        nonce: 25216,
        signature: Uint8Array [
          174
        ],
        chainId: 'Canyon',
        signatures: [
          {
            key: Uint8Array [
              111
            ],
            value: Uint8Array [
              139
            ]
          },
          {
            key: Uint8Array [
              143
            ],
            value: Uint8Array [
              5
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 1
          }
        }
      },
      height: 48018,
      index: 92055,
      hash: 'faa58712c662b18ff9a15936a42c95e1cb45c172',
      tags: [
        {
          key: Uint8Array [
            125
          ],
          value: Uint8Array [
            184
          ]
        },
        {
          key: Uint8Array [
            7
          ],
          value: Uint8Array [
            117
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
    from: '31ece1b45ef404406b8a21b161a19cd177b68b79',
    nonce: 35363,
    signature: Uint8Array [
      161
    ],
    chainId: 'cross-platform',
    signatures: [
      {
        key: Uint8Array [
          255
        ],
        value: Uint8Array [
          46
        ]
      },
      {
        key: Uint8Array [
          57
        ],
        value: Uint8Array [
          162
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 0,
        address: 1,
        role: 5
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      243
    ],
    pk: Uint8Array [
      148
    ],
    address: 'eb111e7b93986072792c7e84ca3698703d6592ab'
  },
  token: 'Auto Loan Account',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  hash: 'be8834e260757f175ad26737575438452b7f7c82'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    68
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  hash: 'cf715b67fb2c2ed9cb4e78ca22fdd9fda6d8d03e'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 131,
  filter: 'Jewelery'
});

// output
{
  topic: 'Ports'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'SMTP'
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
