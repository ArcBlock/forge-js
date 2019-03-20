const keystone = require('keystone');

// Setup Route Bindings
module.exports = nextApp => keystoneApp => {
  // Next request handler
  const handle = nextApp.getRequestHandler();

  keystoneApp.get('/api/posts', (req, res) => {
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

  keystoneApp.get('*', (req, res) => handle(req, res));
};
