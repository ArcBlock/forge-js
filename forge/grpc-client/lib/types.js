
/**
 * Structure of GRpcClient.TxEncodeOutput
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TxEncodeOutput
 * @property {object} object - the transaction object, human readable
 * @property {buffer} buffer - the transaction binary presentation, can be used to signing, encoding to other formats
 */


/**
 * Structure of GRpcClient.RequestSendTx
 *
```javascript
{
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "delegator": "arcblock",
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      }
    ],
    "itx": {
      "type": "string",
      "value": "ABCD 1234"
    }
  },
  "wallet": {
    "type": {
      "pk": 0,
      "hash": 0,
      "address": 0,
      "role": 0
    },
    "sk": {},
    "pk": {},
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "token": "arcblock",
  "commit": true
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestSendTx
 * @prop {GRpcClient.Transaction} tx
 * @prop {GRpcClient.WalletInfo} wallet
 * @prop {string} token
 * @prop {boolean} commit
 */

/**
 * Structure of GRpcClient.ResponseSendTx
 *
```javascript
{
  "code": 0,
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseSendTx
 * @prop {GRpcClient.StatusCode} code
 * @prop {string} hash
 */

/**
 * Structure of GRpcClient.RequestGetTx
 *
```javascript
{
  "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetTx
 * @prop {string} hash
 */

/**
 * Structure of GRpcClient.ResponseGetTx
 *
```javascript
{
  "code": 0,
  "info": {
    "tx": {
      "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "nonce": 5,
      "chainId": "arcblock",
      "pk": {},
      "gas": 2,
      "delegator": "arcblock",
      "signature": {},
      "signatures": [
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
          "delegator": "arcblock",
          "data": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        {
          "signer": "arcblock",
          "pk": {},
          "signature": {},
          "delegator": "arcblock",
          "data": {
            "type": "string",
            "value": "ABCD 1234"
          }
        }
      ],
      "itx": {
        "type": "string",
        "value": "ABCD 1234"
      }
    },
    "height": 5,
    "index": 2,
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "tags": [
      {
        "key": {},
        "value": {}
      },
      {
        "key": {},
        "value": {}
      }
    ],
    "code": 0,
    "time": "2020-03-25T23:35:44.513Z"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetTx
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.TransactionInfo} info
 */

/**
 * Structure of GRpcClient.RequestGetBlock
 *
```javascript
{
  "height": 5
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetBlock
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseGetBlock
 *
```javascript
{
  "code": 0,
  "block": {
    "height": 5,
    "numTxs": 2,
    "time": "2020-03-25T23:35:44.507Z",
    "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "txs": [
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2020-03-25T23:35:44.507Z"
      },
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2020-03-25T23:35:44.507Z"
      }
    ],
    "totalTxs": 5,
    "invalidTxs": [
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2020-03-25T23:35:44.507Z"
      },
      {
        "tx": {
          "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "nonce": 5,
          "chainId": "arcblock",
          "pk": {},
          "gas": 2,
          "delegator": "arcblock",
          "signature": {},
          "signatures": [
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            },
            {
              "signer": "arcblock",
              "pk": {},
              "signature": {},
              "delegator": "arcblock",
              "data": {
                "type": "string",
                "value": "ABCD 1234"
              }
            }
          ],
          "itx": {
            "type": "string",
            "value": "ABCD 1234"
          }
        },
        "height": 5,
        "index": 2,
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "tags": [
          {
            "key": {},
            "value": {}
          },
          {
            "key": {},
            "value": {}
          }
        ],
        "code": 0,
        "time": "2020-03-25T23:35:44.507Z"
      }
    ],
    "txsHashes": [
      "arcblock",
      "arcblock"
    ],
    "invalidTxsHashes": [
      "arcblock",
      "arcblock"
    ],
    "consensusHash": {},
    "dataHash": {},
    "evidenceHash": {},
    "lastCommitHash": {},
    "lastResultsHash": {},
    "nextValidatorsHash": {},
    "validatorsHash": {},
    "version": {
      "Block": 5,
      "App": 5
    },
    "lastBlockId": {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "partsHeader": {
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
      }
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetBlock
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.BlockInfo} block
 */

/**
 * Structure of GRpcClient.RequestGetBlocks
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "heightFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "emptyExcluded": true
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetBlocks
 * @prop {GRpcClient.PageInput} paging
 * @prop {GRpcClient.RangeFilter} heightFilter
 * @prop {boolean} emptyExcluded
 */

/**
 * Structure of GRpcClient.ResponseGetBlocks
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "blocks": [
    {
      "height": 5,
      "numTxs": 2,
      "time": "2020-03-25T23:35:44.507Z",
      "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "totalTxs": 5,
      "txsHashes": [
        "arcblock",
        "arcblock"
      ],
      "invalidTxsHashes": [
        "arcblock",
        "arcblock"
      ],
      "consensusHash": {},
      "dataHash": {},
      "evidenceHash": {},
      "lastCommitHash": {},
      "lastResultsHash": {},
      "nextValidatorsHash": {},
      "validatorsHash": {},
      "version": {
        "Block": 5,
        "App": 5
      },
      "lastBlockId": {
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "partsHeader": {
          "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
        }
      }
    },
    {
      "height": 5,
      "numTxs": 2,
      "time": "2020-03-25T23:35:44.507Z",
      "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "totalTxs": 5,
      "txsHashes": [
        "arcblock",
        "arcblock"
      ],
      "invalidTxsHashes": [
        "arcblock",
        "arcblock"
      ],
      "consensusHash": {},
      "dataHash": {},
      "evidenceHash": {},
      "lastCommitHash": {},
      "lastResultsHash": {},
      "nextValidatorsHash": {},
      "validatorsHash": {},
      "version": {
        "Block": 5,
        "App": 5
      },
      "lastBlockId": {
        "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "partsHeader": {
          "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
        }
      }
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetBlocks
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.BlockInfoSimple>} blocks
 */

/**
 * Structure of GRpcClient.RequestDeclareNode
 *
```javascript
{
  "validator": true,
  "issuer": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestDeclareNode
 * @prop {boolean} validator
 * @prop {string} issuer
 */

/**
 * Structure of GRpcClient.ResponseDeclareNode
 *
```javascript
{
  "code": 0,
  "wallet": {
    "type": {
      "pk": 0,
      "hash": 0,
      "address": 0,
      "role": 0
    },
    "sk": {},
    "pk": {},
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "tx": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "nonce": 5,
    "chainId": "arcblock",
    "pk": {},
    "gas": 2,
    "delegator": "arcblock",
    "signature": {},
    "signatures": [
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "signer": "arcblock",
        "pk": {},
        "signature": {},
        "delegator": "arcblock",
        "data": {
          "type": "string",
          "value": "ABCD 1234"
        }
      }
    ],
    "itx": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseDeclareNode
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.WalletInfo} wallet
 * @prop {GRpcClient.Transaction} tx
 */

/**
 * Structure of GRpcClient.RequestGetAccountState
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetAccountState
 * @prop {string} address
 * @prop {Array<string>} keys
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseGetAccountState
 *
```javascript
{
  "code": 0,
  "state": {
    "nonce": 5,
    "numTxs": 5,
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "pk": {},
    "type": {
      "pk": 0,
      "hash": 0,
      "address": 0,
      "role": 0
    },
    "moniker": "arcblock",
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2020-03-25T23:35:44.509Z",
      "renaissanceTime": "2020-03-25T23:35:44.509Z"
    },
    "issuer": "arcblock",
    "migratedTo": [
      "arcblock",
      "arcblock"
    ],
    "migratedFrom": [
      "arcblock",
      "arcblock"
    ],
    "numAssets": 5,
    "stake": {
      "recentStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      },
      "recentReceivedStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      }
    },
    "pinnedFiles": {
      "items": [
        {},
        {}
      ],
      "typeUrl": "arcblock",
      "maxItems": 2,
      "circular": true,
      "fifo": true
    },
    "poke": {},
    "withdrawItems": {
      "items": [
        {},
        {}
      ],
      "typeUrl": "arcblock",
      "maxItems": 2,
      "circular": true,
      "fifo": true
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetAccountState
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.AccountState} state
 */

/**
 * Structure of GRpcClient.RequestGetAssetState
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetAssetState
 * @prop {string} address
 * @prop {Array<string>} keys
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseGetAssetState
 *
```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "owner": "arcblock",
    "moniker": "arcblock",
    "readonly": true,
    "transferrable": true,
    "ttl": 2,
    "consumedTime": "2020-03-25T23:35:44.510Z",
    "issuer": "arcblock",
    "parent": "arcblock",
    "stake": {
      "recentStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      },
      "recentReceivedStakes": {
        "items": [
          {},
          {}
        ],
        "typeUrl": "arcblock",
        "maxItems": 2,
        "circular": true,
        "fifo": true
      }
    },
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2020-03-25T23:35:44.510Z",
      "renaissanceTime": "2020-03-25T23:35:44.510Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetAssetState
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.AssetState} state
 */

/**
 * Structure of GRpcClient.RequestGetForgeState
 *
```javascript
{
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetForgeState
 * @prop {Array<string>} keys
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseGetForgeState
 *
```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "consensus": {
      "maxBytes": 5,
      "maxGas": 4,
      "maxValidators": 2,
      "maxCandidates": 2,
      "pubKeyTypes": [
        "arcblock",
        "arcblock"
      ],
      "validators": [
        {
          "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "power": 5
        },
        {
          "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
          "power": 5
        }
      ],
      "validatorChanged": true,
      "paramChanged": true
    },
    "tasks": {
      "5": {
        "item": [
          {
            "type": 0,
            "dataHash": "arcblock",
            "actions": [
              null,
              null
            ]
          },
          {
            "type": 0,
            "dataHash": "arcblock",
            "actions": [
              null,
              null
            ]
          }
        ]
      }
    },
    "stakeSummary": {
      "2": {
        "context": {
          "genesisTx": "arcblock",
          "renaissanceTx": "arcblock",
          "genesisTime": "2020-03-25T23:35:44.510Z",
          "renaissanceTime": "2020-03-25T23:35:44.510Z"
        }
      }
    },
    "version": "arcblock",
    "token": {
      "name": "arcblock",
      "symbol": "arcblock",
      "unit": "arcblock",
      "description": "arcblock",
      "icon": {},
      "decimal": 2,
      "initialSupply": 5,
      "totalSupply": 5,
      "inflationRate": 2
    },
    "txConfig": {
      "maxAssetSize": 2,
      "maxListSize": 2,
      "maxMultisig": 2,
      "minimumStake": 5,
      "declare": {
        "restricted": true,
        "hierarchy": 2
      },
      "delegate": {
        "deltaInterval": 2,
        "typeUrls": [
          "arcblock",
          "arcblock"
        ]
      },
      "poke": {
        "dailyLimit": 5,
        "amount": 5,
        "enabled": true
      },
      "stake": {
        "timeoutGeneral": 2,
        "timeoutStakeForNode": 2
      }
    },
    "protocols": [
      {
        "name": "arcblock",
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
      },
      {
        "name": "arcblock",
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
      }
    ],
    "gas": {
      "arcblock": 2
    },
    "upgradeInfo": {
      "height": 5,
      "version": "arcblock"
    },
    "accountConfig": {
      "arcblock": {
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "pk": {}
      }
    },
    "tokenSwapConfig": {
      "commissionHolderAddress": "arcblock",
      "commissionRate": 2,
      "revokeCommissionRate": 2
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetForgeState
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.ForgeState} state
 */

/**
 * Structure of GRpcClient.RequestGetSwapState
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetSwapState
 * @prop {string} address
 * @prop {Array<string>} keys
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseGetSwapState
 *
```javascript
{
  "code": 0,
  "state": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "hashkey": {},
    "sender": "arcblock",
    "receiver": "arcblock",
    "assets": [
      "arcblock",
      "arcblock"
    ],
    "locktime": 2,
    "hashlock": {},
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2020-03-25T23:35:44.510Z",
      "renaissanceTime": "2020-03-25T23:35:44.510Z"
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetSwapState
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.SwapState} state
 */

/**
 * Structure of GRpcClient.RequestGetDelegateState
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "keys": [
    "arcblock",
    "arcblock"
  ],
  "height": 5
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetDelegateState
 * @prop {string} address
 * @prop {Array<string>} keys
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseGetDelegateState
 *
```javascript
{
  "code": 0,
  "state": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "ops": {
      "arcblock": {
        "rule": "arcblock",
        "numTxs": 5,
        "numTxsDelta": 5
      }
    },
    "context": {
      "genesisTx": "arcblock",
      "renaissanceTx": "arcblock",
      "genesisTime": "2020-03-25T23:35:44.510Z",
      "renaissanceTime": "2020-03-25T23:35:44.510Z"
    },
    "data": {
      "type": "string",
      "value": "ABCD 1234"
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetDelegateState
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.DelegateState} state
 */

/**
 * Structure of GRpcClient.RequestGetChainInfo
 *
```javascript
{}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetChainInfo

 */

/**
 * Structure of GRpcClient.ResponseGetChainInfo
 *
```javascript
{
  "code": 0,
  "info": {
    "id": "arcblock",
    "network": "arcblock",
    "moniker": "arcblock",
    "consensusVersion": "arcblock",
    "synced": true,
    "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "blockHash": {},
    "blockHeight": 5,
    "blockTime": "2020-03-25T23:35:44.508Z",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "votingPower": 5,
    "totalTxs": 5,
    "version": "arcblock",
    "forgeAppsVersion": {
      "arcblock": "arcblock"
    },
    "supportedTxs": [
      "arcblock",
      "arcblock"
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetChainInfo
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.ChainInfo} info
 */

/**
 * Structure of GRpcClient.RequestGetNodeInfo
 *
```javascript
{}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetNodeInfo

 */

/**
 * Structure of GRpcClient.ResponseGetNodeInfo
 *
```javascript
{
  "code": 0,
  "info": {
    "id": "arcblock",
    "network": "arcblock",
    "moniker": "arcblock",
    "consensusVersion": "arcblock",
    "synced": true,
    "appHash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "blockHash": {},
    "blockHeight": 5,
    "blockTime": "2020-03-25T23:35:44.508Z",
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "votingPower": 5,
    "totalTxs": 5,
    "version": "arcblock",
    "forgeAppsVersion": {
      "arcblock": "arcblock"
    },
    "supportedTxs": [
      "arcblock",
      "arcblock"
    ],
    "ip": "arcblock",
    "geoInfo": {
      "city": "arcblock",
      "country": "arcblock",
      "latitude": "12.2",
      "longitude": "12.2"
    },
    "p2pAddress": "arcblock"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetNodeInfo
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.NodeInfo} info
 */

/**
 * Structure of GRpcClient.RequestSearch
 *
```javascript
{
  "key": "arcblock",
  "value": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestSearch
 * @prop {string} key
 * @prop {string} value
 */

/**
 * Structure of GRpcClient.ResponseSearch
 *
```javascript
{
  "code": 0,
  "txs": [
    {
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "height": 5,
      "index": 2,
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "tags": [
        {
          "key": {},
          "value": {}
        },
        {
          "key": {},
          "value": {}
        }
      ],
      "code": 0,
      "time": "2020-03-25T23:35:44.508Z"
    },
    {
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "height": 5,
      "index": 2,
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "tags": [
        {
          "key": {},
          "value": {}
        },
        {
          "key": {},
          "value": {}
        }
      ],
      "code": 0,
      "time": "2020-03-25T23:35:44.508Z"
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseSearch
 * @prop {GRpcClient.StatusCode} code
 * @prop {Array<GRpcClient.TransactionInfo>} txs
 */

/**
 * Structure of GRpcClient.RequestGetUnconfirmedTxs
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetUnconfirmedTxs
 * @prop {GRpcClient.PageInput} paging
 */

/**
 * Structure of GRpcClient.ResponseGetUnconfirmedTxs
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "unconfirmedTxs": {
    "nTxs": 2,
    "txs": [
      {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      }
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetUnconfirmedTxs
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {GRpcClient.UnconfirmedTxs} unconfirmedTxs
 */

/**
 * Structure of GRpcClient.RequestGetNetInfo
 *
```javascript
{}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetNetInfo

 */

/**
 * Structure of GRpcClient.ResponseGetNetInfo
 *
```javascript
{
  "code": 0,
  "netInfo": {
    "listening": true,
    "listeners": [
      "arcblock",
      "arcblock"
    ],
    "nPeers": 2,
    "peers": [
      {
        "id": "arcblock",
        "network": "arcblock",
        "consensusVersion": "arcblock",
        "moniker": "arcblock",
        "ip": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      },
      {
        "id": "arcblock",
        "network": "arcblock",
        "consensusVersion": "arcblock",
        "moniker": "arcblock",
        "ip": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      }
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetNetInfo
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.NetInfo} netInfo
 */

/**
 * Structure of GRpcClient.RequestGetValidatorsInfo
 *
```javascript
{}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetValidatorsInfo

 */

/**
 * Structure of GRpcClient.ResponseGetValidatorsInfo
 *
```javascript
{
  "code": 0,
  "validatorsInfo": {
    "blockHeight": 5,
    "validators": [
      {
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "pubKey": {
          "type": "arcblock",
          "data": {}
        },
        "votingPower": 5,
        "proposerPriority": "arcblock",
        "name": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      },
      {
        "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "pubKey": {
          "type": "arcblock",
          "data": {}
        },
        "votingPower": 5,
        "proposerPriority": "arcblock",
        "name": "arcblock",
        "geoInfo": {
          "city": "arcblock",
          "country": "arcblock",
          "latitude": "12.2",
          "longitude": "12.2"
        }
      }
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetValidatorsInfo
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.ValidatorsInfo} validatorsInfo
 */

/**
 * Structure of GRpcClient.RequestSubscribe
 *
```javascript
{
  "topic": "arcblock",
  "filter": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestSubscribe
 * @prop {string} topic
 * @prop {string} filter
 */

/**
 * Structure of GRpcClient.ResponseSubscribe
 *
```javascript
{
  "topic": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseSubscribe
 * @prop {GRpcClient.StatusCode} code
 * @prop {string} topic
 * @prop {GRpcClient.Transaction} transfer
 * @prop {GRpcClient.Transaction} accountMigrate
 * @prop {GRpcClient.Transaction} confirm
 * @prop {GRpcClient.Transaction} createAsset
 * @prop {GRpcClient.Transaction} exchange
 * @prop {GRpcClient.RequestBeginBlock} beginBlock
 * @prop {GRpcClient.RequestEndBlock} endBlock
 * @prop {GRpcClient.Transaction} declare
 * @prop {GRpcClient.Transaction} updateAsset
 * @prop {GRpcClient.Transaction} consensusUpgrade
 * @prop {GRpcClient.Transaction} sysUpgrade
 * @prop {GRpcClient.Transaction} stake
 * @prop {GRpcClient.Transaction} delegate
 * @prop {GRpcClient.Transaction} revokeDelegate
 * @prop {GRpcClient.Transaction} depositToken
 * @prop {GRpcClient.Transaction} withdrawToken
 * @prop {GRpcClient.Transaction} approveWithdraw
 * @prop {GRpcClient.Transaction} revokeWithdraw
 * @prop {GRpcClient.Transaction} setupSwap
 * @prop {GRpcClient.Transaction} revokeSwap
 * @prop {GRpcClient.Transaction} retrieveSwap
 * @prop {GRpcClient.Transaction} poke
 * @prop {GRpcClient.Transaction} consumeAsset
 * @prop {GRpcClient.Transaction} acquireAsset
 * @prop {GRpcClient.Transaction} upgradeNode
 * @prop {GRpcClient.Transaction} updateValidator
 * @prop {GRpcClient.Transaction} updateConsensusParams
 * @prop {GRpcClient.AccountState} accountState
 * @prop {GRpcClient.AssetState} assetState
 * @prop {GRpcClient.ForgeState} forgeState
 * @prop {GRpcClient.DelegateState} delegateState
 * @prop {GRpcClient.SwapState} swapState
 */

/**
 * Structure of GRpcClient.RequestUnsubscribe
 *
```javascript
{
  "topic": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestUnsubscribe
 * @prop {string} topic
 */

/**
 * Structure of GRpcClient.ResponseUnsubscribe
 *
```javascript
{
  "code": 0
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseUnsubscribe
 * @prop {GRpcClient.StatusCode} code
 */

/**
 * Structure of GRpcClient.RequestGetConfig
 *
```javascript
{
  "parsed": true
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetConfig
 * @prop {boolean} parsed
 */

/**
 * Structure of GRpcClient.ResponseGetConfig
 *
```javascript
{
  "code": 0,
  "config": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetConfig
 * @prop {GRpcClient.StatusCode} code
 * @prop {string} config
 */

/**
 * Structure of GRpcClient.ByDay
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ByDay
 * @prop {string} startDate
 * @prop {string} endDate
 */

/**
 * Structure of GRpcClient.ByHour
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ByHour
 * @prop {string} date
 */

/**
 * Structure of GRpcClient.RequestGetForgeStats
 *
```javascript
{
  "dayInfo": {
    "startDate": "arcblock",
    "endDate": "arcblock"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetForgeStats
 * @prop {GRpcClient.ByDay} dayInfo
 * @prop {GRpcClient.ByHour} date
 */

/**
 * Structure of GRpcClient.ResponseGetForgeStats
 *
```javascript
{
  "code": 0,
  "forgeStats": {
    "numBlocks": [
      5,
      5
    ],
    "numTxs": [
      5,
      5
    ],
    "numStakes": [
      null,
      null
    ],
    "numValidators": [
      2,
      2
    ],
    "numAccountMigrateTxs": [
      5,
      5
    ],
    "numCreateAssetTxs": [
      5,
      5
    ],
    "numConsensusUpgradeTxs": [
      2,
      2
    ],
    "numDeclareTxs": [
      5,
      5
    ],
    "numDeclareFileTxs": [
      5,
      5
    ],
    "numExchangeTxs": [
      5,
      5
    ],
    "numStakeTxs": [
      5,
      5
    ],
    "numSysUpgradeTxs": [
      2,
      2
    ],
    "numTransferTxs": [
      5,
      5
    ],
    "numUpdateAssetTxs": [
      5,
      5
    ],
    "numConsumeAssetTxs": [
      5,
      5
    ],
    "numPokeTxs": [
      5,
      5
    ],
    "tps": [
      2,
      2
    ],
    "maxTps": 2,
    "avgTps": 2,
    "avgBlockTime": "12.2"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetForgeStats
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.ForgeStats} forgeStats
 */

/**
 * Structure of GRpcClient.RequestListTransactions
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "timeFilter": {
    "startDateTime": "arcblock",
    "endDateTime": "arcblock"
  },
  "addressFilter": {
    "sender": "arcblock",
    "receiver": "arcblock",
    "direction": 0
  },
  "typeFilter": {
    "types": [
      "arcblock",
      "arcblock"
    ]
  },
  "validityFilter": {
    "validity": 0
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListTransactions
 * @prop {GRpcClient.PageInput} paging
 * @prop {GRpcClient.TimeFilter} timeFilter
 * @prop {GRpcClient.AddressFilter} addressFilter
 * @prop {GRpcClient.TypeFilter} typeFilter
 * @prop {GRpcClient.ValidityFilter} validityFilter
 */

/**
 * Structure of GRpcClient.ResponseListTransactions
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "transactions": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListTransactions
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.IndexedTransaction>} transactions
 */

/**
 * Structure of GRpcClient.RequestListAssets
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "ownerAddress": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListAssets
 * @prop {GRpcClient.PageInput} paging
 * @prop {string} ownerAddress
 */

/**
 * Structure of GRpcClient.ResponseListAssets
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "assets": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "owner": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "readonly": true,
      "consumedTime": "arcblock",
      "issuer": "arcblock",
      "parent": "arcblock",
      "transferrable": true,
      "ttl": 5,
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "owner": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "readonly": true,
      "consumedTime": "arcblock",
      "issuer": "arcblock",
      "parent": "arcblock",
      "transferrable": true,
      "ttl": 5,
      "data": {
        "type": "string",
        "value": "ABCD 1234"
      }
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListAssets
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.IndexedAssetState>} assets
 */

/**
 * Structure of GRpcClient.RequestListStakes
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "addressFilter": {
    "sender": "arcblock",
    "receiver": "arcblock",
    "direction": 0
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListStakes
 * @prop {GRpcClient.PageInput} paging
 * @prop {GRpcClient.AddressFilter} addressFilter
 */

/**
 * Structure of GRpcClient.ResponseListStakes
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "stakes": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "message": "arcblock",
      "type": 2
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "message": "arcblock",
      "type": 2
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListStakes
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.IndexedStakeState>} stakes
 */

/**
 * Structure of GRpcClient.RequestListAccount
 *
```javascript
{
  "ownerAddress": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListAccount
 * @prop {string} ownerAddress
 */

/**
 * Structure of GRpcClient.ResponseListAccount
 *
```javascript
{
  "code": 0,
  "account": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "numAssets": 5,
    "numTxs": 5,
    "nonce": 5,
    "genesisTime": "arcblock",
    "renaissanceTime": "arcblock",
    "moniker": "arcblock",
    "migratedFrom": "arcblock",
    "migratedTo": "arcblock",
    "recentNumTxs": [
      5,
      5
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListAccount
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.IndexedAccountState} account
 */

/**
 * Structure of GRpcClient.RequestListTopAccounts
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListTopAccounts
 * @prop {GRpcClient.PageInput} paging
 */

/**
 * Structure of GRpcClient.ResponseListTopAccounts
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "accounts": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numAssets": 5,
      "numTxs": 5,
      "nonce": 5,
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "migratedFrom": "arcblock",
      "migratedTo": "arcblock",
      "recentNumTxs": [
        5,
        5
      ]
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numAssets": 5,
      "numTxs": 5,
      "nonce": 5,
      "genesisTime": "arcblock",
      "renaissanceTime": "arcblock",
      "moniker": "arcblock",
      "migratedFrom": "arcblock",
      "migratedTo": "arcblock",
      "recentNumTxs": [
        5,
        5
      ]
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListTopAccounts
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.IndexedAccountState>} accounts
 */

/**
 * Structure of GRpcClient.RequestListAssetTransactions
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListAssetTransactions
 * @prop {GRpcClient.PageInput} paging
 * @prop {string} address
 */

/**
 * Structure of GRpcClient.ResponseListAssetTransactions
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "transactions": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "sender": "arcblock",
      "receiver": "arcblock",
      "time": "arcblock",
      "type": "arcblock",
      "tx": {
        "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
        "nonce": 5,
        "chainId": "arcblock",
        "pk": {},
        "gas": 2,
        "delegator": "arcblock",
        "signature": {},
        "signatures": [
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          },
          {
            "signer": "arcblock",
            "pk": {},
            "signature": {},
            "delegator": "arcblock",
            "data": {
              "type": "string",
              "value": "ABCD 1234"
            }
          }
        ],
        "itx": {
          "type": "string",
          "value": "ABCD 1234"
        }
      },
      "valid": true,
      "code": 0
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListAssetTransactions
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.IndexedTransaction>} transactions
 */

/**
 * Structure of GRpcClient.RequestListBlocks
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "timeFilter": {
    "startDateTime": "arcblock",
    "endDateTime": "arcblock"
  },
  "heightFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "numTxsFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  },
  "numInvalidTxsFilter": {
    "from": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListBlocks
 * @prop {GRpcClient.PageInput} paging
 * @prop {string} proposer
 * @prop {GRpcClient.TimeFilter} timeFilter
 * @prop {GRpcClient.RangeFilter} heightFilter
 * @prop {GRpcClient.RangeFilter} numTxsFilter
 * @prop {GRpcClient.RangeFilter} numInvalidTxsFilter
 */

/**
 * Structure of GRpcClient.ResponseListBlocks
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "blocks": [
    {
      "height": 5,
      "time": "arcblock",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numTxs": 5,
      "numInvalidTxs": 5
    },
    {
      "height": 5,
      "time": "arcblock",
      "proposer": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "numTxs": 5,
      "numInvalidTxs": 5
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListBlocks
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.IndexedBlock>} blocks
 */

/**
 * Structure of GRpcClient.RequestListSwap
 *
```javascript
{
  "paging": {
    "cursor": "arcblock",
    "size": 2,
    "order": [
      {
        "field": "arcblock",
        "type": "arcblock"
      },
      {
        "field": "arcblock",
        "type": "arcblock"
      }
    ]
  },
  "sender": "arcblock",
  "receiver": "arcblock",
  "available": true
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestListSwap
 * @prop {GRpcClient.PageInput} paging
 * @prop {string} sender
 * @prop {string} receiver
 * @prop {boolean} available
 */

/**
 * Structure of GRpcClient.ResponseListSwap
 *
```javascript
{
  "code": 0,
  "page": {
    "cursor": "arcblock",
    "next": true,
    "total": 2
  },
  "swap": [
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "hashkey": {},
      "sender": "arcblock",
      "receiver": "arcblock",
      "assets": [
        "arcblock",
        "arcblock"
      ],
      "locktime": 2,
      "hashlock": {},
      "context": {
        "genesisTx": "arcblock",
        "renaissanceTx": "arcblock",
        "genesisTime": "2020-03-25T23:35:44.511Z",
        "renaissanceTime": "2020-03-25T23:35:44.511Z"
      }
    },
    {
      "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "hashkey": {},
      "sender": "arcblock",
      "receiver": "arcblock",
      "assets": [
        "arcblock",
        "arcblock"
      ],
      "locktime": 2,
      "hashlock": {},
      "context": {
        "genesisTx": "arcblock",
        "renaissanceTx": "arcblock",
        "genesisTime": "2020-03-25T23:35:44.511Z",
        "renaissanceTime": "2020-03-25T23:35:44.511Z"
      }
    }
  ]
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseListSwap
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.PageInfo} page
 * @prop {Array<GRpcClient.SwapState>} swap
 */

/**
 * Structure of GRpcClient.RequestGetSwapStatistics
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetSwapStatistics
 * @prop {string} address
 */

/**
 * Structure of GRpcClient.ResponseGetSwapStatistics
 *
```javascript
{
  "code": 0,
  "statistics": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "lockedAssetsOut": 2,
    "lockedAssetsIn": 2
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetSwapStatistics
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.SwapStatistics} statistics
 */

/**
 * Structure of GRpcClient.RequestGetHealthStatus
 *
```javascript
{}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestGetHealthStatus

 */

/**
 * Structure of GRpcClient.ResponseGetHealthStatus
 *
```javascript
{
  "code": 0,
  "healthStatus": {
    "consensus": {
      "health": true,
      "synced": true,
      "blockHeight": 5
    },
    "network": {
      "health": true,
      "numPeers": 2
    },
    "storage": {
      "health": true,
      "indexerServer": "arcblock",
      "stateDb": "arcblock",
      "diskSpace": {
        "forgeUsage": "arcblock",
        "total": "arcblock"
      }
    },
    "forge": {
      "health": true,
      "abiServer": "arcblock",
      "forgeWeb": "arcblock",
      "abciServer": {
        "abciConsensus": "arcblock",
        "abciInfo": "arcblock"
      }
    }
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseGetHealthStatus
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.HealthStatus} healthStatus
 */

/**
 * Structure of GRpcClient.BigUint
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BigUint
 * @prop {Uint8Array} value
 */

/**
 * Structure of GRpcClient.BigSint
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BigSint
 * @prop {Uint8Array} value
 * @prop {boolean} minus
 */

/**
 * Structure of GRpcClient.WalletType
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.WalletType
 * @prop {GRpcClient.KeyType} pk
 * @prop {GRpcClient.HashType} hash
 * @prop {GRpcClient.EncodingType} address
 * @prop {GRpcClient.RoleType} role
 */

/**
 * Structure of GRpcClient.WalletInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.WalletInfo
 * @prop {GRpcClient.WalletType} type
 * @prop {Uint8Array} sk
 * @prop {Uint8Array} pk
 * @prop {string} address
 */

/**
 * Structure of GRpcClient.ChainInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ChainInfo
 * @prop {string} id
 * @prop {string} network
 * @prop {string} moniker
 * @prop {string} consensusVersion
 * @prop {boolean} synced
 * @prop {Uint8Array} appHash
 * @prop {Uint8Array} blockHash
 * @prop {number} blockHeight
 * @prop {GRpcClient.Timestamp} blockTime
 * @prop {string} address
 * @prop {number} votingPower
 * @prop {number} totalTxs
 * @prop {string} version
 * @prop {string} forgeAppsVersion
 * @prop {Array<string>} supportedTxs
 */

/**
 * Structure of GRpcClient.NodeInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.NodeInfo
 * @prop {string} id
 * @prop {string} network
 * @prop {string} moniker
 * @prop {string} consensusVersion
 * @prop {boolean} synced
 * @prop {Uint8Array} appHash
 * @prop {Uint8Array} blockHash
 * @prop {number} blockHeight
 * @prop {GRpcClient.Timestamp} blockTime
 * @prop {string} address
 * @prop {number} votingPower
 * @prop {number} totalTxs
 * @prop {string} version
 * @prop {string} forgeAppsVersion
 * @prop {Array<string>} supportedTxs
 * @prop {string} ip
 * @prop {GRpcClient.GeoInfo} geoInfo
 * @prop {string} p2pAddress
 */

/**
 * Structure of GRpcClient.Validator
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Validator
 * @prop {string} address
 * @prop {number} power
 */

/**
 * Structure of GRpcClient.ConsensusParams
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ConsensusParams
 * @prop {number} maxBytes
 * @prop {number} maxGas
 * @prop {number} maxValidators
 * @prop {number} maxCandidates
 * @prop {Array<string>} pubKeyTypes
 * @prop {Array<GRpcClient.Validator>} validators
 * @prop {boolean} validatorChanged
 * @prop {boolean} paramChanged
 */

/**
 * Structure of GRpcClient.UpgradeTask
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpgradeTask
 * @prop {GRpcClient.UpgradeType} type
 * @prop {string} dataHash
 * @prop {Array<GRpcClient.UpgradeAction>} actions
 */

/**
 * Structure of GRpcClient.UpgradeTasks
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpgradeTasks
 * @prop {Array<GRpcClient.UpgradeTask>} item
 */

/**
 * Structure of GRpcClient.AbciContext
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AbciContext
 * @prop {string} txHash
 * @prop {number} blockHeight
 * @prop {GRpcClient.Timestamp} blockTime
 * @prop {number} totalTxs
 * @prop {GRpcClient.TxStatistics} txStatistics
 * @prop {number} txIndex
 * @prop {GRpcClient.Timestamp} lastBlockTime
 */

/**
 * Structure of GRpcClient.Multisig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Multisig
 * @prop {string} signer
 * @prop {Uint8Array} pk
 * @prop {Uint8Array} signature
 * @prop {string} delegator
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.Transaction
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Transaction
 * @prop {string} from
 * @prop {number} nonce
 * @prop {string} chainId
 * @prop {Uint8Array} pk
 * @prop {number} gas
 * @prop {string} delegator
 * @prop {Uint8Array} signature
 * @prop {Array<GRpcClient.Multisig>} signatures
 * @prop {GRpcClient.Any} itx
 */

/**
 * Structure of GRpcClient.TransactionInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TransactionInfo
 * @prop {GRpcClient.Transaction} tx
 * @prop {number} height
 * @prop {number} index
 * @prop {string} hash
 * @prop {Array<GRpcClient.KVPair>} tags
 * @prop {GRpcClient.StatusCode} code
 * @prop {GRpcClient.Timestamp} time
 */

/**
 * Structure of GRpcClient.DeclareConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DeclareConfig
 * @prop {boolean} restricted
 * @prop {number} hierarchy
 * @prop {GRpcClient.BigUint} cost
 */

/**
 * Structure of GRpcClient.DelegateConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DelegateConfig
 * @prop {number} deltaInterval
 * @prop {Array<string>} typeUrls
 */

/**
 * Structure of GRpcClient.TransactionConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TransactionConfig
 * @prop {number} maxAssetSize
 * @prop {number} maxListSize
 * @prop {number} maxMultisig
 * @prop {number} minimumStake
 * @prop {GRpcClient.DeclareConfig} declare
 * @prop {GRpcClient.DelegateConfig} delegate
 * @prop {GRpcClient.PokeConfig} poke
 * @prop {GRpcClient.StakeConfig} stake
 */

/**
 * Structure of GRpcClient.BlockInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BlockInfo
 * @prop {number} height
 * @prop {number} numTxs
 * @prop {GRpcClient.Timestamp} time
 * @prop {Uint8Array} appHash
 * @prop {Uint8Array} proposer
 * @prop {Array<GRpcClient.TransactionInfo>} txs
 * @prop {number} totalTxs
 * @prop {Array<GRpcClient.TransactionInfo>} invalidTxs
 * @prop {Array<string>} txsHashes
 * @prop {Array<string>} invalidTxsHashes
 * @prop {Uint8Array} consensusHash
 * @prop {Uint8Array} dataHash
 * @prop {Uint8Array} evidenceHash
 * @prop {Uint8Array} lastCommitHash
 * @prop {Uint8Array} lastResultsHash
 * @prop {Uint8Array} nextValidatorsHash
 * @prop {Uint8Array} validatorsHash
 * @prop {GRpcClient.Version} version
 * @prop {GRpcClient.BlockID} lastBlockId
 */

/**
 * Structure of GRpcClient.BlockInfoSimple
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BlockInfoSimple
 * @prop {number} height
 * @prop {number} numTxs
 * @prop {GRpcClient.Timestamp} time
 * @prop {Uint8Array} appHash
 * @prop {Uint8Array} proposer
 * @prop {number} totalTxs
 * @prop {Array<string>} txsHashes
 * @prop {Array<string>} invalidTxsHashes
 * @prop {Uint8Array} consensusHash
 * @prop {Uint8Array} dataHash
 * @prop {Uint8Array} evidenceHash
 * @prop {Uint8Array} lastCommitHash
 * @prop {Uint8Array} lastResultsHash
 * @prop {Uint8Array} nextValidatorsHash
 * @prop {Uint8Array} validatorsHash
 * @prop {GRpcClient.Version} version
 * @prop {GRpcClient.BlockID} lastBlockId
 */

/**
 * Structure of GRpcClient.TxStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TxStatus
 * @prop {GRpcClient.StatusCode} code
 * @prop {string} hash
 */

/**
 * Structure of GRpcClient.CircularQueue
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.CircularQueue
 * @prop {Array<Uint8Array>} items
 * @prop {string} typeUrl
 * @prop {number} maxItems
 * @prop {boolean} circular
 * @prop {boolean} fifo
 */

/**
 * Structure of GRpcClient.StateContext
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StateContext
 * @prop {string} genesisTx
 * @prop {string} renaissanceTx
 * @prop {GRpcClient.Timestamp} genesisTime
 * @prop {GRpcClient.Timestamp} renaissanceTime
 */

/**
 * Structure of GRpcClient.StakeContext
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StakeContext
 * @prop {GRpcClient.BigUint} totalStakes
 * @prop {GRpcClient.BigUint} totalUnstakes
 * @prop {GRpcClient.BigUint} totalReceivedStakes
 * @prop {GRpcClient.CircularQueue} recentStakes
 * @prop {GRpcClient.CircularQueue} recentReceivedStakes
 */

/**
 * Structure of GRpcClient.StakeSummary
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StakeSummary
 * @prop {GRpcClient.BigUint} totalStakes
 * @prop {GRpcClient.BigUint} totalUnstakes
 * @prop {GRpcClient.StateContext} context
 */

/**
 * Structure of GRpcClient.StakeConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StakeConfig
 * @prop {number} timeoutGeneral
 * @prop {number} timeoutStakeForNode
 */

/**
 * Structure of GRpcClient.UnconfirmedTxs
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UnconfirmedTxs
 * @prop {number} nTxs
 * @prop {Array<GRpcClient.Transaction>} txs
 */

/**
 * Structure of GRpcClient.NetInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.NetInfo
 * @prop {boolean} listening
 * @prop {Array<string>} listeners
 * @prop {number} nPeers
 * @prop {Array<GRpcClient.PeerInfo>} peers
 */

/**
 * Structure of GRpcClient.GeoInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.GeoInfo
 * @prop {string} city
 * @prop {string} country
 * @prop {number} latitude
 * @prop {number} longitude
 */

/**
 * Structure of GRpcClient.PeerInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PeerInfo
 * @prop {string} id
 * @prop {string} network
 * @prop {string} consensusVersion
 * @prop {string} moniker
 * @prop {string} ip
 * @prop {GRpcClient.GeoInfo} geoInfo
 */

/**
 * Structure of GRpcClient.ValidatorsInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ValidatorsInfo
 * @prop {number} blockHeight
 * @prop {Array<GRpcClient.ValidatorInfo>} validators
 */

/**
 * Structure of GRpcClient.ValidatorInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ValidatorInfo
 * @prop {string} address
 * @prop {GRpcClient.PubKey} pubKey
 * @prop {number} votingPower
 * @prop {string} proposerPriority
 * @prop {string} name
 * @prop {GRpcClient.GeoInfo} geoInfo
 */

/**
 * Structure of GRpcClient.GenesisInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.GenesisInfo
 * @prop {string} genesisTime
 * @prop {string} chainId
 * @prop {GRpcClient.ConsensusParams} consensusParams
 * @prop {Array<GRpcClient.ValidatorInfo>} validators
 * @prop {string} appHash
 */

/**
 * Structure of GRpcClient.ForgeStats
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ForgeStats
 * @prop {Array<number>} numBlocks
 * @prop {Array<number>} numTxs
 * @prop {Array<GRpcClient.BigUint>} numStakes
 * @prop {Array<number>} numValidators
 * @prop {Array<number>} numAccountMigrateTxs
 * @prop {Array<number>} numCreateAssetTxs
 * @prop {Array<number>} numConsensusUpgradeTxs
 * @prop {Array<number>} numDeclareTxs
 * @prop {Array<number>} numDeclareFileTxs
 * @prop {Array<number>} numExchangeTxs
 * @prop {Array<number>} numStakeTxs
 * @prop {Array<number>} numSysUpgradeTxs
 * @prop {Array<number>} numTransferTxs
 * @prop {Array<number>} numUpdateAssetTxs
 * @prop {Array<number>} numConsumeAssetTxs
 * @prop {Array<number>} numPokeTxs
 * @prop {Array<number>} tps
 * @prop {number} maxTps
 * @prop {number} avgTps
 * @prop {number} avgBlockTime
 */

/**
 * Structure of GRpcClient.TxStatistics
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TxStatistics
 * @prop {number} numAccountMigrateTxs
 * @prop {number} numCreateAssetTxs
 * @prop {number} numConsensusUpgradeTxs
 * @prop {number} numDeclareTxs
 * @prop {number} numDeclareFileTxs
 * @prop {number} numExchangeTxs
 * @prop {number} numStakeTxs
 * @prop {number} numSysUpgradeTxs
 * @prop {number} numTransferTxs
 * @prop {number} numUpdateAssetTxs
 * @prop {number} numConsumeAssetTxs
 * @prop {number} numPokeTxs
 */

/**
 * Structure of GRpcClient.ForgeToken
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ForgeToken
 * @prop {string} name
 * @prop {string} symbol
 * @prop {string} unit
 * @prop {string} description
 * @prop {Uint8Array} icon
 * @prop {number} decimal
 * @prop {number} initialSupply
 * @prop {number} totalSupply
 * @prop {number} inflationRate
 */

/**
 * Structure of GRpcClient.PokeInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PokeInfo
 * @prop {GRpcClient.BigUint} dailyLimit
 * @prop {GRpcClient.BigUint} leftover
 * @prop {GRpcClient.BigUint} amount
 */

/**
 * Structure of GRpcClient.PokeConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PokeConfig
 * @prop {number} dailyLimit
 * @prop {number} amount
 * @prop {boolean} enabled
 */

/**
 * Structure of GRpcClient.UpgradeInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpgradeInfo
 * @prop {number} height
 * @prop {string} version
 */

/**
 * Structure of GRpcClient.WithdrawItem
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.WithdrawItem
 * @prop {string} hash
 * @prop {GRpcClient.BigUint} value
 */

/**
 * Structure of GRpcClient.AccountConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AccountConfig
 * @prop {string} address
 * @prop {Uint8Array} pk
 * @prop {GRpcClient.BigUint} balance
 */

/**
 * Structure of GRpcClient.TokenSwapConfig
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TokenSwapConfig
 * @prop {string} commissionHolderAddress
 * @prop {number} commissionRate
 * @prop {number} revokeCommissionRate
 * @prop {GRpcClient.BigUint} minCommission
 * @prop {GRpcClient.BigUint} maxCommission
 */

/**
 * Structure of GRpcClient.Evidence
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Evidence
 * @prop {string} hash
 * @prop {string} chainType
 * @prop {string} chainId
 * @prop {Uint8Array} originalTx
 * @prop {string} receiverAddress
 */

/**
 * Structure of GRpcClient.AccountState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AccountState
 * @prop {GRpcClient.BigUint} balance
 * @prop {number} nonce
 * @prop {number} numTxs
 * @prop {string} address
 * @prop {Uint8Array} pk
 * @prop {GRpcClient.WalletType} type
 * @prop {string} moniker
 * @prop {GRpcClient.StateContext} context
 * @prop {string} issuer
 * @prop {GRpcClient.BigUint} gasBalance
 * @prop {Array<string>} migratedTo
 * @prop {Array<string>} migratedFrom
 * @prop {number} numAssets
 * @prop {GRpcClient.StakeContext} stake
 * @prop {GRpcClient.CircularQueue} pinnedFiles
 * @prop {GRpcClient.PokeInfo} poke
 * @prop {GRpcClient.BigUint} depositReceived
 * @prop {GRpcClient.CircularQueue} withdrawItems
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.AssetState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AssetState
 * @prop {string} address
 * @prop {string} owner
 * @prop {string} moniker
 * @prop {boolean} readonly
 * @prop {boolean} transferrable
 * @prop {number} ttl
 * @prop {GRpcClient.Timestamp} consumedTime
 * @prop {string} issuer
 * @prop {string} parent
 * @prop {GRpcClient.StakeContext} stake
 * @prop {GRpcClient.StateContext} context
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.CoreProtocol
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.CoreProtocol
 * @prop {string} name
 * @prop {string} address
 */

/**
 * Structure of GRpcClient.ForgeState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ForgeState
 * @prop {string} address
 * @prop {GRpcClient.ConsensusParams} consensus
 * @prop {GRpcClient.UpgradeTasks} tasks
 * @prop {GRpcClient.StakeSummary} stakeSummary
 * @prop {string} version
 * @prop {GRpcClient.ForgeToken} token
 * @prop {GRpcClient.TransactionConfig} txConfig
 * @prop {Array<GRpcClient.CoreProtocol>} protocols
 * @prop {number} gas
 * @prop {GRpcClient.UpgradeInfo} upgradeInfo
 * @prop {GRpcClient.AccountConfig} accountConfig
 * @prop {GRpcClient.TokenSwapConfig} tokenSwapConfig
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.RootState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RootState
 * @prop {string} address
 * @prop {Uint8Array} account
 * @prop {Uint8Array} asset
 * @prop {Uint8Array} receipt
 * @prop {Uint8Array} protocol
 * @prop {Uint8Array} governance
 * @prop {Uint8Array} custom
 */

/**
 * Structure of GRpcClient.StakeState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StakeState
 * @prop {string} address
 * @prop {string} from
 * @prop {string} to
 * @prop {GRpcClient.BigUint} balance
 * @prop {string} message
 * @prop {GRpcClient.StateContext} context
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.StatisticsState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StatisticsState
 * @prop {string} address
 * @prop {number} numBlocks
 * @prop {number} numTxs
 * @prop {GRpcClient.BigUint} numStakes
 * @prop {number} numValidators
 * @prop {GRpcClient.TxStatistics} txStatistics
 */

/**
 * Structure of GRpcClient.BlacklistState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BlacklistState
 * @prop {Array<string>} address
 */

/**
 * Structure of GRpcClient.ProtocolState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ProtocolState
 * @prop {string} address
 * @prop {GRpcClient.DeployProtocolTx} itx
 * @prop {Uint8Array} rootHash
 * @prop {GRpcClient.ProtocolStatus} status
 * @prop {Array<string>} migratedTo
 * @prop {Array<string>} migratedFrom
 * @prop {GRpcClient.StateContext} context
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.SwapState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.SwapState
 * @prop {string} hash
 * @prop {string} address
 * @prop {Uint8Array} hashkey
 * @prop {string} sender
 * @prop {string} receiver
 * @prop {GRpcClient.BigUint} value
 * @prop {Array<string>} assets
 * @prop {number} locktime
 * @prop {Uint8Array} hashlock
 * @prop {GRpcClient.StateContext} context
 */

/**
 * Structure of GRpcClient.SwapStatistics
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.SwapStatistics
 * @prop {string} address
 * @prop {GRpcClient.BigUint} lockedValueOut
 * @prop {GRpcClient.BigUint} lockedValueIn
 * @prop {number} lockedAssetsOut
 * @prop {number} lockedAssetsIn
 */

/**
 * Structure of GRpcClient.DelegateOpState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DelegateOpState
 * @prop {string} rule
 * @prop {number} numTxs
 * @prop {number} numTxsDelta
 * @prop {GRpcClient.BigUint} balance
 * @prop {GRpcClient.BigUint} balanceDelta
 */

/**
 * Structure of GRpcClient.DelegateState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DelegateState
 * @prop {string} address
 * @prop {GRpcClient.DelegateOpState} ops
 * @prop {GRpcClient.StateContext} context
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.AssetFactoryState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AssetFactoryState
 * @prop {string} description
 * @prop {number} limit
 * @prop {GRpcClient.BigUint} price
 * @prop {string} template
 * @prop {Array<string>} allowedSpecArgs
 * @prop {string} assetName
 * @prop {GRpcClient.AssetAttributes} attributes
 * @prop {number} numCreated
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.CodeInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.CodeInfo
 * @prop {Uint8Array} checksum
 * @prop {Uint8Array} binary
 */

/**
 * Structure of GRpcClient.TypeUrls
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TypeUrls
 * @prop {string} url
 * @prop {string} module
 */

/**
 * Structure of GRpcClient.DeployProtocolTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "name": "arcblock",
  "version": 2,
  "namespace": "arcblock",
  "description": "arcblock",
  "typeUrls": [
    {
      "url": "arcblock",
      "module": "arcblock"
    },
    {
      "url": "arcblock",
      "module": "arcblock"
    }
  ],
  "proto": "arcblock",
  "pipeline": "arcblock",
  "sources": [
    "arcblock",
    "arcblock"
  ],
  "code": [
    {
      "checksum": {},
      "binary": {}
    },
    {
      "checksum": {},
      "binary": {}
    }
  ],
  "tags": [
    "arcblock",
    "arcblock"
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DeployProtocolTx
 * @prop {string} address
 * @prop {string} name
 * @prop {number} version
 * @prop {string} namespace
 * @prop {string} description
 * @prop {Array<GRpcClient.TypeUrls>} typeUrls
 * @prop {string} proto
 * @prop {string} pipeline
 * @prop {Array<string>} sources
 * @prop {Array<GRpcClient.CodeInfo>} code
 * @prop {Array<string>} tags
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.AccountMigrateTx
 *
```javascript
{
  "pk": {},
  "type": {
    "pk": 0,
    "hash": 0,
    "address": 0,
    "role": 0
  },
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AccountMigrateTx
 * @prop {Uint8Array} pk
 * @prop {GRpcClient.WalletType} type
 * @prop {string} address
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.DeclareTx
 *
```javascript
{
  "moniker": "arcblock",
  "issuer": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DeclareTx
 * @prop {string} moniker
 * @prop {string} issuer
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.DelegateTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "ops": [
    {
      "typeUrl": "arcblock",
      "rules": [
        "arcblock",
        "arcblock"
      ]
    },
    {
      "typeUrl": "arcblock",
      "rules": [
        "arcblock",
        "arcblock"
      ]
    }
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DelegateTx
 * @prop {string} address
 * @prop {string} to
 * @prop {Array<GRpcClient.DelegateOp>} ops
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.DelegateOp
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DelegateOp
 * @prop {string} typeUrl
 * @prop {Array<string>} rules
 */

/**
 * Structure of GRpcClient.RevokeDelegateTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "typeUrls": [
    "arcblock",
    "arcblock"
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RevokeDelegateTx
 * @prop {string} address
 * @prop {string} to
 * @prop {Array<string>} typeUrls
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.AssetSpec
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AssetSpec
 * @prop {string} address
 * @prop {string} data
 */

/**
 * Structure of GRpcClient.AcquireAssetTx
 *
```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "specs": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "data": "arcblock"
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "data": "arcblock"
    }
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AcquireAssetTx
 * @prop {string} to
 * @prop {Array<GRpcClient.AssetSpec>} specs
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.ConsumeAssetTx
 *
```javascript
{
  "issuer": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ConsumeAssetTx
 * @prop {string} issuer
 * @prop {string} address
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.CreateAssetTx
 *
```javascript
{
  "moniker": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  },
  "readonly": true,
  "transferrable": true,
  "ttl": 2,
  "parent": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.CreateAssetTx
 * @prop {string} moniker
 * @prop {GRpcClient.Any} data
 * @prop {boolean} readonly
 * @prop {boolean} transferrable
 * @prop {number} ttl
 * @prop {string} parent
 * @prop {string} address
 */

/**
 * Structure of GRpcClient.AssetAttributes
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AssetAttributes
 * @prop {boolean} transferrable
 * @prop {number} ttl
 */

/**
 * Structure of GRpcClient.AssetFactory
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AssetFactory
 * @prop {string} description
 * @prop {number} limit
 * @prop {GRpcClient.BigUint} price
 * @prop {string} template
 * @prop {Array<string>} allowedSpecArgs
 * @prop {string} assetName
 * @prop {GRpcClient.AssetAttributes} attributes
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.UpdateAssetTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "moniker": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpdateAssetTx
 * @prop {string} address
 * @prop {string} moniker
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.UpdateConsensusParamsTx
 *
```javascript
{
  "delegateConfig": {
    "deltaInterval": 2,
    "typeUrls": [
      "arcblock",
      "arcblock"
    ]
  },
  "declareConfig": {
    "restricted": true,
    "hierarchy": 2
  },
  "tokenSwapConfig": {
    "commissionHolderAddress": "arcblock",
    "commissionRate": 2,
    "revokeCommissionRate": 2
  },
  "moderatorConfig": {
    "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "pk": {}
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpdateConsensusParamsTx
 * @prop {GRpcClient.DelegateConfig} delegateConfig
 * @prop {GRpcClient.DeclareConfig} declareConfig
 * @prop {GRpcClient.TokenSwapConfig} tokenSwapConfig
 * @prop {GRpcClient.AccountConfig} moderatorConfig
 */

/**
 * Structure of GRpcClient.UpdateValidatorTx
 *
```javascript
{
  "candidates": [
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "power": 5
    },
    {
      "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
      "power": 5
    }
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpdateValidatorTx
 * @prop {Array<GRpcClient.Validator>} candidates
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.UpgradeNodeTx
 *
```javascript
{
  "height": 5,
  "version": "arcblock",
  "override": true
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.UpgradeNodeTx
 * @prop {number} height
 * @prop {string} version
 * @prop {boolean} override
 */

/**
 * Structure of GRpcClient.PokeTx
 *
```javascript
{
  "date": "arcblock",
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PokeTx
 * @prop {string} date
 * @prop {string} address
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.RefuelTx
 *
```javascript
{
  "date": "arcblock",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RefuelTx
 * @prop {string} date
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.RetrieveSwapTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "hashkey": {},
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RetrieveSwapTx
 * @prop {string} address
 * @prop {Uint8Array} hashkey
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.RevokeSwapTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RevokeSwapTx
 * @prop {string} address
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.SetupSwapTx
 *
```javascript
{
  "assets": [
    "arcblock",
    "arcblock"
  ],
  "receiver": "arcblock",
  "hashlock": {},
  "locktime": 2,
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.SetupSwapTx
 * @prop {GRpcClient.BigUint} value
 * @prop {Array<string>} assets
 * @prop {string} receiver
 * @prop {Uint8Array} hashlock
 * @prop {number} locktime
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.ApproveWithdrawTx
 *
```javascript
{
  "withdrawTxHash": "arcblock",
  "evidence": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "chainType": "arcblock",
    "chainId": "arcblock",
    "originalTx": {},
    "receiverAddress": "arcblock"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ApproveWithdrawTx
 * @prop {string} withdrawTxHash
 * @prop {GRpcClient.Evidence} evidence
 */

/**
 * Structure of GRpcClient.DepositTokenTx
 *
```javascript
{
  "address": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "evidence": {
    "hash": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
    "chainType": "arcblock",
    "chainId": "arcblock",
    "originalTx": {},
    "receiverAddress": "arcblock"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DepositTokenTx
 * @prop {GRpcClient.BigUint} value
 * @prop {string} address
 * @prop {GRpcClient.Evidence} evidence
 */

/**
 * Structure of GRpcClient.RevokeWithdrawTx
 *
```javascript
{
  "withdrawTxHash": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RevokeWithdrawTx
 * @prop {string} withdrawTxHash
 */

/**
 * Structure of GRpcClient.WithdrawTokenTx
 *
```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "chainType": "arcblock",
  "chainId": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.WithdrawTokenTx
 * @prop {GRpcClient.BigUint} value
 * @prop {string} to
 * @prop {string} chainType
 * @prop {string} chainId
 */

/**
 * Structure of GRpcClient.ExchangeInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ExchangeInfo
 * @prop {GRpcClient.BigUint} value
 * @prop {Array<string>} assets
 */

/**
 * Structure of GRpcClient.ExchangeTx
 *
```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "sender": {
    "assets": [
      "arcblock",
      "arcblock"
    ]
  },
  "receiver": {
    "assets": [
      "arcblock",
      "arcblock"
    ]
  },
  "expiredAt": "2020-03-25T23:35:44.515Z",
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ExchangeTx
 * @prop {string} to
 * @prop {GRpcClient.ExchangeInfo} sender
 * @prop {GRpcClient.ExchangeInfo} receiver
 * @prop {GRpcClient.Timestamp} expiredAt
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.TransferTx
 *
```javascript
{
  "to": "F2D072CBD4954A20F26280730795D91AC1039996CEB6E24A31E9CE548DCB5E55",
  "assets": [
    "arcblock",
    "arcblock"
  ],
  "data": {
    "type": "string",
    "value": "ABCD 1234"
  }
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TransferTx
 * @prop {string} to
 * @prop {GRpcClient.BigUint} value
 * @prop {Array<string>} assets
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.PageOrder
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PageOrder
 * @prop {string} field
 * @prop {string} type
 */

/**
 * Structure of GRpcClient.PageInput
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PageInput
 * @prop {string} cursor
 * @prop {number} size
 * @prop {Array<GRpcClient.PageOrder>} order
 */

/**
 * Structure of GRpcClient.TypeFilter
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TypeFilter
 * @prop {Array<string>} types
 */

/**
 * Structure of GRpcClient.TimeFilter
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.TimeFilter
 * @prop {string} startDateTime
 * @prop {string} endDateTime
 */


/**
 * Structure of GRpcClient.AddressFilter
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AddressFilter
 * @prop {string} sender
 * @prop {string} receiver
 * @prop {GRpcClient.Direction} direction
 */

/**
 * Structure of GRpcClient.PageInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PageInfo
 * @prop {string} cursor
 * @prop {boolean} next
 * @prop {number} total
 */

/**
 * Structure of GRpcClient.IndexedTransaction
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.IndexedTransaction
 * @prop {string} hash
 * @prop {string} sender
 * @prop {string} receiver
 * @prop {string} time
 * @prop {string} type
 * @prop {GRpcClient.Transaction} tx
 * @prop {boolean} valid
 * @prop {GRpcClient.StatusCode} code
 */

/**
 * Structure of GRpcClient.IndexedAccountState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.IndexedAccountState
 * @prop {string} address
 * @prop {GRpcClient.BigUint} balance
 * @prop {number} numAssets
 * @prop {number} numTxs
 * @prop {number} nonce
 * @prop {string} genesisTime
 * @prop {string} renaissanceTime
 * @prop {string} moniker
 * @prop {string} migratedFrom
 * @prop {string} migratedTo
 * @prop {GRpcClient.BigUint} totalReceivedStakes
 * @prop {GRpcClient.BigUint} totalStakes
 * @prop {GRpcClient.BigUint} totalUnstakes
 * @prop {Array<number>} recentNumTxs
 */

/**
 * Structure of GRpcClient.IndexedAssetState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.IndexedAssetState
 * @prop {string} address
 * @prop {string} owner
 * @prop {string} genesisTime
 * @prop {string} renaissanceTime
 * @prop {string} moniker
 * @prop {boolean} readonly
 * @prop {string} consumedTime
 * @prop {string} issuer
 * @prop {string} parent
 * @prop {boolean} transferrable
 * @prop {number} ttl
 * @prop {GRpcClient.Any} data
 */

/**
 * Structure of GRpcClient.IndexedStakeState
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.IndexedStakeState
 * @prop {string} address
 * @prop {GRpcClient.BigUint} balance
 * @prop {string} sender
 * @prop {string} receiver
 * @prop {string} genesisTime
 * @prop {string} renaissanceTime
 * @prop {string} message
 * @prop {number} type
 */

/**
 * Structure of GRpcClient.IndexedBlock
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.IndexedBlock
 * @prop {number} height
 * @prop {string} time
 * @prop {string} proposer
 * @prop {number} numTxs
 * @prop {number} numInvalidTxs
 */

/**
 * Structure of GRpcClient.HealthStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.HealthStatus
 * @prop {GRpcClient.ConsensusStatus} consensus
 * @prop {GRpcClient.NetworkStatus} network
 * @prop {GRpcClient.StorageStatus} storage
 * @prop {GRpcClient.ForgeStatus} forge
 */

/**
 * Structure of GRpcClient.ConsensusStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ConsensusStatus
 * @prop {boolean} health
 * @prop {boolean} synced
 * @prop {number} blockHeight
 */

/**
 * Structure of GRpcClient.NetworkStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.NetworkStatus
 * @prop {boolean} health
 * @prop {number} numPeers
 */

/**
 * Structure of GRpcClient.StorageStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.StorageStatus
 * @prop {boolean} health
 * @prop {string} indexerServer
 * @prop {string} stateDb
 * @prop {GRpcClient.DiskSpaceStatus} diskSpace
 */

/**
 * Structure of GRpcClient.DiskSpaceStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.DiskSpaceStatus
 * @prop {string} forgeUsage
 * @prop {string} total
 */

/**
 * Structure of GRpcClient.ForgeStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ForgeStatus
 * @prop {boolean} health
 * @prop {string} abiServer
 * @prop {string} forgeWeb
 * @prop {GRpcClient.AbciServerStatus} abciServer
 */

/**
 * Structure of GRpcClient.AbciServerStatus
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.AbciServerStatus
 * @prop {string} abciConsensus
 * @prop {string} abciInfo
 */


/**
 * Structure of GRpcClient.ValidityFilter
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ValidityFilter
 * @prop {GRpcClient.Validity} validity
 */

/**
 * Structure of GRpcClient.RangeFilter
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RangeFilter
 * @prop {number} from
 * @prop {number} to
 */


/**
 * Structure of GRpcClient.Timestamp
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Timestamp
 * @prop {number} seconds
 * @prop {number} nanos
 */

/**
 * Structure of GRpcClient.Any
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Any
 * @prop {string} type_url
 * @prop {Uint8Array} value
 */

/**
 * Structure of GRpcClient.KVPair
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.KVPair
 * @prop {Uint8Array} key
 * @prop {Uint8Array} value
 */

/**
 * Structure of GRpcClient.BlockParams
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BlockParams
 * @prop {number} maxBytes
 * @prop {number} maxGas
 */

/**
 * Structure of GRpcClient.EvidenceParams
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.EvidenceParams
 * @prop {number} maxAge
 */

/**
 * Structure of GRpcClient.ValidatorParams
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ValidatorParams
 * @prop {Array<string>} pubKeyTypes
 */

/**
 * Structure of GRpcClient.ConsensusParams
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ConsensusParams
 * @prop {GRpcClient.BlockParams} block
 * @prop {GRpcClient.EvidenceParams} evidence
 * @prop {GRpcClient.ValidatorParams} validator
 */

/**
 * Structure of GRpcClient.LastCommitInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.LastCommitInfo
 * @prop {number} round
 * @prop {Array<GRpcClient.VoteInfo>} votes
 */

/**
 * Structure of GRpcClient.Version
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Version
 * @prop {number} Block
 * @prop {number} App
 */

/**
 * Structure of GRpcClient.BlockID
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.BlockID
 * @prop {Uint8Array} hash
 * @prop {GRpcClient.PartSetHeader} partsHeader
 */

/**
 * Structure of GRpcClient.PartSetHeader
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PartSetHeader
 * @prop {number} total
 * @prop {Uint8Array} hash
 */

/**
 * Structure of GRpcClient.Validator
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Validator
 * @prop {Uint8Array} address
 * @prop {number} power
 */

/**
 * Structure of GRpcClient.ValidatorUpdate
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ValidatorUpdate
 * @prop {GRpcClient.PubKey} pubKey
 * @prop {number} power
 */

/**
 * Structure of GRpcClient.VoteInfo
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.VoteInfo
 * @prop {GRpcClient.Validator} validator
 * @prop {boolean} signedLastBlock
 */

/**
 * Structure of GRpcClient.PubKey
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.PubKey
 * @prop {string} type
 * @prop {Uint8Array} data
 */

/**
 * Structure of GRpcClient.Evidence
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Evidence
 * @prop {string} type
 * @prop {GRpcClient.Validator} validator
 * @prop {number} height
 * @prop {GRpcClient.Timestamp} time
 * @prop {number} totalVotingPower
 */

/**
 * Structure of GRpcClient.Header
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.Header
 * @prop {GRpcClient.Version} version
 * @prop {string} chainId
 * @prop {number} height
 * @prop {GRpcClient.Timestamp} time
 * @prop {number} numTxs
 * @prop {number} totalTxs
 * @prop {GRpcClient.BlockID} lastBlockId
 * @prop {Uint8Array} lastCommitHash
 * @prop {Uint8Array} dataHash
 * @prop {Uint8Array} validatorsHash
 * @prop {Uint8Array} nextValidatorsHash
 * @prop {Uint8Array} consensusHash
 * @prop {Uint8Array} appHash
 * @prop {Uint8Array} lastResultsHash
 * @prop {Uint8Array} evidenceHash
 * @prop {Uint8Array} proposerAddress
 */

/**
 * Structure of GRpcClient.RequestBeginBlock
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestBeginBlock
 * @prop {Uint8Array} hash
 * @prop {GRpcClient.Header} header
 * @prop {GRpcClient.LastCommitInfo} lastCommitInfo
 * @prop {Array<GRpcClient.Evidence>} byzantineValidators
 */

/**
 * Structure of GRpcClient.RequestEndBlock
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.RequestEndBlock
 * @prop {number} height
 */

/**
 * Structure of GRpcClient.ResponseBeginBlock
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseBeginBlock
 * @prop {Array<GRpcClient.KVPair>} tags
 */

/**
 * Structure of GRpcClient.ResponseEndBlock
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseEndBlock
 * @prop {Array<GRpcClient.ValidatorUpdate>} validatorUpdates
 * @prop {GRpcClient.ConsensusParams} consensusParamUpdates
 * @prop {Array<GRpcClient.KVPair>} tags
 */

/**
 * Structure of GRpcClient.ResponseCheckTx
 *
```javascript
{
  "code": 2,
  "data": {},
  "log": "arcblock",
  "info": "arcblock",
  "tags": [
    {
      "key": {},
      "value": {}
    },
    {
      "key": {},
      "value": {}
    }
  ],
  "codespace": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseCheckTx
 * @prop {number} code
 * @prop {Uint8Array} data
 * @prop {string} log
 * @prop {string} info
 * @prop {number} gasWanted
 * @prop {number} gasUsed
 * @prop {Array<GRpcClient.KVPair>} tags
 * @prop {string} codespace
 */

/**
 * Structure of GRpcClient.ResponseDeliverTx
 *
```javascript
{
  "code": 2,
  "data": {},
  "log": "arcblock",
  "info": "arcblock",
  "tags": [
    {
      "key": {},
      "value": {}
    },
    {
      "key": {},
      "value": {}
    }
  ],
  "codespace": "arcblock"
}
```
 *
 * @memberof GRpcClient
 * @typedef {object} GRpcClient.ResponseDeliverTx
 * @prop {number} code
 * @prop {Uint8Array} data
 * @prop {string} log
 * @prop {string} info
 * @prop {number} gasWanted
 * @prop {number} gasUsed
 * @prop {Array<GRpcClient.KVPair>} tags
 * @prop {string} codespace
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#sendTx
 * @param {GRpcClient.RequestSendTx} params
 * @returns {Promise.<GRpcClient.ResponseSendTx>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getTx
 * @param {GRpcClient.RequestGetTx} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseGetTx} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getBlock
 * @param {GRpcClient.RequestGetBlock} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseGetBlock} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getBlocks
 * @param {GRpcClient.RequestGetBlocks} params
 * @returns {Promise.<GRpcClient.ResponseGetBlocks>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getUnconfirmedTxs
 * @param {GRpcClient.RequestGetUnconfirmedTxs} params
 * @returns {Promise.<GRpcClient.ResponseGetUnconfirmedTxs>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getChainInfo
 * @param {GRpcClient.RequestGetChainInfo} params
 * @returns {Promise.<GRpcClient.ResponseGetChainInfo>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getNodeInfo
 * @param {GRpcClient.RequestGetNodeInfo} params
 * @returns {Promise.<GRpcClient.ResponseGetNodeInfo>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#search
 * @param {GRpcClient.RequestSearch} params
 * @returns {Promise.<GRpcClient.ResponseSearch>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getNetInfo
 * @param {GRpcClient.RequestGetNetInfo} params
 * @returns {Promise.<GRpcClient.ResponseGetNetInfo>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getValidatorsInfo
 * @param {GRpcClient.RequestGetValidatorsInfo} params
 * @returns {Promise.<GRpcClient.ResponseGetValidatorsInfo>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getConfig
 * @param {GRpcClient.RequestGetConfig} params
 * @returns {Promise.<GRpcClient.ResponseGetConfig>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#subscribe
 * @param {GRpcClient.RequestSubscribe} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseSubscribe} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#unsubscribe
 * @param {GRpcClient.RequestUnsubscribe} params
 * @returns {Promise.<GRpcClient.ResponseUnsubscribe>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getAccountState
 * @param {GRpcClient.RequestGetAccountState} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseGetAccountState} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getAssetState
 * @param {GRpcClient.RequestGetAssetState} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseGetAssetState} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getForgeState
 * @param {GRpcClient.RequestGetForgeState} params
 * @returns {Promise.<GRpcClient.ResponseGetForgeState>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getSwapState
 * @param {GRpcClient.RequestGetSwapState} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseGetSwapState} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getDelegateState
 * @param {GRpcClient.RequestGetDelegateState} params
 * @returns {EventEmitter} EventEmitter that emits `data` event when new data received, checkout {@link GRpcClient.ResponseGetDelegateState} for payload format.
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#declareNode
 * @param {GRpcClient.RequestDeclareNode} params
 * @returns {Promise.<GRpcClient.ResponseDeclareNode>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getForgeStats
 * @param {GRpcClient.RequestGetForgeStats} params
 * @returns {Promise.<GRpcClient.ResponseGetForgeStats>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listTransactions
 * @param {GRpcClient.RequestListTransactions} params
 * @returns {Promise.<GRpcClient.ResponseListTransactions>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listAssets
 * @param {GRpcClient.RequestListAssets} params
 * @returns {Promise.<GRpcClient.ResponseListAssets>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listStakes
 * @param {GRpcClient.RequestListStakes} params
 * @returns {Promise.<GRpcClient.ResponseListStakes>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listAccount
 * @param {GRpcClient.RequestListAccount} params
 * @returns {Promise.<GRpcClient.ResponseListAccount>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listTopAccounts
 * @param {GRpcClient.RequestListTopAccounts} params
 * @returns {Promise.<GRpcClient.ResponseListTopAccounts>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listAssetTransactions
 * @param {GRpcClient.RequestListAssetTransactions} params
 * @returns {Promise.<GRpcClient.ResponseListAssetTransactions>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listBlocks
 * @param {GRpcClient.RequestListBlocks} params
 * @returns {Promise.<GRpcClient.ResponseListBlocks>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getHealthStatus
 * @param {GRpcClient.RequestGetHealthStatus} params
 * @returns {Promise.<GRpcClient.ResponseGetHealthStatus>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#listSwap
 * @param {GRpcClient.RequestListSwap} params
 * @returns {Promise.<GRpcClient.ResponseListSwap>}
 */

/**
 * Send gRPC call and return the result
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#getSwapStatistics
 * @param {GRpcClient.RequestGetSwapStatistics} params
 * @returns {Promise.<GRpcClient.ResponseGetSwapStatistics>}
 */

/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendAccountMigrateTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendAccountMigrateTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendAccountMigrateTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#0
 * @param {GRpcClient.sendAccountMigrateTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendAcquireAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendAcquireAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendAcquireAssetTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#1
 * @param {GRpcClient.sendAcquireAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendApproveWithdrawTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendApproveWithdrawTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendApproveWithdrawTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#2
 * @param {GRpcClient.sendApproveWithdrawTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendConsumeAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendConsumeAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendConsumeAssetTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#3
 * @param {GRpcClient.sendConsumeAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendCreateAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendCreateAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendCreateAssetTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#4
 * @param {GRpcClient.sendCreateAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendDeclareTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendDeclareTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendDeclareTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#5
 * @param {GRpcClient.sendDeclareTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendDelegateTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendDelegateTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendDelegateTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#6
 * @param {GRpcClient.sendDelegateTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendDepositTokenTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendDepositTokenTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendDepositTokenTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#7
 * @param {GRpcClient.sendDepositTokenTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendExchangeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendExchangeTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendExchangeTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#8
 * @param {GRpcClient.sendExchangeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendPokeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendPokeTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendPokeTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#9
 * @param {GRpcClient.sendPokeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendRefuelTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendRefuelTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendRefuelTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#10
 * @param {GRpcClient.sendRefuelTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendRetrieveSwapTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendRetrieveSwapTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendRetrieveSwapTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#11
 * @param {GRpcClient.sendRetrieveSwapTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendRevokeDelegateTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendRevokeDelegateTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendRevokeDelegateTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#12
 * @param {GRpcClient.sendRevokeDelegateTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendRevokeSwapTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendRevokeSwapTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendRevokeSwapTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#13
 * @param {GRpcClient.sendRevokeSwapTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendRevokeWithdrawTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendRevokeWithdrawTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendRevokeWithdrawTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#14
 * @param {GRpcClient.sendRevokeWithdrawTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendSetupSwapTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendSetupSwapTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendSetupSwapTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#15
 * @param {GRpcClient.sendSetupSwapTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendTransferTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendTransferTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendTransferTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#16
 * @param {GRpcClient.sendTransferTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendUpdateAssetTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendUpdateAssetTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendUpdateAssetTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#17
 * @param {GRpcClient.sendUpdateAssetTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendUpdateConsensusParamsTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendUpdateConsensusParamsTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendUpdateConsensusParamsTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#18
 * @param {GRpcClient.sendUpdateConsensusParamsTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendUpdateValidatorTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendUpdateValidatorTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendUpdateValidatorTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#19
 * @param {GRpcClient.sendUpdateValidatorTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendUpgradeNodeTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendUpgradeNodeTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendUpgradeNodeTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#20
 * @param {GRpcClient.sendUpgradeNodeTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * @memberof GRpcClient
 * @typedef {Object} GRpcClient.sendWithdrawTokenTxInput
 * @prop {object} input
 * @prop {object} input.tx - data of the transaction
 * @prop {GRpcClient.sendWithdrawTokenTx} input.tx.itx - the actual transaction object
 * @prop {string} [input.tx.pk] - the sender pk
 * @prop {string} [input.tx.from] - the sender address, can be derived from wallet
 * @prop {number} [input.tx.nonce] - the tx nonce, defaults to Date.now if not set
 * @prop {string} [input.tx.chainId] - the chainId
 * @prop {string} [input.tx.signature] - transaction signature
 * @prop {array} [input.tx.signatures] - transaction signatures, should be set when it's a multisig transaction
 * @prop {object} input.wallet - the wallet used to sign the transaction, either a forge managed wallet or user managed wallet
 * @prop {string} [input.signature] - the signature of the tx, if this parameter exist, we will not sign the transaction
 */

/**
 * Send sendWithdrawTokenTx transaction and get the hash, use {@link GRpcClient#getTx} to get transaction detail
 *
 * @memberof GRpcClient
 * @function
 * @name GRpcClient#21
 * @param {GRpcClient.sendWithdrawTokenTxInput} params
 * @returns {Promise<string>} returns transaction hash if success, otherwise error was thrown
 */


/**
 * Encode a encodeAccountMigrateTx transaction for later use
 *
 * @name GRpcClient#0
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeAccountMigrateTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeAcquireAssetTx transaction for later use
 *
 * @name GRpcClient#1
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeAcquireAssetTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeApproveWithdrawTx transaction for later use
 *
 * @name GRpcClient#2
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeApproveWithdrawTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeConsumeAssetTx transaction for later use
 *
 * @name GRpcClient#3
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeConsumeAssetTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeCreateAssetTx transaction for later use
 *
 * @name GRpcClient#4
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeCreateAssetTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeDeclareTx transaction for later use
 *
 * @name GRpcClient#5
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeDeclareTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeDelegateTx transaction for later use
 *
 * @name GRpcClient#6
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeDelegateTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeDepositTokenTx transaction for later use
 *
 * @name GRpcClient#7
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeDepositTokenTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeExchangeTx transaction for later use
 *
 * @name GRpcClient#8
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeExchangeTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodePokeTx transaction for later use
 *
 * @name GRpcClient#9
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodePokeTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeRefuelTx transaction for later use
 *
 * @name GRpcClient#10
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeRefuelTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeRetrieveSwapTx transaction for later use
 *
 * @name GRpcClient#11
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeRetrieveSwapTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeRevokeDelegateTx transaction for later use
 *
 * @name GRpcClient#12
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeRevokeDelegateTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeRevokeSwapTx transaction for later use
 *
 * @name GRpcClient#13
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeRevokeSwapTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeRevokeWithdrawTx transaction for later use
 *
 * @name GRpcClient#14
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeRevokeWithdrawTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeSetupSwapTx transaction for later use
 *
 * @name GRpcClient#15
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeSetupSwapTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeTransferTx transaction for later use
 *
 * @name GRpcClient#16
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeTransferTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeUpdateAssetTx transaction for later use
 *
 * @name GRpcClient#17
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeUpdateAssetTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeUpdateConsensusParamsTx transaction for later use
 *
 * @name GRpcClient#18
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeUpdateConsensusParamsTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeUpdateValidatorTx transaction for later use
 *
 * @name GRpcClient#19
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeUpdateValidatorTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeUpgradeNodeTx transaction for later use
 *
 * @name GRpcClient#20
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeUpgradeNodeTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */


/**
 * Encode a encodeWithdrawTokenTx transaction for later use
 *
 * @name GRpcClient#21
 * @function
 * @memberof GRpcClient
 * @param {GRpcClient.encodeWithdrawTokenTxInput} params
 * @returns {Promise<GRpcClient.TxEncodeOutput>} result - we provide two formats of the encoding result, binary presentation and human readable object
 */
