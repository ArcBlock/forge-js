const keystone = require('keystone');

module.exports = app => {
  app.get('/api/payments', async (req, res) => {
    const Payment = keystone.list('Payment').model;
    // eslint-disable-next-line no-underscore-dangle
    const payment = Payment.findOne({ user: req.session.user._id });
    res.json(payment);
  });
};
