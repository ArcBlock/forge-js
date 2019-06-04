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
