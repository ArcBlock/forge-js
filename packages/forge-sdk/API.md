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
  from: 'd2dc682f4ab68f0547b771bfca4c2e93e24aedf6',
  nonce: 75319,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      109
    ],
    pk: Uint8Array [
      217
    ],
    address: 'c068ec36db10b01777c2c10eaf63085ac35f8e4a'
  },
  token: 'Hawaii'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  tx: {
    from: '488e74b94f7512ccef50957468c634cb1918cc13',
    nonce: 63846,
    signature: Uint8Array [
      224
    ],
    chainId: 'Shoes',
    signatures: [
      {
        signer: 'Rubber',
        signature: Uint8Array [
          30
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'deposit',
        signature: Uint8Array [
          238
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
  passphrase: 'Future',
  type: {
    pk: 1,
    hash: 1,
    address: 1,
    role: 8
  },
  moniker: 'Corner'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  token: 'COM',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      32
    ],
    pk: Uint8Array [
      224
    ],
    address: '65b79c490a8ed1dc10c1fc7e51d6f3f387e4adcf'
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
      hash: 1,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      198
    ],
    pk: Uint8Array [
      27
    ],
    address: '87e7620ea4a289cdc138c6fbfcf33a0724c76b2a'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '9cd2c1de0483f82ca9c00b7378e16379044bdbb0',
  keys: [
    'interface',
    'French Polynesia'
  ],
  height: 81551
});

// output
{
  code: 4,
  state: {
    balance: '93192',
    nonce: 47432,
    numTxs: 21457,
    address: '46b5cf002246787d7304d012dbfd46ab76f956d2',
    pk: Uint8Array [
      145
    ],
    type: {
      pk: 1,
      hash: 6,
      address: 0,
      role: 4
    },
    moniker: 'TCP',
    context: {
      genesisTx: 'Web',
      renaissanceTx: 'Democratic People\'s Republic of Korea',
      genesisTime: '2019-03-11T02:40:29.185Z',
      renaissanceTime: '2019-03-11T02:40:29.185Z'
    },
    issuer: 'paradigm',
    migratedTo: [
      'Future',
      'whiteboard'
    ],
    migratedFrom: [
      'maximized',
      'upward-trending'
    ],
    numAssets: 73082,
    stake: {
      totalStakes: '1822',
      totalUnstakes: '48728',
      totalReceivedStakes: '23199',
      recentStakes: {
        items: [
          Uint8Array [
            70
          ],
          Uint8Array [
            92
          ]
        ],
        typeUrl: 'AI',
        maxItems: 37024,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            152
          ],
          Uint8Array [
            92
          ]
        ],
        typeUrl: 'Metrics',
        maxItems: 55457,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          235
        ],
        Uint8Array [
          246
        ]
      ],
      typeUrl: 'Functionality',
      maxItems: 52691,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '38800',
      leftover: '48342',
      amount: '35807'
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
  senderAddress: 'SQL',
  itx: {
    moniker: 'Savings Account',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 64428,
    parent: 'Turkey'
  },
  walletType: {
    pk: 0,
    hash: 0,
    address: 1,
    role: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  assetAddress: 'Frozen'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'b28ac0dd85c656b3a2a6f7ea209f980321f3ba31',
  keys: [
    'Sausages',
    'Fields'
  ],
  height: 70914
});

// output
{
  code: 7,
  state: {
    address: '5d5a22e4d32a215f0421a3e7bf8cd37fd2e50dee',
    owner: '24/365',
    moniker: 'Pennsylvania',
    readonly: undefined,
    transferrable: undefined,
    ttl: 24809,
    consumedTime: '2019-03-11T02:40:29.186Z',
    issuer: 'Brand',
    stake: {
      totalStakes: '91196',
      totalUnstakes: '31567',
      totalReceivedStakes: '34545',
      recentStakes: {
        items: [
          Uint8Array [
            89
          ],
          Uint8Array [
            187
          ]
        ],
        typeUrl: 'Ohio',
        maxItems: 35184,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            72
          ],
          Uint8Array [
            73
          ]
        ],
        typeUrl: 'optical',
        maxItems: 4159,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Interactions',
      renaissanceTx: 'Guatemala',
      genesisTime: '2019-03-11T02:40:29.186Z',
      renaissanceTime: '2019-03-11T02:40:29.186Z'
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
    cursor: 'redundant',
    size: 19208,
    order: [
      {
        field: 'empowering',
        type: 'PCI'
      },
      {
        field: 'customized',
        type: 'Consultant'
      }
    ]
  },
  ownerAddress: 'platforms'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  page: {
    cursor: 'purple',
    next: undefined,
    total: 75830
  },
  assets: [
    {
      address: '22e869b01929b26e091dbd6361784ce49ecfd4b6',
      owner: 'Won',
      genesisTime: 'Interactions',
      renaissanceTime: 'Sweden',
      moniker: 'invoice',
      readonly: undefined
    },
    {
      address: '34366a021bccc2dcecc5d3de529cd66d3b96ea1d',
      owner: 'Cambridgeshire',
      genesisTime: 'Applications',
      renaissanceTime: 'Administrator',
      moniker: 'invoice',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 29577
});

// output
{
  code: 22,
  block: {
    height: 44815,
    numTxs: 97283,
    time: '2019-03-11T02:40:29.187Z',
    appHash: 'f3b5dc5b51279b13bebd2aead169da4698e68255',
    proposer: 'c4e8e8926b8f49970f9633cad289867ee7bc8241',
    txs: [
      {
        tx: {
          from: '61f4855537f2cda8aff986ecf6233392201627f2',
          nonce: 48,
          signature: Uint8Array [
            248
          ],
          chainId: 'generate',
          signatures: [
            {
              signer: 'encompassing',
              signature: Uint8Array [
                243
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'North Carolina',
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
        height: 66576,
        index: 23979,
        hash: 'd402230e077e53eebdf10c77682fbfc67c180907',
        tags: [
          {
            key: Uint8Array [
              10
            ],
            value: Uint8Array [
              113
            ]
          },
          {
            key: Uint8Array [
              92
            ],
            value: Uint8Array [
              25
            ]
          }
        ],
        code: 37,
        time: '2019-03-11T02:40:29.188Z'
      },
      {
        tx: {
          from: '916e5e01e7017bf9f6b33d74319c7e88a42433ff',
          nonce: 49236,
          signature: Uint8Array [
            44
          ],
          chainId: 'Wooden',
          signatures: [
            {
              signer: 'SSL',
              signature: Uint8Array [
                27
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Technician',
              signature: Uint8Array [
                143
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
        height: 73947,
        index: 37938,
        hash: '7919e59bee0618e399ec17b65d670f6578ca3a8a',
        tags: [
          {
            key: Uint8Array [
              233
            ],
            value: Uint8Array [
              136
            ]
          },
          {
            key: Uint8Array [
              50
            ],
            value: Uint8Array [
              223
            ]
          }
        ],
        code: 8,
        time: '2019-03-11T02:40:29.188Z'
      }
    ],
    totalTxs: 49120,
    invalidTxs: [
      {
        tx: {
          from: 'ad5245d3a83a16c5cbffddf21969771cad67ecc1',
          nonce: 89898,
          signature: Uint8Array [
            151
          ],
          chainId: 'Borders',
          signatures: [
            {
              signer: 'technologies',
              signature: Uint8Array [
                201
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Handmade',
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
        height: 27179,
        index: 51533,
        hash: '65c095aa022b8b40b06d99518b500b0b360630b9',
        tags: [
          {
            key: Uint8Array [
              179
            ],
            value: Uint8Array [
              136
            ]
          },
          {
            key: Uint8Array [
              111
            ],
            value: Uint8Array [
              31
            ]
          }
        ],
        code: 26,
        time: '2019-03-11T02:40:29.188Z'
      },
      {
        tx: {
          from: '6dc0a99e62e59d2e55e6703caf9ec07ce11f1f70',
          nonce: 92839,
          signature: Uint8Array [
            98
          ],
          chainId: 'Maryland',
          signatures: [
            {
              signer: 'invoice',
              signature: Uint8Array [
                54
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Borders',
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
        height: 1511,
        index: 13228,
        hash: '58fa56ceab04f0387c6e48e56299cdc525cf49ae',
        tags: [
          {
            key: Uint8Array [
              199
            ],
            value: Uint8Array [
              167
            ]
          },
          {
            key: Uint8Array [
              32
            ],
            value: Uint8Array [
              83
            ]
          }
        ],
        code: 33,
        time: '2019-03-11T02:40:29.188Z'
      }
    ],
    txsHashes: [
      'bifurcated',
      'wireless'
    ],
    invalidTxsHashes: [
      'generate',
      'cross-media'
    ]
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Checking Account',
    size: 26335,
    order: [
      {
        field: 'disintermediate',
        type: 'ivory'
      },
      {
        field: 'transparent',
        type: 'GB'
      }
    ]
  },
  minHeight: 48170,
  maxHeight: 36901,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'engage',
    next: undefined,
    total: 39598
  },
  blocks: [
    {
      height: 84393,
      numTxs: 11819,
      time: '2019-03-11T02:40:29.189Z',
      appHash: 'd57343ec741bd331e4add3c4d8efd07a96e8ea3e',
      proposer: 'ce88d74370e9591ccb744f3d21e327dfebf456ce',
      txs: [
        {
          tx: {
            from: '65400a89ae0b0194eb6f58dc60445bd4033b78ff',
            nonce: 99070,
            signature: Uint8Array [
              138
            ],
            chainId: 'withdrawal',
            signatures: [
              {
                signer: 'Illinois',
                signature: Uint8Array [
                  107
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Ball',
                signature: Uint8Array [
                  208
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
          height: 87882,
          index: 42675,
          hash: 'bd48c9d750faa77c611bba2cc51601ac0c469948',
          tags: [
            {
              key: Uint8Array [
                167
              ],
              value: Uint8Array [
                109
              ]
            },
            {
              key: Uint8Array [
                104
              ],
              value: Uint8Array [
                225
              ]
            }
          ],
          code: 39,
          time: '2019-03-11T02:40:29.190Z'
        },
        {
          tx: {
            from: '52ad068ee3acaee0f2a06d9ae49f92b8972369b5',
            nonce: 31259,
            signature: Uint8Array [
              154
            ],
            chainId: 'empowering',
            signatures: [
              {
                signer: 'Oklahoma',
                signature: Uint8Array [
                  115
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'bypassing',
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
          height: 77681,
          index: 31344,
          hash: 'f246f0bdfe04eb0b8eb41c1c26a7063c0ac145ba',
          tags: [
            {
              key: Uint8Array [
                198
              ],
              value: Uint8Array [
                30
              ]
            },
            {
              key: Uint8Array [
                24
              ],
              value: Uint8Array [
                233
              ]
            }
          ],
          code: 30,
          time: '2019-03-11T02:40:29.190Z'
        }
      ],
      totalTxs: 96286,
      invalidTxs: [
        {
          tx: {
            from: 'a2a7bca9a94db121b5543c349b0d4ea0e9c44897',
            nonce: 35101,
            signature: Uint8Array [
              132
            ],
            chainId: 'Auto Loan Account',
            signatures: [
              {
                signer: 'Brook',
                signature: Uint8Array [
                  226
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Zambian Kwacha',
                signature: Uint8Array [
                  97
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
          height: 24258,
          index: 43656,
          hash: 'be1a99710f14303b8cc53e1514526c70723a7dfe',
          tags: [
            {
              key: Uint8Array [
                147
              ],
              value: Uint8Array [
                34
              ]
            },
            {
              key: Uint8Array [
                57
              ],
              value: Uint8Array [
                157
              ]
            }
          ],
          code: 31,
          time: '2019-03-11T02:40:29.190Z'
        },
        {
          tx: {
            from: 'f2d8eb5cf5869b13d787eaf1bc82db507acd4013',
            nonce: 73262,
            signature: Uint8Array [
              219
            ],
            chainId: 'Optimization',
            signatures: [
              {
                signer: 'moratorium',
                signature: Uint8Array [
                  13
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'strategize',
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
          height: 30023,
          index: 96231,
          hash: 'fbcf80e741132b2064a7f946fdacb4cefa73c866',
          tags: [
            {
              key: Uint8Array [
                116
              ],
              value: Uint8Array [
                70
              ]
            },
            {
              key: Uint8Array [
                251
              ],
              value: Uint8Array [
                103
              ]
            }
          ],
          code: 34,
          time: '2019-03-11T02:40:29.190Z'
        }
      ],
      txsHashes: [
        'Centralized',
        'Producer'
      ],
      invalidTxsHashes: [
        'Cambridgeshire',
        'Unbranded'
      ]
    },
    {
      height: 77514,
      numTxs: 20212,
      time: '2019-03-11T02:40:29.190Z',
      appHash: 'c9bfe1c71e20f46460bda7c83f8afdd03b61cd3b',
      proposer: '8af337c66c6ff13d2cf7bd20b569b4a5447ac313',
      txs: [
        {
          tx: {
            from: '34328dab76ede5dfc2693832ccea97ebef5fb6bb',
            nonce: 52949,
            signature: Uint8Array [
              215
            ],
            chainId: 'brand',
            signatures: [
              {
                signer: 'B2B',
                signature: Uint8Array [
                  216
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Organic',
                signature: Uint8Array [
                  93
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
          height: 66845,
          index: 6326,
          hash: '4d4fa56e790f7d9c3d86e5ace9538f253102dd09',
          tags: [
            {
              key: Uint8Array [
                2
              ],
              value: Uint8Array [
                73
              ]
            },
            {
              key: Uint8Array [
                137
              ],
              value: Uint8Array [
                39
              ]
            }
          ],
          code: 3,
          time: '2019-03-11T02:40:29.191Z'
        },
        {
          tx: {
            from: 'b30f34e4e284067913d0b5161de58c3fbaf2fab0',
            nonce: 91913,
            signature: Uint8Array [
              40
            ],
            chainId: 'Towels',
            signatures: [
              {
                signer: 'knowledge user',
                signature: Uint8Array [
                  162
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Plastic',
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
          height: 65647,
          index: 42162,
          hash: 'a3f962ea023ced8a1877c88881d6697d76c7b671',
          tags: [
            {
              key: Uint8Array [
                246
              ],
              value: Uint8Array [
                63
              ]
            },
            {
              key: Uint8Array [
                73
              ],
              value: Uint8Array [
                94
              ]
            }
          ],
          code: 42,
          time: '2019-03-11T02:40:29.191Z'
        }
      ],
      totalTxs: 20006,
      invalidTxs: [
        {
          tx: {
            from: '6d8447e89425e154347892b3a3998b160e8204f4',
            nonce: 83759,
            signature: Uint8Array [
              116
            ],
            chainId: 'open-source',
            signatures: [
              {
                signer: 'Cambridgeshire',
                signature: Uint8Array [
                  90
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'architecture',
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
          height: 83502,
          index: 8629,
          hash: 'fe1071c6257dafedc217ea4638d2c7941310df4c',
          tags: [
            {
              key: Uint8Array [
                206
              ],
              value: Uint8Array [
                198
              ]
            },
            {
              key: Uint8Array [
                237
              ],
              value: Uint8Array [
                25
              ]
            }
          ],
          code: 32,
          time: '2019-03-11T02:40:29.191Z'
        },
        {
          tx: {
            from: '3f0efe775f8d879dcf6294d110adb15c0d4d7772',
            nonce: 51690,
            signature: Uint8Array [
              83
            ],
            chainId: 'best-of-breed',
            signatures: [
              {
                signer: 'transmit',
                signature: Uint8Array [
                  183
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Ohio',
                signature: Uint8Array [
                  218
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
          height: 29214,
          index: 97357,
          hash: 'd7321a599f6786a87c6d24dc7206c5de29a7e492',
          tags: [
            {
              key: Uint8Array [
                101
              ],
              value: Uint8Array [
                231
              ]
            },
            {
              key: Uint8Array [
                159
              ],
              value: Uint8Array [
                185
              ]
            }
          ],
          code: 25,
          time: '2019-03-11T02:40:29.192Z'
        }
      ],
      txsHashes: [
        'Kids',
        'black'
      ],
      invalidTxsHashes: [
        'Incredible Steel Mouse',
        'Unbranded Frozen Mouse'
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
  code: 36,
  info: {
    id: 'Forest',
    network: 'implementation',
    moniker: 'Dynamic',
    consensusVersion: 'Rwanda Franc',
    synced: undefined,
    appHash: 'ddb50c919ee1b3e3edf8f5a13e4ba2b004c75944',
    blockHash: Uint8Array [
      0
    ],
    blockHeight: 13824,
    blockTime: '2019-03-11T02:40:29.193Z',
    address: 'dc7e50aea31728103f11951669132a6aee167e71',
    votingPower: 57388,
    totalTxs: 7502,
    version: 'Granite',
    dataVersion: 'Jewelery',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Steel'
    },
    supportedTxs: [
      'Keyboard',
      'Michigan'
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
  config: 'heuristic'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Program',
    'payment'
  ],
  height: 93352
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31,
  state: {
    address: 'dbd53b58b5b2e9d52a5453b5f0d8f9fdd1b8c1ba',
    consensus: {
      maxBytes: 10557,
      maxGas: 8514,
      maxValidators: 78243,
      maxCandidates: 25559,
      pubKeyTypes: [
        'Refined Cotton Hat',
        'Corporate'
      ],
      validators: [
        {
          address: '468cc88536ec0aa046c1ea9fdc5eedfc17675e87',
          power: 39490
        },
        {
          address: '3f27da95a8e53ff0a51ded32a5f95c9592ad41cf',
          power: 63496
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
            dataHash: 'Factors',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 0,
            dataHash: 'generating',
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
        totalStakes: '48092',
        totalUnstakes: '28241',
        context: {
          genesisTx: 'Home Loan Account',
          renaissanceTx: 'Generic Frozen Towels',
          genesisTime: '2019-03-11T02:40:29.193Z',
          renaissanceTime: '2019-03-11T02:40:29.193Z'
        }
      }
    },
    version: 'Personal Loan Account',
    dataVersion: 'Rustic Fresh Cheese',
    forgeAppHash: Uint8Array [
      147
    ],
    token: {
      name: 'open architecture',
      symbol: 'Missouri',
      unit: 'Ridges',
      description: 'proactive',
      icon: Uint8Array [
        129
      ],
      decimal: 26940,
      initialSupply: 74171,
      totalSupply: 29441,
      inflationRate: 87984
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
    startDate: 'Nebraska',
    endDate: 'Avon'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  forgeStatistics: {
    numBlocks: [
      65890,
      39052
    ],
    numTxs: [
      65613,
      74168
    ],
    numStakes: [
      '33298',
      '26887'
    ],
    numValidators: [
      29968,
      18251
    ],
    numAccountMigrateTxs: [
      4017,
      59234
    ],
    numCreateAssetTxs: [
      73302,
      75198
    ],
    numConsensusUpgradeTxs: [
      46111,
      55795
    ],
    numDeclareTxs: [
      17484,
      42094
    ],
    numDeclareFileTxs: [
      80831,
      2511
    ],
    numExchangeTxs: [
      65265,
      41182
    ],
    numStakeTxs: [
      55222,
      98725
    ],
    numSysUpgradeTxs: [
      99632,
      99222
    ],
    numTransferTxs: [
      23256,
      32908
    ],
    numUpdateAssetTxs: [
      69582,
      33919
    ],
    numConsumeAssetTxs: [
      87415,
      7439
    ],
    numPokeTxs: [
      17891,
      18710
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
  code: 20,
  netInfo: {
    listening: undefined,
    listeners: [
      'generating',
      'bypassing'
    ],
    nPeers: 31856,
    peers: [
      {
        id: 'Station',
        network: 'Health',
        consensusVersion: 'Electronics',
        moniker: 'invoice',
        ip: 'Savings Account',
        geoInfo: {
          city: 'parsing',
          country: 'Algeria',
          latitude: 89868.28,
          longitude: 15533.94
        }
      },
      {
        id: 'Lead',
        network: 'Small Soft Tuna',
        consensusVersion: 'Fantastic Soft Gloves',
        moniker: 'Sleek',
        ip: 'Customer-focused',
        geoInfo: {
          city: 'Identity',
          country: 'Operations',
          latitude: 73640.34,
          longitude: 4637.23
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
    id: 'SQL',
    network: 'Sleek',
    moniker: 'Money Market Account',
    consensusVersion: 'Auto Loan Account',
    synced: undefined,
    appHash: '8c96e45b2728120e30518b6eac0e08a09860e79b',
    blockHash: Uint8Array [
      15
    ],
    blockHeight: 40016,
    blockTime: '2019-03-11T02:40:29.195Z',
    address: 'efe69fa438ef97515877b2db2d83b82ccde97198',
    votingPower: 67514,
    totalTxs: 16235,
    version: 'South Carolina',
    dataVersion: 'Brook',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'USB'
    },
    supportedTxs: [
      'Bacon',
      'neural'
    ],
    ip: 'SMS',
    geoInfo: {
      city: 'microchip',
      country: 'SSL',
      latitude: 99275.35,
      longitude: 57286.13
    }
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '0eb984895d86f5364796d58646ad3dfdb980e8d3',
  keys: [
    'optical',
    'Mobility'
  ],
  height: 55765
});

// output
{
  code: 31,
  state: {
    address: '781d79e29ff4f05ca7d3962baa7552fe9bff2fe9',
    from: '04efb32c90b4ece953eebe240edfbb2b4c3d7e69',
    to: '4385bab36973e280954531cd2a1681b85d4c9107',
    balance: '64259',
    message: 'Garden',
    context: {
      genesisTx: 'Borders',
      renaissanceTx: 'Forward',
      genesisTime: '2019-03-11T02:40:29.195Z',
      renaissanceTime: '2019-03-11T02:40:29.195Z'
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
    cursor: 'Gloves',
    size: 39363,
    order: [
      {
        field: 'software',
        type: 'wireless'
      },
      {
        field: 'Avon',
        type: 'Internal'
      }
    ]
  },
  addressFilter: {
    sender: 'platforms',
    receiver: 'Cotton',
    direction: 1
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  page: {
    cursor: 'Beauty',
    next: undefined,
    total: 58840
  },
  stakes: [
    {
      address: '495c7cf7e1bf53367c56c6929e9728366eb3c029',
      balance: '89049',
      sender: 'Mobility',
      receiver: 'B2C',
      genesisTime: 'input',
      renaissanceTime: 'Marketing',
      message: 'synthesizing',
      type: 87915
    },
    {
      address: '244bf955035f263762386db4469c4994c8914793',
      balance: '64999',
      sender: 'Assimilated',
      receiver: 'Liaison',
      genesisTime: 'Orchard',
      renaissanceTime: 'generate',
      message: 'invoice',
      type: 43487
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Netherlands Antillian Guilder',
    size: 35831,
    order: [
      {
        field: 'deliver',
        type: 'primary'
      },
      {
        field: 'Auto Loan Account',
        type: 'envisioneer'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  page: {
    cursor: 'Marketing',
    next: undefined,
    total: 29919
  },
  accounts: [
    {
      address: '512cf77f73ccf047a1622347b5c5bd59d7dfb72e',
      balance: '15206',
      numAssets: 95986,
      numTxs: 2234,
      nonce: 8818,
      genesisTime: 'Direct',
      renaissanceTime: 'withdrawal',
      moniker: 'even-keeled',
      migratedFrom: 'world-class',
      migratedTo: 'Cheese',
      totalReceivedStakes: '19895',
      totalStakes: '36830',
      totalUnstakes: '38331',
      recentNumTxs: [
        78982,
        23935
      ]
    },
    {
      address: 'e2553cce6537334dd4f33cefba3f90afbfbd03c8',
      balance: '48521',
      numAssets: 56842,
      numTxs: 60929,
      nonce: 82636,
      genesisTime: 'New Jersey',
      renaissanceTime: 'Auto Loan Account',
      moniker: 'Gloves',
      migratedFrom: 'collaboration',
      migratedTo: 'next generation',
      totalReceivedStakes: '36899',
      totalStakes: '95917',
      totalUnstakes: '48636',
      recentNumTxs: [
        65586,
        56827
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '93a46aec7e677ad83621351474abcd9cf9b3179e'
});

// output
{
  code: 41,
  info: {
    tx: {
      from: 'acafca20337f7d7923cb49fca51350e790e4f80f',
      nonce: 35393,
      signature: Uint8Array [
        55
      ],
      chainId: 'Awesome Soft Sausages',
      signatures: [
        {
          signer: 'Reactive',
          signature: Uint8Array [
            144
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'reintermediate',
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
    },
    height: 48203,
    index: 55384,
    hash: 'c919faa7719708594d74e84f1531f457bf136424',
    tags: [
      {
        key: Uint8Array [
          189
        ],
        value: Uint8Array [
          196
        ]
      },
      {
        key: Uint8Array [
          219
        ],
        value: Uint8Array [
          99
        ]
      }
    ],
    code: 2,
    time: '2019-03-11T02:40:29.196Z'
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 97004
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  unconfirmedTxs: {
    nTxs: 91983,
    txs: [
      {
        from: '6675f83f32dd0647b54c3008e77a0b3ac17ad208',
        nonce: 18328,
        signature: Uint8Array [
          54
        ],
        chainId: 'Buckinghamshire',
        signatures: [
          {
            signer: 'District',
            signature: Uint8Array [
              115
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Ergonomic',
            signature: Uint8Array [
              12
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
        from: '9a9bcda368c253a9cec0d87c7fba76e40c3efb81',
        nonce: 74760,
        signature: Uint8Array [
          200
        ],
        chainId: 'Democratic People\'s Republic of Korea',
        signatures: [
          {
            signer: 'calculate',
            signature: Uint8Array [
              105
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Mouse',
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
  code: 37,
  validatorsInfo: {
    blockHeight: 43547,
    validators: [
      {
        address: 'b268c5ba6345d3dc409f86d04ec99411e21dba26',
        pubKey: {
          type: 'relationships',
          data: Uint8Array [
            29
          ]
        },
        votingPower: 74665,
        proposerPriority: 'Solutions',
        name: 'index'
      },
      {
        address: 'bce8648a3dca0cc8ff6ef1b314abf7024019201a',
        pubKey: {
          type: 'Central',
          data: Uint8Array [
            119
          ]
        },
        votingPower: 20265,
        proposerPriority: 'Checking Account',
        name: 'port'
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
    cursor: 'Codes specifically reserved for testing purposes',
    size: 44176,
    order: [
      {
        field: 'Developer',
        type: 'Liaison'
      },
      {
        field: 'Unbranded Wooden Keyboard',
        type: 'payment'
      }
    ]
  },
  address: '2abea4fb4f4fa251b12f3e88a4677d48b6b45e02'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  page: {
    cursor: 'Developer',
    next: undefined,
    total: 529
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Regional'
      }
    },
    {
      consumeAsset: {
        asset: 'CSS'
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
    cursor: 'Liechtenstein',
    size: 32755,
    order: [
      {
        field: 'Village',
        type: 'Cambridgeshire'
      },
      {
        field: 'EXE',
        type: 'maximized'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Auto Loan Account',
    endDateTime: 'wireless'
  },
  addressFilter: {
    sender: 'Borders',
    receiver: 'pink',
    direction: 2
  },
  typeFilter: {
    types: [
      'Interactions',
      'haptic'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'Port',
    next: undefined,
    total: 53756
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Producer'
      }
    },
    {
      consumeAsset: {
        asset: 'Soap'
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
  address: 'ffea46f4279abfe1ae040d293d9990f547ff12b0'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '477b4df37d05019c3bd6caaf99b1717e5561909e'
});

// output
{
  code: 33,
  chunk: Uint8Array [
    69
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '1c0ec0348cf1a7a82d446ea006c89dbe71e1a845',
  passphrase: 'generating'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  token: 'Brunei Darussalam',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      122
    ],
    pk: Uint8Array [
      219
    ],
    address: '716fc1808717056c39d76c01ef12ebdb8da81126'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '0862f1e188de0e6bd7d8a45923198290a7324d6e',
    nonce: 42454,
    signature: Uint8Array [
      114
    ],
    chainId: 'bleeding-edge',
    signatures: [
      {
        signer: 'Tugrik',
        signature: Uint8Array [
          247
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'blockchains',
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
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 1
    },
    sk: Uint8Array [
      12
    ],
    pk: Uint8Array [
      83
    ],
    address: '96e84e0b93b916bbc9641cfb4e33f918b83b476c'
  },
  token: 'Generic Metal Car'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  tx: {
    from: '1f199b20ab1620a2e2e23c45c6bdeecbb0b5dd8a',
    nonce: 83562,
    signature: Uint8Array [
      122
    ],
    chainId: 'utilize',
    signatures: [
      {
        signer: 'Kids',
        signature: Uint8Array [
          115
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Texas',
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
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '7bea9fd316a44fc6a799262080156d0f8ab83a26'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'f69976df990295f856965dd7c6a795d7da0afcd0',
      nonce: 40926,
      signature: Uint8Array [
        124
      ],
      chainId: 'gold',
      signatures: [
        {
          signer: 'Manager',
          signature: Uint8Array [
            89
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'Automated',
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
    states: [
      {
        balance: '60037',
        nonce: 6541,
        numTxs: 46818,
        address: 'fdd815b7a1bd02dc9b1590468289934670612be1',
        pk: Uint8Array [
          126
        ],
        type: {
          pk: 0,
          hash: 7,
          address: 1,
          role: 2
        },
        moniker: 'program',
        context: {
          genesisTx: 'Borders',
          renaissanceTx: 'Architect',
          genesisTime: '2019-03-11T02:40:29.199Z',
          renaissanceTime: '2019-03-11T02:40:29.199Z'
        },
        issuer: 'Steel',
        migratedTo: [
          'magenta',
          'Washington'
        ],
        migratedFrom: [
          'Metal',
          'Direct'
        ],
        numAssets: 59688,
        stake: {
          totalStakes: '30936',
          totalUnstakes: '94919',
          totalReceivedStakes: '10076',
          recentStakes: {
            items: [
              Uint8Array [
                75
              ],
              Uint8Array [
                2
              ]
            ],
            typeUrl: 'Leone',
            maxItems: 34874,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                71
              ],
              Uint8Array [
                47
              ]
            ],
            typeUrl: 'International',
            maxItems: 56288,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              183
            ],
            Uint8Array [
              185
            ]
          ],
          typeUrl: 'Secured',
          maxItems: 18007,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '27914',
          leftover: '29528',
          amount: '6310'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '94615',
        nonce: 32254,
        numTxs: 17827,
        address: '0c2031f52059b8020275d11187946cdc8f05bb9d',
        pk: Uint8Array [
          91
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 1,
          role: 5
        },
        moniker: 'Bedfordshire',
        context: {
          genesisTx: 'payment',
          renaissanceTx: 'Meadow',
          genesisTime: '2019-03-11T02:40:29.199Z',
          renaissanceTime: '2019-03-11T02:40:29.199Z'
        },
        issuer: 'zero administration',
        migratedTo: [
          'United Arab Emirates',
          'open architecture'
        ],
        migratedFrom: [
          'invoice',
          'hacking'
        ],
        numAssets: 70512,
        stake: {
          totalStakes: '2939',
          totalUnstakes: '35929',
          totalReceivedStakes: '8671',
          recentStakes: {
            items: [
              Uint8Array [
                189
              ],
              Uint8Array [
                179
              ]
            ],
            typeUrl: 'Oman',
            maxItems: 35690,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                89
              ],
              Uint8Array [
                135
              ]
            ],
            typeUrl: 'Creative',
            maxItems: 40691,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              71
            ],
            Uint8Array [
              223
            ]
          ],
          typeUrl: 'methodologies',
          maxItems: 6903,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '90224',
          leftover: '28457',
          amount: '99484'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'a9f5d91846fb324ef6817c92561d151848484d6d',
        owner: 'Senior',
        moniker: 'Plastic',
        readonly: undefined,
        transferrable: undefined,
        ttl: 11405,
        consumedTime: '2019-03-11T02:40:29.200Z',
        issuer: 'International',
        stake: {
          totalStakes: '36596',
          totalUnstakes: '68340',
          totalReceivedStakes: '93435',
          recentStakes: {
            items: [
              Uint8Array [
                105
              ],
              Uint8Array [
                109
              ]
            ],
            typeUrl: 'Drive',
            maxItems: 14052,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                183
              ],
              Uint8Array [
                87
              ]
            ],
            typeUrl: 'Rhode Island',
            maxItems: 52685,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Table',
          renaissanceTx: 'seize',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '9963bdf0ebe8eac5226ecac8f65dafe2e169e127',
        owner: 'attitude',
        moniker: 'bus',
        readonly: undefined,
        transferrable: undefined,
        ttl: 71046,
        consumedTime: '2019-03-11T02:40:29.200Z',
        issuer: 'hard drive',
        stake: {
          totalStakes: '13074',
          totalUnstakes: '73298',
          totalReceivedStakes: '72813',
          recentStakes: {
            items: [
              Uint8Array [
                121
              ],
              Uint8Array [
                183
              ]
            ],
            typeUrl: 'card',
            maxItems: 92297,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                195
              ],
              Uint8Array [
                161
              ]
            ],
            typeUrl: 'Fresh',
            maxItems: 39424,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'AI',
          renaissanceTx: 'Fantastic',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: 'c93e4ae460c92816c7acb352ad926ce1d46e664e',
        from: '5ee7a43e1198ce3deb0d7485a33c4153be7d3a3d',
        to: '8f037b465fa5b4d7c3172e302b9842aafe8f356f',
        balance: '28709',
        message: 'asynchronous',
        context: {
          genesisTx: 'Falkland Islands (Malvinas)',
          renaissanceTx: 'Democratic People\'s Republic of Korea',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '05d4bd9b6d1721e42353f860a9052bf507b01441',
        from: 'e3d34e05e8420f4ae8f6778c415a7d01192093d1',
        to: 'ca6bfc62d5d4ab267265d8d2a635ef0d8c45b37f',
        balance: '8630',
        message: 'web services',
        context: {
          genesisTx: 'orchestration',
          renaissanceTx: 'model',
          genesisTime: '2019-03-11T02:40:29.200Z',
          renaissanceTime: '2019-03-11T02:40:29.200Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'd31343c8c98542e9cb03c52c59e4af79b484e9ea',
      blockHeight: 11106,
      blockTime: '2019-03-11T02:40:29.200Z',
      totalTxs: 58884,
      txStatistics: {
        numAccountMigrateTxs: 88308,
        numCreateAssetTxs: 2505,
        numConsensusUpgradeTxs: 4028,
        numDeclareTxs: 31625,
        numDeclareFileTxs: 49295,
        numExchangeTxs: 13215,
        numStakeTxs: 12642,
        numSysUpgradeTxs: 81044,
        numTransferTxs: 13407,
        numUpdateAssetTxs: 71130,
        numConsumeAssetTxs: 65675,
        numPokeTxs: 95433
      },
      txIndex: 13837,
      lastBlockTime: '2019-03-11T02:40:29.200Z'
    },
    appState: {
      address: '4fe4433519333a51f0b33c2f879f1db02503d263',
      consensus: {
        maxBytes: 10581,
        maxGas: 31951,
        maxValidators: 58796,
        maxCandidates: 92077,
        pubKeyTypes: [
          'Camp',
          'Public-key'
        ],
        validators: [
          {
            address: 'f7091e0c4f40ddbdb80c1363c9d39b05e377450e',
            power: 16565
          },
          {
            address: '45c4144c971d605a46baf1f632e25799e6e67799',
            power: 31206
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
              dataHash: 'Handmade Metal Table',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 10,
              dataHash: 'primary',
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
          totalStakes: '32445',
          totalUnstakes: '51122',
          context: {
            genesisTx: 'Underpass',
            renaissanceTx: 'synthesize',
            genesisTime: '2019-03-11T02:40:29.200Z',
            renaissanceTime: '2019-03-11T02:40:29.200Z'
          }
        }
      },
      version: 'Bypass',
      dataVersion: 'Cambridgeshire',
      forgeAppHash: Uint8Array [
        185
      ],
      token: {
        name: 'Handcrafted',
        symbol: 'bandwidth',
        unit: 'Dynamic',
        description: 'Awesome',
        icon: Uint8Array [
          148
        ],
        decimal: 60094,
        initialSupply: 17034,
        totalSupply: 61314,
        inflationRate: 695
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
    code: 30
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: 'ee4d630e7bf5bc920322a6677fa946b2e2f604c8',
      nonce: 34244,
      signature: Uint8Array [
        45
      ],
      chainId: 'silver',
      signatures: [
        {
          signer: 'parsing',
          signature: Uint8Array [
            231
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'experiences',
          signature: Uint8Array [
            92
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
        balance: '13932',
        nonce: 77605,
        numTxs: 10966,
        address: '6a058040714295cc815d39e406e76e6f1f2b588c',
        pk: Uint8Array [
          154
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 1,
          role: 4
        },
        moniker: 'Games',
        context: {
          genesisTx: 'Guinea',
          renaissanceTx: 'directional',
          genesisTime: '2019-03-11T02:40:29.201Z',
          renaissanceTime: '2019-03-11T02:40:29.201Z'
        },
        issuer: 'Corporate',
        migratedTo: [
          'Washington',
          'alarm'
        ],
        migratedFrom: [
          'Decentralized',
          'Data'
        ],
        numAssets: 11459,
        stake: {
          totalStakes: '27527',
          totalUnstakes: '53963',
          totalReceivedStakes: '60966',
          recentStakes: {
            items: [
              Uint8Array [
                74
              ],
              Uint8Array [
                161
              ]
            ],
            typeUrl: 'neural',
            maxItems: 26257,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                151
              ],
              Uint8Array [
                227
              ]
            ],
            typeUrl: 'Factors',
            maxItems: 19445,
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
              165
            ]
          ],
          typeUrl: 'Cambridgeshire',
          maxItems: 71884,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '94719',
          leftover: '36960',
          amount: '27158'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '89194',
        nonce: 25536,
        numTxs: 4995,
        address: '6b3c69304be092bec3e44ccb3ee8713562a1847a',
        pk: Uint8Array [
          11
        ],
        type: {
          pk: 1,
          hash: 13,
          address: 0,
          role: 2
        },
        moniker: 'withdrawal',
        context: {
          genesisTx: 'National',
          renaissanceTx: 'Awesome Soft Chicken',
          genesisTime: '2019-03-11T02:40:29.201Z',
          renaissanceTime: '2019-03-11T02:40:29.201Z'
        },
        issuer: 'Senior',
        migratedTo: [
          'Incredible Granite Towels',
          'Kwacha'
        ],
        migratedFrom: [
          'Games',
          'revolutionize'
        ],
        numAssets: 51032,
        stake: {
          totalStakes: '92125',
          totalUnstakes: '10204',
          totalReceivedStakes: '55791',
          recentStakes: {
            items: [
              Uint8Array [
                92
              ],
              Uint8Array [
                28
              ]
            ],
            typeUrl: 'transmit',
            maxItems: 35050,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                116
              ],
              Uint8Array [
                59
              ]
            ],
            typeUrl: 'Refined Granite Bike',
            maxItems: 23907,
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
          typeUrl: 'feed',
          maxItems: 94260,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '79360',
          leftover: '25147',
          amount: '77966'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '282d1b01ab588dc93435a11ed9afdf7364949dd3',
        owner: 'reboot',
        moniker: 'compress',
        readonly: undefined,
        transferrable: undefined,
        ttl: 74874,
        consumedTime: '2019-03-11T02:40:29.202Z',
        issuer: 'Realigned',
        stake: {
          totalStakes: '33921',
          totalUnstakes: '27988',
          totalReceivedStakes: '43930',
          recentStakes: {
            items: [
              Uint8Array [
                40
              ],
              Uint8Array [
                52
              ]
            ],
            typeUrl: 'Berkshire',
            maxItems: 48075,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                20
              ],
              Uint8Array [
                244
              ]
            ],
            typeUrl: 'value-added',
            maxItems: 51490,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Small Steel Bike',
          renaissanceTx: 'Maldives',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '7364504e86725e57b166c66e093ce2c684cfafd3',
        owner: 'Indiana',
        moniker: 'models',
        readonly: undefined,
        transferrable: undefined,
        ttl: 82228,
        consumedTime: '2019-03-11T02:40:29.202Z',
        issuer: 'cross-media',
        stake: {
          totalStakes: '30565',
          totalUnstakes: '74735',
          totalReceivedStakes: '6072',
          recentStakes: {
            items: [
              Uint8Array [
                240
              ],
              Uint8Array [
                11
              ]
            ],
            typeUrl: 'generate',
            maxItems: 7969,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                152
              ],
              Uint8Array [
                160
              ]
            ],
            typeUrl: 'solid state',
            maxItems: 82086,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'secured line',
          renaissanceTx: 'integrated',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '4d555f2a96fcd71cab0af9d6cc05e9a2c7bf3d22',
        from: '1c6819d5c75fe8ff8e99f3c0c654234ce960d2a6',
        to: '48c5cc2e9f9312cbe579f07671acc3006e5e6ad7',
        balance: '72914',
        message: 'SQL',
        context: {
          genesisTx: 'HDD',
          renaissanceTx: 'Savings Account',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: 'ff7d1b1f3cfa96c624d549da4c44e90c1145ed4d',
        from: '235c385b5ab61f1f37a75278056959f81646944f',
        to: 'd4b184d449711ff73747adbb6ef87cf0b86d6d07',
        balance: '61361',
        message: 'innovative',
        context: {
          genesisTx: 'Berkshire',
          renaissanceTx: 'portals',
          genesisTime: '2019-03-11T02:40:29.202Z',
          renaissanceTime: '2019-03-11T02:40:29.202Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'ffe2523b08fa2000e7141adacba2601563267532',
      blockHeight: 3366,
      blockTime: '2019-03-11T02:40:29.202Z',
      totalTxs: 24095,
      txStatistics: {
        numAccountMigrateTxs: 20558,
        numCreateAssetTxs: 32993,
        numConsensusUpgradeTxs: 93729,
        numDeclareTxs: 24999,
        numDeclareFileTxs: 34843,
        numExchangeTxs: 20243,
        numStakeTxs: 11067,
        numSysUpgradeTxs: 14664,
        numTransferTxs: 54584,
        numUpdateAssetTxs: 98211,
        numConsumeAssetTxs: 4727,
        numPokeTxs: 87409
      },
      txIndex: 98498,
      lastBlockTime: '2019-03-11T02:40:29.202Z'
    },
    appState: {
      address: '76455344e546da0d3c485a2034fad62b0c3d76cb',
      consensus: {
        maxBytes: 58567,
        maxGas: 34993,
        maxValidators: 86933,
        maxCandidates: 60996,
        pubKeyTypes: [
          'client-server',
          'Pre-emptive'
        ],
        validators: [
          {
            address: 'd3262fad473d8c23846b8cb3dff61254f5e46714',
            power: 66306
          },
          {
            address: '8cd71abab22e5c783c9d15cb39eca5547dc65432',
            power: 23325
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
              dataHash: 'Money Market Account',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 12,
              dataHash: 'Web',
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
          totalStakes: '58851',
          totalUnstakes: '24951',
          context: {
            genesisTx: 'optical',
            renaissanceTx: 'Generic',
            genesisTime: '2019-03-11T02:40:29.202Z',
            renaissanceTime: '2019-03-11T02:40:29.202Z'
          }
        }
      },
      version: 'Saint Helena Pound',
      dataVersion: 'contingency',
      forgeAppHash: Uint8Array [
        133
      ],
      token: {
        name: 'Officer',
        symbol: 'Bedfordshire',
        unit: 'Industrial',
        description: 'reboot',
        icon: Uint8Array [
          158
        ],
        decimal: 42932,
        initialSupply: 47264,
        totalSupply: 8075,
        inflationRate: 11002
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
    code: 17
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    36
  ],
  type: {
    pk: 1,
    hash: 6,
    address: 1,
    role: 5
  },
  passphrase: 'deliverables',
  moniker: 'Zambian Kwacha'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  token: 'Frozen',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      253
    ],
    pk: Uint8Array [
      145
    ],
    address: 'f3cb2010bcdc3c9e6503ec1b30aab330331b4fc0'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'fdef4f03cd3ddc5efed8acb4fce817d1f5c51762'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 30
}
});
```

### search

```js
const result = await client.search({
  key: 'directional',
  value: 'Gorgeous Granite Chair'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  txs: [
    {
      tx: {
        from: '5c47f2110ffee508169f5bbc173179741650e33f',
        nonce: 90313,
        signature: Uint8Array [
          197
        ],
        chainId: 'Burundi Franc',
        signatures: [
          {
            signer: 'engage',
            signature: Uint8Array [
              75
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Bacon',
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
      height: 90869,
      index: 87170,
      hash: 'dccc941f57be2a8baebad05980ece15cfbf017a0',
      tags: [
        {
          key: Uint8Array [
            29
          ],
          value: Uint8Array [
            77
          ]
        },
        {
          key: Uint8Array [
            61
          ],
          value: Uint8Array [
            123
          ]
        }
      ],
      code: 30,
      time: '2019-03-11T02:40:29.203Z'
    },
    {
      tx: {
        from: '694ac952ffd0bae180fc3d834260d325e36167f6',
        nonce: 80281,
        signature: Uint8Array [
          210
        ],
        chainId: 'Concrete',
        signatures: [
          {
            signer: 'Electronics',
            signature: Uint8Array [
              60
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Ergonomic Soft Car',
            signature: Uint8Array [
              29
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
      height: 28654,
      index: 48928,
      hash: 'd39c0a815d38150165d738fc372e8d6ab851da13',
      tags: [
        {
          key: Uint8Array [
            186
          ],
          value: Uint8Array [
            11
          ]
        },
        {
          key: Uint8Array [
            176
          ],
          value: Uint8Array [
            205
          ]
        }
      ],
      code: 26,
      time: '2019-03-11T02:40:29.204Z'
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '8a91abbea63c94cc9431725a979aa32e2a70a082',
    nonce: 9193,
    signature: Uint8Array [
      141
    ],
    chainId: 'challenge',
    signatures: [
      {
        signer: 'foreground',
        signature: Uint8Array [
          227
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Intelligent',
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
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      49
    ],
    pk: Uint8Array [
      172
    ],
    address: '3b759110bc121ae92041aabd4e0672294d962f97'
  },
  token: 'North Dakota',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  hash: 'd6948c4e6581fe712e799a482e44dd9bc7327569'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    121
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 1
    },
    sk: Uint8Array [
      217
    ],
    pk: Uint8Array [
      95
    ],
    address: '6af644c95a110a50eaed46016673f2e6848f011a'
  },
  token: 'virtual'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  signature: Uint8Array [
    72
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    207
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 34,
  hash: '2f27306c00419a5906975b06be51906b3b6b8eed'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 4,
  filter: 'Synchronised'
});

// output
{
  topic: 'Consultant'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Investment Account'
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
