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
  * [Validity](#validity)
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
  * [getForgeStats](#getforgestats)
  * [getHealthStatus](#gethealthstatus)
  * [getNetInfo](#getnetinfo)
  * [getNodeInfo](#getnodeinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listAccount](#listaccount)
  * [listAssetTransactions](#listassettransactions)
  * [listAssets](#listassets)
  * [listBlocks](#listblocks)
  * [listStakes](#liststakes)
  * [listTopAccounts](#listtopaccounts)
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
  TOO_MANY_TXS: 11,
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
  INTERNAL: 500,
  TIMEOUT: 504
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
  POKE: 26,
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
  SHA2: 2,
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

### Validity

```js
{
  BOTH: 0,
  VALID: 1,
  INVALID: 2
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
  'PokeTx',
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
  from: '67478e58dd6678e86174f79d9923b10cb637066c',
  nonce: 11608,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      85
    ],
    pk: Uint8Array [
      0
    ],
    address: '5ab1d2d4aa4ed7ae4865e14b62826393d3ef7aa5'
  },
  token: 'Cocos (Keeling) Islands'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  tx: {
    from: 'd6ffdb7171894caeb2efe93d8cdff99f3228456d',
    nonce: 52795,
    chainId: 'Hawaii',
    pk: Uint8Array [
      201
    ],
    signature: Uint8Array [
      152
    ],
    signatures: [
      {
        signer: 'Montserrat',
        pk: Uint8Array [
          50
        ],
        signature: Uint8Array [
          1
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'scale',
        pk: Uint8Array [
          107
        ],
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
  passphrase: 'website',
  type: {
    pk: 1,
    hash: 14,
    address: 0,
    role: 1
  },
  moniker: 'Corporate'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  token: 'Persistent',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      45
    ],
    pk: Uint8Array [
      236
    ],
    address: 'ce1427a24f615e28dba0267fb48693e4a55016c7'
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
  code: 34,
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      40
    ],
    pk: Uint8Array [
      140
    ],
    address: '233dd709ccc00e6b75716891b257422d5e223cf2'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'd1d78e7106b15fb12d7584d9f5dd9596d0710b4f',
  keys: [
    'quantifying',
    'transmitter'
  ],
  height: 33078
});

// output
{
  code: 2,
  state: {
    balance: '67922',
    nonce: 42359,
    numTxs: 77680,
    address: 'a068c471d1ad78905efb2e32a3fdf160138b031d',
    pk: Uint8Array [
      186
    ],
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 6
    },
    moniker: 'THX',
    context: {
      genesisTx: 'impactful',
      renaissanceTx: 'Cambridgeshire',
      genesisTime: '2019-04-11T08:55:48.149Z',
      renaissanceTime: '2019-04-11T08:55:48.149Z'
    },
    issuer: 'Home Loan Account',
    migratedTo: [
      'Dominican Republic',
      'intuitive'
    ],
    migratedFrom: [
      'HTTP',
      'modular'
    ],
    numAssets: 48119,
    stake: {
      totalStakes: '85269',
      totalUnstakes: '20821',
      totalReceivedStakes: '16656',
      recentStakes: {
        items: [
          Uint8Array [
            112
          ],
          Uint8Array [
            49
          ]
        ],
        typeUrl: 'Sleek Plastic Table',
        maxItems: 58256,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            134
          ],
          Uint8Array [
            96
          ]
        ],
        typeUrl: 'Configuration',
        maxItems: 64803,
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
          115
        ]
      ],
      typeUrl: 'Ergonomic Cotton Mouse',
      maxItems: 19965,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '6519',
      leftover: '64116',
      amount: '26366'
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
  senderAddress: 'deposit',
  itx: {
    moniker: 'Beauty',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 22190,
    parent: 'Integration',
    address: 'a26aae5ec5a58a5168d60d57b8e2a40ab08f879f'
  },
  walletType: {
    pk: 0,
    hash: 2,
    address: 1,
    role: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  assetAddress: 'Ergonomic Rubber Bike'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'cc59b2faec08d3b70d270403c2d1d33f6fa91326',
  keys: [
    'Direct',
    'Jewelery'
  ],
  height: 23302
});

// output
{
  code: 5,
  state: {
    address: '5be9386ce104a58c3ef62feb50d7a48a428999e6',
    owner: 'mesh',
    moniker: 'PCI',
    readonly: undefined,
    transferrable: undefined,
    ttl: 66980,
    consumedTime: '2019-04-11T08:55:48.151Z',
    issuer: 'optical',
    stake: {
      totalStakes: '43014',
      totalUnstakes: '950',
      totalReceivedStakes: '47484',
      recentStakes: {
        items: [
          Uint8Array [
            135
          ],
          Uint8Array [
            110
          ]
        ],
        typeUrl: 'Tasty Plastic Shoes',
        maxItems: 75014,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            17
          ],
          Uint8Array [
            194
          ]
        ],
        typeUrl: 'enterprise',
        maxItems: 90386,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Ports',
      renaissanceTx: 'Optimization',
      genesisTime: '2019-04-11T08:55:48.151Z',
      renaissanceTime: '2019-04-11T08:55:48.151Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getBlock

```js
const stream = client.getBlock({
  height: 10739
});

// output
{
  code: 34,
  block: {
    height: 52101,
    numTxs: 99749,
    time: '2019-04-11T08:55:48.151Z',
    appHash: '19b1d0f0eba4c5ccc82fcd17464d2c1e4f0c1d6b',
    proposer: 'f67156680b0c4b88e0e857ab69ff1f822b8e282f',
    txs: [
      {
        tx: {
          from: 'c0a6a3b8a00a41acfd682a949b435c8e549753aa',
          nonce: 14065,
          chainId: 'systematic',
          pk: Uint8Array [
            13
          ],
          signature: Uint8Array [
            172
          ],
          signatures: [
            {
              signer: 'Avon',
              pk: Uint8Array [
                158
              ],
              signature: Uint8Array [
                92
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Tactics',
              pk: Uint8Array [
                97
              ],
              signature: Uint8Array [
                239
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
        height: 16587,
        index: 15349,
        hash: 'c52109325829afdeba1a20ac22952539e93e96d6',
        tags: [
          {
            key: Uint8Array [
              105
            ],
            value: Uint8Array [
              37
            ]
          },
          {
            key: Uint8Array [
              69
            ],
            value: Uint8Array [
              12
            ]
          }
        ],
        code: 9,
        time: '2019-04-11T08:55:48.151Z',
        createAsset: {
          asset: 'input'
        },
        accountMigrate: {
          address: '00c28900a07a0f2021d5f6d2cdf2debf77007c82'
        }
      },
      {
        tx: {
          from: 'beafc035972a93967adb68b587a38e381c19bb4f',
          nonce: 93931,
          chainId: 'Representative',
          pk: Uint8Array [
            120
          ],
          signature: Uint8Array [
            116
          ],
          signatures: [
            {
              signer: 'Concrete',
              pk: Uint8Array [
                139
              ],
              signature: Uint8Array [
                75
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Technician',
              pk: Uint8Array [
                226
              ],
              signature: Uint8Array [
                219
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
        height: 67596,
        index: 96737,
        hash: 'a8f59a3ec0e02f92b9f586a601be7df12b2627c5',
        tags: [
          {
            key: Uint8Array [
              23
            ],
            value: Uint8Array [
              58
            ]
          },
          {
            key: Uint8Array [
              80
            ],
            value: Uint8Array [
              179
            ]
          }
        ],
        code: 2,
        time: '2019-04-11T08:55:48.152Z',
        createAsset: {
          asset: 'Investment Account'
        },
        accountMigrate: {
          address: '7eef9b3bde68380379005cab514d6588868eb8af'
        }
      }
    ],
    totalTxs: 31181,
    invalidTxs: [
      {
        tx: {
          from: '5b987fef1c4d6b2757aa457c95275e212de49c70',
          nonce: 74008,
          chainId: 'Bedfordshire',
          pk: Uint8Array [
            87
          ],
          signature: Uint8Array [
            208
          ],
          signatures: [
            {
              signer: 'Vermont',
              pk: Uint8Array [
                212
              ],
              signature: Uint8Array [
                106
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Future',
              pk: Uint8Array [
                217
              ],
              signature: Uint8Array [
                153
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
        height: 10725,
        index: 620,
        hash: '17398b97a1d99a57f2d9aa3a5b1d8e9d747566d7',
        tags: [
          {
            key: Uint8Array [
              255
            ],
            value: Uint8Array [
              157
            ]
          },
          {
            key: Uint8Array [
              99
            ],
            value: Uint8Array [
              241
            ]
          }
        ],
        code: 41,
        time: '2019-04-11T08:55:48.152Z',
        createAsset: {
          asset: 'RSS'
        },
        accountMigrate: {
          address: '66caec3b3f51e5e646578aab3725ded79edf9685'
        }
      },
      {
        tx: {
          from: '5aad3b5c49a5864479e9b6a739affdcf174354ee',
          nonce: 92478,
          chainId: 'Upgradable',
          pk: Uint8Array [
            103
          ],
          signature: Uint8Array [
            96
          ],
          signatures: [
            {
              signer: 'Infrastructure',
              pk: Uint8Array [
                231
              ],
              signature: Uint8Array [
                52
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'compressing',
              pk: Uint8Array [
                60
              ],
              signature: Uint8Array [
                96
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
        height: 77861,
        index: 8506,
        hash: '82d99231c0ba60dce0efbc5794962529ef537f28',
        tags: [
          {
            key: Uint8Array [
              75
            ],
            value: Uint8Array [
              90
            ]
          },
          {
            key: Uint8Array [
              158
            ],
            value: Uint8Array [
              194
            ]
          }
        ],
        code: 37,
        time: '2019-04-11T08:55:48.152Z',
        createAsset: {
          asset: 'Sleek Steel Hat'
        },
        accountMigrate: {
          address: 'dfa4f3fdbb5e82179e872de05f42096aa37df12b'
        }
      }
    ],
    txsHashes: [
      'bleeding-edge',
      'interfaces'
    ],
    invalidTxsHashes: [
      'Sleek Steel Shirt',
      'Crest'
    ],
    consensusHash: Uint8Array [
      154
    ],
    dataHash: Uint8Array [
      132
    ],
    evidenceHash: Uint8Array [
      4
    ],
    lastCommitHash: Uint8Array [
      151
    ],
    lastResultsHash: Uint8Array [
      177
    ],
    nextValidatorsHash: Uint8Array [
      97
    ],
    validatorsHash: Uint8Array [
      72
    ],
    version: {
      Block: 13324,
      App: 72993
    },
    lastBlockId: {
      hash: '672b9a038134ff1b092c158436502da583283588',
      partsHeader: {
        total: undefined,
        hash: '0b97ac2346df2f44a8655c5e8bb73d85d5e17a70'
      }
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'TCP',
    size: 44046,
    order: [
      {
        field: 'bypassing',
        type: 'deposit'
      },
      {
        field: 'e-commerce',
        type: 'Fantastic Cotton Mouse'
      }
    ]
  },
  heightFilter: {
    from: 'c41302032d4cb2e171e3d4749e78d7f3fb26a6c4',
    to: '6e1c4a5081a713d5d966a82d7d7d2c370e05d559'
  },
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'Wyoming',
    next: undefined,
    total: 3395
  },
  blocks: [
    {
      height: 17486,
      numTxs: 24733,
      time: '2019-04-11T08:55:48.154Z',
      appHash: 'b376dd4a5ea779f1ddba0178dc907e269739ec4a',
      proposer: '81794d04e296ed0e4fbb51d4550288d1c0351359',
      totalTxs: 3159,
      txsHashes: [
        'magnetic',
        'Money Market Account'
      ],
      invalidTxsHashes: [
        'Money Market Account',
        'Kids'
      ],
      consensusHash: Uint8Array [
        213
      ],
      dataHash: Uint8Array [
        17
      ],
      evidenceHash: Uint8Array [
        221
      ],
      lastCommitHash: Uint8Array [
        10
      ],
      lastResultsHash: Uint8Array [
        83
      ],
      nextValidatorsHash: Uint8Array [
        10
      ],
      validatorsHash: Uint8Array [
        78
      ],
      version: {
        Block: 52535,
        App: 7720
      },
      lastBlockId: {
        hash: '03f0add7d7eec46bd89d6d6a3bca0edd4edfa7ff',
        partsHeader: {
          total: undefined,
          hash: '17e5f50311cc273a516aa81493a412f972b99d92'
        }
      }
    },
    {
      height: 13424,
      numTxs: 36673,
      time: '2019-04-11T08:55:48.154Z',
      appHash: '0b40e85159f9e2407a34ee9aae14d3438561dbac',
      proposer: '65491e8914876a05de7a9e28a9c6ff63dce5e87e',
      totalTxs: 21149,
      txsHashes: [
        'payment',
        'Buckinghamshire'
      ],
      invalidTxsHashes: [
        'Metrics',
        'invoice'
      ],
      consensusHash: Uint8Array [
        39
      ],
      dataHash: Uint8Array [
        62
      ],
      evidenceHash: Uint8Array [
        126
      ],
      lastCommitHash: Uint8Array [
        44
      ],
      lastResultsHash: Uint8Array [
        126
      ],
      nextValidatorsHash: Uint8Array [
        18
      ],
      validatorsHash: Uint8Array [
        170
      ],
      version: {
        Block: 76889,
        App: 30828
      },
      lastBlockId: {
        hash: 'b18045d25c4db15d0539c82fde8796dafd682df7',
        partsHeader: {
          total: undefined,
          hash: '7cb69ace9150c863134c6aa0b5a7f4b6aee6b9d6'
        }
      }
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
  code: 38,
  info: {
    id: 'Alabama',
    network: 'drive',
    moniker: 'Car',
    consensusVersion: 'New York',
    synced: undefined,
    appHash: 'e45be24c5e20d6c308ab303c24b7e7173784866f',
    blockHash: Uint8Array [
      161
    ],
    blockHeight: 51338,
    blockTime: '2019-04-11T08:55:48.155Z',
    address: '6c4e4b31c56fc7d338430959d8c9b2bd84717525',
    votingPower: 57371,
    totalTxs: 14447,
    version: 'generate',
    dataVersion: 'Credit Card Account',
    forgeAppsVersion: {
      Rubber: 'array'
    },
    supportedTxs: [
      'Island',
      'Lithuanian Litas'
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
  code: 6,
  config: 'Cambridgeshire'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'calculating',
    'Buckinghamshire'
  ],
  height: 30160
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  state: {
    address: '48cc97fcf84a7534023dbc0683be4aa116f326c5',
    consensus: {
      maxBytes: 51982,
      maxGas: 12277,
      maxValidators: 39092,
      maxCandidates: 43593,
      pubKeyTypes: [
        'backing up',
        'Dong'
      ],
      validators: [
        {
          address: '1746b1b15a33dbb1bddc26bceb560b93b6554817',
          power: 4608
        },
        {
          address: '5d4aff8e8a1422c97b9a176b1ce8d44a9716373b',
          power: 45979
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '373': {
        item: [
          {
            type: 2,
            dataHash: 'Money Market Account',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'Center',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '38721': {
        totalStakes: '50227',
        totalUnstakes: '77400',
        context: {
          genesisTx: 'sensor',
          renaissanceTx: 'Grass-roots',
          genesisTime: '2019-04-11T08:55:48.156Z',
          renaissanceTime: '2019-04-11T08:55:48.156Z'
        }
      }
    },
    version: 'Fresh',
    dataVersion: 'Niue',
    forgeAppHash: Uint8Array [
      65
    ],
    token: {
      name: 'partnerships',
      symbol: 'Books',
      unit: 'task-force',
      description: 'paradigms',
      icon: Uint8Array [
        211
      ],
      decimal: 3603,
      initialSupply: 67792,
      totalSupply: 48599,
      inflationRate: 83922
    },
    txConfig: {
      maxAssetSize: 308,
      maxListSize: 33281,
      maxMultisig: 10793,
      minimumStake: 5842
    },
    stakeConfig: {
      timeoutGeneral: 53736,
      timeoutStakeForNode: 7017
    },
    pokeConfig: {
      address: '51bd303596adb7fb3dfd683118a6dd76c1ab2750',
      dailyLimit: 71108,
      balance: 61623,
      amount: 58234
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
});
```

### getForgeStats

```js
const result = await client.getForgeStats({
  dayInfo: {
    startDate: 'quantify',
    endDate: 'Frozen'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  forgeStats: {
    numBlocks: [
      36590,
      7863
    ],
    numTxs: [
      98028,
      34803
    ],
    numStakes: [
      '13913',
      '19591'
    ],
    numValidators: [
      32974,
      95715
    ],
    numAccountMigrateTxs: [
      66198,
      21391
    ],
    numCreateAssetTxs: [
      15388,
      83338
    ],
    numConsensusUpgradeTxs: [
      64616,
      57852
    ],
    numDeclareTxs: [
      81598,
      38735
    ],
    numDeclareFileTxs: [
      70789,
      97665
    ],
    numExchangeTxs: [
      17549,
      58994
    ],
    numStakeTxs: [
      75390,
      27474
    ],
    numSysUpgradeTxs: [
      12995,
      150
    ],
    numTransferTxs: [
      82757,
      43903
    ],
    numUpdateAssetTxs: [
      44028,
      83639
    ],
    numConsumeAssetTxs: [
      2013,
      74627
    ],
    numPokeTxs: [
      75618,
      9199
    ],
    tps: [
      98795,
      9954
    ],
    maxTps: 17889,
    avgTps: 78570,
    avgBlockTime: 13637.88
  }
}
});
```

### getHealthStatus

```js
const result = await client.getHealthStatus({});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  healthStatus: {
    consensus: {
      health: undefined,
      synced: undefined,
      blockHeight: 18850
    },
    network: {
      health: undefined,
      numPeers: 89470
    },
    storage: {
      health: undefined,
      indexerServer: 'Sausages',
      stateDb: 'channels',
      diskSpace: {
        forgeUsage: 'copy',
        total: 'COM'
      }
    },
    forge: {
      health: undefined,
      abiServer: 'UAE Dirham',
      forgeWeb: 'Handmade Rubber Bike',
      abciServer: {
        abciConsensus: 'Incredible',
        abciInfo: 'channels'
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
  code: 35,
  netInfo: {
    listening: undefined,
    listeners: [
      'withdrawal',
      'Extension'
    ],
    nPeers: 3865,
    peers: [
      {
        id: 'AI',
        network: 'Canada',
        consensusVersion: 'Table',
        moniker: 'cutting-edge',
        ip: 'Automotive',
        geoInfo: {
          city: 'Rupiah',
          country: 'Buckinghamshire',
          latitude: 1833.59,
          longitude: 63131.75
        }
      },
      {
        id: 'Frozen',
        network: 'Fish',
        consensusVersion: 'Small Metal Bike',
        moniker: 'Proactive',
        ip: 'Shirt',
        geoInfo: {
          city: 'Frozen',
          country: 'parsing',
          latitude: 69889.05,
          longitude: 86736.84
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
  code: 39,
  info: {
    id: 'forecast',
    network: 'Handcrafted',
    moniker: 'Beauty',
    consensusVersion: 'Quality',
    synced: undefined,
    appHash: '7c83b6ddc6d6c631fd2f73d039e81abc586399c9',
    blockHash: Uint8Array [
      180
    ],
    blockHeight: 11384,
    blockTime: '2019-04-11T08:55:48.158Z',
    address: 'c23e0a1ba403f35712ee6d7b382e30f8d5d5b3c1',
    votingPower: 76077,
    totalTxs: 1199,
    version: 'Idaho',
    dataVersion: 'analyzing',
    forgeAppsVersion: {
      deposit: 'SSL'
    },
    supportedTxs: [
      'Lilangeni',
      'Diverse'
    ],
    ip: 'payment',
    geoInfo: {
      city: 'navigate',
      country: 'Re-engineered',
      latitude: 91699.02,
      longitude: 73461
    },
    p2pAddress: 'deposit'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '8e3d171579eab3202088bb837e1e502df6652bc7',
  keys: [
    'back up',
    'Global'
  ],
  height: 29587
});

// output
{
  code: 41,
  state: {
    address: '350d191097b8f1931a8c66100aef47b7019852d2',
    from: 'a0a840c6c5f024c3f38206da44b1d444fd0f974b',
    to: 'dfcabe217c9434591ada4681eaf963b8e61980ee',
    balance: '4789',
    message: 'Concrete',
    context: {
      genesisTx: 'Product',
      renaissanceTx: 'SMS',
      genesisTime: '2019-04-11T08:55:48.159Z',
      renaissanceTime: '2019-04-11T08:55:48.159Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getTx

```js
const stream = client.getTx({
  hash: 'e4dcdd8d0e1848a8741bd393981ae658811714b0'
});

// output
{
  code: 16,
  info: {
    tx: {
      from: 'fff053c3455bd775326c680764785ad0f732cf52',
      nonce: 87078,
      chainId: 'morph',
      pk: Uint8Array [
        173
      ],
      signature: Uint8Array [
        18
      ],
      signatures: [
        {
          signer: 'Home Loan Account',
          pk: Uint8Array [
            253
          ],
          signature: Uint8Array [
            150
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Representative',
          pk: Uint8Array [
            198
          ],
          signature: Uint8Array [
            119
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
    height: 55112,
    index: 92422,
    hash: 'ba32a7f09536a9b97bd05611d072fa3ed0f1acc2',
    tags: [
      {
        key: Uint8Array [
          0
        ],
        value: Uint8Array [
          156
        ]
      },
      {
        key: Uint8Array [
          183
        ],
        value: Uint8Array [
          192
        ]
      }
    ],
    code: 17,
    time: '2019-04-11T08:55:48.160Z',
    createAsset: {
      asset: 'Turkmenistan'
    },
    accountMigrate: {
      address: '6abef7b66864e2c920d9305783ce9976fadbe4fd'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  paging: {
    cursor: 'architect',
    size: 78135,
    order: [
      {
        field: 'Pizza',
        type: 'Baby'
      },
      {
        field: 'Small Fresh Chips',
        type: 'Tonga'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 11,
  page: {
    cursor: 'Fort',
    next: undefined,
    total: 82810
  },
  unconfirmedTxs: {
    nTxs: 46017,
    txs: [
      {
        from: '692894b5456c6338b035713a42e425b173f96875',
        nonce: 1341,
        chainId: 'magenta',
        pk: Uint8Array [
          240
        ],
        signature: Uint8Array [
          203
        ],
        signatures: [
          {
            signer: 'Credit Card Account',
            pk: Uint8Array [
              56
            ],
            signature: Uint8Array [
              70
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'frame',
            pk: Uint8Array [
              82
            ],
            signature: Uint8Array [
              219
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
        from: 'fb624d1ce883498c52ef63731383f3000c51265e',
        nonce: 45073,
        chainId: 'HTTP',
        pk: Uint8Array [
          220
        ],
        signature: Uint8Array [
          15
        ],
        signatures: [
          {
            signer: 'Cotton',
            pk: Uint8Array [
              21
            ],
            signature: Uint8Array [
              107
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Facilitator',
            pk: Uint8Array [
              3
            ],
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
  code: 36,
  validatorsInfo: {
    blockHeight: 35817,
    validators: [
      {
        address: '8972c556f83cb3b3c6a64fddbae77ba8501ab9dd',
        pubKey: {
          type: 'overriding',
          data: Uint8Array [
            66
          ]
        },
        votingPower: 46529,
        proposerPriority: 'Refined Wooden Towels',
        name: 'XSS',
        geoInfo: {
          city: 'Convertible Marks',
          country: 'Seychelles Rupee',
          latitude: 76378.57,
          longitude: 92083.31
        }
      },
      {
        address: 'b6b9b8b7682f9e2ed2b5af162630dc485aca3104',
        pubKey: {
          type: 'Small',
          data: Uint8Array [
            73
          ]
        },
        votingPower: 76488,
        proposerPriority: 'Decentralized',
        name: 'online',
        geoInfo: {
          city: 'Ball',
          country: 'withdrawal',
          latitude: 98861.48,
          longitude: 409.96
        }
      }
    ]
  }
}
});
```

### listAccount

```js
const result = await client.listAccount({
  ownerAddress: 'Practical'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  account: {
    address: '86c8e878092d07debfff477166e180661311003a',
    balance: '44335',
    numAssets: 82718,
    numTxs: 3598,
    nonce: 81178,
    genesisTime: 'metrics',
    renaissanceTime: 'infrastructure',
    moniker: 'Technician',
    migratedFrom: 'Dynamic',
    migratedTo: 'digital',
    totalReceivedStakes: '28120',
    totalStakes: '76047',
    totalUnstakes: '66482',
    recentNumTxs: [
      64297,
      72913
    ]
  }
}
});
```

### listAssetTransactions

```js
const result = await client.listAssetTransactions({
  paging: {
    cursor: 'Handcrafted Metal Cheese',
    size: 20092,
    order: [
      {
        field: 'Avon',
        type: 'Rwanda Franc'
      },
      {
        field: 'Indian Rupee',
        type: 'ivory'
      }
    ]
  },
  address: 'bebcb91ab73d64810980755aab306438e3f2af45'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  page: {
    cursor: 'Direct',
    next: undefined,
    total: 32555
  },
  transactions: [
    {
      hash: '73b490a8d72ef8bcf32256fb29d27dbd3420d257',
      sender: 'Identity',
      receiver: 'Soap',
      time: 'bandwidth',
      type: 'bypass',
      tx: {
        from: '385da3355a0445e5ccde28ed8c08383bcfa12cf9',
        nonce: 68779,
        chainId: 'Unbranded Concrete Table',
        pk: Uint8Array [
          158
        ],
        signature: Uint8Array [
          31
        ],
        signatures: [
          {
            signer: 'navigate',
            pk: Uint8Array [
              126
            ],
            signature: Uint8Array [
              156
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Awesome Soft Salad',
            pk: Uint8Array [
              246
            ],
            signature: Uint8Array [
              105
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
      valid: undefined,
      code: 0
    },
    {
      hash: 'f9cde148620288251dfc30336ef276f1ce17dfcf',
      sender: 'Officer',
      receiver: 'bypass',
      time: 'United Kingdom',
      type: 'Human',
      tx: {
        from: 'c18cc0656331775522d098f1bb2ad14380a454dc',
        nonce: 88305,
        chainId: 'Lebanon',
        pk: Uint8Array [
          175
        ],
        signature: Uint8Array [
          45
        ],
        signatures: [
          {
            signer: 'deposit',
            pk: Uint8Array [
              115
            ],
            signature: Uint8Array [
              12
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'global',
            pk: Uint8Array [
              234
            ],
            signature: Uint8Array [
              159
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
      valid: undefined,
      code: 37
    }
  ]
}
});
```

### listAssets

```js
const result = await client.listAssets({
  paging: {
    cursor: 'synthesizing',
    size: 44770,
    order: [
      {
        field: 'best-of-breed',
        type: 'collaborative'
      },
      {
        field: 'Generic Cotton Chips',
        type: 'Handmade Metal Chicken'
      }
    ]
  },
  ownerAddress: 'Kroon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  page: {
    cursor: 'reboot',
    next: undefined,
    total: 92342
  },
  assets: [
    {
      address: 'c61d99c12f05403bc05a7be18678ce99e7f2eaf7',
      owner: 'Bedfordshire',
      genesisTime: 'Concrete',
      renaissanceTime: 'Investor',
      moniker: 'Web',
      readonly: undefined
    },
    {
      address: 'b68748d9b677848cee4b16daf4f1799dbfe8edc0',
      owner: 'Avon',
      genesisTime: 'ivory',
      renaissanceTime: 'client-driven',
      moniker: 'Electronics',
      readonly: undefined
    }
  ]
}
});
```

### listBlocks

```js
const result = await client.listBlocks({
  paging: {
    cursor: 'Seamless',
    size: 44471,
    order: [
      {
        field: 'Seamless',
        type: 'synthesize'
      },
      {
        field: 'Money Market Account',
        type: 'online'
      }
    ]
  },
  proposer: 'e83c718b4321f380f9f5500fd507a864552c21dc',
  timeFilter: {
    startDateTime: 'Direct',
    endDateTime: 'Street'
  },
  heightFilter: {
    from: 'f5ba67cdc35402240e7695bb995ace12f196ddc1',
    to: 'd5156e2369fca906e1fb204614ceb2ec2d7ec0c5'
  },
  numTxsFilter: {
    from: '3d338ff101e19153fe92b7d8ede24dd0f61dab85',
    to: '2341227401f9918a6d94520802c20e782442b887'
  },
  numInvalidTxsFilter: {
    from: '3379ea3bb476f01e0dec34e87446c7ec77914d88',
    to: 'ed1959c3c41cc813bffe11378fd42577c0135739'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  page: {
    cursor: 'metrics',
    next: undefined,
    total: 71581
  },
  blocks: [
    {
      height: 56285,
      time: 'tertiary',
      proposer: '87227c1d5cf16113b3606ea7c426dfa2086501c4',
      numTxs: 24686,
      numInvalidTxs: 84960
    },
    {
      height: 65871,
      time: 'Awesome Cotton Sausages',
      proposer: '213f64fbdb6868cbfed150a4d9273bc74f49325b',
      numTxs: 44010,
      numInvalidTxs: 71433
    }
  ]
}
});
```

### listStakes

```js
const result = await client.listStakes({
  paging: {
    cursor: 'Car',
    size: 73026,
    order: [
      {
        field: 'New Israeli Sheqel',
        type: 'Program'
      },
      {
        field: 'salmon',
        type: 'Adaptive'
      }
    ]
  },
  addressFilter: {
    sender: 'program',
    receiver: 'Producer',
    direction: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1,
  page: {
    cursor: 'Group',
    next: undefined,
    total: 44206
  },
  stakes: [
    {
      address: '01e7b502ead31d2897a9ee4e800fafd6589b9bf0',
      balance: '61764',
      sender: 'intranet',
      receiver: 'Idaho',
      genesisTime: 'Mouse',
      renaissanceTime: 'Village',
      message: 'Technician',
      type: 11214
    },
    {
      address: '6031d4a96a9326b7141e837f24b76476770f7df8',
      balance: '12640',
      sender: 'exploit',
      receiver: 'driver',
      genesisTime: 'solutions',
      renaissanceTime: 'Ukraine',
      message: 'Yemeni Rial',
      type: 90022
    }
  ]
}
});
```

### listTopAccounts

```js
const result = await client.listTopAccounts({
  paging: {
    cursor: 'SSL',
    size: 10407,
    order: [
      {
        field: 'Practical',
        type: 'Borders'
      },
      {
        field: 'Saint Kitts and Nevis',
        type: 'supply-chains'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  page: {
    cursor: 'hacking',
    next: undefined,
    total: 33603
  },
  accounts: [
    {
      address: '9b3685b2dd65b309823c8edc58b28cb0b7a29a1b',
      balance: '63491',
      numAssets: 47435,
      numTxs: 6923,
      nonce: 46948,
      genesisTime: 'Somoni',
      renaissanceTime: 'compress',
      moniker: 'Senior',
      migratedFrom: 'global',
      migratedTo: 'grey',
      totalReceivedStakes: '4523',
      totalStakes: '84926',
      totalUnstakes: '25610',
      recentNumTxs: [
        88991,
        98546
      ]
    },
    {
      address: '8a8cd0cf3578ce2bfa5d2f18390c95cbc57c4fa7',
      balance: '76447',
      numAssets: 45733,
      numTxs: 45975,
      nonce: 42,
      genesisTime: 'Inverse',
      renaissanceTime: 'Movies',
      moniker: 'Shoes',
      migratedFrom: 'Road',
      migratedTo: 'transmitting',
      totalReceivedStakes: '56610',
      totalStakes: '65338',
      totalUnstakes: '80659',
      recentNumTxs: [
        20183,
        99539
      ]
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'primary',
    size: 22965,
    order: [
      {
        field: 'initiative',
        type: 'generate'
      },
      {
        field: 'engineer',
        type: 'PNG'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'salmon',
    endDateTime: 'calculate'
  },
  addressFilter: {
    sender: 'Refined',
    receiver: 'niches',
    direction: 1
  },
  typeFilter: {
    types: [
      'Integration',
      'Heights'
    ]
  },
  validityFilter: {
    validity: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  page: {
    cursor: 'Auto Loan Account',
    next: undefined,
    total: 95609
  },
  transactions: [
    {
      hash: '1dc2b8a0a2fe190e4b2378899d32037587c303ee',
      sender: 'Assimilated',
      receiver: 'bus',
      time: 'calculate',
      type: 'lavender',
      tx: {
        from: 'd10ec3cc5ed4500721c3eb9ae96d051cd6116144',
        nonce: 39211,
        chainId: 'Chips',
        pk: Uint8Array [
          213
        ],
        signature: Uint8Array [
          122
        ],
        signatures: [
          {
            signer: 'Multi-lateral',
            pk: Uint8Array [
              84
            ],
            signature: Uint8Array [
              185
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Refined',
            pk: Uint8Array [
              103
            ],
            signature: Uint8Array [
              125
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
      valid: undefined,
      code: 35
    },
    {
      hash: 'cfa75f55d5820c3aea525ac6c9d1a90ec3c06d19',
      sender: 'open-source',
      receiver: 'International',
      time: 'Pennsylvania',
      type: 'Credit Card Account',
      tx: {
        from: '7c058df5fd8594bc8915224f304717ac49c5dd88',
        nonce: 11319,
        chainId: 'blockchains',
        pk: Uint8Array [
          84
        ],
        signature: Uint8Array [
          60
        ],
        signatures: [
          {
            signer: 'Tasty',
            pk: Uint8Array [
              141
            ],
            signature: Uint8Array [
              7
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Bedfordshire',
            pk: Uint8Array [
              188
            ],
            signature: Uint8Array [
              86
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
      valid: undefined,
      code: 41
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
  code: 7,
  address: '129d6678a08e160daa6f3b25f7f76381b5d4d40d'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '3146972e20390ab850821637e0f35b7377343947'
});

// output
{
  code: 40,
  chunk: Uint8Array [
    74
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'cd80b73b3511f274e49475e73b2f4bdc3c4ac060',
  passphrase: 'open-source'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  token: 'portals',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      65
    ],
    pk: Uint8Array [
      70
    ],
    address: 'b4d97c0d1c0055d8997c3fe5ee3b704b80bdf593'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '08a92d4bcb7ca52f4587be4306b85b6e6e9b5a26',
    nonce: 241,
    chainId: 'Norway',
    pk: Uint8Array [
      150
    ],
    signature: Uint8Array [
      3
    ],
    signatures: [
      {
        signer: 'New Mexico',
        pk: Uint8Array [
          203
        ],
        signature: Uint8Array [
          82
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Persevering',
        pk: Uint8Array [
          61
        ],
        signature: Uint8Array [
          129
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
      hash: 1,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      224
    ],
    pk: Uint8Array [
      234
    ],
    address: '6acd5fafa9cfcb3f1f2552c05f3aa18df3f110d9'
  },
  token: 'Auto Loan Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  tx: {
    from: 'd70dd2651be9f05b61194259a0c284d943b8da47',
    nonce: 14930,
    chainId: 'Indiana',
    pk: Uint8Array [
      84
    ],
    signature: Uint8Array [
      70
    ],
    signatures: [
      {
        signer: 'multi-byte',
        pk: Uint8Array [
          185
        ],
        signature: Uint8Array [
          117
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Mali',
        pk: Uint8Array [
          174
        ],
        signature: Uint8Array [
          172
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
  hash: 'b4a06abca04598c090b7e2b15608ab6fe62280a9'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '9f1db37c9fc136bd0b0037d0fe82d507037dffdb',
      nonce: 51032,
      chainId: 'Buckinghamshire',
      pk: Uint8Array [
        75
      ],
      signature: Uint8Array [
        255
      ],
      signatures: [
        {
          signer: 'Personal Loan Account',
          pk: Uint8Array [
            83
          ],
          signature: Uint8Array [
            30
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'experiences',
          pk: Uint8Array [
            154
          ],
          signature: Uint8Array [
            193
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
        balance: '95808',
        nonce: 12787,
        numTxs: 44713,
        address: '8180bdce3dc70d077e48ad940a4bbb151534b1b8',
        pk: Uint8Array [
          126
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 3
        },
        moniker: 'engineer',
        context: {
          genesisTx: 'Central',
          renaissanceTx: 'Indonesia',
          genesisTime: '2019-04-11T08:55:48.168Z',
          renaissanceTime: '2019-04-11T08:55:48.168Z'
        },
        issuer: 'incubate',
        migratedTo: [
          'override',
          'Cayman Islands'
        ],
        migratedFrom: [
          'Personal Loan Account',
          'solid state'
        ],
        numAssets: 30166,
        stake: {
          totalStakes: '7866',
          totalUnstakes: '48111',
          totalReceivedStakes: '50505',
          recentStakes: {
            items: [
              Uint8Array [
                249
              ],
              Uint8Array [
                88
              ]
            ],
            typeUrl: 'Central',
            maxItems: 52699,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                53
              ],
              Uint8Array [
                142
              ]
            ],
            typeUrl: 'Personal Loan Account',
            maxItems: 78152,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              68
            ],
            Uint8Array [
              114
            ]
          ],
          typeUrl: 'Sleek',
          maxItems: 70907,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '67642',
          leftover: '60897',
          amount: '81889'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '77641',
        nonce: 84264,
        numTxs: 42341,
        address: 'c062f330cce4da1288ec02003fcb30a3d9d706b1',
        pk: Uint8Array [
          14
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 1,
          role: 8
        },
        moniker: 'Applications',
        context: {
          genesisTx: 'Plaza',
          renaissanceTx: 'grow',
          genesisTime: '2019-04-11T08:55:48.168Z',
          renaissanceTime: '2019-04-11T08:55:48.168Z'
        },
        issuer: 'Shoes',
        migratedTo: [
          'Ergonomic',
          'transmitting'
        ],
        migratedFrom: [
          'incentivize',
          'SAS'
        ],
        numAssets: 28241,
        stake: {
          totalStakes: '44680',
          totalUnstakes: '2909',
          totalReceivedStakes: '96603',
          recentStakes: {
            items: [
              Uint8Array [
                254
              ],
              Uint8Array [
                247
              ]
            ],
            typeUrl: 'Virginia',
            maxItems: 19932,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                37
              ],
              Uint8Array [
                241
              ]
            ],
            typeUrl: 'Handmade',
            maxItems: 66133,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              239
            ],
            Uint8Array [
              156
            ]
          ],
          typeUrl: 'online',
          maxItems: 80730,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '11281',
          leftover: '60963',
          amount: '22057'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '3a3babd5cd6746d05cea78a9271b7a32d22170b0',
        owner: 'Generic',
        moniker: 'Buckinghamshire',
        readonly: undefined,
        transferrable: undefined,
        ttl: 28300,
        consumedTime: '2019-04-11T08:55:48.168Z',
        issuer: 'Customizable',
        stake: {
          totalStakes: '31850',
          totalUnstakes: '57993',
          totalReceivedStakes: '94157',
          recentStakes: {
            items: [
              Uint8Array [
                98
              ],
              Uint8Array [
                74
              ]
            ],
            typeUrl: 'Planner',
            maxItems: 82981,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                109
              ],
              Uint8Array [
                8
              ]
            ],
            typeUrl: 'purple',
            maxItems: 20235,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'New Israeli Sheqel',
          renaissanceTx: 'Credit Card Account',
          genesisTime: '2019-04-11T08:55:48.168Z',
          renaissanceTime: '2019-04-11T08:55:48.168Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '9ff9ca70e912df5595d90a18a31f787cc1bb7643',
        owner: 'matrix',
        moniker: 'copying',
        readonly: undefined,
        transferrable: undefined,
        ttl: 29289,
        consumedTime: '2019-04-11T08:55:48.168Z',
        issuer: 'Denar',
        stake: {
          totalStakes: '54689',
          totalUnstakes: '71826',
          totalReceivedStakes: '3137',
          recentStakes: {
            items: [
              Uint8Array [
                121
              ],
              Uint8Array [
                14
              ]
            ],
            typeUrl: 'solution',
            maxItems: 16369,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                192
              ],
              Uint8Array [
                168
              ]
            ],
            typeUrl: 'value-added',
            maxItems: 91008,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'e-tailers',
          renaissanceTx: 'collaborative',
          genesisTime: '2019-04-11T08:55:48.169Z',
          renaissanceTime: '2019-04-11T08:55:48.169Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '4278fee35a0c17562dbabbb329d470f2af27215c',
        from: '8ca9d5eeac1b050a036afdd39e59e26ad221c178',
        to: '5bd7a630e5386ece9d0e7b93f936a949807436f7',
        balance: '43077',
        message: 'navigating',
        context: {
          genesisTx: 'THX',
          renaissanceTx: 'alarm',
          genesisTime: '2019-04-11T08:55:48.169Z',
          renaissanceTime: '2019-04-11T08:55:48.169Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'fa972810cc909224c7617bec0ab08ba591c3db84',
        from: '1db6075ba1960946d1317f43e928bb704af1546a',
        to: 'aa0dd2ce55e438ed26be1e550ec23779d76951af',
        balance: '36389',
        message: 'PNG',
        context: {
          genesisTx: 'USB',
          renaissanceTx: 'Malaysian Ringgit',
          genesisTime: '2019-04-11T08:55:48.169Z',
          renaissanceTime: '2019-04-11T08:55:48.169Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '1e34fff1fbb3fb7568f61908acd337b56dd6b923',
      blockHeight: 9560,
      blockTime: '2019-04-11T08:55:48.169Z',
      totalTxs: 91381,
      txStatistics: {
        numAccountMigrateTxs: 94873,
        numCreateAssetTxs: 16616,
        numConsensusUpgradeTxs: 22149,
        numDeclareTxs: 98897,
        numDeclareFileTxs: 97459,
        numExchangeTxs: 65849,
        numStakeTxs: 50987,
        numSysUpgradeTxs: 1081,
        numTransferTxs: 25405,
        numUpdateAssetTxs: 3060,
        numConsumeAssetTxs: 55977,
        numPokeTxs: 35132
      },
      txIndex: 42723,
      lastBlockTime: '2019-04-11T08:55:48.169Z'
    },
    appState: {
      address: 'ef2e9ee107f90e070b4e4b0d6817e09ed7f31671',
      consensus: {
        maxBytes: 41191,
        maxGas: 4525,
        maxValidators: 38071,
        maxCandidates: 76650,
        pubKeyTypes: [
          'Marketing',
          'Cliff'
        ],
        validators: [
          {
            address: '03d39d781d060b5d9b19d1b48b88c8279c0bb98d',
            power: 44301
          },
          {
            address: '29668c511b412f6063c95b79e0fb61f26c4a61ed',
            power: 44604
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '50685': {
          item: [
            {
              type: 14,
              dataHash: 'algorithm',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'Kuwaiti Dinar',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '35612': {
          totalStakes: '97716',
          totalUnstakes: '83665',
          context: {
            genesisTx: 'Mouse',
            renaissanceTx: 'Ergonomic',
            genesisTime: '2019-04-11T08:55:48.169Z',
            renaissanceTime: '2019-04-11T08:55:48.169Z'
          }
        }
      },
      version: 'Jordanian Dinar',
      dataVersion: 'Extended',
      forgeAppHash: Uint8Array [
        71
      ],
      token: {
        name: 'Kansas',
        symbol: 'Louisiana',
        unit: 'Crescent',
        description: 'program',
        icon: Uint8Array [
          28
        ],
        decimal: 66446,
        initialSupply: 87912,
        totalSupply: 75137,
        inflationRate: 54797
      },
      txConfig: {
        maxAssetSize: 57149,
        maxListSize: 80362,
        maxMultisig: 22293,
        minimumStake: 6029
      },
      stakeConfig: {
        timeoutGeneral: 14372,
        timeoutStakeForNode: 68971
      },
      pokeConfig: {
        address: '89a196df1dd999072e03f3805f9b277fc63829e9',
        dailyLimit: 50096,
        balance: 17064,
        amount: 36597
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
    code: 7
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'ea4d6ee58c5a518bbeb179fda1ba416669e0025d',
      nonce: 11823,
      chainId: 'program',
      pk: Uint8Array [
        181
      ],
      signature: Uint8Array [
        202
      ],
      signatures: [
        {
          signer: 'indexing',
          pk: Uint8Array [
            106
          ],
          signature: Uint8Array [
            213
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'primary',
          pk: Uint8Array [
            134
          ],
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
    states: [
      {
        balance: '30820',
        nonce: 31784,
        numTxs: 20564,
        address: '42abce3e80e143e62a866c4be5fc5fa0854cec17',
        pk: Uint8Array [
          29
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 3
        },
        moniker: 'SSL',
        context: {
          genesisTx: 'USB',
          renaissanceTx: 'Dynamic',
          genesisTime: '2019-04-11T08:55:48.170Z',
          renaissanceTime: '2019-04-11T08:55:48.170Z'
        },
        issuer: 'Mobility',
        migratedTo: [
          'Granite',
          'Cambridgeshire'
        ],
        migratedFrom: [
          'real-time',
          'Manager'
        ],
        numAssets: 91700,
        stake: {
          totalStakes: '87962',
          totalUnstakes: '89735',
          totalReceivedStakes: '15324',
          recentStakes: {
            items: [
              Uint8Array [
                157
              ],
              Uint8Array [
                95
              ]
            ],
            typeUrl: 'Tasty',
            maxItems: 61657,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                162
              ],
              Uint8Array [
                251
              ]
            ],
            typeUrl: 'indigo',
            maxItems: 78326,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              171
            ],
            Uint8Array [
              49
            ]
          ],
          typeUrl: 'Avon',
          maxItems: 69516,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '97415',
          leftover: '88336',
          amount: '32857'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '35681',
        nonce: 88636,
        numTxs: 50683,
        address: 'c0c105c1923ab0f57c2ef4f0a1c47d44ffdc186c',
        pk: Uint8Array [
          55
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 0
        },
        moniker: 'withdrawal',
        context: {
          genesisTx: 'deposit',
          renaissanceTx: 'architect',
          genesisTime: '2019-04-11T08:55:48.170Z',
          renaissanceTime: '2019-04-11T08:55:48.170Z'
        },
        issuer: 'intuitive',
        migratedTo: [
          'Rustic',
          'recontextualize'
        ],
        migratedFrom: [
          'cutting-edge',
          'models'
        ],
        numAssets: 9506,
        stake: {
          totalStakes: '49237',
          totalUnstakes: '79127',
          totalReceivedStakes: '49307',
          recentStakes: {
            items: [
              Uint8Array [
                118
              ],
              Uint8Array [
                6
              ]
            ],
            typeUrl: 'THX',
            maxItems: 44602,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                35
              ],
              Uint8Array [
                192
              ]
            ],
            typeUrl: 'robust',
            maxItems: 26115,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              136
            ],
            Uint8Array [
              32
            ]
          ],
          typeUrl: 'mobile',
          maxItems: 28601,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '45362',
          leftover: '80631',
          amount: '47246'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'ad59776a0f6151ecb25adb1a7cf098e6540065ff',
        owner: 'Auto Loan Account',
        moniker: 'payment',
        readonly: undefined,
        transferrable: undefined,
        ttl: 2135,
        consumedTime: '2019-04-11T08:55:48.170Z',
        issuer: 'Rustic Plastic Pizza',
        stake: {
          totalStakes: '52244',
          totalUnstakes: '2192',
          totalReceivedStakes: '65874',
          recentStakes: {
            items: [
              Uint8Array [
                100
              ],
              Uint8Array [
                184
              ]
            ],
            typeUrl: 'monitoring',
            maxItems: 9735,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                10
              ],
              Uint8Array [
                204
              ]
            ],
            typeUrl: 'Dong',
            maxItems: 13521,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'withdrawal',
          renaissanceTx: 'Norwegian Krone',
          genesisTime: '2019-04-11T08:55:48.171Z',
          renaissanceTime: '2019-04-11T08:55:48.171Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '396afb88eba010de4518df287c43b07f920fb76d',
        owner: 'Cotton',
        moniker: 'Versatile',
        readonly: undefined,
        transferrable: undefined,
        ttl: 27899,
        consumedTime: '2019-04-11T08:55:48.171Z',
        issuer: 'initiatives',
        stake: {
          totalStakes: '51793',
          totalUnstakes: '1346',
          totalReceivedStakes: '65703',
          recentStakes: {
            items: [
              Uint8Array [
                98
              ],
              Uint8Array [
                111
              ]
            ],
            typeUrl: 'Tasty Metal Gloves',
            maxItems: 93891,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                119
              ],
              Uint8Array [
                251
              ]
            ],
            typeUrl: 'Investment Account',
            maxItems: 38599,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'whiteboard',
          renaissanceTx: 'hacking',
          genesisTime: '2019-04-11T08:55:48.171Z',
          renaissanceTime: '2019-04-11T08:55:48.171Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'dad2ea73204f193b9fe7e2b47c966723d4986f8c',
        from: '12c381b5eea06e0d4194cca7c3866a4e512cfbd5',
        to: 'e5332ec49cfa334a382b1696866502e555979b6c',
        balance: '50445',
        message: 'Intelligent Plastic Chicken',
        context: {
          genesisTx: 'program',
          renaissanceTx: 'Engineer',
          genesisTime: '2019-04-11T08:55:48.171Z',
          renaissanceTime: '2019-04-11T08:55:48.171Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'd0ba33b51eb066dc955365d53b6f33d0d85a76c7',
        from: 'f9ef73ca065e48c392504346c67241550efb9b2f',
        to: '9dd597266683e91d85837546e7667ece6ed3b3bf',
        balance: '25781',
        message: 'deposit',
        context: {
          genesisTx: 'Shirt',
          renaissanceTx: 'Personal Loan Account',
          genesisTime: '2019-04-11T08:55:48.171Z',
          renaissanceTime: '2019-04-11T08:55:48.171Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '470e9cd6a1792a278098ed513bd7785b0b5a7880',
      blockHeight: 15370,
      blockTime: '2019-04-11T08:55:48.171Z',
      totalTxs: 40699,
      txStatistics: {
        numAccountMigrateTxs: 74190,
        numCreateAssetTxs: 89304,
        numConsensusUpgradeTxs: 23166,
        numDeclareTxs: 69820,
        numDeclareFileTxs: 41705,
        numExchangeTxs: 91977,
        numStakeTxs: 14485,
        numSysUpgradeTxs: 50120,
        numTransferTxs: 33166,
        numUpdateAssetTxs: 70895,
        numConsumeAssetTxs: 10876,
        numPokeTxs: 3783
      },
      txIndex: 22954,
      lastBlockTime: '2019-04-11T08:55:48.171Z'
    },
    appState: {
      address: '9d6b8ce12458ba44ac7122f89cbfeb5f55b12609',
      consensus: {
        maxBytes: 42044,
        maxGas: 36432,
        maxValidators: 55478,
        maxCandidates: 67142,
        pubKeyTypes: [
          'ADP',
          'withdrawal'
        ],
        validators: [
          {
            address: '65a356d6ca25a052248bd9bcfe695fbce427fb66',
            power: 66012
          },
          {
            address: '5f260e3fc03d0db0984ae92e0ea283a37216bc06',
            power: 11043
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '62191': {
          item: [
            {
              type: 14,
              dataHash: 'Money Market Account',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 12,
              dataHash: 'payment',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '42841': {
          totalStakes: '49221',
          totalUnstakes: '67320',
          context: {
            genesisTx: 'Salad',
            renaissanceTx: 'encoding',
            genesisTime: '2019-04-11T08:55:48.171Z',
            renaissanceTime: '2019-04-11T08:55:48.171Z'
          }
        }
      },
      version: 'challenge',
      dataVersion: 'eyeballs',
      forgeAppHash: Uint8Array [
        172
      ],
      token: {
        name: 'Missouri',
        symbol: 'Multi-channelled',
        unit: 'AI',
        description: 'Solutions',
        icon: Uint8Array [
          140
        ],
        decimal: 10251,
        initialSupply: 46772,
        totalSupply: 70071,
        inflationRate: 19272
      },
      txConfig: {
        maxAssetSize: 52792,
        maxListSize: 59906,
        maxMultisig: 91407,
        minimumStake: 61316
      },
      stakeConfig: {
        timeoutGeneral: 46465,
        timeoutStakeForNode: 66206
      },
      pokeConfig: {
        address: '517f4fecf7f9bc5b9d788e9c96f6596202f12ce3',
        dailyLimit: 86410,
        balance: 43271,
        amount: 38600
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
    code: 20
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    12
  ],
  type: {
    pk: 1,
    hash: 13,
    address: 1,
    role: 8
  },
  passphrase: 'Lead',
  moniker: 'Assurance'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  token: 'Infrastructure',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      49
    ],
    pk: Uint8Array [
      4
    ],
    address: '8c6abe9c5c358184a170cb9d5d465b662b069288'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'adbeb4ab1f91c74ca52160db22c2d48f11ec361b'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34
}
});
```

### search

```js
const result = await client.search({
  key: 'Fresh',
  value: 'maroon'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  txs: [
    {
      tx: {
        from: '4e13951ca304d92564d7ccbf635b3e4340612834',
        nonce: 85117,
        chainId: 'Belize Dollar',
        pk: Uint8Array [
          158
        ],
        signature: Uint8Array [
          249
        ],
        signatures: [
          {
            signer: 'Soap',
            pk: Uint8Array [
              249
            ],
            signature: Uint8Array [
              135
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Group',
            pk: Uint8Array [
              217
            ],
            signature: Uint8Array [
              125
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
      height: 18788,
      index: 1891,
      hash: '065540983320af4dd6dfe11818f4941044991bb9',
      tags: [
        {
          key: Uint8Array [
            164
          ],
          value: Uint8Array [
            58
          ]
        },
        {
          key: Uint8Array [
            243
          ],
          value: Uint8Array [
            172
          ]
        }
      ],
      code: 24,
      time: '2019-04-11T08:55:48.172Z',
      createAsset: {
        asset: 'programming'
      },
      accountMigrate: {
        address: '3236bc57d1dd2fe6192043d011c9c286239040bc'
      }
    },
    {
      tx: {
        from: 'd89201af8973d62402a7df5f2a89f17595aead36',
        nonce: 68247,
        chainId: 'scalable',
        pk: Uint8Array [
          174
        ],
        signature: Uint8Array [
          179
        ],
        signatures: [
          {
            signer: 'Utah',
            pk: Uint8Array [
              253
            ],
            signature: Uint8Array [
              153
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'cyan',
            pk: Uint8Array [
              238
            ],
            signature: Uint8Array [
              135
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
      height: 47216,
      index: 56249,
      hash: '5ec49ede6e4545a228bb5279d8e3bf2293346c12',
      tags: [
        {
          key: Uint8Array [
            218
          ],
          value: Uint8Array [
            210
          ]
        },
        {
          key: Uint8Array [
            204
          ],
          value: Uint8Array [
            225
          ]
        }
      ],
      code: 500,
      time: '2019-04-11T08:55:48.172Z',
      createAsset: {
        asset: 'Awesome Frozen Bike'
      },
      accountMigrate: {
        address: 'c6b46a24e9d5a78f569e212a1eab1abc2af4d291'
      }
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'ab4405b4112843255be0170ece328a3487c715fb',
    nonce: 80390,
    chainId: 'transmitter',
    pk: Uint8Array [
      65
    ],
    signature: Uint8Array [
      175
    ],
    signatures: [
      {
        signer: 'Developer',
        pk: Uint8Array [
          17
        ],
        signature: Uint8Array [
          194
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'driver',
        pk: Uint8Array [
          11
        ],
        signature: Uint8Array [
          28
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
      hash: 7,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      242
    ],
    pk: Uint8Array [
      5
    ],
    address: 'b745b78d32997a31507741e355524848a9b5ddbb'
  },
  token: 'Danish Krone',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  hash: '959fbacba407f96bf2a27dc4491152064c1b1e51'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    237
  ],
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      35
    ],
    pk: Uint8Array [
      98
    ],
    address: '62b33e6e40bb7e455443594cbf8bf4ae643b20df'
  },
  token: 'website'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  signature: Uint8Array [
    59
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    82
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  hash: '33ab610142271f832200ea82ebf98f0ec03f9ec9'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 129,
  filter: 'convergence'
});

// output
{
  topic: 'Plains'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Clothing'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
