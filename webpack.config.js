var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  devTool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.jsx')
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'], // enable reference to JSX files without an extension
  },
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true,
      errorsOnly: true,
    },
    host: config.host,
    port: config.port,
  },
  module: {
    loaders: [
      //babel loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Playground'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
