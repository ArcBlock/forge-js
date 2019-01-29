import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import Gravatar from 'react-gravatar';
import Cookie from 'js-cookie';
import Helmet from 'react-helmet';
import qs from 'querystring';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Sidebar from './sidebar';
import { colors } from '../../libs/constant';
import { version } from '../../../package.json';

const COOKIE_MENU_OPEN = 'menu_open';

class Dashboard extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired,
    cookies: PropTypes.any.isRequired,
    session: PropTypes.object,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'ArcBlock',
    session: { loading: true },
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.cookies ? !!Number(props.cookies[COOKIE_MENU_OPEN]) : true,
      anchorEl: null,
    };
  }

  render() {
    const { children, title, classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet title={title} />
        {this.renderAppBar()}
        {this.renderDrawer()}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Content>{children}</Content>
          <Version>
            v{version} <span className="highlight">beta</span>
          </Version>
        </main>
        {this.renderSecurityDialog()}
      </div>
    );
  }

  renderAppBar() {
    const { classes, session, title } = this.props;
    const { open, anchorEl } = this.state;
    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, open && classes.appBarShift)}>
        <Toolbar disableGutters={!open} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.onDrawerOpen}
            className={classNames(classes.menuButton, open && classes.menuButtonHidden)}>
            <MenuIcon />
          </IconButton>
          <Typography
            component="h2"
            variant="headline"
            color="inherit"
            noWrap
            className={classes.title}>
            Developer Console <ChevronRightIcon /> {title}
          </Typography>
          {session.user && [
            <IconButton
              color="inherit"
              key="avatar"
              aria-owns={anchorEl ? 'user-menu' : null}
              aria-haspopup="true"
              onClick={this.onMenuOpen}>
              <Gravatar
                style={{ borderRadius: '20px', width: '40px', height: '40px' }}
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
    const { open } = this.state;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}>
        <div className={classes.toolbarIcon}>
          <a href="https://www.arcblock.io">
            <Logo />
          </a>
          <IconButton onClick={this.onDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Sidebar open={open} />
      </Drawer>
    );
  }

  // FIXME: auth related staff not working for now!
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

  onDrawerOpen = () => {
    this.setState({ open: true }, this.updateCookie);
  };

  onDrawerClose = () => {
    this.setState({ open: false }, this.updateCookie);
  };

  updateCookie = () => {
    Cookie.set(COOKIE_MENU_OPEN, this.state.open ? 1 : 0, { expires: 30, path: '/' });
  };

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
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  width: 136px;
  height: 40px;
  background: transparent url('/static/logo.svg') center center no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const Version = styled.div`
  color: #ffffff;
  position: absolute;
  right: 24px;
  bottom: 24px;
  margin: 0;
  font-size: 12px;
  z-index: 99;

  .highlight {
    color: #ffffff;
  }
`;

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
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
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    boxSizing: 'border-box',
    position: 'relative',
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(Dashboard);
