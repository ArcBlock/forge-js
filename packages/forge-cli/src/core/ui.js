const ora = require('ora');
const util = require('util');
const inquirer = require('inquirer');
const symbols = require('log-symbols');

// https://github.com/sindresorhus/cli-spinners/blob/master/spinners.json
const spinners = [
  'dots',
  'dots2',
  'dots3',
  'dots4',
  'dots5',
  'dots6',
  'dots7',
  'dots8',
  'dots9',
  'dots10',
  'dots11',
  'dots12',
  'line',
  'line2',
  'pipe',
  'simpleDots',
  'simpleDotsScrolling',
  'star',
  'star2',
  'flip',
  'hamburger',
  'growVertical',
  'growHorizontal',
  'balloon',
  'balloon2',
  'noise',
  'bounce',
  'boxBounce',
  'boxBounce2',
  'triangle',
  'arc',
  'circle',
  'squareCorners',
  'circleQuarters',
  'circleHalves',
  'squish',
  'toggle',
  'toggle2',
  'toggle3',
  'toggle4',
  'toggle5',
  'toggle6',
  'toggle7',
  'toggle8',
  'toggle9',
  'toggle10',
  'toggle11',
  'toggle12',
  'toggle13',
  'arrow',
  'arrow2',
  'arrow3',
  'bouncingBar',
  'bouncingBall',
  'smiley',
  'monkey',
  'hearts',
  'clock',
  'earth',
  'moon',
  'runner',
  'pong',
  'shark',
  'dqpb',
  'weather',
  'christmas',
  'grenade',
  'point',
  'layer',
];

// TODO: getProgress bar

module.exports = {
  symbols,
  hr: new inquirer.Separator().line,
  pretty: (data, options) =>
    util.inspect(data, Object.assign({ depth: 8, colors: true, compact: false }, options)),
  getSpinner: opts => {
    const random = Math.floor(Math.random() * spinners.length);
    const spinner = ora(Object.assign({ spinner: spinners[random] }, opts || {}));
    return spinner;
  },
};
