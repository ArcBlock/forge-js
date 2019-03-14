import React from 'react';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useLocalStorage } from '../libs/hooks';

export default function ThemeSwitcher(props) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <FormControlLabel
      {...props}
      control={
        <Switch
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          value="theme"
          color={theme === 'light' ? 'default' : 'primary'}
        />
      }
      label={theme === 'light' ? 'Light Mode' : 'Dark Mode'}
    />
  );
}
