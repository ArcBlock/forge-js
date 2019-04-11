const prefix = process.env.REACT_APP_NAME;

export default {
  set(key, value) {
    return localStorage.setItem(`${prefix}.${key}`, value);
  },
  get(key, defaultValue) {
    return localStorage.getItem(`${prefix}.${key}`) || defaultValue;
  },
};
