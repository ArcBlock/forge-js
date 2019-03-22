// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

const path = require('path');
const keystone = require('keystone');
const next = require('next');

keystone.init({
  name: 'Forge Web Starter (React + Next.js + Keystone.js)',
  brand: 'Forge Web Starter (React + Next.js + Keystone.js)',
  updates: './server/updates',
  'auto update': true,
  'admin path': 'admin',
  session: true,
  auth: true,
  'user model': 'User',
});

keystone.import('./server/models');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.join(__dirname, './client'),
});

app.prepare().then(() => {
  // eslint-disable-next-line
  keystone.set('routes', require('./server/routes')(app));

  keystone.set('nav', {
    posts: ['posts', 'post-categories'],
    users: 'users',
  });

  keystone.start();
});
