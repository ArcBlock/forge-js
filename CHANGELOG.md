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
  - tcp server handler namespace and connect style  middleware (#85)
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
