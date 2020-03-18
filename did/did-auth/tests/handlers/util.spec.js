const { parseWalletUA, getStepChallenge } = require('../../lib/handlers/util');

describe('#parseWalletUA', () => {
  describe('#android', () => {
    test('should parse "User-Agent: okhttp/3.12.2 (Linux; U; LGE Build/Nexus5)" correctly', async () => {
      const wallet = parseWalletUA('User-Agent: okhttp/3.12.2 (Linux; U; LGE Build/Nexus5)');

      expect(wallet).toEqual({ os: '', version: '' });
    });

    test('should parse "User-Agent: okhttp/3.12.2 ArcWallet/ (Linux; U; Android 25; LGE Build/Nexus5)" correctly', async () => {
      const wallet = parseWalletUA('User-Agent: okhttp/3.12.2 ArcWallet/ (Linux; U; Android 25; LGE Build/Nexus5)');

      expect(wallet).toEqual({ os: 'android', version: '' });
    });

    test('should parse "User-Agent: okhttp/3.12.2 ArcWallet/1.3.62 (Linux; U; Android 25; LGE Build/Nexus5)" correctly', async () => {
      const wallet = parseWalletUA(
        'User-Agent: okhttp/3.12.2 ArcWallet/1.3.62 (Linux; U; Android 25; LGE Build/Nexus5)'
      );

      expect(wallet).toEqual({ os: 'android', version: '1.3.62' });
    });
  });

  describe('#ios', () => {
    test('should parse "iPhone12,3 iOS/13.0 CFNetwork/1098.7" correctly', async () => {
      const wallet = parseWalletUA('iPhone12,3 iOS/13.0 CFNetwork/1098.7');

      expect(wallet).toEqual({ os: '', version: '' });
    });

    test('should parse "ArcWallet/ iPhone12,3 iOS/13.0 CFNetwork/1098.7 Darwin/19.0.0" corcorrectlyrect', async () => {
      const wallet = parseWalletUA('ArcWallet/ iPhone12,3 iOS/13.0 CFNetwork/1098.7 Darwin/19.0.0');

      expect(wallet).toEqual({ os: 'ios', version: '' });
    });

    test('should parse "ArcWallet/1.3.29 iPhone12,3 iOS/13.0 CFNetwork/1098.7 Darwin/19.0.0" correctly', async () => {
      const wallet = parseWalletUA('ArcWallet/1.3.29 iPhone12,3 iOS/13.0 CFNetwork/1098.7 Darwin/19.0.0');

      expect(wallet).toEqual({ os: 'ios', version: '1.3.29' });
    });
  });
});

describe('#getStepChallenge', () => {
  test('should return random bytes', async () => {
    const c1 = getStepChallenge();
    const c2 = getStepChallenge();
    expect(c1).toBeTruthy();
    expect(c2).toBeTruthy();
    expect(c1).not.toEqual(c2);
  });
});
