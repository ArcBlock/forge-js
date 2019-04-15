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
  white: '#ffffff',
  dark: '#4A707C',
  gray: '#222222',
  minor: '#9b9b9b',
  darkText: '#dcdcdc',
  background: '#f7f8f8',
  yellow: '#FFCF71',
  green: '#4cbbb9',
  red: '#FF7B8A',
  blue: '#4e6af6',
};

export const gaAccounts = {
  chain_node_web: 'UA-121627413-4',
  chain_node_desktop: 'UA-121627413-5',
  abt_explorer: 'UA-121627413-3',
};

export const networks = {
  argon: {
    id: 1,
    name: 'Argon',
    abbr: 'Ar',
    endpoint: 'https://argon.abtnetwork.io/api',
    description: 'Public test network',
  },
  bromine: {
    id: 2,
    name: 'bromine',
    abbr: 'Br',
    endpoint: 'https://bromine.abtnetwork.io/api',
    description: 'Public test network',
    extra: 'nightly',
  },
  titanium: {
    id: 3,
    name: 'titanium',
    abbr: 'Ti',
    endpoint: 'https://titanium.abtnetwork.io/api',
    description: 'Public test network',
  },
};

export function getBoxShadow(props) {
  if (props.shadow) {
    if (props.theme.mode === 'light') {
      return 'box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);';
    }

    return 'box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.3);';
  }

  return '';
}
