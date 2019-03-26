import axios from 'axios';
import useAsync from 'react-use/lib/useAsync';

async function fetchSession() {
  const res = await axios.get('/api/session');
  // console.log('fetchSession', res.data);
  return res.data;
}

export default function useSession() {
  const state = useAsync(fetchSession);
  return state;
}
