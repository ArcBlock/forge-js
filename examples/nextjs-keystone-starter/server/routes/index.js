const authRoutes = require('../controllers/auth');
const userRoutes = require('../controllers/users');

module.exports = nextApp => app => {
  const handle = nextApp.getRequestHandler();

  // Attach each controller
  authRoutes(app);
  userRoutes(app);

  app.get('*', (req, res) => handle(req, res));
};
