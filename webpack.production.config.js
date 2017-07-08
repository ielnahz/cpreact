/* globals module require __dirname */

var webpack = require('webpack');

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
