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
  APPLICATION: 24,
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
      pk: 1,
      hash: 7,
      address: 0,
      role: 2
    }
  },
  from: '4f2e830f48b3d9ed02a3f4e0635f6381c9335452',
  nonce: 25389,
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      34
    ],
    pk: Uint8Array [
      96
    ],
    address: 'e3e3fb978bfaa57f47ab7b53a703d2bce17126ab'
  },
  token: 'Handmade'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  tx: {
    from: '0e8837f550825444432aec9d46afa05f51abb32d',
    nonce: 18576,
    signature: Uint8Array [
      173
    ],
    chainId: 'Rustic',
    signatures: [
      {
        key: Uint8Array [
          229
        ],
        value: Uint8Array [
          30
        ]
      },
      {
        key: Uint8Array [
          211
        ],
        value: Uint8Array [
          85
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 1,
        role: 7
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Division',
  type: {
    pk: 1,
    hash: 14,
    address: 0,
    role: 0
  },
  moniker: 'Iraqi Dinar'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  token: 'Jewelery',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      108
    ],
    pk: Uint8Array [
      139
    ],
    address: 'c497842e35c32ea489174980f5988ee97fcc0f0e'
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
  code: 17,
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      254
    ],
    pk: Uint8Array [
      154
    ],
    address: '462a03e8bf06c9de59939c8fa568b87238b5e7b0'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'ebad57d88ad0fed5857311f02e6bba4db31b3aa5',
  keys: [
    'applications',
    'implementation'
  ],
  appHash: 'dbb234c6004c565c06528c81886ba7c4fdd19ae8'
});

// output
{
  code: 26,
  state: {
    balance: '21416',
    nonce: 78811,
    numTxs: 69507,
    address: 'b56a468b510c68e0e7c671262d663ea6fec36d91',
    pk: Uint8Array [
      122
    ],
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 0
    },
    moniker: 'circuit',
    context: {
      genesisTx: 'Saint Vincent and the Grenadines',
      renaissanceTx: 'intranet',
      genesisTime: '2019-02-17T00:36:32.071Z',
      renaissanceTime: '2019-02-17T00:36:32.071Z'
    },
    migratedTo: [
      'Cotton',
      'Mouse'
    ],
    migratedFrom: [
      'Euro',
      'application'
    ],
    numAssets: 78482,
    stake: {
      totalStakes: '34065',
      totalUnstakes: '19973',
      totalReceivedStakes: '67178',
      recentStakes: {
        items: [
          Uint8Array [
            248
          ],
          Uint8Array [
            139
          ]
        ],
        typeUrl: 'Investor',
        maxItems: 13514,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            53
          ],
          Uint8Array [
            136
          ]
        ],
        typeUrl: 'Health',
        maxItems: 18120,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          9
        ],
        Uint8Array [
          235
        ]
      ],
      typeUrl: 'deposit',
      maxItems: 55897,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 1,
        role: 0
      }
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'Vatu',
  itx: {
    moniker: 'Tasty',
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 1,
        role: 4
      }
    },
    readonly: undefined
  },
  walletType: {
    pk: 1,
    hash: 7,
    address: 1,
    role: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  assetAddress: 'Auto Loan Account'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'f45a0387978f2c903217ea6f3c64f4a647f981a0',
  keys: [
    'data-warehouse',
    'Central'
  ],
  appHash: 'a8c7b3b6f7aa2ed49bc112d8fed80a4e7927d787'
});

// output
{
  code: 31,
  state: {
    address: 'd83cf8d2d4898f48aa852a7ba3be4bdff51a8529',
    owner: 'wireless',
    moniker: 'Cambridgeshire',
    readonly: undefined,
    stake: {
      totalStakes: '66018',
      totalUnstakes: '49812',
      totalReceivedStakes: '43535',
      recentStakes: {
        items: [
          Uint8Array [
            27
          ],
          Uint8Array [
            80
          ]
        ],
        typeUrl: 'XML',
        maxItems: 8516,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            23
          ],
          Uint8Array [
            106
          ]
        ],
        typeUrl: 'Tasty',
        maxItems: 61903,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'gold',
      renaissanceTx: 'Creative',
      genesisTime: '2019-02-17T00:36:32.073Z',
      renaissanceTime: '2019-02-17T00:36:32.073Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 1,
        role: 2
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 92462
});

// output
{
  code: 20,
  block: {
    height: 94842,
    numTxs: 42389,
    time: '2019-02-17T00:36:32.073Z',
    appHash: '70d9252ec62078aec52b1b911e4426cf092f4e42',
    proposer: '41120d63fbcbdcb64ebaffa50a78abc46d411105',
    txs: [
      {
        from: '19898ad1e77ac5802f01aea45241f7e5a2c7097e',
        nonce: 70545,
        signature: Uint8Array [
          88
        ],
        chainId: 'Savings Account',
        signatures: [
          {
            key: Uint8Array [
              172
            ],
            value: Uint8Array [
              166
            ]
          },
          {
            key: Uint8Array [
              253
            ],
            value: Uint8Array [
              183
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 0
          }
        }
      },
      {
        from: 'e20794e2f218f2827396b213d1634583873d3dfa',
        nonce: 88696,
        signature: Uint8Array [
          29
        ],
        chainId: 'Belarussian Ruble',
        signatures: [
          {
            key: Uint8Array [
              156
            ],
            value: Uint8Array [
              243
            ]
          },
          {
            key: Uint8Array [
              246
            ],
            value: Uint8Array [
              138
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
      }
    ],
    totalTxs: 3592
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  minHeight: 22757,
  maxHeight: 55785
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  blocks: [
    {
      height: 5562,
      numTxs: 886,
      time: '2019-02-17T00:36:32.074Z',
      appHash: 'f62c0826f713067dde45d9df6cb557f8b668b4ef',
      proposer: 'f8e24494fdfe4bd6e0a54246a347cd234157217e',
      txs: [
        {
          from: '2f321546b51775530bc33b5b7faa38e9458aacc3',
          nonce: 83466,
          signature: Uint8Array [
            95
          ],
          chainId: 'Handmade Steel Fish',
          signatures: [
            {
              key: Uint8Array [
                145
              ],
              value: Uint8Array [
                55
              ]
            },
            {
              key: Uint8Array [
                184
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
              address: 1,
              role: 1
            }
          }
        },
        {
          from: '807eaf3da42b585c311081f13d6545a0cef3f414',
          nonce: 40050,
          signature: Uint8Array [
            170
          ],
          chainId: 'Samoa',
          signatures: [
            {
              key: Uint8Array [
                27
              ],
              value: Uint8Array [
                50
              ]
            },
            {
              key: Uint8Array [
                22
              ],
              value: Uint8Array [
                32
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
        }
      ],
      totalTxs: 43757
    },
    {
      height: 49681,
      numTxs: 42193,
      time: '2019-02-17T00:36:32.074Z',
      appHash: '241e132ff74c13478381159785734bc6dd3e9665',
      proposer: 'cbc5d605e92177085188a4145f7edbfe0415f03c',
      txs: [
        {
          from: '1752ced2be7176d25b5c1ced610b108a282beca5',
          nonce: 35386,
          signature: Uint8Array [
            189
          ],
          chainId: 'zero administration',
          signatures: [
            {
              key: Uint8Array [
                216
              ],
              value: Uint8Array [
                78
              ]
            },
            {
              key: Uint8Array [
                248
              ],
              value: Uint8Array [
                218
              ]
            }
          ],
          itx: {
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
          from: 'b80f830856b0d0f55db006e6b06f01a1efb13611',
          nonce: 4529,
          signature: Uint8Array [
            250
          ],
          chainId: 'Granite',
          signatures: [
            {
              key: Uint8Array [
                21
              ],
              value: Uint8Array [
                232
              ]
            },
            {
              key: Uint8Array [
                217
              ],
              value: Uint8Array [
                155
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 14,
              address: 0,
              role: 1
            }
          }
        }
      ],
      totalTxs: 30543
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
  code: 36,
  info: {
    id: 'SAS',
    network: 'Licensed Frozen Hat',
    moniker: 'Denmark',
    consensusVersion: 'Frozen',
    synced: undefined,
    appHash: '3aa6e0acd987807da4529e23303b025adab2c90a',
    blockHash: Uint8Array [
      163
    ],
    blockHeight: 86264,
    blockTime: '2019-02-17T00:36:32.075Z',
    address: '271adb22a1b79ee9d84d982d9e2e86fa7fba28fc',
    votingPower: 4298,
    totalTxs: 33249,
    version: 'synthesize',
    dataVersion: 'navigate',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'extensible'
    },
    supportedTxs: [
      'Tasty',
      'global'
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
  code: 17,
  config: 'Toys'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Handmade',
    'index'
  ],
  appHash: 'e9a219d219eaacf1df53ab75fbde00df3f077a71'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  state: {
    address: 'df3655c13622aa4f6fb78e632aeeffa8eda43049',
    consensus: {
      maxBytes: 46153,
      maxGas: 95639,
      maxValidators: 82909,
      maxCandidates: 61198,
      pubKeyTypes: [
        'payment',
        'connect'
      ],
      validators: [
        {
          address: '1ff7f0105a239703c244e10fab10d7acaa3587b2',
          power: 72689
        },
        {
          address: '155bc835f50ca4b7652b783ef0cebc544593c46e',
          power: 79173
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
            dataHash: 'Borders',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 2,
            dataHash: 'protocol',
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
        totalStakes: '25546',
        totalUnstakes: '44648',
        context: {
          genesisTx: 'Customizable',
          renaissanceTx: 'Technician',
          genesisTime: '2019-02-17T00:36:32.076Z',
          renaissanceTime: '2019-02-17T00:36:32.076Z'
        }
      }
    },
    version: 'cross-platform',
    dataVersion: 'Generic Soft Car',
    forgeAppHash: Uint8Array [
      77
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 0,
        address: 0,
        role: 8
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
    startDate: 'United Kingdom',
    endDate: 'SMTP'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  forgeStatistics: {
    numBlocks: [
      91956,
      73121
    ],
    numTxs: [
      41981,
      74762
    ],
    numStakes: [
      '34828',
      '66967'
    ],
    numValidators: [
      66142,
      11034
    ],
    numAccountMigrateTxs: [
      3744,
      58425
    ],
    numCreateAssetTxs: [
      89782,
      80810
    ],
    numConsensusUpgradeTxs: [
      85747,
      83556
    ],
    numDeclareTxs: [
      70891,
      4971
    ],
    numDeclareFileTxs: [
      61750,
      57701
    ],
    numExchangeTxs: [
      47928,
      52207
    ],
    numStakeTxs: [
      7033,
      676
    ],
    numSysUpgradeTxs: [
      8594,
      17268
    ],
    numTransferTxs: [
      78391,
      42556
    ],
    numUpdateAssetTxs: [
      21503,
      12084
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
  code: 2,
  netInfo: {
    listening: undefined,
    listeners: [
      'Cross-platform',
      'Ergonomic'
    ],
    nPeers: 95433,
    peers: [
      {
        nodeInfo: {
          id: 'channels',
          network: 'Security',
          version: 'IB',
          moniker: 'Incredible Concrete Towels',
          ip: 'web-enabled',
          geoInfo: {
            city: 'Guarani',
            country: 'navigating',
            latitude: 27969.95,
            longitude: 86562.78
          }
        }
      },
      {
        nodeInfo: {
          id: 'transmit',
          network: 'Product',
          version: 'Pizza',
          moniker: 'Shoes',
          ip: 'Personal Loan Account',
          geoInfo: {
            city: 'payment',
            country: 'algorithm',
            latitude: 80960.79,
            longitude: 19866.87
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
  address: 'd0732aa6553be732eb8882e39da5ef5c0ab11012',
  keys: [
    'microchip',
    'Cameroon'
  ],
  appHash: 'e0bf9efe4fddc457bb38a0bbc4091c8385d23c22'
});

// output
{
  code: 24,
  state: {
    address: '48664437628a86658b5d6563b0aef3bfa975d1a9',
    from: 'b09e731532f8c4f18db5cc8ddffe60db449460bc',
    to: '34dc543058dc7b6361d2e3172c2eaebafc74f3cc',
    balance: '23029',
    message: 'Web',
    context: {
      genesisTx: 'red',
      renaissanceTx: 'neutral',
      genesisTime: '2019-02-17T00:36:32.078Z',
      renaissanceTime: '2019-02-17T00:36:32.078Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
        address: 1,
        role: 2
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: 'c48f08fe37d5ff9cd7bca3ffe02bf12b05dec7c8'
});

// output
{
  code: 33,
  info: {
    tx: {
      from: '27ad72a1558dc2c671dede9aeed52bebfec0fcc9',
      nonce: 54206,
      signature: Uint8Array [
        93
      ],
      chainId: 'United Kingdom',
      signatures: [
        {
          key: Uint8Array [
            34
          ],
          value: Uint8Array [
            88
          ]
        },
        {
          key: Uint8Array [
            133
          ],
          value: Uint8Array [
            45
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 1,
          address: 1,
          role: 4
        }
      }
    },
    height: 54803,
    index: 85090,
    hash: '9e74300044a5fa77179f31ac829e6257961d67c2',
    tags: [
      {
        key: Uint8Array [
          245
        ],
        value: Uint8Array [
          19
        ]
      },
      {
        key: Uint8Array [
          161
        ],
        value: Uint8Array [
          227
        ]
      }
    ],
    code: 3
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 97943
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  unconfirmedTxs: {
    nTxs: 13458,
    txs: [
      {
        from: '6feb598903f370cf6a872b8b2f9a7027f962c571',
        nonce: 21251,
        signature: Uint8Array [
          211
        ],
        chainId: 'Handcrafted Plastic Sausages',
        signatures: [
          {
            key: Uint8Array [
              31
            ],
            value: Uint8Array [
              34
            ]
          },
          {
            key: Uint8Array [
              214
            ],
            value: Uint8Array [
              73
            ]
          }
        ],
        itx: {
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
        from: '4e19c827ea268f6701d54879b57b04041f22b6d7',
        nonce: 16399,
        signature: Uint8Array [
          229
        ],
        chainId: 'virtual',
        signatures: [
          {
            key: Uint8Array [
              152
            ],
            value: Uint8Array [
              40
            ]
          },
          {
            key: Uint8Array [
              68
            ],
            value: Uint8Array [
              21
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0,
            role: 8
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
  code: 2,
  validatorsInfo: {
    blockHeight: 83384,
    validators: [
      {
        address: '85172eadd9f9fdf884463a6d805d354e9521fcc7',
        pubKey: {
          type: 'invoice',
          data: Uint8Array [
            136
          ]
        },
        votingPower: 34813,
        proposerPriority: 'Grass-roots',
        name: 'disintermediate'
      },
      {
        address: '10c0619aa24dd0e64798a1088091e5d3b0208be4',
        pubKey: {
          type: 'hacking',
          data: Uint8Array [
            14
          ]
        },
        votingPower: 68221,
        proposerPriority: 'Shoals',
        name: 'Rubber'
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
    cursor: 'Ergonomic',
    size: 61790,
    order: [
      {
        field: 'Program',
        type: 'Concrete'
      },
      {
        field: 'hacking',
        type: 'Maryland'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Clothing',
    endDateTime: 'Comoro Franc'
  },
  addressFilter: {
    sender: 'protocol',
    receiver: 'Lesotho'
  },
  typeFilter: {
    types: [
      'knowledge base',
      'United Arab Emirates'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  page: {
    cursor: 'teal',
    next: undefined,
    total: 3483
  },
  transactions: [
    {
      hash: '4ed4577984fbb113732b8051ff4e4700f679d2a1',
      sender: 'Borders',
      receiver: 'Danish Krone',
      time: 'Senegal',
      type: 'Club',
      tx: {
        from: '98a9e654d99d5e3e03f248fc7011a56006e93fe8',
        nonce: 68951,
        signature: Uint8Array [
          112
        ],
        chainId: 'primary',
        signatures: [
          {
            key: Uint8Array [
              190
            ],
            value: Uint8Array [
              136
            ]
          },
          {
            key: Uint8Array [
              65
            ],
            value: Uint8Array [
              14
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 0,
            role: 7
          }
        }
      }
    },
    {
      hash: '45eba87741fb26ee88821b9be3c5798b8acb10db',
      sender: 'THX',
      receiver: 'connecting',
      time: 'haptic',
      type: 'Wyoming',
      tx: {
        from: '6494f3c0db3126b7daa907bd5b4ad43cb6be8643',
        nonce: 8299,
        signature: Uint8Array [
          61
        ],
        chainId: 'Utah',
        signatures: [
          {
            key: Uint8Array [
              156
            ],
            value: Uint8Array [
              7
            ]
          },
          {
            key: Uint8Array [
              34
            ],
            value: Uint8Array [
              36
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 5
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
  code: 27,
  address: 'cc4e52190719c36527f2e9cca66f5f383d0d0227'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'd75b877942346e63baff89053f0017340b633130'
});

// output
{
  code: 35,
  chunk: Uint8Array [
    191
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'a1be0a7b6d440ed942f33baa2d5607fd3af5f6a5',
  passphrase: 'Persistent'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'Micronesia',
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      55
    ],
    pk: Uint8Array [
      178
    ],
    address: '25c1614d902fb7aa5d1188f263c058b60f04bd87'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'c1576ecd79df635eab0cfe510d1a80325be562b8',
    nonce: 58402,
    signature: Uint8Array [
      68
    ],
    chainId: 'Games',
    signatures: [
      {
        key: Uint8Array [
          202
        ],
        value: Uint8Array [
          167
        ]
      },
      {
        key: Uint8Array [
          43
        ],
        value: Uint8Array [
          112
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 0,
        address: 1,
        role: 1
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      241
    ],
    pk: Uint8Array [
      137
    ],
    address: 'fd437a64368c4ea58f6e617f9d70b86e2c9c164e'
  },
  token: 'Enterprise-wide'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  tx: {
    from: '6c26648f063cd762d0fdaa7e90bd0a84f1765438',
    nonce: 34606,
    signature: Uint8Array [
      197
    ],
    chainId: 'payment',
    signatures: [
      {
        key: Uint8Array [
          53
        ],
        value: Uint8Array [
          246
        ]
      },
      {
        key: Uint8Array [
          66
        ],
        value: Uint8Array [
          235
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 14,
        address: 0,
        role: 7
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '5bd190308eccc1234adc68639afdd3fe99d76032'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '38b314932b6807550ac3f73ffd2b73e7917f47ab',
      nonce: 76479,
      signature: Uint8Array [
        137
      ],
      chainId: 'Clothing',
      signatures: [
        {
          key: Uint8Array [
            80
          ],
          value: Uint8Array [
            58
          ]
        },
        {
          key: Uint8Array [
            228
          ],
          value: Uint8Array [
            128
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 2
        }
      }
    },
    states: [
      {
        balance: '62077',
        nonce: 29375,
        numTxs: 68130,
        address: '812541bf9cd20c75bada57e14717169903371a4d',
        pk: Uint8Array [
          77
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 0,
          role: 6
        },
        moniker: 'Gorgeous',
        context: {
          genesisTx: 'Bermudian Dollar ' +
            '(customarily known as ' +
            'Bermuda Dollar)',
          renaissanceTx: 'Manager',
          genesisTime: '2019-02-17T00:36:32.082Z',
          renaissanceTime: '2019-02-17T00:36:32.082Z'
        },
        migratedTo: [
          'solutions',
          'interface'
        ],
        migratedFrom: [
          'redundant',
          'deposit'
        ],
        numAssets: 47818,
        stake: {
          totalStakes: '9191',
          totalUnstakes: '1504',
          totalReceivedStakes: '62291',
          recentStakes: {
            items: [
              Uint8Array [
                176
              ],
              Uint8Array [
                61
              ]
            ],
            typeUrl: 'incubate',
            maxItems: 43174,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                120
              ],
              Uint8Array [
                219
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 86564,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              227
            ],
            Uint8Array [
              31
            ]
          ],
          typeUrl: 'Balanced',
          maxItems: 56252,
          circular: undefined,
          fifo: undefined
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
      },
      {
        balance: '72809',
        nonce: 89467,
        numTxs: 78494,
        address: 'e1c2f4123310cbe6db184906d5aace12bf47aa8f',
        pk: Uint8Array [
          133
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 1,
          role: 6
        },
        moniker: 'FTP',
        context: {
          genesisTx: 'deposit',
          renaissanceTx: 'Visionary',
          genesisTime: '2019-02-17T00:36:32.083Z',
          renaissanceTime: '2019-02-17T00:36:32.083Z'
        },
        migratedTo: [
          'Dynamic',
          'Metal'
        ],
        migratedFrom: [
          'Functionality',
          'Buckinghamshire'
        ],
        numAssets: 82712,
        stake: {
          totalStakes: '23217',
          totalUnstakes: '2547',
          totalReceivedStakes: '22963',
          recentStakes: {
            items: [
              Uint8Array [
                83
              ],
              Uint8Array [
                217
              ]
            ],
            typeUrl: 'teal',
            maxItems: 91009,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                123
              ],
              Uint8Array [
                111
              ]
            ],
            typeUrl: 'maroon',
            maxItems: 7960,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              72
            ],
            Uint8Array [
              12
            ]
          ],
          typeUrl: 'Avon',
          maxItems: 71017,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 2
          }
        }
      }
    ],
    assets: [
      {
        address: '5dd9d82e4eec806427fe8a8ac0b67b08cc11dead',
        owner: 'metrics',
        moniker: '24 hour',
        readonly: undefined,
        stake: {
          totalStakes: '57269',
          totalUnstakes: '21172',
          totalReceivedStakes: '74333',
          recentStakes: {
            items: [
              Uint8Array [
                44
              ],
              Uint8Array [
                154
              ]
            ],
            typeUrl: 'Saint Lucia',
            maxItems: 96945,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                175
              ],
              Uint8Array [
                4
              ]
            ],
            typeUrl: 'copying',
            maxItems: 29097,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Response',
          renaissanceTx: 'Lithuania',
          genesisTime: '2019-02-17T00:36:32.083Z',
          renaissanceTime: '2019-02-17T00:36:32.083Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 0,
            role: 2
          }
        }
      },
      {
        address: 'c752144e4d90501e414211bbe448a2e6053288d7',
        owner: 'Cheese',
        moniker: 'HTTP',
        readonly: undefined,
        stake: {
          totalStakes: '24535',
          totalUnstakes: '35684',
          totalReceivedStakes: '79597',
          recentStakes: {
            items: [
              Uint8Array [
                53
              ],
              Uint8Array [
                129
              ]
            ],
            typeUrl: 'Incredible',
            maxItems: 50840,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                209
              ],
              Uint8Array [
                38
              ]
            ],
            typeUrl: 'Sports',
            maxItems: 93521,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Sports',
          renaissanceTx: 'Sleek Cotton Pizza',
          genesisTime: '2019-02-17T00:36:32.083Z',
          renaissanceTime: '2019-02-17T00:36:32.083Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0,
            role: 2
          }
        }
      }
    ],
    stakes: [
      {
        address: '451111a266dc67ef48886ba6c9cb2c203393e94d',
        from: 'd3fde974fa0dbf115807c9c2b41986ebc9a6a51b',
        to: '396cba31bb6094a1d352819134b4736b4c8bf6be',
        balance: '44511',
        message: 'Synchronised',
        context: {
          genesisTx: 'Ergonomic',
          renaissanceTx: 'calculate',
          genesisTime: '2019-02-17T00:36:32.084Z',
          renaissanceTime: '2019-02-17T00:36:32.084Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 0
          }
        }
      },
      {
        address: 'b428d04520235ea3775d70d17adf880b20ecc7d2',
        from: '1354316e6c7f3b7279716086151f282a5e9c9652',
        to: '654f9eb1347d22b917257d0762f73734d3eebcda',
        balance: '16912',
        message: 'indigo',
        context: {
          genesisTx: 'Buckinghamshire',
          renaissanceTx: 'Bolivar Fuerte',
          genesisTime: '2019-02-17T00:36:32.084Z',
          renaissanceTime: '2019-02-17T00:36:32.084Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 6
          }
        }
      }
    ],
    context: {
      txHash: 'c1d50d6aedf1d38425c75167b0cae11dc3961386',
      blockHeight: 94490,
      blockTime: '2019-02-17T00:36:32.084Z',
      totalTxs: 66614,
      txStatistics: {
        numAccountMigrateTxs: 67027,
        numCreateAssetTxs: 26196,
        numConsensusUpgradeTxs: 80461,
        numDeclareTxs: 91666,
        numDeclareFileTxs: 51811,
        numExchangeTxs: 79442,
        numStakeTxs: 13638,
        numSysUpgradeTxs: 24659,
        numTransferTxs: 87526,
        numUpdateAssetTxs: 28339
      },
      txIndex: 90796
    },
    appState: {
      address: '9e54201aa96bf0fc8eb0f37d494a5b656360bac6',
      consensus: {
        maxBytes: 90116,
        maxGas: 44682,
        maxValidators: 3228,
        maxCandidates: 82012,
        pubKeyTypes: [
          'evolve',
          'Tasty Plastic Computer'
        ],
        validators: [
          {
            address: '8f4051efbf839753596bb57bb5e7a4fb758b82dd',
            power: 86771
          },
          {
            address: '36cadee88ea8ab5ec9b8ec351e8e4c2d84daa694',
            power: 430
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 11,
              dataHash: 'Metal',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'impactful',
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
          totalStakes: '77440',
          totalUnstakes: '78939',
          context: {
            genesisTx: 'Tennessee',
            renaissanceTx: 'override',
            genesisTime: '2019-02-17T00:36:32.085Z',
            renaissanceTime: '2019-02-17T00:36:32.085Z'
          }
        }
      },
      version: 'Soft',
      dataVersion: 'overriding',
      forgeAppHash: Uint8Array [
        196
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 7,
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
    code: 21
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'ea3f8e52b509c6f5a54674495e2fb51b3037ca07',
      nonce: 2743,
      signature: Uint8Array [
        128
      ],
      chainId: 'payment',
      signatures: [
        {
          key: Uint8Array [
            124
          ],
          value: Uint8Array [
            243
          ]
        },
        {
          key: Uint8Array [
            7
          ],
          value: Uint8Array [
            93
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 6,
          address: 1,
          role: 5
        }
      }
    },
    states: [
      {
        balance: '33240',
        nonce: 18597,
        numTxs: 58647,
        address: '5f289be6e367b671a7f19a3b11a30518612bb344',
        pk: Uint8Array [
          223
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 0
        },
        moniker: 'plum',
        context: {
          genesisTx: 'paradigms',
          renaissanceTx: 'blue',
          genesisTime: '2019-02-17T00:36:32.086Z',
          renaissanceTime: '2019-02-17T00:36:32.086Z'
        },
        migratedTo: [
          'invoice',
          'calculating'
        ],
        migratedFrom: [
          'Security',
          'Garden'
        ],
        numAssets: 16304,
        stake: {
          totalStakes: '84421',
          totalUnstakes: '36697',
          totalReceivedStakes: '65750',
          recentStakes: {
            items: [
              Uint8Array [
                6
              ],
              Uint8Array [
                148
              ]
            ],
            typeUrl: 'Car',
            maxItems: 48130,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                178
              ],
              Uint8Array [
                119
              ]
            ],
            typeUrl: 'Chair',
            maxItems: 83716,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              25
            ],
            Uint8Array [
              89
            ]
          ],
          typeUrl: 'Operations',
          maxItems: 9014,
          circular: undefined,
          fifo: undefined
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
      },
      {
        balance: '85377',
        nonce: 39786,
        numTxs: 94828,
        address: '7d6268cbe0766ff6f2471409588e0c284b005a21',
        pk: Uint8Array [
          233
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 1,
          role: 1
        },
        moniker: 'Generic',
        context: {
          genesisTx: 'cultivate',
          renaissanceTx: 'optical',
          genesisTime: '2019-02-17T00:36:32.086Z',
          renaissanceTime: '2019-02-17T00:36:32.086Z'
        },
        migratedTo: [
          'Tools',
          'invoice'
        ],
        migratedFrom: [
          'optical',
          'e-business'
        ],
        numAssets: 19857,
        stake: {
          totalStakes: '10562',
          totalUnstakes: '1771',
          totalReceivedStakes: '855',
          recentStakes: {
            items: [
              Uint8Array [
                150
              ],
              Uint8Array [
                160
              ]
            ],
            typeUrl: 'Hong Kong Dollar',
            maxItems: 58165,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                217
              ],
              Uint8Array [
                144
              ]
            ],
            typeUrl: 'Buckinghamshire',
            maxItems: 66207,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              49
            ],
            Uint8Array [
              98
            ]
          ],
          typeUrl: 'Generic',
          maxItems: 32495,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 0
          }
        }
      }
    ],
    assets: [
      {
        address: '23113adfedf83274c44774564edf8832bd4e55c5',
        owner: 'array',
        moniker: 'Baby',
        readonly: undefined,
        stake: {
          totalStakes: '65598',
          totalUnstakes: '9872',
          totalReceivedStakes: '59004',
          recentStakes: {
            items: [
              Uint8Array [
                7
              ],
              Uint8Array [
                245
              ]
            ],
            typeUrl: 'cohesive',
            maxItems: 70794,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                103
              ],
              Uint8Array [
                82
              ]
            ],
            typeUrl: 'hard drive',
            maxItems: 85732,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'program',
          renaissanceTx: 'Slovakia (Slovak Republic)',
          genesisTime: '2019-02-17T00:36:32.086Z',
          renaissanceTime: '2019-02-17T00:36:32.086Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 0,
            role: 6
          }
        }
      },
      {
        address: '93c1ca6a0b47aa2bed313716a1bda4ac7df83c2d',
        owner: 'deliverables',
        moniker: 'Jewelery',
        readonly: undefined,
        stake: {
          totalStakes: '61501',
          totalUnstakes: '95087',
          totalReceivedStakes: '99785',
          recentStakes: {
            items: [
              Uint8Array [
                65
              ],
              Uint8Array [
                76
              ]
            ],
            typeUrl: 'Director',
            maxItems: 66742,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                218
              ],
              Uint8Array [
                1
              ]
            ],
            typeUrl: 'Developer',
            maxItems: 35706,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Strategist',
          renaissanceTx: 'indexing',
          genesisTime: '2019-02-17T00:36:32.087Z',
          renaissanceTime: '2019-02-17T00:36:32.087Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 7
          }
        }
      }
    ],
    stakes: [
      {
        address: '47f211364bb28c80ef3ad699f2df2b888b149f54',
        from: 'a82c9259449a302a540d00ba2d1241fe39d7b325',
        to: '2d6864da217f48bbe1d1267eeb180362532daa81',
        balance: '27116',
        message: 'bricks-and-clicks',
        context: {
          genesisTx: 'applications',
          renaissanceTx: 'Concrete',
          genesisTime: '2019-02-17T00:36:32.087Z',
          renaissanceTime: '2019-02-17T00:36:32.087Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0,
            role: 1
          }
        }
      },
      {
        address: 'b840ee7c086bc58398109a6250442402c59348e6',
        from: '375de2399dd05f95947b3715afe5c0e1c8a6d772',
        to: '67b381b55fd3e2416a3272534ad97363829a2d32',
        balance: '85188',
        message: 'white',
        context: {
          genesisTx: 'backing up',
          renaissanceTx: 'AGP',
          genesisTime: '2019-02-17T00:36:32.087Z',
          renaissanceTime: '2019-02-17T00:36:32.087Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 0
          }
        }
      }
    ],
    context: {
      txHash: 'b703430d04332c04764202907665e7addbb0e0dc',
      blockHeight: 81954,
      blockTime: '2019-02-17T00:36:32.087Z',
      totalTxs: 3260,
      txStatistics: {
        numAccountMigrateTxs: 32050,
        numCreateAssetTxs: 50873,
        numConsensusUpgradeTxs: 13708,
        numDeclareTxs: 94675,
        numDeclareFileTxs: 88111,
        numExchangeTxs: 7182,
        numStakeTxs: 2922,
        numSysUpgradeTxs: 14207,
        numTransferTxs: 86615,
        numUpdateAssetTxs: 18521
      },
      txIndex: 74840
    },
    appState: {
      address: '9e10cf5b8448e32a23c8828b8079e2f45483c141',
      consensus: {
        maxBytes: 20609,
        maxGas: 71380,
        maxValidators: 26353,
        maxCandidates: 1466,
        pubKeyTypes: [
          'Fish',
          'Rustic Rubber Sausages'
        ],
        validators: [
          {
            address: '510792ab02750a76c7d3b74d4faabbe3dd4a8863',
            power: 73577
          },
          {
            address: '86f1a52640afaf1f8afd5a7dcf1120f0e89c5f11',
            power: 11064
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
              dataHash: 'Agent',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 2,
              dataHash: 'Awesome',
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
          totalStakes: '9923',
          totalUnstakes: '56537',
          context: {
            genesisTx: 'Outdoors',
            renaissanceTx: 'Practical',
            genesisTime: '2019-02-17T00:36:32.087Z',
            renaissanceTime: '2019-02-17T00:36:32.087Z'
          }
        }
      },
      version: 'quantifying',
      dataVersion: 'gold',
      forgeAppHash: Uint8Array [
        142
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 1,
          address: 0,
          role: 5
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
    code: 33
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    214
  ],
  type: {
    pk: 0,
    hash: 14,
    address: 0,
    role: 1
  },
  passphrase: 'Steel',
  moniker: 'Senior'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  token: 'capacitor',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      114
    ],
    pk: Uint8Array [
      171
    ],
    address: 'e9e02275bbc9eb671121f861872203820e5cec88'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '2a2f06e90c7feb643fc0d9a640aeb2c23696dfbc'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22
}
});
```

### search

```js
const result = await client.search({
  key: 'Web',
  value: 'attitude'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  txs: [
    {
      tx: {
        from: 'e763982d3227a88c5028c08eac4aee3df2ada91b',
        nonce: 24156,
        signature: Uint8Array [
          250
        ],
        chainId: 'navigating',
        signatures: [
          {
            key: Uint8Array [
              78
            ],
            value: Uint8Array [
              16
            ]
          },
          {
            key: Uint8Array [
              220
            ],
            value: Uint8Array [
              97
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 3
          }
        }
      },
      height: 62018,
      index: 82771,
      hash: '1c51d0a6db2115e7889924dd033a96903dd13815',
      tags: [
        {
          key: Uint8Array [
            23
          ],
          value: Uint8Array [
            44
          ]
        },
        {
          key: Uint8Array [
            58
          ],
          value: Uint8Array [
            8
          ]
        }
      ],
      code: 2
    },
    {
      tx: {
        from: '1e35e612585fb77e85b53fa0ffe2ec595d5a2b1c',
        nonce: 75667,
        signature: Uint8Array [
          116
        ],
        chainId: 'Cotton',
        signatures: [
          {
            key: Uint8Array [
              96
            ],
            value: Uint8Array [
              166
            ]
          },
          {
            key: Uint8Array [
              127
            ],
            value: Uint8Array [
              97
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 0,
            role: 1
          }
        }
      },
      height: 84993,
      index: 56782,
      hash: 'f02f9d892ebd61d7aab27d09db9dcfed22efef55',
      tags: [
        {
          key: Uint8Array [
            117
          ],
          value: Uint8Array [
            110
          ]
        },
        {
          key: Uint8Array [
            236
          ],
          value: Uint8Array [
            66
          ]
        }
      ],
      code: 32
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'd9d2a8cb3c19ab18d4a042712ef1bf5f1db2cc76',
    nonce: 46626,
    signature: Uint8Array [
      151
    ],
    chainId: 'SSL',
    signatures: [
      {
        key: Uint8Array [
          56
        ],
        value: Uint8Array [
          226
        ]
      },
      {
        key: Uint8Array [
          131
        ],
        value: Uint8Array [
          33
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
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      205
    ],
    pk: Uint8Array [
      102
    ],
    address: '05164e4bb6840e0a763f640e6d161ff184bba745'
  },
  token: 'Falkland Islands (Malvinas)',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  hash: '6155c150c0c1fc90513a70d0c01ca09bc42bf997'
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
  code: 26,
  hash: 'c5735880574ff14fdcc0cab409b830de666fb216'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 21,
  filter: 'SMTP'
});

// output
{
  topic: 'Pizza'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'auxiliary'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
