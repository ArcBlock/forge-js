/* eslint no-use-before-define:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import useAsync from 'react-use/lib/useAsync';

// TODO: use css transition group to make animation perfect
import Grid from '@material-ui/core/Grid';

import ActivityIndicator from '../../../../components/activity_indicator';
import Summary from './summary';

import { fetchStatus, getLayerBackground, getLayerStyle } from './util';

const STATUS_WARNING = 1;
const STATUS_ERROR = 2;

export default function StatusSection() {
  const state = useAsync(fetchStatus);
  const [selected, setSelected] = useState(null);

  if (state.loading) {
    return (
      <ActivityIndicator
        interval={1000}
        messages={[
          'Loading application info...',
          'Checking network status...',
          'Fetching consensus status...',
          'Fetching storage status...',
          'Pulling forge framework state...',
        ]}
        style={{
          height: '500px',
        }}
      />
    );
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  const { layers, data } = state.value;
  const names = Object.keys(layers);
  const SummaryComponent = selected ? layers[selected].component : Summary;

  const onSelectLayer = name => () => setSelected(name);
  const onClickAway = () => setSelected(null);

  return (
    <Container onMouseOut={onClickAway} onBlur={onClickAway}>
      <div className="greeting">
        <p>Your node is running.</p>
      </div>
      <div className="layers">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5} md={4}>
            <div className="stack">
              {names.map((x, i) => (
                <Layer
                  key={x}
                  error={layers[x].status === STATUS_ERROR}
                  warning={layers[x].status === STATUS_WARNING}
                  onMouseEnter={onSelectLayer(x)}
                  style={getLayerStyle(names, selected, i)}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <div className="summary">
              <SummaryComponent layers={layers} layer={layers[selected]} data={data} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .greeting {
    font-size: 30px;
    font-weight: 900;
    color: ${props => props.theme.typography.color.main};
  }

  .layers {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .stack {
      position: relative;
      height: 450px;
      padding: 0 36px;
      flex-shrink: 0;
    }

    .summary {
      flex: 1;
      animation: fadeIn 200ms ease-in;
      position: relative;

      & > div {
        position: absolute;
        top: 40px;
      }

      .info-row {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        color: ${props => props.theme.typography.color.gray};

        p {
          margin-right: 16px;
          color: ${props => props.theme.typography.color.gray};
        }
      }
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const Layer = styled.div`
  box-sizing: content-box;
  width: 160px;
  height: 160px;
  border-radius: 24px 8px;
  border: 2px solid ${props => props.theme.typography.color.main};
  transition: all 200ms ease-in-out;
  transform: rotateX(55deg) rotateZ(-45deg);
  background-image: ${props => getLayerBackground(props)};
  position: absolute;
  cursor: pointer;

  &:hover {
    transform: scale(1.05) rotateX(55deg) rotateZ(-45deg);
    opacity: 0.8;
  }

  &::after {
    width: 120px;
    height: 120px;
    content: '';
    border: 2px dotted #231916;
    border-top-width: 0;
    border-right-width: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;
