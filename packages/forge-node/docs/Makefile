SHELL=/bin/bash
TOP_DIR=.
FORGE_KV_PATH=/tmp/.forge_kv_node

TM_BIN_PATH=`which tendermint`
IPFS_BIN_PATH=`which ipfs`

prepare: clean
	@mkdir -p $(FORGE_KV_PATH)/{tendermint,ipfs}/bin
	@[ -f "${TM_BIN_PATH}" ] && cp -f $(TM_BIN_PATH) $(FORGE_KV_PATH)/tendermint/bin
	@[ -f "${IPFS_BIN_PATH}" ] && cp -f $(IPFS_BIN_PATH) $(FORGE_KV_PATH)/ipfs/bin

start-forge:
	@echo "Running forge for kv app..."
	@FORGE_CONFIG=./kv.toml ~/Develop/arcblock/forge/_build/staging/rel/forge/bin/forge console

start-app:
	@echo "Running tcp server for kv app..."
	@node server.js

clean:
	@echo "Cleaning the build..."
	@rm -rf $(FORGE_KV_PATH)

rebuild-proto-js: prepare-vendor-proto
	# @npm install -g grpc-tools
	@rm -f $(TOP_DIR)/gen/*.js && mkdir -p $(TOP_DIR)/gen
	@grpc_tools_node_protoc --js_out=import_style=commonjs,binary:$(TOP_DIR)/gen --grpc_out=$(TOP_DIR)/gen --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` /tmp/vendor.proto
	@grpc_tools_node_protoc --proto_path=/tmp/ --proto_path=$(TOP_DIR)/ --js_out=import_style=commonjs,binary:$(TOP_DIR)/gen --grpc_out=$(TOP_DIR)/gen --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $(TOP_DIR)/*.proto
	@mv $(TOP_DIR)/gen/tmp/*.js $(TOP_DIR)/gen/ && rm -rf $(TOP_DIR)/gen/tmp
	@echo "New protobuf files for javascript created."

# Generate protobuf spec in json format to use in languages that can geneate code on run-time
rebuild-proto-json: prepare-vendor-proto
	# @npm install -g protobufjs
	@rm -f $(TOP_DIR)/gen_json/*.json && mkdir -p $(TOP_DIR)/gen
	@pbjs -p /tmp/ -p $(TOP_DIR)/ -t json -o $(TOP_DIR)/gen/spec.json $(TOP_DIR)/*.proto
	@echo "New protobuf spec json created."

prepare-vendor-proto:
	@echo "Preparing vendor protobuf..."
	@curl --silent https://raw.githubusercontent.com/ArcBlock/ex_abci/master/lib/abci_protos/vendor.proto > /tmp/vendor.proto
	@echo "Vendor protobuf file fetched!"
