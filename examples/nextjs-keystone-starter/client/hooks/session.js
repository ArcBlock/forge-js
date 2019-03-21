import useAsync from 'react-use/lib/useAsync';

import api from '../libs/api';

async function fetchSession() {
  const res = await api.get('/session');
  console.log('fetchSession', res.data);
  return res.data;
}

export default function useSession() {
  const state = useAsync(fetchSession);
  return state;
}
