/* eslint consistent-return:"off" */
import React, { useReducer, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import versor from 'versor';

import json from './countries.json';

window.d3 = d3;
window.topojson = topojson;

const geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries);

function stateReducer(state, action) {
  console.log('stateReducer', action);
  switch (action.type) {
    case 'dragEnd':
      return { ...state, isDragging: false };
    case 'dragStart':
      return { ...state, isDragging: true, mousePosition: action.payload.mousePosition };
    case 'rotate':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default function Globe({ theme, width, height, enableRotation, rotationSpeed, markers }) {
  const svgRef = useRef(null);
  const positionRef = useRef({
    v0: undefined,
    r0: undefined,
    q0: undefined,
  });

  const [state, dispatch] = useReducer(stateReducer, {
    rotationZ: 0,
    rotationX: -2.5,
    rotationY: -6.5,
    isDragging: false,
    mousePosition: null,
  });
  console.log('renderGlobe', state, positionRef, geoJson);

  // Enable auto rotation
  useEffect(() => {
    if (enableRotation) {
      const handler = window.requestAnimationFrame(() => {
        dispatch({ type: 'rotate', payload: { rotationZ: state.rotationZ + 2 / rotationSpeed } });
      });

      return function cleanup() {
        window.cancelAnimationFrame(handler);
      };
    }
  });

  // Setup path for globe
  const globe = d3
    .geoOrthographic()
    .fitSize([width, height - 20], geoJson)
    .translate([width / 2, height / 2])
    .rotate([state.rotationZ, state.rotationX, state.rotationY]);

  const globePath = d3
    .geoPath()
    .projection(globe)
    .pointRadius(2);

  const getMousePosition = event => {
    const node = svgRef.current;
    const rect = node.getBoundingClientRect();
    const mousePosition = [
      event.clientX - rect.left - node.clientLeft,
      event.clientY - rect.top - node.clientTop,
    ];

    return mousePosition;
  };

  const onDragStart = event => {
    const mousePosition = getMousePosition(event);

    if (!mousePosition[0]) {
      console.error('Invalid mouse pos');
      return;
    }

    positionRef.current.v0 = versor.cartesian(globe.invert(mousePosition));
    positionRef.current.r0 = globe.rotate();
    positionRef.current.q0 = versor(positionRef.current.r0);

    dispatch({ type: 'dragStart', payload: { mousePosition } });
  };

  const onDrag = event => {
    if (state.isDragging === false) {
      return;
    }

    const mousePosition = getMousePosition(event);
    const { r0, v0, q0 } = positionRef.current;

    const v1 = versor.cartesian(globe.rotate(r0).invert(mousePosition));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    const r1 = versor.rotation(q1);

    const [rotationZ, rotationX, rotationY] = r1;
    dispatch({ type: 'rotate', payload: { rotationZ, rotationX, rotationY, mousePosition } });
  };

  const onDragEnd = () => {
    dispatch({ type: 'dragEnd', payload: {} });
  };

  const renderMarkers = () =>
    markers.map(x => {
      const coordinate = [x.longitude, x.latitude];
      const distance = d3.geoDistance(coordinate, globe.invert([width / 2, height / 2]));
      const projection = globe(coordinate);
      const fill = distance > 1.57 ? 'none' : 'red';
      return (
        <circle
          key={x.id}
          className="marker"
          r={8}
          cx={projection[0]}
          cy={projection[1]}
          fill={fill}
        />
      );
    });

  return (
    <Container width={width} height={height} theme={theme}>
      <svg
        className="earth"
        width={width}
        height={height}
        onMouseDown={onDragStart}
        onMouseMove={onDrag}
        onMouseUp={onDragEnd}
        ref={svgRef}>
        <rect className="frame" width={width} height={height} />
        <circle
          cx={width / 2}
          cy={height / 2}
          r={globe.scale()}
          className="globe"
          filter="url(#glow)"
          fill="url(#gradBlue)"
        />
        <path
          className="graticule"
          fill="none"
          stroke="#005c99"
          d={globePath(d3.geoGraticule().step([10, 10])())}
        />
        <g className="features">
          {geoJson.features.map(x => (
            <path key={JSON.stringify(x)} className="feature" d={globePath(x)} />
          ))}
        </g>
        <g className="markers">{renderMarkers()}</g>
        {state.isDragging && state.mousePosition && (
          <path
            className="point point-mouse"
            d={globePath({ type: 'Point', coordinates: globe.invert(state.mousePosition) })}
          />
        )}
      </svg>
      <svg className="defs">
        <defs>
          <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#005C99', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0099FF', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0   0
                     0 0 0 0.9 0
                     0 0 0 0.9 0
                     0 0 0 1   0"
            />
            <feGaussianBlur stdDeviation="5.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </Container>
  );
}

Globe.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  width: PropTypes.number,
  height: PropTypes.number,
  enableRotation: PropTypes.bool,
  rotationSpeed: PropTypes.number,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
};

Globe.defaultProps = {
  theme: 'dark',
  width: 1200,
  height: 600,
  enableRotation: false,
  rotationSpeed: 5,
  markers: [],
};

const Container = styled.div`
  background-color: #222;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  animation-name: zoomIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;

  .defs {
    height: 0;
    width: 0;
  }

  .frame {
    fill: none;
    pointer-events: all;
  }

  .feature {
    fill: #6ccc00;
    stroke: #fff;
    stroke-width: 0.5px;
  }

  .globe {
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 0.25px;
  }

  .star {
    fill: #fff;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 0.25px;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1);
      transform: scale3d(0.1, 0.1, 0.1);
    }

    50% {
      opacity: 1;
    }
  }
`;
