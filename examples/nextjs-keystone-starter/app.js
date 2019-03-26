// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

const path = require('path');
const keystone = require('keystone');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const next = require('next');

const mongo = 'mongodb://localhost/forge-web-starter';

keystone.init({
  name: 'Forge Web Starter (React + Next.js + Keystone.js)',
  brand: 'Forge Web Starter (React + Next.js + Keystone.js)',
  updates: './server/updates',
  'auto update': true,
  'admin path': 'admin',
  session: true,
  auth: true,
  mongo,
  'user model': 'InternalUser',
  'session options': {
    key: 'sid',
    rolling: true,
    resave: false,
    saveUninitialized: true,
    secret: process.env.COOKIE_SECRET,
    store: new MongoStore({ url: mongo }),
  },
});

keystone.import('./server/models');
keystone.set('nav', {
  posts: ['posts', 'post-categories'],
  users: ['users', 'internal-users'],
});

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.join(__dirname, './client'),
});

app.prepare().then(() => {
  // eslint-disable-next-line
  keystone.set('routes', require('./server/routes')(app));

  keystone.start();
});
