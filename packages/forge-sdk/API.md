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
      pk: 0,
      hash: 6,
      address: 0,
      role: 1
    }
  },
  from: '0ce30258eeedb8b14117a25f7ce4f7b87f754600',
  nonce: 35733,
  wallet: {
    type: {
      pk: 0,
      hash: 0,
      address: 1,
      role: 6
    },
    sk: Uint8Array [
      174
    ],
    pk: Uint8Array [
      124
    ],
    address: '1c2b3822c532b96ecfdcd8c48cc2972d3d3172a1'
  },
  token: 'Gorgeous Frozen Pizza'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  tx: {
    from: '44db1b48f642237d5babb5db8b00c47d6462d5df',
    nonce: 7607,
    signature: Uint8Array [
      218
    ],
    chainId: 'Burg',
    signatures: [
      {
        key: Uint8Array [
          225
        ],
        value: Uint8Array [
          134
        ]
      },
      {
        key: Uint8Array [
          36
        ],
        value: Uint8Array [
          11
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 13,
        address: 1,
        role: 8
      }
    }
  }
}
});
```

### createWallet

```js
const result = await client.createWallet({
  passphrase: 'Sleek',
  type: {
    pk: 1,
    hash: 13,
    address: 0,
    role: 4
  },
  moniker: 'Directives'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  token: 'Unbranded Rubber Hat',
  wallet: {
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      99
    ],
    pk: Uint8Array [
      240
    ],
    address: 'cf46d571d741a338ba2af1cfc268f634273854b4'
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
  code: 33,
  wallet: {
    type: {
      pk: 1,
      hash: 1,
      address: 1,
      role: 7
    },
    sk: Uint8Array [
      76
    ],
    pk: Uint8Array [
      8
    ],
    address: '177c477ffd323d37271541ad37ac082591475a26'
  }
}
});
```

### getAccountState

```js
const stream = client.getAccountState({
  address: '4c4f2757e8eab5e017c458edffd2ad3bd884296c',
  keys: [
    'Specialist',
    'Unbranded'
  ],
  appHash: 'f7d3d38fee1826f10ff737c70a3d19a986b1ee9b'
});

// output
{
  code: 16,
  state: {
    balance: '84834',
    nonce: 37873,
    numTxs: 61393,
    address: '89e62e21c456ea3c4fa95b5687f23e1b18b9b589',
    pk: Uint8Array [
      65
    ],
    type: {
      pk: 1,
      hash: 0,
      address: 0,
      role: 3
    },
    moniker: 'Berkshire',
    context: {
      genesisTx: 'installation',
      renaissanceTx: 'Auto Loan Account',
      genesisTime: '2019-02-22T21:49:25.188Z',
      renaissanceTime: '2019-02-22T21:49:25.188Z'
    },
    migratedTo: [
      'solid state',
      'Pizza'
    ],
    migratedFrom: [
      'Clothing',
      'Savings Account'
    ],
    numAssets: 18658,
    stake: {
      totalStakes: '34692',
      totalUnstakes: '72542',
      totalReceivedStakes: '42443',
      recentStakes: {
        items: [
          Uint8Array [
            149
          ],
          Uint8Array [
            217
          ]
        ],
        typeUrl: 'architectures',
        maxItems: 57068,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            150
          ],
          Uint8Array [
            151
          ]
        ],
        typeUrl: 'Sharable',
        maxItems: 39158,
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
          130
        ]
      ],
      typeUrl: 'Concrete',
      maxItems: 38597,
      circular: undefined,
      fifo: undefined
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 7,
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
  senderAddress: 'quantifying',
  itx: {
    moniker: 'Lodge',
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 14,
        address: 0,
        role: 8
      }
    },
    readonly: undefined,
    expiredAt: '2019-02-22T21:49:25.189Z'
  },
  walletType: {
    pk: 1,
    hash: 6,
    address: 1,
    role: 7
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 40,
  assetAddress: 'data-warehouse'
}
});
```

### getAssetState

```js
const stream = client.getAssetState({
  address: 'b527a9fcdd0eb59a7e61fad0e7b90dba4b8d0c18',
  keys: [
    'ivory',
    'Path'
  ],
  appHash: 'edd4924b8235554cfa70faaeab72cefa324238f4'
});

// output
{
  code: 7,
  state: {
    address: '0950c60ac972f06bdb85e5c3cb53a7ffefe7f4e9',
    owner: 'indexing',
    moniker: 'Product',
    readonly: undefined,
    activated: undefined,
    expiredAt: '2019-02-22T21:49:25.189Z',
    stake: {
      totalStakes: '60901',
      totalUnstakes: '61514',
      totalReceivedStakes: '8361',
      recentStakes: {
        items: [
          Uint8Array [
            96
          ],
          Uint8Array [
            206
          ]
        ],
        typeUrl: 'quantify',
        maxItems: 33558,
        circular: undefined,
        fifo: undefined
      },
      recentReceivedStakes: {
        items: [
          Uint8Array [
            73
          ],
          Uint8Array [
            173
          ]
        ],
        typeUrl: 'Refined',
        maxItems: 56514,
        circular: undefined,
        fifo: undefined
      }
    },
    context: {
      genesisTx: 'Light',
      renaissanceTx: 'Future',
      genesisTime: '2019-02-22T21:49:25.190Z',
      renaissanceTime: '2019-02-22T21:49:25.190Z'
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 1,
        role: 2
      }
    }
  }
}
```

### getAssets

```js
const result = await client.getAssets({
  paging: {
    cursor: 'Parkways',
    size: 25075,
    order: [
      {
        field: 'Kentucky',
        type: 'SAS'
      },
      {
        field: 'SMTP',
        type: 'hacking'
      }
    ]
  },
  ownerAddress: 'synthesizing'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 22,
  page: {
    cursor: 'pink',
    next: undefined,
    total: 6190
  },
  assets: [
    {
      address: '5407103ecbbb12e54d72d9c835eb837eb76b32ca',
      owner: 'hack',
      genesisTime: '1080p',
      renaissanceTime: 'Generic',
      moniker: 'Security',
      readonly: undefined
    },
    {
      address: '397a16a46347e69bf24ae4786ab7eed76bdfe504',
      owner: '1080p',
      genesisTime: 'Tonga',
      renaissanceTime: 'global',
      moniker: 'Visionary',
      readonly: undefined
    }
  ]
}
});
```

### getBlock

```js
const stream = client.getBlock({
  height: 2140
});

// output
{
  code: 35,
  block: {
    height: 25055,
    numTxs: 87907,
    time: '2019-02-22T21:49:25.191Z',
    appHash: '8913197bc41183bc77fb672d31769a3be471a451',
    proposer: 'b45d31c58f50ddeaef6cddffe1d52ee723181ee6',
    txs: [
      {
        tx: {
          from: '9cb5ebe300c02c1d57f63bc6338e3d75abf039dc',
          nonce: 53377,
          signature: Uint8Array [
            93
          ],
          chainId: 'Equatorial Guinea',
          signatures: [
            {
              key: Uint8Array [
                90
              ],
              value: Uint8Array [
                136
              ]
            },
            {
              key: Uint8Array [
                38
              ],
              value: Uint8Array [
                220
              ]
            }
          ],
          itx: {
            type: 'WalletType',
            value: {
              pk: 0,
              hash: 7,
              address: 0,
              role: 4
            }
          }
        },
        height: 39375,
        index: 82965,
        hash: '920a1912b6297b940dd5c19d2b00e7630aada5da',
        tags: [
          {
            key: Uint8Array [
              202
            ],
            value: Uint8Array [
              98
            ]
          },
          {
            key: Uint8Array [
              139
            ],
            value: Uint8Array [
              77
            ]
          }
        ],
        code: 16
      },
      {
        tx: {
          from: '04c41ed76c0b829c15906fbd42ea46da6a02c7aa',
          nonce: 38232,
          signature: Uint8Array [
            100
          ],
          chainId: 'Principal',
          signatures: [
            {
              key: Uint8Array [
                56
              ],
              value: Uint8Array [
                164
              ]
            },
            {
              key: Uint8Array [
                37
              ],
              value: Uint8Array [
                83
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
        height: 22083,
        index: 68794,
        hash: 'adad339ec40a7fa5510951bff5281ea8c22ffafb',
        tags: [
          {
            key: Uint8Array [
              120
            ],
            value: Uint8Array [
              38
            ]
          },
          {
            key: Uint8Array [
              204
            ],
            value: Uint8Array [
              155
            ]
          }
        ],
        code: 8
      }
    ],
    totalTxs: 39339
  }
}
```

### getBlocks

```js
const result = await client.getBlocks({
  paging: {
    cursor: 'hack',
    size: 85205,
    order: [
      {
        field: 'Refined',
        type: 'Indian Rupee'
      },
      {
        field: 'copying',
        type: 'implement'
      }
    ]
  },
  minHeight: 58114,
  maxHeight: 32658,
  emptyExcluded: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 6,
  page: {
    cursor: 'matrices',
    next: undefined,
    total: 94178
  },
  blocks: [
    {
      height: 33678,
      numTxs: 5380,
      time: '2019-02-22T21:49:25.192Z',
      appHash: '1c78dc4dfe2cd8de4bb0ea6d42c69bd86ffb457c',
      proposer: '237ae88f1d22fcb422dadd6640df9debecc28da2',
      txs: [
        {
          tx: {
            from: '38b2cc8c60cd9bfbd9e5a58c5c9d323629ce26b0',
            nonce: 3122,
            signature: Uint8Array [
              200
            ],
            chainId: 'Pound Sterling',
            signatures: [
              {
                key: Uint8Array [
                  43
                ],
                value: Uint8Array [
                  181
                ]
              },
              {
                key: Uint8Array [
                  9
                ],
                value: Uint8Array [
                  54
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
          height: 75745,
          index: 38331,
          hash: 'a8d4334cab72c48edeffa4181ebdba9ef2a09434',
          tags: [
            {
              key: Uint8Array [
                207
              ],
              value: Uint8Array [
                126
              ]
            },
            {
              key: Uint8Array [
                235
              ],
              value: Uint8Array [
                134
              ]
            }
          ],
          code: 41
        },
        {
          tx: {
            from: '23a036470d1dfff4af57c0a975bda4f5001b6eb0',
            nonce: 99919,
            signature: Uint8Array [
              51
            ],
            chainId: 'Planner',
            signatures: [
              {
                key: Uint8Array [
                  148
                ],
                value: Uint8Array [
                  34
                ]
              },
              {
                key: Uint8Array [
                  197
                ],
                value: Uint8Array [
                  253
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 7,
                address: 1,
                role: 6
              }
            }
          },
          height: 60684,
          index: 74178,
          hash: '1e2d8a94122c0b8f656bccecef898efded68c4b9',
          tags: [
            {
              key: Uint8Array [
                125
              ],
              value: Uint8Array [
                233
              ]
            },
            {
              key: Uint8Array [
                15
              ],
              value: Uint8Array [
                240
              ]
            }
          ],
          code: 2
        }
      ],
      totalTxs: 85082
    },
    {
      height: 93720,
      numTxs: 12156,
      time: '2019-02-22T21:49:25.193Z',
      appHash: '67096745ff33a1b89aed2035523d272c82042227',
      proposer: '0e373f78592e91a00125600f52dadddc994d207b',
      txs: [
        {
          tx: {
            from: 'eba57ce3394ba52594ad0b1c08191a419eae752a',
            nonce: 15567,
            signature: Uint8Array [
              118
            ],
            chainId: 'drive',
            signatures: [
              {
                key: Uint8Array [
                  104
                ],
                value: Uint8Array [
                  19
                ]
              },
              {
                key: Uint8Array [
                  249
                ],
                value: Uint8Array [
                  132
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 1,
                hash: 0,
                address: 1,
                role: 5
              }
            }
          },
          height: 56173,
          index: 14783,
          hash: '1c03544a08815c128020fcff5755fbfac09eec65',
          tags: [
            {
              key: Uint8Array [
                230
              ],
              value: Uint8Array [
                57
              ]
            },
            {
              key: Uint8Array [
                143
              ],
              value: Uint8Array [
                107
              ]
            }
          ],
          code: 26
        },
        {
          tx: {
            from: 'a0474dcd187908b651853a087f789ef92bcf9575',
            nonce: 16912,
            signature: Uint8Array [
              63
            ],
            chainId: 'Ohio',
            signatures: [
              {
                key: Uint8Array [
                  84
                ],
                value: Uint8Array [
                  255
                ]
              },
              {
                key: Uint8Array [
                  213
                ],
                value: Uint8Array [
                  110
                ]
              }
            ],
            itx: {
              type: 'WalletType',
              value: {
                pk: 0,
                hash: 13,
                address: 1,
                role: 5
              }
            }
          },
          height: 64387,
          index: 26972,
          hash: '291ab7a9984ff1b572d41216e4f170a1703520dc',
          tags: [
            {
              key: Uint8Array [
                214
              ],
              value: Uint8Array [
                138
              ]
            },
            {
              key: Uint8Array [
                94
              ],
              value: Uint8Array [
                185
              ]
            }
          ],
          code: 39
        }
      ],
      totalTxs: 63188
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
  code: 32,
  info: {
    id: 'Loop',
    network: 'Personal Loan Account',
    moniker: 'Savings Account',
    consensusVersion: 'robust',
    synced: undefined,
    appHash: '484ff64e62d97fc26f1c238f33760e95a966fd91',
    blockHash: Uint8Array [
      37
    ],
    blockHeight: 59381,
    blockTime: '2019-02-22T21:49:25.194Z',
    address: 'd890d8d86d9697a73f788a141ca167d905dac38b',
    votingPower: 69422,
    totalTxs: 94132,
    version: 'integrated',
    dataVersion: 'systems',
    forgeAppsVersion: {
      'function randomWord (type) {\n\n    var wordMethods = [\n    \'commerce.department\',\n    \'commerce.productName\',\n    \'commerce.productAdjective\',\n    \'commerce.productMaterial\',\n    \'commerce.product\',\n    \'commerce.color\',\n\n    \'company.catchPhraseAdjective\',\n    \'company.catchPhraseDescriptor\',\n    \'company.catchPhraseNoun\',\n    \'company.bsAdjective\',\n    \'company.bsBuzz\',\n    \'company.bsNoun\',\n    \'address.streetSuffix\',\n    \'address.county\',\n    \'address.country\',\n    \'address.state\',\n\n    \'finance.accountName\',\n    \'finance.transactionType\',\n    \'finance.currencyName\',\n\n    \'hacker.noun\',\n    \'hacker.verb\',\n    \'hacker.adjective\',\n    \'hacker.ingverb\',\n    \'hacker.abbreviation\',\n\n    \'name.jobDescriptor\',\n    \'name.jobArea\',\n    \'name.jobType\'];\n\n    // randomly pick from the many faker methods that can generate words\n    var randomWordMethod = faker.random.arrayElement(wordMethods);\n    return faker.fake(\'{{\' + randomWordMethod + \'}}\');\n\n  }': 'California'
    },
    supportedTxs: [
      'invoice',
      'Optimization'
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
  code: 25,
  config: 'Bangladesh'
}
});
```

### getForgeState

```js
const result = await client.getForgeState({
  keys: [
    'protocol',
    'Music'
  ],
  appHash: '46d241ddd3e47552b94761d54343b43cb103f214'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 37,
  state: {
    address: 'a3839aab9d581900d924eddcfbd47615f04e1aef',
    consensus: {
      maxBytes: 21347,
      maxGas: 21010,
      maxValidators: 21399,
      maxCandidates: 77670,
      pubKeyTypes: [
        'IB',
        'program'
      ],
      validators: [
        {
          address: '5adbf40c78d0571cddf3d219e7b2a1ad72a283a5',
          power: 37177
        },
        {
          address: '3c712e6aadff85a1bbc87d116310387b850563e8',
          power: 25877
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
            dataHash: 'Circles',
            actions: [
              undefined,
              undefined
            ]
          },
          {
            type: 11,
            dataHash: 'Assimilated',
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
        totalStakes: '87536',
        totalUnstakes: '65220',
        context: {
          genesisTx: 'application',
          renaissanceTx: 'South Carolina',
          genesisTime: '2019-02-22T21:49:25.195Z',
          renaissanceTime: '2019-02-22T21:49:25.195Z'
        }
      }
    },
    version: 'Personal Loan Account',
    dataVersion: 'Awesome',
    forgeAppHash: Uint8Array [
      50
    ],
    rootHashes: {
      account: Uint8Array [
        109
      ],
      asset: Uint8Array [
        29
      ],
      receipt: Uint8Array [
        194
      ]
    },
    data: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 14,
        address: 1,
        role: 3
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
    startDate: 'multi-byte',
    endDate: 'deposit'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  forgeStatistics: {
    numBlocks: [
      13212,
      26422
    ],
    numTxs: [
      2400,
      86226
    ],
    numStakes: [
      '45351',
      '2187'
    ],
    numValidators: [
      9256,
      81735
    ],
    numAccountMigrateTxs: [
      94980,
      47513
    ],
    numCreateAssetTxs: [
      65305,
      94384
    ],
    numConsensusUpgradeTxs: [
      38256,
      11968
    ],
    numDeclareTxs: [
      31100,
      305
    ],
    numDeclareFileTxs: [
      40457,
      87458
    ],
    numExchangeTxs: [
      10923,
      19086
    ],
    numStakeTxs: [
      7780,
      60212
    ],
    numSysUpgradeTxs: [
      18987,
      88816
    ],
    numTransferTxs: [
      90284,
      75013
    ],
    numUpdateAssetTxs: [
      18543,
      71816
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
  code: 5,
  netInfo: {
    listening: undefined,
    listeners: [
      'Borders',
      'Future'
    ],
    nPeers: 31527,
    peers: [
      {
        nodeInfo: {
          id: 'USB',
          network: 'Dynamic',
          consensusVersion: 'index',
          moniker: 'Assurance',
          ip: 'Keyboard',
          geoInfo: {
            city: 'magenta',
            country: 'Ergonomic',
            latitude: 80042.87,
            longitude: 3993.02
          }
        }
      },
      {
        nodeInfo: {
          id: 'whiteboard',
          network: 'Multi-layered',
          consensusVersion: 'CFA Franc BEAC',
          moniker: 'withdrawal',
          ip: 'backing up',
          geoInfo: {
            city: 'infomediaries',
            country: 'Stream',
            latitude: 27141.89,
            longitude: 50687.15
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
  address: '1fd26e3ea673914fc41f56f94e476334a25a39e0',
  keys: [
    'Designer',
    'synthesize'
  ],
  appHash: 'e5f4afc2492792cd7a5cef57632a8da10c71312a'
});

// output
{
  code: 27,
  state: {
    address: 'b378ee0c13cb384c6335f62030584b63b7029c88',
    from: 'b1d6fa34a278a6285f1cb44a50f7fcbf3d472748',
    to: 'f8a0767a56baaa0bcdc49742a76e5b696fc87425',
    balance: '29716',
    message: 'AI',
    context: {
      genesisTx: 'Licensed',
      renaissanceTx: 'deposit',
      genesisTime: '2019-02-22T21:49:25.197Z',
      renaissanceTime: '2019-02-22T21:49:25.197Z'
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
  }
}
```

### getStakes

```js
const result = await client.getStakes({
  paging: {
    cursor: 'Extended',
    size: 35797,
    order: [
      {
        field: 'exploit',
        type: 'bypassing'
      },
      {
        field: 'Assimilated',
        type: 'Gorgeous Steel Hat'
      }
    ]
  },
  addressFilter: {
    sender: 'Movies',
    receiver: 'Gorgeous Steel Towels'
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'productize',
    next: undefined,
    total: 9588
  },
  stakes: [
    {
      address: 'd2cc8cb7e80b87ba12b33bb5623a085010cbd5f1',
      balance: '55132',
      sender: 'virtual',
      receiver: 'SSL',
      genesisTime: 'RAM',
      renaissanceTime: 'Tuna',
      message: 'info-mediaries',
      type: 79060
    },
    {
      address: 'a8d7ca2274f9221035b2336507e78085bd7e23a0',
      balance: '19465',
      sender: 'Rubber',
      receiver: 'generating',
      genesisTime: 'deposit',
      renaissanceTime: 'Handcrafted Steel Salad',
      message: 'Administrator',
      type: 92113
    }
  ]
}
});
```

### getTopAccounts

```js
const result = await client.getTopAccounts({
  paging: {
    cursor: 'Developer',
    size: 63558,
    order: [
      {
        field: 'Bedfordshire',
        type: 'system'
      },
      {
        field: 'Mountain',
        type: 'Books'
      }
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 27,
  page: {
    cursor: 'Credit Card Account',
    next: undefined,
    total: 35186
  },
  accounts: [
    {
      address: '8ecd6687d4fe37b9ebc36f44e3da380397c43436',
      balance: '94887',
      numAssets: 91458,
      numTxs: 78410,
      nonce: 57845,
      genesisTime: 'Taka',
      renaissanceTime: 'Soft',
      moniker: 'Generic',
      migratedFrom: 'Central',
      migratedTo: 'Berkshire',
      totalReceivedStakes: '75504',
      totalStakes: '1617',
      totalUnstakes: '75590'
    },
    {
      address: 'f9f75595d7b4ee91d7be1318b236d3cf5c8f7cf0',
      balance: '27841',
      numAssets: 86395,
      numTxs: 91396,
      nonce: 77126,
      genesisTime: 'Berkshire',
      renaissanceTime: 'Refined',
      moniker: 'Direct',
      migratedFrom: 'compress',
      migratedTo: 'eco-centric',
      totalReceivedStakes: '14751',
      totalStakes: '41901',
      totalUnstakes: '54253'
    }
  ]
}
});
```

### getTx

```js
const stream = client.getTx({
  hash: '4ea01b79cdd9b4544d8a8d2dbdc6de9d28bdbdb8'
});

// output
{
  code: 31,
  info: {
    tx: {
      from: '1eb9eb08743733f5db2d0fd3add5612fbf999802',
      nonce: 35700,
      signature: Uint8Array [
        237
      ],
      chainId: 'mint green',
      signatures: [
        {
          key: Uint8Array [
            219
          ],
          value: Uint8Array [
            248
          ]
        },
        {
          key: Uint8Array [
            107
          ],
          value: Uint8Array [
            139
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 13,
          address: 0,
          role: 1
        }
      }
    },
    height: 46084,
    index: 56564,
    hash: '616cafe0fd80514dfa2010dadad512f70e3f03e5',
    tags: [
      {
        key: Uint8Array [
          64
        ],
        value: Uint8Array [
          111
        ]
      },
      {
        key: Uint8Array [
          55
        ],
        value: Uint8Array [
          100
        ]
      }
    ],
    code: 5
  }
}
```

### getUnconfirmedTxs

```js
const result = await client.getUnconfirmedTxs({
  limit: 73555
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  unconfirmedTxs: {
    nTxs: 10177,
    txs: [
      {
        from: '7803bae6054d175239e2f28f9e3f5229d564042d',
        nonce: 92762,
        signature: Uint8Array [
          65
        ],
        chainId: 'Texas',
        signatures: [
          {
            key: Uint8Array [
              20
            ],
            value: Uint8Array [
              88
            ]
          },
          {
            key: Uint8Array [
              21
            ],
            value: Uint8Array [
              100
            ]
          }
        ],
        itx: {
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
        from: '6c60e4e6351fc3a59f6d767f18a208b58263fc43',
        nonce: 65614,
        signature: Uint8Array [
          76
        ],
        chainId: 'Investment Account',
        signatures: [
          {
            key: Uint8Array [
              233
            ],
            value: Uint8Array [
              31
            ]
          },
          {
            key: Uint8Array [
              126
            ],
            value: Uint8Array [
              252
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 0,
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
  code: 7,
  validatorsInfo: {
    blockHeight: 17460,
    validators: [
      {
        address: '82e4ef5fc676aa317fe7a29290a3c579628290ba',
        pubKey: {
          type: 'Saint Pierre and Miquelon',
          data: Uint8Array [
            105
          ]
        },
        votingPower: 92128,
        proposerPriority: 'Principal',
        name: 'customer loyalty'
      },
      {
        address: '1850f75398cfe9a9113ec0fceefbd45ea73cb13c',
        pubKey: {
          type: 'New York',
          data: Uint8Array [
            123
          ]
        },
        votingPower: 99319,
        proposerPriority: 'bandwidth',
        name: 'transmit'
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
    cursor: 'Frozen',
    size: 87126,
    order: [
      {
        field: 'Generic',
        type: 'out-of-the-box'
      },
      {
        field: 'Avon',
        type: 'Ohio'
      }
    ]
  },
  timeFilter: {
    startDateTime: 'invoice',
    endDateTime: 'Plastic'
  },
  addressFilter: {
    sender: 'productize',
    receiver: 'web services'
  },
  typeFilter: {
    types: [
      'SSL',
      'deposit'
    ]
  }
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 16,
  page: {
    cursor: 'ROI',
    next: undefined,
    total: 47282
  },
  transactions: [
    {
      hash: 'c9952dee898c0c45853a7ff5022c5fadf67f5d67',
      sender: 'Auto Loan Account',
      receiver: 'Iowa',
      time: 'Shirt',
      type: 'Credit Card Account',
      tx: {
        from: '1ad6e0ab0fa98812b0fb207a00a49059ffd54e76',
        nonce: 15138,
        signature: Uint8Array [
          44
        ],
        chainId: 'Garden',
        signatures: [
          {
            key: Uint8Array [
              233
            ],
            value: Uint8Array [
              244
            ]
          },
          {
            key: Uint8Array [
              124
            ],
            value: Uint8Array [
              184
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1,
            role: 2
          }
        }
      }
    },
    {
      hash: '8929adab52d1deb89d20f45c053338c1a92d2be5',
      sender: 'Kiribati',
      receiver: 'Home',
      time: 'National',
      type: 'e-enable',
      tx: {
        from: '466da3294473b05dbcda7f122fdb0bb0d322eed3',
        nonce: 38118,
        signature: Uint8Array [
          23
        ],
        chainId: 'Fantastic',
        signatures: [
          {
            key: Uint8Array [
              244
            ],
            value: Uint8Array [
              190
            ]
          },
          {
            key: Uint8Array [
              31
            ],
            value: Uint8Array [
              242
            ]
          }
        ],
        itx: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 8
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
  code: 27,
  address: '130260da0cab977c9e188d27359de3f5c2346c3a'
}
```

### loadFile

```js
const stream = client.loadFile({
  hash: 'c2e885339744250779142a76e2d66083b4c5415b'
});

// output
{
  code: 33,
  chunk: Uint8Array [
    172
  ]
}
```

### loadWallet

```js
const result = await client.loadWallet({
  address: '700e1d03ade5ce022db0f8128955b3b9a65ab4e4',
  passphrase: 'Cape Verde'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  token: 'EXE',
  wallet: {
    type: {
      pk: 0,
      hash: 7,
      address: 1,
      role: 2
    },
    sk: Uint8Array [
      100
    ],
    pk: Uint8Array [
      150
    ],
    address: 'ad216195d8f0f67c5bef625928fe51dcec1201e3'
  }
}
});
```

### multisig

```js
const result = await client.multisig({
  tx: {
    from: '485436d375990519671392ea299656ca1e7aa7c0',
    nonce: 76715,
    signature: Uint8Array [
      252
    ],
    chainId: 'payment',
    signatures: [
      {
        key: Uint8Array [
          244
        ],
        value: Uint8Array [
          70
        ]
      },
      {
        key: Uint8Array [
          50
        ],
        value: Uint8Array [
          48
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 0,
        address: 1,
        role: 3
      }
    }
  },
  wallet: {
    type: {
      pk: 1,
      hash: 14,
      address: 0,
      role: 2
    },
    sk: Uint8Array [
      240
    ],
    pk: Uint8Array [
      173
    ],
    address: 'bed630dc293988763a0a160ef44e8062bb635813'
  },
  token: 'Marshall Islands'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 17,
  tx: {
    from: 'dd58b6fa9c2d07f994b042cd6e07223ba90284a8',
    nonce: 81066,
    signature: Uint8Array [
      43
    ],
    chainId: 'copying',
    signatures: [
      {
        key: Uint8Array [
          67
        ],
        value: Uint8Array [
          28
        ]
      },
      {
        key: Uint8Array [
          132
        ],
        value: Uint8Array [
          185
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 1,
        hash: 1,
        address: 0,
        role: 0
      }
    }
  }
}
});
```

### pinFile

```js
const result = await client.pinFile({
  hash: '8317d2217f801225c147c653534697ca76521cdd'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 0
}
});
```

### process

```js
const stream = client.process({
  verifyTx: {
    tx: {
      from: '7bc1a2b2aa36de14903214b2471f4f129b762396',
      nonce: 90831,
      signature: Uint8Array [
        138
      ],
      chainId: 'Tonga',
      signatures: [
        {
          key: Uint8Array [
            131
          ],
          value: Uint8Array [
            185
          ]
        },
        {
          key: Uint8Array [
            180
          ],
          value: Uint8Array [
            205
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
    states: [
      {
        balance: '57800',
        nonce: 11999,
        numTxs: 98395,
        address: 'cc7b4923bbadeca70cc4339989a90e1197d83f0a',
        pk: Uint8Array [
          223
        ],
        type: {
          pk: 0,
          hash: 6,
          address: 0,
          role: 2
        },
        moniker: 'Central',
        context: {
          genesisTx: 'Savings Account',
          renaissanceTx: 'disintermediate',
          genesisTime: '2019-02-22T21:49:25.204Z',
          renaissanceTime: '2019-02-22T21:49:25.204Z'
        },
        migratedTo: [
          'utilize',
          'Global'
        ],
        migratedFrom: [
          'Data',
          'Money Market Account'
        ],
        numAssets: 35010,
        stake: {
          totalStakes: '48685',
          totalUnstakes: '80631',
          totalReceivedStakes: '86105',
          recentStakes: {
            items: [
              Uint8Array [
                145
              ],
              Uint8Array [
                59
              ]
            ],
            typeUrl: 'upward-trending',
            maxItems: 80480,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                16
              ],
              Uint8Array [
                232
              ]
            ],
            typeUrl: 'database',
            maxItems: 85785,
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
              115
            ]
          ],
          typeUrl: 'Gourde US Dollar',
          maxItems: 43081,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 14,
            address: 0,
            role: 5
          }
        }
      },
      {
        balance: '15297',
        nonce: 52842,
        numTxs: 38344,
        address: '4fa713c7a05facb49b1f77d752587060cfeedbf1',
        pk: Uint8Array [
          191
        ],
        type: {
          pk: 0,
          hash: 6,
          address: 1,
          role: 2
        },
        moniker: 'Practical Wooden Shirt',
        context: {
          genesisTx: 'forecast',
          renaissanceTx: 'bandwidth',
          genesisTime: '2019-02-22T21:49:25.204Z',
          renaissanceTime: '2019-02-22T21:49:25.204Z'
        },
        migratedTo: [
          'haptic',
          'Handcrafted'
        ],
        migratedFrom: [
          'Quality',
          'Virtual'
        ],
        numAssets: 50930,
        stake: {
          totalStakes: '51979',
          totalUnstakes: '76840',
          totalReceivedStakes: '2108',
          recentStakes: {
            items: [
              Uint8Array [
                173
              ],
              Uint8Array [
                227
              ]
            ],
            typeUrl: 'interfaces',
            maxItems: 46634,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                106
              ],
              Uint8Array [
                144
              ]
            ],
            typeUrl: 'gold',
            maxItems: 69570,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              169
            ],
            Uint8Array [
              37
            ]
          ],
          typeUrl: 'PCI',
          maxItems: 78763,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 0,
            address: 1,
            role: 7
          }
        }
      }
    ],
    assets: [
      {
        address: 'fede4850ee0caaf30ae28a635d1962b60e791acd',
        owner: 'optical',
        moniker: 'Tasty Fresh Shirt',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-22T21:49:25.205Z',
        stake: {
          totalStakes: '69517',
          totalUnstakes: '6027',
          totalReceivedStakes: '20729',
          recentStakes: {
            items: [
              Uint8Array [
                82
              ],
              Uint8Array [
                45
              ]
            ],
            typeUrl: 'Metal',
            maxItems: 44007,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                107
              ],
              Uint8Array [
                184
              ]
            ],
            typeUrl: 'markets',
            maxItems: 26838,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'program',
          renaissanceTx: 'copying',
          genesisTime: '2019-02-22T21:49:25.205Z',
          renaissanceTime: '2019-02-22T21:49:25.205Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 0,
            role: 6
          }
        }
      },
      {
        address: '53c9823c7ee8b0cea2d06b0371801cfff425508b',
        owner: 'indexing',
        moniker: 'SMTP',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-22T21:49:25.205Z',
        stake: {
          totalStakes: '91123',
          totalUnstakes: '72938',
          totalReceivedStakes: '56252',
          recentStakes: {
            items: [
              Uint8Array [
                195
              ],
              Uint8Array [
                58
              ]
            ],
            typeUrl: 'Architect',
            maxItems: 11414,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                36
              ],
              Uint8Array [
                147
              ]
            ],
            typeUrl: 'Balboa US Dollar',
            maxItems: 54021,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Handmade Granite Shirt',
          renaissanceTx: 'HDD',
          genesisTime: '2019-02-22T21:49:25.205Z',
          renaissanceTime: '2019-02-22T21:49:25.205Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 1,
            role: 0
          }
        }
      }
    ],
    stakes: [
      {
        address: 'ff4734c541ba2dbdfc5e0b554355215e564d3f5c',
        from: '43cc100bf1bf041f8d6c60409cc982714e4f8dc9',
        to: 'e595b13a65ab45a978a153bbc2310e5c87475274',
        balance: '50951',
        message: 'Creative',
        context: {
          genesisTx: 'Licensed Soft Sausages',
          renaissanceTx: 'Russian Federation',
          genesisTime: '2019-02-22T21:49:25.205Z',
          renaissanceTime: '2019-02-22T21:49:25.205Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 7,
            address: 0,
            role: 5
          }
        }
      },
      {
        address: '2aa2c61cc6bdcba120f36bf111ae471e41cc7581',
        from: '5cd89c410beaa6cae4e8ae86962fe9f2bf990ae4',
        to: '594cabd752cfb8368afef9282c434dc2ee1ae979',
        balance: '53921',
        message: 'Accountability',
        context: {
          genesisTx: 'support',
          renaissanceTx: 'turn-key',
          genesisTime: '2019-02-22T21:49:25.206Z',
          renaissanceTime: '2019-02-22T21:49:25.206Z'
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
    ],
    context: {
      txHash: '6f462f80fff46a782c8e431a14e09ee83ef8bb43',
      blockHeight: 28289,
      blockTime: '2019-02-22T21:49:25.206Z',
      totalTxs: 70353,
      txStatistics: {
        numAccountMigrateTxs: 3643,
        numCreateAssetTxs: 10836,
        numConsensusUpgradeTxs: 48047,
        numDeclareTxs: 88522,
        numDeclareFileTxs: 68123,
        numExchangeTxs: 64175,
        numStakeTxs: 67654,
        numSysUpgradeTxs: 69476,
        numTransferTxs: 6508,
        numUpdateAssetTxs: 31458
      },
      txIndex: 71039
    },
    appState: {
      address: '69e19448f2165ba5f70fbc292b7365a2914269ac',
      consensus: {
        maxBytes: 18210,
        maxGas: 95995,
        maxValidators: 57899,
        maxCandidates: 80973,
        pubKeyTypes: [
          'Common',
          'program'
        ],
        validators: [
          {
            address: '7056a014cd17f165652675e85d7d5e14a35a0d6b',
            power: 74434
          },
          {
            address: '520974085cd3acbef0b93b351fe290d9fd91e3df',
            power: 59253
          }
        ],
        validatorChanged: undefined,
        paramChanged: undefined
      },
      tasks: {
        'function (options) {\n\n    if (typeof options === "number") {\n      options = {\n        max: options\n      };\n    }\n\n    options = options || {};\n\n    if (typeof options.min === "undefined") {\n      options.min = 0;\n    }\n\n    if (typeof options.max === "undefined") {\n      options.max = 99999;\n    }\n    if (typeof options.precision === "undefined") {\n      options.precision = 1;\n    }\n\n    // Make the range inclusive of the max value\n    var max = options.max;\n    if (max >= 0) {\n      max += options.precision;\n    }\n\n    var randomNumber = Math.floor(\n      mersenne.rand(max / options.precision, options.min / options.precision));\n    // Workaround problem in Float point arithmetics for e.g. 6681493 / 0.01\n    randomNumber = randomNumber / (1 / options.precision);\n\n    return randomNumber;\n\n  }': {
          item: [
            {
              type: 14,
              dataHash: 'PNG',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 11,
              dataHash: 'connect',
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
          totalStakes: '16199',
          totalUnstakes: '22768',
          context: {
            genesisTx: 'Mozambique',
            renaissanceTx: 'circuit',
            genesisTime: '2019-02-22T21:49:25.207Z',
            renaissanceTime: '2019-02-22T21:49:25.207Z'
          }
        }
      },
      version: 'methodology',
      dataVersion: 'backing up',
      forgeAppHash: Uint8Array [
        68
      ],
      rootHashes: {
        account: Uint8Array [
          63
        ],
        asset: Uint8Array [
          120
        ],
        receipt: Uint8Array [
          10
        ]
      },
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 7,
          address: 1,
          role: 4
        }
      }
    }
  }
});

// output
{
  verifyTx: {
    code: 26
  }
}
```

### processOne

```js
const result = await client.processOne({
  verifyTx: {
    tx: {
      from: '4daf8080207b66852cdecaab379f3ba2caa21b31',
      nonce: 61955,
      signature: Uint8Array [
        153
      ],
      chainId: 'Small Wooden Salad',
      signatures: [
        {
          key: Uint8Array [
            235
          ],
          value: Uint8Array [
            219
          ]
        },
        {
          key: Uint8Array [
            180
          ],
          value: Uint8Array [
            227
          ]
        }
      ],
      itx: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 7,
          address: 0,
          role: 7
        }
      }
    },
    states: [
      {
        balance: '47823',
        nonce: 29428,
        numTxs: 66177,
        address: '3686f349d1c7aa9d2971b2c6f177115775199733',
        pk: Uint8Array [
          175
        ],
        type: {
          pk: 1,
          hash: 0,
          address: 1,
          role: 3
        },
        moniker: 'plum',
        context: {
          genesisTx: 'Cambridgeshire',
          renaissanceTx: 'application',
          genesisTime: '2019-02-22T21:49:25.208Z',
          renaissanceTime: '2019-02-22T21:49:25.208Z'
        },
        migratedTo: [
          'Iraqi Dinar',
          'capacitor'
        ],
        migratedFrom: [
          'deposit',
          'reboot'
        ],
        numAssets: 31502,
        stake: {
          totalStakes: '86323',
          totalUnstakes: '73130',
          totalReceivedStakes: '93337',
          recentStakes: {
            items: [
              Uint8Array [
                149
              ],
              Uint8Array [
                168
              ]
            ],
            typeUrl: 'Soft',
            maxItems: 4671,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                247
              ],
              Uint8Array [
                44
              ]
            ],
            typeUrl: 'JSON',
            maxItems: 45475,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              196
            ],
            Uint8Array [
              5
            ]
          ],
          typeUrl: 'firewall',
          maxItems: 7230,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 1,
            address: 1,
            role: 4
          }
        }
      },
      {
        balance: '41502',
        nonce: 43316,
        numTxs: 95667,
        address: '6a222ec170648b6c30ad1a1e4ce178d29e7a13bd',
        pk: Uint8Array [
          112
        ],
        type: {
          pk: 1,
          hash: 14,
          address: 1,
          role: 7
        },
        moniker: 'Avon',
        context: {
          genesisTx: 'EXE',
          renaissanceTx: 'Russian Ruble',
          genesisTime: '2019-02-22T21:49:25.208Z',
          renaissanceTime: '2019-02-22T21:49:25.208Z'
        },
        migratedTo: [
          'bus',
          'haptic'
        ],
        migratedFrom: [
          'solid state',
          'Tuna'
        ],
        numAssets: 48656,
        stake: {
          totalStakes: '80033',
          totalUnstakes: '90653',
          totalReceivedStakes: '57287',
          recentStakes: {
            items: [
              Uint8Array [
                87
              ],
              Uint8Array [
                221
              ]
            ],
            typeUrl: 'Assistant',
            maxItems: 47119,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                70
              ],
              Uint8Array [
                131
              ]
            ],
            typeUrl: 'Supervisor',
            maxItems: 42919,
            circular: undefined,
            fifo: undefined
          }
        },
        pinnedFiles: {
          items: [
            Uint8Array [
              29
            ],
            Uint8Array [
              200
            ]
          ],
          typeUrl: 'Administrator',
          maxItems: 79909,
          circular: undefined,
          fifo: undefined
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 0,
            hash: 13,
            address: 0,
            role: 4
          }
        }
      }
    ],
    assets: [
      {
        address: 'cf5a4684f9af37da5b39724bb1bfcc2ea43665cd',
        owner: '5th generation',
        moniker: 'Saudi Riyal',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-22T21:49:25.209Z',
        stake: {
          totalStakes: '58488',
          totalUnstakes: '10236',
          totalReceivedStakes: '12646',
          recentStakes: {
            items: [
              Uint8Array [
                98
              ],
              Uint8Array [
                64
              ]
            ],
            typeUrl: 'Clothing',
            maxItems: 99848,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                186
              ],
              Uint8Array [
                250
              ]
            ],
            typeUrl: 'extend',
            maxItems: 74304,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Internal',
          renaissanceTx: 'Team-oriented',
          genesisTime: '2019-02-22T21:49:25.209Z',
          renaissanceTime: '2019-02-22T21:49:25.209Z'
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
      },
      {
        address: '14e2083130641789938d589ae845ec7e9cadb763',
        owner: 'Buckinghamshire',
        moniker: 'Handcrafted',
        readonly: undefined,
        activated: undefined,
        expiredAt: '2019-02-22T21:49:25.209Z',
        stake: {
          totalStakes: '55318',
          totalUnstakes: '20160',
          totalReceivedStakes: '29916',
          recentStakes: {
            items: [
              Uint8Array [
                105
              ],
              Uint8Array [
                142
              ]
            ],
            typeUrl: 'strategic',
            maxItems: 24431,
            circular: undefined,
            fifo: undefined
          },
          recentReceivedStakes: {
            items: [
              Uint8Array [
                214
              ],
              Uint8Array [
                138
              ]
            ],
            typeUrl: 'XSS',
            maxItems: 45462,
            circular: undefined,
            fifo: undefined
          }
        },
        context: {
          genesisTx: 'Money Market Account',
          renaissanceTx: 'copy',
          genesisTime: '2019-02-22T21:49:25.209Z',
          renaissanceTime: '2019-02-22T21:49:25.209Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 7,
            address: 1,
            role: 5
          }
        }
      }
    ],
    stakes: [
      {
        address: '9139e4f462c40364e95bfb4967531da411c8e8dc',
        from: '98f08566d983496e39cd1da08dc38fa6aef5ae4e',
        to: 'f7f51edb14e61448ce829d325240bf5309c783cd',
        balance: '50705',
        message: 'regional',
        context: {
          genesisTx: 'optical',
          renaissanceTx: 'RAM',
          genesisTime: '2019-02-22T21:49:25.209Z',
          renaissanceTime: '2019-02-22T21:49:25.209Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 13,
            address: 1,
            role: 5
          }
        }
      },
      {
        address: 'b9bf9b47611d9907f85801272ac741f3881f8484',
        from: '91f69fc1477fd0f317491d3ba802ae85d6b39d5c',
        to: '67724a7e947e2f940e7d986a60e49524065a9ffe',
        balance: '39460',
        message: 'Jewelery',
        context: {
          genesisTx: 'Sharable',
          renaissanceTx: 'Chicken',
          genesisTime: '2019-02-22T21:49:25.209Z',
          renaissanceTime: '2019-02-22T21:49:25.209Z'
        },
        data: {
          type: 'WalletType',
          value: {
            pk: 1,
            hash: 0,
            address: 1,
            role: 1
          }
        }
      }
    ],
    context: {
      txHash: '648087044211ecb002b8d44bc3e23a3ba4a1d5e7',
      blockHeight: 45630,
      blockTime: '2019-02-22T21:49:25.209Z',
      totalTxs: 99932,
      txStatistics: {
        numAccountMigrateTxs: 50545,
        numCreateAssetTxs: 80179,
        numConsensusUpgradeTxs: 13434,
        numDeclareTxs: 45778,
        numDeclareFileTxs: 70121,
        numExchangeTxs: 36241,
        numStakeTxs: 42981,
        numSysUpgradeTxs: 51165,
        numTransferTxs: 77701,
        numUpdateAssetTxs: 13107
      },
      txIndex: 31752
    },
    appState: {
      address: '6a1e14b3c783e0e20f3f9373b406ee9eefd70dee',
      consensus: {
        maxBytes: 61502,
        maxGas: 34179,
        maxValidators: 95347,
        maxCandidates: 48097,
        pubKeyTypes: [
          'Way',
          'Ergonomic'
        ],
        validators: [
          {
            address: 'b16d03fc3e0d253aa5adf7cff23a6c9db19a8068',
            power: 14080
          },
          {
            address: '869872298e6c0e88285defc0b3d50a7381057dd0',
            power: 39662
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
              dataHash: 'human-resource',
              actions: [
                undefined,
                undefined
              ]
            },
            {
              type: 0,
              dataHash: 'Arizona',
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
          totalStakes: '88505',
          totalUnstakes: '55502',
          context: {
            genesisTx: 'turn-key',
            renaissanceTx: 'Legacy',
            genesisTime: '2019-02-22T21:49:25.209Z',
            renaissanceTime: '2019-02-22T21:49:25.209Z'
          }
        }
      },
      version: 'Jamaica',
      dataVersion: 'niches',
      forgeAppHash: Uint8Array [
        187
      ],
      rootHashes: {
        account: Uint8Array [
          50
        ],
        asset: Uint8Array [
          113
        ],
        receipt: Uint8Array [
          0
        ]
      },
      data: {
        type: 'WalletType',
        value: {
          pk: 1,
          hash: 6,
          address: 0,
          role: 5
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
    code: 7
  }
}
});
```

### recoverWallet

```js
const result = await client.recoverWallet({
  data: Uint8Array [
    161
  ],
  type: {
    pk: 1,
    hash: 13,
    address: 1,
    role: 5
  },
  passphrase: 'high-level',
  moniker: 'Latvia'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 10,
  token: 'Nebraska',
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 5
    },
    sk: Uint8Array [
      144
    ],
    pk: Uint8Array [
      223
    ],
    address: '6f2b459f0b059d5762cd2aa58030619d3e83cdbd'
  }
}
});
```

### removeWallet

```js
const result = await client.removeWallet({
  address: '67f2f90b3bc10d1280029af34b7de333b9754f1c'
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
  key: 'hybrid',
  value: 'yellow'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 24,
  txs: [
    {
      tx: {
        from: '12a7053d5ee787b3344e4cefbaa9d27d11ca81e9',
        nonce: 41713,
        signature: Uint8Array [
          58
        ],
        chainId: 'gold',
        signatures: [
          {
            key: Uint8Array [
              213
            ],
            value: Uint8Array [
              67
            ]
          },
          {
            key: Uint8Array [
              60
            ],
            value: Uint8Array [
              180
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
      height: 42244,
      index: 41235,
      hash: '0c90188a71a8271bbf747b5c87bf71194f6de23f',
      tags: [
        {
          key: Uint8Array [
            43
          ],
          value: Uint8Array [
            169
          ]
        },
        {
          key: Uint8Array [
            203
          ],
          value: Uint8Array [
            29
          ]
        }
      ],
      code: 32
    },
    {
      tx: {
        from: '9e17ae4980409da9bc80dc27114d1aedd69b02d6',
        nonce: 10148,
        signature: Uint8Array [
          32
        ],
        chainId: 'Islands',
        signatures: [
          {
            key: Uint8Array [
              144
            ],
            value: Uint8Array [
              210
            ]
          },
          {
            key: Uint8Array [
              149
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
            hash: 6,
            address: 1,
            role: 2
          }
        }
      },
      height: 58731,
      index: 80039,
      hash: '2108638b0d8c7b5bc593760f3f96f1cba7d3a1bb',
      tags: [
        {
          key: Uint8Array [
            208
          ],
          value: Uint8Array [
            152
          ]
        },
        {
          key: Uint8Array [
            110
          ],
          value: Uint8Array [
            5
          ]
        }
      ],
      code: 500
    }
  ]
}
});
```

### sendTx

```js
const result = await client.sendTx({
  tx: {
    from: '4643da4e0e5141ab45c33713b12002baf106a478',
    nonce: 40996,
    signature: Uint8Array [
      51
    ],
    chainId: 'Licensed',
    signatures: [
      {
        key: Uint8Array [
          15
        ],
        value: Uint8Array [
          123
        ]
      },
      {
        key: Uint8Array [
          96
        ],
        value: Uint8Array [
          10
        ]
      }
    ],
    itx: {
      type: 'WalletType',
      value: {
        pk: 0,
        hash: 0,
        address: 1,
        role: 4
      }
    }
  },
  wallet: {
    type: {
      pk: 0,
      hash: 1,
      address: 0,
      role: 0
    },
    sk: Uint8Array [
      184
    ],
    pk: Uint8Array [
      94
    ],
    address: '31150da140bba5ac2eb5ce32055033d7f660f1b3'
  },
  token: 'back-end',
  commit: undefined
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 2,
  hash: '549e52a56c82d4ca1d43c86aee9c17e4e9834fdf'
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
      pk: 1,
      hash: 6,
      address: 0,
      role: 8
    },
    sk: Uint8Array [
      132
    ],
    pk: Uint8Array [
      63
    ],
    address: '18a27c0472cb9d33a048861e8446e1c33286a7b5'
  },
  token: 'Shoes'
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 36,
  signedData: Uint8Array [
    125
  ]
}
});
```

### storeFile

```js
const result = await client.storeFile({
  chunk: Uint8Array [
    8
  ]
});

// response is a stream
result.on('data', data => {
  // response data format
  {
  code: 38,
  hash: '07f530dba06c35a9116f677fd220ca00e75a1a3d'
}
});
```

### subscribe

```js
const stream = client.subscribe({
  type: 129,
  filter: 'payment'
});

// output
{
  topic: 'haptic'
}
```

### unsubscribe

```js
const result = await client.unsubscribe({
  topic: 'Handcrafted Wooden Sausages'
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
