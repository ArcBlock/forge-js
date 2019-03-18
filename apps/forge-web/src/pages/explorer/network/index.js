import React from 'react';
import PropTypes from 'prop-types';
import ReactFauxDOM from 'react-faux-dom';
import styled from 'styled-components';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

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
      rotation: 0,
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
          rotation: state.rotation + 2 / rotationSpeed,
        }));
      });
    }

    return (
      <Layout title="Network" cookies={this.cookies}>
        <Container>
          <svg id="defs">
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
          {this.renderGlobe()}
        </Container>
      </Layout>
    );
  }

  renderGlobe() {
    const { width, height } = this.props;
    const { geoJson, netInfo, rotation } = this.state;

    // Setup path for outerspace
    const space = d3.geoAzimuthalEquidistant().translate([width / 2, height / 2]);

    space.scale(space.scale() * 3);

    const spacePath = d3
      .geoPath()
      .projection(space)
      .pointRadius(1);

    // Setup path for globe
    const projection = d3
      .geoOrthographic()
      .fitSize([width, height - 20], geoJson)
      .translate([width / 2, height / 2])
      .rotate([rotation, 0, 0]);

    const pathGenerator = d3
      .geoPath()
      .projection(projection)
      .pointRadius(2);

    const container = ReactFauxDOM.createElement('div');
    const svg = d3
      .select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // FIXME: dragging not working at all
    // let gpos0;
    // let o0;

    // function onDragStart() {
    //   console.log('onDragStart', arguments, d3.clientPoint(this, d3.event));
    //   gpos0 = projection.invert(d3.mouse(this));
    //   o0 = projection.rotate();

    //   svg
    //     .insert('path')
    //     .datum({ type: 'Point', coordinates: gpos0 })
    //     .attr('class', 'point')
    //     .attr('d', pathGenerator);
    // }

    // function onDrag() {
    //   console.log('onDrag', arguments, d3.clientPoint(this, d3.event));
    //   const gpos1 = projection.invert(d3.mouse(this));
    //   o0 = projection.rotate();

    //   const o1 = eulerAngles(gpos0, gpos1, o0);

    //   console.log({ gpos0, gpos1, o0, o1 });

    //   // projection.rotate(o1);
    //   // svg.selectAll('.point').datum({ type: 'Point', coordinates: gpos1 });
    //   // svg.selectAll('path').attr('d', pathGenerator);
    // }

    // function onDragEnd() {
    //   svg.selectAll('.point').remove();
    // }

    // const drag = d3
    //   .drag()
    //   .on('start', onDragStart)
    //   .on('drag', onDrag)
    //   .on('end', onDragEnd);

    // svg.call(drag);

    // Add random stars to outer space
    svg
      .append('g')
      .selectAll('g')
      .data(this.starList)
      .enter()
      .append('path')
      .attr('class', 'star')
      .attr('d', d => {
        spacePath.pointRadius(d.properties.radius);
        return spacePath(d);
      });

    svg
      .append('rect')
      .attr('class', 'frame')
      .attr('width', width)
      .attr('height', height);

    // Create the base globe
    svg
      .append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', projection.scale())
      .attr('class', 'globe')
      .attr('filter', 'url(#glow)')
      .attr('fill', 'url(#gradBlue)');

    // Append topojson objects
    svg
      .append('g')
      .selectAll('.feature')
      .data(geoJson.features)
      .enter()
      .append('path')
      .attr('class', 'feature')
      .attr('d', d => pathGenerator(d));

    // Append nodes
    svg
      .append('g')
      .selectAll('.node')
      .data(netInfo.peers)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', 8)
      .attr('cx', d => projection([d.geoInfo.longitude, d.geoInfo.latitude])[0])
      .attr('cy', d => projection([d.geoInfo.longitude, d.geoInfo.latitude])[1])
      .attr('fill', d => {
        const coordinate = [d.geoInfo.longitude, d.geoInfo.latitude];
        const distance = d3.geoDistance(coordinate, projection.invert([width / 2, height / 2]));
        return distance > 1.57 ? 'none' : 'red';
      });

    return container.toReact();
  }
}

const Container = styled(Wrapper)`
  background-color: #222;

  #defs {
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
