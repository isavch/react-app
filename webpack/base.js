var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './js/main.js',
    vendors: [
      'axios',
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '/js/[name].[chunkhash].js',
    chunkFilename: '/js/[name].[chunkhash].js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMaps: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/images/[name].[ext]'
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]'
          }
        }],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve(__dirname, '../.eslintrc'),
              emitWarning: false,
              failOnWarning: false,
              failOnError: true
            }
          }
        ],
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ]
};
