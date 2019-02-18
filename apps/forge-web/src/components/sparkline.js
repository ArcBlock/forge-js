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
          .filter(x => x.gradientStart && x.gradientEnd)
          .map(x => (
            <linearGradient id={`gradient-${x.dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={x.gradientStart} stopOpacity={1} />
              <stop offset="95%" stopColor={x.gradientEnd} stopOpacity={0} />
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
      {series.map(x => (
        <Area
          key={`area-${x.dataKey}`}
          type="monotone"
          dataKey={x.dataKey}
          stroke={x.stroke}
          fillOpacity={1}
          fill={x.gradientStart && x.gradientEnd ? `url(#gradient-${x.dataKey})` : null}
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
      gradientEnd: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SparkLine.defaultProps = {};

SparkLine.createSeries = ({ dataKey, stroke, gradientStart, gradientEnd }) => ({
  dataKey,
  stroke: stroke || '#868787',
  gradientStart: gradientStart || '#ECE8E8',
  gradientEnd: gradientEnd || '#F8F8F8',
});

export default SparkLine;
