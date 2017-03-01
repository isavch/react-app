var path = require('path');
var base = require('./base');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = Object.assign(base, {
  output: {
    path: '/',
    filename: '/js/[name].[hash].js',
    chunkFilename: '/js/[name].[hash].js'
  },
  module: {
    rules: base.module.rules.concat()
  },
  devServer: {
    port: 9000,
    compress: true,
    historyApiFallback: true
  },
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : 'http://172.25.21.31:8088/api/')
    })
  ])
});
