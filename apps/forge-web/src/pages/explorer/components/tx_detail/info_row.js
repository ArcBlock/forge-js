import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';

import { Link } from 'react-router-dom';

const InfoRow = ({ name, value }) => (
  <Container>
    <div className="info-row__name">{upperFirst(camelCase(name))}</div>
    <div className="info-row__value">{value}</div>
  </Container>
);

InfoRow.propTypes = {
  name: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const InfoRows = ({ rows, data }) =>
  Object.keys(rows)
    .map(x => {
      const key = x;
      const { path, link } = rows[key];
      const value = get(data, path);
      if (typeof value === 'undefined') {
        return null;
      }
      const linkValue = typeof link === 'function' ? <Link to={link(value)}>{value}</Link> : null;
      return <InfoRow key={key} name={key} value={linkValue || value} />;
    })
    .filter(Boolean);

InfoRows.propTypes = {
  rows: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;

  &:nth-last-of-type() {
    margin-bottom: 0;
  }

  .info-row__name {
    width: 80px;
  }

  .info-row__value {
    a {
      color: #222222;
      text-decoration: underline;
    }
  }
`;

export default InfoRows;
