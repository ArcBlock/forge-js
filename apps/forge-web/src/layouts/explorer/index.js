import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ThemeSwitcher from '../../components/theme_switcher';
import SearchBox from '../../components/search_box';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import withTracker from '../../components/withTracker';

import Logo from './logo';

function Layout({ children }) {
  const version = process.env.REACT_APP_VERSION;

  return (
    <Container>
      <AppBar position="absolute" className="appBar">
        <Toolbar disableGutters={false} className="toolbar">
          <Logo />
          <SearchBox />
          <ThemeSwitcher className="switcher" />
        </Toolbar>
      </AppBar>
      <main className="main">
        <Content direction="column">{children}</Content>
        <Version key={version}>
          v{version} <span className="highlight">beta</span>
        </Version>
      </main>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

const Content = styled.div`
  height: ${props => (props.direction === 'row' ? '100%' : 'auto')};
  overflow: ${props => (props.direction === 'row' ? 'hidden' : 'scroll')};
  flex: 1 0 auto;
  display: flex;
  flex-direction: ${props => props.direction};
  box-sizing: border-box;
`;

const Version = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  margin: 0;
  font-size: 12px;
  z-index: 99;
`;

const Container = styled.div`
  display: flex;

  .appBar {
    display: flex;
    justify-content: space-between;
    z-index: ${props => props.theme.zIndex.drawer + 1};
    background: ${props => props.theme.palette.background.default};
    box-shadow: 0 0 0 0 transparent;
  }

  .toolbar {
    background: ${props => props.theme.palette.background.default};
    color: ${props => props.theme.palette.text.primary};
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: ${props => props.theme.spacing.unit}px;
    width: 100%;
    max-width: ${props => props.theme.pageWidth}px;
    position: relative;

    .switcher {
      position: absolute;
      right: -200px;
    }
  }

  .main {
    flex-grow: 1;
    padding-top: 80px;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
  }
`;

export default withTracker(withRoot(withI18n(Layout)));
