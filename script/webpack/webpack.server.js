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

      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              onlyLocals: true,
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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  externals: [nodeExternals()],
};
