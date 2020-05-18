const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const __ROOT_PATH__ = process.cwd();
const __CLIENT_PATH__ = path.join(__ROOT_PATH__, '.cache', 'client');

module.exports = {
  mode: 'development',

  entry: ['./src/index.tsx'],
  // output: {
  //   path: __CLIENT_PATH__
  // },
  devServer: {
    contentBase: __CLIENT_PATH__,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    inline: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
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
            loader: 'css-loader',
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

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
}