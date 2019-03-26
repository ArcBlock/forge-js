const keystone = require('keystone');

module.exports = app => {
  app.get('/api/payments', async (req, res) => {
    const Payment = keystone.list('Payment').model;
    const payment = await Payment.findOne({ did: req.session.user.did });
    res.json(payment ? payment.toObject() : null);
  });
};
