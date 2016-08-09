var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: __dirname + '/public/assets',
    filename: 'index.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_ENDPOINT': JSON.stringify('http://ec2-107-23-7-96.compute-1.amazonaws.com/api')
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
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
};
