TOP_DIR=.
README=$(TOP_DIR)/README.md

init:
	@echo "Initializing the repo..."
	@wget https://releases.arcblock.io/forge-compiler/$(curl -s https://releases.arcblock.io/forge-compiler/latest.json | jq -r .latest)/forge-compiler && chmod +x forge-compiler
	@npm install -g grpc-tools protobufjs

build-protocol:
	@echo "Building protocol for deploy..."
	@rm -rf gen && mkdir gen
	@forge-compiler vending-machine/config.yml gen

build-protocol-js:
	@echo "Building protocol for javascript..."
	@rm -rf gen_js && mkdir gen_js
	@grpc_tools_node_protoc --proto_path=vending-machine --js_out=import_style=commonjs,binary:./gen_js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` vending-machine/*.proto
	@echo "Building protocol json for javascript..."
	@pbjs -p vending-machine -t json -o gen_js/protocol.json vending-machine/*.proto

.PHONY: build init travis-init install dep pre-build post-build all test doc precommit travis clean watch run travis-deploy
