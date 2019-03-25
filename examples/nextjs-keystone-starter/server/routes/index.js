const authRoutes = require('../controllers/auth');

module.exports = nextApp => app => {
  const handle = nextApp.getRequestHandler();

  // Attach each controller
  authRoutes(app);

  app.get('*', (req, res) => handle(req, res));
};
