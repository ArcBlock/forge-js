import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Sidebar from './sidebar';
import SecondaryLinks from './secondary';
import NodeInfo from './node_info';
import ThemeSwitcher from '../../components/theme_switcher';

import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import withTracker from '../../components/withTracker';

import { useNodeInfo } from '../../libs/hooks';

const getSecondaryLinks = location => {
  if (/^\/node\//.test(location.pathname)) {
    return {
      title: 'Node',
      links: [
        { link: '/node/explorer/txs', title: 'Block Explorer' },
        { link: '/node/status', title: 'Connected Peers' },
        // { link: '/node/query', title: 'Query' },
        // { link: '/node/storage', title: 'Storage' },
      ],
    };
  }
  if (/^\/developer\//.test(location.pathname)) {
    return {
      title: 'Tools',
      links: [
        { link: '/developer/query', title: 'Query' },
        { link: '/developer/simulator', title: 'Simulator' },
      ],
    };
  }

  return { title: '', links: [] };
};

function Dashboard({ children, location }) {
  const { title, links } = getSecondaryLinks(location);
  const [nodeInfo] = useNodeInfo();
  const hasSecondaryLinks = !!links.length;
  const version = process.env.REACT_APP_VERSION;

  return (
    <Container>
      <AppBar position="absolute" className="appBar">
        <Toolbar disableGutters={false} className="toolbar">
          <NodeInfo />
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: 'drawerPaper' }} open={true}>
        <Sidebar open={true} />
      </Drawer>
      <main className="main">
        {hasSecondaryLinks && (
          <Content direction="row">
            <SecondaryLinks links={links} title={title} />
            <Content direction="column">{children}</Content>
          </Content>
        )}
        {!hasSecondaryLinks && <Content direction="column">{children}</Content>}
        <Version key={version}>
          ABT Node v{version}, Forge Framework v{nodeInfo.version}
        </Version>
      </main>
    </Container>
  );
}

Dashboard.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
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

  .toolbar {
    padding-right: 24;
    background: ${props => props.theme.palette.background.default};
    color: ${props => props.theme.palette.text.primary};
    display: flex;
    justify-content: space-between;
    margin-top: ${props => props.theme.spacing.unit}px;
  }

  .appBar {
    z-index: ${props => props.theme.zIndex.drawer + 1};
    background: ${props => props.theme.palette.background.default};
    box-shadow: 0 0 0 0 transparent;
  }

  .drawerPaper {
    position: relative;
    padding-top: 80px;
    white-space: no-wrap;
    width: 100px;
    background: ${props => props.theme.palette.background.default};
    box-shadow: 2px 16px 10px 0
      rgba(0, 0, 0, ${props => (props.theme.mode === 'light' ? 0.05 : 0.5)});
    border: 0;
  }

  .main {
    flex-grow: 1;
    padding-top: 80px;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    position: relative;
  }

  h5 {
    margin-bottom: ${props => props.theme.spacing.unit * 2}px;
  }
`;

export default withTracker(withRoot(withI18n(Dashboard)));
