var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config');

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
  nodeModules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  devTool: 'eval',
  entry: [
    //'webpack/hot/dev-server',
    //'webpack-dev-server/client?http://localhost:8080',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'app/index.jsx')
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'], // enable reference to JSX files without an extension
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
      title: 'React Playground',
      template: 'app/index.tpl.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
};
