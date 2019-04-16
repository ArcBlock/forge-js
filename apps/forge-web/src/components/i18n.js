import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { localeData } from '../libs/locale';
import { detectLocale } from '../libs/util';

addLocaleData(localeData);

const { locale, messages } = detectLocale();

// eslint-disable-next-line react/prop-types
export default function I18n({ children }) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
