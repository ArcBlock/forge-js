const ip = require('ip');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const fuzzy = require('fuzzy');
const inquirer = require('inquirer');
const shell = require('shelljs');
const camelcase = require('camelcase');
const execSync = require('child_process').execSync;
const GraphQLClient = require('@arcblock/graphql-client');
const { types } = require('@arcblock/mcrypto');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');
const { isDirectory, debug, webUrl } = require('core/env');
const { symbols, hr } = require('core/ui');

const templatesDir = path.resolve(__dirname, '../../../../templates');
const templates = fs.readdirSync(templatesDir).filter(x => isDirectory(path.join(templatesDir, x)));

debug('templates', templates);

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const defaults = {
  template: templates[0],
  appName: 'Forge Starter',
  appPort: 3030,
  chainHost: `${webUrl()}/api`,
  mongoUri: 'mongodb://127.0.0.1:27017/forge-starter',
};

const questions = [
  {
    type: 'autocomplete',
    name: 'template',
    message: 'Select a project template:',
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
    name: 'appName',
    message: 'Project name:',
    default: defaults.appName,
    validate: input => {
      if (!input) return 'Project name should not be empty';
      return true;
    },
  },
  {
    type: 'text',
    name: 'appPort',
    message: 'Project listening port:',
    default: defaults.appPort,
    validate: input => {
      if (!input) return 'Project listening port should not be empty';
      return true;
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
  {
    type: 'text',
    name: 'mongoUri',
    message: 'Mongodb URI:',
    default: defaults.mongoUri,
    validate: input => {
      if (!input) return 'Mongodb connection string:';
      return true;
    },
  },
];

const backList = ['.git', 'yarn.lock'];
function createDirectoryContents(fromPath, toPath) {
  const filesToCreate = fs.readdirSync(fromPath).filter(x => !backList.includes(x));

  filesToCreate.forEach(file => {
    const origFilePath = `${fromPath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    const targetPath = `${toPath}/${file}`;

    if (stats.isFile()) {
      try {
        const contents = fs.readFileSync(origFilePath, 'utf8');
        fs.writeFileSync(targetPath, contents, 'utf8');
        shell.echo(`${symbols.success} created file ${targetPath}`);
      } catch (err) {
        shell.echo(`${symbols.error} error sync file ${targetPath}`);
        debug.error(err);
        process.exit(1);
      }
    } else if (stats.isDirectory()) {
      try {
        fs.mkdirSync(targetPath);
        createDirectoryContents(`${fromPath}/${file}`, `${toPath}/${file}`);
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
    const target = _target.startsWith('/') ? _target : path.join(process.cwd(), _target);
    if (!target) {
      shell.echo(`${symbols.error} Please specify a folder for creating the new project`);
      shell.echo(`${symbols.info} You can try ${chalk.cyan('forge create-project hello-forge')}`);
      process.exit(1);
    }

    const targetDir = path.resolve(target);
    if (isDirectory(targetDir) && fs.readdirSync(targetDir).length > 0) {
      shell.echo(`${symbols.error} target folder ${target} already exist and not empty`);
      process.exit(1);
    }

    // Collecting
    const { template, appName, appPort, mongoUri, chainHost } = yes
      ? defaults
      : await inquirer.prompt(questions);
    const templateDir = path.join(templatesDir, template);

    const ipAddress = ip.address();
    shell.echo(`${symbols.info} project config`, {
      appName,
      appPort,
      targetDir,
      ipAddress,
      mongoUri,
      chainHost,
    });
    shell.echo(`${symbols.info} project folder: ${targetDir}`);
    shell.echo(`${symbols.info} creating project files...`);
    shell.echo(hr);

    // Sync files
    shell.mkdir(targetDir);
    createDirectoryContents(templateDir, targetDir);
    shell.echo(hr);

    // Run npm install
    const pm = shell.which('yarn') ? 'yarn' : 'npm';
    shell.echo(`${symbols.info} installing dependencies...`);
    // execSync(`cd ${targetDir} && ${pm} install`, { stdio: [0, 1, 2] });
    shell.echo(hr);

    // Get chainId
    const client = new GraphQLClient({ endpoint: chainHost });
    const { info } = await client.getChainInfo();
    const chainId = info.moniker;
    shell.echo(`${symbols.info} project chainId: ${chainId}`);

    // Declare application on chain
    const wallet = fromRandom(
      WalletType({
        role: types.RoleType.ROLE_APPLICATION,
        pk: types.KeyType.ED25519,
        hash: types.HashType.SHA3,
      })
    );
    debug('application wallet', wallet.toJSON());
    const hash = await client.sendDeclareTx({
      tx: {
        chainId,
        itx: {
          moniker: camelcase(appName),
        },
      },
      wallet,
    });
    debug('application declare tx', hash);
    shell.echo(`${symbols.success} application account declared on chain: ${wallet.toAddress()}`);

    // Generate config
    const configPath = path.join(`${targetDir}`, '.env');
    const configContent = `MONGO_URI="${mongoUri}"
COOKIE_SECRET="${wallet.publicKey}"
CHAIN_ID="${chainId}"
CHAIN_HOST="${chainHost.replace('127.0.0.1', ipAddress).replace('localhost', ipAddress)}"
APP_NAME="${appName}"
APP_PORT="${appPort}"
APP_SK="${wallet.secretKey}"
APP_ID="${wallet.toAddress()}"
BASE_URL="http://${ipAddress}:${appPort}"`;
    fs.writeFileSync(configPath, configContent);
    shell.echo(`${symbols.success} config generated ${configPath}`);

    // Prompt cd and start
    shell.echo(`${symbols.success} project created successfully...`);
    shell.echo(hr);
    shell.echo(chalk.cyan(`cd ${targetDir}`));
    shell.echo(chalk.cyan(`${pm} start`));
    shell.echo(hr);
  } catch (err) {
    console.error(err);
  }
}

exports.run = main;
exports.execute = main;
