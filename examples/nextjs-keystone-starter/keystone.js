// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

const _ = require('lodash');
const keystone = require('keystone');

keystone.init({
  name: 'forge web application starter (react)',
  brand: 'forge web application starter (react)',

  less: 'public',
  static: 'public',
  favicon: 'public/favicon.ico',
  views: 'templates/views',
  'view engine': 'pug',

  'auto update': true,
  session: true,
  auth: true,
  'user model': 'User',
});

keystone.import('models');
keystone.set('locals', {
  _,
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));

keystone.set('nav', {
  posts: ['posts', 'post-categories'],
  users: 'users',
});

keystone.start();
