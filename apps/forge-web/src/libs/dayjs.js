import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relative);

function dateFromString(str) {
  const isUTC = /Z$/.test(str);
  const ints = str.split(/[^0-9]/).map(s => parseInt(s, 10));
  if (isUTC) {
    const ms = Date.UTC(
      ints[0],
      ints[1] - 1 || 0,
      ints[2] || 1,
      ints[3] || 0,
      ints[4] || 0,
      ints[5] || 0,
      ints[6] || 0
    );

    return new Date(ms);
  }
  return new Date(
    ints[0],
    ints[1] - 1 || 0,
    ints[2] || 1,
    ints[3] || 0,
    ints[4] || 0,
    ints[5] || 0,
    ints[6] || 0
  );
}

// @link https://github.com/iamkun/dayjs/issues/254#issuecomment-415278024
// @link https://stackoverflow.com/questions/9706688/what-does-the-z-mean-in-unix-timestamp-120314170138z
const fix = (date, c) => {
  let isUTC = false;
  if (typeof date === 'string') {
    isUTC = /Z$/.test(date);
    // eslint-disable-next-line no-param-reassign
    date = dateFromString(date);
  }

  console.log({ isUTC, date });

  return isUTC ? dayjs.utc(date, c) : dayjs(date, c);
};

export default fix;
