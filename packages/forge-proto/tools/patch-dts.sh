sed -i -E "s/_@arcblockForgeProto/ForgeProto/g" index.d.ts
sed -i -E "s/enums: ForgeProto.T100/enums: Enums.main/g" index.d.ts
sed -i -E "s/messages: ForgeProto.T100/messages: Messages.main/g" index.d.ts

echo "index.d.ts was patched";
