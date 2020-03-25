## 1.2.0 (March 25, 2020)

- chore: rerun upgrade script
- fix: lite and full proto
- chore: update latest graphql-client
- chore: update latest grpc-client
- chore: update latest forge-abi
- update readme

## 1.1.6 (March 24, 2020)

- add display parameter when signature

## 1.1.5 (March 23, 2020)

- update readme

## 1.1.4 (March 22, 2020)

- new badge create for svg support

## 1.1.3 (March 21, 2020)

- chore: tx util can now verify tx/account/assets
- chore(deps): bump acorn from 5.7.3 to 5.7.4 (#437)
- update readme

## 1.1.2 (March 19, 2020)

- pass challenge to onAuthResponse
- update readme

## 1.1.1 (March 18, 2020)

- chore: add challenge in did-auth
- fix: vs type should be supported when format message
- update readme

## 1.1.0 (March 17, 2020)

- feat: support vc type url
- update readme

## 1.0.39 (March 11, 2020)

- update readme
- update readme
- update readme
- update readme
- update readme
- update readme
- v1.0.38
- chore(deps): bump handlebars from 4.1.1 to 4.7.3 (#430)
- feat: support verifialble credential sdk and make it work in did-auth (#434)

## 1.0.38 (February 28, 2020)

- fix: swap retrieve handlers is broken on netlify
- update readme

## 1.0.37 (February 28, 2020)

- fix: swap retrieve handlers is broken on netlify
- update readme

## 1.0.36 (February 28, 2020)

- fix: asset_factory should respect chainId in constructor
- update readme

## 1.0.35 (February 27, 2020)

- fix: swap handler should respect option.swapKey
- update readme

## 1.0.34 (February 18, 2020)

- fix: did-auth does not work with nested routes
- update readme

## 1.0.33 (January 14, 2020)

- feat: support doBatch query
- update readme

## 1.0.32 (January 11, 2020)

- chore: update grpc-client with forge 1.0.7
- chore: update graphql-client with forge 1.0.7
- chore: update forge-proto with forge 1.0.7
- update readme

## 1.0.31 (January 09, 2020)

- fix: clientExtension.toLocktime
- update readme

## 1.0.30 (January 09, 2020)

- fix: [client-extension] make sdk work with more forge versions

## 1.0.29 (January 06, 2020)

- feat: [did-auth] support decline auth from wallet through action
- feat: [did-auth] support customize applink for agent authorization

## 1.0.28 (December 25, 2019)

- fix: lerna patch publish script

## 1.0.27 (December 25, 2019)

- chore: add script to publish alpha patch releases
- update readme

## 1.0.26 (December 24, 2019)

- chore: update forge-proto/grpc-client/graphql-client to latest forge
- update readme

## 1.0.25 (December 23, 2019)

- fix: [did-auth] wallet authenticator should use custom chainInfo on claim
- update readme

## 1.0.24 (December 22, 2019)

- chore: [did-auth] polish chainInfo params format
- feat: [did-auth] use baseUrl as default application link
- fix: [did-auth] test case in swap-handlers
- feat: [did-auth] support function as chainInfo

## 1.0.23 (December 17, 2019)

- chore: [did-auth] update debug statements
- chore: update docs
- feat: [forge-wallet] support verify without hashing the data
- update readme

## 1.0.22 (December 17, 2019)

- chore: improve debug statements in did-auth
- update readme

## 1.0.21 (December 17, 2019)

- chore: cleanup signature claim types and support only digest
- update readme

## 1.0.20 (December 16, 2019)

- fix: unified interface of did-auth signature claim
- update readme

## 1.0.19 (December 16, 2019)

- chore: remove console.log
- update readme

## 1.0.18 (December 16, 2019)

- fix: correct handling of multiple claim with same type in a batch
- fix: we need to call onAuth on each step when we have a multi step auth
- chore: do not connect on error for event-client
- update readme

## 1.0.17 (December 14, 2019)

- update readme
- update readme
- v1.0.16
- fix: did and crypto related issues when handling node/validator related workflow (#419)
- update readme

## 1.0.16 (December 13, 2019)

- feat: Jwt.sign can return the `header.payload`
- fix: test case of graphql-client
- feat: pack all posible paramas into extraParams in did-auth
- update readme

## 1.0.15 (December 12, 2019)

- chore: update docs
- chore: add stub to declare node
- chore: upgrade grpc-client with forge 1.0.2
- chore: upgrade forge-proto with forge 1.0.2
- chore: improve check user logic
- chore: update docs
- chore: add script to do forge-web powered restricted declare
- chore: refactor authenticator.sign
- fix: should check user also applies to api for browser
- chore: make restricted declare work
- Merge branch 'master' into feat/restricted-declare
- chore: make restricted declare work
- v1.0.14
- feat: support restricted declare tx

## 1.0.14 (December 11, 2019)

- fix: do not check did when a special target is specified in authPrincipal
- fix: seller_setup status is not reset after succeed
- update readme

## 1.0.13 (December 10, 2019)

- chore: add test case for event client and event server
- fix: error events are handled properly
- fix: did not updated correctly in token storage
- chore: emit meaningful events from memory storage
- refactor: emit standard storage events from storage, make event server code cleaner
- chore: update default mongo storage collection names to underscore case
- chore: basic event socket server implementation
- chore: basic event socket client implementation
- chore: make wallet handlers emit correct events
- update readme

## 1.0.12 (December 09, 2019)

- chore: update docs
- chore: support extract shortcut methods from client-extension source
- chore: update docs
- chore: upgrade graphql-client with forge 1.0.2
- chore: upgrade grpc-client with forge 1.0.2
- chore: upgrade forge-proto with forge 1.0.2
- update readme

## 1.0.11 (December 06, 2019)

- fix: not using correct field as demandChainId from swap claim
- update readme

## 1.0.10 (December 06, 2019)

- Merge 'origin/dependabot/npm_and_yarn/mixin-deep-1.3.2' into chore/improve-swap
- chore: support update demand and offer chain when finalize
- fix: use offerChain and demandChain from swap-strage after created swap
- feat: support custom offerChain in swap claim
- update readme
- Bump mixin-deep from 1.3.1 to 1.3.2

## 1.0.9 (December 04, 2019)

- fix: doc link 404 issue #356
- update readme

## 1.0.8 (December 04, 2019)

- chore: change default swap lock time to 1hour
- fix: swap storage list apis
- fix: should verify swap state before update swap storage
- update readme

## 1.0.7 (November 28, 2019)

- chore: update grpc examples
- chore: add validation for delegate tx
- chore: update docs
- chore: upgrade forge-sdk with forge 1.0.1
- chore: upgrade graphql-client with forge 1.0.1
- chore: upgrade grpc-client with forge 1.0.1
- chore: upgrade forge-proto with forge 1.0.1
- update readme

## 1.0.6 (November 22, 2019)

- fix: enforce session user and scan user not match checking
- update readme

## 1.0.5 (November 21, 2019)

- fix parse wallet user-agent bug
- update readme

## 1.0.4 (November 20, 2019)

- chore: update docs
- update readme

## 1.0.3 (November 20, 2019)

- feat: support extracting wallet os/version in did-auth #406
- fix: prevent double spent of atomic-swap #405
- update readme

## 1.0.2 (November 18, 2019)

- chore: update examples for grpc-client
- chore: add simple and gatekeeper asset consume example
- update readme

## 1.0.1 (November 14, 2019)

- fix: delegator check logic error in atomic-swap auth handlers
- chore: disable redundant debug in did package
- update readme

## 1.0.0 (November 12, 2019)

- chore: make delegated did-auth work in wallet
- chore: get ready for forge 1.0 release
- chore: bump version

## 0.41.0 (November 12, 2019)

- chore: update docs
- chore: update docs for each package
- chore: remove engines field in package.json
- fix: support custome chainInfo on all claim types
- update readme

## 0.40.11 (November 12, 2019)

- fix: mongo storage list methods should call toArray
- chore: merge defaults when creating wallet_types
- chore: improve error handling when signing claims
- update readme

## 0.40.10 (November 09, 2019)

- fix: did-agent-storage mongo test case
- fix: did-agent-storage memory impmentation
- chore: rename app-agent-storage => did-agent-storage
- fix: cleanup abt-did-js repo reference
- chore: update docs
- chore: implement basic authorized wallet handler
- chore: draft wallet agent handler
- chore: support authorized authenticator
- chore: add app-agent-storage and its memory implementaion
- chore: improve test case
- chore: refactor authenticator and handler options
- fix: grpc-client test case
- chore: update docs for grpc-client
- chore: add test case for did-auth and atomic-swap handlers
- chore: add memory storage for atomic-swap to easy test
- chore: add memory storage for did-auth-storage to easy test
- chore: test coverage for did-auth-authenticators
- chore: test coverage for did-auth-storage
- update readme

## 0.40.9 (November 08, 2019)

- feat: support delegator in atomic-swap and better hash connecting
- chore: add did-auth-protocol version in response
- chore: cleanup debug lines in forge-sdk
- chore: upgrade graphql-client to align with forge v0.40.3
- chore: improve shortcut methods to support {conn} args
- fix: support disable global ignores in graphql-client
- fix: exchange example not working because stricter
- chore: add jsdoc annotation for client shortcut methods
- update readme

## 0.40.8 (November 07, 2019)

- fix: acquire assets now works as expected
- fix: consume asset now works
- update readme

## 0.40.7 (November 06, 2019)

- fix: signed json response not working in did-auth lib
- update readme

## 0.40.6 (November 06, 2019)

- fix: signed json response not working in did-auth lib
- update readme

## 0.40.5 (November 06, 2019)

- chore: fix dependency version error
- update readme

## 0.40.4 (November 06, 2019)

- chore: add todo
- chore: support configurable signed response for swap handlers
- fix: swap-retriever do not use shortcut methods

## 0.40.3 (November 05, 2019)

- fix: swap handler should verify user swap-state before setup
- chore: upgrade graphql-client
- chore: upgrade grpc-client
- chore: upgrade forge-proto
- feat: support createAssetFactory and acquireAsset shortcut methods
- fix: offset swap setup issue
- fix: atomic swap is not using new did-auth-protocol
- feat: adopt new did-auth-protocol
- update readme

## 0.40.2 (November 01, 2019)

- chore: update graphql-client schema for deprecated types
- fix: asset-factory moniker
- fix: allow request signature on another chain
- update readme

## 0.40.1 (October 31, 2019)

- chore: update exchange example to exchange token with asset
- update readme

## 0.40.0 (October 31, 2019)

- fix: test case in message
- chore: upgrade graphql-client with forge v0.40
- chore: upgrade grpc-client with forge v0.40
- chore: upgrade forge-proto with forge v0.40
- update readme

## 0.39.9 (October 30, 2019)

- feat: basic standard asset factory support
- chore: add isValid wallet helper method
- fix: swap-retriever error tolerance
- update readme

## 0.39.8 (October 30, 2019)

- chore: add example on delegated atomic swap
- chore: support delegator in more shortcut methods
- update readme

## 0.39.7 (October 29, 2019)

- chore: update readme
- fix: package home link on npm registry

## 0.39.6 (October 29, 2019)

- fix: account migrate method and example
- chore: update exchange related demos
- chore: support exchange shortcut methods
- chore: support consume asset shortcut methods
- chore: update more example files
- chore: support shortcut methods for simple tx
- chore: drop token-based remote wallet support when send transactions

## 0.39.5 (October 28, 2019)

- chore: upgrade graphql-client to forge v0.39.3
- chore: upgrade grpc-client to forge v0.39.3
- chore: upgrade forge-proto to forge v0.39.3
- update readme

## 0.39.4 (October 20, 2019)

- chore: extract client extensions to a separate package
- chore: update docs for forge-config and tx-util
- chore: move token util and locktime util to clients
- update readme

## 0.39.3 (October 20, 2019)

- chore: add more user friendly `fromTokenToUnit` and `fromUnitToToken` util
- chore: improve docs for swap packages
- chore: improve docs for did-auth packages
- update readme

## 0.39.2 (October 17, 2019)

- fix: lerna config
- update readme

## 0.39.1 (October 17, 2019)

- chore: make auto retrieve work
- chore: polish atomic swap relatd code
- feat: add swap-retriever
- chore: user retrieve swap now works
- chore: support commit in both graphql and grpc sendTx
- fix: swap retrieve error
- fix: swap response format
- chore: add auth principal claim type
- chore: try to implement whole workflow
- chore: extract more middlewares from did handlers
- chore: support atomic swap middlewares

## 0.39.0 (October 17, 2019)

- chore: bump grpc-node to v1.24.0
- update readme

## 0.38.10 (October 14, 2019)

- chore: add working atomic_swap example
- feat: cache chainId on transaction encoding
- chore: add `getRandomBytes` to mcrypto
- update readme

## 0.38.9 (October 10, 2019)

- chore: try to add netlify build command and settings
- fix: doc version
- chore: bump doc theme version
- chore: update docs
- chore: update docs
- chore: add basic docs skeleton
- chore: create cleanup markdown format docs
- chore: create cleanup markdown format docs
- update readme

## 0.38.8 (October 10, 2019)

- chore: upgrade forge-sdk
- chore: upgrade grpc-client
- chore: upgrade graphql-client
- chore: upgrade forge-proto
- update readme

## 0.38.7 (October 08, 2019)

- chore: upgrade forge-sdk to latest
- chore: upgrade grpc-client with latest forge-web
- chore: upgrade graphql-client with latest forge-web
- chore: upgrade forge-proto with latest forge-abi
- update readme

## 0.38.6 (October 02, 2019)

- chore: upgrade forge-sdk dts
- chore: upgrade forge-web graphql-schema
- update readme

## 0.38.5 (September 29, 2019)

- chore: remove useless console.log
- chore: fix test case for sha2
- fix: sha2 not handling multi round correctly
- update readme

## 0.38.4 (September 27, 2019)

- chore: use toBase64 and fromBase64 from util
- chore: add toBase64 and fromBase64 util
- update readme

## 0.38.3 (September 27, 2019)

- fix: persist multi-step auth progress with action token
- chore: add notes in transaction
- update readme

## 0.38.2 (September 26, 2019)

- chore: upgrade forge-sdk
- chore: upgrade grpc-client
- chore: upgrade graphql-client
- chore: update forge-proto
- update readme

## 0.38.1 (September 25, 2019)

- chore: allow did-auth to request a any-message claim
- fix: typo
- update readme

## 0.38.0 (September 18, 2019)

- chore: upgrade graphql-client with forge v0.38
- chore: upgrade grpc-client with forge v0.38
- chore: upgrade forge-proto with forge v0.38
- chore: support delegation in exchange tx
- fix: big numer e notation formating issue
- chore: try to fix delegation on multi sig
- Bump lodash.template from 4.4.0 to 4.5.0 (#346)
- Bump fstream from 1.0.11 to 1.0.12 (#345)
- Bump js-yaml from 3.12.0 to 3.13.1 (#349)
- Bump eslint-utils from 1.3.1 to 1.4.2 (#359)
- update readme

## 0.37.2 (August 27, 2019)

- chore: bump sdk-util version
- chore: rename itx => itxJson
- update readme

## 0.37.1 (August 26, 2019)

- chore: upgrade graphql-client with latest forge-web
- update readme

## 0.37.0 (August 22, 2019)

- chore: upgrade sdk package with forge v0.37
- chore: upgrade grpc-client with forge v0.37
- chore: upgrade graphql-client with forge v0.37
- chore: upgrade forge-proto with forge v0.37
- chore: update status_code.json
- fix: account migrate script

## 0.36.1 (August 15, 2019)

- chore: only publish on node.js v12
- update readme

## 0.36.0 (August 15, 2019)

- chore: change default decimal from 16 => 18
- update readme

## 0.35.2 (August 12, 2019)

- chore: modify console.\* to debug
- update readme

## 0.35.1 (August 09, 2019)

- chore: upgrade jest to resolve some security issues

## 0.35.0 (August 08, 2019)

- chore: support delegate in grpc-client
- feat: support delegate in graphql-client
- chore: udpate dts file for did-util
- chore: support swap address calculating
- chore: support toDelegateAddress in did-util
- chore: add swap and delegate role type in mcrypto
- chore: upgrade graphql-client with forge v0.35
- chore: upgrade grpc-client with forge v0.35
- chore: upgrade forge-proto with latest forge-abi
- update readme

## 0.34.1 (July 25, 2019)

- fix: warning of @babel/polyfill dependency
- update readme

## 0.34.0 (July 19, 2019)

- chore: use lodash.camelcase to replace camelcase
- feat: support detailed error code and messages in grpc-client
- chore: cleanup some example files
- feat: support detailed error code and messages in graphql-client
- fix: example running script
- chore: include transaction send status code json in forge-proto

## 0.33.1 (July 17, 2019)

- chore: add subscribe example for grpc-client
- chore: upgrade lodash to fix github security warning
- chore: add transfer subscribe example for graphql-client
- chore: add subscription example for graphql-client
- fix: subscription in graphql-client is broken #330
- chore: use toAddress and toDid from forge-util
- chore: add toAddress and toDid to forge-util
- chore: improve token not found/expired error message
- fix: Improve error message of qr code expired arc-wallet-android#236

## 0.33.0 (July 15, 2019)

- chore: trigger cnpm sync on publish

## 0.32.2 (July 11, 2019)

- chore: add gitter badge for forge-js sdk readme
- update readme

## 0.32.1 (July 08, 2019)

- fix: DID.toTypeInfo not interprate big number correctly
- chore: export BN from forge-util
- update readme

## 0.32.0 (July 05, 2019)

- chore: upgrade forge-sdk with forge v0.32.2
- chore: upgrade grpc-client with forge v0.32.2
- chore: upgrade graphql-client with forge v0.32.2
- chore: upgrade forge-proto with forge v0.32.2
- chore: update readme with new badge
- fix: respect FORGE_API_ENDPOINT when run examples
- feat: support dump moderator b64 format pk

## 0.31.0 (June 28, 2019)

- chore: loose restriction on timestamp fields when verify jwt token
- update readme

## 0.30.6 (June 21, 2019)

- feat: support custom chainInfo for each action #323
- chore: update documentation for did-auth lib #318
- update readme

## 0.30.5 (June 18, 2019)

- fix package 404
- Chore: lite version of graphql-client and forge-sdk (#320)
- update readme

## 0.30.4 (June 17, 2019)

- feat: move chainInfo outof appInfo when do DidAuth
- update readme

## 0.30.3 (June 17, 2019)

- fix: forge status`and`forge bock` throw error #314
- update readme

## 0.30.2 (June 14, 2019)

- fix: did-auth export error
- update readme

## 0.30.1 (June 13, 2019)

- fix: require and import for forge-sdk readme
- chore: remove ci test for Node.js v11

## 0.30.0 (June 13, 2019)

- chore: commit missing file
- chore: merge with master
- chore: use multi formats for mcrypto.signers
- chore: elimate multibase dependency in did-auth package
- chore: elimate multibase dependency in forge-message/graphql-client/did
- chore: add toUint8Array/toBuffer/toBase58/fromBase58 to forge-util
- chore: add alias methods for graphql-client and grpc-client
- chore: update graphql-client example files
- chore: use plain string format for signature and pk in graphql-client
- feat: support more formats of bytes type when createMessage
- chore: make grpc-client support more input format of bytes type and add test for it
- update readme

## 0.29.3 (June 12, 2019)

- chore: refactor did auth
- chore: add tx-util lib for code that can be reused when handling transactions
- chore: save error messages in action token storage
- chore: update forge-sdk docs after forge-util updated
- chore: unify variable naming: did => userDid in did-auth lib
- chore: add uuid generating methods
- update readme

## 0.29.2 (June 10, 2019)

- fix: jwt.sign should avoid duplicate did prefix
- update readme

## 0.29.1 (June 10, 2019)

- chore: move jwt related functions to did-auth package
- update readme

## 0.29.0 (June 07, 2019)

- chore: move all message related methods to ForgeSDK.message
- chore: update readme and typescript declaration
- chore: upgrade grpc-client with forge v0.29.0
- chore: upgrade graphql-client with forge v0.29.0
- chore: upgrade forge-proto with forge v0.29.0
- chore: add cross chain docs
- chore: add more test case for did util
- fix: cross chain script final works :joy
- chore: complete cross chain workflow
- fix: DidUtil.toTetherAddress aligns with elixir
- fix: sha2 included in mcrypto not strictly aligning with elixir, using hash.js instead
- fix: sha2 included in mcrypto not strictly aligning with elixir, using hash.js instead
- chore: try to add toTetherAdderss
- chore: try to make withdraw tether work
- chore: export sha2.hash256
- chore: ensure successful exchange tether transaction
- chore: working exchagne tether
- chore: basic flow of exchange, but not working
- fix: DidUtil.toStakeAddress to align with elixir
- chore: support deposit tether tx in xchain example
- chore: add prepare steps for cross chain
- chore: add cross chain example in forge-sdk

## 0.28.10 (June 05, 2019)

- chore: cleanup forge-cli files

## 0.28.9 (June 05, 2019)

- chore: move forge-cli out of forge-sdk repo
- update readme

## 0.28.8 (June 04, 2019)

- chore: update lerna ignore settings
- update readme

## 0.28.7 (June 04, 2019)

## 0.28.6 (June 04, 2019)

- chore: update forge-sdk readme
- update readme

## 0.28.5 (June 04, 2019)

- chore: use wrap to replace sdk method delegate for compatibility
- update readme

## 0.28.4 (June 03, 2019)

- chore: add dts generating script
- fix: typo in grpc-client
- chore: add more test case
- fix: support customized FORGE_SOCK_GRPC when run forge web and simulator commands
- chore: more api on forge sdk
- feat: freeze GraphQLClient and GRpcClient instances after initialize
- feat: add default wallet type for forge-wallet
- chore: expose more from forge-sdk: util/wallet
- chore: basic implementation of forge sdk package
- update readme

## 0.28.3 (June 01, 2019)

- chore: upgrade graphql-client with forge v0.28.1
- fix: forge_web and simulator not working with forge 0.28.1
- chore: upgrade grpc-client with forge v0.28.1
- chore: support finding config from both forge release and forge-sdk release
- fix: force forge-web stop to be silent
- chore: upgrade forge-proto with forge v0.28.1
- update readme

## 0.28.2 (May 31, 2019)

- fix: did-util is causing www-wallet build failing on netlify
- update readme

## 0.28.1 (May 30, 2019)

- chore: improve error message when wallet signature invalid
- chore: improve jwtVerify process, add debugging statements
- update readme

## 0.28.0 (May 29, 2019)

- chore: use lite forge-proto in did-util
- fix: stop forge-web when stop forge #298
- chore: complete step on how to use protocol example
- chore: update readme in protocol example
- chore: upgrade graphql-client with forge v0.28.0
- fix: doc building
- chore: upgrade grpc-client with forge v0.28.0
- chore: update example files: cleanup param for toAssetAddress
- chore: upgrade graphql-client with forge v0.28.0
- chore: upgrade forge-proto with forge v0.28.0
- fix: eslint in tool scripts
- update readme

## 0.27.13 (May 28, 2019)

- chore: improve forge protocol compile command
- update readme

## 0.27.12 (May 28, 2019)

- fix: eslint errors in tcp-server
- fix: eslint errors in forge-cli
- fix: eslint errors in did-auth
- fix: eslint errors in forge-wallet
- fix: eslint errors in forge-message
- fix: eslint errors in grpc-client
- fix: eslint errors in graphql-client
- fix: eslint errors in mcrypto
- fix: eslint errors in forge-proto
- chore: add lint fix script
- chore: use eslint config airbnb base
- update readme

## 0.27.11 (May 27, 2019)

- fix: support both base64 and hex format moderator sdk
- fix: travis build
- chore: complete compiler ensure login for protocol compile
- chore: fix forge protocol compile command with new vending machine proto
- chore: cleanup useless files
- chore: update readme of protocol compile and deploy protocol
- feat: support forge protocol:deploy command
- feat: support forge protocol:compile command
- chore: refactor protocol example
- feat: forge-proto providers can provide custom type_urls list when init
- chore: tune vending machine proto
- chore: improve logging
- chore: add asset factory and asset acquire script
- fix: forge-message.Provider not handling getMessageType properly
- chore: protocol deploy script now works
- chore: cleanup signatures related code with multisig example files
- fix: forge.createMessage not handling list fields properly
- chore: add debug statements
- fix: make toItxAddress align with forge-elixir-sdk
- fix: mcrypto dts
- fix: use getMessageType method from forge-message
- chore: basic flow of javascript protocol deploy
- chore: update docs for GRpcClient
- chore: support GRpcClient.getType and GrpcClient.decodeTx
- chore: update doc for GraphQLClient.getType
- chore: update docs for forge-message
- feat: support proto provider mechanism in forge-message
- chore: make forge-proto provider generator extensible
- chore: update docs for did-auth lib
- chore: make protocol build
- chore: add tx protocol example: part
- update readme

## 0.27.10 (May 23, 2019)

- chore: bump version
- feat: support customize token and checksum query param key
- chore: use shorter action token
- fix: check did mismatch in did-auth handler
- feat: check did mismatch in did-auth handler
- fix: should pass request object to onAuth and onPreAuth handler
- fix: param doc
- chore: fix husky hooks
- chore: update docs for did authenticator and handler
- feat: add onPreAuth hook for AuthHandler, so the application can do some check for the auth
- update readme

## 0.27.9 (May 22, 2019)

- feat: support collect return data from onAuth callback
- chore: add docs for did-auth
- update readme

## 0.27.8 (May 22, 2019)

- chore: add docs for did-auth
- update readme

## 0.27.7 (May 22, 2019)

- fix: forge create-project checking for target dir error
- update readme

## 0.27.6 (May 21, 2019)

- chore: remove forge-react-starter as submodule
- feat: implement starter spec when creating new projects from starters
- update readme

## 0.27.5 (May 20, 2019)

- chore: add test case for did-auth
- chore: remove token storage when complete
- feat: expose token storage when onAuth and onComplete
- update readme

## 0.27.4 (May 19, 2019)

- chore: update forge-react-starter version
- feat: support proofOfAsset and proofOfToken in did-auth lib
- update readme

## 0.27.3 (May 17, 2019)

- chore: upgrade forge-react-starter to v0.5
- update readme

## 0.27.2 (May 17, 2019)

- fix: error on token.status not properly handled on request
- chore: add onExpire hook for did-auth lib
- feat: support parsing accept-language header in did-auth
- update readme

## 0.27.1 (May 16, 2019)

- chore: upgrade node-grpc, and make this lib work with node.js v8.x or above
- update readme

## 0.27.0 (May 16, 2019)

- chore: upgrade sdk-util dependency version
- chore: update dts and cleanup test case
- feat: support new asset address generating algorithm
- chore: add fromHash and fromPublicKeyHash for did
- chore: upgrade graphql-client with forge v0.27.0
- chore: upgrade grpc-client with forge v0.27.0
- chore: upgrade forge-proto with forge v0.27.0
- fix: js2dts dependency
- chore: support --yes on forge reset
- update readme

## 0.26.11 (May 14, 2019)

- feat: add api to mark token as expired in did handler
- update readme

## 0.26.10 (May 13, 2019)

- chore: move `fromAppDiD` out of abt-did lib since it will not be used widely and has many dependency #277
- chore: enable travis ci on node 8,10,12
- chore: update dts for major package
- update readme

## 0.26.9 (May 12, 2019)

- Merge branch 'master' of github.com:ArcBlock/forge-js
- fix: did authenticator not proper encoding url param
- update readme

## 0.26.8 (May 12, 2019)

- feat: support extra query params in did auth process
- update readme

## 0.26.7 (May 12, 2019)

- fix: user version parsing when forge download/init/use
- update readme

## 0.26.6 (May 11, 2019)

- chore: support both 0.25.3 and v0.25.3 as version arg when init/download/use #258
- fix: should not list invalid forge release installs when forge ls #259
- chore: upgrade react starter version
- update readme

## 0.26.5 (May 11, 2019)

- chore: remove node version requirement
- update readme

## 0.26.4 (May 10, 2019)

- chore: upgrade react starter version
- fix: forge tx on 404 should warn gently
- update readme

## 0.26.3 (May 10, 2019)

- fix: should exit with non-zero code when bin path not found #268
- update readme

## 0.26.2 (May 10, 2019)

- fix: project create speed
- chore: update template
- update readme

## 0.26.1 (May 09, 2019)

- fix: ip dependency not found
- update readme

## 0.26.0 (May 09, 2019)

- fix: binary file copying
- fix: node_modules install
- chore: support creating react start project
- chore: add submodule
- update readme

## 0.25.2 (May 08, 2019)

- chore: update readme
- chore: add license in readme
- chore: update license/author field in package.json
- chore: add license file
- update readme

## 0.25.1 (May 07, 2019)

- chore: update readme
- chore: update scripts
- chore: cleanup useless files
- chore: deploy versioned docs
- update readme

## 0.25.0 (May 05, 2019)

- chore: merge did related packages back to this repo
- chore: support update check for forge-cli
- chore: add post install tips for forge
- fix: forge-web account page not refresh data on switch account
- chore: add script to run all examples
- chore: fix test case for forge-message
- chore: upgrade graphql-client with forge v0.25.3
- chore: upgrade grpc-client with forge v0.25.3
- chore: upgrade forge-proto with forge v0.25.3
- fix: forge download / forge init with not exist version #253
- update readme

## 0.22.0 (April 30, 2019)

- fix: forge web error on new graphql endpoint
- chore: donot encode twice if we already have signature
- feat: support deploy protocol tx card
- chore: upgrade grpc-client to align with forge v0.24.1
- chore: commit missing tx files
- chore: upgrade graphql-client to align with forge v0.25.1
- chore: upgrade forge-proto to align with forge v0.25.1
- chore: upgrade graphql-client to align with forge v0.25.1
- chore: fix grpc-client examples
- chore: update graphql-client examples
- fix: grpc-client can send transaction with local signed tx
- fix: formatMesage and decodeAny not working properly together
- chore: support forge asset xxx command
- fix: grpc-client examples
- fix: grpc-client cause forge poke not working
- chore: generate markdown docs for each package
- chore: generate markdown docs for each package
- chore: reorganize docs for grpc-client
- chore: reorganize docs for graphql-client
- chore: add asset consume example
- chore: add encode any support for fg:x:address
- chore: fix forge release:list to use full RELEASE_ASSET list
- chore: rename declare account => declare
- chore: add stake for node example
- fix: stake in forge-cli
- chore: fix stake amount display
- chore: add more example files: transfer_asset and migrate_account
- fix: forge web not rendering transfers with zero token
- chore: update types for graphql list methods
- chore: add asset create/update docs
- chore: improve examples for graphql-client
- chore: improve doc tooling for graphql-client
- chore: update docs for graphql-client and grpc-client
- chore: update docs for graphql-client and grpc-client
- chore: update docs for graphql-client
- chore: update docs for libs
- chore: update dependency
- chore: graphql-client returns tx hash for sendTx methods
- chore: imporve mcrypto docs
- update readme

## 0.21.0 (April 29, 2019)

- chore: update forge-cli usage for grpc-client
- chore: refactor grpc client to align with graphql client
- chore: upgrade dts
- fix: graphql-client demo examples
- chore: rename transaction encoding/sending input.data => input.tx for graphql-client
- chore: improve grpc-client dts and doc gen
- chore: make grpc client more simple to use
- chore: update client lib docs and dependency
- fix: sdk-util generated fake messages
- chore: add module placeholders for jsdoc
- chore: fix code in generated docs
- chore: upgrade sdk-util dependency version
- chore: improve graphql-client doc generating
- fix: eslint errors
- fix: inner marker for some field in generated docs
- update readme

## 0.20.6 (April 29, 2019)

- chore: remove package-lock.json
- chore: improve filter on mobile
- chore: improve tx detail asset detail account detail page on mobile
- chore: improve txs page on mobile
- chore: improve tx detail page on mobile
- fix: cycle dep
- chore: back version for commit fail
- chore: Merge branch 'master' into improve-header-on-mobile
- chore: improve detail

## 0.20.5 (April 28, 2019)

- chore: ignore docs folder
- chore: add documentation sync command
- chore: refacot jsdoc config
- chore: improve docs
- chore: fix graphql-client doc markers
- chore: include grpc-client docs
- chore: include mcrypto documentation
- fix: fakeMessage not handling bool type correctly
- chore: add doc generation for forge-config
- fix: graphql-client doc generation error
- chore: update generated types for doc
- chore: fix graphql-client in generated docs
- chore: basic docs for forge-message and forge-proto
- chore: basic jsdoc generating infra
- chore: improve docs forge forge-util and forge-wallet
- chore: generate docs for graphql client
- update readme

## 0.20.4 (April 27, 2019)

- chore: elimate data version
- chore: upgrade graphql-client with latest forge
- fix: typo in makefile
- chore: upgrade forge web readme
- fix: release asset list not including forge_web when download
- chore: update readme for forge-web
- fix: graphql client test case
- chore: add instructions on how to upgrade graphql-client
- chore: make a smaller forge-web release
- v0.20.3

## 0.20.3 (April 26, 2019)

- chore: add forge reset sub command
- update readme

## 0.20.2 (April 26, 2019)

- chore: upgrade graphql-client to align with forge v0.24.1
- chore: forge web related command to native forge_web
- Merge branch 'master' into feature/download-forge-web-asset
- update readme
- dowload forge web

## 0.20.1 (April 26, 2019)

- chore: imporve graphql client debugging
- chore: update docs
- chore: update did lib dependency
- chore: add examples for common tasks with graphql-client
- chore: improve debug
- chore: improve graphql-client debugging
- chore: handle multisig in graphql-client
- chore: fix uint8array issue
- fix: eslint errors
- fix: json decode in decodeAny
- fix: json encode in createMessage.encodeAny
- fix: json decode in formatMessage
- fix: unrecoginized typeUrl display
- chore: use smaller vendor compiled js files
- update readme

## 0.20.0 (April 24, 2019)

## 0.19.3 (April 24, 2019)

## 0.19.2 (April 24, 2019)

## 0.19.1 (April 23, 2019)

- chore: add deploy*\*, upgrade*\* tx protocols
- update readme

## 0.19.0 (April 22, 2019)

- fix: account txs only list valida txs
- feat: support upgrade node tx in tx card
- chore: add more test for graphql-client
- chore: upgrade grpc-client with latest forge
- chore: upgrade graphql-client with latest forge
- chore: upgrade forge-proto with latest forge
- fix: one command upgrade
- feat: make passphrase as passwords when handling wallets
- update readme

## 0.18.1 (April 17, 2019)

- fix: host selecting on chain node web
- update readme
- update readme
- update readme
- update readme
- update yarn.lock file
- fix: explorer beta resource domain
- update readme

## 0.18.0 (April 16, 2019)

- chore: improve sentry reporter config
- add smoke test for forge cli (#237)
- add error tracking and smoke test for forge-web (#236)
- update readme

## 0.17.8 (April 12, 2019)

- fix: forge join command now really works
- update readme

## 0.17.7 (April 12, 2019)

- fix: storage api error
- chore: update default join url

## 0.17.6 (April 12, 2019)

- chore: refactor storage prefix
- chore: support building beta version for explorer
- update readme

## 0.17.5 (April 11, 2019)

- fix: explorer network select
- chore: add alias for forge log
- update readme

## 0.17.4 (April 10, 2019)

- feat: support customize version and download mirror for forge init
- update readme

## 0.17.3 (April 09, 2019)

- chore: basic simulator page
- chore: fix account list
- chore: update test case for graphql client
- chore: upgradte graphql-client
- chore: make webport and web url from config
- chore: upgrade grpc-client with latest forge
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge
- fix: remove forge_starter config patch on forge init

## 0.17.2 (April 09, 2019)

- fix: `forge poke` not working anymore #211
- chore: donot show empty data as error
- feat: display obvious mark that the TX failed #226
- feat: Universal explorer should add chain id in url #221
- fix: error message miss a space #222
- fix: Unit miss match on TX list and TX details #219

## 0.17.1 (April 08, 2019)

- chore: add hover for network details
- chore: add lines for network selector
- fix: body scroll trap
- fix: transaction trend line
- chore: basic coverflow effect for network selector
- chore: basic coverflow effect for network selector
- house keeping (#224)
- update readme

## 0.17.0 (April 04, 2019)

- fix: date nan on ios
- fix: clear timer when unmount
- fix: use real producer for peer globe in forge web
- fix: show tx time on tx detail page
- fix: warning of material-ui
- fix: ios dayjs nan issue
- fix: cannot drag after liveUpdate is toggled
- chore: improve imports from react-use lib and make liveUpdate globe state
- chore: upgrade grpc-client with latest forge
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge
- update readme

## 0.16.4 (March 30, 2019)

- fix: forge web should load only peers on globe
- update readme

## 0.16.3 (March 29, 2019)

- chore: make validators dynamic
- fix: switcher position
- fix: api switch
- fix: current network selection
- fix: explorer deploy script
- update readme

## 0.16.2 (March 29, 2019)

- chore: revert changes on header
- chore: use endpoint from local storage
- chore: use endpoint from local storage
- chore: update logo
- chore: update logo
- chore: add fakeCurrent option for stack component
- chore: add fakeCurrent option for stack component
- chore: basic switch logic and workflow
- chore: basic switch logic and workflow
- chore: basic switch logic and workflow
- chore: add network switcher
- fix: skeleton
- chore: support dark mode for skeleton layers
- chore: fix network layer select range issue
- chore: fix network layer select range issue
- chore: fix network layer select range issue
- feat: first working version of network switcher
- update readme

## 0.16.1 (March 29, 2019)

- chore: cleanup revert
- Merge remote-tracking branch 'origin/wangshijun/fix-build' into wangshijun/explorer
- chore: try to fix forge web build, but no luck
- feat: support set/get graphql endpoint from localStorage
- fix: forge web build
- chore: basic explorer switch animation
- fix: cursor style for theme switcher
- fix: explorer style fix
- update readme

## 0.16.0 (March 27, 2019)

- chore: add tooltip for forge web sidebar
- chore: fix readme badges
- feat: reorganize node and developer tools tab
- chore: donnot get nonce dynamically
- chore: fix graphql client
- chore: fix PartsHeader find
- chore: update dts
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge

## 0.15.2 (March 27, 2019)

- chore: update starter
- chore: extract did-auth-storage interface lib
- chore: update readme of did-auth lib
- chore: extract did auth lib
- chore: disable user-select on secret document
- chore: improve error handling
- update readme

## 0.15.1 (March 26, 2019)

- chore: udpate yarn.lock
- chore: fix reference
- chore: fix tcp-server
- chore: fix grpc-client
- chore: split packages
- chore: rename graphql-client
- upgrade and did auth workflow (#206)
- update readme

## 0.15.0 (March 22, 2019)

- chore: responsive design for universal explorer
- fix: make file for release explorer
- feat: fake latest proposer on globe
- feat: support custom .forge_cli dir when do forge init #203
- chore: send less request when there no sparkline in metris
- fix: auth info generating
- fix: auth info generating
- chore: fix production build and deploy script
- feat: add jwtDecode for abt-did lib
- feat: add basic did loginUri/authInfo gen process
- chore: add login uri generating process
- chore: improve page style
- chore: add publish script
- chore: add pagination for top validators
- fix: add babel-polyfill back
- chore: add layout
- fix: globe gragging should stop when mouse leave
- chore: display forge version in explorer footer
- chore: integrate material ui and styled-components
- chore: add ascii logo for forge-cli
- fix: globe jumps when switch between "block" and "tx" #200
- chore: support theme for globe
- chore: upgrade forge-sdk with latest forge
- chore: upgrade graphql-client with latest forge
- chore: upgrade sdk-util dependency version
- Merge branch 'master' into wangshijun/web-starter
- update readme
- chore: update admin path
- chore: basic next and react integration
- chore: init keystone
- chore: make example projects private

## 0.14.4 (March 21, 2019)

- fix: correct version on amazon linux
- update readme

## 0.14.3 (March 20, 2019)

- fix: test case

## 0.14.2 (March 20, 2019)

- chore: use only d3-geo for globe component #190
- chore: make colors an config object for globe #198
- chore: highlight current country when new block produces
- chore: make globe component an async component to get faster load time … …
- chore: add bundle analyzer and optimize recharts import
- chore: use dayjs to replace momentjs
- chore: make sparkline async
- chore: make forge-web async
- chore: cleanup dependency
- chore: make searchbox async
- improve globe (#199)
- update readme

## 0.14.1 (March 19, 2019)

- feat: add interactive producer globe

## 0.14.0 (March 18, 2019)

- fix: utc time used when request forge
- chore: update readme
- chore: organize hooks
- chore: add custom hook `useStartupInfo`
- fix: transaction trend line
- chore: move nodeInfo to startup data fetching
- chore: update forge-web status page according to matts suggestion
- feat: add checkin alis for `forge poke`
- chore: upgrade forge-sdk with latest forge
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge
- fix: abt-explorer deploy url
- update readme

## 0.13.4 (March 15, 2019)

- fix: add proper delay when run `forge start` and `forge stop`
- fix: use tmp dir under home when run `forge init`
- feat: support `forge poke` to get test tokens #186
- support PokeTx in tx_card #179
- chore: Use `,` for large numbers #177
- chore: update netlify redirect rule
- fix: event target in safari
- chore: fix logo in light mode for explorer
- chore: search box should also be black #181
- tune: animation easing function
- tune: colors and sizes
- chore: refresh switch should become a blinking green dot #184
- chore: theme switch button should become an icon #183
- chore: header should not have box-shadow #182
- fix: menu dropdown background blur #180
- update readme

## 0.13.2 (March 14, 2019)

- fix: sparkline fill opacity in dark mode
- chore: make release work
- chore: latest data section on explorer home
- fix: sparkline fill opacity
- fix: explorer links
- chore: extract theme mode to hooks
- chore: support start in different mode
- chore: basic explorer home page
- chore: support header for explorer
- chore: remove useless code
- chore: add layout for explorer
- chore: support explorer apps
- chore: update lots of styles for dark theme
- chore: add infra for theme switcher
- chore: add label for metric updates
- chore: fix tooltip font size
- update readme

## 0.13.1 (March 13, 2019)

- chore: update readme for major js library
- fix: scalar types random fns when generating docs for forge-sdk
- chore: cleanup and update readme
- chore: add `close` and `end` events for streaming grpc requests
- chore: remove useless commands
- update readme

## 0.13.0 (March 13, 2019)

- chore: move `forge me` to `forge account me`
- feat: `forge stake show` show me a complete list of my stakes #116
- feat: Join a network from cli: `forge join http://abt-test.arcblock.co:8210/api` #46
- feat: support `forge help xxx` command for documentation #82
- chore: change moniker to usrname on top account list
- update readme

## 0.12.3 (March 11, 2019)

- chore: add error handling for all detail pages
- chore: improve forge-web according to echo s codepen
- chore: upgrade forge-sdk with latest forge
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge
- update readme

## 0.12.2 (March 08, 2019)

- chore: update readme for forge-wallet
- feat: add forge wallet lib
- chore: update definitions
- chore: move common code to mcrypto
- chore: update readme for forge-util
- chore: update readme for forge-web
- chore: add protobuf json copy script for graphql client
- chore: attach server config on middleware request object
- fix: wait enough time until new block produced
- chore: upgrade forge-sdk with latest forge
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge
- update readme

## 0.12.1 (March 08, 2019)

- chore: add version env var when build
- chore: tweak color
- chore: prepare to add global search box
- feat: support realtime updates for metrics section
- fix: node overall status statement according to layer status
- fix: filter apply button not visible on small screen
- chore: make icons sharp
- update readme

## 0.12.0 (March 07, 2019)

- chore: upgrade forge-sdk with latest forge
- chore: upgrade forge-proto with latest forge
- chore: upgrade graphql-client with latest forge
- fix: proper layer color on status basis
- chore: rename summary section => metrics section
- chore: make default status null
- chore: complete status components
- chore: basic summary and stack skeleton
- chore: basic stacked layer
- chore: add asset address when creating asset
- chore: add consume asset tx
- chore: add detail for migrate tx
- chore: add receiver field for account migrate tx
- chore: add make command to do upgrade
- update readme

## 0.11.2 (March 07, 2019)

- remove license for forge web
- update readme

## 0.11.1 (March 06, 2019)

- chore: upgrade forge-sdk with forge v0.17.1
- chore: upgrade forge-proto with forge v0.17.1
- chore: upgrade graphql-client with forge v0.17.1
- update readme

## 0.11.0 (March 05, 2019)

## 0.10.1 (March 05, 2019)

- chore: fix test case for verify jwt token signed by elixir sdk
- update readme

## 0.10.0 (March 05, 2019)

- feat: basic asset detail page
- chore: update random message
- chore: add link for asset in tx detail page
- chore: use dynamic data for top account trends
- chore: update asset page
- chore: add link for asset list
- chore: fix page width
- chore: fix page width
- chore: add display for consume asset tx
- fix: explorer default url
- chore: upgrade graphql-client to align with forge v0.17.0
- chore: upgrade forge-sdk to align with forge v0.17.0
- chore: upgrade forge-proto to align with forge v0.17.0
- update readme

## 0.9.0 (March 04, 2019)

- chore: make node.js did lib compatible with elixir did lib
- chore: add more test case
- chore: add more methods in did lib
- update readme

## 0.8.8 (March 02, 2019)

- chore: upgrade graphql-client to align with forge v0.16.5
- chore: upgrade forge-sdk to align with forge v0.16.5
- chore: upgrade forge-proto to align with forge v0.16.5
- update readme

## 0.8.7 (February 27, 2019)

- chore: add fromAppDID for did-generation
- chore: do not remove heading zeros when convert bytes to hex
- chore: did generating process
- chore: tune mcrypto lib
- chore: better hex input support in mcrypto

## 0.8.6 (February 27, 2019)

- fix: forge web display issue
- chore: update test case for signer
- chore: make ed25519 sign any message format
- chore: add more functions in forge-util
- chore: fix test case for keccak
- chore: try to make keccak work
- feat: support secp256k1 signner interface
- chore: support ed25519 in mcrypto module
- Merge branch 'master' into wangshijun/mcrypto
- chore: update reference in test script
- chore: commit test script
- chore: improve signer
- chore: improve test case
- chore: add test vectors for sha2/sha3 hasher
- chore: basic implementation of aes crypter
- chore: basic implementation of signer and hasher
- chore: initialize mcrypto package

## 0.8.5 (February 26, 2019)

- chore: make dashboard header info dynamic
- chore: improve txs
- chore: cursor based pagination for txs
- chore: add links for top accounts/validators
- chore: exclude empty blocks
- chore: exclude empty blocks
- chore: make top validators dynamic
- chore: upgrade graphql-client to align with forge master
- chore: make top accounts dynamic
- fix: react-ga warnning when test
- feat: support locale
- fix: eslint warning
- update readme

## 0.8.4 (February 26, 2019)

- chore: upgrade forge-sdk to align with forge v0.16.0
- chore: upgrade forge-proto to align with forge v0.16.0
- chore: upgrade graphql-client to align with forge v0.16.0
- chore: improve forge stop and init
- chore: polish starter related start/stop/restart/reboot
- chore: use forge starter to start forge
- chore: start forge as daemon default

## 0.8.3 (February 23, 2019)

## 0.8.2 (February 23, 2019)

- chore: upgrade graphql-client to align with forge master
- chore: upgrade forge-sdk to align with forge master
- chore: upgrade forge-proto to align with forge master
- chore: remove source map files before publish forge-web
- update readme

## 0.8.1 (February 21, 2019)

- chore: improve secondary menu style
- chore: try to add filter feature
- chore: improve no option message
- chore: optimize block and tx list
- chore: optimize style
- fix: summary header for empty blocks
- feat: support omni search box
- chore: add heart in process list
- update readme

## 0.8.0 (February 21, 2019)

- feat: added tranaction detail page
- chore: upgrade forge-sdk to align with forge
- chore: upgrade forge-proto to align with forge
- chore: upgrade graphql-client to align with forge
- chore: extract payload component
- chore: transfer and exchange details
- chore: update sdk-util dependency
- fix: block detail page
- chore: add font awesome icons and basic exchange tx
- chore: upgrade graphql-client to align with forge
- feat: basic tx cards
- feat: basic skeleton for tx list and block detail
- fix: forge web seconday nav select style
- feat: add search box component
- feat: add links for blocks and accounts
- feat: support block pagination
- feat: basic block list page
- feat: add chain info component
- chore: regenerate graphql client api docs for union types
- chore: upgrade graphql-client to align with forge@v0.15.1
- chore: upgrade forge-sdk to align with forge@v0.15.1
- chore: upgrade forge-proto to align with forge@v0.15.1
- abt chain node dashboard page (#136)
- chore: upgrade to align with forge v0.14.4
- update readme

## 0.7.11 (February 17, 2019)

- fix: forge-cli npm publish config
- update readme

## 0.7.10 (February 15, 2019)

- forge web skeleton (#109)

## 0.7.9 (February 15, 2019)

- chore: upgrade graphql client schme to align with forge v0.14.3
- chore: regenerate forge rpc api doc
- chore: upgrade proto to align with forge v0.14.3

## 0.7.8 (February 12, 2019)

- chore: cleanup unused dependency
- fix: bignumber not handling decimals correctly #107

## 0.7.7 (February 12, 2019)

- fix: A few command will fail with exception before forge started, some are OK #128
- fix: formatMessage on scalar types

## 0.7.6 (February 11, 2019)

- chore: upgrade forge-proto to align with forge@v0.13.2

## 0.7.5 (January 31, 2019)

- chore: update test case
- fix: stake.totalStakes and stake.totalUnstakes
- feat: support `forge unstake`
- feat: `forge stake` default select current node #117
- fix: "undefined" in `forge status1 output #118
- fix: `forge tx` should tell me the TX type #114
- chore: upgrade sdk doc
- chore: update forge config
- chore: upgrade forge proto
- fix: `forge stake` fail randomly and no reason given #113
- chore: update readme

## 0.7.4 (January 30, 2019)

- chore: upgrade forge-proto to align with forge@v0.12.0

## 0.7.3 (January 30, 2019)

- fix: format validation error #103
- fix: wrong node address will crash cli in `forge stake` #105
- fix: sensible logs path for `forge logs` #101
- fix: stake related improvement #103 #104 #106 #107 #108
- fix: `forge version` with tendermint and ipfs
- chore: update readme

## 0.7.2 (January 29, 2019)

- v0.7.1
- fix: publish config

## 0.7.1 (January 29, 2019)

- support graphql client (#100)

## 0.7.0 (January 25, 2019)

- fix: disable `forge create:cli` for release
- fix: `forge xxx -h` colors in shelljs.exec
- feat: support open forge graphql playground with `forge web open`
- fix: improve errmsg for declare as node
- feat: support display web status in `forge status` #65
- chore: add subscribe example for forge-sdk #87
- feat: support `forge block -f` display blocks until user stop it. #91
- fix: start forge web before `forge web open` #90
- chore: remove `forge console` command, since it does not works on all start modes #47
- feat: add spinner for `forge stop`

## 0.6.9 (January 24, 2019)

- upgrade forge protobuf and several improvements (#88)
- chore: upgrade forge-proto to latest forge
- fix: listWallets => listWallet
- fix: transactions are not correctly filtered in forge-proto
- fix: update forge config with latest release
- fix: forge web related commands with latest forge
- chore: improve `forge tx` error
- fix: remove useless tip
- chore: organize forge-cli code
- feat: elimiate GITHUB_TOKEN and fetch dependency #34
- chore: improve texture and help text
- feat: align forge release version with forge-sdk/forge-proto/forge-cli #37
- fix: display graceful error message when unlock wallet failed #66
- chore: add docs, user can switch to different chains apps easily with #72

## 0.6.8 (January 23, 2019)

- chore: improve forge start/stop command
- chore: make `forge restart` more developer friendly
- feat: support finding the forge-app process #29 (#86)
- tcp server handler namespace and connect style middleware (#85)
- fix: bigint encoding for really large numbers (#84)
- chore: cleanup code
- fix and improve (#81)
- chore: update readme

## 0.6.7 (January 22, 2019)

- feat: make `forge block` easier to use. #68
- fix: tell user url of webui #60
- feat: support `forge logs` command #62
- fix: simulate not working as expected
- chore: support add custom handlers on each command
- chore: support add custom handlers on each command
- fix: show help on unsupported command #61
- chore: improve reinitialization tip
- feat: add progressbar for downloading process #32
- fix: ensure forge has been stopped before reinitialize #58
- fix: ensureForgeRelease logging properly disabled in silent mode
- fix: ensure forge has been stopped before reinitialize
- fix: getSpinner text option not properly set
- chore: rename .forge-cli => .forge_cli
- fix: help text contain encoded strings for `stake` #70
- fix: check node.js version before `forge init` #73

## 0.6.6 (January 22, 2019)

- chore: upgrade forge-proto to align with forge@v0.11.0
- chore: update README.md
- chore: check forge pid before start
- chore: refactor config related ops
- chore: update readme and make init
- fix: cache.read should not throw error on not found
- fix: `forge version` not output forge-core version

## 0.6.5 (January 21, 2019)

- [forge-cli] support simulator related commands #41
- [forge-cli] support simulator in initialize process
- [forge-cli] start web service from cli #44 (#56)
- declare and stake support (#55)
- require a running node for some command (#54)
- better error message if the tx/block not exist #45 (#53)
- improve `forge version` (#52)

## 0.6.4 (January 19, 2019)

- chore: upgrade forge-proto to align with forge@v0.10.15
- chore: update readme

## 0.6.3 (January 18, 2019)

- v0.6.2
- fix: public config

## 0.6.2 (January 18, 2019)

- [forge-cli] feat: support application specific setup scripts
- [forge-cli] feat: support --verbose option for all command
- [forge-sdk] fix: make kvstore app working with forge@v0.10.14
- [forge-cli] fix: `forge account:delete` not working
- [forge-cli] fix: support client.fromArc and client.toArc methods in itx editor
- [simple-app] chore: make rpc client work with latest forge
- [forge-sdk] fix: formatMessage not handle repeated fields correctly
- [forge-sdk] feat: support streaming request for rpc call
- chore: update kvstore app name
- chore: cleanup dependencies
- chore: upgrade forge-proto to align with forge@v0.10.14
- chore: update config file to latest version
- chore: update readme

## 0.6.1 (January 18, 2019)

- chore: tweak env ensure utili fns
- feat: support ubuntu detect
- chore: organize code
- feat: add forge console command
- chore: update readme for forge-cli
- chore: disable unused sub commands

## 0.6.0 (January 18, 2019)

- support `forge debug` command
- support `forge restart ipfs` command
- tons of improvements to forge-cli

## 0.5.8 (January 17, 2019)

- support `forge tx:sign` command
- support `forge tx:send` command

## 0.5.7 (January 17, 2019)

- support `forge ps` command

## 0.5.6 (January 17, 2019)

- add account clis

## 0.5.5 (January 17, 2019)

- feat: support ensureWallet when bootstrap cli
- fix: forge start in console mode cannot accept stdin
- chore: pass arguments and options to handler

## 0.5.4 (January 17, 2019)

- update forge-proto

## 0.5.3 (January 17, 2019)

- support tx shortcut methods: `client.sendTransferTx`

## 0.5.2 (January 16, 2019)

- chore: add examples for entry cli
- chore: remove useless .gitkeep
- chore: refactor ensureForgeRelease command support end
- forge node related commands (#19)
- chore: half baked forge-init
- fix: new Buffer warning from generated js
- chore: add error handling for chain-info request in forge-cli
- feat: better forge-cli startup logic
- feat: pretty chain info output
- fix: ensure required dirs for env
- feat: add chain info command
- chore: make env setup work
- chore: use sdk.toArc in transfer example
- fix: simple app client.js query param
- chore: update readme
- chore: basic cli setup

## 0.5.1 (January 15, 2019)

## 0.5.0 (January 15, 2019)

- chore: rename forge-node => forge-sdk
- remove nexe as dependency.
- fix travis
- init the forge cli skeleton.
- chore: update api docs
- chore: update readme

## 0.4.0 (January 15, 2019)

- feat: support auto generation of api docs (12 seconds ago)

## 0.3.8 (January 15, 2019)

- bump version (31 seconds ago)
- feat: support fromArc and toArc op (4 minutes ago)
- feat: support starting Node REPL with and forge-rpc-client instance (33 minutes ago)
- feat: support faking message and generate request/response example (34 minutes ago)

## 0.3.7 (January 15, 2019)

## 0.3.6 (January 14, 2019)

- fix: licence

## 0.3.5 (January 14, 2019)

- feat: support attach more handlers on each type
- feat: support attach more handlers on each type
- feat: better support for bigint encoding and decoding
- feat: better support for repeated fields
- chore: update readme

## 0.3.4 (January 14, 2019)

## 0.3.3 (January 14, 2019)

- chore: make kvstore app work as expected
- feat: support listing all supported rpc methods
- chore: update simple app
- chore: make simple app work
- chore: make examples as packages
- chore: update readme

## 0.3.2 (January 12, 2019)

## 0.3.1 (January 12, 2019)

## 0.3.0 (January 12, 2019)

## 0.2.0 (January 08, 2019)

- initial forge-proto code

## 0.1.0 (January 08, 2019)

- initial release
