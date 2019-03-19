import React, { useReducer, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import versor from 'versor';
import { useAsync } from 'react-use';

import CircularProgress from '@material-ui/core/CircularProgress';

window.d3 = d3;
window.topojson = topojson;

function stateReducer(state, action) {
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

// TODO: may find a better geo json here
async function fetchGeoJson() {
  const json = await d3.json('https://codepen.io/frontendcharts/pen/JBprpp.js');
  const geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries);
  return geoJson;
}

export default function Globe({ width, height, enableRotation, rotationSpeed, markers }) {
  const geoJson = useAsync(fetchGeoJson);
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

    return null;
  });

  if (geoJson.loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (geoJson.error) {
    return (
      <Container>
        <p>{geoJson.error.message}</p>
      </Container>
    );
  }

  // Setup path for globe
  const globe = d3
    .geoOrthographic()
    .fitSize([width, height - 20], geoJson.value)
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

    console.log('getMousePosition', mousePosition);
    return mousePosition;
  };

  const onDrag = event => {
    const mousePosition = getMousePosition(event);
    const { r0, v0, q0 } = positionRef.current;

    const v1 = versor.cartesian(globe.rotate(r0).invert(mousePosition));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    const r1 = versor.rotation(q1);

    const [rotationZ, rotationX, rotationY] = r1;
    dispatch({ type: 'rotate', payload: { rotationZ, rotationX, rotationY, mousePosition } });
  };

  const onDragStart = event => {
    svgRef.current.addEventListener('mousemove', onDrag);
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

  const onDragEnd = () => {
    svgRef.current.removeEventListener('mousemove', onDrag);
    dispatch({ type: 'dragEnd', payload: {} });
  };

  const renderMarkers = () =>
    markers.map(x => {
      const coordinate = [x.longitude, x.latitude];
      const distance = d3.geoDistance(coordinate, globe.invert([width / 2, height / 2]));
      const coordinateProjection = globe(coordinate);
      const fill = distance > 1.57 ? 'none' : 'red';
      return (
        <circle
          key={JSON.stringify(x)}
          className="marker"
          r={8}
          cx={coordinateProjection[0]}
          cy={coordinateProjection[1]}
          fill={fill}
        />
      );
    });

  return (
    <Container width={width} height={height}>
      <svg
        className="earth"
        width={width}
        height={height}
        onMouseDown={onDragStart}
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
          {geoJson.value.features.map(x => (
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
  width: PropTypes.number,
  height: PropTypes.number,
  enableRotation: PropTypes.bool,
  rotationSpeed: PropTypes.number,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      latitude: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
      longitude: PropTypes.oneOfType(PropTypes.number, PropTypes.string).isRequired,
    })
  ),
};

Globe.defaultProps = {
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
`;
