sed -i -E "s/_@arcblockForgeSdk/ForgeSDK/g" index.d.ts
sed -i -E "s/Client/RpcClient/g" index.d.ts
sed -i -E "s/RpcRpcClient/RpcClient/g" index.d.ts
sed -i -E "s/listTxMethods\(\): ForgeSDK.T100;/listTxMethods(): ForgeSDK.T100;__RpcClientMethods__/" index.d.ts

echo "index.d.ts was patched";
