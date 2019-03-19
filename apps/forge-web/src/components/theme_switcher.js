import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon8 from './icon8';

import { useThemeMode } from '../libs/hooks';

function ThemeSwitcher({ theme, ...rest }) {
  const [mode, setMode] = useThemeMode();
  const toggle = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <Tooltip {...rest} title={mode === 'light' ? 'Light Off' : 'Light On'}>
      <IconButton onClick={toggle}>
        <Icon8
          size={36}
          name={mode === 'light' ? 'no-idea' : 'light'}
          color={theme.typography.color.main}
        />
      </IconButton>
    </Tooltip>
  );
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(ThemeSwitcher);
