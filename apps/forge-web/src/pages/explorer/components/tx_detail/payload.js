import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IconFa from '../../../../components/iconfa';

const Payload = ({ itx }) => {
  const hasAssets = !!(Array.isArray(itx.assets) && itx.assets.length);
  const hasValue = !!itx.value;
  return (
    <List className="meta">
      {hasAssets &&
        itx.assets.map(x => (
          <li>
            <IconFa name="gem" size={14} className="meta-icon" />
            <Link to={`/node/explorer/assets/${x}`}>{x}</Link>
          </li>
        ))}
      {hasValue && (
        <li>
          <IconFa name="coins" size={14} className="meta-icon" />
          <span>{itx.value} arc</span>
        </li>
      )}
    </List>
  );
};

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    text-decoration: underline;
    color: #9b9b9b;
  }
`;

Payload.propTypes = {
  itx: PropTypes.object.isRequired,
};

export default Payload;
