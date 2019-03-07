import React, { useState } from 'react';
import styled from 'styled-components';
// import { CSSTransitionGroup } from 'react-transition-group'

// import { useToggle } from 'react-use';

import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function StatusSection() {
  const zIndex = 100;
  const top = 100;
  const height = 40;

  const [selected, setSelected] = useState(null);

  // TODO: We should decide if app layer is included here
  const layers = ['app', 'forge', 'consensus', 'storage', 'network'];

  const onSelectLayer = name => () => setSelected(name);
  const onClickAway = () => setSelected(null);

  const getLayerStyle = (_, i) => {
    const style = {
      top: `${top + height * i}px`,
      zIndex: zIndex - i,
      animation: `slideInDown 300ms ${(layers.length - i - 1) * 200}ms linear`,
    };

    if (selected) {
      style.opacity = layers.indexOf(selected) === i ? 0.9 : 0.3;
    } else {
      style.opacity = 0.8;
    }

    console.log(_, style);
    return style;
  };

  return (
    <Container>
      <Grid container spacing={40}>
        <Grid item xs={12} sm={6} md={6}>
          <ClickAwayListener onClickAway={onClickAway}>
            <div className="stack">
              {layers.map((x, i) => (
                <Layer key={x} onMouseEnter={onSelectLayer(x)} style={getLayerStyle(x, i)} />
              ))}
            </div>
          </ClickAwayListener>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          Status Text Here
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  @keyframes zoomInDown {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0) rotateX(55deg)
        rotateZ(-45deg);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0) rotateX(55deg) rotateZ(-45deg);
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0) rotateX(55deg)
        rotateZ(-45deg);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0) rotateX(55deg) rotateZ(-45deg);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  @keyframes slideInDown {
    from {
      -webkit-transform: translate3d(0, -200%, 0) rotateX(55deg) rotateZ(-45deg);
      transform: translate3d(0, -200%, 0) rotateX(55deg) rotateZ(-45deg);
      opacity: 0;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0) rotateX(55deg) rotateZ(-45deg);
      transform: translate3d(0, 0, 0) rotateX(55deg) rotateZ(-45deg);
      opacity: 0.9;
    }
  }

  .stack {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }

  .text {
  }
`;

const getLayerBackground = ({ error, warning, theme }) => {
  if (error) {
    return `linear-gradient(9deg, ${theme.colors.red}, rgba(255, 255, 255, 0.8))`;
  }
  if (warning) {
    return `linear-gradient(9deg, ${theme.colors.yellow}, rgba(255, 255, 255, 0.8))`;
  }

  return 'linear-gradient(9deg, rgba(182, 247, 248, 0.8), rgba(255, 255, 255, 0.8))';
};

const Layer = styled.div`
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  border-radius: 20px 10px;
  border: 2px solid #222222;
  transition: all 200ms ease-in-out;
  transform: rotateX(55deg) rotateZ(-45deg);
  background-image: ${props => getLayerBackground(props)};
  position: absolute;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    width: 150px;
    height: 150px;
    content: '';
    border: 3px dotted #231916;
    border-top-width: 0;
    border-right-width: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;
