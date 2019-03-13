import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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

  // {this.renderMenuItem('/app', 'app', 'Application Management')}
  // {this.renderMenuItem('/tasks', 'tasks', 'Tasks')}
  // {this.renderMenuItem('/developer', 'developer', 'Developer Tools')}
  // {this.renderMenuItem('/settings', 'settings', 'Settings')}
  render() {
    return (
      <MenuItems>
        <div className="menu-top-items">
          {this.renderMenuItem('/dashboard', 'dashboard', 'Dashboard')}
          {this.renderMenuItem('/node/explorer/txs', 'node', 'Node Management')}
        </div>
        <div className="menu-top-items" />
      </MenuItems>
    );
  }

  renderMenuItem(url, name, title) {
    const selected = this.isSelected(url, name);
    return (
      <MenuItem component={Link} key={url} selected={selected} to={url} title={title}>
        <Icon8 name={images[name]} size={36} color={selected ? '#00c2c4' : '#000000'} />
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
const MenuItem = styled(Button)`
  && {
    display: block;
    width: 100%;
    justify-content: center;
    align-items: center;
    transition: all 200ms ease-in-out;
    background: ${props => (props.selected ? gradient : '')};
    padding: 22px 0 22px 30px;
    border-left: 2px solid
      ${props => (props.selected ? props.theme.palette.primary.main : 'transparent')};

    &:hover {
      background: ${gradient};
      border-left-color: ${props => props.theme.palette.primary.main};
    }
  }
`;

export default withRouter(Sidebar);
