const prefix = process.env.REACT_APP_NAME;

export default {
  setItem(key, value) {
    return localStorage.setItem(`${prefix}.${key}`, value);
  },
  getItem(key, defaultValue) {
    return localStorage.getItem(`${prefix}.${key}`) || defaultValue;
  },
};