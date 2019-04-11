/* eslint import/prefer-default-export:"off" */
/* eslint react-hooks/rules-of-hooks:"off" */
import { useState, useEffect, useRef } from 'react';
import { EventTarget } from 'event-target-shim';
import useAsync from 'react-use/lib/useAsync';

import { fetchInfo, selectNetwork } from './util';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const evtTarget = new EventTarget();
const useStorage = (storage, keyPrefix) => (key, defaultValue) => {
  const storeKey = `${keyPrefix}.${key}`;
  const raw = storage.getItem(storeKey);
  const [value, setValue] = useState(raw ? JSON.parse(raw) : defaultValue);

  const updater = updatedValue => {
    setValue(updatedValue);
    storage.setItem(storeKey, JSON.stringify(updatedValue));
    evtTarget.dispatchEvent(new CustomEvent('storage_change', { detail: { key } }));
  };

  if (defaultValue != null && !raw) {
    updater(defaultValue);
  }

  useEffect(() => {
    const listener = ({ detail }) => {
      if (detail.key === key) {
        const lraw = storage.getItem(storeKey);

        if (lraw !== raw) {
          setValue(JSON.parse(lraw));
        }
      }
    };

    evtTarget.addEventListener('storage_change', listener);
    return () => evtTarget.removeEventListener('storage_change', listener);
  });

  return [value, updater];
};

export const useLocalStorage = useStorage(localStorage, process.env.REACT_APP_NAME);
export const useSessionStorage = useStorage(sessionStorage, process.env.REACT_APP_NAME);

export function useThemeMode() {
  const defaultMode = process.env.REACT_APP_NAME.includes('explorer') ? 'dark' : 'light';
  const [mode, setMode] = useLocalStorage('theme', defaultMode);
  return [mode, setMode];
}

export function useSwitcher() {
  const [open, setOpen] = useLocalStorage('switcher.open', false);
  const [current, setCurrent] = useLocalStorage('switcher.current', selectNetwork());
  return { open, setOpen, current, setCurrent };
}

export function useTokenInfo() {
  return useLocalStorage('token', {});
}

export function useNodeInfo() {
  return useLocalStorage('node', {});
}

export function useLiveUpdate() {
  return useLocalStorage('live_update', false);
}

export function useStartupInfo() {
  const [, setTokenInfo] = useTokenInfo();
  const [, setNodeInfo] = useNodeInfo();

  const state = useAsync(fetchInfo);
  if (state.value) {
    // HACK: we must add a timeout here
    setTimeout(() => {
      setTokenInfo(state.value.token);
      setNodeInfo(state.value.node);
    }, 0);
  }

  useInterval(async () => {
    try {
      const result = await fetchInfo();
      localStorage.setItem(`${process.env.REACT_APP_NAME}.token`, JSON.stringify(result.token));
      localStorage.setItem(`${process.env.REACT_APP_NAME}.node`, JSON.stringify(result.node));
    } catch (err) {
      // Do nothing
    }
  }, 5000);

  return state;
}
