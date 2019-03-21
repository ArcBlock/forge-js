const auth = require('../../config/auth');

module.exports = nextApp => app => {
  const handle = nextApp.getRequestHandler();

  app.get('/api/session', (req, res) => {
    res.json(req.session);
  });

  app.get('/api/login', (req, res) => {
    res.send(auth.getLoginUri());
  });

  app.get('/api/auth', (req, res) => {
    const authInfo = auth.getAuthInfo(req.query.userDid);
    console.log('requestAuth', { query: req.query, authInfo });
    res.json(authInfo);
  });

  app.post('/api/auth', (req, res) => {
    res.json(auth.verifyAuth(req.body));
  });

  app.get('*', (req, res) => handle(req, res));
};
