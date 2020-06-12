'use strict';
process.env.NODE_ENV = 'production';

const paths = require('./utils/paths');

const webpackCompliller = {};

const webpackServer = require('./webpack/webpack.server');
webpackCompliller['server'] = webpackServer({
  entry: [paths.resolve('./server/index.ts')],
});

const webpackClinet = require('./webpack/webpack.client');
webpackCompliller['client'] = webpackClinet({
  entry: [paths.resolve('./src/index.tsx')],
});

(async function () {
  webpackCompliller['client'].run();
  webpackCompliller['server'].run();
})();
