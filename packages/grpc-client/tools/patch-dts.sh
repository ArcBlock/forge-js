sed -i -E "s/_@arcblockGrpcClient/GrpcClient/g" index.d.ts
sed -i -E "s/Client/RpcClient/g" index.d.ts
sed -i -E "s/GrpcRpcClient/GrpcClient/g" index.d.ts
sed -i -E "s/listTxMethods\(\): GrpcClient.T100;/listTxMethods(): GrpcClient.T100;__RpcClientMethods__/" index.d.ts

echo "index.d.ts was patched";
