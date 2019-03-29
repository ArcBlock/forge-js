/* eslint consistent-return:"off" */
import React, { useReducer, useRef, useEffect } from 'react';
import { useSpring } from 'react-use';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as d3 from 'd3-geo';
import * as topojson from 'topojson-client';
import versor from 'versor';

import json from './countries.json';
import Versor from './versor';

const geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries);
const themes = {
  light: {
    ocean: '#EDF4F4',
    graticule: '#EDF4F4',
    land: '#CCEAEA',
    activeLand: '#AFD3D3',
    border: '#AFD3D3',
    marker: '#4E6AF6',
    activeMarker: '#4E6AF6',
  },
  dark: {
    ocean: '#09233B',
    graticule: '#09233B',
    land: '#0D2344',
    activeLand: '#173159',
    border: '#89DDD9',
    marker: '#ffffff',
    activeMarker: '#FFD159',
  },
};

function stateReducer(state, action) {
  switch (action.type) {
    case 'dragEnd':
      return { ...state, isDragging: false };
    case 'dragStart':
      return {
        ...state,
        isDragging: true,
        animationDuration: 1,
        mousePosition: action.payload.mousePosition,
      };
    case 'tooltip':
    case 'rotate':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default function Globe({
  theme,
  width,
  height,
  enableRotation,
  rotationSpeed,
  markers,
  activeMarkerId,
  colors,
}) {
  Object.assign(colors, themes[theme]);
  const [state, dispatch] = useReducer(stateReducer, {
    rotation: [0, 0, 0],
    isDragging: false,
    animateDuration: 1,
    mousePosition: null,
    tooltipIndex: -1,
  });

  const svgRef = useRef(null);

  // variables used to track drag and rotate
  const dragRef = useRef({
    v0: undefined,
    r0: undefined,
    q0: undefined,
  });

  // variables used to track start and end position when there is active marker
  const rotateRef = useRef({
    p1: null,
    p2: [0, 0],
    r1: null,
    r2: [0, 0, 0],
    step: 0,
    markerId: null,
    iv: null,
  });

  // console.log('renderGlobe', state, dragRef.current, rotateRef.current, geoJson);
  const t = useSpring(state.animateDuration, 170, 26);

  const isValid =
    activeMarkerId &&
    rotateRef.current.markerId !== activeMarkerId &&
    markers.some(x => x.id === activeMarkerId);

  // Setup path for globe
  const projection = d3
    .geoOrthographic()
    .fitExtent([[30, 30], [width - 30, height - 30]], geoJson)
    .rotate(
      t <= 1 || state.isDragging ? state.rotation : rotateRef.current.iv(t / state.animateDuration)
    );

  const pathGenerator = d3
    .geoPath()
    .projection(projection)
    .pointRadius(2);

  useEffect(() => {
    // Rotate to active marker
    if (isValid) {
      // eslint-disable-next-line
      let { p1, p2, r1, r2, markerId } = rotateRef.current;
      // We should only start new animation if the marker has changed
      if (markerId !== activeMarkerId && !state.isDragging) {
        const marker = markers.find(x => x.id === activeMarkerId);
        p1 = p2;
        p2 = [marker.longitude, marker.latitude];
        r1 = r2;
        r2 = [-p2[0], 20 - p2[1], projection.rotate()[2]];
        const iv = Versor.interpolateAngles(r1, r2);

        Object.assign(rotateRef.current, { p1, p2, r1, r2, iv, markerId: activeMarkerId });
        const duration = state.animateDuration * 2;

        dispatch({
          type: 'rotate',
          payload: {
            animateDuration: duration > 1e6 ? 2 : duration,
          },
        });
      }

      // Enable auto rotation
    } else if (enableRotation) {
      const handler = window.requestAnimationFrame(() => {
        const newRotation = [
          state.rotation[0] + 2 / rotationSpeed,
          state.rotation[1],
          state.rotation[2],
        ];
        dispatch({ type: 'rotate', payload: { rotation: newRotation } });
      });

      return function cleanup() {
        window.cancelAnimationFrame(handler);
      };
    }
  });

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
      return;
    }

    dragRef.current.v0 = versor.cartesian(projection.invert(mousePosition));
    dragRef.current.r0 = projection.rotate();
    dragRef.current.q0 = versor(dragRef.current.r0);

    dispatch({ type: 'dragStart', payload: { mousePosition } });
  };

  const onDrag = event => {
    if (state.isDragging === false) {
      return;
    }

    const mousePosition = getMousePosition(event);
    const { r0, v0, q0 } = dragRef.current;

    const v1 = versor.cartesian(projection.rotate(r0).invert(mousePosition));
    const q1 = versor.multiply(q0, versor.delta(v0, v1));
    const r1 = versor.rotation(q1);

    dispatch({ type: 'rotate', payload: { rotation: r1, mousePosition } });
  };

  const onDragEnd = () => {
    setTimeout(() => {
      dispatch({ type: 'dragEnd', payload: {} });
    }, 200);
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
      const isActive = activeMarkerId === x.id;
      // eslint-disable-next-line
      const fill = distance > 1.57 ? 'none' : isActive ? colors.activeMarker : colors.marker;
      const radius = isActive ? 9 : 6;
      return (
        <g
          key={x.id}
          className={`marker ${isActive ? 'marker--active' : ''}`}
          onFocus={event => onShowTooltip(event, i)}
          onBlur={onHideTooltip}
          onMouseOver={event => onShowTooltip(event, i)}
          onMouseOut={onHideTooltip}>
          <circle
            key="marker-inner"
            className="marker__inner"
            r={radius}
            cx={sphereCoords[0]}
            cy={sphereCoords[1]}
            fill={fill}
            style={{ fillOpacity: isActive ? 1 : 0.5 }}
          />
          <circle
            key="marker-outer"
            className="marker__outer"
            r={radius * 2}
            cx={sphereCoords[0]}
            cy={sphereCoords[1]}
            fill={fill}
            style={{
              animationDuration: isActive ? '800ms' : '1600ms',
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
          <p className="description">ID: {marker.id}</p>
        </Tooltip>
      );
    }
  };

  let activeCountry = null;
  if (activeMarkerId && markers.some(x => x.id === activeMarkerId)) {
    const activeMarker = markers.find(x => x.id === activeMarkerId);
    activeCountry = geoJson.features.findIndex(
      x => x.properties && x.properties.name && x.properties.name === activeMarker.country
    );
  }

  return (
    <Container width={width} height={height} theme={theme} colors={colors} onMouseLeave={onDragEnd}>
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
        />
        <path className="graticule" d={pathGenerator(d3.geoGraticule().step([10, 10])())} />
        <g className="features">
          {geoJson.features.map((x, i) => (
            <path
              key={x.properties.name}
              className={`country ${activeCountry === i ? 'country--active' : ''}`}
              d={pathGenerator(x)}
            />
          ))}
        </g>
        <g className="markers">{renderMarkers()}</g>
        {state.isDragging && state.mousePosition && (
          <path
            className="point point-mouse"
            d={pathGenerator({
              type: 'Point',
              coordinates: projection.invert(state.mousePosition),
            })}
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
  activeMarkerId: PropTypes.string,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      latitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      longitude: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
  colors: PropTypes.shape({
    ocean: PropTypes.string,
    graticule: PropTypes.string,
    land: PropTypes.string,
    activeLand: PropTypes.string,
    border: PropTypes.string,
    marker: PropTypes.string,
    activeMarker: PropTypes.string,
  }),
};

Globe.defaultProps = {
  theme: 'dark',
  width: 1200,
  height: 600,
  enableRotation: false,
  rotationSpeed: 5,
  markers: [],
  activeMarkerId: undefined,
  colors: {},
};

const Container = styled.div`
  background-color: ${props => (props.theme === 'light' ? '#f7f7f7' : '#222')};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: relative;
  animation-name: zoomIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  user-select: none;

  .defs {
    height: 0;
    width: 0;
  }

  .frame {
    fill: none;
    pointer-events: all;
  }

  .country {
    fill: ${props => props.colors.land};
    stroke: ${props => props.colors.border};
    stroke-width: 0.5px;
    transition: fill 300ms ease;

    &:hover {
      fill: ${props => props.colors.activeLand};
    }
  }

  .country--active {
    fill: ${props => props.colors.activeLand};
  }

  .globe {
    fill: ${props => props.colors.ocean};
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 0.25px;
  }

  .graticule {
    fill: none;
    stroke: ${props => props.colors.graticule};
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
      fill-opacity: 0.3;
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
  max-width: 320px;
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
    color: #fff;
  }

  .description {
    margin-top: ${props => props.theme.spacing.unit}px;
    color: #fff;
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
