'use strict';

const isProduction = process.env.NODE_ENV === 'production';

const cssLoaders = (isServer) => {
  return {
    loader: 'css-loader',
    options: {
      onlyLocals: Boolean(isServer),
      modules: {
        auto: /\.module\.\w+$/i,
        exportGlobals: true,
        localIdentName: isProduction ? '[hash:base64:6]' : '[local]__[hash:base64:6]',
        hashPrefix: 'react',
      }
    }
  }
};

module.exports = cssLoaders