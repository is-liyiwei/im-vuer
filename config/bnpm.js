'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  assetsPublicPath: './',
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: '',
  productionSourceMap: false,
  devtool: '#source-map',
  productionGzip: true,
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: false
}
