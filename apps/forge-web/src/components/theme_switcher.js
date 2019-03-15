import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';
import Icon8 from './icon8';

import { useThemeMode } from '../libs/hooks';

function ThemeSwitcher({ theme, ...rest }) {
  const [mode, setMode] = useThemeMode();
  const toggle = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <Tooltip {...rest} title={mode === 'light' ? 'Light Mode' : 'Dark Mode'}>
      <Icon8
        name={mode === 'light' ? 'light' : 'no-idea'}
        color={theme.typography.color.main}
        onClick={toggle}
      />
    </Tooltip>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(ThemeSwitcher);
