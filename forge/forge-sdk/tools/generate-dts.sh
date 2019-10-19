if [ $# -eq 0 ]
then
  echo "No type argument supplied"
  exit 1
fi

filename="$1.d.ts"
echo "generate dts for $filename"

rm $filename

cp ../forge-util/lib/index.d.ts /tmp/forge-util.d.ts
sed -i -E "s/_Lib/ForgeSdkUtil/g" /tmp/forge-util.d.ts
sed -i -E "/export = ForgeSdkUtil/d" /tmp/forge-util.d.ts
sed -i -E "/declare const ForgeSdkUtil:/d" /tmp/forge-util.d.ts
cat /tmp/forge-util.d.ts >> $filename
echo "forge-util.d.ts was patched and merged";

if [ "$1" == "index" ]
then
  cp ../forge-wallet/lib/index.d.ts /tmp/forge-wallet.d.ts
  sed -i -E "s/_Lib/ForgeSdkWallet/g" /tmp/forge-wallet.d.ts
  sed -i -E "/export = ForgeSdkWallet/d" /tmp/forge-wallet.d.ts
  sed -i -E "/declare const ForgeSdkWallet:/d" /tmp/forge-wallet.d.ts
  cat /tmp/forge-wallet.d.ts >> $filename
  echo "forge-wallet.d.ts was patched and merged";

  cp ../forge-message/index.d.ts /tmp/forge-message.d.ts
  sed -i -E "s/_ArcblockForgeMessage/ForgeSDKMessage/g" /tmp/forge-message.d.ts
  sed -i -E "/export = ForgeSDKMessage/d" /tmp/forge-message.d.ts
  sed -i -E "/declare const ForgeSDKMessage:/d" /tmp/forge-message.d.ts
  cat /tmp/forge-message.d.ts >> $filename
  echo "forge-message.d.ts was patched and merged";

  cp ../../did/did-util/lib/index.d.ts /tmp/did-util.d.ts
  sed -i -E "s/_Lib/ForgeSdkUtil/g" /tmp/did-util.d.ts
  sed -i -E "/export = ForgeSdkUtil/d" /tmp/did-util.d.ts
  sed -i -E "/declare const ForgeSdkUtil:/d" /tmp/did-util.d.ts
  cat /tmp/did-util.d.ts >> $filename
  echo "did-util.d.ts was patched and merged";

  cp ../grpc-client/index.d.ts /tmp/grpc-client.d.ts
  sed -i -E "s/declare class GRpcClient/declare interface ForgeSDK/g" /tmp/grpc-client.d.ts
  sed -i -E "/@class/d" /tmp/grpc-client.d.ts
  sed -i -E "/constructor\(/d" /tmp/grpc-client.d.ts
  sed -i -E "/export = GRpcClient/d" /tmp/grpc-client.d.ts
  sed -i -E "/declare const GRpcClient:/d" /tmp/grpc-client.d.ts
  cat /tmp/grpc-client.d.ts >> $filename
  echo "grpc-client.d.ts was patched and merged";
fi

cp ../graphql-client/src/node.d.ts /tmp/graphql-client.d.ts
sed -i -E "s/declare class GraphQLClient/declare interface ForgeSDK/g" /tmp/graphql-client.d.ts
sed -i -E "/@class/d" /tmp/graphql-client.d.ts
sed -i -E "/constructor\(/d" /tmp/graphql-client.d.ts
sed -i -E "/config: /d" /tmp/graphql-client.d.ts
sed -i -E "/schema: /d" /tmp/graphql-client.d.ts
sed -i -E "/export = GraphQLClient/d" /tmp/graphql-client.d.ts
sed -i -E "/export as namespace GraphQLClient/d" /tmp/graphql-client.d.ts
cat /tmp/graphql-client.d.ts >> $filename
echo "graphql-client.d.ts was patched and merged";

echo "
/**
  * Connect to a forge grpc/graphql endpoint
  * Then switch the current connection of ForgeSDK to that connection
  *
  * @public
  * @function
  * @param {string} endpoint - endpoint url string
  * @param {object} options - connection config
  * @param {string} options.name - connection name
  * @param {string} options.default - set this connection as default?
  * @see GraphQLClient for methods available when connected to graphql endpoint
  * @see GRpcClient for methods available when connected to grpc endpoint
  */
declare function connect(endpoint: string, options: ConnectOptions): void;

declare interface ConnectOptions {
  name: string;
  default: bool;
}
" >> $filename

if [ "$1" == "index" ]
then
  echo "
  declare interface ForgeSDK {
    Util: ForgeSdkUtil.T100;
    Wallet: ForgeSdkWallet.T103;
    Message: ForgeSDKMessage.T101;
    connect: typeof connect;
  }

  declare const _Lib: ForgeSDK;
  export = _Lib;" >> $filename
else
  echo "
  declare interface ForgeSDK {
    connect: typeof connect;
  }

  declare const _Lib: ForgeSDK;
  export = _Lib;" >> $filename
fi

sed -i -E "/Generate by/d" $filename
