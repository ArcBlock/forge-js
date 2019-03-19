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
    case 'tooltip':
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
    tooltipIndex: -1,
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
  const projection = d3
    .geoOrthographic()
    .fitSize([width, height - 20], geoJson)
    .translate([width / 2, height / 2])
    .rotate([state.rotationZ, state.rotationX, state.rotationY]);

  const pathGenerator = d3
    .geoPath()
    .projection(projection)
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

    positionRef.current.v0 = versor.cartesian(projection.invert(mousePosition));
    positionRef.current.r0 = projection.rotate();
    positionRef.current.q0 = versor(positionRef.current.r0);

    dispatch({ type: 'dragStart', payload: { mousePosition } });
  };

  const onDrag = event => {
    if (state.isDragging === false) {
      return;
    }

    const mousePosition = getMousePosition(event);
    const { r0, v0, q0 } = positionRef.current;

    const v1 = versor.cartesian(projection.rotate(r0).invert(mousePosition));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    const r1 = versor.rotation(q1);

    const [rotationZ, rotationX, rotationY] = r1;
    dispatch({ type: 'rotate', payload: { rotationZ, rotationX, rotationY, mousePosition } });
  };

  const onDragEnd = () => {
    dispatch({ type: 'dragEnd', payload: {} });
  };

  const onShowTooltip = (event, i) =>
    dispatch({
      type: 'tooltip',
      payload: { tooltipIndex: i, mousePosition: getMousePosition(event) },
    });

  const onHideTooltip = () =>
    dispatch({ type: 'tooltip', payload: { tooltipIndex: -1, mousePosition: null } });

  const renderMarkers = () =>
    markers.map((x, i) => {
      const areaCoords = [x.longitude, x.latitude];
      const distance = d3.geoDistance(areaCoords, projection.invert([width / 2, height / 2]));
      const sphereCoords = projection(areaCoords);
      const fill = distance > 1.57 ? 'none' : 'red';
      return (
        <g
          key={x.id}
          className="marker"
          onFocus={event => onShowTooltip(event, i)}
          onBlur={onHideTooltip}
          onMouseOver={event => onShowTooltip(event, i)}
          onMouseOut={onHideTooltip}>
          <circle
            key="marker-inner"
            className="marker__inner"
            r={6}
            cx={sphereCoords[0]}
            cy={sphereCoords[1]}
            fill={fill}
          />
          <circle
            key="marker-outer"
            className="marker__outer"
            r={12}
            cx={sphereCoords[0]}
            cy={sphereCoords[1]}
            fill={fill}
            style={{
              animationDelay: `${i * 0.2}s`,
              transformOrigin: `${sphereCoords[0]}px ${sphereCoords[1]}px`,
            }}
          />
        </g>
      );
    });

  const renderTooltip = () => {
    if (state.tooltipIndex >= 0) {
      const marker = markers[state.tooltipIndex];
      return (
        <Tooltip style={{ left: state.mousePosition[0], top: state.mousePosition[1] }}>
          <p className="title">{marker.title}</p>
          <p className="description">{marker.description}</p>
        </Tooltip>
      );
    }
  };

  return (
    <Container width={width} height={height} theme={theme}>
      {renderTooltip()}
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
          r={projection.scale()}
          className="globe"
          filter="url(#glow)"
          fill="url(#gradBlue)"
        />
        <path
          className="graticule"
          fill="none"
          stroke="#005c99"
          d={pathGenerator(d3.geoGraticule().step([10, 10])())}
        />
        <g className="features">
          {geoJson.features.map(x => (
            <path key={JSON.stringify(x)} className="feature" d={pathGenerator(x)} />
          ))}
        </g>
        <g className="markers">{renderMarkers()}</g>
        {state.isDragging && state.mousePosition && (
          <path
            className="point point-mouse"
            d={pathGenerator({ type: 'Point', coordinates: projection.invert(state.mousePosition) })}
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
  position: relative;
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

  .marker {
    .marker__outer {
      fill-opacity: 0;
      animation: scaleIn 2s infinite ease-in-out;
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1);
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      fill-opacity: 0.4;
      transform: scale3d(0.5, 0.5, 0.5);
    }
    to {
      fill-opacity: 0;
      transform: scale3d(1.5, 1.5, 1.5);
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  width: auto;
  min-width: 90px;
  max-width: 240px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #4a4a4a;
  border-radius: 2px;
  animation-name: fadeIn;
  animation-duration: 250ms;
  animation-iteration-count: 1;
  animation-timing-function: ease;

  .title,
  .description {
    margin: 0;
    font-size: 16px;
    color: ${props => props.theme.typography.color.main};
  }

  .description {
    margin-top: ${props => props.theme.spacing.unit}px;
    color: ${props => props.theme.typography.color.gray};
    font-size: 12px;
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
