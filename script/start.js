'use strict';

const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('./utils/paths');
const requireUncached = require('./utils/requireUncached');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const webpackClinet = require('./webpack/webpack.client');
const webpackServer = require('./webpack/webpack.server');

const WebpackHooks = require('./utils/compileHooks');
const webpackCompliller = {};

const serverEntry = paths.resolve('./.cache/server.js');
webpackCompliller['server'] = webpackServer({
  output: {
    libraryTarget: 'umd',
    path: path.parse(serverEntry).dir,
    filename: path.parse(serverEntry).base,
  },
});

webpackCompliller['client'] = webpackClinet();

(async function () {
  WebpackHooks.regiserCompiller('client', webpackCompliller['client']);
  WebpackHooks.regiserCompiller('server', webpackCompliller['server']);

  let serverMiddleware = null;
  webpackCompliller['server'].watch(
    {
      aggregateTimeout: 300,
      poll: undefined,
    },
    (err, stats) => {
      if (!(err || stats.hasErrors())) {
        serverMiddleware = requireUncached(serverEntry).default;
      }
    },
  );

  new WebpackDevServer(webpackCompliller['client'], {
    hot: true,
    historyApiFallback: true,
    noInfo: true,
    stats: 'none',
    onListening: function (server) {
      WebpackHooks.regiserPort(server.listeningApp.address().port);
    },
    after: (app) => {
      app.use((req, res, next) => {
        serverMiddleware(req, res, next);
      });
    },
  }).listen(DEFAULT_PORT, HOST, (err) => {
    if (err) console.error(err);
  });
})();
