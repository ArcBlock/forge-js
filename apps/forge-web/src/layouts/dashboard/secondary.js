import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter, Link } from 'react-router-dom';

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

  isSelected = url => {
    const { pathname } = this.props.location;
    const urlParts = url.split('/').filter(Boolean);
    const pathParts = pathname.split('/').filter(Boolean);
    return urlParts.length > 2 && pathParts.length > 2
      ? urlParts.slice(0, 2).join() === pathParts.slice(0, 2).join()
      : pathname === url;
  };
}

const MenuItems = styled.div`
  width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
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
const MenuItem = styled(Button)`
  && {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: all 200ms ease-in-out;
    padding-left: 30px;
    text-align: left;
    text-transform: initial;

    &:hover {
      a {
        color: ${props => props.theme.palette.primary.main};
      }
    }

    a {
      display: block;
      padding: 16px 0;
      letter-spacing: 1px;
      color: ${({ active, theme: { palette, typography } }) => (active ? palette.primary.main : typography.color.main)};
    }
  }
`;

export default withRouter(SecondaryLinks);
