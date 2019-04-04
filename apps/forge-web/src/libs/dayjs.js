import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relative);

// @link https://github.com/iamkun/dayjs/issues/254#issuecomment-415278024
const fix = (date, c) => {
  if (typeof date === 'string') {
    return dayjs(date.replace(/-/g, '/'), c);
  }
  return dayjs(date, c);
};

export default fix;
