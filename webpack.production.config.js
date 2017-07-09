/* globals module require __dirname */

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('main.css'),
    new HTMLWebpackPlugin({
      title: '彩票系统',
      template: './index.html'
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        exclude: /node_modules/
      },
      {
        test: /\.(?:jpg|gif|png|svg)$/,
        loader: 'url-loader?limit=100000',
        exclude: /node_modules/
      }
    ],
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ loader: 'css-loader' }) }
    ]
  },
  resolve: {
    extensions:['','.js','.jsx']
  }
};
