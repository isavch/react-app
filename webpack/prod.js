var base = require('./base');
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Object.assign(base, {
  bail: true,
  plugins: base.plugins.concat([
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../manifest.webmanifest'),
      to: path.resolve(__dirname, '../dist/manifest.webmanifest')
    }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : '/api')
    })
  ])
});
