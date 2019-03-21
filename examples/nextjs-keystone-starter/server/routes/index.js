const keystone = require('keystone');
const config = require('../../config/app');

// TODO: allow more flexible routes
module.exports = nextApp => app => {
  // Next request handler
  const handle = nextApp.getRequestHandler();

  app.get('/api/posts', (req, res) => {
    const Post = keystone.list('Post');
    Post.model
      .find()
      .where('state', 'published')
      .sort('-publishedDate')
      .exec((err, results) => {
        if (err) throw err;
        res.json(results);
      });
  });

  app.get('/api/session', (req, res) => {
    res.jsonp(req.session);
  });

  app.get('/api/login', (req, res) => {
    res.send(config.getLoginUri());
  });

  app.get('/api/auth', (req, res) => {
    res.jsonp(config.getAuthInfo(req.query.userDid));
  });

  app.get('*', (req, res) => handle(req, res));
};
