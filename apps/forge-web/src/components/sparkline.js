import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const renderTooltip = tip => {
  if (tip.payload[0] && tip.payload[0].payload) {
    const d = tip.payload[0].payload;
    const series = Object.keys(d).filter(x => x !== 'time');
    return (
      <TipContainer>
        <p className="time">{d.time}</p>
        <ul className="metrics">
          {series.map(x => (
            <li key={x} className="metric">
              <span className="metric-name">{x}</span> {d[x]}
            </li>
          ))}
        </ul>
      </TipContainer>
    );
  }

  return null;
};

const TipContainer = styled.div`
  .time {
    margin: 0;
  }

  .metrics {
    padding: 0;
    margin: 0;
  }

  .metric {
    list-style-position: inside;
    list-style-type: disc;
  }
`;

const SparkLine = ({ data, series, legend }) => (
  <ResponsiveContainer>
    <AreaChart data={data} margin={{ top: 10, right: 3, left: 3, bottom: 10 }}>
      <defs>
        {series
          .filter(x => x.gradientStart && x.gradientStop)
          .map(({ dataKey, gradientStart, gradientStop }) => (
            <linearGradient key={dataKey} id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientStart} stopOpacity={1} />
              <stop offset="95%" stopColor={gradientStop} stopOpacity={0} />
            </linearGradient>
          ))}
      </defs>
      <Tooltip
        cursor={false}
        content={renderTooltip}
        wrapperStyle={{
          width: 'auto',
          minWidth: '90px',
          padding: '8px 12px',
          fontSize: '14px',
          color: '#ffffff',
          backgroundColor: '#4a4a4a',
          borderRadius: '2px',
        }}
      />
      {legend && <Legend verticalAlign="top" height={36} />}
      {series.map(({ dataKey, stroke, gradientStart, gradientStop }) => (
        <Area
          key={`area-${dataKey}`}
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          fillOpacity={1}
          fill={gradientStart && gradientStop ? `url(#gradient-${dataKey})` : null}
        />
      ))}
    </AreaChart>
  </ResponsiveContainer>
);

SparkLine.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      stroke: PropTypes.string.isRequired,
      gradientStart: PropTypes.string.isRequired,
      gradientStop: PropTypes.string.isRequired,
    })
  ).isRequired,
  legend: PropTypes.bool,
};

SparkLine.defaultProps = {
  legend: false,
};

SparkLine.createSeries = args => {
  let { dataKey, stroke, gradientStart, gradientStop } = args; // eslint-disable-line
  if (typeof args === 'string') {
    dataKey = args;
  }

  return {
    dataKey,
    stroke: stroke || '#868787',
    gradientStart: gradientStart || '#ECE8E8',
    gradientStop: gradientStop || '#F8F8F8',
  };
};

export default SparkLine;
