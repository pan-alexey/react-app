'use strict';

const paths = require('../utils/paths');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssLoader = require('./helpers/cssLoader');

const webpackConfig = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: [paths.resolve('./server/app.tsx')],
  resolve: {
    alias: {
      '~': paths.root,
      '~src': paths.src,
      '~server': paths.server,
    },
    extensions: ['.scss', '.js', 'jsx', '.ts', '.tsx', 'ejs'],
  },
  output: {
    libraryTarget: 'umd',
    path: paths.build,
    filename: 'server.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    splitChunks: {},
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
        use: ['babel-loader', { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } }],
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [cssLoader(true), 'sass-loader'],
      },
      {
        test: /\.ejs$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};

module.exports = (config) => {
  return webpack(Object.assign(webpackConfig, config || {}));
};
