import React from 'react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useThemeMode } from '../libs/hooks';

export default function ThemeSwitcher(props) {
  const [mode, setTheme] = useThemeMode();

  return (
    <FormControlLabel
      {...props}
      control={
        <Switch
          checked={mode === 'dark'}
          onChange={() => setTheme(mode === 'light' ? 'dark' : 'light')}
          value="theme"
          color={mode === 'light' ? 'default' : 'primary'}
        />
      }
      label={mode === 'light' ? 'Light Mode' : 'Dark Mode'}
    />
  );
}
