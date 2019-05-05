const { types } = require('@arcblock/mcrypto');
const { fromSecretKey, WalletType } = require('@arcblock/forge-wallet');
const { hexToBytes } = require('@arcblock/forge-util');
const { toAssetAddress, toStakeAddress } = require('../lib');

describe('#toAssetAddress', () => {
  test('should be a function', () => {
    expect(typeof toAssetAddress).toEqual('function');
  });
  test('should return correct address', () => {
    const wallet = fromSecretKey(
      '0xac6d1d66322add9e67eb31d26eb30ef108a9cb601bd1323acb637d40469a342cd50c92de3e9387c848c9f8a8d6180502da85ebb761b888cba74c6af090ec65f9',
      WalletType({
        role: types.RoleType.ROLE_APPLICATION,
        pk: types.KeyType.ED25519,
        hash: types.HashType.SHA3,
      })
    );
    const itx = {
      moniker: 'ABTWalletHelloWorld',
      pk: Buffer.from(hexToBytes(wallet.publicKey)),
      readonly: true,
      transferrable: false,
      parent: '',
      address: '',
      data: {
        typeUrl: 'json',
        value: {
          model: 'Course',
          title: 'Get Up and Running with ABT Chain Node in 5 Minutes',
          description:
            'Watch a video tutorial to get up and running with ABT Chain Node within 5 minutes, you will learn how to download & install ABT Chain Node, and then how to start the node, then you can join our existing test net with ABT Chain Node.',
          coverImage: 'https://arcblock.oss-cn-beijing.aliyuncs.com/images/course.png',
          videoUrl:
            'https://arcblock.oss-cn-beijing.aliyuncs.com/forge/tutorials/up-and-running-with-abt-chain-node-in-5-minutes.mp4',
        },
      },
    };

    expect(toAssetAddress(itx, wallet.toAddress())).toEqual('zjdjo9SJJ6CLn2CBMn84fD4f6spiyKDJA8ov');
  });
});

describe('#toStakeAddress', () => {
  test('should be a function', () => {
    expect(typeof toStakeAddress).toEqual('function');
  });
});
