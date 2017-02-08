var base = require('./base');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = Object.assign(base, {
  module: {
    noParse: base.module.noParse,
    loaders: base.module.loaders.concat({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]!sass?sourceMap')
    })
  },
  plugins: base.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}, output: {comments: false}}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : '/api')
    }),
    new ExtractTextPlugin("/styles/main.css")
  ])
});
