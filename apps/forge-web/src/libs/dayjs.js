import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relative);

// @link https://github.com/iamkun/dayjs/issues/254#issuecomment-415278024
// @link https://stackoverflow.com/questions/9706688/what-does-the-z-mean-in-unix-timestamp-120314170138z
const fix = (date, c) => {
  let isUTC = false;
  if (typeof date === 'string') {
    isUTC = /Z$/.test(date);

    const [dateStr, _] = date
      .replace(/T/g, ' ')
      .replace(/Z$/, '')
      .split(/\s/);

    const [timeStr] = _ ? _.split('.') : [''];

    // eslint-disable-next-line no-param-reassign
    date = `${dateStr.replace(/-/g, '/')} ${timeStr}`.trim();
  }

  console.log({ isUTC, date });

  return isUTC ? dayjs.utc(date, c) : dayjs(date, c);
};

export default fix;
