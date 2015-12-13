var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    path.resolve(__dirname, 'src/app.js')
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
      //css loader
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      //inline images
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Playground',
      template: 'src/index.tpl.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin('styles.css', { allChunks: true})
  ]
};
