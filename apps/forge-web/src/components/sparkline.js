import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const renderTooltip = tip => {
  if (tip.payload[0] && tip.payload[0].payload) {
    const d = tip.payload[0].payload;
    return `${d.time} ${d.value}`;
  }

  return null;
};

const SparkLine = ({ data, series }) => (
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
          minWidth: '150px',
          padding: '3px 5px',
          fontSize: '14px',
          color: '#ffffff',
          backgroundColor: '#4a4a4a',
          borderRadius: '2px',
        }}
      />
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
      value: PropTypes.number.isRequired,
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
};

SparkLine.defaultProps = {};

SparkLine.createSeries = ({ dataKey, stroke, gradientStart, gradientStop }) => ({
  dataKey,
  stroke: stroke || '#868787',
  gradientStart: gradientStart || '#ECE8E8',
  gradientStop: gradientStop || '#F8F8F8',
});

export default SparkLine;
