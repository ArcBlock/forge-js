const {
  toAssetAddress,
  toItxAddress,
  toStakeAddress,
  toDelegateAddress,
  toTetherAddress,
} = require('../lib');

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

  test('should return different result on reversed input', () => {
    const address1 = 'z1gV8DHM8nBdrGBnZyR48qutN8BrKbSVcEU';
    const address2 = 'z1VFy8hB9ndynkWAAH9P1a2L5WaU7AvtKGy';
    expect(toStakeAddress(address1, address2)).toEqual('zrjtNfbkAMkrnx8YmtMLScgkcyWRxoB1696x');
    expect(toStakeAddress(address2, address1)).toEqual('zrjwrePam5hV689TGTByVL8qYzTiAww8bDs4');
  });
});

describe('#toItxAddress', () => {
  test('should be a function', () => {
    expect(typeof toItxAddress).toEqual('function');
  });

  test('should return correct address', () => {
    expect(toItxAddress({ moniker: 'wangshijun' }, 'DeclareTx')).toEqual(
      'z2E44GA1A8KD8j49zMkL8Eacey2RRCtXo9ecT'
    );
  });
});

describe('#toTetherAddress', () => {
  test('should be a function', () => {
    expect(typeof toTetherAddress).toEqual('function');
  });

  test('should return correct tether address', () => {
    expect(
      toTetherAddress('0xCE922DEDAA0E2C141B040BB8034AF17BF9962266F1EF179E05B46FC5FAD43258')
    ).toEqual('z2MC8w872CYeZ3zZSERMkaKSmiDrHHr7vDxYE');
    expect(
      toTetherAddress('0xF7CA36EDB52048EA9CE61842C522A2176B7613883B42B70798DD19D6BAF9E3BC')
    ).toEqual('z2MCCh4wH3kJTvZQZNiVwDt3PNCqzqvZWvnz1');
  });
});

describe('#toDelegateAddress', () => {
  test('should be a function', () => {
    expect(typeof toDelegateAddress).toEqual('function');
  });

  test('should return correct delegate address', () => {
    const addr1 = 'z1UwtRm2jn9ykCapQsma71SwshtNbysLQri';
    const addr2 = 'z1WX2dUxVgvcuC2BUpagTjiRrcKDMbNudth';
    const result1 = 'z2bMvBsMwKLh6mv9K6bobcu69AJFYEgbb7wuE';
    const result2 = 'z2bNB1duqf4mvby6Sezgw7vCPw1G68BtuQ9L8';
    expect(toDelegateAddress(addr1, addr2)).toEqual(result1);
    expect(toDelegateAddress(addr2, addr1)).toEqual(result2);
  });
});
