# Add module.exports add the end of each compiled file to accomplish auto completion
for FILE in lib/*_pb.js
do
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
