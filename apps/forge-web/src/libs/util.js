import Cookie from 'js-cookie';
import browserLang from 'browser-lang';
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
