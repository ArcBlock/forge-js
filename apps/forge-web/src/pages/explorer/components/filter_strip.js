import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

import SearchBox from './search_box';
import FilterPanel from './filter_panel';
import IconFa from '../../../components/iconfa';

class FilterStrip extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    showFilter: PropTypes.bool,
  };

  static defaultProps = {
    showFilter: false,
  };

  links = [
    {
      name: 'txs',
      url: '/node/explorer/txs',
      icon: 'file-invoice',
    },
    {
      name: 'blocks',
      url: '/node/explorer/blocks',
      icon: 'boxes',
    },
  ];

  render() {
    const { theme, showFilter } = this.props;
    return (
      <Container>
        <div className="links">
          {this.links.map(x => (
            <Link
              key={x.name}
              to={x.url}
              className={`link ${this.isActive(x.name) ? 'link--active' : ''}`}>
              <Button>
                <IconFa
                  className="link__icon"
                  name={x.icon}
                  size={18}
                  color={this.isActive(x.name) ? theme.colors.gray : theme.colors.minor}
                />
                <span className="link__text">{x.name}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="search-filter">
          {showFilter && <FilterPanel />}
          <SearchBox />
        </div>
      </Container>
    );
  }

  isActive(name) {
    const { pathname } = this.props.location;
    return pathname.indexOf(`/${name}`) > 0;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .link {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-right: 32px;
      border-radius: 4px;

      .link__icon {
        margin-right: 8px;
      }

      .link__text {
        text-transform: uppercase;
        font-size: 16px;
        color: #9b9b9b;
      }
    }

    .link--active {
      .link__text {
        color: #222222;
        font-weight: bold;
      }
    }
  }

  .search-filter {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default withRouter(withTheme()(FilterStrip));
