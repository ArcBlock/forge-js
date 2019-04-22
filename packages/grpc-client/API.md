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
  * [ProtocolStatus](#protocolstatus)
  * [Direction](#direction)
  * [Validity](#validity)
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
  * [getForgeStats](#getforgestats)
  * [getHealthStatus](#gethealthstatus)
  * [getNetInfo](#getnetinfo)
  * [getNodeInfo](#getnodeinfo)
  * [getProtocolState](#getprotocolstate)
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
  STAKE_STATE: 132,
  PROTOCOL_STATE: 133
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
  ROLE_VALIDATOR: 8,
  ROLE_TX: 9
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

### ProtocolStatus

```js
{
  RUNNING: 0,
  PAUSED: 1,
  TERMINATED: 2
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
  'ConsumeAssetTx',
  'CreateAssetTx',
  'DeclareFileTx',
  'DeclareTx',
  'ExchangeTx',
  'PokeTx',
  'StakeTx',
  'TransferTx',
  'ConsensusUpgradeTx',
  'DeployProtocolTx',
  'SysUpgradeTx',
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
  from: '75e2ff3f77e873e91009d48e82bd7f2083bb41f2',
  nonce: 49061,
  wallet: {
    type: {
      pk: 1,
      hash: 2,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      114
    ],
    pk: Uint8Array [
      148
    ],
    address: '05dba7d255bf444f674f0d529a4e37b4bd0c95cd'
  },
  token: 'orchestration'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  tx: {
    from: 'd51efed9ae102aa2a7410b2df794955f1285e280',
    nonce: 80944,
    chainId: 'systematic',
    pk: Uint8Array [
      141
    ],
    signature: Uint8Array [
      37
    ],
    signatures: [
      {
        signer: 'Czech Republic',
        pk: Uint8Array [
          241
        ],
        signature: Uint8Array [
          101
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'overriding',
        pk: Uint8Array [
          253
        ],
        signature: Uint8Array [
          17
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
  passphrase: 'Russian Ruble',
  type: {
    pk: 0,
    hash: 7,
    address: 0,
    role: 7
  },
  moniker: 'withdrawal'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  token: 'neural',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      237
    ],
    pk: Uint8Array [
      10
    ],
    address: '94c825e460a8a3a17f2244140ff94d175c624f19'
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
  code: 21,
  wallet: {
    type: {
      pk: 1,
      hash: 2,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      179
    ],
    pk: Uint8Array [
      112
    ],
    address: 'f860d4168cddf7a3a69ffdb757f93e617cdcc79a'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '4cf85c30c72e41e4ac51b6742e68dc0f2560421f',
  keys: [
    'Pataca',
    'Licensed Concrete Chair'
  ],
  height: 23055
});

// output
{
  code: 33,
  state: {
    balance: '1051',
    nonce: 18441,
    numTxs: 79256,
    address: '6a9c12625f13dec0c5d6a98ef5317590e52f439f',
    pk: Uint8Array [
      116
    ],
    type: {
      pk: 1,
      hash: 1,
      address: 1,
      role: 0
    },
    moniker: 'Brand',
    context: {
      genesisTx: 'maximize',
      renaissanceTx: 'calculate',
      genesisTime: '2019-04-22T10:12:28.556Z',
      renaissanceTime: '2019-04-22T10:12:28.556Z'
    },
    issuer: 'Auto Loan Account',
    migratedTo: [
      'Product',
      'override'
    ],
    migratedFrom: [
      'COM',
      'Gorgeous'
    ],
    numAssets: 18720,
    stake: {
      totalStakes: '77575',
      totalUnstakes: '36533',
      totalReceivedStakes: '32849',
      recentStakes: {
        items: [
          Uint8Array [
            37
          ],
          Uint8Array [
            49
          ]
        ],
        typeUrl: 'robust',
        maxItems: 54206,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            183
          ],
          Uint8Array [
            168
          ]
        ],
        typeUrl: 'invoice',
        maxItems: 70216,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          178
        ],
        Uint8Array [
          118
        ]
      ],
      typeUrl: 'program',
      maxItems: 34315,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '50260',
      leftover: '84653',
      amount: '78073'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '69fb65b7e926c0b7e204b25a779a32ad7d439998',
  keys: [
    'web-readiness',
    'backing up'
  ],
  height: 77503
});

// output
{
  code: 21,
  state: {
    address: 'db7b0f06424b49d3a8273fdbce6e20c64b991ae5',
    owner: 'deploy',
    moniker: 'cross-platform',
    readonly: undefined,
    transferrable: undefined,
    ttl: 30665,
    consumedTime: '2019-04-22T10:12:28.557Z',
    issuer: 'Money Market Account',
    stake: {
      totalStakes: '12604',
      totalUnstakes: '85274',
      totalReceivedStakes: '4009',
      recentStakes: {
        items: [
          Uint8Array [
            126
          ],
          Uint8Array [
            241
          ]
        ],
        typeUrl: 'redundant',
        maxItems: 29211,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            89
          ],
          Uint8Array [
            63
          ]
        ],
        typeUrl: 'front-end',
        maxItems: 97253,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Applications',
      renaissanceTx: 'Towels',
      genesisTime: '2019-04-22T10:12:28.557Z',
      renaissanceTime: '2019-04-22T10:12:28.557Z'
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
  height: 48466
});

// output
{
  code: 41,
  block: {
    height: 49637,
    numTxs: 72828,
    time: '2019-04-22T10:12:28.557Z',
    appHash: 'b67c6f96834b9a98f4d37fa8c7db922e0bdf7fd0',
    proposer: '7617c6826e7eb4fb5d9ce9af6dd5f996900a43f3',
    txs: [
      {
        tx: {
          from: 'af27a2902b67bafb9e618d3931b3fae43bec6151',
          nonce: 52255,
          chainId: 'HTTP',
          pk: Uint8Array [
            129
          ],
          signature: Uint8Array [
            46
          ],
          signatures: [
            {
              signer: 'back up',
              pk: Uint8Array [
                24
              ],
              signature: Uint8Array [
                131
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Organized',
              pk: Uint8Array [
                24
              ],
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
        height: 22218,
        index: 19544,
        hash: '57aa2d1c7e1ca9a19dd0bc0399ff7d593d452b1c',
        tags: [
          {
            key: Uint8Array [
              44
            ],
            value: Uint8Array [
              184
            ]
          },
          {
            key: Uint8Array [
              203
            ],
            value: Uint8Array [
              146
            ]
          }
        ],
        code: 7,
        time: '2019-04-22T10:12:28.558Z',
        createAsset: {
          asset: 'connecting'
        },
        accountMigrate: {
          address: 'f52c06acf7271d0290be6214754981e1130f4fd0'
        }
      },
      {
        tx: {
          from: 'eb6624215fcfc60c2aba705955856ccc3484a5c0',
          nonce: 68163,
          chainId: 'mobile',
          pk: Uint8Array [
            249
          ],
          signature: Uint8Array [
            196
          ],
          signatures: [
            {
              signer: 'Implementation',
              pk: Uint8Array [
                237
              ],
              signature: Uint8Array [
                164
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'virtual',
              pk: Uint8Array [
                52
              ],
              signature: Uint8Array [
                235
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
        height: 9903,
        index: 59488,
        hash: '2fb74db367607168658b9a2a2f17467a869fe502',
        tags: [
          {
            key: Uint8Array [
              96
            ],
            value: Uint8Array [
              30
            ]
          },
          {
            key: Uint8Array [
              75
            ],
            value: Uint8Array [
              43
            ]
          }
        ],
        code: 42,
        time: '2019-04-22T10:12:28.558Z',
        createAsset: {
          asset: 'killer'
        },
        accountMigrate: {
          address: '30c749b9657aef98851902fa32a553e366b59156'
        }
      }
    ],
    totalTxs: 81965,
    invalidTxs: [
      {
        tx: {
          from: '3a6fdc9b3c7db7b33e59d7766b6b3cda61b34765',
          nonce: 92402,
          chainId: 'e-tailers',
          pk: Uint8Array [
            93
          ],
          signature: Uint8Array [
            100
          ],
          signatures: [
            {
              signer: 'Advanced',
              pk: Uint8Array [
                18
              ],
              signature: Uint8Array [
                37
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'multi-byte',
              pk: Uint8Array [
                30
              ],
              signature: Uint8Array [
                59
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
        height: 76570,
        index: 69169,
        hash: '83ee77d5268fa9853dbf12720560a41a98bf3c11',
        tags: [
          {
            key: Uint8Array [
              83
            ],
            value: Uint8Array [
              134
            ]
          },
          {
            key: Uint8Array [
              84
            ],
            value: Uint8Array [
              221
            ]
          }
        ],
        code: 24,
        time: '2019-04-22T10:12:28.558Z',
        createAsset: {
          asset: 'Assurance'
        },
        accountMigrate: {
          address: 'c91cf69554875dd12f9bc9aee622dcb2646554f0'
        }
      },
      {
        tx: {
          from: '4e47caa5e434ca746e80856130779ef81d0a40b9',
          nonce: 25680,
          chainId: 'copy',
          pk: Uint8Array [
            13
          ],
          signature: Uint8Array [
            245
          ],
          signatures: [
            {
              signer: 'bypassing',
              pk: Uint8Array [
                189
              ],
              signature: Uint8Array [
                64
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Steel',
              pk: Uint8Array [
                67
              ],
              signature: Uint8Array [
                173
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
        height: 59602,
        index: 78447,
        hash: '05c3eeb9644f13fb06232f143fc13fcc53d9e556',
        tags: [
          {
            key: Uint8Array [
              228
            ],
            value: Uint8Array [
              204
            ]
          },
          {
            key: Uint8Array [
              149
            ],
            value: Uint8Array [
              246
            ]
          }
        ],
        code: 39,
        time: '2019-04-22T10:12:28.559Z',
        createAsset: {
          asset: 'Maine'
        },
        accountMigrate: {
          address: '261405fbff7f535b785d6801c5698e47e22e117f'
        }
      }
    ],
    txsHashes: [
      '1080p',
      'National'
    ],
    invalidTxsHashes: [
      'matrix',
      'Oklahoma'
    ],
    consensusHash: Uint8Array [
      159
    ],
    dataHash: Uint8Array [
      237
    ],
    evidenceHash: Uint8Array [
      193
    ],
    lastCommitHash: Uint8Array [
      64
    ],
    lastResultsHash: Uint8Array [
      221
    ],
    nextValidatorsHash: Uint8Array [
      9
    ],
    validatorsHash: Uint8Array [
      239
    ],
    version: {
      Block: 87658,
      App: 55314
    },
    lastBlockId: {
      hash: '12fe1e96f65d944bfe282e3a33bd1a84b70a9fa4',
      partsHeader: {
        total: undefined,
        hash: '57d27f09400cf5f74122665b60fa40ee0de85aef'
      }
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'enterprise',
    size: 3742,
    order: [
      {
        field: 'New Jersey',
        type: 'Awesome Soft Hat'
      },
      {
        field: 'Intelligent',
        type: 'morph'
      }
    ]
  },
  heightFilter: {
    from: '35c9f0f6a289694e116ee947a244da07cc1510e5',
    to: 'be4791c071408f6c82f9987c346c7f766a2c1aca'
  },
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  page: {
    cursor: 'Metrics',
    next: undefined,
    total: 10827
  },
  blocks: [
    {
      height: 97449,
      numTxs: 29504,
      time: '2019-04-22T10:12:28.560Z',
      appHash: '29e7ff547e44efa2e5c1de581b95362cbf72fc8a',
      proposer: 'e376f2059246ef0487fe3bb63064811a0f42a770',
      totalTxs: 63714,
      txsHashes: [
        'copy',
        'explicit'
      ],
      invalidTxsHashes: [
        'transmit',
        'pink'
      ],
      consensusHash: Uint8Array [
        93
      ],
      dataHash: Uint8Array [
        128
      ],
      evidenceHash: Uint8Array [
        186
      ],
      lastCommitHash: Uint8Array [
        158
      ],
      lastResultsHash: Uint8Array [
        214
      ],
      nextValidatorsHash: Uint8Array [
        199
      ],
      validatorsHash: Uint8Array [
        14
      ],
      version: {
        Block: 88598,
        App: 15545
      },
      lastBlockId: {
        hash: 'd9636772dee8b09fb84ea674e78955a81559449b',
        partsHeader: {
          total: undefined,
          hash: 'a27bce783fa914d6b4be2b4e807a4690ba98f0b2'
        }
      }
    },
    {
      height: 16058,
      numTxs: 50593,
      time: '2019-04-22T10:12:28.560Z',
      appHash: '6f8332272b89126d967bd175c586fa8f483b5436',
      proposer: '5fa59bda6d9d81824cd1a0226660168743da1761',
      totalTxs: 19133,
      txsHashes: [
        'Communications',
        'process improvement'
      ],
      invalidTxsHashes: [
        'Handcrafted Cotton Fish',
        'Auto Loan Account'
      ],
      consensusHash: Uint8Array [
        32
      ],
      dataHash: Uint8Array [
        43
      ],
      evidenceHash: Uint8Array [
        107
      ],
      lastCommitHash: Uint8Array [
        191
      ],
      lastResultsHash: Uint8Array [
        102
      ],
      nextValidatorsHash: Uint8Array [
        16
      ],
      validatorsHash: Uint8Array [
        86
      ],
      version: {
        Block: 76611,
        App: 9422
      },
      lastBlockId: {
        hash: 'd7c5f6d4012acb927429fd7fef37fa123a422596',
        partsHeader: {
          total: undefined,
          hash: '4abfd9c3db998bd0cb8e51417f240daa60de7c30'
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
  code: 40,
  info: {
    id: 'Handcrafted Steel Fish',
    network: 'feed',
    moniker: 'optimize',
    consensusVersion: 'China',
    synced: undefined,
    appHash: 'e0baf8c6249fc475d79ab59d52cb0a7cf29e61ea',
    blockHash: Uint8Array [
      251
    ],
    blockHeight: 87211,
    blockTime: '2019-04-22T10:12:28.560Z',
    address: 'e57791e7d405221dce1e253f22b7e74eaa202960',
    votingPower: 16281,
    totalTxs: 86835,
    version: 'Integrated',
    dataVersion: 'Concrete',
    forgeAppsVersion: {
      'Money Market Account': 'SMS'
    },
    supportedTxs: [
      'Practical',
      'Cotton'
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
  code: 11,
  config: 'Papua New Guinea'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Ergonomic',
    'challenge'
  ],
  height: 75076
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  state: {
    address: '1eff9d137ac0302ec117031946760903ab3b445c',
    consensus: {
      maxBytes: 23505,
      maxGas: 60090,
      maxValidators: 1615,
      maxCandidates: 55414,
      pubKeyTypes: [
        'focus group',
        'technologies'
      ],
      validators: [
        {
          address: '0478bc230f99dfc35364bc34d157a69058fea2c4',
          power: 13707
        },
        {
          address: '48eca8f37a438275f4db70c50fd1d1a98dd2fc0d',
          power: 1532
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '39005': {
        item: [
          {
            type: 1,
            dataHash: 'Accounts',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 4,
            dataHash: 'TCP',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '90581': {
        totalStakes: '17322',
        totalUnstakes: '82660',
        context: {
          genesisTx: 'Montserrat',
          renaissanceTx: 'Tonga',
          genesisTime: '2019-04-22T10:12:28.562Z',
          renaissanceTime: '2019-04-22T10:12:28.562Z'
        }
      }
    },
    version: 'Granite',
    dataVersion: 'Regional',
    forgeAppHash: Uint8Array [
      65
    ],
    token: {
      name: 'TCP',
      symbol: 'International',
      unit: 'Unbranded Soft Computer',
      description: 'Compatible',
      icon: Uint8Array [
        163
      ],
      decimal: 59787,
      initialSupply: 87602,
      totalSupply: 35219,
      inflationRate: 33462
    },
    txConfig: {
      maxAssetSize: 38025,
      maxListSize: 42096,
      maxMultisig: 3019,
      minimumStake: 12538
    },
    stakeConfig: {
      timeoutGeneral: 84634,
      timeoutStakeForNode: 21118
    },
    pokeConfig: {
      address: '08b4e8883c5844e2c2513bd38e2140123636990d',
      dailyLimit: 70806,
      balance: 67596,
      amount: 56443
    },
    protocols: [
      {
        name: 'local',
        address: '42e564a659b91babece31429004735dd9192782d'
      },
      {
        name: 'frame',
        address: '8b0341afe28c8099c9e408d7b0097627427474ed'
      }
    ],
    upgradeInfo: {
      height: 22305,
      version: 'blockchains'
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
    startDate: 'Handcrafted',
    endDate: 'Mission'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  forgeStats: {
    numBlocks: [
      42879,
      62218
    ],
    numTxs: [
      40586,
      80876
    ],
    numStakes: [
      '18594',
      '21414'
    ],
    numValidators: [
      46617,
      38205
    ],
    numAccountMigrateTxs: [
      45472,
      96582
    ],
    numCreateAssetTxs: [
      80188,
      29876
    ],
    numConsensusUpgradeTxs: [
      42092,
      27050
    ],
    numDeclareTxs: [
      10202,
      76016
    ],
    numDeclareFileTxs: [
      84777,
      74586
    ],
    numExchangeTxs: [
      22731,
      9725
    ],
    numStakeTxs: [
      72687,
      13439
    ],
    numSysUpgradeTxs: [
      29385,
      94193
    ],
    numTransferTxs: [
      14543,
      51064
    ],
    numUpdateAssetTxs: [
      78476,
      68766
    ],
    numConsumeAssetTxs: [
      27811,
      62131
    ],
    numPokeTxs: [
      35466,
      33955
    ],
    tps: [
      40117,
      57768
    ],
    maxTps: 96756,
    avgTps: 80766,
    avgBlockTime: 648.66
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
  code: 39,
  healthStatus: {
    consensus: {
      health: undefined,
      synced: undefined,
      blockHeight: 857
    },
    network: {
      health: undefined,
      numPeers: 60248
    },
    storage: {
      health: undefined,
      indexerServer: 'override',
      stateDb: 'Tasty Rubber Chicken',
      diskSpace: {
        forgeUsage: 'District',
        total: 'Avon'
      }
    },
    forge: {
      health: undefined,
      abiServer: 'e-tailers',
      forgeWeb: 'Awesome',
      abciServer: {
        abciConsensus: 'best-of-breed',
        abciInfo: 'Bedfordshire'
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
  code: 38,
  netInfo: {
    listening: undefined,
    listeners: [
      'payment',
      'payment'
    ],
    nPeers: 87036,
    peers: [
      {
        id: 'override',
        network: 'Internal',
        consensusVersion: 'Tactics',
        moniker: 'Ergonomic',
        ip: 'transmitting',
        geoInfo: {
          city: 'EXE',
          country: 'Bahraini Dinar',
          latitude: 35260.4,
          longitude: 42655.37
        }
      },
      {
        id: 'black',
        network: 'transmitter',
        consensusVersion: 'dot-com',
        moniker: 'web-enabled',
        ip: 'Netherlands',
        geoInfo: {
          city: 'connect',
          country: 'initiatives',
          latitude: 21354.06,
          longitude: 25229.34
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
  code: 34,
  info: {
    id: 'Chicken',
    network: 'Functionality',
    moniker: 'Representative',
    consensusVersion: 'monitor',
    synced: undefined,
    appHash: '0c524645f035e72b080006f16596465d58d3969a',
    blockHash: Uint8Array [
      118
    ],
    blockHeight: 70774,
    blockTime: '2019-04-22T10:12:28.564Z',
    address: '4c876641d0ddea1c70b3dd25e990893396b100cb',
    votingPower: 27003,
    totalTxs: 94177,
    version: 'Intranet',
    dataVersion: 'Philippines',
    forgeAppsVersion: {
      Guinea: 'Latvia'
    },
    supportedTxs: [
      'Glens',
      'Circle'
    ],
    ip: 'Brand',
    geoInfo: {
      city: 'Metal',
      country: 'Central',
      latitude: 25542.15,
      longitude: 13863.82
    },
    p2pAddress: 'Avon'
  }
}
});
```

### getProtocolState

```js
const stream = client.getProtocolState({
  address: 'c1644e5add15cc910690be029fdfc76182b04ea5',
  keys: [
    'brand',
    'repurpose'
  ],
  height: 8110
});

// output
{
  code: 27,
  state: {
    address: 'efc3b6c3f1d04de49bd131b4efe77cc33bb6e21e',
    name: 'connecting',
    version: 9603,
    description: 'connect',
    txHash: 'f76866c8260a8d635bb1e500b7f23c4d7ee60944',
    rootHash: Uint8Array [
      158
    ],
    status: 2,
    migratedTo: [
      'Graphic Interface',
      'Concrete'
    ],
    migratedFrom: [
      'Lake',
      'Handcrafted'
    ],
    context: {
      genesisTx: 'innovate',
      renaissanceTx: 'Incredible Fresh Ball',
      genesisTime: '2019-04-22T10:12:28.564Z',
      renaissanceTime: '2019-04-22T10:12:28.564Z'
    },
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    }
  }
}
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '1eb37d8e7a2b9a3c3f3479f64ca07792c414fb97',
  keys: [
    'Clothing',
    'Berkshire'
  ],
  height: 83417
});

// output
{
  code: 21,
  state: {
    address: '42abc5bb07a55be533aae2b27e434ede78ffdfda',
    from: '0b4b006618ea0901acc8cb832699642734d3dfbc',
    to: '51e88d12017cb6a5cdfb3f28be2ad5f09d12ff2c',
    balance: '95680',
    message: 'Consultant',
    context: {
      genesisTx: 'Ergonomic',
      renaissanceTx: 'back-end',
      genesisTime: '2019-04-22T10:12:28.564Z',
      renaissanceTime: '2019-04-22T10:12:28.564Z'
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
  hash: '9c18f6e3259422b0b3188997fbc77881d5992bee'
});

// output
{
  code: 34,
  info: {
    tx: {
      from: 'be63ea05aaebae27d91444f06810c44a204e35c9',
      nonce: 58609,
      chainId: 'Platinum',
      pk: Uint8Array [
        82
      ],
      signature: Uint8Array [
        150
      ],
      signatures: [
        {
          signer: 'Unbranded',
          pk: Uint8Array [
            116
          ],
          signature: Uint8Array [
            224
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Credit Card Account',
          pk: Uint8Array [
            177
          ],
          signature: Uint8Array [
            252
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
    height: 67070,
    index: 511,
    hash: '659337f21dd196e5f34ae226fefc9af4a4edc175',
    tags: [
      {
        key: Uint8Array [
          215
        ],
        value: Uint8Array [
          158
        ]
      },
      {
        key: Uint8Array [
          214
        ],
        value: Uint8Array [
          111
        ]
      }
    ],
    code: 22,
    time: '2019-04-22T10:12:28.565Z',
    createAsset: {
      asset: 'Metrics'
    },
    accountMigrate: {
      address: 'e23cd403bca357aca4120e6653d9e376346bb4c2'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  paging: {
    cursor: 'feed',
    size: 17323,
    order: [
      {
        field: 'Papua New Guinea',
        type: 'Field'
      },
      {
        field: 'reciprocal',
        type: 'Missouri'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'AGP',
    next: undefined,
    total: 17534
  },
  unconfirmedTxs: {
    nTxs: 74551,
    txs: [
      {
        from: '4551f2ad604844364fffbe5c93c9a80a3ef6bda4',
        nonce: 18290,
        chainId: 'payment',
        pk: Uint8Array [
          8
        ],
        signature: Uint8Array [
          91
        ],
        signatures: [
          {
            signer: 'Director',
            pk: Uint8Array [
              112
            ],
            signature: Uint8Array [
              142
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Outdoors',
            pk: Uint8Array [
              200
            ],
            signature: Uint8Array [
              74
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
        from: 'fafe16416c4236f25fbcbc4377e1d088b8d5d4d8',
        nonce: 8338,
        chainId: 'Panama',
        pk: Uint8Array [
          166
        ],
        signature: Uint8Array [
          255
        ],
        signatures: [
          {
            signer: 'SDD',
            pk: Uint8Array [
              213
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
            signer: 'black',
            pk: Uint8Array [
              168
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
  code: 30,
  validatorsInfo: {
    blockHeight: 34001,
    validators: [
      {
        address: '7fa4577f4c1ffec8b6948f6d66a4ef02af7f7c8b',
        pubKey: {
          type: 'Corporate',
          data: Uint8Array [
            77
          ]
        },
        votingPower: 1678,
        proposerPriority: 'Up-sized',
        name: 'Alaska',
        geoInfo: {
          city: 'Alaska',
          country: 'Iranian Rial',
          latitude: 47576.7,
          longitude: 30860.1
        }
      },
      {
        address: 'f422372a38c9adc6442dda47d45e8e0ec9350a11',
        pubKey: {
          type: 'Shirt',
          data: Uint8Array [
            39
          ]
        },
        votingPower: 67593,
        proposerPriority: 'Savings Account',
        name: 'markets',
        geoInfo: {
          city: 'Vermont',
          country: 'middleware',
          latitude: 88193.71,
          longitude: 23303.46
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
  ownerAddress: 'applications'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  account: {
    address: '26c20e82e666d1d047a04fc41a6655d0016c56e7',
    balance: '26460',
    numAssets: 25976,
    numTxs: 10890,
    nonce: 46963,
    genesisTime: 'Strategist',
    renaissanceTime: 'technologies',
    moniker: 'Fantastic Metal Gloves',
    migratedFrom: 'Money Market Account',
    migratedTo: 'Creative',
    totalReceivedStakes: '82612',
    totalStakes: '24799',
    totalUnstakes: '4234',
    recentNumTxs: [
      42529,
      7519
    ]
  }
}
});
```

### listAssetTransactions

```js
const result = await client.listAssetTransactions({
  paging: {
    cursor: 'Savings Account',
    size: 94421,
    order: [
      {
        field: 'Home Loan Account',
        type: 'Soft'
      },
      {
        field: 'synthesizing',
        type: 'programming'
      }
    ]
  },
  address: '661483e921bcc9f7198ba61b5f33a74960532d29'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  page: {
    cursor: 'red',
    next: undefined,
    total: 50862
  },
  transactions: [
    {
      hash: '4e674dac68b2e3c126d442e43c32870e9a2faa26',
      sender: 'Granite',
      receiver: 'SDD',
      time: 'protocol',
      type: 'Gloves',
      tx: {
        from: 'b943f82f7a5017c646364e18363ccb696168f8ef',
        nonce: 83287,
        chainId: 'Intelligent',
        pk: Uint8Array [
          236
        ],
        signature: Uint8Array [
          223
        ],
        signatures: [
          {
            signer: 'Isle',
            pk: Uint8Array [
              176
            ],
            signature: Uint8Array [
              216
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Dynamic',
            pk: Uint8Array [
              215
            ],
            signature: Uint8Array [
              247
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
      code: 30
    },
    {
      hash: 'a7e44c0e37b3d8b227d4f70f3ff5e346cc6fab91',
      sender: 'interface',
      receiver: 'cohesive',
      time: 'Maryland',
      type: 'capacitor',
      tx: {
        from: '58f83bcdd2f7811979befb2d254cf73e79a3a892',
        nonce: 92513,
        chainId: 'Indiana',
        pk: Uint8Array [
          31
        ],
        signature: Uint8Array [
          43
        ],
        signatures: [
          {
            signer: 'Rubber',
            pk: Uint8Array [
              29
            ],
            signature: Uint8Array [
              225
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Ball',
            pk: Uint8Array [
              109
            ],
            signature: Uint8Array [
              216
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
      code: 27
    }
  ]
}
});
```

### listAssets

```js
const result = await client.listAssets({
  paging: {
    cursor: 'disintermediate',
    size: 57378,
    order: [
      {
        field: 'Generic',
        type: 'Florida'
      },
      {
        field: 'payment',
        type: 'Advanced'
      }
    ]
  },
  ownerAddress: 'executive'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'Bedfordshire',
    next: undefined,
    total: 7045
  },
  assets: [
    {
      address: 'ee27befa70819f19f2b89634ba6fd4461f671250',
      owner: 'Pine',
      genesisTime: 'Ergonomic',
      renaissanceTime: 'Networked',
      moniker: 'engineer',
      readonly: undefined
    },
    {
      address: '415e796b2cec2b8f8bbd5329e8784056cc1f2ee5',
      owner: 'Skyway',
      genesisTime: 'Enhanced',
      renaissanceTime: 'Generic Concrete Chair',
      moniker: 'Pizza',
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
    cursor: 'Trail',
    size: 89291,
    order: [
      {
        field: 'Incredible Granite Gloves',
        type: 'Avon'
      },
      {
        field: 'Kwanza',
        type: 'blockchains'
      }
    ]
  },
  proposer: '828881cec308bcfe560c9c33d02aa37f90ee3c28',
  timeFilter: {
    startDateTime: 'Multi-channelled',
    endDateTime: 'Associate'
  },
  heightFilter: {
    from: '3c2db9d866c21419803ab0e950b2377be4dc572c',
    to: '37181ca1bcc04ee732d0cc77356c00fdd3eb1a55'
  },
  numTxsFilter: {
    from: 'd8fe6d1a9587336fa8f141cdc1ced5cc538fad3f',
    to: '64e14f5ab3c4a8a497a002838c5c2a173c1cf64c'
  },
  numInvalidTxsFilter: {
    from: '64a8c9a15518dc4cdd31e39f3e1c403dbb0b50a5',
    to: '13d8da5d9f3b4fd17deaf5682c14d6d0c4b3495c'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  page: {
    cursor: 'Data',
    next: undefined,
    total: 44385
  },
  blocks: [
    {
      height: 14873,
      time: 'Incredible',
      proposer: '51b6e05da74ed30fb094da53c59f20b80321fcd1',
      numTxs: 59891,
      numInvalidTxs: 79764
    },
    {
      height: 88033,
      time: 'synergistic',
      proposer: '1bfa11387d9bd873a987d29082caaf80e1f06149',
      numTxs: 79284,
      numInvalidTxs: 9895
    }
  ]
}
});
```

### listStakes

```js
const result = await client.listStakes({
  paging: {
    cursor: 'Buckinghamshire',
    size: 18085,
    order: [
      {
        field: 'Checking Account',
        type: 'Handcrafted'
      },
      {
        field: 'bypass',
        type: 'experiences'
      }
    ]
  },
  addressFilter: {
    sender: 'Latvian Lats',
    receiver: 'Reactive',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  page: {
    cursor: 'users',
    next: undefined,
    total: 56955
  },
  stakes: [
    {
      address: 'a8f31f465e889bcd412bf26f95d674c8a86ee285',
      balance: '75421',
      sender: 'connect',
      receiver: 'Configurable',
      genesisTime: 'cutting-edge',
      renaissanceTime: 'North Dakota',
      message: 'Associate',
      type: 45301
    },
    {
      address: '617bfaccc383e1ac868a6fcd576ab806353e4f19',
      balance: '39910',
      sender: 'Analyst',
      receiver: 'Steel',
      genesisTime: 'Generic',
      renaissanceTime: 'stable',
      message: 'Home Loan Account',
      type: 40287
    }
  ]
}
});
```

### listTopAccounts

```js
const result = await client.listTopAccounts({
  paging: {
    cursor: 'azure',
    size: 69468,
    order: [
      {
        field: 'scalable',
        type: 'Hat'
      },
      {
        field: 'revolutionize',
        type: 'content'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1,
  page: {
    cursor: 'Kuwaiti Dinar',
    next: undefined,
    total: 48040
  },
  accounts: [
    {
      address: '02ceddd2caadc9075e9edc645d78c5d227a3dc13',
      balance: '36464',
      numAssets: 23300,
      numTxs: 46201,
      nonce: 12058,
      genesisTime: 'indigo',
      renaissanceTime: 'Refined Frozen Car',
      moniker: 'visionary',
      migratedFrom: 'Serbian Dinar',
      migratedTo: 'Infrastructure',
      totalReceivedStakes: '6818',
      totalStakes: '68852',
      totalUnstakes: '6759',
      recentNumTxs: [
        82359,
        58666
      ]
    },
    {
      address: '12610e2ef5575d93a120328624afb0f6a9351e05',
      balance: '22907',
      numAssets: 28614,
      numTxs: 49626,
      nonce: 33424,
      genesisTime: 'Granite',
      renaissanceTime: 'functionalities',
      moniker: 'action-items',
      migratedFrom: 'FTP',
      migratedTo: 'Pitcairn Islands',
      totalReceivedStakes: '94655',
      totalStakes: '56840',
      totalUnstakes: '12131',
      recentNumTxs: [
        24273,
        23613
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
    cursor: 'turquoise',
    size: 74923,
    order: [
      {
        field: 'Track',
        type: 'Analyst'
      },
      {
        field: 'virtual',
        type: 'contextually-based'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Investor',
    endDateTime: 'Borders'
  },
  addressFilter: {
    sender: 'wireless',
    receiver: 'seamless',
    direction: 1
  },
  typeFilter: {
    types: [
      'digital',
      'synthesize'
    ]
  },
  validityFilter: {
    validity: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  page: {
    cursor: 'maximize',
    next: undefined,
    total: 81456
  },
  transactions: [
    {
      hash: '9a08e9c8de4838c8edaf82b8bf038a36d8af8074',
      sender: 'Global',
      receiver: 'Ball',
      time: 'rich',
      type: 'Lempira',
      tx: {
        from: '9245a2b3c7b2980a4e85e6736baf46972a21724f',
        nonce: 21996,
        chainId: 'reboot',
        pk: Uint8Array [
          144
        ],
        signature: Uint8Array [
          159
        ],
        signatures: [
          {
            signer: 'Gorgeous Steel Car',
            pk: Uint8Array [
              125
            ],
            signature: Uint8Array [
              53
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'withdrawal',
            pk: Uint8Array [
              124
            ],
            signature: Uint8Array [
              37
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
      code: 33
    },
    {
      hash: '1cd295817a6f5b9c1a4e87bdfd4aaad669d4c12b',
      sender: 'transmitting',
      receiver: 'Soap',
      time: 'wireless',
      type: 'Plastic',
      tx: {
        from: 'cc9c99a60c04ea777e100225e04c1b40b334cb9a',
        nonce: 87034,
        chainId: 'Cambridgeshire',
        pk: Uint8Array [
          217
        ],
        signature: Uint8Array [
          83
        ],
        signatures: [
          {
            signer: 'Electronics',
            pk: Uint8Array [
              8
            ],
            signature: Uint8Array [
              145
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Louisiana',
            pk: Uint8Array [
              215
            ],
            signature: Uint8Array [
              118
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
      code: 10
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
  code: 4,
  address: '691f896d8416835e49ebf19aad4a385272401017'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '01a9fae2979750fce5e18068c8d8e55f2c0d5ee1'
});

// output
{
  code: 9,
  chunk: Uint8Array [
    209
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'a96cb92c4fa8a2013706eae8fff4ee0376033421',
  passphrase: 'Malta'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  token: 'Drives',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      19
    ],
    pk: Uint8Array [
      143
    ],
    address: '1a2ebd82a8703cf7f1898e32c09b37bc043e875a'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '964b9822a013149adf82526ea67a7e9088058078',
    nonce: 49777,
    chainId: 'Directives',
    pk: Uint8Array [
      12
    ],
    signature: Uint8Array [
      248
    ],
    signatures: [
      {
        signer: 'primary',
        pk: Uint8Array [
          61
        ],
        signature: Uint8Array [
          95
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'silver',
        pk: Uint8Array [
          25
        ],
        signature: Uint8Array [
          243
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
      pk: 1,
      hash: 2,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      160
    ],
    pk: Uint8Array [
      245
    ],
    address: '140b25ca3af45f4c4464e1dbdb4f6d0edb470d52'
  },
  token: 'Fantastic Cotton Gloves'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  tx: {
    from: 'd95a8b00d21468db9a18b99cd9e0a018f9b658da',
    nonce: 21054,
    chainId: 'Buckinghamshire',
    pk: Uint8Array [
      153
    ],
    signature: Uint8Array [
      27
    ],
    signatures: [
      {
        signer: 'brand',
        pk: Uint8Array [
          68
        ],
        signature: Uint8Array [
          26
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Computers',
        pk: Uint8Array [
          253
        ],
        signature: Uint8Array [
          10
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
  hash: 'c3e19f09ce66a09045b5d17ecfbb9ce1655aa085'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '3990860ecbd849574b0b9ea5dfb1253937bf27cd',
      nonce: 69480,
      chainId: 'Direct',
      pk: Uint8Array [
        254
      ],
      signature: Uint8Array [
        213
      ],
      signatures: [
        {
          signer: 'Intelligent Wooden Chicken',
          pk: Uint8Array [
            219
          ],
          signature: Uint8Array [
            8
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Directives',
          pk: Uint8Array [
            211
          ],
          signature: Uint8Array [
            244
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
        balance: '45464',
        nonce: 62205,
        numTxs: 41785,
        address: '5faaa69774d899069c933fb968992cac88561579',
        pk: Uint8Array [
          212
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 0,
          role: 4
        },
        moniker: 'payment',
        context: {
          genesisTx: 'Small',
          renaissanceTx: 'Maryland',
          genesisTime: '2019-04-22T10:12:28.571Z',
          renaissanceTime: '2019-04-22T10:12:28.571Z'
        },
        issuer: 'primary',
        migratedTo: [
          'benchmark',
          'Finland'
        ],
        migratedFrom: [
          'Auto Loan Account',
          'hack'
        ],
        numAssets: 16414,
        stake: {
          totalStakes: '86253',
          totalUnstakes: '48921',
          totalReceivedStakes: '14360',
          recentStakes: {
            items: [
              Uint8Array [
                89
              ],
              Uint8Array [
                166
              ]
            ],
            typeUrl: 'circuit',
            maxItems: 54888,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                186
              ],
              Uint8Array [
                160
              ]
            ],
            typeUrl: 'hacking',
            maxItems: 76924,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              207
            ],
            Uint8Array [
              44
            ]
          ],
          typeUrl: 'Wells',
          maxItems: 62412,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '79633',
          leftover: '4648',
          amount: '93516'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '68251',
        nonce: 26444,
        numTxs: 71148,
        address: 'cfdad5799ddf8090d0b209c065db34931e49d274',
        pk: Uint8Array [
          98
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 3
        },
        moniker: 'Sausages',
        context: {
          genesisTx: 'pixel',
          renaissanceTx: 'withdrawal',
          genesisTime: '2019-04-22T10:12:28.572Z',
          renaissanceTime: '2019-04-22T10:12:28.572Z'
        },
        issuer: 'Borders',
        migratedTo: [
          'real-time',
          'implement'
        ],
        migratedFrom: [
          'zero defect',
          'Cotton'
        ],
        numAssets: 8654,
        stake: {
          totalStakes: '4484',
          totalUnstakes: '80104',
          totalReceivedStakes: '97828',
          recentStakes: {
            items: [
              Uint8Array [
                207
              ],
              Uint8Array [
                15
              ]
            ],
            typeUrl: 'payment',
            maxItems: 31554,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                56
              ],
              Uint8Array [
                74
              ]
            ],
            typeUrl: 'Markets',
            maxItems: 84173,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              3
            ],
            Uint8Array [
              118
            ]
          ],
          typeUrl: 'methodologies',
          maxItems: 65496,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '85024',
          leftover: '95574',
          amount: '6687'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'aa3963fe786c9a255b2900b6f7347d248d4eedd0',
        owner: 'EXE',
        moniker: 'Practical',
        readonly: undefined,
        transferrable: undefined,
        ttl: 19428,
        consumedTime: '2019-04-22T10:12:28.572Z',
        issuer: 'Intelligent Steel Soap',
        stake: {
          totalStakes: '82703',
          totalUnstakes: '42045',
          totalReceivedStakes: '47296',
          recentStakes: {
            items: [
              Uint8Array [
                39
              ],
              Uint8Array [
                89
              ]
            ],
            typeUrl: 'Technician',
            maxItems: 31406,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                173
              ],
              Uint8Array [
                108
              ]
            ],
            typeUrl: 'communities',
            maxItems: 42557,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Credit Card Account',
          renaissanceTx: 'Egyptian Pound',
          genesisTime: '2019-04-22T10:12:28.572Z',
          renaissanceTime: '2019-04-22T10:12:28.572Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'a850e143669d17e39b54cb0bf33d1fbe76354e8c',
        owner: 'Savings Account',
        moniker: 'payment',
        readonly: undefined,
        transferrable: undefined,
        ttl: 48125,
        consumedTime: '2019-04-22T10:12:28.572Z',
        issuer: 'Configurable',
        stake: {
          totalStakes: '98512',
          totalUnstakes: '83600',
          totalReceivedStakes: '82364',
          recentStakes: {
            items: [
              Uint8Array [
                248
              ],
              Uint8Array [
                18
              ]
            ],
            typeUrl: 'Concrete',
            maxItems: 74146,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                243
              ],
              Uint8Array [
                191
              ]
            ],
            typeUrl: 'Soft',
            maxItems: 35630,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Bridge',
          renaissanceTx: 'Intelligent',
          genesisTime: '2019-04-22T10:12:28.572Z',
          renaissanceTime: '2019-04-22T10:12:28.572Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'f0a42d0c0cc814d64188ececc9bf618d62c7d72a',
        from: 'cc22ae894f30d9699f20cd4b2a503bdbc59bf28b',
        to: 'b8ee0827af71b997673de3d26390502210cd82ea',
        balance: '67086',
        message: 'intuitive',
        context: {
          genesisTx: 'dynamic',
          renaissanceTx: 'Licensed Frozen Pizza',
          genesisTime: '2019-04-22T10:12:28.573Z',
          renaissanceTime: '2019-04-22T10:12:28.573Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'aa23cafa91f0c44cecf30855e9ff351d7d75b361',
        from: 'b8dc51ab9e9d6f3e8ca0421d21fc20c17302d576',
        to: '601a9ef4365a4a36bde3262f3461949e6578c773',
        balance: '37173',
        message: 'Cambridgeshire',
        context: {
          genesisTx: 'Illinois',
          renaissanceTx: 'Brand',
          genesisTime: '2019-04-22T10:12:28.573Z',
          renaissanceTime: '2019-04-22T10:12:28.573Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '4795f07797ed11dc44cfdd32e06a1e2a20b75ca9',
      blockHeight: 86524,
      blockTime: '2019-04-22T10:12:28.573Z',
      totalTxs: 23666,
      txStatistics: {
        numAccountMigrateTxs: 28347,
        numCreateAssetTxs: 72367,
        numConsensusUpgradeTxs: 14219,
        numDeclareTxs: 14676,
        numDeclareFileTxs: 97985,
        numExchangeTxs: 72836,
        numStakeTxs: 20477,
        numSysUpgradeTxs: 94849,
        numTransferTxs: 52673,
        numUpdateAssetTxs: 37804,
        numConsumeAssetTxs: 41800,
        numPokeTxs: 81715
      },
      txIndex: 75605,
      lastBlockTime: '2019-04-22T10:12:28.573Z'
    },
    appState: {
      address: '91ecb86fb7215a45368ef97ad64e9375db22142c',
      consensus: {
        maxBytes: 38020,
        maxGas: 65697,
        maxValidators: 99788,
        maxCandidates: 68489,
        pubKeyTypes: [
          'deliver',
          'contextually-based'
        ],
        validators: [
          {
            address: '6f0ccd2e6085e4e2019ac2bb6947ad8b77e23528',
            power: 7765
          },
          {
            address: 'cb0bf0ff6323857cdd0d20168e8217430932b3ac',
            power: 61288
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '50099': {
          item: [
            {
              type: 11,
              dataHash: 'Salad',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'fuchsia',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '39623': {
          totalStakes: '30942',
          totalUnstakes: '52079',
          context: {
            genesisTx: 'Granite',
            renaissanceTx: 'encryption',
            genesisTime: '2019-04-22T10:12:28.573Z',
            renaissanceTime: '2019-04-22T10:12:28.573Z'
          }
        }
      },
      version: 'Mobility',
      dataVersion: 'Rustic',
      forgeAppHash: Uint8Array [
        53
      ],
      token: {
        name: 'Portugal',
        symbol: 'Cheese',
        unit: 'efficient',
        description: 'Manager',
        icon: Uint8Array [
          106
        ],
        decimal: 69348,
        initialSupply: 75044,
        totalSupply: 46673,
        inflationRate: 29482
      },
      txConfig: {
        maxAssetSize: 34168,
        maxListSize: 92443,
        maxMultisig: 35860,
        minimumStake: 54906
      },
      stakeConfig: {
        timeoutGeneral: 92039,
        timeoutStakeForNode: 4933
      },
      pokeConfig: {
        address: '867ea6c3e3ef8ce7663ee2c5940ca95742478c71',
        dailyLimit: 84328,
        balance: 83872,
        amount: 16150
      },
      protocols: [
        {
          name: 'PNG',
          address: '13907d31cd629d87cd5686221a514ea2b60c0b0a'
        },
        {
          name: 'Bedfordshire',
          address: '0496ade1885dc087b7adae2f9c89b9b502853840'
        }
      ],
      upgradeInfo: {
        height: 27348,
        version: 'Borders'
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
    code: 31
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'd8d53bb78ad01577081c72c7ca0a6d0f10037c8b',
      nonce: 19163,
      chainId: 'generating',
      pk: Uint8Array [
        130
      ],
      signature: Uint8Array [
        205
      ],
      signatures: [
        {
          signer: 'Versatile',
          pk: Uint8Array [
            246
          ],
          signature: Uint8Array [
            60
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Home Loan Account',
          pk: Uint8Array [
            153
          ],
          signature: Uint8Array [
            88
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
        balance: '70953',
        nonce: 98429,
        numTxs: 23766,
        address: '2d3a1167ccbcc305f2952cc0022e3649e3621162',
        pk: Uint8Array [
          197
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 0,
          role: 3
        },
        moniker: 'Iowa',
        context: {
          genesisTx: 'Frozen',
          renaissanceTx: 'HTTP',
          genesisTime: '2019-04-22T10:12:28.574Z',
          renaissanceTime: '2019-04-22T10:12:28.574Z'
        },
        issuer: 'Small',
        migratedTo: [
          'overriding',
          'holistic'
        ],
        migratedFrom: [
          '4th generation',
          'open-source'
        ],
        numAssets: 89206,
        stake: {
          totalStakes: '51255',
          totalUnstakes: '70409',
          totalReceivedStakes: '39255',
          recentStakes: {
            items: [
              Uint8Array [
                187
              ],
              Uint8Array [
                205
              ]
            ],
            typeUrl: 'Missouri',
            maxItems: 84636,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                219
              ],
              Uint8Array [
                105
              ]
            ],
            typeUrl: 'deposit',
            maxItems: 52345,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              214
            ],
            Uint8Array [
              238
            ]
          ],
          typeUrl: 'Open-architected',
          maxItems: 28460,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '23847',
          leftover: '80552',
          amount: '17212'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '85259',
        nonce: 38629,
        numTxs: 59174,
        address: '9ab1b705c2b6e7c2d0281e24e98e013582fa79a1',
        pk: Uint8Array [
          166
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 8
        },
        moniker: 'turquoise',
        context: {
          genesisTx: 'paradigms',
          renaissanceTx: 'transmitting',
          genesisTime: '2019-04-22T10:12:28.574Z',
          renaissanceTime: '2019-04-22T10:12:28.574Z'
        },
        issuer: 'fuchsia',
        migratedTo: [
          'e-commerce',
          'pricing structure'
        ],
        migratedFrom: [
          'benchmark',
          'haptic'
        ],
        numAssets: 70876,
        stake: {
          totalStakes: '27734',
          totalUnstakes: '11001',
          totalReceivedStakes: '71336',
          recentStakes: {
            items: [
              Uint8Array [
                129
              ],
              Uint8Array [
                126
              ]
            ],
            typeUrl: 'synthesize',
            maxItems: 37922,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                26
              ],
              Uint8Array [
                139
              ]
            ],
            typeUrl: 'transmit',
            maxItems: 62904,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              130
            ],
            Uint8Array [
              206
            ]
          ],
          typeUrl: 'Investment Account',
          maxItems: 36998,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '22703',
          leftover: '17676',
          amount: '25798'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '6b8d2bc21c3444d13db54d6311e76533bc166573',
        owner: 'Digitized',
        moniker: 'Auto Loan Account',
        readonly: undefined,
        transferrable: undefined,
        ttl: 52681,
        consumedTime: '2019-04-22T10:12:28.575Z',
        issuer: 'Rustic Plastic Chips',
        stake: {
          totalStakes: '55643',
          totalUnstakes: '49989',
          totalReceivedStakes: '13908',
          recentStakes: {
            items: [
              Uint8Array [
                122
              ],
              Uint8Array [
                118
              ]
            ],
            typeUrl: 'withdrawal',
            maxItems: 28563,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                171
              ],
              Uint8Array [
                135
              ]
            ],
            typeUrl: 'Future',
            maxItems: 59701,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'compress',
          renaissanceTx: 'Mountains',
          genesisTime: '2019-04-22T10:12:28.575Z',
          renaissanceTime: '2019-04-22T10:12:28.575Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '406eaa8a1b28e94b8233322d37c3411b9daebe15',
        owner: 'Supervisor',
        moniker: 'Salad',
        readonly: undefined,
        transferrable: undefined,
        ttl: 92233,
        consumedTime: '2019-04-22T10:12:28.575Z',
        issuer: 'silver',
        stake: {
          totalStakes: '54003',
          totalUnstakes: '54067',
          totalReceivedStakes: '62261',
          recentStakes: {
            items: [
              Uint8Array [
                230
              ],
              Uint8Array [
                83
              ]
            ],
            typeUrl: 'killer',
            maxItems: 50444,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                96
              ],
              Uint8Array [
                112
              ]
            ],
            typeUrl: 'Crossroad',
            maxItems: 1006,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'intranet',
          renaissanceTx: 'Turnpike',
          genesisTime: '2019-04-22T10:12:28.575Z',
          renaissanceTime: '2019-04-22T10:12:28.575Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'd7da561c1f7d0ecbd7a0c0ff53d6be8ec6bd0b82',
        from: '935b0414266d29d747be4a9f07f8cbf5326b008c',
        to: '2ceebcdfcc397c2a0d5fa7948d8b8d5f08e66a4d',
        balance: '3584',
        message: 'hub',
        context: {
          genesisTx: 'Communications',
          renaissanceTx: 'Metal',
          genesisTime: '2019-04-22T10:12:28.575Z',
          renaissanceTime: '2019-04-22T10:12:28.575Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'a400ceb004d8cfb99134d3f5cc7a242cb659f96e',
        from: 'b92e393ad3fb6ef521cb15c1c98c4563e80541a2',
        to: 'fdb865975fb656ed10cc577c34a67d6bbf40bf94',
        balance: '33314',
        message: 'HTTP',
        context: {
          genesisTx: 'Baby',
          renaissanceTx: 'Fresh',
          genesisTime: '2019-04-22T10:12:28.575Z',
          renaissanceTime: '2019-04-22T10:12:28.575Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'a351ddef2ec4a0e595397debc4d6d6c10920a6cb',
      blockHeight: 37475,
      blockTime: '2019-04-22T10:12:28.575Z',
      totalTxs: 31740,
      txStatistics: {
        numAccountMigrateTxs: 12203,
        numCreateAssetTxs: 45213,
        numConsensusUpgradeTxs: 68565,
        numDeclareTxs: 48355,
        numDeclareFileTxs: 72460,
        numExchangeTxs: 75099,
        numStakeTxs: 78670,
        numSysUpgradeTxs: 16112,
        numTransferTxs: 57582,
        numUpdateAssetTxs: 66636,
        numConsumeAssetTxs: 99421,
        numPokeTxs: 90312
      },
      txIndex: 47657,
      lastBlockTime: '2019-04-22T10:12:28.575Z'
    },
    appState: {
      address: '6be7b4a95bfd701c0ce283e544a05d1dccbb4008',
      consensus: {
        maxBytes: 73551,
        maxGas: 828,
        maxValidators: 33408,
        maxCandidates: 82247,
        pubKeyTypes: [
          'indexing',
          'JSON'
        ],
        validators: [
          {
            address: '1736b19c78dece1468cc8620a9c2211a8cceae9d',
            power: 29855
          },
          {
            address: 'cb59abaa17992aafaa7d18440a17d893247a72df',
            power: 38179
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '6678': {
          item: [
            {
              type: 4,
              dataHash: 'Intelligent',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 4,
              dataHash: 'override',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '62696': {
          totalStakes: '15007',
          totalUnstakes: '15459',
          context: {
            genesisTx: 'Credit Card Account',
            renaissanceTx: 'wireless',
            genesisTime: '2019-04-22T10:12:28.576Z',
            renaissanceTime: '2019-04-22T10:12:28.576Z'
          }
        }
      },
      version: 'copying',
      dataVersion: 'Lead',
      forgeAppHash: Uint8Array [
        115
      ],
      token: {
        name: 'back up',
        symbol: 'Auto Loan Account',
        unit: 'repurpose',
        description: 'Suriname',
        icon: Uint8Array [
          50
        ],
        decimal: 22743,
        initialSupply: 12806,
        totalSupply: 17971,
        inflationRate: 77020
      },
      txConfig: {
        maxAssetSize: 62282,
        maxListSize: 41839,
        maxMultisig: 13351,
        minimumStake: 92500
      },
      stakeConfig: {
        timeoutGeneral: 92925,
        timeoutStakeForNode: 6215
      },
      pokeConfig: {
        address: '53afd8a972fca3360dddfe0dea978f4671590e6c',
        dailyLimit: 3731,
        balance: 64942,
        amount: 88634
      },
      protocols: [
        {
          name: 'best-of-breed',
          address: '4a899aa1af0bcd4e44341fa34004980d924c73cf'
        },
        {
          name: 'Rapids',
          address: '9f4b1327eca14b71e0c238024cf90985ac685ae4'
        }
      ],
      upgradeInfo: {
        height: 40841,
        version: 'Coordinator'
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
    code: 6
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    87
  ],
  type: {
    pk: 0,
    hash: 2,
    address: 1,
    role: 5
  },
  passphrase: 'Unbranded Soft Soap',
  moniker: 'Suriname'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  token: 'Refined',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      146
    ],
    pk: Uint8Array [
      89
    ],
    address: '46f66ba2f84cdf3bdd5181f063556e2d9d2291e4'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '7227275aaa107f3aa2753e96b1f94fdd4a452c35'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35
}
});
```

### search

```js
const result = await client.search({
  key: 'Luxembourg',
  value: 'multi-tasking'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  txs: [
    {
      tx: {
        from: '2b6c2377bb746a64fdd47c46f0bbbd2aa7dbf557',
        nonce: 14981,
        chainId: 'white',
        pk: Uint8Array [
          42
        ],
        signature: Uint8Array [
          45
        ],
        signatures: [
          {
            signer: 'indexing',
            pk: Uint8Array [
              6
            ],
            signature: Uint8Array [
              134
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'input',
            pk: Uint8Array [
              129
            ],
            signature: Uint8Array [
              211
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
      height: 9519,
      index: 62603,
      hash: '24970d539317c3db984a11726ae37b6b1ef8cbee',
      tags: [
        {
          key: Uint8Array [
            247
          ],
          value: Uint8Array [
            243
          ]
        },
        {
          key: Uint8Array [
            233
          ],
          value: Uint8Array [
            18
          ]
        }
      ],
      code: 11,
      time: '2019-04-22T10:12:28.577Z',
      createAsset: {
        asset: 'Graphic Interface'
      },
      accountMigrate: {
        address: '46b49d280237440d4faf915a479acbad6994f150'
      }
    },
    {
      tx: {
        from: 'aeba516f3234c830e6cd5d44ffa74c9ae347c676',
        nonce: 83754,
        chainId: 'Alabama',
        pk: Uint8Array [
          237
        ],
        signature: Uint8Array [
          124
        ],
        signatures: [
          {
            signer: 'mobile',
            pk: Uint8Array [
              206
            ],
            signature: Uint8Array [
              171
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Liaison',
            pk: Uint8Array [
              191
            ],
            signature: Uint8Array [
              164
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
      height: 23553,
      index: 18197,
      hash: '43f994ccd98fa1b04d8c53506e32ba2aa973abb8',
      tags: [
        {
          key: Uint8Array [
            124
          ],
          value: Uint8Array [
            79
          ]
        },
        {
          key: Uint8Array [
            133
          ],
          value: Uint8Array [
            183
          ]
        }
      ],
      code: 22,
      time: '2019-04-22T10:12:28.578Z',
      createAsset: {
        asset: 'sky blue'
      },
      accountMigrate: {
        address: 'b436ad4979ee6de71849f7b9d5f54e37c0e54f3a'
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
    from: 'a110338ab242d4f4981293d0400e7785b2de7efb',
    nonce: 65729,
    chainId: 'Investment Account',
    pk: Uint8Array [
      15
    ],
    signature: Uint8Array [
      14
    ],
    signatures: [
      {
        signer: 'Court',
        pk: Uint8Array [
          46
        ],
        signature: Uint8Array [
          223
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'collaboration',
        pk: Uint8Array [
          238
        ],
        signature: Uint8Array [
          13
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
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      22
    ],
    pk: Uint8Array [
      248
    ],
    address: 'c0e45f5d4a879009afb58a221b390e716622bd09'
  },
  token: 'payment',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  hash: 'f85f23dadee247b9df446d02e8efcba5ba6d3c51'
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    243
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  hash: '8688406245e84b47ee47063a1e2069a4191b7e55'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  topic: 'Front-line',
  filter: 'cultivate'
});

// output
{
  topic: 'Sausages'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'bluetooth'
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
