/* eslint-disable global-require */
import localeEN from 'react-intl/locale-data/en';
import localeZH from 'react-intl/locale-data/zh';

import en from '../locales/en';
import zh from '../locales/zh';

export const localeData = [...localeEN, ...localeZH];
export const languages = [{ value: 'en', text: 'English' }, { value: 'zh', text: '简体中文' }];
export const translations = { en, zh };
