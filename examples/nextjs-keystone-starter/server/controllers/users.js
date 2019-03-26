const keystone = require('keystone');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const User = keystone.list('User').model;
    const users = await User.find({})
      .sort('-createdAt')
      .limit(100);
    res.json(users);
  });
};
