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
  * [getAssets](#getassets)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getHealthStatus](#gethealthstatus)
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
  from: 'eadd2b7e2a3d6caa766ca3fc522447be7277105f',
  nonce: 13054,
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      46
    ],
    pk: Uint8Array [
      41
    ],
    address: 'df212ba9e7bdeb39b6d757b7dcce3fa9f77dc63c'
  },
  token: 'backing up'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  tx: {
    from: 'b0d3c30d15e4e2c3a252fedaacdf9362967cc7e4',
    nonce: 640,
    chainId: 'index',
    pk: Uint8Array [
      201
    ],
    signature: Uint8Array [
      8
    ],
    signatures: [
      {
        signer: 'SQL',
        pk: Uint8Array [
          164
        ],
        signature: Uint8Array [
          50
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Light',
        pk: Uint8Array [
          116
        ],
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
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'bypass',
  type: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 0
  },
  moniker: '6th generation'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 5,
  token: 'Small',
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 0,
      role: 3
    },
    sk: Uint8Array [
      104
    ],
    pk: Uint8Array [
      232
    ],
    address: '60d5a601dad73d4a16577f4b31273d63de30a881'
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
      hash: 14,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      165
    ],
    pk: Uint8Array [
      159
    ],
    address: '086a805cf7ce56b2932aee18d0bd31bf72abdb19'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'a84cb21c384029a5b69b9ebaab3750d9b367ffae',
  keys: [
    'radical',
    'interface'
  ],
  height: 10862
});

// output
{
  code: 38,
  state: {
    balance: '27874',
    nonce: 68925,
    numTxs: 73837,
    address: 'dcf29adf302f38dd8c01f9e69769eb9df2acbe9c',
    pk: Uint8Array [
      12
    ],
    type: {
      pk: 0,
      hash: 0,
      address: 0,
      role: 6
    },
    moniker: 'CFP Franc',
    context: {
      genesisTx: 'clear-thinking',
      renaissanceTx: 'executive',
      genesisTime: '2019-04-04T08:20:57.998Z',
      renaissanceTime: '2019-04-04T08:20:57.998Z'
    },
    issuer: 'Supervisor',
    migratedTo: [
      'collaboration',
      'synergies'
    ],
    migratedFrom: [
      'SQL',
      'invoice'
    ],
    numAssets: 54658,
    stake: {
      totalStakes: '56276',
      totalUnstakes: '5549',
      totalReceivedStakes: '5810',
      recentStakes: {
        items: [
          Uint8Array [
            246
          ],
          Uint8Array [
            165
          ]
        ],
        typeUrl: 'Mandatory',
        maxItems: 37324,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            252
          ],
          Uint8Array [
            231
          ]
        ],
        typeUrl: 'Open-architected',
        maxItems: 70253,
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
          61
        ]
      ],
      typeUrl: 'Chair',
      maxItems: 59582,
      circular: undefined,
      fifo: undefined
    },
    poke: {
      dailyLimit: '16189',
      leftover: '43695',
      amount: '67524'
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
  senderAddress: 'transmitter',
  itx: {
    moniker: 'programming',
    data: {
      type: 'fg:x:random_data',
      value: 'ABCD 1234'
    },
    readonly: undefined,
    transferrable: undefined,
    ttl: 64033,
    parent: 'deposit'
  },
  walletType: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 4
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  assetAddress: 'European Monetary Unit (E.M.U.-6)'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'bcbc4385b6292d2fc754aa605d49824216808792',
  keys: [
    'benchmark',
    'THX'
  ],
  height: 71033
});

// output
{
  code: 4,
  state: {
    address: '0acbd09a9badb0b1aba73846395a95d00f5c78ab',
    owner: 'Borders',
    moniker: 'Soft',
    readonly: undefined,
    transferrable: undefined,
    ttl: 20542,
    consumedTime: '2019-04-04T08:20:57.999Z',
    issuer: 'deposit',
    stake: {
      totalStakes: '94739',
      totalUnstakes: '52143',
      totalReceivedStakes: '52347',
      recentStakes: {
        items: [
          Uint8Array [
            133
          ],
          Uint8Array [
            79
          ]
        ],
        typeUrl: 'Cotton',
        maxItems: 82051,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            190
          ],
          Uint8Array [
            39
          ]
        ],
        typeUrl: 'models',
        maxItems: 73490,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Checking Account',
      renaissanceTx: 'Turkmenistan',
      genesisTime: '2019-04-04T08:20:57.999Z',
      renaissanceTime: '2019-04-04T08:20:57.999Z'
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
    cursor: 'Home',
    size: 3372,
    order: [
      {
        field: 'Self-enabling',
        type: 'West Virginia'
      },
      {
        field: 'array',
        type: 'fuchsia'
      }
    ]
  },
  ownerAddress: 'Steel'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  page: {
    cursor: 'local area network',
    next: undefined,
    total: 86231
  },
  assets: [
    {
      address: 'e838d8d260d68ca2532384d2272de44a27c1ffae',
      owner: 'Metal',
      genesisTime: 'Bulgaria',
      renaissanceTime: 'mobile',
      moniker: 'reinvent',
      readonly: undefined
    },
    {
      address: '25eef1ca50ef2d6b0e1a2a3d1c5ef698e6581f5b',
      owner: 'Berkshire',
      genesisTime: 'Ergonomic',
      renaissanceTime: 'auxiliary',
      moniker: 'Usability',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 50225
});

// output
{
  code: 500,
  block: {
    height: 51334,
    numTxs: 99659,
    time: '2019-04-04T08:20:58.000Z',
    appHash: '080e4ade566970767d03c428066bddb5f264d225',
    proposer: '48ca665fcd357948db2de5798937122704b8127f',
    txs: [
      {
        tx: {
          from: '28ab70e1c39750b5f79079731a4f41b88fe43822',
          nonce: 5554,
          chainId: 'Wooden',
          pk: Uint8Array [
            147
          ],
          signature: Uint8Array [
            70
          ],
          signatures: [
            {
              signer: 'Liaison',
              pk: Uint8Array [
                62
              ],
              signature: Uint8Array [
                21
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Investor',
              pk: Uint8Array [
                236
              ],
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
        height: 19875,
        index: 28978,
        hash: 'c8cff4841b5135f915d2ef27cbeb4b29078d04cb',
        tags: [
          {
            key: Uint8Array [
              220
            ],
            value: Uint8Array [
              204
            ]
          },
          {
            key: Uint8Array [
              30
            ],
            value: Uint8Array [
              37
            ]
          }
        ],
        code: 500,
        time: '2019-04-04T08:20:58.001Z',
        createAsset: {
          asset: 'Incredible'
        },
        accountMigrate: {
          address: '896876c14c3b6eac33c3c1d2a07b09c3691d27a3'
        }
      },
      {
        tx: {
          from: '766f9f57d18ae9dc213be00cb99c2e0c718ac586',
          nonce: 23652,
          chainId: 'Peso Uruguayo Uruguay Peso en Unidades Indexadas',
          pk: Uint8Array [
            193
          ],
          signature: Uint8Array [
            69
          ],
          signatures: [
            {
              signer: 'deposit',
              pk: Uint8Array [
                122
              ],
              signature: Uint8Array [
                207
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Small Concrete Cheese',
              pk: Uint8Array [
                65
              ],
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
        height: 16310,
        index: 98440,
        hash: 'f28c5c39ec459df437fa5d5e6dde0b97d382de24',
        tags: [
          {
            key: Uint8Array [
              85
            ],
            value: Uint8Array [
              223
            ]
          },
          {
            key: Uint8Array [
              54
            ],
            value: Uint8Array [
              216
            ]
          }
        ],
        code: 42,
        time: '2019-04-04T08:20:58.001Z',
        createAsset: {
          asset: 'Garden'
        },
        accountMigrate: {
          address: 'e8da483b4b6d7e9f3a0d52e7e7bddd0674786735'
        }
      }
    ],
    totalTxs: 86324,
    invalidTxs: [
      {
        tx: {
          from: 'dbe4ec22614e010b74aa080d6282818315f513cd',
          nonce: 18524,
          chainId: 'Checking Account',
          pk: Uint8Array [
            39
          ],
          signature: Uint8Array [
            142
          ],
          signatures: [
            {
              signer: 'compress',
              pk: Uint8Array [
                87
              ],
              signature: Uint8Array [
                68
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'e-enable',
              pk: Uint8Array [
                64
              ],
              signature: Uint8Array [
                167
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
        height: 99476,
        index: 88203,
        hash: 'c7048bb50c96e2adda30de483e264cb1326eab68',
        tags: [
          {
            key: Uint8Array [
              96
            ],
            value: Uint8Array [
              10
            ]
          },
          {
            key: Uint8Array [
              161
            ],
            value: Uint8Array [
              176
            ]
          }
        ],
        code: 34,
        time: '2019-04-04T08:20:58.001Z',
        createAsset: {
          asset: 'Ergonomic'
        },
        accountMigrate: {
          address: '347890d45344ce3ddd87fba2c92804d915ddbb15'
        }
      },
      {
        tx: {
          from: '4d50acfa7618b13dcb5139fe2e488bbc2824b001',
          nonce: 28395,
          chainId: 'Buckinghamshire',
          pk: Uint8Array [
            94
          ],
          signature: Uint8Array [
            2
          ],
          signatures: [
            {
              signer: 'Soft',
              pk: Uint8Array [
                198
              ],
              signature: Uint8Array [
                172
              ],
              data: {
                type: 'fg:x:random_data',
                value: 'ABCD 1234'
              }
            },
            {
              signer: 'Tasty',
              pk: Uint8Array [
                92
              ],
              signature: Uint8Array [
                122
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
        height: 249,
        index: 78042,
        hash: '4204abc69d7d0e0883741f080986d637a9bd39e6',
        tags: [
          {
            key: Uint8Array [
              104
            ],
            value: Uint8Array [
              121
            ]
          },
          {
            key: Uint8Array [
              248
            ],
            value: Uint8Array [
              29
            ]
          }
        ],
        code: 27,
        time: '2019-04-04T08:20:58.002Z',
        createAsset: {
          asset: 'Tala'
        },
        accountMigrate: {
          address: '7f5b6f4277a414eaa88b0db1e5d77ab74d417124'
        }
      }
    ],
    txsHashes: [
      'Minnesota',
      'auxiliary'
    ],
    invalidTxsHashes: [
      'navigate',
      'Chair'
    ],
    consensusHash: Uint8Array [
      230
    ],
    dataHash: Uint8Array [
      162
    ],
    evidenceHash: Uint8Array [
      183
    ],
    lastCommitHash: Uint8Array [
      169
    ],
    lastResultsHash: Uint8Array [
      203
    ],
    nextValidatorsHash: Uint8Array [
      147
    ],
    validatorsHash: Uint8Array [
      251
    ],
    version: {
      Block: 68567,
      App: 55776
    },
    lastBlockId: {
      hash: 'bb606a7ba6cc425b124227ec344314d94c7275f5',
      partsHeader: {
        total: undefined,
        hash: '708485596d2173f56b5c3a1f213e329aa9716075'
      }
    }
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'withdrawal',
    size: 60382,
    order: [
      {
        field: 'algorithm',
        type: 'Cheese'
      },
      {
        field: 'end-to-end',
        type: 'needs-based'
      }
    ]
  },
  minHeight: 19456,
  maxHeight: 51266,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8,
  page: {
    cursor: 'Causeway',
    next: undefined,
    total: 74890
  },
  blocks: [
    {
      height: 11363,
      numTxs: 96407,
      time: '2019-04-04T08:20:58.003Z',
      appHash: '65c2229b710bd5e858d7731e6d7414f34122cfc5',
      proposer: '540c9f188e205c5a24ee11f9ca1e1d3aae0a6921',
      txs: [
        {
          tx: {
            from: 'ede326d786b1d9608269ef79d70260434e084eec',
            nonce: 13471,
            chainId: 'Sao Tome and Principe',
            pk: Uint8Array [
              54
            ],
            signature: Uint8Array [
              83
            ],
            signatures: [
              {
                signer: 'Shirt',
                pk: Uint8Array [
                  35
                ],
                signature: Uint8Array [
                  183
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Brunei Darussalam',
                pk: Uint8Array [
                  114
                ],
                signature: Uint8Array [
                  154
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
          height: 4390,
          index: 15734,
          hash: '1487dccaeb249653e5dd406398ff1618b2a44ff6',
          tags: [
            {
              key: Uint8Array [
                188
              ],
              value: Uint8Array [
                95
              ]
            },
            {
              key: Uint8Array [
                176
              ],
              value: Uint8Array [
                181
              ]
            }
          ],
          code: 403,
          time: '2019-04-04T08:20:58.003Z',
          createAsset: {
            asset: 'silver'
          },
          accountMigrate: {
            address: '6b936dc0967899f834d7f8bc25e3538d8afa9b6d'
          }
        },
        {
          tx: {
            from: '44abf75e811b6e9fb970e400cb717d6a405b78e9',
            nonce: 15190,
            chainId: 'global',
            pk: Uint8Array [
              121
            ],
            signature: Uint8Array [
              33
            ],
            signatures: [
              {
                signer: 'Causeway',
                pk: Uint8Array [
                  15
                ],
                signature: Uint8Array [
                  182
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'core',
                pk: Uint8Array [
                  166
                ],
                signature: Uint8Array [
                  9
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
          height: 42465,
          index: 99747,
          hash: '3ed6a8fc051735aa83385d06ccd8a6ff13c9fb6d',
          tags: [
            {
              key: Uint8Array [
                177
              ],
              value: Uint8Array [
                92
              ]
            },
            {
              key: Uint8Array [
                222
              ],
              value: Uint8Array [
                236
              ]
            }
          ],
          code: 40,
          time: '2019-04-04T08:20:58.004Z',
          createAsset: {
            asset: 'copying'
          },
          accountMigrate: {
            address: 'f0e4ec700d7106d370b0d08f63c1af6353415855'
          }
        }
      ],
      totalTxs: 37727,
      invalidTxs: [
        {
          tx: {
            from: 'cfb4de5346c9b2c277a27d3a4deb8e25905705b5',
            nonce: 63095,
            chainId: 'Money Market Account',
            pk: Uint8Array [
              193
            ],
            signature: Uint8Array [
              47
            ],
            signatures: [
              {
                signer: 'calculate',
                pk: Uint8Array [
                  29
                ],
                signature: Uint8Array [
                  157
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'deploy',
                pk: Uint8Array [
                  57
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
          height: 80250,
          index: 79902,
          hash: '05455e77f33b87ebaa9ec1355102c9133d6bf77f',
          tags: [
            {
              key: Uint8Array [
                226
              ],
              value: Uint8Array [
                78
              ]
            },
            {
              key: Uint8Array [
                236
              ],
              value: Uint8Array [
                225
              ]
            }
          ],
          code: 17,
          time: '2019-04-04T08:20:58.004Z',
          createAsset: {
            asset: 'France'
          },
          accountMigrate: {
            address: '82397504e2703f88386384422bf69e95811e230a'
          }
        },
        {
          tx: {
            from: '9f71332dc0e77ac366a336b7738ed1c374838718',
            nonce: 83762,
            chainId: 'Rustic Plastic Car',
            pk: Uint8Array [
              142
            ],
            signature: Uint8Array [
              159
            ],
            signatures: [
              {
                signer: 'De-engineered',
                pk: Uint8Array [
                  89
                ],
                signature: Uint8Array [
                  77
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'deposit',
                pk: Uint8Array [
                  26
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
          height: 67831,
          index: 67416,
          hash: 'c532b5f74e267d03ac704c3a8f954f667162395f',
          tags: [
            {
              key: Uint8Array [
                226
              ],
              value: Uint8Array [
                208
              ]
            },
            {
              key: Uint8Array [
                161
              ],
              value: Uint8Array [
                238
              ]
            }
          ],
          code: 41,
          time: '2019-04-04T08:20:58.005Z',
          createAsset: {
            asset: 'Bedfordshire'
          },
          accountMigrate: {
            address: '3100e2bb7de208c17301767bc30c53853866ec6e'
          }
        }
      ],
      txsHashes: [
        'customized',
        'forecast'
      ],
      invalidTxsHashes: [
        'Versatile',
        'Rustic'
      ],
      consensusHash: Uint8Array [
        113
      ],
      dataHash: Uint8Array [
        0
      ],
      evidenceHash: Uint8Array [
        150
      ],
      lastCommitHash: Uint8Array [
        11
      ],
      lastResultsHash: Uint8Array [
        142
      ],
      nextValidatorsHash: Uint8Array [
        245
      ],
      validatorsHash: Uint8Array [
        239
      ],
      version: {
        Block: 57587,
        App: 98582
      },
      lastBlockId: {
        hash: '74ad3b2ed1e614bad9ff78f4a1911ee03625ea81',
        partsHeader: {
          total: undefined,
          hash: '53ac79b63e0c68aec67f758b24b1fe5379950698'
        }
      }
    },
    {
      height: 24033,
      numTxs: 43182,
      time: '2019-04-04T08:20:58.005Z',
      appHash: '9c4795970f4d983d6de3df6a82a80be6a287b5c2',
      proposer: '1ae49db257ab9f017595f9c01a967fbc208a8368',
      txs: [
        {
          tx: {
            from: 'cd48980512ac1b29e366dc258cb4150197413c19',
            nonce: 24614,
            chainId: '3rd generation',
            pk: Uint8Array [
              83
            ],
            signature: Uint8Array [
              232
            ],
            signatures: [
              {
                signer: 'interface',
                pk: Uint8Array [
                  193
                ],
                signature: Uint8Array [
                  166
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'National',
                pk: Uint8Array [
                  153
                ],
                signature: Uint8Array [
                  102
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
          height: 35980,
          index: 86047,
          hash: 'a506e7937a4b488c55a5e16dd09d58f5ad4cad38',
          tags: [
            {
              key: Uint8Array [
                177
              ],
              value: Uint8Array [
                74
              ]
            },
            {
              key: Uint8Array [
                165
              ],
              value: Uint8Array [
                15
              ]
            }
          ],
          code: 8,
          time: '2019-04-04T08:20:58.005Z',
          createAsset: {
            asset: 'synthesize'
          },
          accountMigrate: {
            address: '439f65602832a7c3c43139091f2a3e49aeb83389'
          }
        },
        {
          tx: {
            from: 'ddb323c4d8fb34365bf4e7d8133000a450ada319',
            nonce: 60061,
            chainId: 'functionalities',
            pk: Uint8Array [
              233
            ],
            signature: Uint8Array [
              117
            ],
            signatures: [
              {
                signer: 'asynchronous',
                pk: Uint8Array [
                  6
                ],
                signature: Uint8Array [
                  238
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Intranet',
                pk: Uint8Array [
                  101
                ],
                signature: Uint8Array [
                  195
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
          height: 90485,
          index: 93581,
          hash: 'ca4782c65a69743cc4a8e72f8bef06546f06589c',
          tags: [
            {
              key: Uint8Array [
                12
              ],
              value: Uint8Array [
                233
              ]
            },
            {
              key: Uint8Array [
                111
              ],
              value: Uint8Array [
                209
              ]
            }
          ],
          code: 40,
          time: '2019-04-04T08:20:58.005Z',
          createAsset: {
            asset: 'cyan'
          },
          accountMigrate: {
            address: '90e1621053151c64b66afd0040147aa909775b11'
          }
        }
      ],
      totalTxs: 23998,
      invalidTxs: [
        {
          tx: {
            from: 'd240dc85ee273735b0e4a1758f2d4f7c19fd9158',
            nonce: 98620,
            chainId: 'cross-platform',
            pk: Uint8Array [
              137
            ],
            signature: Uint8Array [
              134
            ],
            signatures: [
              {
                signer: 'next-generation',
                pk: Uint8Array [
                  241
                ],
                signature: Uint8Array [
                  10
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'schemas',
                pk: Uint8Array [
                  172
                ],
                signature: Uint8Array [
                  163
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
          height: 90905,
          index: 59587,
          hash: 'f9e76133b3234eaa8b5bf1f29475ffce982a6128',
          tags: [
            {
              key: Uint8Array [
                104
              ],
              value: Uint8Array [
                133
              ]
            },
            {
              key: Uint8Array [
                174
              ],
              value: Uint8Array [
                234
              ]
            }
          ],
          code: 6,
          time: '2019-04-04T08:20:58.006Z',
          createAsset: {
            asset: 'Avon'
          },
          accountMigrate: {
            address: 'aa50d5c376538addd3fd8fe52fe1a67ea5bc10cc'
          }
        },
        {
          tx: {
            from: '150b3ad22a82f926bf25a314eccab8b7b49e7ae5',
            nonce: 27932,
            chainId: 'PCI',
            pk: Uint8Array [
              35
            ],
            signature: Uint8Array [
              197
            ],
            signatures: [
              {
                signer: 'Tasty Soft Gloves',
                pk: Uint8Array [
                  231
                ],
                signature: Uint8Array [
                  148
                ],
                data: {
                  type: 'fg:x:random_data',
                  value: 'ABCD 1234'
                }
              },
              {
                signer: 'Games',
                pk: Uint8Array [
                  221
                ],
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
          height: 80142,
          index: 50264,
          hash: 'facc7ea7c456700a7017058e7175692847275fbd',
          tags: [
            {
              key: Uint8Array [
                24
              ],
              value: Uint8Array [
                78
              ]
            },
            {
              key: Uint8Array [
                17
              ],
              value: Uint8Array [
                87
              ]
            }
          ],
          code: 7,
          time: '2019-04-04T08:20:58.006Z',
          createAsset: {
            asset: 'Legacy'
          },
          accountMigrate: {
            address: 'b0cd811fab60972323e290e527391ce3b12c110c'
          }
        }
      ],
      txsHashes: [
        'synthesize',
        'Metal'
      ],
      invalidTxsHashes: [
        'mobile',
        'Cheese'
      ],
      consensusHash: Uint8Array [
        224
      ],
      dataHash: Uint8Array [
        152
      ],
      evidenceHash: Uint8Array [
        2
      ],
      lastCommitHash: Uint8Array [
        121
      ],
      lastResultsHash: Uint8Array [
        251
      ],
      nextValidatorsHash: Uint8Array [
        126
      ],
      validatorsHash: Uint8Array [
        59
      ],
      version: {
        Block: 84573,
        App: 18548
      },
      lastBlockId: {
        hash: '97934afb895ca7c394a60ce0c6b94d7ed9df83d3',
        partsHeader: {
          total: undefined,
          hash: '6d9bb0ed0d9e441ba987720ca2d133df378d3d6c'
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
  code: 16,
  info: {
    id: 'ivory',
    network: 'Functionality',
    moniker: 'User-centric',
    consensusVersion: 'Small Cotton Chicken',
    synced: undefined,
    appHash: '2dd1695dc477eb7ee9939cb80f3c7982d8041ef3',
    blockHash: Uint8Array [
      171
    ],
    blockHeight: 69053,
    blockTime: '2019-04-04T08:20:58.008Z',
    address: '085e61356ba1357892fa098cc403683fbd36abbd',
    votingPower: 77536,
    totalTxs: 25934,
    version: 'deposit',
    dataVersion: 'neural',
    forgeAppsVersion: {
      networks: 'tertiary'
    },
    supportedTxs: [
      'override',
      'South Carolina'
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
  code: 1,
  config: 'cyan'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'invoice',
    'Ergonomic'
  ],
  height: 4592
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 20,
  state: {
    address: '63a45f207c9a73fcd264be4ddd0aa4e72aaeb3b1',
    consensus: {
      maxBytes: 63575,
      maxGas: 79491,
      maxValidators: 28356,
      maxCandidates: 3801,
      pubKeyTypes: [
        'Mississippi',
        'purple'
      ],
      validators: [
        {
          address: '624782dcb67be955c2d1307da6d5d5ccc53cbb09',
          power: 10929
        },
        {
          address: '77248ac96939d71c882e4a811eb2d3e48fde171c',
          power: 52124
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      '55234': {
        item: [
          {
            type: 3,
            dataHash: 'Rubber',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 14,
            dataHash: 'blue',
            actions: [
              undefined,
              undefined
            ]
          }
        ]
      }
    },
    stakeSummary: {
      '25736': {
        totalStakes: '13432',
        totalUnstakes: '69842',
        context: {
          genesisTx: 'compress',
          renaissanceTx: 'Sleek Plastic Cheese',
          genesisTime: '2019-04-04T08:20:58.008Z',
          renaissanceTime: '2019-04-04T08:20:58.008Z'
        }
      }
    },
    version: 'backing up',
    dataVersion: 'benchmark',
    forgeAppHash: Uint8Array [
      245
    ],
    token: {
      name: 'plum',
      symbol: 'Connecticut',
      unit: 'granular',
      description: 'Reverse-engineered',
      icon: Uint8Array [
        158
      ],
      decimal: 27982,
      initialSupply: 54125,
      totalSupply: 84353,
      inflationRate: 31959
    },
    txConfig: {
      maxAssetSize: 31321,
      maxListSize: 6800,
      maxMultisig: 1250,
      minimumStake: 15860
    },
    stakeConfig: {
      timeoutGeneral: 71347,
      timeoutStakeForNode: 61969
    },
    pokeConfig: {
      address: 'c421ce24f62fcf27b5c9df76bff14cfd5f015b59',
      dailyLimit: 28770,
      balance: 37504,
      amount: 24141
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
    startDate: 'object-oriented',
    endDate: 'primary'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  forgeStatistics: {
    numBlocks: [
      85323,
      58683
    ],
    numTxs: [
      69690,
      33480
    ],
    numStakes: [
      '69322',
      '88003'
    ],
    numValidators: [
      44612,
      4156
    ],
    numAccountMigrateTxs: [
      75271,
      14217
    ],
    numCreateAssetTxs: [
      63046,
      43818
    ],
    numConsensusUpgradeTxs: [
      99340,
      12133
    ],
    numDeclareTxs: [
      81498,
      83655
    ],
    numDeclareFileTxs: [
      83101,
      19945
    ],
    numExchangeTxs: [
      86529,
      58698
    ],
    numStakeTxs: [
      44983,
      43343
    ],
    numSysUpgradeTxs: [
      65425,
      9574
    ],
    numTransferTxs: [
      44378,
      69026
    ],
    numUpdateAssetTxs: [
      13081,
      42978
    ],
    numConsumeAssetTxs: [
      48510,
      41010
    ],
    numPokeTxs: [
      58079,
      39570
    ],
    tps: [
      31640,
      37645
    ],
    maxTps: 50989,
    avgTps: 51812,
    avgBlockTime: 64371.81
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
  code: 10,
  healthStatus: {
    consensus: {
      health: undefined,
      synced: undefined,
      blockHeight: 53925
    },
    network: {
      health: undefined,
      numPeers: 42419
    },
    storage: {
      health: undefined,
      indexerServer: 'Washington',
      stateDb: 'Research',
      diskSpace: {
        forgeUsage: 'Ergonomic',
        total: 'interactive'
      }
    },
    forge: {
      health: undefined,
      abiServer: 'Cotton',
      forgeWeb: 'bricks-and-clicks',
      abciServer: {
        abciConsensus: 'North Carolina',
        abciInfo: 'Handmade Metal Soap'
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
  code: 7,
  netInfo: {
    listening: undefined,
    listeners: [
      'Turks and Caicos Islands',
      'Regional'
    ],
    nPeers: 82384,
    peers: [
      {
        id: 'Directives',
        network: 'ubiquitous',
        consensusVersion: 'withdrawal',
        moniker: 'plum',
        ip: 'Robust',
        geoInfo: {
          city: 'artificial intelligence',
          country: 'Intelligent Plastic Computer',
          latitude: 75817.09,
          longitude: 41746.41
        }
      },
      {
        id: 'yellow',
        network: 'embrace',
        consensusVersion: 'SCSI',
        moniker: 'Texas',
        ip: 'maximized',
        geoInfo: {
          city: 'green',
          country: 'channels',
          latitude: 73038.14,
          longitude: 91205.8
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
  code: 33,
  info: {
    id: 'SDD',
    network: 'Turks and Caicos Islands',
    moniker: 'Dale',
    consensusVersion: 'Bedfordshire',
    synced: undefined,
    appHash: 'd00f5ff8775b04bd1110330915d4768f0bd4a0fe',
    blockHash: Uint8Array [
      254
    ],
    blockHeight: 80870,
    blockTime: '2019-04-04T08:20:58.010Z',
    address: '0fd88dac446d4a148f7c063d5ab20147ee4d072d',
    votingPower: 21969,
    totalTxs: 17868,
    version: 'override',
    dataVersion: 'Ohio',
    forgeAppsVersion: {
      throughput: 'haptic'
    },
    supportedTxs: [
      'navigate',
      'SMTP'
    ],
    ip: 'override',
    geoInfo: {
      city: 'Mississippi',
      country: 'syndicate',
      latitude: 9867.91,
      longitude: 69731.75
    },
    p2pAddress: 'Tuvalu'
  }
}
});
```

### getStakeState

```js
const stream = client.getStakeState({
  address: '0d602f2174436007b953386cdbe49864c2bbe253',
  keys: [
    'New York',
    'project'
  ],
  height: 37291
});

// output
{
  code: 20,
  state: {
    address: '9ae8f2621638d0a634225d1096073928d14825c3',
    from: '36d9b0c9a13fd7144afd9ede7400705e53148c48',
    to: 'f9fcd6b00ce53bd0bbd3554aea092194099dcfc0',
    balance: '18033',
    message: 'Paradigm',
    context: {
      genesisTx: 'Ergonomic Rubber Towels',
      renaissanceTx: 'JSON',
      genesisTime: '2019-04-04T08:20:58.011Z',
      renaissanceTime: '2019-04-04T08:20:58.011Z'
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
    cursor: 'Indiana',
    size: 87743,
    order: [
      {
        field: 'Developer',
        type: 'pricing structure'
      },
      {
        field: 'Implemented',
        type: 'best-of-breed'
      }
    ]
  },
  addressFilter: {
    sender: '3rd generation',
    receiver: 'model',
    direction: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 32,
  page: {
    cursor: '5th generation',
    next: undefined,
    total: 52590
  },
  stakes: [
    {
      address: '48f78cd1d7eb4398fc84f7b08c9cf03d6b6baa00',
      balance: '46855',
      sender: 'Chips',
      receiver: 'overriding',
      genesisTime: 'Chips',
      renaissanceTime: 'Soft',
      message: 'help-desk',
      type: 36360
    },
    {
      address: '31fab95b78dd8c64356b5bf930d8f794f08fb48d',
      balance: '91589',
      sender: 'pink',
      receiver: 'Haiti',
      genesisTime: 'holistic',
      renaissanceTime: 'Fish',
      message: 'Open-source',
      type: 8102
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Soft',
    size: 49019,
    order: [
      {
        field: 'quantify',
        type: 'Berkshire'
      },
      {
        field: 'circuit',
        type: 'Dynamic'
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
    cursor: 'Refined Granite Towels',
    next: undefined,
    total: 93179
  },
  accounts: [
    {
      address: '6bdb90e31e8df11694032bd892ff52f2af5829cd',
      balance: '13446',
      numAssets: 96694,
      numTxs: 10678,
      nonce: 33824,
      genesisTime: 'program',
      renaissanceTime: 'bypass',
      moniker: 'Optional',
      migratedFrom: 'Automotive',
      migratedTo: 'networks',
      totalReceivedStakes: '72426',
      totalStakes: '43390',
      totalUnstakes: '82392',
      recentNumTxs: [
        6244,
        5933
      ]
    },
    {
      address: '7066e6600e5de6f8587c4186b11f74f5e5f5ac2a',
      balance: '78007',
      numAssets: 13079,
      numTxs: 28699,
      nonce: 43598,
      genesisTime: 'leading edge',
      renaissanceTime: 'Public-key',
      moniker: 'Mission',
      migratedFrom: 'Iraqi Dinar',
      migratedTo: 'Berkshire',
      totalReceivedStakes: '26495',
      totalStakes: '63358',
      totalUnstakes: '73480',
      recentNumTxs: [
        8160,
        46537
      ]
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '7f694b380bf4c6672b3b8b8a63133788f9f16e08'
});

// output
{
  code: 41,
  info: {
    tx: {
      from: '583c7baaf1fe9f09980b91318f192c96efbba3d6',
      nonce: 68892,
      chainId: 'e-enable',
      pk: Uint8Array [
        74
      ],
      signature: Uint8Array [
        84
      ],
      signatures: [
        {
          signer: 'online',
          pk: Uint8Array [
            211
          ],
          signature: Uint8Array [
            24
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'sticky',
          pk: Uint8Array [
            254
          ],
          signature: Uint8Array [
            142
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
    height: 26969,
    index: 39339,
    hash: '0cf283c46c9b2bfc27d16aedbaec1cf4e669ce4f',
    tags: [
      {
        key: Uint8Array [
          74
        ],
        value: Uint8Array [
          165
        ]
      },
      {
        key: Uint8Array [
          214
        ],
        value: Uint8Array [
          147
        ]
      }
    ],
    code: 34,
    time: '2019-04-04T08:20:58.012Z',
    createAsset: {
      asset: 'internet solution'
    },
    accountMigrate: {
      address: 'e805bf52c7814f7a9ecca36a01ba165d81926bc0'
    }
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 21916
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  unconfirmedTxs: {
    nTxs: 81185,
    txs: [
      {
        from: 'cffb951770c462fb04a83a5941e724bd1a58b0f9',
        nonce: 54532,
        chainId: 'Palestinian Territory',
        pk: Uint8Array [
          178
        ],
        signature: Uint8Array [
          59
        ],
        signatures: [
          {
            signer: 'Kids',
            pk: Uint8Array [
              222
            ],
            signature: Uint8Array [
              45
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'installation',
            pk: Uint8Array [
              192
            ],
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
      {
        from: '6b374f00df006820e9b5cdfad3231c6ddb271ff5',
        nonce: 45942,
        chainId: 'Investor',
        pk: Uint8Array [
          168
        ],
        signature: Uint8Array [
          186
        ],
        signatures: [
          {
            signer: 'parse',
            pk: Uint8Array [
              168
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
            signer: 'Books',
            pk: Uint8Array [
              165
            ],
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
  code: 41,
  validatorsInfo: {
    blockHeight: 73556,
    validators: [
      {
        address: 'f938b01bdf82bfc2baaf428835d2a02fcd99e0d0',
        pubKey: {
          type: 'dot-com',
          data: Uint8Array [
            17
          ]
        },
        votingPower: 18006,
        proposerPriority: 'Beauty',
        name: 'pixel',
        geoInfo: {
          city: 'Fantastic Fresh Cheese',
          country: 'neural-net',
          latitude: 91624.35,
          longitude: 18455.46
        }
      },
      {
        address: 'bfd6ec049de4d8bc10844894998907337cee4923',
        pubKey: {
          type: 'intangible',
          data: Uint8Array [
            6
          ]
        },
        votingPower: 96386,
        proposerPriority: 'SSL',
        name: 'Cambridgeshire',
        geoInfo: {
          city: 'invoice',
          country: 'visualize',
          latitude: 64686.57,
          longitude: 10197.49
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
    cursor: 'Consultant',
    size: 55711,
    order: [
      {
        field: 'Realigned',
        type: 'Intelligent Soft Shirt'
      },
      {
        field: 'Practical Soft Bike',
        type: 'Lithuanian Litas'
      }
    ]
  },
  address: '88d96a658210e6c8980325e063b8d931de076720'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'Norfolk Island',
    next: undefined,
    total: 70722
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'Architect'
      }
    },
    {
      consumeAsset: {
        asset: 'Product'
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
    cursor: 'regional',
    size: 28519,
    order: [
      {
        field: 'Rhode Island',
        type: 'black'
      },
      {
        field: 'Incredible',
        type: 'compress'
      }
    ]
  },
  ownerAddress: 'HTTP'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 7,
  page: {
    cursor: 'navigate',
    next: undefined,
    total: 18200
  },
  account: {
    address: 'dd4d4fd050be16de920976f6ff5bd025dc22187a',
    balance: '22131',
    numAssets: 7232,
    numTxs: 9125,
    nonce: 76333,
    genesisTime: 'Cotton',
    renaissanceTime: 'Refined Soft Pants',
    moniker: 'Agent',
    migratedFrom: 'info-mediaries',
    migratedTo: 'Personal Loan Account',
    totalReceivedStakes: '83918',
    totalStakes: '43526',
    totalUnstakes: '40242',
    recentNumTxs: [
      34537,
      17604
    ]
  },
  assets: [
    {
      address: '41611ffa18bc96744315efd1b13d40aa516614d5',
      owner: 'Wooden',
      genesisTime: 'Georgia',
      renaissanceTime: 'Bike',
      moniker: 'web-readiness',
      readonly: undefined
    },
    {
      address: 'efed405283adda1fb6606045f9d010d685d98ad0',
      owner: 'Shore',
      genesisTime: 'Forks',
      renaissanceTime: 'lavender',
      moniker: 'copy',
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
    cursor: 'Sleek Metal Cheese',
    size: 51269,
    order: [
      {
        field: 'Quality',
        type: 'bifurcated'
      },
      {
        field: 'bypass',
        type: 'empower'
      }
    ]
  },
  proposer: '026589a6e9b9a45dd232518d78d734ec08df6a84',
  timeFilter: {
    startDateTime: 'Sausages',
    endDateTime: 'Fresh'
  },
  heightFilter: {
    fromHeight: 74284,
    toHeight: 83080
  },
  numTxsFilter: {
    minNumTxs: 96107,
    maxNumTxs: 17776
  },
  numInvalidTxsFilter: {
    minNumInvalidTxs: 70098,
    maxNumInvalidTxs: 63093
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  page: {
    cursor: 'e-tailers',
    next: undefined,
    total: 63251
  },
  blocks: [
    {
      height: 39771,
      time: 'Belarussian Ruble',
      proposer: '0200de123063486beafcb3ab31aa1fcc63005b5a',
      numTxs: 29874,
      numInvalidTxs: 83167
    },
    {
      height: 30058,
      time: 'Re-contextualized',
      proposer: '9b71c6b8f37c23508d34c4e7b55bee790ca6238f',
      numTxs: 37510,
      numInvalidTxs: 32928
    }
  ]
}
});
```

### listTransactions

```js
const result = await client.listTransactions({
  paging: {
    cursor: 'AI',
    size: 56683,
    order: [
      {
        field: 'Refined Concrete Salad',
        type: 'Generic'
      },
      {
        field: 'Paradigm',
        type: 'Savings Account'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Web',
    endDateTime: 'Supervisor'
  },
  addressFilter: {
    sender: 'Branding',
    receiver: 'Manager',
    direction: 1
  },
  typeFilter: {
    types: [
      'Movies',
      'Drive'
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
  code: 20,
  page: {
    cursor: 'matrix',
    next: undefined,
    total: 66804
  },
  transactions: [
    {
      consumeAsset: {
        asset: 'withdrawal'
      }
    },
    {
      consumeAsset: {
        asset: 'repurpose'
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
  code: 24,
  address: '660aa1f45db433c94d81b36f942c9643870c5a78'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '061c1d64ff93d9662798c17d3442922bb385b6e6'
});

// output
{
  code: 11,
  chunk: Uint8Array [
    158
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '1b9ac39b53562784c8f1786e931fa22e7ebf86f3',
  passphrase: 'copying'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 504,
  token: 'deposit',
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      102
    ],
    pk: Uint8Array [
      86
    ],
    address: '4f4c50d78f84ab69a284d118c121b2a8f41a6579'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '4699df6dff8112e311fce76d6aa8a63102929316',
    nonce: 94874,
    chainId: 'Rustic',
    pk: Uint8Array [
      163
    ],
    signature: Uint8Array [
      232
    ],
    signatures: [
      {
        signer: 'Hollow',
        pk: Uint8Array [
          87
        ],
        signature: Uint8Array [
          250
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'orchestrate',
        pk: Uint8Array [
          16
        ],
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
  },
  data: {
    type: 'fg:x:random_data',
    value: 'ABCD 1234'
  },
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 1,
      role: 3
    },
    sk: Uint8Array [
      0
    ],
    pk: Uint8Array [
      174
    ],
    address: '3891df21863ebfc3143e426bf1060a66535bc9d4'
  },
  token: 'Home'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  tx: {
    from: '2b18e022e6f759e6e74e650e224ca71ce1357158',
    nonce: 10257,
    chainId: 'card',
    pk: Uint8Array [
      231
    ],
    signature: Uint8Array [
      55
    ],
    signatures: [
      {
        signer: 'alliance',
        pk: Uint8Array [
          203
        ],
        signature: Uint8Array [
          114
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: 'Cordoba Oro',
        pk: Uint8Array [
          250
        ],
        signature: Uint8Array [
          215
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
  hash: 'bdecb992eac7c5c9d14650e309f01612c8791db0'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 8
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '280bbcaed0cb36bc2996cc7da5c1f142580b2fb7',
      nonce: 75256,
      chainId: 'Savings Account',
      pk: Uint8Array [
        175
      ],
      signature: Uint8Array [
        174
      ],
      signatures: [
        {
          signer: 'matrix',
          pk: Uint8Array [
            192
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
          signer: 'Ergonomic',
          pk: Uint8Array [
            37
          ],
          signature: Uint8Array [
            248
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
        balance: '42333',
        nonce: 48204,
        numTxs: 73185,
        address: '4b69c35922ebc81dcd2afa44603c07fe74095c62',
        pk: Uint8Array [
          149
        ],
        type: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 5
        },
        moniker: 'web services',
        context: {
          genesisTx: 'lime',
          renaissanceTx: 'Analyst',
          genesisTime: '2019-04-04T08:20:58.016Z',
          renaissanceTime: '2019-04-04T08:20:58.016Z'
        },
        issuer: 'firewall',
        migratedTo: [
          'Associate',
          'white'
        ],
        migratedFrom: [
          'Albania',
          'asymmetric'
        ],
        numAssets: 96750,
        stake: {
          totalStakes: '79831',
          totalUnstakes: '73440',
          totalReceivedStakes: '69564',
          recentStakes: {
            items: [
              Uint8Array [
                39
              ],
              Uint8Array [
                209
              ]
            ],
            typeUrl: 'brand',
            maxItems: 93694,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                254
              ],
              Uint8Array [
                163
              ]
            ],
            typeUrl: 'Generic',
            maxItems: 56670,
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
              191
            ]
          ],
          typeUrl: 'Configuration',
          maxItems: 93068,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '4494',
          leftover: '18983',
          amount: '4108'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '37706',
        nonce: 62715,
        numTxs: 21485,
        address: '945287a371bfeaa7987c295ddbaa707f4c6aaada',
        pk: Uint8Array [
          251
        ],
        type: {
          pk: 0,
          hash: 2,
          address: 0,
          role: 3
        },
        moniker: 'Intuitive',
        context: {
          genesisTx: 'neural',
          renaissanceTx: 'Manager',
          genesisTime: '2019-04-04T08:20:58.016Z',
          renaissanceTime: '2019-04-04T08:20:58.016Z'
        },
        issuer: 'Cotton',
        migratedTo: [
          'Avon',
          'Club'
        ],
        migratedFrom: [
          'system',
          'Handcrafted'
        ],
        numAssets: 76113,
        stake: {
          totalStakes: '12676',
          totalUnstakes: '53751',
          totalReceivedStakes: '84817',
          recentStakes: {
            items: [
              Uint8Array [
                219
              ],
              Uint8Array [
                232
              ]
            ],
            typeUrl: 'open-source',
            maxItems: 16221,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                141
              ],
              Uint8Array [
                9
              ]
            ],
            typeUrl: 'transmitter',
            maxItems: 6317,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              232
            ],
            Uint8Array [
              130
            ]
          ],
          typeUrl: 'Croatian Kuna',
          maxItems: 19322,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '8216',
          leftover: '78109',
          amount: '15694'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: '39296e509e677e66ad2a2b6057003a028815af3a',
        owner: 'Awesome Fresh Gloves',
        moniker: 'dedicated',
        readonly: undefined,
        transferrable: undefined,
        ttl: 43117,
        consumedTime: '2019-04-04T08:20:58.017Z',
        issuer: 'Codes specifically reserved for testing purposes',
        stake: {
          totalStakes: '81325',
          totalUnstakes: '3855',
          totalReceivedStakes: '70698',
          recentStakes: {
            items: [
              Uint8Array [
                84
              ],
              Uint8Array [
                243
              ]
            ],
            typeUrl: 'USB',
            maxItems: 95241,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                126
              ],
              Uint8Array [
                134
              ]
            ],
            typeUrl: 'Credit Card Account',
            maxItems: 65451,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Berkshire',
          renaissanceTx: 'Netherlands',
          genesisTime: '2019-04-04T08:20:58.017Z',
          renaissanceTime: '2019-04-04T08:20:58.017Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '02aa5fc3f804b93ee53d13a19ef4603869e481bc',
        owner: 'action-items',
        moniker: 'Seychelles Rupee',
        readonly: undefined,
        transferrable: undefined,
        ttl: 44063,
        consumedTime: '2019-04-04T08:20:58.017Z',
        issuer: 'Bedfordshire',
        stake: {
          totalStakes: '8531',
          totalUnstakes: '16469',
          totalReceivedStakes: '12606',
          recentStakes: {
            items: [
              Uint8Array [
                9
              ],
              Uint8Array [
                211
              ]
            ],
            typeUrl: 'Tajikistan',
            maxItems: 29527,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                194
              ],
              Uint8Array [
                154
              ]
            ],
            typeUrl: 'Face to face',
            maxItems: 31459,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Generic',
          renaissanceTx: 'Tunisia',
          genesisTime: '2019-04-04T08:20:58.017Z',
          renaissanceTime: '2019-04-04T08:20:58.017Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '9713dd3e06f0243f0118601ae067ca569b71e8f7',
        from: '5a602e3f90962b31fbf74567fd3f451ebf635dc2',
        to: 'c7d511320e045a0857f969845701d8da682830a1',
        balance: '67633',
        message: 'sexy',
        context: {
          genesisTx: 'invoice',
          renaissanceTx: 'Fantastic',
          genesisTime: '2019-04-04T08:20:58.017Z',
          renaissanceTime: '2019-04-04T08:20:58.017Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '98a0ea68ca4b1570c26d2aed6f0b02d8e0fe2b5e',
        from: '84ac3dec9728081342462236480c43dac1d48b69',
        to: 'c180d6d87d5af4f8a8b448a2323d875ad9fc0030',
        balance: '26757',
        message: 'Licensed Metal Shirt',
        context: {
          genesisTx: 'wireless',
          renaissanceTx: 'Grove',
          genesisTime: '2019-04-04T08:20:58.017Z',
          renaissanceTime: '2019-04-04T08:20:58.017Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: 'e52b48ec9d8254411a3f5ee7243446803a652532',
      blockHeight: 87806,
      blockTime: '2019-04-04T08:20:58.017Z',
      totalTxs: 56897,
      txStatistics: {
        numAccountMigrateTxs: 19175,
        numCreateAssetTxs: 58431,
        numConsensusUpgradeTxs: 18538,
        numDeclareTxs: 80712,
        numDeclareFileTxs: 97660,
        numExchangeTxs: 8980,
        numStakeTxs: 39350,
        numSysUpgradeTxs: 27440,
        numTransferTxs: 60123,
        numUpdateAssetTxs: 34825,
        numConsumeAssetTxs: 74730,
        numPokeTxs: 47196
      },
      txIndex: 85711,
      lastBlockTime: '2019-04-04T08:20:58.017Z'
    },
    appState: {
      address: 'b7d952b548c5163eced1428c70e0fabb52a872c6',
      consensus: {
        maxBytes: 15622,
        maxGas: 66664,
        maxValidators: 35588,
        maxCandidates: 88127,
        pubKeyTypes: [
          'system',
          'Cotton'
        ],
        validators: [
          {
            address: 'd5f73a3f1ac3fc80d42b9eb2e234ed9cd2001375',
            power: 26531
          },
          {
            address: '11a72ba35f53b4348285cda6c0825affe7760192',
            power: 65529
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '20050': {
          item: [
            {
              type: 12,
              dataHash: 'robust',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 4,
              dataHash: 'envisioneer',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '30706': {
          totalStakes: '64152',
          totalUnstakes: '70942',
          context: {
            genesisTx: 'optimizing',
            renaissanceTx: 'grey',
            genesisTime: '2019-04-04T08:20:58.017Z',
            renaissanceTime: '2019-04-04T08:20:58.017Z'
          }
        }
      },
      version: 'contextually-based',
      dataVersion: 'teal',
      forgeAppHash: Uint8Array [
        98
      ],
      token: {
        name: 'Books',
        symbol: 'cross-platform',
        unit: 'schemas',
        description: 'content-based',
        icon: Uint8Array [
          97
        ],
        decimal: 38367,
        initialSupply: 29742,
        totalSupply: 75154,
        inflationRate: 26529
      },
      txConfig: {
        maxAssetSize: 29910,
        maxListSize: 70897,
        maxMultisig: 61901,
        minimumStake: 7352
      },
      stakeConfig: {
        timeoutGeneral: 14817,
        timeoutStakeForNode: 56371
      },
      pokeConfig: {
        address: 'cdd254a5a72865f4eb11f65c270f4a4ac4446fe0',
        dailyLimit: 5868,
        balance: 34293,
        amount: 70951
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
    code: 17
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '8f6e89bc7db80ac50aaecec091d21134de60a042',
      nonce: 82494,
      chainId: 'Kenya',
      pk: Uint8Array [
        85
      ],
      signature: Uint8Array [
        8
      ],
      signatures: [
        {
          signer: 'Practical Granite Table',
          pk: Uint8Array [
            104
          ],
          signature: Uint8Array [
            122
          ],
          data: {
            type: 'fg:x:random_data',
            value: 'ABCD 1234'
          }
        },
        {
          signer: 'middleware',
          pk: Uint8Array [
            104
          ],
          signature: Uint8Array [
            106
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
        balance: '90297',
        nonce: 51972,
        numTxs: 81820,
        address: '6e3626089a3d873ca61899a12040a7554327eeeb',
        pk: Uint8Array [
          79
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 0,
          role: 0
        },
        moniker: 'cutting-edge',
        context: {
          genesisTx: 'orchestration',
          renaissanceTx: 'Wooden',
          genesisTime: '2019-04-04T08:20:58.018Z',
          renaissanceTime: '2019-04-04T08:20:58.018Z'
        },
        issuer: 'Factors',
        migratedTo: [
          'efficient',
          'Baby'
        ],
        migratedFrom: [
          'card',
          'Soft'
        ],
        numAssets: 92673,
        stake: {
          totalStakes: '76755',
          totalUnstakes: '21817',
          totalReceivedStakes: '90194',
          recentStakes: {
            items: [
              Uint8Array [
                157
              ],
              Uint8Array [
                220
              ]
            ],
            typeUrl: 'back up',
            maxItems: 80694,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                13
              ],
              Uint8Array [
                144
              ]
            ],
            typeUrl: 'RSS',
            maxItems: 60140,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              223
            ],
            Uint8Array [
              61
            ]
          ],
          typeUrl: 'transitional',
          maxItems: 72376,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '10187',
          leftover: '94346',
          amount: '79138'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        balance: '13523',
        nonce: 24237,
        numTxs: 41894,
        address: '4afbb6f0687c778ea368257ea20acb7817533177',
        pk: Uint8Array [
          107
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 0,
          role: 4
        },
        moniker: 'Sleek Granite Computer',
        context: {
          genesisTx: 'capacitor',
          renaissanceTx: 'primary',
          genesisTime: '2019-04-04T08:20:58.018Z',
          renaissanceTime: '2019-04-04T08:20:58.018Z'
        },
        issuer: 'Facilitator',
        migratedTo: [
          'Tennessee',
          'synthesizing'
        ],
        migratedFrom: [
          'hierarchy',
          'Salad'
        ],
        numAssets: 42050,
        stake: {
          totalStakes: '27076',
          totalUnstakes: '30767',
          totalReceivedStakes: '74315',
          recentStakes: {
            items: [
              Uint8Array [
                242
              ],
              Uint8Array [
                86
              ]
            ],
            typeUrl: 'Agent',
            maxItems: 55677,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                11
              ],
              Uint8Array [
                101
              ]
            ],
            typeUrl: 'bricks-and-clicks',
            maxItems: 59767,
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
              114
            ]
          ],
          typeUrl: 'Intelligent',
          maxItems: 54467,
          circular: undefined,
          fifo: undefined
        },
        poke: {
          dailyLimit: '10223',
          leftover: '36061',
          amount: '65280'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    assets: [
      {
        address: 'c53a14babcd7ca081c3405b912cb489b858f6591',
        owner: 'Trinidad and Tobago Dollar',
        moniker: 'Brand',
        readonly: undefined,
        transferrable: undefined,
        ttl: 24821,
        consumedTime: '2019-04-04T08:20:58.019Z',
        issuer: 'connecting',
        stake: {
          totalStakes: '11309',
          totalUnstakes: '655',
          totalReceivedStakes: '90713',
          recentStakes: {
            items: [
              Uint8Array [
                214
              ],
              Uint8Array [
                19
              ]
            ],
            typeUrl: 'RSS',
            maxItems: 97437,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                38
              ],
              Uint8Array [
                9
              ]
            ],
            typeUrl: 'Hawaii',
            maxItems: 94761,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'XSS',
          renaissanceTx: 'Group',
          genesisTime: '2019-04-04T08:20:58.019Z',
          renaissanceTime: '2019-04-04T08:20:58.019Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '667c09b6c3ad8355add0650e6df8ad0424ae473d',
        owner: 'Architect',
        moniker: 'Global',
        readonly: undefined,
        transferrable: undefined,
        ttl: 10975,
        consumedTime: '2019-04-04T08:20:58.019Z',
        issuer: 'users',
        stake: {
          totalStakes: '54532',
          totalUnstakes: '34609',
          totalReceivedStakes: '98187',
          recentStakes: {
            items: [
              Uint8Array [
                43
              ],
              Uint8Array [
                51
              ]
            ],
            typeUrl: 'Investor',
            maxItems: 80980,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                69
              ],
              Uint8Array [
                172
              ]
            ],
            typeUrl: 'invoice',
            maxItems: 19407,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Senior',
          renaissanceTx: 'back up',
          genesisTime: '2019-04-04T08:20:58.019Z',
          renaissanceTime: '2019-04-04T08:20:58.019Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    stakes: [
      {
        address: '7acc3ac6bcbbb1b92939175b8fbef1458f631cc6',
        from: '000f3b6a16a784d0f41dbb510df6808c53f495cf',
        to: '0474dc92f2a0f02bcdf1fe0c83ea9ce79d085fc5',
        balance: '42039',
        message: 'Direct',
        context: {
          genesisTx: 'flexibility',
          renaissanceTx: 'Locks',
          genesisTime: '2019-04-04T08:20:58.019Z',
          renaissanceTime: '2019-04-04T08:20:58.019Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        address: '76834f10bc267568033aa9e327bff33213200574',
        from: '46526f6badee3bc3360a2e3cc8183835bdc05f6d',
        to: '57f3f09af239030996299afc5159cf7fa746ff42',
        balance: '59923',
        message: 'application',
        context: {
          genesisTx: 'Rubber',
          renaissanceTx: 'Unbranded Granite Shirt',
          genesisTime: '2019-04-04T08:20:58.019Z',
          renaissanceTime: '2019-04-04T08:20:58.019Z'
        },
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      }
    ],
    context: {
      txHash: '5b43cf87f01a5b27a98a8a06677bb01b851b79c5',
      blockHeight: 48622,
      blockTime: '2019-04-04T08:20:58.019Z',
      totalTxs: 21905,
      txStatistics: {
        numAccountMigrateTxs: 20565,
        numCreateAssetTxs: 36896,
        numConsensusUpgradeTxs: 27488,
        numDeclareTxs: 61838,
        numDeclareFileTxs: 21238,
        numExchangeTxs: 23055,
        numStakeTxs: 23132,
        numSysUpgradeTxs: 51304,
        numTransferTxs: 36966,
        numUpdateAssetTxs: 45369,
        numConsumeAssetTxs: 69413,
        numPokeTxs: 36526
      },
      txIndex: 57353,
      lastBlockTime: '2019-04-04T08:20:58.019Z'
    },
    appState: {
      address: '83032ee8450f5e3d5947fdf6009988c5beec50fd',
      consensus: {
        maxBytes: 2684,
        maxGas: 46489,
        maxValidators: 95009,
        maxCandidates: 6792,
        pubKeyTypes: [
          'Papua New Guinea',
          'Serbian Dinar'
        ],
        validators: [
          {
            address: '4f4258335a7404bc05751148f03619bae3684d02',
            power: 22746
          },
          {
            address: '61a9329ba419d81c3d9ca40eb9d70d17c72d4ac1',
            power: 97225
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        '77867': {
          item: [
            {
              type: 3,
              dataHash: 'Soap',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 1,
              dataHash: 'French Guiana',
              actions: [
                undefined,
                undefined
              ]
            }
          ]
        }
      },
      stakeSummary: {
        '23855': {
          totalStakes: '97773',
          totalUnstakes: '242',
          context: {
            genesisTx: 'matrices',
            renaissanceTx: 'innovative',
            genesisTime: '2019-04-04T08:20:58.019Z',
            renaissanceTime: '2019-04-04T08:20:58.019Z'
          }
        }
      },
      version: 'paradigms',
      dataVersion: 'hub',
      forgeAppHash: Uint8Array [
        24
      ],
      token: {
        name: 'Chief',
        symbol: 'Metal',
        unit: 'Chips',
        description: 'open-source',
        icon: Uint8Array [
          212
        ],
        decimal: 83637,
        initialSupply: 59701,
        totalSupply: 76208,
        inflationRate: 39471
      },
      txConfig: {
        maxAssetSize: 32516,
        maxListSize: 56866,
        maxMultisig: 2831,
        minimumStake: 99163
      },
      stakeConfig: {
        timeoutGeneral: 31940,
        timeoutStakeForNode: 6382
      },
      pokeConfig: {
        address: 'c8333f04031fa3ea4a9ec4432202ffb46a4f8c4b',
        dailyLimit: 33565,
        balance: 26466,
        amount: 898
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
    code: 35
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    53
  ],
  type: {
    pk: 1,
    hash: 0,
    address: 1,
    role: 7
  },
  passphrase: 'override',
  moniker: 'Global'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'Village',
  wallet: {
    type: {
      pk: 1,
      hash: 6,
      address: 1,
      role: 0
    },
    sk: Uint8Array [
      17
    ],
    pk: Uint8Array [
      183
    ],
    address: 'f3890affcb528d0076381697261a0074cfe92901'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '07f02db33ed7c5b2d604b794415232acb36ed3dc'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 31
}
});
```

### search

```js
const result = await client.search({
  key: 'plum',
  value: 'Books'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 403,
  txs: [
    {
      tx: {
        from: '27aec7e4d2993add78872aadb94f974cf8089b5a',
        nonce: 10457,
        chainId: 'XSS',
        pk: Uint8Array [
          20
        ],
        signature: Uint8Array [
          0
        ],
        signatures: [
          {
            signer: 'Wisconsin',
            pk: Uint8Array [
              183
            ],
            signature: Uint8Array [
              67
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'Fish',
            pk: Uint8Array [
              135
            ],
            signature: Uint8Array [
              35
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
      height: 85744,
      index: 51006,
      hash: '64a1cfc3dadb4924d05b40c003cc15e193c3177f',
      tags: [
        {
          key: Uint8Array [
            242
          ],
          value: Uint8Array [
            185
          ]
        },
        {
          key: Uint8Array [
            173
          ],
          value: Uint8Array [
            21
          ]
        }
      ],
      code: 504,
      time: '2019-04-04T08:20:58.021Z',
      createAsset: {
        asset: 'deposit'
      },
      accountMigrate: {
        address: '86eb92906c34b33d0857c8d77bf7b4e22aafcdbf'
      }
    },
    {
      tx: {
        from: '4c294325d835b61bef4382e635476677cf89cbf0',
        nonce: 42460,
        chainId: 'Operations',
        pk: Uint8Array [
          248
        ],
        signature: Uint8Array [
          162
        ],
        signatures: [
          {
            signer: 'bi-directional',
            pk: Uint8Array [
              32
            ],
            signature: Uint8Array [
              74
            ],
            data: {
              type: 'fg:x:random_data',
              value: 'ABCD 1234'
            }
          },
          {
            signer: 'mobile',
            pk: Uint8Array [
              35
            ],
            signature: Uint8Array [
              34
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
      height: 68617,
      index: 30121,
      hash: '60f2d2790ae751f69609f44eb872ddc1925df821',
      tags: [
        {
          key: Uint8Array [
            250
          ],
          value: Uint8Array [
            34
          ]
        },
        {
          key: Uint8Array [
            45
          ],
          value: Uint8Array [
            30
          ]
        }
      ],
      code: 36,
      time: '2019-04-04T08:20:58.021Z',
      createAsset: {
        asset: 'Avon'
      },
      accountMigrate: {
        address: 'f899fcd0e51f258f78ea3453aa14156390d5152f'
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
    from: 'a5bcadf67124c38dffe92b3a6a1e0e12c71b58fb',
    nonce: 48905,
    chainId: 'Bike',
    pk: Uint8Array [
      56
    ],
    signature: Uint8Array [
      139
    ],
    signatures: [
      {
        signer: 'Shirt',
        pk: Uint8Array [
          242
        ],
        signature: Uint8Array [
          124
        ],
        data: {
          type: 'fg:x:random_data',
          value: 'ABCD 1234'
        }
      },
      {
        signer: '1080p',
        pk: Uint8Array [
          177
        ],
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
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      212
    ],
    pk: Uint8Array [
      103
    ],
    address: '2b119a2106e8552152fc1a3c527f4e7d34d7279a'
  },
  token: 'Cloned',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 42,
  hash: '930aafce433d9bdc3925c0f7b25058c92a4b339a'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    85
  ],
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 6
    },
    sk: Uint8Array [
      51
    ],
    pk: Uint8Array [
      40
    ],
    address: 'ce306a63a314aeda13fb62854ba96a9f01691300'
  },
  token: 'Administrator'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  signature: Uint8Array [
    220
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    25
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 25,
  hash: 'f58db3a2c4b04408c1a2242a81ed808e120eb559'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 24,
  filter: 'solid state'
});

// output
{
  topic: 'Associate'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'matrix'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 500
}
});
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
