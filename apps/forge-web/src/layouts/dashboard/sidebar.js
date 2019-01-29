import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';
import KeyIcon from '@material-ui/icons/VpnKey';
import HelpIcon from '@material-ui/icons/Help';
import BillingIcon from '@material-ui/icons/Money';

class Sidebar extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div>
        <Divider />
        <List style={{ padding: 0 }}>
          {this.props.open && <ListSubheader>Account Info</ListSubheader>}
          {this.renderMenuItem('/users/profile', <PeopleIcon />, 'Profile')}
          {this.renderMenuItem('/users/settings', <SettingsIcon />, 'Settings')}
          {this.renderMenuItem('/users/api_keys', <KeyIcon />, 'API Keys')}
          {this.renderMenuItem('/users/assets', <WalletIcon />, 'Assets')}
          {this.renderMenuItem('/users/billing', <BillingIcon />, 'Billing')}
        </List>
        <Divider />
        <List style={{ padding: 0 }}>
          {this.props.open && <ListSubheader>Developer Resource</ListSubheader>}
          {this.renderMenuItem('/resources/sdk', <CodeIcon />, 'SDK')}
          {this.renderMenuItem('/resources/tools', <BuildIcon />, 'Tools')}
          {this.renderMenuItem('/resources/docs', <HelpIcon />, 'Documentation')}
        </List>
      </div>
    );
  }

  renderMenuItem(url, icon, title) {
    return (
      <Link to={url}>
        <ListItem button selected={this.isSelected(url)}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItem>
      </Link>
    );
  }

  isSelected = name => {
    const path = this.props.location.pathname;
    return name.length > 1 ? path.startsWith(name) : path === name;
  };
}

export default withRouter(Sidebar);
