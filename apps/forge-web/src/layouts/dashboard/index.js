import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Sidebar from './sidebar';
import SecondaryLinks from './secondary';
import NodeInfo from './node_info';
import ThemeSwitcher from './theme_switcher';

// import SearchBox from '../../components/search_box';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import withTracker from '../../components/withTracker';

const getSecondaryLinks = location => {
  if (/^\/node\//.test(location.pathname)) {
    return {
      title: 'Node',
      links: [
        // { link: '/node/status', title: 'Status' },
        { link: '/node/explorer/txs', title: 'Block Explorer' },
        { link: '/node/query', title: 'Query' },
        // { link: '/node/storage', title: 'Storage' },
      ],
    };
  }

  return { title: '', links: [] };
};

function Dashboard({ children, classes, location }) {
  const { title, links } = getSecondaryLinks(location);
  const hasSecondaryLinks = !!links.length;
  const version = process.env.REACT_APP_VERSION;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar disableGutters={false} className={classes.toolbar}>
          <NodeInfo />
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: classNames(classes.drawerPaper) }} open={true}>
        <div className={classes.toolbarIcon} />
        <Divider />
        <Sidebar open={true} />
      </Drawer>
      <main className={classes.content}>
        {hasSecondaryLinks && (
          <Content direction="row">
            <SecondaryLinks links={links} title={title} />
            <Content direction="column">{children}</Content>
          </Content>
        )}
        {!hasSecondaryLinks && <Content direction="column">{children}</Content>}
        <Version key={version}>
          v{version} <span className="highlight">beta</span>
        </Version>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
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

const drawerWidth = 100;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px 0 24px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.background.default,
    boxShadow: '0 0 0 0 transparent',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    background: theme.palette.background.default,
    boxShadow: '2px 16px 10px 0 rgba(0, 0, 0, 0.05)',
    border: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingTop: 80,
    height: '100vh',
    overflow: 'auto',
    boxSizing: 'border-box',
    position: 'relative',
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(withTracker(withRoot(withI18n(Dashboard))));
