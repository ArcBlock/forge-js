const keystone = require('keystone');
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

  handler.attach({
    app,
    action: 'login',
    claims: {
      profile: {
        fields: ['fullName', 'email', 'phone'],
        description: 'Please provide your email and name to continue',
      },
    },
    onAuthSuccess: async ({ profile, did }) => {
      const User = keystone.list('User').model;
      const exist = await User.findOne({ did });
      if (exist) {
        exist.name = profile.fullName;
        exist.email = profile.email;
        exist.mobile = profile.mobile;
        await exist.save();
      } else {
        try {
          const user = new User({
            did,
            name: profile.fullName,
            email: profile.email,
            mobile: profile.phone,
          });
          await user.save();
        } catch (err) {
          console.error(err);
        }
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
