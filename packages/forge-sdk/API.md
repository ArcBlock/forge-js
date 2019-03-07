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
  * [Direction](#direction)
  * [SupportedTxs](#supportedtxs)
  * [SupportedStakes](#supportedstakes)
* [RPC Methods](#rpc-methods)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declareNode](#declarenode)
  * [getAccountState](#getaccountstate)
  * [getAssetAddress](#getassetaddress)
  * [getAssetState](#getassetstate)
  * [getAssets](#getassets)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getNetInfo](#getnetinfo)
  * [getNodeInfo](#getnodeinfo)
  * [getStakeState](#getstakestate)
  * [getStakes](#getstakes)
  * [getTopAccounts](#gettopaccounts)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listAssetTransactions](#listassettransactions)
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
  EXPIRED_ASSET: 39,
  UNTRANSFERRABLE_ASSET: 40,
  READONLY_ASSET: 41,
  CONSUMED_ASSET: 42,
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
  CONSUME_ASSET: 25,
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

### Direction

```js
{
  MUTUAL: 0,
  ONE_WAY: 1,
  UNION: 2
}
```

### SupportedTxs

```js
[
  'AccountMigrateTx',
  'ConsensusUpgradeTx',
  'ConsumeAssetTx',
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
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  from: '66a4d25b4f2861645e7f3b81e9cb6c9eb72fe9d7',
  nonce: 3419,
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      199
    ],
    pk: Uint8Array [
      138
    ],
    address: '86bb0480f21585d80bd9841aa08840a506c4360a'
  },
  token: 'Rustic'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  tx: {
    from: 'f754ec144dbfc375a62b96e9086228ff612da72b',
    nonce: 35859,
    signature: Uint8Array [
      65
    ],
    chainId: 'hacking',
    signatures: [
      {
        signer: 'Gorgeous Granite Cheese',
        signature: Uint8Array [
          102
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Metal',
        signature: Uint8Array [
          171
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Consultant',
  type: {
    pk: 1,
    hash: 0,
    address: 0,
    role: 8
  },
  moniker: 'Officer'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  token: 'Luxembourg',
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      66
    ],
    pk: Uint8Array [
      110
    ],
    address: 'bcda0a4dafac3325583baadc9d938f2c24d0e6cc'
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
  code: 20,
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      249
    ],
    pk: Uint8Array [
      221
    ],
    address: 'a610a6d6dcef32fdcf4b7d68759262d56b6158f7'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'cfcdf46e1505b59faebdde4eb5cc221b1206b249',
  keys: [
    'quantifying',
    'Unbranded Wooden Sausages'
  ],
  height: 95401
});

// output
{
  code: 0,
  state: {
    balance: '41133',
    nonce: 831,
    numTxs: 1021,
    address: '7a64487a5ea996f3d09b2fb19e276b8330122682',
    pk: Uint8Array [
      237
    ],
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 8
    },
    moniker: 'UAE Dirham',
    context: {
      genesisTx: 'program',
      renaissanceTx: 'cross-platform',
      genesisTime: '2019-03-07T10:17:12.379Z',
      renaissanceTime: '2019-03-07T10:17:12.379Z'
    },
    issuer: 'Shirt',
    migratedTo: [
      'Intelligent Soft Fish',
      'payment'
    ],
    migratedFrom: [
      'Outdoors',
      'moratorium'
    ],
    numAssets: 19465,
    stake: {
      totalStakes: '60841',
      totalUnstakes: '51128',
      totalReceivedStakes: '51216',
      recentStakes: {
        items: [
          Uint8Array [
            199
          ],
          Uint8Array [
            10
          ]
        ],
        typeUrl: 'compressing',
        maxItems: 17786,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            189
          ],
          Uint8Array [
            43
          ]
        ],
        typeUrl: 'quantifying',
        maxItems: 65076,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          53
        ],
        Uint8Array [
          123
        ]
      ],
      typeUrl: 'Way',
      maxItems: 14810,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'Riel',
  itx: {
    moniker: 'Djibouti',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 5351,
    parent: 'SAS'
  },
  walletType: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  assetAddress: 'Refined'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'd3a28b9c015fa4a73cd621ef99155e8f5f36b3f6',
  keys: [
    'Metical',
    'next generation'
  ],
  height: 19667
});

// output
{
  code: 25,
  state: {
    address: 'c026c86e5990ec0962b6922209ac49407cc0dfeb',
    owner: 'internet solution',
    moniker: 'Frozen',
    readonly: undefined,
    transferrable: undefined,
    ttl: 9989,
    consumedTime: '2019-03-07T10:17:12.380Z',
    issuer: 'parsing',
    stake: {
      totalStakes: '5125',
      totalUnstakes: '42011',
      totalReceivedStakes: '96870',
      recentStakes: {
        items: [
          Uint8Array [
            198
          ],
          Uint8Array [
            100
          ]
        ],
        typeUrl: 'quantifying',
        maxItems: 21694,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            190
          ],
          Uint8Array [
            224
          ]
        ],
        typeUrl: 'synthesize',
        maxItems: 47404,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Borders',
      renaissanceTx: 'Central',
      genesisTime: '2019-03-07T10:17:12.380Z',
      renaissanceTime: '2019-03-07T10:17:12.380Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'Florida',
    size: 77549,
    order: [
      {
        field: 'array',
        type: 'Berkshire'
      },
      {
        field: 'driver',
        type: 'connect'
      }
    ]
  },
  ownerAddress: 'Intelligent'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  page: {
    cursor: 'Minnesota',
    next: undefined,
    total: 99626
  },
  assets: [
    {
      address: '338f97695d80f9d93f4a02ac6561e77a6711b8cc',
      owner: 'Cross-platform',
      genesisTime: 'Accounts',
      renaissanceTime: 'deposit',
      moniker: 'override',
      readonly: undefined
    },
    {
      address: '6b96f202cd4835b443559a2df77ee584895f4fa6',
      owner: 'capacitor',
      genesisTime: 'navigate',
      renaissanceTime: 'program',
      moniker: 'Garden',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 92511
});

// output
{
  code: 27,
  block: {
    height: 76157,
    numTxs: 54234,
    time: '2019-03-07T10:17:12.381Z',
    appHash: '94b83a8bd0ff6706811d2b2cb16c927df435df4a',
    proposer: '0aeb691a5fdbd4f1ef8ec3c36af9c1dc685321ee',
    txs: [
      {
        tx: {
          from: '9f85f79c9f964ab33eae8459411d076064ef03a1',
          nonce: 90444,
          signature: Uint8Array [
            166
          ],
          chainId: 'Personal Loan Account',
          signatures: [
            {
              signer: 'Plastic',
              signature: Uint8Array [
                32
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'PCI',
              signature: Uint8Array [
                139
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 40370,
        index: 53152,
        hash: '2164cccb10cf54bdba0c7a43af5b28b13b3ce132',
        tags: [
          {
            key: Uint8Array [
              240
            ],
            value: Uint8Array [
              139
            ]
          },
          {
            key: Uint8Array [
              208
            ],
            value: Uint8Array [
              146
            ]
          }
        ],
        code: 500,
        time: '2019-03-07T10:17:12.382Z'
      },
      {
        tx: {
          from: '1a1418b34346441adfbec7dff207b124a32d21f0',
          nonce: 56799,
          signature: Uint8Array [
            252
          ],
          chainId: 'multi-state',
          signatures: [
            {
              signer: 'global',
              signature: Uint8Array [
                124
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Up-sized',
              signature: Uint8Array [
                72
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 19367,
        index: 29465,
        hash: 'd6850985391e44515f60b246b01bfd0debf4b91d',
        tags: [
          {
            key: Uint8Array [
              144
            ],
            value: Uint8Array [
              75
            ]
          },
          {
            key: Uint8Array [
              16
            ],
            value: Uint8Array [
              142
            ]
          }
        ],
        code: 40,
        time: '2019-03-07T10:17:12.382Z'
      }
    ],
    totalTxs: 58386,
    invalidTxs: [
      {
        tx: {
          from: '8f39b889080bfd5aafe3cf6ac813411461ef37d9',
          nonce: 49830,
          signature: Uint8Array [
            121
          ],
          chainId: 'red',
          signatures: [
            {
              signer: 'deposit',
              signature: Uint8Array [
                151
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'calculating',
              signature: Uint8Array [
                231
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 27542,
        index: 36806,
        hash: '59039afb2f61c070acc53c685415b215e73dfd5c',
        tags: [
          {
            key: Uint8Array [
              252
            ],
            value: Uint8Array [
              68
            ]
          },
          {
            key: Uint8Array [
              175
            ],
            value: Uint8Array [
              2
            ]
          }
        ],
        code: 39,
        time: '2019-03-07T10:17:12.382Z'
      },
      {
        tx: {
          from: 'adefa4db8c8707dd335e287fbf08462bdefbcd76',
          nonce: 10604,
          signature: Uint8Array [
            128
          ],
          chainId: 'AI',
          signatures: [
            {
              signer: 'Hawaii',
              signature: Uint8Array [
                238
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'synergies',
              signature: Uint8Array [
                0
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            }
          ],
          itx: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        height: 56706,
        index: 71622,
        hash: 'b27e771c056fc279f9037621a7553f273a739c3e',
        tags: [
          {
            key: Uint8Array [
              46
            ],
            value: Uint8Array [
              172
            ]
          },
          {
            key: Uint8Array [
              45
            ],
            value: Uint8Array [
              20
            ]
          }
        ],
        code: 24,
        time: '2019-03-07T10:17:12.382Z'
      }
    ],
    txsHashes: [
      'Fields',
      'Proactive'
    ],
    invalidTxsHashes: [
      'program',
      'orchid'
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'bypassing',
    size: 46018,
    order: [
      {
        field: 'Expanded',
        type: 'methodologies'
      },
      {
        field: 'Analyst',
        type: 'synergies'
      }
    ]
  },
  minHeight: 52158,
  maxHeight: 81360,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  page: {
    cursor: 'program',
    next: undefined,
    total: 99748
  },
  blocks: [
    {
      height: 88649,
      numTxs: 93515,
      time: '2019-03-07T10:17:12.383Z',
      appHash: 'db95c19bd01f0aef13b28e9f31c29a7bf6e9f88b',
      proposer: '61bef73774a0d31eec693867fd2e4287582b955c',
      txs: [
        {
          tx: {
            from: '0076379dfe3d8c399fdd3b7c0f9ae274cada57d5',
            nonce: 3381,
            signature: Uint8Array [
              114
            ],
            chainId: 'Kids',
            signatures: [
              {
                signer: 'Paradigm',
                signature: Uint8Array [
                  211
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'multimedia',
                signature: Uint8Array [
                  146
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 94843,
          index: 16375,
          hash: '0a143c6265f4798c683660c02cee337ac07df234',
          tags: [
            {
              key: Uint8Array [
                193
              ],
              value: Uint8Array [
                208
              ]
            },
            {
              key: Uint8Array [
                170
              ],
              value: Uint8Array [
                248
              ]
            }
          ],
          code: 42,
          time: '2019-03-07T10:17:12.383Z'
        },
        {
          tx: {
            from: 'd06b9962b29a9a563ddbf81cb7ace25984d59504',
            nonce: 5938,
            signature: Uint8Array [
              66
            ],
            chainId: 'Infrastructure',
            signatures: [
              {
                signer: 'transmitting',
                signature: Uint8Array [
                  200
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'incubate',
                signature: Uint8Array [
                  175
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 39844,
          index: 6515,
          hash: '4b431659ae7db219201037825bd66fb893a29a2f',
          tags: [
            {
              key: Uint8Array [
                50
              ],
              value: Uint8Array [
                122
              ]
            },
            {
              key: Uint8Array [
                58
              ],
              value: Uint8Array [
                163
              ]
            }
          ],
          code: 1,
          time: '2019-03-07T10:17:12.383Z'
        }
      ],
      totalTxs: 38976,
      invalidTxs: [
        {
          tx: {
            from: '761c1ae63d4d4994ca5deee015f32e972fb75401',
            nonce: 75442,
            signature: Uint8Array [
              29
            ],
            chainId: 'next-generation',
            signatures: [
              {
                signer: 'Checking Account',
                signature: Uint8Array [
                  99
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Executive',
                signature: Uint8Array [
                  127
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 65968,
          index: 86169,
          hash: '09e58695cd594c15146f5188dd48a904940ec8a3',
          tags: [
            {
              key: Uint8Array [
                89
              ],
              value: Uint8Array [
                187
              ]
            },
            {
              key: Uint8Array [
                222
              ],
              value: Uint8Array [
                78
              ]
            }
          ],
          code: 42,
          time: '2019-03-07T10:17:12.384Z'
        },
        {
          tx: {
            from: '4733b41bbf84b957bc3e16423f03aa1f5c86ee3c',
            nonce: 16711,
            signature: Uint8Array [
              75
            ],
            chainId: 'Agent',
            signatures: [
              {
                signer: 'Overpass',
                signature: Uint8Array [
                  227
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Savings Account',
                signature: Uint8Array [
                  240
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 84007,
          index: 71254,
          hash: 'd80fa70d781b932628a7a931e8ef19b018329e73',
          tags: [
            {
              key: Uint8Array [
                165
              ],
              value: Uint8Array [
                112
              ]
            },
            {
              key: Uint8Array [
                218
              ],
              value: Uint8Array [
                85
              ]
            }
          ],
          code: 0,
          time: '2019-03-07T10:17:12.384Z'
        }
      ],
      txsHashes: [
        'Solutions',
        'array'
      ],
      invalidTxsHashes: [
        'transmit',
        'holistic'
      ]
    },
    {
      height: 50245,
      numTxs: 43564,
      time: '2019-03-07T10:17:12.384Z',
      appHash: '79ae8b68fbab7ad4aa19891ba2a576b47d933c3d',
      proposer: 'd39735d83259d61ecb5917b27d9ddfc9306df3fd',
      txs: [
        {
          tx: {
            from: '3565a647213e9cf04379a90d6f4cab21c2a3d118',
            nonce: 99346,
            signature: Uint8Array [
              202
            ],
            chainId: 'frame',
            signatures: [
              {
                signer: 'Creative',
                signature: Uint8Array [
                  227
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Svalbard & Jan Mayen Islands',
                signature: Uint8Array [
                  20
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 48678,
          index: 99551,
          hash: '4e866a36ec4b24b832497b54a125c37fdd3d9c93',
          tags: [
            {
              key: Uint8Array [
                253
              ],
              value: Uint8Array [
                101
              ]
            },
            {
              key: Uint8Array [
                243
              ],
              value: Uint8Array [
                29
              ]
            }
          ],
          code: 22,
          time: '2019-03-07T10:17:12.384Z'
        },
        {
          tx: {
            from: '624dadf9a98403d8e36a26346342bf3f3a26255a',
            nonce: 84872,
            signature: Uint8Array [
              50
            ],
            chainId: 'dynamic',
            signatures: [
              {
                signer: 'Credit Card Account',
                signature: Uint8Array [
                  176
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Extended',
                signature: Uint8Array [
                  45
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 93523,
          index: 21902,
          hash: '64205b91c6765f5795761e5fdf99ebd9457b69ca',
          tags: [
            {
              key: Uint8Array [
                246
              ],
              value: Uint8Array [
                246
              ]
            },
            {
              key: Uint8Array [
                192
              ],
              value: Uint8Array [
                122
              ]
            }
          ],
          code: 40,
          time: '2019-03-07T10:17:12.385Z'
        }
      ],
      totalTxs: 10681,
      invalidTxs: [
        {
          tx: {
            from: '74e67e7ff222241b582e3aaab22ddf7895653682',
            nonce: 16097,
            signature: Uint8Array [
              35
            ],
            chainId: 'matrix',
            signatures: [
              {
                signer: 'Gorgeous',
                signature: Uint8Array [
                  131
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Personal Loan Account',
                signature: Uint8Array [
                  213
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 30312,
          index: 50041,
          hash: '63fefcea726d1acd1f3a3e5de4a3d4288fd898d2',
          tags: [
            {
              key: Uint8Array [
                173
              ],
              value: Uint8Array [
                82
              ]
            },
            {
              key: Uint8Array [
                101
              ],
              value: Uint8Array [
                255
              ]
            }
          ],
          code: 30,
          time: '2019-03-07T10:17:12.385Z'
        },
        {
          tx: {
            from: '9368e2ec9749117d822804a18ea3d77d04412c45',
            nonce: 52250,
            signature: Uint8Array [
              36
            ],
            chainId: 'Rustic',
            signatures: [
              {
                signer: 'Auto Loan Account',
                signature: Uint8Array [
                  193
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'monitor',
                signature: Uint8Array [
                  76
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              }
            ],
            itx: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          height: 59788,
          index: 16217,
          hash: '666a8ca491a14486f779419f1a5bd4bae77f77e5',
          tags: [
            {
              key: Uint8Array [
                181
              ],
              value: Uint8Array [
                172
              ]
            },
            {
              key: Uint8Array [
                177
              ],
              value: Uint8Array [
                213
              ]
            }
          ],
          code: 22,
          time: '2019-03-07T10:17:12.385Z'
        }
      ],
      txsHashes: [
        'plug-and-play',
        'Planner'
      ],
      invalidTxsHashes: [
        'Practical Cotton Tuna',
        'override'
      ]
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
  code: 34,
  info: {
    id: 'orange',
    network: 'Cotton',
    moniker: 'envisioneer',
    consensusVersion: 'Implementation',
    synced: undefined,
    appHash: '5225c3b130f5fe0560f8f5a346604725f7fb8478',
    blockHash: Uint8Array [
      7
    ],
    blockHeight: 52254,
    blockTime: '2019-03-07T10:17:12.386Z',
    address: 'ef31482e8c149e121bf101f16f11a76abad555aa',
    votingPower: 92324,
    totalTxs: 52747,
    version: 'Florida',
    dataVersion: 'Buckinghamshire',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'withdrawal'
    },
    supportedTxs: [
      'Ferry',
      'sensor'
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
  code: 21,
  config: 'systemic'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Dynamic',
    'South Carolina'
  ],
  height: 87259
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  state: {
    address: '467bfadbdb4ed2c5cf562efb0b07f1ae7c1ef755',
    consensus: {
      maxBytes: 49521,
      maxGas: 53450,
      maxValidators: 69227,
      maxCandidates: 98144,
      pubKeyTypes: [
        'Liaison',
        'Cambridgeshire'
      ],
      validators: [
        {
          address: '49f3a49bf1f6f9490a0f75b51e6e1db7114df3dc',
          power: 37643
        },
        {
          address: 'ee2f60715e52afb5ccacba0335b85e9b24f69c73',
          power: 89118
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
            dataHash: 'navigating',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 12,
            dataHash: 'Health',
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
        totalStakes: '50506',
        totalUnstakes: '54985',
        context: {
          genesisTx: 'payment',
          renaissanceTx: 'Salad',
          genesisTime: '2019-03-07T10:17:12.387Z',
          renaissanceTime: '2019-03-07T10:17:12.387Z'
        }
      }
    },
    version: 'Cambridgeshire',
    dataVersion: 'matrix',
    forgeAppHash: Uint8Array [
      166
    ],
    token: {
      name: 'Generic',
      symbol: 'Principal',
      unit: 'Investor',
      description: 'Savings Account',
      icon: Uint8Array [
        16
      ],
      decimal: 73723,
      initialSupply: 65512,
      totalSupply: 71549,
      inflationRate: 3730
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### getForgeStatistics

```js
const result = await client.getForgeStatistics({
  dayInfo: {
    startDate: 'Soft',
    endDate: 'Supervisor'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  forgeStatistics: {
    numBlocks: [
      72494,
      91659
    ],
    numTxs: [
      9562,
      93773
    ],
    numStakes: [
      '83280',
      '89809'
    ],
    numValidators: [
      66724,
      50975
    ],
    numAccountMigrateTxs: [
      84233,
      17942
    ],
    numCreateAssetTxs: [
      62980,
      44392
    ],
    numConsensusUpgradeTxs: [
      41760,
      69084
    ],
    numDeclareTxs: [
      30586,
      33255
    ],
    numDeclareFileTxs: [
      4107,
      43637
    ],
    numExchangeTxs: [
      13344,
      19772
    ],
    numStakeTxs: [
      68279,
      31920
    ],
    numSysUpgradeTxs: [
      54395,
      20998
    ],
    numTransferTxs: [
      13625,
      33130
    ],
    numUpdateAssetTxs: [
      96764,
      63718
    ],
    numConsumeAssetTxs: [
      45322,
      56055
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
  code: 4,
  netInfo: {
    listening: undefined,
    listeners: [
      'Denmark',
      'Hong Kong'
    ],
    nPeers: 35025,
    peers: [
      {
        id: 'systems',
        network: 'Sausages',
        consensusVersion: 'Unbranded Concrete Chicken',
        moniker: 'bypassing',
        ip: 'Architect',
        geoInfo: {
          city: 'turquoise',
          country: 'incubate',
          latitude: 4112.9,
          longitude: 91883.77
        }
      },
      {
        id: 'Avon',
        network: 'Outdoors',
        consensusVersion: 'Tools',
        moniker: 'Music',
        ip: 'Bedfordshire',
        geoInfo: {
          city: 'Synergistic',
          country: 'bus',
          latitude: 31027.12,
          longitude: 64161.81
        }
      }
    ]
  }
}
});
```

### getNodeInfo

```js
const result = await client.getNodeInfo({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  info: {
    id: 'Checking Account',
    network: 'array',
    moniker: 'e-services',
    consensusVersion: 'deposit',
    synced: undefined,
    appHash: 'e25ad42ec9f2e3328daba81ffa62fc12b5cc1296',
    blockHash: Uint8Array [
      151
    ],
    blockHeight: 69481,
    blockTime: '2019-03-07T10:17:12.388Z',
    address: '36b0f5008005e4e32d9e7c34a85761d02e6cc4f0',
    votingPower: 34136,
    totalTxs: 63736,
    version: 'transmitter',
    dataVersion: 'platforms',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Buckinghamshire'
    },
    supportedTxs: [
      'Corporate',
      'Investment Account'
    ],
    ip: 'partnerships',
    geoInfo: {
      city: 'Operations',
      country: 'deposit',
      latitude: 57148.71,
      longitude: 26288.43
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '5e4d51e1bcf0aa03e58196e113233b5e63020304',
  keys: [
    'Implementation',
    'Shoes'
  ],
  height: 85478
});

// output
{
  code: 5,
  state: {
    address: 'acc04ecf981b8f4e0156b773ba2d975458efd2f7',
    from: '37ea96e17d15004015142ee644aefbdb3a327ec0',
    to: '067272f6c4535c8693ab4a396c0d75d46cdb5362',
    balance: '84458',
    message: 'Incredible',
    context: {
      genesisTx: 'one-to-one',
      renaissanceTx: 'Manager',
      genesisTime: '2019-03-07T10:17:12.388Z',
      renaissanceTime: '2019-03-07T10:17:12.388Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'Papua New Guinea',
    size: 58492,
    order: [
      {
        field: 'Investment Account',
        type: 'Senior'
      },
      {
        field: 'Gorgeous',
        type: 'Grass-roots'
      }
    ]
  },
  addressFilter: {
    sender: 'Personal Loan Account',
    receiver: 'withdrawal',
    direction: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'Plastic',
    next: undefined,
    total: 40799
  },
  stakes: [
    {
      address: 'd7d0cc4f9fbca958070d470e35180af63cefe8b9',
      balance: '16224',
      sender: 'Strategist',
      receiver: 'Division',
      genesisTime: 'SQL',
      renaissanceTime: 'Gorgeous Fresh Salad',
      message: 'Bedfordshire',
      type: 64974
    },
    {
      address: 'f372a6b420bc6d7530406e4fc4abfc29ab54f9af',
      balance: '98929',
      sender: 'matrix',
      receiver: 'mint green',
      genesisTime: 'strategic',
      renaissanceTime: 'Up-sized',
      message: 'South Georgia and the South Sandwich Islands',
      type: 91527
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Sleek Metal Fish',
    size: 79542,
    order: [
      {
        field: 'synthesize',
        type: 'compressing'
      },
      {
        field: 'Implementation',
        type: 'Consultant'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  page: {
    cursor: 'alarm',
    next: undefined,
    total: 45243
  },
  accounts: [
    {
      address: '70cd63590111d33cd2022b2e9845ca3363a3376c',
      balance: '81368',
      numAssets: 49645,
      numTxs: 16223,
      nonce: 60865,
      genesisTime: 'Graphical User Interface',
      renaissanceTime: 'Latvia',
      moniker: 'hierarchy',
      migratedFrom: 'Product',
      migratedTo: 'optimize',
      totalReceivedStakes: '78336',
      totalStakes: '58509',
      totalUnstakes: '50540',
      recentNumTxs: [
        43801,
        25190
      ]
    },
    {
      address: '757176d9868206b8cd081e297b9cad5865e4c03c',
      balance: '32801',
      numAssets: 8576,
      numTxs: 16823,
      nonce: 37452,
      genesisTime: 'Customer-focused',
      renaissanceTime: 'Ohio',
      moniker: 'Ireland',
      migratedFrom: 'redundant',
      migratedTo: 'eyeballs',
      totalReceivedStakes: '30473',
      totalStakes: '31518',
      totalUnstakes: '84266',
      recentNumTxs: [
        29923,
        52061
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '38385a8f20beb690a3caad51bbd52244282ac4ee'
});

// output
{
  code: 0,
  info: {
    tx: {
      from: 'cd3f9e1b59432659a2c521e6c420f9e2bfbedfdd',
      nonce: 45132,
      signature: Uint8Array [
        241
      ],
      chainId: 'user-facing',
      signatures: [
        {
          signer: 'Canada',
          signature: Uint8Array [
            173
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Branch',
          signature: Uint8Array [
            200
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    },
    height: 56186,
    index: 42273,
    hash: '3c9646cd238b3ff9f5fda0c73d990015d5f9d947',
    tags: [
      {
        key: Uint8Array [
          160
        ],
        value: Uint8Array [
          19
        ]
      },
      {
        key: Uint8Array [
          148
        ],
        value: Uint8Array [
          82
        ]
      }
    ],
    code: 40,
    time: '2019-03-07T10:17:12.389Z'
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 44981
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  unconfirmedTxs: {
    nTxs: 84693,
    txs: [
      {
        from: '1ea8b9dacecb2b436cb3aac6bb3a05d0dce85d04',
        nonce: 88514,
        signature: Uint8Array [
          33
        ],
        chainId: 'Bike',
        signatures: [
          {
            signer: 'demand-driven',
            signature: Uint8Array [
              106
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Fantastic',
            signature: Uint8Array [
              60
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        from: '3ff3ff85e5e7480b8ddb68a443a3d8a4a1bfb47a',
        nonce: 36742,
        signature: Uint8Array [
          187
        ],
        chainId: 'neural',
        signatures: [
          {
            signer: 'GB',
            signature: Uint8Array [
              225
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: '1080p',
            signature: Uint8Array [
              120
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
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
  code: 16,
  validatorsInfo: {
    blockHeight: 7183,
    validators: [
      {
        address: '49523d1f63679f2c146a6197c664afbeb38c8c7d',
        pubKey: {
          type: 'Sleek',
          data: Uint8Array [
            233
          ]
        },
        votingPower: 88475,
        proposerPriority: 'e-commerce',
        name: 'indexing'
      },
      {
        address: '9db1e3960c1b0657903ac76523853f638638a77b',
        pubKey: {
          type: 'viral',
          data: Uint8Array [
            116
          ]
        },
        votingPower: 96688,
        proposerPriority: 'Valleys',
        name: 'Ouguiya'
      }
    ]
  }
}
});
```

### listAssetTransactions

```js
const result = await client.listAssetTransactions({
  paging: {
    cursor: 'invoice',
    size: 23229,
    order: [
      {
        field: 'Practical',
        type: 'methodologies'
      },
      {
        field: 'Iranian Rial',
        type: 'Bouvet Island (Bouvetoya)'
      }
    ]
  },
  address: '8fa19d4a375ce8dfbcb836485abd32c8400b4f54'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  page: {
    cursor: 'Dynamic',
    next: undefined,
    total: 5885
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Kenya'
      }
    },
    {
      consumeAsset: {
        asset: 'withdrawal'
      }
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Total',
    size: 27309,
    order: [
      {
        field: 'Freeway',
        type: 'Beauty'
      },
      {
        field: 'Prairie',
        type: 'navigating'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Intelligent',
    endDateTime: 'system'
  },
  addressFilter: {
    sender: 'Incredible',
    receiver: 'Tasty',
    direction: 1
  },
  typeFilter: {
    types: [
      'Seychelles Rupee',
      'integrated'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500,
  page: {
    cursor: 'Industrial',
    next: undefined,
    total: 37946
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Identity'
      }
    },
    {
      consumeAsset: {
        asset: 'withdrawal'
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
  code: 6,
  address: '88574cfc9caeab73427e6dcaf025ced925003ed4'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'af4608b784f265cb113c888978205a01e718c38e'
});

// output
{
  code: 42,
  chunk: Uint8Array [
    225
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '0e91d7ead0aaa268d1149a7491e7a4653159986a',
  passphrase: 'forecast'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'Refined Frozen Soap',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      213
    ],
    pk: Uint8Array [
      33
    ],
    address: '80cf330e89d213f6662da92a1213cfbb9b205aa3'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '7e5a2a1177fbd925fe5b4fe8b342b75eaf294ee8',
    nonce: 83875,
    signature: Uint8Array [
      179
    ],
    chainId: 'Human',
    signatures: [
      {
        signer: 'Investment Account',
        signature: Uint8Array [
          170
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'engage',
        signature: Uint8Array [
          46
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  },
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      210
    ],
    pk: Uint8Array [
      232
    ],
    address: '99821377b162a791afbbb7f3e873354298768e04'
  },
  token: 'Orchestrator'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  tx: {
    from: 'a3a6c0d49bd1ce53674a7ae531a227a577701b10',
    nonce: 72846,
    signature: Uint8Array [
      234
    ],
    chainId: 'Dynamic',
    signatures: [
      {
        signer: 'Metrics',
        signature: Uint8Array [
          170
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Auto Loan Account',
        signature: Uint8Array [
          128
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: 'd7a0f60a35045694858d7721f95b1e6d6d25ec62'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '8b678b37a7dd910eea134dc9a6d338db44e9761c',
      nonce: 48374,
      signature: Uint8Array [
        68
      ],
      chainId: 'Dynamic',
      signatures: [
        {
          signer: 'e-markets',
          signature: Uint8Array [
            20
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'reboot',
          signature: Uint8Array [
            241
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    },
    states: [
      {
        balance: '31125',
        nonce: 27934,
        numTxs: 52893,
        address: '794a1e0cd9107481af6b8e114ca3fc2f652c2081',
        pk: Uint8Array [
          79
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 2
        },
        moniker: 'Denar',
        context: {
          genesisTx: 'Auto Loan Account',
          renaissanceTx: 'Assistant',
          genesisTime: '2019-03-07T10:17:12.392Z',
          renaissanceTime: '2019-03-07T10:17:12.392Z'
        },
        issuer: 'South Dakota',
        migratedTo: [
          'harness',
          'Buckinghamshire'
        ],
        migratedFrom: [
          'protocol',
          'THX'
        ],
        numAssets: 67118,
        stake: {
          totalStakes: '6963',
          totalUnstakes: '22941',
          totalReceivedStakes: '93431',
          recentStakes: {
            items: [
              Uint8Array [
                109
              ],
              Uint8Array [
                135
              ]
            ],
            typeUrl: 'matrix',
            maxItems: 20957,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                219
              ],
              Uint8Array [
                93
              ]
            ],
            typeUrl: 'best-of-breed',
            maxItems: 66204,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              111
            ],
            Uint8Array [
              141
            ]
          ],
          typeUrl: 'magnetic',
          maxItems: 57465,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '8529',
        nonce: 50143,
        numTxs: 60159,
        address: 'd7f4f16377f28210b4214366fc1e5e2ab6513e40',
        pk: Uint8Array [
          142
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 0,
          role: 3
        },
        moniker: 'Investor',
        context: {
          genesisTx: 'Steel',
          renaissanceTx: 'SQL',
          genesisTime: '2019-03-07T10:17:12.392Z',
          renaissanceTime: '2019-03-07T10:17:12.392Z'
        },
        issuer: 'Baht',
        migratedTo: [
          'Director',
          'Intelligent'
        ],
        migratedFrom: [
          'Response',
          'Shore'
        ],
        numAssets: 71398,
        stake: {
          totalStakes: '43762',
          totalUnstakes: '68664',
          totalReceivedStakes: '86719',
          recentStakes: {
            items: [
              Uint8Array [
                103
              ],
              Uint8Array [
                177
              ]
            ],
            typeUrl: 'radical',
            maxItems: 29574,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                102
              ],
              Uint8Array [
                190
              ]
            ],
            typeUrl: 'parsing',
            maxItems: 64455,
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
              197
            ]
          ],
          typeUrl: 'District',
          maxItems: 6279,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'a8e3b9d1b3471d70ae21c72844978edc40f05481',
        owner: 'dedicated',
        moniker: 'Iowa',
        readonly: undefined,
        transferrable: undefined,
        ttl: 24216,
        consumedTime: '2019-03-07T10:17:12.392Z',
        issuer: 'Administrator',
        stake: {
          totalStakes: '30118',
          totalUnstakes: '39057',
          totalReceivedStakes: '83230',
          recentStakes: {
            items: [
              Uint8Array [
                81
              ],
              Uint8Array [
                20
              ]
            ],
            typeUrl: 'calculate',
            maxItems: 13332,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                71
              ],
              Uint8Array [
                229
              ]
            ],
            typeUrl: 'bypassing',
            maxItems: 26584,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'process improvement',
          renaissanceTx: 'Distributed',
          genesisTime: '2019-03-07T10:17:12.392Z',
          renaissanceTime: '2019-03-07T10:17:12.392Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '3e134bd68e770d6290ffcbee6287631002d78351',
        owner: 'Refined Granite Sausages',
        moniker: 'copying',
        readonly: undefined,
        transferrable: undefined,
        ttl: 87674,
        consumedTime: '2019-03-07T10:17:12.392Z',
        issuer: 'Steel',
        stake: {
          totalStakes: '52445',
          totalUnstakes: '43323',
          totalReceivedStakes: '36637',
          recentStakes: {
            items: [
              Uint8Array [
                17
              ],
              Uint8Array [
                116
              ]
            ],
            typeUrl: 'interfaces',
            maxItems: 78422,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                57
              ],
              Uint8Array [
                60
              ]
            ],
            typeUrl: 'back up',
            maxItems: 3705,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Connecticut',
          renaissanceTx: 'Refined',
          genesisTime: '2019-03-07T10:17:12.392Z',
          renaissanceTime: '2019-03-07T10:17:12.392Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '5e363ba82ef44e08437baea9f503b193aba056d5',
        from: 'df9aa4a6210b50260c644130d708fcd55b43767d',
        to: '5ff3c58978d71eabe326498250feee7c10b3171b',
        balance: '305',
        message: 'calculating',
        context: {
          genesisTx: 'Intranet',
          renaissanceTx: 'synergy',
          genesisTime: '2019-03-07T10:17:12.392Z',
          renaissanceTime: '2019-03-07T10:17:12.392Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'eeddfd40c2221b3c1d4898e8d4de228dd7aeb1e4',
        from: 'b967782455a8bd259b537f8e05d4fbe3c1806ec6',
        to: 'ca3857d8160a72ce998253e7bd9cfbed31436d5a',
        balance: '8559',
        message: 'Pants',
        context: {
          genesisTx: 'Assistant',
          renaissanceTx: 'partnerships',
          genesisTime: '2019-03-07T10:17:12.392Z',
          renaissanceTime: '2019-03-07T10:17:12.392Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'f1d4219dfcf508a0fa8862aa6894ebbd92e1ad12',
      blockHeight: 54617,
      blockTime: '2019-03-07T10:17:12.392Z',
      totalTxs: 70879,
      txStatistics: {
        numAccountMigrateTxs: 37387,
        numCreateAssetTxs: 22161,
        numConsensusUpgradeTxs: 22571,
        numDeclareTxs: 10212,
        numDeclareFileTxs: 66094,
        numExchangeTxs: 82329,
        numStakeTxs: 66250,
        numSysUpgradeTxs: 83222,
        numTransferTxs: 16574,
        numUpdateAssetTxs: 13012,
        numConsumeAssetTxs: 80993
      },
      txIndex: 66211,
      lastBlockTime: '2019-03-07T10:17:12.392Z'
    },
    appState: {
      address: '56d392f209bae6763f7693245d447f37f61c9d9d',
      consensus: {
        maxBytes: 38626,
        maxGas: 22616,
        maxValidators: 80769,
        maxCandidates: 61267,
        pubKeyTypes: [
          'Lari',
          'Refined'
        ],
        validators: [
          {
            address: 'be9ae38deeedd1f7b6e2b2d44638b269f6696711',
            power: 95796
          },
          {
            address: 'fb52fb0a82fef46738653f6a5a9ed2939df6bcae',
            power: 89478
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
              dataHash: 'Knoll',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'hack',
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
          totalStakes: '96227',
          totalUnstakes: '1463',
          context: {
            genesisTx: 'Fresh',
            renaissanceTx: 'index',
            genesisTime: '2019-03-07T10:17:12.393Z',
            renaissanceTime: '2019-03-07T10:17:12.393Z'
          }
        }
      },
      version: 'Tools',
      dataVersion: 'black',
      forgeAppHash: Uint8Array [
        80
      ],
      token: {
        name: 'Integrated',
        symbol: 'Borders',
        unit: 'Tasty Wooden Chicken',
        description: 'parsing',
        icon: Uint8Array [
          64
        ],
        decimal: 57322,
        initialSupply: 37964,
        totalSupply: 16235,
        inflationRate: 12158
      },
      data: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 38
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'ee10003ebddfae33117d49013cde0464c89376af',
      nonce: 45913,
      signature: Uint8Array [
        74
      ],
      chainId: 'Rustic',
      signatures: [
        {
          signer: 'Rhode Island',
          signature: Uint8Array [
            209
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Buckinghamshire',
          signature: Uint8Array [
            115
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        }
      ],
      itx: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    },
    states: [
      {
        balance: '52972',
        nonce: 30563,
        numTxs: 23496,
        address: '1cf4d5b48784d0f35bdb9165481ab2d3a8613359',
        pk: Uint8Array [
          201
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 1,
          role: 7
        },
        moniker: 'sky blue',
        context: {
          genesisTx: 'FTP',
          renaissanceTx: 'Technician',
          genesisTime: '2019-03-07T10:17:12.393Z',
          renaissanceTime: '2019-03-07T10:17:12.393Z'
        },
        issuer: 'panel',
        migratedTo: [
          'Cloned',
          'invoice'
        ],
        migratedFrom: [
          'deploy',
          'Chips'
        ],
        numAssets: 31294,
        stake: {
          totalStakes: '7461',
          totalUnstakes: '81905',
          totalReceivedStakes: '49364',
          recentStakes: {
            items: [
              Uint8Array [
                217
              ],
              Uint8Array [
                111
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 64088,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                182
              ],
              Uint8Array [
                216
              ]
            ],
            typeUrl: 'Group',
            maxItems: 31398,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              81
            ],
            Uint8Array [
              16
            ]
          ],
          typeUrl: 'installation',
          maxItems: 52716,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '3909',
        nonce: 6459,
        numTxs: 38522,
        address: 'd9bc5363d6d7769ec228db289d2fe485bcc7aa6a',
        pk: Uint8Array [
          11
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 1,
          role: 1
        },
        moniker: 'Ergonomic Concrete Soap',
        context: {
          genesisTx: 'Personal Loan Account',
          renaissanceTx: 'mobile',
          genesisTime: '2019-03-07T10:17:12.393Z',
          renaissanceTime: '2019-03-07T10:17:12.393Z'
        },
        issuer: 'Home Loan Account',
        migratedTo: [
          'Chips',
          'high-level'
        ],
        migratedFrom: [
          'cutting-edge',
          'indigo'
        ],
        numAssets: 717,
        stake: {
          totalStakes: '51202',
          totalUnstakes: '6785',
          totalReceivedStakes: '87339',
          recentStakes: {
            items: [
              Uint8Array [
                182
              ],
              Uint8Array [
                148
              ]
            ],
            typeUrl: 'connect',
            maxItems: 36359,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                46
              ],
              Uint8Array [
                32
              ]
            ],
            typeUrl: 'quantifying',
            maxItems: 72584,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              225
            ],
            Uint8Array [
              84
            ]
          ],
          typeUrl: 'Frozen',
          maxItems: 44510,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'ed018b67ec1d575da423af7caf75ce920d04d787',
        owner: 'invoice',
        moniker: 'morph',
        readonly: undefined,
        transferrable: undefined,
        ttl: 96277,
        consumedTime: '2019-03-07T10:17:12.394Z',
        issuer: 'Bedfordshire',
        stake: {
          totalStakes: '36692',
          totalUnstakes: '63744',
          totalReceivedStakes: '61924',
          recentStakes: {
            items: [
              Uint8Array [
                22
              ],
              Uint8Array [
                243
              ]
            ],
            typeUrl: 'content-based',
            maxItems: 66603,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                194
              ],
              Uint8Array [
                179
              ]
            ],
            typeUrl: 'Vermont',
            maxItems: 44632,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'backing up',
          renaissanceTx: 'Checking Account',
          genesisTime: '2019-03-07T10:17:12.394Z',
          renaissanceTime: '2019-03-07T10:17:12.394Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '13f817a0a13d2f80785748137702a82f60350e47',
        owner: 'Pizza',
        moniker: 'copy',
        readonly: undefined,
        transferrable: undefined,
        ttl: 76471,
        consumedTime: '2019-03-07T10:17:12.394Z',
        issuer: 'Lebanese Pound',
        stake: {
          totalStakes: '49549',
          totalUnstakes: '91379',
          totalReceivedStakes: '14658',
          recentStakes: {
            items: [
              Uint8Array [
                46
              ],
              Uint8Array [
                245
              ]
            ],
            typeUrl: 'Uruguay',
            maxItems: 60399,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                21
              ],
              Uint8Array [
                214
              ]
            ],
            typeUrl: 'feed',
            maxItems: 52405,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'invoice',
          renaissanceTx: 'microchip',
          genesisTime: '2019-03-07T10:17:12.394Z',
          renaissanceTime: '2019-03-07T10:17:12.394Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'd2cb55a3dbd1ce1c2a239880f5b0b67104a6b0c7',
        from: '0c38c789ad1ec8f706bac2e72256a57bbaa26b43',
        to: 'd4ac401e9068d18aac03a31031ce5a163db07439',
        balance: '96724',
        message: 'CSS',
        context: {
          genesisTx: 'Versatile',
          renaissanceTx: 'azure',
          genesisTime: '2019-03-07T10:17:12.394Z',
          renaissanceTime: '2019-03-07T10:17:12.394Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'c210d7a19ef96cb7061f4a02e7d36d87f930a869',
        from: '19c95a99b5ea197dbfeb416e9c53bf4db523566d',
        to: 'ec730e0c6f988112e12e0f4d7aa58feaabbb5614',
        balance: '60817',
        message: 'feed',
        context: {
          genesisTx: 'attitude',
          renaissanceTx: 'Table',
          genesisTime: '2019-03-07T10:17:12.394Z',
          renaissanceTime: '2019-03-07T10:17:12.394Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '6d6113a9104affcda9bb1dc801e400da58546440',
      blockHeight: 49162,
      blockTime: '2019-03-07T10:17:12.394Z',
      totalTxs: 44318,
      txStatistics: {
        numAccountMigrateTxs: 56452,
        numCreateAssetTxs: 94565,
        numConsensusUpgradeTxs: 7609,
        numDeclareTxs: 50634,
        numDeclareFileTxs: 19192,
        numExchangeTxs: 61450,
        numStakeTxs: 95772,
        numSysUpgradeTxs: 47545,
        numTransferTxs: 18190,
        numUpdateAssetTxs: 11272,
        numConsumeAssetTxs: 92693
      },
      txIndex: 78757,
      lastBlockTime: '2019-03-07T10:17:12.394Z'
    },
    appState: {
      address: 'c4165334379a54b2d332a4f8f423a0f4e7984744',
      consensus: {
        maxBytes: 68302,
        maxGas: 59483,
        maxValidators: 4872,
        maxCandidates: 40488,
        pubKeyTypes: [
          'payment',
          'calculate'
        ],
        validators: [
          {
            address: '877c8de44b87fc5a49414d3d34945afc0980169e',
            power: 61558
          },
          {
            address: '37e58762a7bc6b63bacaee5decb1a3fd4e9921fe',
            power: 71657
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
              dataHash: 'Licensed Concrete Hat',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 0,
              dataHash: 'Managed',
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
          totalStakes: '76156',
          totalUnstakes: '71708',
          context: {
            genesisTx: 'Networked',
            renaissanceTx: 'Ergonomic Plastic Shoes',
            genesisTime: '2019-03-07T10:17:12.394Z',
            renaissanceTime: '2019-03-07T10:17:12.394Z'
          }
        }
      },
      version: 'Steel',
      dataVersion: 'Sudanese Pound',
      forgeAppHash: Uint8Array [
        215
      ],
      token: {
        name: 'Future',
        symbol: 'New York',
        unit: 'Personal Loan Account',
        description: 'Borders',
        icon: Uint8Array [
          224
        ],
        decimal: 47287,
        initialSupply: 985,
        totalSupply: 4278,
        inflationRate: 84370
      },
      data: {
        type: 'fg:x:random_data',
        value: 'ABCD 1234'
      }
    }
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  verifyTx: {
    code: 37
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    205
  ],
  type: {
    pk: 1,
    hash: 1,
    address: 1,
    role: 0
  },
  passphrase: 'regional',
  moniker: 'streamline'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  token: 'Steel',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 4
    },
    sk: Uint8Array [
      232
    ],
    pk: Uint8Array [
      118
    ],
    address: '9883bbf54bf41f0685b527e4a662db5ce8c999f3'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '2594b56d77c7318f92a8a01612b05a812119b11d'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27
}
});
```

### search

```js
const result = await client.search({
  key: 'violet',
  value: 'index'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  txs: [
    {
      tx: {
        from: '66a4d6c848a496f2f06664485fb6af7af885a253',
        nonce: 56048,
        signature: Uint8Array [
          173
        ],
        chainId: 'HTTP',
        signatures: [
          {
            signer: 'Indiana',
            signature: Uint8Array [
              30
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'collaborative',
            signature: Uint8Array [
              246
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      height: 12582,
      index: 20612,
      hash: 'ad885e997d30a5853fe619694ddf244e81185f6d',
      tags: [
        {
          key: Uint8Array [
            6
          ],
          value: Uint8Array [
            141
          ]
        },
        {
          key: Uint8Array [
            123
          ],
          value: Uint8Array [
            150
          ]
        }
      ],
      code: 20,
      time: '2019-03-07T10:17:12.395Z'
    },
    {
      tx: {
        from: '617d7fab8345f6b71d674f45e0d512a0f5dd74f6',
        nonce: 16042,
        signature: Uint8Array [
          218
        ],
        chainId: 'backing up',
        signatures: [
          {
            signer: 'Grove',
            signature: Uint8Array [
              91
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Avenue',
            signature: Uint8Array [
              4
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          }
        ],
        itx: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      height: 22230,
      index: 3307,
      hash: '76fd9185b05fcea35f1e5e1d126839a088be6972',
      tags: [
        {
          key: Uint8Array [
            84
          ],
          value: Uint8Array [
            209
          ]
        },
        {
          key: Uint8Array [
            52
          ],
          value: Uint8Array [
            211
          ]
        }
      ],
      code: 20,
      time: '2019-03-07T10:17:12.395Z'
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '76c9d844d1c8294809a2afa961263fb859b43b96',
    nonce: 85675,
    signature: Uint8Array [
      199
    ],
    chainId: 'applications',
    signatures: [
      {
        signer: 'optical',
        signature: Uint8Array [
          228
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'vortals',
        signature: Uint8Array [
          8
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    itx: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      171
    ],
    pk: Uint8Array [
      24
    ],
    address: 'b9c207b210723ecb33c3dcb982806be8fa4095e6'
  },
  token: 'Berkshire',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  hash: 'a5660ab047b82754ffb90fd5ec82a82b814ec3f5'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    165
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      94
    ],
    pk: Uint8Array [
      11
    ],
    address: '245ae8246926e3f9a80267cf2223fd2da714c6fd'
  },
  token: 'programming'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  signature: Uint8Array [
    129
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    77
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  hash: 'bc04cc5cd254b6a606d33f2cc41e95f05698e9e5'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 3,
  filter: 'Sports'
});

// output
{
  topic: 'stable'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'enterprise'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
