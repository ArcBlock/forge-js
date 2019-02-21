import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import Icon8 from '../../components/icon8';

const images = {
  dashboard: 'speedometer',
  app: 'ios-app-icon-shape',
  node: 'blockchain-technology',
  tasks: 'todo-list',
  developer: 'console',
  settings: 'settings',
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
          {this.renderMenuItem('/node/explorer/blocks', 'node', 'Node Management')}
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
      <MenuItem key={url} active={active}>
        <Link to={url} title={title}>
          <Icon8 name={images[name]} size={36} color={active ? '#00c2c4' : '#000000'} />
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

const MenuItems = React.memo(styled.div`
  flex: 1;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`);

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
`;

export default withRouter(Sidebar);
