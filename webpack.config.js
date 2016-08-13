var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'whatwg-fetch',
    'webpack-dev-server/client?http://0.0.0.0:4000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_ENDPOINT': JSON.stringify('http://localhost:3000/api')
      }
    })
  ],
  devServer: {
    publicPath: '/assets/',
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    noInfo: true,
    port: 4000
  },
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
