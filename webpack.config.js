var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    devTool: 'eval',
    contentBase: 'build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true
      //'errors-only'
    },
    host: config.host,
    port: config.port,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
