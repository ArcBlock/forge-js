# Forge GraphQL API List

> Updated on 2019-01-28T09:21:20.399Z


## Table of Contents

* [Queries](#queries)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getChainInfo](#getchaininfo)
  * [getChannelState](#getchannelstate)
  * [getForgeState](#getforgestate)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listWallet](#listwallet)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [search](#search)
* [Subscriptions](#subscriptions)
  * [subscribe](#subscribe)
* [Mutations](#mutations)
  * [createTx](#createtx)
  * [createWallet](#createwallet)
  * [declare](#declare)
  * [declareNode](#declarenode)
  * [recoverWallet](#recoverwallet)
  * [removeWallet](#removewallet)
  * [sendTx](#sendtx)
  * [storeFile](#storefile)
  * [unsubscribe](#unsubscribe)


## Queries

### getAccountState

#### Arguments

* **address**, optional, 
* **appHash**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getAccountState {
    state {
      address
      migratedFrom
      migratedTo
      moniker
      nonce
      numAssets
      numTxs
      pk
      balance {
        value
      }
      context {
        genesisTime
        genesisTx
        renaissanceTime
        renaissanceTx
      }
      data {
        typeUrl
        value
      }
      stake {
        recentReceivedStakes {
          circular
          fifo
          maxItems
          typeUrl
          items {
            typeUrl
            value
          }
        }
        recentStakes {
          circular
          fifo
          maxItems
          typeUrl
          items {
            typeUrl
            value
          }
        }
        totalReceivedStakes {
          value
        }
        totalStakes {
          value
        }
        totalUnstakes {
          value
        }
      }
    }
  }
}
```

### getAssetState

#### Arguments

* **address**, optional, 
* **appHash**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getAssetState {
    state {
      address
      moniker
      owner
      readonly
      context {
        genesisTime
        genesisTx
        renaissanceTime
        renaissanceTx
      }
      data {
        typeUrl
        value
      }
      stake {
        recentReceivedStakes {
          circular
          fifo
          maxItems
          typeUrl
          items {
            typeUrl
            value
          }
        }
        recentStakes {
          circular
          fifo
          maxItems
          typeUrl
          items {
            typeUrl
            value
          }
        }
        totalReceivedStakes {
          value
        }
        totalStakes {
          value
        }
        totalUnstakes {
          value
        }
      }
    }
  }
}
```

### getBlock

#### Arguments

* **height**, optional, 

#### Result Format

```graphql
{
  getBlock {
    block {
      appHash
      height
      numTxs
      proposer
      time
      totalTxs
      txs {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
      }
    }
  }
}
```

### getChainInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getChainInfo {
    info {
      address
      appHash
      blockHash
      blockHeight
      blockTime
      id
      moniker
      network
      synced
      totalTxs
      version
      votingPower
    }
  }
}
```

### getChannelState

#### Arguments

* **address**, optional, 
* **appHash**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getChannelState {
    state {
      address
      maxConfirmed
      maxWaiting
      totalConfirmed
      confirmed {
        circular
        fifo
        maxItems
        typeUrl
        items {
          typeUrl
          value
        }
      }
      context {
        genesisTime
        genesisTx
        renaissanceTime
        renaissanceTx
      }
      data {
        typeUrl
        value
      }
      waiting {
        circular
        fifo
        maxItems
        typeUrl
        items {
          typeUrl
          value
        }
      }
    }
  }
}
```

### getForgeState

#### Arguments

* **appHash**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getForgeState {
    state {
      consensus {
        maxBytes
        maxCandidates
        maxGas
        maxValidators
        paramChanged
        pubKeyTypes
        validatorChanged
        validators {
          address
          power
        }
      }
      data {
        typeUrl
        value
      }
      stakeSummary {
        key
        value {
          context {
            genesisTime
            genesisTx
            renaissanceTime
            renaissanceTx
          }
          totalStakes {
            value
          }
          totalUnstakes {
            value
          }
        }
      }
      tasks {
        key
        value {
          item {
            dataHash
          }
        }
      }
    }
  }
}
```

### getNetInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getNetInfo {
    netInfo {
      listeners
      listening
      nPeers
      peers {
        nodeInfo {
          id
          ip
          moniker
          network
          version
          geoInfo {
            city
            country
            latitude
            longitude
          }
        }
      }
    }
  }
}
```

### getStakeState

#### Arguments

* **address**, optional, 
* **appHash**, optional, 
* **keys**, optional, 

#### Result Format

```graphql
{
  getStakeState {
    state {
      address
      from
      message
      to
      balance {
        value
      }
      context {
        genesisTime
        genesisTx
        renaissanceTime
        renaissanceTx
      }
      data {
        typeUrl
        value
      }
    }
  }
}
```

### getTx

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  getTx {
    info {
      hash
      height
      index
      tags {
        key
        value
      }
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
      }
    }
  }
}
```

### getUnconfirmedTxs

#### Arguments

* **limit**, optional, 

#### Result Format

```graphql
{
  getUnconfirmedTxs {
    unconfirmedTxs {
      nTxs
      txs {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
      }
    }
  }
}
```

### getValidatorsInfo

#### Arguments

No arguments

#### Result Format

```graphql
{
  getValidatorsInfo {
    validatorsInfo {
      blockHeight
      validators {
        address
        proposerPriority
        votingPower
      }
    }
  }
}
```

### listWallet

#### Arguments

No arguments

#### Result Format

```graphql
{
  listWallet {
    address
  }
}
```

### loadFile

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  loadFile {
    chunk
  }
}
```

### loadWallet

#### Arguments

* **address**, optional, 
* **passphrase**, optional, 

#### Result Format

```graphql
{
  loadWallet {
    token
  }
}
```

### search

#### Arguments

* **key**, optional, 
* **value**, optional, 

#### Result Format

```graphql
{
  search {
    txs {
      hash
      height
      index
      tags {
        key
        value
      }
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
      }
    }
  }
}
```


## Subscriptions

### subscribe

#### Arguments

* **filter**, optional, 
* **type**, optional, 

#### Result Format

```graphql
subscription {
  subscribe {
    topic
    accountMigrate {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    accountState {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    assetState {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    beginBlock {
      hash
      byzantineValidators {
        height
        time
        totalVotingPower
        type
        validator {
          address
          power
        }
      }
      header {
        appHash
        chainId
        consensusHash
        dataHash
        evidenceHash
        height
        lastCommitHash
        lastResultsHash
        nextValidatorsHash
        numTxs
        proposerAddress
        time
        totalTxs
        validatorsHash
        lastBlockId {
          hash
          partsHeader {
            hash
            total
          }
        }
        version {
          App
          Block
        }
      }
      lastCommitInfo {
        round
        votes {
          signedLastBlock
          validator {
            address
            power
          }
        }
      }
    }
    channelState {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    confirm {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    consensusUpgrade {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    createAsset {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    declare {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    declareFile {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    endBlock {
      height
    }
    exchange {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    forgeState {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    revoke {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    stake {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    stakeState {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    sysUpgrade {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    transfer {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
    updateAsset {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
  }
}
```


## Mutations

### createTx

#### Arguments

* **from**, optional, 
* **itx**, optional, 
* **nonce**, optional, 
* **token**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
mutation {
  createTx {
    tx {
      chainId
      from
      nonce
      signature
      signatures {
        key
        value
      }
    }
  }
}
```

### createWallet

#### Arguments

* **moniker**, optional, 
* **passphrase**, optional, 
* **type**, optional, 

#### Result Format

```graphql
mutation {
  createWallet {
    token
    wallet {
      address
      pk
      sk
    }
  }
}
```

### declare

#### Arguments

* **moniker**, **required**, moniker of the wallet
* **passphrase**, **required**, passphrase of the wallet

#### Result Format

```graphql
mutation {
  declare(moniker: "abc", passphrase: "abc")
}
```

### declareNode

#### Arguments

No arguments

#### Result Format

```graphql
mutation {
  declareNode {
    wallet {
      address
      pk
      sk
    }
  }
}
```

### recoverWallet

#### Arguments

* **data**, optional, 
* **moniker**, optional, 
* **passphrase**, optional, 
* **type**, optional, 

#### Result Format

```graphql
mutation {
  recoverWallet {
    token
    wallet {
      address
      pk
      sk
    }
  }
}
```

### removeWallet

#### Arguments

* **address**, optional, 

#### Result Format

```graphql
mutation {
  removeWallet
}
```

### sendTx

#### Arguments

* **commit**, optional, 
* **token**, optional, 
* **tx**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
mutation {
  sendTx {
    hash
  }
}
```

### storeFile

#### Arguments

* **chunk**, optional, 

#### Result Format

```graphql
mutation {
  storeFile {
    hash
  }
}
```

### unsubscribe

#### Arguments

* **topic**, optional, 

#### Result Format

```graphql
mutation {
  unsubscribe
}
```
