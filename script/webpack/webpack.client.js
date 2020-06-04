const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const production = false;
const __ROOT_PATH__ = process.cwd();
const __CLIENT_PATH__ = path.join(__ROOT_PATH__, '.cache', 'client');

const plugins = []

if (!production) {
  plugins.push(new webpack.EnvironmentPlugin({
    NODE_ENV: 'development',
  }))
} else {
  plugin.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
  }))
}

module.exports = {
  mode: 'development',
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: production ? MiniCssExtractPlugin.loader : 'css-loader',
            options: {
              modules: {
                auto: /\.module\.\w+$/i,
                mode: 'local',
                exportGlobals: true,
                localIdentName: '[local]-[hash:base64:5]', // 
                hashPrefix: 'my-custom-hash',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.scss', '.js', 'jsx', '.ts', '.tsx'],
  },
  plugins
}