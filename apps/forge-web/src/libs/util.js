/* eslint import/prefer-default-export:"off" */
import Cookie from 'js-cookie';
import browserLang from 'browser-lang';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { languages, translations } from './locale';
import { COOKIE_LANGUAGE } from './constant';

export function detectLocale() {
  const locale =
    Cookie.get(COOKIE_LANGUAGE) ||
    browserLang({ languages: languages.map(x => x.value), fallback: 'en' }) ||
    'en';

  const messages = translations[locale];

  return { locale, messages };
}

export function delay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function parseQuery(str) {
  return str
    .replace(/^\?/, '')
    .split('&')
    .map(x => x.split('='))
    .reduce((acc, x) => {
      const [key, value = true] = x;
      acc[key] = value;
      return acc;
    }, {});
}

export function getTxType(tx) {
  return upperFirst(camelCase(tx.type)) || tx.tx.itx.__typename.replace(/Tx$/, ''); // eslint-disable-line
}
