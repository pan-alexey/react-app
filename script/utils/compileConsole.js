'use strict';

const chalk = require('chalk');
const ips = require('./ips');

const indent = '  ';

const clearConsole = () => {
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
}

const wasCompile = (compillers) => {
  for (const key in compillers) {
    if (!compillers[key]) return false
  }
  return true
}

const consoleCompillersStatus = (compillers) => {
  console.log();
  const compilersErrors = []
  for (const key in compillers) {
    const stats = compillers[key];
    if (!stats) {
      const chalkHandler = chalk.bgBlue.white;
      console.log(chalkHandler(`${key} compilling...`));
      continue;
    }

    let buildMsg = chalk.green.bold(`${key} build sucessfull`)
    if (stats.hasErrors()) {
      buildMsg = chalk.red.bold(`${key} build was error`);
    }
    console.log(buildMsg)

    const statsJson = stats.toJson();
    console.log(indent + `Compilation hash: ${statsJson.hash}`);
    console.log(indent + `Compilation time: ${statsJson.time}ms`);
    console.log('');

    statsJson.errors.forEach(err => {
      if (compilersErrors.indexOf(err)) {
        compilersErrors.push(err)
      }
    });
  }

  if (compilersErrors.length > 0) {
    console.log('')
    console.log(chalk.red.bold(`ERRORS:`));
    compilersErrors.forEach(errMsg => {
      console.log(errMsg)
    });
  }
}

module.exports = (options) => {
  clearConsole();

  const compillers = options.compillers;

  if (options.ready && options.serverPort) {
    console.log('Application was run:');
    console.log(indent + chalk.bold(`Local:   `) + `http://localhost:` + chalk.bold(options.serverPort));
    ips.forEach(ip => {
      console.log(indent + chalk.bold(`Network: `) + `http://${ip}:` + chalk.bold(options.serverPort));
    })
  }

  consoleCompillersStatus(compillers);
}
