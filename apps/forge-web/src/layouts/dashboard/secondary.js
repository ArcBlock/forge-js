import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class SecondaryLinks extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    links: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, links } = this.props;
    return (
      <MenuItems>
        <Typography component="p" className="secondary-title">
          <span>{title}</span>
        </Typography>
        {links.map(x => this.renderMenuItem(x.link, x.title))}
      </MenuItems>
    );
  }

  renderMenuItem(url, title) {
    const active = this.isSelected(url);
    return (
      <MenuItem active={active} key={url}>
        <Link to={url} title={title}>
          {title}
        </Link>
      </MenuItem>
    );
  }

  isSelected = name => {
    const { pathname } = this.props.location;
    return pathname === name;
  };
}

const MenuItems = styled.div`
  width: 200px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 0px 10px 0 rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  .secondary-title {
    margin: 32px 20px 20px;
    border-bottom: 1px solid ${props => props.theme.typography.color.gray};
    line-height: 0.1em;
    text-align: center;
    box-sizing: border-box;

    span {
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 2px;
      color: ${props => props.theme.typography.color.gray};
      background: ${props => props.theme.palette.background.default};
      text-transform: uppercase;
      padding: 0 35px;
    }
  }
`;

// prettier-ignore
const MenuItem = styled.div`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 200ms ease-in-out;
  padding-left: 30px;

  &:hover {
    a {
      color: ${props => props.theme.palette.primary.main};
    }
  }

  a {
    display: block;
    padding: 16px 0;
    letter-spacing: 1px;
    color: ${({ active, theme: { palette, typography } }) =>
    (active ? palette.primary.main : typography.color.main)};
  }
`;

export default withRouter(SecondaryLinks);
