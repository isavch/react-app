var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './js/main.js',
    vendors: [
      'babel-polyfill',
      'react',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
      'react-dom',
      'lodash'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '/js/[name].js',
    chunkFilename: '/js/[name].js'
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc'),
    emitWarning: false,
    failOnWarning: false,
    failOnError: true
  },
  module: {
    noParse: /jspdf/,
    loaders: [
      {
        test: /\.(jpg|gif|png|svg)$/,
        loader: 'file?name=/img/[name].[ext]',
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|woff2)$/,
        loader: 'file?name=/fonts/[name].[ext]'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      services: path.resolve(__dirname, '../js/services'),
      actions: path.resolve(__dirname, '../js/actions'),
      constants: path.resolve(__dirname, '../js/constants'),
      components: path.resolve(__dirname, '../js/components'),
      images: path.resolve(__dirname, '../images'),
      styles: path.resolve(__dirname, '../styles'),
      fonts: path.resolve(__dirname, '../fonts')
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', '/js/vendors.js'),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../images'),
      to: path.resolve(__dirname, '../dist/images')
    }])
  ]
};
