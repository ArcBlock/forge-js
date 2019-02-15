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
  * [getAssetAddress](#getassetaddress)
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
  * [listTransactions](#listtransactions)
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
      hash: 7,
      address: 0,
      role: 7
    }
  },
  from: 'ff938caeeafc611a12788147505b2cd8b35ca983',
  nonce: 68489,
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      6
    ],
    pk: Uint8Array [
      197
    ],
    address: '8cbe5b5ec8a5591857d14531f798fce7840520ca'
  },
  token: 'Music'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30,
  tx: {
    from: '72746875c675f8ed6ab9483ac6d0de49f0ca381a',
    nonce: 90269,
    signature: Uint8Array [
      47
    ],
    chainId: 'communities',
    signatures: [
      {
        key: Uint8Array [
          67
        ],
        value: Uint8Array [
          90
        ]
      },
      {
        key: Uint8Array [
          119
        ],
        value: Uint8Array [
          234
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
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Bedfordshire',
  type: {
    pk: 0,
    hash: 13,
    address: 0,
    role: 6
  },
  moniker: 'XSS'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  token: 'revolutionary',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      196
    ],
    pk: Uint8Array [
      155
    ],
    address: '454b0d56a522a969844fa2d506b67f8c33f41c77'
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
  code: 30,
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      160
    ],
    pk: Uint8Array [
      244
    ],
    address: '1f0ff08dad410739cf047127424f414aacb3b4f6'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '010ff5786ae55d9f7f89f52261e0c9c6865ecf99',
  keys: [
    'Connecticut',
    'Swaziland'
  ],
  appHash: '6d521974f313d75da14f1ea50750c8f6b6a97345'
});

// output
{
  code: 1,
  state: {
    balance: '75399',
    nonce: 27504,
    numTxs: 37730,
    address: '34f49d26691b48f66fa3351bde913ba789e76a63',
    pk: Uint8Array [
      169
    ],
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 3
    },
    moniker: 'Washington',
    context: {
      genesisTx: 'Practical',
      renaissanceTx: 'Taiwan',
      genesisTime: '2019-02-15T05:06:27.204Z',
      renaissanceTime: '2019-02-15T05:06:27.204Z'
    },
    migratedTo: [
      'Handcrafted',
      'PNG'
    ],
    migratedFrom: [
      'orchestrate',
      'bypass'
    ],
    numAssets: 77256,
    stake: {
      totalStakes: '21585',
      totalUnstakes: '68629',
      totalReceivedStakes: '41760',
      recentStakes: {
        items: [
          Uint8Array [
            57
          ],
          Uint8Array [
            251
          ]
        ],
        typeUrl: 'service-desk',
        maxItems: 54118,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            213
          ],
          Uint8Array [
            155
          ]
        ],
        typeUrl: 'feed',
        maxItems: 71216,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          164
        ],
        Uint8Array [
          8
        ]
      ],
      typeUrl: 'primary',
      maxItems: 66079,
      circular: undefined,
      fifo: undefined
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
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'Specialist',
  itx: {
    moniker: 'Awesome Concrete Gloves',
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 1,
        role: 6
      }
    },
    readonly: undefined
  },
  walletType: {
    pk: 0,
    hash: 0,
    address: 0,
    role: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  assetAddress: 'Plastic'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'dfa53d1019e4f39088f0aec42dffea247ca9a0c0',
  keys: [
    'incentivize',
    'olive'
  ],
  appHash: 'c65e493f997181691714758a0935f9810cb08b45'
});

// output
{
  code: 32,
  state: {
    address: 'b39dcee3120e24a652c8559325984539000c52c1',
    owner: 'repurpose',
    moniker: 'Handcrafted Granite Mouse',
    readonly: undefined,
    stake: {
      totalStakes: '38369',
      totalUnstakes: '42848',
      totalReceivedStakes: '34196',
      recentStakes: {
        items: [
          Uint8Array [
            240
          ],
          Uint8Array [
            151
          ]
        ],
        typeUrl: 'Pitcairn Islands',
        maxItems: 12422,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            214
          ],
          Uint8Array [
            94
          ]
        ],
        typeUrl: 'Manager',
        maxItems: 72475,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Personal Loan Account',
      renaissanceTx: 'Fort',
      genesisTime: '2019-02-15T05:06:27.205Z',
      renaissanceTime: '2019-02-15T05:06:27.205Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 0,
        role: 6
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 42156
});

// output
{
  code: 403,
  block: {
    height: 70698,
    numTxs: 96191,
    time: '2019-02-15T05:06:27.206Z',
    appHash: '421b5b75aa2de2e37310cd56c044bcf532fcff5a',
    proposer: 'c8cdc824934d5f7bba49c9d700b6f795255925e8',
    txs: [
      {
        from: '42a73dc0b59d1fc33dde48793f437a4a640db21c',
        nonce: 57281,
        signature: Uint8Array [
          171
        ],
        chainId: 'haptic',
        signatures: [
          {
            key: Uint8Array [
              108
            ],
            value: Uint8Array [
              124
            ]
          },
          {
            key: Uint8Array [
              28
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
            role: 4
          }
        }
      },
      {
        from: '88853d777e7f0406b81386c8903cb2e019003717',
        nonce: 8472,
        signature: Uint8Array [
          250
        ],
        chainId: 'Sleek',
        signatures: [
          {
            key: Uint8Array [
              138
            ],
            value: Uint8Array [
              164
            ]
          },
          {
            key: Uint8Array [
              63
            ],
            value: Uint8Array [
              8
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 1
          }
        }
      }
    ],
    totalTxs: 48868
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  minHeight: 35360,
  maxHeight: 67336
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  blocks: [
    {
      height: 79203,
      numTxs: 55268,
      time: '2019-02-15T05:06:27.206Z',
      appHash: 'c2ad9540c0366ad744d67a6b3a404706e2f86b88',
      proposer: '140c024a986db11694c28b65ff91bfb9161ed8b0',
      txs: [
        {
          from: '0473101837e4e98c3bed836d97d274825ac7b287',
          nonce: 70289,
          signature: Uint8Array [
            224
          ],
          chainId: 'Hill',
          signatures: [
            {
              key: Uint8Array [
                231
              ],
              value: Uint8Array [
                103
              ]
            },
            {
              key: Uint8Array [
                14
              ],
              value: Uint8Array [
                63
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 7,
              address: 1,
              role: 5
            }
          }
        },
        {
          from: '973fb1fc2c0c95528577d5604e80281fc34bce90',
          nonce: 23240,
          signature: Uint8Array [
            22
          ],
          chainId: 'paradigm',
          signatures: [
            {
              key: Uint8Array [
                147
              ],
              value: Uint8Array [
                148
              ]
            },
            {
              key: Uint8Array [
                4
              ],
              value: Uint8Array [
                194
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 6,
              address: 1,
              role: 6
            }
          }
        }
      ],
      totalTxs: 48584
    },
    {
      height: 85256,
      numTxs: 99998,
      time: '2019-02-15T05:06:27.206Z',
      appHash: 'eb4700baa42e5970fca2200d7b3a39cbec0b66ed',
      proposer: 'a8a0c70b19edc665c52a38be1e78eece5ba36ae1',
      txs: [
        {
          from: '38c360a5fcec5d9e9d350b56e3c6d69be1a72d04',
          nonce: 705,
          signature: Uint8Array [
            191
          ],
          chainId: 'Silver',
          signatures: [
            {
              key: Uint8Array [
                97
              ],
              value: Uint8Array [
                138
              ]
            },
            {
              key: Uint8Array [
                253
              ],
              value: Uint8Array [
                84
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
        },
        {
          from: 'c4df7bcf11c3e51423fb11b277b22fd3d37307bc',
          nonce: 66920,
          signature: Uint8Array [
            49
          ],
          chainId: 'Buckinghamshire',
          signatures: [
            {
              key: Uint8Array [
                72
              ],
              value: Uint8Array [
                96
              ]
            },
            {
              key: Uint8Array [
                81
              ],
              value: Uint8Array [
                242
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 14,
              address: 1,
              role: 8
            }
          }
        }
      ],
      totalTxs: 57845
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
  code: 8,
  info: {
    id: 'access',
    network: 'magnetic',
    moniker: 'strategize',
    consensusVersion: 'mobile',
    synced: undefined,
    appHash: 'd2548d46bd637b906bfa75249c7c86aaa28a217a',
    blockHash: Uint8Array [
      134
    ],
    blockHeight: 23359,
    blockTime: '2019-02-15T05:06:27.207Z',
    address: 'bfd3f4c4042511f58e00001c2eef800a05421028',
    votingPower: 44244,
    totalTxs: 61238,
    version: 'Minnesota',
    dataVersion: 'Infrastructure',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'deposit'
    },
    supportedTxs: [
      'indexing',
      'Metal'
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
  code: 9,
  config: 'connecting'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Orchestrator',
    'Savings Account'
  ],
  appHash: '712d34714b2b77d70e508d63858fd768109c303b'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  state: {
    address: '1ca7883b406373e2c8b3821290e581a0e0e7a177',
    consensus: {
      maxBytes: 32501,
      maxGas: 93187,
      maxValidators: 83873,
      maxCandidates: 5034,
      pubKeyTypes: [
        'Saudi Arabia',
        'navigate'
      ],
      validators: [
        {
          address: '7971cdb464f27ac93a2e3105eae13cea46a067bc',
          power: 18647
        },
        {
          address: 'f721c425c23ab8df3bf1efc9cd35e7e27e9c6b8f',
          power: 39583
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 14,
            dataHash: 'Hong Kong Dollar',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'Executive',
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
        totalStakes: '39270',
        totalUnstakes: '31378',
        context: {
          genesisTx: 'transmit',
          renaissanceTx: 'Rustic',
          genesisTime: '2019-02-15T05:06:27.208Z',
          renaissanceTime: '2019-02-15T05:06:27.208Z'
        }
      }
    },
    version: 'Intelligent',
    dataVersion: 'Home Loan Account',
    forgeAppHash: Uint8Array [
      30
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 0,
        address: 1,
        role: 6
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
    startDate: 'productize',
    endDate: 'Libyan Arab Jamahiriya'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  forgeStatistics: {
    numBlocks: [
      40885,
      15277
    ],
    numTxs: [
      30089,
      29483
    ],
    numStakes: [
      '62231',
      '35475'
    ],
    numValidators: [
      56614,
      66351
    ],
    numAccountMigrateTxs: [
      56250,
      44010
    ],
    numCreateAssetTxs: [
      285,
      88825
    ],
    numConsensusUpgradeTxs: [
      94169,
      3153
    ],
    numDeclareTxs: [
      53170,
      6926
    ],
    numDeclareFileTxs: [
      43395,
      44405
    ],
    numExchangeTxs: [
      26328,
      86977
    ],
    numStakeTxs: [
      24433,
      60615
    ],
    numSysUpgradeTxs: [
      27408,
      13887
    ],
    numTransferTxs: [
      46908,
      11428
    ],
    numUpdateAssetTxs: [
      56395,
      34799
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
  code: 34,
  netInfo: {
    listening: undefined,
    listeners: [
      'Personal Loan Account',
      'hacking'
    ],
    nPeers: 1656,
    peers: [
      {
        nodeInfo: {
          id: 'Vista',
          network: 'Frozen',
          version: 'SSL',
          moniker: 'Gorgeous',
          ip: 'parse',
          geoInfo: {
            city: 'invoice',
            country: 'Svalbard & Jan Mayen Islands',
            latitude: 24347.85,
            longitude: 75784.84
          }
        }
      },
      {
        nodeInfo: {
          id: 'hack',
          network: 'Mountain',
          version: 'navigating',
          moniker: 'Bedfordshire',
          ip: 'Global',
          geoInfo: {
            city: 'Jewelery',
            country: 'Games',
            latitude: 40809.28,
            longitude: 4046.13
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
  address: '9514ce06af56b76088bd4b87464ba3118a0ec65f',
  keys: [
    'port',
    'Hat'
  ],
  appHash: '941a1028f9dfc1b4f40437b9a608e90937aecd20'
});

// output
{
  code: 31,
  state: {
    address: '21c2a2a92cd18eed97802e402bbee5ee5c65633f',
    from: '41d3b006f216bd25c59c7930aa41edee6636249d',
    to: '5815b051cb745569127e08f270effe45436258ed',
    balance: '96583',
    message: 'Bosnia and Herzegovina',
    context: {
      genesisTx: 'extend',
      renaissanceTx: 'reboot',
      genesisTime: '2019-02-15T05:06:27.209Z',
      renaissanceTime: '2019-02-15T05:06:27.209Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 1,
        role: 1
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: '61587d3cc6b70fa6ac1ad8644371c13fbc3896b5'
});

// output
{
  code: 1,
  info: {
    tx: {
      from: 'fc3053b10bd274726f1ec09f95abf7aa9cb58aed',
      nonce: 38559,
      signature: Uint8Array [
        190
      ],
      chainId: 'Developer',
      signatures: [
        {
          key: Uint8Array [
            202
          ],
          value: Uint8Array [
            32
          ]
        },
        {
          key: Uint8Array [
            68
          ],
          value: Uint8Array [
            91
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
    },
    height: 72331,
    index: 27372,
    hash: '03bd441e47608fbdc3a62f28fcfa8c414940bfe7',
    tags: [
      {
        key: Uint8Array [
          113
        ],
        value: Uint8Array [
          175
        ]
      },
      {
        key: Uint8Array [
          98
        ],
        value: Uint8Array [
          176
        ]
      }
    ],
    code: 5
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 86947
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  unconfirmedTxs: {
    nTxs: 11546,
    txs: [
      {
        from: '409d5eb86344e7d1797326c072e41a68432736d2',
        nonce: 69633,
        signature: Uint8Array [
          148
        ],
        chainId: 'moratorium',
        signatures: [
          {
            key: Uint8Array [
              49
            ],
            value: Uint8Array [
              30
            ]
          },
          {
            key: Uint8Array [
              25
            ],
            value: Uint8Array [
              163
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 8
          }
        }
      },
      {
        from: '4aaa744e3cfbd7e1f6ab07b28ece44e9d940d865',
        nonce: 59417,
        signature: Uint8Array [
          202
        ],
        chainId: 'Integration',
        signatures: [
          {
            key: Uint8Array [
              225
            ],
            value: Uint8Array [
              136
            ]
          },
          {
            key: Uint8Array [
              32
            ],
            value: Uint8Array [
              99
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 6
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
  code: 4,
  validatorsInfo: {
    blockHeight: 6910,
    validators: [
      {
        address: '5c09f36077f9fef4cacc00eac34e4e790b20fe7c',
        pubKey: {
          type: 'Intelligent',
          data: Uint8Array [
            225
          ]
        },
        votingPower: 81376,
        proposerPriority: 'Steel',
        name: 'Generic Frozen Towels'
      },
      {
        address: '56faf0290129e4d577b1228efa646442ec3eae01',
        pubKey: {
          type: 'Expanded',
          data: Uint8Array [
            89
          ]
        },
        votingPower: 48021,
        proposerPriority: 'seamless',
        name: 'Small Metal Shirt'
      }
    ]
  }
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Shoes',
    size: 51045,
    order: [
      {
        field: 'e-tailers',
        type: 'deposit'
      },
      {
        field: 'compressing',
        type: 'Sleek Soft Pizza'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'International',
    endDateTime: 'Analyst'
  },
  addressFilter: {
    sender: 'user-centric',
    receiver: 'streamline'
  },
  typeFilter: {
    types: [
      'salmon',
      'Practical'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  page: {
    cursor: 'Representative',
    next: undefined,
    total: 24057
  },
  transactions: [
    {
      hash: '7bc7430d9ea54a5fec4601b459f363687a371fb2',
      sender: 'back-end',
      receiver: 'world-class',
      time: 'Road',
      type: 'Functionality',
      tx: {
        from: '38ac05e3a7cd7d1a828a0cd4a68920c48a08fbf1',
        nonce: 81820,
        signature: Uint8Array [
          161
        ],
        chainId: 'hack',
        signatures: [
          {
            key: Uint8Array [
              247
            ],
            value: Uint8Array [
              250
            ]
          },
          {
            key: Uint8Array [
              49
            ],
            value: Uint8Array [
              22
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 7
          }
        }
      }
    },
    {
      hash: 'ee192b8b7e5ca2dbff08e73e23375d2e9d569c17',
      sender: 'success',
      receiver: 'Buckinghamshire',
      time: 'Practical',
      type: 'parsing',
      tx: {
        from: 'b4076f255643b8167426638216ca49f49a64a645',
        nonce: 25742,
        signature: Uint8Array [
          255
        ],
        chainId: 'Senior',
        signatures: [
          {
            key: Uint8Array [
              112
            ],
            value: Uint8Array [
              147
            ]
          },
          {
            key: Uint8Array [
              20
            ],
            value: Uint8Array [
              218
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 0
          }
        }
      }
    }
  ]
}
});
```

### listWallet

```js
const stream = client.listWallet({});

// output
{
  code: 16,
  address: '014715949b94d021df409f4e22e7579fe3eb272a'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'e83943712928620b869d1099656c4912f745ebc8'
});

// output
{
  code: 8,
  chunk: Uint8Array [
    17
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '1dc8888e89bd131aa9a6b53d0b6fcacec30ffb75',
  passphrase: 'Branding'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  token: 'Principal',
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      157
    ],
    pk: Uint8Array [
      165
    ],
    address: '3ca74ce7dda32584ca2ae0799739e3a3a2709c14'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '7f03200abab83a0a8b92bbd1e5c1697af603ab6e',
    nonce: 31211,
    signature: Uint8Array [
      126
    ],
    chainId: 'Antigua and Barbuda',
    signatures: [
      {
        key: Uint8Array [
          129
        ],
        value: Uint8Array [
          82
        ]
      },
      {
        key: Uint8Array [
          237
        ],
        value: Uint8Array [
          7
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 0,
        role: 2
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      47
    ],
    pk: Uint8Array [
      241
    ],
    address: '6547674b15db0f930a0cb704e783f39c256087e0'
  },
  token: 'e-services'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  tx: {
    from: '424b9bf41c89b1eb2279d98ff151a63e8fc390b0',
    nonce: 61117,
    signature: Uint8Array [
      107
    ],
    chainId: 'Grocery',
    signatures: [
      {
        key: Uint8Array [
          55
        ],
        value: Uint8Array [
          120
        ]
      },
      {
        key: Uint8Array [
          23
        ],
        value: Uint8Array [
          254
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 0,
        role: 6
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'ed9949e2f0d687855fe40e9feacc4c13467b3c55'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '4d87e0c855923e5d0a5a5ac577d02ff522d5e85d',
      nonce: 18315,
      signature: Uint8Array [
        162
      ],
      chainId: 'secondary',
      signatures: [
        {
          key: Uint8Array [
            97
          ],
          value: Uint8Array [
            55
          ]
        },
        {
          key: Uint8Array [
            158
          ],
          value: Uint8Array [
            16
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 7
        }
      }
    },
    states: [
      {
        balance: '51612',
        nonce: 96048,
        numTxs: 37004,
        address: 'f235d300c78ff813479c768fc034569aa66fd7e0',
        pk: Uint8Array [
          222
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 3
        },
        moniker: 'Home Loan Account',
        context: {
          genesisTx: 'recontextualize',
          renaissanceTx: 'Fresh',
          genesisTime: '2019-02-15T05:06:27.213Z',
          renaissanceTime: '2019-02-15T05:06:27.213Z'
        },
        migratedTo: [
          'transition',
          'Borders'
        ],
        migratedFrom: [
          'yellow',
          'Borders'
        ],
        numAssets: 94604,
        stake: {
          totalStakes: '22146',
          totalUnstakes: '19317',
          totalReceivedStakes: '67153',
          recentStakes: {
            items: [
              Uint8Array [
                168
              ],
              Uint8Array [
                21
              ]
            ],
            typeUrl: 'red',
            maxItems: 40994,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                180
              ],
              Uint8Array [
                121
              ]
            ],
            typeUrl: 'Hong Kong',
            maxItems: 32502,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              124
            ],
            Uint8Array [
              99
            ]
          ],
          typeUrl: 'discrete',
          maxItems: 34444,
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
      },
      {
        balance: '70094',
        nonce: 15211,
        numTxs: 61998,
        address: '24591a5b96f0393b40a923e23a87b49a923c6eee',
        pk: Uint8Array [
          246
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 7
        },
        moniker: 'calculate',
        context: {
          genesisTx: 'Cotton',
          renaissanceTx: 'SQL',
          genesisTime: '2019-02-15T05:06:27.214Z',
          renaissanceTime: '2019-02-15T05:06:27.214Z'
        },
        migratedTo: [
          'Incredible',
          'Belgium'
        ],
        migratedFrom: [
          'JBOD',
          'Ball'
        ],
        numAssets: 23841,
        stake: {
          totalStakes: '751',
          totalUnstakes: '6388',
          totalReceivedStakes: '31879',
          recentStakes: {
            items: [
              Uint8Array [
                67
              ],
              Uint8Array [
                172
              ]
            ],
            typeUrl: 'payment',
            maxItems: 40198,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                192
              ],
              Uint8Array [
                130
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 18819,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              202
            ],
            Uint8Array [
              17
            ]
          ],
          typeUrl: 'Metal',
          maxItems: 44700,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 8
          }
        }
      }
    ],
    assets: [
      {
        address: '184a7a8f1f3f15e9a82148304e020cf86d22d4e4',
        owner: 'Coordinator',
        moniker: 'Planner',
        readonly: undefined,
        stake: {
          totalStakes: '94477',
          totalUnstakes: '59329',
          totalReceivedStakes: '43504',
          recentStakes: {
            items: [
              Uint8Array [
                191
              ],
              Uint8Array [
                151
              ]
            ],
            typeUrl: 'Mountains',
            maxItems: 27133,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                9
              ],
              Uint8Array [
                71
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 41091,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'driver',
          renaissanceTx: 'Ball',
          genesisTime: '2019-02-15T05:06:27.214Z',
          renaissanceTime: '2019-02-15T05:06:27.214Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 7
          }
        }
      },
      {
        address: '93672177cb1b81f1586371b0f715b5570a12f1ef',
        owner: 'Distributed',
        moniker: 'payment',
        readonly: undefined,
        stake: {
          totalStakes: '21604',
          totalUnstakes: '27419',
          totalReceivedStakes: '76001',
          recentStakes: {
            items: [
              Uint8Array [
                218
              ],
              Uint8Array [
                222
              ]
            ],
            typeUrl: 'Concrete',
            maxItems: 98744,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                248
              ],
              Uint8Array [
                62
              ]
            ],
            typeUrl: 'Borders',
            maxItems: 5415,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'incubate',
          renaissanceTx: 'Total',
          genesisTime: '2019-02-15T05:06:27.214Z',
          renaissanceTime: '2019-02-15T05:06:27.214Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 1
          }
        }
      }
    ],
    stakes: [
      {
        address: 'c2f7b932982d3f2850a5177a54a8b5299135c9ab',
        from: '1140d56a6c606c4de2352202e5ec13f813ca299a',
        to: 'ca8a8fb1b3fc35db7b1341b4cc9d8529072cb26e',
        balance: '42046',
        message: 'Supervisor',
        context: {
          genesisTx: 'Views',
          renaissanceTx: 'engineer',
          genesisTime: '2019-02-15T05:06:27.214Z',
          renaissanceTime: '2019-02-15T05:06:27.214Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0,
            role: 6
          }
        }
      },
      {
        address: '7624052c2194ab5cccbf41ff09fb5747de154070',
        from: '0f7ca4fca7b3e4cb04ff2651c8198ec7b566ddbe',
        to: '9275ae8dbfdf43370854bf8b94af97d06022780a',
        balance: '29277',
        message: 'Divide',
        context: {
          genesisTx: 'Movies',
          renaissanceTx: 'bandwidth',
          genesisTime: '2019-02-15T05:06:27.215Z',
          renaissanceTime: '2019-02-15T05:06:27.215Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 7
          }
        }
      }
    ],
    context: {
      txHash: 'fddc8e590276380212cebaa9e5319e0a9d6005bb',
      blockHeight: 15393,
      blockTime: '2019-02-15T05:06:27.215Z',
      totalTxs: 10799,
      txStatistics: {
        numAccountMigrateTxs: 80378,
        numCreateAssetTxs: 40252,
        numConsensusUpgradeTxs: 49620,
        numDeclareTxs: 8844,
        numDeclareFileTxs: 2226,
        numExchangeTxs: 7075,
        numStakeTxs: 88527,
        numSysUpgradeTxs: 61422,
        numTransferTxs: 36989,
        numUpdateAssetTxs: 53679
      },
      txIndex: 98582
    },
    appState: {
      address: '1ca504ba9643218af3938aac130fbddf1b93d7b7',
      consensus: {
        maxBytes: 89309,
        maxGas: 86093,
        maxValidators: 80912,
        maxCandidates: 16959,
        pubKeyTypes: [
          'Berkshire',
          'Inverse'
        ],
        validators: [
          {
            address: 'c0f687b8e9232c1a37847710f8cc5a8c47b7e194',
            power: 52449
          },
          {
            address: '4b228f2bfa3ddc59876a83881242b135f5765134',
            power: 98436
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
              dataHash: 'payment',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'ADP',
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
          totalStakes: '78614',
          totalUnstakes: '19271',
          context: {
            genesisTx: 'Sri Lanka',
            renaissanceTx: 'architect',
            genesisTime: '2019-02-15T05:06:27.215Z',
            renaissanceTime: '2019-02-15T05:06:27.215Z'
          }
        }
      },
      version: 'azure',
      dataVersion: 'Virginia',
      forgeAppHash: Uint8Array [
        213
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 3
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 7
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '0572656be0c9bdc8e2d6e686d380a3a90419df16',
      nonce: 28702,
      signature: Uint8Array [
        223
      ],
      chainId: 'Personal Loan Account',
      signatures: [
        {
          key: Uint8Array [
            38
          ],
          value: Uint8Array [
            152
          ]
        },
        {
          key: Uint8Array [
            187
          ],
          value: Uint8Array [
            191
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 7,
          address: 0,
          role: 1
        }
      }
    },
    states: [
      {
        balance: '63096',
        nonce: 70350,
        numTxs: 8859,
        address: '713b54dba63d56fa484d4fda02be4789c1e016af',
        pk: Uint8Array [
          61
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 1,
          role: 2
        },
        moniker: 'Electronics',
        context: {
          genesisTx: 'Cape Verde',
          renaissanceTx: 'Principal',
          genesisTime: '2019-02-15T05:06:27.216Z',
          renaissanceTime: '2019-02-15T05:06:27.216Z'
        },
        migratedTo: [
          'Bedfordshire',
          'blue'
        ],
        migratedFrom: [
          'Cambridgeshire',
          'Savings Account'
        ],
        numAssets: 98105,
        stake: {
          totalStakes: '70091',
          totalUnstakes: '46176',
          totalReceivedStakes: '78359',
          recentStakes: {
            items: [
              Uint8Array [
                16
              ],
              Uint8Array [
                218
              ]
            ],
            typeUrl: 'CSS',
            maxItems: 73669,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                245
              ],
              Uint8Array [
                59
              ]
            ],
            typeUrl: 'Handcrafted',
            maxItems: 89938,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              33
            ],
            Uint8Array [
              5
            ]
          ],
          typeUrl: 'fault-tolerant',
          maxItems: 61659,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 8
          }
        }
      },
      {
        balance: '66854',
        nonce: 71162,
        numTxs: 11335,
        address: 'e6433000cb76efb32c63e7dd18ed4412ac43c6c0',
        pk: Uint8Array [
          117
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 0,
          role: 1
        },
        moniker: 'sky blue',
        context: {
          genesisTx: 'Manager',
          renaissanceTx: 'reboot',
          genesisTime: '2019-02-15T05:06:27.216Z',
          renaissanceTime: '2019-02-15T05:06:27.216Z'
        },
        migratedTo: [
          '1080p',
          'Grocery'
        ],
        migratedFrom: [
          'XML',
          'Canyon'
        ],
        numAssets: 14480,
        stake: {
          totalStakes: '79889',
          totalUnstakes: '64933',
          totalReceivedStakes: '99204',
          recentStakes: {
            items: [
              Uint8Array [
                128
              ],
              Uint8Array [
                95
              ]
            ],
            typeUrl: 'SDR',
            maxItems: 54361,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                190
              ],
              Uint8Array [
                153
              ]
            ],
            typeUrl: 'Cambridgeshire',
            maxItems: 85880,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              28
            ],
            Uint8Array [
              114
            ]
          ],
          typeUrl: 'Investment Account',
          maxItems: 72963,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 4
          }
        }
      }
    ],
    assets: [
      {
        address: 'a5de202499e798c28d6596a69f7db2dc016d1db5',
        owner: 'Guatemala',
        moniker: 'Rubber',
        readonly: undefined,
        stake: {
          totalStakes: '88342',
          totalUnstakes: '58744',
          totalReceivedStakes: '45160',
          recentStakes: {
            items: [
              Uint8Array [
                233
              ],
              Uint8Array [
                175
              ]
            ],
            typeUrl: 'Guyana Dollar',
            maxItems: 96796,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                56
              ],
              Uint8Array [
                82
              ]
            ],
            typeUrl: 'Refined Rubber Salad',
            maxItems: 16311,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Borders',
          renaissanceTx: 'Configuration',
          genesisTime: '2019-02-15T05:06:27.217Z',
          renaissanceTime: '2019-02-15T05:06:27.217Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 1
          }
        }
      },
      {
        address: '16353dfbea98967614873ad647d2ec7107f3440a',
        owner: 'Slovakia (Slovak Republic)',
        moniker: 'Ridge',
        readonly: undefined,
        stake: {
          totalStakes: '20206',
          totalUnstakes: '89463',
          totalReceivedStakes: '6704',
          recentStakes: {
            items: [
              Uint8Array [
                166
              ],
              Uint8Array [
                47
              ]
            ],
            typeUrl: 'wireless',
            maxItems: 51278,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                254
              ],
              Uint8Array [
                154
              ]
            ],
            typeUrl: 'generate',
            maxItems: 5501,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Handmade Frozen Mouse',
          renaissanceTx: 'Home Loan Account',
          genesisTime: '2019-02-15T05:06:27.217Z',
          renaissanceTime: '2019-02-15T05:06:27.217Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0,
            role: 8
          }
        }
      }
    ],
    stakes: [
      {
        address: 'c57950300b93678e9a3e3df4ff42f19a1a9d299d',
        from: 'fb8a1d1b001f2bd5f6610362b84ed4b558fd4fa9',
        to: '6e8c30b56a0bdf44e201b28357be66a4194d2a41',
        balance: '65676',
        message: 'redundant',
        context: {
          genesisTx: 'Fresh',
          renaissanceTx: 'Streamlined',
          genesisTime: '2019-02-15T05:06:27.218Z',
          renaissanceTime: '2019-02-15T05:06:27.218Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 0
          }
        }
      },
      {
        address: 'c032c151c4af3e777eba79e33a737a37d8bef9bb',
        from: '49bc6364242296149d8ecb15cafde44d3ecc60c5',
        to: '54e5b3c0affd598d842094b5faf1314141fac18d',
        balance: '27747',
        message: 'Generic',
        context: {
          genesisTx: 'ivory',
          renaissanceTx: 'Incredible Steel Table',
          genesisTime: '2019-02-15T05:06:27.218Z',
          renaissanceTime: '2019-02-15T05:06:27.218Z'
        },
        data: {
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
    context: {
      txHash: '5afdfb473a895f81e9b226e907165a2c49fb2bb9',
      blockHeight: 34061,
      blockTime: '2019-02-15T05:06:27.218Z',
      totalTxs: 76471,
      txStatistics: {
        numAccountMigrateTxs: 35305,
        numCreateAssetTxs: 1553,
        numConsensusUpgradeTxs: 2921,
        numDeclareTxs: 60913,
        numDeclareFileTxs: 47044,
        numExchangeTxs: 12896,
        numStakeTxs: 38633,
        numSysUpgradeTxs: 67763,
        numTransferTxs: 22707,
        numUpdateAssetTxs: 25204
      },
      txIndex: 54562
    },
    appState: {
      address: '5d6e7a00b132b7636af908ab8c317c07deab00c5',
      consensus: {
        maxBytes: 2950,
        maxGas: 70977,
        maxValidators: 47678,
        maxCandidates: 85082,
        pubKeyTypes: [
          'XML',
          'Hawaii'
        ],
        validators: [
          {
            address: '86bf0ae97ad0e3c1179fd6ed57d5387a501b7812',
            power: 90209
          },
          {
            address: '3f3dbf747ce931091898e465daffcc66c745ba9a',
            power: 57985
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
              dataHash: 'invoice',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 12,
              dataHash: 'Soft',
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
          totalStakes: '45835',
          totalUnstakes: '78914',
          context: {
            genesisTx: 'Indiana',
            renaissanceTx: 'Paradigm',
            genesisTime: '2019-02-15T05:06:27.218Z',
            renaissanceTime: '2019-02-15T05:06:27.218Z'
          }
        }
      },
      version: 'Crescent',
      dataVersion: 'quantify',
      forgeAppHash: Uint8Array [
        49
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 1
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
    code: 2
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    132
  ],
  type: {
    pk: 0,
    hash: 0,
    address: 0,
    role: 6
  },
  passphrase: 'Interactions',
  moniker: 'Coordinator'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  token: 'Rustic Soft Soap',
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      106
    ],
    pk: Uint8Array [
      95
    ],
    address: '7a799569e21cdf78a7e5b6f3cd7148e43f10f771'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'ea2839a840294af4523a2e1ed7e4a370ef1c12c5'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32
}
});
```

### search

```js
const result = await client.search({
  key: 'calculating',
  value: 'Optional'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  txs: [
    {
      tx: {
        from: '282eb267b7b75358d7828f9fbb555b9eeeed90f8',
        nonce: 43581,
        signature: Uint8Array [
          14
        ],
        chainId: 'Rustic',
        signatures: [
          {
            key: Uint8Array [
              157
            ],
            value: Uint8Array [
              109
            ]
          },
          {
            key: Uint8Array [
              40
            ],
            value: Uint8Array [
              225
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 0,
            role: 2
          }
        }
      },
      height: 25557,
      index: 48781,
      hash: '050d08e3cc1b653219d3350447895b9f9a98a744',
      tags: [
        {
          key: Uint8Array [
            48
          ],
          value: Uint8Array [
            156
          ]
        },
        {
          key: Uint8Array [
            66
          ],
          value: Uint8Array [
            208
          ]
        }
      ],
      code: 27
    },
    {
      tx: {
        from: 'a78445a89a853e040e5df61ce85c084bf69c4d14',
        nonce: 35480,
        signature: Uint8Array [
          114
        ],
        chainId: 'Ergonomic Frozen Computer',
        signatures: [
          {
            key: Uint8Array [
              253
            ],
            value: Uint8Array [
              236
            ]
          },
          {
            key: Uint8Array [
              144
            ],
            value: Uint8Array [
              123
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1,
            role: 5
          }
        }
      },
      height: 11055,
      index: 68049,
      hash: '54e2f31ada203372c339b026d7a5a4f880c26e0f',
      tags: [
        {
          key: Uint8Array [
            151
          ],
          value: Uint8Array [
            45
          ]
        },
        {
          key: Uint8Array [
            130
          ],
          value: Uint8Array [
            200
          ]
        }
      ],
      code: 25
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'd3aa526dc6173dd67866a882cb0a1b5e91664fc9',
    nonce: 31650,
    signature: Uint8Array [
      124
    ],
    chainId: 'override',
    signatures: [
      {
        key: Uint8Array [
          210
        ],
        value: Uint8Array [
          159
        ]
      },
      {
        key: Uint8Array [
          104
        ],
        value: Uint8Array [
          146
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 0,
        role: 3
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      103
    ],
    pk: Uint8Array [
      170
    ],
    address: '3319bf7d28b601b3284f4b501303de5bc6d00f6e'
  },
  token: 'Plastic',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  hash: '13271a70063214d4c218cea77b6746001d6fe73d'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    172
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  hash: '71cdbaacf51aa5e8d011618a4810c402f6357ae9'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 6,
  filter: 'Small Soft Table'
});

// output
{
  topic: 'systems'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'override'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
