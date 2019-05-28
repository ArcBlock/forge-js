const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const yaml = require('yaml');
const { symbols, getSpinner } = require('core/ui');
const { debug, requiredDirs, isDirectory, isFile, DEFAULT_MIRROR } = require('core/env');
const { downloadAsset } = require('../../node/init/init');

// eslint-disable-next-line consistent-return
function fetchCompilerVersion(mirror = DEFAULT_MIRROR) {
  const spinner = getSpinner('Fetching forge-compiler release version...');
  spinner.start();

  try {
    const url = `${mirror}/forge-compiler/latest.json`;
    const { code, stdout, stderr } = shell.exec(`curl "${url}"`, { silent: true });
    // debug('fetchReleaseVersion', { code, stdout, stderr, url });
    if (code === 0) {
      const { latest: version } = JSON.parse(stdout.trim()) || {};
      spinner.succeed(`Latest forge compiler version: v${version}`);
      return version;
    }
    spinner.fail(`forge-compiler version fetch error: ${stderr}`);
  } catch (err) {
    spinner.fail(`forge-compiler version fetch error: ${err.message}`);
  }

  process.exit(1);
}

// eslint-disable-next-line consistent-return
function fetchCompilerInfo(version, mirror = DEFAULT_MIRROR) {
  const url = `${mirror}/forge-compiler/${version}/forge-compiler`;
  const spinner = getSpinner('Fetching forge compiler info...');
  spinner.start();

  try {
    const { code, stdout, stderr } = shell.exec(`curl -I --silent "${url}"`, { silent: true });
    debug('fetchAssetInfo', { url, version, code, stdout, stderr });
    if (code === 0 && stdout) {
      const notFound = stdout
        .split('\r\n')
        .find(x => x.indexOf('HTTP/1.1 404') === 0 || x.indexOf('HTTP/2 404') === 0);
      if (notFound) {
        spinner.fail(`forge-compiler binary "${url}" not found`);
        process.exit(1);
      }
      spinner.succeed('forge-compiler info fetch success');
      const header = stdout.split('\r\n').find(x => x.indexOf('Content-Length:') === 0);
      const size = header ? Number(header.split(':').pop().trim()) : 3 * 1024 * 1024; // prettier-ignore
      return { url, size, header, name: 'forge-compiler' };
    }
    spinner.fail(`forge-compiler info error: ${stderr}`);
  } catch (err) {
    spinner.fail(`forge-compiler info error: ${err.message}`);
  }

  process.exit(1);
}

async function ensureForgeCompiler() {
  const { stdout } = shell.which('forge-compiler') || {};
  if (stdout && fs.existsSync(stdout.trim())) {
    debug('using forge-compiler from', stdout.trim());
    return stdout.trim();
  }

  const targetPath = path.join(requiredDirs.bin, 'forge-compiler');
  if (isFile(targetPath)) {
    debug('using forge-compiler from', targetPath);
    return targetPath;
  }

  // Download forge-compiler binary
  const version = fetchCompilerVersion();
  const asset = fetchCompilerInfo(version);
  const compilerPath = await downloadAsset(asset);
  debug('download compiler to: ', compilerPath);
  shell.mv(compilerPath, targetPath);
  shell.exec(`chmod a+x ${targetPath}`);
  return targetPath;
}

// eslint-disable-next-line consistent-return
async function ensureJavascriptCompiler() {
  const { stdout: protoc } = shell.which('grpc_tools_node_protoc') || {};
  if (protoc && fs.existsSync(protoc.trim())) {
    debug('using protoc from', protoc.trim());

    const { stdout: pbjs } = shell.which('pbjs') || {};
    if (pbjs && fs.existsSync(pbjs.trim())) {
      debug('using pbjs from', pbjs.trim());
      return true;
    }

    shell.echo(
      `${symbols.error} protobufjs not installed, please install with ${chalk.cyan(
        'npm install -g protobufjs'
      )}`
    );
    process.exit(1);
  }

  shell.echo(
    `${symbols.error} grpc-tools not installed, please install with ${chalk.cyan(
      'npm install -g grpc-tools'
    )}`
  );
  process.exit(1);
}

async function compileElixir({ targetDir, config, configFile, outputPrefix }) {
  shell.echo(`${symbols.info} generating elixir language support:`);

  const compiler = await ensureForgeCompiler();
  const { name } = config;

  // 0. prepare compile dir
  const targetExDir = path.join(targetDir, name, 'elixir');
  shell.exec(`mkdir -p ${targetExDir}`);

  const { code, stdout, stderr } = shell.exec(`${compiler} ${configFile} ${targetExDir}`, {
    silent: true,
  });
  if (Number(code) === 0) {
    shell.echo(
      `${symbols.success} elixir itx generated: ${targetExDir.replace(
        outputPrefix,
        ''
      )}/${name}/${name}.itx.json`
    );
  } else {
    shell.echo(`${symbols.error} elixir generate failed: ${stderr || stdout}`);
  }
  shell.echo('');
}

async function compileJavascript({ sourceDir, targetDir, config, protoFile, outputPrefix }) {
  await ensureJavascriptCompiler();
  shell.echo(`${symbols.info} generating javascript language support:`);

  const { name, type_urls: typeUrls } = config;
  const targetJsDir = path.join(targetDir, name, 'javascript');
  shell.exec(`mkdir -p ${targetJsDir}`);

  shell.exec(
    // eslint-disable-next-line max-len
    `grpc_tools_node_protoc --proto_path=${sourceDir} --js_out=import_style=commonjs,binary:${targetJsDir} --plugin=protoc-gen-grpc=\`which grpc_tools_node_protoc_plugin\` ${protoFile}`
  );
  shell.echo(
    `${symbols.success} protobuf js generated: ${targetJsDir.replace(
      outputPrefix,
      ''
    )}/protocol_pb.js`
  );
  shell.exec(`pbjs -p ${sourceDir} -t json -o ${targetJsDir}/protocol_spec.json ${protoFile}`);
  shell.echo(
    `${symbols.success} json spec generated: ${targetJsDir.replace(
      outputPrefix,
      ''
    )}/protocol_spec.json`
  );

  // 3. generate type urls for javascript
  const results = Object.keys(typeUrls || {}).reduce((obj, url) => {
    const type = typeUrls[url].split('.').pop();
    obj[type] = url;
    return obj;
  }, {});
  fs.writeFileSync(`${targetJsDir}/protocol_url.json`, JSON.stringify(results));
  shell.echo(
    `${symbols.success} type urls json generated: ${targetJsDir.replace(
      outputPrefix,
      ''
    )}/protocol_url.json`
  );

  // 4. generate javascript entry file
  fs.writeFileSync(
    `${targetJsDir}/index.js`,
    `// Generated by forge-cli
const provider = require('@arcblock/forge-proto/provider');
const { addProvider } = require('@arcblock/forge-message');
// const { addProvider } = require('@arcblock/forge-message/lite');
const types = require('./protocol_pb.js');
const specs = require('./protocol_spec.json');
const urls = require('./protocol_url.json');

addProvider(provider({ types }, specs, urls));

module.exports = { types, specs, urls };
`
  );
  shell.echo(
    `${symbols.success} javascript entry file generated: ${targetJsDir.replace(
      outputPrefix,
      ''
    )}/index.js`
  );
  shell.echo('');
}

async function main({ args: [dir], opts: { targets = 'elixir,javascript' } }) {
  try {
    const sourceDir = path.resolve(dir);
    const outputDir = process.cwd();
    const outputPrefix = `${outputDir}/`;
    if (!isDirectory(sourceDir)) {
      shell.echo(`${symbols.error} tx protocol source folder ${sourceDir} not exists`);
      process.exit(1);
    }

    const configFile = path.join(sourceDir, 'config.yml');
    if (!isFile(configFile)) {
      shell.echo(`${symbols.error} tx protocol config file ${configFile} not exists`);
      process.exit(1);
    }

    const config = yaml.parse(fs.readFileSync(configFile).toString());
    const { name, version, proto } = config;
    const protoFile = path.join(sourceDir, proto);
    shell.echo(`${symbols.info} protocol meta: ${JSON.stringify({ name, version })}`);
    shell.echo('');

    // 0. prepare compile dir
    const targetDir = path.join(outputDir, '.compiled');
    shell.exec(`rm -rf ${targetDir}`, { silent: true });
    shell.exec(`mkdir ${targetDir}`);

    // 1. detect language
    const supportedLangs = ['elixir', 'javascript'];
    const targetLangs = targets
      .split(',')
      .map(x => x.trim())
      .filter(x => supportedLangs.includes(x));

    const params = { sourceDir, targetDir, config, configFile, protoFile, outputPrefix };

    // 2. compile elixir
    if (targetLangs.includes('elixir')) {
      await compileElixir(params);
    }

    // 3. compile javascript
    if (targetLangs.includes('javascript')) {
      await compileJavascript(params);
    }
  } catch (err) {
    debug.error(err);
    shell.echo(`${symbols.error} transaction protocol compile failed`);
  }
}

exports.run = main;
exports.execute = main;
