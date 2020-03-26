# cleanup
rm -f lib/*.js
rm -f lib/*.json

# from forge-abi
cp $FORGE_SDK_PROTO_GEN_DIR/*.js lib/
cp $FORGE_SDK_PROTO_GEN_DIR/*.json lib/
sh ./tools/patch.sh
