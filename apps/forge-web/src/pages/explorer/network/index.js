import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import versor from 'versor';

import CircularProgress from '@material-ui/core/CircularProgress';

import Page from '../../../components/page';
import Layout from '../../../layouts/page';
import Wrapper from '../../../components/wrapper';
import withI18n from '../../../components/withI18n';
import withRoot from '../../../components/withRoot';

import api from '../../../libs/forge';

// import { eulerAngles } from './math';

function randomLonLat() {
  return [Math.random() * 360 - 180, Math.random() * 180 - 90];
}

function createStars(number) {
  const data = [];
  for (let i = 0; i < number; i++) {
    data.push({
      geometry: {
        type: 'Point',
        coordinates: randomLonLat(),
      },
      type: 'Feature',
      properties: {
        radius: Math.random() * 1.5,
      },
    });
  }
  return data;
}

window.d3 = d3;
window.topojson = topojson;

class Network extends Page {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    rotation: PropTypes.bool,
    rotationSpeed: PropTypes.number,
  };

  static defaultProps = {
    width: 1200,
    height: 600,
    enableRotation: false,
    rotationSpeed: 5,
  };

  constructor(props) {
    super(props);

    this.state = {
      rotationZ: 0,
      rotationX: 0,
      rotationY: 0,
      geoJson: null,
      netInfo: null,
    };

    this.starList = createStars(300);
  }

  async componentDidMount() {
    try {
      const { netInfo } = await api.getNetInfo();
      const json = await d3.json('https://codepen.io/frontendcharts/pen/JBprpp.js');
      const geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries);
      console.log({ netInfo, geoJson });
      this.setState({ geoJson, netInfo });
    } catch (err) {
      this.setState({ error: 'Error loading data' });
    }
  }

  render() {
    if (!this.state.geoJson) {
      return <CircularProgress />;
    }

    const { enableRotation, rotationSpeed } = this.props;
    if (enableRotation) {
      window.requestAnimationFrame(() => {
        this.setState(state => ({
          rotationZ: state.rotationZ + 2 / rotationSpeed,
        }));
      });
    }

    return (
      <Layout title="Network" cookies={this.cookies}>
        <Container>{this.renderGlobe()}</Container>
      </Layout>
    );
  }

  renderGlobe() {
    const { width, height } = this.props;
    const { geoJson, netInfo, rotationZ, rotationX, rotationY } = this.state;

    // Setup path for outerspace
    const space = d3.geoAzimuthalEquidistant().translate([width / 2, height / 2]);
    const spacePath = d3
      .geoPath()
      .projection(space)
      .pointRadius(1);

    // Setup path for globe
    const globe = d3
      .geoOrthographic()
      .fitSize([width, height - 20], geoJson)
      .translate([width / 2, height / 2])
      .rotate([rotationZ, rotationX, rotationY]);

    const globePath = d3
      .geoPath()
      .projection(globe)
      .pointRadius(2);

    // FIXME: dragging not working at all
    // let v0; // Mouse position in Cartesian coordinates at start of drag gesture.
    // let r0; // Projection rotation as Euler angles at start.
    // let q0; // Projection rotation as versor at start.

    // function getMousePos() {
    //   const node = document.getElementById('earth');
    //   const rect = node.getBoundingClientRect();
    //   const event = d3.event.sourceEvent;
    //   const mousePos = [
    //     event.clientX - rect.left - node.clientLeft,
    //     event.clientY - rect.top - node.clientTop,
    //   ];

    //   console.log('getMousePos', {
    //     'event.clientX': event.clientX,
    //     'event.clientY': event.clientY,
    //     'node.clientLeft': node.clientLeft,
    //     'node.clientTop': node.clientTop,
    //     'rect.left': rect.left,
    //     'rect.top': rect.top,
    //     mousePos,
    //   });

    //   return mousePos;
    // }

    // function dragstarted() {
    //   const mousePos = getMousePos();

    //   if (!mousePos[0]) {
    //     console.error('Invalid mouse pos');
    //   }

    //   v0 = versor.cartesian(projection.invert(mousePos));
    //   r0 = projection.rotate();
    //   q0 = versor(r0);

    //   svg
    //     .insert('path')
    //     .datum({ type: 'Point', coordinates: projection.invert(mousePos) })
    //     .attr('class', 'point point-mouse')
    //     .attr('d', globePath);
    // }

    // function dragged() {
    //   const mousePos = getMousePos();

    //   const v1 = versor.cartesian(projection.rotate(r0).invert(mousePos));
    //   const q1 = versor.multiply(q0, versor.delta(v0, v1));
    //   const r1 = versor.rotation(q1);
    //   console.dir(r1);

    //   if (r1) {
    //     // projection.rotate(r1);

    //     // svg.selectAll('.feature').attr('d', globePath);
    //     // svg.selectAll('.graticule').attr('d', globePath);
    //     // svg.selectAll('.node').attr('d', globePath);
    //     const [rotateZ, rotateX, rotateY] = r1;
    //     self.setState({ rotateZ, rotateX, rotateY });

    //     svg
    //       .selectAll('.point-mouse')
    //       .datum({ type: 'Point', coordinates: projection.invert(mousePos) });
    //   }
    // }

    // function dragended() {
    //   svg.selectAll('.point').remove();
    // }

    const renderStars = () =>
      this.starList.map(star => {
        spacePath.pointRadius(star.properties.radius);
        return <path key={JSON.stringify(star)} className="star" d={spacePath(star)} />;
      });

    const renderMarkers = () =>
      netInfo.peers.map(x => {
        const coordinate = [x.geoInfo.longitude, x.geoInfo.latitude];
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
      <div>
        <svg className="earth" width={width} height={height}>
          <g className="stars">{renderStars()}</g>
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
      </div>
    );
  }
}

const Container = styled(Wrapper)`
  background-color: #222;

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

export default withRoot(withI18n(Network));
