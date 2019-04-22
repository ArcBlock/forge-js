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
  from: '0c45a581405a14d36e11c3bda7bb699ac13c323f',
  nonce: 33097,
  wallet: {
    type: {
      pk: 0,
      hash: 2,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      192
    ],
    pk: Uint8Array [
      17
    ],
    address: '0f4dfeef48127860a49fee36ef38c1de4291b927'
  },
  token: 'Facilitator'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  tx: {
    from: '23cc4b48d9b948a7f7c1bf33fb2ee2f1b08dbe0c',
    nonce: 38007,
    chainId: 'extend',
    pk: Uint8Array [
      50
    ],
    signature: Uint8Array [
      231
    ],
    signatures: [
      {
        signer: 'Towels',
        pk: Uint8Array [
          57
        ],
        signature: Uint8Array [
          248
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Georgia',
        pk: Uint8Array [
          71
        ],
        signature: Uint8Array [
          191
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
  passphrase: 'Towels',
  type: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 8
  },
  moniker: 'Gorgeous'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  token: 'Georgia',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      87
    ],
    pk: Uint8Array [
      32
    ],
    address: '9df3b6ba87159ddf7f6b4b3511cde8f12abbd34a'
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
      pk: 0,
      hash: 1,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      137
    ],
    pk: Uint8Array [
      212
    ],
    address: '62998a12d83a5c8bed63393caf24cddf717aa979'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '44500323647af06a871827b2ad70b37135414991',
  keys: [
    'salmon',
    'vertical'
  ],
  height: 32038
});

// output
{
  code: 39,
  state: {
    balance: '63719',
    nonce: 32364,
    numTxs: 57111,
    address: '561dc5e5d719ad3fd2376ffeae56792abaafb1b1',
    pk: Uint8Array [
      15
    ],
    type: {
      pk: 0,
      hash: 2,
      address: 0,
      role: 3
    },
    moniker: 'Chief',
    context: {
      genesisTx: 'Soft',
      renaissanceTx: 'orange',
      genesisTime: '2019-04-22T10:23:08.344Z',
      renaissanceTime: '2019-04-22T10:23:08.344Z'
    },
    issuer: 'Technician',
    migratedTo: [
      'Cambridgeshire',
      'Australia'
    ],
    migratedFrom: [
      'Alabama',
      'online'
    ],
    numAssets: 20879,
    stake: {
      totalStakes: '14947',
      totalUnstakes: '84578',
      totalReceivedStakes: '14969',
      recentStakes: {
        items: [
          Uint8Array [
            84
          ],
          Uint8Array [
            196
          ]
        ],
        typeUrl: 'Credit Card Account',
        maxItems: 86365,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            49
          ],
          Uint8Array [
            14
          ]
        ],
        typeUrl: 'channels',
        maxItems: 60987,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          243
        ],
        Uint8Array [
          209
        ]
      ],
      typeUrl: 'Courts',
      maxItems: 73916,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '83700',
      leftover: '27438',
      amount: '20822'
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
  address: '1f31b364d4af0065abd3d7795f25468cfb38c07c',
  keys: [
    'payment',
    'Generic Cotton Keyboard'
  ],
  height: 1147
});

// output
{
  code: 504,
  state: {
    address: '3742a66acce542c9b3dddb6c8489464d51078840',
    owner: 'systems',
    moniker: 'payment',
    readonly: undefined,
    transferrable: undefined,
    ttl: 98191,
    consumedTime: '2019-04-22T10:23:08.345Z',
    issuer: 'clear-thinking',
    stake: {
      totalStakes: '16492',
      totalUnstakes: '67337',
      totalReceivedStakes: '83690',
      recentStakes: {
        items: [
          Uint8Array [
            190
          ],
          Uint8Array [
            95
          ]
        ],
        typeUrl: 'Malagasy Ariary',
        maxItems: 4928,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            234
          ],
          Uint8Array [
            40
          ]
        ],
        typeUrl: 'XML',
        maxItems: 16283,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'copying',
      renaissanceTx: 'Cloned',
      genesisTime: '2019-04-22T10:23:08.345Z',
      renaissanceTime: '2019-04-22T10:23:08.345Z'
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
  height: 23058
});

// output
{
  code: 16,
  block: {
    height: 66601,
    numTxs: 2767,
    time: '2019-04-22T10:23:08.345Z',
    appHash: 'a9f6b2fe3458fb0d08cf977f779d88daf5e53658',
    proposer: '7c6b95f8e00292733d6c4d8be95be245296750c0',
    txs: [
      {
        tx: {
          from: '5bddb2dcb4318b0b32a2e63696ca39e32778720d',
          nonce: 51055,
          chainId: 'Customer',
          pk: Uint8Array [
            30
          ],
          signature: Uint8Array [
            193
          ],
          signatures: [
            {
              signer: 'indexing',
              pk: Uint8Array [
                254
              ],
              signature: Uint8Array [
                0
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Granite',
              pk: Uint8Array [
                118
              ],
              signature: Uint8Array [
                64
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
        height: 90908,
        index: 60285,
        hash: '9ba6d1533d5ec6cded582e517fe028411324c048',
        tags: [
          {
            key: Uint8Array [
              144
            ],
            value: Uint8Array [
              73
            ]
          },
          {
            key: Uint8Array [
              58
            ],
            value: Uint8Array [
              22
            ]
          }
        ],
        code: 40,
        time: '2019-04-22T10:23:08.346Z',
        createAsset: {
          asset: 'Tala'
        },
        accountMigrate: {
          address: '427eb49c412825f389db1ab63b2e397d0908cc01'
        }
      },
      {
        tx: {
          from: '5c69d29ef6b4306e1990becaabef6916928fcf88',
          nonce: 69328,
          chainId: 'azure',
          pk: Uint8Array [
            180
          ],
          signature: Uint8Array [
            203
          ],
          signatures: [
            {
              signer: 'Gorgeous Plastic Shoes',
              pk: Uint8Array [
                39
              ],
              signature: Uint8Array [
                188
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'XSS',
              pk: Uint8Array [
                42
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
        height: 45961,
        index: 38695,
        hash: '4e777c6879b0a35084fe9cfe9bb30c418f2db7c8',
        tags: [
          {
            key: Uint8Array [
              8
            ],
            value: Uint8Array [
              172
            ]
          },
          {
            key: Uint8Array [
              56
            ],
            value: Uint8Array [
              65
            ]
          }
        ],
        code: 10,
        time: '2019-04-22T10:23:08.346Z',
        createAsset: {
          asset: 'functionalities'
        },
        accountMigrate: {
          address: '643b8ee3a60b0b6981d4fbe069d6051c4c4be02e'
        }
      }
    ],
    totalTxs: 29499,
    invalidTxs: [
      {
        tx: {
          from: '44e88ae1cb8fcc8b54aaefcf71b1dd74e5d47832',
          nonce: 65073,
          chainId: 'bandwidth-monitored',
          pk: Uint8Array [
            23
          ],
          signature: Uint8Array [
            219
          ],
          signatures: [
            {
              signer: 'silver',
              pk: Uint8Array [
                3
              ],
              signature: Uint8Array [
                154
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Congo',
              pk: Uint8Array [
                137
              ],
              signature: Uint8Array [
                197
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
        height: 2984,
        index: 48260,
        hash: '5d296f34eb7b464dc5b200eff8f7b03b854d0e8a',
        tags: [
          {
            key: Uint8Array [
              247
            ],
            value: Uint8Array [
              238
            ]
          },
          {
            key: Uint8Array [
              76
            ],
            value: Uint8Array [
              172
            ]
          }
        ],
        code: 26,
        time: '2019-04-22T10:23:08.346Z',
        createAsset: {
          asset: 'Kentucky'
        },
        accountMigrate: {
          address: '7e203a0d8763b22dad9e85dbe8c5d62f4bf90889'
        }
      },
      {
        tx: {
          from: 'f21af560c97238c196718894d4a4804c748238f1',
          nonce: 115,
          chainId: 'client-server',
          pk: Uint8Array [
            157
          ],
          signature: Uint8Array [
            45
          ],
          signatures: [
            {
              signer: 'Unbranded',
              pk: Uint8Array [
                225
              ],
              signature: Uint8Array [
                193
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Fresh',
              pk: Uint8Array [
                213
              ],
              signature: Uint8Array [
                165
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
        height: 38091,
        index: 88947,
        hash: '3788203bb8bd507b471a411df6f52e8059b120d9',
        tags: [
          {
            key: Uint8Array [
              145
            ],
            value: Uint8Array [
              124
            ]
          },
          {
            key: Uint8Array [
              235
            ],
            value: Uint8Array [
              248
            ]
          }
        ],
        code: 21,
        time: '2019-04-22T10:23:08.347Z',
        createAsset: {
          asset: 'experiences'
        },
        accountMigrate: {
          address: 'f7516fba6270201c9b173bbd04d47fde56a45902'
        }
      }
    ],
    txsHashes: [
      'Mountains',
      'Plaza'
    ],
    invalidTxsHashes: [
      'Small',
      'Customer'
    ],
    consensusHash: Uint8Array [
      14
    ],
    dataHash: Uint8Array [
      183
    ],
    evidenceHash: Uint8Array [
      136
    ],
    lastCommitHash: Uint8Array [
      90
    ],
    lastResultsHash: Uint8Array [
      233
    ],
    nextValidatorsHash: Uint8Array [
      170
    ],
    validatorsHash: Uint8Array [
      207
    ],
    version: {
      Block: 23396,
      App: 41710
    },
    lastBlockId: {
      hash: 'f6d5adb8106bd621a2eb82574f85bcf681978d0a',
      partsHeader: {
        total: undefined,
        hash: '755aad40963e7ab0bccdc8d876db2708e456e109'
      }
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Bedfordshire',
    size: 98206,
    order: [
      {
        field: 'dynamic',
        type: 'calculating'
      },
      {
        field: 'Cambridgeshire',
        type: 'Chair'
      }
    ]
  },
  heightFilter: {
    from: '87e03799b0a55518e0661d9d1c28e727b43227bf',
    to: '04c45c1a4de9bf6435e45fa3c7301f2039763398'
  },
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'Maryland',
    next: undefined,
    total: 25107
  },
  blocks: [
    {
      height: 72661,
      numTxs: 28947,
      time: '2019-04-22T10:23:08.348Z',
      appHash: '80e832b38f91ff517bff9a22bfdfac20d2b55a6c',
      proposer: '25062535ff309347566d98f423e71e6b3e611af4',
      totalTxs: 39204,
      txsHashes: [
        'value-added',
        'solid state'
      ],
      invalidTxsHashes: [
        'Bermudian Dollar ' +
          '(customarily known as ' +
          'Bermuda Dollar)',
        'tertiary'
      ],
      consensusHash: Uint8Array [
        188
      ],
      dataHash: Uint8Array [
        175
      ],
      evidenceHash: Uint8Array [
        169
      ],
      lastCommitHash: Uint8Array [
        131
      ],
      lastResultsHash: Uint8Array [
        95
      ],
      nextValidatorsHash: Uint8Array [
        70
      ],
      validatorsHash: Uint8Array [
        70
      ],
      version: {
        Block: 41091,
        App: 23866
      },
      lastBlockId: {
        hash: 'd986bd0e87008bf69d9cd20ed8a2e4308ce3d7e5',
        partsHeader: {
          total: undefined,
          hash: '73f31a663faeb43c783646acc93f6240bedb177c'
        }
      }
    },
    {
      height: 70847,
      numTxs: 70065,
      time: '2019-04-22T10:23:08.348Z',
      appHash: '264bea858b4f2ad9863161540e0a9a104e654421',
      proposer: 'd78c6c1538d691c48f976bd0be248c1e1cd495ea',
      totalTxs: 19025,
      txsHashes: [
        'calculate',
        'Product'
      ],
      invalidTxsHashes: [
        'Steel',
        'orchid'
      ],
      consensusHash: Uint8Array [
        44
      ],
      dataHash: Uint8Array [
        92
      ],
      evidenceHash: Uint8Array [
        246
      ],
      lastCommitHash: Uint8Array [
        65
      ],
      lastResultsHash: Uint8Array [
        63
      ],
      nextValidatorsHash: Uint8Array [
        107
      ],
      validatorsHash: Uint8Array [
        129
      ],
      version: {
        Block: 6712,
        App: 4386
      },
      lastBlockId: {
        hash: 'cc8e731f05d480411bf15897fcedd72315d45a56',
        partsHeader: {
          total: undefined,
          hash: '73b728cd442ee2ade8324e0c80c5e2f5c184d13d'
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
  code: 30,
  info: {
    id: 'parsing',
    network: 'Money Market Account',
    moniker: 'radical',
    consensusVersion: 'matrix',
    synced: undefined,
    appHash: '883eb5c96b160a44e298df21667a1ac945b9a176',
    blockHash: Uint8Array [
      115
    ],
    blockHeight: 81282,
    blockTime: '2019-04-22T10:23:08.349Z',
    address: 'd6cdf6676796e4bc48d897634716698f51e72ea3',
    votingPower: 83000,
    totalTxs: 6203,
    version: 'Auto Loan Account',
    dataVersion: 'transmitter',
    forgeAppsVersion: {
      'fresh-thinking': 'Security'
    },
    supportedTxs: [
      'Pants',
      'EXE'
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
  code: 5,
  config: 'Wooden'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Industrial',
    'Throughway'
  ],
  height: 38181
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  state: {
    address: 'a6be85393e814a7d53967980c6c9d197ba7fd858',
    consensus: {
      maxBytes: 31124,
      maxGas: 24370,
      maxValidators: 96993,
      maxCandidates: 33367,
      pubKeyTypes: [
        'expedite',
        'deposit'
      ],
      validators: [
        {
          address: '01767f404e06f9c4bdecc19ce728a822ac993e9a',
          power: 5180
        },
        {
          address: '8a18aaa8967e95f3fb4b9d462c32fc416160b38e',
          power: 92861
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '9318': {
        item: [
          {
            type: 13,
            dataHash: 'Borders',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 2,
            dataHash: 'Soap',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '71817': {
        totalStakes: '80657',
        totalUnstakes: '75173',
        context: {
          genesisTx: 'Self-enabling',
          renaissanceTx: 'synthesizing',
          genesisTime: '2019-04-22T10:23:08.350Z',
          renaissanceTime: '2019-04-22T10:23:08.350Z'
        }
      }
    },
    version: 'Extended',
    dataVersion: 'AGP',
    forgeAppHash: Uint8Array [
      217
    ],
    token: {
      name: 'systems',
      symbol: 'Lithuanian Litas',
      unit: 'Guinea',
      description: 'cyan',
      icon: Uint8Array [
        108
      ],
      decimal: 60432,
      initialSupply: 3194,
      totalSupply: 10725,
      inflationRate: 57914
    },
    txConfig: {
      maxAssetSize: 17039,
      maxListSize: 1088,
      maxMultisig: 82940,
      minimumStake: 95251
    },
    stakeConfig: {
      timeoutGeneral: 96553,
      timeoutStakeForNode: 96047
    },
    pokeConfig: {
      address: '62fcb9f75d39864e9c25ef7274808de1ea5f7025',
      dailyLimit: 95326,
      balance: 86560,
      amount: 89914
    },
    protocols: [
      {
        name: 'Corporate',
        address: 'f15f85a6aec40c472e946796c1023326fdb1b981'
      },
      {
        name: 'Sleek Metal Pants',
        address: '0d4be4003b06e178b81912b345a9e169a656af3c'
      }
    ],
    upgradeInfo: {
      height: 16689,
      version: 'Cambridgeshire'
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
    startDate: 'next generation',
    endDate: 'circuit'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  forgeStats: {
    numBlocks: [
      44327,
      33672
    ],
    numTxs: [
      40148,
      45365
    ],
    numStakes: [
      '84971',
      '35841'
    ],
    numValidators: [
      34611,
      96928
    ],
    numAccountMigrateTxs: [
      43065,
      69929
    ],
    numCreateAssetTxs: [
      6791,
      89923
    ],
    numConsensusUpgradeTxs: [
      64949,
      2872
    ],
    numDeclareTxs: [
      45687,
      19830
    ],
    numDeclareFileTxs: [
      74000,
      39236
    ],
    numExchangeTxs: [
      405,
      57872
    ],
    numStakeTxs: [
      18190,
      56293
    ],
    numSysUpgradeTxs: [
      78987,
      17137
    ],
    numTransferTxs: [
      54506,
      61348
    ],
    numUpdateAssetTxs: [
      41134,
      73020
    ],
    numConsumeAssetTxs: [
      55074,
      59927
    ],
    numPokeTxs: [
      56722,
      83134
    ],
    tps: [
      64452,
      38756
    ],
    maxTps: 94014,
    avgTps: 89763,
    avgBlockTime: 62617.21
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
  code: 27,
  healthStatus: {
    consensus: {
      health: undefined,
      synced: undefined,
      blockHeight: 13489
    },
    network: {
      health: undefined,
      numPeers: 60358
    },
    storage: {
      health: undefined,
      indexerServer: 'Lights',
      stateDb: 'Wooden',
      diskSpace: {
        forgeUsage: 'orchid',
        total: 'system'
      }
    },
    forge: {
      health: undefined,
      abiServer: 'Music',
      forgeWeb: 'Checking Account',
      abciServer: {
        abciConsensus: 'quantifying',
        abciInfo: 'Views'
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
  code: 26,
  netInfo: {
    listening: undefined,
    listeners: [
      'aggregate',
      'Libyan Dinar'
    ],
    nPeers: 81698,
    peers: [
      {
        id: 'moderator',
        network: 'synthesizing',
        consensusVersion: 'Buckinghamshire',
        moniker: 'Iraqi Dinar',
        ip: 'GB',
        geoInfo: {
          city: 'Virginia',
          country: 'models',
          latitude: 12124.98,
          longitude: 86821.9
        }
      },
      {
        id: 'ADP',
        network: 'calculating',
        consensusVersion: 'CFA Franc BCEAO',
        moniker: 'protocol',
        ip: 'Lead',
        geoInfo: {
          city: 'Hawaii',
          country: 'moratorium',
          latitude: 43718.01,
          longitude: 94762.86
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
    id: 'Cambridgeshire',
    network: 'Operations',
    moniker: 'Bedfordshire',
    consensusVersion: 'Assistant',
    synced: undefined,
    appHash: '59a33b15d0f3c630907bf6fcb1e62703ad05e8fd',
    blockHash: Uint8Array [
      153
    ],
    blockHeight: 48518,
    blockTime: '2019-04-22T10:23:08.352Z',
    address: '3fbbd0263850ff79412861da6f832c5c5046866f',
    votingPower: 99455,
    totalTxs: 96101,
    version: 'Cheese',
    dataVersion: 'Avon',
    forgeAppsVersion: {
      '1080p': 'sky blue'
    },
    supportedTxs: [
      'Dynamic',
      'attitude'
    ],
    ip: 'monitoring',
    geoInfo: {
      city: 'Creek',
      country: 'compress',
      latitude: 32371.31,
      longitude: 53686.07
    },
    p2pAddress: 'platforms'
  }
}
});
```

### getProtocolState

```js
const stream = client.getProtocolState({
  address: '4360feb3ca2d4df3ec2423f26b714e58e3210f49',
  keys: [
    'Summit',
    'Synchronised'
  ],
  height: 94993
});

// output
{
  code: 6,
  state: {
    address: 'a5ffbf4c57ae4c9399a4c207b514edc6eec170d1',
    name: 'reintermediate',
    version: 33316,
    description: 'Unbranded Granite Chair',
    txHash: '7766cbad4a056f2f951a0014ceaad82d8c0a6ee7',
    rootHash: Uint8Array [
      177
    ],
    status: 1,
    migratedTo: [
      'Lead',
      'Soft'
    ],
    migratedFrom: [
      'facilitate',
      'Wallis and Futuna'
    ],
    context: {
      genesisTx: 'protocol',
      renaissanceTx: 'Fantastic',
      genesisTime: '2019-04-22T10:23:08.353Z',
      renaissanceTime: '2019-04-22T10:23:08.353Z'
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
  address: '707dd0de28d3d74d9d8bd82a2f3362544178c654',
  keys: [
    'Tuna',
    'embrace'
  ],
  height: 42986
});

// output
{
  code: 32,
  state: {
    address: 'd476bcce2d360284045a4feaf88aeffbb12504ac',
    from: '7f6e4e6f94ff55542d388955a2ce4f4892d808bb',
    to: '9d2f573b75fceda27dfabafa6f010b67c6ec20e7',
    balance: '99547',
    message: 'support',
    context: {
      genesisTx: 'Identity',
      renaissanceTx: 'Extended',
      genesisTime: '2019-04-22T10:23:08.353Z',
      renaissanceTime: '2019-04-22T10:23:08.353Z'
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
  hash: 'dd00e4e4176433cd119a43b60f677ac9673ab59a'
});

// output
{
  code: 4,
  info: {
    tx: {
      from: '674bf4da4723bcf7bc691410e8427538f423fd84',
      nonce: 18732,
      chainId: 'explicit',
      pk: Uint8Array [
        32
      ],
      signature: Uint8Array [
        68
      ],
      signatures: [
        {
          signer: 'white',
          pk: Uint8Array [
            197
          ],
          signature: Uint8Array [
            167
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Chicken',
          pk: Uint8Array [
            101
          ],
          signature: Uint8Array [
            16
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
    height: 32565,
    index: 67921,
    hash: 'db02d3892965fecf2106cd238a45b7a3720bfd12',
    tags: [
      {
        key: Uint8Array [
          203
        ],
        value: Uint8Array [
          254
        ]
      },
      {
        key: Uint8Array [
          45
        ],
        value: Uint8Array [
          233
        ]
      }
    ],
    code: 1,
    time: '2019-04-22T10:23:08.354Z',
    createAsset: {
      asset: 'Home'
    },
    accountMigrate: {
      address: 'a439e6b51d9eb2d5e228c8f479ee9c69e3ab3190'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  paging: {
    cursor: 'Clothing',
    size: 90886,
    order: [
      {
        field: 'withdrawal',
        type: 'pixel'
      },
      {
        field: 'global',
        type: 'New Mexico'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'Mill',
    next: undefined,
    total: 75776
  },
  unconfirmedTxs: {
    nTxs: 57150,
    txs: [
      {
        from: 'e7197e6850088b1f5e4e7ebd406d510a388a8873',
        nonce: 37466,
        chainId: 'local area network',
        pk: Uint8Array [
          33
        ],
        signature: Uint8Array [
          103
        ],
        signatures: [
          {
            signer: 'generate',
            pk: Uint8Array [
              87
            ],
            signature: Uint8Array [
              249
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'SDR',
            pk: Uint8Array [
              143
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
      },
      {
        from: '4811a0af83a4958b06b2672f57c626597a59e2ec',
        nonce: 74385,
        chainId: 'Cambridgeshire',
        pk: Uint8Array [
          227
        ],
        signature: Uint8Array [
          199
        ],
        signatures: [
          {
            signer: 'Kina',
            pk: Uint8Array [
              234
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
            signer: 'Global',
            pk: Uint8Array [
              213
            ],
            signature: Uint8Array [
              39
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
  code: 4,
  validatorsInfo: {
    blockHeight: 25487,
    validators: [
      {
        address: '723be677e60910fccfed37829c79a49481317877',
        pubKey: {
          type: 'facilitate',
          data: Uint8Array [
            55
          ]
        },
        votingPower: 48777,
        proposerPriority: 'application',
        name: 'initiatives',
        geoInfo: {
          city: 'Web',
          country: 'Progressive',
          latitude: 31391.24,
          longitude: 10222.74
        }
      },
      {
        address: '39a1679937f5356847095765a8ffb3d7d456bea0',
        pubKey: {
          type: 'Beauty',
          data: Uint8Array [
            79
          ]
        },
        votingPower: 88426,
        proposerPriority: 'throughput',
        name: 'calculating',
        geoInfo: {
          city: 'e-tailers',
          country: 'indexing',
          latitude: 92945.65,
          longitude: 64541.08
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
  ownerAddress: 'partnerships'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  account: {
    address: '967d8c1f34ccbe33faec55071bea12d00ecedb4a',
    balance: '16183',
    numAssets: 43303,
    numTxs: 5566,
    nonce: 48991,
    genesisTime: 'Dong',
    renaissanceTime: 'Orchestrator',
    moniker: 'e-markets',
    migratedFrom: 'Cambridgeshire',
    migratedTo: 'system-worthy',
    totalReceivedStakes: '25931',
    totalStakes: '82456',
    totalUnstakes: '7616',
    recentNumTxs: [
      6869,
      34629
    ]
  }
}
});
```

### listAssetTransactions

```js
const result = await client.listAssetTransactions({
  paging: {
    cursor: 'Cambridgeshire',
    size: 87995,
    order: [
      {
        field: 'application',
        type: 'back-end'
      },
      {
        field: 'pink',
        type: 'Soft'
      }
    ]
  },
  address: '34d85f8da61557a32ec8336ccb6528b2865c3677'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  page: {
    cursor: 'drive',
    next: undefined,
    total: 3497
  },
  transactions: [
    {
      hash: '696acb57a309bbef4fdfa5e6057b08ef91139a77',
      sender: 'District',
      receiver: 'quantifying',
      time: 'Re-contextualized',
      type: 'Personal Loan Account',
      tx: {
        from: '3db34c870ad1647eab70988f9c36704700d78d58',
        nonce: 94161,
        chainId: 'Baby',
        pk: Uint8Array [
          89
        ],
        signature: Uint8Array [
          113
        ],
        signatures: [
          {
            signer: 'deposit',
            pk: Uint8Array [
              43
            ],
            signature: Uint8Array [
              90
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'target',
            pk: Uint8Array [
              120
            ],
            signature: Uint8Array [
              255
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
      code: 40
    },
    {
      hash: '255a47fc9ed99672b6911dd165ceaccade345a4c',
      sender: 'holistic',
      receiver: 'parse',
      time: 'Malaysia',
      type: 'Specialist',
      tx: {
        from: '07ce7b3979b1c41163a8c9236ccc98249d2f0eba',
        nonce: 3025,
        chainId: 'moratorium',
        pk: Uint8Array [
          137
        ],
        signature: Uint8Array [
          203
        ],
        signatures: [
          {
            signer: 'invoice',
            pk: Uint8Array [
              16
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
            signer: 'Architect',
            pk: Uint8Array [
              181
            ],
            signature: Uint8Array [
              149
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
      code: 38
    }
  ]
}
});
```

### listAssets

```js
const result = await client.listAssets({
  paging: {
    cursor: 'matrix',
    size: 44001,
    order: [
      {
        field: 'enhance',
        type: 'RAM'
      },
      {
        field: 'calculating',
        type: 'users'
      }
    ]
  },
  ownerAddress: 'Kip'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  page: {
    cursor: 'redefine',
    next: undefined,
    total: 78948
  },
  assets: [
    {
      address: '2b7649bcf65d5e2648ddea7ab68d74b7813733ba',
      owner: 'Cambridgeshire',
      genesisTime: 'Investment Account',
      renaissanceTime: 'Hawaii',
      moniker: 'networks',
      readonly: undefined
    },
    {
      address: 'bb31f464349c134e26fda62041ecfaee43f7e7b2',
      owner: 'Multi-channelled',
      genesisTime: 'Auto Loan Account',
      renaissanceTime: 'empowering',
      moniker: 'Rustic Concrete Sausages',
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
    cursor: 'back-end',
    size: 40064,
    order: [
      {
        field: 'Avon',
        type: 'Towels'
      },
      {
        field: 'Bacon',
        type: 'Rustic Soft Chair'
      }
    ]
  },
  proposer: '0a112d6a0d0414f70a28647a149fe099c93b8fbe',
  timeFilter: {
    startDateTime: 'intuitive',
    endDateTime: 'context-sensitive'
  },
  heightFilter: {
    from: 'd3aaa49e7846a47e4c43540851817fcbdf16fd7a',
    to: '3d4afb6631608a8ff1e7ba237bd3ebe2b40de32c'
  },
  numTxsFilter: {
    from: '70ed4dcf7db3a78b8c322ca07b7d44f38bdccb2a',
    to: '426226a457797b737aac09be1ea8ab7c1940a0f1'
  },
  numInvalidTxsFilter: {
    from: 'a1a5a7482d9472395aebdce6030847f074f2a189',
    to: 'ad4e179f0beff04bb80b1fc9c4c130c65a7acadf'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'Ball',
    next: undefined,
    total: 12120
  },
  blocks: [
    {
      height: 26657,
      time: 'Trail',
      proposer: '3db9d3eb5ce259cd9da2b1325bb2ca3b2f3173a4',
      numTxs: 23244,
      numInvalidTxs: 30861
    },
    {
      height: 75402,
      time: 'Facilitator',
      proposer: '2390e7e99125ca929c272aefde864e9f31cbbb9f',
      numTxs: 53385,
      numInvalidTxs: 28085
    }
  ]
}
});
```

### listStakes

```js
const result = await client.listStakes({
  paging: {
    cursor: 'encoding',
    size: 96441,
    order: [
      {
        field: 'Home Loan Account',
        type: 'Crescent'
      },
      {
        field: 'Practical Wooden Chips',
        type: 'Books'
      }
    ]
  },
  addressFilter: {
    sender: 'Sharable',
    receiver: 'interface',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  page: {
    cursor: 'matrix',
    next: undefined,
    total: 41695
  },
  stakes: [
    {
      address: '8ad6b9a77a1f10d2480cd82b26db93c7eda286a7',
      balance: '55453',
      sender: 'override',
      receiver: 'virtual',
      genesisTime: 'Dynamic',
      renaissanceTime: 'solid state',
      message: 'Refined',
      type: 65672
    },
    {
      address: '9da1e85a6dab8e0460493e62b4e47fbe0a83993b',
      balance: '67127',
      sender: 'Clothing',
      receiver: 'invoice',
      genesisTime: 'Computer',
      renaissanceTime: 'Communications',
      message: 'International',
      type: 41808
    }
  ]
}
});
```

### listTopAccounts

```js
const result = await client.listTopAccounts({
  paging: {
    cursor: 'real-time',
    size: 75838,
    order: [
      {
        field: 'ADP',
        type: 'HTTP'
      },
      {
        field: 'Progressive',
        type: 'Tuna'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  page: {
    cursor: 'Division',
    next: undefined,
    total: 15199
  },
  accounts: [
    {
      address: '63b644c5f32feabd3bb096a5a2f983d7109112b5',
      balance: '62811',
      numAssets: 19673,
      numTxs: 43467,
      nonce: 29619,
      genesisTime: 'Data',
      renaissanceTime: 'compress',
      moniker: 'Legacy',
      migratedFrom: 'utilize',
      migratedTo: 'Licensed Granite Bike',
      totalReceivedStakes: '27764',
      totalStakes: '84605',
      totalUnstakes: '46576',
      recentNumTxs: [
        22084,
        10418
      ]
    },
    {
      address: '8024179966ceaeabd34b8f8d459460be9f511386',
      balance: '43707',
      numAssets: 61284,
      numTxs: 89371,
      nonce: 97733,
      genesisTime: 'Moroccan Dirham',
      renaissanceTime: 'matrix',
      moniker: 'Checking Account',
      migratedFrom: 'monitoring',
      migratedTo: 'Libyan Dinar',
      totalReceivedStakes: '91834',
      totalStakes: '7472',
      totalUnstakes: '95533',
      recentNumTxs: [
        54638,
        26580
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
    cursor: 'Serbian Dinar',
    size: 3337,
    order: [
      {
        field: 'District',
        type: 'transmitting'
      },
      {
        field: 'Incredible Steel Hat',
        type: 'firewall'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Cotton',
    endDateTime: 'Executive'
  },
  addressFilter: {
    sender: 'Accounts',
    receiver: 'Frozen',
    direction: 0
  },
  typeFilter: {
    types: [
      'Liaison',
      'Rubber'
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
  code: 500,
  page: {
    cursor: 'Computer',
    next: undefined,
    total: 53887
  },
  transactions: [
    {
      hash: '64cfd92f6c2be22127e2f05b4230d267a51d7edd',
      sender: 'application',
      receiver: 'Producer',
      time: 'applications',
      type: 'reintermediate',
      tx: {
        from: '89054987b38a1e10e96fc1be04ac4c3bf011f6dd',
        nonce: 54459,
        chainId: 'strategic',
        pk: Uint8Array [
          161
        ],
        signature: Uint8Array [
          3
        ],
        signatures: [
          {
            signer: 'Facilitator',
            pk: Uint8Array [
              137
            ],
            signature: Uint8Array [
              11
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Research',
            pk: Uint8Array [
              238
            ],
            signature: Uint8Array [
              179
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
      code: 36
    },
    {
      hash: '4c2140533afee8f5d2ae4ad1f292fa3f9f842869',
      sender: 'Product',
      receiver: 'Tasty Concrete Car',
      time: 'bluetooth',
      type: 'Berkshire',
      tx: {
        from: 'f7c80697d7689872cb29605b99cd6905369a6e86',
        nonce: 99493,
        chainId: 'e-business',
        pk: Uint8Array [
          160
        ],
        signature: Uint8Array [
          63
        ],
        signatures: [
          {
            signer: 'invoice',
            pk: Uint8Array [
              54
            ],
            signature: Uint8Array [
              22
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Car',
            pk: Uint8Array [
              20
            ],
            signature: Uint8Array [
              214
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
      code: 4
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
  code: 0,
  address: 'fbae481f92f3b017e5a8c8eaa76d909cedb5b4b9'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '53af790045cb7f4e34e30f4f4078fc330973d358'
});

// output
{
  code: 500,
  chunk: Uint8Array [
    118
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '7633be2f147eda1ac2c0a44f2ab25b23916f51aa',
  passphrase: 'Buckinghamshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'partnerships',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      246
    ],
    pk: Uint8Array [
      72
    ],
    address: '79619ca99517602097690f236d1d4fbc32fe6c01'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '31f6dd2bfdd3718538b6b04f6f58953ec5b41a8a',
    nonce: 56588,
    chainId: 'B2C',
    pk: Uint8Array [
      15
    ],
    signature: Uint8Array [
      209
    ],
    signatures: [
      {
        signer: 'invoice',
        pk: Uint8Array [
          207
        ],
        signature: Uint8Array [
          44
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Wooden',
        pk: Uint8Array [
          125
        ],
        signature: Uint8Array [
          254
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
      hash: 1,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      172
    ],
    pk: Uint8Array [
      251
    ],
    address: '8d66ed5b2611000f5694fe3d0cceaf3628b97fbe'
  },
  token: 'transform'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  tx: {
    from: '1651282282efcd6fb2329fdcb1c2e26b905e583e',
    nonce: 87348,
    chainId: 'revolutionary',
    pk: Uint8Array [
      215
    ],
    signature: Uint8Array [
      4
    ],
    signatures: [
      {
        signer: 'Re-contextualized',
        pk: Uint8Array [
          50
        ],
        signature: Uint8Array [
          40
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Plastic',
        pk: Uint8Array [
          242
        ],
        signature: Uint8Array [
          48
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
  hash: '5558ee2df1132dfa060404f593208b686c8ad2e6'
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
      from: 'bac2f1e5b1300a8669491c0a75975b42565b6fd5',
      nonce: 38739,
      chainId: 'Indiana',
      pk: Uint8Array [
        3
      ],
      signature: Uint8Array [
        59
      ],
      signatures: [
        {
          signer: 'Berkshire',
          pk: Uint8Array [
            34
          ],
          signature: Uint8Array [
            137
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Guyana Dollar',
          pk: Uint8Array [
            20
          ],
          signature: Uint8Array [
            95
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
        balance: '45271',
        nonce: 14230,
        numTxs: 88458,
        address: '46c88f350fd4c14dc5416f1e0304a22571049e55',
        pk: Uint8Array [
          89
        ],
        type: {
          pk: 0,
          hash: 2,
          address: 0,
          role: 3
        },
        moniker: 'knowledge base',
        context: {
          genesisTx: 'Outdoors',
          renaissanceTx: 'Tasty Soft Soap',
          genesisTime: '2019-04-22T10:23:08.361Z',
          renaissanceTime: '2019-04-22T10:23:08.361Z'
        },
        issuer: 'copying',
        migratedTo: [
          'Graphical User Interface',
          'applications'
        ],
        migratedFrom: [
          'Supervisor',
          'mindshare'
        ],
        numAssets: 90352,
        stake: {
          totalStakes: '60948',
          totalUnstakes: '22612',
          totalReceivedStakes: '77824',
          recentStakes: {
            items: [
              Uint8Array [
                232
              ],
              Uint8Array [
                226
              ]
            ],
            typeUrl: 'JBOD',
            maxItems: 95514,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                33
              ],
              Uint8Array [
                117
              ]
            ],
            typeUrl: '24 hour',
            maxItems: 84995,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              212
            ],
            Uint8Array [
              74
            ]
          ],
          typeUrl: 'transmitter',
          maxItems: 19032,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '20049',
          leftover: '32793',
          amount: '72085'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '36645',
        nonce: 1812,
        numTxs: 27569,
        address: 'cc3000d32470618ad0435ad7c893c0ef918b35fe',
        pk: Uint8Array [
          34
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 7
        },
        moniker: 'Unbranded Rubber Cheese',
        context: {
          genesisTx: 'Savings Account',
          renaissanceTx: 'connect',
          genesisTime: '2019-04-22T10:23:08.361Z',
          renaissanceTime: '2019-04-22T10:23:08.361Z'
        },
        issuer: 'Architect',
        migratedTo: [
          'bypassing',
          'magenta'
        ],
        migratedFrom: [
          'indigo',
          'Automotive'
        ],
        numAssets: 81384,
        stake: {
          totalStakes: '44732',
          totalUnstakes: '48471',
          totalReceivedStakes: '8727',
          recentStakes: {
            items: [
              Uint8Array [
                207
              ],
              Uint8Array [
                228
              ]
            ],
            typeUrl: 'Keyboard',
            maxItems: 71676,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                76
              ],
              Uint8Array [
                194
              ]
            ],
            typeUrl: 'blue',
            maxItems: 88258,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              159
            ],
            Uint8Array [
              120
            ]
          ],
          typeUrl: 'Research',
          maxItems: 31212,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '87293',
          leftover: '8310',
          amount: '83184'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '07daffadfecde9ce83bae46c4f76241247fe777d',
        owner: 'Investor',
        moniker: 'Indian Rupee',
        readonly: undefined,
        transferrable: undefined,
        ttl: 19889,
        consumedTime: '2019-04-22T10:23:08.361Z',
        issuer: 'Peso Uruguayo Uruguay Peso en Unidades Indexadas',
        stake: {
          totalStakes: '29443',
          totalUnstakes: '59093',
          totalReceivedStakes: '41762',
          recentStakes: {
            items: [
              Uint8Array [
                108
              ],
              Uint8Array [
                141
              ]
            ],
            typeUrl: 'Multi-lateral',
            maxItems: 52790,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                201
              ],
              Uint8Array [
                27
              ]
            ],
            typeUrl: 'Handcrafted',
            maxItems: 80618,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'synthesize',
          renaissanceTx: 'cross-platform',
          genesisTime: '2019-04-22T10:23:08.362Z',
          renaissanceTime: '2019-04-22T10:23:08.362Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '2ccfdf7ff737265ec0d0d1080b1d2a12c043dd04',
        owner: 'Georgia',
        moniker: 'black',
        readonly: undefined,
        transferrable: undefined,
        ttl: 43911,
        consumedTime: '2019-04-22T10:23:08.362Z',
        issuer: 'Program',
        stake: {
          totalStakes: '86687',
          totalUnstakes: '53822',
          totalReceivedStakes: '41665',
          recentStakes: {
            items: [
              Uint8Array [
                5
              ],
              Uint8Array [
                167
              ]
            ],
            typeUrl: 'withdrawal',
            maxItems: 77725,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                153
              ],
              Uint8Array [
                228
              ]
            ],
            typeUrl: 'Bedfordshire',
            maxItems: 78065,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Liechtenstein',
          renaissanceTx: 'convergence',
          genesisTime: '2019-04-22T10:23:08.362Z',
          renaissanceTime: '2019-04-22T10:23:08.362Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'c27f0d545680844fec4f7c210af6bcd54527f5f4',
        from: 'ca210b719aef8c064a6827cc754d9988df25784a',
        to: 'b16bf1672c06e507a46af25746ed9a8ecf3ca69b',
        balance: '85983',
        message: 'haptic',
        context: {
          genesisTx: 'explicit',
          renaissanceTx: 'Tactics',
          genesisTime: '2019-04-22T10:23:08.362Z',
          renaissanceTime: '2019-04-22T10:23:08.362Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '1ab64eb51b611f6e6bd4d20f584b3bdb66f640e4',
        from: '71b2aa78207dc33ae964c2620a3ccb33ea950bfd',
        to: '75304ee56c1998bb9c5eb5bef9334df729b049f1',
        balance: '34389',
        message: 'Sports',
        context: {
          genesisTx: 'generating',
          renaissanceTx: 'connect',
          genesisTime: '2019-04-22T10:23:08.362Z',
          renaissanceTime: '2019-04-22T10:23:08.362Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'ff2c455a0468754261043e9420a7aa333698be00',
      blockHeight: 27465,
      blockTime: '2019-04-22T10:23:08.362Z',
      totalTxs: 91960,
      txStatistics: {
        numAccountMigrateTxs: 20758,
        numCreateAssetTxs: 94864,
        numConsensusUpgradeTxs: 3372,
        numDeclareTxs: 84387,
        numDeclareFileTxs: 36635,
        numExchangeTxs: 10636,
        numStakeTxs: 59087,
        numSysUpgradeTxs: 96792,
        numTransferTxs: 93398,
        numUpdateAssetTxs: 36370,
        numConsumeAssetTxs: 21746,
        numPokeTxs: 23020
      },
      txIndex: 38060,
      lastBlockTime: '2019-04-22T10:23:08.362Z'
    },
    appState: {
      address: '5c727cd0a0ef24e327c14b3786eb55f512983933',
      consensus: {
        maxBytes: 9880,
        maxGas: 131,
        maxValidators: 5143,
        maxCandidates: 48589,
        pubKeyTypes: [
          'Games',
          'Bedfordshire'
        ],
        validators: [
          {
            address: 'a1816671f981903d7e8ca0f0e3b155d637984885',
            power: 23699
          },
          {
            address: '8404f4877ab2a4ba3c0a4427796212f3c9a9915d',
            power: 5279
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '55709': {
          item: [
            {
              type: 13,
              dataHash: 'back-end',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'capacitor',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '67427': {
          totalStakes: '14567',
          totalUnstakes: '26862',
          context: {
            genesisTx: 'Incredible Concrete Hat',
            renaissanceTx: 'one-to-one',
            genesisTime: '2019-04-22T10:23:08.362Z',
            renaissanceTime: '2019-04-22T10:23:08.362Z'
          }
        }
      },
      version: 'proactive',
      dataVersion: 'Small',
      forgeAppHash: Uint8Array [
        22
      ],
      token: {
        name: 'Investment Account',
        symbol: 'calculating',
        unit: 'Investment Account',
        description: 'iterate',
        icon: Uint8Array [
          16
        ],
        decimal: 11742,
        initialSupply: 87425,
        totalSupply: 83706,
        inflationRate: 31056
      },
      txConfig: {
        maxAssetSize: 20514,
        maxListSize: 77230,
        maxMultisig: 96405,
        minimumStake: 86620
      },
      stakeConfig: {
        timeoutGeneral: 11388,
        timeoutStakeForNode: 49749
      },
      pokeConfig: {
        address: '73d733ea8dcaf53f0fbdf04c55fc7f04d1e33fa2',
        dailyLimit: 1839,
        balance: 59475,
        amount: 30563
      },
      protocols: [
        {
          name: 'Cliffs',
          address: '13d23f37e21d91eb90a7541ee25672610d253be2'
        },
        {
          name: 'robust',
          address: '8f9ec80800f97561dd79e1c8c94d02af76555bff'
        }
      ],
      upgradeInfo: {
        height: 33607,
        version: 'ivory'
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
      from: '6e40b828732b27cf3ff318e46b9217a0533d12aa',
      nonce: 53761,
      chainId: 'Spring',
      pk: Uint8Array [
        22
      ],
      signature: Uint8Array [
        100
      ],
      signatures: [
        {
          signer: 'Cotton',
          pk: Uint8Array [
            171
          ],
          signature: Uint8Array [
            188
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'optimize',
          pk: Uint8Array [
            26
          ],
          signature: Uint8Array [
            254
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
        balance: '70672',
        nonce: 81045,
        numTxs: 55408,
        address: '81d92dc38d18e06ee01f143f92af4a9c815a153b',
        pk: Uint8Array [
          105
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 0,
          role: 3
        },
        moniker: 'green',
        context: {
          genesisTx: 'Sudanese Pound',
          renaissanceTx: 'multi-byte',
          genesisTime: '2019-04-22T10:23:08.364Z',
          renaissanceTime: '2019-04-22T10:23:08.364Z'
        },
        issuer: 'full-range',
        migratedTo: [
          'Washington',
          'Granite'
        ],
        migratedFrom: [
          'Computers',
          'Toys'
        ],
        numAssets: 87553,
        stake: {
          totalStakes: '65500',
          totalUnstakes: '56870',
          totalReceivedStakes: '4398',
          recentStakes: {
            items: [
              Uint8Array [
                12
              ],
              Uint8Array [
                116
              ]
            ],
            typeUrl: 'Ways',
            maxItems: 95511,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                62
              ],
              Uint8Array [
                132
              ]
            ],
            typeUrl: 'backing up',
            maxItems: 75202,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              36
            ],
            Uint8Array [
              208
            ]
          ],
          typeUrl: 'Movies',
          maxItems: 22727,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '37476',
          leftover: '7447',
          amount: '73830'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '67091',
        nonce: 78703,
        numTxs: 9718,
        address: '9edb3b7615ff687a2e4499d3b5fe1c497a11a800',
        pk: Uint8Array [
          252
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 3
        },
        moniker: 'Gold',
        context: {
          genesisTx: 'New Hampshire',
          renaissanceTx: 'Garden',
          genesisTime: '2019-04-22T10:23:08.365Z',
          renaissanceTime: '2019-04-22T10:23:08.365Z'
        },
        issuer: 'synthesize',
        migratedTo: [
          'driver',
          'generate'
        ],
        migratedFrom: [
          'tan',
          'generate'
        ],
        numAssets: 68138,
        stake: {
          totalStakes: '25331',
          totalUnstakes: '25817',
          totalReceivedStakes: '96239',
          recentStakes: {
            items: [
              Uint8Array [
                142
              ],
              Uint8Array [
                200
              ]
            ],
            typeUrl: 'Michigan',
            maxItems: 32586,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                182
              ],
              Uint8Array [
                158
              ]
            ],
            typeUrl: 'syndicate',
            maxItems: 38822,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              15
            ],
            Uint8Array [
              138
            ]
          ],
          typeUrl: 'Refined',
          maxItems: 72373,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '58789',
          leftover: '91367',
          amount: '52907'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'd368713e64c3ba601822e9528cc9148d7dcdd7c6',
        owner: 'Bedfordshire',
        moniker: 'back-end',
        readonly: undefined,
        transferrable: undefined,
        ttl: 68408,
        consumedTime: '2019-04-22T10:23:08.365Z',
        issuer: 'synthesizing',
        stake: {
          totalStakes: '81891',
          totalUnstakes: '73796',
          totalReceivedStakes: '11874',
          recentStakes: {
            items: [
              Uint8Array [
                7
              ],
              Uint8Array [
                221
              ]
            ],
            typeUrl: 'Clothing',
            maxItems: 9788,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                89
              ],
              Uint8Array [
                95
              ]
            ],
            typeUrl: 'turquoise',
            maxItems: 53773,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Centers',
          renaissanceTx: 'Lebanese Pound',
          genesisTime: '2019-04-22T10:23:08.365Z',
          renaissanceTime: '2019-04-22T10:23:08.365Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '040231d642fd0ad6bad783f2115fab7a92f88010',
        owner: 'Sausages',
        moniker: 'projection',
        readonly: undefined,
        transferrable: undefined,
        ttl: 96396,
        consumedTime: '2019-04-22T10:23:08.365Z',
        issuer: 'Bedfordshire',
        stake: {
          totalStakes: '7376',
          totalUnstakes: '640',
          totalReceivedStakes: '25853',
          recentStakes: {
            items: [
              Uint8Array [
                159
              ],
              Uint8Array [
                225
              ]
            ],
            typeUrl: 'Electronics',
            maxItems: 81397,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                107
              ],
              Uint8Array [
                180
              ]
            ],
            typeUrl: 'Multi-channelled',
            maxItems: 88624,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Shoes',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-04-22T10:23:08.365Z',
          renaissanceTime: '2019-04-22T10:23:08.365Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '126f823495b64b3da3dc087288e459ceebf0e02c',
        from: '0ecf2bb049176d6114d29517d992f7515e61f704',
        to: 'f96ccbb700d8ff7053142069ba608405740e9292',
        balance: '26134',
        message: 'Lithuanian Litas',
        context: {
          genesisTx: 'Mississippi',
          renaissanceTx: 'Communications',
          genesisTime: '2019-04-22T10:23:08.365Z',
          renaissanceTime: '2019-04-22T10:23:08.365Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '37bf9d2c5487fe97166fbbc9886e2c5b34be3c6e',
        from: '404f52483718c1b854c259aa3ca7d39f0e909d3d',
        to: 'b7fc40cda14203d8b2e0c8e2930b60a22ddec2bf',
        balance: '88781',
        message: 'functionalities',
        context: {
          genesisTx: 'Bedfordshire',
          renaissanceTx: 'Avon',
          genesisTime: '2019-04-22T10:23:08.366Z',
          renaissanceTime: '2019-04-22T10:23:08.366Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '30800cd519c07c6ae49436e7f1ebbe8a315b0c65',
      blockHeight: 82455,
      blockTime: '2019-04-22T10:23:08.366Z',
      totalTxs: 4025,
      txStatistics: {
        numAccountMigrateTxs: 4392,
        numCreateAssetTxs: 31685,
        numConsensusUpgradeTxs: 2735,
        numDeclareTxs: 55424,
        numDeclareFileTxs: 11843,
        numExchangeTxs: 50058,
        numStakeTxs: 7399,
        numSysUpgradeTxs: 83776,
        numTransferTxs: 20278,
        numUpdateAssetTxs: 97765,
        numConsumeAssetTxs: 77490,
        numPokeTxs: 60190
      },
      txIndex: 90265,
      lastBlockTime: '2019-04-22T10:23:08.366Z'
    },
    appState: {
      address: '7c9254984d4e172fe73a117f67fed455cc78260b',
      consensus: {
        maxBytes: 10242,
        maxGas: 13063,
        maxValidators: 63320,
        maxCandidates: 37831,
        pubKeyTypes: [
          'Montserrat',
          'Soft'
        ],
        validators: [
          {
            address: '4e42b04f3a4dac4c42920d5a9144e4f5868e10c5',
            power: 46919
          },
          {
            address: 'da6257be30b488b4cb88adb3832e809f0a929444',
            power: 37407
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '51279': {
          item: [
            {
              type: 10,
              dataHash: 'interactive',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 0,
              dataHash: 'Azerbaijanian Manat',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '14918': {
          totalStakes: '67150',
          totalUnstakes: '7190',
          context: {
            genesisTx: 'invoice',
            renaissanceTx: 'connecting',
            genesisTime: '2019-04-22T10:23:08.366Z',
            renaissanceTime: '2019-04-22T10:23:08.366Z'
          }
        }
      },
      version: 'Licensed Wooden Table',
      dataVersion: 'Avon',
      forgeAppHash: Uint8Array [
        148
      ],
      token: {
        name: 'Norwegian Krone',
        symbol: 'Auto Loan Account',
        unit: 'e-commerce',
        description: 'Cambridgeshire',
        icon: Uint8Array [
          117
        ],
        decimal: 14008,
        initialSupply: 3397,
        totalSupply: 7567,
        inflationRate: 48370
      },
      txConfig: {
        maxAssetSize: 24924,
        maxListSize: 36217,
        maxMultisig: 3441,
        minimumStake: 27289
      },
      stakeConfig: {
        timeoutGeneral: 19645,
        timeoutStakeForNode: 94778
      },
      pokeConfig: {
        address: '05d63b1463ae7196b76a0fbee00c6040be32eabd',
        dailyLimit: 45404,
        balance: 17656,
        amount: 16857
      },
      protocols: [
        {
          name: 'fault-tolerant',
          address: 'c818b8c60364ba9b8230bc8b1ec28242ffa4ad2a'
        },
        {
          name: 'index',
          address: '0bb90c27de77527545b99f5317cef7c293319410'
        }
      ],
      upgradeInfo: {
        height: 68338,
        version: 'models'
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
    code: 500
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    219
  ],
  type: {
    pk: 1,
    hash: 7,
    address: 1,
    role: 4
  },
  passphrase: 'Money Market Account',
  moniker: 'action-items'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  token: 'program',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      200
    ],
    pk: Uint8Array [
      91
    ],
    address: '6e09a36d2d3afc1fed9526bb39dd653e92592ee8'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'fcabe0c5e43ae77543f1ff53803620212ab493a7'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41
}
});
```

### search

```js
const result = await client.search({
  key: 'Research',
  value: 'Infrastructure'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  txs: [
    {
      tx: {
        from: '3136365f406a6565bbd96d1231a5ff025925b38c',
        nonce: 68619,
        chainId: 'Reduced',
        pk: Uint8Array [
          57
        ],
        signature: Uint8Array [
          172
        ],
        signatures: [
          {
            signer: 'Taka',
            pk: Uint8Array [
              242
            ],
            signature: Uint8Array [
              152
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Mobility',
            pk: Uint8Array [
              127
            ],
            signature: Uint8Array [
              138
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
      height: 49579,
      index: 95535,
      hash: '65eb68d3dbaab30809ede23e8485edbda6631cd8',
      tags: [
        {
          key: Uint8Array [
            8
          ],
          value: Uint8Array [
            15
          ]
        },
        {
          key: Uint8Array [
            152
          ],
          value: Uint8Array [
            48
          ]
        }
      ],
      code: 17,
      time: '2019-04-22T10:23:08.368Z',
      createAsset: {
        asset: 'Handmade'
      },
      accountMigrate: {
        address: '5e1d3710da913c1d411c8e80774f52810b4533a0'
      }
    },
    {
      tx: {
        from: '97d28827ccb2d5b2f409ffe81e7ab580f1205cb4',
        nonce: 94043,
        chainId: 'Rubber',
        pk: Uint8Array [
          243
        ],
        signature: Uint8Array [
          26
        ],
        signatures: [
          {
            signer: 'synergistic',
            pk: Uint8Array [
              7
            ],
            signature: Uint8Array [
              112
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'sensor',
            pk: Uint8Array [
              69
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
      height: 52859,
      index: 97773,
      hash: 'ddae3e1558515af0ab3ce7177aa72d3e50d79069',
      tags: [
        {
          key: Uint8Array [
            84
          ],
          value: Uint8Array [
            205
          ]
        },
        {
          key: Uint8Array [
            220
          ],
          value: Uint8Array [
            13
          ]
        }
      ],
      code: 40,
      time: '2019-04-22T10:23:08.368Z',
      createAsset: {
        asset: 'panel'
      },
      accountMigrate: {
        address: '2838adee9aad45cf5d066ad3efeecb9b0eec1f5a'
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
    from: '3f249a34095a910bd40dc0b2e83f58e36f60e654',
    nonce: 84801,
    chainId: 'Facilitator',
    pk: Uint8Array [
      107
    ],
    signature: Uint8Array [
      236
    ],
    signatures: [
      {
        signer: 'extend',
        pk: Uint8Array [
          103
        ],
        signature: Uint8Array [
          219
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Oklahoma',
        pk: Uint8Array [
          150
        ],
        signature: Uint8Array [
          198
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
      pk: 0,
      hash: 1,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      166
    ],
    pk: Uint8Array [
      90
    ],
    address: 'c966af46fd604aef1986cbe472ec711a1d09bc65'
  },
  token: 'Danish Krone',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  hash: 'b7f9ea2a8b8f2c114eed0ed58b4a8d40b40e7ced'
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
  code: 25,
  hash: 'caa3e7074ca59199dec97f32d0762e6d73cc0f9c'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  topic: 'efficient',
  filter: 'Shoes'
});

// output
{
  topic: 'monetize'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Equatorial Guinea'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
