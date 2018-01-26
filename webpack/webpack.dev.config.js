var webpack = require('webpack');
var path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(__dirname, '../client/index.js'),
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081'
	],
  module: {
		loaders: [
      {
			  test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
			},
      {
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
  },
  output: {
    publicPath: "http://localhost:8081/assets/",
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: 'localhost',
    port: 8080,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:3000/api/',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new TransferWebpackPlugin([
      {from:'www'},
    ], path.resolve(__dirname, '../')),
  ],
   // This fixes: 'Source map error: request failed with status 404'
};
