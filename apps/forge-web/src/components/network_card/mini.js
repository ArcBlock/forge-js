import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useThemeMode } from '../../libs/hooks';
import { colors } from '../../libs/constant';

const themes = {
  light: {
    border: { selected: colors.blue, normal: '#cdcdcd' },
    background: { selected: '#f0f2f8', normal: '#edeeee' },
    text: { selected: colors.blue, normal: colors.minor },
  },
  dark: {
    border: { selected: colors.blue, normal: '#cdcdcd' },
    background: { selected: '#2a2a2a', normal: '#2a2a2a' },
    text: { selected: colors.blue, normal: colors.minor },
  },
};

export default function MiniCard({ data, selected, onClick }) {
  const [mode] = useThemeMode();
  return (
    <Card selected={selected} theme={mode} onClick={onClick}>
      <span className="network__abbr">{data.abbr}</span>
    </Card>
  );
}

MiniCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Card = styled.div`
  width: 48px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-family: Avenir;

  border: solid 1px
    ${props =>
      props.selected ? themes[props.theme].border.selected : themes[props.theme].border.normal};
  background-color: ${props =>
    props.selected
      ? themes[props.theme].background.selected
      : themes[props.theme].background.normal};

  .network__abbr {
    font-size: 24px;
    font-weight: 900;
    color: ${props =>
      props.selected ? themes[props.theme].text.selected : themes[props.theme].text.normal};
  }
`;
