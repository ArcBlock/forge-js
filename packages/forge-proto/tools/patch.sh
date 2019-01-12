# Add module.exports add the end of each compiled file to accomplish auto completion
for FILE in lib/*_pb.js
do
  sed -i -E "s/get([a-zA-Z0-9]+)_asB64\(\)/get\1()/" $FILE
  # sed -i -E "s/get([a-zA-Z0-9]+)_asU8\(\)/get\1()/" $FILE
  if [[ "$FILE" =~ "_grpc_pb" ]]; then
    echo "skip: $FILE"
  else
    echo "patch: $FILE"
    if [[ "$FILE" =~ "vendor_" ]]; then
      echo "\nmodule.exports = proto.forge_vendor;" >> $FILE
    else
      echo "\nmodule.exports = proto.forge_abi;" >> $FILE
    fi
  fi
done
