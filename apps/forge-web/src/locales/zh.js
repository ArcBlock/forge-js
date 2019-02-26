import flatten from 'flat';

import auth from './auth/zh';
import dashboard from './dashboard/zh';

export default flatten({
  title: 'Arcblock | Blockchain 3.0',
  back: '返回',
  auth,
  dashboard,
});
