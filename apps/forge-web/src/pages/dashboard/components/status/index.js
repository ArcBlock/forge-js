/* eslint no-use-before-define:"off" */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useAsync } from 'react-use';

// TODO: use css transition group to make animation perfect

import ActivityIndicator from '../../../../components/activity_indicator';
import Summary from './summary';

import { fetchStatus, getLayerBackground, getLayerStyle, getGreeting } from './util';

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

  const { layers, data, ok } = state.value;
  const names = Object.keys(layers);
  const SummaryComponent = selected ? layers[selected].component : Summary;

  const onSelectLayer = name => () => setSelected(name);
  const onClickAway = () => setSelected(null);

  return (
    <Container onMouseOut={onClickAway} onBlur={onClickAway}>
      <div className="greeting">
        <p>
          Good {getGreeting()}! <br />
          Your node {ok ? 'works good' : 'is running'} now.
        </p>
      </div>
      <div className="layers">
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
        <div className="summary">
          <SummaryComponent layers={layers} layer={layers[selected]} data={data} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .greeting {
    font-size: 30px;
    font-weight: 900;
    color: #222222;
  }

  .layers {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .stack {
      position: relative;
      height: 450px;
      width: 400px;
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

        p {
          margin-right: 16px;
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
  width: 200px;
  height: 200px;
  border-radius: 30px 15px;
  border: 2px solid #222222;
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
