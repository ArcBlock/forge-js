import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

import IconFa from '../../../../components/iconfa';
import SearchBox from '../../../../components/search_box';

import FilterPanel from './panel';
import SelectedList from './selected';

function FilterStrip({ theme, location, showFilter, supportedTxs, onApplyFilter, selectedTxs }) {
  const links = [
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

  const isActive = name => {
    const { pathname } = location;
    return pathname.indexOf(`/${name}`) > 0;
  };

  return (
    <div>
      <Container>
        <div className="links">
          {links.map(x => (
            <Link
              key={x.name}
              to={x.url}
              className={`link ${isActive(x.name) ? 'link--active' : ''}`}>
              <Button>
                <IconFa
                  className="link__icon"
                  name={x.icon}
                  size={18}
                  color={isActive(x.name) ? theme.colors.gray : theme.colors.minor}
                />
                <span className="link__text">{x.name}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="search-filter">
          {showFilter && (
            <FilterPanel
              supportedTxs={supportedTxs}
              selectedTxs={selectedTxs}
              onApplyFilter={onApplyFilter}
            />
          )}
          <SearchBox />
        </div>
      </Container>
      {showFilter && !!selectedTxs.length && selectedTxs.length < supportedTxs.length && (
        <Container>
          <SelectedList
            key={selectedTxs.sort().join('')}
            selectedTxs={selectedTxs}
            onChange={onApplyFilter}
          />
        </Container>
      )}
    </div>
  );
}

FilterStrip.propTypes = {
  theme: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  showFilter: PropTypes.bool,
  supportedTxs: PropTypes.arrayOf(PropTypes.string),
  onApplyFilter: PropTypes.func,
  selectedTxs: PropTypes.arrayOf(PropTypes.string),
};

FilterStrip.defaultProps = {
  showFilter: false,
  supportedTxs: [],
  selectedTxs: [],
  onApplyFilter: () => {},
};

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
