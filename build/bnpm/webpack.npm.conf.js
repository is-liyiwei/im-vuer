'use strict'
const path = require('path')
const utils = require('../utils')
const webpack = require('webpack')
const bnpm = require('../../config/bnpm')
const merge = require('webpack-merge')
const bnpmWebpackConfig = require('./webpack.base-npm.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../../config/prod.env')

const webpackConfig = merge(bnpmWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: bnpm.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: bnpm.productionSourceMap ? bnpm.devtool : false,
  output: {
    path: bnpm.assetsRoot,
    publicPath: '/',
    filename: 'im-vuer.js',
    library: 'im-vuer',
    libraryTarget: 'umd'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: bnpm.productionSourceMap,
      parallel: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({

      filename: utils.assetsPath('../im-vuer.css'), // 添加自己的名字

      allChunks: true,
    }),

  ]
})

if (bnpm.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        bnpm.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (bnpm.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
