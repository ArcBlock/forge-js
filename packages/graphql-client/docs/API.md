# Forge GraphQL API List

> Updated on 2019-02-17T00:36:53.771Z


## Table of Contents

* [Queries](#queries)
  * [getAccountState](#getaccountstate)
  * [getAssetState](#getassetstate)
  * [getBlock](#getblock)
  * [getBlocks](#getblocks)
  * [getChainInfo](#getchaininfo)
  * [getConfig](#getconfig)
  * [getForgeState](#getforgestate)
  * [getForgeStatistics](#getforgestatistics)
  * [getForgeStatisticsByDay](#getforgestatisticsbyday)
  * [getForgeStatisticsByHour](#getforgestatisticsbyhour)
  * [getNetInfo](#getnetinfo)
  * [getStakeState](#getstakestate)
  * [getTx](#gettx)
  * [getUnconfirmedTxs](#getunconfirmedtxs)
  * [getValidatorsInfo](#getvalidatorsinfo)
  * [listWallet](#listwallet)
  * [loadFile](#loadfile)
  * [loadWallet](#loadwallet)
  * [multisig](#multisig)
  * [pinFile](#pinfile)
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
  getAccountState(address: "abc", appHash: "abc", keys: ["abc"]) {
    code
    state {
      address
      balance
      migratedFrom
      migratedTo
      moniker
      nonce
      numAssets
      numTxs
      pk
      context {
        genesisTime
        renaissanceTime
        genesisTx {
          code
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
          }
        }
        renaissanceTx {
          code
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
          }
        }
      }
      data {
        typeUrl
        value
      }
      pinnedFiles {
        circular
        fifo
        items
        maxItems
        typeUrl
      }
      stake {
        totalReceivedStakes
        totalStakes
        totalUnstakes
        recentReceivedStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
        recentStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
      }
      type {
        address
        hash
        pk
        role
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
  getAssetState(address: "abc", appHash: "abc", keys: ["abc"]) {
    code
    state {
      address
      moniker
      owner
      readonly
      context {
        genesisTime
        renaissanceTime
        genesisTx {
          code
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
          }
        }
        renaissanceTx {
          code
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
          }
        }
      }
      data {
        typeUrl
        value
      }
      stake {
        totalReceivedStakes
        totalStakes
        totalUnstakes
        recentReceivedStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
        }
        recentStakes {
          circular
          fifo
          items
          maxItems
          typeUrl
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
  getBlock(height: 123) {
    code
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

### getBlocks

#### Arguments

* **maxHeight**, optional, 
* **minHeight**, optional, 

#### Result Format

```graphql
{
  getBlocks(maxHeight: 123, minHeight: 123) {
    code
    blocks {
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
    code
    info {
      address
      appHash
      blockHash
      blockHeight
      blockTime
      consensusVersion
      dataVersion
      id
      moniker
      network
      supportedTxs
      synced
      totalTxs
      version
      votingPower
      forgeAppsVersion {
        key
        value
      }
    }
  }
}
```

### getConfig

#### Arguments

No arguments

#### Result Format

```graphql
{
  getConfig {
    code
    config
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
  getForgeState(appHash: "abc", keys: ["abc"]) {
    code
    state {
      address
      dataVersion
      forgeAppHash
      version
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
          totalStakes
          totalUnstakes
          context {
            genesisTime
            renaissanceTime
          }
        }
      }
      tasks {
        key
        value {
          item {
            actions
            dataHash
            type
          }
        }
      }
    }
  }
}
```

### getForgeStatistics

#### Arguments

No arguments

#### Result Format

```graphql
{
  getForgeStatistics {
    code
    forgeStatistics {
      numAccountMigrateTxs
      numBlocks
      numConsensusUpgradeTxs
      numCreateAssetTxs
      numDeclareFileTxs
      numDeclareTxs
      numExchangeTxs
      numStakes
      numStakeTxs
      numSysUpgradeTxs
      numTransferTxs
      numTxs
      numUpdateAssetTxs
      numValidators
    }
  }
}
```

### getForgeStatisticsByDay

#### Arguments

* **endDate**, optional, 
* **startDate**, optional, 

#### Result Format

```graphql
{
  getForgeStatisticsByDay(endDate: "abc", startDate: "abc") {
    code
    forgeStatistics {
      numAccountMigrateTxs
      numBlocks
      numConsensusUpgradeTxs
      numCreateAssetTxs
      numDeclareFileTxs
      numDeclareTxs
      numExchangeTxs
      numStakes
      numStakeTxs
      numSysUpgradeTxs
      numTransferTxs
      numTxs
      numUpdateAssetTxs
      numValidators
    }
  }
}
```

### getForgeStatisticsByHour

#### Arguments

* **date**, optional, 

#### Result Format

```graphql
{
  getForgeStatisticsByHour(date: "abc") {
    code
    forgeStatistics {
      numAccountMigrateTxs
      numBlocks
      numConsensusUpgradeTxs
      numCreateAssetTxs
      numDeclareFileTxs
      numDeclareTxs
      numExchangeTxs
      numStakes
      numStakeTxs
      numSysUpgradeTxs
      numTransferTxs
      numTxs
      numUpdateAssetTxs
      numValidators
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
    code
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
  getStakeState(address: "abc", appHash: "abc", keys: ["abc"]) {
    code
    state {
      address
      balance
      from
      message
      to
      context {
        genesisTime
        renaissanceTime
        genesisTx {
          code
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
          }
        }
        renaissanceTx {
          code
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
          }
        }
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
  getTx(hash: "abc") {
    code
    info {
      code
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
  getUnconfirmedTxs(limit: 123) {
    code
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
    code
    validatorsInfo {
      blockHeight
      validators {
        address
        name
        proposerPriority
        votingPower
        pubKey {
          data
          type
        }
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
    code
  }
}
```

### loadFile

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  loadFile(hash: "abc") {
    chunk
    code
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
  loadWallet(address: "abc", passphrase: "abc") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### multisig

#### Arguments

* **token**, optional, 
* **tx**, optional, 
* **wallet**, optional, 

#### Result Format

```graphql
{
  multisig(token: "abc", tx: "abc", wallet: "abc") {
    code
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

### pinFile

#### Arguments

* **hash**, optional, 

#### Result Format

```graphql
{
  pinFile(hash: "abc") {
    code
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
  search(key: "abc", value: "abc") {
    code
    txs {
      code
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
  subscribe(filter: "abc", type: "abc") {
    code
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
  createTx(from: "abc", itx: "abc", nonce: 123, token: "abc", wallet: "abc") {
    code
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
  createWallet(moniker: "abc", passphrase: "abc", type: "abc") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
```

### declare

#### Arguments

* **declareTx**, **required**, 
* **send**, optional, 
* **sign**, optional, 
* **token**, optional, 
* **wallet**, **required**, 

#### Result Format

```graphql
mutation {
  declare(declareTx: "abc", send: "abc", sign: true, token: "abc", wallet: "abc")
}
```

### declareNode

#### Arguments

* **validator**, optional, 

#### Result Format

```graphql
mutation {
  declareNode(validator: true) {
    code
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
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
  recoverWallet(data: "abc", moniker: "abc", passphrase: "abc", type: "abc") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
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
  removeWallet(address: "abc") {
    code
  }
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
  sendTx(commit: true, token: "abc", tx: "abc", wallet: "abc") {
    code
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
  storeFile(chunk: "abc") {
    code
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
  unsubscribe(topic: "abc") {
    code
  }
}
```
