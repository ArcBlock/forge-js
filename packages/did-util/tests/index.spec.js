const { toAssetAddress, toStakeAddress } = require('../lib');

describe('#toAssetAddress', () => {
  test('should be a function', () => {
    expect(typeof toAssetAddress).toEqual('function');
  });
  test('should return correct address', () => {
    const itx = {
      moniker: 'ABT Wallet Demo Course',
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

    expect(toAssetAddress(itx)).toEqual('zjdfDYa9m3eBHnAy2djWENwsuDbVQDP9Cz4M');
  });
});

describe('#toStakeAddress', () => {
  test('should be a function', () => {
    expect(typeof toStakeAddress).toEqual('function');
  });
});
