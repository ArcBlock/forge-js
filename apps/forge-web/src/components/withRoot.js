import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
import { colors, sizes } from '../libs/constant';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#4cbbb9', contrastText: '#ffffff' },
    secondary: { main: '#EF476F', contrastText: '#ffffff' },
    background: { paper: '#ffffff', default: '#fbfbfb' },
  },
  typography: {
    useNextVariants: true,
    color: {
      main: '#404040',
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
  },
  colors,
  sizes,
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
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
