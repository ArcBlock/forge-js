# Add module.exports add the end of each compiled file to accomplish auto completion
for FILE in lib/*_pb.js
do
  sed -i -E "s/get([a-zA-Z0-9]+)_asB64\(\)/get\1()/" $FILE
  # sed -i -E "s/new\sBuffer\(/Buffer.from(/" $FILE
  # sed -i -E "s/get([a-zA-Z0-9]+)_asU8\(\)/get\1()/" $FILE
done
