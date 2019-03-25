const keystone = require('keystone');
const auth = require('../../config/auth');

function createLoginToken(req) {
  return req.sessionID;
}

module.exports = nextApp => app => {
  const handle = nextApp.getRequestHandler();

  app.get('/api/session', async (req, res) => {
    const { LoginToken, User } = keystone.mongoose.models;
    const { token } = req.query;
    if (!token) {
      res.json(req.session);
      return;
    }

    const session = await LoginToken.findOne({ token, status: 'succeed' });
    if (!session) {
      res.json(req.session);
      return;
    }

    const user = await User.findById(session.uid);
    if (!user) {
      res.json(req.session);
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
      res.json(req.session);
    });
  });

  app.get('/api/login/status', async (req, res) => {
    const { LoginToken } = keystone.mongoose.models;
    const { token } = req.query;
    if (!token) {
      res.status(400).json({ error: 'login token is required to check status' });
      return;
    }

    const session = await LoginToken.findOne({ token });
    if (session) {
      res.status(200).json({ status: session.status });
    } else {
      res.status(404).json({ error: 'login status not found' });
    }
  });

  // 1. Generate a login token for this login
  app.get('/api/login', async (req, res) => {
    const { LoginToken } = keystone.mongoose.models;
    const token = createLoginToken(req);
    await LoginToken.remove({ token });
    const session = new LoginToken({ token, status: 'created' });
    await session.save();

    res.send({
      token,
      url: auth.getLoginUri(token),
    });
  });

  // 2. Create a new login session record (did, token) for this login
  app.get('/api/auth', async (req, res) => {
    const { LoginToken } = keystone.mongoose.models;
    const { userDid: did, token } = req.query;
    const session = LoginToken.findOne({ token });
    if (session) {
      session.did = did;
      session.status = 'scanned';
      await session.save();
    }

    const authInfo = auth.getAuthInfo(token, did);
    // console.log('requestAuth', { query: req.query, authInfo });
    res.json(authInfo);
  });

  // 3. Update login session status, verify login session data
  app.post('/api/auth', (req, res) => {
    auth
      .verifyAuth(Object.assign(req.body, req.query))
      .then(async payload => {
        const { User, LoginToken } = keystone.mongoose.models;
        const {
          userDID,
          token,
          requestedClaims: { profile },
        } = payload;

        const updateLoginToken = async ({ user, succeed }) => {
          if (token) {
            const session = LoginToken.findOne({ token });
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

        const exist = await User.findOne({ did: userDID });
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
              did: payload.userDID,
              name: profile.fullName,
              email: profile.email,
              mobile: profile.mobile,
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

  app.get('*', (req, res) => handle(req, res));
};
