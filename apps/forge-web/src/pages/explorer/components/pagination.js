import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NextIcon from '@material-ui/icons/ChevronRight';
import PreviousIcon from '@material-ui/icons/ChevronLeft';

import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';

const Pagination = React.memo(({ pageSize, currentPage, onChange, total, ...rest }) => (
  <Container>
    <RcPagination
      className="pagination"
      onChange={onChange}
      pageSize={pageSize}
      current={currentPage}
      nextIcon={<NextIcon />}
      prevIcon={<PreviousIcon />}
      total={total}
      {...rest}
    />
  </Container>
));

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  pageSize: 10,
};

const Container = styled.div`
  .rc-pagination {
    .rc-pagination-prev,
    .rc-pagination-next {
      border: none;
      background: transparent;
    }

    .rc-pagination-item {
      border: none;
      background: transparent;
      font-size: 16px;
      font-weight: 600;
      color: #222222;
      outline: none;
    }

    .rc-pagination-item-active {
      a {
        color: ${props => props.theme.palette.primary.main};
      }
    }
  }
`;

export default Pagination;
