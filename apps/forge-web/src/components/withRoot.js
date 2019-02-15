import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { colors, sizes } from '../libs/constant';

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.green, contrastText: colors.white },
    secondary: { main: colors.red, contrastText: colors.white },
    background: { paper: colors.white, default: colors.background },
  },
  typography: {
    useNextVariants: true,
    color: {
      main: colors.gray,
      gray: '#9b9b9b',
      blue: '#1e43fa',
    },
    fontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        letterSpacing: '1.5px',
        boxShadow: 'none',
      },
    },
    MuiAppBar: {
      root: {
        height: 80,
      },
    },
    MuiToolbar: {
      root: {
        background: colors.background,
      },
    },
  },
  colors,
  sizes,
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <CssBaseline />
            <Component {...props} />
          </React.Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
