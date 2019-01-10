SHELL=/bin/bash
FORGE_SDK_PATH=./tools/forge_sdk/lib/forge_sdk/protobuf
FORGE_KV_PATH=/tmp/.forge_kv_node

TM_BIN_PATH=`which tendermint`
IPFS_BIN_PATH=`which ipfs`

prepare:
	@mkdir -p $(FORGE_KV_PATH)/{tendermint,ipfs}/bin
	@[ -f "${TM_BIN_PATH}" ] && cp -f $(TM_BIN_PATH) $(FORGE_KV_PATH)/tendermint/bin
	@[ -f "${IPFS_BIN_PATH}" ] && cp -f $(IPFS_BIN_PATH) $(FORGE_KV_PATH)/ipfs/bin

start-forge:
	@echo "Running forge for kv app..."
	@FORGE_CONFIG=./kv.toml iex -S mix

start-app:
	@echo "Running tcp server for kv app..."
	@node server.js

clean:
	@echo "Cleaning the build..."
	@rm -rf $(FORGE_KV_PATH)

rebuild-proto-js: prepare-vendor-proto
	# @npm install -g grpc-tools
	@rm -f $(FORGE_SDK_PATH)/gen_js/*.js && mkdir -p $(FORGE_SDK_PATH)/gen_js
	@grpc_tools_node_protoc --js_out=import_style=commonjs,binary:$(FORGE_SDK_PATH)/gen_js --grpc_out=$(FORGE_SDK_PATH)/gen_js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` /tmp/vendor.proto
	@grpc_tools_node_protoc --proto_path=/tmp/ --proto_path=$(FORGE_SDK_PATH)/ --js_out=import_style=commonjs,binary:$(FORGE_SDK_PATH)/gen_js --grpc_out=$(FORGE_SDK_PATH)/gen_js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $(FORGE_SDK_PATH)/*.proto
	@mv $(FORGE_SDK_PATH)/gen_js/tmp/*.js $(FORGE_SDK_PATH)/gen_js/ && rm -rf $(FORGE_SDK_PATH)/gen_js/tmp
	@echo "New protobuf files for javascript created."

# Generate protobuf spec in json format to use in languages that can geneate code on run-time
rebuild-proto-json: prepare-vendor-proto
	# @npm install -g protobufjs
	@rm -f $(FORGE_SDK_PATH)/gen_json/*.json && mkdir -p $(FORGE_SDK_PATH)/gen_js
	@pbjs -p /tmp/ -p $(FORGE_SDK_PATH)/ -t json -o $(FORGE_SDK_PATH)/gen_js/spec.json $(FORGE_SDK_PATH)/*.proto
	@echo "New protobuf spec json created."

prepare-vendor-proto:
	@echo "Preparing vendor protobuf..."
	@curl --silent https://raw.githubusercontent.com/ArcBlock/ex_abci/master/lib/abci_protos/vendor.proto > /tmp/vendor.proto
	@echo "Vendor protobuf file fetched!"
