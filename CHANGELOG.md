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
