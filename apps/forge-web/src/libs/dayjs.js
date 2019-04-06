import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relative);

// @link https://github.com/iamkun/dayjs/issues/254#issuecomment-415278024
const fix = (date, c) => {
  if (typeof date === 'string') {
    const [dateStr, _] = date.split(/\s/);
    const [timeStr] = _ ? _.split('.') : '';
    // eslint-disable-next-line no-param-reassign
    date = `${dateStr.replace(/-/g, '/')} ${timeStr}`.trim();
  }

  return dayjs(date, c);
};

export default fix;
