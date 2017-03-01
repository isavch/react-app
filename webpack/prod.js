var base = require('./base');
var webpack = require('webpack');

module.exports = Object.assign(base, {
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : '/api')
    })
  ])
});
