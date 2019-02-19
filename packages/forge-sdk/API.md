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
  * [signData](#signdata)
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
      pk: 0,
      hash: 6,
      address: 1,
      role: 4
    }
  },
  from: '2740d7aeed10cfa016da7090e761e036ebfae9fb',
  nonce: 66143,
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      211
    ],
    pk: Uint8Array [
      74
    ],
    address: 'ee958cdfa5087d656f5fc202eab1fd7d968451e7'
  },
  token: 'Pizza'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  tx: {
    from: '884fc15b0b7c1263819ba5227e67eb4f0cd20a47',
    nonce: 41072,
    signature: Uint8Array [
      254
    ],
    chainId: 'calculate',
    signatures: [
      {
        key: Uint8Array [
          127
        ],
        value: Uint8Array [
          102
        ]
      },
      {
        key: Uint8Array [
          202
        ],
        value: Uint8Array [
          84
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
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'groupware',
  type: {
    pk: 1,
    hash: 0,
    address: 0,
    role: 1
  },
  moniker: 'azure'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  token: 'firmware',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      2
    ],
    pk: Uint8Array [
      118
    ],
    address: '90a802e7be689d33a6154ba8e15ad3b9dbe05b14'
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
  code: 2,
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      115
    ],
    pk: Uint8Array [
      66
    ],
    address: 'd47607e6f484e99339ebb79738490248393c3554'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '89c762c6d4da713565661ce7da0355f23421208c',
  keys: [
    'Crossing',
    'synthesizing'
  ],
  appHash: '6d3f06ca452889e200032d394ef26d61568c6256'
});

// output
{
  code: 1,
  state: {
    balance: '37852',
    nonce: 4969,
    numTxs: 62083,
    address: '2770c2287e67703a48b22685779295c0b4fe3df4',
    pk: Uint8Array [
      202
    ],
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 1
    },
    moniker: 'Program',
    context: {
      genesisTx: 'auxiliary',
      renaissanceTx: 'Cambridgeshire',
      genesisTime: '2019-02-19T06:45:34.504Z',
      renaissanceTime: '2019-02-19T06:45:34.504Z'
    },
    migratedTo: [
      'digital',
      'pink'
    ],
    migratedFrom: [
      'Auto Loan Account',
      'Distributed'
    ],
    numAssets: 74132,
    stake: {
      totalStakes: '46934',
      totalUnstakes: '72735',
      totalReceivedStakes: '89239',
      recentStakes: {
        items: [
          Uint8Array [
            102
          ],
          Uint8Array [
            167
          ]
        ],
        typeUrl: 'red',
        maxItems: 5699,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            27
          ],
          Uint8Array [
            242
          ]
        ],
        typeUrl: 'New Mexico',
        maxItems: 54312,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          242
        ],
        Uint8Array [
          107
        ]
      ],
      typeUrl: 'paradigms',
      maxItems: 48252,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 0,
        address: 1,
        role: 5
      }
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'back-end',
  itx: {
    moniker: 'cross-platform',
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 0,
        role: 6
      }
    },
    readonly: undefined
  },
  walletType: {
    pk: 1,
    hash: 6,
    address: 1,
    role: 8
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  assetAddress: 'multi-tasking'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '304cfcf1daaa0325599dc5d36eef69ab22b3719b',
  keys: [
    'Chief',
    'payment'
  ],
  appHash: '0647046e2908eb8996c02ee7f45bd46876d02935'
});

// output
{
  code: 2,
  state: {
    address: '0d3386458ece9fcca7dbe1a8cc989ccbc6658462',
    owner: 'Cayman Islands',
    moniker: 'focus group',
    readonly: undefined,
    stake: {
      totalStakes: '78617',
      totalUnstakes: '73522',
      totalReceivedStakes: '82993',
      recentStakes: {
        items: [
          Uint8Array [
            234
          ],
          Uint8Array [
            83
          ]
        ],
        typeUrl: 'Enterprise-wide',
        maxItems: 17917,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            127
          ],
          Uint8Array [
            124
          ]
        ],
        typeUrl: 'extranet',
        maxItems: 43874,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Implementation',
      renaissanceTx: 'Street',
      genesisTime: '2019-02-19T06:45:34.505Z',
      renaissanceTime: '2019-02-19T06:45:34.505Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
        address: 0,
        role: 5
      }
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 49722
});

// output
{
  code: 8,
  block: {
    height: 33562,
    numTxs: 13834,
    time: '2019-02-19T06:45:34.505Z',
    appHash: '1ef140cccc4e543363ec936f613648bd9302cc8d',
    proposer: '28fdcec0942883392e249338d70835219a224faf',
    txs: [
      {
        tx: {
          from: 'd017377c2471a7937ed679395bbacc6a6782bf91',
          nonce: 8728,
          signature: Uint8Array [
            219
          ],
          chainId: 'Soft',
          signatures: [
            {
              key: Uint8Array [
                17
              ],
              value: Uint8Array [
                59
              ]
            },
            {
              key: Uint8Array [
                38
              ],
              value: Uint8Array [
                168
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 0,
              address: 1,
              role: 1
            }
          }
        },
        height: 27464,
        index: 32334,
        hash: 'cbf4d8a42f6b95ec308a592f44978ef76cc1050f',
        tags: [
          {
            key: Uint8Array [
              64
            ],
            value: Uint8Array [
              250
            ]
          },
          {
            key: Uint8Array [
              159
            ],
            value: Uint8Array [
              160
            ]
          }
        ],
        code: 34
      },
      {
        tx: {
          from: '23aa6036574cf6f3a3d2870fa01300d5faa74512',
          nonce: 48536,
          signature: Uint8Array [
            135
          ],
          chainId: 'deposit',
          signatures: [
            {
              key: Uint8Array [
                27
              ],
              value: Uint8Array [
                28
              ]
            },
            {
              key: Uint8Array [
                135
              ],
              value: Uint8Array [
                125
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
        height: 37829,
        index: 54911,
        hash: '3c0587f1459acbeb6e2d01947b87048c3b08da45',
        tags: [
          {
            key: Uint8Array [
              228
            ],
            value: Uint8Array [
              203
            ]
          },
          {
            key: Uint8Array [
              141
            ],
            value: Uint8Array [
              219
            ]
          }
        ],
        code: 0
      }
    ],
    totalTxs: 71256
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  minHeight: 86349,
  maxHeight: 70888
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  blocks: [
    {
      height: 57643,
      numTxs: 72254,
      time: '2019-02-19T06:45:34.505Z',
      appHash: '53000a50222ca36b604d71d443f3d4a605a25e93',
      proposer: '2ee712e7365ac70a36d9e4c19b1199090bd9a6a3',
      txs: [
        {
          tx: {
            from: 'f504ff2dee20b9352c7c0bc34ba4b50a5e183984',
            nonce: 94143,
            signature: Uint8Array [
              146
            ],
            chainId: 'bus',
            signatures: [
              {
                key: Uint8Array [
                  102
                ],
                value: Uint8Array [
                  141
                ]
              },
              {
                key: Uint8Array [
                  20
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
                hash: 7,
                address: 0,
                role: 6
              }
            }
          },
          height: 95354,
          index: 70037,
          hash: '52c8c3519b110be7ff9f4ef09f18f503ccf784a5',
          tags: [
            {
              key: Uint8Array [
                201
              ],
              value: Uint8Array [
                51
              ]
            },
            {
              key: Uint8Array [
                69
              ],
              value: Uint8Array [
                10
              ]
            }
          ],
          code: 33
        },
        {
          tx: {
            from: 'f8894e056419d421a91405e2435d32b293ff487d',
            nonce: 45539,
            signature: Uint8Array [
              240
            ],
            chainId: 'bifurcated',
            signatures: [
              {
                key: Uint8Array [
                  15
                ],
                value: Uint8Array [
                  146
                ]
              },
              {
                key: Uint8Array [
                  202
                ],
                value: Uint8Array [
                  20
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 1,
                address: 0,
                role: 7
              }
            }
          },
          height: 9022,
          index: 13942,
          hash: 'd31c34b6574bf05e03eded1aecfe6bb9457338b8',
          tags: [
            {
              key: Uint8Array [
                123
              ],
              value: Uint8Array [
                175
              ]
            },
            {
              key: Uint8Array [
                10
              ],
              value: Uint8Array [
                182
              ]
            }
          ],
          code: 500
        }
      ],
      totalTxs: 28514
    },
    {
      height: 67723,
      numTxs: 98106,
      time: '2019-02-19T06:45:34.506Z',
      appHash: '74b4765bf935677fbf90f742da0c4ec9bdab0391',
      proposer: 'f0021c31707870200864346a165d78e4e6624605',
      txs: [
        {
          tx: {
            from: 'a5fe5f5ce23639e539e24ad214264d5a957de2be',
            nonce: 21464,
            signature: Uint8Array [
              80
            ],
            chainId: 'Inlet',
            signatures: [
              {
                key: Uint8Array [
                  39
                ],
                value: Uint8Array [
                  145
                ]
              },
              {
                key: Uint8Array [
                  217
                ],
                value: Uint8Array [
                  172
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 1,
                role: 7
              }
            }
          },
          height: 41514,
          index: 62519,
          hash: '0f0bbe2619c83a84453002081a7dfa638b596fd0',
          tags: [
            {
              key: Uint8Array [
                171
              ],
              value: Uint8Array [
                49
              ]
            },
            {
              key: Uint8Array [
                152
              ],
              value: Uint8Array [
                7
              ]
            }
          ],
          code: 10
        },
        {
          tx: {
            from: '0d5138cfc17cc513cbb8071f0efc2d5ee65cb0ab',
            nonce: 28822,
            signature: Uint8Array [
              130
            ],
            chainId: 'mission-critical',
            signatures: [
              {
                key: Uint8Array [
                  14
                ],
                value: Uint8Array [
                  81
                ]
              },
              {
                key: Uint8Array [
                  8
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
                hash: 6,
                address: 1,
                role: 0
              }
            }
          },
          height: 61615,
          index: 57229,
          hash: 'e7a6688d09dfe93af95f18ad5979707c475ae7b9',
          tags: [
            {
              key: Uint8Array [
                53
              ],
              value: Uint8Array [
                175
              ]
            },
            {
              key: Uint8Array [
                0
              ],
              value: Uint8Array [
                196
              ]
            }
          ],
          code: 38
        }
      ],
      totalTxs: 10487
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
  code: 500,
  info: {
    id: 'process improvement',
    network: 'user-centric',
    moniker: 'supply-chains',
    consensusVersion: 'Rustic',
    synced: undefined,
    appHash: '27f516ed201ba413b4efd95f891bddf1d8707b10',
    blockHash: Uint8Array [
      119
    ],
    blockHeight: 37963,
    blockTime: '2019-02-19T06:45:34.507Z',
    address: '145161c431efe4e9156074f148e887cd9ecb4a25',
    votingPower: 77406,
    totalTxs: 45402,
    version: 'Soft',
    dataVersion: 'Intranet',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Technician'
    },
    supportedTxs: [
      'compress',
      'auxiliary'
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
  config: 'deliverables'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'GB',
    'connect'
  ],
  appHash: '6a97e5f20d8b43d492adb90c9893fb84d26aee95'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  state: {
    address: '058d3ead14cbd8449af6deccc98970e6c2d29e80',
    consensus: {
      maxBytes: 43052,
      maxGas: 32617,
      maxValidators: 67703,
      maxCandidates: 80877,
      pubKeyTypes: [
        'generate',
        'Identity'
      ],
      validators: [
        {
          address: '7bdc47b88fe0b6ddede6107812d27b6e216f168a',
          power: 33037
        },
        {
          address: 'a25c667c4f9bcca5ca3265e50ff68a08fdc1d6a7',
          power: 91362
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 12,
            dataHash: 'Minnesota',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 2,
            dataHash: 'Tactics',
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
        totalStakes: '33342',
        totalUnstakes: '16957',
        context: {
          genesisTx: 'Bedfordshire',
          renaissanceTx: 'indexing',
          genesisTime: '2019-02-19T06:45:34.507Z',
          renaissanceTime: '2019-02-19T06:45:34.507Z'
        }
      }
    },
    version: 'cross-platform',
    dataVersion: 'Curve',
    forgeAppHash: Uint8Array [
      81
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 0,
        address: 1,
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
    startDate: 'ivory',
    endDate: 'Multi-layered'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  forgeStatistics: {
    numBlocks: [
      52675,
      33354
    ],
    numTxs: [
      11988,
      79065
    ],
    numStakes: [
      '30291',
      '92747'
    ],
    numValidators: [
      92971,
      60365
    ],
    numAccountMigrateTxs: [
      35889,
      23902
    ],
    numCreateAssetTxs: [
      83880,
      91645
    ],
    numConsensusUpgradeTxs: [
      6278,
      95580
    ],
    numDeclareTxs: [
      10593,
      49405
    ],
    numDeclareFileTxs: [
      69496,
      49452
    ],
    numExchangeTxs: [
      54570,
      8191
    ],
    numStakeTxs: [
      74362,
      90507
    ],
    numSysUpgradeTxs: [
      21564,
      70956
    ],
    numTransferTxs: [
      30613,
      21374
    ],
    numUpdateAssetTxs: [
      43532,
      67548
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
  code: 8,
  netInfo: {
    listening: undefined,
    listeners: [
      'mesh',
      'Ecuador'
    ],
    nPeers: 43722,
    peers: [
      {
        nodeInfo: {
          id: 'tertiary',
          network: 'Pizza',
          consensusVersion: 'Fantastic',
          moniker: 'Ergonomic',
          ip: 'Nebraska',
          geoInfo: {
            city: 'array',
            country: 'compress',
            latitude: 44150.98,
            longitude: 56266.87
          }
        }
      },
      {
        nodeInfo: {
          id: 'Ukraine',
          network: 'Creative',
          consensusVersion: 'Generic Steel Car',
          moniker: 'matrix',
          ip: 'Yuan Renminbi',
          geoInfo: {
            city: 'Ergonomic Granite Mouse',
            country: 'Profit-focused',
            latitude: 19033.59,
            longitude: 44927.41
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
  address: '278f21f7606eb7f316e8ade40ad05cce0a3647b5',
  keys: [
    'USB',
    'orange'
  ],
  appHash: '9301359448dbd6aaea8f0b29a0fde306661596da'
});

// output
{
  code: 1,
  state: {
    address: '2996207a1533dea59ea62537aa98d1f4d22b7906',
    from: '6f00a01933a9bf3c353b8403cd9d6329b482088d',
    to: 'f9fd00fbe66206f328b54f2e8d2222ac7925af92',
    balance: '99343',
    message: 'sensor',
    context: {
      genesisTx: 'granular',
      renaissanceTx: 'Plastic',
      genesisTime: '2019-02-19T06:45:34.509Z',
      renaissanceTime: '2019-02-19T06:45:34.509Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 1,
        role: 6
      }
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: '543c79b5cf307849938a3e3a6ffc8f45d4803a3c'
});

// output
{
  code: 25,
  info: {
    tx: {
      from: '461e1f912cce12ddaa106eecb9b191dc8fa82ab4',
      nonce: 63866,
      signature: Uint8Array [
        219
      ],
      chainId: 'Trafficway',
      signatures: [
        {
          key: Uint8Array [
            168
          ],
          value: Uint8Array [
            172
          ]
        },
        {
          key: Uint8Array [
            214
          ],
          value: Uint8Array [
            64
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 14,
          address: 1,
          role: 4
        }
      }
    },
    height: 96434,
    index: 60778,
    hash: '1c79ce9a46b6571dd2a9fb0805b324711dee933b',
    tags: [
      {
        key: Uint8Array [
          87
        ],
        value: Uint8Array [
          0
        ]
      },
      {
        key: Uint8Array [
          221
        ],
        value: Uint8Array [
          131
        ]
      }
    ],
    code: 6
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 54383
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  unconfirmedTxs: {
    nTxs: 31891,
    txs: [
      {
        from: '1a04ee0f4c2c32441920997f09a3355b15f1f4b6',
        nonce: 6204,
        signature: Uint8Array [
          152
        ],
        chainId: 'Technician',
        signatures: [
          {
            key: Uint8Array [
              57
            ],
            value: Uint8Array [
              148
            ]
          },
          {
            key: Uint8Array [
              214
            ],
            value: Uint8Array [
              63
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 1,
            role: 7
          }
        }
      },
      {
        from: '48cd883da72649b22f8df14a626efd55507cc58e',
        nonce: 14562,
        signature: Uint8Array [
          113
        ],
        chainId: 'District',
        signatures: [
          {
            key: Uint8Array [
              85
            ],
            value: Uint8Array [
              19
            ]
          },
          {
            key: Uint8Array [
              20
            ],
            value: Uint8Array [
              56
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
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
  code: 20,
  validatorsInfo: {
    blockHeight: 73272,
    validators: [
      {
        address: 'be3436b7774e59b47ed6f8690f2dd645c934b965',
        pubKey: {
          type: 'Small',
          data: Uint8Array [
            21
          ]
        },
        votingPower: 71203,
        proposerPriority: 'deposit',
        name: 'Usability'
      },
      {
        address: '4a604ff013519e3d96061fc5383b105a39d5e586',
        pubKey: {
          type: 'Auto Loan Account',
          data: Uint8Array [
            144
          ]
        },
        votingPower: 19733,
        proposerPriority: 'Madagascar',
        name: 'Estate'
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
    cursor: 'Saint Kitts and Nevis',
    size: 20614,
    order: [
      {
        field: 'Connecticut',
        type: 'Garden'
      },
      {
        field: 'Rustic',
        type: 'invoice'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Practical',
    endDateTime: 'project'
  },
  addressFilter: {
    sender: 'ivory',
    receiver: 'River'
  },
  typeFilter: {
    types: [
      'Forks',
      'mission-critical'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'optimize',
    next: undefined,
    total: 45262
  },
  transactions: [
    {
      hash: 'a033d880ab260799ec7623288d0a8a15452a62e6',
      sender: 'PNG',
      receiver: 'Programmable',
      time: 'well-modulated',
      type: 'methodology',
      tx: {
        from: '929060cbfbfb0796eba0e88da8b34cb5418996ab',
        nonce: 77809,
        signature: Uint8Array [
          236
        ],
        chainId: 'protocol',
        signatures: [
          {
            key: Uint8Array [
              79
            ],
            value: Uint8Array [
              44
            ]
          },
          {
            key: Uint8Array [
              106
            ],
            value: Uint8Array [
              181
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 0
          }
        }
      }
    },
    {
      hash: 'f21dcdbe28f00029db9199be040765ccc8c6da2b',
      sender: 'XSS',
      receiver: 'Platinum',
      time: 'Cambridgeshire',
      type: 'capability',
      tx: {
        from: '3f85d77d1b9f1f4f3ab3a9484ba734c841d9eb80',
        nonce: 26483,
        signature: Uint8Array [
          151
        ],
        chainId: 'initiatives',
        signatures: [
          {
            key: Uint8Array [
              228
            ],
            value: Uint8Array [
              213
            ]
          },
          {
            key: Uint8Array [
              29
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
            hash: 13,
            address: 0,
            role: 4
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
  code: 36,
  address: '181b463169479982e54773da6127258032c7f512'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'c45aacc2b98337cc2de739bd7a604583f4705a88'
});

// output
{
  code: 21,
  chunk: Uint8Array [
    7
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '7fdab7b88a67253f63ec92ba2a6b8668b615e8f2',
  passphrase: 'envisioneer'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  token: 'Borders',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      34
    ],
    pk: Uint8Array [
      182
    ],
    address: '18b63e2207e84b99954c42e557470dba4241a354'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'bbebc9960440fc0a36473bf1daa97ad5d4df0ea0',
    nonce: 38051,
    signature: Uint8Array [
      124
    ],
    chainId: 'even-keeled',
    signatures: [
      {
        key: Uint8Array [
          80
        ],
        value: Uint8Array [
          72
        ]
      },
      {
        key: Uint8Array [
          146
        ],
        value: Uint8Array [
          131
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 1,
        role: 4
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      61
    ],
    pk: Uint8Array [
      85
    ],
    address: '8f8eb9dbf4a230afedb101e5c56cb52887f0ed9e'
  },
  token: 'Gold'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  tx: {
    from: '34bf013cd62af243877088dbf520d3aab933171d',
    nonce: 35631,
    signature: Uint8Array [
      54
    ],
    chainId: 'Function-based',
    signatures: [
      {
        key: Uint8Array [
          191
        ],
        value: Uint8Array [
          152
        ]
      },
      {
        key: Uint8Array [
          174
        ],
        value: Uint8Array [
          1
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 1,
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
  hash: 'dc91b12664be389deb5b534ad2f81ae0dd640383'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '120f179cb1b168b4cf7cdf397f8323a73beb6b6e',
      nonce: 71787,
      signature: Uint8Array [
        231
      ],
      chainId: 'complexity',
      signatures: [
        {
          key: Uint8Array [
            169
          ],
          value: Uint8Array [
            131
          ]
        },
        {
          key: Uint8Array [
            225
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
          hash: 7,
          address: 1,
          role: 5
        }
      }
    },
    states: [
      {
        balance: '8756',
        nonce: 42050,
        numTxs: 19647,
        address: 'b70c5b7367febacfb07f9a9807f45c91aed342b9',
        pk: Uint8Array [
          198
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 7
        },
        moniker: 'optical',
        context: {
          genesisTx: 'Savings Account',
          renaissanceTx: 'salmon',
          genesisTime: '2019-02-19T06:45:34.512Z',
          renaissanceTime: '2019-02-19T06:45:34.512Z'
        },
        migratedTo: [
          'Fundamental',
          'Chips'
        ],
        migratedFrom: [
          'New Hampshire',
          'Bulgaria'
        ],
        numAssets: 94676,
        stake: {
          totalStakes: '25455',
          totalUnstakes: '27165',
          totalReceivedStakes: '46882',
          recentStakes: {
            items: [
              Uint8Array [
                128
              ],
              Uint8Array [
                228
              ]
            ],
            typeUrl: 'Handcrafted Cotton Fish',
            maxItems: 31255,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                85
              ],
              Uint8Array [
                90
              ]
            ],
            typeUrl: 'Garden',
            maxItems: 87045,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              210
            ],
            Uint8Array [
              11
            ]
          ],
          typeUrl: 'quantify',
          maxItems: 38682,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 8
          }
        }
      },
      {
        balance: '48537',
        nonce: 80623,
        numTxs: 94972,
        address: 'ed6b32f554820f94ec57fda03faff8263b79f61f',
        pk: Uint8Array [
          144
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 8
        },
        moniker: 'Sausages',
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'overriding',
          genesisTime: '2019-02-19T06:45:34.513Z',
          renaissanceTime: '2019-02-19T06:45:34.513Z'
        },
        migratedTo: [
          'content-based',
          'IB'
        ],
        migratedFrom: [
          'Computers',
          'Avon'
        ],
        numAssets: 92097,
        stake: {
          totalStakes: '94527',
          totalUnstakes: '7243',
          totalReceivedStakes: '94314',
          recentStakes: {
            items: [
              Uint8Array [
                101
              ],
              Uint8Array [
                65
              ]
            ],
            typeUrl: 'Identity',
            maxItems: 29512,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                218
              ],
              Uint8Array [
                193
              ]
            ],
            typeUrl: 'copying',
            maxItems: 13623,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              116
            ],
            Uint8Array [
              0
            ]
          ],
          typeUrl: 'orange',
          maxItems: 27249,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 2
          }
        }
      }
    ],
    assets: [
      {
        address: '0a41b410aac1c56032b7125e754e3ae50ce33192',
        owner: 'e-markets',
        moniker: 'Reactive',
        readonly: undefined,
        stake: {
          totalStakes: '23998',
          totalUnstakes: '13793',
          totalReceivedStakes: '86913',
          recentStakes: {
            items: [
              Uint8Array [
                160
              ],
              Uint8Array [
                202
              ]
            ],
            typeUrl: 'black',
            maxItems: 8770,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                119
              ],
              Uint8Array [
                124
              ]
            ],
            typeUrl: 'synergy',
            maxItems: 32176,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'purple',
          renaissanceTx: 'Table',
          genesisTime: '2019-02-19T06:45:34.513Z',
          renaissanceTime: '2019-02-19T06:45:34.513Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 0,
            role: 5
          }
        }
      },
      {
        address: 'f0b91c3260c2ad06ada368545c20675c3f81e2e1',
        owner: 'port',
        moniker: 'Savings Account',
        readonly: undefined,
        stake: {
          totalStakes: '38094',
          totalUnstakes: '79576',
          totalReceivedStakes: '18145',
          recentStakes: {
            items: [
              Uint8Array [
                8
              ],
              Uint8Array [
                133
              ]
            ],
            typeUrl: 'Niue',
            maxItems: 98401,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                164
              ],
              Uint8Array [
                246
              ]
            ],
            typeUrl: 'Nakfa',
            maxItems: 12705,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Personal Loan Account',
          renaissanceTx: 'discrete',
          genesisTime: '2019-02-19T06:45:34.513Z',
          renaissanceTime: '2019-02-19T06:45:34.513Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 0,
            role: 0
          }
        }
      }
    ],
    stakes: [
      {
        address: '4b7de83b044e08c8e8d08746cb6989b0a2ec8b7e',
        from: '8d6c480dc8b35871aba1a7f89110d5f87fa09f9e',
        to: '23f8a621434fcb0943cffe4ec38b2595380ef82f',
        balance: '55376',
        message: 'Glen',
        context: {
          genesisTx: 'Shirt',
          renaissanceTx: 'withdrawal',
          genesisTime: '2019-02-19T06:45:34.513Z',
          renaissanceTime: '2019-02-19T06:45:34.513Z'
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
        address: '7aa4673c84e88e98d6a6fd3501fc21dd07db26e5',
        from: '928b2b7dd5b795ec1b89a7e83bb1f246077918b4',
        to: '2a53841ccb88ed85c2ecb70ac4d7c0b07591f125',
        balance: '99222',
        message: 'Centralized',
        context: {
          genesisTx: 'Sharable',
          renaissanceTx: 'Oregon',
          genesisTime: '2019-02-19T06:45:34.513Z',
          renaissanceTime: '2019-02-19T06:45:34.513Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 4
          }
        }
      }
    ],
    context: {
      txHash: 'e837981d8a2121c6471f2b4356ad2fb97d066a48',
      blockHeight: 84503,
      blockTime: '2019-02-19T06:45:34.513Z',
      totalTxs: 70457,
      txStatistics: {
        numAccountMigrateTxs: 6313,
        numCreateAssetTxs: 26572,
        numConsensusUpgradeTxs: 96022,
        numDeclareTxs: 24791,
        numDeclareFileTxs: 4823,
        numExchangeTxs: 75101,
        numStakeTxs: 79476,
        numSysUpgradeTxs: 29611,
        numTransferTxs: 2098,
        numUpdateAssetTxs: 29445
      },
      txIndex: 48459
    },
    appState: {
      address: 'a24540ee964db8084bb369bba094cbc3b5ba394a',
      consensus: {
        maxBytes: 8995,
        maxGas: 80134,
        maxValidators: 57546,
        maxCandidates: 84953,
        pubKeyTypes: [
          'Practical Fresh Soap',
          'transmit'
        ],
        validators: [
          {
            address: '370adbb5abc831e28d59438a0ce7bbb856bccb3a',
            power: 7456
          },
          {
            address: 'c1cd48f2a1ae29229e4c9f96f02fdecede3fea6f',
            power: 38801
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
              dataHash: 'Chair',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 13,
              dataHash: 'withdrawal',
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
          totalStakes: '12602',
          totalUnstakes: '22305',
          context: {
            genesisTx: 'end-to-end',
            renaissanceTx: 'Cotton',
            genesisTime: '2019-02-19T06:45:34.514Z',
            renaissanceTime: '2019-02-19T06:45:34.514Z'
          }
        }
      },
      version: 'panel',
      dataVersion: 'Fantastic Wooden Tuna',
      forgeAppHash: Uint8Array [
        54
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 2
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 4
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '1d6a1a7e210dad3776c61c2d5306b37e3311e9da',
      nonce: 21944,
      signature: Uint8Array [
        230
      ],
      chainId: 'Chief',
      signatures: [
        {
          key: Uint8Array [
            4
          ],
          value: Uint8Array [
            238
          ]
        },
        {
          key: Uint8Array [
            229
          ],
          value: Uint8Array [
            43
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 5
        }
      }
    },
    states: [
      {
        balance: '29283',
        nonce: 50282,
        numTxs: 12935,
        address: 'b616a24e5c8277967e92313164cf3044b125f38b',
        pk: Uint8Array [
          160
        ],
        type: {
          pk: 0,
          hash: 6,
          address: 1,
          role: 1
        },
        moniker: 'empower',
        context: {
          genesisTx: 'wireless',
          renaissanceTx: 'Optimization',
          genesisTime: '2019-02-19T06:45:34.515Z',
          renaissanceTime: '2019-02-19T06:45:34.515Z'
        },
        migratedTo: [
          'Sleek',
          'Soft'
        ],
        migratedFrom: [
          'JBOD',
          'COM'
        ],
        numAssets: 33892,
        stake: {
          totalStakes: '80480',
          totalUnstakes: '88016',
          totalReceivedStakes: '5966',
          recentStakes: {
            items: [
              Uint8Array [
                191
              ],
              Uint8Array [
                50
              ]
            ],
            typeUrl: 'Lead',
            maxItems: 79582,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                171
              ],
              Uint8Array [
                155
              ]
            ],
            typeUrl: 'Keyboard',
            maxItems: 64763,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              85
            ],
            Uint8Array [
              108
            ]
          ],
          typeUrl: 'invoice',
          maxItems: 51145,
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
      },
      {
        balance: '30224',
        nonce: 20519,
        numTxs: 58937,
        address: 'f73b059366cadc518f84fedfe0f31209ab37723d',
        pk: Uint8Array [
          21
        ],
        type: {
          pk: 0,
          hash: 13,
          address: 0,
          role: 7
        },
        moniker: 'web-enabled',
        context: {
          genesisTx: 'cutting-edge',
          renaissanceTx: 'SSL',
          genesisTime: '2019-02-19T06:45:34.515Z',
          renaissanceTime: '2019-02-19T06:45:34.515Z'
        },
        migratedTo: [
          'Avon',
          'Ergonomic'
        ],
        migratedFrom: [
          'Turks and Caicos Islands',
          'synthesize'
        ],
        numAssets: 51724,
        stake: {
          totalStakes: '66923',
          totalUnstakes: '71672',
          totalReceivedStakes: '26286',
          recentStakes: {
            items: [
              Uint8Array [
                32
              ],
              Uint8Array [
                235
              ]
            ],
            typeUrl: 'content-based',
            maxItems: 40460,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                110
              ],
              Uint8Array [
                177
              ]
            ],
            typeUrl: 'Practical Metal Mouse',
            maxItems: 91253,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              80
            ],
            Uint8Array [
              212
            ]
          ],
          typeUrl: 'Greens',
          maxItems: 36097,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 3
          }
        }
      }
    ],
    assets: [
      {
        address: '6f36d0c4453d5a0abbef8bef51aa74b1fede43de',
        owner: 'Sports',
        moniker: 'Moroccan Dirham',
        readonly: undefined,
        stake: {
          totalStakes: '19075',
          totalUnstakes: '85792',
          totalReceivedStakes: '15944',
          recentStakes: {
            items: [
              Uint8Array [
                50
              ],
              Uint8Array [
                94
              ]
            ],
            typeUrl: 'Technician',
            maxItems: 39422,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                71
              ],
              Uint8Array [
                7
              ]
            ],
            typeUrl: 'cutting-edge',
            maxItems: 36035,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'lime',
          renaissanceTx: 'RSS',
          genesisTime: '2019-02-19T06:45:34.515Z',
          renaissanceTime: '2019-02-19T06:45:34.515Z'
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
      },
      {
        address: '1827edbaeb02a05e34c186c7f52fdb1aee9a5c62',
        owner: 'Generic',
        moniker: 'ADP',
        readonly: undefined,
        stake: {
          totalStakes: '361',
          totalUnstakes: '88784',
          totalReceivedStakes: '40041',
          recentStakes: {
            items: [
              Uint8Array [
                33
              ],
              Uint8Array [
                118
              ]
            ],
            typeUrl: 'task-force',
            maxItems: 47909,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                100
              ],
              Uint8Array [
                60
              ]
            ],
            typeUrl: 'Response',
            maxItems: 57752,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Savings Account',
          renaissanceTx: 'invoice',
          genesisTime: '2019-02-19T06:45:34.516Z',
          renaissanceTime: '2019-02-19T06:45:34.516Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 0
          }
        }
      }
    ],
    stakes: [
      {
        address: '06d71a102b0bae87e0a1e4bfee19da410a873982',
        from: 'd1acbc2d63830a5ca976a71c670cdfa3d121f633',
        to: 'a6fc15a4012ac1822d5ae6aaf115427d5abf736e',
        balance: '71497',
        message: 'Personal Loan Account',
        context: {
          genesisTx: 'Garden',
          renaissanceTx: 'Assistant',
          genesisTime: '2019-02-19T06:45:34.516Z',
          renaissanceTime: '2019-02-19T06:45:34.516Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 14,
            address: 0,
            role: 0
          }
        }
      },
      {
        address: '7561a70d72e7416122d9ceee43908567466d281b',
        from: '72cf4b87994b3985d4240664997d3b561d5b1f1c',
        to: 'd996cf28fdea662482a9c38b9c0610c038fb7bbe',
        balance: '89588',
        message: 'innovate',
        context: {
          genesisTx: 'optical',
          renaissanceTx: 'hack',
          genesisTime: '2019-02-19T06:45:34.516Z',
          renaissanceTime: '2019-02-19T06:45:34.516Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 0,
            role: 0
          }
        }
      }
    ],
    context: {
      txHash: 'bde7030e55ebf7f93661f95e965dc47e54de95d6',
      blockHeight: 80035,
      blockTime: '2019-02-19T06:45:34.516Z',
      totalTxs: 69011,
      txStatistics: {
        numAccountMigrateTxs: 24422,
        numCreateAssetTxs: 23835,
        numConsensusUpgradeTxs: 46097,
        numDeclareTxs: 90114,
        numDeclareFileTxs: 22148,
        numExchangeTxs: 16304,
        numStakeTxs: 50045,
        numSysUpgradeTxs: 41485,
        numTransferTxs: 53305,
        numUpdateAssetTxs: 81038
      },
      txIndex: 51750
    },
    appState: {
      address: '93e14f696608e062e1a63dc09a3576e21c9a7b7a',
      consensus: {
        maxBytes: 39798,
        maxGas: 63100,
        maxValidators: 84178,
        maxCandidates: 71823,
        pubKeyTypes: [
          'Supervisor',
          'SDD'
        ],
        validators: [
          {
            address: '55ad0aa22681bb41b10972125f582dfe3db7ee8a',
            power: 8570
          },
          {
            address: '0be47de5ae7d9b6c5db29b4c658f6688b82a883a',
            power: 33659
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
              dataHash: 'Cotton',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 11,
              dataHash: 'Identity',
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
          totalStakes: '58607',
          totalUnstakes: '82883',
          context: {
            genesisTx: 'budgetary management',
            renaissanceTx: 'cyan',
            genesisTime: '2019-02-19T06:45:34.516Z',
            renaissanceTime: '2019-02-19T06:45:34.516Z'
          }
        }
      },
      version: 'Refined',
      dataVersion: 'Savings Account',
      forgeAppHash: Uint8Array [
        84
      ],
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
    45
  ],
  type: {
    pk: 1,
    hash: 6,
    address: 1,
    role: 1
  },
  passphrase: 'Turnpike',
  moniker: 'Home Loan Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  token: 'Central',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      84
    ],
    pk: Uint8Array [
      71
    ],
    address: 'f758b49f200eab41019e20754daeb8dba303b816'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '512841b5b265ca552812b4f40ae57d03d8041cec'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9
}
});
```

### search

```js
const result = await client.search({
  key: 'Granite',
  value: 'Garden'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  txs: [
    {
      tx: {
        from: '47e277603beb509793acd99d403f12a21bbfb203',
        nonce: 34853,
        signature: Uint8Array [
          200
        ],
        chainId: 'bandwidth',
        signatures: [
          {
            key: Uint8Array [
              51
            ],
            value: Uint8Array [
              0
            ]
          },
          {
            key: Uint8Array [
              187
            ],
            value: Uint8Array [
              127
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 6,
            address: 1,
            role: 2
          }
        }
      },
      height: 95605,
      index: 33178,
      hash: 'a484565a328fb9108a6e5762d2179959cb8255e7',
      tags: [
        {
          key: Uint8Array [
            222
          ],
          value: Uint8Array [
            31
          ]
        },
        {
          key: Uint8Array [
            54
          ],
          value: Uint8Array [
            242
          ]
        }
      ],
      code: 34
    },
    {
      tx: {
        from: '737e471e76e9ce461161edd405b1362387c699e8',
        nonce: 67734,
        signature: Uint8Array [
          116
        ],
        chainId: 'deposit',
        signatures: [
          {
            key: Uint8Array [
              154
            ],
            value: Uint8Array [
              125
            ]
          },
          {
            key: Uint8Array [
              7
            ],
            value: Uint8Array [
              121
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 0
          }
        }
      },
      height: 93566,
      index: 24299,
      hash: 'bdce4793877ed1ba3b76b99efc92f01bb9b21467',
      tags: [
        {
          key: Uint8Array [
            149
          ],
          value: Uint8Array [
            222
          ]
        },
        {
          key: Uint8Array [
            38
          ],
          value: Uint8Array [
            91
          ]
        }
      ],
      code: 2
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '3670a7bd4cd8fd579689f9f7661d8f29d886a8c0',
    nonce: 61791,
    signature: Uint8Array [
      157
    ],
    chainId: 'Small',
    signatures: [
      {
        key: Uint8Array [
          5
        ],
        value: Uint8Array [
          255
        ]
      },
      {
        key: Uint8Array [
          2
        ],
        value: Uint8Array [
          231
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 0,
        role: 7
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      249
    ],
    pk: Uint8Array [
      187
    ],
    address: 'f84d24c0db679e19e3631c4ee24c4805ba6f86aa'
  },
  token: 'Toys',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  hash: '834a3920773c7edfa47929842d56c2764355fc1b'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    42
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      156
    ],
    pk: Uint8Array [
      59
    ],
    address: '06700c26adb06005ecf6c8722e4f871cfb371f9f'
  },
  token: 'Home Loan Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  signedData: Uint8Array [
    227
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    192
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  hash: 'ff94b09ea53594102fadc34c684e4a2ad6e3479c'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 132,
  filter: 'reintermediate'
});

// output
{
  topic: 'magenta'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'connect'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
