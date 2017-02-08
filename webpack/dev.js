var path = require('path');
var base = require('./base');
var webpack = require('webpack');

module.exports = Object.assign(base, {
  module: {
    noParse: base.module.noParse,
    loaders: base.module.loaders.concat({
        test: /\.scss$/,
        loader: 'style!css?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]!sass?sourceMap'
    })
  },
  devServer: {
    port: 9000,
    inline: true,
    outputPath: path.resolve(__dirname, '../dist'),
    historyApiFallback: true
  },
  plugins: base.plugins.concat(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : 'http://172.25.21.31:8025')
    })
  )
});
