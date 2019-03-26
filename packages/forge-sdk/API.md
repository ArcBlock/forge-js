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
  * [listAssets](#listassets)
  * [listBlocks](#listblocks)
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
  from: '2eaeeaeff3216e6168e3f2abe9798f21ddc823b4',
  nonce: 55629,
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      20
    ],
    pk: Uint8Array [
      114
    ],
    address: 'a232a5972cd44f2a355881aad6e1d38a2fbb6ef4'
  },
  token: 'synergy'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  tx: {
    from: '8e8ef22cb8d6b30cebbd4f944d49cf11cbf81076',
    nonce: 98231,
    signature: Uint8Array [
      87
    ],
    chainId: 'Borders',
    signatures: [
      {
        signer: 'Brazilian Real',
        signature: Uint8Array [
          69
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Practical',
        signature: Uint8Array [
          134
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
  passphrase: 'Incredible',
  type: {
    pk: 0,
    hash: 1,
    address: 1,
    role: 2
  },
  moniker: 'Fresh'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0,
  token: 'Regional',
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      212
    ],
    pk: Uint8Array [
      6
    ],
    address: '374708843581f3228e72784b2bb8ce64c4587291'
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
  code: 500,
  wallet: {
    type: {
      pk: 1,
      hash: 2,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      243
    ],
    pk: Uint8Array [
      45
    ],
    address: '986600195bc7712d9ccbe36ac8250243234a950f'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'd73ef3dfd1ca4c2dd266eba13ce1b3e4f61c86a6',
  keys: [
    'installation',
    'Steel'
  ],
  height: 57105
});

// output
{
  code: 1,
  state: {
    balance: '12651',
    nonce: 93441,
    numTxs: 10934,
    address: 'd34d1b69d38dd7a86b160da47c013bfe50e5df98',
    pk: Uint8Array [
      135
    ],
    type: {
      pk: 1,
      hash: 7,
      address: 1,
      role: 0
    },
    moniker: 'strategize',
    context: {
      genesisTx: 'deliverables',
      renaissanceTx: 'Well',
      genesisTime: '2019-03-23T23:49:43.667Z',
      renaissanceTime: '2019-03-23T23:49:43.667Z'
    },
    issuer: 'calculating',
    migratedTo: [
      'International',
      'Senior'
    ],
    migratedFrom: [
      'Networked',
      'Bedfordshire'
    ],
    numAssets: 97236,
    stake: {
      totalStakes: '64329',
      totalUnstakes: '48332',
      totalReceivedStakes: '75418',
      recentStakes: {
        items: [
          Uint8Array [
            124
          ],
          Uint8Array [
            210
          ]
        ],
        typeUrl: 'Refined',
        maxItems: 86532,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            109
          ],
          Uint8Array [
            125
          ]
        ],
        typeUrl: 'Garden',
        maxItems: 34476,
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
          43
        ]
      ],
      typeUrl: 'Intelligent',
      maxItems: 3846,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '22017',
      leftover: '4425',
      amount: '47258'
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
  senderAddress: 'HTTP',
  itx: {
    moniker: 'Dynamic',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 44936,
    parent: 'utilisation'
  },
  walletType: {
    pk: 0,
    hash: 6,
    address: 1,
    role: 2
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  assetAddress: 'FTP'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'c1d3162cc40931df1b95dc3d0850ab4b08b553fe',
  keys: [
    'cross-platform',
    'Crescent'
  ],
  height: 12736
});

// output
{
  code: 6,
  state: {
    address: '03254436de4633738a5187122c8b6358dce0bc23',
    owner: 'Analyst',
    moniker: 'bandwidth',
    readonly: undefined,
    transferrable: undefined,
    ttl: 50030,
    consumedTime: '2019-03-23T23:49:43.668Z',
    issuer: 'Pa\'anga',
    stake: {
      totalStakes: '92865',
      totalUnstakes: '62213',
      totalReceivedStakes: '11758',
      recentStakes: {
        items: [
          Uint8Array [
            180
          ],
          Uint8Array [
            88
          ]
        ],
        typeUrl: 'Representative',
        maxItems: 98152,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            158
          ],
          Uint8Array [
            161
          ]
        ],
        typeUrl: 'Australia',
        maxItems: 96416,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'TCP',
      renaissanceTx: 'connect',
      genesisTime: '2019-03-23T23:49:43.668Z',
      renaissanceTime: '2019-03-23T23:49:43.668Z'
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
    cursor: 'Bedfordshire',
    size: 9633,
    order: [
      {
        field: 'scalable',
        type: 'productivity'
      },
      {
        field: 'Chief',
        type: 'Regional'
      }
    ]
  },
  ownerAddress: 'index'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  page: {
    cursor: 'Profit-focused',
    next: undefined,
    total: 19489
  },
  assets: [
    {
      address: '33db1f4c1905d9afb511cfd6bbcf1eb17c3e29d4',
      owner: 'Turnpike',
      genesisTime: 'Adaptive',
      renaissanceTime: 'vertical',
      moniker: 'Knoll',
      readonly: undefined
    },
    {
      address: '5b31e733922aa2b442e5f10e4b7416cde5f7d1f1',
      owner: 'Rustic',
      genesisTime: 'strategic',
      renaissanceTime: 'green',
      moniker: 'Haven',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 41548
});

// output
{
  code: 5,
  block: {
    height: 22286,
    numTxs: 55275,
    time: '2019-03-23T23:49:43.669Z',
    appHash: 'bc564f19a262a9ad5ef2422113097d34e89db458',
    proposer: 'cd032cef989563f7bc8b8e243ad57c867186f777',
    txs: [
      {
        tx: {
          from: '9305d1ac7cca5a2ae20c4b6b17644408c1116007',
          nonce: 14633,
          signature: Uint8Array [
            79
          ],
          chainId: 'web-enabled',
          signatures: [
            {
              signer: 'Industrial',
              signature: Uint8Array [
                210
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Guarani',
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
        height: 2929,
        index: 47308,
        hash: '5ccd7acb35d7d308ce0e4d96b2f1006ac23b3b12',
        tags: [
          {
            key: Uint8Array [
              185
            ],
            value: Uint8Array [
              174
            ]
          },
          {
            key: Uint8Array [
              125
            ],
            value: Uint8Array [
              130
            ]
          }
        ],
        code: 403,
        time: '2019-03-23T23:49:43.669Z',
        createAsset: {
          asset: 'process improvement'
        },
        accountMigrate: {
          address: '410af49ebe8348a03c69a74c945ffa661f3242a8'
        }
      },
      {
        tx: {
          from: '37ea2b0f1abf5f00f28c608df1f7e1aeecfa3392',
          nonce: 87999,
          signature: Uint8Array [
            136
          ],
          chainId: 'hard drive',
          signatures: [
            {
              signer: 'navigate',
              signature: Uint8Array [
                228
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'core',
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
        },
        height: 91085,
        index: 20968,
        hash: '5797a45ff678aa652ad9dad4224316f1153ea712',
        tags: [
          {
            key: Uint8Array [
              162
            ],
            value: Uint8Array [
              235
            ]
          },
          {
            key: Uint8Array [
              5
            ],
            value: Uint8Array [
              141
            ]
          }
        ],
        code: 26,
        time: '2019-03-23T23:49:43.670Z',
        createAsset: {
          asset: 'parsing'
        },
        accountMigrate: {
          address: '7e09d3f60c6b52eabc13667404a7052355b954be'
        }
      }
    ],
    totalTxs: 48365,
    invalidTxs: [
      {
        tx: {
          from: 'afe6de0d794472d514533d8c9d728894bc1986b6',
          nonce: 37417,
          signature: Uint8Array [
            14
          ],
          chainId: 'JSON',
          signatures: [
            {
              signer: 'Guadeloupe',
              signature: Uint8Array [
                208
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Illinois',
              signature: Uint8Array [
                152
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
        height: 45208,
        index: 79800,
        hash: 'bfbe3e5af065608e23cf22f2b5e73b33954af7ad',
        tags: [
          {
            key: Uint8Array [
              66
            ],
            value: Uint8Array [
              42
            ]
          },
          {
            key: Uint8Array [
              12
            ],
            value: Uint8Array [
              76
            ]
          }
        ],
        code: 22,
        time: '2019-03-23T23:49:43.670Z',
        createAsset: {
          asset: 'Road'
        },
        accountMigrate: {
          address: '561800860c15f81b128fbfbb422bc83c6d6045a7'
        }
      },
      {
        tx: {
          from: 'bfb6379e6eb24c489326224be1d2e3cd5501dcba',
          nonce: 65248,
          signature: Uint8Array [
            28
          ],
          chainId: 'SMS',
          signatures: [
            {
              signer: 'Focused',
              signature: Uint8Array [
                119
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'navigate',
              signature: Uint8Array [
                111
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
        height: 6923,
        index: 76963,
        hash: '2f8462a5a64abe52ec3c823b228cc6ad0aaab541',
        tags: [
          {
            key: Uint8Array [
              130
            ],
            value: Uint8Array [
              196
            ]
          },
          {
            key: Uint8Array [
              6
            ],
            value: Uint8Array [
              153
            ]
          }
        ],
        code: 11,
        time: '2019-03-23T23:49:43.670Z',
        createAsset: {
          asset: 'mindshare'
        },
        accountMigrate: {
          address: '18854c9416170439ff82744d187d4e3a0259a347'
        }
      }
    ],
    txsHashes: [
      'Hat',
      'Strategist'
    ],
    invalidTxsHashes: [
      'schemas',
      'Computers'
    ],
    consensusHash: Uint8Array [
      52
    ],
    dataHash: Uint8Array [
      186
    ],
    evidenceHash: Uint8Array [
      199
    ],
    lastCommitHash: Uint8Array [
      132
    ],
    lastResultsHash: Uint8Array [
      190
    ],
    nextValidatorsHash: Uint8Array [
      166
    ],
    validatorsHash: Uint8Array [
      207
    ],
    version: {
      Block: 15351,
      App: 7154
    },
    lastBlockId: {
      hash: 'd5b6ed9ae2f935070c71eb6a527826c0dd8a2888',
      partsHeader: undefined
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Planner',
    size: 9480,
    order: [
      {
        field: 'Computer',
        type: 'zero tolerance'
      },
      {
        field: 'Ohio',
        type: 'solutions'
      }
    ]
  },
  minHeight: 95301,
  maxHeight: 17625,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'Auto Loan Account',
    next: undefined,
    total: 67525
  },
  blocks: [
    {
      height: 27895,
      numTxs: 71845,
      time: '2019-03-23T23:49:43.671Z',
      appHash: 'a6b1c505293afab90f41ba4bb68047a7a7cec422',
      proposer: '82f180c14e0d1ef9d955c1e2e00287841e37b4c7',
      txs: [
        {
          tx: {
            from: '4cc10235c7ac27a97e4ac8d07c73bf768977c3b6',
            nonce: 59734,
            signature: Uint8Array [
              1
            ],
            chainId: 'quantify',
            signatures: [
              {
                signer: 'invoice',
                signature: Uint8Array [
                  173
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Directives',
                signature: Uint8Array [
                  25
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
          height: 41647,
          index: 69460,
          hash: '1f4a9b6614f7bcbc8157ec777ac782f32958fa23',
          tags: [
            {
              key: Uint8Array [
                84
              ],
              value: Uint8Array [
                50
              ]
            },
            {
              key: Uint8Array [
                65
              ],
              value: Uint8Array [
                102
              ]
            }
          ],
          code: 35,
          time: '2019-03-23T23:49:43.671Z',
          createAsset: {
            asset: 'Austria'
          },
          accountMigrate: {
            address: 'fb5cce4c4e190abcdec2fe2abf1cc4d571bcd16b'
          }
        },
        {
          tx: {
            from: '3b5e725a34a93c9c705c12f854d927fe3b8a2fc8',
            nonce: 36436,
            signature: Uint8Array [
              49
            ],
            chainId: 'Electronics',
            signatures: [
              {
                signer: 'Romania',
                signature: Uint8Array [
                  144
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Grocery',
                signature: Uint8Array [
                  85
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
          height: 86102,
          index: 94730,
          hash: '33741c4a580314cb31a401cfea65e9af8a235110',
          tags: [
            {
              key: Uint8Array [
                3
              ],
              value: Uint8Array [
                9
              ]
            },
            {
              key: Uint8Array [
                115
              ],
              value: Uint8Array [
                111
              ]
            }
          ],
          code: 39,
          time: '2019-03-23T23:49:43.672Z',
          createAsset: {
            asset: 'Lead'
          },
          accountMigrate: {
            address: '8c065ae60a635f4e4db286631f285a27d251035a'
          }
        }
      ],
      totalTxs: 70924,
      invalidTxs: [
        {
          tx: {
            from: '94324a355b5cf7dc0c6d46e0ddd8fafde796a19b',
            nonce: 20796,
            signature: Uint8Array [
              132
            ],
            chainId: 'Intelligent Wooden Computer',
            signatures: [
              {
                signer: 'Intelligent Fresh Table',
                signature: Uint8Array [
                  205
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Gorgeous Metal Chips',
                signature: Uint8Array [
                  50
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
          height: 31888,
          index: 8552,
          hash: 'ddf5a638f16b3c35f06ae80164883956e64acb30',
          tags: [
            {
              key: Uint8Array [
                89
              ],
              value: Uint8Array [
                73
              ]
            },
            {
              key: Uint8Array [
                21
              ],
              value: Uint8Array [
                218
              ]
            }
          ],
          code: 16,
          time: '2019-03-23T23:49:43.672Z',
          createAsset: {
            asset: 'RAM'
          },
          accountMigrate: {
            address: '369409b3a60fac7fa998c1a6e08975dad6a7859d'
          }
        },
        {
          tx: {
            from: '2ab2766caedfddb6261b2e35b98e00425a87be10',
            nonce: 2223,
            signature: Uint8Array [
              164
            ],
            chainId: 'program',
            signatures: [
              {
                signer: 'Handcrafted',
                signature: Uint8Array [
                  95
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'calculate',
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
          height: 7064,
          index: 11806,
          hash: 'e7244fc02da64e6ec259689503ff9c5e78a3c783',
          tags: [
            {
              key: Uint8Array [
                17
              ],
              value: Uint8Array [
                48
              ]
            },
            {
              key: Uint8Array [
                53
              ],
              value: Uint8Array [
                19
              ]
            }
          ],
          code: 41,
          time: '2019-03-23T23:49:43.673Z',
          createAsset: {
            asset: 'Poland'
          },
          accountMigrate: {
            address: '64756d8d4310328c43b32ff2b4020d44acb078e9'
          }
        }
      ],
      txsHashes: [
        'Oregon',
        'client-driven'
      ],
      invalidTxsHashes: [
        'grid-enabled',
        'Home Loan Account'
      ],
      consensusHash: Uint8Array [
        83
      ],
      dataHash: Uint8Array [
        187
      ],
      evidenceHash: Uint8Array [
        119
      ],
      lastCommitHash: Uint8Array [
        69
      ],
      lastResultsHash: Uint8Array [
        37
      ],
      nextValidatorsHash: Uint8Array [
        188
      ],
      validatorsHash: Uint8Array [
        251
      ],
      version: {
        Block: 70867,
        App: 608
      },
      lastBlockId: {
        hash: 'e196b9831863a4b20dc523fd4044294537e151b2',
        partsHeader: undefined
      }
    },
    {
      height: 59043,
      numTxs: 646,
      time: '2019-03-23T23:49:43.673Z',
      appHash: 'f0795059fb993a94e61e1abf89dd54bd66794450',
      proposer: '7fa48edd07d05be93914a595eb7bc6f49ac11a3e',
      txs: [
        {
          tx: {
            from: '2aa18b183b9c9a84bd6b35458867574bab289971',
            nonce: 19647,
            signature: Uint8Array [
              53
            ],
            chainId: 'Berkshire',
            signatures: [
              {
                signer: 'bypass',
                signature: Uint8Array [
                  105
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'French Southern Territories',
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
          height: 68737,
          index: 74182,
          hash: 'ed5f12a60c71162ffe3dd77b43547d4bca012180',
          tags: [
            {
              key: Uint8Array [
                184
              ],
              value: Uint8Array [
                190
              ]
            },
            {
              key: Uint8Array [
                46
              ],
              value: Uint8Array [
                229
              ]
            }
          ],
          code: 9,
          time: '2019-03-23T23:49:43.673Z',
          createAsset: {
            asset: 'Research'
          },
          accountMigrate: {
            address: 'aa566e5099ddd4761d0fbf9ede640af795c55f59'
          }
        },
        {
          tx: {
            from: '44d77b3adc6083e00813e29c957dbf50712aef17',
            nonce: 81467,
            signature: Uint8Array [
              255
            ],
            chainId: 'Bike',
            signatures: [
              {
                signer: 'Philippines',
                signature: Uint8Array [
                  206
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'input',
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
          height: 91819,
          index: 29973,
          hash: '765e205f37df5e039458a85d750ddf27d5ab1ac2',
          tags: [
            {
              key: Uint8Array [
                100
              ],
              value: Uint8Array [
                58
              ]
            },
            {
              key: Uint8Array [
                167
              ],
              value: Uint8Array [
                8
              ]
            }
          ],
          code: 0,
          time: '2019-03-23T23:49:43.673Z',
          createAsset: {
            asset: 'array'
          },
          accountMigrate: {
            address: '9f1e8f1873c75e76218d8090ac3a37202d2444b1'
          }
        }
      ],
      totalTxs: 23774,
      invalidTxs: [
        {
          tx: {
            from: 'aa4029fca57e05c6c90a3285113deba75c04478f',
            nonce: 82559,
            signature: Uint8Array [
              161
            ],
            chainId: 'SCSI',
            signatures: [
              {
                signer: 'salmon',
                signature: Uint8Array [
                  243
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'lime',
                signature: Uint8Array [
                  50
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
          height: 19968,
          index: 85477,
          hash: '3e360d241b3f8e969bf189927b1c014f416ac360',
          tags: [
            {
              key: Uint8Array [
                155
              ],
              value: Uint8Array [
                2
              ]
            },
            {
              key: Uint8Array [
                102
              ],
              value: Uint8Array [
                254
              ]
            }
          ],
          code: 31,
          time: '2019-03-23T23:49:43.674Z',
          createAsset: {
            asset: 'Refined Fresh Table'
          },
          accountMigrate: {
            address: 'a1f3035782eeef98dfd48b1d599f2659766671bc'
          }
        },
        {
          tx: {
            from: '0f37d630c7d30b8686fdb2bc35a88ac7d8e657dc',
            nonce: 65074,
            signature: Uint8Array [
              96
            ],
            chainId: 'web-enabled',
            signatures: [
              {
                signer: 'Colorado',
                signature: Uint8Array [
                  1
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'ability',
                signature: Uint8Array [
                  227
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
          height: 57535,
          index: 19181,
          hash: '5e57a0f9040c5e037470bf7cae9fe4605da9839a',
          tags: [
            {
              key: Uint8Array [
                58
              ],
              value: Uint8Array [
                77
              ]
            },
            {
              key: Uint8Array [
                45
              ],
              value: Uint8Array [
                239
              ]
            }
          ],
          code: 35,
          time: '2019-03-23T23:49:43.674Z',
          createAsset: {
            asset: 'transmitter'
          },
          accountMigrate: {
            address: '00d2b919d6081c832259280dfb299839c27c2629'
          }
        }
      ],
      txsHashes: [
        'Spring',
        'RSS'
      ],
      invalidTxsHashes: [
        'facilitate',
        'Games'
      ],
      consensusHash: Uint8Array [
        83
      ],
      dataHash: Uint8Array [
        162
      ],
      evidenceHash: Uint8Array [
        222
      ],
      lastCommitHash: Uint8Array [
        120
      ],
      lastResultsHash: Uint8Array [
        144
      ],
      nextValidatorsHash: Uint8Array [
        170
      ],
      validatorsHash: Uint8Array [
        26
      ],
      version: {
        Block: 86552,
        App: 91357
      },
      lastBlockId: {
        hash: 'dfd27f2b3db7223c85bb8af124963394375f500e',
        partsHeader: undefined
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
  code: 500,
  info: {
    id: 'Kansas',
    network: 'parse',
    moniker: 'backing up',
    consensusVersion: 'open-source',
    synced: undefined,
    appHash: 'a3a0059363b9363482f2c5ef1aa96167facac7d3',
    blockHash: Uint8Array [
      50
    ],
    blockHeight: 95952,
    blockTime: '2019-03-23T23:49:43.675Z',
    address: 'a4e64bcd75ca93018126cf13f41857abf21dc00e',
    votingPower: 82791,
    totalTxs: 34017,
    version: 'Buckinghamshire',
    dataVersion: 'Cotton',
    forgeAppsVersion: {
      Bike: 'Pennsylvania'
    },
    supportedTxs: [
      'solid state',
      'Intranet'
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
  code: 3,
  config: 'Tools'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Outdoors',
    'homogeneous'
  ],
  height: 67417
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 11,
  state: {
    address: '151cc37a8a713fa5f6039cbc379aeec952778bfb',
    consensus: {
      maxBytes: 29643,
      maxGas: 46906,
      maxValidators: 32423,
      maxCandidates: 76980,
      pubKeyTypes: [
        'knowledge base',
        'extensible'
      ],
      validators: [
        {
          address: '842e893110f2c4434a119123a2e0170d88b615d4',
          power: 50736
        },
        {
          address: '5fe542353442e75c7afae00c39aee68b4e41c8fd',
          power: 90975
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '40256': {
        item: [
          {
            type: 0,
            dataHash: 'analyzing',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 3,
            dataHash: '24 hour',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '91482': {
        totalStakes: '47930',
        totalUnstakes: '10531',
        context: {
          genesisTx: 'reboot',
          renaissanceTx: 'Checking Account',
          genesisTime: '2019-03-23T23:49:43.676Z',
          renaissanceTime: '2019-03-23T23:49:43.676Z'
        }
      }
    },
    version: 'array',
    dataVersion: 'visionary',
    forgeAppHash: Uint8Array [
      222
    ],
    token: {
      name: 'River',
      symbol: 'Granite',
      unit: 'Parkways',
      description: 'alarm',
      icon: Uint8Array [
        223
      ],
      decimal: 32492,
      initialSupply: 7848,
      totalSupply: 46527,
      inflationRate: 59502
    },
    txConfig: {
      maxAssetSize: 36270,
      maxListSize: 90174,
      maxMultisig: 97633,
      minimumStake: 76907
    },
    stakeConfig: {
      timeoutGeneral: 35482,
      timeoutStakeForNode: 67771
    },
    pokeConfig: {
      address: '6bafae2f57a9de3a8f6ac88ace89e15ed2f6e23b',
      dailyLimit: 66344,
      balance: 8218,
      amount: 60875
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
    startDate: 'Glens',
    endDate: 'JBOD'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  forgeStatistics: {
    numBlocks: [
      59698,
      83266
    ],
    numTxs: [
      56163,
      22290
    ],
    numStakes: [
      '13084',
      '19247'
    ],
    numValidators: [
      50734,
      11407
    ],
    numAccountMigrateTxs: [
      45431,
      463
    ],
    numCreateAssetTxs: [
      71544,
      76024
    ],
    numConsensusUpgradeTxs: [
      23669,
      15601
    ],
    numDeclareTxs: [
      30547,
      8593
    ],
    numDeclareFileTxs: [
      37260,
      5332
    ],
    numExchangeTxs: [
      28315,
      53609
    ],
    numStakeTxs: [
      78467,
      85550
    ],
    numSysUpgradeTxs: [
      42862,
      18738
    ],
    numTransferTxs: [
      79151,
      35113
    ],
    numUpdateAssetTxs: [
      84380,
      79121
    ],
    numConsumeAssetTxs: [
      97831,
      89528
    ],
    numPokeTxs: [
      28908,
      78074
    ],
    tps: [
      4202,
      8315
    ],
    maxTps: 60024,
    avgTps: 87115
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
  code: 24,
  netInfo: {
    listening: undefined,
    listeners: [
      'Rubber',
      'International'
    ],
    nPeers: 27303,
    peers: [
      {
        id: 'Analyst',
        network: 'Home Loan Account',
        consensusVersion: 'generate',
        moniker: 'zero tolerance',
        ip: 'Lek',
        geoInfo: {
          city: 'Investment Account',
          country: 'payment',
          latitude: 78885.35,
          longitude: 49330.23
        }
      },
      {
        id: 'invoice',
        network: 'Strategist',
        consensusVersion: 'Senior',
        moniker: 'Cambridgeshire',
        ip: 'Table',
        geoInfo: {
          city: 'override',
          country: 'infrastructure',
          latitude: 71001.99,
          longitude: 67207.63
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
  code: 500,
  info: {
    id: 'invoice',
    network: 'Assistant',
    moniker: 'Re-engineered',
    consensusVersion: 'primary',
    synced: undefined,
    appHash: 'e6d86dc5c283624f725c357463781ab42739afc8',
    blockHash: Uint8Array [
      129
    ],
    blockHeight: 65138,
    blockTime: '2019-03-23T23:49:43.678Z',
    address: '4c58d00ea1976aa883d1fb15798aed787d031f68',
    votingPower: 99417,
    totalTxs: 59364,
    version: 'virtual',
    dataVersion: 'United Kingdom',
    forgeAppsVersion: {
      'best-of-breed': 'Georgia'
    },
    supportedTxs: [
      'Savings Account',
      'cross-media'
    ],
    ip: 'index',
    geoInfo: {
      city: 'USB',
      country: 'Intranet',
      latitude: 43252.94,
      longitude: 45827.35
    },
    p2pAddress: 'HDD'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: 'b69db03bfb542873e44822270dcfc8c7d2171961',
  keys: [
    'Tools',
    'mint green'
  ],
  height: 56614
});

// output
{
  code: 37,
  state: {
    address: '4c88e18aa61a23c0ac6d73ba204a8eeb6a03a7c8',
    from: '846d52033703e9b7fcea07ecc3e4520a31e7e5a5',
    to: '166cdaad7b8c4e2ad6ccbfd235af60f07bf8216a',
    balance: '42120',
    message: 'capacitor',
    context: {
      genesisTx: 'Checking Account',
      renaissanceTx: 'clear-thinking',
      genesisTime: '2019-03-23T23:49:43.679Z',
      renaissanceTime: '2019-03-23T23:49:43.679Z'
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
    cursor: 'Salad',
    size: 58656,
    order: [
      {
        field: 'Balboa US Dollar',
        type: 'workforce'
      },
      {
        field: 'Hat',
        type: 'bifurcated'
      }
    ]
  },
  addressFilter: {
    sender: 'Clothing',
    receiver: 'experiences',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: 'index',
    next: undefined,
    total: 22538
  },
  stakes: [
    {
      address: '832476d2d1a2ead29a13fd93d91e7c7c64aa07f7',
      balance: '66212',
      sender: 'Steel',
      receiver: 'bleeding-edge',
      genesisTime: 'Web',
      renaissanceTime: 'Computers',
      message: 'hardware',
      type: 50515
    },
    {
      address: '8587fb061f13f85704063d315c488aa0ec7a540e',
      balance: '82631',
      sender: 'Brunei Dollar',
      receiver: 'Chips',
      genesisTime: 'International',
      renaissanceTime: 'transmitter',
      message: 'Graphical User Interface',
      type: 96604
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Crossroad',
    size: 55667,
    order: [
      {
        field: 'Future',
        type: 'Legacy'
      },
      {
        field: 'North Korean Won',
        type: 'Ohio'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  page: {
    cursor: 'quantifying',
    next: undefined,
    total: 86246
  },
  accounts: [
    {
      address: '6d9184487a168c4b06582c086dd16d3cccc122da',
      balance: '50606',
      numAssets: 3693,
      numTxs: 23591,
      nonce: 72390,
      genesisTime: 'holistic',
      renaissanceTime: 'Awesome Steel Hat',
      moniker: 'orchid',
      migratedFrom: 'aggregate',
      migratedTo: 'Fiji',
      totalReceivedStakes: '19275',
      totalStakes: '73744',
      totalUnstakes: '48509',
      recentNumTxs: [
        72802,
        83970
      ]
    },
    {
      address: '2cb3b9ff8d660bbe26edaffb12cf6f7f317f9e76',
      balance: '88869',
      numAssets: 25230,
      numTxs: 90891,
      nonce: 67042,
      genesisTime: 'Practical',
      renaissanceTime: 'teal',
      moniker: 'productize',
      migratedFrom: 'Money Market Account',
      migratedTo: 'quantifying',
      totalReceivedStakes: '77401',
      totalStakes: '44208',
      totalUnstakes: '58058',
      recentNumTxs: [
        79719,
        66796
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '2b3cd064ce89700b123fd6c8a5e6aef2780420cd'
});

// output
{
  code: 4,
  info: {
    tx: {
      from: '2427419fea9f747cb604e305d1ee4bc55a6818ce',
      nonce: 91491,
      signature: Uint8Array [
        252
      ],
      chainId: 'leverage',
      signatures: [
        {
          signer: 'interactive',
          signature: Uint8Array [
            110
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'deposit',
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
    height: 83153,
    index: 72174,
    hash: '70ecda8f32e851f8b3c2d56550d5dea5848274da',
    tags: [
      {
        key: Uint8Array [
          201
        ],
        value: Uint8Array [
          35
        ]
      },
      {
        key: Uint8Array [
          11
        ],
        value: Uint8Array [
          52
        ]
      }
    ],
    code: 37,
    time: '2019-03-23T23:49:43.681Z',
    createAsset: {
      asset: 'innovative'
    },
    accountMigrate: {
      address: '91ae220a12ccb28b023067cc467df9d482a8907e'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 77052
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  unconfirmedTxs: {
    nTxs: 75674,
    txs: [
      {
        from: '124000e67dc54c94e8be21bd8ca6cc391ff27e71',
        nonce: 6111,
        signature: Uint8Array [
          33
        ],
        chainId: 'Senior',
        signatures: [
          {
            signer: 'value-added',
            signature: Uint8Array [
              57
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'IB',
            signature: Uint8Array [
              168
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
        from: '7b9337713b40fa4602f9a68a802bf22728bd98ff',
        nonce: 25043,
        signature: Uint8Array [
          218
        ],
        chainId: 'red',
        signatures: [
          {
            signer: 'Car',
            signature: Uint8Array [
              231
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Wyoming',
            signature: Uint8Array [
              27
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
  code: 35,
  validatorsInfo: {
    blockHeight: 316,
    validators: [
      {
        address: '546f259db9661da7a41cb8914fa644f132a117ec',
        pubKey: {
          type: 'Auto Loan Account',
          data: Uint8Array [
            115
          ]
        },
        votingPower: 2893,
        proposerPriority: 'firewall',
        name: 'Forest',
        geoInfo: {
          city: 'ivory',
          country: 'e-tailers',
          latitude: 84873.83,
          longitude: 2760.91
        }
      },
      {
        address: '6e900cf69ff1af00b0703c92c223387b7657c1f7',
        pubKey: {
          type: 'backing up',
          data: Uint8Array [
            51
          ]
        },
        votingPower: 34577,
        proposerPriority: 'Incredible',
        name: 'Buckinghamshire',
        geoInfo: {
          city: 'Persistent',
          country: 'Credit Card Account',
          latitude: 53965.31,
          longitude: 86764.76
        }
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
    size: 82187,
    order: [
      {
        field: 'panel',
        type: 'Delaware'
      },
      {
        field: 'array',
        type: 'monetize'
      }
    ]
  },
  address: '34f279721e75d94b0f16f844ff12d930db8681d4'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  page: {
    cursor: 'Granite',
    next: undefined,
    total: 59138
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Beauty'
      }
    },
    {
      consumeAsset: {
        asset: 'Cotton'
      }
    }
  ]
}
});
```

### listAssets

```js
const result = await client.listAssets({
  paging: {
    cursor: 'Alaska',
    size: 88927,
    order: [
      {
        field: 'XSS',
        type: 'invoice'
      },
      {
        field: 'Regional',
        type: 'empowering'
      }
    ]
  },
  ownerAddress: 'Station'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  page: {
    cursor: 'Response',
    next: undefined,
    total: 26986
  },
  account: {
    address: '742894b6a03d9b3dea84f53bb34fbcbc0db648be',
    balance: '37310',
    numAssets: 53656,
    numTxs: 34431,
    nonce: 92639,
    genesisTime: 'Avon',
    renaissanceTime: 'tan',
    moniker: 'Assistant',
    migratedFrom: 'Steel',
    migratedTo: 'Corner',
    totalReceivedStakes: '70411',
    totalStakes: '26059',
    totalUnstakes: '17200',
    recentNumTxs: [
      70798,
      10129
    ]
  },
  assets: [
    {
      address: 'f22367b6a4a8e6272078b4c7bcbca9f76da8de2a',
      owner: 'communities',
      genesisTime: 'Team-oriented',
      renaissanceTime: 'array',
      moniker: 'navigate',
      readonly: undefined
    },
    {
      address: 'cf38450a73ab7cbf4568f22d3b9f531b26fb5c74',
      owner: 'multi-byte',
      genesisTime: 'matrix',
      renaissanceTime: 'Avon',
      moniker: 'e-services',
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
    cursor: 'Tuna',
    size: 37561,
    order: [
      {
        field: 'aggregate',
        type: 'Rand Loti'
      },
      {
        field: 'one-to-one',
        type: 'card'
      }
    ]
  },
  proposer: '5abbb87918ad4abbcdd46a13e829ca3577100023',
  timeFilter: {
    startDateTime: 'uniform',
    endDateTime: 'azure'
  },
  heightFilter: {
    fromHeight: 68241,
    toHeight: 78087
  },
  numTxsFilter: {
    minNumTxs: 65774,
    maxNumTxs: 76561
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 20660,
    maxNumInvalidTxs: 15424
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  page: {
    cursor: 'Mobility',
    next: undefined,
    total: 36471
  },
  blocks: [
    {
      height: 20962,
      time: 'EXE',
      proposer: '6213843e5560148714d47cddbe733dd34486947b',
      numTxs: 63704,
      numInvalidTxs: 70435
    },
    {
      height: 21870,
      time: 'purple',
      proposer: '5f1bd509898e34fe7abe8c4baafb189306c563a8',
      numTxs: 43854,
      numInvalidTxs: 24175
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'Mobility',
    size: 57550,
    order: [
      {
        field: 'fuchsia',
        type: 'Supervisor'
      },
      {
        field: 'Music',
        type: 'emulation'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'capacitor',
    endDateTime: 'contextually-based'
  },
  addressFilter: {
    sender: 'Squares',
    receiver: 'framework',
    direction: 0
  },
  typeFilter: {
    types: [
      'Streets',
      'Assistant'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  page: {
    cursor: 'Producer',
    next: undefined,
    total: 75092
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Markets'
      }
    },
    {
      consumeAsset: {
        asset: 'port'
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
  code: 37,
  address: '96d9780e9a9fec77d92e80c5f47a0d67d07e9553'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '2320a1500bdc16b009cd4557e87de80cba7e1cc6'
});

// output
{
  code: 40,
  chunk: Uint8Array [
    25
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: 'a717962251b7e05d94764c5daade05e3c6cf7d27',
  passphrase: 'Plaza'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  token: 'Barbados Dollar',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      110
    ],
    pk: Uint8Array [
      102
    ],
    address: '952436e36f665f2abae1ea9996dac6383e2aebae'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '7d51f3df4a2a512433063e7d3711835d5785d28b',
    nonce: 70140,
    signature: Uint8Array [
      61
    ],
    chainId: 'Officer',
    signatures: [
      {
        signer: 'Ohio',
        signature: Uint8Array [
          125
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'fault-tolerant',
        signature: Uint8Array [
          49
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
      hash: 0,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      194
    ],
    pk: Uint8Array [
      248
    ],
    address: '911981d1e1097c2e02745007ad4159e4fabe58de'
  },
  token: 'Awesome Frozen Bike'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  tx: {
    from: '5a5d8b4b2f6ff4ff5215f658510c7debd248ca6d',
    nonce: 35983,
    signature: Uint8Array [
      127
    ],
    chainId: 'Architect',
    signatures: [
      {
        signer: 'Personal Loan Account',
        signature: Uint8Array [
          204
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'parsing',
        signature: Uint8Array [
          205
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
  hash: '2a9306f7ca328b9f1a5cfe64859e59f0c0094cad'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '9c65b60ad1c8644f723858647943de2b0b13fafe',
      nonce: 92839,
      signature: Uint8Array [
        185
      ],
      chainId: 'compressing',
      signatures: [
        {
          signer: 'Computer',
          signature: Uint8Array [
            150
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Electronics',
          signature: Uint8Array [
            187
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
        balance: '39653',
        nonce: 14389,
        numTxs: 59491,
        address: '93e38cb745dd8e19bdc8bfc5f87df21efddf34b3',
        pk: Uint8Array [
          162
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 0,
          role: 2
        },
        moniker: 'copying',
        context: {
          genesisTx: 'IB',
          renaissanceTx: 'Computers',
          genesisTime: '2019-03-23T23:49:43.685Z',
          renaissanceTime: '2019-03-23T23:49:43.685Z'
        },
        issuer: 'Savings Account',
        migratedTo: [
          'Pizza',
          'Soap'
        ],
        migratedFrom: [
          'Bike',
          'Integrated'
        ],
        numAssets: 20892,
        stake: {
          totalStakes: '38244',
          totalUnstakes: '29875',
          totalReceivedStakes: '14020',
          recentStakes: {
            items: [
              Uint8Array [
                78
              ],
              Uint8Array [
                235
              ]
            ],
            typeUrl: 'cross-platform',
            maxItems: 75341,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                126
              ],
              Uint8Array [
                19
              ]
            ],
            typeUrl: 'impactful',
            maxItems: 83335,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              198
            ],
            Uint8Array [
              86
            ]
          ],
          typeUrl: 'haptic',
          maxItems: 97383,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '94907',
          leftover: '35893',
          amount: '96397'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '8854',
        nonce: 56679,
        numTxs: 60941,
        address: '14f9a36da43b8f81ad70e098c92b42c9a64b0a99',
        pk: Uint8Array [
          30
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 5
        },
        moniker: 'Botswana',
        context: {
          genesisTx: 'USB',
          renaissanceTx: 'Assistant',
          genesisTime: '2019-03-23T23:49:43.685Z',
          renaissanceTime: '2019-03-23T23:49:43.685Z'
        },
        issuer: 'Home',
        migratedTo: [
          'Savings Account',
          'Agent'
        ],
        migratedFrom: [
          'Fresh',
          'invoice'
        ],
        numAssets: 96355,
        stake: {
          totalStakes: '45992',
          totalUnstakes: '79624',
          totalReceivedStakes: '42585',
          recentStakes: {
            items: [
              Uint8Array [
                187
              ],
              Uint8Array [
                20
              ]
            ],
            typeUrl: 'Nicaragua',
            maxItems: 81665,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                197
              ],
              Uint8Array [
                70
              ]
            ],
            typeUrl: 'neural',
            maxItems: 33110,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              134
            ],
            Uint8Array [
              82
            ]
          ],
          typeUrl: 'hacking',
          maxItems: 87685,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '88375',
          leftover: '91940',
          amount: '79603'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '8ba0c0b92385818cff2d903f1f5ef71ecdaed8e3',
        owner: 'Bedfordshire',
        moniker: 'Director',
        readonly: undefined,
        transferrable: undefined,
        ttl: 45299,
        consumedTime: '2019-03-23T23:49:43.685Z',
        issuer: 'maroon',
        stake: {
          totalStakes: '3910',
          totalUnstakes: '16060',
          totalReceivedStakes: '9968',
          recentStakes: {
            items: [
              Uint8Array [
                57
              ],
              Uint8Array [
                48
              ]
            ],
            typeUrl: 'supply-chains',
            maxItems: 3637,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                71
              ],
              Uint8Array [
                96
              ]
            ],
            typeUrl: 'solid state',
            maxItems: 36488,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Consultant',
          renaissanceTx: 'JSON',
          genesisTime: '2019-03-23T23:49:43.685Z',
          renaissanceTime: '2019-03-23T23:49:43.685Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'd7d2c697f805624bada0d4e24740b313521c90f2',
        owner: 'Director',
        moniker: 'Nepal',
        readonly: undefined,
        transferrable: undefined,
        ttl: 50500,
        consumedTime: '2019-03-23T23:49:43.685Z',
        issuer: 'Chief',
        stake: {
          totalStakes: '83670',
          totalUnstakes: '70093',
          totalReceivedStakes: '59596',
          recentStakes: {
            items: [
              Uint8Array [
                193
              ],
              Uint8Array [
                144
              ]
            ],
            typeUrl: 'next-generation',
            maxItems: 36087,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                159
              ],
              Uint8Array [
                173
              ]
            ],
            typeUrl: 'Unbranded Metal Chips',
            maxItems: 25232,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Investor',
          renaissanceTx: 'Maine',
          genesisTime: '2019-03-23T23:49:43.685Z',
          renaissanceTime: '2019-03-23T23:49:43.685Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'c3323dfc8653ffad0c4a18e0eb9744a526783819',
        from: 'baf6114d7bcb1514850861434f74bc800d785b8d',
        to: '1a1374773ba472667aefe8f7cdf767377c6c56b9',
        balance: '14221',
        message: 'Tasty',
        context: {
          genesisTx: 'New Israeli Sheqel',
          renaissanceTx: 'Rhode Island',
          genesisTime: '2019-03-23T23:49:43.686Z',
          renaissanceTime: '2019-03-23T23:49:43.686Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '9cd5bb6475803f7baf62a2e37f258992decef946',
        from: '762dea051715dc98a08361a6275687795235b287',
        to: 'b464f1b20691ed0daea1a8331e105a7a69c4abe7',
        balance: '36736',
        message: 'Licensed Metal Sausages',
        context: {
          genesisTx: 'Ball',
          renaissanceTx: 'Wooden',
          genesisTime: '2019-03-23T23:49:43.686Z',
          renaissanceTime: '2019-03-23T23:49:43.686Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '8a23a0b34523b7c5ada2586e3e5da2f273839ba7',
      blockHeight: 89139,
      blockTime: '2019-03-23T23:49:43.686Z',
      totalTxs: 34065,
      txStatistics: {
        numAccountMigrateTxs: 23216,
        numCreateAssetTxs: 40615,
        numConsensusUpgradeTxs: 19517,
        numDeclareTxs: 88988,
        numDeclareFileTxs: 27826,
        numExchangeTxs: 55123,
        numStakeTxs: 25975,
        numSysUpgradeTxs: 30221,
        numTransferTxs: 10057,
        numUpdateAssetTxs: 73589,
        numConsumeAssetTxs: 96936,
        numPokeTxs: 38091
      },
      txIndex: 53275,
      lastBlockTime: '2019-03-23T23:49:43.686Z'
    },
    appState: {
      address: '9714124e1bc519b51d4aaca6f62944ca3d18264c',
      consensus: {
        maxBytes: 89945,
        maxGas: 35889,
        maxValidators: 60168,
        maxCandidates: 54379,
        pubKeyTypes: [
          'payment',
          'Bedfordshire'
        ],
        validators: [
          {
            address: '413cebb8137b599df5eb265217fdb77cf0063858',
            power: 80335
          },
          {
            address: '8bbeab9f35d0faef330a42e1bef7113471619cf7',
            power: 19050
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '59433': {
          item: [
            {
              type: 0,
              dataHash: 'Optimization',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'Baby',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '40623': {
          totalStakes: '37028',
          totalUnstakes: '38510',
          context: {
            genesisTx: 'Planner',
            renaissanceTx: 'programming',
            genesisTime: '2019-03-23T23:49:43.686Z',
            renaissanceTime: '2019-03-23T23:49:43.686Z'
          }
        }
      },
      version: 'e-enable',
      dataVersion: 'invoice',
      forgeAppHash: Uint8Array [
        192
      ],
      token: {
        name: 'Chair',
        symbol: 'Toys',
        unit: 'array',
        description: 'Fiji Dollar',
        icon: Uint8Array [
          190
        ],
        decimal: 54117,
        initialSupply: 65066,
        totalSupply: 76404,
        inflationRate: 78622
      },
      txConfig: {
        maxAssetSize: 20756,
        maxListSize: 34498,
        maxMultisig: 96138,
        minimumStake: 73837
      },
      stakeConfig: {
        timeoutGeneral: 52288,
        timeoutStakeForNode: 71957
      },
      pokeConfig: {
        address: '97e0a2860be05d7877d113121104e3dc13b3489f',
        dailyLimit: 24664,
        balance: 81111,
        amount: 74687
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
    code: 4
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '1a3eb6e4766b876e29b7161ea586bcda364e7a10',
      nonce: 65273,
      signature: Uint8Array [
        215
      ],
      chainId: 'AI',
      signatures: [
        {
          signer: 'port',
          signature: Uint8Array [
            243
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Dynamic',
          signature: Uint8Array [
            137
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
        balance: '90612',
        nonce: 38920,
        numTxs: 69330,
        address: '32264ab3e30040f1831676cadcab034bf1ed7e8b',
        pk: Uint8Array [
          102
        ],
        type: {
          pk: 1,
          hash: 6,
          address: 1,
          role: 3
        },
        moniker: 'transition',
        context: {
          genesisTx: 'contingency',
          renaissanceTx: 'transmitter',
          genesisTime: '2019-03-23T23:49:43.687Z',
          renaissanceTime: '2019-03-23T23:49:43.687Z'
        },
        issuer: 'Rustic',
        migratedTo: [
          'Small Cotton Pants',
          'backing up'
        ],
        migratedFrom: [
          'eyeballs',
          'cross-platform'
        ],
        numAssets: 58897,
        stake: {
          totalStakes: '36610',
          totalUnstakes: '78970',
          totalReceivedStakes: '18328',
          recentStakes: {
            items: [
              Uint8Array [
                223
              ],
              Uint8Array [
                132
              ]
            ],
            typeUrl: 'Health',
            maxItems: 17740,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                223
              ],
              Uint8Array [
                139
              ]
            ],
            typeUrl: 'connecting',
            maxItems: 44811,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              249
            ],
            Uint8Array [
              75
            ]
          ],
          typeUrl: 'haptic',
          maxItems: 58817,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '31630',
          leftover: '81958',
          amount: '1901'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '55512',
        nonce: 33107,
        numTxs: 36401,
        address: '7d3e631cf68f3edb3d7ca7f28966c31b485d4cf0',
        pk: Uint8Array [
          105
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 1
        },
        moniker: 'overriding',
        context: {
          genesisTx: 'Unbranded Cotton Computer',
          renaissanceTx: 'Gibraltar Pound',
          genesisTime: '2019-03-23T23:49:43.687Z',
          renaissanceTime: '2019-03-23T23:49:43.687Z'
        },
        issuer: 'Fantastic',
        migratedTo: [
          'card',
          'Zimbabwe'
        ],
        migratedFrom: [
          'Table',
          'Steel'
        ],
        numAssets: 52340,
        stake: {
          totalStakes: '99417',
          totalUnstakes: '97094',
          totalReceivedStakes: '91118',
          recentStakes: {
            items: [
              Uint8Array [
                86
              ],
              Uint8Array [
                23
              ]
            ],
            typeUrl: 'Wooden',
            maxItems: 31705,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                195
              ],
              Uint8Array [
                57
              ]
            ],
            typeUrl: 'Hawaii',
            maxItems: 57429,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              23
            ],
            Uint8Array [
              176
            ]
          ],
          typeUrl: 'interface',
          maxItems: 24311,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '55175',
          leftover: '39299',
          amount: '3687'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'a1c489d8605c05b4ecccfa45728ab27bc2752e73',
        owner: 'generate',
        moniker: 'Outdoors',
        readonly: undefined,
        transferrable: undefined,
        ttl: 45011,
        consumedTime: '2019-03-23T23:49:43.687Z',
        issuer: 'SAS',
        stake: {
          totalStakes: '22203',
          totalUnstakes: '42983',
          totalReceivedStakes: '67376',
          recentStakes: {
            items: [
              Uint8Array [
                89
              ],
              Uint8Array [
                196
              ]
            ],
            typeUrl: 'Savings Account',
            maxItems: 91218,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                40
              ],
              Uint8Array [
                231
              ]
            ],
            typeUrl: 'Pataca',
            maxItems: 98768,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Towels',
          renaissanceTx: 'cross-platform',
          genesisTime: '2019-03-23T23:49:43.687Z',
          renaissanceTime: '2019-03-23T23:49:43.687Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'fa0381cf5ebe122a38a2e521f375363d68acfe89',
        owner: 'withdrawal',
        moniker: 'silver',
        readonly: undefined,
        transferrable: undefined,
        ttl: 56955,
        consumedTime: '2019-03-23T23:49:43.687Z',
        issuer: 'Gorgeous',
        stake: {
          totalStakes: '84646',
          totalUnstakes: '74955',
          totalReceivedStakes: '19541',
          recentStakes: {
            items: [
              Uint8Array [
                232
              ],
              Uint8Array [
                121
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 50773,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                41
              ],
              Uint8Array [
                12
              ]
            ],
            typeUrl: 'Cayman Islands Dollar',
            maxItems: 99994,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'PCI',
          renaissanceTx: 'Practical',
          genesisTime: '2019-03-23T23:49:43.688Z',
          renaissanceTime: '2019-03-23T23:49:43.688Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '75710a33ba48d09cc7d2ec8c401dd5eb0202233a',
        from: 'bd9afbc51b8f35d000294f9d33d0e6a8548ec8ab',
        to: 'ef833ed3b4c44bc74a3dfd8aa8db02fc36f35013',
        balance: '53981',
        message: 'XML',
        context: {
          genesisTx: 'Uganda',
          renaissanceTx: 'index',
          genesisTime: '2019-03-23T23:49:43.688Z',
          renaissanceTime: '2019-03-23T23:49:43.688Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '3ee111652e29c1c7d17ebcc9c04748eb821c40c2',
        from: '6e45b873820b9961362d42e4c6dc6b21579004b4',
        to: 'e057becb71876d893bfc58c7829f07e7d0df61de',
        balance: '98797',
        message: 'Concrete',
        context: {
          genesisTx: 'Money Market Account',
          renaissanceTx: 'alliance',
          genesisTime: '2019-03-23T23:49:43.688Z',
          renaissanceTime: '2019-03-23T23:49:43.688Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '76131b55f790e57d07d6f76d516f85a0aef4af71',
      blockHeight: 32450,
      blockTime: '2019-03-23T23:49:43.688Z',
      totalTxs: 30208,
      txStatistics: {
        numAccountMigrateTxs: 39562,
        numCreateAssetTxs: 3078,
        numConsensusUpgradeTxs: 4312,
        numDeclareTxs: 39801,
        numDeclareFileTxs: 80077,
        numExchangeTxs: 99415,
        numStakeTxs: 13735,
        numSysUpgradeTxs: 78749,
        numTransferTxs: 57426,
        numUpdateAssetTxs: 7302,
        numConsumeAssetTxs: 38460,
        numPokeTxs: 22390
      },
      txIndex: 75330,
      lastBlockTime: '2019-03-23T23:49:43.688Z'
    },
    appState: {
      address: 'ab10482751d39770dec636ec85fe93e08e4eee9b',
      consensus: {
        maxBytes: 31507,
        maxGas: 73521,
        maxValidators: 13957,
        maxCandidates: 36698,
        pubKeyTypes: [
          'Tuna',
          'Books'
        ],
        validators: [
          {
            address: 'a302d152cb4f9a8cf475f5e29dc51594b5982ed9',
            power: 27163
          },
          {
            address: 'c329475c8236f078f401dd14a6dca49015757db2',
            power: 9697
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '85335': {
          item: [
            {
              type: 1,
              dataHash: 'Streets',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'invoice',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '34201': {
          totalStakes: '69267',
          totalUnstakes: '97473',
          context: {
            genesisTx: 'collaborative',
            renaissanceTx: 'pixel',
            genesisTime: '2019-03-23T23:49:43.688Z',
            renaissanceTime: '2019-03-23T23:49:43.688Z'
          }
        }
      },
      version: 'synergistic',
      dataVersion: 'orchid',
      forgeAppHash: Uint8Array [
        80
      ],
      token: {
        name: 'Ergonomic',
        symbol: 'New Jersey',
        unit: 'parsing',
        description: 'Soft',
        icon: Uint8Array [
          20
        ],
        decimal: 2941,
        initialSupply: 9515,
        totalSupply: 22980,
        inflationRate: 66815
      },
      txConfig: {
        maxAssetSize: 80590,
        maxListSize: 13279,
        maxMultisig: 87986,
        minimumStake: 16270
      },
      stakeConfig: {
        timeoutGeneral: 28406,
        timeoutStakeForNode: 77798
      },
      pokeConfig: {
        address: '68763bcfd1244d9b98b5086bedbd0e3aa712134e',
        dailyLimit: 83653,
        balance: 57850,
        amount: 37714
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
    code: 33
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    83
  ],
  type: {
    pk: 1,
    hash: 13,
    address: 1,
    role: 2
  },
  passphrase: 'system',
  moniker: 'payment'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  token: 'yellow',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 7
    },
    sk: Uint8Array [
      3
    ],
    pk: Uint8Array [
      113
    ],
    address: '48690e119d06b545fbaa4748b815848c4b48ad8f'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '07ba2b1e4d86e50dc86a2fc12d0fc2dbf3263d5b'
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
  key: 'Sierra Leone',
  value: 'Fantastic Rubber Car'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  txs: [
    {
      tx: {
        from: '9b039321bf4f6e36a31be0f875c042addafb2b54',
        nonce: 30127,
        signature: Uint8Array [
          173
        ],
        chainId: 'application',
        signatures: [
          {
            signer: 'Maine',
            signature: Uint8Array [
              55
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'open-source',
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
      height: 77597,
      index: 64369,
      hash: '63580cb99b648d827464baf54cef27b3a4994c27',
      tags: [
        {
          key: Uint8Array [
            9
          ],
          value: Uint8Array [
            158
          ]
        },
        {
          key: Uint8Array [
            72
          ],
          value: Uint8Array [
            223
          ]
        }
      ],
      code: 39,
      time: '2019-03-23T23:49:43.690Z',
      createAsset: {
        asset: 'portals'
      },
      accountMigrate: {
        address: '246db1f5a86b271b936753e1dc1364ecc5d00c16'
      }
    },
    {
      tx: {
        from: 'b231206dbc2ba277eba5280ebe42c71252f5fd12',
        nonce: 58112,
        signature: Uint8Array [
          85
        ],
        chainId: 'Unbranded',
        signatures: [
          {
            signer: 'maximize',
            signature: Uint8Array [
              187
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Junction',
            signature: Uint8Array [
              42
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
      height: 37065,
      index: 84424,
      hash: '67ae3e069aa7f3d8fed283d5a9e8802033ca1c08',
      tags: [
        {
          key: Uint8Array [
            165
          ],
          value: Uint8Array [
            30
          ]
        },
        {
          key: Uint8Array [
            199
          ],
          value: Uint8Array [
            191
          ]
        }
      ],
      code: 38,
      time: '2019-03-23T23:49:43.690Z',
      createAsset: {
        asset: 'Implementation'
      },
      accountMigrate: {
        address: '4893aa369af6dc7d167a59b76695ba2ebdbfe21f'
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
    from: 'bb22e766d225f60bdeebff0e3929f03837006fef',
    nonce: 56874,
    signature: Uint8Array [
      180
    ],
    chainId: 'online',
    signatures: [
      {
        signer: 'Handmade',
        signature: Uint8Array [
          25
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'web-readiness',
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
      pk: 0,
      hash: 0,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      125
    ],
    pk: Uint8Array [
      17
    ],
    address: '1f0a2984eee772f281258a24753dc0474adb62f1'
  },
  token: 'online',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  hash: '0158e821f72d5a6b1885f1d0f3a265de48965725'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    168
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      136
    ],
    pk: Uint8Array [
      130
    ],
    address: 'f9db37c9fa59e4f933711adb2a4768c2f8c14b1f'
  },
  token: 'content-based'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  signature: Uint8Array [
    66
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    114
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  hash: '67cf7fb293c23a4d199fbb9f6e1e70417c9f2533'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 24,
  filter: 'disintermediate'
});

// output
{
  topic: 'Costa Rican Colon'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Sports'
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
