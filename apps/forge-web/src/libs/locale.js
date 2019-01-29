/* eslint-disable global-require */

const localeData = [
  ...require('react-intl/locale-data/en'),
  ...require('react-intl/locale-data/zh'),
];

module.exports = {
  localeData,
  languages: [{ value: 'en', text: 'ENG' }, { value: 'zh', text: '中文' }],
  translations: {
    en: require('../locales/en'),
    zh: require('../locales/zh'),
  },
};
