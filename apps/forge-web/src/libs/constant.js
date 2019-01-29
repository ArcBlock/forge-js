/* eslint import/prefer-default-export:"off" */
export const COOKIE_LANGUAGE = 'aba_lang';

export const sizes = {
  marginXLarge: '30px',
  marginLarge: '20px',
  marginDefault: '15px',
  marginSmall: '10px',
  marginTiny: '5px',
  avatarDefault: '20px',
  header: '80px',
};

// @link https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c
export const colors = {
  white: '#F8F8F8',
  dark: '#4A707C',
  gray: '#404040',
  background: '#fbfbfb',
  yellow: '#FFD166',
  green: '#06D6A0',
  red: '#EF476F',
  blue: '#118AB2',
};

export const chains = [
  {
    name: 'Bitcoin',
    priority: 10000,
    decimals: 1e8,
    symbol: 'BTC',
    chain: 'BTC',
    loadBalance: true,
    icon: '/static/btc.svg',
    contractAddress: 'bitcoin-main',
  },
  {
    name: 'Ethereum',
    priority: 1000,
    decimals: 1e18,
    symbol: 'ETH',
    chain: 'ETH',
    loadBalance: true,
    icon: '/static/eth.svg',
    contractAddress: 'ethereum-main',
  },
];

export const orderStatus = {
  CREATED: 0,
  PAID: 1,
  EXPIRED: 2,
};

export const faqs = {
  pricing: [
    {
      question: 'What is OPU?',
      answer: [
        '<strong>OPU</strong> means OCAP Processing Unit, it is the minimium unit of API usage tracking, 1 API call with 1K data in response count for 1 OPU.',
        'If you used up all your OPU quota, later API call with downgrade to FREE plan.',
      ],
    },
    {
      question: 'What is RPQ?',
      answer: [
        '<strong>RPQ</strong> means number of data rows returned on each API query.',
        'Most data query API supported by OCAP are paginated for performance sake.',
        'Different plans have different pagination limit.',
      ],
    },
    {
      question: 'What is QPS Limit?',
      answer: [
        '<strong>QPS</strong> means query per second, API requests that exceeds the QPS defined in your plan will get 429 response',
        'Different plans have different QPS limit.',
      ],
    },
  ],
};
