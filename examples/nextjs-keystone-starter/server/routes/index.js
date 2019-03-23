const keystone = require('keystone');
const auth = require('../../config/auth');

module.exports = nextApp => app => {
  const handle = nextApp.getRequestHandler();

  app.get('/api/session/update', (req, res) => {
    req.session.info = { key: 'value' };
    res.json(req.session);
  });

  app.get('/api/session', (req, res) => {
    res.json(req.session);
  });

  app.get('/api/login', (req, res) => {
    res.send(auth.getLoginUri(req.sessionID));
  });

  app.get('/api/auth', (req, res) => {
    const authInfo = auth.getAuthInfo(req.query.sessionID, req.query.userDid);
    // console.log('requestAuth', { query: req.query, authInfo });
    res.json(authInfo);
  });

  app.post('/api/auth', (req, res) => {
    auth
      .verifyAuth(Object.assign(req.body, req.query))
      .then(async payload => {
        // console.log(keystone.mongoose);
        const { User } = keystone.mongoose.models;
        const {
          userDID,
          sessionID,
          requestedClaims: { profile },
        } = payload;

        const login = async user => {
          // const session = await Session.findOne({ _id: sessionID });
          // console.log({ session: session.toObject(), user });
        };

        const exist = await User.findOne({ did: userDID });
        if (exist) {
          exist.name = profile.fullName;
          exist.email = profile.email;
          exist.mobile = profile.mobile;
          await exist.save();
          console.log('login.update', exist.toObject());
          login(exist.toObject());
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
            login(user.toObject());
          } catch (err) {
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
