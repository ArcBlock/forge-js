import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { colors, sizes } from '../libs/constant';
import { useLocalStorage } from '../libs/hooks';

const createTheme = theme =>
  createMuiTheme({
    palette: {
      primary: { main: colors.green, contrastText: colors.white },
      secondary: { main: colors.red, contrastText: colors.white },
      background: {
        paper: theme === 'light' ? colors.white : colors.gray,
        default: theme === 'light' ? colors.background : colors.gray,
      },
    },
    typography: {
      useNextVariants: true,
      color: {
        main: theme === 'light' ? colors.gray : colors.white,
        gray: theme === 'light' ? colors.minor : colors.darkText,
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
          background: theme === 'light' ? colors.background : colors.gray,
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
          color: theme === 'light' ? colors.gray : colors.darkText,
        },
        body: {
          color: theme === 'light' ? colors.gray : colors.darkText,
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
          color: theme === 'light' ? colors.gray : colors.darkText,
        },
        body2: {
          color: theme === 'light' ? colors.gray : colors.darkText,
        },
      },
    },
    colors,
    sizes,
  });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    background: ${props => (props.palette === 'light' ? colors.background : colors.gray)};
    color: ${props => (props.palette === 'light' ? colors.gray : colors.darkText)};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a,
  a:hover,
  a:active {
    text-decoration: none;
    color: ${props => (props.palette === 'light' ? colors.gray : colors.darkText)};
  }

  td a:hover {
    text-decoration: underline;
  }
`;

function withRoot(Component) {
  function WithRoot(props) {
    const [theme] = useLocalStorage('theme', 'light');
    const themeObj = createTheme(theme);

    return (
      <MuiThemeProvider theme={themeObj}>
        <ThemeProvider theme={themeObj}>
          <React.Fragment>
            <CssBaseline />
            <GlobalStyle palette={theme} />
            <Component {...props} />
          </React.Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
