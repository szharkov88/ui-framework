const { merge } = require('webpack-merge');

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const paths = require('../paths.js');

const prod = require('./prod');

module.exports = merge(prod, {
  plugins: [
    new AddAssetHtmlPlugin({ filepath: `${paths.public}/sw-reg.js` }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
