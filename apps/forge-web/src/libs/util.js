/* eslint import/prefer-default-export:"off" */
import Cookie from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import browserLang from 'browser-lang';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import numeral from 'numeral';
import { fromUnitToToken } from '@arcblock/forge-util';

import { languages, translations } from './locale';
import { COOKIE_LANGUAGE, networks } from './constant';
import forge from './forge';

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

/**
 * Current network selection priority
 *  - network param from `window.location.pathname`
 *  - network param from query string
 *  - network param from localStorage
 *  - first network in the list
 */
export function selectNetwork() {
  const names = Object.keys(networks);
  let selected = names[0];
  try {
    const cached = JSON.parse(localStorage.getItem('switcher.current'));
    if (cached && names.includes(cached)) {
      selected = cached;
    }

    const params = parseQuery(typeof window === 'undefined' ? '' : window.location.search);
    if (params.network && names.includes(params.network)) {
      selected = params.network;
    }

    const paths =
      typeof window === 'undefined' ? [] : window.location.pathname.split('/').filter(Boolean);
    if (paths.length && names.includes(paths[0])) {
      // eslint-disable-next-line prefer-destructuring
      selected = paths[0];
    }

    localStorage.setItem('switcher.current', JSON.stringify(selected));
  } catch (err) {
    // Do nothing
  }

  return selected;
}

export function getGraphQLEndpoint() {
  if (window.localStorage) {
    if (window.localStorage.getItem('GQL_ENDPOINT')) {
      return window.localStorage.getItem('GQL_ENDPOINT');
    }
  }

  if (process.env.NODE_ENV === 'production') {
    const { protocol, host } = window.location;
    return `${protocol}//${host}/api`;
  }

  if (process.env.REACT_APP_NAME === 'explorer') {
    const current = selectNetwork();
    if (current && networks[current]) {
      return networks[current].endpoint;
    }
  }

  return 'http://localhost:8210/api'; // local
}

export function fromTypeUrl(url, camelcase = true) {
  const type = url.split(':').pop();
  if (camelcase) {
    return upperFirst(camelCase(type)).replace(/Tx$/, '');
  }

  return type;
}

export function toTypeUrl(type) {
  const underscored = type
    .trim()
    .replace(/Tx$/, '')
    .replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
    .replace(/[-\s]+/g, '_')
    .toLowerCase();
  return `fg:t:${underscored}`;
}

export function fromArcToReadable(bn) {
  return numeral(fromUnitToToken(bn)).format('0,0.0000');
}

export function getExplorerUrl(url) {
  const network = selectNetwork();
  return process.env.REACT_APP_NAME === 'explorer' ? `/${network}${url}` : `/node/explorer${url}`;
}

export async function fetchInfo(tokenInfo, nodeInfo) {
  try {
    if (isEmpty(tokenInfo)) {
      const { state } = await forge().getForgeState();
      // eslint-disable-next-line
      tokenInfo = state.token;
    }
    if (isEmpty(nodeInfo)) {
      const { info } = await forge().getNodeInfo();
      // eslint-disable-next-line
      nodeInfo = info;
    }

    return { token: tokenInfo, node: nodeInfo };
  } catch (err) {
    console.error(err.errors);
    throw new Error(
      Array.isArray(err.errors)
        ? err.errors.map(x => x.message).join(',')
        : err.message || err.toString()
    );
  }
}

export function createSeries(args) {
  let { dataKey, stroke, gradientStart, gradientStop } = args; // eslint-disable-line
  if (typeof args === 'string') {
    dataKey = args;
  }

  return {
    dataKey,
    stroke: stroke || '#868787',
    gradientStart: gradientStart || '#ECE8E8',
    gradientStop: gradientStop || '#F8F8F8',
  };
}
