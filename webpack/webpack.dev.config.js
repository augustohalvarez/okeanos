var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(__dirname, '../client/index.js')
	],
  module: {
		loaders: [
      {
			  test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'] // <--- here
        }
			},
      {
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
}
