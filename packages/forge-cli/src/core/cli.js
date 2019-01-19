/* eslint no-console:"off" */
const path = require('path');
const debug = require('debug');
const args = require('yargs').argv;
const { setupEnv } = require('./env');

if (args.verbose) {
  debug.enable('@arcblock/forge-cli');
}

const allCommands = [];

/**
 * create a cli
 *
 * @param {String} command command line
 * @param {String} desc documentation of the cli
 * @param {Function} handler cli handler
 */
function cli(command, desc, handler, { requirements = {}, options = [], alias } = {}) {
  allCommands.push({
    command,
    desc,
    handler,
    requirements,
    options,
    alias,
  });
}

/**
 * load the cli file
 * @param {String} file the js file to be required.
 */
function requireCli(file) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(file);
}

function initCli(program) {
  // this will mutate allCommands
  const allCli = path.join(__dirname, '../cli/index.js');
  requireCli(allCli);
  allCommands.forEach(x => {
    const command = program
      .command(x.command)
      .description(x.desc)
      .allowUnknownOption();

    if (x.alias) {
      command.alias(x.alias);
    }

    (x.options || []).forEach(x => command.option(...x));

    command.action(async (...params) => {
      await setupEnv(args, x.requirements);
      await x.handler({ args: params.filter(x => typeof x === 'string'), opts: command.opts() });
    });
  });
}

async function action(execute, run, input) {
  if (typeof input === 'string') {
    let data = null;
    try {
      data = JSON.parse(input);
    } catch (e) {
      console.error(`The input string is not a valid JSON object: ${input}`);
      return null;
    }

    if (data) return execute(data);
  }

  return run(input);
}

exports.initCli = initCli;
exports.cli = cli;
exports.action = action;
