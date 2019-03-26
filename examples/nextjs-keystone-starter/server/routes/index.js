const authRoutes = require('../controllers/auth');
const userRoutes = require('../controllers/users');
const paymentRoutes = require('../controllers/payments');

module.exports = nextApp => app => {
  const handle = nextApp.getRequestHandler();

  // Attach each controller
  authRoutes(app);
  userRoutes(app);
  paymentRoutes(app);

  app.get('*', (req, res) => handle(req, res));
};
