'use strict';

const paths = require('../utils/paths');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const cssLoader = require('./helpers/cssLoader');

const webpackConfig = {
  mode: "development",
  target: 'node',
  externals: [
    nodeExternals()
  ],
  entry: [
    paths.resolve('./server/app.tsx')
  ],
  resolve: {
    alias: {
      '~src': paths.src,
      '~server': paths.server
    },
    extensions: ['.scss', '.js', 'jsx', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'umd',
    path: paths.build,
    filename: 'server.js'
  },
  plugins: [],
  optimization: {
    splitChunks: {
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader',
          { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } }
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [
          cssLoader(true),
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|otf|svg|png)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader'
      }
    ],
  },
};

module.exports = (config) => {
  return webpack(Object.assign(webpackConfig, config || {}));
};
