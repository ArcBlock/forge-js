# Add module.exports add the end of each compiled file to accomplish auto completion
for FILE in lib/*_pb.js
do
  if [[ "$FILE" =~ "_grpc_pb" ]]; then
      echo "skip: $FILE"
  else
    echo "patch: $FILE"
    echo "\nmodule.exports = proto.forge_abi;" >> $FILE
  fi
done
