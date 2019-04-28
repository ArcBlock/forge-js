const STATUS_WARNING = 1;
const STATUS_ERROR = 2;

const getLayerColor = (status, theme) => {
  if (status === STATUS_WARNING) {
    return theme.colors.yellow;
  }

  if (status === STATUS_ERROR) {
    return theme.colors.red;
  }

  return theme.colors.green;
};

export default getLayerColor;
