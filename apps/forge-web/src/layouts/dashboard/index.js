import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import Gravatar from 'react-gravatar';
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

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Sidebar from './sidebar';
import { colors } from '../../libs/constant';
import { version } from '../../../package.json';

class Dashboard extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired,
    session: PropTypes.object,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'ArcBlock',
    session: { user: { email: 'wangshijun2010@gmail.com' } },
  };

  constructor(props) {
    super(props);

    this.state = {
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
    const { anchorEl } = this.state;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar disableGutters={false} className={classes.toolbar}>
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
    return (
      <Drawer variant="permanent" classes={{ paper: classNames(classes.drawerPaper) }} open={true}>
        <div className={classes.toolbarIcon} />
        <Divider />
        <Sidebar open={true} />
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

const drawerWidth = 100;

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
