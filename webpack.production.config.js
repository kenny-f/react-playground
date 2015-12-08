var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
	entry: path.resolve(__dirname, 'app/index.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,

			// There is not need to run the loader through vendors
			exclude: [node_modules_dir],
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};

module.exports = config;