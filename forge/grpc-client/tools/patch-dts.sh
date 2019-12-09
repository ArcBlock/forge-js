sed -i -E "s/_ArcblockGrpcClient/GRpcClient/g" index.d.ts
sed -i -E "s/Client/GRpcClient/g" index.d.ts
sed -i -E "s/GRpcGRpcClient/GRpcClient/g" index.d.ts
sed -i -E "s/getRpcMethods\(\): any;/getRpcMethods(): any;__GRpcClientMethods__/" index.d.ts

echo "index.d.ts was patched";
