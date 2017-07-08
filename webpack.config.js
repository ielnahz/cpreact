/* globals module require __dirname */

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    publicPath: '/dist/',
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style!css',
        exclude: /node_modules/
      },
      {
        test: /\.(?:jpg|gif|png|svg)$/,
        loader: 'url-loader?limit=100000',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions:['','.js','.jsx']
  }
};