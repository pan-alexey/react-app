'use strict';

const path = require('path');
const fs = require('fs');

const rootPath = fs.realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(rootPath, relativePath);

module.exports = {
  resolve,
  src: resolve('./src'),
  server: resolve('./server'),
  build: resolve('./build'),
  dist: resolve('./dist'),
};
