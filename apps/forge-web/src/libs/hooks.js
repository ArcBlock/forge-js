/* eslint import/prefer-default-export:"off" */
/* eslint react-hooks/rules-of-hooks:"off" */
import { useState, useEffect, useRef } from 'react';

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
const useStorage = storage => (key, defaultValue) => {
  const raw = storage.getItem(key);

  const [value, setValue] = useState(raw ? JSON.parse(raw) : defaultValue);

  const updater = updatedValue => {
    setValue(updatedValue);
    storage.setItem(key, JSON.stringify(updatedValue));
    evtTarget.dispatchEvent(new CustomEvent('storage_change', { detail: { key } }));
  };

  if (defaultValue != null && !raw) {
    updater(defaultValue);
  }

  useEffect(() => {
    const listener = ({ detail }) => {
      if (detail.key === key) {
        const lraw = storage.getItem(key);

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

export const useLocalStorage = useStorage(localStorage);
export const useSessionStorage = useStorage(sessionStorage);
