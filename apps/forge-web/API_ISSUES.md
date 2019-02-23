# Forge WEB API 优化点

- listTransactions 如何单个查询返回某个账户发送和接受的所有交易
- 如何获取到当前节点的 IP？需要展示在 header 里面
- 如何获取 token 的名称，以及 token 的 decimal 精度，可能一个拉取当前配置对象的接口会比较合适？会不会有安全问题？
- 目前的翻页不支持跳页，比如 txs 页面的分页器实际上只有下一页能工作
