const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.jpg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ],
  // Dev tools are provided by webpack
  // Source maps help map errors to original react code
  devtool: 'cheap-module-eval-source-map',

  // Configuration for webpack-dev-server
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    host: 'localhost', // Defaults to `localhost`
    port: 8080, // Defaults to 8080
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  }
};
