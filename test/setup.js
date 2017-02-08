/* eslint-disable */
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

var hook = require('css-modules-require-hook');
var sass = require('node-sass');
var path = require('path');

hook({
  rootDir: path.join(__dirname, '../'),
  extensions: [ '.scss' ],
  generateScopedName: '[name]__[local]--[hash:base64:5]',
  preprocessCss: function (data, filename) {
    return sass.renderSync({
      data: data,
      file: filename,
      includePaths: [
        path.join(__dirname, './js/components'),
        path.join(__dirname, './node_modules')
      ]
    }).css
  }
});

require('babel-register')();

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
/** eslint-enable */
