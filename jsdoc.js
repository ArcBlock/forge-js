module.exports = {
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc'],
  },
  source: {
    include: [
      'packages/forge-config/lib',
      'packages/forge-util/lib',
      'packages/forge-proto/init.js',
      'packages/forge-message/lib/message.js',
      'packages/forge-wallet/lib',
      'packages/mcrypto/lib',
      'packages/graphql-client/src/module.js',
      'packages/graphql-client/src/client.js',
      'packages/graphql-client/src/types.js',
      'packages/grpc-client/index.js',
      'packages/grpc-client/lib/client.js',
      'packages/grpc-client/lib/types.js',
      '../abt-did-js/packages/did/lib/index.js',
      '../abt-did-js/packages/util/lib',
    ],
    includePattern: '.js$',
    excludePattern: '(node_modules/|docs)',
  },
  plugins: ['plugins/markdown'],
  templates: {
    cleverLinks: false,
    monospaceLinks: true,
    useLongnameInNav: false,
    showInheritedInNav: true,
  },
  opts: {
    destination: './docs/',
    encoding: 'utf8',
    private: false,
    recurse: true,
    template: 'node_modules/@arcblock/docblock',
  },
  docblock: {
    static: true,
    sort: true,
    sectionOrder: [
      'Tutorials',
      'Modules',
      'Classes',
      'Externals',
      'Events',
      'Namespaces',
      'Mixins',
      'Interfaces',
    ],
    meta: {
      title: '',
      description: '',
      keyword: '',
    },
    search: true,
    collapse: true,
    wrap: true,
    typedefs: true,
    navLevel: 3,
    private: false,
    scripts: [],
    menu: {
      ArcBlock: {
        href: 'https://www.arcblock.io',
        target: '_blank',
        class: 'menu-item',
        id: 'website_link',
      },
      Forge: {
        href: 'https://docs.arcblock.io/forge',
        target: '_blank',
        class: 'menu-item',
        id: 'forum_link',
      },
    },
  },
};
