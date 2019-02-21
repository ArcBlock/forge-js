import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
            <span>{x}</span>
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
`;

Payload.propTypes = {
  itx: PropTypes.object.isRequired,
};

export default Payload;
