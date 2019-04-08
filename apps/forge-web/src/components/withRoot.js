import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { colors, sizes } from '../libs/constant';
import { useThemeMode } from '../libs/hooks';

// https://material-ui.com/customization/default-theme/
const createTheme = mode =>
  createMuiTheme({
    palette: {
      primary: { main: colors.green, contrastText: colors.white },
      secondary: { main: colors.red, contrastText: colors.white },
      background: {
        paper: mode === 'light' ? colors.white : colors.gray,
        default: mode === 'light' ? colors.background : colors.gray,
      },
      type: mode,
    },
    typography: {
      useNextVariants: true,
      color: {
        main: mode === 'light' ? colors.gray : colors.white,
        gray: mode === 'light' ? colors.minor : colors.darkText,
        blue: '#1e43fa',
      },
      fontSize: 16,
      fontFamily: [
        'Avenir',
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
          background: mode === 'light' ? colors.background : colors.gray,
        },
      },
      MuiTableCell: {
        root: {
          borderBottomWidth: '0',
          paddingTop: '14px',
          paddingBottom: '14px',
          paddingLeft: 0,
          paddingRight: '30px',
        },
        head: {
          textTransform: 'uppercase',
          color: mode === 'light' ? colors.gray : colors.darkText,
        },
        body: {
          color: mode === 'light' ? colors.gray : colors.darkText,
        },
      },
      MuiChip: {
        root: {
          padding: '3px',
          height: '24px',
          fontSize: '12px',
          marginRight: '10px',
        },
        label: {
          paddingLeft: '5px',
          paddingRight: '5px',
          marginRight: '5px',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontSize: '14px',
        },
      },
      MuiTypography: {
        body1: {
          color: mode === 'light' ? colors.gray : colors.darkText,
        },
        body2: {
          color: mode === 'light' ? colors.gray : colors.darkText,
        },
      },
    },
    pageWidth: process.env.REACT_APP_NAME === 'explorer' ? 1296 : 1000,
    colors,
    sizes,
    mode,
  });

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.mode === 'light' ? colors.background : colors.gray)};
    color: ${props => (props.mode === 'light' ? colors.gray : colors.darkText)};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: ${props => (props.mode === 'light' ? colors.gray : colors.darkText)};
  }

  td a:hover {
    text-decoration: underline;
  }
`;

function withRoot(Component) {
  function WithRoot(props) {
    const [mode] = useThemeMode();
    const theme = createTheme(mode);

    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <CssBaseline />
            <GlobalStyle mode={mode} />
            <Component {...props} />
          </React.Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
