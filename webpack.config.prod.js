var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'production';
var API_ENDPOINT = process.env.API_ENDPOINT || 'http://ec2-107-23-7-96.compute-1.amazonaws.com/api';
var DEBUG = NODE_ENV !== 'production';

module.exports = {
  devtool: 'eval',
  entry: [
    'whatwg-fetch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
        'API_ENDPOINT': JSON.stringify(API_ENDPOINT)
      }
    })
  ],
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.css$/,
        loader: DEBUG ? 'style!css' : ExtractTextPlugin.extract('css')
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
};
