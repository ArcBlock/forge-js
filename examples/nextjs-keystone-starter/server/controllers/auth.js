const keystone = require('keystone');
const { fromTokenToUnit } = require('@arcblock/forge-util');
const auth = require('../../config/auth');
const AuthHandlers = require('../../config/handlers');
const KeystoneStorage = require('../../config/storage/keystone');

const handler = new AuthHandlers({
  tokenGenerator: req => req.sessionID + Date.now(),
  tokenStorage: new KeystoneStorage(),
  authenticator: auth,
});

module.exports = app => {
  app.get('/api/session', async (req, res) => {
    res.json(req.session);
  });

  app.post('/api/logout', async (req, res) => {
    req.session.user = null;
    res.json(req.session);
  });

  // Enable payment
  handler.attach({
    app,
    action: 'payment',
    claims: {
      signature: {
        txType: 'TransferTx',
        txData: {
          to: auth.wallet.address,
          value: {
            value: fromTokenToUnit(100).toBuffer(),
            minus: false,
          },
        },
        description: 'Please provide your email and name to continue',
      },
    },
    onAuthSuccess: async ({ claims, did }) => {
      console.log('pay.onAuthSuccess', { claims, did });
    },
    onStatusCheck: (req, { did }) => {
      console.log('pay.onStatusCheck', { did });
    },
  });

  // Enable login
  handler.attach({
    app,
    action: 'login',
    claims: {
      profile: {
        fields: ['fullName', 'email', 'phone'],
        description: 'Please provide your email and name to continue',
      },
    },
    onAuthSuccess: async ({ claims, did }) => {
      const User = keystone.list('User').model;
      const profile = claims.find(x => x.type === 'profile');
      const exist = await User.findOne({ did });
      if (exist) {
        exist.name = profile.fullName;
        exist.email = profile.email;
        exist.mobile = profile.mobile;
        await exist.save();
      } else {
        const user = new User({
          did,
          name: profile.fullName,
          email: profile.email,
          mobile: profile.phone,
        });
        await user.save();
      }
    },
    onStatusCheck: (req, { did }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      new Promise((resolve, reject) => {
        // TODO: old session info should be copied to new session
        req.session.regenerate(async err => {
          if (err) {
            reject(err);
            return;
          }

          const User = keystone.list('User').model;
          const user = await User.findOne({ did });
          if (!user) {
            reject(new Error(`User with ${did} did does not exist`));
            return;
          }

          // Populate user to session
          req.session.user = user.toObject();
          resolve(req.session);
        });
      }),
  });
};
