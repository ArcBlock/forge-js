const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const shell = require('shelljs');
const GraphQLClient = require('@arcblock/graphql-client');
const { isDirectory, isFile, debug, webUrl } = require('core/env');
const { symbols, hr } = require('core/ui');
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

// get starter templates
const { stdout } = shell.exec('npm prefix -g', { silent: true });
const templatesDir = path.join(stdout.trim(), 'lib/node_modules');
const templates = fs
  .readdirSync(templatesDir)
  .filter(
    x =>
      /forge-[-a-zA-Z0-9_]+-starter/.test(x) &&
      isDirectory(path.join(templatesDir, x)) &&
      isFile(path.join(templatesDir, x, 'starter.config.js'))
  );
debug('project templates', templates);

const defaults = {
  template: templates[0],
  chainHost: `${webUrl()}/api`,
};
debug('application defaults', defaults);

const questions = [
  {
    type: 'autocomplete',
    name: 'template',
    message: 'Select a starter template:',
    default: defaults.template,
    source: (_, inp) => {
      const input = inp || '';
      return new Promise(resolve => {
        const result = fuzzy.filter(input, templates);
        resolve(result.map(item => item.original));
      });
    },
  },
  {
    type: 'text',
    name: 'chainHost',
    message: 'Running chain node graphql endpoint:',
    default: defaults.chainHost,
    validate: input => {
      if (!input) return 'Chain node endpoint should not be empty';
      return true;
    },
  },
];

function createDirectoryContents(fromPath, toPath, blackList) {
  const filesToCreate = fs.readdirSync(fromPath).filter(x => !blackList.includes(x));

  filesToCreate.forEach(file => {
    const origFilePath = `${fromPath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    const targetPath = `${toPath}/${file}`;

    if (stats.isFile()) {
      try {
        const contents = fs.readFileSync(origFilePath);
        fs.writeFileSync(targetPath, contents);
        shell.echo(`${symbols.success} created file ${targetPath}`);
      } catch (err) {
        shell.echo(`${symbols.error} error sync file ${targetPath}`);
        debug.error(err);
        process.exit(1);
      }
    } else if (stats.isDirectory()) {
      try {
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath);
        }
        createDirectoryContents(`${fromPath}/${file}`, `${toPath}/${file}`, blackList);
        shell.echo(`${symbols.success} created dir ${targetPath}`);
      } catch (err) {
        shell.echo(`${symbols.error} error sync file ${targetPath}`);
        debug.error(err);
        process.exit(1);
      }
    }
  });
}

async function main({ args: [_target], opts: { yes } }) {
  try {
    if (templates.length === 0) {
      shell.echo(`${symbols.error} No starter project templates found`);
      shell.echo(
        `${symbols.info} Run ${chalk.cyan(
          'npm install -g forge-react-starter'
        )} to install react-starter`
      );
      process.exit(1);
    }

    const target = _target.startsWith('/') ? _target : path.join(process.cwd(), _target);
    if (!target) {
      shell.echo(`${symbols.error} Please specify a folder for creating the new application`);
      shell.echo(`${symbols.info} You can try ${chalk.cyan('forge create-project hello-forge')}`);
      process.exit(1);
    }

    // Determine targetDir
    const targetDir = path.resolve(target);
    if (isDirectory(targetDir) && fs.readdirSync(targetDir).length > 0) {
      shell.echo(`${symbols.error} target folder ${target} already exist and not empty`);
      process.exit(1);
    }

    // Collecting starter config
    const { template, chainHost } = yes ? defaults : await inquirer.prompt(questions);
    const client = new GraphQLClient({ endpoint: chainHost });
    const { info } = await client.getChainInfo();
    const chainId = info.network;
    const starterDir = path.join(templatesDir, template);
    const starter = require(path.join(starterDir, './starter.config.js'));
    const config = { starterDir, targetDir, template, chainHost, chainId };
    if (yes || (Array.isArray(starter.questions) && starter.questions.length === 0)) {
      Object.assign(config, defaults, starter.defaults || {});
    } else {
      const answers = await inquirer.prompt(starter.questions);
      Object.assign(config, answers);
    }

    // Sync files
    shell.echo(`${symbols.info} application config`, config);
    shell.echo(`${symbols.info} project folder: ${targetDir}`);
    shell.echo(`${symbols.info} creating project files...`);
    shell.echo(hr);
    if (!fs.existsSync(targetDir)) {
      shell.mkdir(targetDir);
    }
    const blackList = [
      '.git',
      '.cache',
      '.vscode',
      '.netlify',
      '.next',
      'node_modules',
      'dist',
    ].concat(starter.backList || []);
    createDirectoryContents(starterDir, targetDir, blackList);
    shell.echo(hr);

    // Create configuration files, etc
    if (typeof starter.onConfigured === 'function') {
      await starter.onConfigured(Object.assign({ client, symbols }, config));
    }

    // Install dependencies, etc
    if (typeof starter.onCreated === 'function') {
      await starter.onCreated(Object.assign({ client, symbols }, config));
    }

    // Prompt getting started command
    shell.echo(`${symbols.success} application created successfully...`);
    if (typeof starter.onComplete === 'function') {
      await starter.onComplete(Object.assign({ client, symbols }, config));
    }
    shell.echo(hr);
  } catch (err) {
    console.error(err);
  }
}

exports.run = main;
exports.execute = main;
