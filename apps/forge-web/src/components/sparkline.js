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

const SparkLine = ({ data, fillGradient }) => (
  <ResponsiveContainer>
    <AreaChart data={data} margin={{ top: 10, right: 3, left: 3, bottom: 10 }}>
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ECE8E8" stopOpacity={1} />
          <stop offset="95%" stopColor="#F8F8F8" stopOpacity={0} />
        </linearGradient>
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
      <Area
        type="monotone"
        dataKey="value"
        stroke="#868787"
        fillOpacity={1}
        fill={fillGradient ? 'url(#gradient)' : null}
      />
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
  fillGradient: PropTypes.bool,
};

SparkLine.defaultProps = {
  fillGradient: true,
};

export default SparkLine;
