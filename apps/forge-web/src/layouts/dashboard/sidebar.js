import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import dashboardIcon from './images/dashboard.png';
import dashboardIconActive from './images/dashboard-active.png';
import appIcon from './images/app.png';
import appIconActive from './images/app-active.png';
import nodeIcon from './images/node.png';
import nodeIconActive from './images/node-active.png';
import developerIcon from './images/developer.png';
import developerIconActive from './images/developer-active.png';
import tasksIcon from './images/tasks.png';
import tasksIconActive from './images/tasks-active.png';
import settingsIcon from './images/setting.png';
import settingsIconActive from './images/setting-active.png';

const images = {
  dashboard: {
    default: dashboardIcon,
    active: dashboardIconActive,
  },
  app: {
    default: appIcon,
    active: appIconActive,
  },
  node: {
    default: nodeIcon,
    active: nodeIconActive,
  },
  tasks: {
    default: tasksIcon,
    active: tasksIconActive,
  },
  developer: {
    default: developerIcon,
    active: developerIconActive,
  },
  settings: {
    default: settingsIcon,
    active: settingsIconActive,
  },
};

class Sidebar extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <MenuItems>
        <div className="menu-top-items">
          {this.renderMenuItem('/dashboard', 'dashboard', 'Dashboard')}
          {this.renderMenuItem('/node/explorer', 'node', 'Node Management')}
          {this.renderMenuItem('/app', 'app', 'Application Management')}
          {this.renderMenuItem('/tasks', 'tasks', 'Tasks')}
          {this.renderMenuItem('/developer', 'developer', 'Developer Tools')}
        </div>
        <div className="menu-top-items">
          {this.renderMenuItem('/settings', 'settings', 'Settings')}
        </div>
      </MenuItems>
    );
  }

  renderMenuItem(url, name, title) {
    const active = this.isSelected(url, name);
    return (
      <MenuItem active={active}>
        <Link to={url} title={title}>
          <img alt={name} src={images[name][active ? 'active' : 'default']} />
        </Link>
      </MenuItem>
    );
  }

  isSelected = (url, name) => {
    const { pathname } = this.props.location;
    const pattern = new RegExp(`^/${name}`);
    return pattern.test(pathname);
  };
}

const MenuItems = styled.div`
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const gradient = 'linear-gradient(32deg, rgba(144, 255, 230, 0.1), rgba(144, 255, 230, 0))';
const MenuItem = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in-out;
  background: ${props => (props.active ? gradient : '')};
  border-left: 2px solid
    ${props => (props.active ? props.theme.palette.primary.main : 'transparent')};

  &:hover {
    background: ${gradient};
    border-left-color: ${props => props.theme.palette.primary.main};
  }

  a {
    display: block;
    padding: 22px 0;
  }

  img {
    width: 32px;
    object-fit: contain;
  }
`;

export default withRouter(Sidebar);
