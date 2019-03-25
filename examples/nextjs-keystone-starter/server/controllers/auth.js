const keystone = require('keystone');
const Mcrypto = require('@arcblock/mcrypto');
const auth = require('../../config/auth');

function createLoginToken(req) {
  return Mcrypto.Hasher.SHA3.hash256(req.sessionID + Date.now()).replace(/^0x/, '');
}

module.exports = app => {
  app.get('/api/session', async (req, res) => {
    res.json(req.session);
  });

  app.post('/api/logout', async (req, res) => {
    req.session.user = null;
    res.json(req.session);
  });

  app.get('/api/login/status', async (req, res) => {
    const LoginToken = keystone.list('LoginToken').model;
    const User = keystone.list('User').model;
    const { token } = req.query;
    if (!token) {
      res.status(400).json({ error: 'login token is required to check status' });
      return;
    }

    const session = await LoginToken.findOne({ token });
    if (session) {
      if (!session.uid) {
        res.status(200).json(session);
        return;
      }

      const user = await User.findById(session.uid);
      if (!user) {
        res.status(200).json(session);
        return;
      }

      // FIXME: old session info should be copied to new session
      // const info = req.session;
      req.session.regenerate(async err => {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }

        // Cleanup
        await session.remove();

        // Populate user to session
        req.session.user = user.toObject();
        res.status(200).json(session);
      });
    } else {
      res.status(404).json({ error: 'login status not found' });
    }
  });

  // 1. Generate a login token for this login
  app.get('/api/login', async (req, res) => {
    const LoginToken = keystone.list('LoginToken').model;
    const token = createLoginToken(req);
    await LoginToken.remove({ token });
    const session = new LoginToken({ token, status: 'created' });
    await session.save();

    res.send({
      token,
      url: auth.uri({ token }),
    });
  });

  // 2. Create a new login session record (did, token) for this login
  app.get('/api/auth', async (req, res) => {
    const LoginToken = keystone.list('LoginToken').model;
    const { userDid: did, token } = req.query;
    console.log('auth.get', { did, token });
    const session = await LoginToken.findOne({ token });
    if (session) {
      session.did = did;
      session.status = 'scanned';
      await session.save();
    }

    const authInfo = await auth.sign({
      token,
      claims: {
        profile: {
          fields: ['fullName', 'email', 'phone'],
          description: 'Please provide your email and name to continue',
        },
      },
    });
    // console.log('requestAuth', { query: req.query, authInfo });
    res.json(authInfo);
  });

  // 3. Update login session status, verify login session data
  app.post('/api/auth', (req, res) => {
    auth
      .verify(Object.assign(req.body, req.query))
      .then(async payload => {
        const LoginToken = keystone.list('LoginToken').model;
        const User = keystone.list('User').model;
        const {
          did,
          token,
          requestedClaims: { profile },
        } = payload;

        console.log('auth.post', { did, token });

        const updateLoginToken = async ({ user, succeed }) => {
          if (token) {
            const session = await LoginToken.findOne({ token, did });
            if (session) {
              session.status = succeed ? 'succeed' : 'failed';
              if (user) {
                // eslint-disable-next-line
                session.uid = user._id;
              }
              await session.save();
            } else {
              // TODO: The request must be invalid
            }
          }
        };

        const exist = await User.findOne({ did });
        if (exist) {
          exist.name = profile.fullName;
          exist.email = profile.email;
          exist.mobile = profile.mobile;
          await exist.save();
          console.log('login.update', exist.toObject());
          updateLoginToken({ succeed: true, user: exist.toObject() });
        } else {
          try {
            const user = new User({
              did,
              name: profile.fullName,
              email: profile.email,
              mobile: profile.phone,
            });
            await user.save();
            console.log('login.create', user.toObject());
            updateLoginToken({ succeed: true, user: user.toObject() });
          } catch (err) {
            updateLoginToken({ succeed: false });
            res.json({ error: err.message || err.toString() });
            console.error(err);
          }
        }

        res.json({ status: 0 });
      })
      .catch(err => {
        res.json({ error: err.message });
      });
  });
};
