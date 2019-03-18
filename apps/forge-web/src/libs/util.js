/* eslint import/prefer-default-export:"off" */
import Cookie from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import browserLang from 'browser-lang';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import numeral from 'numeral';
import { fromUnitToToken } from '@arcblock/forge-util';
import { languages, translations } from './locale';
import { COOKIE_LANGUAGE } from './constant';
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

export function getGraphQLEndpoint() {
  if (process.env.NODE_ENV === 'production') {
    const { protocol, host } = window.location;
    return `${protocol}//${host}/api`;
  }

  return 'http://localhost:8210/api'; // local
  // return 'http://abt-test.arcblock.co:8210/api'; // abt testnet
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
  return process.env.REACT_APP_NAME === 'explorer' ? url : `/node/explorer${url}`;
}

export async function fetchInfo(tokenInfo, nodeInfo) {
  try {
    if (isEmpty(tokenInfo)) {
      const { state } = await forge.getForgeState();
      // eslint-disable-next-line
      tokenInfo = state.token;
    }
    if (isEmpty(nodeInfo)) {
      const { info } = await forge.getNodeInfo();
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
