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
  from: '3aa269db76f30929be1adb6567c39cea10b15f2b',
  nonce: 39270,
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      67
    ],
    pk: Uint8Array [
      101
    ],
    address: '057c433d1534b2ee06b2054da1b4f339186bca94'
  },
  token: 'multimedia'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  tx: {
    from: '049d94937899079a66224c79454d53e397552aed',
    nonce: 88044,
    signature: Uint8Array [
      13
    ],
    chainId: 'Fresh',
    signatures: [
      {
        signer: 'Falls',
        signature: Uint8Array [
          175
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Enhanced',
        signature: Uint8Array [
          182
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
  passphrase: 'calculate',
  type: {
    pk: 0,
    hash: 1,
    address: 1,
    role: 7
  },
  moniker: 'Home Loan Account'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  token: 'GB',
  wallet: {
    type: {
      pk: 1,
      hash: 7,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      209
    ],
    pk: Uint8Array [
      81
    ],
    address: 'b4bac4a6839d84d7dba75272efbd603a53293475'
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
      pk: 0,
      hash: 14,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      218
    ],
    pk: Uint8Array [
      215
    ],
    address: '402a92ffad8638f32a6660bbb931c700c299d104'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '9b516d06d6b1b89e386af0870caa6c507f62f6f0',
  keys: [
    'engage',
    'neural'
  ],
  height: 29729
});

// output
{
  code: 6,
  state: {
    balance: '35111',
    nonce: 90470,
    numTxs: 4842,
    address: '497e05d3dc1a5d907c14eaa064c7386ea6567acb',
    pk: Uint8Array [
      214
    ],
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 1
    },
    moniker: 'Handcrafted',
    context: {
      genesisTx: 'open-source',
      renaissanceTx: 'hack',
      genesisTime: '2019-03-12T09:15:35.361Z',
      renaissanceTime: '2019-03-12T09:15:35.361Z'
    },
    issuer: 'multimedia',
    migratedTo: [
      'gold',
      'envisioneer'
    ],
    migratedFrom: [
      'maroon',
      'wireless'
    ],
    numAssets: 22644,
    stake: {
      totalStakes: '87148',
      totalUnstakes: '99078',
      totalReceivedStakes: '10170',
      recentStakes: {
        items: [
          Uint8Array [
            202
          ],
          Uint8Array [
            10
          ]
        ],
        typeUrl: 'green',
        maxItems: 75986,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            149
          ],
          Uint8Array [
            143
          ]
        ],
        typeUrl: 'Ergonomic Soft Chicken',
        maxItems: 42399,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          64
        ],
        Uint8Array [
          192
        ]
      ],
      typeUrl: 'Ergonomic Steel Cheese',
      maxItems: 42102,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '77930',
      leftover: '41691',
      amount: '55824'
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
  senderAddress: 'Markets',
  itx: {
    moniker: 'interfaces',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 41634,
    parent: 'Rustic Concrete Computer'
  },
  walletType: {
    pk: 1,
    hash: 0,
    address: 0,
    role: 8
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  assetAddress: 'Money Market Account'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '9435aa7ebef802c83606e8584c4cfe4dbf150b42',
  keys: [
    'tertiary',
    'synthesize'
  ],
  height: 30169
});

// output
{
  code: 34,
  state: {
    address: 'a8bdc52a149934ea787ccc26097ccb07b1496761',
    owner: 'Money Market Account',
    moniker: 'Credit Card Account',
    readonly: undefined,
    transferrable: undefined,
    ttl: 65578,
    consumedTime: '2019-03-12T09:15:35.362Z',
    issuer: 'red',
    stake: {
      totalStakes: '54262',
      totalUnstakes: '11769',
      totalReceivedStakes: '33406',
      recentStakes: {
        items: [
          Uint8Array [
            75
          ],
          Uint8Array [
            223
          ]
        ],
        typeUrl: 'Personal Loan Account',
        maxItems: 99993,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            252
          ],
          Uint8Array [
            197
          ]
        ],
        typeUrl: 'Configuration',
        maxItems: 94447,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'leading-edge',
      renaissanceTx: 'Devolved',
      genesisTime: '2019-03-12T09:15:35.363Z',
      renaissanceTime: '2019-03-12T09:15:35.363Z'
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
    cursor: 'capacitor',
    size: 92217,
    order: [
      {
        field: 'Small',
        type: 'Cambridgeshire'
      },
      {
        field: 'navigating',
        type: 'ivory'
      }
    ]
  },
  ownerAddress: 'harness'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  page: {
    cursor: 'Frozen',
    next: undefined,
    total: 63507
  },
  assets: [
    {
      address: '422e8ae4dedbdff19d4205b1b1050e8e6c220425',
      owner: 'back-end',
      genesisTime: 'transmitter',
      renaissanceTime: 'Moldova',
      moniker: 'Progressive',
      readonly: undefined
    },
    {
      address: '4a069009f15304a09ea6ffc35cfe7949612edf7a',
      owner: 'solid state',
      genesisTime: 'Creek',
      renaissanceTime: 'Facilitator',
      moniker: 'Secured',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 72392
});

// output
{
  code: 504,
  block: {
    height: 3505,
    numTxs: 19028,
    time: '2019-03-12T09:15:35.363Z',
    appHash: '7fe3d57932ed1affb05e15edfd8dc311c7d52736',
    proposer: '141d840b2da34878ca1789e4f31daff9ff9ab69a',
    txs: [
      {
        tx: {
          from: 'ee4992bb05abf9ef9f2e9a7f5c12511239d3afce',
          nonce: 25364,
          signature: Uint8Array [
            77
          ],
          chainId: 'Markets',
          signatures: [
            {
              signer: 'IB',
              signature: Uint8Array [
                200
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Connecticut',
              signature: Uint8Array [
                94
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
        height: 98565,
        index: 62297,
        hash: '9c519a8bd0762a7db068e8b1790b06e878722019',
        tags: [
          {
            key: Uint8Array [
              172
            ],
            value: Uint8Array [
              243
            ]
          },
          {
            key: Uint8Array [
              116
            ],
            value: Uint8Array [
              28
            ]
          }
        ],
        code: 4,
        time: '2019-03-12T09:15:35.364Z',
        createAsset: {
          asset: 'Corporate'
        },
        accountMigrate: {
          address: '5e3820b111b0d0ce89bb57118ec23930195c8531'
        }
      },
      {
        tx: {
          from: '07f52a8c36fc064a0b66e42893ba6ecdef3f6f90',
          nonce: 99416,
          signature: Uint8Array [
            53
          ],
          chainId: 'architectures',
          signatures: [
            {
              signer: 'grid-enabled',
              signature: Uint8Array [
                209
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'e-business',
              signature: Uint8Array [
                52
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
        height: 19068,
        index: 10024,
        hash: '757973ebf65b887ffa26ef90f527cffd647dd71c',
        tags: [
          {
            key: Uint8Array [
              197
            ],
            value: Uint8Array [
              194
            ]
          },
          {
            key: Uint8Array [
              67
            ],
            value: Uint8Array [
              173
            ]
          }
        ],
        code: 21,
        time: '2019-03-12T09:15:35.364Z',
        createAsset: {
          asset: 'Gorgeous Steel Bike'
        },
        accountMigrate: {
          address: '0e536adf637fd897c1c56a511dfbab4a2953bd9d'
        }
      }
    ],
    totalTxs: 38821,
    invalidTxs: [
      {
        tx: {
          from: '49ccb922982765170d8839a6fda1b212973b1c16',
          nonce: 31547,
          signature: Uint8Array [
            59
          ],
          chainId: 'Ball',
          signatures: [
            {
              signer: 'impactful',
              signature: Uint8Array [
                201
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Colorado',
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
        height: 77554,
        index: 68794,
        hash: '5e1b310c7e51de675c74d1d28b18bcc1f1e4544a',
        tags: [
          {
            key: Uint8Array [
              21
            ],
            value: Uint8Array [
              255
            ]
          },
          {
            key: Uint8Array [
              86
            ],
            value: Uint8Array [
              87
            ]
          }
        ],
        code: 9,
        time: '2019-03-12T09:15:35.365Z',
        createAsset: {
          asset: 'Quality-focused'
        },
        accountMigrate: {
          address: 'ab0d3d803825f9fa2c325dce2070be7edf9515d9'
        }
      },
      {
        tx: {
          from: '874aad8e975c5cbcb16ea0e71d228f13c6f479a4',
          nonce: 40431,
          signature: Uint8Array [
            89
          ],
          chainId: 'Street',
          signatures: [
            {
              signer: 'content',
              signature: Uint8Array [
                84
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Computers',
              signature: Uint8Array [
                5
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
        height: 4093,
        index: 44397,
        hash: 'a360d36abf8892803bd75b19edf251af86ba4fcf',
        tags: [
          {
            key: Uint8Array [
              170
            ],
            value: Uint8Array [
              216
            ]
          },
          {
            key: Uint8Array [
              97
            ],
            value: Uint8Array [
              117
            ]
          }
        ],
        code: 39,
        time: '2019-03-12T09:15:35.365Z',
        createAsset: {
          asset: 'optimizing'
        },
        accountMigrate: {
          address: '4e6a1a899a63392b0ba121cece6c455772ea0b95'
        }
      }
    ],
    txsHashes: [
      'Berkshire',
      'SAS'
    ],
    invalidTxsHashes: [
      'Cove',
      'Auto Loan Account'
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Toys',
    size: 70940,
    order: [
      {
        field: 'Architect',
        type: 'Tuna'
      },
      {
        field: 'interfaces',
        type: 'Developer'
      }
    ]
  },
  minHeight: 36404,
  maxHeight: 43394,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  page: {
    cursor: 'customized',
    next: undefined,
    total: 27580
  },
  blocks: [
    {
      height: 68135,
      numTxs: 10165,
      time: '2019-03-12T09:15:35.366Z',
      appHash: 'be8bdf67544e5d1b64ccba935c9756f8b28de5c1',
      proposer: 'e859e89cf86f7a86476cac9ca97d36375f5c5c45',
      txs: [
        {
          tx: {
            from: '90adc0ab408cfa5f15ff2867f9cd9bab29dfc7cf',
            nonce: 74586,
            signature: Uint8Array [
              227
            ],
            chainId: 'Refined',
            signatures: [
              {
                signer: 'Concrete',
                signature: Uint8Array [
                  167
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Integration',
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
          height: 25024,
          index: 24659,
          hash: '03d0aec34dbcec862acc1be214b8a5c3b2489bfb',
          tags: [
            {
              key: Uint8Array [
                212
              ],
              value: Uint8Array [
                172
              ]
            },
            {
              key: Uint8Array [
                101
              ],
              value: Uint8Array [
                6
              ]
            }
          ],
          code: 33,
          time: '2019-03-12T09:15:35.366Z',
          createAsset: {
            asset: 'Chad'
          },
          accountMigrate: {
            address: '19b26e1eec38bb9e8b90b39d8eebef19efcebe30'
          }
        },
        {
          tx: {
            from: '896e8717968dc7441ae70bf209341b2e64e70be2',
            nonce: 70956,
            signature: Uint8Array [
              90
            ],
            chainId: 'Camp',
            signatures: [
              {
                signer: 'override',
                signature: Uint8Array [
                  101
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'RAM',
                signature: Uint8Array [
                  150
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
          height: 76502,
          index: 98979,
          hash: 'a5092a32f8ef13d77b899ccb3c1ac5309a8baa84',
          tags: [
            {
              key: Uint8Array [
                244
              ],
              value: Uint8Array [
                120
              ]
            },
            {
              key: Uint8Array [
                186
              ],
              value: Uint8Array [
                77
              ]
            }
          ],
          code: 22,
          time: '2019-03-12T09:15:35.366Z',
          createAsset: {
            asset: 'navigating'
          },
          accountMigrate: {
            address: '24b12e55e25bcc16a2d33fe833a52cc14ffad8ed'
          }
        }
      ],
      totalTxs: 31625,
      invalidTxs: [
        {
          tx: {
            from: '54f42da7d18be37491c6867675e2560ae528370d',
            nonce: 93207,
            signature: Uint8Array [
              76
            ],
            chainId: 'Bike',
            signatures: [
              {
                signer: 'Kansas',
                signature: Uint8Array [
                  96
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Michigan',
                signature: Uint8Array [
                  225
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
          height: 68516,
          index: 18712,
          hash: 'a81a82b54c60ce0639fdeb47c85d45a786b69bd6',
          tags: [
            {
              key: Uint8Array [
                212
              ],
              value: Uint8Array [
                65
              ]
            },
            {
              key: Uint8Array [
                111
              ],
              value: Uint8Array [
                124
              ]
            }
          ],
          code: 5,
          time: '2019-03-12T09:15:35.366Z',
          createAsset: {
            asset: 'Riel'
          },
          accountMigrate: {
            address: '5bda2f7ea53f5a93d7993efca1add75702acc674'
          }
        },
        {
          tx: {
            from: '5ad4901f65b9241bc75e0928ca9bcb55de18520b',
            nonce: 45213,
            signature: Uint8Array [
              245
            ],
            chainId: 'Home',
            signatures: [
              {
                signer: 'silver',
                signature: Uint8Array [
                  182
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Palestinian Territory',
                signature: Uint8Array [
                  162
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
          height: 91466,
          index: 75862,
          hash: '9bf4b927be6d69572d0d8504e3364488fe72f486',
          tags: [
            {
              key: Uint8Array [
                30
              ],
              value: Uint8Array [
                236
              ]
            },
            {
              key: Uint8Array [
                184
              ],
              value: Uint8Array [
                3
              ]
            }
          ],
          code: 6,
          time: '2019-03-12T09:15:35.367Z',
          createAsset: {
            asset: 'ADP'
          },
          accountMigrate: {
            address: '8daa2a7cd6efd52dd146d495954b64e091973bf7'
          }
        }
      ],
      txsHashes: [
        'tan',
        'Paraguay'
      ],
      invalidTxsHashes: [
        'Oregon',
        'matrix'
      ]
    },
    {
      height: 45475,
      numTxs: 1555,
      time: '2019-03-12T09:15:35.367Z',
      appHash: '12a21a22e10927d0726940ade7e8c156ff4c352b',
      proposer: 'f27bd719ce251ee07253c8428b9953e006431aaf',
      txs: [
        {
          tx: {
            from: '5d67d1c2b9349fd990df6cd62b9241a55ccd31fe',
            nonce: 6500,
            signature: Uint8Array [
              196
            ],
            chainId: 'bypassing',
            signatures: [
              {
                signer: 'mobile',
                signature: Uint8Array [
                  14
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Industrial',
                signature: Uint8Array [
                  79
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
          height: 99805,
          index: 66983,
          hash: '0c53d4387da7a440b3467e91d5d709691b226a8b',
          tags: [
            {
              key: Uint8Array [
                118
              ],
              value: Uint8Array [
                69
              ]
            },
            {
              key: Uint8Array [
                211
              ],
              value: Uint8Array [
                116
              ]
            }
          ],
          code: 3,
          time: '2019-03-12T09:15:35.368Z',
          createAsset: {
            asset: 'American Samoa'
          },
          accountMigrate: {
            address: '334ab7d77573676c337b3f5bb2471d974576593a'
          }
        },
        {
          tx: {
            from: '5135cfa76a7fbb34fdab8b19f30a172fc30a2129',
            nonce: 55399,
            signature: Uint8Array [
              6
            ],
            chainId: 'Internal',
            signatures: [
              {
                signer: 'Shoes',
                signature: Uint8Array [
                  226
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'XSS',
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
          height: 99083,
          index: 46333,
          hash: 'be13327fa4b50415bbb4b944d78a70d7199aab00',
          tags: [
            {
              key: Uint8Array [
                53
              ],
              value: Uint8Array [
                89
              ]
            },
            {
              key: Uint8Array [
                200
              ],
              value: Uint8Array [
                92
              ]
            }
          ],
          code: 5,
          time: '2019-03-12T09:15:35.368Z',
          createAsset: {
            asset: 'Granite'
          },
          accountMigrate: {
            address: '4bf4533ac49d0154c5893b5fe625c552a11b1fd4'
          }
        }
      ],
      totalTxs: 89121,
      invalidTxs: [
        {
          tx: {
            from: 'e6c6ced13d7653b4f92c61572e4ae68d587600d8',
            nonce: 93479,
            signature: Uint8Array [
              246
            ],
            chainId: 'Suriname',
            signatures: [
              {
                signer: 'Sleek Concrete Bike',
                signature: Uint8Array [
                  53
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'teal',
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
          height: 93103,
          index: 63488,
          hash: '89c8ab5fdf55af7981b1af94d7c347c2a225afef',
          tags: [
            {
              key: Uint8Array [
                109
              ],
              value: Uint8Array [
                194
              ]
            },
            {
              key: Uint8Array [
                140
              ],
              value: Uint8Array [
                243
              ]
            }
          ],
          code: 21,
          time: '2019-03-12T09:15:35.368Z',
          createAsset: {
            asset: 'Walks'
          },
          accountMigrate: {
            address: 'cdef6cd7a03a20e5de7683b9c58bfa7abd8b16e3'
          }
        },
        {
          tx: {
            from: '16fb5ec41897529f1e114871af59e661cf57b36c',
            nonce: 95927,
            signature: Uint8Array [
              35
            ],
            chainId: 'Intelligent',
            signatures: [
              {
                signer: 'Organic',
                signature: Uint8Array [
                  134
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Intelligent Concrete Gloves',
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
          height: 69142,
          index: 3135,
          hash: 'a2c263aa07f2d9a1594801d783eb7d2d8b1dbbe7',
          tags: [
            {
              key: Uint8Array [
                59
              ],
              value: Uint8Array [
                133
              ]
            },
            {
              key: Uint8Array [
                182
              ],
              value: Uint8Array [
                68
              ]
            }
          ],
          code: 25,
          time: '2019-03-12T09:15:35.368Z',
          createAsset: {
            asset: 'Research'
          },
          accountMigrate: {
            address: 'cd2bedd53d75cc1fcc546d26bcbcbd83095200dc'
          }
        }
      ],
      txsHashes: [
        'Senior',
        'purple'
      ],
      invalidTxsHashes: [
        'ubiquitous',
        'yellow'
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
  code: 31,
  info: {
    id: 'bus',
    network: 'bluetooth',
    moniker: 'Health',
    consensusVersion: 'hybrid',
    synced: undefined,
    appHash: '5aec65616a274df90e3ac4d409bca32664f97994',
    blockHash: Uint8Array [
      247
    ],
    blockHeight: 63384,
    blockTime: '2019-03-12T09:15:35.369Z',
    address: '12ef2933fb9918a08610aebadba3de87fa1a34c1',
    votingPower: 20610,
    totalTxs: 80925,
    version: 'Personal Loan Account',
    dataVersion: 'Factors',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Generic'
    },
    supportedTxs: [
      'Borders',
      'Delaware'
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
  code: 33,
  config: 'Orchestrator'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Quality',
    'Denar'
  ],
  height: 50838
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  state: {
    address: '880e64ccf878be8a561f4378e2213d52a929f7ca',
    consensus: {
      maxBytes: 92606,
      maxGas: 34151,
      maxValidators: 3365,
      maxCandidates: 64453,
      pubKeyTypes: [
        'transmit',
        'Electronics'
      ],
      validators: [
        {
          address: '39bb8cf8a97e2877cb6a6948370c2929f4090185',
          power: 13633
        },
        {
          address: '58ae7f169f6fbd4242b7e53272e38c788d6621e6',
          power: 52923
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
            dataHash: 'Peru',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 11,
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
        totalStakes: '74448',
        totalUnstakes: '41806',
        context: {
          genesisTx: 'Salad',
          renaissanceTx: 'Licensed',
          genesisTime: '2019-03-12T09:15:35.370Z',
          renaissanceTime: '2019-03-12T09:15:35.370Z'
        }
      }
    },
    version: 'Gabon',
    dataVersion: 'ivory',
    forgeAppHash: Uint8Array [
      92
    ],
    token: {
      name: 'Investment Account',
      symbol: 'Personal Loan Account',
      unit: 'Fresh',
      description: 'frictionless',
      icon: Uint8Array [
        220
      ],
      decimal: 48949,
      initialSupply: 98991,
      totalSupply: 4944,
      inflationRate: 49518
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
    startDate: 'expedite',
    endDate: 'Granite'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  forgeStatistics: {
    numBlocks: [
      55260,
      20074
    ],
    numTxs: [
      22245,
      405
    ],
    numStakes: [
      '39129',
      '65942'
    ],
    numValidators: [
      19971,
      77678
    ],
    numAccountMigrateTxs: [
      91576,
      76383
    ],
    numCreateAssetTxs: [
      74263,
      24677
    ],
    numConsensusUpgradeTxs: [
      43178,
      84088
    ],
    numDeclareTxs: [
      37606,
      59542
    ],
    numDeclareFileTxs: [
      53318,
      53345
    ],
    numExchangeTxs: [
      39409,
      25575
    ],
    numStakeTxs: [
      31465,
      14143
    ],
    numSysUpgradeTxs: [
      22249,
      32077
    ],
    numTransferTxs: [
      18814,
      38922
    ],
    numUpdateAssetTxs: [
      38417,
      51132
    ],
    numConsumeAssetTxs: [
      62138,
      1510
    ],
    numPokeTxs: [
      40864,
      25843
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
  code: 504,
  netInfo: {
    listening: undefined,
    listeners: [
      'connecting',
      'Fresh'
    ],
    nPeers: 18223,
    peers: [
      {
        id: 'service-desk',
        network: 'Vermont',
        consensusVersion: 'Handmade Steel Tuna',
        moniker: 'Fort',
        ip: 'Virgin Islands, U.S.',
        geoInfo: {
          city: 'Games',
          country: 'robust',
          latitude: 64223.9,
          longitude: 12688.79
        }
      },
      {
        id: 'Bahrain',
        network: 'Avon',
        consensusVersion: 'Corporate',
        moniker: 'eyeballs',
        ip: 'Home Loan Account',
        geoInfo: {
          city: 'Vision-oriented',
          country: 'Manager',
          latitude: 31576.25,
          longitude: 86547.28
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
  code: 1,
  info: {
    id: 'Senegal',
    network: 'Norfolk Island',
    moniker: 'Soft',
    consensusVersion: 'forecast',
    synced: undefined,
    appHash: '6a7b03a4e7091b664ffcf8ea85690e00a1a3d502',
    blockHash: Uint8Array [
      179
    ],
    blockHeight: 96089,
    blockTime: '2019-03-12T09:15:35.371Z',
    address: '6e698bcb51710e9b2247fd773c06b788f6720143',
    votingPower: 45354,
    totalTxs: 78544,
    version: 'Tactics',
    dataVersion: 'Somalia',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Handmade'
    },
    supportedTxs: [
      'projection',
      'product'
    ],
    ip: 'Health',
    geoInfo: {
      city: 'Savings Account',
      country: 'Sausages',
      latitude: 67419.02,
      longitude: 23255.97
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '8a0b581a332e303d3d6a1ad9a3508f4f60c58f18',
  keys: [
    'sky blue',
    'Orchestrator'
  ],
  height: 90590
});

// output
{
  code: 37,
  state: {
    address: 'e2179aef0d5578cd1ce8519ee64184ab90a46d61',
    from: '9d09fc56fd80b795a40b565928d01c225a32c09e',
    to: 'd8ff2add7ef3c00b6267fa260cccb41b87b375be',
    balance: '83741',
    message: 'SQL',
    context: {
      genesisTx: 'Mauritius',
      renaissanceTx: 'Canyon',
      genesisTime: '2019-03-12T09:15:35.372Z',
      renaissanceTime: '2019-03-12T09:15:35.372Z'
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
    cursor: 'calculate',
    size: 83126,
    order: [
      {
        field: 'Tasty',
        type: 'Tuna'
      },
      {
        field: 'Refined Rubber Keyboard',
        type: 'Sleek Fresh Chips'
      }
    ]
  },
  addressFilter: {
    sender: 'Palau',
    receiver: 'e-business',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'Home',
    next: undefined,
    total: 5753
  },
  stakes: [
    {
      address: 'c8f840ef13c2b94d1ce259cb678100ea634b8cf2',
      balance: '74931',
      sender: 'scale',
      receiver: 'deliver',
      genesisTime: 'programming',
      renaissanceTime: 'Gloves',
      message: 'Synchronised',
      type: 30012
    },
    {
      address: 'b176ecc4adbf8e4b3c95fa77ed3a326e4101e8ab',
      balance: '54634',
      sender: 'Accounts',
      receiver: 'mint green',
      genesisTime: 'override',
      renaissanceTime: 'payment',
      message: 'Avon',
      type: 17745
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'South Dakota',
    size: 12628,
    order: [
      {
        field: 'International',
        type: 'redundant'
      },
      {
        field: 'PCI',
        type: 'Facilitator'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  page: {
    cursor: 'synthesize',
    next: undefined,
    total: 35231
  },
  accounts: [
    {
      address: 'ed1e895137f1dbebd90f6a7ff6405c6fbae206c9',
      balance: '55763',
      numAssets: 10650,
      numTxs: 41667,
      nonce: 55641,
      genesisTime: 'lavender',
      renaissanceTime: 'Direct',
      moniker: 'grow',
      migratedFrom: 'Central',
      migratedTo: 'Secured',
      totalReceivedStakes: '73597',
      totalStakes: '29123',
      totalUnstakes: '67077',
      recentNumTxs: [
        32912,
        71021
      ]
    },
    {
      address: 'd002060cc55d6d916a47b98b90b97397064ccb2b',
      balance: '56246',
      numAssets: 73709,
      numTxs: 75821,
      nonce: 62005,
      genesisTime: 'Ball',
      renaissanceTime: 'eco-centric',
      moniker: 'non-volatile',
      migratedFrom: 'cyan',
      migratedTo: 'Re-contextualized',
      totalReceivedStakes: '82434',
      totalStakes: '57821',
      totalUnstakes: '55042',
      recentNumTxs: [
        50742,
        56402
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: 'b2e981b9996b536982add8c608a43c988643e064'
});

// output
{
  code: 4,
  info: {
    tx: {
      from: 'feabee297974d926476713d8289b88eaa1886070',
      nonce: 34344,
      signature: Uint8Array [
        84
      ],
      chainId: 'transmit',
      signatures: [
        {
          signer: 'Producer',
          signature: Uint8Array [
            188
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Savings Account',
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
    height: 97351,
    index: 27203,
    hash: 'a4af7d98164d8bf91e9def1b1ebb78ff31a863f0',
    tags: [
      {
        key: Uint8Array [
          4
        ],
        value: Uint8Array [
          192
        ]
      },
      {
        key: Uint8Array [
          84
        ],
        value: Uint8Array [
          156
        ]
      }
    ],
    code: 5,
    time: '2019-03-12T09:15:35.374Z',
    createAsset: {
      asset: 'process improvement'
    },
    accountMigrate: {
      address: 'efef519a0fa8adcdb7c05e90a2418a1fb1bb1ef0'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 24066
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  unconfirmedTxs: {
    nTxs: 29991,
    txs: [
      {
        from: '4005856a7ba9d8e780a6da2e644207af6f0d498f',
        nonce: 87854,
        signature: Uint8Array [
          195
        ],
        chainId: 'ROI',
        signatures: [
          {
            signer: 'monitor',
            signature: Uint8Array [
              152
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'modular',
            signature: Uint8Array [
              44
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
        from: '6f3b040fd7a4324bdd5b2f12ebdf70865fce9879',
        nonce: 12092,
        signature: Uint8Array [
          181
        ],
        chainId: 'Nauru',
        signatures: [
          {
            signer: 'virtual',
            signature: Uint8Array [
              77
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'SCSI',
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
  code: 9,
  validatorsInfo: {
    blockHeight: 41832,
    validators: [
      {
        address: 'ead0cff28bf4efe468f17a90002f93f9f115ea8f',
        pubKey: {
          type: 'Virtual',
          data: Uint8Array [
            158
          ]
        },
        votingPower: 41090,
        proposerPriority: 'Producer',
        name: 'hierarchy'
      },
      {
        address: 'e5f6cc2cb65d0b45f0bb5ba190f991cb95cd4cb0',
        pubKey: {
          type: 'impactful',
          data: Uint8Array [
            76
          ]
        },
        votingPower: 19278,
        proposerPriority: 'indigo',
        name: 'morph'
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
    cursor: 'Legacy',
    size: 45654,
    order: [
      {
        field: 'CSS',
        type: 'index'
      },
      {
        field: 'Convertible Marks',
        type: 'port'
      }
    ]
  },
  address: 'e0b30d89d66ea70d216f4ecb5ff9e6048c5c1072'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  page: {
    cursor: 'Forward',
    next: undefined,
    total: 59696
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'blue'
      }
    },
    {
      consumeAsset: {
        asset: 'deposit'
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
    cursor: 'bypass',
    size: 27119,
    order: [
      {
        field: 'silver',
        type: 'Shirt'
      },
      {
        field: 'Principal',
        type: 'Executive'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'quantifying',
    endDateTime: 'Avon'
  },
  addressFilter: {
    sender: 'Borders',
    receiver: 'fuchsia',
    direction: 0
  },
  typeFilter: {
    types: [
      'indexing',
      'reinvent'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 35,
  page: {
    cursor: 'client-driven',
    next: undefined,
    total: 78052
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'bleeding-edge'
      }
    },
    {
      consumeAsset: {
        asset: 'users'
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
  code: 17,
  address: '1a730c247c62bb6f06d6bf57e45144f087370f37'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '5b0c5956c8424d16e10839bfe3e83b0f99f412bf'
});

// output
{
  code: 24,
  chunk: Uint8Array [
    107
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '4ebf8762de33c6b226d7d72e4ca901654612c3a6',
  passphrase: 'Rubber'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  token: 'Sleek',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      214
    ],
    pk: Uint8Array [
      88
    ],
    address: '3882d627c549a934caa934419285d9586ae9692b'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: 'bce631c8d1911e576fcb4ab45b82a8191e5940ef',
    nonce: 791,
    signature: Uint8Array [
      238
    ],
    chainId: 'Plastic',
    signatures: [
      {
        signer: 'neural',
        signature: Uint8Array [
          237
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'TCP',
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
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      11
    ],
    pk: Uint8Array [
      201
    ],
    address: '101ed0cfbc1771b1d88847c60ad3e463edc3e8be'
  },
  token: 'Supervisor'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  tx: {
    from: '4d0f0b9ee4d0eef671305eb667f86aee3af695bb',
    nonce: 35850,
    signature: Uint8Array [
      239
    ],
    chainId: 'parallelism',
    signatures: [
      {
        signer: 'HTTP',
        signature: Uint8Array [
          124
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'driver',
        signature: Uint8Array [
          67
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
  hash: '60b85c51c1757accf5f9639ea03aa7979114ba93'
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
      from: 'cea99185dd70d187e0f0fb59262a7eb408dafe98',
      nonce: 21746,
      signature: Uint8Array [
        236
      ],
      chainId: 'Shoes',
      signatures: [
        {
          signer: 'seize',
          signature: Uint8Array [
            221
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Mews',
          signature: Uint8Array [
            109
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
        balance: '79766',
        nonce: 53394,
        numTxs: 29177,
        address: 'a19bea085e4fc1cf0b01f5e3e54bed9dd8f38c5c',
        pk: Uint8Array [
          90
        ],
        type: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 5
        },
        moniker: 'initiatives',
        context: {
          genesisTx: 'Optimization',
          renaissanceTx: 'iterate',
          genesisTime: '2019-03-12T09:15:35.376Z',
          renaissanceTime: '2019-03-12T09:15:35.376Z'
        },
        issuer: 'Marketing',
        migratedTo: [
          'Checking Account',
          'Liaison'
        ],
        migratedFrom: [
          'Shoes',
          'Concrete'
        ],
        numAssets: 12150,
        stake: {
          totalStakes: '10024',
          totalUnstakes: '57798',
          totalReceivedStakes: '35957',
          recentStakes: {
            items: [
              Uint8Array [
                38
              ],
              Uint8Array [
                236
              ]
            ],
            typeUrl: 'Consultant',
            maxItems: 81256,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                41
              ],
              Uint8Array [
                73
              ]
            ],
            typeUrl: 'Lodge',
            maxItems: 37964,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              88
            ],
            Uint8Array [
              32
            ]
          ],
          typeUrl: 'Home Loan Account',
          maxItems: 12525,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '90175',
          leftover: '33566',
          amount: '50693'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '83709',
        nonce: 94196,
        numTxs: 68061,
        address: '8c15b601377cc8a73994ebfa1febdef5074aa83f',
        pk: Uint8Array [
          177
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 4
        },
        moniker: 'Road',
        context: {
          genesisTx: 'Facilitator',
          renaissanceTx: 'Cotton',
          genesisTime: '2019-03-12T09:15:35.376Z',
          renaissanceTime: '2019-03-12T09:15:35.376Z'
        },
        issuer: 'SDD',
        migratedTo: [
          'moratorium',
          'Borders'
        ],
        migratedFrom: [
          'navigate',
          'Future-proofed'
        ],
        numAssets: 75678,
        stake: {
          totalStakes: '76222',
          totalUnstakes: '79537',
          totalReceivedStakes: '25884',
          recentStakes: {
            items: [
              Uint8Array [
                180
              ],
              Uint8Array [
                80
              ]
            ],
            typeUrl: 'content',
            maxItems: 43299,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                72
              ],
              Uint8Array [
                23
              ]
            ],
            typeUrl: 'Buckinghamshire',
            maxItems: 79440,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              103
            ],
            Uint8Array [
              97
            ]
          ],
          typeUrl: 'cross-media',
          maxItems: 18810,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '92340',
          leftover: '83110',
          amount: '60550'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '47dcd446a1e0c4cb1753a54bc357b00e3e2d35e0',
        owner: 'United Kingdom',
        moniker: 'Practical Fresh Table',
        readonly: undefined,
        transferrable: undefined,
        ttl: 57486,
        consumedTime: '2019-03-12T09:15:35.377Z',
        issuer: 'Group',
        stake: {
          totalStakes: '17220',
          totalUnstakes: '69112',
          totalReceivedStakes: '3473',
          recentStakes: {
            items: [
              Uint8Array [
                23
              ],
              Uint8Array [
                140
              ]
            ],
            typeUrl: 'green',
            maxItems: 77999,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                152
              ],
              Uint8Array [
                9
              ]
            ],
            typeUrl: 'virtual',
            maxItems: 87964,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'RAM',
          renaissanceTx: 'National',
          genesisTime: '2019-03-12T09:15:35.377Z',
          renaissanceTime: '2019-03-12T09:15:35.377Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '7bfb6160022a34403369a476a0682f326cb58b1c',
        owner: 'Chicken',
        moniker: 'Handcrafted Soft Computer',
        readonly: undefined,
        transferrable: undefined,
        ttl: 78967,
        consumedTime: '2019-03-12T09:15:35.377Z',
        issuer: 'user-centric',
        stake: {
          totalStakes: '10692',
          totalUnstakes: '97699',
          totalReceivedStakes: '69461',
          recentStakes: {
            items: [
              Uint8Array [
                127
              ],
              Uint8Array [
                59
              ]
            ],
            typeUrl: 'Frozen',
            maxItems: 69080,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                47
              ],
              Uint8Array [
                95
              ]
            ],
            typeUrl: '24/365',
            maxItems: 28885,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'reboot',
          renaissanceTx: 'back up',
          genesisTime: '2019-03-12T09:15:35.377Z',
          renaissanceTime: '2019-03-12T09:15:35.377Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'f58fce7c8746f2fd6e58e1f91febc519916f4126',
        from: '5a21b678410bec64eb7b4ef10ade80d98681a806',
        to: '02140c2d494875e49b1067c37c9ca0c68c5d6b90',
        balance: '99252',
        message: 'Buckinghamshire',
        context: {
          genesisTx: 'Facilitator',
          renaissanceTx: 'Awesome',
          genesisTime: '2019-03-12T09:15:35.381Z',
          renaissanceTime: '2019-03-12T09:15:35.381Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'de014de183af385d8b33289fcd130c23d506efe0',
        from: '7b2ff7e0ff89a4308d36106d6267c50fe4724ab0',
        to: 'd38c0a6e604dc33cc8784ea5db7d562f520be4e4',
        balance: '77477',
        message: 'Gorgeous',
        context: {
          genesisTx: 'indexing',
          renaissanceTx: 'Administrator',
          genesisTime: '2019-03-12T09:15:35.381Z',
          renaissanceTime: '2019-03-12T09:15:35.381Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'd24b4f3de9fb59c42b1508a7033058374e2b548e',
      blockHeight: 31715,
      blockTime: '2019-03-12T09:15:35.381Z',
      totalTxs: 19520,
      txStatistics: {
        numAccountMigrateTxs: 77594,
        numCreateAssetTxs: 81912,
        numConsensusUpgradeTxs: 15794,
        numDeclareTxs: 79982,
        numDeclareFileTxs: 72318,
        numExchangeTxs: 60981,
        numStakeTxs: 44057,
        numSysUpgradeTxs: 68121,
        numTransferTxs: 71308,
        numUpdateAssetTxs: 28342,
        numConsumeAssetTxs: 93745,
        numPokeTxs: 59894
      },
      txIndex: 69458,
      lastBlockTime: '2019-03-12T09:15:35.381Z'
    },
    appState: {
      address: 'cf21cd5a0cbc2fc60e1fb9adcb77d4b2a07b21a2',
      consensus: {
        maxBytes: 31284,
        maxGas: 12701,
        maxValidators: 39606,
        maxCandidates: 50626,
        pubKeyTypes: [
          'intangible',
          'Refined Metal Computer'
        ],
        validators: [
          {
            address: '73a301bff1eae64dd41951e7a3036e368b7d6b36',
            power: 3217
          },
          {
            address: '58c224a30499af4dabe63bf80edb4943a4324b6e',
            power: 10236
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
              dataHash: 'orchestrate',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 3,
              dataHash: 'Maine',
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
          totalStakes: '642',
          totalUnstakes: '52226',
          context: {
            genesisTx: 'Fantastic Wooden Table',
            renaissanceTx: 'bypass',
            genesisTime: '2019-03-12T09:15:35.381Z',
            renaissanceTime: '2019-03-12T09:15:35.381Z'
          }
        }
      },
      version: 'Money Market Account',
      dataVersion: 'calculate',
      forgeAppHash: Uint8Array [
        169
      ],
      token: {
        name: 'navigate',
        symbol: 'Analyst',
        unit: 'encryption',
        description: 'Auto Loan Account',
        icon: Uint8Array [
          185
        ],
        decimal: 75632,
        initialSupply: 33571,
        totalSupply: 26725,
        inflationRate: 54914
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
    code: 24
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '7cbb5744e719117177aba017d3dbe3604a413290',
      nonce: 56218,
      signature: Uint8Array [
        189
      ],
      chainId: 'iterate',
      signatures: [
        {
          signer: 'optimizing',
          signature: Uint8Array [
            158
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Concrete',
          signature: Uint8Array [
            109
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
        balance: '44742',
        nonce: 40466,
        numTxs: 19759,
        address: 'e0d4a1e9d3cfbe1b5fca1b3e08a20d26ba803298',
        pk: Uint8Array [
          160
        ],
        type: {
          pk: 0,
          hash: 14,
          address: 1,
          role: 8
        },
        moniker: 'programming',
        context: {
          genesisTx: 'Djibouti Franc',
          renaissanceTx: 'array',
          genesisTime: '2019-03-12T09:15:35.382Z',
          renaissanceTime: '2019-03-12T09:15:35.382Z'
        },
        issuer: 'Tanzania',
        migratedTo: [
          'bypass',
          'transmit'
        ],
        migratedFrom: [
          'Secured',
          'Balanced'
        ],
        numAssets: 81831,
        stake: {
          totalStakes: '70531',
          totalUnstakes: '9461',
          totalReceivedStakes: '37780',
          recentStakes: {
            items: [
              Uint8Array [
                232
              ],
              Uint8Array [
                50
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 44879,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                99
              ],
              Uint8Array [
                243
              ]
            ],
            typeUrl: 'deliverables',
            maxItems: 30889,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              86
            ],
            Uint8Array [
              44
            ]
          ],
          typeUrl: 'impactful',
          maxItems: 74607,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '16161',
          leftover: '71716',
          amount: '57370'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '60229',
        nonce: 52467,
        numTxs: 31257,
        address: '2932cdc323a27893c9fc828589a4ff66bae375f5',
        pk: Uint8Array [
          126
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 6
        },
        moniker: 'green',
        context: {
          genesisTx: 'deliverables',
          renaissanceTx: 'Fresh',
          genesisTime: '2019-03-12T09:15:35.382Z',
          renaissanceTime: '2019-03-12T09:15:35.382Z'
        },
        issuer: 'bandwidth',
        migratedTo: [
          'Personal Loan Account',
          'AI'
        ],
        migratedFrom: [
          'Music',
          'hack'
        ],
        numAssets: 12928,
        stake: {
          totalStakes: '79415',
          totalUnstakes: '52984',
          totalReceivedStakes: '95493',
          recentStakes: {
            items: [
              Uint8Array [
                203
              ],
              Uint8Array [
                154
              ]
            ],
            typeUrl: 'Shirt',
            maxItems: 54749,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                141
              ],
              Uint8Array [
                246
              ]
            ],
            typeUrl: 'Implementation',
            maxItems: 91406,
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
              123
            ]
          ],
          typeUrl: 'Auto Loan Account',
          maxItems: 38297,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '51794',
          leftover: '43299',
          amount: '60444'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '9dbe9577d8652a61c1ffb6de343db8205ceb0e7f',
        owner: 'COM',
        moniker: 'Quetzal',
        readonly: undefined,
        transferrable: undefined,
        ttl: 60496,
        consumedTime: '2019-03-12T09:15:35.382Z',
        issuer: 'calculating',
        stake: {
          totalStakes: '55644',
          totalUnstakes: '29961',
          totalReceivedStakes: '18917',
          recentStakes: {
            items: [
              Uint8Array [
                69
              ],
              Uint8Array [
                167
              ]
            ],
            typeUrl: 'Steel',
            maxItems: 9580,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                147
              ],
              Uint8Array [
                249
              ]
            ],
            typeUrl: 'Intranet',
            maxItems: 39462,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'application',
          renaissanceTx: 'Innovative',
          genesisTime: '2019-03-12T09:15:35.382Z',
          renaissanceTime: '2019-03-12T09:15:35.382Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'fd4c3286c06067cb7f12714cf7cb236677079407',
        owner: 'Wooden',
        moniker: 'indexing',
        readonly: undefined,
        transferrable: undefined,
        ttl: 85440,
        consumedTime: '2019-03-12T09:15:35.382Z',
        issuer: 'backing up',
        stake: {
          totalStakes: '18418',
          totalUnstakes: '3869',
          totalReceivedStakes: '59381',
          recentStakes: {
            items: [
              Uint8Array [
                154
              ],
              Uint8Array [
                226
              ]
            ],
            typeUrl: 'online',
            maxItems: 71489,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                109
              ],
              Uint8Array [
                7
              ]
            ],
            typeUrl: 'Ergonomic',
            maxItems: 91690,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'cross-platform',
          renaissanceTx: 'Kids',
          genesisTime: '2019-03-12T09:15:35.382Z',
          renaissanceTime: '2019-03-12T09:15:35.382Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '2aefea168a218caee622463667c1bf8308b0d428',
        from: '333e2e0c09fe85197f4b9cde6f0db37ddaeaafd8',
        to: 'f4a24c49580ffd636fe70cade1bc9a164ff5549a',
        balance: '40777',
        message: 'Usability',
        context: {
          genesisTx: 'Handcrafted',
          renaissanceTx: 'invoice',
          genesisTime: '2019-03-12T09:15:35.383Z',
          renaissanceTime: '2019-03-12T09:15:35.383Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '1c1a22c8ff31cdb60a889d7a002b97e5b09f98ce',
        from: 'f067c554f571d47a1ee925924811220dab8b479c',
        to: '5843e99e9d2606d7ddad055c941b77d30174e0dd',
        balance: '39539',
        message: 'copy',
        context: {
          genesisTx: 'Senior',
          renaissanceTx: 'Jewelery',
          genesisTime: '2019-03-12T09:15:35.383Z',
          renaissanceTime: '2019-03-12T09:15:35.383Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'e5d581d5c80c8023258cc62fd3b2f6925939aa5e',
      blockHeight: 81291,
      blockTime: '2019-03-12T09:15:35.383Z',
      totalTxs: 27574,
      txStatistics: {
        numAccountMigrateTxs: 63736,
        numCreateAssetTxs: 47563,
        numConsensusUpgradeTxs: 11550,
        numDeclareTxs: 32601,
        numDeclareFileTxs: 89293,
        numExchangeTxs: 6704,
        numStakeTxs: 47129,
        numSysUpgradeTxs: 20258,
        numTransferTxs: 73790,
        numUpdateAssetTxs: 97563,
        numConsumeAssetTxs: 11563,
        numPokeTxs: 39576
      },
      txIndex: 54713,
      lastBlockTime: '2019-03-12T09:15:35.383Z'
    },
    appState: {
      address: 'cea89f40cdba4036c87e6245ca60465398d637a8',
      consensus: {
        maxBytes: 40717,
        maxGas: 71568,
        maxValidators: 72046,
        maxCandidates: 42314,
        pubKeyTypes: [
          'Anguilla',
          'cultivate'
        ],
        validators: [
          {
            address: 'ffff3bf9e94aa2c1651c65c9a8c3f3f63ed58410',
            power: 48701
          },
          {
            address: '3f0dec6c18c6ad929dfed06b294e5c12c026ce96',
            power: 72701
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 4,
              dataHash: 'Buckinghamshire',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 0,
              dataHash: 'Intelligent Rubber Towels',
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
          totalStakes: '94692',
          totalUnstakes: '96384',
          context: {
            genesisTx: 'seamless',
            renaissanceTx: 'Valleys',
            genesisTime: '2019-03-12T09:15:35.383Z',
            renaissanceTime: '2019-03-12T09:15:35.383Z'
          }
        }
      },
      version: 'Soft',
      dataVersion: 'Switchable',
      forgeAppHash: Uint8Array [
        78
      ],
      token: {
        name: 'optimal',
        symbol: 'RSS',
        unit: 'markets',
        description: 'sky blue',
        icon: Uint8Array [
          253
        ],
        decimal: 948,
        initialSupply: 97690,
        totalSupply: 22281,
        inflationRate: 62670
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
    code: 9
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
    hash: 6,
    address: 1,
    role: 2
  },
  passphrase: 'Agent',
  moniker: 'Buckinghamshire'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  token: 'bricks-and-clicks',
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      24
    ],
    pk: Uint8Array [
      88
    ],
    address: '14a5f3bdc35bdf4b5734cea6b684666b3dd0183b'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'b21fa13f134986993f2ee47baca46038a998e5ed'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25
}
});
```

### search

```js
const result = await client.search({
  key: 'Tuna',
  value: 'optical'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  txs: [
    {
      tx: {
        from: 'd98d3e523ca64239d7817155e4dab9ba9a0f80f8',
        nonce: 65907,
        signature: Uint8Array [
          43
        ],
        chainId: 'connecting',
        signatures: [
          {
            signer: 'Cotton',
            signature: Uint8Array [
              53
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Buckinghamshire',
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
      height: 68468,
      index: 82497,
      hash: '87fbb4fc4010538fd2623915284870d24c3011fb',
      tags: [
        {
          key: Uint8Array [
            193
          ],
          value: Uint8Array [
            110
          ]
        },
        {
          key: Uint8Array [
            112
          ],
          value: Uint8Array [
            119
          ]
        }
      ],
      code: 4,
      time: '2019-03-12T09:15:35.384Z',
      createAsset: {
        asset: 'Corporate'
      },
      accountMigrate: {
        address: '2801c8a3a024b5cff83d86562269b857d277b4ea'
      }
    },
    {
      tx: {
        from: '8c67c3b730bdda14305c93193f5498de7659c1d9',
        nonce: 62643,
        signature: Uint8Array [
          77
        ],
        chainId: 'primary',
        signatures: [
          {
            signer: 'Shirt',
            signature: Uint8Array [
              81
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Lead',
            signature: Uint8Array [
              242
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
      height: 60976,
      index: 21726,
      hash: '089988f720f6db501650c44e4ff0f83e899d45cf',
      tags: [
        {
          key: Uint8Array [
            56
          ],
          value: Uint8Array [
            32
          ]
        },
        {
          key: Uint8Array [
            225
          ],
          value: Uint8Array [
            179
          ]
        }
      ],
      code: 38,
      time: '2019-03-12T09:15:35.384Z',
      createAsset: {
        asset: 'Egypt'
      },
      accountMigrate: {
        address: 'eba593f2e01d09bba108fa6465f343399aba8675'
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
    from: 'c6da81ac67511e7de84f5c4f2d59075d009857fb',
    nonce: 61956,
    signature: Uint8Array [
      162
    ],
    chainId: 'Awesome Cotton Pizza',
    signatures: [
      {
        signer: 'Kentucky',
        signature: Uint8Array [
          22
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'transform',
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
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      36
    ],
    pk: Uint8Array [
      239
    ],
    address: '1f48c7460549e7b66076fc526f0a5d99ea5d1f7f'
  },
  token: 'Shoes',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  hash: '76ba3503380f2010f224ab9d30551110d757eb23'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    6
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      10
    ],
    pk: Uint8Array [
      130
    ],
    address: 'adb84a1f6ef60a27cda057b20db5d2a551216540'
  },
  token: 'calculating'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  signature: Uint8Array [
    62
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    65
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  hash: '1fe92dcbe9a733dfdc7d57c414d4504f9673e147'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 2,
  filter: 'pricing structure'
});

// output
{
  topic: 'B2C'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Incredible Steel Chips'
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
