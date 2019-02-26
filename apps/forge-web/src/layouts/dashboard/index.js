import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import Gravatar from 'react-gravatar';
import qs from 'querystring';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Sidebar from './sidebar';
import SecondaryLinks from './secondary';
import ChainInfo from './chain_info';
import withI18n from '../../components/withI18n';
import withRoot from '../../components/withRoot';
import withTracker from '../../components/withTracker';

import { colors } from '../../libs/constant';
import { version } from '../../../package.json';

// TODO: attach language switcher on top
class Dashboard extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    session: PropTypes.object,
  };

  static defaultProps = {
    // FIXME: auth and session
    session: { user: { email: 'wangshijun2010@gmail.com' } },
  };

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  render() {
    const { children, classes } = this.props;
    const { title, links } = this.getSecondaryLinks();
    const hasSecondaryLinks = !!links.length;

    return (
      <div className={classes.root}>
        {this.renderAppBar()}
        {this.renderDrawer()}
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
        {this.renderSecurityDialog()}
      </div>
    );
  }

  getSecondaryLinks() {
    const { pathname } = this.props.location;
    if (/^\/node\//.test(pathname)) {
      return {
        title: 'Node',
        links: [
          { link: '/node/status', title: 'Status' },
          { link: '/node/explorer/blocks', title: 'Block Explorer' },
          { link: '/node/query', title: 'Query' },
          { link: '/node/storage', title: 'Storage' },
        ],
      };
    }

    return { title: '', links: [] };
  }

  renderAppBar() {
    const { classes, session } = this.props;
    const { anchorEl } = this.state;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar disableGutters={false} className={classes.toolbar}>
          <ChainInfo />
          {session.user && [
            <IconButton
              color="inherit"
              key="avatar"
              aria-owns={anchorEl ? 'user-menu' : null}
              aria-haspopup="true"
              onClick={this.onMenuOpen}>
              <Gravatar
                style={{ borderRadius: '20px', width: '50px', height: '50px' }}
                email={session.user.email}
                title={session.user.email}
              />
            </IconButton>,
            <Menu
              id="user-menu"
              key="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.onMenuClose}>
              <MenuItem onClick={this.onProfile}>{session.user.email}</MenuItem>
              <MenuItem onClick={this.onLogout}>Logout</MenuItem>
            </Menu>,
          ]}
        </Toolbar>
      </AppBar>
    );
  }

  renderDrawer() {
    const { classes } = this.props;
    return (
      <Drawer variant="permanent" classes={{ paper: classNames(classes.drawerPaper) }} open={true}>
        <div className={classes.toolbarIcon} />
        <Divider />
        <Sidebar open={true} />
      </Drawer>
    );
  }

  renderSecurityDialog() {
    const { session } = this.props;
    if (session.loading || session.user) {
      return null;
    }

    return (
      <Dialog
        open={true}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        onClose={this.onDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Security Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{ color: colors.red }}>
            Sorry! We cannot verify your login state, to protect your information please login
            again. {session.errmsg || ''}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onDialogClose} color="primary" autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  onDialogClose = () => {
    window.location.href = `/auth/login?${qs.stringify({
      login_redirect: window.location.toString(),
    })}`;
  };

  onMenuOpen = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  onMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  onProfile = () => {
    this.setState({ anchorEl: null });
    window.location.href = '/users/profile';
  };

  onLogout = () => {
    window.location.href = '/auth/login';
  };
}

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

// TODO: eliminate this kind of styling, low priority
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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
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
