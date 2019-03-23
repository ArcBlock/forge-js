const keystone = require('keystone');

const { Types } = keystone.Field;

/**
 * InternalUser Model
 * ==========
 */
const InternalUser = new keystone.List('InternalUser', {
  label: '管理员',
  plural: '管理员',
  track: true,
  noedit: true,
  nodelete: true,
  map: { name: 'name' },
  searchFields: 'name email',
  schema: { collection: 'admins' },
});

InternalUser.add(
  {
    name: { type: Types.Name, required: true, index: true },
    email: {
      type: Types.Email,
      initial: true,
      required: true,
      unique: true,
      index: true,
    },
    password: { type: Types.Password, initial: true, required: true },
  },
  'Permissions',
  {
    isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
  }
);

// Provide access to Keystone
InternalUser.schema.virtual('canAccessKeystone').get(function canAccessKeystone() {
  return this.isAdmin;
});

/**
 * Relationships
 */
InternalUser.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

/**
 * Registration
 */
InternalUser.defaultColumns = 'name, email, isAdmin';
InternalUser.register();
