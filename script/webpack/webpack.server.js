const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  node: false,
  output: {
    filename: 'index.js',
    libraryTarget: "commonjs2",
  },
  externals: {
    'react': 'React'
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  externals: [nodeExternals()],
};
