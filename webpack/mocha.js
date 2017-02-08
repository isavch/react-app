var path = require('path');

module.exports = {
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.(svg|png|ttf)$/,
        loader: 'null'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, '../images'),
      styles: path.resolve(__dirname, '../styles'),
      fonts: path.resolve(__dirname, '../fonts')
    }
  }
};
