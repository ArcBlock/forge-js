import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconFa from '../iconfa';

import { useThemeMode } from '../../libs/hooks';
import { colors } from '../../libs/constant';

export default function NormalCard({ data }) {
  const [mode] = useThemeMode();
  return (
    <Card mode={mode}>
      <div className="card">
        <span className="network__meta">
          {!!data.extra && <span className="extra">{data.extra}</span>}
          <span className="network__id">{data.id}</span>
        </span>
        <span className="network__abbr">{data.abbr}</span>
        <span className="network__name">{data.name}</span>
      </div>
      <div className="info">
        <span className="network__type">
          <IconFa name="globe" size={14} />
          Test Network
        </span>
        <span className="network__name">{data.name}</span>
        <span className="network__desc">{data.description}</span>
      </div>
    </Card>
  );
}

NormalCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    font-family: Avenir;
    text-align: left;
    text-transform: capitalize;
  }

  .card {
    width: 88px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8px;
    color: ${colors.white};
    background: ${colors.blue};
    border: 1px solid ${colors.blue};

    .network__meta {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }

    .network__abbr {
      font-size: 44px;
      font-weight: 900;
      margin-top: 8px;
      line-height: 44px;
      text-indent: -2px;
    }

    .network__name {
      font-size: 14px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100px;

    border-left: 1px solid ${props => props.theme.typography.color.main};
    padding-left: 24px;
    margin-left: 40px;

    .network__type {
      text-transform: uppercase;
      i {
        margin-right: 5px;
      }
    }

    .network__name {
      font-size: 18px;
      font-weight: 500;
      line-height: 2.22;
      letter-spacing: 1px;
      color: ${props => props.theme.typography.color.main};
      text-transform: uppercase;
    }

    .network__desc,
    .network__type {
      font-size: 14px;
      color: ${props => props.theme.typography.color.main};
    }
  }
`;
