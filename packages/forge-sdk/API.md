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
  * [getAssets](#getassets)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getStakes](#getstakes)
  * [getTopAccounts](#gettopaccounts)
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
  EXPIRED_ASSET: 39,
  UNTRANSFERRABLE_ASSET: 40,
  READONLY_ASSET: 41,
  ACTIVATED_ASSET: 42,
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
  ACTIVATE_ASSET: 25,
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
  'ActivateAssetTx',
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
      hash: 1,
      address: 1,
      role: 3
    }
  },
  from: '1a3bc4700582e0022ee6853af010e39b90f9edd9',
  nonce: 58106,
  wallet: {
    type: {
      pk: 0,
      hash: 13,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      159
    ],
    pk: Uint8Array [
      5
    ],
    address: '7013dcc37f549152dc25f682b9bbe754edfa7ae9'
  },
  token: 'index'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 21,
  tx: {
    from: '7dabaef8fc52787e4b0d18908314f7b299170c9f',
    nonce: 70095,
    signature: Uint8Array [
      9
    ],
    chainId: 'reboot',
    signatures: [
      {
        key: Uint8Array [
          36
        ],
        value: Uint8Array [
          111
        ]
      },
      {
        key: Uint8Array [
          125
        ],
        value: Uint8Array [
          105
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 13,
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
  passphrase: 'SDR',
  type: {
    pk: 1,
    hash: 1,
    address: 0,
    role: 1
  },
  moniker: 'Infrastructure'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  token: 'Belize',
  wallet: {
    type: {
      pk: 1,
      hash: 13,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      29
    ],
    pk: Uint8Array [
      61
    ],
    address: '2dd5ccd5c39f23521607ad7ef2d30b0216479331'
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
  code: 7,
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 0,
      role: 4
    },
    sk: Uint8Array [
      196
    ],
    pk: Uint8Array [
      112
    ],
    address: 'ea63d7500c4931fe1a584a6c876c60fc53cdfc86'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: 'cb93b44a2968948a285d58a594603ce7321b6620',
  keys: [
    'deposit',
    'ROI'
  ],
  height: 66091
});

// output
{
  code: 4,
  state: {
    balance: '52584',
    nonce: 42864,
    numTxs: 38840,
    address: '224d220ca70d4426a6ef7a00d326e5186b2a9750',
    pk: Uint8Array [
      9
    ],
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 4
    },
    moniker: 'Home Loan Account',
    context: {
      genesisTx: 'sexy',
      renaissanceTx: 'JSON',
      genesisTime: '2019-02-26T03:30:46.204Z',
      renaissanceTime: '2019-02-26T03:30:46.204Z'
    },
    migratedTo: [
      'Grocery',
      'directional'
    ],
    migratedFrom: [
      'generating',
      'Sports'
    ],
    numAssets: 96242,
    stake: {
      totalStakes: '20858',
      totalUnstakes: '16924',
      totalReceivedStakes: '82748',
      recentStakes: {
        items: [
          Uint8Array [
            61
          ],
          Uint8Array [
            149
          ]
        ],
        typeUrl: 'Multi-lateral',
        maxItems: 54435,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            76
          ],
          Uint8Array [
            155
          ]
        ],
        typeUrl: 'indigo',
        maxItems: 53761,
        circular: undefined,
        fifo: undefined
      }
    },
    pinnedFiles: {
      items: [
        Uint8Array [
          157
        ],
        Uint8Array [
          34
        ]
      ],
      typeUrl: 'Refined Plastic Table',
      maxItems: 13908,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 0,
        role: 2
      }
    }
  }
}
```

### getAssetAddress

```js
const result = await client.getAssetAddress({
  senderAddress: 'sensor',
  itx: {
    moniker: 'generating',
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 14,
        address: 0,
        role: 4
      }
    },
    readonly: undefined,
    expiredAt: '2019-02-26T03:30:46.205Z'
  },
  walletType: {
    pk: 1,
    hash: 6,
    address: 0,
    role: 0
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 3,
  assetAddress: 'Lead'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: '316baf3e41c50a221936370322e93c60905364df',
  keys: [
    'Tennessee',
    'driver'
  ],
  height: 97825
});

// output
{
  code: 26,
  state: {
    address: 'bf8b3a2166121c4b970d81576ba167bf65710435',
    owner: 'Massachusetts',
    moniker: 'interface',
    readonly: undefined,
    activated: undefined,
    expiredAt: '2019-02-26T03:30:46.205Z',
    stake: {
      totalStakes: '70540',
      totalUnstakes: '15593',
      totalReceivedStakes: '84456',
      recentStakes: {
        items: [
          Uint8Array [
            148
          ],
          Uint8Array [
            15
          ]
        ],
        typeUrl: 'Associate',
        maxItems: 54053,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            37
          ],
          Uint8Array [
            31
          ]
        ],
        typeUrl: 'Movies',
        maxItems: 41236,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'capacitor',
      renaissanceTx: 'incremental',
      genesisTime: '2019-02-26T03:30:46.206Z',
      renaissanceTime: '2019-02-26T03:30:46.206Z'
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

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'Cheese',
    size: 94715,
    order: [
      {
        field: 'Investment Account',
        type: 'cultivate'
      },
      {
        field: 'Michigan',
        type: 'harness'
      }
    ]
  },
  ownerAddress: 'contextually-based'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  page: {
    cursor: 'SSL',
    next: undefined,
    total: 83165
  },
  assets: [
    {
      address: '457b7fec0370746308bd20fce0321109d905fae1',
      owner: 'Small',
      genesisTime: 'optical',
      renaissanceTime: 'IB',
      moniker: 'Generic',
      readonly: undefined
    },
    {
      address: '9e9207587f9e17ceccf2b8820d3a565bbdc4c329',
      owner: 'seize',
      genesisTime: 'Dominican Peso',
      renaissanceTime: 'Handcrafted Frozen Table',
      moniker: 'Planner',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 12757
});

// output
{
  code: 4,
  block: {
    height: 80464,
    numTxs: 9111,
    time: '2019-02-26T03:30:46.207Z',
    appHash: 'a7caa2700fdb522bc6d510246b614e94b7cae8be',
    proposer: 'c5f463943cf89c4fcc9e9b16a8382d5e53576459',
    txs: [
      {
        tx: {
          from: '5da1407e49d567ea2fef62e58547e33f75d4810e',
          nonce: 72514,
          signature: Uint8Array [
            2
          ],
          chainId: 'paradigms',
          signatures: [
            {
              key: Uint8Array [
                12
              ],
              value: Uint8Array [
                84
              ]
            },
            {
              key: Uint8Array [
                53
              ],
              value: Uint8Array [
                29
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 1,
              hash: 6,
              address: 1,
              role: 5
            }
          }
        },
        height: 55887,
        index: 52356,
        hash: '59198f502cd347a69347f60e0e1672c5583bd45b',
        tags: [
          {
            key: Uint8Array [
              175
            ],
            value: Uint8Array [
              63
            ]
          },
          {
            key: Uint8Array [
              93
            ],
            value: Uint8Array [
              196
            ]
          }
        ],
        code: 21
      },
      {
        tx: {
          from: '4aa5fb7379645d066de6b81fbb932a10abeffba9',
          nonce: 31362,
          signature: Uint8Array [
            42
          ],
          chainId: 'Walks',
          signatures: [
            {
              key: Uint8Array [
                56
              ],
              value: Uint8Array [
                144
              ]
            },
            {
              key: Uint8Array [
                37
              ],
              value: Uint8Array [
                68
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
        },
        height: 39939,
        index: 51815,
        hash: '599300b77168f2a4652c85a9b31367961e252a5d',
        tags: [
          {
            key: Uint8Array [
              224
            ],
            value: Uint8Array [
              89
            ]
          },
          {
            key: Uint8Array [
              84
            ],
            value: Uint8Array [
              95
            ]
          }
        ],
        code: 5
      }
    ],
    totalTxs: 44878
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'Home',
    size: 26848,
    order: [
      {
        field: 'systematic',
        type: 'brand'
      },
      {
        field: 'Upgradable',
        type: 'Wooden'
      }
    ]
  },
  minHeight: 86855,
  maxHeight: 2646,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  page: {
    cursor: 'fuchsia',
    next: undefined,
    total: 72740
  },
  blocks: [
    {
      height: 46377,
      numTxs: 70611,
      time: '2019-02-26T03:30:46.208Z',
      appHash: '6b4957f691b7fab981b3fb463de011a6f0d6cec3',
      proposer: 'a3b86e22616a21083cf7d3526ebb24a8e046a5ee',
      txs: [
        {
          tx: {
            from: 'aa6a8dab57a8c80231e474487ca7a0c0d1cff4f0',
            nonce: 8705,
            signature: Uint8Array [
              92
            ],
            chainId: 'copy',
            signatures: [
              {
                key: Uint8Array [
                  130
                ],
                value: Uint8Array [
                  206
                ]
              },
              {
                key: Uint8Array [
                  102
                ],
                value: Uint8Array [
                  70
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 1,
                address: 1,
                role: 0
              }
            }
          },
          height: 97992,
          index: 27225,
          hash: '06a16671485455ac61c8d975150e1bdcc122d6e3',
          tags: [
            {
              key: Uint8Array [
                141
              ],
              value: Uint8Array [
                175
              ]
            },
            {
              key: Uint8Array [
                240
              ],
              value: Uint8Array [
                114
              ]
            }
          ],
          code: 403
        },
        {
          tx: {
            from: '58f528e7c8fca5180720c83c5e8839647fad684a',
            nonce: 89974,
            signature: Uint8Array [
              17
            ],
            chainId: 'Metal',
            signatures: [
              {
                key: Uint8Array [
                  252
                ],
                value: Uint8Array [
                  190
                ]
              },
              {
                key: Uint8Array [
                  228
                ],
                value: Uint8Array [
                  143
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 6,
                address: 0,
                role: 7
              }
            }
          },
          height: 32498,
          index: 37233,
          hash: '58b141b73ac8c2a3d1851499a46f6362255c48fe',
          tags: [
            {
              key: Uint8Array [
                240
              ],
              value: Uint8Array [
                214
              ]
            },
            {
              key: Uint8Array [
                53
              ],
              value: Uint8Array [
                96
              ]
            }
          ],
          code: 36
        }
      ],
      totalTxs: 31549
    },
    {
      height: 85186,
      numTxs: 60721,
      time: '2019-02-26T03:30:46.209Z',
      appHash: 'ca6b9edf3dbde164629895c75cfbbc494b78fee4',
      proposer: 'fe23a0062cfa46b1dd3c43617cb70788694e2675',
      txs: [
        {
          tx: {
            from: 'e5d683cd0ad8eefd5e8c38fa06ba91d34e1ad87a',
            nonce: 8207,
            signature: Uint8Array [
              228
            ],
            chainId: 'Proactive',
            signatures: [
              {
                key: Uint8Array [
                  49
                ],
                value: Uint8Array [
                  157
                ]
              },
              {
                key: Uint8Array [
                  153
                ],
                value: Uint8Array [
                  164
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 14,
                address: 1,
                role: 2
              }
            }
          },
          height: 59727,
          index: 18620,
          hash: '82271d0ff15eb22e6b6cdaae241789e59c25be11',
          tags: [
            {
              key: Uint8Array [
                132
              ],
              value: Uint8Array [
                150
              ]
            },
            {
              key: Uint8Array [
                140
              ],
              value: Uint8Array [
                239
              ]
            }
          ],
          code: 22
        },
        {
          tx: {
            from: '65c2e69db5ae1b483095d77480a83e48e42255dc',
            nonce: 62866,
            signature: Uint8Array [
              35
            ],
            chainId: 'invoice',
            signatures: [
              {
                key: Uint8Array [
                  38
                ],
                value: Uint8Array [
                  99
                ]
              },
              {
                key: Uint8Array [
                  158
                ],
                value: Uint8Array [
                  205
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 13,
                address: 1,
                role: 7
              }
            }
          },
          height: 4335,
          index: 57633,
          hash: 'a472cf048688a1d3d83c68e194bbf6c536828aea',
          tags: [
            {
              key: Uint8Array [
                27
              ],
              value: Uint8Array [
                167
              ]
            },
            {
              key: Uint8Array [
                100
              ],
              value: Uint8Array [
                17
              ]
            }
          ],
          code: 32
        }
      ],
      totalTxs: 83241
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
  code: 10,
  info: {
    id: 'Hawaii',
    network: 'Fresh',
    moniker: 'Face to face',
    consensusVersion: 'SSL',
    synced: undefined,
    appHash: 'b89418fd19224b9a399408ff2c66f607f35e21ab',
    blockHash: Uint8Array [
      34
    ],
    blockHeight: 77932,
    blockTime: '2019-02-26T03:30:46.210Z',
    address: '0442ac01fd24f19570b9c24d4420b3ca16528827',
    votingPower: 74239,
    totalTxs: 90907,
    version: 'Key',
    dataVersion: 'payment',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'Factors'
    },
    supportedTxs: [
      'Forward',
      'Unbranded Steel Soap'
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
  code: 35,
  config: 'compelling'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'Rubber',
    'Sausages'
  ],
  height: 12020
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 4,
  state: {
    address: 'd6ac45646f129a339801ee726c966b6f81cc0224',
    consensus: {
      maxBytes: 9914,
      maxGas: 19567,
      maxValidators: 58802,
      maxCandidates: 96716,
      pubKeyTypes: [
        'auxiliary',
        'Upgradable'
      ],
      validators: [
        {
          address: '48737e432674244fc01a3a6c905879da6496710d',
          power: 99281
        },
        {
          address: 'df43145a3a857278465568a4b9a41694d1e9a83f',
          power: 30526
        }
      ],
      validatorChanged: undefined,
      paramChanged: undefined
    },
    tasks: {
      'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
        item: [
          {
            type: 0,
            dataHash: 'West Virginia',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 0,
            dataHash: 'plum',
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
        totalStakes: '74759',
        totalUnstakes: '29988',
        context: {
          genesisTx: 'SAS',
          renaissanceTx: 'Plastic',
          genesisTime: '2019-02-26T03:30:46.211Z',
          renaissanceTime: '2019-02-26T03:30:46.211Z'
        }
      }
    },
    version: 'Zambia',
    dataVersion: 'Personal Loan Account',
    forgeAppHash: Uint8Array [
      174
    ],
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 7,
        address: 0,
        role: 5
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
    startDate: 'seamless',
    endDate: 'solid state'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  forgeStatistics: {
    numBlocks: [
      2124,
      34852
    ],
    numTxs: [
      63505,
      45763
    ],
    numStakes: [
      '82884',
      '17361'
    ],
    numValidators: [
      67209,
      61654
    ],
    numAccountMigrateTxs: [
      47820,
      41917
    ],
    numCreateAssetTxs: [
      81991,
      51039
    ],
    numConsensusUpgradeTxs: [
      15845,
      26754
    ],
    numDeclareTxs: [
      8981,
      24921
    ],
    numDeclareFileTxs: [
      51712,
      81972
    ],
    numExchangeTxs: [
      75989,
      79138
    ],
    numStakeTxs: [
      98317,
      9670
    ],
    numSysUpgradeTxs: [
      35209,
      44588
    ],
    numTransferTxs: [
      40690,
      92197
    ],
    numUpdateAssetTxs: [
      12280,
      3786
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
  code: 24,
  netInfo: {
    listening: undefined,
    listeners: [
      'Zimbabwe',
      'engage'
    ],
    nPeers: 8232,
    peers: [
      {
        nodeInfo: {
          id: 'Algeria',
          network: 'Pizza',
          consensusVersion: 'Steel',
          moniker: 'Borders',
          ip: 'wireless',
          geoInfo: {
            city: 'architect',
            country: 'Comoros',
            latitude: 32464.76,
            longitude: 57827.14
          }
        }
      },
      {
        nodeInfo: {
          id: 'Jewelery',
          network: 'backing up',
          consensusVersion: 'compressing',
          moniker: 'Research',
          ip: 'seize',
          geoInfo: {
            city: 'Buckinghamshire',
            country: 'partnerships',
            latitude: 47975.56,
            longitude: 674.52
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
  address: 'd2779fa4fbd7708b69c7a6fe96562a212a03a6fa',
  keys: [
    'ADP',
    'Licensed Wooden Hat'
  ],
  height: 77893
});

// output
{
  code: 500,
  state: {
    address: '4ceed0d72dcc423868859558455518b56ed534f6',
    from: '2554d0c7b6f818d8a7e4743b49bbf69e93626a4e',
    to: 'a8a3245c179009c6d112602478febc2f8fd94a08',
    balance: '63173',
    message: 'white',
    context: {
      genesisTx: 'Handcrafted',
      renaissanceTx: 'Licensed Soft Car',
      genesisTime: '2019-02-26T03:30:46.213Z',
      renaissanceTime: '2019-02-26T03:30:46.213Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 1,
        role: 6
      }
    }
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'exuding',
    size: 29907,
    order: [
      {
        field: 'contextually-based',
        type: 'HTTP'
      },
      {
        field: 'visionary',
        type: 'Bedfordshire'
      }
    ]
  },
  addressFilter: {
    sender: 'deposit',
    receiver: 'green'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1,
  page: {
    cursor: 'Integrated',
    next: undefined,
    total: 48578
  },
  stakes: [
    {
      address: 'f54a74ff55894021517f5a258d22ccde18bde741',
      balance: '74830',
      sender: 'Haven',
      receiver: 'Tools',
      genesisTime: 'alliance',
      renaissanceTime: 'Cotton',
      message: 'Up-sized',
      type: 90379
    },
    {
      address: '3a1517d5c36d3101ab965111f12890077d292485',
      balance: '29967',
      sender: 'evolve',
      receiver: 'RSS',
      genesisTime: 'SQL',
      renaissanceTime: 'Ergonomic Rubber Bike',
      message: 'bricks-and-clicks',
      type: 82929
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'De-engineered',
    size: 4465,
    order: [
      {
        field: 'implementation',
        type: 'payment'
      },
      {
        field: 'aggregate',
        type: 'Accountability'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 33,
  page: {
    cursor: 'Checking Account',
    next: undefined,
    total: 27974
  },
  accounts: [
    {
      address: '20a47e1dfb3402ee3f97e731a794dec9e5d74fce',
      balance: '29278',
      numAssets: 7166,
      numTxs: 9324,
      nonce: 49053,
      genesisTime: 'Liberian Dollar',
      renaissanceTime: 'orange',
      moniker: 'strategic',
      migratedFrom: 'Branding',
      migratedTo: 'Garden',
      totalReceivedStakes: '90426',
      totalStakes: '83747',
      totalUnstakes: '17233'
    },
    {
      address: '9e02993fb7c9f152c1124c4f368b09b7dd87da88',
      balance: '78205',
      numAssets: 37012,
      numTxs: 17769,
      nonce: 88614,
      genesisTime: 'Small',
      renaissanceTime: 'Hat',
      moniker: 'Moldova',
      migratedFrom: 'Lakes',
      migratedTo: 'Bike',
      totalReceivedStakes: '90916',
      totalStakes: '86144',
      totalUnstakes: '92193'
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: 'f43c872f106763655e01c367fe49e9d05306fc85'
});

// output
{
  code: 32,
  info: {
    tx: {
      from: 'a1c6a6ad008062a0926d6274ca72cc7226578d40',
      nonce: 52190,
      signature: Uint8Array [
        186
      ],
      chainId: 'Mauritius Rupee',
      signatures: [
        {
          key: Uint8Array [
            67
          ],
          value: Uint8Array [
            67
          ]
        },
        {
          key: Uint8Array [
            41
          ],
          value: Uint8Array [
            70
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
    height: 1113,
    index: 46177,
    hash: '07a7c0b43233941786fef4b52be4e2a570789c37',
    tags: [
      {
        key: Uint8Array [
          83
        ],
        value: Uint8Array [
          204
        ]
      },
      {
        key: Uint8Array [
          247
        ],
        value: Uint8Array [
          103
        ]
      }
    ],
    code: 1
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 40440
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26,
  unconfirmedTxs: {
    nTxs: 79927,
    txs: [
      {
        from: '3fe3e2ad5a78fc867ade7c3fd48bb0082430603e',
        nonce: 86873,
        signature: Uint8Array [
          86
        ],
        chainId: 'expedite',
        signatures: [
          {
            key: Uint8Array [
              109
            ],
            value: Uint8Array [
              203
            ]
          },
          {
            key: Uint8Array [
              41
            ],
            value: Uint8Array [
              167
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 1
          }
        }
      },
      {
        from: '314c7b1f7ae6a609413510cb1a7f293570bd29f4',
        nonce: 33560,
        signature: Uint8Array [
          139
        ],
        chainId: 'Interactions',
        signatures: [
          {
            key: Uint8Array [
              56
            ],
            value: Uint8Array [
              243
            ]
          },
          {
            key: Uint8Array [
              60
            ],
            value: Uint8Array [
              68
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 6
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
  code: 32,
  validatorsInfo: {
    blockHeight: 6215,
    validators: [
      {
        address: '329d0a38f536c3fc03b34c38e1ab109df593fbb9',
        pubKey: {
          type: 'matrix',
          data: Uint8Array [
            168
          ]
        },
        votingPower: 23661,
        proposerPriority: 'bandwidth',
        name: 'B2B'
      },
      {
        address: 'ce82c203c635e23f4b02767905841b5e031870bd',
        pubKey: {
          type: 'reboot',
          data: Uint8Array [
            161
          ]
        },
        votingPower: 360,
        proposerPriority: 'New Hampshire',
        name: 'Buckinghamshire'
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
    cursor: 'white',
    size: 13087,
    order: [
      {
        field: 'Utah',
        type: 'Functionality'
      },
      {
        field: 'Intelligent Plastic Fish',
        type: '4th generation'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'Markets',
    endDateTime: 'Denmark'
  },
  addressFilter: {
    sender: 'Practical',
    receiver: 'Checking Account'
  },
  typeFilter: {
    types: [
      'Rubber',
      'withdrawal'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 39,
  page: {
    cursor: 'Forint',
    next: undefined,
    total: 93517
  },
  transactions: [
    {
      hash: 'b9837c02fa98d78f0482978bb01f0430162905f6',
      sender: 'leverage',
      receiver: 'Architect',
      time: 'District',
      type: 'parse',
      tx: {
        from: 'eaf0226ce82736209d038636d0e820ee1f103fa6',
        nonce: 43743,
        signature: Uint8Array [
          186
        ],
        chainId: 'Danish Krone',
        signatures: [
          {
            key: Uint8Array [
              32
            ],
            value: Uint8Array [
              103
            ]
          },
          {
            key: Uint8Array [
              203
            ],
            value: Uint8Array [
              164
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
      }
    },
    {
      hash: 'b01b86628c414c04aa3b7adefed8e3c7a5ad1994',
      sender: 'out-of-the-box',
      receiver: 'Table',
      time: 'Awesome',
      type: 'wireless',
      tx: {
        from: 'cf809de277a42e18bd1f0fab0e3c851939599733',
        nonce: 4537,
        signature: Uint8Array [
          138
        ],
        chainId: 'Automotive',
        signatures: [
          {
            key: Uint8Array [
              136
            ],
            value: Uint8Array [
              218
            ]
          },
          {
            key: Uint8Array [
              23
            ],
            value: Uint8Array [
              153
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 6
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
  code: 33,
  address: '5cbd2ceb0f3f31ec3308357f4f22cd5fb00b011b'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: '54f70e1ce293bd1a75008a20c68f8706ffd76720'
});

// output
{
  code: 6,
  chunk: Uint8Array [
    172
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '60fe9b4f774a55c38ecc4170c0f721e179f9d1d3',
  passphrase: 'withdrawal'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  token: 'Supervisor',
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 8
    },
    sk: Uint8Array [
      149
    ],
    pk: Uint8Array [
      19
    ],
    address: '9a18ba902451fbf94ee94c85ce50beb7dc50bdc7'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '8a70ebb3a9aa967f94524e68f65ef86ac52d152d',
    nonce: 45543,
    signature: Uint8Array [
      251
    ],
    chainId: 'compress',
    signatures: [
      {
        key: Uint8Array [
          90
        ],
        value: Uint8Array [
          244
        ]
      },
      {
        key: Uint8Array [
          78
        ],
        value: Uint8Array [
          194
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 6,
        address: 0,
        role: 7
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 1,
      role: 5
    },
    sk: Uint8Array [
      112
    ],
    pk: Uint8Array [
      130
    ],
    address: 'd2f599c40a1cf9a994b10679acb48c8ac0da0c50'
  },
  token: 'Diverse'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 41,
  tx: {
    from: '9f61070d397af15b603d7da2fee0f9c86898c934',
    nonce: 11464,
    signature: Uint8Array [
      5
    ],
    chainId: 'synergize',
    signatures: [
      {
        key: Uint8Array [
          230
        ],
        value: Uint8Array [
          87
        ]
      },
      {
        key: Uint8Array [
          160
        ],
        value: Uint8Array [
          51
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 0,
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
  hash: '967f03d5483f30c20290d76e2422c38cf9d5ebde'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 26
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: 'b318230dd95c2e6ab024dd51a24c04ef2660bde8',
      nonce: 11367,
      signature: Uint8Array [
        229
      ],
      chainId: 'array',
      signatures: [
        {
          key: Uint8Array [
            131
          ],
          value: Uint8Array [
            196
          ]
        },
        {
          key: Uint8Array [
            115
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
          hash: 1,
          address: 0,
          role: 1
        }
      }
    },
    states: [
      {
        balance: '85637',
        nonce: 45846,
        numTxs: 35945,
        address: 'cddd405c91ccb9c5276ae976e268b095f1c0615d',
        pk: Uint8Array [
          20
        ],
        type: {
          pk: 0,
          hash: 6,
          address: 1,
          role: 5
        },
        moniker: 'Czech Koruna',
        context: {
          genesisTx: 'Books',
          renaissanceTx: 'Wooden',
          genesisTime: '2019-02-26T03:30:46.220Z',
          renaissanceTime: '2019-02-26T03:30:46.220Z'
        },
        migratedTo: [
          'Home',
          'sensor'
        ],
        migratedFrom: [
          'web-enabled',
          'Distributed'
        ],
        numAssets: 31928,
        stake: {
          totalStakes: '33434',
          totalUnstakes: '82281',
          totalReceivedStakes: '78224',
          recentStakes: {
            items: [
              Uint8Array [
                78
              ],
              Uint8Array [
                15
              ]
            ],
            typeUrl: 'Bangladesh',
            maxItems: 12436,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                29
              ],
              Uint8Array [
                237
              ]
            ],
            typeUrl: 'end-to-end',
            maxItems: 34620,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              83
            ],
            Uint8Array [
              35
            ]
          ],
          typeUrl: 'Networked',
          maxItems: 594,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 2
          }
        }
      },
      {
        balance: '88177',
        nonce: 79085,
        numTxs: 60459,
        address: 'b272599a1793da3fd8911368795504bc83fa7348',
        pk: Uint8Array [
          117
        ],
        type: {
          pk: 1,
          hash: 1,
          address: 0,
          role: 8
        },
        moniker: 'optical',
        context: {
          genesisTx: 'one-to-one',
          renaissanceTx: 'Sleek Steel Chicken',
          genesisTime: '2019-02-26T03:30:46.220Z',
          renaissanceTime: '2019-02-26T03:30:46.220Z'
        },
        migratedTo: [
          'Money Market Account',
          'complexity'
        ],
        migratedFrom: [
          'Chilean Peso Unidades de fomento',
          'benchmark'
        ],
        numAssets: 62635,
        stake: {
          totalStakes: '85211',
          totalUnstakes: '29622',
          totalReceivedStakes: '75577',
          recentStakes: {
            items: [
              Uint8Array [
                200
              ],
              Uint8Array [
                17
              ]
            ],
            typeUrl: 'Executive',
            maxItems: 49334,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                16
              ],
              Uint8Array [
                58
              ]
            ],
            typeUrl: 'Paradigm',
            maxItems: 59301,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              77
            ],
            Uint8Array [
              162
            ]
          ],
          typeUrl: 'GB',
          maxItems: 14286,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 0,
            role: 0
          }
        }
      }
    ],
    assets: [
      {
        address: '7dd8f03e731b60d1c56989566a4d2b98666d6f93',
        owner: 'Internal',
        moniker: 'Shoes',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-26T03:30:46.221Z',
        stake: {
          totalStakes: '1218',
          totalUnstakes: '4744',
          totalReceivedStakes: '56946',
          recentStakes: {
            items: [
              Uint8Array [
                241
              ],
              Uint8Array [
                140
              ]
            ],
            typeUrl: 'Fish',
            maxItems: 65070,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                208
              ],
              Uint8Array [
                6
              ]
            ],
            typeUrl: 'North Carolina',
            maxItems: 98605,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'virtual',
          renaissanceTx: 'index',
          genesisTime: '2019-02-26T03:30:46.221Z',
          renaissanceTime: '2019-02-26T03:30:46.221Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 1,
            role: 0
          }
        }
      },
      {
        address: 'f570cac2f099dc021398c68560991c4a96ea9f80',
        owner: 'Forward',
        moniker: 'real-time',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-26T03:30:46.221Z',
        stake: {
          totalStakes: '92666',
          totalUnstakes: '43690',
          totalReceivedStakes: '50470',
          recentStakes: {
            items: [
              Uint8Array [
                27
              ],
              Uint8Array [
                207
              ]
            ],
            typeUrl: 'back-end',
            maxItems: 51087,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                165
              ],
              Uint8Array [
                246
              ]
            ],
            typeUrl: 'payment',
            maxItems: 95014,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Concrete',
          renaissanceTx: 'sky blue',
          genesisTime: '2019-02-26T03:30:46.221Z',
          renaissanceTime: '2019-02-26T03:30:46.221Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 1,
            role: 8
          }
        }
      }
    ],
    stakes: [
      {
        address: 'd1206f968e8a55fbaa8ec84829d102a8f4ba61b9',
        from: '70840e8fadf969226d5672ac2630e82c7f5a84be',
        to: '7b19db50fe3df741efc890bef106f3d7a56d892c',
        balance: '63210',
        message: 'instruction set',
        context: {
          genesisTx: 'Sao Tome and Principe',
          renaissanceTx: 'invoice',
          genesisTime: '2019-02-26T03:30:46.221Z',
          renaissanceTime: '2019-02-26T03:30:46.221Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 1,
            role: 4
          }
        }
      },
      {
        address: '69286b8ba3c09a5ff9bde6cd4a050386608ad38d',
        from: '4db871c9bb7cdb8cacc8fa1a7e1db754344916b0',
        to: 'effee87471386275da69c1feba61dcd613d33b06',
        balance: '29549',
        message: 'productize',
        context: {
          genesisTx: 'Bahraini Dinar',
          renaissanceTx: 'applications',
          genesisTime: '2019-02-26T03:30:46.222Z',
          renaissanceTime: '2019-02-26T03:30:46.222Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 1,
            role: 7
          }
        }
      }
    ],
    context: {
      txHash: '66af24207dd9309227b3e777f93d9779c281ae80',
      blockHeight: 67884,
      blockTime: '2019-02-26T03:30:46.222Z',
      totalTxs: 14171,
      txStatistics: {
        numAccountMigrateTxs: 50473,
        numCreateAssetTxs: 10814,
        numConsensusUpgradeTxs: 216,
        numDeclareTxs: 40776,
        numDeclareFileTxs: 15773,
        numExchangeTxs: 71844,
        numStakeTxs: 93901,
        numSysUpgradeTxs: 81703,
        numTransferTxs: 46711,
        numUpdateAssetTxs: 86417
      },
      txIndex: 59559,
      lastBlockTime: '2019-02-26T03:30:46.222Z'
    },
    appState: {
      address: 'e9302d66e69e99a3e4b02504d31357d2b6ab1973',
      consensus: {
        maxBytes: 79735,
        maxGas: 77337,
        maxValidators: 56236,
        maxCandidates: 54551,
        pubKeyTypes: [
          'array',
          'Tactics'
        ],
        validators: [
          {
            address: '84c83a11b3894231cf138ddba3bce62de1cfe58a',
            power: 99243
          },
          {
            address: '31f2b761f96511a4ac3c5b4db63199dad2a03813',
            power: 39353
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
              dataHash: 'eyeballs',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 14,
              dataHash: 'Licensed',
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
          totalStakes: '65279',
          totalUnstakes: '13923',
          context: {
            genesisTx: 'Licensed Cotton Sausages',
            renaissanceTx: 'Balanced',
            genesisTime: '2019-02-26T03:30:46.223Z',
            renaissanceTime: '2019-02-26T03:30:46.223Z'
          }
        }
      },
      version: 'Handmade',
      dataVersion: 'Auto Loan Account',
      forgeAppHash: Uint8Array [
        15
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 5
        }
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
      from: '005aba581acc48290794131a34cdb1e17dc28e2f',
      nonce: 79958,
      signature: Uint8Array [
        216
      ],
      chainId: 'implement',
      signatures: [
        {
          key: Uint8Array [
            251
          ],
          value: Uint8Array [
            180
          ]
        },
        {
          key: Uint8Array [
            176
          ],
          value: Uint8Array [
            219
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 0,
          hash: 1,
          address: 0,
          role: 7
        }
      }
    },
    states: [
      {
        balance: '31240',
        nonce: 63725,
        numTxs: 84984,
        address: '134a694f44b9bc35b086f823dc2ebebc8d588d60',
        pk: Uint8Array [
          242
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 8
        },
        moniker: 'Toys',
        context: {
          genesisTx: 'Car',
          renaissanceTx: 'Ergonomic Plastic Bike',
          genesisTime: '2019-02-26T03:30:46.225Z',
          renaissanceTime: '2019-02-26T03:30:46.225Z'
        },
        migratedTo: [
          'firewall',
          'Representative'
        ],
        migratedFrom: [
          'Generic Frozen Bacon',
          'Automated'
        ],
        numAssets: 1798,
        stake: {
          totalStakes: '48034',
          totalUnstakes: '71247',
          totalReceivedStakes: '87806',
          recentStakes: {
            items: [
              Uint8Array [
                57
              ],
              Uint8Array [
                169
              ]
            ],
            typeUrl: 'Group',
            maxItems: 50894,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                163
              ],
              Uint8Array [
                13
              ]
            ],
            typeUrl: 'Architect',
            maxItems: 73175,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              219
            ],
            Uint8Array [
              225
            ]
          ],
          typeUrl: 'overriding',
          maxItems: 12133,
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
        balance: '15346',
        nonce: 29857,
        numTxs: 54921,
        address: '216cefda885101ee3755c90f0f7ec4781a0b6f63',
        pk: Uint8Array [
          121
        ],
        type: {
          pk: 0,
          hash: 0,
          address: 0,
          role: 2
        },
        moniker: 'Fish',
        context: {
          genesisTx: 'Supervisor',
          renaissanceTx: 'Cambridgeshire',
          genesisTime: '2019-02-26T03:30:46.225Z',
          renaissanceTime: '2019-02-26T03:30:46.225Z'
        },
        migratedTo: [
          'Corporate',
          'SAS'
        ],
        migratedFrom: [
          'Gloves',
          'Streamlined'
        ],
        numAssets: 10682,
        stake: {
          totalStakes: '40454',
          totalUnstakes: '80523',
          totalReceivedStakes: '65663',
          recentStakes: {
            items: [
              Uint8Array [
                78
              ],
              Uint8Array [
                93
              ]
            ],
            typeUrl: 'HTTP',
            maxItems: 45952,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                73
              ],
              Uint8Array [
                136
              ]
            ],
            typeUrl: 'Refined Soft Tuna',
            maxItems: 83586,
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
              231
            ]
          ],
          typeUrl: 'Incredible',
          maxItems: 93931,
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
      }
    ],
    assets: [
      {
        address: '906e70f5725afc51ceace8eee0768fbcd3eab534',
        owner: 'algorithm',
        moniker: 'Buckinghamshire',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-26T03:30:46.225Z',
        stake: {
          totalStakes: '74975',
          totalUnstakes: '86418',
          totalReceivedStakes: '37105',
          recentStakes: {
            items: [
              Uint8Array [
                156
              ],
              Uint8Array [
                19
              ]
            ],
            typeUrl: 'Granite',
            maxItems: 64542,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                167
              ],
              Uint8Array [
                250
              ]
            ],
            typeUrl: 'Montana',
            maxItems: 64630,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Investment Account',
          renaissanceTx: 'violet',
          genesisTime: '2019-02-26T03:30:46.226Z',
          renaissanceTime: '2019-02-26T03:30:46.226Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 6,
            address: 1,
            role: 8
          }
        }
      },
      {
        address: 'b6455b282dcba794719cbdb7309b90c5f6f06dda',
        owner: 'District',
        moniker: 'alarm',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-26T03:30:46.226Z',
        stake: {
          totalStakes: '32054',
          totalUnstakes: '81784',
          totalReceivedStakes: '50857',
          recentStakes: {
            items: [
              Uint8Array [
                199
              ],
              Uint8Array [
                248
              ]
            ],
            typeUrl: 'Checking Account',
            maxItems: 49798,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                184
              ],
              Uint8Array [
                184
              ]
            ],
            typeUrl: 'Bedfordshire',
            maxItems: 68571,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Port',
          renaissanceTx: 'Landing',
          genesisTime: '2019-02-26T03:30:46.226Z',
          renaissanceTime: '2019-02-26T03:30:46.226Z'
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
      }
    ],
    stakes: [
      {
        address: 'ec1410e849bc6c581b432e83e85af77cb7c8367c',
        from: 'ba9b4ada1007abb94f58a0ea8260a53ac061aa9c',
        to: '468806ce6119536c308e5c6c08ee13375ec07c1f',
        balance: '32874',
        message: 'transmit',
        context: {
          genesisTx: 'Gorgeous',
          renaissanceTx: 'Alaska',
          genesisTime: '2019-02-26T03:30:46.226Z',
          renaissanceTime: '2019-02-26T03:30:46.226Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 0,
            role: 3
          }
        }
      },
      {
        address: 'f675c92d5381da887828037e1696e0a06d95fc0d',
        from: 'abdcb2e17df77a3895d431c46477818ce125a4c0',
        to: 'f641a5c8ed72b70c59d150091a7369c4079e16af',
        balance: '40823',
        message: 'Product',
        context: {
          genesisTx: 'optimize',
          renaissanceTx: 'cross-platform',
          genesisTime: '2019-02-26T03:30:46.226Z',
          renaissanceTime: '2019-02-26T03:30:46.226Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 1,
            address: 0,
            role: 4
          }
        }
      }
    ],
    context: {
      txHash: 'd76d78932e6f170ea80c06e7dc34e3a3b0b33a9f',
      blockHeight: 50614,
      blockTime: '2019-02-26T03:30:46.226Z',
      totalTxs: 84051,
      txStatistics: {
        numAccountMigrateTxs: 33742,
        numCreateAssetTxs: 42949,
        numConsensusUpgradeTxs: 49740,
        numDeclareTxs: 1556,
        numDeclareFileTxs: 71458,
        numExchangeTxs: 43262,
        numStakeTxs: 69227,
        numSysUpgradeTxs: 48620,
        numTransferTxs: 48277,
        numUpdateAssetTxs: 40500
      },
      txIndex: 97556,
      lastBlockTime: '2019-02-26T03:30:46.226Z'
    },
    appState: {
      address: 'deacee3292b25b1434470370f25fc48eb660ecdc',
      consensus: {
        maxBytes: 66153,
        maxGas: 3685,
        maxValidators: 81685,
        maxCandidates: 46146,
        pubKeyTypes: [
          'Heights',
          'Berkshire'
        ],
        validators: [
          {
            address: 'fc6557ec67850dee0d39f1fb3789f06abfd0ed47',
            power: 60572
          },
          {
            address: '39260faba226a9e9079ace27a87e8c4b8dd3086a',
            power: 60396
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
              dataHash: 'program',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 4,
              dataHash: 'navigating',
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
          totalStakes: '50358',
          totalUnstakes: '21272',
          context: {
            genesisTx: 'JSON',
            renaissanceTx: 'Toys',
            genesisTime: '2019-02-26T03:30:46.227Z',
            renaissanceTime: '2019-02-26T03:30:46.227Z'
          }
        }
      },
      version: 'white',
      dataVersion: 'Customer',
      forgeAppHash: Uint8Array [
        131
      ],
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 14,
          address: 0,
          role: 3
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
    code: 4
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    130
  ],
  type: {
    pk: 1,
    hash: 6,
    address: 0,
    role: 3
  },
  passphrase: 'impactful',
  moniker: 'plum'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  token: 'Music',
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      245
    ],
    pk: Uint8Array [
      153
    ],
    address: '05de9eb1b363d09a8d7d95745de174387b77f299'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: 'ed97301680db1dbbf73fd55e20aa99f58a7abffa'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24
}
});
```

### search

```js
const result = await client.search({
  key: 'synthesize',
  value: 'Route'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  txs: [
    {
      tx: {
        from: '378e5871e85030fc2638df8bf0cf69e62dcfb321',
        nonce: 91268,
        signature: Uint8Array [
          211
        ],
        chainId: 'JSON',
        signatures: [
          {
            key: Uint8Array [
              15
            ],
            value: Uint8Array [
              226
            ]
          },
          {
            key: Uint8Array [
              18
            ],
            value: Uint8Array [
              66
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 2
          }
        }
      },
      height: 18908,
      index: 90650,
      hash: 'a385c908edd8c3ffe1e290f03071dc891724460c',
      tags: [
        {
          key: Uint8Array [
            147
          ],
          value: Uint8Array [
            139
          ]
        },
        {
          key: Uint8Array [
            119
          ],
          value: Uint8Array [
            133
          ]
        }
      ],
      code: 42
    },
    {
      tx: {
        from: '1f7bb0ceb5e8e154a6f62bc36399b438010b932f',
        nonce: 27269,
        signature: Uint8Array [
          219
        ],
        chainId: 'Licensed Fresh Chair',
        signatures: [
          {
            key: Uint8Array [
              144
            ],
            value: Uint8Array [
              203
            ]
          },
          {
            key: Uint8Array [
              72
            ],
            value: Uint8Array [
              213
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 1,
            role: 6
          }
        }
      },
      height: 46639,
      index: 45553,
      hash: '9fb2ccc547c577bc170e334fa9e78c64011fa1f0',
      tags: [
        {
          key: Uint8Array [
            196
          ],
          value: Uint8Array [
            110
          ]
        },
        {
          key: Uint8Array [
            53
          ],
          value: Uint8Array [
            201
          ]
        }
      ],
      code: 21
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: 'b84786f12547079b513f73bd1a8b4f74a5299457',
    nonce: 77971,
    signature: Uint8Array [
      71
    ],
    chainId: 'AI',
    signatures: [
      {
        key: Uint8Array [
          67
        ],
        value: Uint8Array [
          187
        ]
      },
      {
        key: Uint8Array [
          232
        ],
        value: Uint8Array [
          190
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 6,
        address: 0,
        role: 8
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 6,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      137
    ],
    pk: Uint8Array [
      211
    ],
    address: '0234e2e412ec57f768f817d28886e49b83468190'
  },
  token: 'XML',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 9,
  hash: '72162ba76b2f8aff9ddaf377630b2b40e6f47400'
}
});
```

### signData

```js
const result = await client.signData({
  data: Uint8Array [
    238
  ],
  wallet: {
    type: {
      pk: 0,
      hash: 14,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      33
    ],
    pk: Uint8Array [
      125
    ],
    address: '2364f6abc036dda2de12ef892c50b0ffe619a37e'
  },
  token: 'Plaza'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 1,
  signature: Uint8Array [
    13
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    154
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  hash: 'e9b10003199e5712ff722fd6d05b50086ac40b24'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 22,
  filter: 'input'
});

// output
{
  topic: 'Chicken'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'encoding'
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
