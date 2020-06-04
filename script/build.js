const path = require('path');
const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');

const __ROOT_PATH__ = process.cwd();
const __SERVER_PATH__ = path.join(__ROOT_PATH__, '.cache',);
const __CLIENT_PATH__ = path.join(__ROOT_PATH__, '.cache', 'client');

const webpackConfig = {}

webpackConfig['server'] = require('./webpack/webpack.server');
webpackConfig['server'].entry = path.join(__ROOT_PATH__, './server/server.tsx');
webpackConfig['server'].output.path = __SERVER_PATH__;
webpackConfig['server'].mode = 'development';

webpackConfig['client'] = require('./webpack/webpack.client');
webpackConfig['client'].entry = path.join(__ROOT_PATH__, './src/index.tsx');
webpackConfig['client'].output.path = __CLIENT_PATH__;
webpackConfig['client'].mode = 'development';

const webpackComplier = {};
webpackComplier['server'] = webpack(webpackConfig['server']);
webpackComplier['client'] = webpack(webpackConfig['client']);

const serverEntry = path.resolve(__SERVER_PATH__, 'index.js');

(async function () {
  webpackComplier['client']
  .run((err, stats) => { 

    process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
    console.log(stats.toString({
      assets: false,
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
      colors: true,
      entrypoints: false
    }));
  });
})()


/*
Для сервера создаем временную директорию, 
Компилируем туда сервер
Запускаем сервер
Удаляем временную директорию
*/