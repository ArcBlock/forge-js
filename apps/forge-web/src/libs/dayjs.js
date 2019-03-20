import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relative from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relative);
