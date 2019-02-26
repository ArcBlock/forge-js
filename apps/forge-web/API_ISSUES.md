# Forge WEB API 优化点

- listTransactions 如何单个查询返回某个账户发送和接受的所有交易，查询条件支持 union
- 如何获取到当前节点的 IP？需要展示在 header 里面
- 如何获取 token 的名称，以及 token 的 decimal 精度，可能一个拉取当前配置对象的接口会比较合适？会不会有安全问题？
- 目前的翻页机制不支持跳页，比如 txs 页面的分页器实际上只有下一页能工作
- asset 详情页是否要支持？能够展示 asset 的流转过程
- AccountMigrateTx 里面没有 to，前端还要算 hash？
- ActivateAssetTx 在区块链上 asset 应该和 tx 一样是一等公民

```json
{
  "chainId": "forge",
  "from": "z1YJtWJTiGjLzhBUFGZcHr4oH1TFYzvzYAV",
  "itx": {
    "__typename": "AccountMigrateTx",
    "pk": "Owu29VXuaLuWRdIB2FpUsWmuo17_-JTX1S8iRFDa3B8",
    "type": {
      "address": "BASE58",
      "hash": "SHA3",
      "pk": "ED25519",
      "role": "ROLE_ACCOUNT"
    }
  },
  "nonce": 2,
  "signature": "0-1_FJGar_0Ii4eKZq5RCeQm_i4iS16tBDzLe0ujNdadCT7XrT07AfrHwjkCiXxWfcN-OvrRX61CKuhbY44VCQ",
  "signatures": []
}
```
