'use strict';

const paths = require('../utils/paths');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssLoader = require('./helpers/cssLoader');

const isProduction = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isProduction ? 'production' : 'development',
  entry: [paths.resolve('./src/index.tsx')],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '~src': paths.src,
      '~server': paths.server,
    },
    extensions: ['.scss', '.js', 'jsx', '.ts', '.tsx'],
  },
  output: {
    path: paths.dist,
    filename: 'index.js',
    chunkFilename: 'js/[name].[contenthash:8].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          cssLoader(false),
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = module.exports = (config) => {
  return webpack(Object.assign(webpackConfig, config || {}));
};
