# cleanup
rm -f lib/*.js
rm -f lib/*.json
rm -rf lib/txs/*
mkdir -p lib/txs

# from forge-abi
cp $FORGE_SDK_PROTO_GEN_DIR/*.js lib/
cp $FORGE_SDK_PROTO_GEN_DIR/*.json lib/
cp $FORGE_TX_PROTO_GEN_DIR/*js lib/
cp $FORGE_TX_PROTO_GEN_DIR/*json lib/
rm lib/*_tether_tx_pb.js
sh ./tools/patch.sh

# merge spec
mv lib/spec.json lib/core.json
cat lib/core.json lib/tx.json | jq -s 'reduce .[] as $item ({}; . * $item)' > lib/spec.json

# cleanup
rm lib/tx.json lib/core.json
rm -rf lib/txs
