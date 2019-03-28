/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const WheelReact = {};

WheelReact.pauseWheelEvent = false;

WheelReact._config = {};

WheelReact.config = config => {
  const options = ['right', 'left', 'up', 'down'];
  for (const option of options) {
    if (config.hasOwnProperty(option)) {
      WheelReact._config[option] = config[option];
    }
  }
};

WheelReact.events = {
  onWheel: e => {
    if (WheelReact.pauseWheelEvent) {
      return;
    }
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0 && WheelReact._config.hasOwnProperty('left')) {
        WheelReact._config.left();
      } else if (e.deltaX < 0 && WheelReact._config.hasOwnProperty('right')) {
        WheelReact._config.right();
      }
    } else if (e.deltaY > 0 && WheelReact._config.hasOwnProperty('up')) {
      WheelReact._config.up();
    } else if (e.deltaY < 0 && WheelReact._config.hasOwnProperty('down')) {
      WheelReact._config.down();
    }
    WheelReact.pauseWheelEvent = true;
    WheelReact.timeout = setTimeout(() => {
      WheelReact.pauseWheelEvent = false;
    }, 200);
  },
};

WheelReact.clearTimeout = () => {
  if (WheelReact.timeout) {
    clearTimeout(WheelReact.timeout);
  }
};

export default WheelReact;
